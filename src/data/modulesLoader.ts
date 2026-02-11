import type { ModulesData } from '../types/modules';
import { getIsMvpMode } from '../utils/mvpMode';

// Cache for loaded modules data
let modulesCache: ModulesData | null = null;
let modulesPromise: Promise<ModulesData> | null = null;
let modulesLoadError: Error | null = null;

/**
 * Load modules data (cached after first load)
 * This consolidates all modules.json imports into a single source
 */
export const loadModules = async (): Promise<ModulesData> => {
  if (modulesCache) {
    return modulesCache;
  }

  if (!modulesPromise) {
    modulesLoadError = null;
    modulesPromise = import('./modules.json').then(m => {
      // Type assertion needed because JSON imports don't preserve literal types
      const raw = m.default as unknown;
      // Guard: invalid or missing data must not crash the app
      if (!raw || typeof raw !== 'object' || !Array.isArray((raw as ModulesData).modules)) {
        modulesCache = {
          modules: [],
          quiz: {
            title: 'Apklausa',
            description: '',
            passingScore: 70,
            questions: [],
          },
        };
        return modulesCache;
      }
      const data = raw as ModulesData;
      // Ensure quiz.questions is always an array (runtime safeguard for malformed JSON)
      let result: ModulesData;
      if (!data.quiz || !Array.isArray(data.quiz.questions)) {
        result = {
          ...data,
          quiz: {
            title: data.quiz?.title ?? 'Apklausa',
            description: data.quiz?.description ?? '',
            passingScore: data.quiz?.passingScore ?? 70,
            questions: [],
          },
        };
      } else {
        result = data;
      }
      // MVP mode: only modules 1–3
      if (getIsMvpMode()) {
        result = { ...result, modules: result.modules.filter(m => m.id <= 3) };
      }
      modulesCache = result;
      return modulesCache;
    }).catch(error => {
      modulesPromise = null;
      modulesLoadError = error;
      throw error;
    });
  }

  return modulesPromise;
};

/**
 * Get specific module by ID (async)
 */
export const getModule = async (id: number) => {
  if (getIsMvpMode() && id > 3) return null;
  const modules = await loadModules();
  return modules.modules.find(m => m.id === id) ?? null;
};

/**
 * Get all modules synchronously (if already loaded)
 * Returns null if modules haven't been loaded yet
 */
export const getModulesSync = (): ModulesData['modules'] | null => {
  return modulesCache?.modules || null;
};

/**
 * Get modules data synchronously (if already loaded)
 * Returns null if modules haven't been loaded yet
 */
export const getModulesDataSync = (): ModulesData | null => {
  return modulesCache;
};

/**
 * Preload modules data in background
 * Useful for prefetching before user navigates to modules page
 */
export const preloadModules = (): void => {
  if (!modulesCache && !modulesPromise) {
    loadModules();
  }
};

/**
 * Get last load error (for retry UI)
 */
export const getModulesLoadError = (): Error | null => modulesLoadError;

/**
 * Clear load error and reset state for retry
 */
export const clearModulesLoadError = (): void => {
  modulesLoadError = null;
  modulesPromise = null;
};

/**
 * Clear cache for testing (MVP mode tests need fresh load)
 */
export const __clearCacheForTesting = (): void => {
  modulesCache = null;
  modulesPromise = null;
  modulesLoadError = null;
};
