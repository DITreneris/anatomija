import { useState, useEffect, useCallback, useMemo, useRef, memo, lazy, Suspense } from 'react';
import { ChevronLeft, ChevronRight, CheckCircle, ArrowLeft, AlertTriangle, RefreshCw, Play, RotateCcw } from 'lucide-react';
import { Progress } from '../utils/progress';
import { getModulesSync, preloadModules } from '../data/modulesLoader';
import { useSlideNavigation } from '../utils/useSlideNavigation';
import { LoadingSpinner } from './ui';
import { ModuleCompleteScreen } from './ModuleCompleteScreen';
import ErrorBoundary from './ui/ErrorBoundary';
import { selectQuestions } from '../utils/questionPoolSelector';
import type { Slide, TestQuestion } from '../types/modules';

const SlideContent = lazy(() => import('./SlideContent'));

/* ─── Slide Group Progress Bar ─── */

interface SlideGroup {
  label: string;
  startIdx: number;
  endIdx: number; // inclusive
}

/** Build slide groups based on slide types. Returns groups for Module 1 (theory), generic for others. */
function buildSlideGroups(slides: { type: string }[]): SlideGroup[] {
  if (slides.length <= 6) {
    // Small modules (test, practice) – single group
    return [{ label: '', startIdx: 0, endIdx: slides.length - 1 }];
  }

  // For Module 1 or similarly structured modules, group by content phase
  const groups: SlideGroup[] = [];
  let currentGroup: SlideGroup | null = null;

  const typeToPhase: Record<string, string> = {
    'action-intro': 'Pagrindai',
    'intro': 'Pagrindai',
    'infographic': 'Pagrindai',
    'definitions': 'Pagrindai',
    'workflow-summary': 'Pagrindai',
    'prompt-types': 'Pagrindai',
    'prompt-techniques': 'Pagrindai',
    'prompt-template': 'Šablonas',
    'transition-3-to-6': 'Šablonas',
    'hierarchy': '6 Blokai',
    'meta': '6 Blokai',
    'input': '6 Blokai',
    'output': '6 Blokai',
    'reasoning-models': '6 Blokai',
    'reasoning': '6 Blokai',
    'quality': '6 Blokai',
    'advanced': '6 Blokai',
    'advanced-2': '6 Blokai',
    'full-example': 'Santrauka',
    'comparison': 'Santrauka',
    'glossary': 'Santrauka',
    'summary': 'Santrauka',
    // Module 4+ content types
    'module-intro': 'Įvadas',
    'section-break': 'Skyrius',
    'content-block': 'Teorija',
    'hallucination-dashboard': 'Teorija',
    'di-modalities': 'Teorija',
    'pie-chart': 'Teorija',
    'ai-workflow': 'Teorija',
    'warm-up-quiz': 'Savitikra',
    // Test/practice
    'test-intro': 'Testas',
    'test-section': 'Testas',
    'test-results': 'Testas',
    'practice-intro': 'Praktika',
    'practice-scenario': 'Praktika',
    'practice-summary': 'Praktika',
  };

  slides.forEach((slide, idx) => {
    const phase = typeToPhase[slide.type] || 'Kita';
    if (!currentGroup || currentGroup.label !== phase) {
      if (currentGroup) groups.push(currentGroup);
      currentGroup = { label: phase, startIdx: idx, endIdx: idx };
    } else {
      currentGroup.endIdx = idx;
    }
  });
  if (currentGroup) groups.push(currentGroup);
  return groups;
}

function SlideGroupProgressBar({
  groups,
  currentSlide,
  totalSlides,
}: {
  groups: SlideGroup[];
  currentSlide: number;
  totalSlides: number;
}) {
  if (groups.length <= 1 && !groups[0]?.label) return null;

  const activeGroupIdx = groups.findIndex(
    (g) => currentSlide >= g.startIdx && currentSlide <= g.endIdx
  );

  return (
    <div className="flex items-center gap-1 overflow-x-auto pb-1">
      {groups.map((group, idx) => {
        const groupSize = group.endIdx - group.startIdx + 1;
        const widthPct = (groupSize / totalSlides) * 100;
        const isActive = idx === activeGroupIdx;
        const isPast = idx < activeGroupIdx;
        // Progress within this group
        const groupProgress = isActive
          ? ((currentSlide - group.startIdx + 1) / groupSize) * 100
          : isPast
          ? 100
          : 0;

        return (
          <div
            key={idx}
            className="flex flex-col items-center gap-0.5"
            style={{ width: `${widthPct}%`, minWidth: '40px' }}
          >
            <div className="w-full h-2 rounded-full bg-gray-200 dark:bg-gray-700 overflow-hidden">
              <div
                className={`h-full rounded-full transition-all duration-500 ease-out ${
                  isActive
                    ? 'bg-gradient-to-r from-brand-500 to-accent-500'
                    : isPast
                    ? 'bg-emerald-400 dark:bg-emerald-600'
                    : 'bg-transparent'
                }`}
                style={{ width: `${groupProgress}%` }}
              />
            </div>
            {group.label && (
              <span
                className={`text-[10px] font-medium truncate max-w-full ${
                  isActive
                    ? 'text-brand-600 dark:text-brand-400'
                    : isPast
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : 'text-gray-400 dark:text-gray-500'
                }`}
              >
                {group.label}
              </span>
            )}
          </div>
        );
      })}
    </div>
  );
}

interface ModuleViewProps {
  moduleId: number;
  /** F2-3: open module at this slide index (remediation deep link) */
  initialSlideIndex?: number | null;
  onClearInitialSlideIndex?: () => void;
  onBack: () => void;
  onComplete: (moduleId: number) => void;
  onTaskComplete: (moduleId: number, taskId: number, testScore?: number) => void;
  onContinueToNext: (currentModuleId: number) => void;
  onGoToModule?: (moduleId: number, slideIndex?: number, fromRemediationSourceModuleId?: number) => void;
  onGoToGlossary?: (slideIndex: number) => void;
  /** A-M3: when set, show "Grįžti į testo rezultatą" and call onReturnToRemediation to go back */
  remediationFrom?: { sourceModuleId: number } | null;
  onReturnToRemediation?: () => void;
  progress: Progress;
  totalModules: number;
}

function ModuleView({
  moduleId,
  initialSlideIndex,
  onClearInitialSlideIndex,
  onBack,
  onComplete,
  onTaskComplete,
  onContinueToNext,
  onGoToModule,
  onGoToGlossary,
  remediationFrom,
  onReturnToRemediation,
  progress,
  totalModules,
}: ModuleViewProps) {
  const modules = getModulesSync();

  // ─── Question Pool: Module 2 enrichment ───
  const prevPoolModuleRef = useRef<number | null>(null);
  const poolRef = useRef<TestQuestion[] | null>(null);

  // Regenerate pool when entering Module 2 (each visit = new random set)
  if (moduleId === 2 && prevPoolModuleRef.current !== 2) {
    poolRef.current = selectQuestions();
  }
  prevPoolModuleRef.current = moduleId;

  const module = useMemo(() => {
    const raw = modules?.find((m) => m.id === moduleId);
    if (!raw) return raw;

    // Module 2: collapse test-section slides into one with pool questions
    if (moduleId === 2 && poolRef.current) {
      const testIntro = raw.slides.find((s) => s.type === 'test-intro');
      const testResults = raw.slides.find((s) => s.type === 'test-results');

      const enrichedIntro: Slide | null = testIntro
        ? {
            ...testIntro,
            title: 'Žinių patikrinimas',
            subtitle: '15 atsitiktinių klausimų iš nuolat atnaujinamo banko.',
          }
        : null;

      const singleTestSection: Slide = {
        id: 21,
        title: 'Žinių patikrinimas',
        subtitle: '15 atsitiktinių klausimų iš nuolat atnaujinamo banko.',
        type: 'test-section',
        testQuestions: poolRef.current,
      };

      return {
        ...raw,
        subtitle: '15 atsitiktinių klausimų iš nuolat atnaujinamo banko.',
        slides: [
          ...(enrichedIntro ? [enrichedIntro] : []),
          singleTestSection,
          ...(testResults ? [testResults] : []),
        ],
      };
    }

    return raw;
  }, [modules, moduleId]);
  const moduleIndex = useMemo(
    () => modules?.findIndex((m) => m.id === moduleId) ?? -1,
    [modules, moduleId]
  );
  const isLastModule = useMemo(
    () =>
      moduleIndex >= 0 && moduleIndex === (modules?.length ?? 0) - 1,
    [moduleIndex, modules?.length]
  );

  const [resumeDecided, setResumeDecided] = useState(false);
  const [resumeImmediate, setResumeImmediate] = useState(false);

  const {
    currentSlide,
    setCurrentSlide,
    nextSlide,
    prevSlide,
    isFirstSlide,
    isLastSlide,
    hasIncompletePracticalTask,
    slideProgress: _slideProgress,
    currentSlideData,
    handleTouchStart,
    handleTouchEnd,
    showModuleComplete,
    savedSlidePosition,
  } = useSlideNavigation({
    module,
    moduleId,
    progress,
    onComplete,
    resumeImmediately: resumeImmediate,
    initialSlideIndex,
  });

  // Show resume prompt if user has saved position > 0 (skip when opening via F2-3 deep link)
  const showResumePrompt = !resumeDecided && savedSlidePosition > 0 && initialSlideIndex == null;

  const handleResumeFromSaved = useCallback(() => {
    setResumeImmediate(true);
    setCurrentSlide(savedSlidePosition);
    setResumeDecided(true);
  }, [savedSlidePosition, setCurrentSlide]);

  const handleStartFromBeginning = useCallback(() => {
    setCurrentSlide(0);
    setResumeDecided(true);
  }, [setCurrentSlide]);

  // Reset resume state when module changes
  useEffect(() => {
    setResumeDecided(false);
    setResumeImmediate(false);
  }, [moduleId]);

  // F2-3: when opening via remediation deep link, skip resume prompt and clear so Back doesn't reuse
  useEffect(() => {
    if (initialSlideIndex != null) {
      setResumeDecided(true);
      onClearInitialSlideIndex?.();
    }
  }, [initialSlideIndex, onClearInitialSlideIndex]);

  const handleTaskComplete = useCallback(
    (taskId: number, testScore?: number) => {
      if (!progress.completedTasks[moduleId]?.includes(taskId)) {
        onTaskComplete(moduleId, taskId, testScore);
      }
    },
    [progress.completedTasks, moduleId, onTaskComplete]
  );

  const isModuleCompleted = useMemo(
    () => progress.completedModules.includes(moduleId),
    [progress.completedModules, moduleId]
  );

  /** Modulio 3: scenarijų skaidrės (indeksas, id, pavadinimas) – progresui ir navigacijai */
  const practiceScenarioSlides = useMemo(() => {
    if (!module || moduleId !== 3) return [];
    return module.slides
      .map((s, i) => ({ slideIndex: i, slideId: s.id, title: s.title, type: s.type }))
      .filter((x) => x.type === 'practice-scenario');
  }, [module, moduleId]);

  const onNavigateToSlide = useCallback(
    (slideIndex: number) => {
      setCurrentSlide(slideIndex);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    [setCurrentSlide]
  );

  /** Modulio 3: konkretus CTA tekstas „Pirmyn“ mygtukui (#10) – „imk ir daryk“ energija */
  const nextSlideLabel = useMemo(() => {
    if (!module || moduleId !== 3 || currentSlide >= module.slides.length - 1) return null;
    const next = module.slides[currentSlide + 1];
    if (next.type === 'practice-scenario') {
      const scenarioSlides = module.slides.filter((s) => s.type === 'practice-scenario');
      const idx = scenarioSlides.findIndex((s) => s.id === next.id);
      const n = idx >= 0 ? idx + 1 : currentSlide + 2;
      return `👉 Pradėti ${n} scenarijų`;
    }
    if (next.type === 'practice-summary') return 'Į Praktikos santrauką';
    if (moduleId === 3 && next.type === 'summary') return 'Į Praktikos santrauką';
    return null;
  }, [module, moduleId, currentSlide]);

  useEffect(() => {
    if (!modules) return;
    preloadModules();
  }, [modules]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }
      if (e.key === 'Escape') {
        e.preventDefault();
        onBack();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onBack]);

  // Show loading if modules not yet loaded
  if (!modules) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" text="Kraunama..." />
      </div>
    );
  }

  // Module not in list (e.g. MVP mode: 4–6 locked) – show fallback and back
  if (!module) {
    return (
      <div className="space-y-6">
        <div className="card p-4 md:p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 focus:outline-none focus:ring-2 focus:ring-brand-500 rounded-lg px-3 py-2 min-h-[44px]"
            aria-label="Grįžti į modulių sąrašą"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Atgal į modulius</span>
          </button>
        </div>
        <div className="card p-8 text-center min-h-[300px] flex flex-col items-center justify-center">
          <p className="text-gray-600 dark:text-gray-400 mb-2">
            Šis modulis šiuo metu nepasiekiamas.
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Pasirinkite modulį iš modulių sąrašo.
          </p>
        </div>
      </div>
    );
  }

  // Show loading if current slide data is not available
  if (!currentSlideData) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <LoadingSpinner size="lg" text="Kraunama skaidrė..." />
      </div>
    );
  }

  // Resume prompt – rodomas tik kai vartotojas turi saved poziciją
  if (showResumePrompt && module) {
    return (
      <div className="space-y-6">
        <div className="card p-4 md:p-6">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-lg px-3 py-2 min-h-[44px]"
            aria-label="Grįžti į modulių sąrašą"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Atgal į modulius</span>
          </button>
        </div>

        <div className="card p-8 md:p-12 min-h-[400px] flex flex-col items-center justify-center text-center">
          <div className="bg-brand-100 dark:bg-brand-900/30 p-4 rounded-full mb-6">
            <Play className="w-10 h-10 text-brand-600 dark:text-brand-400" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3">
            Sveiki sugrįžę!
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-2 max-w-md">
            Paskutinį kartą buvote skaidrėje <strong className="text-brand-600 dark:text-brand-400">{savedSlidePosition + 1}</strong> iš {module.slides.length}
          </p>
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-8">
            Modulis: {module.title}
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <button
              onClick={handleResumeFromSaved}
              className="btn-primary flex items-center justify-center gap-2 min-h-[48px] px-6"
            >
              <Play className="w-5 h-5" />
              Tęsti nuo skaidrės {savedSlidePosition + 1}
            </button>
            <button
              onClick={handleStartFromBeginning}
              className="btn-secondary flex items-center justify-center gap-2 min-h-[48px] px-6"
            >
              <RotateCcw className="w-5 h-5" />
              Nuo pradžios
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (showModuleComplete && module && modules) {
    return (
      <ModuleCompleteScreen
        module={module}
        moduleIndex={moduleIndex}
        totalModules={totalModules}
        modules={modules}
        progress={progress}
        onBack={onBack}
        onContinueToNext={onContinueToNext}
        isLastModule={isLastModule}
      />
    );
  }

  return (
    <div className="space-y-6">
      {/* A-M3: Remediation return – grįžti į testo rezultatą */}
      {remediationFrom && onReturnToRemediation && (
        <div className="rounded-xl border-2 border-brand-200 dark:border-brand-700 bg-brand-50 dark:bg-brand-900/20 p-3 md:p-4 flex items-center justify-between gap-3">
          <p className="text-sm text-brand-800 dark:text-brand-200">
            Atidaryta iš Modulio {remediationFrom.sourceModuleId} testo rezultatų. Galite grįžti į rezultatų skaidrę.
          </p>
          <button
            type="button"
            onClick={onReturnToRemediation}
            className="btn-primary flex items-center gap-2 shrink-0 px-4 py-2 min-h-[44px]"
            aria-label="Grįžti į testo rezultatą"
          >
            <ArrowLeft className="w-4 h-4" />
            Grįžti į testo rezultatą
          </button>
        </div>
      )}

      {/* Header */}
      <div className="card p-4 md:p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-gray-700 dark:text-gray-300 hover:text-brand-600 dark:hover:text-brand-400 transition-all hover:scale-105 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 rounded-lg px-3 py-2 min-h-[44px]"
            aria-label="Grįžti į modulių sąrašą"
          >
            <ArrowLeft className="w-5 h-5" />
            <span className="hidden sm:inline">Atgal į modulius</span>
            <span className="sm:hidden">Atgal</span>
          </button>

          {/* Desktop slide counter in header */}
          <div className="hidden md:flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
            <span>Skaidrė</span>
            <span className="font-bold text-brand-600 dark:text-brand-400">
              {currentSlide + 1}/{module.slides.length}
            </span>
          </div>
        </div>
      </div>

      {/* Slide Content with side navigation (desktop) / full width (mobile) */}
      <div className="grid grid-cols-1 md:grid-cols-[auto,1fr,auto] items-center gap-4">
        {/* Desktop: Left navigation button */}
        <div className="hidden md:flex justify-center">
          <button
            onClick={prevSlide}
            disabled={isFirstSlide}
            className="btn-secondary flex items-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed min-h-[44px]"
            aria-label="Ankstesnė skaidrė"
          >
            <ChevronLeft className="w-5 h-5" />
            <span className="hidden lg:inline">Atgal</span>
          </button>
        </div>

        <div
          className="card p-6 md:p-10 min-h-[500px] animate-fade-in touch-pan-y"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          role="region"
          aria-label="Skaidrės turinys. Slenkite į kairę – kita skaidrė, į dešinę – ankstesnė."
        >
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-3">
              <span className="badge-brand">
                Modulis {moduleIndex + 1}
              </span>
              {isModuleCompleted && (
                <span className="badge-success">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  Baigtas
                </span>
              )}
              {currentSlideData.optional && (
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 border border-amber-200 dark:border-amber-700/50">
                  Papildoma
                </span>
              )}
            </div>
            <h1 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3 leading-tight">
              {currentSlideData.shortTitle ?? currentSlideData.title}
            </h1>
            {currentSlideData.subtitle != null && (
              <p className="text-lg text-gray-600 dark:text-gray-200 leading-relaxed">{currentSlideData.subtitle}</p>
            )}
          </div>

          <ErrorBoundary
            key={currentSlideData.id}
            fallback={
              <div className="flex flex-col items-center justify-center min-h-[200px] p-6 text-center">
                <div className="bg-rose-100 dark:bg-rose-900/30 p-3 rounded-full mb-3">
                  <AlertTriangle className="w-8 h-8 text-rose-600 dark:text-rose-400" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                  Nepavyko užkrauti skaidrės
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                  Ši skaidrė turi klaidą. Galite pereiti prie kitos skaidrės arba bandyti dar kartą.
                </p>
                <div className="flex gap-3">
                  <button onClick={() => window.location.reload()} className="btn-secondary flex items-center gap-2">
                    <RefreshCw className="w-4 h-4" />
                    Atnaujinti
                  </button>
                  <button onClick={nextSlide} className="btn-primary">
                    Kita skaidrė
                  </button>
                </div>
              </div>
            }
          >
            <Suspense fallback={<LoadingSpinner size="md" text="Kraunama skaidrė..." />}>
              <SlideContent
                slide={currentSlideData}
                moduleId={moduleId}
                onTaskComplete={handleTaskComplete}
                progress={progress}
                onGoToModule={onGoToModule}
                onGoToGlossary={onGoToGlossary ? () => onGoToGlossary(currentSlide) : undefined}
                onNextSlide={nextSlide}
                practiceScenarioSlides={practiceScenarioSlides}
                onNavigateToSlide={onNavigateToSlide}
              />
            </Suspense>
          </ErrorBoundary>
        </div>

        {/* Desktop: Right navigation button */}
        <div className="hidden md:flex flex-col items-center gap-2">
          {hasIncompletePracticalTask && (
            <p className="text-sm text-amber-700 dark:text-amber-300 text-center max-w-[200px]">
              Atlikite užduotį žemiau, kad galėtumėte eiti toliau.
            </p>
          )}
          <button
            onClick={nextSlide}
            disabled={hasIncompletePracticalTask}
            className="btn-primary flex items-center gap-2 min-h-[44px] disabled:opacity-50 disabled:cursor-not-allowed"
            aria-label={isLastSlide ? 'Baigti modulį' : nextSlideLabel ?? 'Kita skaidrė'}
          >
            <span className="hidden lg:inline">
              {isLastSlide ? 'Baigti' : (nextSlideLabel ?? 'Pirmyn')}
            </span>
            {!isLastSlide && <ChevronRight className="w-5 h-5" />}
            {isLastSlide && <CheckCircle className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile: Bottom Navigation Bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/50 dark:border-gray-800 shadow-lg z-30 safe-area-inset-bottom">
        <div className="max-w-7xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-3">
            <button
              onClick={prevSlide}
              disabled={isFirstSlide}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed min-h-[52px] bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2"
              aria-label="Ankstesnė skaidrė"
            >
              <ChevronLeft className="w-5 h-5" />
              <span className="font-medium">Atgal</span>
            </button>

            {/* Slide counter in middle */}
            <div className="flex flex-col items-center justify-center px-4 min-w-[80px]">
              <p className="text-xs text-gray-500 dark:text-gray-400">Skaidrė</p>
              <p className="text-lg font-bold text-brand-600 dark:text-brand-400">
                {currentSlide + 1}/{module.slides.length}
              </p>
            </div>

            <button
              onClick={nextSlide}
              disabled={hasIncompletePracticalTask}
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-xl font-semibold transition-all min-h-[52px] bg-gradient-to-r from-brand-500 to-brand-600 text-white shadow-lg shadow-brand-500/25 hover:from-brand-600 hover:to-brand-700 hover:shadow-xl hover:shadow-brand-500/30 active:scale-95 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
              aria-label={isLastSlide ? 'Baigti modulį' : nextSlideLabel ?? 'Kita skaidrė'}
            >
              <span className="font-medium">{isLastSlide ? 'Baigti' : (nextSlideLabel ?? 'Pirmyn')}</span>
              {!isLastSlide && <ChevronRight className="w-5 h-5" />}
              {isLastSlide && <CheckCircle className="w-5 h-5" />}
            </button>
          </div>
          {hasIncompletePracticalTask && (
            <p className="text-xs text-amber-700 dark:text-amber-300 text-center mt-1">
              Atlikite praktinę užduotį, kad galėtumėte tęsti.
            </p>
          )}
        </div>
      </div>

      {/* Spacer for mobile bottom nav */}
      <div className="md:hidden h-20" />

      {/* Progress info moved below content */}
      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between gap-4">
          {/* Module indicator */}
          <div className="hidden sm:flex items-center gap-2">
            {modules.map((m, idx) => (
              <div
                key={m.id}
                className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all ${
                  m.id === moduleId
                    ? 'bg-brand-500 text-white scale-110'
                    : progress.completedModules.includes(m.id)
                    ? 'bg-emerald-500 text-white'
                    : 'bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}
              >
                {progress.completedModules.includes(m.id) ? (
                  <CheckCircle className="w-4 h-4" />
                ) : (
                  idx + 1
                )}
              </div>
            ))}
          </div>

          {/* Slide counter */}
          <div className="text-right">
            <p className="text-xs text-gray-500 dark:text-gray-400">Skaidrė</p>
            <p className="text-lg font-bold text-brand-600 dark:text-brand-400">
              {currentSlide + 1}/{module.slides.length}
            </p>
          </div>
        </div>

        {/* Grouped progress bar */}
        <SlideGroupProgressBar
          groups={buildSlideGroups(module.slides)}
          currentSlide={currentSlide}
          totalSlides={module.slides.length}
        />
        
        <p className="hidden md:block text-xs text-gray-500 dark:text-gray-400 text-center">
          Naudokite <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">←</kbd> <kbd className="px-2 py-1 bg-gray-100 dark:bg-gray-700 rounded text-xs font-mono">→</kbd> klavišus navigacijai
        </p>
      </div>

      {/* Slide dots */}
      <div className="mt-4 flex justify-center">
        <div className="flex gap-1 md:gap-2 flex-wrap justify-center max-w-md">
          {module.slides.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setCurrentSlide(idx);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`w-3 h-3 md:w-3 md:h-3 rounded-full transition-all duration-300 hover:scale-125 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:ring-offset-2 min-w-[12px] min-h-[12px] ${
                idx === currentSlide
                  ? 'bg-brand-500 w-8 md:w-8 shadow-md'
                  : idx < currentSlide
                  ? 'bg-brand-300 dark:bg-brand-700'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400'
              }`}
              aria-label={`Eiti į skaidrę ${idx + 1}`}
              aria-current={idx === currentSlide ? 'true' : 'false'}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// Memoize component to prevent unnecessary re-renders
// Custom comparison to handle early return case
export default memo(ModuleView, (prevProps, nextProps) => {
  if (prevProps.moduleId !== nextProps.moduleId) return false;
  if (prevProps.remediationFrom?.sourceModuleId !== nextProps.remediationFrom?.sourceModuleId) return false;
  if (
    prevProps.progress.completedModules.length !== nextProps.progress.completedModules.length ||
    JSON.stringify(prevProps.progress.completedTasks) !== JSON.stringify(nextProps.progress.completedTasks)
  ) {
    return false;
  }
  if (prevProps.totalModules !== nextProps.totalModules) return false;
  return true;
});
