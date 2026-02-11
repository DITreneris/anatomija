import { useState, useEffect } from 'react';

/**
 * Tamsaus režimo būsena: inicializacija iš localStorage arba prefers-color-scheme,
 * sinchronizacija su document.documentElement ir localStorage.
 */
export function useTheme(): [boolean, (value: boolean) => void] {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const stored = localStorage.getItem('theme');
    if (stored === 'dark' || stored === 'light') return stored === 'dark';
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return [isDark, setIsDark];
}
