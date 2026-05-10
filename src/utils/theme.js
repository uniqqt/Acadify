import { SPECIAL_USER_EMAIL } from '../constants';

// ── Theme Definitions ─────────────────────────────────────────────────────────
export const THEMES = {
  law: {
    id: 'law',
    name: 'Law',
    isDark: false,
    gradient: 'linear-gradient(160deg, #c9a15a 0%, #dfc08a 20%, #f0e0c0 55%, #faf6ef 80%, #ffffff 100%)',
    bg: '#faf6ef',
    surface: '#ffffff',
    surfaceAlt: '#fdf8f3',
    border: '#e8d5b0',
    text: '#2d1f0e',
    textMuted: '#7a5c34',
    primary: '#8b5e3c',
    primaryHover: '#6b4423',
    primaryText: '#ffffff',
    sidebarBg: '#f5ede0',
    sidebarText: '#3d2b12',
    sidebarActive: '#8b5e3c',
    sidebarActiveText: '#ffffff',
    sidebarHover: '#ebd9c0',
    badgeBg: '#e8d5b0',
    badgeText: '#5a3a00',
    inputBg: '#fdf8f3',
    accent: '#c9a15a',
  },
  nursing: {
    id: 'nursing',
    name: 'Nursing',
    isDark: false,
    gradient: 'linear-gradient(160deg, #60a5fa 0%, #93c5fd 20%, #bfdbfe 55%, #e0f0ff 80%, #ffffff 100%)',
    bg: '#f0f7ff',
    surface: '#ffffff',
    surfaceAlt: '#f5f9ff',
    border: '#bfdbfe',
    text: '#1e3a5f',
    textMuted: '#3b72b5',
    primary: '#1d4ed8',
    primaryHover: '#1e40af',
    primaryText: '#ffffff',
    sidebarBg: '#dbeafe',
    sidebarText: '#1e3a5f',
    sidebarActive: '#1d4ed8',
    sidebarActiveText: '#ffffff',
    sidebarHover: '#c8dcff',
    badgeBg: '#bfdbfe',
    badgeText: '#1e3a5f',
    inputBg: '#f5f9ff',
    accent: '#60a5fa',
  },
  engineering: {
    id: 'engineering',
    name: 'Engineering',
    isDark: true,
    gradient: 'linear-gradient(160deg, #7f1d1d 0%, #450a0a 35%, #1c0000 65%, #0a0a0a 100%)',
    bg: '#0d0d0d',
    surface: '#1a1a1a',
    surfaceAlt: '#141414',
    border: '#3d0000',
    text: '#f0f0f0',
    textMuted: '#a0a0a0',
    primary: '#dc2626',
    primaryHover: '#b91c1c',
    primaryText: '#ffffff',
    sidebarBg: '#130000',
    sidebarText: '#f0f0f0',
    sidebarActive: '#7f1d1d',
    sidebarActiveText: '#fca5a5',
    sidebarHover: '#2a0000',
    badgeBg: '#7f1d1d',
    badgeText: '#fca5a5',
    inputBg: '#1f1f1f',
    accent: '#dc2626',
  },
  'pink-law': {
    id: 'pink-law',
    name: 'Special',
    isDark: false,
    gradient: 'linear-gradient(160deg, #f472b6 0%, #fbcfe8 25%, #fce7f3 55%, #fdf4fb 80%, #ffffff 100%)',
    bg: '#fdf2f8',
    surface: '#ffffff',
    surfaceAlt: '#fef6fb',
    border: '#fbcfe8',
    text: '#500724',
    textMuted: '#9d174d',
    primary: '#db2777',
    primaryHover: '#be185d',
    primaryText: '#ffffff',
    sidebarBg: '#fce7f3',
    sidebarText: '#500724',
    sidebarActive: '#db2777',
    sidebarActiveText: '#ffffff',
    sidebarHover: '#fbd5e8',
    badgeBg: '#fbcfe8',
    badgeText: '#831843',
    inputBg: '#fef6fb',
    accent: '#f472b6',
  },
  'social-work': {
    id: 'social-work',
    name: 'Social Work',
    isDark: false,
    gradient: 'linear-gradient(160deg, #4ade80 0%, #86efac 20%, #bbf7d0 55%, #e0fce8 80%, #ffffff 100%)',
    bg: '#f0fdf4',
    surface: '#ffffff',
    surfaceAlt: '#f7fef9',
    border: '#bbf7d0',
    text: '#052e16',
    textMuted: '#166534',
    primary: '#16a34a',
    primaryHover: '#15803d',
    primaryText: '#ffffff',
    sidebarBg: '#dcfce7',
    sidebarText: '#052e16',
    sidebarActive: '#16a34a',
    sidebarActiveText: '#ffffff',
    sidebarHover: '#bbf7d0',
    badgeBg: '#bbf7d0',
    badgeText: '#14532d',
    inputBg: '#f7fef9',
    accent: '#4ade80',
  },
  default: {
    id: 'default',
    name: 'Default',
    isDark: false,
    gradient: 'linear-gradient(160deg, #818cf8 0%, #c7d2fe 25%, #e0e7ff 55%, #eef2ff 80%, #ffffff 100%)',
    bg: '#f5f7ff',
    surface: '#ffffff',
    surfaceAlt: '#f8f9ff',
    border: '#c7d2fe',
    text: '#1e1b4b',
    textMuted: '#5254a3',
    primary: '#4f46e5',
    primaryHover: '#4338ca',
    primaryText: '#ffffff',
    sidebarBg: '#eef2ff',
    sidebarText: '#1e1b4b',
    sidebarActive: '#4f46e5',
    sidebarActiveText: '#ffffff',
    sidebarHover: '#dde3ff',
    badgeBg: '#c7d2fe',
    badgeText: '#3730a3',
    inputBg: '#f8f9ff',
    accent: '#818cf8',
  },
};

// ── Theme Resolution ──────────────────────────────────────────────────────────
export function getTheme(user) {
  if (!user) return THEMES.default;
  const email = (user.email || '').toLowerCase().trim();
  const course = (user.course || '').toLowerCase().trim();

  if (email === SPECIAL_USER_EMAIL.toLowerCase().trim() && course === 'law') {
    return THEMES['pink-law'];
  }
  return THEMES[course] || THEMES.default;
}

// ── Apply Theme via CSS Variables ─────────────────────────────────────────────
export function applyTheme(theme) {
  const r = document.documentElement;
  r.style.setProperty('--color-gradient', theme.gradient);
  r.style.setProperty('--color-bg', theme.bg);
  r.style.setProperty('--color-surface', theme.surface);
  r.style.setProperty('--color-surface-alt', theme.surfaceAlt);
  r.style.setProperty('--color-border', theme.border);
  r.style.setProperty('--color-text', theme.text);
  r.style.setProperty('--color-text-muted', theme.textMuted);
  r.style.setProperty('--color-primary', theme.primary);
  r.style.setProperty('--color-primary-hover', theme.primaryHover);
  r.style.setProperty('--color-primary-text', theme.primaryText);
  r.style.setProperty('--color-sidebar-bg', theme.sidebarBg);
  r.style.setProperty('--color-sidebar-text', theme.sidebarText);
  r.style.setProperty('--color-sidebar-active', theme.sidebarActive);
  r.style.setProperty('--color-sidebar-active-text', theme.sidebarActiveText);
  r.style.setProperty('--color-sidebar-hover', theme.sidebarHover);
  r.style.setProperty('--color-badge-bg', theme.badgeBg);
  r.style.setProperty('--color-badge-text', theme.badgeText);
  r.style.setProperty('--color-input-bg', theme.inputBg);
  r.style.setProperty('--color-accent', theme.accent);

  if (theme.isDark) {
    document.documentElement.classList.add('dark-theme');
  } else {
    document.documentElement.classList.remove('dark-theme');
  }
}
