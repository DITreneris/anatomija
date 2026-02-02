# 🛠️ Performance Optimizacijų Implementacija

## Faza 1: Quick Wins (Pradedame čia)

### 1.1. Debounce Progress Saving

**Failas**: `src/utils/progress.ts`

```typescript
// Pridėti debounce funkciją
function debounce<T extends (...args: any[]) => void>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Pakeisti saveProgress funkciją
let saveQueue: ProgressV2 | null = null;
const debouncedSave = debounce(() => {
  if (saveQueue) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(saveQueue));
      saveQueue = null;
    } catch (error) {
      logError(error instanceof Error ? error : new Error('Failed to save progress'), {});
    }
  }
}, 500);

export const saveProgress = (progress: Progress): void => {
  try {
    const existing = getExistingCreatedAt();
    const now = new Date().toISOString();
    
    const v2: ProgressV2 = {
      version: CURRENT_SCHEMA_VERSION,
      completedModules: progress.completedModules,
      completedTasks: progress.completedTasks,
      quizCompleted: progress.quizCompleted,
      quizScore: progress.quizScore,
      updatedAt: now,
      createdAt: existing.createdAt || now,
    };
    
    saveQueue = v2;
    debouncedSave();
  } catch (error) {
    logError(error instanceof Error ? error : new Error('Failed to save progress'), { progress });
  }
};
```

### 1.2. Memoization Komponentų

**Failas**: `src/components/ModulesPage.tsx`

```typescript
import React, { useMemo } from 'react';

// Pridėti React.memo
export default React.memo(function ModulesPage({ onModuleSelect, progress }: ModulesPageProps) {
  // Memoize module progress calculations
  const moduleProgressMap = useMemo(() => {
    const map = new Map<number, number>();
    modulesData.modules.forEach(module => {
      map.set(module.id, getModuleProgress(module.id));
    });
    return map;
  }, [progress]);

  // ... rest of component
});
```

**Failas**: `src/components/ModuleView.tsx`

```typescript
import React, { useMemo } from 'react';

export default function ModuleView({ ... }: ModuleViewProps) {
  // Memoize module lookup
  const module = useMemo(() => 
    modulesData.modules.find((m) => m.id === moduleId),
    [moduleId]
  );

  // Memoize current slide data
  const currentSlideData = useMemo(() => 
    module?.slides[currentSlide],
    [module, currentSlide]
  );

  // ... rest of component
}
```

### 1.3. Konsoliduoti modules.json Importą

**Naujas failas**: `src/data/modulesLoader.ts`

```typescript
import type { ModulesData } from '../types/modules';

let modulesCache: ModulesData | null = null;
let modulesPromise: Promise<ModulesData> | null = null;

/**
 * Load modules data (cached after first load)
 */
export const loadModules = async (): Promise<ModulesData> => {
  if (modulesCache) {
    return modulesCache;
  }

  if (!modulesPromise) {
    modulesPromise = import('./modules.json').then(m => {
      modulesCache = m.default;
      return modulesCache!;
    });
  }

  return modulesPromise;
};

/**
 * Get specific module by ID
 */
export const getModule = async (id: number) => {
  const modules = await loadModules();
  return modules.modules.find(m => m.id === id);
};

/**
 * Get all modules (synchronous if already loaded)
 */
export const getModulesSync = (): ModulesData['modules'] | null => {
  return modulesCache?.modules || null;
};

/**
 * Preload modules data
 */
export const preloadModules = () => {
  if (!modulesCache && !modulesPromise) {
    loadModules();
  }
};
```

**Atnaujinti failai**:

```typescript
// src/App.tsx
import { loadModules, getModulesSync } from './data/modulesLoader';
import type { ModulesData } from './types/modules';

function App() {
  const [modulesData, setModulesData] = useState<ModulesData | null>(null);

  useEffect(() => {
    loadModules().then(setModulesData);
  }, []);

  // Use modulesData instead of direct import
  const totalModules = modulesData?.modules.length || 0;
  // ...
}
```

```typescript
// src/components/ModulesPage.tsx
import { getModulesSync } from '../data/modulesLoader';

export default function ModulesPage({ ... }: ModulesPageProps) {
  const modulesData = getModulesSync();
  
  if (!modulesData) {
    return <LoadingSpinner />;
  }
  
  // Use modulesData instead of direct import
}
```

---

## Faza 2: Code Splitting

### 2.1. Lazy Load modules.json

**Atnaujinti**: `src/data/modulesLoader.ts`

```typescript
// Jau implementuota aukščiau, bet galima pagerinti su error handling

export const loadModules = async (): Promise<ModulesData> => {
  if (modulesCache) {
    return modulesCache;
  }

  if (!modulesPromise) {
    modulesPromise = import('./modules.json')
      .then(m => {
        modulesCache = m.default;
        return modulesCache!;
      })
      .catch(error => {
        modulesPromise = null; // Reset on error
        throw error;
      });
  }

  return modulesPromise;
};
```

### 2.2. Split SlideContent

**Nauja struktūra**:
```
src/components/slides/
  ├── types/
  │   ├── IntroSlide.tsx
  │   ├── DefinitionsSlide.tsx
  │   ├── MetaBlockSlide.tsx
  │   ├── InputBlockSlide.tsx
  │   ├── OutputBlockSlide.tsx
  │   ├── ReasoningBlockSlide.tsx
  │   ├── QualityBlockSlide.tsx
  │   ├── AdvancedBlockSlide.tsx
  │   ├── FullExampleSlide.tsx
  │   ├── ComparisonSlide.tsx
  │   ├── SummarySlide.tsx
  │   ├── TestIntroSlide.tsx
  │   ├── TestSectionSlide.tsx
  │   ├── TestResultsSlide.tsx
  │   ├── PracticeIntroSlide.tsx
  │   ├── PracticeScenarioSlide.tsx
  │   └── PracticeSummarySlide.tsx
  ├── shared/
  │   ├── PracticalTask.tsx (jau yra)
  │   ├── TemplateBlock.tsx (jau yra)
  │   └── CopyButton.tsx (jau yra)
  └── SlideContent.tsx (router)
```

**Naujas failas**: `src/components/slides/types/index.ts`

```typescript
import { lazy } from 'react';

// Lazy load all slide types
export const IntroSlide = lazy(() => import('./IntroSlide'));
export const DefinitionsSlide = lazy(() => import('./DefinitionsSlide'));
export const MetaBlockSlide = lazy(() => import('./MetaBlockSlide'));
export const InputBlockSlide = lazy(() => import('./InputBlockSlide'));
export const OutputBlockSlide = lazy(() => import('./OutputBlockSlide'));
export const ReasoningBlockSlide = lazy(() => import('./ReasoningBlockSlide'));
export const QualityBlockSlide = lazy(() => import('./QualityBlockSlide'));
export const AdvancedBlockSlide = lazy(() => import('./AdvancedBlockSlide'));
export const FullExampleSlide = lazy(() => import('./FullExampleSlide'));
export const ComparisonSlide = lazy(() => import('./ComparisonSlide'));
export const SummarySlide = lazy(() => import('./SummarySlide'));
export const TestIntroSlide = lazy(() => import('./TestIntroSlide'));
export const TestSectionSlide = lazy(() => import('./TestSectionSlide'));
export const TestResultsSlide = lazy(() => import('./TestResultsSlide'));
export const PracticeIntroSlide = lazy(() => import('./PracticeIntroSlide'));
export const PracticeScenarioSlide = lazy(() => import('./PracticeScenarioSlide'));
export const PracticeSummarySlide = lazy(() => import('./PracticeSummarySlide'));
```

**Atnaujinti**: `src/components/SlideContent.tsx`

```typescript
import { Suspense } from 'react';
import { LoadingSpinner } from '../ui';
import * as SlideComponents from './types';

export default function SlideContent({ slide, ... }: SlideContentProps) {
  // ... existing code ...

  const SlideComponent = getSlideComponent(slide.type);
  
  if (!SlideComponent) {
    return <DefaultSlide slide={slide} />;
  }

  return (
    <Suspense fallback={<LoadingSpinner size="sm" />}>
      <SlideComponent slide={slide} {...props} />
    </Suspense>
  );
}

function getSlideComponent(type: string) {
  const componentMap: Record<string, React.ComponentType<any>> = {
    'intro': SlideComponents.IntroSlide,
    'definitions': SlideComponents.DefinitionsSlide,
    'meta': SlideComponents.MetaBlockSlide,
    'input': SlideComponents.InputBlockSlide,
    'output': SlideComponents.OutputBlockSlide,
    'reasoning': SlideComponents.ReasoningBlockSlide,
    'quality': SlideComponents.QualityBlockSlide,
    'advanced': SlideComponents.AdvancedBlockSlide,
    'full-example': SlideComponents.FullExampleSlide,
    'comparison': SlideComponents.ComparisonSlide,
    'summary': SlideComponents.SummarySlide,
    'test-intro': SlideComponents.TestIntroSlide,
    'test-section': SlideComponents.TestSectionSlide,
    'test-results': SlideComponents.TestResultsSlide,
    'practice-intro': SlideComponents.PracticeIntroSlide,
    'practice-scenario': SlideComponents.PracticeScenarioSlide,
    'practice-summary': SlideComponents.PracticeSummarySlide,
  };
  
  return componentMap[type];
}
```

### 2.3. Preload Kitų Modulių

**Atnaujinti**: `src/components/ModuleView.tsx`

```typescript
import { preloadModules } from '../data/modulesLoader';

export default function ModuleView({ moduleId, ... }: ModuleViewProps) {
  // Preload next module when current module is loaded
  useEffect(() => {
    const nextModuleId = getNextModuleId(moduleId);
    if (nextModuleId) {
      // Preload modules data in background
      preloadModules();
      
      // Preload next module's slide components
      import('../components/slides/types').then(() => {
        // Components are now ready
      });
    }
  }, [moduleId]);

  // ... rest of component
}
```

---

## Faza 3: Refaktoringas

### 3.1. Modules Context

**Naujas failas**: `src/contexts/ModulesContext.tsx`

```typescript
import { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react';
import { loadModules, getModulesSync } from '../data/modulesLoader';
import type { ModulesData, Module } from '../types/modules';

interface ModulesContextValue {
  modules: Module[];
  getModule: (id: number) => Module | undefined;
  isLoading: boolean;
  error: Error | null;
}

const ModulesContext = createContext<ModulesContextValue | null>(null);

export const ModulesProvider = ({ children }: { children: ReactNode }) => {
  const [modulesData, setModulesData] = useState<ModulesData | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    // Try sync first (if already loaded)
    const sync = getModulesSync();
    if (sync) {
      setModulesData({ modules: sync } as ModulesData);
      setIsLoading(false);
      return;
    }

    // Otherwise load async
    loadModules()
      .then(data => {
        setModulesData(data);
        setIsLoading(false);
      })
      .catch(err => {
        setError(err);
        setIsLoading(false);
      });
  }, []);

  const getModule = useCallback((id: number) => {
    return modulesData?.modules.find(m => m.id === id);
  }, [modulesData]);

  const value: ModulesContextValue = {
    modules: modulesData?.modules || [],
    getModule,
    isLoading,
    error,
  };

  return (
    <ModulesContext.Provider value={value}>
      {children}
    </ModulesContext.Provider>
  );
};

export const useModules = () => {
  const context = useContext(ModulesContext);
  if (!context) {
    throw new Error('useModules must be used within ModulesProvider');
  }
  return context;
};
```

**Atnaujinti**: `src/App.tsx`

```typescript
import { ModulesProvider } from './contexts/ModulesContext';

function App() {
  return (
    <ModulesProvider>
      {/* ... existing App code ... */}
    </ModulesProvider>
  );
}
```

**Atnaujinti komponentai**:

```typescript
// src/components/ModulesPage.tsx
import { useModules } from '../contexts/ModulesContext';

export default function ModulesPage({ ... }: ModulesPageProps) {
  const { modules, isLoading } = useModules();
  
  if (isLoading) {
    return <LoadingSpinner />;
  }
  
  // Use modules instead of modulesData.modules
}
```

---

## Testing ir Validacija

### Performance Metrikos

```typescript
// src/utils/performance.ts
export const measurePerformance = (name: string, fn: () => void) => {
  if (typeof window !== 'undefined' && 'performance' in window) {
    const start = performance.now();
    fn();
    const end = performance.now();
    console.log(`[Performance] ${name}: ${(end - start).toFixed(2)}ms`);
  } else {
    fn();
  }
};
```

### Bundle Analysis

```bash
# Install analyzer
npm install --save-dev vite-bundle-visualizer

# Add to vite.config.ts
import { visualizer } from 'vite-bundle-visualizer';

export default defineConfig({
  plugins: [
    react(),
    visualizer({ open: true, filename: 'dist/stats.html' }),
  ],
});
```

---

## Checklist

### Faza 1: Quick Wins
- [ ] Debounce progress saving
- [ ] Memoization ModulesPage
- [ ] Memoization ModuleView
- [ ] Konsoliduoti modules.json importą
- [ ] Testuoti performance pagerinimus

### Faza 2: Code Splitting
- [ ] Lazy load modules.json
- [ ] Split SlideContent į atskirus failus
- [ ] Implementuoti preloading
- [ ] Testuoti bundle size sumažėjimą

### Faza 3: Refaktoringas
- [ ] Sukurti ModulesContext
- [ ] Atnaujinti visus komponentus naudoti Context
- [ ] Optimizuoti CSS (Tailwind purge)
- [ ] Testuoti visą sistemą

---

## Expected Results

### Po Faza 1:
- ✅ 30-50% greitesnis initial load
- ✅ 50-70% mažiau re-render'ų
- ✅ Geresnė UX su debouncing

### Po Faza 2:
- ✅ 50-60% mažesnis initial bundle
- ✅ 60-70% greitesnis module loading
- ✅ Lazy loading veikia

### Po Faza 3:
- ✅ Geresnė kodo organizacija
- ✅ Lengviau palaikyti
- ✅ Geresnė testuojamumas
