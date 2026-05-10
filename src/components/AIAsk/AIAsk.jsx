import { useState, useRef, useEffect } from 'react';
import { Sparkles, X, Send, Bot, Trash2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { getTopicsForCourse } from '../../data/courseData';

const SUGGESTIONS = {
  law: [
    'What is the Bill of Rights?',
    'Explain the Regalian Doctrine',
    'What are the elements of a felony under the RPC?',
  ],
  nursing: [
    'What is the nursing process?',
    'Explain fluid and electrolyte imbalance',
    'What are common antihypertensive drugs?',
  ],
  engineering: [
    "Explain Newton's Second Law of Motion",
    "What is Bernoulli's principle?",
    'How do you calculate beam deflection?',
  ],
  'social-work': [
    'What is the biopsychosocial model?',
    'Explain the social work code of ethics',
    'What is community organization practice?',
  ],
};

function getSuggestions(course) {
  return SUGGESTIONS[course] || SUGGESTIONS.law;
}

export default function AIAsk() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const messagesEndRef = useRef(null);
  const inputRef = useRef(null);
  const panelRef = useRef(null);

  const topics = getTopicsForCourse(user?.course);
  const courseName = user?.course
    ? user.course.charAt(0).toUpperCase() + user.course.slice(1).replace('-', ' ')
    : 'General';
  const topicList = topics.map((t) => t.shortTitle || t.title).join(', ');

  const systemPrompt = `You are a focused academic tutor for ${courseName} students in the Philippines studying for board exams.
Topics covered in this course: ${topicList}.
Rules:
- Be concise and accurate. Keep replies under 250 words unless asked to elaborate.
- Use numbered lists or bullets when explaining steps or multiple items.
- If a question is outside the student's course, briefly answer and redirect.
- Do not use markdown headings (#). Use bold (**text**) sparingly.`;

  useEffect(() => {
    if (open) setTimeout(() => inputRef.current?.focus(), 150);
  }, [open]);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, loading]);

  useEffect(() => {
    const handle = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) {
        const btn = document.getElementById('ai-ask-btn');
        if (!btn?.contains(e.target)) setOpen(false);
      }
    };
    if (open) document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, [open]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = { role: 'user', content: input.trim() };
    const history = [...messages, userMsg];
    setMessages(history);
    setInput('');
    setLoading(true);

    try {
      const geminiMessages = history.map((m) => ({
        role: m.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: m.content }],
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ messages: geminiMessages, systemPrompt }),
      });

      const data = await res.json();
      if (!res.ok) throw new Error(data.error || `Error ${res.status}`);

      setMessages([...history, { role: 'assistant', content: data.text }]);
    } catch (err) {
      setMessages([
        ...history,
        { role: 'assistant', content: `⚠️ ${err.message}` },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) { e.preventDefault(); handleSend(); }
  };

  return (
    <>
      {/* Trigger */}
      <button
        id="ai-ask-btn"
        onClick={() => setOpen((v) => !v)}
        className="btn-press relative p-2 rounded-xl"
        style={{
          color: open ? theme.primary : theme.textMuted,
          backgroundColor: open ? theme.primary + '18' : 'transparent',
          transition: 'background-color 150ms ease, color 150ms ease, transform 120ms var(--ease-out)',
        }}
        onMouseEnter={(e) => { if (!open) e.currentTarget.style.backgroundColor = theme.surfaceAlt; }}
        onMouseLeave={(e) => { if (!open) e.currentTarget.style.backgroundColor = 'transparent'; }}
        title="Ask AI Tutor"
      >
        <Sparkles size={20} />
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          className="fixed right-0 top-0 h-full z-50 flex flex-col slide-in-right"
          style={{
            width: 'min(380px, 100vw)',
            backgroundColor: theme.surface,
            borderLeft: `1px solid ${theme.border}`,
            boxShadow: '-12px 0 48px rgba(0,0,0,0.14)',
          }}
        >
          {/* Header */}
          <div
            className="flex items-center justify-between px-4 py-3 shrink-0"
            style={{ borderBottom: `1px solid ${theme.border}` }}
          >
            <div className="flex items-center gap-2.5">
              <div
                className="w-7 h-7 rounded-lg flex items-center justify-center"
                style={{ backgroundColor: theme.primary + '1a' }}
              >
                <Sparkles size={14} style={{ color: theme.primary }} />
              </div>
              <span className="font-semibold text-sm" style={{ color: theme.text }}>
                AI Tutor
              </span>
              <span
                className="text-xs px-2 py-0.5 rounded-full font-medium"
                style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
              >
                {courseName}
              </span>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button
                  onClick={() => setMessages([])}
                  className="p-1.5 rounded-lg"
                  style={{ color: theme.textMuted }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                  title="Clear chat"
                >
                  <Trash2 size={14} />
                </button>
              )}
              <button
                onClick={() => setOpen(false)}
                className="p-1.5 rounded-lg"
                style={{ color: theme.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              >
                <X size={16} />
              </button>
            </div>
          </div>

          {/* Messages area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 ? (
              <div className="text-center pt-8">
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3"
                  style={{ backgroundColor: theme.primary + '1a' }}
                >
                  <Bot size={26} style={{ color: theme.primary }} />
                </div>
                <p className="text-sm font-semibold" style={{ color: theme.text }}>
                  Ask anything
                </p>
                <p className="text-xs mt-1 mb-5" style={{ color: theme.textMuted }}>
                  Your AI tutor for {courseName} board exam prep
                </p>

                {/* Info */}
                <div
                  className="text-left rounded-xl p-3 mb-4"
                  style={{ backgroundColor: theme.surfaceAlt, border: `1px solid ${theme.border}` }}
                >
                  <p className="text-xs font-semibold mb-1.5" style={{ color: theme.text }}>How it works</p>
                  <ul className="space-y-1">
                    {[
                      'Free to use — powered by Google Gemini',
                      'Up to 1,500 questions per day, resets daily',
                      'Answers are focused on your course topics',
                      'Chat history clears when you close the panel',
                    ].map((line, i) => (
                      <li key={i} className="flex gap-1.5 text-xs" style={{ color: theme.textMuted }}>
                        <span style={{ color: theme.primary, flexShrink: 0 }}>·</span>
                        {line}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="space-y-2 text-left">
                  {getSuggestions(user?.course).map((q, i) => (
                    <button
                      key={i}
                      onClick={() => { setInput(q); inputRef.current?.focus(); }}
                      className="w-full text-left px-3 py-2.5 rounded-xl text-xs animate-fade-in"
                      style={{
                        backgroundColor: theme.surfaceAlt,
                        color: theme.textMuted,
                        border: `1px solid ${theme.border}`,
                        animationDelay: `${i * 60}ms`,
                        transition: 'background-color 150ms ease, border-color 150ms ease',
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = theme.border;
                        e.currentTarget.style.borderColor = theme.primary;
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = theme.surfaceAlt;
                        e.currentTarget.style.borderColor = theme.border;
                      }}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            ) : (
              messages.map((m, i) => (
                <div
                  key={i}
                  className={`flex gap-2 animate-fade-in ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {m.role === 'assistant' && (
                    <div
                      className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-1"
                      style={{ backgroundColor: theme.primary + '1a' }}
                    >
                      <Sparkles size={11} style={{ color: theme.primary }} />
                    </div>
                  )}
                  <div
                    className="max-w-[82%] px-3.5 py-2.5 text-xs leading-relaxed whitespace-pre-wrap"
                    style={
                      m.role === 'user'
                        ? { backgroundColor: theme.primary, color: theme.primaryText, borderRadius: '16px 16px 4px 16px' }
                        : { backgroundColor: theme.surfaceAlt, color: theme.text, border: `1px solid ${theme.border}`, borderRadius: '16px 16px 16px 4px' }
                    }
                  >
                    {m.content}
                  </div>
                </div>
              ))
            )}

            {loading && (
              <div className="flex gap-2 justify-start animate-fade-in">
                <div
                  className="w-6 h-6 rounded-lg flex items-center justify-center shrink-0 mt-1"
                  style={{ backgroundColor: theme.primary + '1a' }}
                >
                  <Sparkles size={11} style={{ color: theme.primary }} />
                </div>
                <div
                  className="px-4 py-3.5"
                  style={{ backgroundColor: theme.surfaceAlt, border: `1px solid ${theme.border}`, borderRadius: '16px 16px 16px 4px' }}
                >
                  <div className="flex gap-1.5 items-center">
                    <div className="ai-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }} />
                    <div className="ai-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }} />
                    <div className="ai-dot w-1.5 h-1.5 rounded-full" style={{ backgroundColor: theme.primary }} />
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="px-4 py-3 shrink-0" style={{ borderTop: `1px solid ${theme.border}` }}>
            <div className="flex gap-2 items-end">
              <textarea
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask a study question…"
                rows={1}
                className="flex-1 rounded-xl px-3 py-2.5 text-sm resize-none"
                style={{
                  backgroundColor: theme.surfaceAlt,
                  border: `1px solid ${theme.border}`,
                  color: theme.text,
                  outline: 'none',
                  maxHeight: '96px',
                  lineHeight: '1.5',
                }}
                onFocus={(e) => (e.target.style.borderColor = theme.primary)}
                onBlur={(e) => (e.target.style.borderColor = theme.border)}
              />
              <button
                onClick={handleSend}
                disabled={!input.trim() || loading}
                className="btn-press w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                style={{
                  backgroundColor: input.trim() && !loading ? theme.primary : theme.surfaceAlt,
                  color: input.trim() && !loading ? theme.primaryText : theme.textMuted,
                  transition: 'background-color 150ms ease, transform 120ms var(--ease-out)',
                }}
              >
                <Send size={15} />
              </button>
            </div>
            <p className="text-xs mt-2 text-center" style={{ color: theme.textMuted }}>
              Enter to send · Shift+Enter for new line
            </p>
          </div>
        </div>
      )}
    </>
  );
}
