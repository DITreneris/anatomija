/**
 * DI turinio aptikimo įrankiai – Top 10 (2026).
 * Šaltinis: di_detektoriai.html (kurso autorių apžvalga).
 * Naudojama skaidrėje „DI turinio detektoriai" (Modulis 4, sekcija 4.6).
 */

/** Įrankio aptikimo tipas */
export type DetectorType = 'text' | 'image' | 'video' | 'plagiat';

/** Vienas DI turinio aptikimo įrankis */
export interface AiDetectorEntry {
  id: string;
  /** Eilės numeris (rodyti kortelėje) */
  number: number;
  name: string;
  /** Aptikimo tipai (gali būti keli) */
  types: DetectorType[];
  /** Trumpas aprašymas LT */
  description: string;
  /** Nuoroda į svetainę (null jei nėra viešo URL) */
  url: string | null;
  /** Paryškinti kaip lietuvišką / rekomenduojamą */
  highlight?: boolean;
}

/** Tipo etiketės UI atvaizdavimui */
export const DETECTOR_TYPE_LABELS: Record<
  DetectorType,
  { label: string; colorClass: string }
> = {
  text: { label: 'Tekstas', colorClass: 'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300' },
  image: { label: 'Vaizdai', colorClass: 'bg-violet-100 text-violet-700 dark:bg-violet-900/40 dark:text-violet-300' },
  video: { label: 'Video', colorClass: 'bg-amber-100 text-amber-700 dark:bg-amber-900/40 dark:text-amber-300' },
  plagiat: { label: 'Plagiatas', colorClass: 'bg-rose-100 text-rose-700 dark:bg-rose-900/40 dark:text-rose-300' },
};

/** Visi filtravimo variantai (su „Visi") */
export const DETECTOR_FILTERS: { key: DetectorType | 'all'; label: string }[] = [
  { key: 'all', label: 'Visi' },
  { key: 'text', label: 'Tekstas' },
  { key: 'image', label: 'Vaizdai' },
  { key: 'video', label: 'Video' },
  { key: 'plagiat', label: 'Plagiatas' },
];

/** 10 DI turinio aptikimo įrankių (2026 m. apžvalga) */
export const AI_DETECTORS: AiDetectorEntry[] = [
  {
    id: 'winston-ai',
    number: 1,
    name: 'Winston AI',
    types: ['text', 'plagiat'],
    description:
      'Labai tiksli DI turinio detekcija, žema klaidingų teigiamų rodiklių norma; plačiai naudojama mokyklose ir leidybos sektoriuje.',
    url: 'https://gowinston.ai/',
  },
  {
    id: 'gptzero',
    number: 2,
    name: 'GPTZero',
    types: ['text'],
    description:
      'Benchmark įrankis akademijai – ~99 % tikslumas tekstui; atpažįsta ir mišrų (žmogus + DI) turinį.',
    url: 'https://gptzero.me/',
  },
  {
    id: 'copyleaks',
    number: 3,
    name: 'Copyleaks',
    types: ['text', 'image'],
    description:
      'Teksto ir DI paveikslėlių detektorius; nauja plėtra į video/audio detekciją 2026 m.',
    url: 'https://copyleaks.com/',
  },
  {
    id: 'originality-ai',
    number: 4,
    name: 'Originality.ai',
    types: ['text'],
    description:
      'Labai geras SEO / marketingo turinio detektorius, masinė analizė.',
    url: null,
  },
  {
    id: 'youscan',
    number: 5,
    name: 'YouScan AI Detector',
    types: ['text'],
    description:
      'Skirta marketingo / social media turiniui analizuoti ir autentiškumą patikrinti.',
    url: null,
  },
  {
    id: 'mydetector',
    number: 6,
    name: 'MyDetector.ai',
    types: ['text'],
    description:
      'Greitas nemokamas DI teksto detektorius be registracijos, palaiko daug kalbų.',
    url: 'https://mydetector.ai/',
  },
  {
    id: 'quetext',
    number: 7,
    name: 'Quetext AI Detector',
    types: ['text', 'plagiat'],
    description:
      'Nemokamas detektorius su plagiato tikrinimu; geras universalus sprendimas.',
    url: null,
  },
  {
    id: 'zerogpt',
    number: 8,
    name: 'ZeroGPT',
    types: ['text'],
    description: 'Nemokama priemonė, skirta greitai patikrinti DI turinį.',
    url: 'https://zerogpt.com/',
  },
  {
    id: 'isgen-ai',
    number: 9,
    name: 'Isgen.ai (LT)',
    types: ['text'],
    description:
      'Lietuviškas DI detektorius, gerai aptinka populiarių LLM generuotą tekstą (~96 % tikslumas).',
    url: 'https://isgen.ai/lt',
    highlight: true,
  },
  {
    id: 'synthid',
    number: 10,
    name: 'Google Gemini SynthID',
    types: ['image', 'video'],
    description:
      'Gemini atpažįsta DI generuotą turinį per SynthID watermark technologiją (kol kas tik Google DI turiniui).',
    url: null,
  },
];
