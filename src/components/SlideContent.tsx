import { Progress } from '../utils/progress';
import { logWarning } from '../utils/logger';
import { PracticalTask } from './slides';
import {
  ActionIntroSlide,
  IntroSlide,
  ModuleIntroSlide,
  ContentBlockSlide,
  SectionBreakSlide,
  WarmUpQuizSlide,
  GlossarySlide,
  DefinitionsSlide,
  PromptTypesSlide,
  PromptTechniquesSlide,
  WorkflowSummarySlide,
  PromptTemplateSlide,
  TransitionSlide,
  MetaBlockSlide,
  InputBlockSlide,
  OutputBlockSlide,
  ReasoningModelsSlide,
  ReasoningBlockSlide,
  QualityBlockSlide,
  FullExampleSlide,
  TestIntroSlide,
  TestSectionSlide,
  TestResultsSlide,
  PracticeIntroSlide,
  PracticeScenarioSlide,
  ProductivityInfographicSlide,
  DiModalitiesSlide,
  PieChartSlide,
  AiWorkflowSlide,
} from './slides/types';
import { AdvancedBlockSlide, AdvancedParameters2Slide } from './slides/types/BlockSlides';
import { HierarchySlide, ComparisonSlide, SummarySlide, PracticeSummarySlide } from './slides/types';
import HallucinationRatesDashboard from './HallucinationRatesDashboard';
import AiDetectorsSlide from './AiDetectorsSlide';
import type {
  Slide,
  ActionIntroContent,
  DefinitionsContent,
  PromptTypesContent,
  PromptTechniquesContent,
  WorkflowSummaryContent,
  PromptTemplateContent,
  TransitionContent,
  ProductivityInfographicContent,
  DiModalitiesContent,
  PieChartContent,
  AiWorkflowContent,
  IntroContent,
  ModuleIntroContent,
  ContentBlockContent,
  HierarchyContent,
  ComparisonContent,
  SummaryContent,
  PracticeSummaryContent,
  SectionBreakContent,
  WarmUpQuizContent,
  GlossaryContent,
} from '../types/modules';

export interface PracticeScenarioSlideInfo {
  slideIndex: number;
  slideId: number;
  title: string;
}

interface SlideContentProps {
  slide: Slide;
  moduleId: number;
  onTaskComplete: (taskId: number, testScore?: number) => void;
  progress: Progress;
  onGoToModule?: (moduleId: number, slideIndex?: number, fromRemediationSourceModuleId?: number) => void;
  onGoToGlossary?: () => void;
  onNextSlide?: () => void;
  /** Modulio 3: scenarijų skaidrės – progresas ir navigacija (#8) */
  practiceScenarioSlides?: PracticeScenarioSlideInfo[];
  onNavigateToSlide?: (slideIndex: number) => void;
}

export default function SlideContent({
  slide,
  moduleId,
  onTaskComplete,
  progress,
  onGoToModule,
  onGoToGlossary,
  onNextSlide,
  practiceScenarioSlides,
  onNavigateToSlide,
}: SlideContentProps) {
  const isTaskCompleted = progress.completedTasks[moduleId]?.includes(slide.id) || false;

  const handleTaskComplete = (taskId: number, testScore?: number) => {
    if (!progress.completedTasks[moduleId]?.includes(taskId)) {
      onTaskComplete(taskId, testScore);
    }
  };

  // Practical Task wrapper component
  const PracticalTaskSection = () => {
    if (!slide.practicalTask) return null;
    return (
      <PracticalTask
        task={slide.practicalTask}
        slideId={slide.id}
        moduleId={moduleId}
        onTaskComplete={handleTaskComplete}
        progress={progress}
      />
    );
  };

  // Fallback kai skaidrei būtinas content, bet jis trūksta (apsauga nuo neteisingo JSON)
  const fallbackMissingContent = () => {
    logWarning('Trūksta content skaidrei', { slideId: slide.id, slideType: slide.type });
    return (
      <div className="space-y-6">
        <div>
          <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{slide.title}</h2>
          {slide.subtitle && (
            <p className="mt-1 text-gray-600 dark:text-gray-400">{slide.subtitle}</p>
          )}
        </div>
        {import.meta.env.DEV && (
          <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-sm text-amber-800 dark:text-amber-200" role="alert">
            Skaidrei trūksta turinio (type: <code className="font-mono">{String(slide.type)}</code>, id: {slide.id})
          </div>
        )}
        <PracticalTaskSection />
      </div>
    );
  };

  // Render different slide types
  switch (slide.type) {
    case 'action-intro':
      if (slide.content == null) return fallbackMissingContent();
      return <ActionIntroSlide content={slide.content as ActionIntroContent} />;

    case 'intro':
      return <IntroSlide {...(slide.content != null ? { content: slide.content as IntroContent } : {})} />;

    case 'module-intro':
      if (slide.content == null) return fallbackMissingContent();
      return <ModuleIntroSlide content={slide.content as ModuleIntroContent} />;

    case 'content-block':
      if (slide.content == null) return fallbackMissingContent();
      return <ContentBlockSlide content={slide.content as ContentBlockContent} />;

    case 'section-break':
      if (slide.content == null) return fallbackMissingContent();
      return <SectionBreakSlide content={slide.content as SectionBreakContent} />;

    case 'warm-up-quiz':
      if (slide.content == null) return fallbackMissingContent();
      return <WarmUpQuizSlide content={slide.content as WarmUpQuizContent} />;

    case 'glossary':
      if (slide.content == null) return fallbackMissingContent();
      return <GlossarySlide content={slide.content as GlossaryContent} />;

    case 'definitions':
      if (slide.content == null) return fallbackMissingContent();
      return <DefinitionsSlide content={slide.content as DefinitionsContent} />;

    case 'di-modalities':
      if (slide.content == null) return fallbackMissingContent();
      return <DiModalitiesSlide content={slide.content as DiModalitiesContent} />;

    case 'pie-chart':
      if (slide.content == null) return fallbackMissingContent();
      return <PieChartSlide content={slide.content as PieChartContent} />;

    case 'ai-workflow':
      if (slide.content == null) return fallbackMissingContent();
      return <AiWorkflowSlide content={slide.content as AiWorkflowContent} />;

    case 'prompt-types':
      if (slide.content == null) return fallbackMissingContent();
      return <PromptTypesSlide content={slide.content as PromptTypesContent} />;

    case 'prompt-techniques':
      if (slide.content == null) return fallbackMissingContent();
      return <PromptTechniquesSlide content={slide.content as PromptTechniquesContent} />;

    case 'workflow-summary':
      if (slide.content == null) return fallbackMissingContent();
      return <WorkflowSummarySlide content={slide.content as WorkflowSummaryContent} />;

    case 'prompt-template':
      if (slide.content == null) return fallbackMissingContent();
      return <PromptTemplateSlide content={slide.content as PromptTemplateContent} />;

    case 'transition-3-to-6':
      if (slide.content == null) return fallbackMissingContent();
      return <TransitionSlide content={slide.content as TransitionContent} />;

    case 'hierarchy':
      return <HierarchySlide {...(slide.content != null ? { content: slide.content as HierarchyContent } : {})} />;

    case 'meta':
      return <MetaBlockSlide onRenderTask={PracticalTaskSection} />;

    case 'input':
      return <InputBlockSlide onRenderTask={PracticalTaskSection} />;

    case 'output':
      return <OutputBlockSlide onRenderTask={PracticalTaskSection} />;

    case 'reasoning-models':
      return <ReasoningModelsSlide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'reasoning':
      return <ReasoningBlockSlide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'quality':
      return <QualityBlockSlide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'advanced':
      return <AdvancedBlockSlide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'advanced-2':
      return <AdvancedParameters2Slide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'full-example':
      return <FullExampleSlide onRenderTask={PracticalTaskSection} />;

    case 'comparison':
      return <ComparisonSlide {...(slide.content != null ? { content: slide.content as ComparisonContent } : {})} />;

    case 'summary':
      if (slide.content == null) return fallbackMissingContent();
      return <SummarySlide content={slide.content as SummaryContent} onNextStep={onNextSlide} />;

    case 'test-intro':
      return <TestIntroSlide slide={slide} moduleId={moduleId} />;

    case 'test-section':
      return (
        <TestSectionSlide
          questions={slide.testQuestions || []}
          onComplete={(score) => handleTaskComplete(slide.id, score)}
          isCompleted={isTaskCompleted}
        />
      );

    case 'test-results':
      return <TestResultsSlide moduleId={moduleId} progress={progress} onGoToModule={onGoToModule} onNextSlide={onNextSlide} />;

    case 'practice-intro':
      return (
        <PracticeIntroSlide
          slide={slide}
          moduleId={moduleId}
          progress={progress}
          scenarioSlides={practiceScenarioSlides}
          onNavigateToSlide={onNavigateToSlide}
        />
      );

    case 'practice-scenario':
      return <PracticeScenarioSlide slide={slide} onRenderTask={PracticalTaskSection} />;

    case 'practice-summary':
      return <PracticeSummarySlide {...(slide.content != null ? { content: slide.content as PracticeSummaryContent } : {})} />;

    case 'infographic':
      if (slide.content == null) return fallbackMissingContent();
      return <ProductivityInfographicSlide content={slide.content as ProductivityInfographicContent} onGoToGlossary={onGoToGlossary} />;

    case 'hallucination-dashboard':
      return <HallucinationRatesDashboard />;

    case 'ai-detectors':
      return <AiDetectorsSlide />;

    default: {
      logWarning('Skaidrės tipas neatpažintas', { slideId: slide.id, slideType: slide.type });
      return (
        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 dark:text-gray-100">{slide.title}</h2>
            {slide.subtitle && (
              <p className="mt-1 text-gray-600 dark:text-gray-400">{slide.subtitle}</p>
            )}
          </div>
          {import.meta.env.DEV && (
            <div className="rounded-lg border border-amber-500/50 bg-amber-500/10 px-4 py-2 text-sm text-amber-800 dark:text-amber-200" role="alert">
              Skaidrės tipas neatpažintas (type: <code className="font-mono">{String(slide.type)}</code>, id: {slide.id})
            </div>
          )}
          <PracticalTaskSection />
        </div>
      );
    }
  }
}
