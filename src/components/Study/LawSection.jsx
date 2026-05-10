import { useState, useRef, useEffect } from 'react';
import { ChevronDown, CheckSquare, Square, Lightbulb, X } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';

const HIGHLIGHT_COLORS = [
  { color: '#fef08a', label: 'Yellow' },
  { color: '#bbf7d0', label: 'Green' },
  { color: '#bfdbfe', label: 'Blue' },
  { color: '#fecdd3', label: 'Pink' },
];

function buildSegments(text, highlights) {
  if (!highlights || highlights.length === 0) return [{ text, plain: true }];

  const sorted = [...highlights].sort((a, b) => b.text.length - a.text.length);
  let segments = [{ text, plain: true }];

  sorted.forEach(({ text: ht, color }) => {
    const next = [];
    segments.forEach((seg) => {
      if (!seg.plain) { next.push(seg); return; }
      const lower = seg.text.toLowerCase();
      const htLower = ht.toLowerCase();
      let pos = 0;
      let found = false;
      let idx;
      while ((idx = lower.indexOf(htLower, pos)) !== -1) {
        found = true;
        if (idx > pos) next.push({ text: seg.text.slice(pos, idx), plain: true });
        next.push({ text: seg.text.slice(idx, idx + ht.length), highlighted: true, color, original: ht });
        pos = idx + ht.length;
      }
      if (!found) { next.push(seg); return; }
      if (pos < seg.text.length) next.push({ text: seg.text.slice(pos), plain: true });
    });
    segments = next;
  });

  return segments;
}

export default function LawSection({
  section,
  isRead,
  onToggleRead,
  highlightMode = false,
  highlights = [],
  onHighlight,
  onRemoveHighlight,
}) {
  const { theme } = useTheme();
  const [expanded, setExpanded] = useState(false);
  const [selInfo, setSelInfo] = useState(null);
  const contentRef = useRef(null);
  const toolbarRef = useRef(null);

  useEffect(() => {
    if (!selInfo) return;
    const dismiss = (e) => {
      if (toolbarRef.current?.contains(e.target)) return;
      setSelInfo(null);
    };
    document.addEventListener('mousedown', dismiss);
    return () => document.removeEventListener('mousedown', dismiss);
  }, [selInfo]);

  const handleMouseUp = () => {
    if (!highlightMode || !expanded) return;
    setTimeout(() => {
      const sel = window.getSelection();
      if (!sel || sel.isCollapsed || !sel.toString().trim()) return;
      const range = sel.getRangeAt(0);
      if (!contentRef.current?.contains(range.commonAncestorContainer)) return;
      const rect = range.getBoundingClientRect();
      setSelInfo({ text: sel.toString().trim(), rect });
    }, 0);
  };

  const handlePickColor = (color) => {
    if (!selInfo) return;
    onHighlight?.(section.id, selInfo.text, color);
    setSelInfo(null);
    window.getSelection()?.removeAllRanges();
  };

  const segments = buildSegments(section.content, highlights);

  const toolbarLeft = selInfo
    ? Math.min(
        Math.max(10, selInfo.rect.left + selInfo.rect.width / 2 - 90),
        (typeof window !== 'undefined' ? window.innerWidth : 800) - 190
      )
    : 0;
  const toolbarTop = selInfo
    ? selInfo.rect.top < 70 ? selInfo.rect.bottom + 8 : selInfo.rect.top - 50
    : 0;

  return (
    <>
      {/* Floating highlight toolbar */}
      {selInfo && highlightMode && (
        <div
          ref={toolbarRef}
          style={{
            position: 'fixed',
            left: toolbarLeft,
            top: toolbarTop,
            zIndex: 1000,
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
            padding: '6px 8px',
            borderRadius: '10px',
            backgroundColor: theme.surface,
            border: `1px solid ${theme.border}`,
            boxShadow: '0 8px 28px rgba(0,0,0,0.18)',
            animation: 'fadeIn 120ms ease',
          }}
        >
          {HIGHLIGHT_COLORS.map(({ color, label }) => (
            <button
              key={color}
              title={label}
              onMouseDown={(e) => { e.preventDefault(); handlePickColor(color); }}
              style={{
                width: 20,
                height: 20,
                borderRadius: '50%',
                backgroundColor: color,
                border: '2px solid rgba(0,0,0,0.12)',
                cursor: 'pointer',
                flexShrink: 0,
                transition: 'transform 120ms ease',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.25)')}
              onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            />
          ))}
          <div style={{ width: 1, height: 14, backgroundColor: theme.border, margin: '0 1px' }} />
          <button
            title="Cancel"
            onMouseDown={(e) => { e.preventDefault(); setSelInfo(null); }}
            style={{ color: theme.textMuted, display: 'flex', padding: '1px', cursor: 'pointer' }}
          >
            <X size={13} />
          </button>
        </div>
      )}

      <div
        className="rounded-xl overflow-hidden"
        onMouseUp={handleMouseUp}
        style={{
          border: `1px solid ${isRead ? theme.primary + '55' : theme.border}`,
          backgroundColor: isRead ? theme.primary + '08' : theme.surface,
          transition: 'border-color 180ms ease, background-color 180ms ease',
        }}
      >
        {/* Header */}
        <button
          className="w-full flex items-center gap-3 px-4 py-3 text-left"
          onClick={() => setExpanded((v) => !v)}
        >
          <button
            className="shrink-0"
            style={{
              color: isRead ? theme.primary : theme.textMuted,
              transition: 'transform 120ms cubic-bezier(0.23,1,0.32,1), color 150ms ease',
            }}
            onMouseDown={(e) => (e.currentTarget.style.transform = 'scale(0.88)')}
            onMouseUp={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
            onClick={(e) => { e.stopPropagation(); onToggleRead(section.id); }}
            title={isRead ? 'Mark as unread' : 'Mark as read'}
          >
            {isRead ? <CheckSquare size={16} /> : <Square size={16} />}
          </button>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2">
              {section.number && (
                <span className="text-xs font-bold shrink-0" style={{ color: theme.primary }}>
                  {section.number}
                </span>
              )}
              <span className="font-semibold text-sm truncate" style={{ color: theme.text }}>
                {section.title}
              </span>
            </div>
            {!expanded && (
              <p className="text-xs mt-0.5 line-clamp-1" style={{ color: theme.textMuted }}>
                {section.summary}
              </p>
            )}
          </div>

          <ChevronDown
            size={16}
            className="shrink-0"
            style={{
              color: theme.textMuted,
              transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)',
              transition: 'transform 220ms cubic-bezier(0.23,1,0.32,1)',
            }}
          />
        </button>

        {/* Animated expand / collapse */}
        <div
          style={{
            display: 'grid',
            gridTemplateRows: expanded ? '1fr' : '0fr',
            transition: 'grid-template-rows 280ms cubic-bezier(0.23, 1, 0.32, 1)',
          }}
        >
          <div style={{ overflow: 'hidden' }}>
            <div className="px-4 pb-4 space-y-3" style={{ borderTop: `1px solid ${theme.border}` }}>
              <div ref={contentRef} className="pt-3">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: theme.text, userSelect: highlightMode ? 'text' : undefined }}
                >
                  {segments.map((seg, i) =>
                    seg.highlighted ? (
                      <mark
                        key={i}
                        onClick={() => onRemoveHighlight?.(section.id, seg.original)}
                        style={{
                          backgroundColor: seg.color,
                          borderRadius: '2px',
                          padding: '0 1px',
                          cursor: 'pointer',
                          color: 'inherit',
                        }}
                        title="Click to remove highlight"
                      >
                        {seg.text}
                      </mark>
                    ) : (
                      <span key={i}>{seg.text}</span>
                    )
                  )}
                </p>
              </div>

              <div
                className="rounded-xl p-3 flex gap-2"
                style={{ backgroundColor: theme.primary + '12', border: `1px solid ${theme.primary + '33'}` }}
              >
                <Lightbulb size={15} className="shrink-0 mt-0.5" style={{ color: theme.primary }} />
                <div>
                  <p className="text-xs font-bold mb-1" style={{ color: theme.primary }}>Summary</p>
                  <p className="text-xs leading-relaxed whitespace-pre-line" style={{ color: theme.text }}>
                    {section.summary}
                  </p>
                </div>
              </div>

              <button
                onClick={() => onToggleRead(section.id)}
                className="btn-press text-xs font-semibold px-3 py-1.5 rounded-lg"
                style={{
                  backgroundColor: isRead ? theme.primary + '15' : theme.primary,
                  color: isRead ? theme.primary : theme.primaryText,
                  transition: 'background-color 150ms ease, color 150ms ease, transform 120ms cubic-bezier(0.23,1,0.32,1)',
                }}
              >
                {isRead ? 'Marked as read' : 'Mark as read'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
