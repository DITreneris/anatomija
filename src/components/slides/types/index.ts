import { lazy } from 'react';

// Lazy load all slide type components
// This enables code splitting - each slide type is loaded only when needed

export const IntroSlide = lazy(() => import('./IntroSlide'));
export const DefinitionsSlide = lazy(() => import('./DefinitionsSlide'));
export const PromptTypesSlide = lazy(() => import('./PromptTypesSlide'));
export const PromptTechniquesSlide = lazy(() => import('./PromptTechniquesSlide'));
export const WorkflowSummarySlide = lazy(() => import('./WorkflowSummarySlide'));
export const PromptTemplateSlide = lazy(() => import('./PromptTemplateSlide'));
export const TransitionSlide = lazy(() => import('./TransitionSlide'));
export const HierarchySlide = lazy(() => import('./HierarchySlide'));
export const MetaBlockSlide = lazy(() => import('./MetaBlockSlide'));
export const InputBlockSlide = lazy(() => import('./InputBlockSlide'));
export const OutputBlockSlide = lazy(() => import('./OutputBlockSlide'));
export const ReasoningModelsSlide = lazy(() => import('./ReasoningModelsSlide'));
export const ReasoningBlockSlide = lazy(() => import('./ReasoningBlockSlide'));
export const QualityBlockSlide = lazy(() => import('./QualityBlockSlide'));
export const AdvancedBlockSlide = lazy(() => import('./AdvancedBlockSlide'));
export const AdvancedParameters2Slide = lazy(() => import('./AdvancedParameters2Slide'));
export const FullExampleSlide = lazy(() => import('./FullExampleSlide'));
export const ComparisonSlide = lazy(() => import('./ComparisonSlide'));
export const SummarySlide = lazy(() => import('./SummarySlide'));
export const TestIntroSlide = lazy(() => import('./TestIntroSlide'));
export const TestSectionSlide = lazy(() => import('./TestSectionSlide'));
export const TestResultsSlide = lazy(() => import('./TestResultsSlide'));
export const PracticeIntroSlide = lazy(() => import('./PracticeIntroSlide'));
export const PracticeScenarioSlide = lazy(() => import('./PracticeScenarioSlide'));
export const PracticeSummarySlide = lazy(() => import('./PracticeSummarySlide'));
