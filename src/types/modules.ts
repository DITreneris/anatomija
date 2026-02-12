// TypeScript types for modules.json data structure

/** Klausimo tipas – MCQ (numatytasis), matching, ordering, true-false, scenario */
export type QuestionType = 'mcq' | 'matching' | 'ordering' | 'true-false' | 'scenario';

/** Matching klausimo pora – kairė ir dešinė pusė */
export interface MatchPair {
  left: string;
  right: string;
}

export interface TestQuestion {
  id: string;
  /** Klausimo tipas. Jei nenurodyta – traktuojama kaip 'mcq' (backward compatible) */
  type?: QuestionType;
  question: string;
  // MCQ + Scenario fields
  options?: string[];
  correct?: number;
  // Matching fields
  matchPairs?: MatchPair[];
  // Ordering fields
  correctOrder?: string[];
  items?: string[];
  // True/False fields
  isTrue?: boolean;
  // Scenario fields
  scenarioContext?: string;
  // Common fields
  explanation: string;
  /** Užuomina – rodoma po pirmo neteisingmo bandymo (progressive hint) */
  hint?: string;
  /** Bloom taksonomijos lygis: 1=Remember, 2=Understand, 3=Apply, 4=Analyze, 5=Evaluate, 6=Create */
  bloomLevel?: number;
  /** Susijusios Modulio 1 skaidrės ID – remediation nuoroda */
  relatedSlideId?: number;
  /** Kategorija per-bloko vertinimui: meta, input, output, reasoning, quality, advanced, workflow, technikos */
  category?: string;
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
  /** Aiški instrukcija, ką vesti į lauką (pvz. „Įveskite visą promptą – ne tik žodžius skliausteliuose“). */
  inputHint?: string;
  templateLabel?: string;
  template?: string;
  explanation?: string;
  instructions?: TaskInstructions;
}

/** Vienas įrankis modalių grupėje (galima pažymėti rekomenduojamą, tooltip – hover) */
export interface DiModalityExample {
  name: string;
  url?: string;
  /** Pažymėti kaip rekomenduojamą įrankį šiai kategorijai */
  recommended?: boolean;
  /** Trumpas aprašymas (rodomas kaip title/tooltip ant nuorodos) */
  tooltip?: string;
}

/** Viena modalių grupė skaidrei „GPT –> TAI TRANSFORMERIAI“ (įvestis → išvestis) */
export interface DiModalityGroup {
  modality: string;
  tasks: string;
  description: string;
  examples: DiModalityExample[];
}

export interface DiModalitiesContent {
  title?: string;
  /** Trumpas įvadinis tekstas virš kategorijų (jei nėra – rodomas numatytas) */
  intro?: string;
  /** Santrauka apačioje: kaip rinktis įrankius (jei nėra – nerodoma) */
  takeaway?: string;
  /** Kiek kategorijų rodyti iš karto; likusios po „Rodyti daugiau“ (0 = rodyti visas) */
  showFirst?: number;
  groups: DiModalityGroup[];
}

/** Vienas segmentas skaidrei „Kam žmonės naudoja GPT?“ (pie diagrama) */
export interface PieChartSegment {
  label: string;
  value: number;
  /** Spalva pagal projekto paletę: brand, emerald, orange, rose, violet, amber, cyan, slate */
  colorKey?: string;
}

export interface PieChartContent {
  title?: string;
  subtitle?: string;
  segments: PieChartSegment[];
}

/** Vienas bendras workflow etapas (Įvestis / Apdorojimas / Rezultatas) */
export interface AiWorkflowStage {
  step: number;
  title: string;
  items: string[];
}

/** Vienas pavyzdinis įrankių grandinės žingsnis (pvz. ChatGPT – Pradinis užklausas) */
export interface AiWorkflowStep {
  tool: string;
  description: string;
}

/** Viena pavyzdinė workflow grandinė (pvz. ChatGPT → Claude AI → Gamma App) */
export interface AiWorkflowExample {
  steps: AiWorkflowStep[];
}

export interface AiWorkflowContent {
  title?: string;
  subtitle?: string;
  /** Bendri etapai: 1. Įvestis, 2. Apdorojimas, 3. Rezultatas */
  stages?: AiWorkflowStage[];
  /** Trumpi workflow pavyzdžiai (įrankis → įrankis → …) */
  examples: AiWorkflowExample[];
}

/** Veiksmo intro skaidrė (Modulio 1 pirma skaidrė) – provokacija + micro-action + kontekstas.
 *  v2: perrašyta pagal vartotojo kelionės analizę (vartotojo_kelione.md) – emocinis hook, CTA hero viduje, 5-7s veiksmas. */
export interface ActionIntroContent {
  /** Pagrindinė provokuojanti antraštė (pvz. "Ta pati užduotis.") */
  heroStat: string;
  /** Antroji antraštės eilutė – konfliktas (pvz. "Du visiškai skirtingi DI atsakymai.") */
  heroText: string;
  /** Trečia eilutė – paaiškinimas/diskomfortas (pvz. "Skirtumas – ne modelis. Skirtumas – prompto struktūra.") */
  heroSubText?: string;
  /** CTA mygtuko tekstas hero bloke (pvz. "Pamatyk skirtumą per 30 sekundžių!"). Jei nėra – default su 30 s pažadu */
  ctaText?: string;
  /** Nestruktūruotas promptas – micro-action demo kairė pusė */
  unstructuredPrompt: string;
  /** Struktūruotas promptas – micro-action demo dešinė pusė (atsiskleidžia paspaudus) */
  structuredPrompt: string;
  /** Trumpas "Apie mokymą" tekstas – 1-2 sakiniai */
  aboutText: string;
  /** Outcomes – 3 punktai */
  outcomes: string[];
  /** Įrankiai – apačioje išskleidžiamas blokas su aprašymais ir naudojimo atvejais */
  tools: {
    name: string;
    url?: string;
    /** Trumpas aprašymas įrankio (1–2 sakiniai) */
    description?: string;
    /** Populiariausi naudojimo atvejai (pvz. "Rašyti laiškus", "Santraukos") */
    useCases?: string[];
  }[];
  /** Intro tekstas virš įrankių bloko (pvz. "6 blokų principai veikia bet kuriame iš šių įrankių.") */
  toolsIntro?: string;
  /** Trukmės tekstas (pvz. "3 moduliai, ~45 min") */
  duration: string;
}

/** Įvado skaidrė (Modulio 1) – content-driven; jei content nėra – IntroSlide naudoja hardcoded. P2 skaidrių tipų analizė §4.1 */
export interface IntroContent {
  /** Apie šį mokymą – 1–2 pastraipos */
  aboutText: string;
  /** Įrankiai su nuorodomis (ChatGPT, Claude, …) */
  tools: { name: string; url?: string }[];
  /** Po šio mokymo galėsite – 3–6 punktai */
  outcomes: string[];
  /** Optional: „Svarbu“ / tools tip (pvz. apie promptų struktūrą) */
  toolsTip?: string;
  /** Optional: Praktinė užduotis – 1–2 sakiniai */
  tip?: string;
}

/** Modulio įvado skaidrė (pvz. Modulis 4) – „Po šio modulio galėsite“ + „Kodėl konteksto inžinerija?“ */
export interface ModuleIntroContent {
  /** 5–6 punktai, ką išmoks dalyvis */
  learningOutcomes: string[];
  /** 2–3 sakiniai: kodėl šis lygis svarbus */
  whyAdvanced: string;
  /** Pasirenkama: motyvuojantis ryšys su Moduliu 1 (rodomas apačioje) */
  connectionToModule1?: string;
}

/** Lentelė content-block sekcijoje (pvz. RL vs RLHF palyginimas) */
export interface ContentBlockTable {
  /** Stulpelių antraštės */
  headers: string[];
  /** Eilučių duomenys – kiekviena eilutė yra masyvas langelių (ilgis = headers.length) */
  rows: string[][];
}

/** Bendras turinio blokas (antraštė + tekstas + optional vizualas) – Modulio 4 ir kt. skaidrėms pagal SOT */
export interface ContentBlockSection {
  heading?: string;
  /** Tekstas; **tekstas** rodomas paryškintai. Gali būti tuščias, jei naudojama tik section.table */
  body: string;
  /** Jei nurodyta – rodomas CopyButton su šiuo tekstu (pvz. anti-haliucinacinis šablonas, 5 taisyklės). MUST M3 */
  copyable?: string;
  /** Kai true – sekcija rodoma kaip „accordion“ (paspaudžiamas blokas) */
  collapsible?: boolean;
  /** Kai true – collapsible sekcija pradžioje suskleista (default: true) */
  collapsedByDefault?: boolean;
  /** Nuoroda į vaizdą (pvz. /diagram.png) – rodomas virš teksto arba po antraštės */
  image?: string;
  /** Alt tekstas pritaikomumui */
  imageAlt?: string;
  /** Bloko stilius: brand – pagrindinė info, accent – CTA/esminė žinutė, terms – žodynėlis (slate), default – neutralus */
  blockVariant?: 'brand' | 'accent' | 'terms' | 'default';
  /** Kai true – sekcija rodo content.presentationTools (įrankiai atskiru bloku) */
  presentationToolsBlock?: boolean;
  /** Pasirenkama lentelė – rodoma po antraštės (pvz. RL vs RLHF palyginimas) */
  table?: ContentBlockTable;
}

/** Vienas palyginimo vaizdas – src, antraštė, paaiškinimas, šaltinis */
export interface ContentBlockComparisonImage {
  src: string;
  /** Antraštė po paveikslu */
  label?: string;
  /** Paaiškinimas 1–2 sakiniais (non-tech) */
  explanation?: string;
  /** Šaltinis (mažu šriftu) */
  source?: string;
}

/** Palyginimo vaizdai (pvz. DI visata vs Paradizas/Dante) – rodomi viršuje content-block skaidrės */
export interface ContentBlockComparisonImages {
  left: ContentBlockComparisonImage;
  right: ContentBlockComparisonImage;
}

/** Atpažinimo pratimas – pvz. DI visatos sluoksnių atpažinimas */
export interface RecognitionExercise {
  title: string;
  task: string;
  examples: string[];
  choices: string[];
  /** Teisingi atsakymai pagal pavyzdžius (choices indeksas): correctAnswers[i] = teisingas choice index pavyzdžiui i */
  correctAnswers: number[];
  /** Pasirenkama: trumpas paaiškinimas kiekvienam pavyzdžiui, kodėl teisingas atsakymas – rodomas neteisingai atsakius */
  explanations?: string[];
  goal: string;
}

/** Vienas workflow vaizdas (pvz. inžinerijos pavyzdys) – skaidrė „4 dedamosios“ */
export interface ContentBlockWorkflowImage {
  src: string;
  alt?: string;
  label?: string;
  /** Pasirenkama: hover tooltip su papildomu paaiškinimu */
  tooltip?: string;
}

/** Prezentacijų įrankis – nuoroda + kam tinka (skaidrė „8 skaidrių prezentacija“) */
export interface ContentBlockPresentationTool {
  name: string;
  url: string;
  /** Kam ir kada naudoti (pvz. „Mokymams, vadovams“) */
  forWhom: string;
}

/** InstructGPT kokybės analizės statistikos elementas (skaidrė 40.8) */
export interface InstructGptQualityStat {
  label: string;
  value: string;
  detail: string;
  colorKey: 'accent' | 'emerald' | 'violet' | 'slate';
}

/** InstructGPT delta eilutė (1.5B → 175B pokytis) */
export interface InstructGptQualityDelta {
  model: string;
  start: string;
  end: string;
  change: string;
  colorKey: 'accent' | 'emerald' | 'violet' | 'slate' | 'rose';
}

/** InstructGPT kokybės vizualizacijos blokas (stats, chart, delta, insight) */
export interface InstructGptQualityBlock {
  stats: InstructGptQualityStat[];
  chartData: { model: string; points: { x: string; y: number }[]; colorKey: string }[];
  deltaRows: InstructGptQualityDelta[];
  insight: string;
  scaleNote?: string;
}

export interface ContentBlockContent {
  sections: ContentBlockSection[];
  /** Pasirenkama: du vaizdai palyginimui (Modulio 4 ir kt.) */
  comparisonImages?: ContentBlockComparisonImages;
  /** Pasirenkama: iki 2 workflow vaizdai (pvz. inžinerijos pavyzdžiai) – rodomi po pirmuoju bloku */
  workflowImages?: ContentBlockWorkflowImage[];
  /** Pasirenkama: prezentacijų įrankiai su nuorodomis – rodomi šalia workflow (skaidrė 47) */
  presentationTools?: ContentBlockPresentationTool[];
  /** Kopijuojamas prompto šablonas praktikai (pagal projekto praktikas) */
  practicalTask?: { template: string; templateLabel?: string };
  /** Atpažinimo pratimas – pavyzdžiai + pasirinkimai (pvz. DI visatos sluoksniai) */
  recognitionExercise?: RecognitionExercise;
  /** InstructGPT kokybės analizė (skaidrė 40.8) – stats, chart, delta, insight */
  instructGptQuality?: InstructGptQualityBlock;
}

/** Skyriaus riba / milestone (Modulio 4 ir kt.) – paprasta skaidrė su antrašte */
export interface SectionBreakContent {
  title: string;
  subtitle?: string;
  /** Pvz. "4.1", "4.2" – rodomas kaip ženklelis */
  sectionNumber?: string;
}

/** Pasiruošimo savitikra prieš testą – bandomieji klausimai be įskaitos */
export interface WarmUpQuizContent {
  questions: TestQuestion[];
}

/** Modulio 4 žodynėlis – terminas ir vieno sakinio apibrėžimas (SOT 2.1a) */
export interface GlossaryTerm {
  term: string;
  definition: string;
}

export interface GlossaryContent {
  terms: GlossaryTerm[];
}

export interface DefinitionsAspect {
  icon: string;
  title: string;
  description: string;
  example: string;
}

export interface DefinitionsContent {
  /** Trumpas „Kas čia?“ kontekstas pradžioje – padeda tiems, kurie dar nepažįsta terminų (pvz. „Šioje skaidrėje – du pagrindiniai žodžiai: promptas ir promptų inžinerija.“) */
  contextIntro?: string;
  /** Nuoroda į vaizdą skaidrės pradžioje (pvz. /ai_universe.gif) – rodomas prieš apibrėžimus */
  heroImage?: string;
  /** Antras vaizdas palyginimui (pvz. /paradise_dante.gif); rodomas šalia heroImage su etiketėmis */
  comparisonImage?: string;
  /** Etiketė pirmam vaizdui (kai rodomas palyginimas) */
  heroImageLabel?: string;
  /** Etiketė antram vaizdui (palyginimas) */
  comparisonImageLabel?: string;
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
  /** Vizualinis variantas: 'basic' (neutralus) arba 'workflow' (paryškintas) */
  variant?: 'basic' | 'workflow';
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
  sources?: {
    label?: string;
    title?: string;
    institution?: string;
    year?: string;
    url: string;
    journal?: string;
  }[];
}

export type SlideType =
  | 'action-intro'
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
  | 'infographic'
  | 'hallucination-dashboard'
  | 'ai-detectors'
  | 'di-modalities'
  | 'pie-chart'
  | 'ai-workflow'
  | 'module-intro'
  | 'content-block'
  | 'glossary'
  | 'section-break'
  | 'warm-up-quiz';

/** Veiksmo intro blokas Modulio 1 Advanced skaidrėms (id 11, 18) – Trumpai, Daryk dabar, Patikra viršuje */
export interface AdvancedVeiksmoIntro {
  trumpai?: string;
  darykDabar?: string;
  patikra?: string;
}

/** Content skaidrėms type 'advanced' | 'advanced-2' – neprivalomas veiksmo intro */
export interface AdvancedVeiksmoIntroContent {
  veiksmoIntro: AdvancedVeiksmoIntro;
}

export type SlideContent =
  | ActionIntroContent
  | IntroContent
  | ModuleIntroContent
  | ContentBlockContent
  | GlossaryContent
  | DiModalitiesContent
  | PieChartContent
  | AiWorkflowContent
  | DefinitionsContent
  | PromptTypesContent
  | PromptTechniquesContent
  | WorkflowSummaryContent
  | PromptTemplateContent
  | TransitionContent
  | ProductivityInfographicContent
  | SectionBreakContent
  | WarmUpQuizContent
  | HierarchyContent
  | ComparisonContent
  | SummaryContent
  | PracticeSummaryContent
  | AdvancedVeiksmoIntroContent;

export interface Slide {
  id: number;
  title: string;
  /** Trumpas pavadinimas navigacijai / UI (jei title ilgas) */
  shortTitle?: string;
  subtitle: string;
  type: SlideType;
  blockNumber?: number;
  keyQuestion?: string;
  testQuestions?: TestQuestion[];
  scenario?: Scenario;
  content?: SlideContent;
  practicalTask?: PracticalTask;
  /** Ar skaidrė yra papildoma (optional) – mokiniui galima praleisti */
  optional?: boolean;
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

/** Hierarchijos skaidrė (Modulio 1) – content-driven. P2 SKAIDRIU_TIPU_ANALIZE §4.1 */
export interface HierarchyContent {
  introHeading?: string;
  introBody?: string;
  blocks: HierarchyBlock[];
  tip?: string;
}

/** Palyginimo skaidrė (nestruktūruotas vs struktūruotas) – content-driven. P2 §4.1 */
export interface ComparisonContent {
  introText?: string;
  unstructuredPrompt: string;
  structuredPrompt: string;
  unstructuredCons?: string[];
  structuredPros?: string[];
  labelLeft?: string;
  labelRight?: string;
  /** leftPct, rightPct, lessEditsPct – rezultatų palyginimas */
  stats?: { leftPct: number; rightPct: number; lessEditsPct: number };
}

/** Modulio santraukos skaidrė – content-driven. P2 §4.1
 *  v2 2026-02: redesign pagal top e-learning platformų šablonus (Duolingo, Design+Code, Articulate).
 *  Pridėta: sekcijų ikonos, spalvos, statistika, motyvacinis CTA. */
export interface SummarySection {
  heading: string;
  items: string[];
  /** Lucide ikonos pavadinimas (pvz. "Layers", "Workflow", "Lightbulb", "ArrowRight") */
  icon?: string;
  /** Spalvos raktas – brand, emerald, violet, amber, rose, orange */
  color?: string;
}
export interface SummaryContent {
  introHeading?: string;
  introBody?: string;
  sections: SummarySection[];
  /** Statistikos blokai hero dalyje (pvz. "6 blokai", "5 technikos") */
  stats?: { label: string; value: string }[];
  /** Motyvacinis šūkis apačioje (pvz. "Struktūruoti promptai = nuspėjami rezultatai") */
  tagline?: string;
  /** Kopijuojamas refleksijos promptas – mokinys gali iškart panaudoti su DI įrankiu */
  reflectionPrompt?: string;
  /** Refleksijos kortelės antraštė */
  reflectionTitle?: string;
}

/** Praktikos santraukos skaidrė – content-driven. P2 §4.1 */
export interface PracticeSummaryContent {
  title?: string;
  subtitle?: string;
  learnedItems?: string[];
  nextStepsItems?: string[];
  taglineTitle?: string;
  taglineSub?: string;
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
