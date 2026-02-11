# Changelog

Visos reikšmingos pakeitimų šiame projekte bus dokumentuojamos šiame faile.

Formatas pagrįstas [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
ir šis projektas laikosi [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [Unreleased]

### Added

**2026-02-11 (Mobile UI – Moduliai 2 ir 3)**

- **Mobile UI auditas ir pataisymai:** Dokumentas `docs/development/MOBILE_UI_AUDIT_MOD2_MOD3.md` – CODE_REVIEW diagnozė, UI_UX checklist, įgyvendintos rekomendacijos. TestResultsSlide: radar wrapper su `overflow-hidden`, `p-4 sm:p-6`. CategoryBreakdownWithLinks: mygtukai „Peržiūrėti skaidrę“ / „Pakartok 3 kl.“ – `min-h-[44px] py-2` (touch targets); konteineris `p-4 sm:p-6`. PracticeScenarioSlide: tab mygtukai `min-h-[44px]`. RemediationRetryBlock: mygtukas „Grįžti į rezultatą“ – `min-h-[44px] py-2`, `aria-label`. MatchingQuestion: porų tekstas su `min-w-0 break-words` (overflow mobile). PracticalTask: root `p-4 sm:p-6`. RELEASE_QA_CHECKLIST.md skyrius 2 – rekomendacija tikrinti Modulius 2 ir 3 mobile (test-results, practice-scenario), nuoroda į audito doc.

---

## [1.2.0] – 2026-02-11

Pakeitimai nuo 2026-02-07; release – 2026-02-11 (V1.2).

### Fixed

**2026-02-11 (Release prep – AGENT_SEQUENCE_RELEASE_PREP)**

- **Lint (rules-of-hooks):** `PracticeScenarioSlide` – `useState` perkeltas prieš `if (!slide.scenario) return null`, kad hookai būtų kviečiami nepriklausomai nuo sąlygos (`TestPracticeSlides.tsx`).
- **Lint (react-refresh):** `confidenceLabel` ir `LABELS` išskirti į `confidenceLabels.ts`, kad `ConfidenceSelector.tsx` eksportuotų tik komponentą; importai atnaujinti (`McqQuestion`, `MatchingQuestion`, `OrderingQuestion`, `TrueFalseQuestion`, `ScenarioQuestion`, `index.ts`).
- **Lint (exhaustive-deps):** `MatchingQuestion` – `pairs` apgaubtas `useMemo`; `OrderingQuestion` – `correctOrder` apgaubtas `useMemo`.
- **Lietuviškos raidės:** `questionPoolSelector.ts` – „prioriteta“ → „prioritetą“, „6 Bloku Sistema“ → „6 Blokų sistema“.

### Added

**2026-02-11 (MVP Release – Moduliai 1–3 testuotojams)**

- **MVP mode:** `VITE_MVP_MODE=1` build rodo tik modulius 1–3; moduliai 4–6 nepasiekiami (nei per UI, nei per tiesioginius URL, nei per būsenos manipulaciją).
- **Module gating:** `src/utils/mvpMode.ts` – `getIsMvpMode()`; `modulesLoader.ts` – filtravimas `loadModules()`, `getModule(id > 3)` → null; `App.tsx` – guard'ai `handleModuleSelect`, `handleGoToModule`, redirect `useEffect`; `GlossaryPage.tsx` – terminai su `moduleId > 3` paslėpti.
- **HomePage CTA:** Kai 3/3 moduliai baigti (MVP) – CTA „Į apklausą“ (navigacija į quiz); `onGoToQuiz` prop.
- **Testai:** `mvp.gating.test.tsx` – 4 negatyvūs testai (loadModules, getModule(4), getModule(1), getModulesSync).
- **CI:** `.github/workflows/test.yml` – Build MVP step (`VITE_MVP_MODE=1 npm run build`).
- **Planas:** `docs/development/RELEASE_PLAN_MVP_MODULIAI_1_3.md`.

**2026-02-11 (Modulių aprašymai: tokenų riba + UI/UX)**

- **Modulio aprašymų kriterijai:** `.cursor/rules/module-description-criteria.mdc` – max 120 simbolių (~25 tokenų), 1–2 sakiniai. Schema `modules.schema.json` – `description` maxLength: 120.
- **Agentų seka:** `docs/development/AGENT_SEQUENCE_MODULIU_APRASYMAI_UI_UX.md` – CONTENT → DATA → CODING pipeline modulių kortelėms.
- **Turinio sutrumpinimas:** Modulių 2, 4, 5, 6 aprašymai sutrumpinti ≤120 simbolių (modules.json).
- **ModulesPage UI:** Aprašymo blokas – `min-h-[4.5rem] line-clamp-3` vienodam kortelių aukščiui grid'e.

**2026-02-11 (A-M4: Release QA gate)**

- **Content QA gate prieš release (TODO A-M4):** Naujas dokumentas `docs/development/RELEASE_QA_CHECKLIST.md` – 5 min sanity prieš release. 4 skyriai: broken links (internos + išorinės), mobile sanity (1 viewport + 1 kelionė), dark mode sanity (perjungimas + kontrastas), a11y smoke (skip link + klaviatūra). TODO.md A-M4 pažymėtas įgyvendintu.

**2026-02-11 (A-M3: Remediation uždara kilpa + „pakartok“)**

- **Remediation grįžimas (TODO A-M3):** Kai vartotojas iš Modulio 2 testo rezultatų eina į Modulio 1 skaidrę („Peržiūrėti skaidrę X“), Modulyje 1 rodomas skydelis su mygtuku **„Grįžti į testo rezultatą“** – grąžina į Modulio 2 rezultatų skaidrę. Būsena `remediationFrom` ir `onReturnToRemediation` perduodama per App → ModuleView; `handleGoToModule(moduleId, slideIndex?, fromRemediationSourceModuleId?)`.
- **„Pakartok 3 klausimus“:** Žinių žemėlapyje (Modulio 2 rezultatai) prie kiekvienos kategorijos – mygtukas **„Pakartok 3 kl.“**, atidarantis įterptą mini-quiz (3 klausimai iš tos kategorijos, MCQ/true-false). Rezultatas rodomas inline; „Grįžti į rezultatą“ uždarantis bloką. `selectQuestionsByCategory(category, n)` – `src/utils/questionPoolSelector.ts`; komponentas `RemediationRetryBlock` – `TestPracticeSlides.tsx`.
- **Kategorijos kortelės:** „Peržiūrėti skaidrę“ ir „Pakartok 3 kl.“ atskiri mygtukai kiekvienoje kategorijos kortelėje.
- **TODO.md:** A-M3 pažymėtas įgyvendintu (2026-02-11).

**2026-02-11 (A-M2: KPI + event tracking)**

- **Vienas mokymosi KPI + minimalus event tracking (TODO A-M2):** Naujas `src/utils/learningEvents.ts` – eventų tipai `module_completed`, `first_action_success` (pirmas praktinės užduoties įvykdymas). Log į localStorage (`prompt-anatomy-learning-events`), max 500 įrašų. Funkcijos: `logLearningEvent()`, `getLearningEvents()`, `exportEventsAsJson()`, `downloadEventsExport()`; KPI: `getModuleCompletedCount()`, `getFirstActionSuccessTimestamp()`. Integracija: modulio užbaigimas ir pirmas užduoties įvykdymas loguojami iš `App.tsx`. Mixpanel nenaudojamas.

**2026-02-11 (A-M1: JSON Schema + CI validacija)**

- **Turinio kontraktas (TODO A-M1):** JSON Schema validacija prieš build. Schemos: `scripts/schemas/modules.schema.json` (modules + quiz, slide type enum, content-block → content.sections[] required), `promptLibrary.schema.json`, `glossary.schema.json`. Skriptas `scripts/validate-schema.mjs` (Ajv) validuoja visus tris JSON; klaidos išvedamos, exit 1 jei nevalidu. `npm run validate:schema`, `prebuild` – build nepradeda be sėkmingos validacijos. Žr. TODO.md A-M1, ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md.

**2026-02-11 (QA: analizės verdiktas, TODO MUST/SHOULD)**

- **Analizės verdiktas:** Dokumentas `docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md` – gili analizė pagal CHANGELOG (kas lūžta pirmiausia, kas padaryta gerai, MUST/SHOULD/WANT prioritetai). Nuorodos: turinio kontraktas (JSON Schema + CI), vienas KPI + event tracking, remediation uždara kilpa, content QA gate, 6 blokų structure check, a11y automatika, Design system, Fast track optional.
- **TODO.md:** Naujas blokas „Analizės verdiktas – MUST / SHOULD“ su nuoroda į verdikto dokumentą; lentelės A-M1–A-M4 (MUST), A-S1–A-S4 (SHOULD), rekomenduojama seka. Nuorodų skyriuje pridėta eilutė į `ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md`.

**2026-02-11 (P2: Pirmos skaidrės hook ir 30 s CTA – Moduliai 1–2–3 UX strategija)**

- **Modulio 1 pirmoji skaidrė (action-intro):** Pridėtas diskomforto pažadas hero bloke – „Dauguma rašo promptus, kurie duoda nenuspėjamus rezultatus.“ CTA pakeistas į **„Pamatyti skirtumą per 30 s“** (laiko pažadas). SOT atnaujintas: `turinio_pletra.md` Skaidrė 1 v3; `modules.json` – `heroSubText`, `ctaText`. Default CTA komponente ir `ActionIntroContent` JSDoc – „Pamatyti skirtumą per 30 s“. Žr. TODO.md P2, MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md.

**2026-02-11 (PracticalTask: Redaguoti + Kopijuoti – visi moduliai, įsk. Modulį 3)**

- **Redaguoti:** Po užduoties pabaigimo – mygtukas leidžia vėl redaguoti promptą. Turinys saugomas `task-completed-${moduleId}-${slideId}`. Taikoma visiems moduliams su practicalTask (M1, M3, M4, M6).
- **Kopijuoti:** Mygtukas kopijuoja išsaugotą promptą į iškarpinę. Rodo „Nukopijuota!“ po paspaudimo.
- **Modulio 3:** 4 practice-scenario skaidrės naudoja tą patį PracticalTask – Redaguoti ir Kopijuoti veikia automatiškai.

**2026-02-11 (P3: Modulio 3 emerald cover + Modulio 2 X iš 15 – Moduliai 1–2–3 UX strategija)**

- **Modulio 3 practice-intro emerald cover (P3):** Modulio 3 Praktikos Įvade – emerald gradientas ir border (from-emerald-50, border-emerald-300), badge „4 scenarijai“, scenarijų kortelės su emerald hover/ring ir border. `TestPracticeSlides.tsx` – `PracticeIntroSlide` kai `moduleId === 3`.
- **Modulio 2 „X iš 15“ sticky mini-progress (P3):** Virš klausimų – sticky juosta „X iš 15 klausimų atsakyta“ su progress bar (brand→accent gradientas). Rodoma tik kol nerodomi rezultatai. `TestSectionSlide` – `answeredCount`, a11y `progressbar`, `aria-label`.

### Changed

**2026-02-11 (Modulio 3: 4 → 6 verslo scenarijai – AGENT_SEQUENCE_MODULIO_3_6_SCENARIJAI)**

- **6 verslo scenarijai:** Modulio 3 (Praktinis Pritaikymas) perdarytas iš 4 į 6 scenarijus pagal specifikaciją. Nauji: 1) Vadovo Strateginė Ataskaita, 2) Pardavimų Analizė ir Veiksmų Planas, 3) Marketingo Kampanijos Planas, 4) Vidaus Komunikacijos Dokumentas, 5) Personalo Sprendimų Analizė, 6) Kliento Skundo Valdymas. Pašalintas: Produkto Aprašymas (SaaS).
- **modules.json:** Skaidrės 31–36 (scenarijai), 37 (practice-summary). Kiekvienas scenarijus turi `scenario`, `practicalTask` su 6 žingsnių instrukcijomis ir template.
- **turinio_pletra.md:** § Modulis 3 atnaujintas su 6 scenarijais.
- **TestPracticeSlides.tsx:** 6 kortelės, ikonos (BarChart2, TrendingUp, Megaphone, MessageSquare, Users, AlertCircle), grid `lg:grid-cols-3`, badge „6 scenarijai“.
- **progress.ts:** Migracija `migrateModule3SlideIds` – 35→37 (summary), pašalina 34 (Produkto).
- **CONTENT_MODULIU_ATPAZINIMAS.md:** Modulis 3 = 6 scenarijai.

**2026-02-11 (Modulio 2 testo tekstai – Žinių patikrinimas)**

- **Test-intro ir test-section:** Pavadinimas „Žinių patikrinimas“, subtitle „15 atsitiktinių klausimų iš nuolat atnaujinamo banko.“ `ModuleView.tsx` – enrichedIntro, singleTestSection, modulio subtitle; `modules.json` – Modulio 2 kortelės subtitle. Pašalintas dinaminis poolSize iš atvaizduojamo teksto.

**2026-02-11 (Ikonų patobulinimas – emoji → Lucide)**

- **Emoji pakeistos Lucide ikonais:** TestIntroSlide, PracticeIntroSlide (ListChecks, Target, Lightbulb, ClipboardCheck, Briefcase, BarChart2, TrendingUp, Users, Rocket); ModulesPage (badge: BookOpen, ClipboardList, Briefcase; completion: PartyPopper); PracticalTask, HomePage (Lightbulb, Sparkles); ContentSlides, BlockSlides (FileText, Lightbulb, BarChart2, Target, Sparkles). Dekoratyviniai elementai (🎯) – Target w-20 h-20.
- **Stilius:** `strokeWidth={1.5}` – plonesnės linijos; ikonų konteineriai `rounded-lg bg-*-500/10`; vienoda vizualinė hierarchija. AppNav, ModulesPage – navigacijos ir modulio ikonai su strokeWidth.

**2026-02-11 (Action-intro turinio ir UI patobulinimai)**

- **Hero tekstas:** „Tas pats klausimas“ → „Ta pati užduotis“; „Du visiškai skirtingi DI atsakymai“ → „Du skirtingi atsakymai“.
- **Hook (Variant A):** „Problema – ne DI. Problema – tavo promptas.“ – 1. eilutė 60% opacity, 2. bold + accent (geltona); line-height 1.5, 8–12px tarpas.
- **CTA:** „Pamatyk skirtumą per 30 sekundžių!“ (su šauktuku).
- **Pašalinta:** „Vienas sakinys → chaosas. 6 blokai → veikiantis atsakymas.“ (perteklinis).
- **Palyginimas:** „Chaotiškas promptas“ → „Tuščias promptas“; „Aiškus kontekstas, struktūra, laukiamas rezultatas“ → „Aiškus kontekstas, struktūra, rezultatas“.
- **Turinys:** „Šiame mokyme“ → „Šiuose mokymuose“; **Mąstymo modeliai:** „Linijinis (CoT) vs šakotas (ToT)“ → „Grandinės (CoT) vs Medžio (ToT) mąstymo modelis“.
- **DI įrankiai:** Pridėtas DeepSeek (6 kortelė – užpildo gridą, be „balto lopo“).

### Fixed

**2026-02-11 (ContentSlides.tsx – JSX sintaksė)**

- **Build klaida:** Action-intro skaidrėje (DALIS C) po `{revealed && (` buvo du vaikiniai elementai (grid div ir `{showTools && (...)}`) be wrapper – JSX reikalauja vieno šaknies elemento. Pridėtas React fragment `<>...</>` apgaubiant abu blokus. Build ir lint – OK.

**2026-02-11 (CODE_REVIEW: duomenys – dubliuotas id, rašyba)**

- **Dubliuotas skaidrės id Modulyje 4:** Dvi skaidrės turėjo `id: 66.5` („Savitikra: Tokenai“ ir „Neigiami promptai“). Progresas būtų žymėjęs abi užbaigtas vienu paspaudimu. Antrajai skaidrei („Neigiami promptai“) priskirtas `id: 66.6` (`src/data/modules.json`).
- **Rašybos klaida (warm-up-quiz, Tokenai):** Klausimas „Kiek apytiksliai simbolių ą 1 tokeną (anglų k.)?“ pataisytas į „Kiek apytiksliai simbolių yra 1 tokenas (anglų k.)?“ (`modules.json`).
- **CODE_REVIEW_ANALYSIS.md:** Atnaujinta data 2026-02-11, pridėta §1.3 „Gili analizė 2026-02-11“, P3 lentelėje įrašyti punktai 6–7 (dubliuotas id, rašyba).

### Added

**2026-02-10 (Modulio 1 skaidrė 1 – DI įrankiai blokas)**

- **DI įrankiams daugiau dėmesio:** Vietoj mažų nuorodų (text-xs) – apačioje aiškiai išskleidžiamas blokas „DI įrankiai – kur pradėti“. Intro tekstas (`toolsIntro`), kortelės kiekvienam įrankiui: pavadinimas kaip nuoroda (ryškus, ne mažomis raidėmis), trumpas aprašymas, „Populiariausi naudojimo atvejai“ (use cases tag’ai). Įrankiai: ChatGPT, Claude, Gemini, Copilot, Grok – su nuorodomis, aprašymais ir naudojimo atvejais.
- **Duomenys:** `ActionIntroContent` išplėstas: `tools[].description?`, `tools[].useCases?`, `toolsIntro?` (`src/types/modules.ts`). `modules.json` – Modulio 1 skaidrė 1: pilni įrankių aprašymai ir use cases.
- **UI:** Mygtukas „DI įrankiai – peržiūrėti“ dešiniajame stulpelyje (Trukmė + įrankių trigger); paspaudus – pilno pločio sekcija apačioje su grid kortelėmis. SOT: `turinio_pletra.md` Skaidrė 1 – skyrius D ir techninė implementacija atnaujinti.

**2026-02-10 (Modulio 3 UI/UX – Top praktikos #8, #10, #9, #1, #6)**

- **#8 Scenarijų lentelė su progresu:** Praktikos Įvado skaidrėje (Modulis 3) – 4 scenarijų kortelės su statusu (Užbaigta / Dar nepridėta), skaitiklis „X iš 4 scenarijų užbaigta“, paspaudus kortelę – navigacija į tą skaidrę. `PracticeIntroSlide` gauna `scenarioSlides`, `progress`, `onNavigateToSlide`; `ModuleView` skaičiuoja `practiceScenarioSlides` ir perduoda į `SlideContent`.
- **#10 Konkretūs CTA:** Modulio 3 „Pirmyn“ mygtukas rodo konkretų tikslą: „Pereiti prie Scenarijaus 2/3/4“ arba „Į Praktikos santrauką“ (desktop ir mobile). `nextSlideLabel` skaičiuojamas iš kitos skaidrės tipo.
- **#9 Hint tooltip:** Prie kiekvieno žingsnio (PracticalTask) – „Užuomina“ ikonėlė (HelpCircle) su `title={step.hint}` ir `aria-label` (hover/focus rodo užuominą).
- **#1 Tabs scenarijui:** Scenarijaus aprašymas – Kontekstas | Duomenys | Apribojimai | Rezultatas kaip skirtukai (viena sekcija vienu metu), mažesnė kognityvinė apkrova. `PracticeScenarioSlide` – `useState` activeTab, role="tablist"/tab/tabpanel, a11y.
- **#6 6 blokų checklist:** Virš PracticalTask textarea – 6 badge (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED); užpildyti pažymimi CheckCircle ir emerald spalva pagal to, ar atsakyme yra atitinkamas žodis. Rodo tik kai užduotis turi 6 žingsnius (6 blokų užduotys).

**2026-02-10 (Modulio 1 ir 2 vizualinio stiliaus suvienodinimas)**

- **TestIntroSlide (Moduliai 2 ir 5):** „Testo struktūra“ ir „Tikslas“ kortelės perstylizuotos pagal Modulio 1 blokų sistemą: brand blokas (border-l-4 border-brand-500, bg-brand-50) ir accent blokas (border-l-4 border-accent-500, bg-accent-50). Žr. `docs/MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md`.
- **Klausimų kortelės (Modulio 2 testas):** Prieš rezultatus – švelnus brand fonas (bg-brand-50/50, border-brand-200) vietoj baltos/pilkos; po rezultatų – emerald/rose lieka. Taikoma visiems 5 klausimų tipams (MCQ, True/False, Scenario, Matching, Ordering).
- **CTA „Patikrinti atsakymus“:** Gradientas (from-brand-500 to-accent-500) ir shadow, vizualiai atitinka Modulio 1 CTA stilių.
- **Skyriklis:** Plonas gradientinis skyriklis virš mygtuko „Patikrinti atsakymus“.
- **Tailwind safelist:** Pridėta bg-brand-50/50, dark:bg-brand-900/10.

**2026-02-10 (Modulio 2 F3-1 – confidence indicator)**

- **Pasitikėjimo pasirinkimas (F3-1):** Prieš atsakant į kiekvieną Modulio 2 testo klausimą rodomas metakognityvinis klausimas „Kaip esate tikri?" su trimis pasirinkimais: Tikras / Spėju / Nežinau. Atsakymo mygtukai įjungiami tik pasirinkus pasitikėjimą. Rezultatų ekrane prie kiekvieno klausimo rodoma „Pasitikėjimas: …". Naujas komponentas `ConfidenceSelector`, atnaujinti visi 5 klausimų tipai (MCQ, True/False, Matching, Ordering, Scenario).

**2026-02-10 (Modulio 2 F2-3 – remediation deep links)**

- **Remediation deep links:** Mygtukai „Peržiūrėti skaidrę X" Modulio 2 rezultatų ekrane dabar atidaro Modulį 1 tiesiai toje skaidrėje (be „Tęsti nuo X skaidrės?" dialogo). Įgyvendinta: `onGoToModule(moduleId, slideIndex?)`, App būsena `initialSlideIndex`, ModuleView prop `initialSlideIndex` ir `useSlideNavigation` parametras `initialSlideIndex`.

**2026-02-09 (v2.5.0 – Modulio 2 interaktyvaus testo pertvarka: 5 klausimų tipai)**

Remiantis 2025-2026 e-learning geriausių praktikų tyrimu (Retrieval Practice, Bloom taksonomija, Gamification, Adaptive Scaffolding):

- **5 klausimų tipai:** MCQ (standartinis), True/False (tiesa/netiesa), Matching (porų sujungimas), Ordering (rikiavimas), Scenario-based (verslo scenarijus) – vietoj vienodo MCQ formato.
- **15 klausimų** (buvo 12): padidinta įvairovė, kiekvienas klausimas turi Bloom lygį (1-4), kategoriją (meta/input/output/...) ir nuorodą į Modulio 1 skaidrę.
- **Progressive Hints sistema:** kiekvienas klausimas turi užuominą. Neteisingai atsakius – mygtukas „Rodyti užuominą". Užuomina sumažina balą (0.5 vietoj 1 taško).
- **Gamifikacija:** Streak indikatorius (3+ teisingi iš eilės), „Puikiai!" ženklelis (visas testas teisingai), per-sekcijų animacijos.
- **Per-bloko žinių žemėlapis:** rezultatų ekrane rodomas 8 kategorijų žemėlapis su nuorodomis į konkrečias Modulio 1 skaidres (remediation).
- **Nauji komponentai:** `McqQuestion`, `TrueFalseQuestion`, `MatchingQuestion`, `OrderingQuestion`, `ScenarioQuestion` (`src/components/slides/shared/questions/`).
- **Tipų sistema:** `QuestionType = 'mcq' | 'matching' | 'ordering' | 'true-false' | 'scenario'`; `TestQuestion` išplėstas su `type?`, `hint?`, `bloomLevel?`, `relatedSlideId?`, `category?`, `matchPairs?`, `correctOrder?`, `items?`, `isTrue?`, `scenarioContext?`.
- **Backward compatible:** Modulio 5 ir WarmUpQuiz klausimai veikia be pakeitimų (klausimai be `type` = MCQ).
- **A11y:** visi komponentai turi aria-label, dark mode, min 44px touch targets.

### Fixed

**2026-02-09 (Mobile UI responsiveness + UI/UX konsistencija)**

- **P1 – 7 neresponsyvių gridų taisymas (mobile):** Visos `grid-cols-2` vietos be mobilaus breakpoint pakeistos į `grid-cols-1 sm:grid-cols-2` arba `grid-cols-1 md:grid-cols-2`. Paveikti komponentai: ActionIntroSlide outcomes/topics (ContentSlides.tsx:824), ComparisonSlide (ContentSlides.tsx:1794), SummarySlide learned/next (ContentSlides.tsx:2315), OutputBlockSlide (BlockSlides.tsx:139), TestIntroSlide (TestPracticeSlides.tsx:20,56), TestResultsSlide (TestPracticeSlides.tsx:311). Mobiliajame – vienas stulpelis, nuo `sm:`/`md:` – du stulpeliai.
- **T1 – Blokų antraščių hierarchija standartizuota:** 6 vidinių H3 heading'ų (`text-xl` → `text-lg`) spalvotų blokų viduje: ModuleIntroSlide „Po šio modulio galėsite" ir „Kodėl konteksto inžinerija?", IntroSlide „Apie šį mokymą" ir „Kokius DI įrankius naudoti?", WarmUpQuizSlide „Pasiruošimo savitikra baigta", PracticeIntroSlide „Projekto tikslai". Pagrindiniai slide pavadinimai lieka `text-xl`.
- **T2 – Dark mode subtitle kontrastas pagerintas:** Visos `text-gray-600 dark:text-gray-300` instancijos pakeistos į `dark:text-gray-200` (ryškesnis kontrastas tamsoje). Paveikti: HomePage (hero subtitle, tag badges), PromptLibrary (copy button), HallucinationRatesDashboard (rate label).

### Added

**2026-02-09 (v2.4.2 – DefinitionsSlide: veiksmo modelis)**

- **DefinitionsSlide perstruktūruotas:** Vietoj pasyvaus teksto -- interaktyvus click-to-reveal modelis. Tamsus provokuojantis hook ("Kiekvieną kartą rašydami DI -- jūs rašote promptą. Klausimas: ar darote tai struktūriškai?"). Dvi kortelės (Promptas + Promptų Inžinerija) -- paspaudus atskleidžia apibrėžimus su animacija. 3 dedamosios (Specifikacija, Struktūra, Iteracija) rodomos tik po Inžinerijos atskleidimo su slide-in animacija. Key Insight banner su bounce-in efektu pasirodo tik kai abu terminai atskleisti. Šaltiniai collapsible.

**2026-02-09 (v2.4.1 – ActionIntroSlide v2: provokacija + emocinis hook)**

Remiantis vartotojo kelionės analize (`vartotojo_kelione.md`): emocinis hook buvo 5/10, CTA per švelnus, veiksmas per lėtas (30s vs tikslas 5-7s).

- **ActionIntroSlide v2:** Visiškai perrašyta pirmos skaidrės semantika. Hero blokas: provokuojanti antraštė ("Tas pats klausimas. Du visiškai skirtingi DI atsakymai.") + konflikto eilutė ("Skirtumas – ne modelis. Skirtumas – prompto struktūra.") + CTA mygtukas hero viduje ("Parodyk skirtumą") su pulse animacija. Tamsus fonas (gray-900) vietoj brand gradiento – didesnis vizualinis kontrastas.
- **CTA hero viduje:** Mygtukas perkeltas iš atskiros micro-action sekcijos tiesiai į hero bloką. Pirmas veiksmas per 5-7 sek (buvo ~30 sek).
- **Side-by-side reveal:** Po CTA paspaudimo animuotai atsiskleidžia blogas vs geras promptas. Geresni anotaciniai tekstai: "DI spėlioja" vs "Aiškus kontekstas, struktūra, laukiamas rezultatas."
- **Nauji TypeScript laukai:** `heroSubText?: string` (konflikto eilutė), `ctaText?: string` (konfigūruojamas CTA) – `ActionIntroContent` interface.
- **Outcomes perrašyti:** Konkretesni, veiksmingesni ("Rašyti promptus, kurie duoda nuspėjamą rezultatą" vietoj "Struktūruoti promptus profesionaliai").

**2026-02-09 (v2.4.0 – Vartotojų testų atsakas: UX patobulinimai)**

Remiantis vartotojų testais su 2 dalyviais (Moduliai 1-3): `20260209_user_tests.md`

- **Pirma veiksmo skaidrė (`action-intro` v1):** Hero blokas (2x statistika) + micro-action (nestruktūruotas vs struktūruotas promptas su reveal mygtuku) + sutrumpintas kontekstas su collapsible įrankiais. Naujas `ActionIntroSlide` komponentas, `ActionIntroContent` TypeScript tipas.
- **Resume / State Save:** Slide pozicija persisted localStorage (`prompt-anatomy-slide-pos`). Naujas „Sveiki sugrįžę!" resume prompt su „Tęsti" / „Nuo pradžios" mygtukais. `useSlideNavigation` grąžina `savedSlidePosition`.
- **Praktinės užduoties apsauga:** `beforeunload` perspėjimas kai vartotojas turi neišsaugotą darbą. Persistent „Juodraštis išsaugotas" indikatorius `PracticalTask` komponente.
- **Grupuotas progreso indikatorius:** `SlideGroupProgressBar` su etapų pavadinimais (Pagrindai / Šablonas / 6 Blokai / Santrauka). Spalvų kodavimas pagal aktyvią/praėjusią/būsimą grupę.
- **Kognityvinės apkrovos mažinimas:** Supaprastinti Modulio 1 skaidrių 2-3 tekstai (definitions, workflow intro).

### Changed

**2026-02-09 (Modulio 4 skaidrė 4.0 – veiksmo modelis + 4.0-praktika optional)**

- **Skaidrė 39 (4.0 „DI Visata: kaip viskas susiję"):** Pritaikytas veiksmo skaidrės modelis (Trumpai → Daryk dabar → Kopijuojamas promptas → Patikra → Nori suprasti detaliau?). comparisonImages lieka viršuje. practicalTask perkeltas į section su `copyable`. Esminė žinutė + Terminai – collapsible sekcijoje. Informacija neprarasta, tik pertvarkyta.
- **Skaidrė 39.5 (4.0-praktika „Praktika: DI visata"):** Subtitle pakeistas į „Neprivaloma: ..."; pridėta pirma sekcija su aiškiu „Ši praktika neprivaloma" framing.
- **SOT atnaujinta:** `docs/turinio_pletra_moduliai_4_5_6.md` – 4.0 ir 4.0-praktika skyriai atnaujinti pagal naują struktūrą.
- **Planas:** `.cursor/plans/modulio_4.0_veiksmo_skaidrė_+_praktika_optional_9b87251a.plan.md` – agentų seka (CONTENT → DATA → CODING → CODE_REVIEW → QA).

### Fixed

**2026-02-09**

- **ContentSlides.tsx:** Pridėtas trūkstamas `useEffect` importas
- **ContentSlides.tsx:** Apsauga nuo trūkstamo `content.terms` (GlossarySlide) ir `content.learningOutcomes` (ModuleIntroSlide) – `?? []` prieš .map (gili analizė: `docs/development/CODE_REVIEW_2026-02-09_ANALIZE_PALEIDIMAS.md`)

### Changed

**2026-02-09 (Modulio 1 Advanced skaidrės – veiksmo intro)**

- **Variantas B įgyvendintas:** Skaidrėms 11 (Advanced Parameters) ir 18 (Advanced Parameters II) pridėtas viršutinis veiksmo blokas (Trumpai, Daryk dabar, Patikra) iš JSON. Tipai: `AdvancedVeiksmoIntro`, `AdvancedVeiksmoIntroContent` (`modules.ts`). `content.veiksmoIntro` skaidrėms 11 ir 18 – `modules.json`. `BlockSlides.tsx`: `VeiksmoIntroBlock`, abu Advanced komponentai priima `slide` ir rodo intro viršuje; esamas turinys (lentelės, pavyzdžiai, details) nepakeistas. Analizė: `docs/MODULIO_1_ADVANCED_SKAIDRIU_VEIKSMO_PRAKTIKOS_ANALIZE.md`.

**2026-02-09 (Dar 3 skaidrės – veiksmo modelis: 49, 65.5, 58)**

- **Planavimas:** `docs/development/PLAN_AGENTAI_3_SKAIDRES_VEIKSMAS.md` – parinktos skaidrės 49 (5 principai), 65.5 (Bridžinė praktika), 58 (RAG); agentų seka CONTENT → DATA → CODE_REVIEW → QA.
- **Skaidrės 49, 65.5, 58** perdarytos pagal 5 blokų veiksmo modelį (Trumpai → Daryk dabar → Kopijuojamas promptas → Patikra → 🔽 Nori suprasti detaliau?). 49: vertinimo promptas copyable, 5 principai + Kodėl svarbu + Toliau – optional. 65.5: 2 promptų šablonas (RAG + Deep research), 3 žingsniai + Savirefleksija – optional. 58: RAG mini-šablonas (kontekstas + klausimas), teorija (Kas yra RAG, Nauda, Kaip veikia, tokenai, Pagalvok apie darbą) – optional. Esmė išlaikyta.

**2026-02-09 (Skaidrės 54.5, 55, 43 – tobulinimas pagal agentų seką)**

- **Agentų seka:** Sukurtas `docs/development/AGENT_SEQUENCE_SKAIDRES_SYSTEM_PROCESO_STRUKTURUOTAS.md` – CONTENT_AGENT → DATA_AGENT → CODE_REVIEW → QA pipeline trijų skaidrių turiniui tobulinti be esmės keitimo.
- **System prompt (54.5), Proceso prompt (55), Struktūruotas procesas (43):** Vienodinta Quality check formuluotė („Jei bent 2 „ne“ → grįžk prie…“), optional antraštė „🔽 Nori suprasti detaliau? (optional)“, CTA „Kopijuoti promptą (žemiau)“ skaidrėje 55, taisoma „Pradinis užklausas“ → „Pradinis užklausa“ (43), „ką daryti pirmu žingsniu“ visur. Esmė nekeista.

**2026-02-08 (Modulio 4 visapusė analizė ir tobulinimas – 5 fazių planas)**

- **FAZĖ 1 – Struktūra ir eiliškumas:** `module-intro` (id 40) perkeltas iš 18-os pozicijos į 1-ą – mokinys mato mokymosi tikslus iš karto. Pridėtos 3 naujos `section-break` skaidrės (id 40.5, 52.5 atnaujinta, 65.8) – navigaciniai orientyrai po kiekvienos loginės dalies. 6 skaidrės pažymėtos `optional: true` (id 46, 46.5, 47, 51, 52, 61). `Slide` tipas papildytas `optional?: boolean` lauku.
- **FAZĖ 2 – Pedagoginis sustiprinimas:** 3 savitikros (id 63.5, 65.7, 66.5) išplėstos nuo 2 iki 5 klausimų. Pridėta nauja savitikra po haliucinacijų (id 68.5 – 4 klausimai: manipuliacijos, injection vs jailbreak, haliucinacijos, jų mažinimas). 2 naujos „Pataisyk šį promptą" skaidrės (id 49.5 po 5 principų, id 67.3 po manipuliacijų). Bridžinė praktika (id 65.5) išplėsta iki 6 sekcijų su 3 žingsnių struktūra ir savirefleksija.
- **FAZĖ 3 – UI/UX tobulinimai:** Desktop progress indikatorius „Skaidrė X/Y" header zonoje. „Papildoma" badge optional skaidrėms (amber spalvos, tamsaus režimo palaikymas). Per-slide `ErrorBoundary` su graceful fallback (galimybė pereiti prie kitos skaidrės, jei viena sugenda).
- **FAZĖ 4 – Silpniausių skaidrių turinio kokybės pakėlimas:** id 41 (di-modalities) – patobulinti intro/takeaway su prioritetais; id 53 (Pagrindiniai įrankiai) – pridėta 5×4 palyginimo lentelė su kainomis ir stiprybėmis; id 66 (Tokenų ekonomika) – pridėta lentelė su modelių konteksto langais, konkretūs pavyzdžiai (A4 = 500 tokenų); id 56, 57 (Schemos 3, 4) – pridėti praktiniai taikymo pavyzdžiai.

**2026-02-08 (Promptų inžinerijos skaidrių perkėlimas ir tobulinimas)**

- **Modulio 4 skaidrių eilė – promptų inžinerija prieš GPT kūrimą:** 3 skaidrės (System prompt vs Master prompt, Proceso prompt, Metodinis vs Agentinis) perkeltos prieš Custom GPT kūrimo procesą (id 46). Nauja eilė: 4 dedamosios → System vs Master → Proceso prompt → Metodinis vs Agentinis → Custom GPT. Pedagoginė logika: pirmiausia sąvokos, tada taikymas.
- **Skaidrė 54.5 (System prompt vs Master prompt) – visiškai perrašyta:** 5 plain sections → 7 sections su vizualine hierarchija. Pridėta: 5×3 palyginimo lentelė (System vs Master), blockVariant (brand/terms/accent), 2 copyable blokai (Prieš vs Po), practicalTask (Master Prompt generatorius – DI užduoda 10 klausimų). SOT atitiktis.
- **Skaidrė 55 (Proceso prompt) – perrašyta, pašalintas „Optional:":** Pavadinimas „Proceso prompt ir workflow sudarymas" (ne Optional). Pridėta: „Geras vs blogas" palyginimo lentelė (2×4), blockVariant brand kiekvienam šablonui, situacijos kontekstas prie kiekvieno šablono, accent „Esmė" blokas. copyable: boolean → string (teisingas tipas).
- **Skaidrė 54 (Metodinis vs Agentinis) – patobulinta:** 4 → 6 sections. Pridėta: 5×3 palyginimo lentelė, accent „Esmė" blokas su key insight (abu tipai kartu), terms „Kaip atskirti?" su 4 patikros klausimais. Copyable promptai patobulinti (formatuoti, su kalba).

**2026-02-08 (Modulio 4 tobulinimo planas)**

- **Diagnostinis quiz feedback:** 3 warm-up-quiz (id 63.5, 65.7, 66.5) atsakymai perrasyti diagnostiniu tonu ("Cia stipru", "Puiku", "Jei supainiojote – prisiminkite") vietoj neutralaus "Teisinga/Neteisinga".
- **UI heading hierarchy:** ContentBlockSlide sekciju antrastes (h4) pakeistos is `font-bold` i `font-semibold` – aiski vizualine skirtis nuo bloku antrasciu (h3 `font-bold text-xl`).
- **Dark mode subtitle kontrastas:** 3 vietos su `dark:text-gray-500` pakeistos i `dark:text-gray-400` (ContentSlides – comparisonImages source, journal); PracticalTask Chevron ikonos – pridetas `dark:text-gray-400`.
- **Tap highlight:** `summary` elementai itraukti i mobile touch target taisykles; CSS details/summary disclosure marker paslepstas.

### Added

**2026-02-08 (Modulio 4 tobulinimo planas)**

- **Skaidre 55 (Proceso prompt) – pilnas turinys:** 6 sekcijos: kas yra proceso promptas, geras vs blogas pavyzdys, 3 copyable sablonai (strateginis, projektu valdymo, operaciju tobulinimo), accent takeaway.
- **Asmeninio konteksto miniuzduotys:** Skaidre 58 (RAG) – accent blokas "Pagalvokite apie savo darba" (kokie dokumentai kartojasi, kaip naudoti RAG). Skaidre 67 (Manipuliacijos) – accent blokas "Pagalvokite apie savo patirti" (situacija su salisku atsakymu).
- **"Pataisyk prompta" praktika:** Skaidre 67 – 2 saliski promptai su problemomis + pataisyti neutralus variantai (verslo manipuliacija, leading question).
- **Progressive disclosure (AdvancedParameters2Slide):** 4 parametru sekcijos (Max Tokens, Top-p, Frequency Penalty, Presence Penalty) apvilktos `<details>/<summary>` – Max Tokens open by default, kiti collapsible. CSS stiliai details/summary.
- **Bug fix:** TestPracticeSlides.tsx – pridetas trukstamas `useEffect` importas.

**2026-02-08**

- **Skaidrė 4.1a3 (RL/RLHF) – antraščių valymas ir žodyno sinchronas:** Pašalintos vidinės pastabos iš antraščių: "(be žmonių)", "(privaloma palyginimo dalis)", "(su žmonėmis)" – distinkcijos perkeltos į body tekstą kaip bold teiginiai. Diagramos pavadinimas "RL struktūra (labai svarbu parodyti)" → "RL proceso struktūra". Žodyne (glossary.json) pridėti 4 nauji terminai: RL, Paskatinamasis mokymas, Atlygis (reward), Agentas (DI kontekste); pataisytas RLHF apibrėžimas ("with" → "from Human Feedback").

### Added

**2026-02-08**

- **Skaidrės 4.1a5, 4.1a5-style, 4.1a5-practice – pilnas turinys pagal SOT:** Skaidrė 50 (Parametrų laukas promptų inžinieriui) – 8 sekcijų: brand įvadas, 6 parametrų grupės (sisteminiai, metodiniai, turinio, manipuliacijų, kokybiniai, techniniai), accent takeaway. Skaidrė 51 (Stilių naudojimas) – 12 sekcijų: 5 stiliaus dimensijos (tonas, stilius, auditorija, kalba, struktūra), accent „kaip nurodyti", 4 copyable pavyzdžiai, terms ryšys su 6 blokais. Skaidrė 52 (Praktinės užduotys) – 13 sekcijų: 3 stilių promptai, 3 el. laiškų promptai, HTML kūrimo 5 blokų lentelė + copyable pilnas promptas, terms ryšys su Moduliu 1. SOT sinchronizuotas.
- **Skaidrė 4.1a3 (RL/RLHF) – verslo situacijos ir promptų pavyzdžiai:** 2 verslo situacijos (RL: el. parduotuvės kainų optimizavimas; RLHF: klientų el. laiškų rašymas) pridėtos į esamus 1️⃣ ir 2️⃣ blokus. 2 nauji blokai su `copyable` promptais: 4️⃣ RL prompto pavyzdys (3 variantai + savęs atranka pagal KPI), 5️⃣ RLHF prompto pavyzdys (3 variantai + žmogaus feedback + galutinis laiškas). Sekcijos pernumeruotos 1–7. SOT (`turinio_pletra_moduliai_4_5_6.md`) sinchronizuotas.
- **Promptų porų atvaizdavimas:** Dokumentas `docs/development/PROMPTU_PORU_ATVAIZDAVIMAS.md` (checklist, referencinė skaidrė id 54). Skaidrė 54 (Metodinis vs Agentinis) – 4 sekcijos, copyable pavyzdžiai, blokas „Ką analizuoti“ (terms).
- **Skaidrė 4.1a3 (RL/RLHF):** Pilnas turinys (5 blokai, lentelė RL vs RLHF), content-block lentelės palaikymas (`ContentBlockTable`, semantinė `<table>`); interaktyvi RL proceso diagrama (`RlProcessBlock`, clickable žingsniai, „Tu esi čia“, SCHEME_AGENT 3.6). Agentų seka `SLIDE_4_1a3_RL_RLHF_AGENT_SEQUENCE.md`.
- **Skaidrė 4.1a4 (5 principai):** Outcome-driven skaidrė (5 principai veiksmo forma, „Kodėl tai svarbu?“, practicalTask vertinimo promptas), user journey (subtitle, „kur paleisti“, sekcija „Toliau“). Prompt library – „Prompto kokybės patikrinimas“. Dokumentacija: `USER_JOURNEY_4_1a4_5_PRINCIPAI.md`, `AGENT_SEQUENCE_PATARIMAI_INZINIERIUI.md`.
- **Refaktoringo analizė:** `docs/development/CODEBASE_REFACTORING_ANALYSIS.md` – eilučių skaičiai, MUST/SHOULD prioritetai; TODO skyrius „Refaktoringas ir konsolidacija“.
- **SlideContent apsauga:** Fallback UI ir logWarning, kai trūksta `content` (module-intro, content-block, section-break, warm-up-quiz, glossary). Išplėsta `fallbackMissingContent()` 11 tipams (definitions, di-modalities, pie-chart, ai-workflow, prompt-types, prompt-techniques, workflow-summary, prompt-template, transition, summary, infographic).
- **ContentSlides apsaugos:** `?? []` prieš `.map()` ten, kur JSON gali neturėti masyvo (sections, table.headers/rows, questions, aspects, cards/stats/insights) – išvengiama „cannot read map of undefined“.

**2026-02-07**

- **Modulio 4 – DI prezentacijos workflow (skaidrė 47):** 5 žingsnių diagrama (Tikslas → … → Poliravimas), `DiPrezentacijosWorkflowBlock` (clickable, „Tu esi čia“, žingsnių mygtukai), atskiri blokai workflow + įrankiai (6 kortelės su nuorodomis). SCHEME_AGENT 3.6 interaktyvumo UX. Prezentacijos artefaktas/atsisiuntimas – fiksuota (funkcija ateityje); TODO/ROADMAP.
- **Skaidrė „4 dedamosios“:** UI/UX T1–T3 (accent „Esmė“, workflow tooltips, „Praktiškai:“ paryškinimas); `ContentBlockWorkflowImage.tooltip`.
- **Modulio 4 DI visata ir pradžia:** EnlargeableImage (lightbox), skaidrė „Praktika: DI visata“ (id 39.5), recognitionExercise.explanations, žodynėlio raktažodžiai, „4 dedamosios“ workflowImages (2 .png), analizės dokumentai.
- **Modulio 4 SHOULD S1–S6:** S1 kontekstas/tokenai (id 58); S4 bridžinė praktika (id 65.5); S5 „Optional:“ prie 6 skaidrių; S6 `shortTitle` (6 skaidrėms). PLAN_MODULIO_4_SHOULD_S1_S6.md, MODULIO_4_SKAIDRIU_EILES atnaujinta.
- **Modulio 4 S3 (CoVe):** SOT 4.6 „Verifikacijos grandinė (CoVe)“; skaidrė 68 – sekcija „Giluminiam: CoVe“.
- **Modulio 4 MUST M4:** Skaidrė „Saugumas: prompt injection ir jailbreak“ (id 67.5); SOT 4.5.
- **Content-driven skaidrės (P2):** intro, hierarchy (id 4), comparison (id 13), summary (id 14), practice-summary (id 35) – turinys iš JSON, default reikšmės.
- **4.6 CopyButton (M3):** `ContentBlockSection.copyable` – skaidrė 68 anti-haliucinacinis šablonas ir 5 taisyklės.
- **SCHEME_AGENT:** `docs/development/SCHEME_AGENT.md` – schemų agentas, geriausios praktikos (geometrija, rodyklės); prijungtas prie orkestratoriaus.
- **Custom GPT proceso diagrama:** Interaktyvus stepperis (1 žingsnis = 1 ekranas), clickable diagrama, žingsnių mygtukai, patarimai, copyable šablonas, refleksija.
- **Dokumentacija:** MODULIO_4_TURINIO_ANALIZE.md, MODULIO_4_SKAIDRIU_EILES.md, PLAN_AGENTAI_DARBAI.md; README (SOT 4–6, treniruoklis); ROADMAP (Pedagoginės įžvalgos).

**Anksčiau (konfigūracija ir docs)**

- ESLint, Prettier, EditorConfig, Cursor rules (`.cursorrules`), dokumentacijos reorganizacija (`docs/`), CHANGELOG formatas, code evaluation dokumentas.

### Changed

**2026-02-08**

- **RL proceso diagrama (SCHEME_AGENT):** Aiškus ciklas – pagrindinė seka (Agentas → Aplinka → Veiksmas → Atlygis) + atskira solid grįžtamoji rodyklė (Atlygis → Agentas), be punktyro. Rodyklės su 12px tarpu nuo box kraštų; „Atlygis“ vizualiai akcentuotas (accent gradientas, shadow). Mintinis modelis po schema: viena eilutė „Padarau → gaunu rezultatą → koreguoju elgesį“ (be kabučių) – `RlProcessBlock`. Responsive: desktop viena eilė, mobile 2×2 grid (`useIsCompact()`). **UI/UX perstatymas:** 2 rodyklių tipai (Forward #7B8794 solid 3px vs Feedback ACCENT dashed); feedback kilpa su rankiniu polygon arrowhead (ne SVG marker), start circle, rounded corners (Q bezier R=16); forward etiketės virš rodyklių su punktyriniu connector ir TEXT_DARK kontrastu; viewbox 280→330, ARROW_GAP_FWD 12→5; SCHEME_AGENT doc §3.7 horizontalaus layout pamokos.
- **Skaidrė 4.1a3 (RL/RLHF) – pateikimas:** blockVariant (brand/terms/accent) sekcijoms; lentelės `aria-label` „Palyginimo lentelė: RL ir RLHF“; `SLIDE_4_1a3_RL_RLHF_AGENT_SEQUENCE.md` §3 (pateikimo tobulinimo seka, checklist).
- **Modulio 4 skaidrių eilė:** 5 principai (4.1a4) prieš RL/RLHF (4.1a3) – `modules.json` 47→49→48→50; SOT, MODULIO_4_SKAIDRIU_EILES, TODO sinchronizuoti.
- **progress.ts:** Pastaba apie trupmeninius `slide.id` (0.5, 13.5); dokumentacija completedTasks.
- **CODE_REVIEW_ANALYSIS.md:** Skyrius 1.2 – SlideContent fallback, progress.

**2026-02-07**

- **Skaidrė 47 (prezentacijos):** Workflow ir įrankiai atskiri blokai; clickable diagrama, „Tu esi čia“, žingsnių mygtukai; SCHEME_AGENT 3.6.
- **Skaidrė „4 dedamosios“:** blockVariant accent (ne brand); workflow tooltips; „Praktiškai:“ accent.
- **UI/UX (Modulio 4):** Įvado accent „Kodėl konteksto inžinerija?“; content-block default/terms; **bold** → font-bold; H3 text-xl; subtitle dark; mobilus tap highlight.
- **RAG (4.2) ir 4.6 (M2/M3):** SOT ir modules.json – „Nežinau“, citavimas; 4.6 copyable blokai.
- **Vartotojo testavimas:** Quiz (2 mod.) – grįžus rodomas paaiškinimas/teisingas atsakymas; Modulio 3 – „Pirmyn“ blokuojamas kol neįvykdyta praktinė užduotis.
- **Orkestratorius:** SCHEME_AGENT į routerį; QA_AGENT leidžiamas (`.cursor/rules/agent-orchestrator.mdc`, AGENT_ORCHESTRATOR.md).
- **Custom GPT diagrama:** Rodyklės kraštas į kraštą, proporcingi antgaliai; Quiz scroll į pirmą klaidingą atsakymą.
- **SOT Modulio 4:** 4.7 „Ryšiai tarp temų“; 4.2 „Kontekstas ir tokenai“; nuoroda į MODULIO_4_SKAIDRIU_EILES.
- **package.json:** author, repository, bugs, homepage.
- **Dokumentacija:** Nuorodos `.cursorrules`, `project.md`; root – tik aktualūs dokumentai.

### Removed

- Originalūs dokumentacijos failai root kataloge (perkelti į `docs/`).

---

## [2.1.0] - 2026-02-02

### Added

- Error Boundary komponentas su retry funkcija
- Loading states su LoadingSpinner komponentu
- Lazy loading visiems dideliems komponentams
- TypeScript tipai centralizuoti `src/types/modules.ts`
- localStorage validacija su versijavimu (v1/v2)
- Automatinė migracija senų duomenų formatui
- Testų infrastruktūra (Vitest + React Testing Library)
- 21 unit testas progress.ts (100% coverage)
- 6 integration testai
- CI workflow (GitHub Actions)
- Klaidų logavimas su context (`src/utils/logger.ts`)

### Changed

- SlideContent.tsx refaktorintas į mažesnius komponentus
- CopyButton fix – individualus state kiekvienam mygtukui
- Tailwind safelist – dinaminės spalvų klasės veikia produkcijoje

---

## [2.0.0] - 2026-02

### Added

- Skaidrė "Ką Reiškia Promptas?" su apibrėžimais
- Skaidrė "Pagrindiniai Promptų Tipai" (sisteminiai, kontekstiniai, vaidmens)
- Promptų biblioteka su instrukcijomis
- 13 skaidrių vietoj 11 pirmame modulyje

### Changed

- AI → DI (Dirbtinis Intelektas)
- Pataisyta lietuvių kalbos gramatika
- Atnaujinta spalvų schema (Navy/Gold)

---

## [1.0.0] - 2024

### Added

- Pradinė versija su 3 moduliais
- Progreso sekimas (localStorage)
- Automatinis juodraščių išsaugojimas
- Tamsusis/šviesusis režimas
- Responsive dizainas
- Klaviatūros navigacija
- Šventimo animacijos (confetti)
