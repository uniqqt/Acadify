import { useState, useMemo, useCallback, useEffect } from 'react';
import { Plus, Search, Filter, CheckSquare, AlertTriangle, Clock, CheckCircle, Inbox } from 'lucide-react';
import { differenceInCalendarDays, isPast } from 'date-fns';
import { useAuth } from '../context/AuthContext';
import { useTheme } from '../context/ThemeContext';
import { getTasks, saveTask, deleteTask } from '../utils/storage';
import { TASK_CATEGORIES, URGENT_DAYS } from '../constants';
import TaskCard from '../components/Tasks/TaskCard';
import TaskForm from '../components/Tasks/TaskForm';

const FILTERS = ['All', 'Active', 'Urgent', 'Completed', 'Overdue'];

function getTaskStatus(task) {
  if (task.completed) return 'completed';
  const dl = new Date(task.deadline);
  if (isPast(dl)) return 'overdue';
  if (differenceInCalendarDays(dl, new Date()) <= URGENT_DAYS) return 'urgent';
  return 'active';
}

export default function Tasks() {
  const { user } = useAuth();
  const { theme } = useTheme();

  const [tasks, setTasks] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingTask, setEditingTask] = useState(null);
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('All');
  const [categoryFilter, setCategoryFilter] = useState('All');

  const refresh = useCallback(async () => {
    const data = await getTasks(user?.id);
    setTasks(data);
  }, [user]);

  useEffect(() => { if (user?.id) refresh(); }, [user, refresh]);

  const handleSave = useCallback(async (data) => {
    const task = editingTask
      ? { ...editingTask, ...data }
      : { id: `task_${Date.now()}`, userId: user.id, completed: false, createdAt: new Date().toISOString(), ...data };
    await saveTask(task);
    refresh();
    setShowForm(false);
    setEditingTask(null);
  }, [editingTask, user, refresh]);

  const handleDelete = useCallback(async (id) => {
    if (window.confirm('Delete this task?')) {
      await deleteTask(id);
      refresh();
    }
  }, [refresh]);

  const handleToggle = useCallback(async (task) => {
    await saveTask({ ...task, completed: !task.completed });
    refresh();
  }, [refresh]);

  const handleEdit = useCallback((task) => {
    setEditingTask(task);
    setShowForm(true);
  }, []);

  const filtered = useMemo(() => {
    let list = tasks;
    if (search.trim()) {
      const q = search.toLowerCase();
      list = list.filter((t) => t.title.toLowerCase().includes(q) || (t.description || '').toLowerCase().includes(q));
    }
    if (categoryFilter !== 'All') list = list.filter((t) => t.category === categoryFilter);
    if (filter !== 'All') list = list.filter((t) => getTaskStatus(t) === filter.toLowerCase());
    return list.sort((a, b) => {
      if (a.completed !== b.completed) return a.completed ? 1 : -1;
      return new Date(a.deadline) - new Date(b.deadline);
    });
  }, [tasks, search, filter, categoryFilter]);

  const counts = useMemo(() => ({
    All: tasks.length,
    Active: tasks.filter((t) => getTaskStatus(t) === 'active').length,
    Urgent: tasks.filter((t) => getTaskStatus(t) === 'urgent').length,
    Completed: tasks.filter((t) => t.completed).length,
    Overdue: tasks.filter((t) => getTaskStatus(t) === 'overdue').length,
  }), [tasks]);

  const filterIcons = { All: Filter, Active: Clock, Urgent: AlertTriangle, Completed: CheckCircle, Overdue: AlertTriangle };

  return (
    <div className="p-5 md:p-8 max-w-3xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-xl font-black" style={{ color: theme.text }}>Task Manager</h2>
          <p className="text-sm mt-0.5" style={{ color: theme.textMuted }}>
            {tasks.filter((t) => !t.completed).length} active · {tasks.filter((t) => t.completed).length} completed
          </p>
        </div>
        <button
          onClick={() => { setEditingTask(null); setShowForm(true); }}
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl font-semibold text-sm transition-all active:scale-95 shadow-sm"
          style={{ backgroundColor: theme.primary, color: theme.primaryText }}
        >
          <Plus size={16} />
          <span className="hidden sm:inline">Add Task</span>
          <span className="sm:hidden">Add</span>
        </button>
      </div>

      <div
        className="flex items-center gap-2 px-3 py-2 rounded-xl mb-4"
        style={{ backgroundColor: theme.surface, border: `1.5px solid ${theme.border}` }}
      >
        <Search size={16} style={{ color: theme.textMuted, flexShrink: 0 }} />
        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 text-sm outline-none bg-transparent"
          style={{ color: theme.text }}
        />
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-3 scrollbar-hide">
        {FILTERS.map((f) => {
          const Icon = filterIcons[f];
          const isActive = filter === f;
          return (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className="btn-press flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap"
              style={{
                backgroundColor: isActive ? theme.primary : theme.surface,
                color: isActive ? theme.primaryText : theme.textMuted,
                border: `1px solid ${isActive ? theme.primary : theme.border}`,
                transition: 'background-color 160ms ease, color 160ms ease, border-color 160ms ease, transform 120ms var(--ease-out)',
              }}
            >
              <Icon size={12} />
              {f}
              {counts[f] > 0 && (
                <span
                  className="ml-0.5 px-1.5 py-0.5 rounded-full text-xs"
                  style={{ backgroundColor: isActive ? 'rgba(255,255,255,0.25)' : theme.badgeBg, color: isActive ? 'white' : theme.badgeText }}
                >
                  {counts[f]}
                </span>
              )}
            </button>
          );
        })}
      </div>

      <div className="flex gap-2 overflow-x-auto pb-1 mb-5 scrollbar-hide">
        {['All', ...TASK_CATEGORIES].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategoryFilter(cat)}
            className="px-3 py-1 rounded-full text-xs font-medium whitespace-nowrap transition-all"
            style={{
              backgroundColor: categoryFilter === cat ? theme.badgeBg : 'transparent',
              color: categoryFilter === cat ? theme.badgeText : theme.textMuted,
              border: `1px solid ${categoryFilter === cat ? theme.border : 'transparent'}`,
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {filtered.length === 0 ? (
        <div className="text-center py-16">
          <Inbox size={48} className="mx-auto mb-3" style={{ color: theme.border }} />
          <p className="font-semibold text-sm" style={{ color: theme.text }}>
            {search || filter !== 'All' ? 'No tasks match your filters' : 'No tasks yet'}
          </p>
          <p className="text-xs mt-1" style={{ color: theme.textMuted }}>
            {search || filter !== 'All' ? 'Try adjusting your search or filter' : 'Add your first task using the button above'}
          </p>
        </div>
      ) : (
        <div className="space-y-3">
          {filtered.map((task) => (
            <TaskCard key={task.id} task={task} onEdit={handleEdit} onDelete={handleDelete} onToggle={handleToggle} />
          ))}
        </div>
      )}

      {showForm && (
        <TaskForm
          task={editingTask}
          onSave={handleSave}
          onClose={() => { setShowForm(false); setEditingTask(null); }}
        />
      )}
    </div>
  );
}
