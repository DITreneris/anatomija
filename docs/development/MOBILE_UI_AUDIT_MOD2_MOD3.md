# Mobile UI auditas – Moduliai 2 ir 3

> **Data:** 2026-02-11. Planas: Mobile UI Moduliai 2 ir 3.

---

## 1. CODE_REVIEW_AGENT – diagnozė

| Vieta | Rizika | Pastaba |
|-------|--------|---------|
| **ModuleView** | Žema | Fixed bottom bar su `min-h-[52px]`, spacer `h-20`. `safe-area-inset-bottom` naudojamas. Turinys scroll’inamas – CTA matomi scroll’inant. |
| **RadarChart** | Žema | Komponente jau `max-w-[280px] mx-auto` – overflow išvengtas. Wrapper TestResultsSlide gali turėti `overflow-hidden` apsaugai. |
| **CategoryBreakdownWithLinks** | Vidutinė | `grid-cols-2 sm:grid-cols-4`. Mygtukai „Peržiūrėti skaidrę“ / „Pakartok 3 kl.“ – `text-xs`, `py-1.5` – < 44px aukštis. Touch targets per maži. |
| **MatchingQuestion** | Žema | `grid-cols-2`, `min-h-[44px]` – OK. Ilgas tekstas porose gali persilieti – rekomenduojama `min-w-0` + `break-words`. |
| **PracticalTask** | Žema | `p-6` visur – mobile galima `p-4 sm:p-6`. Mygtukai jau pakankami. |
| **PracticeScenarioSlide** | Žema | Tab mygtukai `px-3 py-2` – aukštis < 44px. Rekomenduojama `min-h-[44px]`. |
| **RemediationRetryBlock** | Žema | „Grįžti į rezultatą“ – `py-1.5` – padidinti iki min 44px. |

**Rekomenduoti failai:** ModuleView.tsx, TestPracticeSlides.tsx (CategoryBreakdownWithLinks, TestResultsSlide wrapper, PracticeScenarioSlide tabs, RemediationRetryBlock), MatchingQuestion.tsx, PracticalTask.tsx.

---

## 2. UI_UX_AGENT – audito atitikties lentelė

| Skaidrė / komponentas | Hierarchija | A11y | Touch ≥44px | Dark | Responsive | Pastabos |
|----------------------|-------------|------|-------------|------|------------|----------|
| test-intro | OK | OK | OK | OK | OK (grid sm:2) | - |
| test-section (klausimai) | OK | OK | OK (MCQ/Matching/Ordering) | OK | Matching 2 cols – min-w-0 | Matching: break-words |
| test-results (score) | OK | OK | OK | OK | OK | - |
| test-results (radar) | OK | aria-label | OK | OK | max-w jau | Wrapper overflow-hidden |
| test-results (kategorijos) | OK | aria-label | **Ne** (py-1.5) | OK | grid 2/4 | Padidinti mygtukus |
| practice-intro | OK | OK | OK | OK | grid 1/2/3 | - |
| practice-scenario (tabs) | OK | role tablist | **Ne** (py-2) | OK | flex-wrap | min-h-[44px] tabams |
| PracticalTask | OK | OK | OK | OK | flex-col-reverse sm:flex-row | p-4 sm:p-6 |
| RemediationRetryBlock | OK | OK | **Ne** (Grįžti py-1.5) | OK | - | min-h-[44px] |

---

## 3. Konkretūs pataisymai (CODING_AGENT)

1. **TestPracticeSlides.tsx**
   - Radar wrapper: pridėti `overflow-hidden` prie bloko su RadarChart.
   - CategoryBreakdownWithLinks: abu mygtukai – `min-h-[44px] py-2` (arba py-2.5), išlaikyti `text-xs` arba `text-sm`.
   - PracticeScenarioSlide: tab mygtukams pridėti `min-h-[44px]`.
   - RemediationRetryBlock: mygtukui „Grįžti į rezultatą“ – `min-h-[44px] py-2`.

2. **MatchingQuestion.tsx**
   - Porų mygtuose (left/right) vidiniam tekstui: `min-w-0 break-words` (arba wrapper su `min-w-0`).

3. **PracticalTask.tsx**
   - Root konteineris: `p-4 sm:p-6` vietoj `p-6`.

4. **ModuleView.tsx**
   - Spacer: palikti `h-20`; optional – pridėti `pb-[env(safe-area-inset-bottom)]` prie spacer jei norima papildomos safe area (jei tailwind palaiko).

---

## 4. Po pakeitimų (CODE_REVIEW)

- **Desktop layout:** Grid CategoryBreakdownWithLinks lieka `grid-cols-2 sm:grid-cols-4`; PracticeScenarioSlide tab’ai – flex-wrap. Pakeitimai tik touch (min-h-[44px]) ir padding (p-4 sm:p-6) – desktop nepažeistas.
- **Dark mode:** Visi pakeisti blokai naudoja esamas `dark:` klasės – jokių naujų spalvų.
- **A11y:** Pridėtas `aria-label="Grįžti į rezultatą"` RemediationRetryBlock mygtukui; tab’ai jau turėjo role/aria.

---

## 5. QA (RELEASE_QA_CHECKLIST skyrius 2)

- [ ] Viewport 375×667: Modulio 2 viena skaidrė (test-intro arba test-results) – skaitoma, mygtukai veikia.
- [ ] Modulio 3 viena skaidrė (practice-intro arba practice-scenario) – skaitoma, tab’ai ir CTA veikia.
- [ ] Navigacija (Atgal / Pirmyn) mobile veikia.

---

## CHANGES (įgyvendinimas 2026-02-11)

- **TestPracticeSlides.tsx:** Radar wrapper – `overflow-hidden`, `p-4 sm:p-6`. CategoryBreakdownWithLinks – mygtukai `min-h-[44px] py-2`, konteineris `p-4 sm:p-6`. PracticeScenarioSlide – tab mygtukai `min-h-[44px]`. RemediationRetryBlock – „Grįžti į rezultatą“ `min-h-[44px] py-2`, `aria-label`.
- **MatchingQuestion.tsx:** Porų mygtuose tekstas – `min-w-0`, `break-words` (kairė/dešinė).
- **PracticalTask.tsx:** Root – `p-4 sm:p-6`.
- **RELEASE_QA_CHECKLIST.md:** Skyrius 2 – pridėta rekomendacija tikrinti Modulius 2 ir 3 (test-results, practice-scenario), nuoroda į MOBILE_UI_AUDIT_MOD2_MOD3.md.

## CHECKS

- `npm run build` – sėkmingas.
- Lint – be klaidų pakeistuose failuose.

## RISKS

- Maži touch target pakeitimai (py-2, min-h-[44px]) gali vizualiai šiek tiek padidinti blokus mobile – priimtina.
- MatchingQuestion `break-words` – ilgas tekstas gali užimti kelias eilutes – skaitomumas geresnis nei overflow.

## NEXT

- Rankinis testas: DevTools 375×667, Moduliai 2 ir 3 kelionė (test-intro → test-results; practice-intro → vienas scenarijus).
- Jei reikia – papildomas safe-area spacer ModuleView (pb env(safe-area-inset-bottom)) įjungus tailwind plugin.
