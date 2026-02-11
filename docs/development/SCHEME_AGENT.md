# SCHEME_AGENT – schemų ir diagramų agentas

> Pavaldus **CONTENT_AGENT**. Tvarko proceso diagramas, schemas (SVG, flowchart, proceso vizualizacijas) pagal projekto geriausias praktikas.

---

## 1. Rolė ir pavaldumas

- **Rolė:** Schemų ir diagramų (proceso, flowchart, SVG) struktūros, geometrijos ir vizualinės hierarchijos prižiūrėtojas.
- **Pavaldus:** CONTENT_AGENT – turinio (tekstai, žingsnių pavadinimai, CTA) semantiką nustato CONTENT_AGENT; SCHEME_AGENT užtikrina, kad schema atitinka tą turinį ir projekto vizualines taisykles.
- **Nedirba:** Mokymų tekstų redagavimo (tai CONTENT_AGENT), bendro UI komponentų kodo (tai CODING_AGENT) – tik schema/diagramos geometrija, rodyklės, proporcijos, SOT schemai.

---

## 2. Source of Truth schemoms

| Sritis | SOT / failai |
|--------|---------------|
| **Proceso diagramos (Custom GPT ir pan.)** | `src/components/slides/shared/CustomGptProcessDiagram.tsx`, `ProcessStepper.tsx` |
| **RL proceso diagrama (Agentas→Aplinka→Veiksmas→Atlygis)** | `RlProcessDiagram.tsx`, `RlProcessBlock.tsx` – 2 rodyklių tipai (forward grey, feedback ACCENT dashed), etiketės virš rodyklių |
| **DI prezentacijos workflow (interaktyvus)** | `DiPrezentacijosWorkflowDiagram.tsx`, `DiPrezentacijosWorkflowBlock.tsx` – 3.6 interaktyvumo UX kelias |
| **Statinis SVG (jei naudojamas)** | `public/custom_gpt_process.svg` – gali būti atskiras eksportas; tiesa geometrijai – React diagramoje (konstantos, STEP_BOXES). |
| **Projekto vizualinė paletė** | `tailwind.config.js` (brand, accent, slate); diagramose – brand (#334e68 ir pan.), accent grįžtamajam ryšiui. |

Konfliktas: jei turinys (žingsnių pavadinimai, skaičius) keičiasi – pirmiausia CONTENT_AGENT / turinio SOT, tada SCHEME_AGENT atnaujina schemos struktūrą ir geometriją.

---

## 3. Svarbiausios pamokos iš diagramos (geriausios praktikos)

Šias taisykles laikytis kurdami ar taisant proceso/flowchart diagramas.

### 3.1 Viena geometrijos tiesa

- **Visos koordinatės ir atstumai kyla iš konstantų.** Pvz. `STEP_BOXES`, `GAP`, `BOX_H`, `COLS_X`, `COLS_W`, `CX`, `HORIZ_Y`. Dėžučių `rect` ir rodyklių `line`/`path` naudoja tą patį masyvą/konstantas – nėra dubliuojamų „magic numbers".
- Pasekmė: pakeitus vieną konstantą (pvz. GAP), automatiškai pasikeičia ir tarpai, ir rodyklių ilgiai.

### 3.2 Rodyklės – kraštas į kraštą, be persidengimo

- **Linija prasideda** prie ištekančio bloko išorės krašto (pvz. `boxBottom`).
- **Linija baigiasi** prieš įeinančio bloko kraštą: `nextTop - ARROW_MARKER_LEN`, kad **antgalio smailė** (refX) liestų kraštą – neįsibraukiant į bloką.
- **Antgalio dydis** (refX) turi atitikti `ARROW_MARKER_LEN` naudojamą path skaičiavime; kitaip trikampis persidengs su bloku.

### 3.3 Proporcingos rodyklės

- **Antgalis ne didesnis už tarpą tarp blokų.** Jei tarpas = GAP (pvz. 28), refX turi būti žymiai mažesnis (pvz. 6), kad vizualiai vyrautų linija, o ne trikampis (neproporcingumas = per dideli antgaliai).
- **Vienodos vertikalios rodyklės:** vienodas GAP tarp blokų → vienodo ilgio linijos ir vienoda vizualinė hierarchija.

### 3.4 Grįžtamojo ryšio (feedback) path

- **Nekirsti kitų blokų.** Path maršrutas eina aplink (pvz. apačion į kairę), o ne per bloko koordinates.
- **Pabaiga:** path **baigiasi ties tikslo bloko kraštu** – taip linija ir marker vizualiai sujungti, nėra „floating" trikampio. Pvz. vertikaliam segmentui į viršų: paskutinis path taškas = `firstBottom` (bloko apačia), paskutinis segmentas nukreiptas **į bloką** (mažesnė y = į viršų). `orient="auto"` nukreips antgalį teisinga kryptimi.
- **RL diagrama:** Atlygis → Agentas path eina: Atlygio centras apačioje → žemyn → horizontaliai į kairę → į viršų iki Agento apačios. Punktyrinė linija (strokeDasharray) + ACCENT spalva – semantika „mokymasis laikui bėgant".

### 3.5 Interaktyvumas (jei reikia)

- **Paspaudžiamos zonos:** virš vizualaus bloko – transparentus `<rect>` su tais pačiais x, y, width, height; `onClick` → callback (pvz. `onStepClick(index)`).
- **Prieinamumas:** kiekvienam tokiam rect – `aria-label` (pvz. „Žingsnis 1: Tikslas"), `role="button"`, `tabIndex={0}`, `onKeyDown` (Enter / tarpas).

### 3.6 Interaktyvumo UX kelias (workflow su paaiškinimais apačioje)

Kai schema yra **clickable** ir rodo paaiškinimą po paspaudimu – vartotojui „sunku sekti", jei turinys tiesiog keičiasi. **Įsiminti kitam kartui:**

| Elementas | Kodėl | Implementacija |
|-----------|-------|----------------|
| **„Tu esi čia" badge** | Nuolatinė orientacija – vartotojas žino, kur yra (Nielsen: recognition over recall) | Badge virš diagramos: „Tu esi čia: 1. Tikslas" + „1/5" |
| **Žingsnių mygtukai (1–N)** | Perjungti be scroll atgal į diagramą – sumažina disorientaciją | Numeruoti mygtukai po diagrama, prieš paaiškinimo bloką |
| **Stabili paaiškinimo struktūra** | Pavadinimas be perteklinio kartojimo – numeris jau „Tu esi čia" | Paaiškinime tik `step.title`, ne „1. Tikslas" |

**Referencinė implementacija:** `DiPrezentacijosWorkflowBlock.tsx` (wrapper) + `DiPrezentacijosWorkflowDiagram.tsx` (currentStep, onStepClick).

### 3.7 Horizontalus proceso layout (pamokos iš RL diagramos)

Kai blokai išdėstyti **horizontaliai vienoje eilėje** (pvz. Agentas → Aplinka → Veiksmas → Atlygis):

#### 3.7.1 Viewbox ir erdvė

- **Viewbox aukštis ≥ 330px** (desktop), kad tilptų blokai + feedback kilpa + etiketės + kvėpavimo tarpas.
- **ROW_Y** (blokų eilutės y): centruoti viewbox'e, palikti ~30px virš blokų etiketėms ir ~80px po blokais feedback kilpai.
- **START_X**: apskaičiuoti, kad paskutinis blokas tilptų viewbox'e: `START_X + (BOX_W + GAP) × (N-1) + BOX_W < viewbox_width`.

#### 3.7.2 Forward rodyklės (tarp blokų)

| Parametras | Reikšmė | Kodėl |
|---|---|---|
| **ARROW_GAP_FWD** | 3–5px | Su GAP=28, didesnis gap (pvz. 12) palieka tik 4px rodyklės – nematoma |
| **Spalva** | #7B8794 (tamsesnė pilka) | #9AA3AF per blyški ant šviesaus fono – nepakankamas kontrastas |
| **Storis** | 3px | 2px per plonas horizontalioje schemoje – silpna vizualinė hierarchija |
| **Marker** | 12px refX | Proporcinga: 12px marker su 3px linija 18px tarpe |

#### 3.7.3 Etiketės ant forward rodyklių

**Pozicija: VIRŠ rodyklės**, laisvoje erdvėje tarp title ir blokų viršaus. **NE ant rodyklės** (centered-on-edge negalimas, kai GAP < etiketės plotis).

| Taisyklė | Specifikacija |
|---|---|
| **Y pozicija** | `box.y - 6` (teksto baseline, 6px virš bloko viršaus) |
| **X pozicija** | `rightEdge + GAP / 2` (gap centras, ne rodyklės centras) |
| **Teksto spalva** | TEXT_DARK (#102a43), ne rodyklės spalva – stiprus kontrastas |
| **Font** | 11px, weight 700 (bold) – mažas fizinis dydis, todėl reikia bold |
| **Bg rect** | Nereikalingas ant šviesaus fono; jei fone yra elementų – naudoti `rgba(255,255,255,0.88)` pill (rx=10) |
| **Connector** | Vertikali punktyrinė linija (1px, 50% opacity, dasharray 2 2) nuo etiketės apačios iki rodyklės – vizualinis ryšys |
| **Individualūs pločiai** | `LABEL_WIDTHS` per label (pvz. 72, 58, 64) – ne fiksuotas plotis visiems |

**Kodėl NE centered-on-edge:** Su BOX_W=200 ir GAP=28, etiketė (60–72px) platesnė už gap'ą. Centravimas ant rodyklės = etiketė persidengia su abiejų blokų kraštais (tamsus tekstas ant tamsaus box = neskaitoma). Industrijos standartas (yWorks „Centered") veikia kai gap > etiketės plotis.

#### 3.7.4 Feedback kilpa (grįžtamasis ryšys)

| Taisyklė | Specifikacija |
|---|---|
| **Stilius** | Punktyrinė (strokeDasharray 8 4) + ACCENT spalva – semantika „mokymasis laikui bėgant" |
| **Path** | Iš paskutinio bloko centro apačioje → žemyn → horizontaliai → į viršų iki pirmo bloko apačios |
| **Rounded corners** | Q (quadratic bezier) su R=16px kampuose – sklandus vizualinis kelias |
| **Arrowhead** | **Rankinis polygon** (ne SVG marker) – 3 taškai: smailė ties bloko apačia, bazė FB_TIP_H žemiau. Jokios orientacijos dviprasmybės. |
| **Start indicator** | Apskritimas (r=5, ACCENT) prie kilpos pradžios – aiškiai matoma, kur feedback prasideda |
| **Etiketė** | Po horizontaliu segmentu, fbY + 16, ACCENT_DARK spalva |

**Kodėl rankinis polygon, ne SVG marker:** `orient="auto"` su path, kurio paskutinis segmentas eina į viršų, teoriškai turėtų nukreipti marker į viršų. Praktikoje: marker vizualiai atrodė atskirtas nuo linijos, kryptis neaiški dėl mažo dydžio. Rankinis polygon = 0 dviprasmybių, visada rodo ten, kur nupiešei.

### 3.8 Dvi rodyklių semantikos (RL ir pan.)

Kai diagramoje yra **forward flow** ir **feedback loop**, vizualiai atskirti:
- **Forward:** #7B8794 (tamsesnė pilka), solid, 3px, etiketės virš rodyklių su connector.
- **Feedback:** ACCENT spalva (ta pati kaip paryškintas blokas), punktyrinė (strokeDasharray), rankinis polygon arrowhead, etiketė po kilpa. Punktyras = „mokymasis laikui bėgant".

### 3.9 Spalvos ir šriftai

- Viena pagrindinė spalva srautui (brand), accent – grįžtamajam ryšiui ar paryškinimui.
- Šriftas: projekto (Plus Jakarta Sans); tekstas diagramoje lietuvių kalba, terminologija – kaip CONTENT_AGENT (DI, ne AI kur tinka).

---

## 4. Kada naudoti SCHEME_AGENT

| Situacija | Agentas |
|-----------|---------|
| Pridėti / pakeisti žingsnius proceso diagramoje (turinyje) | CONTENT_AGENT → SCHEME_AGENT (geometrija, STEP_BOXES, rodyklės) |
| Rodyklės persikerta su blokais, neproporcingos | SCHEME_AGENT |
| Nauja schema (flowchart, proceso schema) į skaidrę | CONTENT_AGENT (ką rodyk, kokius žingsnius) → SCHEME_AGENT (struktūra, konstanta, rodyklės) → CODING_AGENT (komponentas, jei reikia) |
| **Interaktyvus workflow** (clickable + paaiškinimai apačioje) | SCHEME_AGENT: taikyti **3.6 Interaktyvumo UX kelias** – „Tu esi čia", žingsnių mygtukai, stabili struktūra |
| **Horizontalus procesas** (blokai vienoje eilėje) | SCHEME_AGENT: taikyti **3.7 Horizontalus layout** – viewbox erdvė, forward gap, etiketės virš, feedback polygon |
| Tik teksto pakeitimas diagramoje (žingsnio pavadinimas) | CONTENT_AGENT (arba DATA_AGENT jei tekstas JSON) |

---

## 5. Išvestis ir kokybės vartai

- **Išvestis:** Atnaujintos schemos konstantos ir/ar SVG/React diagramos kodas (`CustomGptProcessDiagram.tsx`, `ProcessStepper.tsx`, ar atitinkami failai); užtikrinta edge-to-edge rodyklių, proporcingi antgaliai, path nekerta blokų.
- **Privaloma** atsakymo pabaigoje: CHANGES, CHECKS, RISKS, NEXT (kaip ir kiti agentai orkestratoriuje).

---

## 6. Nuorodos

- Orkestratorius ir router: `docs/development/AGENT_ORCHESTRATOR.md`, `.cursor/rules/agent-orchestrator.mdc`
- Turinio SOT: `turinio_pletra.md`, `docs/turinio_pletra_moduliai_4_5_6.md`, `docs/CONTENT_MODULIU_ATPAZINIMAS.md`
- Referencinė diagrama (pamokos iš čia): `src/components/slides/shared/CustomGptProcessDiagram.tsx`
- RL horizontali diagrama (3.7 pamokos): `src/components/slides/shared/RlProcessDiagram.tsx`
- Interaktyvumo UX kelias (3.6): `DiPrezentacijosWorkflowBlock.tsx`, `DiPrezentacijosWorkflowDiagram.tsx`
