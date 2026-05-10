import { useState, useMemo, useEffect } from 'react';
import { Search, BookOpen } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getProgress } from '../utils/storage';
import { getTopicsForCourse } from '../data/courseData';
import LawCard from '../components/Study/LawCard';

const COURSE_LABELS = { law: 'Law', nursing: 'Nursing', engineering: 'Engineering', 'computer-engineering': 'Computer Engineering', 'civil-engineering': 'Civil Engineering', 'mechanical-engineering': 'Mechanical Engineering', 'electrical-engineering': 'Electrical Engineering', 'electronics-engineering': 'Electronics Engineering', 'social-work': 'Social Work' };

export default function Study() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');
  const [progress, setProgress] = useState({});

  const topics = useMemo(() => getTopicsForCourse(user?.course), [user?.course]);
  const courseLabel = COURSE_LABELS[user?.course] || user?.course || 'Study';
  const CATEGORIES = useMemo(() => ['All', ...new Set(topics.map((t) => t.category))], [topics]);

  useEffect(() => {
    if (user?.id) getProgress(user.id).then(setProgress);
  }, [user]);

  const filtered = useMemo(() => {
    let list = topics;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter(
        (t) =>
          t.title.toLowerCase().includes(q) ||
          t.description.toLowerCase().includes(q) ||
          t.category.toLowerCase().includes(q) ||
          t.chapters.some((ch) =>
            ch.sections.some((s) => s.title.toLowerCase().includes(q) || s.summary.toLowerCase().includes(q))
          )
      );
    }
    if (category !== 'All') list = list.filter((t) => t.category === category);
    return list;
  }, [topics, search, category]);

  const totalSections = topics.reduce((s, t) => s + t.chapters.reduce((ss, ch) => ss + ch.sections.length, 0), 0);
  const readSections = Object.values(progress).reduce((s, p) => s + (p.sections?.length || 0), 0);
  const overallPct = totalSections > 0 ? Math.round((readSections / totalSections) * 100) : 0;

  return (
    <div className="p-5 md:p-8 max-w-5xl mx-auto">
      <div className="mb-6">
        <h2 className="text-xl font-black" style={{ color: theme.text }}>Study Materials</h2>
        <p className="text-sm mt-1" style={{ color: theme.textMuted }}>{courseLabel} — {topics.length} topics</p>
      </div>

      <div
        className="rounded-2xl p-5 mb-6 flex items-center gap-5 flex-wrap"
        style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}
      >
        <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: theme.primary + '15' }}>
          <BookOpen size={26} style={{ color: theme.primary }} />
        </div>
        <div className="flex-1 min-w-0">
          <p className="font-bold text-sm" style={{ color: theme.text }}>Overall Study Progress</p>
          <p className="text-xs mb-2" style={{ color: theme.textMuted }}>
            {readSections} of {totalSections} sections read across {topics.length} topics
          </p>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
            <div className="h-full rounded-full animate-progress" style={{ width: `${overallPct}%`, backgroundColor: overallPct === 100 ? '#22c55e' : theme.primary }} />
          </div>
        </div>
        <div className="text-center shrink-0">
          <div className="text-3xl font-black" style={{ color: theme.primary }}>{overallPct}%</div>
          <div className="text-xs" style={{ color: theme.textMuted }}>Complete</div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row gap-3 mb-5">
        <div className="flex-1 flex items-center gap-2 px-3 py-2 rounded-xl" style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}` }}>
          <Search size={16} style={{ color: theme.textMuted, flexShrink: 0 }} />
          <input
            type="text"
            placeholder="Search topics, sections, summaries..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 text-sm outline-none bg-transparent"
            style={{ color: theme.text }}
          />
        </div>
        <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className="btn-press px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap"
              style={{
                backgroundColor: category === cat ? theme.primary : theme.surface,
                color: category === cat ? theme.primaryText : theme.textMuted,
                border: `1px solid ${category === cat ? theme.primary : theme.border}`,
                transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)',
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {search && (
        <p className="text-sm mb-3" style={{ color: theme.textMuted }}>
          {filtered.length} result{filtered.length !== 1 ? 's' : ''} for "{search}"
        </p>
      )}

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <BookOpen size={48} className="mx-auto mb-3" style={{ color: theme.border }} />
          <p className="font-semibold text-sm" style={{ color: theme.text }}>No materials found</p>
          <p className="text-xs mt-1" style={{ color: theme.textMuted }}>Try a different search term or category</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((topic, i) => (
            <div key={topic.id} className="animate-fade-in" style={{ animationDelay: `${i * 40}ms` }}>
              <LawCard law={topic} progress={progress[topic.id]} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
