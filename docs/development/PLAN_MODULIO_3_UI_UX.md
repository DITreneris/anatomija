# Modulio 3 (Praktinis Pritaikymas) UI/UX – įgyvendinimo planas

> **Šaltinis:** `docs/MODULIO_3_UI_UX_GERIAUSIOS_PRAKTIKOS.md` (Top 10 praktikų).  
> **Tikslas:** įgyvendinti #8, #10, #9, #1, #6; #2 ir #4 – vėlesnė fazė.

---

## 1. Agentų seka (mišri užduotis: UI + duomenys)

| Eilė | Agentas | Veikla |
|------|---------|--------|
| 1 | **DATA_AGENT** (optional) | Jei CTA tekstai / scenarijų pavadinimai turi būti iš JSON – papildyti `modules.json` (Modulio 3 slides, practice-intro). Kitu atveju CTA galima hardcodinti pirmoje iteracijoje. |
| 2 | **CODING_AGENT** (+ UI_UX_AGENT gairės) | Komponentai: Modulio 3 Praktikos Įvadas (scenarijų kortelės su progresu), CTA mygtukai, hint tooltip, tabs/accordion scenarijui, 6 blokų checklist. Žr. `docs/development/UI_UX_AGENT.md`. |
| 3 | **CODE_REVIEW_AGENT** | Patikra: a11y, progreso būsena, edge cases (tik 1 scenarijus užbaigtas, visi 6, navigacija). |
| 4 | **QA_AGENT** | TODO.md, CHANGELOG.md, nuorodos į planą. |

**SOT:** Modulio 3 turinys – `turinio_pletra.md` (§ Modulis 3). Duomenų tiesa – `src/data/modules.json` (module id 3, slide id 30–37).

---

## 2. Fazė 1 – Greiti laimėjimai (#8, #10, #9)

### #8 Scenarijų lentelė su progresu
- **Kur:** Modulio 3, skaidrė „Praktikos Įvadas“ (`practice-intro`, slide id 30).
- **Kas:** 6 scenarijų kortelės su statusu: Ne pradėta / Vykdoma / Užbaigta (ikona arba spalva). Klikas – navigacija į tą skaidrę (slide index). Skaitiklis „X iš 6 užbaigta“.
- **Duomenys:** Progresas jau saugomas – `progress.completedTasks[moduleId]` su slide id (31–36). Scenarijų slide id iš `modules.json` (id 31–36).
- **Failai:** `TestPracticeSlides.tsx` (PracticeIntroSlide – pridėti scenarijų grid su statusu ir navigacija), `ModuleView.tsx` (perduoti progress ir onNavigateToSlide arba slide index), `useSlideNavigation.ts` jei reikia `goToSlideIndex`.
- **Agentas:** CODING_AGENT.

### #10 Konkretūs CTA
- **Kur:** Apačioje kiekvienos `practice-scenario` skaidrės (slide 31–36) ir prie „Užbaigiau šį scenarijų“.
- **Kas:** Vietoj bendro „Toliau“ – konkretus tekstas: „Pereiti prie Scenarijaus 2“ … „Pereiti prie Scenarijaus 6“ / „Į Praktikos santrauką“ (paskutiniam). Rodyklė (ArrowRight).
- **Failai:** `ModuleView.tsx` (nav mygtukai – ar jau rodo „Toliau“; pridėti label pagal currentSlideIndex ir module 3 slide list), arba `SlideContent.tsx` / wrapper, kur perduodamas „nextLabel“. Geriau vienoje vietoje – ModuleView (footer nav).
- **Agentas:** CODING_AGENT. DATA_AGENT optional – jei CTA tekstai imami iš JSON.

### #9 Hint tooltip
- **Kur:** PracticalTask – žingsnis po žingsnio (`task.instructions.steps`). Prie kiekvieno žingsnio jau yra `hint` – rodyti kaip tooltip (hover arba tap).
- **Kas:** Prie step title arba prie „Užuomina“ mygtuko – tooltip su `step.hint` tekstu. A11y: `title` arba `aria-describedby` + Tippy/Radix arba natūralus browser title.
- **Failai:** `PracticalTask.tsx` – prie step header arba hint button pridėti tooltip komponentą.
- **Agentas:** CODING_AGENT.

---

## 3. Fazė 2 – Vidutinė pastanga (#1, #6)

### #1 Tabs / accordion scenarijui
- **Kur:** `PracticeScenarioSlide` – blokas „Scenarijaus Aprašymas“. Dabar: Kontekstas, Duomenys, Apribojimai, Laukiamas rezultatas – visi iš karto.
- **Kas:** Tabs (Kontekstas | Duomenys | Apribojimai | Rezultatas) arba accordion – viena sekcija atidaryta. Mažina clutter.
- **Failai:** `TestPracticeSlides.tsx` (PracticeScenarioSlide) – naujas subkomponentas ScenarioDescriptionTabs arba ScenarioDescriptionAccordion; duomenys iš `slide.scenario`.
- **Agentas:** CODING_AGENT, UI_UX_AGENT (layout, a11y).

### #6 6 blokų checklist (progreso vizualizacija)
- **Kur:** PracticalTask – virš textarea arba po instrukcijų. Rodyti, kurie blokai „užpildyti“ (pagal keyword arba min. ilgį).
- **Kas:** 6 kortelės arba eilutė: META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED. Pvz. checkbox arba CheckCircle, jei atitinkamas keyword („META“, „INPUT“, …) yra `answer` tekste. Heuristika: `answer.includes('META')` ir t.t., arba regex.
- **Failai:** `PracticalTask.tsx` – komponentas BlockProgressChecklist (viduje arba shared); props: `answer: string`, optional `steps` iš instructions.
- **Agentas:** CODING_AGENT.

---

## 4. Fazė 3 – Vėlesnis (backlog: #2, #4)

### #2 Drag-and-drop „Surinkite 6 blokus“
- **Kur:** Scenarijus 1 (slide id 31) – pasirinktinai kaip „šiltas startas“ prieš arba po textarea.
- **Kas:** 6 kortelės (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED) – tempk į teisingą tvarką. Po to rodomas tekstinis šablonas arba atsidaro textarea.
- **Failai:** Naujas komponentas (pvz. `BlockOrderingExercise.tsx`), Modulio 3 pirmas scenarijus – conditional render. Reikia drag-and-drop lib (dnd-kit arba react-beautiful-dnd) arba native HTML5 DnD.
- **Agentas:** CODING_AGENT, UI_UX_AGENT.

### #4 Stepper su atskirais laukais (po bloką)
- **Kur:** PracticalTask – vietoj vieno didelio textarea.
- **Kas:** 6 žingsniai (stepper UI), kiekvienas – atskiras mažas laukas (vienas blokas). „Kitas“ atsiranda po užpildymo arba visada matomi visi su „Užpildykite META“ pvz.
- **Failai:** `PracticalTask.tsx` refaktoras – state per 6 laukus arba vienas string su split; `modules.json` instructions.steps jau turi partialSolution – galima naudoti kaip placeholder.
- **Agentas:** CODING_AGENT, galimas DATA_AGENT (struktūra steps).

---

## 5. Failų sąrašas (lietimi)

| Failas | #8 | #10 | #9 | #1 | #6 | #2 | #4 |
|--------|----|----|----|----|----|----|-----|
| `src/components/slides/types/TestPracticeSlides.tsx` | ✓ | – | – | ✓ | – | – | – |
| `src/components/ModuleView.tsx` | ✓* | ✓ | – | – | – | – | – |
| `src/components/slides/shared/PracticalTask.tsx` | – | – | ✓ | – | ✓ | – | ✓ |
| `src/utils/useSlideNavigation.ts` arba progress | ✓* | – | – | – | – | – | – |
| `src/data/modules.json` | – | opt. | – | – | – | – | opt. |
| Naujas: `ScenarioProgressCards`, `ScenarioDescriptionTabs`, `BlockProgressChecklist`, `BlockOrderingExercise` | ✓ | – | – | ✓ | ✓ | ✓ | – |

\* #8: navigacija į skaidrę pagal index – gali būti ModuleView perduodant `setSlideIndex` arba router/state.

---

## 6. Priklausomybės

- **Fazė 1:** galima vykdyti paraleliai (#8, #10, #9); #8 ir #10 liečia ModuleView / TestPracticeSlides – geriau #8 pirmiau, tada #10, tada #9.
- **Fazė 2:** #1 ir #6 nepriklausomi; #1 – tik TestPracticeSlides, #6 – tik PracticalTask.
- **Fazė 3:** #2 reikalauja naujos priklausomybės (dnd) arba native DnD; #4 – didesnis PracticalTask refaktoras.

---

**Modulio 3 – Redaguoti ir Kopijuoti (2026-02-11):** PracticalTask rodo „Redaguoti“ ir „Kopijuoti“ mygtukus po užduoties pabaigimo. Bendrinamas komponentas – automatiškai taikomas visoms practice-scenario skaidrėms Modulyje 3 (id 31–36).

---

*Atnaujinta: 2026-02-11. Nuoroda: TODO.md § Modulio 3 UI/UX.*
