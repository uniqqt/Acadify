import { useTheme } from '../../context/ThemeContext';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function QuizQuestion({ question, selected, onSelect, showAnswer }) {
  const { theme } = useTheme();

  const getOptionStyle = (idx) => {
    if (!showAnswer) {
      return selected === idx
        ? { backgroundColor: theme.primary + '20', border: `2px solid ${theme.primary}`, color: theme.text }
        : { backgroundColor: theme.surface, border: `1.5px solid ${theme.border}`, color: theme.text };
    }
    if (idx === question.correct) {
      return { backgroundColor: '#f0fdf4', border: '2px solid #22c55e', color: '#15803d' };
    }
    if (selected === idx && idx !== question.correct) {
      return { backgroundColor: '#fef2f2', border: '2px solid #ef4444', color: '#dc2626' };
    }
    return { backgroundColor: theme.surfaceAlt, border: `1.5px solid ${theme.border}`, color: theme.textMuted };
  };

  return (
    <div>
      <p className="font-semibold text-base leading-relaxed mb-5" style={{ color: theme.text }}>
        {question.question}
      </p>

      <div className="space-y-2.5">
        {question.options.map((opt, idx) => {
          const isCorrect = idx === question.correct;
          const isSelected = selected === idx;
          return (
            <button
              key={idx}
              onClick={() => !showAnswer && onSelect(idx)}
              disabled={showAnswer}
              className="w-full text-left px-4 py-3 rounded-xl text-sm font-medium flex items-center gap-3"
              style={{
                ...getOptionStyle(idx),
                cursor: showAnswer ? 'default' : 'pointer',
                transition: 'background-color 150ms ease, border-color 150ms ease, transform 100ms cubic-bezier(0.23,1,0.32,1)',
              }}
              onMouseEnter={(e) => {
                if (!showAnswer && selected !== idx) {
                  e.currentTarget.style.backgroundColor = theme.surfaceAlt;
                }
              }}
              onMouseLeave={(e) => {
                if (!showAnswer && selected !== idx) {
                  e.currentTarget.style.backgroundColor = theme.surface;
                }
              }}
              onMouseDown={(e) => { if (!showAnswer) e.currentTarget.style.transform = 'scale(0.98)'; }}
              onMouseUp={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
            >
              <span
                className="w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold shrink-0"
                style={{
                  backgroundColor: showAnswer && isCorrect ? '#22c55e' : showAnswer && isSelected ? '#ef4444' : theme.badgeBg,
                  color: showAnswer && (isCorrect || isSelected) ? 'white' : theme.badgeText,
                  transition: 'background-color 150ms ease',
                }}
              >
                {String.fromCharCode(65 + idx)}
              </span>
              <span className="flex-1">{opt}</span>
              {showAnswer && isCorrect && <CheckCircle2 size={18} style={{ color: '#22c55e', flexShrink: 0 }} />}
              {showAnswer && isSelected && !isCorrect && <XCircle size={18} style={{ color: '#ef4444', flexShrink: 0 }} />}
            </button>
          );
        })}
      </div>

      {/* Explanation */}
      {showAnswer && (
        <div
          className="mt-4 p-4 rounded-xl text-sm leading-relaxed animate-fade-in"
          style={{
            backgroundColor: selected === question.correct ? '#f0fdf4' : '#fef2f2',
            border: `1px solid ${selected === question.correct ? '#86efac' : '#fca5a5'}`,
            color: selected === question.correct ? '#166534' : '#991b1b',
          }}
        >
          <p className="font-bold mb-1">
            {selected === question.correct ? 'Correct' : 'Incorrect'}
          </p>
          <p>{question.explanation}</p>
        </div>
      )}
    </div>
  );
}
