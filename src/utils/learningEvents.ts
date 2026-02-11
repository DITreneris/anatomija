/**
 * A-M2: Vienas mokymosi KPI + minimalus event tracking.
 * Event log į localStorage; optional export.
 * KPI: module_completion_rate, time_to_first_action_success (pirmas CTA/task complete).
 */

const STORAGE_KEY = 'prompt-anatomy-learning-events';
const MAX_EVENTS = 500;

export type LearningEventType = 'module_completed' | 'first_action_success';

export interface LearningEventPayload {
  moduleId?: number;
  taskId?: number;
  /** Elapsed ms nuo pirmos sesijos (jei turime sessionStart) – optional vėlesniam analizei */
  elapsedMs?: number;
}

export interface LearningEvent {
  type: LearningEventType;
  timestamp: string; // ISO
  payload?: LearningEventPayload;
}

function getStoredEvents(): LearningEvent[] {
  try {
    const raw = typeof localStorage !== 'undefined' ? localStorage.getItem(STORAGE_KEY) : null;
    if (!raw) return [];
    const parsed = JSON.parse(raw) as unknown;
    if (!Array.isArray(parsed)) return [];
    return parsed.filter(
      (e): e is LearningEvent =>
        e && typeof e === 'object' && typeof e.type === 'string' && typeof e.timestamp === 'string'
    );
  } catch {
    return [];
  }
}

function saveEvents(events: LearningEvent[]): void {
  try {
    const trimmed = events.slice(-MAX_EVENTS);
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(trimmed));
    }
  } catch {
    // ignore
  }
}

/**
 * Log a learning event (persisted to localStorage).
 */
export function logLearningEvent(
  type: LearningEventType,
  payload?: LearningEventPayload
): void {
  const event: LearningEvent = {
    type,
    timestamp: new Date().toISOString(),
    ...(payload && { payload }),
  };
  const events = getStoredEvents();
  events.push(event);
  saveEvents(events);
}

/**
 * Return whether we have already logged a first_action_success (so we only log once per user).
 */
export function hasLoggedFirstActionSuccess(): boolean {
  return getStoredEvents().some((e) => e.type === 'first_action_success');
}

/**
 * Get all stored events (read-only).
 */
export function getLearningEvents(): LearningEvent[] {
  return [...getStoredEvents()];
}

/**
 * Export events as JSON string (for analytics or backup).
 */
export function exportEventsAsJson(): string {
  const events = getStoredEvents();
  return JSON.stringify(
    { exportedAt: new Date().toISOString(), events },
    null,
    2
  );
}

/**
 * Trigger download of event log as a .json file (optional export).
 * Pvz. konsolėje: import('./utils/learningEvents').then(m => m.downloadEventsExport())
 */
export function downloadEventsExport(filename?: string): void {
  const json = exportEventsAsJson();
  const blob = new Blob([json], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename ?? `prompt-anatomy-events-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  URL.revokeObjectURL(url);
}

/**
 * KPI: count of module_completed events (for module_completion_rate derivation).
 */
export function getModuleCompletedCount(): number {
  return getStoredEvents().filter((e) => e.type === 'module_completed').length;
}

/**
 * KPI: timestamp of first first_action_success (for time_to_first_action_success).
 */
export function getFirstActionSuccessTimestamp(): string | null {
  const first = getStoredEvents().find((e) => e.type === 'first_action_success');
  return first?.timestamp ?? null;
}
