import { useRef, useEffect } from 'react';
import { CheckCircle, XCircle, Trophy, RefreshCw, ArrowRight } from 'lucide-react';
import CircularProgress from './CircularProgress';
import { useCountUp } from '../utils/useCountUp';
import type { QuizQuestion } from '../types/modules';

export interface QuizResultsViewProps {
  questions: QuizQuestion[];
  answers: Record<number, number>;
  score: number;
  firstWrongIndex: number;
  onRestart: () => void;
  onBack: () => void;
}

export function QuizResultsView({
  questions,
  answers,
  score,
  firstWrongIndex,
  onRestart,
  onBack,
}: QuizResultsViewProps) {
  const resultsReviewRef = useRef<HTMLDivElement>(null);
  const firstWrongRef = useRef<HTMLDivElement>(null);
  const animatedScore = useCountUp(score, 1500, 300);

  useEffect(() => {
    const scroll = (el: HTMLElement | null, opts: ScrollIntoViewOptions) => {
      if (el?.scrollIntoView && typeof el.scrollIntoView === 'function') {
        el.scrollIntoView(opts);
      }
    };
    if (firstWrongIndex >= 0 && firstWrongRef.current) {
      scroll(firstWrongRef.current, { behavior: 'smooth', block: 'nearest' });
    } else {
      scroll(resultsReviewRef.current, { behavior: 'smooth', block: 'start' });
    }
  }, [firstWrongIndex]);

  const correctCount = questions.filter((q) => answers[q.id] === q.correct).length;
  const passed = score >= 70;

  return (
    <div className="max-w-3xl mx-auto space-y-8 animate-fade-in">
      <div className="card p-8 md:p-12 text-center">
        <div className="mb-6">
          <div
            className={`inline-flex items-center justify-center w-24 h-24 rounded-full ${
              passed
                ? 'bg-gradient-to-r from-emerald-400 to-emerald-500 shadow-lg shadow-emerald-500/30'
                : 'bg-gradient-to-r from-orange-400 to-orange-500 shadow-lg shadow-orange-500/30'
            } animate-bounce-in`}
          >
            {passed ? (
              <Trophy className="w-12 h-12 text-white" />
            ) : (
              <XCircle className="w-12 h-12 text-white" />
            )}
          </div>
        </div>

        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">
          {passed ? 'Puikiai! 🎉' : 'Bandykite dar kartą'}
        </h2>

        <div className="my-8">
          <CircularProgress
            progress={animatedScore}
            size={120}
            strokeWidth={12}
          />
        </div>

        <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
          Teisingai atsakyta:{' '}
          <span className="font-bold text-gray-900 dark:text-white">
            {correctCount}
          </span>{' '}
          iš {questions.length}
        </p>

        <div
          ref={resultsReviewRef}
          className="space-y-4 mb-8 text-left max-h-[50vh] overflow-y-auto overscroll-contain"
        >
          {questions.map((q, idx) => {
            const isCorrect = answers[q.id] === q.correct;
            const isFirstWrong = firstWrongIndex >= 0 && idx === firstWrongIndex;
            return (
              <div
                key={q.id}
                ref={isFirstWrong ? firstWrongRef : undefined}
                className={`p-4 rounded-xl border-2 scroll-mt-4 ${
                  isCorrect
                    ? 'bg-emerald-50 dark:bg-emerald-900/20 border-emerald-300 dark:border-emerald-700'
                    : 'bg-rose-50 dark:bg-rose-900/20 border-rose-300 dark:border-rose-700 ring-2 ring-rose-400/50'
                }`}
              >
                <div className="flex items-start gap-3 mb-3">
                  {isCorrect ? (
                    <CheckCircle className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0 mt-0.5" />
                  ) : (
                    <XCircle className="w-5 h-5 text-rose-600 dark:text-rose-400 flex-shrink-0 mt-0.5" />
                  )}
                  <p className="font-semibold text-gray-900 dark:text-white">
                    {q.question}
                  </p>
                </div>
                <div className="space-y-2 ml-8">
                  {q.options.map((option, optIdx) => (
                    <div
                      key={optIdx}
                      className={`text-sm p-3 rounded-lg ${
                        optIdx === q.correct
                          ? 'bg-emerald-200 dark:bg-emerald-800 font-semibold text-emerald-900 dark:text-emerald-100'
                          : optIdx === answers[q.id] && optIdx !== q.correct
                            ? 'bg-rose-200 dark:bg-rose-800 text-rose-900 dark:text-rose-100'
                            : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300'
                      }`}
                    >
                      {option}
                      {optIdx === q.correct && <span className="ml-2">✓</span>}
                      {optIdx === answers[q.id] && optIdx !== q.correct && (
                        <span className="ml-2">✗</span>
                      )}
                    </div>
                  ))}
                </div>
                {q.explanation && (
                  <div
                    className={`mt-4 p-3 rounded-lg border-l-4 ${
                      isCorrect
                        ? 'bg-emerald-100 dark:bg-emerald-900/30 border-emerald-500'
                        : 'bg-amber-100 dark:bg-amber-900/30 border-amber-500'
                    }`}
                  >
                    <p
                      className={`text-sm ${
                        isCorrect
                          ? 'text-emerald-800 dark:text-emerald-200'
                          : 'text-amber-800 dark:text-amber-200'
                      }`}
                    >
                      <strong>
                        {isCorrect ? '✓ Paaiškinimas:' : '✗ Paaiškinimas:'}
                      </strong>{' '}
                      {q.explanation}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={onRestart}
            className="btn-secondary flex items-center justify-center gap-2"
          >
            <RefreshCw className="w-5 h-5" />
            Pradėti iš naujo
          </button>
          <button
            onClick={onBack}
            className="btn-primary flex items-center justify-center gap-2"
          >
            Grįžti į pradžią
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
