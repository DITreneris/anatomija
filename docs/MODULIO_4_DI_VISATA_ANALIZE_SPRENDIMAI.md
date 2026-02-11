# Modulio 4 pradžia „DI visata“ – analizė ir sprendimų siūlymai

> **Užklausa:** užtikrinti iliustracijų didinimą (Dantės + DI visata), sumažinti skaidrės perkrovą (praktiką iškelti į naują skaidrę), padaryti atraktivesnę.

---

## 1. Parinkta agentų seka (mišri užduotis)

| Etapas | Agentas | Veikla |
|--------|---------|--------|
| 1 | **CONTENT_AGENT** | Struktūra: kas lieka 4.0, kas eina į naują skaidrę; terminologija, CTA |
| 2 | **DATA_AGENT** | `modules.json`: nauja skaidrė (id, eilė), perkelti `recognitionExercise` + `practicalTask` į naują skaidrę, palikti 4.0 tik images + sections |
| 3 | **CODING_AGENT** | Lightbox/zoom iliustracijoms; naujos skaidrės render logika (jei reikia naujo tipo) |
| 4 | **UI_UX_AGENT** | Vizualinė hierarchija, atraktesnė skaidrė (gradientai, spacing, CTA), a11y lightbox |
| 5 | **CODE_REVIEW_AGENT** | Patikra: build, tipai, edge cases |
| 6 | **QA_AGENT** | SOT atnaujinimas (`docs/turinio_pletra_moduliai_4_5_6.md`), CHANGELOG |

**Šaltiniai:** `.cursor/rules/agent-orchestrator.mdc`, `docs/development/AGENT_ORCHESTRATOR.md`, SOT: `docs/turinio_pletra_moduliai_4_5_6.md`, duomenys: `src/data/modules.json`.

---

## 2. Dabartinė būklė (diagnozė)

### 2.1 Skaidrė „DI Visata: kaip viskas susiję“ (id: 39)

| Blokas | Turinys | Problema |
|--------|---------|----------|
| **comparisonImages** | Kairė: `Dante_visata.png`, dešinė: `DI_visata.png` (label, explanation, source) | Nėra galimybės išdidinti; `max-h-64` riboja skaitomumą |
| **sections** | (1) Esminė žinutė (accent), (2) Terminai (žodynėlis) | Normalu, palikti |
| **recognitionExercise** | „Praktika: atpažink DI visatos sluoksnį“ – 5 pavyzdžiai, 5 pasirinkimai, correctAnswers | Daug vietos + interaktyvumas – tinka atskirai skaidrei |
| **practicalTask** | „📋 Promptas: paaiškink DI visatą“ – TemplateBlock | Taip pat daug vietos – logiška kartu su „atpažink“ praktika |

**Išvada:** Vienoje skaidrėje – 2 vaizdai + 2 teksto blokai + 5 klausimų pratimas + 1 prompto šablonas. Per daug vienu metu; praktika (recognitionExercise + practicalTask) logiška perkelti į **naują skaidrę iškart po 4.0**.

### 2.2 Renderinimas

- **Vaizdai:** `AllSlides.tsx` – `ContentBlockSlide`; vaizdai – paprasti `<img>` su `max-h-64`, be onClick/lightbox.
- **Praktika:** `RecognitionExercise` ir `TemplateBlock` renderinami toje pačioje `ContentBlockSlide` apatinėje dalyje.

### 2.3 SOT atitiktis

- `docs/turinio_pletra_moduliai_4_5_6.md` §2.2 aprašo **4.0** kaip: pavadinimas, comparisonImages (ai_universe.gif, paradise_dante.gif), 5 sąvokų blokai, „Trumpai“, optional priminimas.  
- JSON naudoja **Dante_visata.png** ir **DI_visata.png** (statines); SOT mini GIF. Tai jau žinomas skirtumas (dokumentuota MODULIO_4_SKAIDRES_1_UI_UX_ANALIZE.md).  
- SOT **neminima** atpažinimo pratimo ar prompto šablono vienoje skaidrėje su 4.0 – todėl praktikos iškėlimas į atskirą skaidrę atitinka turinio logiką.

---

## 3. Siūlomi sprendimai

### 3.1 Iliustracijų didinimas (Dantės visata + DI visata)

- **Sprendimas:** Pridėti **lightbox / didinimo režimą** abiem comparisonImages vaizdams.
- **Implementacija (CODING_AGENT + UI_UX_AGENT):**
  - Paspaudus ant vaizdo (arba ant aiškaus „Išdidinti“ / „Peržiūrėti didesnį“ mygtuko/ nuorodos) – atidaromas overlay (modal) su didesniu vaizdu (pvz. `max-w-4xl` arba `max-h-[90vh]`), uždarymas – Escape arba ant backdrop / uždarymo mygtuko.
  - A11y: `aria-label` („Išdidinti: Dantės visata“ / „Išdidinti: DI visata“), focus trap modalyje, `:focus-visible`.
- **Vieta:** Naujas komponentas (pvz. `ImageLightbox.tsx` arba `EnlargeableImage`) – naudojamas `ContentBlockSlide` lygyje tik kai `content.comparisonImages`; abu `left` ir `right` vaizdai tampa „click-to-enlarge“.

### 3.2 Per daug turinio – praktiką iškelti į naują skaidrę

- **Sprendimas:** Skaidrė **4.0** lieka: tik **pavadinimas + subtitle + comparisonImages + sections** (Esminė žinutė, Terminai). **recognitionExercise** ir **practicalTask** perkeliami į **naują skaidrę** iškart po 4.0.
- **DATA_AGENT darbas:**
  - `modules.json`: skaidrei id 39 pašalinti `recognitionExercise` ir `practicalTask`.
  - Įterpti **naują skaidrę** (naujas id, pvz. 39a arba 40, su perstūmimu tolesnių id): `type: "content-block"` (arba naujas tipas „content-block-practice“, jei norima atskirti), `title`: pvz. **„Praktika: DI visata“** arba **„Praktika: atpažink sluoksnius ir išmėgink promptą“**, `content`: tik `recognitionExercise` + `practicalTask` (be comparisonImages, be sections).
  - SOT atnaujinti: `docs/turinio_pletra_moduliai_4_5_6.md` – 4.0 apraše nurodyti „Praktika (atpažinimas + promptas) – atskira skaidrė 4.0-praktika“ ir trumpai aprašyti naują skaidrę.
- **CODING_AGENT:** Jei nauja skaidrė naudoja `content-block` su tik `recognitionExercise` ir `practicalTask`, dabartinis `ContentBlockSlide` jau juos renderina – pakanka duomenų pakeitimo. Jei reikia skirtingo layout (pvz. be comparisonImages dizaino) – galima `content-block` su tuščiu `sections` arba atskiras tipas „di-visata-practice“.

### 3.3 Padaryti atraktivesnę

- **Hierarchija ir „kvėpavimas“:** Skaidrėje 4.0 po padalijimo liks: vaizdai + 2 blokai. Padidinti tarpus tarp blokų (`space-y-6` → `space-y-8` tik šiai skaidrei), antraščių kontrastas (Esminė žinutė – ryškesnė).
- **CTA į praktiką:** Po Terminų bloko – trumpa eilutė + mygtukas/nuoroda: „Toliau: Praktika – atpažink sluoksnius ir išmėgink promptą“ (navigacija į kitą skaidrę jau yra per ModuleView, tai gali būti tik tekstas arba mažas „Pereiti į praktiką“ blokas).
- **Vaizdai:** Lightbox + geresnis hover (subtle scale arba border), kad būtų aišku, jog galima didinti.
- **Spalvos / gradientai:** Dabartinis `bg-gradient-to-b from-di-visata-bg-top to-di-visata-bg-bottom` palikti; galima šiek tiek sustiprinti accent (Dantė / DI) border arba shadow, kad skaidrė atrodytų „premium“.

---

## 4. Rekomenduojama vykdymo eilė

1. **CONTENT_AGENT:** Sutvarkyti SOT – įrašyti naują skaidrę „4.0-praktika“ (pavadinimas, tikslas, 2 blokai: atpažinimas + promptas) ir 4.0 sumažintą aprašą.
2. **DATA_AGENT:** `modules.json` – iš 39 išimti `recognitionExercise` ir `practicalTask`; įterpti naują skaidrę su jais; patikrinti, kad eilė (slide order) teisinga.
3. **CODING_AGENT:** Įdiegti `EnlargeableImage` / lightbox; `ContentBlockSlide` – abu comparisonImages vaizdus wrap'inti į enlargeable komponentą.
4. **UI_UX_AGENT:** 4.0 skaidrės spacing, CTA tekstas į praktiką, hover/visual hint ant vaizdų; lightbox a11y.
5. **CODE_REVIEW_AGENT:** Build, lint, tipai; patikrinti, kad nauja skaidrė atsidaro ir progresas neišsikraipo.
6. **QA_AGENT:** Atnaujinti CHANGELOG, jei reikia – MODULIO_4_SKAIDRIU_EILES.md.

---

## 5. Trumpas santraukas

| Problema | Sprendimas |
|----------|------------|
| Negalima išdidinti Dantės / DI visatos | Lightbox (arba EnlargeableImage) paspaudus ant vaizdo; a11y |
| Per daug turinio vienoje skaidrėje | Praktiką (recognitionExercise + practicalTask) perkelti į naują skaidrę po 4.0 |
| „Padaryti atraktivesnę“ | Mažesnis turinys 4.0 + didesni tarpai, CTA į praktiką, hover/lightbox hint |

---

CHANGES:
- Sukurtas `docs/MODULIO_4_DI_VISATA_ANALIZE_SPRENDIMAI.md` – seka, diagnozė, sprendimai, vykdymo eilė.

CHECKS:
- Peržiūrėta: `modules.json` (slide 39), `AllSlides.tsx` ContentBlockSlide, SOT 4.0 aprašas; lightbox/zoom projekte nėra – reikia naujo komponento.

RISKS:
- Nauja skaidrė keičia skaidrių id/eilę – reikia įsitikinti, kad progresas (atrakinta skaidrės) ir deep links nesulūžtų.  
- SOT mini GIF, JSON – PNG; lightbox įdiegus galima vėliau svarstyti didesnės raiškos arba GIF palaikymą.

NEXT:
1. ~~Vykdyti CONTENT_AGENT žingsnį~~ – ATLIKTA (2026-02-09): veiksmo modelis, SOT atnaujinta.
2. ~~Vykdyti DATA_AGENT žingsnį~~ – ATLIKTA (2026-02-09): modules.json atnaujintas (Trumpai/Daryk/Promptas/Patikra/Collapsible).
3. ~~Lightbox/enlarge~~ – ATLIKTA anksčiau: `EnlargeableImage` komponentas jau integruotas.
4. Galutinis vizualinis auditas naršyklėje (UI_UX_AGENT).
