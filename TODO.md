# TODO – Promptų anatomija

> **Paskutinė peržiūra:** 2026-02-11 (MVP Release M1–3; A-M4 QA gate; A-M3 remediation. Žr. CHANGELOG.)  
> **Tikslas:** Vienas working failas – prioritetai, likusieji darbai, nuorodos. MVP moduliai 1–3 testuotojams paruošti; fokusas – turinys, UX pagal TEST_REPORT, refaktoringas pagal CODEBASE_REFACTORING_ANALYSIS.

**Legenda:** P1 = aukštas, P2 = vidutinis, P3 = žemas. Agentai: CONTENT → DATA → CODING (žr. `docs/development/AGENT_ORCHESTRATOR.md`).

---

## 1. Kas jau padaryta (santrauka)

- **MVP:** Error Boundary, loading/lazy, TypeScript tipai, progress validacija ir migracija, 46 testai, CI, Tailwind safelist, CopyButton fix, SlideContent refaktoras.
- **Modulio 2 interaktyvaus testo pertvarka (v2.5.0, 2026-02-09):** 5 klausimų tipai (MCQ, True/False, Matching, Ordering, Scenario), 15 klausimų su Bloom taksonomija (1-4), progressive hints sistema (užuominos su 0.5 taško nuolaida), gamifikacija (streak, perfect badge), per-bloko žinių žemėlapis rezultatuose, remediation nuorodos į Modulio 1 skaidres. Nauji komponentai: `src/components/slides/shared/questions/`. `QuestionType` enum ir `TestQuestion` išplėtimas – backward compatible su Moduliu 5 ir WarmUpQuiz.
- **Moduliai 4–6:** SOT sinchronas, Modulio 5 klausimai/įvadas/rezultatai, Modulio 6 projekto tikslai/refleksija, section-break, content-block image, warm-up-quiz, SEO (react-helmet-async), a11y (skip link, aria, focus), modulių užrakinimas pagal `DEV`.
- **Vartotojo testai:** Modulio 1 contextIntro + Workflow situacijos; PracticalTask inputHint; Quiz scroll į klaidingą atsakymą; **GPT proceso skaidrė (Custom GPT) – sutvarkyta:** ProcessStepper (1 žingsnis = 1 ekranas), CTA „Toliau: X“, geri/blogi pavyzdžiai, refleksija. **Vartotojo patirties apibendrinimas (2026-02-07):** 2 mod. – grįžus atgal rodomas atsakymas/paaiškinimas; 3 mod. – „Pirmyn“ blokuojamas kol neįvykdyta praktinė užduotis (mikro-privalomas veiksmas).
- **CODE_REVIEW 4–6:** SOT Modulio 6, skaidrės COMBO/SUPER/Duomenų tvarkymas, Modulio 5 id 501–504.
- **NEXT įgyvendinimas (2026-02-08):** CONTENT_AGENT – SOT papildytas implementacijos pastabomis (M5 test-intro/test-results, M6 practice-intro). CODING_AGENT – progress.ts pastaba apie skaidrių ID unikalumą per modulį.
- **Modulio 4 MUST (2026-02-07):** M2 patikrinta (RAG „Nežinau“ + citavimas); M3 – ContentBlockSection.copyable, skaidrė 68; M4 – skaidrė „Saugumas: prompt injection ir jailbreak“ (id 67.5). **Modulio 4 SHOULD S1–S6 (2026-02-07):** S1 kontekstas/tokenai 4.2; S4 bridžinė praktika; S5 Optional prefix; S6 shortTitle – visi įgyvendinti. **P2 content-driven:** intro, hierarchy, comparison, summary, practice-summary – turinys iš JSON, tipai ir default reikšmės.
- **Skaidrė „4 dedamosios“ UI/UX (2026-02-08):** T1 accent „Esmė“ blokas; T2 workflow tooltips (hover); T3 „Praktiškai“ paryškinimas. Žr. SKAIDRIU_UI_UX_ANALIZE_TOBULINIMAI, MODULIO_4_4_DEDAMOSIOS_ANALIZE.
- **Skaidrė 4.1a3 (RL/RLHF) ir eilė (2026-02-08):** Pilnas turinys (5 blokų), content-block lentelė (RL vs RLHF); **eilė:** 5 principai (4.1a4) rodomi prieš RL/RLHF (4.1a3). **Pateikimo tobulinimas (2026-02-08):** blockVariant (brand/terms/accent), lentelės aria-label; SLIDE_4_1a3_RL_RLHF_AGENT_SEQUENCE.md §3. **RL proceso diagrama:** interaktyvi schema, RlProcessBlock, SCHEME_AGENT 3.6. **RL schemos UI/UX (2026-02-08, SCHEME_AGENT):** aiškus ciklas (solid grįžtamasis ryšys, be punktyro), rodyklės su tarpu nuo box, „Atlygis“ akcentuotas, mintinis modelis po schema (viena eilutė be kabučių), responsive (desktop row / mobile 2×2). **UI/UX perstatymas:** 2 rodyklių tipai (Forward #7B8794 vs Feedback ACCENT dashed), rankinis polygon arrowhead, forward etiketės virš rodyklių su connector, viewbox 280→330, ARROW_GAP_FWD 12→5. SCHEME_AGENT §3.7. Žr. CHANGELOG, SCHEME_AGENT.md.
- **Skaidrė 4.1a3 (RL/RLHF) – verslo situacijos ir promptai (2026-02-08):** 2 verslo situacijos (RL: el. parduotuvė/kainos/KPI; RLHF: klientų el. laiškai/žmogaus feedback) pridėtos į esamus blokus. 2 nauji blokai: RL prompto pavyzdys (copyable, 3 variantai + savęs atranka), RLHF prompto pavyzdys (copyable, 3 variantai + žmogaus pasirinkimas + galutinis laiškas). Sekcijos 1–7; SOT sinchronizuotas.
- **Skaidrė 4.1a3 (RL/RLHF) – antraščių valymas (2026-02-08):** Pašalintos vidinės pastabos iš 4 antraščių (skliaustai → body bold); diagramos title "RL struktūra (labai svarbu parodyti)" → "RL proceso struktūra"; žodyne +4 terminai (RL, Paskatinamasis mokymas, Atlygis, Agentas DI kontekste), RLHF def. "with" → "from".
- **Skaidrės 4.1a5, 4.1a5-style, 4.1a5-practice – pilnas turinys (2026-02-08):** Skaidrė 50 (Parametrų laukas) – 8 sekcijų (brand intro + 6 parametrų grupių + accent takeaway). Skaidrė 51 (Stilių naudojimas) – 12 sekcijų (5 dimensijos, 4 copyable pavyzdžiai, terms). Skaidrė 52 (Praktinės užduotys) – 13 sekcijų (3 stilių + 3 el. laiškų promptai, HTML 5 blokų lentelė + copyable, terms). SOT sinchronizuotas. Build OK.
- **Promptų porų atvaizdavimas (2026-02-08):** Skaidrė 54 (Metodinis vs Agentinis) – 4 sekcijos, copyable pavyzdžiai, „Ką analizuoti“ (terms). Dokumentas `docs/development/PROMPTU_PORU_ATVAIZDAVIMAS.md` – gairės kitoms poroms (nestruktūruotas/struktūruotas, manipuliacinis/neutralus).
- **Modulio 4 skaidrė 47 (Optional: 8 skaidrių prezentacija) (2025-02-08):** DI prezentacijos workflow – clickable 5 žingsnių diagrama, „Tu esi čia“, žingsnių mygtukai, paaiškinimai apačioje; **atskiri blokai:** workflow + įrankiai (6 kortelės: Gamma, SlidesAI, Canva, Prezent.ai, Visme, Beautiful.ai); 8 skaidrių karkasas, master prompt, promptas turiniui (6 blokų), takeaway; artefaktas + atsisiuntimas fiksuoti (funkcija ateityje). SCHEME_AGENT 3.6 – interaktyvumo UX kelias dokumentuotas.
- **Refaktoringas (2026-02-08):** ✅ **M-R1** – AllSlides padalintas: ContentSlides.tsx, BlockSlides.tsx, TestPracticeSlides.tsx, shared/renderBody.tsx, RecognitionExerciseBlock.tsx; AllSlides – barrel. ✅ **S-R1** – AppNav.tsx, useTheme (utils/useTheme.ts). ✅ **S-R2** – useSlideNavigation, ModuleCompleteScreen.tsx. ✅ **S-R3** – useQuizState, QuizResultsView.tsx.
- **Promptų inžinerijos skaidrių perkėlimas ir tobulinimas (2026-02-08):** 3 skaidrės (54.5 System vs Master, 55 Proceso prompt, 54 Metodinis vs Agentinis) perkeltos prieš Custom GPT kūrimo procesą (id 46). Nauja eilė: 4 dedamosios → System vs Master → Proceso prompt → Metodinis vs Agentinis → Custom GPT. Visų 3 turinys perrašytas: palyginimo lentelės (table), blockVariant hierarchija (brand/terms/accent), copyable kaip string, practicalTask (54.5 – Master Prompt generatorius su 10 klausimų). Skaidrė 55 pavadinimas: „Optional:" pašalinta → „Proceso prompt ir workflow sudarymas". Build OK, JSON valid.
- **Modulio 4 tobulinimo planas (2026-02-08):** Diagnostinis quiz feedback (3 warm-up-quiz: id 63.5, 65.7, 66.5 – „Čia stipru / Puiku" tonas). Skaidrė 55 (Proceso prompt) – 6 sekcijų (intro + geras/blogas + 3 copyable šablonai: strateginis, projektų, operacijų + accent takeaway). Asmeninio konteksto miniužduotys (skaidrė 58 RAG + skaidrė 67 Manipuliacijos – „Pagalvokite apie savo darbą/patirtį"). „Pataisyk promptą" praktika (3 vietos – skaidrė 67 (inline) + id 49.5 (5 principai) + id 67.3 (šališkumas)). Bug fix: TestSectionSlide useEffect importas. **UI/UX:** T1 heading hierarchy (h4 font-semibold, ne font-bold – aiškesnė skirtumo nuo h3); T2 dark mode subtitle (dark:text-gray-500 → dark:text-gray-400, PracticalTask chevron dark mode); Progressive disclosure (AdvancedParameters2Slide – 4 parametrų sekcijos collapsible su details/summary, Max Tokens open by default); T6 tap highlight (summary elementai, CSS details/summary stiliai). SOT ↔ modules.json eilė sinchronizuota. Build OK, 46 testai praeina, 0 lint klaidų.
- **Modulio 4 visapusė analizė ir 5 fazių tobulinimas (2026-02-08):** FAZĖ 1: module-intro (id 40) perkeltas į 1-ą poziciją; 3 section-break (id 40.5, 52.5 atnaujinta, 65.8); 6 optional skaidrės; `Slide.optional` tipas. FAZĖ 2: 3 savitikros išplėstos 2→5 kl.; nauja savitikra 68.5 (manipuliacijos+haliucinacijos, 4 kl.); 2 „Pataisyk promptą" skaidrės (49.5, 67.3); bridžinė praktika 65.5 išplėsta. FAZĖ 3: Desktop progress „Skaidrė X/Y" header; „Papildoma" badge; per-slide ErrorBoundary. FAZĖ 4: id 41 intro/takeaway; id 53 palyginimo lentelė; id 66 tokenų lentelė+pavyzdžiai; id 56, 57 praktiniai pavyzdžiai.
- **Bug fix (2026-02-09):** ContentSlides.tsx – pridėtas trūkstamas `useEffect` importas; išspręsta „Nepavyko užkrauti skaidrės“ Modulio 4 skaidrėje „Praktika: DI visata“. Žr. TEST_REPORT, CHANGELOG.
- **Kodo bazės QA (2026-02-09):** sutvarkytas lint „užstrigimas“ (eslint apribotas į `src/`, ignoruojami `.cursor`/`coverage`), pataisytos ESLint klaidos (nenaudojami importai/kintamieji, hook deps), `react-refresh/only-export-components` konsolidacija (paaiškinimų konstantos iškeltos į `src/components/slides/shared/stepExplanations.ts`). `npm run lint`, `npm run test:run`, `npm run build` – OK.
- **DI turinio detektorių skaidrė (2026-02-09):** Naujas skaidrės tipas `ai-detectors` (slide id: 201) – 10 DI turinio aptikimo įrankių. Komponentas `AiDetectorsSlide.tsx`, duomenys `src/data/aiDetectors.ts`. Filtravimas pagal tipą, paieška, statistika, dark/light mode. Vieta: Modulis 4, po slide 200, prieš slide 68.5. SOT atnaujintas. Lint 0, TS OK.
- **Modulio 3 UI/UX planas (2026-02-10):** Dokumentas `docs/MODULIO_3_UI_UX_GERIAUSIOS_PRAKTIKOS.md` (Top 10 praktikų iš e-learning/prompt engineering šaltinių). Įgyvendinimo planas `docs/development/PLAN_MODULIO_3_UI_UX.md` – agentų seka (DATA opt. → CODING → CODE_REVIEW → QA), Fazė 1 (#8, #10, #9), Fazė 2 (#1, #6), Fazė 3 backlog (#2, #4). TODO.md § Modulio 3 UI/UX – lentelė ir įgyvendinimo eilė.
- **Modulio 1 skaidrė 1 – DI įrankiai (2026-02-10):** Apačioje išskleidžiamas blokas su įrankių intro, nuorodomis (ryškiai), aprašymais ir populiariausiais naudojimo atvejais. `ActionIntroContent.tools` + `toolsIntro`; `modules.json` ir `turinio_pletra.md` atnaujinti. Žr. CHANGELOG.
- **A-M1 (2026-02-11):** Turinio kontraktas – JSON Schema (modules, promptLibrary, glossary) + `scripts/validate-schema.mjs` (Ajv), `prebuild` prieš build. content-block → content.sections[] required. **ContentSlides.tsx:** JSX sintaksės klaida (action-intro DALIS C – fragment wrapper) ištaisyta; build OK.
- **Sesija 2026-02-11 (P2, P3, PracticalTask, turinys):** P2 pirmos skaidrės hook + 30 s CTA; P3 emerald cover + „X iš 15“; PracticalTask Redaguoti/Kopijuoti (visi moduliai, įsk. M3); action-intro: „Ta pati užduotis“, „Problema – ne DI“, Variant A dviejų eilučių smūgis; Tuščias promptas, Šiuose mokymuose, Grandinės/Medžio (CoT/ToT); DeepSeek įrankių sąraše; questionPool pool-scenario-4 gramatika.
- **Modulio 2 testo tekstai (2026-02-11):** Pavadinimas „Žinių patikrinimas“, subtitle „15 atsitiktinių klausimų iš nuolat atnaujinamo banko.“
- **Ikonų patobulinimas (2026-02-11):** Emoji pakeistos Lucide ikonais (TestPracticeSlides, ModulesPage, PracticalTask, HomePage, ContentSlides, BlockSlides); strokeWidth 1.5, ikonų konteineriai, vienoda vizualinė hierarchija.
- **MVP Release – Moduliai 1–3 (2026-02-11):** `VITE_MVP_MODE=1` build rodo tik modulius 1–3. Module gating: mvpMode.ts, modulesLoader filtravimas, App guard'ai, Glossary filtras, HomePage CTA „Į apklausą“. 4 negatyvūs testai, CI MVP build step. Žr. RELEASE_PLAN_MVP_MODULIAI_1_3.md, RELEASE_QA_CHECKLIST §6.
- **Pagrindinis puslapis (HomePage) ir ModulesPage – pre-release UX (2026-02-11):** P0 CTA kai quizCompleted – „Peržiūrėti modulius“; P1 progresas virš CTA; P1 ModulesPage mygtukas „Į apklausą“ po completion; P2 Zap → badge „~45 min“; P2 Features CTA neadaptyvus – kai viskas baigta „Peržiūrėti modulius“. HomePage.tsx, ModulesPage.tsx, App.tsx.

---

## 2. Prioritetai – likę darbai

### P1 – Aukštas

*(Visi anksčiau P1 punktai įgyvendinti.)*

### Refaktoringas ir konsolidacija (MUST / SHOULD)

> **Šaltinis:** `docs/development/CODEBASE_REFACTORING_ANALYSIS.md` – gili kodo bazės analizė (eilučių skaičiai, must–should–want).

#### MUST (būtina)

| # | Užduotis | Failas | Pastaba |
|---|----------|--------|---------|
| M-R1 | **AllSlides.tsx (3315 eil.) padalinti** – vienas failas su 35 skaidrių komponentais + helperiais | `src/components/slides/types/AllSlides.tsx` | ✅ Įgyvendinta: ContentSlides.tsx, BlockSlides.tsx, TestPracticeSlides.tsx, shared/renderBody + RecognitionExerciseBlock; AllSlides – barrel. |

#### SHOULD (labai pageidautina)

| # | Užduotis | Failas | Pastaba |
|---|----------|--------|---------|
| S-R1 | **App.tsx (524 eil.)** – išskirti navigaciją ir temą | `src/App.tsx` | ✅ Įgyvendinta: AppNav.tsx, utils/useTheme.ts. |
| S-R2 | **ModuleView.tsx (470 eil.)** – išskirti skaidrių navigaciją ir completion ekraną | `src/components/ModuleView.tsx` | ✅ Įgyvendinta: useSlideNavigation, ModuleCompleteScreen.tsx. |
| S-R3 | **QuizPage.tsx (445 eil.)** – išskirti būseną ir rezultatų ekraną | `src/components/QuizPage.tsx` | ✅ Įgyvendinta: useQuizState, QuizResultsView.tsx. |
| S-R4 | **(Optional) types/modules.ts (458 eil.)** – padalinti tipus | `src/types/modules.ts` | modules-core.ts + modules-slide-content.ts + re-export. Žemas prioritetas. |

### Modulio 3 (Praktinis Pritaikymas) UI/UX – Top praktikos

> **Šaltinis:** `docs/MODULIO_3_UI_UX_GERIAUSIOS_PRAKTIKOS.md`. **Planas ir agentų seka:** `docs/development/PLAN_MODULIO_3_UI_UX.md`.

**Agentų seka:** DATA_AGENT (optional, CTA/tekstai) → **CODING_AGENT** (+ UI_UX_AGENT) → CODE_REVIEW_AGENT → QA_AGENT.

| Fazė | # | Užduotis | Sritis | Statusas |
|------|---|----------|--------|----------|
| **1** | **#8** | Scenarijų lentelė su progresu – Praktikos Įvade 4 kortelės (Ne pradėta/Vykdoma/Užbaigta), „X iš 4“, klikas → skaidrė | CODING | ✅ 2026-02-10 |
| 1 | **#10** | Konkretūs CTA – „Pereiti prie Scenarijaus 2/3/4“, „Į Praktikos santrauką“ (vietoj bendro „Toliau“) | CODING | ✅ 2026-02-10 |
| 1 | **#9** | Hint tooltip – prie PracticalTask žingsnių rodyti `step.hint` kaip tooltip | CODING | ✅ 2026-02-10 |
| **2** | **#1** | Tabs/accordion scenarijui – Kontekstas, Duomenys, Apribojimai, Rezultatas (ne viskas iš karto) | CODING + UI_UX | ✅ 2026-02-10 |
| 2 | **#6** | 6 blokų checklist – META, INPUT, … užpildymo vizualizacija virš textarea | CODING | ✅ 2026-02-10 |
| **3** (backlog) | **#2** | Drag-and-drop „Surinkite 6 blokus“ (Scenarijus 1) | CODING + UI_UX | Backlog |
| 3 | **#4** | Stepper su atskirais laukais (po bloką) vietoj vieno textarea | CODING + DATA | Backlog |

**Įgyvendinimo eilė:** #8 → #10 → #9 → #1 → #6 – **įgyvendinta 2026-02-10.** #2 ir #4 – vėlesnė iteracija.

### Moduliai 1–2–3 UX strategija (2026-02-11)

> **Ataskaita:** `docs/MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md`. **Seka:** `docs/development/AGENT_SEQUENCE_MODULIAI_1_2_3_UX_STRATEGIJA.md`.

| Prioritetas | Užduotis | Dydis | Sritis | Statusas |
|-------------|----------|-------|--------|----------|
| P2 | Pirmos skaidrės hook ir 30 s veiksmas – kontekstas „2x“ arba diskomforto pažadas + aiškus CTA | M | CONTENT + CODING | ✅ 2026-02-11 |
| P3 | Modulio 3 practice-intro cover su emerald akcentu | S | UI_UX / CODING | ✅ 2026-02-11 |
| P3 | Modulio 2 „X iš 15“ sticky arba mini-progress virš klausimų | S | CODING | ✅ 2026-02-11 |

### Pagrindinis puslapis (HomePage) – pre-release įvertinimas (2026-02-11)

> **Šaltinis:** Gilus įvertinimas pagal Elucidat, articulat UX tyrimus. CTA + progreso logika, baigto vartotojo kelionė.

| Prioritetas | Problema | Veiksmas | Statusas |
|-------------|----------|----------|----------|
| **P0** | CTA „Tęsti mokymą“ kai 100% (6/6 moduliai baigti) – semantiškai neteisinga | CTA turi būti priklausomas nuo būsenos: **„Į apklausą →“** (kai moduliai baigti, apklausa ne); **„Peržiūrėti modulius“** arba „Pakartoti mokymą“ (kai viskas baigta) | ✅ 2026-02-11 |
| **P1** | Progreso tekstas „X/Y moduliai baigti“ rodomas **po** CTA – kognityvinė prieštara | Progresą rodyti **virš** CTA; arba kai 100% – trumpas sveikinimas vietoj progreso | ✅ 2026-02-11 |
| **P1** | ModulesPage: „Visi moduliai baigti!“ – nėra CTA mygtuko į apklausą | Pridėti mygtuką „Į apklausą“ po completion message | ✅ 2026-02-11 |
| **P2** | Zap ikona hero ikonos kampe – mažuose ekranuose gali atrodyti kaip „4“ | Pašalinti arba pakeisti į aiškesnį badge (pvz. „~45 min“) | ✅ 2026-02-11 |
| **P2** | Features sekcija: CTA visada „Pradėti mokymus dabar“ – neadaptyvus | Kai 100% – „Peržiūrėti modulius“ arba „Pakartoti mokymą“ | ✅ 2026-02-11 |
| **P3** | Badge „DI Promptų Inžinerijos Mokymas“ – galimas redundantiškumas | Sumažinti vizualinį svorį arba perkelti į subtitle | Liko |

**Techninis planas:** `HomePage.tsx` – sąlyginis CTA pagal `modulesCompleted`, `progress.quizCompleted`; `onStart` gali nukreipti į quiz vietoj modules. `ModulesPage.tsx` – mygtukas „Į apklausą“ kai completedCount === totalModules. **Įgyvendinta 2026-02-11.**

### Analizės verdiktas – MUST / SHOULD (turinio kontraktas, KPI, remediation)

> **Šaltinis:** [docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md](docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md) – gili analizė pagal CHANGELOG: kas lūžta pirmiausia, kas padaryta gerai, prioritetai.

#### MUST (jei nedarai – pradės skaudėti artimiausiai)

| # | Užduotis | Pastaba |
|---|----------|---------|
| A-M1 | **Turinio kontraktas: JSON Schema + CI validacija** – `modules.json` (ir optional `promptLibrary.json`, `glossary.json`) schema (pvz. Ajv), CI step: fail build if invalid. Required per slideType (pvz. content-block → sections[]). | Mažiau fallback’ų, mažiau tylių klaidų. ✅ **2026-02-11:** `scripts/schemas/` (modules, promptLibrary, glossary), `scripts/validate-schema.mjs` (Ajv); `npm run validate:schema`, `prebuild` prieš build. content-block → content.sections[] required. |
| A-M2 | **Vienas mokymosi KPI + minimalus event tracking** – pvz. `module_completion_rate` arba `time_to_first_action_success` (pirmas CTA/copy/submit). Paprastas event log (localStorage + optional export); nereikia Mixpanel iš karto. | Be to „atrodo geriau“ ≠ „veikia geriau“. ✅ **2026-02-11:** `src/utils/learningEvents.ts` – eventai `module_completed`, `first_action_success`; log į localStorage; `getLearningEvents()`, `exportEventsAsJson()`, `downloadEventsExport()`; KPI: `getModuleCompletedCount()`, `getFirstActionSuccessTimestamp()`. Integracija: `App.tsx` (handleModuleComplete, handleTaskComplete). |
| A-M3 | **Remediation uždara kilpa** – „Peržiūrėti skaidrę X“ turi turėti: **grįžti į testo rezultatą** ir (ideal.) „pakartok N klausimų iš šitos kategorijos“. Dabar deep link į Modulį 1 jau yra; trūksta grįžimo ir „pakartok“. | ✅ **2026-02-11:** Grįžimas: „Grįžti į testo rezultatą“ Modulyje 1 (remediationFrom + onReturnToRemediation). „Pakartok 3 kl.“ – žemėlapyje po kategorija mygtukas, inline mini-quiz (MCQ/true-false). questionPoolSelector.selectQuestionsByCategory. |
| A-M4 | **Content QA gate prieš release** – 5 min checklist: broken links, 1 mobile + 1 dark mode sanity, 1 a11y smoke. Dokumentuoti ir vykdyti prieš release. | ✅ **2026-02-11:** `docs/development/RELEASE_QA_CHECKLIST.md` – 4 skyriai (broken links, mobile, dark mode, a11y smoke). |

#### SHOULD (stipriai pakels kokybę)

| # | Užduotis | Pastaba |
|---|----------|---------|
| A-S1 | **6 blokų checklist: iš keyword → structure check** – aptikti sekcijas (META:/INPUT: heading’ai arba atskiri paragrafai). Rodyti „missing blocks“ su 1 sakinio pavyzdžiu. Dabar: `PracticalTask.tsx` – tik `answer.toUpperCase().includes(block)`. | Heuristika silpna; galima „apgauti“. |
| A-S2 | **A11y automatika** – axe-core bent smoke kelioms skaidrėms; rankomis nepagausi regresijų. | |
| A-S3 | **Vienas Design system** – Card, Banner, Table, CTAButton su variantais; jau pradėta (blockVariant, CTA gradient). Įtvirtinti vieną rinkinį. | |
| A-S4 | **Optional → „Fast track“ toggle** – rodyti/tęsti praleidžiant optional skaidrės automatiškai. Labai pakels completion rate. | Optional jau yra badge + flag. |

**Rekomenduojama seka:** A-M1 (schema) → A-M2 (KPI) → A-M3 (remediation return) → A-M4 (QA gate) → A-S1 (6 blokų structure) → A-S4 (Fast track) → A-S2 (a11y) → A-S3 (design system).

### P2 – Vidutinis

| # | Užduotis | Sritis | Pastaba |
|---|----------|--------|--------|
| 1 | **Skaidrių tipų: hardcoded → content-driven** (intro, hierarchy, comparison, summary, practice-summary) | CONTENT → DATA → CODING | ✅ Įgyvendinta: intro, hierarchy (id 4), comparison (id 13), summary (id 14), practice-summary (id 35). Žr. SKAIDRIU_TIPU_ANALIZE §4.1 |
| 2 | **Savitikros skaidrės Modulyje 4** – 2–3 tarpinės savitikros po RAG, Deep research, tokenų | CONTENT + UI | ✅ Įgyvendinta: 4 warm-up-quiz (id 63.5, 65.7, 66.5 – po 5 kl.; id 68.5 – 4 kl. manipuliacijos+haliucinacijos) |
| 3 | **Asmeninio konteksto miniužduotys** – „Pagalvokite apie savo darbe“ po RAG ir manipuliacijų | CONTENT | ✅ Įgyvendinta: skaidrė 58 (RAG) + skaidrė 67 (Manipuliacijos) – accent blokai |
| 4 | **„Pataisyk promptą“** – bent viena užduotis (silpnas/šališkas promptas → pataisyti) | CONTENT | ✅ Įgyvendinta: skaidrė 67 – 2 šališki promptai + pataisyti variantai |
| 5 | **Prezentacijos artefakto atsisiuntimas** – Modulio 4 skaidrė 47 (Optional: 8 skaidrių prezentacija): vartotojas ruošia artefaktą (struktūra/turinys), kurį galės atsisiųsti; **funkciją įgyvendinti ateityje** | CODING + DATA | Skaidrėje fiksuota: artefaktas + „atsisiuntimo funkcija bus įgyvendinta ateityje“ |
| 6 | **Skaidrių UI/UX konsistencija (T1/T2/T6)** – blokų antraščių hierarchija, subtitle dark kontrastas, tap highlight brand | UI_UX + CODING | ✅ **T1 done** (6 inner H3 text-xl→text-lg), **T2 done** (dark:text-gray-300→200, 4 failai), **T6 jau OK** (brand spalva index.css). + **P1 mobile grid fix** (7 grid-cols-2→responsive, 3 failai). Žr. CHANGELOG 2026-02-09. |

### Skaidrė „5 principai“ (4.1a4) – user journey (2026-02-08)

> **Šaltinis:** `docs/development/USER_JOURNEY_4_1a4_5_PRINCIPAI.md` – kritinis įvertinimas (user journey, best practices 2026).

| # | Užduotis | Sritis | Prioritetas |
|---|----------|--------|--------------|
| UJ-1 | **„Kur paleisti“ promptą** – į „Pabandykite“ arba templateLabel pridėti: „Atidarykite ChatGPT, Claude arba kitą DI įrankį…“ | CONTENT → DATA | ✅ Įgyvendinta: Pabandykite body su „Atidarykite ChatGPT, Claude arba kitą DI įrankį.“ |
| UJ-2 | **Subtitle su „kur esu“** – „Po 4 dedamųjų – penki veiksmai… Galėsite pats jį įvertinti.“ | CONTENT → DATA | ✅ Įgyvendinta |
| UJ-3 | **Transition į skaidrę 48 (RL/RLHF)** – skaidrėje 49 sekcija „Toliau“: „Kitoje skaidrėje – … RL/RLHF.“ | CONTENT → DATA | ✅ Įgyvendinta |
| UJ-4 | **(Optional) „Nukopijavau“** – checkbox arba mygtukas „Pažymėjau, kad nukopijavau“ (ne į progresą, tik UX micro-win) | CODING | P3 |
| UJ-5 | **(Optional) Nuoroda į Modulį 1** – collapse „Priminti 5 principus iš Modulio 1?“ su 1–2 sakiniais | CONTENT + CODING | P3 |

### Modulio 4 – MUST (būtina) – geriausios praktikos

| # | Užduotis | Kur taikyti | Šaltinis |
|---|----------|-------------|---------|
| M1 | Santraukoje (4.7) išlaikyti ryšius tarp temų (RAG, tokenai, patikrinimas, manipuliacijos) | SOT 4.7 | `docs/MODULIO_4_TOBULINIMAI_GERIAUSIOS_PRAKTIKOS.md` |
| M2 | RAG (4.2): visur reikalauti „Jei nėra kontekste – parašyk Nežinau“ ir citavimo; patikrinti SOT ir UI | SOT 4.2 | ✅ Patikrinta – SOT ir modules.json (4.2, 4.6) turi reikalavimą |
| M3 | 4.6 (haliucinacijos): anti-haliucinacinis šablonas ir 4–5 taisyklės visada matomi (CopyButton, nepaslėpti) | SOT 4.6, UI | ✅ ContentBlockSection.copyable + skaidrė 68 (id 68) |
| M4 | 4.5 (manipuliacijos): atskirti „verslo manipuliacija“ nuo „saugumo“ – pridėti skaidrę/collapsible „Saugumas: prompt injection ir jailbreak“ (OWASP #1) | SOT 4.5 | ✅ SOT + modules.json (id 67.5); žr. PLAN_AGENTAI_DARBAI.md |

### Modulio 4 – SHOULD (labai pageidautina) – geriausios praktikos

| # | Užduotis | Kur taikyti | Šaltinis |
|---|----------|-------------|---------|
| S1 | Prieš RAG (4.2): 1–2 sakiniai apie konteksto langą/tokenus + nuoroda į 4.4; patikrinti, ar rodoma UI | SOT 4.2, UI | ✅ modules.json id 58 – blokas „Kontekstas ir tokenai“ |
| S2 | RAG duomenų paruošimas (4.2b): įtraukti „chunk size“ / fragmentų dydžio gairę (logiški fragmentai, retrieval tikslesnis) | SOT 4.2b | ✅ SOT + modules.json (id 62) |
| S3 | 4.6: pastraipa arba „Giluminiam“ blokas apie Chain-of-Verification (CoVe) | SOT 4.6 | ✅ SOT + modules.json skaidrė 68 (id 68) – sekcija „Giluminiam: Verifikacijos grandinė (CoVe)“ |
| S4 | Bridžinė praktika po 4.3: viena 5–10 min užduotis (RAG + Deep research + šaltiniai) | SOT po 4.3a | ✅ SOT + modules.json id 65.5 + MODULIO_4_SKAIDRIU_EILES |
| S5 | Optional/BONUS skaidres žymėti nuosekliai (4.1a2-viz, 4.1-workflow-ex, 4.1a5-style, 4.1a5-practice, 4.1b2, 4.2a-academic) | SOT 2.1 lentelė | ✅ „Optional:“ prefix prie 6 skaidrių |
| S6 | Ilgoms skaidrėms – trumpas UI pavadinimas (pvz. „RAG: memory ir įrankiai“) | SOT 2.1 / 2.2 | ✅ shortTitle schema + 6 skaidrių + ModuleView |

### Iš vartotojo testų (Custom GPT – GPT proceso skaidrė sutvarkyta ✅)

| # | Užduotis | Sritis | Statusas |
|---|----------|--------|----------|
| 5 | **Custom GPT: „ką daryti dabar“ + mini užduotys** – checklist jau yra; mini input, vizualus žingsnio užbaigimas (✔️) | CONTENT + CODING | ✅ Padaryta |
| 6 | **Custom GPT: CTA ir uždara navigacija** – CTA „Toliau: X“; uždara nav (Ankstesnis/Kitas) | CONTENT + CODING | ✅ Padaryta |
| 7 | **Custom GPT: geri/blogi pavyzdžiai** – prie kiekvieno žingsnio 🟢/🔴/⚠️ | CONTENT | ✅ Padaryta |
| 8 | **Custom GPT: vizualinė kalba** – 👤 Tu, 🤖 GPT, 🎯 Tikslas; viena akcentinė spalva | CONTENT + CODING | ✅ Padaryta |
| 9 | **Custom GPT: NICE** – progreso santrauka, peršokimas tarp žingsnių, refleksijos ekranas | CONTENT + CODING | ✅ Padaryta |

### Testų infrastruktūra (Vitest/setup) – reikia gilesnio įsigilinimo

| # | Užduotis | Sritis | Pastaba |
|---|----------|--------|---------|
| T1 | **Vitest klaida:** `TypeError: Cannot read properties of undefined (reading 'on')` ❯ src/test/setup.ts:64 (afterEach/cleanup). Visi 5 failai: App.integration, App.quiz.integration, QuizPage, progress, useAutoSave. Tests: no tests. | CODING + diagnozė | **Padaryta:** src/test/setup.ts – process/process.on stub (globalThis, global, vi.stubGlobal). Vartotojo aplinkoje (Windows, lokaliai) vis tiek lūžta. **Gilesnis įsigilinimas:** Node versija, Vitest pool (threads/forks), jsdom versija, ar klaida iš cleanup()/@testing-library. |
| T2 | **Galimybė:** Testai rašyti anksčiau nei sukurta vėlesnė sistemos dalis – stringai, selektoriai ar prielaidos gali būti pasenę. Po setup klaidos išsprendimo – peržiūrėti ir, jei reikia, **perrašyti ar atnaujinti testus** (App, QuizPage, progress, useAutoSave). | CODING + QA | Žr. TEST_REPORT.md 2026-02-09. |

### P3 – Žemas / Backlog

| # | Užduotis | Sritis |
|---|----------|--------|
| 9a | Favicon atnaujinimas – naujas ikonas / brand atpažinimas | UI_UX / CODING |
| 10 | Block skaidrės content-driven (meta, input, output) – optional refaktoras | DATA + CODING |
| 11 | „Kaip naudoti modulį“ – minimalus vs pilnas kelias (Moduliai 4 ir 6) | CONTENT |
| 12 | Žodynėlis Moduliui 4 – 8–10 terminų (RAG, tokenas, …) | CONTENT | Dalinai: +4 terminai (RL, Paskatinamasis mokymas, Atlygis, Agentas DI kontekste); RLHF def. pataisyta |
| 13 | Alternatyvūs projekto kontekstai Modulyje 6 – 1–2 (HR, produktas) | CONTENT |
| 14 | Monitoring (Sentry, GA4), PWA, Eksportas/Importas, Sertifikatas, Multi-language | CODING / CONTENT |
| 15 | **Savitikra 68.5: pridėti 1–2 klausimus apie DI detektorius** – po slide 201 (DI turinio detektoriai) quiz 68.5 turėtų apimti klausimą apie detektorius (pvz. „Kam skirti DI turinio detektoriai?", „Kuris detektorius yra lietuviškas?"). Šiuo metu 68.5 turi tik manipuliacijos/haliucinacijos klausimus. | CONTENT + DATA |

### Modulio 2 testo tobulinimas – Fazė 2 (P2)

> **Šaltinis:** Modulio 2 interaktyvaus testo pertvarka v2.5.0 (2026-02-09). Fazė 1 atlikta: 5 klausimų tipai, progressive hints, gamifikacija, per-bloko žemėlapis.

| # | Užduotis | Sritis | Pastaba |
|---|----------|--------|---------|
| F2-1 | **Klausimų pool (question bank)** – kiekvienai kategorijai 3–5 klausimų (vietoj 1–2), atsitiktinis parinkimas kiekvieną kartą. Pakartojant testą – matysi kitus klausimus. | DATA + CODING | 30–40 klausimų JSON pool; atsitiktinis 15 parinkimas pagal kategorijas |
| F2-2 | **Radar/spider chart** rezultatuose – vizualus per-bloko žinių žemėlapis (8 ašys: Meta, Input, Output, Reasoning, Quality, Advanced, Workflow, Technikos). SVG arba lightweight chart lib. | CODING + UI_UX | Dabar tik spalvoti blokai; tikslas – interaktyvi diagrama su skorais |
| F2-3 | **Remediation deep links** – „Peržiūrėti skaidrę X" mygtukai rezultatuose, kurie atidaro konkrečią Modulio 1 skaidrę | CODING | ✅ Įgyvendinta: onGoToModule(moduleId, slideIndex?), ModuleView initialSlideIndex, tiesioginis atidarymas be resume prompt. |
| F2-4 | **Score animation** – rezultatų procento „count up" animacija (0 → X% per 1.5s) | CODING + UI_UX | ✅ useCountUp (Moduliai 2, 5 TestResultsSlide + QuizResultsView CircularProgress) |

### Modulio 2 testo tobulinimas – Fazė 3 (P3)

> **Šaltinis:** E-learning tyrimai – Retrieval Practice (Karpicke 2025), Spaced Repetition (MIT OpenLearning), Self-Determination Theory.

| # | Užduotis | Sritis | Pastaba |
|---|----------|--------|---------|
| F3-1 | **Confidence indicator** – prieš atsakant: „Kaip esate tikri?" (Tikras / Spėju / Nežinau). Metakognityvinis elementas; rodomas rezultatuose. | CODING + CONTENT | ✅ Įgyvendinta: ConfidenceSelector, būtina pasirinkti prieš atsakant, rezultatuose rodomas „Pasitikėjimas: …". |
| F3-2 | **Spaced repetition hooks** – Moduliuose 3, 4, 6 automatiškai įterpti 2–3 kartojimo klausimus iš Modulio 2 (warm-up). Klausimai parenkami pagal silpniausias kategorijas. | CONTENT + DATA + CODING | Tyrimas: spaced vs massed g=0.28 (meta-analysis 2025) |
| F3-3 | **Timed challenge mode** – neprivalomas laiko iššūkis (60s visiems klausimams). Atskiras rezultatas + ženklelis. | CODING + UI_UX | P3 – tik po F2 ir F3-1/F3-2 |
| F3-4 | **Adaptive difficulty** – jei ≥90% pirmu bandymu, sekantis testas generuoja sunkesnius klausimus (Bloom 3–4 vietoj 1–2). Jei <50%, generuoja lengvesnius. | DATA + CODING | Reikia question difficulty metadata; ilgalaikis |
| F3-5 | **Peer comparison** – anonimizuotas „X% dalyvių atsakė teisingai" prie kiekvieno klausimo (po atsakymo). Reikia backend arba aggregated stats. | CODING + BACKEND | Ilgalaikis – reikia duomenų rinkimo infrastruktūros |

---

## 3. Nuorodos

| Kas | Kur |
|-----|-----|
| Vartotojo testų klaidos ir sprendimai | `docs/development/TEST_REPORT.md` |
| Agentų orkestratorius | `docs/development/AGENT_ORCHESTRATOR.md` |
| Skaidrių tipų analizė | `docs/SKAIDRIU_TIPU_ANALIZE.md` |
| Modulio 4 turinys / skaidrių eilė | `docs/MODULIO_4_TURINIO_ANALIZE.md`, `docs/MODULIO_4_SKAIDRIU_EILES.md` |
| Modulio 4 MUST/SHOULD (geriausios praktikos) | `docs/MODULIO_4_TOBULINIMAI_GERIAUSIOS_PRAKTIKOS.md` |
| Modulio 4 DI visata – analizė ir sprendimai | `docs/MODULIO_4_DI_VISATA_ANALIZE_SPRENDIMAI.md` |
| Skaidrė „4 dedamosios“ – turinio/pedagogika | `docs/MODULIO_4_4_DEDAMOSIOS_ANALIZE.md` |
| Skaidrių UI/UX, spalvos, šriftai – tobulinimai | `docs/SKAIDRIU_UI_UX_ANALIZE_TOBULINIMAI.md` |
| Turinio SOT Moduliai 1–3 / 4–6 | `turinio_pletra.md`, `docs/turinio_pletra_moduliai_4_5_6.md` |
| CODE_REVIEW Moduliai 4–6 | `docs/CODE_REVIEW_MODULIAI_4_5_6.md` |
| Pedagoginė analizė 4–6 | `docs/PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md` |
| Prioritetuotos problemos | `CODE_REVIEW_ANALYSIS.md` |
| **Analizės verdiktas – MUST/SHOULD (turinio kontraktas, KPI, remediation, 6 blokų)** | [docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md](docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md) |
| **Release QA checklist (A-M4)** | [docs/development/RELEASE_QA_CHECKLIST.md](docs/development/RELEASE_QA_CHECKLIST.md) |
| **Seka: gili analizė → fiksavimas → taisymas** | `docs/development/SEKA_GILI_ANALIZE_FIKSUOJAM_TAISOM.md` |
| **Refaktoringas (eilučių skaičiai, must–should–want)** | `docs/development/CODEBASE_REFACTORING_ANALYSIS.md` |
| Agentų ir darbų planas | `docs/development/PLAN_AGENTAI_DARBAI.md` |
| Modulio 4 SHOULD S1–S6 planas | `docs/development/PLAN_MODULIO_4_SHOULD_S1_S6.md` |
| SCHEME_AGENT – interaktyvumo UX (3.6), horizontalus layout (3.7) | `docs/development/SCHEME_AGENT.md` |
| **Skaidrė 5 principai (4.1a4) – user journey įvertinimas** | `docs/development/USER_JOURNEY_4_1a4_5_PRINCIPAI.md` |
| **Modulio 2 – agentų seka, turinio kokybė (lietuviškos raidės)** | `docs/development/AGENT_SEQUENCE_MODULIO_2_TURINYS_KOKYBE.md` |
| **Modulio 3 UI/UX – geriausios praktikos (Top 10)** | `docs/MODULIO_3_UI_UX_GERIAUSIOS_PRAKTIKOS.md` |
| **Modulio 3 UI/UX – įgyvendinimo planas ir agentų seka** | `docs/development/PLAN_MODULIO_3_UI_UX.md` |
| Plėtros planas, pedagoginės įžvalgos (must–should–want, TOP kūrėjams) | `ROADMAP.md` (§ Pedagoginės įžvalgos) |

---

*Sprendimų įrašymas: naujos klaidos → TEST_REPORT.md; QA_AGENT atnaujina čia (prioritetai / Iš vartotojo testų).*
