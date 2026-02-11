# Skaidrių tipų, turinio ir atvaizdavimo analizė

> **Tikslas:** Aiškiai aprašyti skaidrių tipus, jų duomenų šaltinius, atvaizdavimą ir konkrečius tobulinimų siūlymus.  
> **Šaltiniai:** `src/components/slides/`, `SlideContent.tsx`, `ModuleView.tsx`, `src/types/modules.ts`, `src/data/modules.json`, `docs/CONTENT_MODULIU_ATPAZINIMAS.md`, `UI_KOMPONENTU_ANALIZE.md`, `docs/MODULIAI_4_5_6_STRUKTUROS_ANALIZE.md`, `docs/PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md`.

---

## 1. Skaidrių tipų inventorius

### 1.1 Pagal duomenų šaltinį

| Kategorija | Skaidrių tipai | Duomenų šaltinis | Pavyzdžiai |
|------------|----------------|------------------|------------|
| **A) Content-driven (JSON)** | `module-intro`, `content-block`, `glossary`, `definitions`, `di-modalities`, `pie-chart`, `ai-workflow`, `prompt-types`, `prompt-techniques`, `workflow-summary`, `prompt-template`, `transition-3-to-6`, `infographic` | `slide.content` (specifinis tipas pagal `SlideType`) | Modulio 4 daug `content-block`; definitions, glossary – pilnas content |
| **B) Block + PracticalTask** | `meta`, `input`, `output`, `reasoning-models`, `reasoning`, `quality`, `advanced`, `advanced-2`, `full-example` | Hardcoded turinys komponente + `slide.practicalTask` (JSON) | Modulio 1 blokų skaidrės |
| **C) Hardcoded (be content)** | `intro`, `hierarchy`, `comparison`, `summary`, `practice-summary` | Visas turinys – kode (`AllSlides.tsx`) | IntroSlide, HierarchySlide, ComparisonSlide |
| **D) Test/Quiz** | `test-intro`, `test-section`, `test-results` | `slide`, `slide.testQuestions`, `progress` | Moduliai 2 ir 5 |
| **E) Practice** | `practice-intro`, `practice-scenario` | `slide`, `slide.scenario`, `slide.practicalTask`, `progress` | Moduliai 3 ir 6 |
| **F) Special** | `hallucination-dashboard` | Atskiras komponentas (`HallucinationRatesDashboard`), be `slide.content` | Modulio 4 skaidrė 200 |

### 1.2 Skaidrių skaičius pagal modulį

| Modulis | Skaidrės | Dažniausi tipai |
|---------|----------|------------------|
| 1 | 20 | intro, infographic, definitions, workflow-summary, prompt-types, prompt-techniques, prompt-template, transition-3-to-6, hierarchy, meta/input/output/reasoning/quality/advanced, full-example, comparison, glossary, summary |
| 2 | 7 | test-intro, test-section (5×), test-results |
| 3 | 6 | practice-intro, practice-scenario (4×), practice-summary |
| 4 | ~50+ | module-intro, content-block (daug), di-modalities, pie-chart, ai-workflow, glossary, hallucination-dashboard |
| 5 | ~10 | test-intro, test-section, test-results |
| 6 | ~5+ | practice-intro, practice-scenario, content-block |

---

## 2. Atvaizdavimo architektūra

### 2.1 Srautas

```
modules.json (Slide[])
    ↓
ModuleView.tsx
  → currentSlideData (title, subtitle, type, content, practicalTask, …)
  → Render: header (title + subtitle) + SlideContent
    ↓
SlideContent.tsx
  → switch (slide.type) → atitinkamas *Slide komponentas
```

### 2.2 Bendras skaidrės layout (ModuleView)

- **Antraštė:** `slide.title` ir `slide.subtitle` visada rodomi viršuje (eil. 298–301).
- **Turinys:** `SlideContent` – pagal `slide.type` renderina skaidrės kūną.
- **Fallback:** Jei tipas neatpažintas – rodoma `slide.title - slide.subtitle` + PracticalTask (jei yra).

### 2.3 Problema: antraštė vs turinys

- Kai kurios skaidrės (pvz. `intro`, `summary`) turinyje dar kartą kartojasi panašūs tekstai („Apie šį mokymą“, „Po šio mokymo galėsite“).
- `slide.title` / `slide.subtitle` iš JSON naudojami **tik** header‘yje – skaidrės komponentai jų dažniausiai nenaudoja.
- Dubliavimas: jei content-driven skaidrė turi savo antraštę (pvz. `content.sections[0].heading`), ji gali nesutapti su header `title`.

---

## 3. Problemas ir spragas

### 3.1 Hardcoded skaidrės (kategorija C)

| Skaidrė | Problema | Rizika |
|---------|----------|--------|
| **IntroSlide** | Tekstas, įrankių sąrašas (ChatGPT, Claude, …), „Po šio mokymo galėsite“ – viskas kode | Turinio keitimui reikia pakeisti kodą; nesinchronuojama su SOT |
| **HierarchySlide** | 6 blokų masyvas (num, name, desc, priority, color) – hardcoded | Modulio 1 SOT (`turinio_pletra.md`) keitimas nerefleksuojamas |
| **ComparisonSlide** | `unstructuredPrompt` ir `structuredPrompt` – hardcoded | Negalima keisti pavyzdžių be deploy |
| **SummarySlide** | Blokai („Ką išmokote“, „6 blokai“, …) – hardcoded | Tas pats kaip HierarchySlide |
| **PracticeSummarySlide** | „Praktika baigta“, CTA – hardcoded | Modulio 3/6 santraukos neperžiūrimos per JSON |

**Siūlymas:** Perkelti į content-driven tipus su `slide.content` (žr. 4.1).

---

### 3.2 Block skaidrės (meta, input, output, …)

| Aspektas | Būklė | Pastaba |
|----------|--------|---------|
| Turinys | Hardcoded kiekviename `*BlockSlide` | Struktūra (antraštė, aprašymas, pavyzdžiai) – kode |
| PracticalTask | JSON (`slide.practicalTask`) | Gerai – redaguojama per modules.json |
| Dubliavimas | Antraštės kartais sutampa su `slide.title` | Maža problema, bet gali būti neatitikimas |

**Siūlymas:** Svarstyti content-driven block tipus (pvz. `meta` → `content-block` su `blockNumber: 1`), jei norima visą blokų turinį valdyti per JSON. Tai didesnis refaktoras – žr. 4.2.

---

### 3.3 Content-block skaidrės (Modulio 4)

| Aspektas | Būklė | Tobulinimas |
|----------|--------|-------------|
| Struktūra | `sections: [{ heading?, body }]` | Pakanka daugumai |
| Vizualai | `comparisonImages?: { left, right }` – pasirinktinai | Modulio 4 daug skaidrių be vizualų – galima pridėti |
| Trumpumas | Daug skaidrių turi vieną trumpą `body` | PEDAGOGINE_ANALIZE siūlo scaffolding, savitikras – tai nauji tipai arba content-block plėtimas |
| Vizualų nuorodos | Kai kur `body` mini „Vizualas: public/custom_gpt_process.svg“ | Geriau – atskiras laukas `heroImage` arba `images[]` ir renderinti automatiškai |

**Siūlymas:** Išplėsti `ContentBlockSection` – pridėti `image?: string`; arba naujas tipas `content-with-image` (žr. 4.3).

---

### 3.4 ModuleIntroSlide

| Aspektas | Būklė |
|----------|--------|
| Antraštės | „Po šio modulio galėsite:“ ir „Kodėl konteksto inžinerija?“ – hardcoded |
| Turinys | `content.learningOutcomes`, `content.whyAdvanced` – iš JSON |

**Siūlymas:** Antraštes perkelti į `content` (pvz. `headingOutcomes`, `headingWhy`) arba palikti, bet dokumentuoti kaip pastovią dalį šio tipo skaidrės.

---

### 3.5 Test ir Practice tipai

| Tipas | Būklė | Pastaba |
|-------|--------|---------|
| test-intro | Naudoja `slide` (title, subtitle) | Gerai |
| test-section | `slide.testQuestions`, `slide.id` | Gerai |
| test-results | `progress`, `onGoToModule`, `onNextSlide` | Gerai; CTA tekstai – komponente |
| practice-intro | `slide` | Gerai |
| practice-scenario | `slide.scenario`, `slide.practicalTask` | Gerai |

**Siūlymas:** TestResultsSlide CTA tekstus („Peržiūrėti Modulį 4“, „Pradėti Modulį 6“) ištraukti į `slide.content` arba modulio lygmens konfigą, jei norima keisti be kodo.

---

### 3.6 HallucinationRatesDashboard

- Atskiras komponentas, `slide.content` nenaudojamas.
- Skaidrė `type: "hallucination-dashboard"` – tik „parodymo“ tipas.

**Siūlymas:** Palikti kaip specialų tipą; jei reikės konfigūruojamų šaltinių – pridėti `content?: { sourceUrl?, title? }`.

---

## 4. Tobulinimų planas

### 4.1 Prioritetas A: Hardcoded → Content-driven

| Skaidrė | Naujas tipas arba išplėtimas | Content struktūra |
|---------|------------------------------|-------------------|
| **intro** | `intro` su `content` (nebūtinai naujas tipas) | `IntroContent?: { aboutText, tools: { name, url }[], outcomes: string[], tip?: string }` |
| **hierarchy** | `hierarchy` su `content` | `HierarchyContent: { blocks: HierarchyBlock[] }` – jau yra `HierarchyBlock` |
| **comparison** | `comparison` su `content` | `ComparisonContent: { unstructuredPrompt, structuredPrompt, labels? }` |
| **summary** | `summary` su `content` | `SummaryContent: { sections: { heading, items: string[] }[] }` |
| **practice-summary** | `practice-summary` su `content` | `PracticeSummaryContent: { title, subtitle, ctaText, nextStep? }` |

**Agentai:** CONTENT_AGENT (reikalavimai, tekstai) → DATA_AGENT (JSON + tipai) → CODING_AGENT (komponentai).

---

### 4.2 Prioritetas B: Block skaidrės content-driven (optional)

- Refaktoruoti `meta`, `input`, `output`, … į bendrą `block-slide` tipą su `content: BlockSlideContent` (blockNumber, heading, description, examples, …).
- Tai didesnis darbas – siūloma atidėti, kol bus užbaigta 4.1.

---

### 4.3 Prioritetas C: Content-block vizualų palaikymas

- Pridėti `ContentBlockSection`: `image?: string`, `imageAlt?: string`.
- Arba bendresnis `images?: { src: string; label?: string }[]` `ContentBlockContent` lygyje.
- Automatiškai rodyti vizualus, kai `body` mini „Vizualas: …“ – arba ištraukti į atskirą lauką.

**Agentai:** DATA_AGENT (struktūra) → CODING_AGENT (ContentBlockSlide render).

---

### 4.4 Prioritetas D: Modulio 4 milestone / skyriaus skaidrės

- Pagal MODULIAI_4_5_6_STRUKTUROS_ANALIZE – rekomenduojamos „milestone“ skaidrės (pvz. po 4.1*, 4.2, 4.4).
- Naujas tipas: `section-break` arba `milestone` su `content: { title, subtitle?, sectionNumber? }`.
- Paprastas dizainas: didesnė antraštė, gal optional vizualas.

**Agentai:** CONTENT_AGENT (kur dėti, tekstai) → DATA_AGENT (modules.json) → CODING_AGENT (SectionBreakSlide).

---

### 4.5 Prioritetas E: Fallback ir default case

- `SlideContent` default šaka: vietoj `slide.title - slide.subtitle` – rodyti struktūruotą placeholder su `slide.title`, `slide.subtitle` ir įspėjimu „Skaidrės tipas neatpažintas“ (dev režime).
- Logging: kai `slide.type` neatitinka nei vieno case – `console.warn` su slide.id ir type.

---

## 5. Agentų parinkimas pagal užduotį

| Užduotis | Agentas | Pirmas žingsnis |
|----------|---------|------------------|
| **Hardcoded skaidrėms suteikti content** | CONTENT_AGENT → DATA_AGENT → CODING_AGENT | CONTENT_AGENT: aprašyti IntroContent, HierarchyContent ir kt. struktūras `turinio_pletra.md` arba atskirame doc |
| **Naujas skaidrės tipas (section-break, milestone)** | CONTENT_AGENT → DATA_AGENT → CODING_AGENT | CONTENT_AGENT: nustatyti, kur Modulyje 4 dėti milestone skaidres |
| **Content-block vizualų išplėtimas** | DATA_AGENT → CODING_AGENT | DATA_AGENT: pridėti `image`/`images` į ContentBlockSection/ContentBlockContent |
| **Block skaidrės refaktoras** | CODING_AGENT (su DATA_AGENT) | Planas (3 žingsniai) – tik tada vykdymas |
| **Bendras diff / rizikų įvertinimas** | CODE_REVIEW_AGENT | Peržiūra pagal SOT, tipus, UI |
| **Dokumentacijos suderinimas** | QA_AGENT | README, docs, CHANGELOG po pakeitimų |

---

## 6. Santrauka ir rekomenduojama seka

### Kas veikia gerai

- Content-driven tipai (`content-block`, `module-intro`, `glossary`, `definitions`, …) – aiški atskirtis tarp turinio ir UI.
- `PracticalTask` – gerai integruotas, redaguojamas per JSON.
- Test ir practice tipai – pakankamai lankstūs.
- ModuleView – vienoda antraštė (title + subtitle) visoms skaidrėms.

### Pagrindinės problemos

1. **Content-driven (P2 įgyvendinta):** intro, hierarchy (id 4), comparison (id 13), summary (id 14), practice-summary (id 35) – turinys iš `modules.json`; tipai HierarchyContent, ComparisonContent, SummaryContent, PracticeSummaryContent; atgalinė suderinamumas (default turinys komponente, jei content nėra).
2. **Block skaidrės** – turinys kode; tik PracticalTask – JSON.
3. **Content-block** – trūksta standartinio vizualų palaikymo (daug skaidrių tik tekstu).
4. **Modulio 4** – ilgas, be milestone/skyriaus skaidrių.

### Rekomenduojama seka

1. **CONTENT_AGENT:** Suformuluoti IntroContent, HierarchyContent, ComparisonContent, SummaryContent, PracticeSummaryContent struktūras ir pavyzdinius tekstus (SOT).
2. **DATA_AGENT:** Atnaujinti `modules.ts` (tipai), `modules.json` (content į hardcoded skaidres).
3. **CODING_AGENT:** Pakeisti IntroSlide, HierarchySlide, ComparisonSlide, SummarySlide, PracticeSummarySlide – naudoti `content`.
4. **CONTENT_AGENT + DATA_AGENT:** Nustatyti Modulio 4 milestone skaidres ir naują `section-break` tipą.
5. **CODING_AGENT:** Įdiegti SectionBreakSlide; išplėsti ContentBlockSlide vizualams (jei priimta).
6. **CODE_REVIEW_AGENT:** Patikrinti pakeitimus; **QA_AGENT:** Atnaujinti dokumentaciją.

---

**CHANGES:**  
- Sukurtas `docs/SKAIDRIU_TIPU_ANALIZE.md` – skaidrių tipų, turinio ir atvaizdavimo analizė, tobulinimų planas, agentų parinkimas.

**CHECKS:**  
- Peržiūrėta pagal `modules.ts`, `SlideContent.tsx`, `AllSlides.tsx`, `modules.json`, esamą dokumentaciją.

**RISKS:**  
- Didesnis refaktoras (hardcoded → content) gali sugadinti esamas skaidres, jei JSON bus neteisingas – reikia testų.
- Block skaidrės refaktoras – didelė apimtis; rekomenduojama atidėti.

**NEXT:**  
1. Patvirtinti su projekto savininku: ar pradėti nuo prioriteto A (hardcoded → content).  
2. Jei taip – CONTENT_AGENT užduotis: aprašyti IntroContent, HierarchyContent ir kt.  
3. Į planą įtraukti `section-break` / milestone tipą Moduliui 4.
