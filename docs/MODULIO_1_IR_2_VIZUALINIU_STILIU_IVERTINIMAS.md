# Modulio 1 ir 2 vizualinių stilių įvertinimas

> **Tikslas:** Paaiškinti, kodėl 1 modulis atrodo spalvingesnis už 2, ir pasiūlyti sprendimus, kaip 2 modulį vizualiai suvienodinti su 1 (nekeičiant turinio).

---

## 1. Kodėl 1 modulis atrodo spalvingas

### 1.1 Įvairovė skaidrių tipų ir blokų

- **Modulis 1** turi daug skirtingų skaidrių tipų: `action-intro`, `module-intro`, `content-block`, `hierarchy`, `comparison`, `summary`, `section-break`, blokų skaidrės (meta, input, output, …). Kiekvienas tipas naudoja **skirtingą spalvų logiką**:
  - **ActionIntroSlide:** tamsus hero (gray-900 + brand-900), gradient tekstas (brand→accent), CTA su gradient mygtuku, rožinė/žalia kortelės (blogas vs geras promptas).
  - **ModuleIntroSlide:** brand-50 blokas (border-l-4 border-brand-500), accent-50 blokas, slate blokas – aiški kairiojo krašto spalva.
  - **ContentBlockSlide:** `blockVariant` (brand / terms / accent) – kiekviena sekcija su `bg-{color}-50`, `border-l-4 border-{color}-500`.
  - Blokų skaidrės (Meta, Input, …) – atskiri spalvoti blokai pagal temą.

- **Vizualinė hierarchija** (pagal `UI_UX_AGENT.md`): brand = pagrindinė info, accent = CTA ir paryškinimai, slate = neutralus. Modulis 1 nuosekliai naudoja šią sistemą.

### 1.2 Viena skaidrė = vienas „ekranas“

- Kiekviena Modulio 1 skaidrė yra **savitas kompozicija** – kita antraštė, kiti blokai, kita spalva. Vartotojas scrollina per daug trumpų, vizualiai skirtingų ekranų.

---

## 2. Kodėl 2 modulis atrodo mažiau išraiškingas

### 2.1 Mažai skaidrių tipų

- **Modulis 2** susideda praktiškai iš **trijų dalių:**
  1. **TestIntroSlide** – viena įvado skaidrė
  2. **TestSectionSlide** – viena ilga skaidrė su 15 klausimų
  3. **TestResultsSlide** – rezultatų skaidrė (rodoma po testo)

- Dauguma laiko vartotojas praleidžia **vienoje ilgoje skaidrėje** su daug panašių klausimų kortelių.

### 2.2 Neutralūs klausimų kortelės

- Klausimų komponentai (McqQuestion, TrueFalseQuestion, …) naudoja **bendrą stilių:**
  - **Prieš rezultatus:** `bg-white dark:bg-gray-800`, `border-2 border-gray-200 dark:border-gray-700` – pilka, be spalvos.
  - **Po rezultatų:** emerald (teisingai) / rose (neteisingai) – spalva atsiranda tik apskritai.

- Vieninteliai spalvoti elementai klausime: numerio badge (`bg-brand-100`) ir ConfidenceSelector (amber). **Pagrindinis vizualinis plotas – baltas/pilkas.**

### 2.3 TestIntroSlide – tik dalinai spalvotas

- Hero blokas: **gradientas** (from-violet-50 to-brand-50) ir violet rėmelis – **gerai**.
- Du informaciniai blokai („Testo struktūra“, „Tikslas“): **bg-white**, **border border-gray-200** – atrodo kaip neutralios kortelės, ne kaip Modulio 1 brand/accent blokai.
- Patarimas: **bg-brand-50** – atitinka sistemą.

- T. y. įvadas turi vieną stiprų gradientą, bet likusios dvi kortelės vizualiai „nusileidžia“ Modulio 1 blokams.

### 2.4 Viena ilga skaidrė vietoj daug trumpų

- Vietoj daugelio trumpų, spalvotų ekranų – **vienas ilgas scrollas** su daug panašių pilkų kortelių. Vizualinė monotonija sustiprina įspūdį, kad „2 modulis ne toks spalvotas“.

---

## 3. Sprendimų būdai (prioritetuota)

### 3.1 TestIntroSlide (Modulio 2) – suvienodinti blokus su Moduliu 1

**Problema:** „Testo struktūra“ ir „Tikslas“ – baltos kortelės su pilku rėmeliu.

**Sprendimas:**

- Pirmą kortelę (Testo struktūra) stilizuoti kaip **brand blokas** Modulyje 1:
  - `bg-brand-50 dark:bg-brand-900/20`, `border-l-4 border-brand-500`, `border border-brand-200 dark:border-brand-800`.
- Antrą kortelę (Tikslas) – kaip **accent blokas**:
  - `bg-accent-50 dark:bg-accent-900/20`, `border-l-4 border-accent-500`, `border border-accent-200 dark:border-accent-800`.

**Pasekmė:** Ta pati vizualinė kalba kaip ModuleIntroSlide ir content-block – 2 modulis vizualiai „kalba“ ta pačia sistema kaip 1.

---

### 3.2 Klausimų kortelės – švelnus spalvotas fonas

**Problema:** Visos klausimų kortelės baltos/pilkos (border-gray-200).

**Variantas A (konservatyvus):**

- Prieš rezultatus naudoti **švelnų brand atspalvį** vietoj baltos:
  - `bg-brand-50/50 dark:bg-brand-900/10`, `border-2 border-brand-200 dark:border-brand-700`.
- Rezultatuose teisingai/neteisingai palikti kaip dabar (emerald/rose).

**Variantas B (pagal tipą):**

- MCQ: švelnus brand.
- True/False: švelnus violet (jau naudojamas badge).
- Scenario: švelnus accent.
- Matching/Ordering: brand arba violet.

**Pasekmė:** Klausimų sritis vizualiai priklauso tai pačiai paletei kaip Modulis 1, be „baltos formos“ įspūdžio.

---

### 3.3 Vizualus skyriklis tarp klausimų grupių

**Problema:** 15 klausimų – viena ištisinė eilė, sunku vizualiai skirstyti.

**Sprendimas:**

- Tarp klausimų grupių (pvz. po ~4 MCQ, prieš Matching) įterpti **trumpą skyriklį**:
  - Pvz. plona horizontalė su gradientu (brand → accent) arba mažas tekstas „Kitas blokas“ su badge.
- Arba pirmą klausimą kiekvienoje „loginėje“ grupėje paryškindami (pvz. storesnė kairė border ar švelnus fonas).

**Pasekmė:** Mažesnė monotonija, aiškesnė struktūra be didelių turinio pakeitimų.

---

### 3.4 Mygtukas „Patikrinti atsakymus“

**Problema:** `btn-primary` jau brand; gali atrodyti „plokščiai“ lyginant su Modulio 1 CTA.

**Sprendimas (optional):**

- Pridėti švelnų gradientą arba shadow, atitinkantį ActionIntroSlide CTA:
  - Pvz. `bg-gradient-to-r from-brand-500 to-accent-500`, `shadow-lg shadow-brand-500/20`.
- Užtikrinti, kad mygtukas būtų vienintelis ryškus CTA šioje skaidrėje.

**Pasekmė:** Testo CTA vizualiai artimesnis Modulio 1 veiksmų mygtukams.

---

### 3.5 Rezultatų juosta („Atsakymai patikrinti“)

**Dabartinis:** `bg-brand-50` – gerai.

**Optional:** Pridėti trumpą **dekoratyvinį elementą** (pvz. CheckCircle su brand spalva ar subtilų border-l-4), kad atitiktų Modulio 1 „celebration“ / rezultatų blokus.

---

## 4. Santrauka

| Priežastis, kodėl M2 mažiau išraiškingas | Sprendimas |
|------------------------------------------|------------|
| TestIntroSlide dvi kortelės baltos/pilkos | 3.1 – brand ir accent blokai (border-l-4 + spalvotas fonas) |
| Klausimų kortelės visos baltos/pilkos | 3.2 – švelnus brand (ar pagal tipą) fonas ir border |
| Viena ilga pilkų kortelių eilė | 3.3 – skyrikliai tarp grupių arba paryškinamas pirmas klausimas grupėje |
| CTA „Patikrinti“ vizualiai paprastas | 3.4 – gradient/shadow kaip Modulyje 1 |
| Rezultatų juosta minimali | 3.5 – optional paryškinimas (ikona / border) |

**Rekomenduojama eilė įgyvendinimui:** 3.1 → 3.2 → 3.3. 3.4 ir 3.5 – pagal poreikį.

**Įgyvendinimo ataskaita (2026-02-10):** Įgyvendinta 3.1 (TestIntroSlide brand/accent blokai Moduliams 2 ir 5), 3.2 (klausimų kortelės – švelnus brand fonas), 3.3 (skyriklis virš CTA), 3.4 (CTA gradientas ir shadow). Žr. CHANGELOG.md.

**Failai keičiami:**  
- TestIntroSlide: `TestPracticeSlides.tsx` (Modulio 2 intro blokai).  
- Klausimų kortelės: `McqQuestion.tsx`, `TrueFalseQuestion.tsx`, `ScenarioQuestion.tsx`, `MatchingQuestion.tsx`, `OrderingQuestion.tsx` (fonas ir border prieš rezultatus).  
- Skyrikliai: `TestSectionSlide` in `TestPracticeSlides.tsx` (tarp klausimų grupių).  
- Mygtukas ir rezultatų juosta: `TestPracticeSlides.tsx`.

**SOT:** `docs/development/UI_UX_AGENT.md`, `tailwind.config.js` (brand, accent, slate).
