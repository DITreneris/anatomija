# Analizės verdiktas: ką pasiskolinti, kur pritariu, kur skiriuosi

> **Kontekstas:** Gili analizė pagal CHANGELOG – „kas lūžta pirmiausia“, kas jau padaryta gerai, MUST/SHOULD/WANT prioritetai. Šis dokumentas – CODE_REVIEW_AGENT nuomonė: ką verta įgyvendinti iš tos analizės, o kur būtų per didelis žingsnis arba jau padengta.

---

## 1. Kas iš analizės yra tikrai verta pasiskolinti

### 1.1 Bottom line – pritariu

- **„Feature sprawl be vieno aiškaus matavimo“** – teisinga. CHANGELOG pilnas funkcijų (quiz tipai, deep links, progress UX, optional skaidrės), bet nėra:
  - vieno **mokymosi KPI** (completion rate, time-to-first-action, remediation CTR),
  - **turinio kontrakto** (JSON schema + validacija prieš build) – todėl daug `?? []` ir fallback’ų.
- Tai **nereiškia**, kad kryptis bloga – pedagogika ir UX juda į veiksmo modelį, tai stipru. Bet be metrikų + content kontraktų tikrai pradėsi „lopyti simptomus“.

### 1.2 Kas padaryta gerai – pritariu ir patvirtinu iš kodo

- **Pedagogika + UX:** ActionIntro v2, click-to-reveal, progressive disclosure, optional skaidrės, diagnostinis feedback – atitinka CHANGELOG ir `SlideContent`/`PracticalTask`/`DefinitionsSlide`.
- **Testo architektūra:** 5 tipai, Bloom, kategorijos, remediation žemėlapis, hints penalizacija, streak – `TestPracticeSlides.tsx`, `questionPool.ts`, `CATEGORY_META`. Confidence indicator – `ConfidenceSelector`.
- **Stabilumas:** Per-slide ErrorBoundary, `fallbackMissingContent`, `?? []` prieš `.map` – tai tikrai „gynybinis“ sluoksnis; analizė teisingai sako: **signalas, kad turinio kontraktas dar ne pakankamai griežtas**.

### 1.3 Kur tobulinti – pritariu su niuansais

| Analizės punktas | Mano nuomonė |
|------------------|---------------|
| **A) Per daug gynybinio kodo** | **Pritariu.** Sprendimas: schema + validacija prieš build (MUST). |
| **B) Remediation be „uždaros kilpos“** | **Pritariu.** Dabar: TestResults → „Peržiūrėti skaidrę X“ → Modulis 1. Trūksta: grįžti į rezultatą, „pakartok 3 klausimus iš šitos kategorijos“, (ideal.) remediation žymėjimas / spaced retry. |
| **C) 6 blokų checklist – heurinė silpna** | **Patvirtinu iš kodo.** `PracticalTask.tsx` ~211: `answer.toUpperCase().includes(block)` – tik žodžio buvimas. Galima „apgauti“ arba netyčia neatitikti. Reikia bent struktūros (heading’ai / sekcijos) + grįžtamasis ryšys „ko trūksta + pavyzdys“. |
| **D) Changelog – mažai outcome įrodymo** | **Pritariu.** „Pirmas veiksmas 5–7 sek“ – gerai suformuluota, bet nematuota (event’ai/analytics). Be matavimo: „atrodo geriau“ ≠ „veikia geriau“. |

---

## 2. Kur matau mažiau vertės (arba per anksti)

- **„Vienas north-star KPI“** – idėja **teisinga**, bet „north-star“ gali būti **vienas skaičius** (pvz. module_completion_rate arba time_to_first_action_success). Nereikia iš karto 4–5 KPI; pakanka **vieno matuojamo + paprasto event log** (net be Mixpanel). Todėl MUST – „vienas KPI + minimalus event tracking“.
- **„Content QA gate 10–15 min“** – **verta**, bet 10–15 min **checklist** gali būti per didelis žingsnis kiekvienam release. Siūlyčiau: pradėti nuo **5 min** (broken links, viena mobile + dark mode sanity, viena a11y smoke) ir plėsti tik tada, kai schema jau veikia.
- **„Optional skaidrės kaip Fast track toggle“** – analizė tai laiko SHOULD. **Pritariu** – labai pakels completion rate; tai natūralus kitas žingsnis po to, kai optional jau yra badge + flag.

---

## 3. MUST / SHOULD / WANT – mano prioritetai

### MUST (jei nedarai – pradės skaudėti artimiausiai)

| # | Sprendimas | Kodėl MUST | Kas jau yra |
|---|------------|-----------|-------------|
| 1 | **Turinio kontraktas: JSON Schema + CI validacija** | Mažiau fallback’ų, mažiau tylių klaidų (pusiau suvestas turinys). | Tipai `modules.ts`; **nėra** Ajv/schema; `progress.ts` turi `validateProgress` – pavyzdys, kaip validuoti. |
| 2 | **Vienas mokymosi KPI + minimalus event tracking** | Be to „atrodo geriau“ ≠ „veikia geriau“. | Nėra. Pradžiai užtenka: `time_to_first_action_success` (pirmas CTA/copy/submit) arba `module_completion_rate` + paprastas event log (localStorage arba export). |
| 3 | **Remediation uždaras ciklas** | „Peržiūrėk skaidrę X“ be grįžimo į rezultatą = mažas ROI. | Deep link į Modulį 1 jau yra (`onGoToModule(1, slideIndex)`). Trūksta: **grįžti į TestResults** ir (ideal.) „pakartok N klausimų iš šitos kategorijos“. |
| 4 | **Content QA gate prieš release** | Didelis pakeitimų intensyvumas – reikia trumpo sanity check. | Nėra. Pradėti nuo 5 min (broken links, 1 mobile + dark, 1 a11y smoke). |

### SHOULD (stipriai pakels kokybę)

| # | Sprendimas | Pastaba |
|---|------------|--------|
| 1 | **6 blokų checklist: iš keyword → structure check** | Aptikti sekcijas (META:/INPUT: heading’ai arba atskiri paragrafai). Rodyti „missing blocks“ su 1 sakinio pavyzdžiu. |
| 2 | **A11y automatika** | axe-core bent smoke kelioms skaidrėms – rankomis nepagausi regresijų. |
| 3 | **Vienas Design system (Card, Banner, Table, CTAButton)** | Jau pradėta (blockVariant, CTA gradient). Įtvirtinti vieną rinkinį. |
| 4 | **Optional → „Fast track“ toggle** | Rodyti/tęsti praleidžiant optional automatiškai – labai pakels completion rate. |

### WANT (nice-to-have)

- Spaced retry (po 1–2 dienų) – net minimalus;
- Remediation „mini-proof“ (žymėjimas, kad peržiūrėjai);
- Pilnesnis analytics (remediation_click_rate, remediation_return_rate) – po to, kai vienas KPI jau veikia.

---

## 4. Kas jau padaryta (kad nedubliuotum)

- **Progreso validacija:** `progress.ts` – `validateProgress`, migracijos v1→v2. Galima naudoti kaip pavyzdį **content** validacijai (schema + fail build).
- **Remediation deep link:** `TestResultsSlide` → `onDeepLink(slideId)` → `onGoToModule(1, slideIndex)` – atidaro Modulį 1 tiesiai skaidrėje. Trūksta tik **atgal** į rezultatą ir „pakartok klausimus“.
- **Fallback’ai:** `SlideContent` fallbackMissingContent, `?? []` – tai **laikinas** sprendimas; tikrasis – schema, kad trūkstamas content neateina į build.

---

## 5. Rekomenduojama seka (kas pirmiausia)

1. **DATA_AGENT + CODING_AGENT:** JSON Schema `modules.json` (ir optional `promptLibrary.json`, `glossary.json`) + Ajv + **CI step: fail build if invalid**. Required per slideType (pvz. content-block → sections[]).
2. **CODING_AGENT:** Vienas KPI – pvz. `module_completion_rate` arba `time_to_first_action_success` – paprastas event log (localStorage + optional export); nereikia Mixpanel iš karto.
3. **CODING_AGENT:** Remediation grįžimas – mygtukas „Grįžti į testo rezultatą“ Modulyje 1 (kai atidaryta per deep link) arba po X skaidrių „Grįžti ir pakartoti klausimus“.
4. **QA_AGENT:** 5 min release checklist (broken links, 1 mobile, 1 dark, 1 a11y smoke) – dokumentuoti ir vykdyti prieš release.
5. **SHOULD:** 6 blokų checklist – structure check; tada Fast track; tada a11y automatika.

---

## 6. Santrauka

| Analizės dalis | Verdiktas |
|----------------|-----------|
| Bottom line (feature sprawl, be KPI, be content kontrakto) | **Verta – MUST** |
| Kas padaryta gerai (pedagogika, testas, UX, stabilumas) | **Teisinga – pritariu** |
| Per daug gynybinio kodo | **Verta – MUST (schema)** |
| Remediation uždara kilpa | **Verta – MUST** |
| 6 blokų heuristika silpna | **Verta – SHOULD (structure check)** |
| Outcome įrodymas / matavimas | **Verta – MUST (vienas KPI + events)** |
| Content QA gate 10–15 min | **Verta, bet pradėti nuo 5 min** |
| Fast track optional | **Verta – SHOULD** |
| Design system įtvirtinimas | **Verta – SHOULD** |

Šis dokumentas gali būti naudojamas kaip **prioritetų pagrindas** TODO.md ir planuose (pvz. „MUST: content schema“, „MUST: remediation return“, „SHOULD: 6 blokų structure“).
