# CODE_REVIEW_AGENT išvestis: UI/UX workflow diagnozė (skaidrė 47)

> **Data:** 2025-02-08  
> **Užduotis:** UI/UX workflow diagnozė prieš schemos įgyvendinimą.

---

## 1. Dabartinė būklė

**Skaidrė:** Modulio 5, id 47 – „Optional: Per 15 min – 8 skaidrių prezentacija su DI“  
**Komponentas:** `ContentBlockSlide` (AllSlides.tsx)  
**Tipas:** `content-block` su `sections` masyvu.

### 1.1 Kas veikia gerai

| Aspektas | Statusas | Pastabos |
|----------|----------|----------|
| Vizualinė hierarchija | ✅ | brand (Rezultatas), terms (Workflow), accent (Takeaway) – atitinka QA_DI_VISATA_UI_UX |
| Dark mode | ✅ | Visi blokai turi dark: variantus |
| Skenuojamumas | ✅ | Antraštės font-bold text-lg, **bold** svarbiems žodžiams |
| CopyButton | ✅ | 8 skaidrių struktūra, Master prompt, pilnas promptas – su TemplateBlock |
| Nuorodos į įrankius | ✅ | Gamma, SlidesAI, Canva, Prezent.ai – markdown links |

### 1.2 Kas trūksta (spragos)

| Spraga | Aprašymas | Rizika |
|--------|-----------|--------|
| **Workflow vizualizacija** | 5 žingsnių workflow rodomas tik **tekstu** (body su bold žingsniais). Nėra proceso diagramos / schemos | Mokymų retention mažesnis; geriausios praktikos (flowchart) neįgyvendintos |
| **Vizualinė struktūra** | Skaitytojas turi skaityti linijinį tekstą vietoj vizualaus srauto | Sunkiau įsiminti žingsnių seką |
| **Projekto nuoseklumas** | Modulio 1 Custom GPT skaidrėje naudojama ProcessStepper/CustomGptProcessDiagram; skaidrė 47 neturi analogiškos schemos | Nestandartinis UX tarp panašių temų |

### 1.3 Esamas pattern (referencinė skaidrė)

`ContentBlockSlide` palaiko `section.image`:

- Jei `section.image` apima `custom_gpt_process` → renderinamas `<ProcessStepper />`.
- Tai rodo, kad **content-block** gali turėti įterptą diagramą per `image` lauką arba panašų mechanizmą.

---

## 2. Diagnozė

**Išvada:** Skaidrė 47 turinio blokas „DI prezentacijos workflow (universalus)“ **turi būti papildytas vizualia schema** (5 žingsnių flowchart), kad atitiktų:
1. Geriausias praktikas (workflow viz e-learning)
2. Projekto vizualinę nuoseklumą (CustomGptProcessDiagram / ProcessStepper)
3. Geresnį mokymų retention (vizualas 10→65 %)

---

## 3. Rekomendacijos

### 3.1 SCHEME_AGENT

- Sukurti `DiPrezentacijosWorkflowDiagram` – 5 žingsnių vertikali schema.
- Konstanta: Tikslas, Struktūra, Turinio generavimas, Vizualizacija, Poliravimas.
- Geometrija pagal CustomGptProcessDiagram (BOX_H, GAP, rodyklės kraštas į kraštą).

### 3.2 DATA_AGENT

- Pridėti į skaidrės 47 sekciją „DI prezentacijos workflow“ vieną iš:
  - `section.image: "di_prezentacijos_workflow"` (jei SlideContent atpažįsta kaip specialų komponentą), arba
  - `section.diagramComponent: "DiPrezentacijosWorkflowDiagram"`, arba
  - `section.workflowSteps` masyvą + atnaujinti `ContentBlockSlide`, kad renderintų diagramą kai `workflowSteps` egzistuoja.

### 3.3 CODING_AGENT

- `ContentBlockSlide` / `SlideContent`: atpažinti naują diagramos tipą ir renderinti `DiPrezentacijosWorkflowDiagram`.
- A11y: `aria-label="DI prezentacijos workflow: 5 žingsniai"`, `role="img"`.

### 3.4 UI_UX_AGENT (gairės)

- Schema turėtų būti **virš** arba **po** teksto bloko „5 žingsniai“ – vizualiai susijusi su šia sekcija.
- Max plotis: `max-w-2xl` (kaip CustomGptProcessDiagram) – skaidrė nelūžta.
- Margin: `my-4` tarp teksto ir diagramos.

---

## 4. CHANGES (CODE_REVIEW_AGENT)

- Sukurtas `docs/development/CODE_REVIEW_AGENT_OUTPUT_workflow_UX.md` – UI/UX diagnozė ir rekomendacijos.

---

## 5. CHECKS

- Peržiūrėtas ContentBlockSlide render logic.
- Peržiūrėtas modules.json skaidrė 47 turinys.
- Palygintas su CustomGptProcessDiagram / ProcessStepper pattern.

---

## 6. RISKS

- **Rizika 1:** Naujas `diagramComponent` laukas reikalauja tipų (`modules.ts`) atnaujinimo – DATA_AGENT + CODING_AGENT sinchronas.
- **Rizika 2:** Jei naudojame `section.image: "di_prezentacijos_workflow"` – reikia išplėsti `ContentBlockSlide` switch logic (kaip `custom_gpt_process`).
- **Rizika 3:** Ilgi žingsnių pavadinimai gali persidengti – SCHEME_AGENT turi naudoti `textLength` arba wrap.

---

## 7. NEXT

1. ~~**SCHEME_AGENT**~~ – atlikta. DiPrezentacijosWorkflowDiagram sukurtas.
2. ~~**DATA_AGENT**~~ – atlikta. `image: "di_prezentacijos_workflow"` pridėta.
3. ~~**CODING_AGENT**~~ – atlikta. AllSlides.tsx integracija.

---

## 8. Post-implementacijos patikra (2025-02-08)

| Kriterijus | Statusas |
|------------|----------|
| SOT laikymasis | ✅ Turinys iš CONTENT_AGENT_OUTPUT; geometrija pagal CustomGptProcessDiagram |
| A11y | ✅ role="img", aria-label su 5 žingsnių aprašymu |
| Rodyklės kraštas į kraštą | ✅ line y2={nextTop - ARROW_MARKER_LEN} |
| Build | ✅ npm run build sėkmingas |
| JSON tipai | ✅ image?: string jau egzistuoja ContentBlockSection |
