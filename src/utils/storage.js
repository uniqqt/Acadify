import { supabase } from '../lib/supabase';

// ── Tasks ─────────────────────────────────────────────────────────────────────
export const getTasks = async (userId) => {
  if (!userId) return [];
  const { data, error } = await supabase
    .from('tasks')
    .select('*')
    .eq('user_id', userId)
    .order('deadline', { ascending: true });
  if (error) { console.error('getTasks:', error); return []; }
  return (data || []).map((r) => ({
    id: r.id,
    userId: r.user_id,
    title: r.title,
    description: r.description,
    category: r.category,
    deadline: r.deadline,
    completed: r.completed,
    createdAt: r.created_at,
  }));
};

export const saveTask = async (task) => {
  const { error } = await supabase.from('tasks').upsert({
    id: task.id,
    user_id: task.userId,
    title: task.title,
    description: task.description || null,
    category: task.category,
    deadline: task.deadline,
    completed: task.completed,
    created_at: task.createdAt,
  });
  if (error) console.error('saveTask:', error);
};

export const deleteTask = async (taskId) => {
  const { error } = await supabase.from('tasks').delete().eq('id', taskId);
  if (error) console.error('deleteTask:', error);
};

// ── Progress ──────────────────────────────────────────────────────────────────
export const getProgress = async (userId) => {
  if (!userId) return {};
  const { data, error } = await supabase
    .from('study_progress')
    .select('*')
    .eq('user_id', userId);
  if (error) { console.error('getProgress:', error); return {}; }
  const result = {};
  (data || []).forEach((r) => {
    result[r.topic_id] = { viewed: r.viewed, sections: r.sections || [] };
  });
  return result;
};

export const markLawViewed = async (userId, lawId) => {
  const { error } = await supabase.from('study_progress').upsert(
    { user_id: userId, topic_id: lawId, viewed: true },
    { onConflict: 'user_id,topic_id', ignoreDuplicates: true }
  );
  if (error) console.error('markLawViewed:', error);
};

export const setSectionRead = async (userId, lawId, sectionId, isRead) => {
  const { data } = await supabase
    .from('study_progress')
    .select('sections')
    .eq('user_id', userId)
    .eq('topic_id', lawId)
    .maybeSingle();

  const current = data?.sections || [];
  const updated = isRead
    ? [...new Set([...current, sectionId])]
    : current.filter((s) => s !== sectionId);

  const { error } = await supabase.from('study_progress').upsert(
    { user_id: userId, topic_id: lawId, viewed: true, sections: updated, updated_at: new Date().toISOString() },
    { onConflict: 'user_id,topic_id' }
  );
  if (error) console.error('setSectionRead:', error);
};

// ── Quiz Results ──────────────────────────────────────────────────────────────
export const getQuizResults = async (userId) => {
  if (!userId) return [];
  const { data, error } = await supabase
    .from('quiz_results')
    .select('*')
    .eq('user_id', userId)
    .order('created_at', { ascending: false })
    .limit(50);
  if (error) { console.error('getQuizResults:', error); return []; }
  return (data || []).map((r) => ({
    lawId: r.topic_id,
    score: r.score,
    total: r.total,
    date: r.created_at,
    answers: r.answers,
  }));
};

export const saveQuizResult = async (userId, result) => {
  const { error } = await supabase.from('quiz_results').insert({
    user_id: userId,
    topic_id: result.lawId,
    score: result.score,
    total: result.total,
    answers: result.answers,
  });
  if (error) console.error('saveQuizResult:', error);
};

export const getAllBestScores = async (userId) => {
  if (!userId) return {};
  const { data, error } = await supabase
    .from('quiz_results')
    .select('topic_id, score')
    .eq('user_id', userId);
  if (error) { console.error('getAllBestScores:', error); return {}; }
  const best = {};
  (data || []).forEach((r) => {
    if (best[r.topic_id] === undefined || r.score > best[r.topic_id]) {
      best[r.topic_id] = r.score;
    }
  });
  return best;
};

// ── Streak ────────────────────────────────────────────────────────────────────
export const getStreak = async (userId) => {
  if (!userId) return { current: 0, longest: 0, lastDate: null };
  const { data } = await supabase
    .from('profiles')
    .select('streak_current, streak_longest, streak_last_date')
    .eq('id', userId)
    .single();
  if (!data) return { current: 0, longest: 0, lastDate: null };
  return { current: data.streak_current || 0, longest: data.streak_longest || 0, lastDate: data.streak_last_date };
};

export const updateStreak = async (userId) => {
  const streak = await getStreak(userId);
  const today = new Date().toDateString();
  if (streak.lastDate === today) return streak;
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const newCurrent = streak.lastDate === yesterday ? streak.current + 1 : 1;
  const updated = { streak_current: newCurrent, streak_longest: Math.max(streak.longest, newCurrent), streak_last_date: today };
  await supabase.from('profiles').update(updated).eq('id', userId);
  return { current: newCurrent, longest: updated.streak_longest, lastDate: today };
};

// ── Notes ─────────────────────────────────────────────────────────────────────
export const getNotes = async (userId) => {
  if (!userId) return [];
  const { data, error } = await supabase
    .from('notes')
    .select('*')
    .eq('user_id', userId)
    .order('updated_at', { ascending: false });
  if (error) { console.error('getNotes:', error); return []; }
  return (data || []).map((r) => ({
    id: r.id,
    title: r.title,
    content: r.content,
    topicId: r.topic_id,
    createdAt: r.created_at,
    updatedAt: r.updated_at,
  }));
};

export const saveNote = async (userId, note) => {
  const now = new Date().toISOString();
  const { data, error } = await supabase.from('notes').upsert({
    id: note.id,
    user_id: userId,
    title: note.title || 'Untitled',
    content: note.content || '',
    topic_id: note.topicId || null,
    updated_at: now,
    ...(note.createdAt ? {} : { created_at: now }),
  }, { onConflict: 'id' }).select().single();
  if (error) { console.error('saveNote:', error); return null; }
  return data;
};

export const deleteNote = async (noteId) => {
  const { error } = await supabase.from('notes').delete().eq('id', noteId);
  if (error) console.error('deleteNote:', error);
};

// ── Notifications Seen (UI-only, stays in localStorage) ───────────────────────
export const getSeenNotifs = (userId) => {
  try { return JSON.parse(localStorage.getItem(`sc_notifs_${userId}`)) || []; }
  catch { return []; }
};

export const markNotifsSeenBatch = (userId, ids) => {
  const seen = new Set(getSeenNotifs(userId));
  ids.forEach((id) => seen.add(id));
  localStorage.setItem(`sc_notifs_${userId}`, JSON.stringify([...seen]));
};
