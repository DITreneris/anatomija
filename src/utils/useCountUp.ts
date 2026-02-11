/**
 * useCountUp – animuoja skaiciu nuo 0 iki target per nurodyta trukme.
 * Naudoja requestAnimationFrame + ease-out cubic.
 */
import { useState, useEffect, useRef } from 'react';

/**
 * @param target - galutine reiksme (pvz. 85)
 * @param duration - animacijos trukme ms (default 1500)
 * @param delay - uzlaikymas pries animacija ms (default 0)
 * @returns dabartine animuojama reiksme
 */
export function useCountUp(target: number, duration = 1500, delay = 0): number {
  const [value, setValue] = useState(0);
  const startRef = useRef<number | null>(null);
  const frameRef = useRef<number>(0);

  useEffect(() => {
    setValue(0);
    startRef.current = null;

    if (target <= 0) {
      setValue(0);
      return;
    }

    const timeout = setTimeout(() => {
      const animate = (timestamp: number) => {
        if (startRef.current === null) startRef.current = timestamp;
        const elapsed = timestamp - startRef.current;
        const progress = Math.min(elapsed / duration, 1);
        // Ease-out cubic: 1 - (1-t)^3
        const eased = 1 - Math.pow(1 - progress, 3);
        setValue(Math.round(eased * target));
        if (progress < 1) {
          frameRef.current = requestAnimationFrame(animate);
        }
      };
      frameRef.current = requestAnimationFrame(animate);
    }, delay);

    return () => {
      clearTimeout(timeout);
      cancelAnimationFrame(frameRef.current);
      startRef.current = null;
    };
  }, [target, duration, delay]);

  return value;
}
