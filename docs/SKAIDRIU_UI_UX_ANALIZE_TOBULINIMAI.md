# Skaidrių UI, UX, spalvų ir šriftų analizė – tobulinimo žingsniai

> **Tikslas:** Sisteminė skaidrių vizualinės hierarchijos, spalvų, šriftų ir UX analizė pagal projekto SOT ir siūlomi konkretūs tobulinimo žingsniai.

---

## 1. Dabartinė būklė (SOT)

### 1.1 Spalvos (tailwind.config.js, index.css)

| Rolė | Spalva | Naudojimas |
|------|--------|-------------|
| **Brand** | Navy (#627d98, 50–950) | Pagrindinis srautas, antraštės, CTA, badge'ai |
| **Accent** | Auksas (#d4a520) | CTA, paryškinimai, „Kodėl?“ blokai |
| **Slate** | Neutralus pilkas | Terminai, sąrašai, antrinis tekstas |
| **di-visata** | Fono / Dantė / DI blokai | Tik DI visatos skaidrė |
| **Semantinės** | rose, emerald, violet, amber, orange | Blokų tipai (Meta, Input, Reasoning ir kt.) |

**Stiprybės:** Aiški paletė; brand + accent atitinka dokumentuotą sistemą; dark mode per `dark:`.

### 1.2 Šriftai

| Elementas | Klasė / šaltinis | Būklė |
|-----------|-------------------|--------|
| **Body** | `font-sans` (Plus Jakarta Sans) | ✅ index.css + tailwind theme |
| **Mono** | JetBrains Mono | ✅ theme extend fontFamily.mono |
| **h1–h6** | `font-bold tracking-tight` (base) | ✅ index.css @layer base |
| **Skaidrės antraštė** | `text-2xl md:text-3xl font-bold` (ModuleView) | ✅ |
| **Subtitle** | `text-lg text-gray-600 dark:text-gray-300` | ✅ |
| **Blokų antraštės** | Įvairuose komponentuose: `text-lg`, `text-xl` | ⚠️ Nevisur vienoda hierarchija |

**Problema:** Blokų H3/H4 skiriasi – vieni `text-lg`, kiti `text-xl`; nėra vieno „skaidrės bloko antraštės“ standarto.

### 1.3 UX ir layout

| Aspektas | Būklė |
|----------|--------|
| **Skaidrės wrapper** | `card p-6 md:p-10 min-h-[500px] animate-fade-in` (ModuleView) |
| **Tarpas tarp blokų** | Daugelyje `space-y-6` ✅ |
| **Touch targets** | index.css: button min 44px; mobile nav min-h-[52px] ✅ |
| **Focus** | `focus-visible:ring-2 ring-brand-500` (global) ✅ |
| **Navigacija** | Atgal / Pirmyn, skaidrės skaitiklis, modulio žymenys ✅ |

### 1.4 Skaidrių tipai ir spalvų naudojimas

- **content-block:** brand (accent), slate (terms), default (border-brand-200), optional (gray) – atitinka SOT.
- **module-intro:** brand blokas + accent blokas + slate (connectionToModule1) – atitinka.
- **RecognitionExercise:** accent / di-visata; „Tikslas:“ font-bold – atitinka.
- **Workflow vaizdai (4 dedamosios):** EnlargeableImage, brand border – atitinka.
- **SectionBreakSlide:** badge brand, centruota – atitinka.

---

## 2. Nustatytos spragos ir nenuoseklumos

| # | Problema | Kur pasireiškia | Severity |
|---|----------|------------------|----------|
| 1 | **Blokų antraščių dydis** – vieni H3 `text-xl`, kiti `text-lg` | AllSlides.tsx (ModuleIntroSlide, GlossarySlide, kiti) | Vidutinė |
| 2 | **Subtitle kontrastas** – `text-gray-600` šviesiai temoje gali būti per šviesus | ModuleView, skaidrės su subtitle | Žema |
| 3 | **Ilgi sąrašai be vizualinio „kvėpavimo“** – space-y-2 vs space-y-3 tarp punktų | Skaidrės su daug bullet points | Žema |
| 4 | **Kai kurie tekstai be bold hierarchijos** – pastraipos vienodai | Turinys priklauso nuo JSON **bold** | Žema |
| 5 | **Nėra aiškaus „skaidrės pirmo žingsnio“ (focus)** – skaitiklis žemiau turinio | ModuleView – progresas apačioje | Žema |
| 6 | **Mobilus tap highlight** – naudojama teal rgba, ne brand | index.css @media 768 | Žema |

---

## 3. Siūlomi tobulinimo žingsniai (prioritetas)

### Aukštas prioritetas (greitas poveikis, mažas rizika)

| Žingsnis | Aprašymas | Failas(ai) | Konkretus pakeitimas |
|----------|-----------|------------|----------------------|
| **T1** | ✅ **Vienodinti blokų antraščių hierarchiją** | AllSlides.tsx | Skaidrės blokuose (content-block, module-intro, glossary ir kt.): H3 – `text-xl`, H4 – `text-lg` (arba atvirkščiai pagal SOT „font-bold text-lg“). Nuspręsti: pagrindinė skaidrės sekcija = `text-xl font-bold`, poskyrio = `text-lg font-bold`. Taikyti nuosekliai. |
| **T2** | ✅ **Subtitle skaitomumas dark režime** | ModuleView.tsx | Subtitle: `text-gray-600 dark:text-gray-300` → `text-gray-600 dark:text-gray-200` (šiek tiek ryškesnis tamsoje). |
| **T3** | **Badge / Modulio žymė – touch ir a11y** | ModuleView.tsx | Įsitikinti, kad `badge-brand` turi `min-h-[44px]` arba `py-1.5 px-3` (jau naudojamas .badge-brand iš index.css – patikrinti px-3 py-1.5). |

### Vidutinis prioritetas (konsistencija, poliravimas)

| Žingsnis | Aprašymas | Failas(ai) | Konkretus pakeitimas |
|----------|-----------|------------|----------------------|
| **T4** | **Skaidrės turinio „pirmas žingsnis“** | ModuleView.tsx arba SlideContent | Pirmą kartą atidarius skaidrę – optional `aria-live="polite"` ant turinio region arba trumpas skaitiklio tekstas viršuje („Skaidrė 3 iš 12“) – kad screen reader ir vartotojas matytų kontekstą. |
| **T5** | **Tarpai tarp ilgų sąrašų** | AllSlides.tsx | Ten, kur `space-y-2` naudojamas sąrašams su daugiau nei 4 punktais – svarstyti `space-y-3` arba `gap-2` su atitraukimu, kad būtų lengviau skenuoti. |
| **T6** | ✅ **Tap highlight brand spalva** | index.css | `-webkit-tap-highlight-color: rgba(13, 148, 136, 0.3)` – pakeisti į brand-500 atitikmenį (pvz. rgba(98, 125, 152, 0.3)) kad atitiktų dizaino sistemą. |

### Žemas prioritetas (nice-to-have)

| Žingsnis | Aprašymas | Failas(ai) |
|----------|-----------|------------|
| **T7** | **Skaidrės įvedimo animacija** | ModuleView / AllSlides | Turinio blokams pridėti `animate-fade-in` arba `animate-slide-in` (jau yra tailwind keyframes) – tik ten, kur nekelia performance problemų. |
| **T8** | **Print / PDF stiliai** | index.css | @media print – slėpti navigaciją, padidinti kontrastą, vienpusis layout skaidrėms. |
| **T9** | **Skaidrių tipo žyma (optional)** | SlideContent / ModuleView | Dev režime arba optional „Tipas: content-block“ mažu šriftu – palengvina QA ir auditus. |

---

## 4. Checklist (auditas skaidrėms)

Naudoti tikrinant atsitiktinę skaidrę ar naują tipą:

- [ ] Antraštės: `font-bold` + vienodas dydis pagal lygį (h1 skaidrės = text-2xl/3xl, bloko = text-xl arba text-lg).
- [ ] Spalvos: tik brand / accent / slate / di-visata arba dokumentuotos semantinės (rose, emerald, …); jokių ad-hoc gray-400 be dark:.
- [ ] Dark mode: kiekvienas fono / teksto / rėmelio klasė turi `dark:` atitikmenį.
- [ ] Interaktyvūs: mygtukai, nuorodos – `aria-label`, min 44px aukštis.
- [ ] Tarpai: `space-y-6` tarp sekcijų; sąrašuose `space-y-2` arba `space-y-3`.
- [ ] Kortelės: `rounded-xl`, border pagal SOT (brand-200, slate-200, gray-200).

---

## 5. Santrauka

| Sritis | Vertinimas | Veiksmas |
|--------|------------|----------|
| **Spalvos** | ✅ Atitinka SOT (brand, accent, slate, di-visata) | Laikyti; tikrinti naujus komponentus. |
| **Šriftai** | ✅ Plus Jakarta Sans, JetBrains Mono; ✅ blokų antraščių hierarchija standartizuota | T1 done (2026-02-09). |
| **UX** | ✅ Navigacija, touch, focus; ✅ subtitle dark, tap highlight | T2, T6 done (2026-02-09). |
| **Layout** | ✅ space-y-6, card, min-h; ⚠️ ilgi sąrašai | T5, T4 (optional). |

**Rekomenduojama eilė:** ~~T1 → T2 → T6 (greiti)~~ ✅ Done (2026-02-09), paskui T4, T5 pagal poreikį. + P1 mobile grid fix (7 neresponsyvūs grid-cols-2 pataisyti).

---

CHANGES: Sukurtas `docs/SKAIDRIU_UI_UX_ANALIZE_TOBULINIMAI.md` – analizė ir prioritizuoti žingsniai.

CHECKS: Peržiūrėti UI_UX_AGENT.md, QA_DI_VISATA_UI_UX.md, tailwind.config.js, index.css, ModuleView.tsx, AllSlides.tsx (sample).

RISKS: T1 (vienodinant antraštes) gali keisti vizualinę hierarchiją kai kuriose skaidrėse – verta peržiūrėti po pakeitimo.

NEXT: Įgyvendinti T1 (blokų antraščių standartas), T2 (subtitle dark), T6 (tap highlight) – ar pradedu nuo T1?
