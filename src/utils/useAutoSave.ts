import { useEffect, useRef } from 'react';

/**
 * Hook for auto-saving form values to localStorage with debounce
 */
export function useAutoSave<T>(
  key: string,
  value: T,
  delay: number = 1000
): void {
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>();

  useEffect(() => {
    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Set new timeout
    timeoutRef.current = setTimeout(() => {
      if (value !== undefined && value !== null && value !== '') {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch (error) {
          console.warn('Failed to save to localStorage:', error);
        }
      }
    }, delay);

    // Cleanup
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [key, value, delay]);
}

/**
 * Load auto-saved value from localStorage
 */
export function loadAutoSave<T>(key: string, defaultValue: T): T {
  try {
    const saved = localStorage.getItem(key);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.warn('Failed to load from localStorage:', error);
  }
  return defaultValue;
}

/**
 * Clear auto-saved value from localStorage
 */
export function clearAutoSave(key: string): void {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.warn('Failed to clear localStorage:', error);
  }
}
