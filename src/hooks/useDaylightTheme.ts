import { useState } from 'react';

export const useDaylightTheme = () => {
  const [theme, setThemeState] = useState('light');

  const toggleTheme = () => {
    setThemeState(theme === 'light' ? 'dark' : 'light');
  };

  return { theme, toggleTheme };
};
