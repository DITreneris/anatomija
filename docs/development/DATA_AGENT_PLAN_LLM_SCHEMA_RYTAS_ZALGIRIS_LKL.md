# Data Agent: detalus planas – LLM schemos skaidrė (Rytas, Žalgiris, LKL)

> **Tikslas:** Paruošti skaidrę su **schema**, kuri paaiškina autoregresinį LLM veikimą (žingsnis N → LLM → tikimybės → pasirinktas tokenas → žingsnis N+1), naudojant **Lietuvos krepšinio** kontekstą: Vilniaus „Rytas“, Kauno „Žalgiris“, Lietuvos Krepšinio lyga (LKL), kad būtų priimtina ir suprantama lietuviškai orientuotam kursui.

---

## 1. Kontekstas ir nuoroda

- **Referencinė schema:** „Figure 2. Autoregressive language model“ – [RBC Borealis, A high-level overview of Large Language Models](https://rbcborealis.com/research-blogs/a-high-level-overview-of-large-language-models/).
- **Struktūra:** Dvi dalys – (a) Žingsnis N: įvestis → LLM → išvestis (tikimybių lentelė) → „pasirinkti X“; (b) Žingsnis N+1: praplėsta įvestis → LLM → nauja tikimybių lentelė.
- **Lokalizacija:** Vietoj „The Toronto Raptors won the 2019“ / „NBA“ naudoti **Vilniaus „Rytas“**, **Kauno „Žalgiris“**, **LKL** (Lietuvos Krepšinio lyga) – pvz. „Vilniaus Rytas laimėjo 2024 m. LKL“ → tikimybės: „čempionatą“, „finalą“, „sezoną“ ir pan.

---

## 2. Data Agent atsakomybės ribos

| Ką daro Data Agent | Ko nedaro |
|--------------------|-----------|
| Duomenų struktūra skaidrei (`modules.json`): `type`, `content`, sekcijos, **tekstai blokams** (įvesties pavyzdžiai, tokenų pavadinimai, tikimybės) | Pats vizualas (SVG/React diagrama) – tai SCHEME_AGENT arba CODING_AGENT |
| Šaltinių nuorodos ir etiketės (RBC Borealis, OpenAI) | Geometrija, rodyklės, layout – SCHEME_AGENT |
| Skaidrės id, vietą modulyje, tipą (`content-block` su `section.image` arba atskiru diagramos bloku) | Komponento implementacija (React/SVG) – CODING_AGENT |

Data Agent paruošia **duomenų planą ir JSON struktūrą** – kas bus rodoma schemoje (tekstai, žingsniai, šaltiniai). Schemos piešimas – pagal `docs/development/SCHEME_AGENT.md`.

---

## 3. Rekomenduojama duomenų struktūra skaidrei

### 3.1 Variantas A: esamo tipo skaidrė su paveikslu

- **Tipas:** `content-block`.
- **Turinys:** `sections` su viena sekcija „Kaip veikia LLM?“ (jau įdėta į skaidrę 40.8) + **nuoroda į schemos paveikslą**.
- **Paveikslas:** Schema išsaugota kaip vaizdas (PNG/SVG) į `public/` (pvz. `public/llm_autoregressive_rytas_zalgiris.svg` arba `.png`).
- **JSON pavyzdys (papildomas laukas skaidrei 40.8 arba naujai skaidrei):**

```json
{
  "heading": "Kaip veikia LLM? (schema)",
  "body": "Žemiau – autoregresinis procesas: įvestis → LLM → tikimybės → pasirinktas žodis → praplėsta įvestis. Pavyzdys su LKL kontekstu.",
  "image": "/llm_autoregressive_rytas_zalgiris.png",
  "imageAlt": "Autoregresinio kalbos modelio schema: žingsnis N ir N+1 su Rytas, Žalgiris, LKL pavyzdžiais",
  "blockVariant": "brand"
}
```

- **Šaltinis:** Sekcijoje „Šaltiniai“ jau yra RBC Borealis nuoroda; diagramos autorius – tą pačią nuorodą naudoti.

### 3.2 Variantas B: atskira skaidrė tik schemai (rekomenduojama, kai schema bus nubraižyta)

- **Nauja skaidrė** prieš arba po 40.8, pvz. id **40.85**.
- **Tipas:** `content-block` su **viena sekcija** – `heading` + `body` (trumpas įvadas) + `image` → schema.
- **Duomenų laukai schemai (jei vėliau schema bus interaktyvi React komponente):**
  - `steps`: masyvas, pvz. `[{ "label": "Žingsnis N", "input": "Vilniaus Rytas laimėjo 2024", "outputTokens": [{ "token": "m.", "prob": "22%" }, { "token": "LKL", "prob": "18%" }, ...], "chosen": "m." }, { "label": "Žingsnis N+1", "input": "Vilniaus Rytas laimėjo 2024 m.", "outputTokens": [...], "chosen": "LKL" }]`.
  - Data Agent gali paruošti šį `steps` masyvą `modules.json` skaidrės `content` dalyje, kad SCHEME_AGENT / CODING_AGENT vėliau naudotų jį diagramos komponente.

---

## 4. Detalus žingsnių planas Data Agent

### Žingsnis 1: Nuspręsti skaidrės vietą

- **Variantas 1:** Schema įtraukta į **esančią skaidrę 40.8** (InstructGPT + LLM paaiškinimas) – pridėti `image` ir `imageAlt` į sekciją „Kaip veikia LLM?“ (kai failas bus paruoštas).
- **Variantas 2:** Atskira skaidrė „Kaip veikia LLM? (schema)“ su id 40.85 tarp 40.8 ir 41 – naudinga, jei schema bus didelė arba interaktyvi.

**Rekomendacija:** Kol schema nėra nubraižyta – palikti skaidrę 40.8 su tekstiniu paaiškinimu (jau įdėta). Kai SCHEME_AGENT/CODING_AGENT paruoš vizualą, Data Agent pridės į JSON:
- arba `section.image` = `/llm_autoregressive_rytas_zalgiris.png` (arba .svg) į 40.8,
- arba naują skaidrę 40.85 su `content.sections[0].image` ir tą patį šaltinį.

### Žingsnis 2: Paruošti tekstinius duomenis schemai (Data Agent)

Naudoti lietuviškus pavyzdžius, kad schema būtų suvokiama:

| Elementas | Pavyzdys (Žingsnis N) | Pavyzdys (Žingsnis N+1) |
|-----------|------------------------|-------------------------|
| **Įvesties tekstas** | „Vilniaus Rytas laimėjo 2024“ | „Vilniaus Rytas laimėjo 2024 m.“ |
| **Tokenai (išvestis)** | „m.“ (22%), „LKL“ (18%), „čempionatą“ (15%), „sezoną“ (10%)… | „LKL“ (20%), „čempionatą“ (18%), „finalą“ (12%)… |
| **Pasirinktas tokenas** | „m.“ | „LKL“ |

- **Etiketės diagramoje:** „Įvestis“, „LLM“, „Išvestis (tikimybės)“, „Pasirinkta: …“, „Žingsnis N“, „Žingsnis N+1“.
- **Šaltinis:** RBC Borealis – A high-level overview of Large Language Models. URL: https://rbcborealis.com/research-blogs/a-high-level-overview-of-large-language-models/

### Žingsnis 3: JSON struktūra, kai schema bus kaip statinis vaizdas

Pridėti į skaidrę 40.8 (arba 40.85) sekciją:

```json
{
  "heading": "Kaip veikia LLM? (schema)",
  "body": "Autoregresinis procesas: kiekvienas žodis priklauso nuo ankstesnių. Pavyzdys su Vilniaus „Rytas“, Kauno „Žalgiris“ ir LKL kontekstu.",
  "image": "/llm_autoregressive_rytas_zalgiris.png",
  "imageAlt": "LLM schema: žingsnis N (įvestis → LLM → tikimybės → pasirinktas tokenas) ir žingsnis N+1 su praplėsta įvestimi. Pavyzdžiai: Rytas, Žalgiris, LKL.",
  "blockVariant": "brand"
}
```

Failas `public/llm_autoregressive_rytas_zalgiris.png` (arba `.svg`) – atsiranda, kai SCHEME_AGENT/CODING_AGENT nubraižys schemą pagal šį planą.

### Žingsnis 4: Jei schema bus React/SVG komponentas

- **SOT schemai:** `src/components/slides/shared/` – naujas failas, pvz. `LlmAutoregressiveDiagram.tsx` (SCHEME_AGENT nusprendžia pavadinimą).
- **Duomenų struktūra:** `content` gali turėti pvz. `llmDiagramSteps` (žingsnių masyvas su `input`, `outputTokens`, `chosen`) – Data Agent užpildo `modules.json`, CODING_AGENT/SCHEME_AGENT – komponentą, kuris skaito tą `content` ir piešia diagramą.
- **Projekto gairės:** Rodyklės, proporcijos, spalvos – pagal `SCHEME_AGENT.md` (brand/accent, rodyklės kraštas į kraštą, etiketės virš rodyklių jei reikia).

---

## 5. Santrauka – kas kam

| Agentas | Užduotis |
|---------|----------|
| **Data Agent** | Skaidrės 40.8 turinys (LLM paaiškinimas) – atlikta. Paruošti planą ir būsimą JSON: `image` kelias, `imageAlt`, galimas `llmDiagramSteps` masyvas su Rytas/Žalgiris/LKL tekstais. |
| **SCHEME_AGENT** | Nubraižyti schemą (SVG arba React): Žingsnis N / N+1, blokai (įvestis, LLM, išvestis), rodyklės, tikimybių lentelės. Naudoti šį dokumentą + `SCHEME_AGENT.md`. |
| **CODING_AGENT** | Jei schema – React komponentas: naujas `LlmAutoregressiveDiagram.tsx`, integracija į `ContentSlides.tsx` pagal `content.llmDiagramSteps` arba `section.image`. |
| **CONTENT_AGENT** | Jei reikia patikslinti antraštes ar paaiškinimo tekstus lietuvių kalba (Rytas, Žalgiris, LKL terminologija). |

---

## 6. Šaltiniai

- RBC Borealis. A high-level overview of Large Language Models (autoregressive schema). https://rbcborealis.com/research-blogs/a-high-level-overview-of-large-language-models/
- Projekto SCHEME_AGENT gairės: `docs/development/SCHEME_AGENT.md`
- Skaidrės 40.8 duomenys: `src/data/modules.json` (id 40.8, type `content-block`)
