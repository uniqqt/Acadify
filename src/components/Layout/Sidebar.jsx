import { NavLink, useNavigate } from 'react-router-dom';
import { LayoutDashboard, CheckSquare, BookOpen, Brain, LogOut, GraduationCap, ChevronRight } from 'lucide-react';
import { useAuth } from '../../context/AuthContext';
import { useTheme } from '../../context/ThemeContext';

const NAV_ITEMS = [
  { to: '/dashboard', icon: LayoutDashboard, label: 'Dashboard' },
  { to: '/tasks', icon: CheckSquare, label: 'Tasks' },
  { to: '/study', icon: BookOpen, label: 'Study Materials' },
  { to: '/quiz', icon: Brain, label: 'Practice Quiz' },
];

const COURSE_LABELS = {
  law: 'Law',
  nursing: 'Nursing',
  engineering: 'Engineering',
  'social-work': 'Social Work',
};

export default function Sidebar({ onClose }) {
  const { user, logout } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  const courseLabel = user
    ? COURSE_LABELS[user.course] || (user.course ? user.course.charAt(0).toUpperCase() + user.course.slice(1) : 'Student')
    : 'Student';

  return (
    <aside
      className="flex flex-col h-full w-64 shrink-0"
      style={{ backgroundColor: theme.sidebarBg, borderRight: `1px solid ${theme.border}` }}
    >
      {/* Logo */}
      <div className="flex items-center gap-3 px-5 py-5" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div
          className="rounded-xl overflow-hidden shrink-0"
          style={{ width: 36, height: 36, boxShadow: '0 2px 8px rgba(0,0,0,0.14)' }}
        >
          <img
            src="/logo.png"
            alt=""
            style={{
              display: 'block',
              width: '100%',
              height: 'auto',
              transform: 'scale(1.65)',
              transformOrigin: '50% 0%',
            }}
          />
        </div>
        <div>
          <div className="font-bold text-sm leading-tight" style={{ color: theme.sidebarText }}>
            Acadify
          </div>
          <div className="text-xs" style={{ color: theme.textMuted }}>
            {courseLabel}
          </div>
        </div>
      </div>

      {/* User Profile */}
      <div className="px-4 py-4" style={{ borderBottom: `1px solid ${theme.border}` }}>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0"
            style={{ backgroundColor: theme.primary, color: theme.primaryText }}
          >
            {user?.avatar || user?.name?.charAt(0)?.toUpperCase() || 'U'}
          </div>
          <div className="min-w-0">
            <div className="font-semibold text-sm truncate" style={{ color: theme.sidebarText }}>
              {user?.name || 'Student'}
            </div>
            <span
              className="inline-flex items-center gap-1 text-xs px-2 py-0.5 rounded-full font-medium mt-0.5"
              style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}
            >
              <GraduationCap size={10} />
              {courseLabel}
            </span>
          </div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
        {NAV_ITEMS.map(({ to, icon: Icon, label }) => (
          <NavLink
            key={to}
            to={to}
            onClick={onClose}
            className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium group"
            style={({ isActive }) => ({
              backgroundColor: isActive ? theme.sidebarActive : 'transparent',
              color: isActive ? theme.sidebarActiveText : theme.sidebarText,
              transition: 'background-color 150ms ease, color 150ms ease',
            })}
            onMouseEnter={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
              if (!isActive) e.currentTarget.style.backgroundColor = theme.sidebarHover;
            }}
            onMouseLeave={(e) => {
              const isActive = e.currentTarget.getAttribute('aria-current') === 'page';
              if (!isActive) e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            <Icon size={18} />
            <span className="flex-1">{label}</span>
            <ChevronRight size={14} className="opacity-0 group-hover:opacity-50 transition-opacity" />
          </NavLink>
        ))}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4" style={{ borderTop: `1px solid ${theme.border}` }}>
        <button
          onClick={handleLogout}
          className="btn-press flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium w-full"
          style={{ color: theme.textMuted, transition: 'background-color 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          onMouseEnter={(e) => { e.currentTarget.style.backgroundColor = theme.sidebarHover; }}
          onMouseLeave={(e) => { e.currentTarget.style.backgroundColor = 'transparent'; }}
        >
          <LogOut size={18} />
          <span>Log Out</span>
        </button>
      </div>
    </aside>
  );
}
