// ── Special Theme Override ────────────────────────────────────────────────────
// Change SPECIAL_USER_EMAIL to your girlfriend's actual email address.
// When she logs in with a Law course, the pink-law theme will be applied.
export const SPECIAL_USER_EMAIL = 'vcbregalado@gmail.com';

// ── Courses ───────────────────────────────────────────────────────────────────
export const COURSES = [
  { value: 'law', label: 'Law' },
  { value: 'nursing', label: 'Nursing' },
  { value: 'engineering', label: 'Engineering' },
  { value: 'social-work', label: 'Social Work' },
  { value: 'custom', label: 'Other (specify below)' },
];

// ── Task Categories ───────────────────────────────────────────────────────────
export const TASK_CATEGORIES = [
  'Study',
  'Assignment',
  'Quiz',
  'Exam',
  'Project',
  'Research',
  'Review',
  'Reading',
  'Other',
];

// ── Deadline Thresholds ───────────────────────────────────────────────────────
export const URGENT_DAYS = 3;
export const UPCOMING_DAYS = 7;

// ── LocalStorage Keys ─────────────────────────────────────────────────────────
export const KEYS = {
  USERS: 'sc_users',
  CURRENT_USER: 'sc_current_user',
  TASKS: 'sc_tasks',
  PROGRESS: 'sc_progress',
  QUIZ_RESULTS: 'sc_quiz_results',
  STREAK: 'sc_streak',
  NOTIFS_SEEN: 'sc_notifs_seen',
};
