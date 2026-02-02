# 🔍 Gili Kodo Analizė ir Performance Tobulinimai

## 📊 Esama Situacija

### Build Rezultatai
```
dist/assets/index-CX5FwjPk.css            376.55 kB │ gzip: 48.79 kB
dist/assets/ModuleView-BY3l5KHS.js      118.31 kB │ gzip: 22.19 kB
dist/assets/index-dLq33gLj.js             60.55 kB │ gzip: 17.66 kB
dist/assets/vendor-C3tIxkqN.js          133.93 kB │ gzip: 43.12 kB
```

### Identifikuotos Problemos

#### 🔴 KRITINĖS PROBLEMOS

1. **modules.json duplikacija ir sinchroninis įkėlimas**
   - Failas importuojamas 4 vietose: `App.tsx`, `ModulesPage.tsx`, `ModuleView.tsx`, `QuizPage.tsx`
   - Visas JSON (906 eilučių) įtraukiamas į pagrindinį bundle
   - Nėra lazy loading - duomenys kraunami iš karto
   - **Poveikis**: Didelis initial bundle size, lėtas pirmas užkrovimas

2. **SlideContent.tsx - per didelis komponentas**
   - 2426 eilutės viename faile
   - Visi slide tipai viename komponente
   - Nėra code splitting pagal slide tipus
   - **Poveikis**: ModuleView.js = 118KB (per didelis)

3. **Nėra memoization**
   - Komponentai per-renderinami be reikalo
   - `ModulesPage` renderina visus modulius kiekvieną kartą
   - `ModuleView` renderina visą slide content net kai keičiasi tik slide ID
   - **Poveikis**: Lėtas UI atsakas, nereikalingi render'ai

4. **Progress saving be debouncing**
   - `useEffect` išsaugo progress kiekvieną kartą kai keičiasi
   - Gali būti daug localStorage rašymų per sekundę
   - **Poveikis**: Potencialus UI lag'as

#### 🟡 VIDUTINĖS PROBLEMOS

5. **CSS bundle per didelis**
   - 376KB (48KB gzip) - daug nenaudojamų Tailwind klasių
   - Nėra purging optimizacijos
   - **Poveikis**: Lėtesnis CSS parsing

6. **Nėra virtualizacijos**
   - Jei modulių/slides daug, visi renderinami iš karto
   - **Poveikis**: Lėtas render'as su daug duomenų

7. **Nėra preloading strategijos**
   - Komponentai kraunami tik kai reikia
   - Nėra prefetch'ing kitų modulių
   - **Poveikis**: Lėtas navigacija tarp modulių

## 🚀 Tobulinimo Variantai

### Variantas 1: Greitas Win (Quick Wins) ⚡

**Prioritetas**: AUKŠTAS | **Sudėtingumas**: ŽEMAS | **Poveikis**: VIDUTINIS

#### 1.1. Konsoliduoti modules.json į vieną importą
```typescript
// src/data/modulesLoader.ts
let modulesCache: typeof import('./modules.json') | null = null;

export const getModules = async () => {
  if (!modulesCache) {
    modulesCache = await import('./modules.json');
  }
  return modulesCache;
};

export const getModule = async (id: number) => {
  const modules = await getModules();
  return modules.modules.find(m => m.id === id);
};
```

**Poveikis**: 
- Sumažina bundle dydį ~30-40KB
- Vienas import vietoj 4

#### 1.2. Debounce progress saving
```typescript
// src/utils/progress.ts
import { debounce } from 'lodash-es';

const debouncedSave = debounce((progress: Progress) => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
}, 500);

export const saveProgress = (progress: Progress): void => {
  debouncedSave(progress);
};
```

**Poveikis**: 
- Sumažina localStorage rašymus 10-20x
- Geresnis UI responsiveness

#### 1.3. Memoization pagrindinių komponentų
```typescript
// ModulesPage.tsx
export default React.memo(function ModulesPage({ onModuleSelect, progress }: ModulesPageProps) {
  // ...
});

// ModuleView.tsx
const SlideContentMemo = React.memo(SlideContent);
```

**Poveikis**: 
- Sumažina re-render'us 50-70%
- Greitesnis UI atsakas

---

### Variantas 2: Code Splitting ir Lazy Loading 🎯

**Prioritetas**: AUKŠTAS | **Sudėtingumas**: VIDUTINIS | **Poveikis**: DIDELIS

#### 2.1. Lazy load modules.json
```typescript
// src/data/modulesLoader.ts
export const loadModules = () => 
  import('./modules.json').then(m => m.default);

export const loadModule = async (id: number) => {
  const modules = await loadModules();
  return modules.modules.find(m => m.id === id);
};
```

**Naudojimas**:
```typescript
// App.tsx
const [modulesData, setModulesData] = useState<ModulesData | null>(null);

useEffect(() => {
  loadModules().then(setModulesData);
}, []);
```

**Poveikis**: 
- Sumažina initial bundle 60-80KB
- Greitesnis pirmas užkrovimas 30-40%

#### 2.2. Split SlideContent pagal tipus
```typescript
// src/components/slides/index.ts
export const IntroSlide = lazy(() => import('./IntroSlide'));
export const DefinitionsSlide = lazy(() => import('./DefinitionsSlide'));
export const MetaBlockSlide = lazy(() => import('./MetaBlockSlide'));
// ... kiekvienas slide tipas atskiras failas
```

**Struktūra**:
```
src/components/slides/
  ├── IntroSlide.tsx
  ├── DefinitionsSlide.tsx
  ├── MetaBlockSlide.tsx
  ├── InputBlockSlide.tsx
  └── index.ts (lazy exports)
```

**Poveikis**: 
- ModuleView.js sumažėja nuo 118KB iki ~40-50KB
- Kiekvienas slide tipas kraunamas tik kai reikia

#### 2.3. Preload kitų modulių
```typescript
// ModuleView.tsx
useEffect(() => {
  // Preload next module when current module is loaded
  const nextModuleId = getNextModuleId(moduleId);
  if (nextModuleId) {
    import('./SlideContent').then(() => {
      // Preload next module data
      loadModule(nextModuleId);
    });
  }
}, [moduleId]);
```

**Poveikis**: 
- Greitesnė navigacija tarp modulių
- Vartotojas nejaucia loading delay

---

### Variantas 3: Refaktoringas ir Konsolidacija 🔧

**Prioritetas**: VIDUTINIS | **Sudėtingumas**: AUKŠTAS | **Poveikis**: DIDELIS

#### 3.1. Sukurti Modules Context
```typescript
// src/contexts/ModulesContext.tsx
const ModulesContext = createContext<{
  modules: Module[];
  getModule: (id: number) => Module | undefined;
  isLoading: boolean;
}>({ modules: [], getModule: () => undefined, isLoading: true });

export const ModulesProvider = ({ children }) => {
  const [modules, setModules] = useState<Module[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadModules().then(data => {
      setModules(data.modules);
      setIsLoading(false);
    });
  }, []);

  const getModule = useCallback((id: number) => {
    return modules.find(m => m.id === id);
  }, [modules]);

  return (
    <ModulesContext.Provider value={{ modules, getModule, isLoading }}>
      {children}
    </ModulesContext.Provider>
  );
};
```

**Poveikis**: 
- Vienas duomenų šaltinis
- Lengviau valdyti loading state
- Geresnė komponentų izoliacija

#### 3.2. Split SlideContent į atskirus failus
```typescript
// src/components/slides/types/
// Kiekvienas slide tipas atskiras failas su savo logika
```

**Struktūra**:
```
src/components/slides/
  ├── types/
  │   ├── IntroSlide.tsx
  │   ├── DefinitionsSlide.tsx
  │   ├── MetaBlockSlide.tsx
  │   └── ...
  ├── shared/
  │   ├── PracticalTask.tsx
  │   ├── TemplateBlock.tsx
  │   └── CopyButton.tsx
  └── SlideContent.tsx (router komponentas)
```

**Poveikis**: 
- Geresnė kodo organizacija
- Lengviau testuoti
- Geresnis tree-shaking

#### 3.3. Optimizuoti CSS
```javascript
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  // Purge unused styles
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  },
};
```

**Poveikis**: 
- CSS bundle sumažėja nuo 376KB iki ~100-150KB
- Greitesnis parsing

---

### Variantas 4: Pažangios Optimizacijos 🚀

**Prioritetas**: ŽEMAS | **Sudėtingumas**: AUKŠTAS | **Poveikis**: VIDUTINIS

#### 4.1. Virtualizacija modulių sąrašui
```typescript
// Naudoti react-window arba react-virtual
import { FixedSizeList } from 'react-window';

// ModulesPage.tsx
<FixedSizeList
  height={600}
  itemCount={modules.length}
  itemSize={200}
>
  {({ index, style }) => (
    <div style={style}>
      <ModuleCard module={modules[index]} />
    </div>
  )}
</FixedSizeList>
```

**Poveikis**: 
- Greitas render'as net su 100+ modulių
- Mažiau DOM elementų

#### 4.2. Service Worker caching
```typescript
// Cache modules.json ir static assets
// Greitesnis repeat visits
```

**Poveikis**: 
- Instant loading ant repeat visits
- Offline support

#### 4.3. Web Workers duomenų apdorojimui
```typescript
// Heavy calculations in worker
// Ne blokuoja UI thread
```

**Poveikis**: 
- Smooth UI net su dideliais duomenimis
- Geresnė UX

---

## 📈 Tikėtini Rezultatai

### Prieš optimizacijas:
- Initial bundle: ~400KB
- Time to Interactive: ~2-3s
- ModuleView load: ~500-800ms
- Re-renders: Daug nereikalingų

### Po Varianto 1 (Quick Wins):
- Initial bundle: ~350KB (-12%)
- Time to Interactive: ~1.5-2s (-30%)
- ModuleView load: ~400-600ms (-25%)
- Re-renders: -50-70%

### Po Varianto 2 (Code Splitting):
- Initial bundle: ~250KB (-37%)
- Time to Interactive: ~1-1.5s (-50%)
- ModuleView load: ~200-300ms (-60%)
- Re-renders: -50-70%

### Po Varianto 3 (Refaktoringas):
- Initial bundle: ~200KB (-50%)
- Time to Interactive: ~0.8-1.2s (-60%)
- ModuleView load: ~150-250ms (-70%)
- CSS: ~100KB (-73%)
- Geresnė kodo organizacija

---

## 🎯 Rekomenduojama Eiga

### Faza 1: Quick Wins (1-2 valandos)
1. ✅ Debounce progress saving
2. ✅ Memoization pagrindinių komponentų
3. ✅ Konsoliduoti modules.json importą

### Faza 2: Code Splitting (3-4 valandos)
1. ✅ Lazy load modules.json
2. ✅ Split SlideContent pagal tipus
3. ✅ Preload kitų modulių

### Faza 3: Refaktoringas (6-8 valandų)
1. ✅ Modules Context
2. ✅ Split SlideContent į atskirus failus
3. ✅ Optimizuoti CSS

### Faza 4: Pažangios (optional, 4-6 valandos)
1. ⚪ Virtualizacija
2. ⚪ Service Worker
3. ⚪ Web Workers

---

## 🔍 Metrikos Sekimas

### Rekomenduojamos metrikos:
1. **Bundle size** - webpack-bundle-analyzer
2. **Load time** - Chrome DevTools Performance
3. **Time to Interactive** - Lighthouse
4. **Re-render count** - React DevTools Profiler

### Tools:
```bash
# Bundle analysis
npm install --save-dev webpack-bundle-analyzer
npm run build -- --analyze

# Performance profiling
# Chrome DevTools > Performance > Record
```

---

## 📝 Išvados

**Pagrindinės problemos**:
1. ❌ modules.json duplikacija ir sinchroninis įkėlimas
2. ❌ SlideContent.tsx per didelis (2426 eilutės)
3. ❌ Nėra memoization
4. ❌ Progress saving be debouncing

**Greitai pasiekiami rezultatai**:
- ✅ 30-50% greitesnis initial load
- ✅ 50-70% mažiau re-render'ų
- ✅ Geresnė UX su debouncing

**Ilgalaikiai rezultatai**:
- ✅ 50-60% mažesnis bundle
- ✅ 60-70% greitesnis module loading
- ✅ Geresnė kodo organizacija ir palaikymas
