import { useEffect, useState } from 'react';

export const useDaylightTheme = () => {
  const [theme, setThemeState] = useState('light');

  chrome.storage.sync.get(["theme"]).then(res => {
    if (res.theme) {
      setThemeState(res.theme);
    }
  })

  const toggleTheme = () => {
    setThemeState(theme === 'light' ? 'dark' : 'light')
    setThemeStateToStorage(theme === 'light' ? 'dark' : 'light')
  };

  return { theme, toggleTheme };
};

const setThemeStateToStorage = async (theme: string) => {
  try {
    await chrome.storage.sync.set({theme});
  } catch (error) {
    console.error("Error saving selection text:", error);
  }
}