# CODING_AGENT: Geriausios praktikos – žinių patikrinimo moduliams

> **Paskirtis:** Vienas šaltinis geriausioms praktikoms, kai kuriama ar keičiama **žinių patikrinimo** (testo) logika ir UI. Referencas: Moduliai 2 ir 5, warm-up-quiz. Naudoti ateityje, kad nauji pakeitimai būtų suderinti su esama sistema.

---

## 1. Kas laikomas „žinių patikrinimo moduliu“

- **Modulis 2** – Žinių Patikrinimas (15 klausimų iš pool, 5 tipai, confidence, remediation).
- **Modulis 5** – Mini testas po Modulio 4 (savo struktūra, bet ta pati TestIntroSlide / TestSectionSlide / TestResultsSlide logika).
- **warm-up-quiz** – savitikros skaidrės Modulyje 4 (WarmUpQuizSlide, kitas komponentas, bet panaši semantika).

Šiame dokumente pagrindinis pavyzdys – **Modulio 2**; Modulio 5 ir kiti testai turi laikytis tų pačių UI/UX ir būsenos principų, kur įmanoma.

---

## 2. Skaidrių tipai ir failai

| Tipas | Skaidrė | Komponentas | Failas |
|-------|---------|-------------|--------|
| test-intro | Įvadas į testą | TestIntroSlide | TestPracticeSlides.tsx |
| test-section | Klausimų sąrašas + CTA | TestSectionSlide | TestPracticeSlides.tsx |
| test-results | Rezultatai, radar, remediation | TestResultsSlide | TestPracticeSlides.tsx |

- **SlideContent.tsx** – maršrutizuoja pagal `slide.type` į atitinkamą komponentą.
- Klausimų **atsakymo** komponentai – `src/components/slides/shared/questions/` (McqQuestion, TrueFalseQuestion, MatchingQuestion, OrderingQuestion, ScenarioQuestion, ConfidenceSelector).

---

## 3. Būsena ir duomenų srautas

### 3.1 TestSectionSlide būsena

- **answers** – `Record<string, number>` (klausimo id → pasirinktas variantas).
- **confidence** – `Record<string, ConfidenceLevel>` (F3-1); **būtina prieš „Patikrinti“** – `allAnswered` reikalauja ir atsakymo, ir pasitikėjimo.
- **hints** – `Set<string>` (kuriems klausimams parodyta užuomina; įtakoja balą).
- **completedSpecial** / **specialScores** – matching/ordering užbaigimas ir balas (0–1).
- **lastCategoryScores** (modulio lygio kintamasis) – užpildomas po „Patikrinti“, naudojamas TestResultsSlide (radar, remediation).

### 3.2 Rezultatų skaičiavimas

- Bendas balas: teisingi atsakymai + specialScores (matching/ordering kaip trupmena); už užuominą ir teisingą atsakymą – nuolaida 0.5.
- **lastCategoryScores** – grupuoti pagal `question.category`, skaičiuoti `correct/total` ir `percentage`; perduoti į TestResultsSlide (radar, CategoryBreakdownWithLinks).

### 3.3 Klausimų šaltinis (Modulio 2)

- **Question pool:** `src/data/questionPool.ts` (QUESTION_POOL, POOL_CATEGORIES).
- **Parinkimas:** `src/utils/questionPoolSelector.ts` – `selectQuestions()` grąžina 15 klausimų (balansas kategorijų ir tipų).
- ModuleView (moduleId === 2) perrašo modulio skaidres: test-intro + viena test-section su `poolRef.current` + test-results.

---

## 4. UI/UX geriausios praktikos (įgyvendintos)

### 4.1 TestIntroSlide – vizualinė hierarchija

- **Hero blokas:** gradientas (from-violet-50 to-brand-50) ir border (violet-200) – išlaikyti.
- **Informacinės kortelės:** ne baltos/pilkos – naudoti **blokų sistemą** kaip Modulyje 1:
  - Pirmoji kortelė (pvz. „Testo struktūra“): **brand blokas** – `bg-brand-50 dark:bg-brand-900/20`, `border-l-4 border-brand-500`, `border border-brand-200 dark:border-brand-800`; antraštė `text-brand-900 dark:text-brand-100`.
  - Antroji kortelė (pvz. „Tikslas“): **accent blokas** – `bg-accent-50 dark:bg-accent-900/20`, `border-l-4 border-accent-500`, `border border-accent-200 dark:border-accent-800`; antraštė `text-accent-900 dark:text-accent-100`.
- **Patarimas:** `bg-brand-50 dark:bg-brand-900/20` (jau standartas).

### 4.2 Klausimų kortelės (prieš rezultatus)

- **Ne** baltos/pilkos (`bg-white` + `border-gray-200`) – monotonija ir skirtumas nuo Modulio 1.
- **Taikyti:** švelnus brand fonas – `bg-brand-50/50 dark:bg-brand-900/10`, `border-2 border-brand-200 dark:border-brand-700`.
- **Po rezultatų:** teisingai – emerald (border + bg); neteisingai – rose. Nesikeičia.

### 4.3 CTA „Patikrinti atsakymus“

- Vizualiai atitikti Modulio 1 CTA: **gradientas** `from-brand-500 via-brand-400 to-accent-500`, **shadow** `shadow-lg shadow-brand-500/20`, `rounded-xl`, `font-bold text-white`.
- Virš CTA – **skyriklis**: plonas gradientinis (from-transparent via-brand-300 to-transparent), kad vizualiai atskirtų klausimus nuo mygtuko.

### 4.4 Rezultatų skaidrė (TestResultsSlide)

- Score animacija: **useCountUp(rawScore, 1500, 300)**.
- Radar: **RadarChart** su lastCategoryScores (8 kategorijų).
- Remediation: **CategoryBreakdownWithLinks** – mygtukai su `onDeepLink(slideId)` → `saveSlidePosition(1, slideIndex)` + `onGoToModule(1, slideIndex)` (F2-3).

### 4.5 Prieinamumas ir Tailwind

- Kiekvienas interaktyvus elementas: **aria-label**, min aukštis ~44px.
- **Dark mode:** visi blokai turi `dark:` variantus.
- **Safelist:** jei naudojami nestandartiniai atspalviai (pvz. `bg-brand-50/50`, `dark:bg-brand-900/10`) – įtraukti į `tailwind.config.js` safelist.

---

## 5. Klausimų komponentai – bendri principai

### 5.1 Props visiems tipams

- **confidence**, **onConfidence** – F3-1; būtina, kad „Patikrinti“ būtų įjungtas tik su pasirinktu pasitikėjimu.
- **showResults** – ar rodyti teisingai/neteisingai ir paaiškinimą.
- **showHint** – ar šiame klausime buvo parodyta užuomina.

### 5.2 ConfidenceSelector

- Prieš atsakymą: „Kaip esate tikri?“ – Tikras / Spėju / Nežinau.
- Rezultatuose: rodyti „Pasitikėjimas: …“ (confidenceLabel).
- Atsakymo mygtukai **disabled**, kol nepasirinktas pasitikėjimas (MCQ, True/False, Scenario).

### 5.3 Naujo klausimo tipo pridėjimas

1. Pridėti tipą į `QuestionType` (`src/types/modules.ts`).
2. Sukurti komponentą `src/components/slides/shared/questions/` su tais pačiais props (confidence, onConfidence, showResults, …).
3. TestSectionSlide – switch/case pagal `getQuestionType(q)` ir perduoti confidence/onConfidence.
4. **allAnswered** – išplėsti `isQuestionAnswered` atitinkamai (jei reikia specialios būsenos).
5. **Rezultatų skaičiavimas** – handleCheck: kaip skaičiuoti teisingumą ir balą šiam tipui; jei yra kategorija – įtraukti į lastCategoryScores.

---

## 6. Tipai (modules.ts ir vietiniai)

- **TestQuestion** – id, type?, question, options?, correct?, explanation, hint?, bloomLevel?, relatedSlideId?, category?, matchPairs?, correctOrder?, items?, isTrue?, scenarioContext?.
- **ConfidenceLevel** – 'sure' | 'guess' | 'unsure' (ConfidenceSelector).
- **CategoryScore** – { correct, total, percentage } (TestPracticeSlides.tsx).

---

## 7. Nuorodos

| Kas | Kur |
|-----|-----|
| Vizualinio stiliaus įvertinimas M1 vs M2 | docs/MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md |
| UI/UX gairės | docs/development/UI_UX_AGENT.md |
| Agentų orkestratorius | docs/development/AGENT_ORCHESTRATOR.md |
| Modulio 2 turinys ir kokybė | docs/development/AGENT_SEQUENCE_MODULIO_2_TURINYS_KOKYBE.md |
| Klausimų pool ir selector | src/data/questionPool.ts, src/utils/questionPoolSelector.ts |

---

*Dokumentas atnaujintas pagal 2026-02-10 įgyvendinimus (F2-3, F3-1, vizualus suvienodinimas). CODING_AGENT naudoja šį dokumentą plėtodamas žinių patikrinimo modulius.*
