// TypeScript types for modules.json data structure

export interface TestQuestion {
  id: string;
  question: string;
  options: string[];
  correct: number;
  explanation: string;
}

export interface Scenario {
  context: string;
  data: string;
  constraints: string;
  expectedFormat: string;
}

export interface InstructionStep {
  step: number;
  title: string;
  description: string;
  hint: string;
  partialSolution: string;
}

export interface TaskInstructions {
  title: string;
  steps: InstructionStep[];
}

export interface PracticalTask {
  title: string;
  placeholder: string;
  motivation?: string;
  templateLabel?: string;
  template?: string;
  explanation?: string;
  instructions?: TaskInstructions;
}

export interface DefinitionsAspect {
  icon: string;
  title: string;
  description: string;
  example: string;
}

export interface DefinitionsContent {
  promptDefinition: string;
  engineeringDefinition: string;
  aspects: DefinitionsAspect[];
  keyInsight: string;
  sources?: { label: string; url: string }[];
}

export interface PromptType {
  name: string;
  color: string;
  description: string;
  example: string;
  result: string;
}

export interface PromptTypesContent {
  types: PromptType[];
  practicalTip: string;
}

export interface WorkflowDiagram {
  title: string;
  subtitle: string;
  steps: string[];
  note: string;
}

export interface WorkflowSummaryContent {
  intro: string;
  diagrams: WorkflowDiagram[];
  examples: { title: string; prompt: string }[];
}

export interface PromptTechnique {
  title: string;
  description: string;
  example: string;
}

export interface PromptTechniquesContent {
  logicSteps: string[];
  techniques: PromptTechnique[];
}

export interface PromptTemplateBlock {
  title: string;
  description: string;
  example: string;
}

export interface PromptTemplateContent {
  blocks: PromptTemplateBlock[];
  template: string;
  example: string;
}

export interface TransitionContent {
  title: string;
  mapping: { from: string; to: string }[];
  note: string;
  takeaway: string;
}

export interface ProductivityCard {
  icon: string;
  title: string;
  stats: { label: string; value: string }[];
}

export interface ProductivityInsight {
  emoji: string;
  value: string;
  text: string;
}

export interface ProductivityInfographicContent {
  title: string;
  heroNumber: string;
  heroText: string;
  conclusion: string;
  cards: ProductivityCard[];
  insights: ProductivityInsight[];
  sources?: { label: string; url: string; journal?: string }[];
}

export type SlideType =
  | 'intro'
  | 'definitions'
  | 'prompt-types'
  | 'prompt-techniques'
  | 'workflow-summary'
  | 'prompt-template'
  | 'transition-3-to-6'
  | 'hierarchy'
  | 'meta'
  | 'input'
  | 'output'
  | 'reasoning-models'
  | 'reasoning'
  | 'quality'
  | 'advanced'
  | 'advanced-2'
  | 'full-example'
  | 'comparison'
  | 'summary'
  | 'test-intro'
  | 'test-section'
  | 'test-results'
  | 'practice-intro'
  | 'practice-scenario'
  | 'practice-summary'
  | 'infographic';

export type SlideContent =
  | DefinitionsContent
  | PromptTypesContent
  | PromptTechniquesContent
  | WorkflowSummaryContent
  | PromptTemplateContent
  | TransitionContent
  | ProductivityInfographicContent;

export interface Slide {
  id: number;
  title: string;
  subtitle: string;
  type: SlideType;
  blockNumber?: number;
  keyQuestion?: string;
  testQuestions?: TestQuestion[];
  scenario?: Scenario;
  content?: SlideContent;
  practicalTask?: PracticalTask;
}

export interface BusinessExample {
  title: string;
  description: string;
}

export type ModuleLevel = 'learn' | 'test' | 'practice';
export type ModuleIcon = 'Target' | 'Brain' | 'Settings';

export interface Module {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  icon: ModuleIcon;
  level: ModuleLevel;
  duration: string;
  slides: Slide[];
  businessExamples: BusinessExample[];
}

export interface QuizQuestion {
  id: number;
  question: string;
  options: string[];
  correct: number;
  explanation?: string;
}

export interface Quiz {
  title: string;
  description: string;
  passingScore: number;
  questions: QuizQuestion[];
}

export interface ModulesData {
  modules: Module[];
  quiz: Quiz;
}

// Color mapping types for consistent styling
export type BlockColor = 'rose' | 'orange' | 'amber' | 'emerald' | 'brand' | 'violet';

export interface HierarchyBlock {
  num: string;
  name: string;
  desc: string;
  priority: string;
  color: BlockColor;
}

export interface QualityCriteria {
  text: string;
  color: BlockColor;
}

export interface FullExampleBlock {
  num: number;
  name: string;
  color: BlockColor;
  content: string;
}
