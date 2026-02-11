# Modulio 4 SHOULD S1, S4, S5, S6 – planas pagal tokenų limitą

> **Data:** 2026-02-07  
> **Agentai:** CONTENT_AGENT → DATA_AGENT → CODING_AGENT (pagal mišrios užduoties pipeline)  
> **SOT:** `docs/turinio_pletra_moduliai_4_5_6.md`, `docs/MODULIO_4_TOBULINIMAI_GERIAUSIOS_PRAKTIKOS.md`

---

## 1. Agentų parinkimas ir tvarka

| Užduotis | Agentas | Pagrindas |
|----------|---------|-----------|
| S1 (konteksto langas prieš RAG) | CONTENT_AGENT (SOT tikrinimas) → DATA_AGENT | Turinys jau SOT; reikia sinchronizuoti JSON ir UI |
| S4 (bridžinė praktika) | CONTENT_AGENT → DATA_AGENT | Naujas turinys SOT, tada JSON |
| S5 (optional žymėjimas) | CONTENT_AGENT (2.1 lentelė) → DATA_AGENT | Žymės SOT 2.1; JSON laukas `optional` arba prefix |
| S6 (trumpi UI pavadinimai) | CONTENT_AGENT (2.1/2.2) → DATA_AGENT → CODING_AGENT | SOT gairės; JSON `shortTitle`; UI render |

**Pipeline:** CONTENT_AGENT → DATA_AGENT → CODING_AGENT (jei reikia naujo UI lauko) → CODE_REVIEW_AGENT → QA_AGENT (TODO/CHANGELOG).

---

## 2. S1: Prieš RAG (4.2) – konteksto langas/tokenai + nuoroda į 4.4

### SOT vs UI būsena

- **SOT** (`turinio_pletra_moduliai_4_5_6.md`, eil. 414): RAG pristatyme turi būti blokas  
  *„Kontekstas ir tokenai (nuoroda į 4.4): RAG dažnai priklauso nuo to, kiek konteksto (teksto) gali įtraukti į vieną užklausą – tai lemia konteksto langas (tokenų riba). Daugiau apie tokenus, konteksto langą ir kaip taupyti – skaidrėse 4.4 Tokenų ekonomika.“*

- **`modules.json` (4.2 RAG, id 58):** NĖRA šio bloko. Yra tik: Kas yra RAG?, Nauda, Kaip veikia, Promptų gairės, Mini-šablonas.

### Veiksmai (prioritetas aukštas)

1. **DATA_AGENT:** Į 4.2 RAG skaidrės `content.sections` įterpti naują bloką **prieš** „Kas yra RAG?“:
   - `heading`: „Kontekstas ir tokenai“
   - `body`: „RAG dažnai priklauso nuo to, kiek konteksto (teksto) gali įtraukti į vieną užklausą – tai lemia konteksto langas (tokenų riba). Daugiau apie tokenus ir kaip taupyti – skaidrėse 4.4 Tokenų ekonomika. Čia pakanka žinoti: kuo daugiau tinkamai paruošto konteksto (šaltinių), tuo tikslesnis RAG atsakymas, jei jis telpa į platformos ribas.“

2. **Patikrinti:** `ModuleView` / `SlideContent` rodo `content-block` sekcijas – naujas blokas bus matomas automatiškai.

**Failai:** `src/data/modules.json` (4.2 skaidrė, id 58).

---

## 3. S4: Bridžinė praktika po 4.3 (RAG + Deep research + šaltiniai, 5–10 min)

### SOT vs dabartinė būsena

- **SOT** (`MODULIO_4_TOBULINIMAI_GERIAUSIOS_PRAKTIKOS.md`, S4): Po 4.3a – viena 5–10 min užduotis: RAG + Deep research + šaltiniai. Pvz.: „Paruošk vieną trumpą atsakymą su šaltiniais naudodamas RAG/Deep research stiliaus promptą“.

- **`turinio_pletra_moduliai_4_5_6.md`:** Nėra atskiro bloko „Bridžinė praktika“. MODULIO_4_SKAIDRIU_EILES.md – 4.3a paskutinė, po jos eina 4.4.

### Veiksmai (prioritetas vidutinis)

1. **CONTENT_AGENT:** SOT faile `turinio_pletra_moduliai_4_5_6.md` po 4.3a temų detalės pridėti poskyrį:
   - **Bridžinė praktika (po 4.3a, prieš 4.4):** Viena 5–10 min užduotis: Paruošk vieną trumpą atsakymą su šaltiniais naudodamas RAG/Deep research stiliaus promptą. Naudok Perplexity/ChatGPT paiešką arba pateiktus dokumentus. Tikslas: sujungti RAG ir Deep research praktikoje.

2. **DATA_AGENT:** Į `modules.json` Modulio 4 skaidrių seką (po 4.3a, prieš 4.4 Tokenų ekonomika) įterpti naują skaidrę:
   - `type`: `practical-task` arba `content-block` su `practicalTask`
   - Pavadinimas: „Bridžinė praktika: RAG + Deep research“
   - Turinys: trumpa instrukcija + pavyzdinis promptas (CopyButton)

3. **MODULIO_4_SKAIDRIU_EILES.md:** Pridėti eilutę tarp 4.3a ir 4.4.

**Failai:** `docs/turinio_pletra_moduliai_4_5_6.md`, `src/data/modules.json`, `docs/MODULIO_4_SKAIDRIU_EILES.md`.

---

## 4. S5: Optional/BONUS skaidrės žymėjimas

### SOT 2.1 lentelė

Žymėti vienoda žyma (pvz. „Optional“ arba „Giluminiam“):  
4.1a2-viz, 4.1-workflow-ex, 4.1a5-style, 4.1a5-practice, 4.1b2, 4.2a-academic.

### Dabartinė būsena

- 4.1b2 – pavadinime yra „BONUS:“
- Kitos – be žymės

### Veiksmai (prioritetas žemas; galima atidėti)

1. **Sprendimas:** Ar naudoti JSON lauką `optional?: boolean` arba prefix pavadinime „Optional:“ / „BONUS:“?

2. **Variantas A (minimalus):** Tiesiog pridėti prefix „Optional:“ prie pavadinimų skaidrėms 4.1a2-viz, 4.1-workflow-ex, 4.1a5-style, 4.1a5-practice, 4.2a-academic. 4.1b2 jau turi „BONUS:“ – palikti arba pakeisti į „Optional:“ dėl nuoseklumo.

3. **Variantas B:** Pridėti `optional: true` į slide schema; UI rodo badge „Optional“ šalia pavadinimo. Reikia CODING_AGENT.

**Failai:** `src/data/modules.json`, galimai `ModuleView.tsx` / slide render.

---

## 5. S6: Trumpi UI pavadinimai ilgoms skaidrėms

### SOT 2.1/2.2

Pvz.: „Darbas su RAG: memory, įrankiai“ → UI: „RAG: memory ir įrankiai“.

### Dabartinė būsena

- UI naudoja `slide.title` (ModuleView, SlideContent)
- Nėra `shortTitle` lauko

### Veiksmai (prioritetas žemas)

1. **CONTENT_AGENT:** SOT 2.1 lentelėje nurodyti, kurioms skaidrėms reikia trumpo pavadinimo (ilgos: 4.2a, 4.2b, 4.2c, 4.1b2 ir pan.).

2. **DATA_AGENT:** Į slide schema pridėti optional `shortTitle?: string`. Skaidrėms su ilgais pavadinimais – įrašyti trumpą variantą.

3. **CODING_AGENT:** ModuleView / navigacija naudoja `slide.shortTitle ?? slide.title`.

**Failai:** `src/types/modules.ts`, `src/data/modules.json`, `src/components/ModuleView.tsx` (arba SlideContent, jei ten rodomas pavadinimas).

---

## 6. Prioritetų santrauka (pagal tokenų limitą)

| # | Užduotis | Agentas | Įvertintas darbas | Tokenų taupymas |
|---|----------|---------|-------------------|-----------------|
| 1 | **S1** – konteksto langas 4.2 | DATA_AGENT | +1 blokas į sections | Mažas – vienas JSON blokas |
| 2 | **S4** – bridžinė praktika | CONTENT + DATA | SOT poskyris + nauja skaidrė | Vidutinis – naujas turinys |
| 3 | **S5** – optional žymėjimas | DATA (Variantas A) arba DATA+CODING (B) | Prefix arba `optional` laukas | Mažas (A) / vidutinis (B) |
| 4 | **S6** – shortTitle | DATA + CODING | Schema + JSON + UI | Vidutinis – schema pakeitimas |

**Rekomenduojama eilė:** S1 → S4 → S5 (A) → S6. S5 (B) ir S6 – jei lieka resursų.

---

## 7. CHANGES / CHECKS / RISKS / NEXT

**CHANGES:**
- Sukurtas `docs/development/PLAN_MODULIO_4_SHOULD_S1_S6.md` – agentų planas S1, S4, S5, S6.

**CHECKS:**
- Peržiūrėti SOT (`turinio_pletra_moduliai_4_5_6.md`, MODULIO_4_TOBULINIMAI), `modules.json` 4.2 skaidrė, MODULIO_4_SKAIDRIU_EILES.

**RISKS:**
- S4 nauja skaidrė keičia skaidrių eilę – reikia atnaujinti MODULIO_4_SKAIDRIU_EILES ir modules.json pozicijas.
- S6 `shortTitle` – schema pakeitimas gali reikalauti migracijos kituose moduliuose (jei tipai bendri).

**NEXT:**
1. ~~S1~~ ✅ Įgyvendinta. ~~S4~~ ✅ Įgyvendinta. ~~S5~~ ✅ Įgyvendinta. ~~S6~~ ✅ Įgyvendinta.
2. Tolimesni Modulio 4 tobulinimai – žr. TODO.md P2/P3.
