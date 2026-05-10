import { useState, useMemo, useCallback, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, Brain, BookOpen, ChevronDown, ChevronRight, CheckSquare, Highlighter } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getProgress, markLawViewed, setSectionRead } from '../utils/storage';
import { getHighlights, addHighlight, removeHighlight } from '../utils/highlights';
import { getTopicsForCourse } from '../data/courseData';
import LawSection from '../components/Study/LawSection';
import TopicIcon from '../components/TopicIcon';

export default function StudyDetail() {
  const { lawId } = useParams();
  const { user } = useAuth();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const topics = useMemo(() => getTopicsForCourse(user?.course), [user?.course]);
  const topic = topics.find((t) => t.id === lawId);

  const [search, setSearch] = useState('');
  const [expandedChapters, setExpandedChapters] = useState({});
  const [progress, setProgress] = useState({});
  const [highlightMode, setHighlightMode] = useState(false);
  const [highlights, setHighlights] = useState({});

  useEffect(() => {
    if (!user?.id) return;
    Promise.all([getProgress(user.id), getHighlights(user.id)]).then(([p, h]) => {
      setProgress(p);
      setHighlights(h);
    });
  }, [user]);

  useEffect(() => {
    if (user?.id && topic && !progress[lawId]?.viewed) {
      markLawViewed(user.id, lawId);
    }
  }, [lawId, user, topic]);

  if (!topic) {
    return (
      <div className="p-8 text-center">
        <p style={{ color: theme.text }}>Topic not found.</p>
        <Link to="/study" className="text-sm font-semibold mt-2 inline-block" style={{ color: theme.primary }}>Back to Study</Link>
      </div>
    );
  }

  const toggleChapter = (chId) => setExpandedChapters((p) => ({ ...p, [chId]: !p[chId] }));

  const handleToggleSection = useCallback(async (sectionId) => {
    const currentSections = progress[lawId]?.sections || [];
    const isCurrentlyRead = currentSections.includes(sectionId);
    await setSectionRead(user.id, lawId, sectionId, !isCurrentlyRead);
    const updated = await getProgress(user.id);
    setProgress(updated);
  }, [progress, lawId, user]);

  const handleAddHighlight = useCallback(async (sectionId, text, color) => {
    await addHighlight(user.id, sectionId, text, color);
    setHighlights(await getHighlights(user.id));
  }, [user]);

  const handleRemoveHighlight = useCallback(async (sectionId, text) => {
    await removeHighlight(user.id, sectionId, text);
    setHighlights(await getHighlights(user.id));
  }, [user]);

  const topicProgress = progress[lawId] || { sections: [] };
  const readSections = topicProgress.sections || [];
  const totalSections = topic.chapters.reduce((s, ch) => s + ch.sections.length, 0);
  const pct = totalSections > 0 ? Math.round((readSections.length / totalSections) * 100) : 0;

  const filteredChapters = useMemo(() => {
    if (!search.trim()) return topic.chapters;
    const q = search.toLowerCase();
    return topic.chapters
      .map((ch) => ({
        ...ch,
        sections: ch.sections.filter(
          (s) =>
            s.title.toLowerCase().includes(q) ||
            s.content.toLowerCase().includes(q) ||
            s.summary.toLowerCase().includes(q) ||
            (s.number || '').toLowerCase().includes(q)
        ),
      }))
      .filter((ch) => ch.sections.length > 0);
  }, [topic, search]);

  const chaptersToShow = search.trim()
    ? filteredChapters.map((ch) => ({ ...ch, forceExpand: true }))
    : filteredChapters;

  const expandAll = () => {
    const all = {};
    topic.chapters.forEach((ch) => (all[ch.id] = true));
    setExpandedChapters(all);
  };
  const collapseAll = () => setExpandedChapters({});

  return (
    <div className="p-5 md:p-8 max-w-3xl mx-auto">
      <div className="mb-6">
        <button
          onClick={() => navigate('/study')}
          className="btn-press flex items-center gap-1.5 text-sm font-medium mb-4"
          style={{ color: theme.textMuted, transition: 'opacity 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.7')}
          onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
        >
          <ArrowLeft size={16} />
          Back to Study Materials
        </button>

        <div className="flex items-start gap-4 flex-wrap">
          <div className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0" style={{ backgroundColor: topic.color.light, border: `1px solid ${topic.color.badge}33` }}>
            <TopicIcon name={topic.icon} size={26} color={topic.color.dark} />
          </div>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="text-xs px-2 py-0.5 rounded-full font-medium" style={{ backgroundColor: topic.color.light, color: topic.color.dark }}>{topic.category}</span>
              <span className="text-xs" style={{ color: theme.textMuted }}>{topic.year}</span>
            </div>
            <h2 className="text-xl font-black mt-1" style={{ color: theme.text }}>{topic.title}</h2>
            <p className="text-sm mt-1" style={{ color: theme.textMuted }}>{topic.description}</p>
          </div>
        </div>
      </div>

      <div className="rounded-2xl p-4 mb-5 flex items-center gap-4" style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}` }}>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-semibold" style={{ color: theme.text }}>Reading Progress</span>
            <span className="text-xs font-bold" style={{ color: pct === 100 ? '#16a34a' : theme.primary }}>{pct}%</span>
          </div>
          <div className="h-2 rounded-full overflow-hidden" style={{ backgroundColor: theme.border }}>
            <div className="h-full rounded-full animate-progress" style={{ width: `${pct}%`, backgroundColor: pct === 100 ? '#22c55e' : theme.primary }} />
          </div>
          <p className="text-xs mt-1" style={{ color: theme.textMuted }}>{readSections.length}/{totalSections} sections read</p>
        </div>
        <Link
          to={`/quiz/${topic.id}`}
          className="btn-press flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold whitespace-nowrap"
          style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
        >
          <Brain size={14} />
          Take Quiz
        </Link>
      </div>

      <div className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4" style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}` }}>
        <Search size={15} style={{ color: theme.textMuted, flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Search sections..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent"
          style={{ color: theme.text }}
        />
      </div>

      <div className="flex items-center gap-3 mb-4 flex-wrap">
        <button onClick={expandAll} className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.primary }}>
          <ChevronDown size={12} /> Expand All
        </button>
        <span style={{ color: theme.border }}>·</span>
        <button onClick={collapseAll} className="text-xs font-semibold flex items-center gap-1" style={{ color: theme.textMuted }}>
          <ChevronRight size={12} /> Collapse All
        </button>
        <span style={{ color: theme.border }}>·</span>
        <span className="text-xs flex items-center gap-1" style={{ color: theme.textMuted }}>
          <CheckSquare size={12} style={{ color: '#22c55e' }} />
          {readSections.length} read
        </span>
        <span style={{ color: theme.border }}>·</span>
        <button
          onClick={() => setHighlightMode((v) => !v)}
          className="btn-press flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-lg"
          style={{
            backgroundColor: highlightMode ? '#fef08a' : 'transparent',
            color: highlightMode ? '#92400e' : theme.textMuted,
            border: `1px solid ${highlightMode ? '#fde68a' : theme.border}`,
            transition: 'background-color 150ms ease, color 150ms ease, border-color 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)',
          }}
          title={highlightMode ? 'Disable highlight mode' : 'Enable highlight mode — select text to highlight'}
        >
          <Highlighter size={12} />
          {highlightMode ? 'Highlighting On' : 'Highlight'}
        </button>
      </div>

      {chaptersToShow.length === 0 ? (
        <div className="text-center py-12">
          <BookOpen size={36} className="mx-auto mb-2" style={{ color: theme.border }} />
          <p className="text-sm" style={{ color: theme.textMuted }}>No sections match your search.</p>
        </div>
      ) : (
        <div className="space-y-4">
          {chaptersToShow.map((chapter) => {
            const isOpen = chapter.forceExpand || expandedChapters[chapter.id];
            const chapterRead = chapter.sections.filter((s) => readSections.includes(s.id)).length;
            return (
              <div key={chapter.id}>
                <button
                  className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-left"
                  style={{ backgroundColor: theme.surface, border: `1px solid ${theme.border}`, transition: 'background-color 150ms ease' }}
                  onClick={() => toggleChapter(chapter.id)}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.surface)}
                >
                  <ChevronDown
                    size={16}
                    className="shrink-0"
                    style={{ color: theme.primary, transform: isOpen ? 'rotate(0deg)' : 'rotate(-90deg)', transition: 'transform 200ms cubic-bezier(0.23,1,0.32,1)' }}
                  />
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-sm" style={{ color: theme.text }}>{chapter.title}</p>
                    <p className="text-xs" style={{ color: theme.textMuted }}>{chapterRead}/{chapter.sections.length} sections read</p>
                  </div>
                  <div className="h-1.5 w-16 rounded-full overflow-hidden shrink-0" style={{ backgroundColor: theme.border }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${chapter.sections.length > 0 ? (chapterRead / chapter.sections.length) * 100 : 0}%`, backgroundColor: theme.primary }}
                    />
                  </div>
                </button>

                <div style={{ display: 'grid', gridTemplateRows: isOpen ? '1fr' : '0fr', transition: 'grid-template-rows 260ms cubic-bezier(0.23,1,0.32,1)' }}>
                  <div style={{ overflow: 'hidden' }}>
                    <div className="mt-2 space-y-2 pl-2">
                      {chapter.sections.map((section) => (
                        <LawSection
                          key={section.id}
                          section={section}
                          isRead={readSections.includes(section.id)}
                          onToggleRead={handleToggleSection}
                          highlightMode={highlightMode}
                          highlights={highlights[section.id] || []}
                          onHighlight={handleAddHighlight}
                          onRemoveHighlight={handleRemoveHighlight}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
