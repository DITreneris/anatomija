# Agentų seka: Modulio 3 perdarymas – 6 scenarijai

> **Užduotis:** Perdaryti Modulio 3 (Praktinis Pritaikymas) nuo 4 scenarijų į **6 verslo scenarijus** pagal pateiktą specifikaciją.  
> **Source of truth:** `turinio_pletra.md` (Moduliai 1–3), `docs/CONTENT_MODULIU_ATPAZINIMAS.md`.

---

## 1. Nauji 6 scenarijai (specifikacija)

| # | Scenarijus | Kontekstas | Užduotis | Fokusas |
|---|------------|------------|----------|---------|
| **1** | **Vadovo Strateginė Ataskaita** | Ketvirčio/pusmečio rezultatų apžvalga valdybai/savininkams | Parengti aiškią, struktūruotą ataskaitą su KPI, rizikomis ir prioritetais | Sprendimų logika, santrauka, rekomendacijos |
| **2** | **Pardavimų Analizė ir Veiksmų Planas** | Pardavimų augimas, kritimas arba stagnacija | Išanalizuoti duomenis ir pateikti konkrečius veiksmus rezultatams gerinti | Skaičiai → įžvalgos → veiksmai |
| **3** | **Marketingo Kampanijos Planas** | Nauja kampanija ar produkto komunikacija rinkoje | Sukurti aiškų veiksmų planą su auditorija, kanalais ir KPI | Struktūra, tikslumas, rezultato matavimas |
| **4** | **Vidaus Komunikacijos Dokumentas** | Pokyčiai organizacijoje (strategija, restruktūrizacija, nauja sistema) | Parengti aiškų ir darbuotojams suprantamą pranešimą | Tonas, aiškumas, pasipriešinimo mažinimas |
| **5** | **Personalo Sprendimų Analizė** | Darbuotojų apklausos rezultatai, motyvacija ar efektyvumo klausimai | Išanalizuoti situaciją ir pateikti veiksmų planą vadovybei | Duomenų interpretacija, prioritetai, realūs sprendimai |
| **6** | **Kliento Skundo Valdymas** | Nepatenkinto kliento situacija ar reputacinė rizika | Parengti atsakymą klientui ir vidinį veiksmų planą problemai spręsti | Empatija, atsakomybė, sprendimo struktūra |

---

## 2. Dabartinė vs nauja struktūra

### 2.1 Rinkinys (4 → 6)

| Dabartinis | Naujas |
|------------|--------|
| Scenarijus 1: Pardavimų Analizė (E-commerce) | **Scenarijus 2:** Pardavimų Analizė ir Veiksmų Planas (perdarytas, fokusas į veiksmus) |
| Scenarijus 2: Marketingo Planas (B2B) | **Scenarijus 3:** Marketingo Kampanijos Planas (perdarytas, kampanijos + kanalai + KPI) |
| Scenarijus 3: HR Dokumentas | **Scenarijus 5:** Personalo Sprendimų Analizė (perdarytas, fokusas į sprendimus) |
| Scenarijus 4: Produkto Aprašymas | **Pašalintas** (pakeičiamas naujais) |
| — | **Scenarijus 1:** Vadovo Strateginė Ataskaita (naujas) |
| — | **Scenarijus 4:** Vidaus Komunikacijos Dokumentas (naujas) |
| — | **Scenarijus 6:** Kliento Skundo Valdymas (naujas) |

### 2.2 Slide ID ir sąrašas

| Vieta | Slide id | Tipas | Scenarijus |
|-------|----------|-------|------------|
| Praktikos Įvadas | 30 | `practice-intro` | — |
| Scenarijus 1 | 31 | `practice-scenario` | Vadovo Strateginė Ataskaita |
| Scenarijus 2 | 32 | `practice-scenario` | Pardavimų Analizė ir Veiksmų Planas |
| Scenarijus 3 | 33 | `practice-scenario` | Marketingo Kampanijos Planas |
| Scenarijus 4 | 34 | `practice-scenario` | Vidaus Komunikacijos Dokumentas |
| Scenarijus 5 | 35 | `practice-scenario` | Personalo Sprendimų Analizė |
| Scenarijus 6 | 36 | `practice-scenario` | Kliento Skundo Valdymas |
| Praktikos Santrauka | 37 | `practice-summary` | — |

**Pastaba:** Jei `practice-summary` jau egzistuoja su kitu id – palikti esamą; įterpti naujus scenarijus 31–36.

---

## 3. Agentų seka (mišri užduotis)

Užduotis apima **turinį + JSON + UI**, todėl privaloma pipeline pagal `docs/development/AGENT_ORCHESTRATOR.md` §4:

| Eilė | Agentas | Veikla | Išvestis |
|------|---------|--------|----------|
| **1** | **CONTENT_AGENT** | Apibrėžti 6 scenarijų turinį (context, data, constraints, expectedFormat, fokusas kiekvienam); atnaujinti `turinio_pletra.md` § Modulis 3; 6× instructions (6 žingsnių), partialSolution, template | Atnaujintas turinio SOT; konkretūs tekstai DATA_AGENT |
| **2** | **DATA_AGENT** | Įrašyti 6 scenarijus į `modules.json`; pridėti slide id 35, 36 (ir 37 jei reikia); sync su `src/types/modules.ts`; validacija JSON | `modules.json` su 6 scenarijais |
| **3** | **CODING_AGENT** (+ UI_UX_AGENT gairės) | Praktikos Įvadas: „X iš 6 užbaigta“; CTA tekstai scenarijams („Pereiti prie Scenarijaus 2“ … „Į Praktikos santrauką“); progreso logika `completedTasks` 6 scenarijams | Atnaujinti `ModuleView.tsx`, `TestPracticeSlides.tsx`, `progress.ts` |
| **4** | **CODE_REVIEW_AGENT** | Patikra: ar SOT laikomasi, ar JSON validus, ar progresas veikia 6 scenarijams, edge cases | Diagnozė, rizikų sąrašas |
| **5** | **QA_AGENT** | Atnaujinti `CONTENT_MODULIU_ATPAZINIMAS.md` („Modulis 3 = 6 scenarijai“); `CHANGELOG.md`; `TODO.md` | Dokumentacija |

---

## 4. Fazės ir priklausomybės

### Fazė 1: Turinio paruošimas (CONTENT_AGENT)

**4.1 Scenarijų specifikacija (context, data, constraints, expectedFormat)**

Kiekvienam iš 6 scenarijų CONTENT_AGENT apibrėžia:

- **context** – 1–2 sakiniai, kas esate ir ką darote
- **data** – konkretūs skaičiai, metrikos, faktai (realūs pavyzdžiai)
- **constraints** – laikas, biudžetas, komanda, apribojimai
- **expectedFormat** – kokį dokumentą/formatą reikia gauti

**4.2 Instrukcijos (6 žingsnių × 6 scenarijų)**

Kiekvienas scenarijus turi `instructions.steps` su 6 žingsniais:
1. META blokas
2. INPUT blokas
3. OUTPUT blokas
4. REASONING blokas
5. QUALITY blokas
6. ADVANCED blokas

Kiekvienam žingsniui:
- `title`, `description`, `hint`, `partialSolution`

**4.3 Pilnas pavyzdys (template)**

Kiekvienam scenarijui – pilnas 6 blokų promptas (`template`), kopijuojamas su CopyButton.

**4.4 Turinio SOT atnaujinimas**

- `turinio_pletra.md` – skyrius „💼 Modulis 3: Praktinis Pritaikymas“ – pakeisti 4 scenarijus į 6 su trumpais aprašymais.

---

### Fazė 2: Duomenų sinchronizacija (DATA_AGENT)

**2.1 `modules.json`**

- Modulio 3 `slides`: ištrinti seną slide 34 (Produkto Aprašymas), pridėti naujus 31–36 pagal CONTENT_AGENT specifikaciją.
- `subtitle`: „6 verslo scenarijai su 6 blokais“
- `description`: atnaujinti pagal 6 scenarijų turinį.
- Kiekvienas `practice-scenario` slide: `scenario`, `practicalTask` su `instructions`, `template`, `templateLabel`, `explanation`.

**2.2 Slide id planas**

- 30: practice-intro (be pakeitimų)
- 31: Vadovo Strateginė Ataskaita
- 32: Pardavimų Analizė ir Veiksmų Planas
- 33: Marketingo Kampanijos Planas
- 34: Vidaus Komunikacijos Dokumentas
- 35: Personalo Sprendimų Analizė
- 36: Kliento Skundo Valdymas
- 37: practice-summary (jei yra – palikti; jei ne – pridėti)

**2.3 Tipai**

- `src/types/modules.ts` – patikrinti, ar `Scenario`, `PracticalTask`, `InstructionStep` atitinka struktūrą. Jei reikia – papildyti.

---

### Fazė 3: UI ir progresas (CODING_AGENT)

**3.1 Praktikos Įvadas (practice-intro)**

- Scenarijų lentelė: „6 scenarijų“ vietoj „4 scenarijų“.
- Progresas: „X iš 6 užbaigta“.
- Navigacija: paspaudus scenarijų kortelę – eiti į atitinkamą slide (31–36).

**3.2 CTA mygtukai**

Pagal `PLAN_MODULIO_3_UI_UX.md` § #10:
- Scenarijaus 1 pabaiga: „Pereiti prie Scenarijaus 2“
- Scenarijaus 2: „Pereiti prie Scenarijaus 3“
- …
- Scenarijaus 6: „Į Praktikos santrauką“

**3.3 Progreso logika**

- `progress.completedTasks[moduleId]` – palaikyti 6 scenarijų slide id (31–36).
- `ModuleView.tsx` – navigacija ir CTA pagal 6 scenarijų sąrašą.

**3.4 UI_UX_AGENT gairės**

- Žr. `docs/development/UI_UX_AGENT.md`.
- Layout, a11y, touch targets, dark mode – visi nauji elementai atitinka projekto stilius.

---

## 5. Detalūs scenarijų aprašymai (CONTENT_AGENT šablonas)

Šie aprašymai – **šablonas** CONTENT_AGENT darbui. Kiekvienas turi būti išplėstas iki pilno `context`, `data`, `constraints`, `expectedFormat` ir 6 žingsnių instrukcijų.

### 1️⃣ Vadovo Strateginė Ataskaita

- **Kontekstas:** Ketvirčio ar pusmečio rezultatų apžvalga valdybai / savininkams.
- **Užduotis:** Parengti aiškią, struktūruotą ataskaitą su KPI, rizikomis ir prioritetais.
- **Fokusas:** Sprendimų logika, santrauka, rekomendacijos.
- **Pavyzdiniai duomenys:** Q2 2024 rezultatai – pajamos, marža, projekto būsena, rizikos.
- **Formatas:** Executive Summary, 1–2 puslapiai, KPI dashboard, 3 prioritetai.

### 2️⃣ Pardavimų Analizė ir Veiksmų Planas

- **Kontekstas:** Pardavimų augimas, kritimas arba stagnacija.
- **Užduotis:** Išanalizuoti duomenis ir pateikti konkrečius veiksmus rezultatams gerinti.
- **Fokusas:** Skaičiai → įžvalgos → veiksmai.
- **Pavyzdiniai duomenys:** Q3 pardavimai, metrikos vs planas, segmentų palyginimas.
- **Formatas:** Analizė + 5 konkrečių veiksmų su terminais ir atsakingais.

### 3️⃣ Marketingo Kampanijos Planas

- **Kontekstas:** Nauja kampanija ar produkto komunikacija rinkoje.
- **Užduotis:** Sukurti aiškų veiksmų planą su auditorija, kanalais ir KPI.
- **Fokusas:** Struktūra, tikslumas, rezultato matavimas.
- **Pavyzdiniai duomenys:** Biudžetas, tikslinė auditorija, kanalai, konkurentai.
- **Formatas:** Strateginis dokumentas su kanalais, KPI, laikotarpiu.

### 4️⃣ Vidaus Komunikacijos Dokumentas

- **Kontekstas:** Pokyčiai organizacijoje (strategija, restruktūrizacija, nauja sistema).
- **Užduotis:** Parengti aiškų ir darbuotojams suprantamą pranešimą.
- **Fokusas:** Tonas, aiškumas, pasipriešinimo mažinimas.
- **Pavyzdiniai duomenys:** Kas keičiasi, kodėl, kada, ką darbuotojai turi žinoti.
- **Formatas:** Vidinis pranešimas / el. laiškas, 300–500 žodžių, Q&A skyrius.

### 5️⃣ Personalo Sprendimų Analizė

- **Kontekstas:** Darbuotojų apklausos rezultatai, motyvacija ar efektyvumo klausimai.
- **Užduotis:** Išanalizuoti situaciją ir pateikti veiksmų planą vadovybei.
- **Fokusas:** Duomenų interpretacija, prioritetai, realūs sprendimai.
- **Pavyzdiniai duomenys:** Apklausos rezultatai, problemos sritys, biudžetas.
- **Formatas:** Ataskaita su analize ir veiksmų planu.

### 6️⃣ Kliento Skundo Valdymas

- **Kontekstas:** Nepatenkinto kliento situacija ar reputacinė rizika.
- **Užduotis:** Parengti atsakymą klientui ir vidinį veiksmų planą problemai spręsti.
- **Fokusas:** Empatija, atsakomybė, sprendimo struktūra.
- **Pavyzdiniai duomenys:** Skundo aprašymas, istorija, kliento tipas.
- **Formatas:** Atsakymas klientui (el. laiškas) + vidinis veiksmų planas (3–5 punktai).

---

## 6. Failų sąrašas (kintami)

| Failas | Agentas | Ką keisti |
|--------|---------|-----------|
| `turinio_pletra.md` | CONTENT_AGENT | § Modulis 3 – 6 scenarijai, trumpi aprašymai |
| `src/data/modules.json` | DATA_AGENT | Modulio 3 slides 31–36 (37), scenario, practicalTask, instructions |
| `src/types/modules.ts` | DATA_AGENT / CODING_AGENT | Patikrinti Scenario, PracticalTask tipus |
| `src/components/ModuleView.tsx` | CODING_AGENT | CTA tekstai, 6 scenarijų navigacija |
| `src/components/slides/types/TestPracticeSlides.tsx` | CODING_AGENT | PracticeIntroSlide – 6 kortelės, progresas |
| `src/utils/progress.ts` | CODING_AGENT | completedTasks – 6 scenarijų slide id |
| `docs/CONTENT_MODULIU_ATPAZINIMAS.md` | QA_AGENT | „Modulis 3 = 6 scenarijai“ |
| `CHANGELOG.md` | QA_AGENT | Versija, modulio 3 pakeitimai |
| `TODO.md` | QA_AGENT | Sekančios užduotys (jei reikia) |

---

## 7. Rizikos ir priemonės

| Rizika | Priemonė |
|--------|----------|
| Modulio 3 trukmė padidės (6 vs 4 scenarijai) | Atnaujinti `duration` (pvz. „25–30 min“); dalyviai gali rinktis 3–4 scenarijus |
| Duomenų apimtis `modules.json` | Validacija, maži diffai; CONTENT_AGENT pateikia tekstus, DATA_AGENT – tik struktūrą |
| Progreso regresija | CODE_REVIEW_AGENT patikrina `completedTasks` ir atrakinimo logiką |
| CTA painiava (6 scenarijų eilė) | Aiški lentelė CTA tekstams `ModuleView` arba perduodant `nextLabel` |

---

## 8. Sekų tvarka (rekomenduojama)

1. **CONTENT_AGENT** – parašyti visus 6 scenarijų tekstus (context, data, constraints, expectedFormat, 6× instructions, partialSolution, template). Išvestis: atnaujintas `turinio_pletra.md` + `.md` arba JSON draft DATA_AGENT.
2. **DATA_AGENT** – įrašyti į `modules.json`, validuoti, sinchronizuoti su tipais.
3. **CODING_AGENT** – atnaujinti PracticeIntroSlide (6 kortelės), ModuleView (CTA), progress (6 slide id).
4. **CODE_REVIEW_AGENT** – patikra.
5. **QA_AGENT** – dokumentacija, CHANGELOG, CONTENT_MODULIU_ATPAZINIMAS.

---

## 9. Privalomi kokybės vartai (kiekvienam agentui)

Kiekvienas agentas atsakymo pabaigoje privalo pateikti:

```
CHANGES:
- failas → ką pakeitei (1–3 eil.)

CHECKS:
- ką patikrinai (build/test/lint) arba „negalėjau, nes …“

RISKS:
- 1–3 realios rizikos (konkretu)

NEXT:
- 1–3 sekančios užduotys (konkretu, su failais)
```

---

*Atnaujinta: 2026-02-11. Nuorodos: AGENT_ORCHESTRATOR.md, CONTENT_MODULIU_ATPAZINIMAS.md, PLAN_MODULIO_3_UI_UX.md.*
