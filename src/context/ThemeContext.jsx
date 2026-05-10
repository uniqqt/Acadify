import { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from './AuthContext';
import { getTheme, applyTheme, THEMES } from '../utils/theme';

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const { user } = useAuth();
  const [theme, setTheme] = useState(THEMES.default);

  useEffect(() => {
    const resolved = getTheme(user);
    setTheme(resolved);
    applyTheme(resolved);
  }, [user]);

  const overrideTheme = (themeId) => {
    const t = THEMES[themeId] || THEMES.default;
    setTheme(t);
    applyTheme(t);
  };

  return (
    <ThemeContext.Provider value={{ theme, overrideTheme, themes: THEMES }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useTheme = () => {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error('useTheme must be used within ThemeProvider');
  return ctx;
};
