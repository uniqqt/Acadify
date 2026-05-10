import { useState, useEffect, useRef, useCallback } from 'react';
import { Plus, Trash2, FileText, Save, Clock } from 'lucide-react';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getNotes, saveNote, deleteNote } from '../utils/storage';
import { getTopicsForCourse } from '../data/courseData';
import { format } from 'date-fns';

function newNote() {
  return { id: `note_${Date.now()}`, title: '', content: '', topicId: null, createdAt: new Date().toISOString(), updatedAt: new Date().toISOString() };
}

export default function Notes() {
  const { user } = useAuth();
  const { theme } = useTheme();
  const [notes, setNotes] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [saving, setSaving] = useState(false);
  const [saved, setSaved] = useState(false);
  const saveTimer = useRef(null);
  const topics = getTopicsForCourse(user?.course);

  useEffect(() => {
    if (!user?.id) return;
    getNotes(user.id).then((n) => {
      setNotes(n);
      if (n.length > 0) setActiveId(n[0].id);
    });
  }, [user]);

  const active = notes.find((n) => n.id === activeId) || null;

  const handleCreate = async () => {
    const note = newNote();
    setNotes((prev) => [note, ...prev]);
    setActiveId(note.id);
    await saveNote(user.id, note);
  };

  const handleDelete = async (id) => {
    await deleteNote(id);
    setNotes((prev) => {
      const next = prev.filter((n) => n.id !== id);
      if (activeId === id) setActiveId(next[0]?.id || null);
      return next;
    });
  };

  const persist = useCallback(async (updated) => {
    setSaving(true);
    await saveNote(user.id, updated);
    setSaving(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  }, [user]);

  const handleChange = (field, value) => {
    setNotes((prev) => prev.map((n) => n.id === activeId ? { ...n, [field]: value, updatedAt: new Date().toISOString() } : n));
    if (saveTimer.current) clearTimeout(saveTimer.current);
    setSaved(false);
    saveTimer.current = setTimeout(() => {
      setNotes((prev) => {
        const updated = prev.find((n) => n.id === activeId);
        if (updated) persist(updated);
        return prev;
      });
    }, 800);
  };

  return (
    <div className="flex h-full overflow-hidden" style={{ height: 'calc(100vh - 56px)' }}>
      {/* Sidebar — note list */}
      <div
        className="w-64 shrink-0 flex flex-col border-r overflow-hidden"
        style={{ backgroundColor: theme.surface, borderColor: theme.border }}
      >
        <div className="p-3 flex items-center justify-between" style={{ borderBottom: `1px solid ${theme.border}` }}>
          <span className="font-bold text-sm" style={{ color: theme.text }}>My Notes</span>
          <button
            onClick={handleCreate}
            className="btn-press flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-xs font-semibold"
            style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
          >
            <Plus size={13} /> New
          </button>
        </div>

        <div className="flex-1 overflow-y-auto">
          {notes.length === 0 ? (
            <div className="p-4 text-center">
              <FileText size={28} className="mx-auto mb-2" style={{ color: theme.border }} />
              <p className="text-xs" style={{ color: theme.textMuted }}>No notes yet</p>
              <button onClick={handleCreate} className="text-xs font-semibold mt-1" style={{ color: theme.primary }}>
                Create your first note
              </button>
            </div>
          ) : (
            notes.map((note) => (
              <button
                key={note.id}
                onClick={() => setActiveId(note.id)}
                className="w-full text-left px-3 py-3 flex items-start gap-2 group transition-colors"
                style={{
                  backgroundColor: note.id === activeId ? theme.primary + '18' : 'transparent',
                  borderLeft: `3px solid ${note.id === activeId ? theme.primary : 'transparent'}`,
                }}
                onMouseEnter={(e) => { if (note.id !== activeId) e.currentTarget.style.backgroundColor = theme.surfaceAlt; }}
                onMouseLeave={(e) => { if (note.id !== activeId) e.currentTarget.style.backgroundColor = 'transparent'; }}
              >
                <FileText size={14} className="shrink-0 mt-0.5" style={{ color: note.id === activeId ? theme.primary : theme.textMuted }} />
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-semibold truncate" style={{ color: theme.text }}>
                    {note.title || 'Untitled'}
                  </p>
                  <p className="text-xs truncate mt-0.5" style={{ color: theme.textMuted }}>
                    {note.content ? note.content.slice(0, 40) + (note.content.length > 40 ? '…' : '') : 'No content'}
                  </p>
                  <p className="text-xs mt-0.5" style={{ color: theme.textMuted }}>
                    {format(new Date(note.updatedAt), 'MMM d, h:mm a')}
                  </p>
                </div>
                <button
                  onClick={(e) => { e.stopPropagation(); handleDelete(note.id); }}
                  className="opacity-0 group-hover:opacity-100 p-1 rounded-lg transition-opacity"
                  style={{ color: '#dc2626' }}
                  title="Delete note"
                >
                  <Trash2 size={13} />
                </button>
              </button>
            ))
          )}
        </div>
      </div>

      {/* Editor */}
      <div className="flex-1 flex flex-col overflow-hidden" style={{ backgroundColor: theme.bg }}>
        {!active ? (
          <div className="flex-1 flex items-center justify-center flex-col gap-3">
            <FileText size={48} style={{ color: theme.border }} />
            <p className="text-sm font-medium" style={{ color: theme.textMuted }}>Select a note or create a new one</p>
            <button
              onClick={handleCreate}
              className="btn-press flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold"
              style={{ backgroundColor: theme.primary, color: theme.primaryText, transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
            >
              <Plus size={15} /> New Note
            </button>
          </div>
        ) : (
          <>
            {/* Toolbar */}
            <div
              className="px-5 py-2 flex items-center gap-3 shrink-0"
              style={{ backgroundColor: theme.surface, borderBottom: `1px solid ${theme.border}` }}
            >
              <select
                value={active.topicId || ''}
                onChange={(e) => handleChange('topicId', e.target.value || null)}
                className="text-xs px-2 py-1 rounded-lg outline-none"
                style={{ backgroundColor: theme.surfaceAlt, border: `1px solid ${theme.border}`, color: theme.textMuted }}
              >
                <option value="">No topic tag</option>
                {topics.map((t) => (
                  <option key={t.id} value={t.id}>{t.shortTitle}</option>
                ))}
              </select>

              <div className="flex-1" />

              <div className="flex items-center gap-1.5 text-xs" style={{ color: theme.textMuted }}>
                {saving ? (
                  <><Clock size={12} className="animate-spin" /> Saving…</>
                ) : saved ? (
                  <><Save size={12} style={{ color: '#22c55e' }} /><span style={{ color: '#22c55e' }}>Saved</span></>
                ) : (
                  <span>Auto-saves as you type</span>
                )}
              </div>

              <button
                onClick={() => handleDelete(active.id)}
                className="btn-press p-1.5 rounded-lg"
                style={{ color: '#dc2626', transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1)' }}
                title="Delete this note"
              >
                <Trash2 size={15} />
              </button>
            </div>

            {/* Title */}
            <input
              type="text"
              placeholder="Note title…"
              value={active.title}
              onChange={(e) => handleChange('title', e.target.value)}
              className="w-full px-6 pt-5 pb-2 text-xl font-bold outline-none bg-transparent"
              style={{ color: theme.text }}
            />

            {/* Content */}
            <textarea
              placeholder="Start writing your notes here… Great for jotting down key points during class, lectures, or while studying."
              value={active.content}
              onChange={(e) => handleChange('content', e.target.value)}
              className="flex-1 w-full px-6 py-3 text-sm leading-relaxed outline-none bg-transparent resize-none"
              style={{ color: theme.text, fontFamily: 'inherit' }}
            />

            {/* Footer */}
            <div
              className="px-6 py-2 text-xs flex items-center gap-3"
              style={{ borderTop: `1px solid ${theme.border}`, color: theme.textMuted }}
            >
              <span>{active.content.length} characters</span>
              <span>·</span>
              <span>{active.content.trim() ? active.content.trim().split(/\s+/).length : 0} words</span>
              <span>·</span>
              <span>Created {format(new Date(active.createdAt), 'MMM d, yyyy')}</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
