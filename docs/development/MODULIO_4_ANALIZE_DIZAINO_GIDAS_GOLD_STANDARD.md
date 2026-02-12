# Modulio 4 analizė: dizaino gidas ir gold standard

> **Paskirtis:** Modulio 4 (Konteksto inžinerija) atitikimo analizė pagal `DESIGN_GUIDE_MODULIAI_1_2_3.md` ir `GOLD_STANDARD_MODULIAI_1_2_3.md`.  
> **Data:** 2026-02-12  
> **Šaltiniai:** DESIGN_GUIDE, GOLD_STANDARD, GOLD_STANDARD_MODULIAI_4_5_6_GAP_ANALIZE.md, modules.json (Modulio 4), ContentSlides.tsx (SummarySlide), ModuleView.tsx.

---

## 1. Santrauka

| Kriterijus | Būklė | Pastaba |
|------------|--------|---------|
| **Santraukos skaidrė (4.7)** – 5 blokų modelis, `type: "summary"` | ✅ Atitinka | Skaidrė id 70 jau `summary` su introHeading, introBody, stats, sections, reflectionPrompt, tagline, CTA (Kitas žingsnis). |
| **Žinių kortelės** – max 3 (S-DS3) | ✅ Atitinka | 3 žinių sekcijos + atskiras „Kitas žingsnis“ CTA; SummarySlide naudoja `knowledgeSections = allKnowledge.slice(0, 3)`. |
| **Spalvos per skaidrę** (M-DS1) – max 2 semantinės + brand/accent | ✅ UI sutvarkyta | ContentSlides SummarySlide naudoja `defaultColor` (brand) visoms žinių kortelėms; CTA – emerald. JSON section.color ignoruojamas vizualiai. |
| **Modulio identitetas** (badge, akcentas) | ✅ Atitinka | ModuleView: `moduleId === 2 \|\| 3 ? badge-slate : badge-brand` – Modulis 4 gauna **badge-brand** (learn kaip M1). |
| **Progresas ir fazės** | ✅ Atitinka | typeToPhase turi `summary: 'Santrauka'`; Modulio 4 ilgas – grupuojamas pagal tipus (Įvadas, Skyrius, Teorija, Savitikra, Santrauka). |
| **CTA** – konkretus „Kitas žingsnis“ | ✅ Atitinka | „Modulis 5: 15 min prezentacijos sprintas + mini suvokimo testas…“; mygtukas „Pereikite prie kito modulio“. |

**Išvada:** Modulio 4 pagrindinė gold standard spraga (4.7 kaip content-block) **jau užpildyta** – santrauka įgyvendinta kaip `summary` su 5 blokais. Dizaino gido rekomendacijos (M-DS1, S-DS3) SummarySlide komponente taikomos ir Moduliui 4.

---

## 2. Dizaino gidas – punktas po punkto

### 2.1 Spalvos (§4.1, §3.1)

- **Taisyklė:** Vienoje skaidrėje ne daugiau kaip 2 semantinės spalvos + 1 brand/accent.
- **Modulio 4 summary (4.7):** Žinių kortelės UI renderinamos su **vienoda brand** spalva (`defaultColor`); „Kitas žingsnis“ – emerald. JSON sections turi skirtingus `color` (brand, amber, emerald), bet SummarySlide jų nepriima vizualiai – **atitinka**.

### 2.2 Tipografija (S-DS1, §4.2)

- **Taisyklė:** Vienas H1 per skaidrę (skaidrės pavadinimas ModuleView); H2/H3/body nuosekliai.
- **Modulio 4:** ModuleView suteikia vieną H1 (title); SummarySlide naudoja h2 intro, h4 sekcijoms – **atitinka**.

### 2.3 Spacing ir radius (§4.3, §4.4)

- **Taisyklė:** space-y-6/8 tarp blokų, p-4–p-6 viduje, rounded-2xl kortelėms.
- **SummarySlide:** `space-y-8`, `rounded-2xl`, `p-6` – **atitinka**.

### 2.4 Šešėliai (S-DS4, §4.5)

- **Taisyklė:** default `shadow-md`, hover `shadow-lg`.
- **SummarySlide:** `shadow-md hover:shadow-lg` – **atitinka**.

### 2.5 Modulio identitetas (§5)

- **Design guide:** Moduliai 1–3 – M1 brand, M2 slate, M3 accent tik CTA. Modulis 4 neapibrėžtas išraiškiai.
- **Praktika:** Modulis 4 = learn (teorija) → naudojamas **brand** (badge ir bendras tonas), analogiškai M1 – **priimtina ir nuoseklu**.

---

## 3. Gold standard – santraukos 5 blokai (§1.3)

| Blokas | Reikalavimas | Modulio 4 (id 70) |
|--------|----------------|-------------------|
| 1. Celebration Hero | Gradient (brand→accent), „Ką išmokote“, intro body, 3 statistikos | ✅ introHeading, introBody, stats (Temos: 5, Ryšiai: 6, Kitas žingsnis: Modulis 5) |
| 2. Žinių kortelės | Max 3, grid, ikonos, CheckCircle | ✅ 3 sekcijos (RAG/Deep research, Tokenų/manipuliacijos, Žinių patikrinimas/haliucinacijos) |
| 3. Refleksijos promptas | Meta+Input+Output, 3 klausimai (Apply, Analyze, Create), Copy | ✅ reflectionPrompt su 3 klausimais, reflectionTitle, Copy mygtukas |
| 4. Kitas žingsnis CTA | Emerald, ArrowRight, konkretus tekstas | ✅ nextStepSection, „Modulis 5: 15 min…“, mygtukas „Pereikite prie kito modulio“ |
| 5. Motyvacinis footer | Gradient, tagline (formulė/mantra) | ✅ tagline: „Šaltiniai + patikrinimas = mažiau haliucinacijų…“ |

---

## 4. Ką dar patikrinti / pagerinti (opcional)

| # | Veiksmas | Agentas | Prioritetas |
|---|----------|---------|-------------|
| 1 | **Lietuviškos raidos** – vartotojo matomi tekstai 4.7 (peržiūrėti RELEASE_QA_CHECKLIST §5) | QA_AGENT | ✅ 2026-02-12 atlikta |
| 2 | **Modulio 4 fazių etiketės** – SlideGroupProgressBar (Įvadas, Skyrius, Teorija, Savitikra, Santrauka); `ai-detectors` priderintas į Teorija (ModuleView typeToPhase) | UI_UX_AGENT | ✅ 2026-02-12 atlikta |
| 3 | **S-DS2 modulių identitetas** – dokumentuoti oficialiai: M4 = brand (learn), kaip M1 | QA_AGENT | ✅ DESIGN_GUIDE §5, šis doc §2.5 |

---

## 5. Failai ir nuorodos

| Sritis | Failas |
|--------|--------|
| Dizaino gidas | docs/development/DESIGN_GUIDE_MODULIAI_1_2_3.md |
| Gold standard (1–3) | docs/development/GOLD_STANDARD_MODULIAI_1_2_3.md |
| Spragų analizė 4–6 | docs/development/GOLD_STANDARD_MODULIAI_4_5_6_GAP_ANALIZE.md |
| Santraukos SOT | .cursor/rules/content-agent-summary-slide.mdc |
| Modulio 4 duomenys | src/data/modules.json (modulis id 4, skaidrė id 70) |
| Summary renderinimas | src/components/slides/types/ContentSlides.tsx (SummarySlide) |
| Badge / identitetas | src/components/ModuleView.tsx |

---

**CHANGES:** Naujas failas `docs/development/MODULIO_4_ANALIZE_DIZAINO_GIDAS_GOLD_STANDARD.md`.  
**CHECKS:** Lyginama su DESIGN_GUIDE ir GOLD_STANDARD; modules.json ir ContentSlides.tsx perskaityti.  
**RISKS:** Nėra – tik analizė ir dokumentacija.  
**NEXT:** Atnaujinti GOLD_STANDARD_MODULIAI_4_5_6_GAP_ANALIZE.md (4.7 jau summary); prieš release – lietuviškos raidos peržiūra Moduliui 4.
