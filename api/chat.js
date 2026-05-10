export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(500).json({ error: 'AI is not configured yet. Contact the app owner.' });

  const { messages, systemPrompt } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body.' });
  }

  try {
    const response = await fetch(
      `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${key}`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemInstruction: { parts: [{ text: systemPrompt }] },
          contents: messages,
          generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
        }),
      }
    );

    const data = await response.json();

    if (!response.ok) {
      if (response.status === 429)
        return res.status(429).json({ error: 'Daily AI limit reached (1,500 questions). Resets tomorrow — try again then.' });
      if (response.status === 403)
        return res.status(403).json({ error: 'Server API key is invalid. Contact the app owner.' });
      return res.status(response.status).json({ error: data.error?.message || 'AI API error.' });
    }

    const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
    if (!text) return res.status(500).json({ error: 'No response from AI. Please try again.' });

    return res.status(200).json({ text });
  } catch (err) {
    return res.status(500).json({ error: 'Server error: ' + err.message });
  }
}
