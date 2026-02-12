# Dizaino gidas: Moduliai 1–3 (B2B mokymosi platforma)

> **Paskirtis:** Išsamus, praktiškai įgyvendinamas dizaino gidas produktų komandai ir turinio kūrėjams. Adresuoja vartotojų nusiskundimus („per daug spalvinga“, „per daug chaoso“) – suvienodinti vizualą, sumažinti triukšmą, pagerinti skaitomumą ir mokymosi kelionę.  
> **Auditorija:** Produktų komanda, turinio kūrėjai, frontend/UI.  
> **Formatas:** Gamma-ready Markdown – antraštės, checklist’ai, Do/Don’t, prioritetai (Must/Should/Nice), konkrečiai pavyzdžiai.

---

## 1. Įvadas ir naudojimas

- **Problema:** Vartotojai jaučia vizualinį triukšmą ir chaotiškumą; skaitomumas ir mokymosi kelionė gali būti gerinami.
- **Kodėl tai kenkia:** Didelė kognityvinė apkrova atitraukia dėmesį nuo turinio; nekonsistentiška vizualė sumažina pasitikėjimą ir profesionalumo įspūdį.
- **Sprendimas:** Vieningas Design System v0.1, modulių identiteto taisyklės ir konkrečios UI pakeitimų rekomendacijos.
- **Kaip įgyvendinti:** Sekti šio dokumento skyrius nuosekliai; pirmiausia Must, tada Should, galiausiai Nice. QA checklist naudoti prieš release.
- **Rizika/kompromisas:** Per didelis „išvalymas“ gali sumenkinti emociškai pozityvius elementus (pvz. santraukos šventimas); rekomenduojama išlaikyti 1–2 akcentus per skaidrę.

---

## 2. Modulių 1–3 inventorius

### 2.1 Pagrindiniai puslapiai ir komponentai

| Puslapis / sritis | Komponentas (-ai) | Moduliai |
|-------------------|-------------------|----------|
| **Landing (pradžia)** | HomePage: hero, trust indicators, CTA, greiti promptai, modulių nuorodos | Bendras |
| **Modulių sąrašas** | ModulesPage: kortelės (learn/test/practice), CircularProgress, užrakinimas | 1–3 |
| **Skaidrės (pamoka)** | ModuleView + SlideContent: header, SlideGroupProgressBar, kairė/dešinė nav, skaidrės turinys | 1, 3 (1–19 skaidrės; 3 – intro + 6 scenarijai + summary) |
| **Testas** | ModuleView + TestSectionSlide, TestResultsSlide; QuizPage (baigiamoji apklausa) | 2 (testas), Quiz – bendras |
| **Praktika (užduotys)** | PracticalTask, PracticeScenarioSlide, PracticeSummarySlide | 3 |
| **Santrauka** | SummarySlide: celebration hero, žinių kortelės, refleksijos promptas, CTA | 1, 3 |
| **Navigacija** | AppNav: apatinė (mobile) / viršutinė; ModuleView: Atgal, Skaidrė X/Y, Prev/Next | Bendras |
| **Progresas** | CircularProgress, SlideGroupProgressBar, badge’ai (Baigtas, Modulis N) | Bendras |
| **Informaciniai pranešimai** | Remediation banner, fallback „trūksta turinio“, klaidos (ErrorBoundary) | Bendras |

### 2.2 Pasikartojantys UI pattern’ai

- **Hero / hook blokas:** tamsus gradientas `from-gray-900 via-brand-900 to-gray-900`, baltas tekstas, dekoratyviniai simboliai (?, !, 📐).
- **Kortelės (cards):** `rounded-2xl` arba `rounded-xl`, border-2, skirtingos spalvos pagal semantiką (rose = blogas/nestruktūruotas, emerald = geras/struktūruotas, brand = informacinis).
- **Semantinės spalvos:** rose, orange, amber, emerald, brand, violet – naudojamos `colorStyles.ts` ir tiesiogiai komponentuose (bg-*-50/100, border-*-200/500, text-*-700).
- **CTA:** gradient mygtukai `from-brand-500 to-accent-500`, `btn-primary`, `btn-hero-cta`; kartais pulse animacija.
- **Badge’ai:** `badge-brand`, `badge-accent`, `badge-success`, papildomi amber (Papildoma), slate (Testas).
- **Blokai su kairiuoju border:** `border-l-4 border-brand-500`, `bg-brand-50 dark:bg-brand-900/20`.
- **Gradient takeaway:** `bg-gradient-to-r from-brand-500 to-accent-500` tekstui baltai.

### 2.3 Spalvų ir tipografijos naudojimas (dabartinis)

- **Spalvos:** brand (navy), accent (auksas), slate (neutral), + rose, orange, amber, emerald, violet (semantika ir sekcijoms). Infographic – brand + violet gradientas; Summary – brand→accent gradientas, confetti 6 spalvų.
- **Tipografija:** Plus Jakarta Sans (sans), JetBrains Mono (mono); antraštės `font-bold` / `font-black`, dydžiai nuo `text-sm` iki `text-6xl`/`text-8xl` (hero).
- **Informacijos tankis:** skaidrėse – hero + 2–4 blokai/kortelės; Action intro – 3 dalys (provokacija, palyginimas, kontekstas); Summary – hero + 3–4 žinių sekcijos + refleksija + CTA + footer.

### 2.4 CTA vietos

- **HomePage:** vienas pagrindinis CTA „Pradėti mokymąsi“, antrinis „Moduliai“; greiti promptai su Copy.
- **ModulesPage:** kiekviena modulio kortelė – CTA į modulį („Pradėti“ / „Tęsti“).
- **ModuleView:** „Atgal į modulius“, „Atgal“ / „Kita skaidrė“, „Tęsti nuo skaidrės X“ / „Nuo pradžios“, „Grįžti į testo rezultatą“.
- **Skaidrės:** Action intro – „Pamatyk skirtumą per 30 sek.“; Summary – „Kopijuoti promptą“, „Pereikite prie kito modulio“; PracticalTask – „Kopijuoti“ / „Baigta“ ir pan.
- **Testas/Quiz:** „Pasirinkti atsakymą“, „Toliau“, „Pateikti“, „Peržiūrėti paaiškinimą“, „Pakartoti“.

---

## 3. „Chaoso“ šaltinių diagnozė

Kiekvienam šaltiniui: **(a) problema, (b) kodėl kenkia, (c) sprendimas, (d) kaip įgyvendinti, (e) rizika/kompromisas.**

### 3.1 Per daug spalvų vienoje skaidrėje / puslapyje

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Vienoje skaidrėje kartu rodomos rose, emerald, brand, amber, violet, orange (pvz. Summary kortelės, Hierarchy blokai, palyginimo skaidrės). |
| **(b) Kodėl kenkia** | Vartotojas negali greitai nustatyti, kas svarbiausia; spalva nustoja nešti semantinę informaciją. |
| **(c) Sprendimas** | Riboti iki 2–3 spalvų per skaidrę: 1 neutral (slate/gray) + 1–2 semantinės (brand + accent ARBA viena semantinė). |
| **(d) Įgyvendinimas** | Naudoti Design System paletę (4. skyrius); Summary sekcijoms – vienoda brand arba vienas accent, ne 5 skirtingos. Kortelėms – border/icon viena spalva, fonas neutralus. |
| **(e) Rizika** | Santraukoje „Ką išmokote“ vizualinė atitrauktis gali sumažėti; kompensuoti struktūra (numeracija, ikonos) ir tarpai. |

### 3.2 Per daug vizualinių akcentų (gradientai, šešėliai, ring)

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Hero blokai su gradientu + dekoratyviniai simboliai + CTA su gradientu + pulse; kortelės su ring-2, shadow-lg ir skirtingomis border spalvomis. |
| **(b) Kodėl kenkia** | Keli „šokeriai“ konkuruoja dėmesyje; skaitomumas mažėja. |
| **(c) Sprendimas** | Vienas dominuojantis akcentas per skaidrę (pvz. tik CTA arba tik hero antraštė); likusieji elementai – neutralūs arba subtilūs. |
| **(d) Įgyvendinimas** | Nustatyti taisyklę: gradientas – tik 1 vieta per skaidrę (arba hero, arba vienas CTA). Šešėliai – vienas lygis (pvz. `shadow-md`) kortelėms, ne `shadow-xl` + `shadow-2xl` kartu. |
| **(e) Rizika** | Hero gali atrodyti „plokščiau“; priimtina, jei CTA lieka aiškiai matomas. |

### 3.3 Nekonsistentiškas spacing ir border-radius

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | `space-y-3`, `space-y-4`, `space-y-6`, `space-y-8`, `gap-2`, `gap-4`, `gap-6` naudojami be vienodos skalės; `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl` maišomi. |
| **(b) Kodėl kenkia** | Vizualinis triukšmas; sunku skenuoti. |
| **(c) Sprendimas** | Spacing sistema (4, 8, 12, 16, 24, 32, 48 px) ir radius sistema (8, 12, 16, 24 px) – žr. 4 skyrių. |
| **(d) Įgyvendinimas** | Pakeisti ad-hoc vertes į design token’us (Tailwind: `p-4`, `p-6`, `rounded-xl`, `rounded-2xl` pagal komponento lygį). |
| **(e) Rizika** | Minimali; reikia vieno perėjimo per komponentus. |

### 3.4 Per daug kortelių / box’ų

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Skaidrėse 4–6 atskiri „langai“ su savo fonais ir rėmeliais (hero + 2–4 kortelės + takeaway + tip). |
| **(b) Kodėl kenkia** | Kognityvinė apkrova; skaitytojas neaiškiai žino, kur pradėti. |
| **(c) Sprendimas** | Maksimaliai 3–4 vizualiai atskiri blokai per skaidrę; grupuoti informaciją į vieną kortelę su vidinėmis antraštėmis. |
| **(d) Įgyvendinimas** | Summary – žinių sekcijas galima sujungti į vieną „accordion“ arba vieną didelę kortelę su sub-heading’ais; palyginimo skaidrė – 2 kortelės (kairė/dešinė) + 1 takeaway, be papildomo „stats“ lango jei galima įtraukti į takeaway. |
| **(e) Rizika** | Santraukoje „celebration“ jausmas gali reikalauti atskirų blokų; leistina 3 blokai (hero, žinios, CTA). |

### 3.5 Silpna hierarchija (antraštės, teksto svoris)

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Kelios antraštės vienodo ar panašaus dydžio; daug bold teksto be aiškaus H1 → H2 → body atskyrimo. |
| **(b) Kodėl kenkia** | Skenuojant neaišku, kas pagrindinė mintis. |
| **(c) Sprendimas** | Aiški tipografijos skalė: viena H1 per skaidrę, H2 po ja, body mažesnis; bold – tik 1–2 frazėms. |
| **(d) Įgyvendinimas** | Naudoti 4. skyriaus tipografijos skalę; skaidrės pavadinimas = H1, poskyriai = H2, likusis = body. |
| **(e) Rizika** | Nėra. |

### 3.6 Per daug ikonų ir emoji

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Lucide ikonos + emoji (✍️, 💻, 🎧, ⏱, ✨, 🚀, 🤖, 📐, ❌, ✓, 📚) kartu; confetti 6 spalvų. |
| **(b) Kodėl kenkia** | Vizualinis triukšmas; emoji skiriasi stiliumi nuo Lucide. |
| **(c) Sprendimas** | Ikonoms – tik Lucide (arba vienas stilius); emoji naudoti tik ten, kur būtina (pvz. vienas hero emoji arba žodynėlio terminas). Confetti – sumažinti iki 2–3 spalvų (brand + accent). |
| **(d) Įgyvendinimas** | Infographic ir Summary – emoji pakeisti į Lucide ikonas kur įmanoma; confetti palikti brand + accent. |
| **(e) Rizika** | Emoji kartais suteikia „šilumos“; jei pašalinsime visur – gali atrodyti per šalta. Riboti, ne pašalinti visiškai. |

### 3.7 Triukšmingi fonai ir gradientai

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | Gradientai `from-brand-600 via-brand-500 to-accent-500`, `from-brand-600 via-brand-500 to-violet-600`; float animacijos (blur orbs) pagrindiniame puslapyje. |
| **(b) Kodėl kenkia** | Per daug judesio ir spalvų perėjimų. |
| **(c) Sprendimas** | Hero – vienas gradientas (brand → tamsesnis brand arba brand → vienas accent); pašalinti violet iš hero. Float – vienas subtilus orb arba išjungti. |
| **(d) Įgyvendinimas** | Tailwind: pakeisti `to-violet-600` į `to-brand-700`; HomePage fonus – vienas `bg-brand-400/20` orb. |
| **(e) Rizika** | Minimali. |

### 3.8 Judesiai ir animacijos

| Aspektas | Aprašymas |
|----------|-----------|
| **(a) Problema** | pulse-slow CTA, float badge, confetti, staggered entrance, hover -translate-y. |
| **(b) Kodėl kenkia** | Nuolatinis judesys atitraukia dėmesį. |
| **(c) Sprendimas** | Animacijos – tik atidarymui/reveal (fade-in, slide-in); pulse – tik vienas CTA vienu metu; confetti – vieną kartą, trumpai. |
| **(d) Įgyvendinimas** | Išjungti float ant secondary elementų; pulse palikti tik pagrindiniam CTA Action intro; confetti 1–2 s. |
| **(e) Rizika** | Per mažai judesio gali atrodyti „statiška“; išlaikyti subtilius atidarymo efektus. |

---

## 4. Design System v0.1

### 4.1 Spalvų paletė

| Rolė | Light | Dark | Naudojimas |
|------|--------|------|------------|
| **Brand (pagrindinė)** | #627d98 (500), #102a43 (900) | #9fb3c8 (300), #0a1929 (950) | Navigacija, pagrindiniai blokai, primary CTA fono atspalvis |
| **Accent (pasiekimai, CTA)** | #d4a520 (500), #b8860b (600) | #e6bc4a (400) | Vienas CTA, „Kitas žingsnis“, success stats |
| **Neutral (fonas, tekstas)** | gray-50, gray-100, gray-500, gray-900 | gray-800, gray-400, gray-100 | Fonai, antrinis tekstas, border |
| **Slate (UI elementai)** | slate-50, slate-200, slate-600 | slate-800, slate-400 | Kortelės, badge Testas, secondary UI |

**Semantinės (riboti naudojimą):**

| Semantika | Spalva | Naudojimas |
|-----------|--------|------------|
| Success / teisingai | emerald | Tik „teisingas“ atsakymas, struktūruotas pavyzdys, Baigtas |
| Warning / dėmesio | amber | Papildoma skaidrė, optional, patarimas |
| Error / klaida | rose | Nestruktūruotas pavyzdys, klaidos pranešimas |
| Informacinis | brand | Pagrindinė info, žinios blokas |

**Taisyklė:** Vienoje skaidrėje – ne daugiau kaip 2 semantinės spalvos (pvz. emerald + rose palyginimui) + brand arba accent vienam CTA.

### 4.2 Tipografijos skalė

| Lygis | Klasė | Naudojimas |
|-------|--------|------------|
| H1 | `text-2xl md:text-3xl font-bold` | Skaidrės pavadinimas (vienas per skaidrę) |
| H2 | `text-lg md:text-xl font-bold` | Poskyrio antraštė |
| H3 | `text-base font-semibold` | Kortelės antraštė, bloko heading |
| Body | `text-sm md:text-base` | Pagrindinis tekstas |
| Small | `text-xs` | Etiketės, šaltiniai, badge |
| Mono | `font-mono text-sm` | Kodo/prompto pavyzdžiai |

**Do:** Vienas H1, tada H2 → body.  
**Don’t:** Kelios „hero“ antraštės vienodo dydžio; bold per visą pastraipą.

### 4.3 Spacing sistema

Naudoti 4 px bazę: `4, 8, 12, 16, 24, 32, 48` (Tailwind: `1, 2, 3, 4, 6, 8, 12`).

| Kontekstas | Klasė |
|------------|--------|
| Tarp blokų skaidrėje | `space-y-6` arba `gap-6` |
| Tarp kortelės elemento | `space-y-3` arba `gap-3` |
| Vidinis kortelės padding | `p-4` md: `p-5` / `p-6` |
| Skaidrės wrapper | `p-6 md:p-10` |
| Tarp sekcijų (Summary) | `space-y-8` |

### 4.4 Border-radius

| Elementas | Klasė |
|-----------|--------|
| Kortelė, didesnis blokas | `rounded-2xl` |
| Mažesnis blokas, mygtukas | `rounded-xl` |
| Badge, small chip | `rounded-full` arba `rounded-lg` |
| Input, code block | `rounded-xl` |

**Don’t:** Maišyti `rounded-3xl` su `rounded-lg` tos pačios „lygos“ elementuose.

### 4.5 Šešėliai

| Lygis | Klasė | Naudojimas |
|-------|--------|------------|
| Kortelė default | `shadow-md` arba `shadow-lg` | Skaidrės kortelės |
| Hover | `hover:shadow-lg` / `hover:shadow-xl` | Interaktyvios kortelės |
| CTA | `shadow-brand-500/25` (subtilius) | Primary mygtukas |

**Don’t:** Vienoje skaidrėje `shadow-2xl` ant kelių elementų.

### 4.6 Komponentų būsenos

- **Default:** border gray-200, fonas white / gray-50.
- **Hover:** `hover:shadow-lg`, `hover:-translate-y-0.5` (vienas tipas).
- **Focus:** `focus:ring-2 focus:ring-brand-500 focus:ring-offset-2` (a11y).
- **Disabled:** `opacity-50 cursor-not-allowed`.
- **Active/selected:** viena semantinė spalva (brand arba accent), ne kelios.

### 4.7 Grid ir breakpoints

- **Container:** `max-w-4xl` arba `max-w-5xl` skaidrės turiniui; `max-w-2xl` teksto blokams.
- **Breakpoints:** Tailwind default (sm 640, md 768, lg 1024). Mobile-first: vienas stulpelis; md+ – grid 2 stulpeliai kur reikia.
- **Touch:** Min 44px mygtukams ir klikinamiems elementams (jau naudojama).

### 4.8 Prieinamumas (WCAG pagrindai)

- **Kontrastas:** Tekstas ant brand/accent fonų – baltas; body tekstas ant gray-50 – gray-900 (pakanka AA).
- **Fokusas:** Visada matomas `focus-visible` žiedas (brand).
- **Aria:** Interaktyvūs elementai su `aria-label`; `aria-expanded` išskleidžiamiems blokams.
- **Semantika:** `role="region"`, `aria-label` skaidrės regionui; mygtukai – `<button>` arba `role="button"` + `tabIndex={0}` + klaviatūra.

---

## 5. Modulių identiteto taisyklė (1–3)

Moduliai 1–3 turi **skirtis**, bet būti **iš tos pačios gamos**: vienodas neutralus fonas, vienoda tipografija ir spacing, skirtingas **vienas** akcentas pagal modulio tipą.

| Modulis | Tipas | Leidžiama modulio „spalva“ | Kur naudoti | Kur draudžiama |
|---------|--------|----------------------------|--------------|-----------------|
| **1** | Mokymas | brand | Badge „Modulis 1“, progress bar aktyvi dalis, hero border/CTA atspalvis, žinių blokai | Nenaudoti brand kaip vienintelės spalvos visoms kortelėms – kombinuoti su neutral |
| **2** | Testas | slate | Badge „Testas“, progress, klausimų blokas | Nenaudoti ryškių gradientų hero; išlaikyti ramų, koncentracijai tinkamą toną |
| **3** | Praktika | accent | Badge „Praktika“, CTA „Pradėti scenarijų“, praktikos kortelės border | Nenaudoti accent ant kiekvieno mažo elemento – tik 1–2 CTA arba header |

**Bendros taisyklės:**

- **Neutral fonas:** Visi trys moduliai – baltas / gray-50 fonas skaidrės turiniui; kortelės – white su gray-200 border.
- **Vienas akcentas per kontekstą:** Skaidrėje – vienas „šokiruojantis“ elementas (pvz. vienas CTA arba viena hero antraštė), likusieji – brand arba neutral.
- **Semantinės spalvos (rose, emerald):** Tik ten, kur reikia semantikos (palyginimas blogas/geras, success/error), ne dekoratyvui.

---

## 6. Prieš → Po rekomendacijos

Kiekviena: **(a) problema, (b) kodėl kenkia, (c) sprendimas, (d) kaip įgyvendinti, (e) rizika.**

### 6.1 Landing (HomePage)

| Punktas | Prieš | Po |
|---------|--------|-----|
| **Fonas** | Keli blur orbs (brand, accent, gradient) | Vienas subtilus orb (`bg-brand-400/15`) arba jokio |
| **Hero CTA** | Gradient + pulse | Gradient išlaikyti; pulse – palikti (vienintelis energinis objektas) |
| **Trust indicators** | CheckCircle + tekstas | Išlaikyti; užtikrinti, kad spalva muted (gray-500) |
| **Greiti promptai** | Kortelės su įvairiomis border | Vienoda border `border-gray-200`, vienas hover `shadow-md` |

**(a)** Per daug dekorų ir spalvų. **(b)** Atitraukia nuo vieno CTA. **(c)** Sumažinti foną, vienodinti korteles. **(d)** HomePage.tsx – pašalinti antrą/trečią orb; greiti promptai – vienodos `card` klasės. **(e)** Minimali.

### 6.2 Lesson page (ModuleView + skaidrės turinys)

| Punktas | Prieš | Po |
|---------|--------|-----|
| **Header** | Badge’ai (Modulis N, Baigtas, Papildoma) + H1 + subtitle | Išlaikyti; H1 vienas, subtitle `text-gray-600` |
| **Kortelė (wrapper)** | `card` su `shadow-lg` | `shadow-md`, `rounded-2xl`, vienodas `p-6 md:p-10` |
| **Navigacija** | Atgal, Skaidrė X/Y, Atgal/Kita | Išlaikyti; mygtukai `btn-secondary` / `btn-primary` pagal prioritetą |

**(a)** Nekonsistentiškas padding ir šešėliai. **(b)** Triukšmas. **(c)** Vienodas wrapper ir spacing pagal 4.3–4.5. **(d)** ModuleView.tsx – vienoda `card` klasė; SlideContent children nenaudoja papildomų didelių šešėlių. **(e)** Nėra.

### 6.3 Task page (PracticalTask, block skaidrės)

| Punktas | Prieš | Po |
|---------|--------|-----|
| **Užduoties blokas** | Skirtingi border (brand, emerald, amber) | Vienas tipas: `border-l-4 border-brand-500` informacijai; CTA – accent |
| **Mygtukai** | Kopijuoti / Baigta – skirtingi stiliai | Kopijuoti – secondary; Baigta – primary arba accent, vienodas `rounded-xl` |

**(a)** Per daug spalvų užduočių bloke. **(b)** Neaišku, kas veiksmas. **(c)** Vienas informacinis blokas (brand), vienas CTA (accent). **(d)** PracticalTask.tsx – naudoti design token’us iš 4 skyriaus. **(e)** Nėra.

### 6.4 Quiz (Modulio 2 testas, QuizPage)

| Punktas | Prieš | Po |
|---------|--------|-----|
| **Klausimų kortelė** | Neutral arba brand | Neutral (slate/gray); teisingas/neteisingas – tik emerald/rose feedback |
| **Progresas** | CircularProgress + tekstas | Išlaikyti; spalva slate arba brand, ne ryški |
| **Rezultatas** | Gradient arba daug spalvų | Vienas blokas: brand arba accent hero; stats – vienoda kortelių stilė |

**(a)** Testo puslapyje per daug vizualinių akcentų. **(b)** Koncentracijai trukdo. **(c)** Ramus, vienodas stilius; spalva tik rezultatų feedback. **(d)** QuizPage.tsx, TestSectionSlide – vienodos kortelės; QuizResultsView – vienas gradientas arba vienas accent. **(e)** Nėra.

### 6.5 Navigation ir progress

| Punktas | Prieš | Po |
|---------|--------|-----|
| **SlideGroupProgressBar** | brand + emerald (past) + gradient (active) | Išlaikyti; galima sumažinti gradient intensyvumą (tik brand, be accent) |
| **AppNav** | Brand / ikonos | Išlaikyti; vienodas active state (brand) |
| **Skaidrė X/Y** | Bold brand | Išlaikyti |

**(a)** Progress bar per ryškus. **(b)** Gali atitraukti nuo turinio. **(c)** Active segmentas – brand, be gradiento; past – emerald palikti. **(d)** ModuleView.tsx – SlideGroupProgressBar active `bg-brand-500` vietoj gradient. **(e)** Minimali.

### 6.6 CTA blokai

| Kontekstas | Taisyklė |
|------------|----------|
| **Vienas pagrindinis CTA skaidrėje** | Leisti gradientą (brand→accent) arba `btn-primary`; didesnis, vienas. |
| **Antriniai mygtukai** | `btn-secondary` (gray); be gradiento. |
| **Kopijuoti** | Secondary arba mažas accent border. |
| **„Kitas žingsnis“ / „Pereikite prie Modulio 2“** | Accent arba primary; vienas toks mygtukas skaidrėje. |

**(d)** Visur naudoti `btn-primary`, `btn-secondary`, `btn-accent` iš index.css; ne ad-hoc gradientų ant kelių mygtukų. **(e)** Nėra.

### 6.7 Informaciniai pranešimai (banner, klaidos)

| Tipas | Stilius |
|-------|---------|
| **Info (remediation)** | `bg-brand-50 border-brand-200`, tekstas `text-brand-800` – jau atitinka |
| **Klaida** | `bg-rose-50 border-rose-200`, `text-rose-800` |
| **Įspėjimas (trūksta turinio)** | `bg-amber-50 border-amber-200`, `text-amber-800` |
| **Success** | `bg-emerald-50 border-emerald-200`, `text-emerald-800` |

**(d)** ErrorBoundary ir remediation – naudoti tik šias keturias semantines; vienas stilius per tipą. **(e)** Nėra.

---

## 7. Įgyvendinimo planas

### 7.1 Prioritetai (Must / Should / Nice)

**Must (1 sprintas – greiti laimėjimai):**

- [ ] **M-DS1** Spalvų taisyklė: vienoje skaidrėje max 2 semantinės + 1 brand/accent (4.1, 5). Įgyvendinimas: Summary – sumažinti sekcijų spalvų į 1–2; Hierarchy – palikti skirtingas prioritetams, bet vienodas kortelės fonas (white).
- [ ] **M-DS2** Vienas gradientas per skaidrę: hero ARBA CTA, ne abu ryškūs (3.2, 6.2). Įgyvendinimas: TransitionSlide takeaway – ne gradient, o `bg-brand-100` arba vienas accent mygtukas; Infographic – hero gradient be violet (tik brand).
- [ ] **M-DS3** Spacing ir radius sistema: dokumentuoti ir taikyti naujuose komponentuose; pataisyti 3–5 aktyviausius (ModuleView wrapper, Summary kortelės, Action intro blokai) pagal 4.3, 4.4.
- [ ] **M-DS4** Confetti / emoji: confetti – 2 spalvos (brand, accent); emoji infographic – pakeisti į Lucide kur įmanoma (3.6, 3.7).

**Should (2 sprintas):**

- [ ] **S-DS1** Tipografijos skalė: vienas H1 per skaidrę, H2/body nuosekliai – auditas ir pataisymai (4.2).
- [ ] **S-DS2** Modulių identitetas: Modulis 2 – slate visur (badge, progress); Modulis 3 – accent tik CTA (5).
- [ ] **S-DS3** Kortelių skaičius: Summary – 3 blokai (hero, žinios viena grupe, CTA) arba max 4; palyginimo skaidrė – 2 kortelės + 1 takeaway (3.4).
- [ ] **S-DS4** Šešėliai: vienas lygis `shadow-md` default, `shadow-lg` hover – auditas (4.5).

**Nice:**

- [x] **N-DS1** Float animacijos: išjungti ant secondary (badge „~45 min“) – HomePage badge be animate-float (2026-02-12).
- [x] **N-DS2** Design tokens failas: `src/design-tokens.ts` – spacing (px + Tailwind klasės) ir radius (px + klasės) vienoje vietoje (2026-02-12).
- [ ] **N-DS3** Gamma / Figma: šis dokumentas + paletė eksportuoti į prezentaciją arba Figma gaires.

### 7.2 1–2 sprintų backlog (santrauka)

| Sprintas | Užduotys | Rezultatas |
|----------|----------|------------|
| **1** | M-DS1, M-DS2, M-DS3, M-DS4 | Sumažintas spalvų ir gradientų triukšmas; vienodas spacing/radius 5 pagrindiniuose view; confetti/emoji sutvarkyti |
| **2** | S-DS1, S-DS2, S-DS3, S-DS4 | Tipografijos ir modulių identitetas; mažiau kortelių; vienodi šešėliai |

### 7.3 Greiti laimėjimai (low effort / high impact)

1. **Infographic hero:** Pakeisti `to-violet-600` → `to-brand-700` (viena eilutė).
2. **Summary confetti:** `colors` masyve palikti tik `['#627d98', '#d4a520']` (brand, accent).
3. **Transition takeaway:** Pakeisti gradient bloką į `bg-brand-100 dark:bg-brand-900/20` + `text-brand-900`; CTA mygtukas – vienas accent.
4. **HomePage orbs:** Pašalinti antrą ir trečią `absolute` orb; palikti vieną `bg-brand-400/20`.
5. **Action intro CTA:** Palikti gradient ir pulse; kiti blokai – be papildomų gradientų (jau gerai).

### 7.4 QA checklist (vizualinis + UX)

Prieš release patikrinti:

**Vizualinis:**

- [ ] Vienoje skaidrėje ne daugiau kaip 2 semantinės spalvos + 1 CTA spalva.
- [ ] Gradientas – tik 1 vieta per skaidrę (hero arba vienas CTA).
- [ ] Kortelės: vienodas `rounded-2xl`, vienas šešėlio lygis (`shadow-md`).
- [ ] Spacing: tarp blokų `space-y-6` arba `space-y-8`; viduje `p-4`–`p-6`.
- [ ] H1 vienas per skaidrę; antraštės hierarchija H1 → H2 → body.
- [ ] Modulio 2 (testas) – ramesnė paletė (slate); Modulio 3 – accent tik 1–2 CTA.

**UX:**

- [ ] Pagrindinis CTA matomas ir vienas per kontekstą.
- [ ] Touch targets min 44px.
- [ ] Focus matomas (keyboard); aria-label interaktyviems elementams.
- [ ] Informaciniai pranešimai – vienas stilius per tipą (info/warning/error/success).

**Regresija:**

- [ ] Dark mode: visi pakeisti blokai turi `dark:` variantus.
- [ ] Mobile: skaidrės skaitomos, CTA paspaudžiami.

---

## 8. Santrauka ir nuorodos

- **Design System v0.1:** 4 skyrius – spalvos, tipografija, spacing, radius, šešėliai, būsenos, grid, a11y.
- **Modulių identitetas:** 5 skyrius – Modulis 1 brand, 2 slate, 3 accent; vienas akcentas per kontekstą.
- **Chaoso šaltiniai:** 3 skyrius – kiekvienam šaltiniui (a)–(e) formatas.
- **Prieš/po:** 6 skyrius – landing, lesson, task, quiz, nav, CTA, pranešimai.

**Nuorodos projekte:**

- Design tokens (spacing, radius): `src/design-tokens.ts`
- SOT UI/UX: `docs/development/UI_UX_AGENT.md`
- Spalvos ir Tailwind: `tailwind.config.js`, `src/index.css`
- Komponentai: `src/components/ModuleView.tsx`, `SlideContent.tsx`, `src/components/slides/`
- Vartotojų atsiliepimai: `docs/VARTOTOJU_ATSILIEPIMAI_BENDRAS.md`
- Release QA: `docs/development/RELEASE_QA_CHECKLIST.md`

---

*Dokumentas paruoštas kaip dizaino gidas Moduliams 1–3; tinka kaip šablonas būsimiems moduliams (4–6 ir toliau). Paskutinis atnaujinimas: 2026-02-12.*
