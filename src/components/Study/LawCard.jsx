import { Link } from 'react-router-dom';
import { BookOpen, CheckCircle, ArrowRight } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import TopicIcon from '../TopicIcon';

export default function LawCard({ law, progress }) {
  const { theme } = useTheme();
  const totalSections = law.chapters.reduce((sum, ch) => sum + ch.sections.length, 0);
  const readSections = progress?.sections?.length || 0;
  const pct = totalSections > 0 ? Math.round((readSections / totalSections) * 100) : 0;
  const isViewed = progress?.viewed;

  return (
    <Link
      to={`/study/${law.id}`}
      className="block rounded-2xl p-5 group"
      style={{
        backgroundColor: theme.surface,
        border: `1.5px solid ${theme.border}`,
        transition: 'transform 200ms cubic-bezier(0.23,1,0.32,1), border-color 180ms ease, box-shadow 200ms cubic-bezier(0.23,1,0.32,1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = theme.primary;
        e.currentTarget.style.transform = 'translateY(-4px)';
        e.currentTarget.style.boxShadow = `0 20px 48px -8px ${theme.primary}38`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = theme.border;
        e.currentTarget.style.transform = 'translateY(0)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      {/* Icon + completed badge */}
      <div className="flex items-start justify-between mb-3">
        <div
          className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
          style={{ backgroundColor: law.color.light, border: `1px solid ${law.color.badge}33` }}
        >
          <TopicIcon name={law.icon} size={22} color={law.color.dark} />
        </div>
        {pct === 100 && (
          <CheckCircle size={18} style={{ color: '#16a34a' }} />
        )}
        {pct > 0 && pct < 100 && (
          <span className="text-xs font-bold" style={{ color: theme.primary }}>{pct}%</span>
        )}
      </div>

      {/* Title */}
      <h3 className="font-bold text-sm leading-tight mb-1" style={{ color: theme.text }}>
        {law.title}
      </h3>
      <p className="text-xs mb-3 line-clamp-2" style={{ color: theme.textMuted }}>
        {law.description}
      </p>

      {/* Meta row */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span
            className="text-xs px-2 py-0.5 rounded-full font-medium"
            style={{ backgroundColor: law.color.light, color: law.color.dark }}
          >
            {law.category}
          </span>
          <span className="flex items-center gap-1 text-xs" style={{ color: theme.textMuted }}>
            <BookOpen size={11} />
            {totalSections} sections
          </span>
        </div>
        <ArrowRight
          size={16}
          style={{ color: theme.primary, transition: 'transform 180ms cubic-bezier(0.23,1,0.32,1)' }}
          className="group-hover:translate-x-1"
        />
      </div>

      {/* Progress bar */}
      {isViewed && (
        <div className="mt-3">
          <div className="h-1.5 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
            <div
              className="h-full rounded-full animate-progress"
              style={{
                width: `${pct}%`,
                backgroundColor: pct === 100 ? '#22c55e' : theme.primary,
              }}
            />
          </div>
          <p className="text-xs mt-1" style={{ color: theme.textMuted }}>
            {readSections}/{totalSections} sections read
          </p>
        </div>
      )}
    </Link>
  );
}
