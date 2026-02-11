# CONTENT_AGENT išvestis: DI prezentacijos workflow skaidrė (id 47)

> **Data:** 2025-02-08  
> **Užduotis:** Skaidrės turinio analizė, geriausių praktikų paieška, pasiūlymai SCHEME_AGENT / DATA_AGENT / CODING_AGENT.

---

## 1. Skaidrės turinio analizė

**Skaidrė:** Modulio 4, id 47 – „Optional: Per 15 min – 8 skaidrių prezentacija su DI“  
**Tipas:** `content-block`  
**Šaltinis:** `src/data/modules.json`, `docs/turinio_pletra_moduliai_4_5_6.md`

### 1.1 Turinio blokai (dabartinė struktūra)

| Blokas | heading | Turinys (santrauka) |
|--------|---------|---------------------|
| 1 | Rezultatas ir praktinis panaudojimas | 15 min → 8 skaidrės; edukacija; artefaktas (atsisiuntimas ateityje) |
| 2 | **DI prezentacijos workflow (universalus)** | **5 žingsniai:** Tikslas, Struktūra, Turinio generavimas, Vizualizacija, Poliravimas. Įrankiai: Gamma, SlidesAI, Canva, Prezent.ai |
| 3 | 8 skaidrių struktūra (mini-šablonas) | Kopijuojama struktūra: 1–8 skaidrės (problema→CTA) |
| 4 | Master prompt: struktūra | Kopijuojamas promptas |
| 5 | Promptas turinio (6 blokų) | Pilnas META/INPUT/OUTPUT promptas |
| 6 | Takeaway | „Geras promptas + aiški struktūra = 80%“ |

### 1.2 5 žingsnių workflow (semantinė specifikacija)

| # | Žingsnio pavadinimas | Aprašymas (vienas sakinys) |
|---|----------------------|----------------------------|
| 1 | Tikslas | Kam prezentacija ir kokia auditorija |
| 2 | Struktūra | 8 skaidrių karkasas (žr. žemiau) |
| 3 | Turinio generavimas | Tekstas ir idėjos su DI |
| 4 | Vizualizacija | Layout ir grafikai |
| 5 | Poliravimas | CTA, aiškumas, paprastumas |

**Srautas:** Nuoseklus (1→2→3→4→5), be šakų, be grįžtamojo ryšio.

---

## 2. Geriausios praktikos workflow vizualizavimui mokymuose

### 2.1 Iš šaltinių (Creately, Smartsheet, Camunda, Trailhead)

- **Flowchart** – nuoseklūs žingsniai, rodyklės, dėžutės – tinkamas dokumentuoti procesus.
- **Layout:** iš viršaus į apačią arba iš kairės į dešinę (natūralus skaitymo kryptis).
- **Etiketės:** aiškūs, nuoseklūs pavadinimai; vengti persidengiančių rodyklių.
- **Vizualinis suvokimas:** ~83 % žmonių geriau suvokia vizualą; vaizdai padeda įsiminti (10→65 % retention).

### 2.2 Projekto atitiktis (SCHEME_AGENT, CustomGptProcessDiagram)

- **Viena geometrijos tiesa** – visos koordinatės iš konstantų.
- **Rodyklės kraštas į kraštą** – linija nuo bloko krašto iki (kitas blokas − ARROW_MARKER_LEN).
- **Proporcingi antgaliai** – ne didesni už tarpą tarp blokų.
- **Spalvos:** brand pagrindiniam srautui, accent – paryškinimams.
- **Šriftas:** Plus Jakarta Sans; kalba lietuvių.

---

## 3. Struktūruoti pasiūlymai agentams

### 3.1 SCHEME_AGENT

**Užduotis:** Nubraižyti DI prezentacijos workflow schemą (5 žingsniai).

**Specifikacija:**
- **Žingsnių pavadinimai:** Tikslas | Struktūra | Turinio generavimas | Vizualizacija | Poliravimas
- **Topologija:** Tiesinė vertikali (1→2→3→4→5), be šakų.
- **Referencinis failas:** `CustomGptProcessDiagram.tsx` (geometrijos konstanta, rodyklės, STEP_BOXES).
- **Projekto paletė:** brand (#334e68), accent – jei reikia paryškinti CTA (Poliravimas).

**Konstantos pavyzdys (5 žingsnių):**
- BOX_H, GAP, COLS_X, COLS_W – kaip CustomGptProcessDiagram arba proporcingai.
- STEP_BOXES: 5 elementai, nuosekliai žemyn.

### 3.2 DATA_AGENT

**Užduotis:** Jei schema įtraukiama kaip atskiras vizualas – atnaujinti `modules.json` skaidrės 47 turinį.

**Galimos struktūros:**
- `content-block` sekcija su `type: "workflow-diagram"` arba `"customComponent": "DiPrezentacijosWorkflowDiagram"`.
- Arba: schema kaip įterptas komponentas esamo bloko „DI prezentacijos workflow“ – tada JSON gali likti be didelių pakeitimų; komponentas renderinamas pagal `heading` atpažinimą.

**Rekomendacija:** Minimalus JSON pakeitimas – pridėti `workflowSteps` masyvą arba `diagramComponent: "DiPrezentacijosWorkflowDiagram"` į atitinkamą sekciją.

### 3.3 CODING_AGENT (+ UI_UX_AGENT)

**Užduotis:**
1. Sukurti `DiPrezentacijosWorkflowDiagram.tsx` (arba integruoti į esamą `SlideContent` / content-block renderį).
2. Atitikti SCHEME_AGENT geometriją ir vizualines taisykles.
3. A11y: `aria-label`, `role="img"` diagramai.

**Artefaktas:** Atsisiuntimo funkcija – TODO.md jau fiksuoja „įgyvendinti ateityje“; šiame žingsnyje nepakeisti.

---

## 4. CHANGES (CONTENT_AGENT)

- Sukurtas `docs/development/CONTENT_AGENT_OUTPUT_workflow_skaidre.md` – turinio analizė, best practices, pasiūlymai agentams.

---

## 5. CHECKS

- Peržiūrėtas `modules.json` skaidrės 47 turinys.
- Peržiūrėtas `docs/turinio_pletra_moduliai_4_5_6.md` (Modulio 4 kontekstas).
- Ieškota geriausių praktikų (workflow viz e-learning).

---

## 6. RISKS

- **Rizika 1:** Jei schema bus per didelė – gali persidengti su kopijuojamais blokais; rekomenduojama kompaktiška išdėstymas (max-w).
- **Rizika 2:** 5 žingsnių pavadinimai ilgesni („Turinio generavimas“) – reikia riboti teksto ilgį arba mažinti fontą.
- **Rizika 3:** Tokenų limitas – dokumentas supaprastintas; pilnas turinys moduliuose gali reikalauti papildomo sinchrono.

---

## 7. NEXT

1. **CODE_REVIEW_AGENT** – UI/UX workflow diagnozė (dabartinė būklė skaidrės 47, spragos, rekomendacijos).
2. **SCHEME_AGENT** – nubraižyti DI prezentacijos workflow schemą pagal 3.1 specifikaciją.
3. **DATA_AGENT** – atnaujinti JSON, jei SCHEME_AGENT/CODING_AGENT reikalaus naujos struktūros.
