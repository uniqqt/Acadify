import { useState, useEffect, useRef } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Bell, Menu, X, AlertTriangle, Clock, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';
import { getTasks, getSeenNotifs, markNotifsSeenBatch } from '../../utils/storage';
import { URGENT_DAYS } from '../../constants';
import { differenceInCalendarDays } from 'date-fns';
import AIAsk from '../AIAsk/AIAsk';

const TITLES = {
  '/dashboard': 'Dashboard',
  '/tasks': 'Task Manager',
  '/study': 'Study Materials',
  '/quiz': 'Practice Quiz',
};

function buildNotifs(tasks) {
  const now = new Date();
  const notifs = [];
  tasks.filter((t) => !t.completed).forEach((t) => {
    const dl = new Date(t.deadline);
    const days = differenceInCalendarDays(dl, now);
    if (days < 0) {
      notifs.push({ id: `ov-${t.id}`, type: 'overdue', task: t, days, label: `Overdue by ${Math.abs(days)}d` });
    } else if (days <= URGENT_DAYS) {
      notifs.push({ id: `ur-${t.id}`, type: 'urgent', task: t, days, label: days === 0 ? 'Due today' : `Due in ${days}d` });
    }
  });
  return notifs.sort((a, b) => a.days - b.days);
}

export default function TopBar({ onMenuClick }) {
  const { user } = useAuth();
  const { theme } = useTheme();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [notifs, setNotifs] = useState([]);
  const [seen, setSeen] = useState([]);
  const panelRef = useRef(null);

  const title = TITLES[location.pathname] ||
    (location.pathname.startsWith('/study/') ? 'Study Detail' : location.pathname.startsWith('/quiz/') ? 'Quiz Session' : 'Acadify');

  useEffect(() => {
    if (!user?.id) return;
    getTasks(user.id).then((tasks) => {
      setNotifs(buildNotifs(tasks));
      setSeen(getSeenNotifs(user.id));
    });
  }, [user, location.pathname]);

  useEffect(() => {
    const handle = (e) => {
      if (panelRef.current && !panelRef.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener('mousedown', handle);
    return () => document.removeEventListener('mousedown', handle);
  }, []);

  const unseen = notifs.filter((n) => !seen.includes(n.id));
  const badgeCount = unseen.length;

  const handleOpen = () => {
    setOpen((v) => !v);
    if (!open && user) {
      const ids = notifs.map((n) => n.id);
      markNotifsSeenBatch(user.id, ids);
      setSeen(ids);
    }
  };

  const iconColor = (type) => type === 'overdue' ? '#dc2626' : '#d97706';
  const Icon = (type) => type === 'overdue' ? AlertTriangle : Clock;

  return (
    <header
      className="flex items-center justify-between px-4 md:px-6 h-14 shrink-0 sticky top-0 z-30"
      style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}
    >
      {/* Left: hamburger (mobile) + title */}
      <div className="flex items-center gap-3">
        <button
          className="md:hidden p-2 rounded-lg transition-colors"
          style={{ color: theme.textMuted }}
          onClick={onMenuClick}
        >
          <Menu size={20} />
        </button>
        <h1 className="font-semibold text-base" style={{ color: theme.text }}>
          {title}
        </h1>
      </div>

      {/* Right: AI Ask + notifications + avatar */}
      <div className="flex items-center gap-1" ref={panelRef}>
        <AIAsk />
        <div className="relative">
          <button
            onClick={handleOpen}
            className="relative p-2 rounded-xl transition-colors"
            style={{ color: theme.textMuted, backgroundColor: open ? theme.surfaceAlt : 'transparent' }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
            onMouseLeave={(e) => { if (!open) e.currentTarget.style.backgroundColor = 'transparent'; }}
            title="Notifications"
          >
            <Bell size={20} />
            {badgeCount > 0 && (
              <span className="absolute top-1 right-1 w-4 h-4 rounded-full text-white text-xs flex items-center justify-center font-bold"
                style={{ backgroundColor: '#dc2626', fontSize: '9px' }}>
                {badgeCount > 9 ? '9+' : badgeCount}
              </span>
            )}
          </button>

          {open && (
            <div
              className="absolute right-0 top-full mt-2 w-80 rounded-2xl shadow-2xl overflow-hidden z-50 drop-in"
              style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
            >
              <div className="px-4 py-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${theme.border}` }}>
                <span className="font-semibold text-sm" style={{ color: theme.text }}>Notifications</span>
                <button onClick={() => setOpen(false)} style={{ color: theme.textMuted }}>
                  <X size={16} />
                </button>
              </div>
              <div className="max-h-72 overflow-y-auto">
                {notifs.length === 0 ? (
                  <div className="px-4 py-8 text-center">
                    <CheckCircle2 size={32} className="mx-auto mb-2" style={{ color: '#16a34a' }} />
                    <p className="text-sm font-medium" style={{ color: theme.text }}>All caught up!</p>
                    <p className="text-xs mt-1" style={{ color: theme.textMuted }}>No urgent or overdue tasks.</p>
                  </div>
                ) : (
                  notifs.map((n) => {
                    const NIcon = Icon(n.type);
                    return (
                      <Link
                        to="/tasks"
                        key={n.id}
                        onClick={() => setOpen(false)}
                        className="flex items-start gap-3 px-4 py-3 transition-colors block"
                        style={{ borderBottom: `1px solid ${theme.border}` }}
                        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
                        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
                      >
                        <NIcon size={16} style={{ color: iconColor(n.type), marginTop: 2, flexShrink: 0 }} />
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium truncate" style={{ color: theme.text }}>{n.task.title}</p>
                          <p className="text-xs mt-0.5" style={{ color: iconColor(n.type) }}>
                            {n.label} · {n.task.category}
                          </p>
                        </div>
                      </Link>
                    );
                  })
                )}
              </div>
              {notifs.length > 0 && (
                <div className="px-4 py-2" style={{ borderTop: `1px solid ${theme.border}` }}>
                  <Link to="/tasks" onClick={() => setOpen(false)}
                    className="text-xs font-medium" style={{ color: theme.primary }}>
                    View all tasks →
                  </Link>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Avatar */}
        <div
          className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold shrink-0"
          style={{ backgroundColor: theme.primary, color: theme.primaryText }}
          title={user?.name}
        >
          {user?.avatar || user?.name?.charAt(0)?.toUpperCase() || 'U'}
        </div>
      </div>
    </header>
  );
}
