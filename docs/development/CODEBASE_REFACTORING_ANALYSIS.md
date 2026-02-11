# Kodo bazės refaktoringo analizė – Promptų anatomija

> **Data:** 2026-02-08  
> **Tikslas:** Dideli failai, refaktoringo ir konsolidacijos poreikis, must–should–want prioritetai.

---

## 1. Eilučių skaičiai (src)

| Eilutės | Failas | Pastaba |
|--------:|--------|---------|
| 3315 | `src/components/slides/types/AllSlides.tsx` | **Didžiausias** – 35 skaidrių komponentai + helperiai viename faile |
| 524 | `src/App.tsx` | Navigacija, tema, progresas, puslapių renderinimas |
| 470 | `src/components/ModuleView.tsx` | Skaidrių navigacija, header, completion modal |
| 458 | `src/types/modules.ts` | Visi tipai (Slide, Module, Quiz, SlideContent ir kt.) |
| 445 | `src/components/QuizPage.tsx` | Klausimų būsena, rezultatų ekranas |
| 325 | `src/components/HomePage.tsx` | Pradžios puslapis |
| 301 | `src/utils/progress.ts` | Progreso API, migracijos, validacija |
| 296 | `src/components/ModulesPage.tsx` | Modulių sąrašas |
| 248 | `src/components/slides/shared/ProcessStepper.tsx` | Proceso žingsniai (Custom GPT) |
| 219 | `src/components/SlideContent.tsx` | Switch pagal slide.type |
| 211 | `src/components/slides/shared/PracticalTask.tsx` | Praktinė užduotis |
| 190 | `src/components/slides/shared/CustomGptProcessDiagram.tsx` | GPT proceso diagrama |
| 183 | `src/components/__tests__/App.integration.test.tsx` | Testai |
| 162 | `src/components/slides/shared/DiPrezentacijosWorkflowDiagram.tsx` | Workflow diagrama |
| 140 | `src/components/PromptLibrary.tsx` | Promptų biblioteka |
| 134 | `src/components/HallucinationRatesDashboard.tsx` | Haliucinacijų skydelis |
| 130 | `src/components/__tests__/App.quiz.integration.test.tsx` | Testai |
| 121 | `src/components/Celebration.tsx` | Šventimo overlay |
| 114 | `src/components/__tests__/QuizPage.test.tsx` | Testai |
| 96 | `src/data/modulesLoader.ts` | Modulių įkėlimas |
| 92 | `src/components/GlossaryPage.tsx` | Žodynėlis |
| 89 | `src/components/CircularProgress.tsx` | Apvalus progresas |
| 82 | `src/components/slides/shared/EnlargeableImage.tsx` | Išdidinamas vaizdas |
| 77 | `src/components/slides/shared/DiPrezentacijosWorkflowBlock.tsx` | Workflow blokas |
| 77 | `src/components/ui/ErrorBoundary.tsx` | Klaidų riba |
| 73 | `src/utils/useAutoSave.ts` | Autosave |
| 69 | `src/utils/logger.ts` | Logger |
| 47 | `src/components/slides/utils/colorStyles.ts` | Spalvų klasės |
| 37 | `src/components/slides/types/index.ts` | Re-export skaidrių |
| 30 | `src/data/hallucinationRates.ts` | Duomenys |
| 25 | `src/components/ui/LoadingSpinner.tsx` | Spinner |
| 22 | `src/components/slides/shared/TemplateBlock.tsx` | Šablono blokas |
| 35 | `src/components/slides/shared/CopyButton.tsx` | Kopijuoti mygtukas |

---

## 2. Must – būtina (refaktoringas / konsolidacija)

### M1. AllSlides.tsx (3315 eil.) – padalinti į kelis failus

**Problema:** Vienas failas su 35 skaidrių komponentais ir bendrais helperiais (renderBodyWithBoldAndLinks, RecognitionExerciseBlock). Sunku naršyti, dideli merge konfliktai, lėtas IDE.

**Siūlomas padalijimas:**

| Naujas failas | Turinys | Orientacinis eilučių skaičius |
|---------------|---------|-------------------------------|
| `slides/types/shared/renderBody.tsx` | `renderBodyWithBoldAndLinks`, `renderBodyWithBold` | ~80 |
| `slides/types/shared/RecognitionExerciseBlock.tsx` | `RecognitionExerciseBlock` | ~90 |
| `slides/types/ContentSlides.tsx` | ContentBlockSlide, SectionBreakSlide, WarmUpQuizSlide, GlossarySlide, ModuleIntroSlide, IntroSlide, DefinitionsSlide, DiModalitiesSlide, PieChartSlide, AiWorkflowSlide, PromptTypesSlide, PromptTechniquesSlide, WorkflowSummarySlide, PromptTemplateSlide, TransitionSlide, HierarchySlide, ProductivityInfographicSlide, PracticeSummarySlide | ~1200–1400 |
| `slides/types/BlockSlides.tsx` | MetaBlockSlide, InputBlockSlide, OutputBlockSlide, ReasoningModelsSlide, ReasoningBlockSlide, QualityBlockSlide, AdvancedBlockSlide, AdvancedParameters2Slide, FullExampleSlide | ~1100–1300 |
| `slides/types/TestPracticeSlides.tsx` | TestIntroSlide, TestSectionSlide, TestResultsSlide, PracticeIntroSlide, PracticeScenarioSlide | ~450–500 |
| `slides/types/ComparisonSummarySlides.tsx` | ComparisonSlide, SummarySlide (arba palikti ContentSlides) | ~150 |
| `slides/types/index.ts` | Re-export visų iš naujų failų + tipų export | ~40 |

**Žingsniai:** (1) Sukurti `shared/renderBody.tsx` ir `RecognitionExerciseBlock.tsx`, perkelti kodą. (2) Sukurti BlockSlides.tsx, perkelti 9 blokų skaidres. (3) Sukurti TestPracticeSlides.tsx, perkelti 5 komponentus. (4) Sukurti ContentSlides.tsx, perkelti likusius content-driven komponentus. (5) Atnaujinti AllSlides.tsx tik kaip barrel (re-export) arba ištrinti ir eksportuoti tik iš index.ts. (6) Atnaujinti SlideContent.tsx importus – jei index.ts re-export viską, importai lieka tie patys.

**Rizika:** Regresijos skaidrėse; būtina paleisti testus ir rankinę peržiūrą po kiekvieno žingsnio.

---

## 3. Should – labai pageidautina

### S1. App.tsx (524 eil.) – navigacija ir tema

**Problema:** Viename faile – puslapių būsena, tema, modulių įkėlimas, nav (desktop + mobile), main content, footer. Sunkiau testuoti atskirai (pvz. tik tema ar tik navigacija).

**Siūlymas:**
- **AppNav.tsx** – viskas nuo `<nav>` iki `</nav>` (desktop + mobile meniu, progreso juosta, tema). Props: `currentPage`, `onNavigate`, `onToggleDark`, `overallProgress`, `isMobileMenuOpen`, `setIsMobileMenuOpen`.
- **useTheme.ts** (arba useDarkMode) – `isDark`, `setIsDark`, inicializacija iš localStorage / prefers-color-scheme. App.tsx naudoja hooką, nav gauna setterį.
- Footer galima palikti App arba išskirti į **AppFooter.tsx** (mažas failas).

**Prioritetas:** Po AllSlides refaktoringo; pagerina skaitomumą ir galimybę testuoti nav atskirai.

---

### S2. ModuleView.tsx (470 eil.) – navigacija ir modalas

**Problema:** Skaidrių perjungimas, swipe, mygtukai Pirmyn/Atgal, completion modal, header – viename komponente.

**Siūlymas:**
- **useSlideNavigation** – `currentSlide`, `setCurrentSlide`, `nextSlide`, `prevSlide`, `isFirstSlide`, `isLastSlide`, `handleTouchStart/End/Move` (swipe). ModuleView perduoda module, progress, onComplete, o hookas grąžina nav būseną ir handlerius.
- **ModuleCompleteModal.tsx** (arba ModuleCompleteScreen) – ekranas „Modulis įveiktas“, mygtukai „Į modulių“ / „Kitas modulis“. Sumažina ModuleView eilučių skaičių ir atskiria logiką nuo UI.

**Prioritetas:** Vidutinis; pagerina ModuleView skaitomumą.

---

### S3. QuizPage.tsx (445 eil.) – būsena ir rezultatų ekranas

**Problema:** Klausimų rodymas, atsakymų pasirinkimas, balų skaičiavimas, rezultatų ekranas – viename faile.

**Siūlymas:**
- **useQuizState** – `currentIndex`, `answers`, `showResults`, `score`, `handleAnswer`, `handleRestart`. QuizPage tik renderina klausimus arba rezultatus pagal būseną.
- **QuizResultsView.tsx** – rezultatų ekranas (balas, procentas, mygtukas atgal). Gauna `score`, `totalQuestions`, `onBack` (arba `onRestart`).

**Prioritetas:** Vidutinis; palengvina QuizPage testavimą ir pakeitimus rezultatų UI.

---

### S4. types/modules.ts (458 eil.) – tipų failas

**Problema:** Vienas didelis tipų failas (Slide, Module, Quiz, SlideType, SlideContent, visi Content tipai). Gali būti sunkiau naršyti.

**Siūlymas (optional):**
- **modules-core.ts** – Module, Slide, Quiz, QuizQuestion, ModuleLevel, ModuleIcon, BusinessExample, Progress-related tipai (jei čia naudojami).
- **modules-slide-content.ts** – SlideType, SlideContent (union), visi ContentBlockContent, IntroContent, … (visi slide content tipai).
- **modules.ts** – re-export iš abiejų (kad esami importai `from '../types/modules'` nepasikeistų).

**Prioritetas:** Žemas; tik jei norima dar labiau suskaidyti tipų priežiūrą.

---

## 4. Want – pageidautina (backlog)

| # | Kas | Kodėl |
|---|-----|-------|
| W1 | **HomePage / ModulesPage** | Jei kortelių (kortelė moduliui, CTA) logika ar stiliai pasikartoja – išskirti bendrą **ModuleCard** arba **FeatureCard** komponentą. |
| W2 | **ProcessStepper.tsx** (248 eil.) | Priimtinas dydis; galima išskirti **ProcessStepItem** tik jei atsiranda daugiau panašių stepperių. |
| W3 | **progress.ts** (301 eil.) | Galima atskirti migracijų funkcijas į **progressMigrations.ts**, o progress.ts palikti tik viešą API (getProgress, saveProgress, validateProgress). |
| W4 | **SlideContent.tsx** (219 eil.) | Switch su daug case – galima generuoti map tipas → komponentas ir naudoti vieną render path (mažesnis diff pridėjus naują tipą). |

---

## 5. Santrauka

| Prioritetas | Užduotis | Failas(-ai) | Pirmas žingsnis |
|-------------|----------|-------------|-----------------|
| **MUST** | Padalinti AllSlides į shared + ContentSlides + BlockSlides + TestPracticeSlides | AllSlides.tsx | Sukurti renderBody.tsx, RecognitionExerciseBlock.tsx; perkelti BlockSlides |
| **SHOULD** | Išskirti App nav ir temą | App.tsx | AppNav.tsx + useTheme (arba useDarkMode) |
| **SHOULD** | Išskirti slide nav ir completion modal | ModuleView.tsx | useSlideNavigation, ModuleCompleteModal |
| **SHOULD** | Išskirti quiz būseną ir rezultatų ekraną | QuizPage.tsx | useQuizState, QuizResultsView |
| **SHOULD** | (Optional) Padalinti tipų failą | modules.ts | modules-core.ts + modules-slide-content.ts + re-export |
| **WANT** | Kortelių konsolidacija | HomePage, ModulesPage | Tik jei pasikartoja – ModuleCard / FeatureCard |
| **WANT** | Progress migracijos atskirai | progress.ts | progressMigrations.ts |

---

*Šis dokumentas – pagrindas TODO skyriui „Refaktoringas ir konsolidacija“ (MUST / SHOULD).*
