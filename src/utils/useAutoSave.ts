import { useEffect, useRef } from 'react';
import { logWarning } from './logger';

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
          logWarning('Failed to save to localStorage', {
            key,
            error: error instanceof Error ? error.message : String(error),
          });
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
    logWarning('Failed to load from localStorage', {
      key,
      error: error instanceof Error ? error.message : String(error),
    });
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
    logWarning('Failed to clear localStorage', {
      key,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}

/**
 * Save completed task content – persisten storage (redaguoti vėliau)
 */
export function saveCompletedContent(key: string, value: string): void {
  try {
    if (value?.trim()) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  } catch (error) {
    logWarning('Failed to save completed content', {
      key,
      error: error instanceof Error ? error.message : String(error),
    });
  }
}
