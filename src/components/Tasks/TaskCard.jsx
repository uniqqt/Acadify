import { format, differenceInCalendarDays, isPast } from 'date-fns';
import { Edit2, Trash2, CheckCircle, Circle, Calendar, Tag, Clock } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { URGENT_DAYS, UPCOMING_DAYS } from '../../constants';

function getStatus(task) {
  if (task.completed) return 'completed';
  const dl = new Date(task.deadline);
  if (isPast(dl)) return 'overdue';
  const days = differenceInCalendarDays(dl, new Date());
  if (days <= URGENT_DAYS) return 'urgent';
  if (days <= UPCOMING_DAYS) return 'upcoming';
  return 'normal';
}

const STATUS_STYLES = {
  overdue: { border: '#dc2626', badge: '#fef2f2', badgeText: '#dc2626', label: 'Overdue' },
  urgent:  { border: '#f97316', badge: '#fff7ed', badgeText: '#ea580c', label: 'Urgent' },
  upcoming:{ border: '#eab308', badge: '#fefce8', badgeText: '#ca8a04', label: 'Upcoming' },
  completed:{ border: '#22c55e', badge: '#f0fdf4', badgeText: '#16a34a', label: 'Completed' },
  normal:  { border: null, badge: null, badgeText: null, label: null },
};

export default function TaskCard({ task, onEdit, onDelete, onToggle }) {
  const { theme } = useTheme();
  const status = getStatus(task);
  const ss = STATUS_STYLES[status];
  const dl = new Date(task.deadline);
  const daysLeft = differenceInCalendarDays(dl, new Date());

  return (
    <div
      className="rounded-2xl p-4 hover-card"
      style={{
        backgroundColor: theme.surface,
        border: `1.5px solid ${ss.border || theme.border}`,
        opacity: task.completed ? 0.72 : 1,
      }}
    >
      <div className="flex items-start gap-3">
        {/* Toggle complete */}
        <button
          onClick={() => onToggle(task)}
          className="mt-0.5 shrink-0 btn-press"
          style={{ color: task.completed ? '#22c55e' : theme.textMuted, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1), color 150ms ease' }}
        >
          {task.completed ? <CheckCircle size={20} /> : <Circle size={20} />}
        </button>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-start justify-between gap-2">
            <h3
              className="font-semibold text-sm leading-snug"
              style={{
                color: theme.text,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.title}
            </h3>
            <div className="flex items-center gap-1 shrink-0">
              <button
                onClick={() => onEdit(task)}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: theme.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                title="Edit"
              >
                <Edit2 size={14} />
              </button>
              <button
                onClick={() => onDelete(task.id)}
                className="p-1.5 rounded-lg transition-colors"
                style={{ color: theme.textMuted }}
                onMouseEnter={(e) => (e.currentTarget.style.color = '#dc2626', e.currentTarget.style.backgroundColor = '#fef2f2')}
                onMouseLeave={(e) => (e.currentTarget.style.color = theme.textMuted, e.currentTarget.style.backgroundColor = 'transparent')}
                title="Delete"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>

          {task.description && (
            <p className="text-xs mt-1 line-clamp-2" style={{ color: theme.textMuted }}>
              {task.description}
            </p>
          )}

          <div className="flex flex-wrap items-center gap-2 mt-2">
            {/* Category */}
            <span
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium"
              style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
            >
              <Tag size={10} />
              {task.category}
            </span>

            {/* Deadline */}
            <span
              className="inline-flex items-center gap-1 text-xs"
              style={{ color: ss.border || theme.textMuted }}
            >
              <Calendar size={11} />
              {format(dl, 'MMM d, yyyy')}
            </span>

            {/* Time */}
            <span
              className="inline-flex items-center gap-1 text-xs"
              style={{ color: theme.textMuted }}
            >
              <Clock size={11} />
              {format(dl, 'h:mm a')}
            </span>

            {/* Status badge */}
            {ss.label && (
              <span
                className="inline-flex items-center text-xs px-2 py-0.5 rounded-full font-semibold ml-auto"
                style={{ backgroundColor: ss.badge, color: ss.badgeText }}
              >
                {status === 'overdue' ? `Overdue ${Math.abs(daysLeft)}d` :
                  status === 'urgent' ? (daysLeft === 0 ? 'Due today' : `${daysLeft}d left`) :
                  status === 'upcoming' ? `${daysLeft}d left` :
                  ss.label}
              </span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
