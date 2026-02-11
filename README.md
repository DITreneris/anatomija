# Promptų anatomija - Interaktyvus DI Mokymas

Interaktyvus mokymas apie DI (dirbtinio intelekto) promptų struktūrą: **6 moduliai** (6 blokų sistema, žinių testas, praktika, konteksto inžinerija, pažangus testas, projektas). Orientuotas į verslo problemų sprendimą ir **praktinius rezultatus** – kursas moko kurti promptus ir scenarijus, ne tik suprasti teoriją.

## 🎯 Apie projektą

Mokymo kursas (treniruoklis), kuris moko **kurti** efektyvius DI promptus naudojant **6 blokų sistemą**:

| Blokas | Paskirtis |
|--------|-----------|
| 1️⃣ **Meta** | Rolė, kontekstas ir tikslas |
| 2️⃣ **Input** | Duomenys, faktai ir apribojimai |
| 3️⃣ **Output** | Formatas, struktūra ir reikalavimai |
| 4️⃣ **Reasoning** | Mąstymo seka ir logika |
| 5️⃣ **Quality Control** | Kokybės kriterijai |
| 6️⃣ **Advanced Parameters** | Temperature, reasoning gylis, atsakymo kontrolė |

## ✨ Pagrindinės funkcijos

- **6 moduliai:** 1) 6 Blokų Sistema (teorija) → 2) Žinių Patikrinimas (testas) → 3) Praktinis Pritaikymas (4 scenarijai) → 4) Konteksto inžinerija (pažangus teorija) → 5) Žinių patikrinimas pažangus (testas) → 6) Projekto kūrimas (praktika)
- **6 blokų sistema** su workflow, technikomis ir mąstymo modeliais (CoT, ToT)
- **Praktiniai verslo scenarijai** (Modulis 3) ir **vienas integruotas projektas** (Modulis 6)
- **Progreso sekimas** (localStorage, versijavimas) ir automatinis išsaugojimas
- **Žodynėlis** (terminai) ir **Apklausa** (bendras žinių patikrinimas)
- **Promptų biblioteka** (pagrindiniame puslapyje) su kopijavimo funkcija
- **Responsive dizainas**, tamsusis/šviesusis režimas, klaviatūros navigacija
- **Lazy loading** komponentų, **Error Boundary**, **SEO** (react-helmet-async)

## 🚀 Greitas startas

### Reikalavimai
- Node.js 18+ (rekomenduojama `engines` iš `package.json`: node >=18, npm >=9)
- npm arba yarn

### Instaliacija

```bash
git clone https://github.com/DITreneris/anatomija.git
cd anatomija
npm install
npm run dev
```

Aplikacija bus prieinama: `http://localhost:3000`

### Build produkcijai

Prieš build automatiškai vykdoma JSON schemų validacija (`npm run validate:schema` per `prebuild`). Komandos:

```bash
npm run build
npm run preview
```

**MVP build** (tik moduliai 1–3, testuotojams):

```bash
VITE_MVP_MODE=1 npm run build
```

**Windows (PowerShell):** Jei `&&` neveikia, naudokite `;` arba `cmd /c "cd anatomija && npm run build"`.

### Testavimas

```bash
npm test              # Watch mode
npm run test:run      # Vienkartinis paleidimas
npm run test:coverage # Su coverage report
```

## 📚 Modulių struktūra

| Modulis | Pavadinimas | Turinys |
|---------|-------------|---------|
| 1 | **6 Blokų Sistema** | Teorija: promptų struktūra, workflow, technikos, kiekvienas blokas (Meta, Input, Output, Reasoning, Quality, Advanced). |
| 2 | **Žinių Patikrinimas** | Testas: klausimai su paaiškinimais; sertifikatas nuo 70%. |
| 3 | **Praktinis Pritaikymas** | 4 verslo scenarijai su žingsniais ir pavyzdiniais sprendimais. |
| 4 | **Konteksto inžinerija** | Pažangus teorija: RAG, Deep research, tokenų ekonomika, manipuliacijos, žinių patikrinimas. |
| 5 | **Žinių patikrinimas (pažangus)** | Pažangus testas po Modulio 4. |
| 6 | **Projekto kūrimas** | Vienas integruotas projektas (capstone) su 6 blokų sistema ir pažangiomis temomis. |

**Navigacija:** Pagrindinis → Moduliai → Žodynėlis → Apklausa. Duomenys: `src/data/modules.json` (moduliai, skaidrės, klausimai).

## ⚙️ Konfigūracija

### Modulių duomenų keitimas

- **Moduliai ir skaidrės:** `src/data/modules.json` (moduliai 1–6, skaidrės, Modulio 2/5 klausimai, apklausa). Galite pridėti/pašalinti skaidres, keisti tekstus ir klausimus.
- **Žodynėlis:** `src/data/glossary.json`.
- **Promptų biblioteka:** `src/data/promptLibrary.json`.
- Duomenys įkraunami per `src/data/modulesLoader.ts` (cache, validacija). **Paprasti turinio pakeitimai** – redaguokite JSON, be kodo keitimo.

### Spalvų schema

Spalvos konfigūruojamos `tailwind.config.js` (brand – navy/slate, accent – auksinė):

```javascript
// theme.extend.colors
brand: { 500: '#627d98', 600: '#486581', ... },  // Navy / slate mėlyna
accent: { 500: '#d4a520', 600: '#b8860b', ... }  // Auksinė
```

Pilna paletė (50–950) ir papildomos spalvos (slate, di-visata) – žr. `tailwind.config.js`.

## 🌐 Deployment

### GitHub Pages (rekomenduojama)

1. GitHub repo: Settings → Pages
2. Source: pasirinkite "GitHub Actions"
3. Push į `main` automatiškai deployina

Prieiga: `https://ditreneris.github.io/anatomija/`

**Pastaba:** `vite.config.ts` naudoja base path `/anatomija/`. Jei keičiate repo pavadinimą, atnaujinkite base.

### Kiti variantai

- **Vercel**: `vercel`
- **Netlify**: Build `npm run build`, publish `dist`

## 🛠️ Technologijos

| Technologija | Paskirtis |
|--------------|-----------|
| React 18 | UI biblioteka (lazy loading, Suspense) |
| TypeScript | Tipai (`src/types/modules.ts`) |
| Vite | Build ir dev serveris |
| Tailwind CSS | Styling (brand, accent, dark mode) |
| Vitest + React Testing Library | Unit ir integraciniai testai |
| react-helmet-async | SEO (title, description pagal puslapį) |
| lucide-react | Ikonos; recharts – diagramos (pvz. haliucinacijų rodikliai); canvas-confetti – šventimas |

## 📁 Projekto struktūra

```
src/
├── components/       # React komponentai
│   ├── slides/       # Skaidrės: types/ (AllSlides, ContentSlides, BlockSlides, TestPracticeSlides), shared/ (CopyButton, PracticalTask, ProcessStepper, EnlargeableImage, …), utils/
│   ├── ui/           # ErrorBoundary, LoadingSpinner
│   ├── HomePage.tsx, ModulesPage.tsx, ModuleView.tsx, QuizPage.tsx, GlossaryPage.tsx
│   ├── AppNav.tsx, ModuleCompleteScreen.tsx, QuizResultsView.tsx, CircularProgress.tsx
│   ├── SlideContent.tsx, PromptLibrary.tsx, Celebration.tsx, HallucinationRatesDashboard.tsx
│   └── __tests__/    # App.integration, App.quiz.integration, QuizPage
├── data/             # modules.json, modulesLoader.ts, glossary.json, promptLibrary.json, hallucinationRates.ts
├── types/            # modules.ts (tipai moduliams, skaidrėms, quiz)
├── utils/            # progress.ts, useAutoSave.ts, useQuizState.ts, useSlideNavigation.ts, useTheme.ts, logger.ts + __tests__
└── test/             # Vitest setup
```

## 📖 Dokumentacija

- **README.md** – šis failas
- **turinio_pletra.md** – turinio planas (Moduliai 1–3, source of truth)
- **docs/turinio_pletra_moduliai_4_5_6.md** – turinio planas Moduliams 4–6 (SOT)
- **docs/development/RELEASE_QA_CHECKLIST.md** – 5 min sanity prieš release (nuorodos, mobile, dark, a11y, lietuviškos raidės, MVP)
- **TODO.md** – dabartinės užduotys
- **docs/** – papildoma dokumentacija (development, deployment, Modulio 4 skaidrių eilė, agentų planas; žr. `docs/README.md`)

## 📄 Licencija

**Mokymo turinys:** © 2024-2026 Tomas Staniulis. Visos teisės saugomos.

**Programinė įranga:** MIT License

## 📧 Kontaktai

- **Autorius:** Tomas Staniulis
- **GitHub:** [DITreneris](https://github.com/DITreneris)
- **Klausimai:** Sukurkite issue GitHub repozitorijoje

---

<div align="center">

**Promptų anatomija** - Interaktyvus DI Mokymas

Autorinė mokymo medžiaga © 2024-2026 Tomas Staniulis

*Sukurta verslo problemų sprendimui su DI* 🎯

</div>