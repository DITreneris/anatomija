# Gold standard: Moduliai 1–3 – geriausios praktikos

> **Paskirtis:** Šis dokumentas – etalonas (gold standard) kitiems moduliams (4–6, 7–9, 10–12, 13–15). Apima pedagogiką, taksonomiją, vartotojo kelionę, UI/UX, testą, quiz, praktiką, progresą ir testavimą, įgyvendintus moduliuose 1–3, su nuorodomis į kodą ir SOT.
> **Versija:** 1.1.0  
> **Data:** 2026-02-12  
> **Šaltiniai:** turinio_pletra.md, modules.json, SlideContent.tsx, ModuleView.tsx, TestPracticeSlides.tsx, PracticalTask.tsx, progress.ts, questionPoolSelector.ts, content-agent-summary-slide.mdc, MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md, DESIGN_GUIDE_MODULIAI_1_2_3.md, src/design-tokens.ts.

---

## 1. Pedagogika ir taksonomija

### 1.1 Mokymosi seka (Bloom)

**SOT:** `turinio_pletra.md` § „Mokymosi Seka (Bloom's Taxonomy)“.

| Lygis | Apimtis | Turinys |
|-------|---------|---------|
| **Žinoti** | Skaidrės 1–3 | Kas yra promptas? Kokie tipai? |
| **Suprasti** | Skaidrės 4–11 | Kodėl kiekvienas blokas svarbus? |
| **Prisiminti** | Modulis 2 | Ar galiu atsakyti į klausimus? (testas) |
| **Taikyti** | Modulis 3 | Ar galiu sukurti savo promptą? (praktika) |

Seka: viena nuosekli mokymo linija (teorija → patikrinimas → pritaikymas), ne atskiri mokymai.

### 1.2 Bloom taksonomija kode

- **TestQuestion:** laukai `bloomLevel` (1=Remember … 6=Create) ir `category` – `src/types/modules.ts` (TestQuestion).
- **Kategorijos:** meta, input, output, reasoning, quality, advanced, workflow, technikos, bendra.
- **Šaltiniai:** `src/data/questionPool.ts` (kiekvienas klausimas su bloomLevel, category), `src/data/modules.json` (testQuestions, jei inline).
- **Paskirtis:** Remediacija (relatedSlideId) ir per-kategorijos balai (radar) remiasi category.

### 1.3 Santraukos skaidrės (summary) – 5 blokų modelis

**SOT:** `.cursor/rules/content-agent-summary-slide.mdc`.

| # | Blokas | Turinys |
|---|--------|---------|
| 1 | **Celebration Hero** | Gradientinis headeris (brand → accent), „Ką išmokote“, intro body, 3 statistikos skaičiai (pvz. 6 Blokai, 5 Technikos, 2 Workflow). |
| 2 | **Žinių kortelės** | Grid 2 stulpeliai; **max 3 kortelės** (S-DS3); kortelė su ikona (Layers, Repeat, Lightbulb, Target, Zap, Sparkles), spalva pagal temą, heading + items su CheckCircle, item count badge. |
| 3 | **Refleksijos promptas** | Kopijuojamas promptas (Meta + Input + Output); 3 klausimai: Apply (ką pritaikysi?), Analyze (kas naujausia?), Create (ką išbandysi?). Copy mygtukas. |
| 4 | **Kitas žingsnis CTA** | Emerald gradientas, ArrowRight, konkretus tekstas („Pereikite prie Modulio 2“), ne abstraktus „tęskite“. |
| 5 | **Motyvacinis footer** | Gradient (brand → accent), emoji + bold antraštė + tagline (formulė/mantra). |

Refleksijos klausimai atitinka Bloom 3 (Apply), 4 (Analyze), 6 (Create). JSON: `introHeading`, `introBody`, `stats`, `sections`, `reflectionPrompt`, `reflectionTitle`, `tagline`.

---

## 2. Vartotojo kelionė

### 2.1 Fazės

**Šaltinis:** `docs/MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md` §3.

| Fazė | Įvertinimas / praktika |
|------|------------------------|
| **Įėjimas** | Pirmas ekranas (action-intro): hook (problema + CTA), per ~30 s veiksmas (palyginimas). |
| **Orientacija** | Modulių sąrašas, progreso juosta, „X skaidrė“ / slide indeksas, skaidrių grupavimas (Pagrindai, Šablonas, 6 Blokai, Santrauka). |
| **Mokymasis** | Modulis 1: skirtingas tempo ritmas (veiksmo skaidrės su copy-paste vs teorinės); CTA aiškus („Kopijuoti promptą“). |
| **Praktika** | Modulis 3: scenarijai su Kontekstas, Duomenys, Apribojimai, Formatas; žingsniai, hint, partial solution; „Užbaigiau“ + celebration. |
| **Grįžtamasis ryšys** | Modulis 2 rezultatai: procentas, žinutė (<70% vs ≥70%), mygtukai Pakartoti / Į Modulį 1 / Pradėti Modulį 3; remediation (radar, deep link). |
| **Uždarymas** | Santrauka (Modulis 1) – CTA į testą; TestResults – CTA pagal rezultatą; Practice summary – CTA į modulių sąrašą arba toliau. |

### 2.2 Modulių eilė ir atrakinimas

- **Eilė:** 1 (learn) → 2 (test) → 3 (practice).
- **Atrakinimas:** Modulis N atrakintas, kai `progress.completedModules` turi (N-1). Pirmas modulis visada atrakintas.
- **Kodas:** `src/components/ModulesPage.tsx` – `lockedModules` (useMemo pagal previousModuleId ir completedModules). Production: `DISABLE_MODULE_LOCK = false` (dev/localhost – visi atrakinti).

### 2.3 Modulio užbaigimas

- **Sąlyga:** Vartotojas paskutinėje skaidrėje paspaudžia „Toliau“.
- **Veiksmas:** `useSlideNavigation` → `onComplete(moduleId)` → App `handleModuleComplete` → `setProgress` su `completedModules: [...prev.completedModules, moduleId]`.
- **Šaltiniai:** `src/utils/useSlideNavigation.ts` (last slide + next), `src/App.tsx` (handleModuleComplete).

### 2.4 Resume (grįžimas į skaidrę)

- **Slide position:** Išsaugoma kiekvienam moduliui (`saveSlidePosition(moduleId, currentSlide)`).
- **Atidarant modulį:** Jei `resumeImmediately && saved > 0` – pradinė skaidrė = saved; kitaip – „Sveiki sugrįžę!“ promptas su pasirinkimu „Tęsti nuo X“ arba „Pradėti nuo pradžių“.
- **Kodas:** `src/utils/useSlideNavigation.ts` (getSavedSlidePosition, useEffect [moduleId]), `src/components/ModuleView.tsx` (showResumePrompt).

---

## 3. UI / UX

### 3.1 Skaidrių grupavimas (fazės)

- **ModuleView** `buildSlideGroups`: skaidrės grupuojamos pagal `typeToPhase`.
- **Fazės Moduliui 1:** Pagrindai (action-intro, intro, infographic, definitions, workflow-summary, prompt-types, prompt-techniques), Šablonas (prompt-template, transition-3-to-6), 6 Blokai (hierarchy, meta, input, output, reasoning, quality, advanced, advanced-2), Santrauka (full-example, comparison, glossary, summary). Testas / Praktika – test-intro, test-section, test-results / practice-intro, practice-scenario, practice-summary.
- **Maži moduliai (≤6 skaidrių):** viena grupė be etikečių.
- **Kodas:** `src/components/ModuleView.tsx` (typeToPhase, buildSlideGroups).

### 3.2 Modulio identitetas (spalvos ir akcentai)

**Šaltinis:** `docs/development/DESIGN_GUIDE_MODULIAI_1_2_3.md` §5 (Modulių identiteto taisyklė), S-DS2.

| Modulis | Badge / kortelė | CTA / pagrindinis akcentas | Paskirtis |
|---------|------------------|----------------------------|-----------|
| **1** | brand (badge-brand) | brand → accent gradient | Mokymasis, pasitikėjimas |
| **2** | slate (badge-slate) | brand mygtukai | Testas – ramus tonas, koncentracijai |
| **3** | slate (badge-slate) | accent tik 1–2 CTA („Atidaryti“, „Pradėti scenarijų“) | Praktika – accent tik veiksmui |

- **ModuleView:** badge pagal modulį – M1 `badge-brand`, M2/M3 `badge-slate`. Kodas: `ModuleView.tsx` (span className pagal moduleId).
- **ModulesPage:** M2 kortelė – slate (gradient, ikona, progress). M3 kortelė – slate; accent tik mygtukui „Atidaryti“. Kodas: `ModulesPage.tsx` (levelStyles.practice = slate, CTA `from-accent-500 to-accent-600`).
- Bendras pagrindas: neutralūs fonai (slate/gray), vienas akcentas per kontekstą.

### 3.3 CTA ir „kas toliau“

- **Konkretūs mygtukai:** „Pereikite prie Modulio 2“, „Pradėti Modulį 3“, „Pakartoti testą“, „Į Modulį 1“ – TestResultsSlide pagal rezultatą.
- **Modulio 3:** `nextSlideLabel` – jei kita skaidrė practice-scenario: „Pradėti N scenarijų“; jei practice-summary: „Į Praktikos santrauką“. Kodas: `ModuleView.tsx` (nextSlideLabel useMemo).
- **Santraukoje:** „Kitas žingsnis“ blokas su konkretiu modulio/puslapio pavadinimu.

### 3.4 Progresas

- **Skaidrės juosta:** „X iš Y“ (currentSlide + 1 / slides.length), progress bar (slideProgress %). ModuleView.
- **Modulio procentas (ModulesPage):** completedTasks[moduleId].length / totalTasks (slides su practicalTask arba testQuestions arba scenario). 100% jei modulis completed.
- **Bendras progresas:** completedModules.length / totalModules.

### 3.5 Design System (tipografija, šešėliai, kortelės, tokenai)

**Šaltinis:** `docs/development/DESIGN_GUIDE_MODULIAI_1_2_3.md` §4; įgyvendinimas S-DS1, S-DS3, S-DS4, N-DS1, N-DS2.

| Aspektas | Taisyklė | Kodas / pastaba |
|----------|----------|------------------|
| **Tipografija (S-DS1)** | Vienas H1 per skaidrę (skaidrės pavadinimas ModuleView); turinyje H2 = `text-lg md:text-xl font-bold`, H3 = `text-base font-semibold`. | ModuleView h1; ContentSlides – section/Summary hero naudoja h2, ne konkuruojantį dydį. |
| **Summary kortelės (S-DS3)** | Max 3–4 vizualūs blokai; žinių kortelių rodyti max 3. | ContentSlides SummarySlide: `knowledgeSections = allKnowledge.slice(0, 3)`. |
| **Šešėliai (S-DS4)** | Default `shadow-md`, hover `shadow-lg`; vengti `shadow-2xl` ant kelių elementų. | index.css `.card`, `.card-hover`, `.btn-primary`, `.btn-accent`; ContentSlides, HomePage, Celebration. |
| **Float animacijos (N-DS1)** | Išjungti ant secondary elementų (pvz. badge „~45 min“). | HomePage – badge be `animate-float`, tik `shadow-md`. |
| **Design tokens (N-DS2)** | Spacing ir radius vienoje vietoje – px reikšmės ir Tailwind klasės. | `src/design-tokens.ts` – `spacing`, `spacingClasses`, `radius`, `radiusClasses`. |

**Nuorodos:** DESIGN_GUIDE §4.2 (tipografija), §4.3 (spacing), §4.4 (radius), §4.5 (šešėliai); TODO.md § Dizaino gidas – Must/Should/Nice.

---

## 4. Testas (Modulis 2)

### 4.1 Struktūra

- **Skaidrių tipai:** test-intro → test-section (viena skaidrė su visais klausimais) → test-results.
- **Klausimų skaičius:** 15 (TARGET_TOTAL). Klausimai parenkami iš pool su balansu pagal kategorijas.
- **Kodas:** `src/utils/questionPoolSelector.ts` (selectQuestions, CATEGORY_QUOTAS), `src/data/questionPool.ts` (QUESTION_POOL, POOL_CATEGORIES).

### 4.2 Klausimų tipai

| Tipas | Komponentas | Pastaba |
|-------|-------------|---------|
| mcq | McqQuestion | Numatyta, jei type nenurodytas |
| true-false | TrueFalseQuestion | isTrue |
| matching | MatchingQuestion | matchPairs, onComplete(score) |
| ordering | OrderingQuestion | correctOrder, items, onComplete(score) |
| scenario | ScenarioQuestion | scenarioContext, verslo kontekstas |

**Tipai:** `src/types/modules.ts` (QuestionType), renderinimas – `TestPracticeSlides.tsx` (TestSectionSlide, switch by getQuestionType(q)).

### 4.3 Klausimo laukai (pool / JSON)

- **Bendri:** id, question, explanation, hint (progressive – po pirmo neteisingo), bloomLevel, relatedSlideId (Modulio 1 skaidrė remediacijai), category.
- **MCQ:** options, correct (index). **True/False:** isTrue. **Matching:** matchPairs. **Ordering:** correctOrder, items. **Scenario:** scenarioContext, options, correct.

### 4.4 Rezultatai

- **PASS_THRESHOLD:** 70%.
- **Animacija:** useCountUp(score, 1500, 300).
- **Žinutė:** <70% – rekomenduojama peržiūrėti Modulį 1 (skaidrės 8–16, 3–6); ≥70% – sveikiname, pereiti prie Modulio 3.
- **Mygtukai:** „Pakartoti testą“, „Į Modulį 1“, „Pradėti Modulį 3“ (pagal rezultatą). Kodas: TestResultsSlide, PASS_THRESHOLD.

### 4.5 Remediacija

- **Per-kategorijos balai:** lastCategoryScores (correct, total, percentage) – skaičiuojami TestSectionSlide; saugomi session-lived (ne persisted).
- **Radar chart:** 8 ašių (meta, input, output, reasoning, quality, advanced, workflow, technikos). Komponentas: RadarChart, CATEGORY_META (label, color, slideId).
- **Deep link:** CategoryBreakdownWithLinks – paspaudus kategoriją → handleDeepLink(slideId) → onGoToModule(1, slideIndex, moduleId). Modulio 1 skaidrės indeksas pagal slide.id.
- **Inline „Pakartok 3 klausimus“:** RetryCategoryBlock – selectQuestionsByCategory(categoryKey, 5) – tik MCQ/true-false. Rodo 3 klausimus iš silpniausios kategorijos.

### 4.6 Gamifikacija

- **Streak:** maxStreak (teisingi iš eilės). Rodyti jei maxStreak >= 3 ir showResults.
- **Badge:** „Puikiai!“ jei maxStreak === questions.length.

---

## 5. Praktika (Modulis 3)

### 5.1 Struktūra

- **Skaidrės:** practice-intro → practice-scenario (6 scenarijų) → practice-summary.
- **Scenarijų navigacija:** practiceScenarioSlides (slideIndex, slideId, title) – kortelės su progresu; onNavigateToSlide(slideIndex). onGoToSummary – iš scenarijaus į santrauką.

### 5.2 Scenarijaus struktūra (SOT)

**turinio_pletra.md** § Modulis 3: Kontekstas, Duomenys, Apribojimai, Laukiamas formatas, Užduotis. JSON: `scenario` (context, data, constraints, expectedFormat) + `practicalTask`.

### 5.3 PracticalTask komponentas

- **Instrukcijos:** instructions.steps[] – kiekvienas InstructionStep: step, title, description, hint, partialSolution. Accordion (expand/collapse).
- **Copy:** CopyButton tarpiniams sprendimams ir pilnam pavydui (exampleFullPrompt).
- **Auto-save:** useAutoSave(autoSaveKey, answer, 1500); key = `task-draft-${moduleId}-${slideId}`. Užbaigus – turinys į completedContentKey, draft išvalomas.
- **Būsenos:** isTaskCompleted (progress.completedTasks[moduleId].includes(slideId)); showInstructions, expandedSteps, isEditing.
- **Apsauga:** beforeunload jei neįrašyta / redaguojama.
- **Kodas:** `src/components/slides/shared/PracticalTask.tsx`, tipai – `src/types/modules.ts` (InstructionStep, TaskInstructions, PracticalTask).

### 5.4 Užbaigimas

- **Submit:** handleSubmit → saveCompletedContent, onTaskComplete(slideId), clearAutoSave draft.
- **Celebration:** App handleTaskComplete → setShowCelebration(true), celebrationType 'task'. Celebration komponentas – 1.5 s.

---

## 6. Skaidrių tipai (Moduliai 1–3)

### 6.1 Sąrašas tipų

**Modulis 1:** action-intro, infographic, definitions, prompt-types, prompt-techniques, workflow-summary, prompt-template, transition-3-to-6, hierarchy, meta, input, output, reasoning-models, reasoning, quality, advanced, advanced-2, full-example, comparison, glossary, summary.

**Modulis 2:** test-intro, test-section, test-results.

**Modulis 3:** practice-intro, practice-scenario, practice-summary.

**Schema:** `scripts/schemas/modules.schema.json` (slide.type enum). **Routing:** `src/components/SlideContent.tsx` – switch pagal slide.type, atitinkami komponentai iš slides/types.

### 6.2 Veiksmo modelis (action-intro)

- **Hook:** Problema („Problema – ne DI. Problema – tavo promptas“) + CTA („Pamatyk skirtumą per 30 sekundžių!“).
- **Reveal:** Po paspaudimo – side-by-side palyginimas (nestructured vs 6 blokų promptas), CopyButton.
- **Kontekstas:** outcomes (3 punktai), trukmė, DI įrankiai (išskleidžiamas blokas). SOT: turinio_pletra.md Skaidrė 1; komponentas: ActionIntroSlide, ContentSlides.tsx.

---

## 7. Progresas ir duomenys

### 7.1 Progress struktūra

**Interface (progress.ts):** completedModules: number[]; completedTasks: Record<number, number[]>; quizCompleted: boolean; quizScore: number | null; moduleTestScores?: Record<number, number>.

- **completedModules:** modulių id, kuriuos vartotojas užbaigė (pasiekė paskutinę skaidrę + Toliau).
- **completedTasks:** užbaigtos užduotys (slideId) per modulį; naudojama PracticalTask ir modulio procentui.
- **moduleTestScores:** Modulio 2 (ir 5) testo rezultatas procentais.

**Versijavimas:** ProgressV1 (be version) → ProgressV2 (version: 2). Migracija: validateProgress, getProgress – jei v1, konvertuojama į v2. STORAGE_KEY = 'prompt-anatomy-progress'.

### 7.2 Testo rezultato išsaugojimas

- TestSectionSlide onComplete(score) → SlideContent handleTaskComplete(slide.id, score) → App handleTaskComplete(moduleId, taskId, testScore) → setProgress su moduleTestScores: { [moduleId]: testScore }.

---

## 8. Testavimas (kodas)

### 8.1 Esami testai

| Failas | Kas tikrinama |
|--------|----------------|
| `src/utils/__tests__/progress.test.ts` | getProgress, saveProgress, validateProgress, migracija v1→v2, resetProgress, completedModules/completedTasks validacija. |
| `src/utils/__tests__/useAutoSave.test.ts` | useAutoSave (draft saugojimas, clear). |
| `src/components/__tests__/App.integration.test.tsx` | Progress persistence, module complete (completedModules), quiz flow, reset. |
| `src/components/__tests__/App.quiz.integration.test.tsx` | Quiz page po modulių, progress state. |
| `src/components/__tests__/QuizPage.test.tsx` | QuizPage render, props. |
| `src/components/__tests__/mvp.gating.test.tsx` | MVP mode – moduliai >3 redirect. |

### 8.2 Ką kartoti kitiems moduliams (checklist)

- Progresas: completedModules ir completedTasks atnaujinami teisingai po modulio užbaigimo ir po užduoties užbaigimo.
- Testo rezultatas: moduleTestScores išsaugomas ir rodomas rezultatų ekrane.
- Navigacija: paskutinė skaidrė → onComplete(moduleId); resume – grįžimas į išsaugotą skaidrę.
- Atrakinimas: kitas modulis atrakintas tik po ankstesnio completed.

---

## 9. Failai ir nuorodos (santrauka)

| Sritis | Failas |
|--------|--------|
| Turinio SOT (1–3) | turinio_pletra.md |
| Modulių atpažinimas | docs/CONTENT_MODULIU_ATPAZINIMAS.md |
| Santraukos skaidrės SOT | .cursor/rules/content-agent-summary-slide.mdc |
| UX ataskaita 1–3 | docs/MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md |
| **Dizaino gidas (Design System v0.1)** | docs/development/DESIGN_GUIDE_MODULIAI_1_2_3.md |
| **Design tokens (spacing, radius)** | src/design-tokens.ts |
| Progresas | src/utils/progress.ts |
| Klausimų pool / selector | src/data/questionPool.ts, src/utils/questionPoolSelector.ts |
| Testas / praktika UI | src/components/slides/types/TestPracticeSlides.tsx |
| PracticalTask | src/components/slides/shared/PracticalTask.tsx |
| Skaidrių routing | src/components/SlideContent.tsx, src/components/ModuleView.tsx |
| Tipai | src/types/modules.ts, scripts/schemas/modules.schema.json |

---

## 10. Pritaikymas kitiems blokams

- **Moduliai 4–6:** Lyginti su šiuo dokumentu: Learn → Test → Practice branduolys, santraukos 5 blokai (summary), testas su kategorijomis ir remediation, praktika su žingsniais ir partial solution. Trūkumų sąrašas – DATA_AGENT + CONTENT_AGENT. **Design System:** taikyti tipografijos skalę (§3.5), modulio identitetą (slate / accent tik CTA), šešėlius ir design tokens.
- **Moduliai 7–15:** Kiekvienas kelias (7–9, 10–12, 13–15) – vienas SOT failas; kiekvienas modulis turi Learn → Practice branduolį; 9/12/15 = finalinis integruotas projektas. Šis gold standard – checklist naujoms skaidrėms, testui ir praktikai (tipai, progresas, CTA, dizaino taisyklės).

---

## Changelog (gold standard dokumentas)

| Versija | Data | Pakeitimai |
|---------|------|------------|
| 1.0.0 | 2026-02-11 | Pradinis etalonas: pedagogika, kelionė, UI/UX, testas, praktika, progresas, failai. |
| 1.1.0 | 2026-02-12 | **Design System:** §3.2 Modulio identitetas (M2 slate, M3 accent tik CTA – S-DS2). **Naujas §3.5** – tipografija (S-DS1), Summary max 3 kortelės (S-DS3), šešėliai (S-DS4), float išjungtas secondary (N-DS1), design tokens (N-DS2). §1.3 Summary – max 3 žinių kortelės. §9 – nuorodos į DESIGN_GUIDE, design-tokens.ts. §10 – Design System pritaikymui 4–6. |
