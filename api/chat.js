export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const key = process.env.GEMINI_API_KEY;
  if (!key) return res.status(500).json({ error: 'AI is not configured. Contact the app owner.' });

  const { messages, systemPrompt } = req.body;
  if (!messages || !Array.isArray(messages)) {
    return res.status(400).json({ error: 'Invalid request body.' });
  }

  // Prepend system prompt as the first user/model exchange
  const contents = [
    { role: 'user', parts: [{ text: systemPrompt || 'You are a helpful academic tutor.' }] },
    { role: 'model', parts: [{ text: 'Understood. I am ready to help.' }] },
    ...messages,
  ];

  const models = [
    'gemini-2.0-flash',
    'gemini-2.0-flash-lite',
    'gemini-1.5-flash',
    'gemini-1.5-flash-8b',
  ];

  let lastError = '';

  for (const model of models) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${key}`,
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            contents,
            generationConfig: { maxOutputTokens: 1024, temperature: 0.7 },
          }),
        }
      );

      const data = await response.json();

      if (response.status === 404) {
        console.error(`Model ${model} not found:`, JSON.stringify(data));
        lastError = `Model ${model} not found`;
        continue;
      }

      if (!response.ok) {
        const geminiMsg = data.error?.message || '';
        console.error(`Model ${model} error ${response.status}:`, geminiMsg);
        if (response.status === 429)
          return res.status(429).json({ error: 'AI is busy — wait a few seconds and try again.' });
        if (response.status === 400) {
          lastError = geminiMsg;
          continue;
        }
        if (response.status === 403)
          return res.status(403).json({ error: 'Gemini API key is invalid or the Generative Language API is not enabled. Go to console.cloud.google.com → APIs & Services → enable "Generative Language API", then redeploy.' });
        lastError = geminiMsg || `HTTP ${response.status}`;
        continue;
      }

      const text = data.candidates?.[0]?.content?.parts?.[0]?.text;
      if (!text) return res.status(500).json({ error: 'No response from AI. Please try again.' });

      return res.status(200).json({ text });
    } catch (err) {
      console.error(`Model ${model} network error:`, err.message);
      lastError = err.message;
      continue;
    }
  }

  return res.status(500).json({ error: `AI unavailable. Last error: ${lastError}. Ensure the Generative Language API is enabled at console.cloud.google.com and GEMINI_API_KEY is set in Vercel.` });
}
