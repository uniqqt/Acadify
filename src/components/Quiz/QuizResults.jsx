import { useTheme } from '../../context/ThemeContext';
import { Trophy, Star, BookOpen as BookIcon, Lightbulb, RotateCcw, BookOpen, CheckCircle2, XCircle, Minus } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function QuizResults({ score, total, lawId, lawTitle, answers, questions, onRetry }) {
  const { theme } = useTheme();
  const pct = Math.round((score / total) * 100);

  const grade = pct >= 90 ? { label: 'Excellent!', color: '#16a34a', Icon: Trophy }
    : pct >= 75 ? { label: 'Good Job!', color: '#2563eb', Icon: Star }
    : pct >= 50 ? { label: 'Keep Practicing', color: '#d97706', Icon: BookIcon }
    : { label: 'Needs Review', color: '#dc2626', Icon: Lightbulb };

  const scoreBarColor = pct >= 75 ? '#22c55e' : pct >= 50 ? '#eab308' : '#ef4444';

  return (
    <div className="space-y-6">
      {/* Score card */}
      <div
        className="rounded-2xl p-6 text-center animate-fade-in"
        style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}` }}
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-3" style={{ backgroundColor: grade.color + '18' }}>
          <grade.Icon size={28} style={{ color: grade.color }} />
        </div>
        <h2 className="text-2xl font-bold mb-1" style={{ color: grade.color }}>
          {grade.label}
        </h2>
        <p className="text-sm mb-5" style={{ color: theme.textMuted }}>{lawTitle}</p>

        {/* Score display */}
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-5xl font-black" style={{ color: theme.text }}>{score}</span>
          <span className="text-2xl font-semibold" style={{ color: theme.textMuted }}>/ {total}</span>
        </div>
        <p className="font-bold text-lg mb-4" style={{ color: grade.color }}>{pct}%</p>

        {/* Progress bar */}
        <div className="h-3 rounded-full overflow-hidden mx-auto max-w-xs" style={{ backgroundColor: theme.border }}>
          <div
            className="h-full rounded-full animate-progress"
            style={{ width: `${pct}%`, backgroundColor: scoreBarColor }}
          />
        </div>

        {/* Stats row */}
        <div className="flex justify-center gap-6 mt-5">
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <CheckCircle2 size={16} style={{ color: '#22c55e' }} />
              <span className="font-bold text-lg" style={{ color: '#22c55e' }}>{score}</span>
            </div>
            <p className="text-xs" style={{ color: theme.textMuted }}>Correct</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <XCircle size={16} style={{ color: '#ef4444' }} />
              <span className="font-bold text-lg" style={{ color: '#ef4444' }}>{total - score}</span>
            </div>
            <p className="text-xs" style={{ color: theme.textMuted }}>Incorrect</p>
          </div>
          <div className="text-center">
            <div className="flex items-center gap-1 justify-center">
              <Minus size={16} style={{ color: theme.textMuted }} />
              <span className="font-bold text-lg" style={{ color: theme.textMuted }}>
                {total - answers.filter(a => a.selected !== null).length}
              </span>
            </div>
            <p className="text-xs" style={{ color: theme.textMuted }}>Skipped</p>
          </div>
        </div>
      </div>

      {/* Question breakdown */}
      <div>
        <h3 className="font-bold text-sm mb-3 uppercase tracking-wide" style={{ color: theme.textMuted }}>
          Question Review
        </h3>
        <div className="space-y-2">
          {questions.map((q, i) => {
            const a = answers[i];
            const correct = a?.selected === q.correct;
            const skipped = a?.selected === null || a?.selected === undefined;
            return (
              <div
                key={q.id}
                className="rounded-xl px-4 py-3 flex items-start gap-3 animate-fade-in"
                style={{
                  backgroundColor: theme.surface,
                  border: `1px solid ${correct ? '#86efac' : skipped ? theme.border : '#fca5a5'}`,
                  animationDelay: `${i * 30}ms`,
                }}
              >
                <div className="shrink-0 mt-0.5">
                  {correct ? <CheckCircle2 size={16} style={{ color: '#22c55e' }} /> :
                   skipped ? <Minus size={16} style={{ color: theme.textMuted }} /> :
                   <XCircle size={16} style={{ color: '#ef4444' }} />}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium" style={{ color: theme.text }}>
                    Q{i + 1}. {q.question}
                  </p>
                  {!correct && !skipped && (
                    <p className="text-xs mt-1 flex items-center gap-1" style={{ color: '#16a34a' }}>
                      <CheckCircle2 size={11} /> {q.options[q.correct]}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onRetry}
          className="btn-press flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
        >
          <RotateCcw size={16} />
          Try Again
        </button>
        <Link
          to={`/study/${lawId}`}
          className="btn-press flex-1 flex items-center justify-center gap-2 py-3 rounded-xl font-semibold text-sm"
          style={{ backgroundColor: theme.surfaceAlt, color: theme.text, border: `1px solid ${theme.border}`, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
        >
          <BookOpen size={16} />
          Review Material
        </Link>
      </div>
    </div>
  );
}
