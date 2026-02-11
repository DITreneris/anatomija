import { useState, useEffect, useCallback, useMemo } from 'react';
import { CheckCircle, ChevronRight, Target, Flame, ExternalLink, ClipboardCheck, ListChecks, Lightbulb, BarChart2, TrendingUp, Users, Megaphone, MessageSquare, AlertCircle, Briefcase } from 'lucide-react';
import type { Slide, TestQuestion } from '../../../types/modules';
import type { Progress } from '../../../utils/progress';
import { McqQuestion, TrueFalseQuestion, MatchingQuestion, OrderingQuestion, ScenarioQuestion } from '../shared/questions';
import type { ConfidenceLevel } from '../shared/questions';
import RadarChart from '../shared/RadarChart';
import type { RadarDataPoint } from '../shared/RadarChart';
import { useCountUp } from '../../../utils/useCountUp';
import { getModulesSync } from '../../../data/modulesLoader';
import { saveSlidePosition } from '../../../utils/useSlideNavigation';
import { selectQuestionsByCategory } from '../../../utils/questionPoolSelector';

/** Category scores from the last test attempt (session-lived, not persisted) */
export interface CategoryScore {
  correct: number;
  total: number;
  percentage: number;
}
let lastCategoryScores: Record<string, CategoryScore> = {};
let lastMaxStreak = 0;

export function TestIntroSlide({ slide: _slide, moduleId }: { slide: Slide; moduleId: number }) {
  if (moduleId === 5) {
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-violet-50 to-brand-50 dark:from-violet-900/20 dark:to-brand-900/20 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800">
          <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white">Mini testas po prezentacijos sprinto</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Jūs ką tik atlikote <strong>15 min prezentacijos sprintą</strong> (brief → struktūra → skaidrės).
            Šis mini testas patikrina, ar suprantate esminę logiką: aiškų brief, struktūrą, įrankio pasirinkimą ir greitą kokybės patikrą.
          </p>
          <p className="text-sm text-violet-700 dark:text-violet-300">
            Rezultatas <strong>≥70%</strong> – rekomenduojama pereiti prie Modulio 6 (praktika). Rezultatas <strong>&lt;70%</strong> – rekomenduojama pakartoti sprintą ir peržiūrėti Modulio 4 „Struktūruotą procesą“ (4.1b).
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 border border-brand-200 dark:border-brand-800 p-5 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-brand-900 dark:text-brand-100 flex items-center gap-2.5">
              <span className="inline-flex p-2 rounded-lg bg-brand-500/10 dark:bg-brand-500/20">
                <ListChecks className="w-5 h-5 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
              </span>
              Testo struktūra
            </h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>• 3 klausimai (brief, struktūra, kokybės patikra)</li>
              <li>• Kiekvienas turi paaiškinimą</li>
              <li>• Nėra laiko limito</li>
            </ul>
          </div>
          <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 border border-accent-200 dark:border-accent-800 p-5 rounded-xl">
            <h4 className="font-bold text-lg mb-3 text-accent-900 dark:text-accent-100 flex items-center gap-2.5">
              <span className="inline-flex p-2 rounded-lg bg-accent-500/10 dark:bg-accent-500/20">
                <Target className="w-5 h-5 text-accent-600 dark:text-accent-400" strokeWidth={1.5} />
              </span>
              Tikslas
            </h4>
            <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
              <li>• Įsitikinti, kad sprintas padarytas teisingai</li>
              <li>• Greitai pastebėti spragas</li>
              <li>• ≥70% = rekomenduojama į praktiką</li>
            </ul>
          </div>
        </div>
        <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl">
          <p className="text-brand-800 dark:text-brand-200 text-sm flex items-start gap-2.5">
            <span className="inline-flex p-1.5 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 shrink-0 mt-0.5">
              <Lightbulb className="w-4 h-4 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
            </span>
            <span><strong>Patarimas:</strong> Jei nežinote atsakymo, pasirinkite tai, kas atrodo logiškiausia. Po kiekvieno klausimo pamatysite paaiškinimą.</span>
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="bg-gradient-to-r from-violet-50 to-brand-50 dark:from-violet-900/20 dark:to-brand-900/20 p-6 rounded-xl border-2 border-violet-200 dark:border-violet-800">
        <h3 className="font-bold text-xl mb-3 text-gray-900 dark:text-white flex items-center gap-2.5">
          <span className="inline-flex p-2 rounded-lg bg-violet-500/10 dark:bg-violet-500/20">
            <ClipboardCheck className="w-5 h-5 text-violet-600 dark:text-violet-400" strokeWidth={1.5} />
          </span>
          Žinių Patikrinimas
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          Šiame modulyje patikrinsite, ar supratote 6 blokų sistemą.
          Kiekvienas klausimas turi paaiškinimą, todėl tai yra ir mokymosi galimybė.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="bg-brand-50 dark:bg-brand-900/20 border-l-4 border-brand-500 border border-brand-200 dark:border-brand-800 p-5 rounded-xl">
          <h4 className="font-bold text-lg mb-3 text-brand-900 dark:text-brand-100 flex items-center gap-2.5">
            <span className="inline-flex p-2 rounded-lg bg-brand-500/10 dark:bg-brand-500/20">
              <ListChecks className="w-5 h-5 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
            </span>
            Testo struktūra
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>• 15 klausimų – 5 skirtingi formatai</li>
            <li>• Pasirinkimai, porų sujungimas, rikiavimas</li>
            <li>• Tiesa/netiesa ir verslo scenarijai</li>
            <li>• Kiekvienas turi paaiškinimą ir užuominą</li>
          </ul>
        </div>
        <div className="bg-accent-50 dark:bg-accent-900/20 border-l-4 border-accent-500 border border-accent-200 dark:border-accent-800 p-5 rounded-xl">
          <h4 className="font-bold text-lg mb-3 text-accent-900 dark:text-accent-100 flex items-center gap-2.5">
            <span className="inline-flex p-2 rounded-lg bg-accent-500/10 dark:bg-accent-500/20">
              <Target className="w-5 h-5 text-accent-600 dark:text-accent-400" strokeWidth={1.5} />
            </span>
            Tikslas
          </h4>
          <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-2">
            <li>• Įtvirtinti žinias skirtingais būdais</li>
            <li>• Identifikuoti spragas pagal blokus</li>
            <li>• Pasiruošti praktikai</li>
            <li>• ≥70% = sėkmė</li>
          </ul>
        </div>
      </div>
      <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl">
        <p className="text-brand-800 dark:text-brand-200 text-sm flex items-start gap-2.5">
          <span className="inline-flex p-1.5 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
          </span>
          <span><strong>Patarimas:</strong> Jei nežinote atsakymo, pasirinkite tai, kas atrodo logiškiausia. Po kiekvieno klausimo pamatysite paaiškinimą.</span>
        </p>
      </div>
    </div>
  );
}

/** Resolve question type, defaulting to 'mcq' for backward compatibility */
function getQuestionType(q: TestQuestion): string {
  return q.type || 'mcq';
}

/** Check if a question is answered (works for all types) */
function isQuestionAnswered(q: TestQuestion, answers: Record<string, number>, completedSpecial: Set<string>): boolean {
  const type = getQuestionType(q);
  if (type === 'matching' || type === 'ordering') {
    return completedSpecial.has(q.id);
  }
  return answers[q.id] !== undefined;
}

/** Check if answer is correct for MCQ/TF/Scenario */
function isMcqCorrect(q: TestQuestion, answer: number | undefined): boolean {
  const type = getQuestionType(q);
  if (type === 'true-false') {
    const correctValue = q.isTrue ? 1 : 0;
    return answer === correctValue;
  }
  return answer === (q.correct ?? -1);
}

export function TestSectionSlide({
  questions,
  onComplete,
  isCompleted,
}: {
  questions: TestQuestion[];
  onComplete: (score?: number) => void;
  isCompleted: boolean;
}) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [confidence, setConfidence] = useState<Record<string, ConfidenceLevel>>({});
  const [showResults, setShowResults] = useState(false);
  const [hints, setHints] = useState<Set<string>>(new Set());
  const [completedSpecial, setCompletedSpecial] = useState<Set<string>>(new Set());
  const [specialScores, setSpecialScores] = useState<Record<string, number>>({});
  const [, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);

  useEffect(() => {
    setAnswers({});
    setConfidence({});
    setShowResults(false);
    setHints(new Set());
    setCompletedSpecial(new Set());
    setSpecialScores({});
    setStreak(0);
    setMaxStreak(0);
  }, [questions]);

  const handleAnswer = useCallback((questionId: string, optionIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, [showResults]);

  const handleRequestHint = useCallback((questionId: string) => {
    setHints((prev) => new Set(prev).add(questionId));
  }, []);

  /** Called by Matching/Ordering when they self-check */
  const handleSpecialComplete = useCallback((questionId: string, score: number) => {
    setCompletedSpecial((prev) => new Set(prev).add(questionId));
    setSpecialScores((prev) => ({ ...prev, [questionId]: score }));
  }, []);

  const handleConfidence = useCallback((questionId: string, level: ConfidenceLevel) => {
    setConfidence((prev) => ({ ...prev, [questionId]: level }));
  }, []);

  const handleCheck = useCallback(() => {
    setShowResults(true);

    // Calculate score across all question types
    let totalScore = 0;
    const questionCount = questions.length;

    questions.forEach((q) => {
      const type = getQuestionType(q);
      if (type === 'matching' || type === 'ordering') {
        // Score already captured from self-check (0–1 fraction)
        totalScore += (specialScores[q.id] ?? 0);
      } else {
        // MCQ, true-false, scenario – binary correct
        const answer = answers[q.id];
        if (isMcqCorrect(q, answer)) {
          totalScore += 1;
        }
      }
    });

    // Apply hint penalty: reduce by 0.5 for questions where hint was used but got right (half credit)
    questions.forEach((q) => {
      const type = getQuestionType(q);
      if (hints.has(q.id) && type !== 'matching' && type !== 'ordering') {
        if (isMcqCorrect(q, answers[q.id])) {
          totalScore -= 0.5;
        }
      }
    });

    const score = questionCount > 0 ? Math.round((totalScore / questionCount) * 100) : 0;

    // Calculate streak
    let currentStreak = 0;
    let bestStreak = 0;
    questions.forEach((q) => {
      const type = getQuestionType(q);
      let isCorrect = false;
      if (type === 'matching' || type === 'ordering') {
        isCorrect = (specialScores[q.id] ?? 0) >= 0.8; // 80%+ counts as correct for streak
      } else {
        isCorrect = isMcqCorrect(q, answers[q.id]);
      }
      if (isCorrect) {
        currentStreak++;
        if (currentStreak > bestStreak) bestStreak = currentStreak;
      } else {
        currentStreak = 0;
      }
    });
    setStreak(currentStreak);
    setMaxStreak(bestStreak);
    lastMaxStreak = bestStreak;

    // Calculate per-category scores for radar chart
    const catScores: Record<string, CategoryScore> = {};
    questions.forEach((q) => {
      const cat = q.category || 'bendra';
      if (!catScores[cat]) catScores[cat] = { correct: 0, total: 0, percentage: 0 };
      catScores[cat].total += 1;
      const qType = getQuestionType(q);
      let qCorrect = false;
      if (qType === 'matching' || qType === 'ordering') {
        qCorrect = (specialScores[q.id] ?? 0) >= 0.8;
      } else {
        qCorrect = isMcqCorrect(q, answers[q.id]);
      }
      if (qCorrect) catScores[cat].correct += 1;
    });
    for (const cat of Object.keys(catScores)) {
      const { correct, total: catTotal } = catScores[cat];
      catScores[cat].percentage = catTotal > 0 ? Math.round((correct / catTotal) * 100) : 0;
    }
    lastCategoryScores = catScores;

    const allAnswered = questions.every((q) => isQuestionAnswered(q, answers, completedSpecial) && confidence[q.id] != null);
    if (allAnswered) {
      onComplete(Math.max(0, score));
    }
  }, [questions, answers, specialScores, hints, completedSpecial, confidence, onComplete]);

  const allAnswered = questions.every((q) => isQuestionAnswered(q, answers, completedSpecial) && confidence[q.id] != null);
  const answeredCount = questions.filter(
    (q) => isQuestionAnswered(q, answers, completedSpecial) && confidence[q.id] != null
  ).length;
  const totalCount = questions.length;

  return (
    <div className="space-y-6">
      {/* Sticky mini-progress: X iš 15 (P3 Moduliai 1-2-3 UX) */}
      {!showResults && (
        <div className="sticky top-0 z-10 py-3 mb-4 bg-white/95 dark:bg-gray-900/95 backdrop-blur-sm border-b border-gray-200 dark:border-gray-700 -mt-2">
          <div className="flex items-center justify-between gap-2">
            <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
              {answeredCount} iš {totalCount} klausimų atsakyta
            </span>
            <div className="flex-1 max-w-[120px] h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-brand-500 to-accent-500 transition-all duration-300"
                style={{ width: `${totalCount > 0 ? (answeredCount / totalCount) * 100 : 0}%` }}
                role="progressbar"
                aria-valuenow={answeredCount}
                aria-valuemin={0}
                aria-valuemax={totalCount}
                aria-label={`${answeredCount} iš ${totalCount} klausimų atsakyta`}
              />
            </div>
          </div>
        </div>
      )}

      {/* Streak indicator */}
      {maxStreak >= 3 && showResults && (
        <div className="flex items-center justify-center gap-2 p-3 bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-xl border border-amber-200 dark:border-amber-800 animate-fade-in">
          <Flame className="w-5 h-5 text-orange-500" />
          <span className="font-bold text-orange-700 dark:text-orange-300">
            {maxStreak} teisingi iš eilės!
          </span>
          {maxStreak === questions.length && (
            <span className="ml-2 px-2 py-0.5 bg-orange-500 text-white text-xs font-bold rounded-full">
              Puikiai!
            </span>
          )}
        </div>
      )}

      {questions.map((q, qIdx) => {
        const type = getQuestionType(q);
        const userAnswer = answers[q.id];
        const showHint = hints.has(q.id);

        switch (type) {
          case 'true-false':
            return (
              <TrueFalseQuestion
                key={q.id}
                question={q}
                questionIndex={qIdx}
                userAnswer={userAnswer}
                showResults={showResults}
                showHint={showHint}
                confidence={confidence[q.id]}
                onConfidence={(level: ConfidenceLevel) => handleConfidence(q.id, level)}
                onAnswer={handleAnswer}
                onRequestHint={handleRequestHint}
              />
            );

          case 'matching':
            return (
              <MatchingQuestion
                key={q.id}
                question={q}
                questionIndex={qIdx}
                showResults={showResults}
                showHint={showHint}
                confidence={confidence[q.id]}
                onConfidence={(level: ConfidenceLevel) => handleConfidence(q.id, level)}
                onComplete={handleSpecialComplete}
                onRequestHint={handleRequestHint}
              />
            );

          case 'ordering':
            return (
              <OrderingQuestion
                key={q.id}
                question={q}
                questionIndex={qIdx}
                showResults={showResults}
                showHint={showHint}
                confidence={confidence[q.id]}
                onConfidence={(level: ConfidenceLevel) => handleConfidence(q.id, level)}
                onComplete={handleSpecialComplete}
                onRequestHint={handleRequestHint}
              />
            );

          case 'scenario':
            return (
              <ScenarioQuestion
                key={q.id}
                question={q}
                questionIndex={qIdx}
                userAnswer={userAnswer}
                showResults={showResults}
                showHint={showHint}
                confidence={confidence[q.id]}
                onConfidence={(level: ConfidenceLevel) => handleConfidence(q.id, level)}
                onAnswer={handleAnswer}
                onRequestHint={handleRequestHint}
              />
            );

          default: // 'mcq' or undefined
            return (
              <McqQuestion
                key={q.id}
                question={q}
                questionIndex={qIdx}
                userAnswer={userAnswer}
                showResults={showResults}
                showHint={showHint}
                confidence={confidence[q.id]}
                onConfidence={(level: ConfidenceLevel) => handleConfidence(q.id, level)}
                onAnswer={handleAnswer}
                onRequestHint={handleRequestHint}
              />
            );
        }
      })}

      {!showResults && !isCompleted && (
        <>
          <div className="h-px w-full bg-gradient-to-r from-transparent via-brand-300 dark:via-brand-600 to-transparent" aria-hidden />
          <button
            onClick={handleCheck}
            disabled={!allAnswered}
            className="w-full flex items-center justify-center gap-2 min-h-[44px] rounded-xl font-bold text-white bg-gradient-to-r from-brand-500 via-brand-400 to-accent-500 shadow-lg shadow-brand-500/20 hover:shadow-brand-500/30 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none transition-all"
            aria-label="Patikrinti atsakymus"
          >
            <CheckCircle className="w-5 h-5" />
            Patikrinti atsakymus
          </button>
        </>
      )}

      {showResults && (
        <div className="text-center p-4 bg-brand-50 dark:bg-brand-900/20 rounded-xl">
          <p className="text-brand-800 dark:text-brand-200 font-medium">
            ✓ Atsakymai patikrinti. Tęskite į kitą skaidrę.
          </p>
        </div>
      )}
    </div>
  );
}

const PASS_THRESHOLD = 70;

/** Per-block category metadata (F2-2/F2-3) */
const CATEGORY_META: Record<string, { label: string; color: string; slideId: number }> = {
  meta: { label: 'Meta', color: 'rose', slideId: 8 },
  input: { label: 'Input', color: 'orange', slideId: 9 },
  output: { label: 'Output', color: 'amber', slideId: 10 },
  reasoning: { label: 'Reasoning', color: 'emerald', slideId: 11 },
  quality: { label: 'Quality', color: 'brand', slideId: 12 },
  advanced: { label: 'Advanced', color: 'violet', slideId: 13 },
  workflow: { label: 'Workflow', color: 'cyan', slideId: 3 },
  technikos: { label: 'Technikos', color: 'amber', slideId: 5 },
  bendra: { label: 'Bendra sistema', color: 'brand', slideId: 14 },
};

const COLOR_MAP: Record<string, string> = {
  rose: 'bg-rose-100 dark:bg-rose-900/30 text-rose-700 dark:text-rose-300 border-rose-300 dark:border-rose-700',
  orange: 'bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 border-orange-300 dark:border-orange-700',
  amber: 'bg-amber-100 dark:bg-amber-900/30 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-700',
  emerald: 'bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 border-emerald-300 dark:border-emerald-700',
  brand: 'bg-brand-100 dark:bg-brand-900/30 text-brand-700 dark:text-brand-300 border-brand-300 dark:border-brand-700',
  violet: 'bg-violet-100 dark:bg-violet-900/30 text-violet-700 dark:text-violet-300 border-violet-300 dark:border-violet-700',
  cyan: 'bg-cyan-100 dark:bg-cyan-900/30 text-cyan-700 dark:text-cyan-300 border-cyan-300 dark:border-cyan-700',
};

const RADAR_CATEGORIES = ['meta', 'input', 'output', 'reasoning', 'quality', 'advanced', 'workflow', 'technikos'] as const;

export function TestResultsSlide({
  moduleId,
  progress,
  onGoToModule,
  onNextSlide,
}: {
  moduleId: number;
  progress: Progress;
  onGoToModule?: (moduleId: number, slideIndex?: number, fromRemediationSourceModuleId?: number) => void;
  onNextSlide?: () => void;
}) {
  const rawScore = progress.moduleTestScores?.[moduleId] ?? 0;
  const passed = rawScore >= PASS_THRESHOLD;
  const animatedScore = useCountUp(rawScore, 1500, 300);

  const handleDeepLink = useCallback(
    (slideId: number) => {
      const allModules = getModulesSync();
      const module1 = allModules?.find((m) => m.id === 1);
      if (!module1) {
        onGoToModule?.(1, undefined, moduleId);
        return;
      }
      const slideIndex = module1.slides.findIndex((s) => s.id === slideId);
      if (slideIndex >= 0) saveSlidePosition(1, slideIndex);
      onGoToModule?.(1, slideIndex >= 0 ? slideIndex : undefined, moduleId);
    },
    [onGoToModule, moduleId]
  );

  const radarData: RadarDataPoint[] = RADAR_CATEGORIES.map((cat) => ({
    label: CATEGORY_META[cat]?.label ?? cat,
    value: lastCategoryScores[cat]?.percentage ?? 0,
  }));
  const hasRadarData = Object.keys(lastCategoryScores).length > 0;

  // Module 5 results
  if (moduleId === 5 && rawScore > 0) {
    return (
      <div className="space-y-6">
        {passed ? (
          <>
            <div className="bg-gradient-to-r from-emerald-50 to-brand-50 dark:from-emerald-900/20 dark:to-brand-900/20 p-8 rounded-xl border-2 border-emerald-200 dark:border-emerald-800 text-center">
              <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-900/30 mb-4">
                <CheckCircle className="w-10 h-10 text-emerald-600 dark:text-emerald-400" />
              </div>
              <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">Sveikiname!</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Rezultatas <strong>{animatedScore}%</strong>. Galite pereiti į Modulio 6 praktiką.
              </p>
              {onNextSlide && (
                <button
                  type="button"
                  onClick={onNextSlide}
                  className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                  aria-label="Pradėti Modulį 6 (praktika)"
                >
                  <ChevronRight className="w-5 h-5" />
                  Pradėti Modulį 6: Praktika
                </button>
              )}
            </div>
          </>
        ) : (
          <>
            <div className="bg-amber-50 dark:bg-amber-900/20 p-8 rounded-xl border-2 border-amber-200 dark:border-amber-800 text-center">
              <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">Rezultatas {animatedScore}%</h3>
              <p className="text-gray-700 dark:text-gray-300 mb-6">
                Rekomenduojame pakartoti prezentacijos sprintą (patikslinti brief ir struktūrą), tada vėl atlikti mini testą. Jei reikia – peržiūrėkite Modulio 4 „Struktūruotą procesą“ (4.1b).
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                {onGoToModule && (
                  <button
                    type="button"
                    onClick={() => onGoToModule(4)}
                    className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3"
                    aria-label="Peržiūrėti Modulį 4"
                  >
                    Peržiūrėti Modulį 4
                  </button>
                )}
                {onNextSlide && (
                  <button
                    type="button"
                    onClick={onNextSlide}
                    className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3"
                    aria-label="Bandyti mini testą dar kartą"
                  >
                    Bandyti mini testą dar kartą
                  </button>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    );
  }

  // Module 2 (and default) results with F2 features
  return (
    <div className="space-y-6">
      {/* F2-4: Animated score hero */}
      <div className={`p-8 rounded-xl border-2 text-center ${
        passed
          ? 'bg-gradient-to-r from-emerald-50 to-brand-50 dark:from-emerald-900/20 dark:to-brand-900/20 border-emerald-200 dark:border-emerald-800'
          : 'bg-gradient-to-r from-amber-50 to-brand-50 dark:from-amber-900/20 dark:to-brand-900/20 border-amber-200 dark:border-amber-800'
      }`}>
        <div className={`inline-flex items-center justify-center w-24 h-24 rounded-full mb-4 ${
          passed ? 'bg-emerald-100 dark:bg-emerald-900/30' : 'bg-amber-100 dark:bg-amber-900/30'
        }`}>
          <span className={`text-3xl font-extrabold tabular-nums ${
            passed ? 'text-emerald-600 dark:text-emerald-400' : 'text-amber-600 dark:text-amber-400'
          }`}>{animatedScore}%</span>
        </div>
        <h3 className="font-bold text-2xl mb-2 text-gray-900 dark:text-white">
          {passed ? 'Testas Baigtas!' : 'Rezultatas'}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">
          {passed
            ? 'Puikiai! Dabar galite pereiti prie praktinių užduočių.'
            : 'Rekomenduojame peržiūrėti Modulį 1, ypač 6 blokų skyrių (skaidrės 8–16). Galite pakartoti testą.'}
        </p>
        {lastMaxStreak >= 3 && (
          <div className="inline-flex items-center gap-1.5 mt-3 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/30 text-orange-700 dark:text-orange-300 text-sm font-medium">
            <Flame className="w-4 h-4" />
            Geriausias streak: {lastMaxStreak} iš eilės
          </div>
        )}
      </div>

      {/* F2-2: Radar chart (Module 2 only, if data exists) */}
      {moduleId === 2 && hasRadarData && (
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-1">Žinių radaras pagal blokus</h4>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">Kiekviena ašis rodo jūsų rezultatą atitinkamoje kategorijoje.</p>
          <RadarChart data={radarData} size={300} />
        </div>
      )}

      {/* F2-3: Category deep links (Module 2 only) */}
      {moduleId === 2 && (
        <CategoryBreakdownWithLinks categoryScores={lastCategoryScores} onDeepLink={handleDeepLink} />
      )}

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4">Ką išmokote:</h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
          {[
            'Meta blokas = rolė ir kontekstas',
            'Input = konkretūs duomenys',
            'Output = formatas ir struktūra',
            'Reasoning = mąstymo logika',
            'Quality = kokybės kriterijai',
            'Advanced = parametrų kontrolė',
          ].map((item, idx) => (
            <div key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
              <span className="text-gray-700 dark:text-gray-300">{item}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation buttons */}
      <div className="flex flex-wrap gap-3 justify-center">
        {!passed && onGoToModule && (
          <button type="button" onClick={() => onGoToModule(1)} className="btn-secondary inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px]" aria-label="Peržiūrėti Modulį 1">
            Peržiūrėti Modulį 1
          </button>
        )}
        {passed && onGoToModule && (
          <button type="button" onClick={() => onGoToModule(3)} className="btn-primary inline-flex items-center justify-center gap-2 px-6 py-3 min-h-[44px]" aria-label="Pradėti Modulį 3">
            <ChevronRight className="w-5 h-5" /> Pradėti Modulį 3: Praktika
          </button>
        )}
      </div>
    </div>
  );
}

/** A-M3: Inline "pakartok 3 klausimus" from one category (MCQ/true-false only for simplicity) */
function RemediationRetryBlock({
  categoryKey,
  categoryLabel,
  onClose,
}: {
  categoryKey: string;
  categoryLabel: string;
  onClose: () => void;
}) {
  const questions = useMemo(() => {
    const all = selectQuestionsByCategory(categoryKey, 5);
    return all.filter((q: TestQuestion) => (q.type || 'mcq') === 'mcq' || (q.type || '') === 'true-false').slice(0, 3);
  }, [categoryKey]);
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const handleAnswer = useCallback((questionId: string, optionIndex: number) => {
    if (showResults) return;
    setAnswers((prev) => ({ ...prev, [questionId]: optionIndex }));
  }, [showResults]);

  const handleCheck = useCallback(() => {
    setShowResults(true);
    let correct = 0;
    questions.forEach((q: TestQuestion) => {
      if (isMcqCorrect(q, answers[q.id])) correct += 1;
    });
    setScore(questions.length > 0 ? Math.round((correct / questions.length) * 100) : 0);
  }, [questions, answers]);

  const allAnswered = questions.length > 0 && questions.every((q: TestQuestion) => answers[q.id] !== undefined);

  if (questions.length === 0) {
    return (
      <div className="rounded-xl border border-amber-200 dark:border-amber-800 bg-amber-50 dark:bg-amber-900/20 p-4">
        <p className="text-sm text-amber-800 dark:text-amber-200">Šioje kategorijoje nėra pakartojimo klausimų.</p>
        <button type="button" onClick={onClose} className="mt-2 text-sm font-medium text-brand-600 dark:text-brand-400 hover:underline">Uždaryti</button>
      </div>
    );
  }

  return (
    <div className="rounded-xl border-2 border-brand-200 dark:border-brand-700 bg-brand-50/50 dark:bg-brand-900/10 p-4 space-y-4">
      <div className="flex items-center justify-between">
        <h5 className="font-bold text-gray-900 dark:text-white">Pakartok 3 klausimus: {categoryLabel}</h5>
        <button type="button" onClick={onClose} className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-brand-600 dark:hover:text-brand-400" aria-label="Uždaryti">Uždaryti</button>
      </div>
      {questions.map((q: TestQuestion, qIdx: number) => {
        const type = getQuestionType(q);
        const userAnswer = answers[q.id];
        if (type === 'true-false') {
          return (
            <TrueFalseQuestion
              key={q.id}
              question={q}
              questionIndex={qIdx}
              userAnswer={userAnswer}
              showResults={showResults}
              showHint={false}
              confidence={undefined}
              onConfidence={() => {}}
              onAnswer={handleAnswer}
              onRequestHint={() => {}}
            />
          );
        }
        return (
          <McqQuestion
            key={q.id}
            question={q}
            questionIndex={qIdx}
            userAnswer={userAnswer}
            showResults={showResults}
            showHint={false}
            confidence={undefined}
            onConfidence={() => {}}
            onAnswer={handleAnswer}
            onRequestHint={() => {}}
          />
        );
      })}
      {!showResults && (
        <button type="button" onClick={handleCheck} disabled={!allAnswered} className="btn-primary px-4 py-2 disabled:opacity-50 disabled:cursor-not-allowed">
          Patikrinti
        </button>
      )}
      {showResults && (
        <div className="flex items-center justify-between pt-2 border-t border-gray-200 dark:border-gray-700">
          <span className="font-semibold text-gray-900 dark:text-white">Rezultatas: {score}%</span>
          <button type="button" onClick={onClose} className="btn-secondary px-3 py-1.5 text-sm">Grįžti į rezultatą</button>
        </div>
      )}
    </div>
  );
}

/** F2-3: Category breakdown with radar scores + deep links to Module 1 slides. A-M3: + "Pakartok 3 kl." */
function CategoryBreakdownWithLinks({
  categoryScores,
  onDeepLink,
}: {
  categoryScores: Record<string, CategoryScore>;
  onDeepLink: (slideId: number) => void;
}) {
  const [activeRetryCategory, setActiveRetryCategory] = useState<{ key: string; label: string } | null>(null);
  const hasScores = Object.keys(categoryScores).length > 0;
  const categories = Object.entries(CATEGORY_META).filter(([key]) =>
    RADAR_CATEGORIES.includes(key as typeof RADAR_CATEGORIES[number])
  );

  return (
    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
      <h4 className="font-bold text-gray-900 dark:text-white mb-2">Žinių žemėlapis pagal blokus</h4>
      <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
        {hasScores ? 'Peržiūrėkite skaidrę arba pakartokite klausimus iš kategorijos:' : 'Peržiūrėkite atitinkamą Modulio 1 skaidrę:'}
      </p>
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {categories.map(([key, meta]) => {
          const catScore = categoryScores[key];
          const pct = catScore?.percentage;
          const isWeak = pct !== undefined && pct < 50;
          const isStrong = pct !== undefined && pct >= 80;
          return (
            <div
              key={key}
              className={`p-3 rounded-lg border text-center text-sm font-medium transition-all ${
                COLOR_MAP[meta.color] || COLOR_MAP.brand
              } ${isWeak ? 'ring-2 ring-rose-400 dark:ring-rose-600' : ''}`}
            >
              <div className="font-bold flex items-center justify-center gap-1">
                {meta.label}
              </div>
              {pct !== undefined ? (
                <div className={`text-xs font-bold mt-1 ${isWeak ? 'text-rose-600 dark:text-rose-400' : isStrong ? 'text-emerald-600 dark:text-emerald-400' : ''}`}>
                  {pct}%
                </div>
              ) : (
                <div className="text-xs opacity-75 mt-1">Skaidrė {meta.slideId}</div>
              )}
              <div className="mt-2 flex flex-col gap-1">
                <button
                  type="button"
                  onClick={() => onDeepLink(meta.slideId)}
                  className="text-xs font-medium py-1.5 px-2 rounded bg-white/80 dark:bg-black/20 hover:bg-white dark:hover:bg-gray-700 transition-colors flex items-center justify-center gap-1"
                  aria-label={`Peržiūrėti ${meta.label} Modulyje 1`}
                >
                  <ExternalLink className="w-3 h-3" />
                  Peržiūrėti skaidrę
                </button>
                <button
                  type="button"
                  onClick={() => setActiveRetryCategory({ key, label: meta.label })}
                  className="text-xs font-medium py-1.5 px-2 rounded bg-brand-100 dark:bg-brand-900/30 hover:bg-brand-200 dark:hover:bg-brand-800/50 transition-colors"
                  aria-label={`Pakartoti 3 klausimus iš ${meta.label}`}
                >
                  Pakartok 3 kl.
                </button>
              </div>
            </div>
          );
        })}
      </div>
      {activeRetryCategory && (
        <div className="mt-4">
          <RemediationRetryBlock
            categoryKey={activeRetryCategory.key}
            categoryLabel={activeRetryCategory.label}
            onClose={() => setActiveRetryCategory(null)}
          />
        </div>
      )}
      {hasScores && (
        <p className="text-xs text-gray-400 dark:text-gray-500 mt-3 text-center">
          Raudonu rėmu pažymėtos kategorijos (&lt;50%) – rekomenduojame peržiūrėti.
        </p>
      )}
    </div>
  );
}

export interface PracticeScenarioSlideInfo {
  slideIndex: number;
  slideId: number;
  title: string;
}

export function PracticeIntroSlide({
  slide: _slide,
  moduleId,
  progress,
  scenarioSlides,
  onNavigateToSlide,
}: {
  slide?: Slide;
  moduleId?: number;
  progress?: { completedTasks: Record<number, number[]> };
  scenarioSlides?: PracticeScenarioSlideInfo[];
  onNavigateToSlide?: (slideIndex: number) => void;
}) {
  if (moduleId === 6) {
    const goals = [
      'Sukurti vieną konkretų artefaktą (tyrimo ataskaita / strategijos santrauka / analizė) su 6 blokų sistema.',
      'Pademonstruoti RAG („naudok tik pateiktą kontekstą“ arba šaltinių sąrašas).',
      'Įtraukti žingsniuotą tyrimą (Deep research) – 2–3 pakopos.',
      'Apsvarstyti tokenų ekonomiką ir žinių patikrinimą (šaltiniai arba „nežinau“ taisyklė).',
    ];
    const checklist = [
      { label: 'Naudojau 6 blokų sistemą (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED)', id: 1 },
      { label: 'Įtraukiau RAG elementą (šaltiniai, „naudok tik pateiktą kontekstą“)', id: 2 },
      { label: 'Įtraukiau Deep research žingsnius (multi-step)', id: 3 },
      { label: 'Įtraukiau žinių patikrinimo elementą (šaltiniai arba „nežinau“)', id: 4 },
      { label: 'Apsvarstau tokenų apribojimą (ilgis, max_tokens)', id: 5 },
    ];
    const stages = [
      'Tikslas ir rolė (META) – ką kuriate, kam, kokia rolė.',
      'Šaltiniai ir apribojimai (INPUT + RAG) – kokius duomenis naudojate.',
      'Formatas (OUTPUT) – struktūra, ilgis, kalba.',
      'Tyrimo planas (REASONING / Deep research) – žingsniai, sub-klausimai.',
      'Kokybe ir patikrinimas (QUALITY) – šaltiniai, „nežinau“, objektyvumas.',
      'Techniniai nustatymai (ADVANCED) – temperature, max_tokens.',
    ];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-accent-50 to-brand-50 dark:from-accent-900/20 dark:to-brand-900/20 p-6 rounded-xl border-2 border-accent-200 dark:border-accent-800">
          <h3 className="font-bold text-lg mb-3 text-gray-900 dark:text-white">Projekto tikslai</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Sukurkite vieną konkretų artefaktą naudodami 6 blokų sistemą, RAG ir žinių patikrinimą.
          </p>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            {goals.map((g, i) => (
              <li key={i} className="flex items-start gap-2">
                <Target className="w-5 h-5 shrink-0 text-brand-500 mt-0.5" aria-hidden />
                <span>{g}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Savęs vertinimo kortelė</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">Prieš arba po projekto: pažymėkite, ką pritaikėte.</p>
          <ul className="space-y-2">
            {checklist.map((c) => (
              <li key={c.id} className="flex items-center gap-3 p-2 rounded-lg bg-gray-50 dark:bg-gray-900/50">
                <span className="text-gray-700 dark:text-gray-300">{c.label}</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">Taip / Dar ne / Netaikau</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="bg-violet-50 dark:bg-violet-900/20 p-6 rounded-xl border border-violet-200 dark:border-violet-800">
          <h4 className="font-bold text-gray-900 dark:text-white mb-4">Projekto etapai (6 žingsniai)</h4>
          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">Galite sustoti ir išsaugoti po kiekvieno žingsnio.</p>
          <ol className="space-y-2 list-decimal list-inside text-gray-700 dark:text-gray-300">
            {stages.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ol>
        </div>
      </div>
    );
  }

  const scenarioIcons = [BarChart2, TrendingUp, Megaphone, MessageSquare, Users, AlertCircle] as const;
  const scenarioCards = [
    { title: 'Vadovo strateginė ataskaita', desc: 'Paruošk aiškią ketvirčio / pusmečio ataskaitą valdybai.', action: 'Generuok ataskaitą' },
    { title: 'Pardavimų analizė ir veiksmų planas', desc: 'Įvertink rezultatus ir sukurk konkretų veiksmų planą.', action: 'Sudaryk planą' },
    { title: 'Marketingo kampanijos planas', desc: 'Sukurk kampanijos strategiją nuo idėjos iki veiksmų.', action: 'Kurk kampaniją' },
    { title: 'Vidaus komunikacijos dokumentas', desc: 'Paruošk aiškų, struktūruotą komunikacijos tekstą komandai.', action: 'Ruošk dokumentą' },
    { title: 'Personalo sprendimų analizė', desc: 'Įvertink situaciją ir pateik sprendimo variantus.', action: 'Analizuok sprendimą' },
    { title: 'Kliento skundo valdymas', desc: 'Struktūruotai atsakyk ir suvaldyk situaciją.', action: 'Paruošk atsakymą' },
  ];
  const hasScenarioProgress = Boolean(
    scenarioSlides?.length && progress?.completedTasks && moduleId != null
  );
  const completedCount = hasScenarioProgress
    ? scenarioSlides!.filter((s) => progress!.completedTasks[moduleId!]?.includes(s.slideId)).length
    : 0;

  const isMod3 = moduleId === 3;
  const coverClasses = isMod3
    ? 'bg-gradient-to-r from-emerald-50 to-emerald-100 dark:from-emerald-900/20 dark:to-emerald-800/40 p-6 rounded-xl border-2 border-emerald-300 dark:border-emerald-700'
    : 'bg-gradient-to-r from-accent-50 to-brand-50 dark:from-accent-900/20 dark:to-brand-900/20 p-6 rounded-xl border-2 border-accent-200 dark:border-accent-800';
  const progressTextClasses = isMod3
    ? 'text-emerald-700 dark:text-emerald-300'
    : 'text-accent-700 dark:text-accent-300';

  return (
    <div className="space-y-6">
      <div className={coverClasses}>
        <div className="flex flex-wrap items-center gap-2 mb-3">
          <h3 className="font-bold text-xl text-gray-900 dark:text-white flex items-center gap-2.5">
            <Briefcase className="w-5 h-5 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
            Praktinis Pritaikymas
          </h3>
          {isMod3 && (
            <span className="px-2.5 py-0.5 text-xs font-semibold rounded-full bg-emerald-500/20 text-emerald-700 dark:text-emerald-300 border border-emerald-400/50 dark:border-emerald-600/50">
              6 scenarijai
            </span>
          )}
        </div>
        <p className="text-gray-700 dark:text-gray-300">
          Dabar pritaikysite 6 blokų sistemą realiems verslo scenarijams.
          Kiekvienas scenarijus turi skirtingą kontekstą ir iššūkius.
        </p>
        {hasScenarioProgress && (
          <p className={`mt-3 text-sm font-semibold ${progressTextClasses}`}>
            {completedCount} iš {scenarioSlides!.length} scenarijų užbaigta
          </p>
        )}
      </div>

      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2.5">
          <Target className="w-5 h-5 text-accent-600 dark:text-accent-400" strokeWidth={1.5} />
          <span>🔥 6 Verslo Scenarijai</span>
        </h4>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {(scenarioSlides?.length ? scenarioSlides : [0, 1, 2, 3, 4, 5]).map((item, idx) => {
            const isScenario = typeof item === 'object' && 'slideId' in item;
            const slideIndex = isScenario ? (item as PracticeScenarioSlideInfo).slideIndex : 0;
            const slideId = isScenario ? (item as PracticeScenarioSlideInfo).slideId : 0;
            const cardData = scenarioCards[idx];
            const title = isScenario
              ? (item as PracticeScenarioSlideInfo).title.replace(/^Scenarijus \d+:?\s*/i, '').trim() || cardData.title
              : cardData.title;
            const desc = cardData.desc;
            const action = cardData.action;
            const IconComponent = scenarioIcons[idx];
            const isCompleted = hasScenarioProgress && progress!.completedTasks[moduleId!]?.includes(slideId);
            const card = (
              <div
                key={isScenario ? slideId : idx}
                className={`flex items-start gap-3 p-3 rounded-xl border transition-all ${
                  onNavigateToSlide && isScenario
                    ? `cursor-pointer hover:ring-2 focus:outline-none focus:ring-2 bg-gray-50 dark:bg-gray-900/50 ${
                        isMod3
                          ? 'hover:ring-emerald-500 focus:ring-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-900/20 border-emerald-200 dark:border-emerald-800'
                          : 'hover:ring-brand-500 focus:ring-brand-500 hover:bg-brand-50 dark:hover:bg-brand-900/20 border-transparent'
                      }`
                    : 'bg-gray-50 dark:bg-gray-900/50 border-transparent'
                }`}
                onClick={
                  onNavigateToSlide && isScenario
                    ? () => onNavigateToSlide(slideIndex)
                    : undefined
                }
                onKeyDown={
                  onNavigateToSlide && isScenario
                    ? (e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          e.preventDefault();
                          onNavigateToSlide(slideIndex);
                        }
                      }
                    : undefined
                }
                role={onNavigateToSlide && isScenario ? 'button' : undefined}
                tabIndex={onNavigateToSlide && isScenario ? 0 : undefined}
                aria-label={onNavigateToSlide && isScenario ? `Eiti į ${title}` : undefined}
              >
                <span className="inline-flex p-2 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 shrink-0">
                  <IconComponent className="w-5 h-5 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-semibold text-gray-900 dark:text-white">{title}</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{desc}</p>
                  <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mt-1">👉 {action}</p>
                  {hasScenarioProgress && isScenario && (
                    <span
                      className={`mt-1 inline-flex items-center text-xs font-medium ${
                        isCompleted
                          ? 'text-emerald-600 dark:text-emerald-400'
                          : 'text-gray-500 dark:text-gray-400'
                      }`}
                    >
                      {isCompleted ? '✓ Užbaigta' : 'Dar nepridėta'}
                    </span>
                  )}
                </div>
              </div>
            );
            return card;
          })}
        </div>
      </div>

      <div className="bg-brand-50 dark:bg-brand-900/20 p-5 rounded-xl">
        <p className="text-brand-800 dark:text-brand-200 text-sm flex items-start gap-2.5">
          <span className="inline-flex p-1.5 rounded-lg bg-brand-500/10 dark:bg-brand-500/20 shrink-0 mt-0.5">
            <Lightbulb className="w-4 h-4 text-brand-600 dark:text-brand-400" strokeWidth={1.5} />
          </span>
          <span>Pirmą scenarijų peržiūrėk kaip pavyzdį. Kitus – sukurk pats.</span>
        </p>
      </div>
    </div>
  );
}

const SCENARIO_TABS = [
  { id: 'context', label: 'Kontekstas', key: 'context' as const },
  { id: 'data', label: 'Duomenys', key: 'data' as const },
  { id: 'constraints', label: 'Apribojimai', key: 'constraints' as const },
  { id: 'result', label: 'Rezultatas', key: 'expectedFormat' as const },
] as const;

export function PracticeScenarioSlide({ slide, onRenderTask }: { slide: Slide; onRenderTask: () => JSX.Element | null }) {
  const [activeTab, setActiveTab] = useState<(typeof SCENARIO_TABS)[number]['id']>('context');
  if (!slide.scenario) return null;

  const tabContent: Record<string, string> = {
    context: slide.scenario.context,
    data: slide.scenario.data,
    constraints: slide.scenario.constraints,
    result: slide.scenario.expectedFormat,
  };
  const isDataTab = activeTab === 'data';

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-gray-800 p-6 rounded-xl border-2 border-brand-200 dark:border-brand-800">
        <h4 className="font-bold text-brand-900 dark:text-brand-100 mb-4 flex items-center gap-2">
          <span className="text-xl">📋</span> Scenarijaus Aprašymas
        </h4>

        <div role="tablist" aria-label="Scenarijaus sekcijos" className="flex flex-wrap gap-1 border-b border-gray-200 dark:border-gray-700 pb-3 mb-4">
          {SCENARIO_TABS.map((tab) => (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={activeTab === tab.id}
              aria-controls={`scenario-panel-${tab.id}`}
              id={`scenario-tab-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-t-lg text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 ${
                activeTab === tab.id
                  ? 'bg-brand-100 text-brand-800 dark:bg-brand-900/40 dark:text-brand-200 border border-brand-300 dark:border-brand-700 border-b-0 -mb-px'
                  : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div
          id={`scenario-panel-${activeTab}`}
          role="tabpanel"
          aria-labelledby={`scenario-tab-${activeTab}`}
          className="min-h-[80px]"
        >
          <p
            className={`text-gray-700 dark:text-gray-300 ${isDataTab ? 'bg-gray-50 dark:bg-gray-900/50 p-3 rounded-lg font-mono text-sm' : ''}`}
          >
            {tabContent[activeTab]}
          </p>
        </div>
      </div>

      {onRenderTask()}
    </div>
  );
}