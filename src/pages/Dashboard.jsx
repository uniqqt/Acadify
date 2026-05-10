import { useState, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { CheckSquare, BookOpen, Brain, Flame, TrendingUp, AlertTriangle, Clock, Plus, ArrowRight, GraduationCap } from 'lucide-react';
import { differenceInCalendarDays, isPast, format } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getTasks, getProgress, getQuizResults, getStreak } from '../utils/storage';
import { URGENT_DAYS } from '../constants';
import { getTopicsForCourse } from '../data/courseData';
import TopicIcon from '../components/TopicIcon';

const COURSE_LABELS = { law: 'Law', nursing: 'Nursing', engineering: 'Engineering', 'computer-engineering': 'Computer Engineering', 'civil-engineering': 'Civil Engineering', 'mechanical-engineering': 'Mechanical Engineering', 'electrical-engineering': 'Electrical Engineering', 'electronics-engineering': 'Electronics Engineering', 'social-work': 'Social Work' };

export default function Dashboard() {
  const { user } = useAuth();
  const { theme } = useTheme();

  const topics = useMemo(() => getTopicsForCourse(user?.course), [user?.course]);
  const [tasks, setTasks] = useState([]);
  const [progress, setProgress] = useState({});
  const [quizResults, setQuizResults] = useState([]);
  const [streak, setStreak] = useState({ current: 0, longest: 0 });

  useEffect(() => {
    if (!user?.id) return;
    Promise.all([
      getTasks(user.id),
      getProgress(user.id),
      getQuizResults(user.id),
      getStreak(user.id),
    ]).then(([t, p, q, s]) => {
      setTasks(t);
      setProgress(p);
      setQuizResults(q);
      setStreak(s);
    });
  }, [user]);

  const now = new Date();
  const activeTasks = tasks.filter((t) => !t.completed);
  const completedTasks = tasks.filter((t) => t.completed);
  const urgentTasks = activeTasks.filter((t) => {
    const dl = new Date(t.deadline);
    return !isPast(dl) && differenceInCalendarDays(dl, now) <= URGENT_DAYS;
  });
  const overdueTasks = activeTasks.filter((t) => isPast(new Date(t.deadline)));

  const topicsStudied = Object.keys(progress).length;
  const totalTopics = topics.length;
  const bestQuiz = quizResults.length ? Math.max(...quizResults.map((r) => r.score)) : null;
  const recentTasks = [...activeTasks].sort((a, b) => new Date(a.deadline) - new Date(b.deadline)).slice(0, 4);
  const courseLabel = user ? COURSE_LABELS[user.course] || (user.course?.charAt(0)?.toUpperCase() + user.course?.slice(1)) : 'Student';

  const statCards = [
    { icon: CheckSquare, label: 'Active Tasks', value: activeTasks.length, sub: `${completedTasks.length} completed`, accent: theme.primary },
    { icon: AlertTriangle, label: 'Urgent / Overdue', value: urgentTasks.length + overdueTasks.length, sub: `${overdueTasks.length} overdue`, accent: overdueTasks.length > 0 ? '#dc2626' : urgentTasks.length > 0 ? '#f97316' : '#22c55e' },
    { icon: BookOpen, label: 'Topics Studied', value: topicsStudied, sub: `of ${totalTopics} topics`, accent: '#8b5cf6' },
    { icon: Brain, label: 'Quizzes Taken', value: quizResults.length, sub: bestQuiz !== null ? `Best: ${bestQuiz} pts` : 'No quizzes yet', accent: '#06b6d4' },
  ];

  const getDeadlineText = (task) => {
    const dl = new Date(task.deadline);
    if (isPast(dl)) return { text: 'Overdue', color: '#dc2626' };
    const days = differenceInCalendarDays(dl, now);
    if (days === 0) return { text: 'Due today', color: '#f97316' };
    if (days <= URGENT_DAYS) return { text: `${days}d left`, color: '#f97316' };
    return { text: format(dl, 'MMM d'), color: theme.textMuted };
  };

  return (
    <div className="p-5 md:p-8 max-w-5xl mx-auto space-y-6">
      <div className="flex items-start justify-between flex-wrap gap-3">
        <div>
          <h2 className="text-2xl font-black" style={{ color: theme.text }}>
            {user?.createdAt && new Date() - new Date(user.createdAt) < 1000 * 60 * 60 * 24
              ? `Welcome to Acadify, ${user?.name?.split(' ')[0] || 'Student'}!`
              : `Welcome back, ${user?.name?.split(' ')[0] || 'Student'}!`}
          </h2>
          <p className="text-sm mt-1" style={{ color: theme.textMuted }}>
            {new Date().toLocaleDateString('en-PH', { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' })}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: theme.badgeBg, color: theme.badgeText }}>
            <GraduationCap size={14} /> {courseLabel}
          </span>
          {streak.current > 0 && (
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-sm font-semibold" style={{ backgroundColor: '#fff7ed', color: '#c2410c' }}>
              <Flame size={14} /> {streak.current}d streak
            </span>
          )}
        </div>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
        {statCards.map(({ icon: Icon, label, value, sub, accent }, i) => (
          <div
            key={label}
            className="rounded-2xl p-4 animate-fade-in hover-card"
            style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}`, animationDelay: `${i * 40}ms` }}
          >
            <div className="w-9 h-9 rounded-xl flex items-center justify-center mb-3" style={{ backgroundColor: accent + '18' }}>
              <Icon size={18} style={{ color: accent }} />
            </div>
            <div className="text-2xl font-black" style={{ color: theme.text }}>{value}</div>
            <div className="text-xs font-semibold mt-0.5" style={{ color: theme.text }}>{label}</div>
            <div className="text-xs mt-0.5" style={{ color: theme.textMuted }}>{sub}</div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
        <div className="rounded-2xl p-5" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm" style={{ color: theme.text }}>Upcoming Tasks</h3>
            <Link to="/tasks" className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.primary }}>
              View all <ArrowRight size={12} />
            </Link>
          </div>
          {recentTasks.length === 0 ? (
            <div className="text-center py-6">
              <CheckSquare size={32} className="mx-auto mb-2" style={{ color: theme.border }} />
              <p className="text-sm font-medium" style={{ color: theme.textMuted }}>No active tasks</p>
              <Link to="/tasks" className="text-xs font-semibold mt-2 inline-block" style={{ color: theme.primary }}>+ Add your first task</Link>
            </div>
          ) : (
            <div className="space-y-2.5">
              {recentTasks.map((task) => {
                const dl = getDeadlineText(task);
                return (
                  <div key={task.id} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: theme.surfaceAlt }}>
                    <Clock size={14} style={{ color: dl.color, flexShrink: 0 }} />
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium truncate" style={{ color: theme.text }}>{task.title}</p>
                      <p className="text-xs" style={{ color: theme.textMuted }}>{task.category}</p>
                    </div>
                    <span className="text-xs font-bold shrink-0" style={{ color: dl.color }}>{dl.text}</span>
                  </div>
                );
              })}
            </div>
          )}
        </div>

        <div className="rounded-2xl p-5" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <h3 className="font-bold text-sm mb-4" style={{ color: theme.text }}>Quick Actions</h3>
          <div className="space-y-2.5">
            {[
              { to: '/tasks', icon: Plus, label: 'Add a new task', sub: 'Plan your study schedule', color: theme.primary },
              { to: '/study', icon: BookOpen, label: 'Browse study materials', sub: `${totalTopics} topics for ${courseLabel}`, color: '#8b5cf6' },
              { to: '/quiz', icon: Brain, label: 'Take a practice quiz', sub: `Test your ${courseLabel} knowledge`, color: '#06b6d4' },
            ].map(({ to, icon: Icon, label, sub, color }) => (
              <Link key={to} to={to} className="flex items-center gap-3 p-3 rounded-xl hover-row" style={{ backgroundColor: theme.surfaceAlt, border: '1px solid transparent' }}>
                <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0" style={{ backgroundColor: color + '18' }}>
                  <Icon size={16} style={{ color }} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold" style={{ color: theme.text }}>{label}</p>
                  <p className="text-xs" style={{ color: theme.textMuted }}>{sub}</p>
                </div>
                <ArrowRight size={14} style={{ color: theme.textMuted }} />
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-5" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-bold text-sm" style={{ color: theme.text }}>Study Progress</h3>
          <span className="text-xs" style={{ color: theme.textMuted }}>{topicsStudied}/{totalTopics} topics</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {topics.map((topic, i) => {
            const prog = progress[topic.id];
            const total = topic.chapters.reduce((s, ch) => s + ch.sections.length, 0);
            const read = prog?.sections?.length || 0;
            const pct = total > 0 ? Math.round((read / total) * 100) : 0;
            return (
              <Link
                key={topic.id}
                to={`/study/${topic.id}`}
                className="flex items-center gap-3 p-3 rounded-xl animate-fade-in"
                style={{ backgroundColor: theme.surfaceAlt, transition: 'background-color 150ms ease', animationDelay: `${i * 30}ms` }}
                onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.border)}
                onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
              >
                <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: topic.color.light }}>
                  <TopicIcon name={topic.icon} size={16} color={topic.color.dark} />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold truncate" style={{ color: theme.text }}>{topic.shortTitle}</p>
                  <div className="h-1.5 rounded-full mt-1 overflow-hidden" style={{ backgroundColor: theme.border }}>
                    <div className="h-full rounded-full animate-progress" style={{ width: `${pct}%`, backgroundColor: pct === 100 ? '#22c55e' : theme.primary }} />
                  </div>
                  <p className="text-xs mt-0.5" style={{ color: theme.textMuted }}>{read}/{total}</p>
                </div>
              </Link>
            );
          })}
        </div>
      </div>

      {quizResults.length > 0 && (
        <div className="rounded-2xl p-5" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
          <div className="flex items-center justify-between mb-4">
            <h3 className="font-bold text-sm" style={{ color: theme.text }}>Recent Quiz Results</h3>
            <TrendingUp size={16} style={{ color: theme.primary }} />
          </div>
          <div className="space-y-2">
            {quizResults.slice(0, 5).map((r, i) => {
              const pct = Math.round((r.score / r.total) * 100);
              const topic = topics.find((t) => t.id === r.lawId);
              return (
                <div key={i} className="flex items-center gap-3 p-3 rounded-xl" style={{ backgroundColor: theme.surfaceAlt }}>
                  {topic ? (
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: topic.color.light }}>
                      <TopicIcon name={topic.icon} size={14} color={topic.color.dark} />
                    </div>
                  ) : (
                    <div className="w-8 h-8 rounded-xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme.surfaceAlt }}>
                      <Brain size={14} style={{ color: theme.textMuted }} />
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium truncate" style={{ color: theme.text }}>{topic?.shortTitle || r.lawId}</p>
                    <p className="text-xs" style={{ color: theme.textMuted }}>{format(new Date(r.date), 'MMM d, h:mm a')}</p>
                  </div>
                  <span className="text-xs font-bold px-2 py-0.5 rounded-full" style={{
                    backgroundColor: pct >= 75 ? '#f0fdf4' : pct >= 50 ? '#fefce8' : '#fef2f2',
                    color: pct >= 75 ? '#16a34a' : pct >= 50 ? '#ca8a04' : '#dc2626',
                  }}>
                    {r.score}/{r.total} ({pct}%)
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
