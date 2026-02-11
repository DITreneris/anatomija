/**
 * Pasitikėjimo lygio etiketės (naudojamos ConfidenceSelector ir rezultatų rodyme).
 */
export type ConfidenceLevel = 'sure' | 'guess' | 'unsure';

const LABELS: Record<ConfidenceLevel, string> = {
  sure: 'Tikras',
  guess: 'Spėju',
  unsure: 'Nežinau',
};

export function confidenceLabel(level: ConfidenceLevel): string {
  return LABELS[level];
}

export const CONFIDENCE_LABELS = LABELS;
