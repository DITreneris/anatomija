# Rytinės kodo sesijos planas (90–150 min)

> **Rolė:** Senior Software Engineer + Tech Lead + Release Manager  
> **Principas:** Vertė greitai, be regresijų, be „greitų hackų“. Backward compatibility – nepažeisti.

**Šaltinis:** `TODO.md` (2026-02-11), `ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md`, `AGENT_ORCHESTRATOR.md`.  
**Atnaujinta:** 2026-02-11 – A-M1, A-M2, A-M3 įgyvendinti; likę MUST tik A-M4. Pridėti Moduliai 1–2–3 UX (P2/P3).

---

## 1. Užduočių klasifikacija (likę darbai)

*Įgyvendinti (✅): A-M1, A-M2, A-M3, Modulio 3 UI/UX Fazė 1–2 (#8,#10,#9,#1,#6), F2-3. Žemiau – tik likę / backlog.*

### 1.1 Poveikis (impact) | Rizika | Priklausomybės | Pastangos

| ID | Užduotis | Impact | Rizika | Priklausomybės | Pastangos |
|----|----------|--------|--------|----------------|-----------|
| **A-M4** | Content QA gate 5 min (broken links, 1 mobile+dark, 1 a11y) | Vidutinis (release saugumas) | Žema (dokumentas + checklist) | — | S |
| **A-S1** | 6 blokų checklist: keyword → structure check (META:/INPUT: sekcijos) | Vidutinis (PracticalTask kokybė) | Vidutinė (PracticalTask.tsx logika) | PracticalTask.tsx ~211 | M |
| **A-S2** | A11y automatika (axe-core smoke kelioms skaidrėms) | Vidutinis (regresijų aptikimas) | Žema (test env) | Vitest + axe-core | M |
| **A-S3** | Vienas Design system (Card, Banner, Table, CTAButton) | Vidutinis (konsistencija) | Vidutinė (komponentai) | blockVariant, CTA jau pradėta | L |
| **A-S4** | Optional → „Fast track“ toggle (praleisti optional automatiškai) | Aukštas (completion rate) | Vidutinė (progress + ModuleView) | optional jau badge + flag | M |
| **P2 M1-3** | Pirmos skaidrės hook + 30 s veiksmas (kontekstas „2x“ / diskomfortas + CTA) | Aukštas (engagement) | Vidutinė (action-intro, turinys) | CONTENT + CODING; turinio_pletra, modules.json | M |
| **P3 M3** | Modulio 3 practice-intro cover su emerald akcentu | Žemas (vizualinis) | Žema | TestPracticeSlides.tsx, practice-intro | S |
| **P3 M2** | Modulio 2 „X iš 15“ sticky arba mini-progress virš klausimų | Vidutinis (orientacija) | Žema | QuizPage / TestSectionSlide | S |
| **T1** | Vitest setup – gilesnis įsigilinimas (process.on / pool / jsdom) | Vidutinis (CI stabilumas) | Žema (tik test env) | src/test/setup.ts, 5 test failai | M |
| **T2** | Testų atnaujimas po T1 (selektoriai, stringai) | Vidutinis | Žema | T1 | S |
| **S-R4** | types/modules.ts padalinti (optional) | Žemas (skaitomumas) | Žema (re-export) | modules.ts 458 eil. | M |
| **F2-1** | Klausimų pool (question bank) 30–40 kl., atsitiktinis 15 | Vidutinis (Modulio 2) | Vidutinė (questionPoolSelector, JSON) | questionPool, QuizPage | L |
| **F2-2** | Radar/spider chart rezultatuose | Vidutinis (UX) | Žema (naujas komponentas) | QuizResultsView | M |
| **F2-4** | Score count-up animacija | Žemas | Žema | QuizResultsView | S |
| **15** | Savitikra 68.5: +1–2 klausimai apie DI detektorius | Vidutinis (turinyje) | Žema (JSON + quiz 68.5) | slide 201, warm-up 68.5 | S |
| **M3 backlog** | #2 Drag-and-drop „Surinkite 6 blokus“ | Vidutinis | Vidutinė (PracticalTask) | — | L |
| **M3 backlog** | #4 Stepper su atskirais laukais (po bloką) | Vidutinis | Vidutinė (DATA + CODING) | — | L |

**Impact:** Aukštas = tiesiogiai vartotojas/verslas; Vidutinis = kokybė/ilgalaikis; Žemas = nice-to-have.  
**Rizika:** sulaužyti esamą elgesį (navigacija, progress, quiz, build).  
**Pastangos:** S ≈ &lt;1h, M ≈ 1–2h, L ≈ 2h+.

---

## 2. Priklausomybių grafas (santrauka)

```
A-M4 (QA gate)          → nuo nieko
T1 (Vitest)             → nuo nieko
T2                      → T1
A-S4 (Fast track)       → progress, ModuleView (optional jau yra)
A-S1 (6 blokų structure) → PracticalTask.tsx
P2 (M1 hook)            → action-intro skaidrė, modules.json, turinio_pletra
P3 M3 (cover)           → TestPracticeSlides.tsx practice-intro
P3 M2 (mini-progress)   → QuizPage / TestSectionSlide
F2-4 (count-up)         → QuizResultsView
F2-2 (radar)            → QuizResultsView
15 (68.5 klausimai)     → modules.json, warm-up quiz 68.5
F2-1 (question pool)    → questionPoolSelector, modules.json / questionPool
S-R4                    → modules.ts
A-S2 (a11y)             → Vitest + axe-core
A-S3 (design system)    → esami komponentai
M3 #2, #4               → PracticalTask, DATA
```

**Rekomenduojama eilė (mažiausia rizika / didžiausia grąža per 90–150 min):**  
A-M4 → F2-4 → 15 → A-S4 → A-S1 (pradžia) → P3 M3 / P3 M2 (jei laiko).  
T1 atskirai arba po A-M4. P2 (hook) – CONTENT+CODING, atskira sesija.

---

## 3. Rytinės sesijos planas (90–150 min)

**Tikslas:** Maksimali vertė, minimali regresijos rizika. Kiekvienas žingsnis: tikslas, kas keičiasi, kas ne, kaip patikrinsi.

### Faze 1: Žema rizika, greitas laimėjimas (≈25–35 min)

| # | Žingsnis | Tikslas | Kas keičiasi | Kas ne | Patikra |
|---|----------|---------|---------------|--------|---------|
| 1 | **A-M4 – QA gate** | Release saugumas: 5 min checklist prieš release | Naujas doc: `docs/development/RELEASE_QA_CHECKLIST.md` (broken links, 1 mobile + 1 dark, 1 a11y smoke) | Joks kodas | Checklist atliktas ranka 1× |
| 2 | **F2-4 – Score count-up** | Rezultatų procentas 0→X% animuotai | `QuizResultsView.tsx` (arba kur rodomas score): naudoti `useCountUp` arba requestAnimationFrame; viena reikšmė | Quiz logika, progress, deep links | Build, atidaryti Modulio 2/5 rezultatus, matai animaciją |
| 3 | **15 – Savitikra 68.5** | DI detektorių klausimai po slide 201 | `modules.json` (warm-up-quiz 68.5): +1–2 klausimai („Kam skirti DI detektoriai?“ ir kt.); `questionPool` / šaltinis pagal esamą struktūrą | Skaidrės 201, 68.5 tipas, UI | Build, eiti į 68.5 – matai naujus klausimus |

### Faze 2: Vidutinė grąža, kontroliuota rizika (≈35–50 min)

| # | Žingsnis | Tikslas | Kas keičiasi | Kas ne | Patikra |
|---|----------|---------|---------------|--------|---------|
| 4 | **A-S4 – Fast track toggle** | Tęsti praleidžiant optional skaidres (completion rate) | `ModuleView` + progress: toggle „Fast track“ (arba settings); skaidrių eilė praleidžia `slide.optional === true` kol toggle įjungtas; progress saugoti kaip dabar | Turinys, quiz, deep links | Build, įjungti Fast track – optional skaidrės praleidžiamos; išjungus – kaip dabar |
| 5 | **A-S1 (pradžia)** | 6 blokų checklist – bent „missing blocks“ su pavyzdžiu | `PracticalTask.tsx`: heuristika – ne tik `answer.toUpperCase().includes(block)`, bet aptikti META:/INPUT: ir pan. (heading ar atskiri paragrafai); rodyti „Ko trūksta: [blokas] – pvz. …“ | Esami CTA, progress, copyable | Build, PracticalTask skaidrė – įvesti be META – matyti „trūksta META“ |
| 6 | **P3 (optional)** | M3 cover emerald / M2 „X iš 15“ mini-progress | M3: `TestPracticeSlides.tsx` practice-intro – emerald akcentas; M2: `QuizPage` arba klausimų blokas – sticky „X iš 15“ | Quiz logika, rezultatai | Build, vizualiai Moduliai 2 ir 3 |

### Faze 3 (optional, jei liko laiko)

| # | Žingsnis | Tikslas | Kas keičiasi | Kas ne | Patikra |
|---|----------|---------|---------------|--------|---------|
| 7 | **T1 – Vitest** | Testai ne „no tests“ lokaliai | `src/test/setup.ts` + Node/Vitest pool (threads/forks) arba jsdom – diagnozė; fiksuoti tik tiek, kiek reikia, kad `npm run test:run` paleistų bent 1 testą | Produkcijos kodas | `npm run test:run` – bent vienas testas green |
| 8 | **S-R4** | Tipų skaitomumas (optional) | `src/types/modules.ts` → `modules-core.ts` + `modules-slide-content.ts` + index re-export | Visi importai iš `types/modules` lieka tie patys | Build, lint |

**Kas sąmoningai ne į šią sesiją:**  
P2 (pirmos skaidrės hook) – CONTENT+CODING, M; atskira sesija.  
F2-1 (question pool) – L. F2-2 (radar) – M, optional. M3 #2, #4 – backlog.

---

## 4. Agentų seka (multi-agent workflow)

**Pipeline:** Reader/Mapper → Risk & Tests → Implementer → Reviewer → Release Notes.

### 4.1 Reader / Mapper (≈15 min)

- **Kas daroma:** Perskaityti `TODO.md` ir šį planą; susieti užduotis su failais ir tipais.
- **Output:** Trumpas „map“: kuri užduotis → kurie failai (kelias + pagrindinė funkcija/komponentas), kurios priklausomybės.
- **Nenaudoti:** Ilgų kodo citatų; jei reikia – prašyti tik konkretaus failo/funkcijos ištraukos.
- **Agentas:** CODE_REVIEW_AGENT arba QA_AGENT (struktūra, be implementacijos).

**Pavyzdys map:**

- A-M4 → `docs/development/RELEASE_QA_CHECKLIST.md` (naujas).
- F2-4 → `QuizResultsView.tsx` (score rodymas), `useCountUp` arba requestAnimationFrame.
- 15 → `modules.json` (warm-up-quiz id 68.5), question pool šaltinis.
- A-S4 → `ModuleView.tsx` (navigacija), progress (optional skaidrės).
- A-S1 → `PracticalTask.tsx` (blokų tikrinimas ~211).
- P3 → `TestPracticeSlides.tsx` (practice-intro), `QuizPage` / TestSectionSlide (M2 progress).

### 4.2 Risk & Tests (≈10 min)

- **Kas daroma:** Kiekvienai pasirinktai užduočiai (Faze 1–2): kas gali sulūžti, kokius testus paleisti prieš/po.
- **Output:** Trumpas rizikų sąrašas + „pre/post“ check: pvz. „Build prieš; build po; atidaryti Modulio 2 rezultatus“.
- **Agentas:** CODE_REVIEW_AGENT.

**Standartiniai check’ai:**  
`npm run build`, `npm run lint`, `npm run test:run` (jei veikia). Rankinis: viena kritinė vartotojo kelionė (pvz. Modulio 2 testas → rezultatai → remediation link).

### 4.3 Implementer (≈55–85 min)

- **Kas daroma:** Įgyvendinimas pagal Faze 1 → 2 → 3, viena užduotis po kitos. Minimalūs diff’ai, be „šiaip“ refaktoringo.
- **Agentai pagal užduotį:**
  - A-M4: QA_AGENT (dokumentas).
  - F2-4, A-S4, A-S1, P3: CODING_AGENT (UI/UX dalims – UI_UX_AGENT gairės).
  - 15: DATA_AGENT (JSON) + CONTENT_AGENT (klausimų tekstai) arba vienas DATA_AGENT su CONTENT gairėmis.
  - T1: CODING_AGENT (test setup).
  - S-R4: CODING_AGENT (tipai).
- **Output:** CHANGES / CHECKS / RISKS blokas (pagal AGENT_ORCHESTRATOR).

### 4.4 Reviewer (≈10 min)

- **Kas daroma:** Prieš merge: diff peržiūra, ar nėra regresijų, ar atitinka „kas neturi pasikeisti“ iš 3 skyriaus.
- **Agentas:** CODE_REVIEW_AGENT.
- **Output:** „Go / No-go“ + 1–3 rizikos, jei liko.

### 4.5 Release Notes (≈5 min)

- **Kas daroma:** CHANGELOG.md papildymas: kas įgyvendinta šioje sesijoje (features + docs).
- **Agentas:** QA_AGENT.
- **Output:** 1–2 pastraipos CHANGELOG, jei reikia – TODO.md statusų atnaujinimas.

---

## 5. Tokenų disciplina (priminimas)

- Nenaudoti ilgų kodo citatų. Vietoje to: **failo kelias + funkcijos/komponento pavadinimas + trumpa išvada**.
- Detalėms – prašyti tik **konkretaus failo/funkcijos ištraukos**.
- Atsakyme laikytis šios struktūros ir trumpumo.

---

## 6. Santrauka

| Faze | Užduotys | Laikas | Rizika |
|------|----------|--------|--------|
| 1 | A-M4, F2-4, 15 | 25–35 min | Žema |
| 2 | A-S4, A-S1 (pradžia), P3 (optional) | 35–50 min | Vidutinė, kontroliuota |
| 3 (optional) | T1, S-R4 | 20–30 min | Žema |
| Pipeline | Reader → Risk → Implementer → Reviewer → Release Notes | 90–150 min total | — |

**Sekanti sesija (atskirai):** P2 (pirmos skaidrės hook + 30 s veiksmas), F2-1 (question pool), A-S2 (a11y axe-core).
