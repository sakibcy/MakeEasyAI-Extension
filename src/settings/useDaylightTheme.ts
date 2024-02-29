// useDaylightTheme.js
import { useState, useEffect } from 'react';

export const useDaylightTheme = () => {
  const [theme, setTheme] = useState('light'); // Initial theme

  // // Check user system preference on mount
  // useEffect(() => {
  //   const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');
  //   setTheme(prefersDark.matches ? 'dark' : 'light');

  //   // Update theme on preference change
  //   const handlePrefChange = () => setTheme(prefersDark.matches ? 'dark' : 'light');
  //   prefersDark.addEventListener('change', handlePrefChange);

  //   // Cleanup function to remove event listener
  //   return () => prefersDark.removeEventListener('change', handlePrefChange);
  // }, []);

  // Function to toggle theme manually
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');

  return { theme, toggleTheme };
};
