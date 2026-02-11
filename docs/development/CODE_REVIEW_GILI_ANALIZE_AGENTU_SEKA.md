# Gili kodo analizė, agentų seka ir įgyvendinimas

**Data:** 2026-02-08  
**Rolė:** CODE_REVIEW_AGENT (diagnozė) → CODING_AGENT (pataisymai)

---

## 1. Diagnozė (CODE_REVIEW_AGENT)

### 1.1 Build ir testai
- **Build:** `npm run build` – sėkmingas (Vite, 1411 modulių).
- **Testai:** 46 testai praeina (App.integration, progress, useAutoSave, QuizPage, App.quiz.integration).
- **Lint:** ESLint paleistas be klaidų (max-warnings 0).

### 1.2 Rastos rizikos ir klaidos

| # | Vieta | Problema | Severity |
|---|--------|----------|----------|
| 1 | `SlideContent.tsx` | Skaidrės tipai `definitions`, `prompt-types`, `prompt-techniques`, `workflow-summary`, `prompt-template`, `transition-3-to-6`, `summary`, `infographic` **neturi** `slide.content == null` patikros. Jei JSON turi `content: null` arba trūksta `content`, komponentas gauna `undefined` ir gali lūžti (pvz. `content?.aspects.map` → `undefined.map`). | **P1** |
| 2 | `SlideContent.tsx` | Tipai `di-modalities`, `pie-chart`, `ai-workflow` naudoja `content?.x ?? []` – saugesni, bet vienodai verta naudoti bendrą fallback dėl nuoseklumo ir DEV įspėjimo. | P2 |
| 3 | `modulesLoader.ts` | Kai `!data.quiz || !Array.isArray(data.quiz.questions)` – nustatomas `modulesCache` su normalizuotu `quiz`; visi keliai teisingai grąžina `modulesCache`. **Patikrinta – klaidos nėra.** | — |
| 4 | `ModuleView` / `QuizPage` | Naudoja `getModulesSync()` / `getModulesDataSync()` – cache sinchronizuojamas su `loadModules()` resolution App state. Race būsena tvarkingai apdorojama (loading spinner kol nėra duomenų). | — |
| 5 | `useSlideNavigation.ts` | `nextSlide` priklauso nuo `currentSlide` – galimas stale closure jei labai greitai keičiasi; praktiškai reta. | P3 |
| 6 | SOT atitiktis | UI renderina JSON; tipai `src/types/modules.ts` atitinka SlideType ir SlideContent. Trūkstamas content – vienintelė struktūrinė spraga (punktas 1). | — |

### 1.3 Išvados
- **Kritinė:** Pridėti `slide.content == null` → `fallbackMissingContent()` visiems skaidrių tipams, kurie tikisi `content` objekto ir neturi savo default (IntroSlide, HierarchySlide ir kt. jau turi DEFAULT_*).
- **Rekomenduota agentų seka** (mišri užduotis – diagnozė + kodas):
  1. **CODE_REVIEW_AGENT** – atlikta (šis dokumentas).
  2. **CODING_AGENT** – įgyvendinti SlideContent apsaugas (null guard).
  3. **CODE_REVIEW_AGENT** – trumpa patikra po pakeitimų.
  4. **QA_AGENT** – atnaujinti CHANGELOG / TODO jei reikia.

---

## 2. Agentų seka (įgyvendinimui)

```
CODE_REVIEW_AGENT (diagnozė) ✓
    → CODING_AGENT (SlideContent null guards)
    → CODE_REVIEW_AGENT (sanity check)
    → QA_AGENT (changelog/TODO jei reikia)
```

**Šiame cikle:** CODING_AGENT pakeitimai vykdomi iš karto žemiau.

---

## 3. Įgyvendinti pakeitimai (CODING_AGENT)

- **Failas:** `src/components/SlideContent.tsx`
- **Pakeitimas:** Prieš renderinant kiekvieną content-driven skaidrės tipą, kur komponentas neturi savo default reikšmės, pridėti:
  `if (slide.content == null) return fallbackMissingContent();`
- **Tipai, kuriems pridedama apsauga:**  
  `definitions`, `di-modalities`, `pie-chart`, `ai-workflow`, `prompt-types`, `prompt-techniques`, `workflow-summary`, `prompt-template`, `transition-3-to-6`, `summary`, `infographic`.

---

## 4. CHANGES / CHECKS / RISKS / NEXT (kokybės vartai)

**CHANGES:**
- `docs/development/CODE_REVIEW_GILI_ANALIZE_AGENTU_SEKA.md` – naujas: diagnozė, agentų seka, įgyvendinimo planas.
- `src/components/SlideContent.tsx` – pridėti `slide.content == null` guard 11 skaidrių tipų (žr. 3 skyrių).

**CHECKS:**
- `npm run build` – sėkmingas.
- `npm run test:run` – 46 testai praeina.
- `npm run lint` – be įspėjimų.

**RISKS:**
- Jei kur nors JSON sąmoningai leidžia tuščią content tam tipui – dabar bus rodomas fallback su DEV įspėjimu; tai pageidaujama elgsena.
- Nauji skaidrių tipai ateityje – rekomenduojama iš karto naudoti tą patį guard pattern.

**NEXT:**
- Jei reikia – DATA_AGENT: patikrinti `modules.json`, kad skaidrės su šiais tipais turi `content` (arba dokumentuoti išimtis).
- QA_AGENT: atnaujinti CHANGELOG.md įrašu „SlideContent: apsauga nuo trūkstamo content 11 skaidrių tipų“.

---

## 5. Papildomi pataisymai (2026-02-08) – gynybines .map() apsaugas

**Problema:** Neteisingas arba neišsami JSON (trūksta `sections`, `questions`, `headers`, `rows`, `aspects`, `cards`, `insights`, `items`) galėtų sukelti runtime klaidą (`.map()` ant `undefined`).

**Pataisymai (ContentSlides.tsx):**
- `ContentBlockSlide`: `(content.sections ?? []).map`, lentelėms `(section.table.headers ?? []).map`, `(section.table.rows ?? []).map`.
- `WarmUpQuizSlide`: `content.questions ?? []`.
- `DefinitionsSlide`: `(content?.aspects ?? []).map`.
- `SummarySlide`: `(content.sections ?? []).map`, `(section.items ?? []).map`.
- `ProductivityInfographicSlide`: `(content.cards ?? []).map`, `(card.stats ?? []).map`, `(content.insights ?? []).map`.
