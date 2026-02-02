import type { ModulesData } from '../types/modules';

// Cache for loaded modules data
let modulesCache: ModulesData | null = null;
let modulesPromise: Promise<ModulesData> | null = null;

/**
 * Load modules data (cached after first load)
 * This consolidates all modules.json imports into a single source
 */
export const loadModules = async (): Promise<ModulesData> => {
  if (modulesCache) {
    return modulesCache;
  }

  if (!modulesPromise) {
    modulesPromise = import('./modules.json').then(m => {
      modulesCache = m.default;
      return modulesCache!;
    }).catch(error => {
      modulesPromise = null; // Reset on error to allow retry
      throw error;
    });
  }

  return modulesPromise;
};

/**
 * Get specific module by ID (async)
 */
export const getModule = async (id: number) => {
  const modules = await loadModules();
  return modules.modules.find(m => m.id === id);
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
