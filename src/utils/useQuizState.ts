import { useState, useCallback, useMemo } from 'react';
import type { QuizQuestion } from '../types/modules';

export interface UseQuizStateParams {
  questions: QuizQuestion[];
  onQuizComplete?: (score: number) => void;
}

export interface UseQuizStateResult {
  currentIndex: number;
  setCurrentIndex: (value: number | ((prev: number) => number)) => void;
  answers: Record<number, number>;
  showResults: boolean;
  score: number;
  showExplanation: boolean;
  setShowExplanation: (value: boolean) => void;
  handleAnswer: (questionId: number, answerIndex: number) => void;
  handleSubmit: () => void;
  handleRestart: () => void;
  firstWrongIndex: number;
  correctCount: number;
}

export function useQuizState({
  questions,
  onQuizComplete,
}: UseQuizStateParams): UseQuizStateResult {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = useCallback((questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({ ...prev, [questionId]: answerIndex }));
    setShowExplanation(true);
  }, []);

  const handleSubmit = useCallback(() => {
    let correct = 0;
    questions.forEach((q) => {
      if (answers[q.id] === q.correct) {
        correct++;
      }
    });
    const finalScore =
      questions.length > 0
        ? Math.round((correct / questions.length) * 100)
        : 0;
    setScore(finalScore);
    setShowResults(true);
    onQuizComplete?.(finalScore);

    if (finalScore >= 70 && typeof window !== 'undefined') {
      import('canvas-confetti').then((confetti) => {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = {
          startVelocity: 30,
          spread: 360,
          ticks: 60,
          zIndex: 0,
        };
        const randomInRange = (min: number, max: number) =>
          Math.random() * (max - min) + min;
        const interval = setInterval(function () {
          const timeLeft = animationEnd - Date.now();
          if (timeLeft <= 0) {
            clearInterval(interval);
            return;
          }
          const particleCount = 50 * (timeLeft / duration);
          confetti.default({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
          });
          confetti.default({
            ...defaults,
            particleCount,
            origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
          });
        }, 250);
      });
    }
  }, [questions, answers, onQuizComplete]);

  const handleRestart = useCallback(() => {
    setCurrentIndex(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
  }, []);

  const firstWrongIndex = useMemo(
    () =>
      showResults
        ? questions.findIndex((q) => answers[q.id] !== q.correct)
        : -1,
    [showResults, questions, answers]
  );

  const correctCount = useMemo(
    () => questions.filter((q) => answers[q.id] === q.correct).length,
    [questions, answers]
  );

  return {
    currentIndex,
    setCurrentIndex,
    answers,
    showResults,
    score,
    showExplanation,
    setShowExplanation,
    handleAnswer,
    handleSubmit,
    handleRestart,
    firstWrongIndex,
    correctCount,
  };
}
