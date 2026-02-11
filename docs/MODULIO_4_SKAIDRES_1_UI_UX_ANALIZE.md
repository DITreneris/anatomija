# Modulio 4, Skaidrė 1 (AI Visata) – UI/UX analizė

**Skaidrė:** AI Visata: kaip viskas susiję (id 39)  
**Data:** 2026-02-07  
**Tikslas:** Lyginimas su projekto standartais ir geriausiomis praktikomis; konkrečios rekomendacijos.

---

## 1. Kas jau atitinka standartus

| Sritis | Būsena |
|--------|--------|
| **Struktūra** | Aiški hierarchija: antraštė → subtitle (hierarchija) → iliustracijos → kortelės → Trumpai → optional priminimas. |
| **Vizualinė hierarchija** | Kortelių layoutas, paryškintos heading, tarpai – skaitomumas geras. |
| **Responsive** | `comparisonImages` naudoja `grid-cols-1 sm:grid-cols-2` – mažuose ekranuose vaizdai stovi stulpelyje. |
| **Prieinamumas (a11y)** | `index.css`: `:focus-visible` outline; mygtukai su `aria-label`; vaizdams naudojamas `alt` iš `label` („DI visata“, „Paradizas / Dante“). |
| **Touch** | Mygtukai su `min-h-[44px]`, tinkami mobiliesiems. |
| **Turinys** | Tekstas atitinka SOT (`turinio_pletra_moduliai_4_5_6.md`); dvi iliustracijos (DI visata, Paradizas / Dante) įdėtos. |

---

## 2. Projekto taisyklės (cursor rules)

### 2.1 Terminologija (Rule #5)

**Taisyklė:** „UI ir mokymuose: **DI**, ne „AI“ (išskyrus citatas ar produktų pavadinimus).“

| Vieta skaidrėje | Dabartinis tekstas | Atitikimas |
|-----------------|--------------------|------------|
| Pavadinimas | „AI Visata“ | Naudojamas „AI“ – siekiant vienodumo su taisykle galima pakeisti į **„DI Visata“**. |
| Subtitle | „DI → Mašininis mokymasis → …“ | ✅ DI naudojamas teisingai. |
| Kortelės | „Dirbtinis intelektas (AI)“, „Generatyvinis AI (Generative AI)“ | Priimtina: (AI) ir „Generative AI“ kaip tarptautiniai atitikmenys / produktų kontekstas. |
| Iliustracijų labeliai | „DI visata“, „Paradizas / Dante“ | ✅ Atitinka. |

**Rekomendacija:** Pavadinime naudoti **„DI Visata: kaip viskas susiję“**, kad būtų pilnas atitikimas Rule #5. Kortelėse palikti (AI) / Generative AI kaip paaiškinamąjį terminą.

### 2.2 Source of Truth

Turinys ir eilė atitinka `docs/turinio_pletra_moduliai_4_5_6.md` ir `src/data/modules.json`. Konfliktų nėra.

---

## 3. UX pagerinimo siūlymai

### 3.1 „Optional“ bloko atpažinimas ir stilius

**Problema:** Kortelė „Svarbu prisiminti (optional)“ vizualiai nesiskiria nuo pagrindinių apibrėžimų – vartotojui gali būti neaišku, kad tai papildomas / mažesnio prioriteto priminimas.

**Siūlymas:**
- **Variantas A (tik UI):** Jei `section.heading` turi žodį „(optional)“ – naudoti švelnesnį stilių: mažesnis šriftas (`text-sm`), pilkesnė spalva (`text-gray-500 dark:text-gray-400`), gal optional šiek tiek mažesnė padding.
- **Variantas B (duomenys):** Ateityje galima įvesti `section.isOptional: true` arba `section.variant: "muted"` ir pagal tai stilizuoti – kol kas pakanka A.

### 3.2 Navigacijos mygtukų išvaizda

„Atgal“ / „Pirmyn“ jau turi pakankamą dydį ir aria-label. Jei norima dar labiau pabrėžti „Pirmyn“:
- Dešinįjį mygtuką galima padaryti `btn-primary` (dabar abu `btn-secondary`), kad CTA būtų aiškesnis. Reikia peržiūrėti visą modulio navigaciją, kad būtų vienodai.

### 3.3 Vaizdų labeliai

Duomenyse nustatyta: `"label": "DI visata"`. Jei naršyklėje matosi „Divisata“ arba kita klaida – patikrinti šriftą / simbolių koduotę; JSON ir komponentas naudoja teisingą eilutę.

### 3.4 Prieinamumas – papildomai

- Vaizdams: `alt` jau pildomas iš `label` – gerai.
- Kortelėms: jei ateityje bus interaktyvumo (pvz. išskleidžiami blokai), reikėtų `aria-expanded` ir logikos ekranų skaitytuvams.

---

## 4. Santrauka ir prioritetai

| Prioritetas | Veiksmas | Failai |
|-------------|----------|--------|
| **P** | Pavadinime naudoti „DI Visata“ (atitikti Rule #5) | `modules.json`, `turinio_pletra_moduliai_4_5_6.md` |
| **P** | Optional bloką vizualiai atskirti (mažesnis/muted stilius) | `AllSlides.tsx` (ContentBlockSlide), gal `modules.json` heading |
| **S** | Peržiūrėti navigacijos mygtukų paryškinimą (Pirmyn kaip primary) | `ModuleView.tsx` |
| **S** | Jei rodoma „Divisata“ – patikrinti šriftą / encoding | - |

---

## 5. CHANGES / CHECKS / RISKS / NEXT

**CHANGES (2026-02-07):**
- `modules.json`: skaidrės 39 pavadinimas pakeistas į „DI Visata: kaip viskas susiję“ (Rule #5).
- `turinio_pletra_moduliai_4_5_6.md`: pavadinimas SOT atnaujintas į „DI Visata“.
- `AllSlides.tsx` (ContentBlockSlide): jei `section.heading` turi „(optional)“ – taikomas švelnesnis stilius (mažesnis šriftas, muted spalva, mažesnė padding).

**CHECKS:** Skaidrė peržiūrėta pagal `.cursor/rules`, `index.css` a11y, `ContentBlockSlide` ir `ModuleView` kodą.  
**RISKS:** Terminologijos pakeitimas į „DI Visata“ – jei kur nors cituojamas „AI Visata“, reikia atnaujinti.  
**NEXT:** 1) Peržiūrėti skaidrę naršyklėje (optional blokas vizualiai atskirtas). 2) Pasirinktinai – paryškinti „Pirmyn“ mygtuką (`ModuleView.tsx`).
