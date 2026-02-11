/**
 * Haliucinacijų rodikliai pagrindinių DI modelių benchmarke.
 * Šaltinis: Hugging Face Hallucination Eval Leaderboard by Vectara.
 * Rodikliai gali skirtis priklausomai nuo vertinimo metodologijos ir datos.
 */
export interface HallucinationRateEntry {
  id: string;
  model: string;
  ratePercent: number;
  /** Paryškinti skaidrėje (pvz. GPT 4o) */
  highlight?: boolean;
}

export const HALLUCINATION_RATES_SOURCE = {
  name: 'Hugging Face Hallucination Eval Leaderboard',
  by: 'Vectara',
  url: 'https://huggingface.co/spaces/vectara/Hallucination-evaluation-leaderboard',
} as const;

/** Duomenys pagal Vectara leaderboard (apytiksliai iš lyderių lentelės) */
export const HALLUCINATION_RATES: HallucinationRateEntry[] = [
  { id: 'gpt-4-turbo', model: 'GPT-4 Turbo', ratePercent: 2.5 },
  { id: 'gpt-4', model: 'GPT-4', ratePercent: 3.0 },
  { id: 'gpt-35-turbo', model: 'GPT-3.5 Turbo', ratePercent: 3.5 },
  { id: 'gpt-4o', model: 'GPT-4o', ratePercent: 3.7, highlight: true },
  { id: 'cohere-command-r-plus', model: 'Cohere Command R+', ratePercent: 3.8 },
  { id: 'llama-3-70b', model: 'Llama 3 70B', ratePercent: 4.5 },
  { id: 'gemini-15-pro', model: 'Google Gemini 1.5 Pro', ratePercent: 4.6 },
  { id: 'llama-3-8b', model: 'Llama 3 8B', ratePercent: 5.4 },
];
