import { useState, useEffect } from 'react';
import { X, Calendar, AlignLeft, Tag, Type } from 'lucide-react';
import { useTheme } from '../../context/ThemeContext';
import { TASK_CATEGORIES } from '../../constants';
import { format } from 'date-fns';

const EMPTY = {
  title: '',
  description: '',
  deadline: '',
  deadlineTime: '23:59',
  category: 'Study',
};

export default function TaskForm({ task, onSave, onClose }) {
  const { theme } = useTheme();
  const [form, setForm] = useState(EMPTY);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (task) {
      const dl = new Date(task.deadline);
      setForm({
        title: task.title,
        description: task.description || '',
        deadline: format(dl, 'yyyy-MM-dd'),
        deadlineTime: format(dl, 'HH:mm'),
        category: task.category,
      });
    } else {
      const tomorrow = new Date();
      tomorrow.setDate(tomorrow.getDate() + 1);
      setForm({ ...EMPTY, deadline: format(tomorrow, 'yyyy-MM-dd') });
    }
  }, [task]);

  const set = (field) => (e) => setForm((f) => ({ ...f, [field]: e.target.value }));

  const validate = () => {
    const e = {};
    if (!form.title.trim()) e.title = 'Title is required.';
    if (!form.deadline) e.deadline = 'Deadline date is required.';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    const deadlineISO = new Date(`${form.deadline}T${form.deadlineTime || '23:59'}`).toISOString();
    onSave({
      title: form.title.trim(),
      description: form.description.trim(),
      deadline: deadlineISO,
      category: form.category,
    });
  };

  const inputStyle = {
    backgroundColor: theme.inputBg,
    border: `1px solid ${theme.border}`,
    color: theme.text,
    outline: 'none',
  };

  const labelStyle = { color: theme.textMuted };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 backdrop-enter"
        style={{ backgroundColor: 'rgba(0,0,0,0.42)' }}
        onClick={onClose}
      />

      {/* Modal */}
      <div
        className="relative z-10 w-full max-w-md rounded-2xl shadow-2xl overflow-hidden modal-enter"
        style={{ backgroundColor: theme.surface }}
      >
        {/* Header */}
        <div
          className="flex items-center justify-between px-5 py-4"
          style={{ borderBottom: `1px solid ${theme.border}` }}
        >
          <h2 className="font-bold text-base" style={{ color: theme.text }}>
            {task ? 'Edit Task' : 'New Task'}
          </h2>
          <button
            onClick={onClose}
            className="btn-press p-1.5 rounded-lg"
            style={{
              color: theme.textMuted,
              transition: 'background-color 150ms ease, transform 120ms var(--ease-out)',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
          >
            <X size={18} />
          </button>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="px-5 py-5 space-y-4">
          {/* Title */}
          <div>
            <label
              className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
              style={labelStyle}
            >
              <Type size={12} /> Title
            </label>
            <input
              type="text"
              placeholder="e.g., Review Article III Bill of Rights"
              value={form.title}
              onChange={set('title')}
              className="w-full rounded-xl px-3 py-2.5 text-sm"
              style={{ ...inputStyle, borderColor: errors.title ? '#dc2626' : theme.border, transition: 'border-color 150ms ease' }}
            />
            {errors.title && <p className="text-xs text-red-500 mt-1 animate-fade-in">{errors.title}</p>}
          </div>

          {/* Description */}
          <div>
            <label
              className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
              style={labelStyle}
            >
              <AlignLeft size={12} /> Description (optional)
            </label>
            <textarea
              placeholder="Add notes or details..."
              value={form.description}
              onChange={set('description')}
              rows={3}
              className="w-full rounded-xl px-3 py-2.5 text-sm resize-none"
              style={{ ...inputStyle, transition: 'border-color 150ms ease' }}
            />
          </div>

          {/* Deadline Date & Time */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <label
                className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={labelStyle}
              >
                <Calendar size={12} /> Date
              </label>
              <input
                type="date"
                value={form.deadline}
                onChange={set('deadline')}
                className="w-full rounded-xl px-3 py-2.5 text-sm"
                style={{ ...inputStyle, borderColor: errors.deadline ? '#dc2626' : theme.border, transition: 'border-color 150ms ease' }}
              />
              {errors.deadline && <p className="text-xs text-red-500 mt-1 animate-fade-in">{errors.deadline}</p>}
            </div>
            <div>
              <label
                className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
                style={labelStyle}
              >
                Time
              </label>
              <input
                type="time"
                value={form.deadlineTime}
                onChange={set('deadlineTime')}
                className="w-full rounded-xl px-3 py-2.5 text-sm"
                style={inputStyle}
              />
            </div>
          </div>

          {/* Category */}
          <div>
            <label
              className="flex items-center gap-1.5 text-xs font-semibold mb-1.5 uppercase tracking-wide"
              style={labelStyle}
            >
              <Tag size={12} /> Category
            </label>
            <select
              value={form.category}
              onChange={set('category')}
              className="w-full rounded-xl px-3 py-2.5 text-sm"
              style={inputStyle}
            >
              {TASK_CATEGORIES.map((c) => (
                <option key={c} value={c}>{c}</option>
              ))}
            </select>
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="btn-press flex-1 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: theme.surfaceAlt,
                color: theme.textMuted,
                border: `1px solid ${theme.border}`,
                transition: 'background-color 150ms ease, transform 120ms var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = theme.border)}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = theme.surfaceAlt)}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="btn-press flex-1 py-2.5 rounded-xl text-sm font-semibold"
              style={{
                backgroundColor: theme.primary,
                color: theme.primaryText,
                transition: 'opacity 150ms ease, transform 120ms var(--ease-out)',
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.88')}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
            >
              {task ? 'Save Changes' : 'Add Task'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
