import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import type { Module, Slide } from '../types/modules';
import type { Progress } from './progress';

const SWIPE_THRESHOLD = 60;
const SLIDE_POS_KEY = 'prompt-anatomy-slide-pos';

/* ─── Slide position persistence ─── */

function getSavedSlidePosition(moduleId: number): number {
  try {
    const raw = localStorage.getItem(SLIDE_POS_KEY);
    if (!raw) return 0;
    const map: Record<string, number> = JSON.parse(raw);
    return typeof map[String(moduleId)] === 'number' ? map[String(moduleId)] : 0;
  } catch {
    return 0;
  }
}

export function saveSlidePosition(moduleId: number, slideIndex: number): void {
  try {
    const raw = localStorage.getItem(SLIDE_POS_KEY);
    const map: Record<string, number> = raw ? JSON.parse(raw) : {};
    map[String(moduleId)] = slideIndex;
    localStorage.setItem(SLIDE_POS_KEY, JSON.stringify(map));
  } catch {
    // ignore – non-critical
  }
}

export interface UseSlideNavigationParams {
  module: Module | null | undefined;
  moduleId: number;
  progress: Progress;
  onComplete: (moduleId: number) => void;
  /** Jei true – iškart eiti prie saved pozicijos (ne rodyti resume prompt) */
  resumeImmediately?: boolean;
  /** F2-3: atidaryti modulį tiesiai nuo šios skaidrės (remediation deep link) */
  initialSlideIndex?: number | null;
}

export interface UseSlideNavigationResult {
  currentSlide: number;
  setCurrentSlide: (index: number | ((prev: number) => number)) => void;
  nextSlide: () => void;
  prevSlide: () => void;
  isFirstSlide: boolean;
  isLastSlide: boolean;
  hasIncompletePracticalTask: boolean;
  slideProgress: number;
  currentSlideData: Slide | undefined;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchEnd: (e: React.TouchEvent) => void;
  showModuleComplete: boolean;
  setShowModuleComplete: (show: boolean) => void;
  /** Saved slide pozicija (>0) jei vartotojas turi progress šiame modulyje */
  savedSlidePosition: number;
}

export function useSlideNavigation({
  module,
  moduleId,
  progress,
  onComplete,
  resumeImmediately,
  initialSlideIndex,
}: UseSlideNavigationParams): UseSlideNavigationResult {
  const savedPos = useMemo(() => getSavedSlidePosition(moduleId), [moduleId]);
  const initialSlide = useMemo(() => {
    if (initialSlideIndex != null && module?.slides?.length) {
      return Math.min(Math.max(0, initialSlideIndex), module.slides.length - 1);
    }
    return resumeImmediately && savedPos > 0 ? savedPos : 0;
  }, [initialSlideIndex, module?.slides?.length, resumeImmediately, savedPos]);
  const [currentSlide, setCurrentSlide] = useState(initialSlide);
  const [showModuleComplete, setShowModuleComplete] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const nextSlide = useCallback(() => {
    if (!module) return;
    if (currentSlide < module.slides.length - 1) {
      setCurrentSlide((prev) => prev + 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      if (!progress.completedModules.includes(moduleId)) {
        onComplete(moduleId);
      }
      setShowModuleComplete(true);
    }
  }, [currentSlide, module, progress.completedModules, moduleId, onComplete]);

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      setCurrentSlide((prev) => prev - 1);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [currentSlide]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  }, []);

  const handleTouchEnd = useCallback(
    (e: React.TouchEvent) => {
      if (touchStartX.current == null) return;
      const delta = e.changedTouches[0].clientX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < SWIPE_THRESHOLD) return;
      if (delta > 0) prevSlide();
      else nextSlide();
    },
    [nextSlide, prevSlide]
  );

  const currentSlideData = useMemo(
    () => module?.slides[currentSlide],
    [module, currentSlide]
  );

  const isLastSlide = useMemo(
    () => currentSlide === (module?.slides.length ?? 0) - 1,
    [currentSlide, module]
  );

  const isFirstSlide = useMemo(() => currentSlide === 0, [currentSlide]);

  const hasIncompletePracticalTask = useMemo(
    () =>
      Boolean(
        currentSlideData?.practicalTask &&
          !progress.completedTasks[moduleId]?.includes(currentSlideData.id)
      ),
    [currentSlideData, progress.completedTasks, moduleId]
  );

  const slideProgress = useMemo(
    () =>
      module ? ((currentSlide + 1) / module.slides.length) * 100 : 0,
    [currentSlide, module]
  );

  // Persist slide position on every change
  useEffect(() => {
    saveSlidePosition(moduleId, currentSlide);
  }, [moduleId, currentSlide]);

  // Reset when module changes (new module opened)
  useEffect(() => {
    const saved = getSavedSlidePosition(moduleId);
    const nextSlide =
      initialSlideIndex != null && module?.slides?.length
        ? Math.min(Math.max(0, initialSlideIndex), module.slides.length - 1)
        : resumeImmediately && saved > 0
          ? saved
          : 0;
    setCurrentSlide(nextSlide);
    setShowModuleComplete(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [moduleId]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
        e.preventDefault();
        if (!showModuleComplete) nextSlide();
      } else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
        e.preventDefault();
        if (!showModuleComplete) prevSlide();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [nextSlide, prevSlide, showModuleComplete]);

  return {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
    isFirstSlide,
    isLastSlide,
    hasIncompletePracticalTask,
    slideProgress,
    currentSlideData,
    handleTouchStart,
    handleTouchEnd,
    showModuleComplete,
    setShowModuleComplete,
    savedSlidePosition: savedPos,
  };
}
