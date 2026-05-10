import { createContext, useContext, useState, useEffect } from 'react';
import { supabase } from '../lib/supabase';
import { updateStreak } from '../utils/storage';

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authError, setAuthError] = useState('');

  const loadProfile = async (authUser) => {
    const { data: profile } = await supabase
      .from('profiles')
      .select('*')
      .eq('id', authUser.id)
      .single();

    if (profile) {
      setUser({
        id: authUser.id,
        email: authUser.email,
        name: profile.name,
        course: profile.course,
        avatar: profile.avatar,
        streak: {
          current: profile.streak_current || 0,
          longest: profile.streak_longest || 0,
          lastDate: profile.streak_last_date,
        },
      });
      // Update streak (no-op if already updated today)
      updateStreak(authUser.id);
    }
    setLoading(false);
  };

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      if (session) loadProfile(session.user);
      else setLoading(false);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      if (session) loadProfile(session.user);
      else { setUser(null); setLoading(false); }
    });

    return () => subscription.unsubscribe();
  }, []);

  const login = async (email, password) => {
    setAuthError('');
    const { error } = await supabase.auth.signInWithPassword({ email: email.trim(), password });
    if (error) {
      setAuthError(
        error.message.includes('Invalid login credentials')
          ? 'Incorrect email or password.'
          : error.message
      );
      return false;
    }
    return true;
  };

  const signup = async ({ name, email, password, course, customCourse }) => {
    setAuthError('');
    const finalCourse = course === 'custom' ? (customCourse || 'other').toLowerCase().trim() : course;
    const { error } = await supabase.auth.signUp({
      email: email.trim().toLowerCase(),
      password,
      options: {
        data: { name: name.trim(), course: finalCourse, avatar: name.trim().charAt(0).toUpperCase() },
      },
    });
    if (error) { setAuthError(error.message); return false; }
    return true;
  };

  const logout = async () => {
    await supabase.auth.signOut();
    setUser(null);
    setAuthError('');
  };

  return (
    <AuthContext.Provider value={{ user, loading, authError, login, signup, logout, setAuthError }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
};
