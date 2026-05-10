import { supabase } from '../lib/supabase';

export const getHighlights = async (userId) => {
  if (!userId) return {};
  const { data, error } = await supabase
    .from('highlights')
    .select('*')
    .eq('user_id', userId);
  if (error) { console.error('getHighlights:', error); return {}; }
  const result = {};
  (data || []).forEach((r) => {
    if (!result[r.section_id]) result[r.section_id] = [];
    result[r.section_id].push({ text: r.text, color: r.color, id: r.id });
  });
  return result;
};

export const addHighlight = async (userId, sectionId, text, color) => {
  const { error } = await supabase.from('highlights').insert({
    id: `h_${Date.now()}`,
    user_id: userId,
    section_id: sectionId,
    text,
    color,
  });
  if (error) console.error('addHighlight:', error);
};

export const removeHighlight = async (userId, sectionId, text) => {
  const { error } = await supabase
    .from('highlights')
    .delete()
    .eq('user_id', userId)
    .eq('section_id', sectionId)
    .eq('text', text);
  if (error) console.error('removeHighlight:', error);
};
