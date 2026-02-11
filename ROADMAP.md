# 🗺️ Promptų anatomija – Plėtros Roadmap

> **Data:** 2026-02-01 | **Atnaujinta:** 2026-02-08  
> **Versija:** 2.0.0  
> **Statusas:** Sistema testuojama pavieniais testais; 2026-02-07 vertinimai geri. Glaustas tolesnis planas – žr. § „Tolesnis plėtros planas“.

---

## 📊 2026-02-07 Vertinimas (testavimas ir būklė)

- **Testavimas:** Sistema testuojama **pavieniais testais** (unit + integraciniai). Vitest + React Testing Library; 46 testai (progress, useAutoSave, App integracija, QuizPage, App–Quiz flow). CI – GitHub Actions.
- **Vertinimai:** Geri – kritinėse vietose (progress, migracija, auto-save, navigacija) padengta; Error Boundary, lazy loading, SEO (react-helmet-async), accessibility (skip link, aria) įgyvendinta.
- **Moduliai:** 6 moduliai (1–3 bazinė triada, 4–6 pažangusis blokas); duomenys `modules.json`, žodynėlis, apklausa.
- **Dokumentacija:** README atnaujintas pagal kodą; Modulio 4 turinio analizė ir skaidrių eilė; CHANGELOG, docs/README sinchronizuoti.

---

## 🧭 Tolesnis plėtros planas (glaustas)

**Principas:** Stabilumas ir turinys pirmiausia; nauji „dideli“ feature’ai – tik po patvirtinto MVP ir naudotojų grįžtamojo ryšio.

| Etapas | Ką darome | Prioritetas |
|--------|-----------|-------------|
| **1. Stabilumas** | E2E testai (1–2 kritiniai flow), modulių užrakinimo įjungimas, monitoring (Sentry/GA4) – tik pagrindinės metrikos | Aukštas |
| **2. Turinys ir duomenys** | Modulių 4–6 turinio sinchronas su SOT (`modules.json` ↔ `turinio_pletra_moduliai_4_5_6.md`), žodynėlio/klausimų kokybė | Aukštas |
| **3. UX poliravimas** | Sertifikato generavimas (PDF), eksportas/importas progreso, accessibility audit užbaigimas; **prezentacijos artefakto atsisiuntimas** (Modulio 4, optional skaidrė „8 skaidrių prezentacija“ – vartotojas ruošia artefaktą, kurį galės atsisiųsti) | Vidutinis |
| **3a. Pedagoginė atitiktis** | Sandbox pranešimas, diagnostinis quiz/praktikos feedback, modulių pabaigos – „kūrinys“ (žr. § Pedagoginės įžvalgos) | Vidutinis |
| **4. Pasirinktinai** | PWA (offline), DI grįžtamasis ryšys praktinėms užduotims, papildomi scenarijai, role-first, organizacijos atmintis | Žemas / vėliau |

**Ko dabar nedaryti:** Backend/auth (per anksti), multi-language (fokusas LT), advanced gamification. Roadmap atnaujinamas kas mėnesį arba po release; kitas peržiūrėjimas – 2026-03.

---

## 🎓 Pedagoginės įžvalgos: atitiktis ir planas (Must–Should–Want)

> **Paskirtis:** Lyginame 8 pedagogines įžvalgas su dabartiniu kodu; nustatome, ką įgyvendinti jau dabar, o ką kelti toliau (must / should / want). **Post-release:** skyrius „TOP įžvalgos kūrėjams“ – esmė be standarto, kūrėjų atminimui.

### Palyginimas su kodu

| Įžvalga | Dabartinė būklė kode | Atitiktis |
|--------|----------------------|-----------|
| **1. Mokyti darymo, ne supratimo** | Moduliuose yra PracticalTask (vartotojas rašo promptą, auto-save, „užbaigta“). Moduliai 1–3: Learn → Test → Practice. Bet baigimas dažnai „peržiūrėjai“; ne visur aiškus **rezultatas** (promptas / eskizas). | ⚠️ Dalinai – praktika yra, bet CTA ir modulių pabaigos ne visur verčia „ką sukūrei“. |
| **2. Safe-to-fail sandbox** | Viskas localStorage, nėra backend – niekas neišlekia į produkciją. Galima bandyti, grįžti atgal. Bet **UI neaiškina**, kad tai sandbox („galima sugadinti“). | ✅ Architektūriškai atitinka; trūksta aiškaus pranešimo vartotojui. |
| **3. Skaidrumas = sprendimo kelias, ne „mintys“** | Nėra DI chain-of-thought; nėra „kaip AI galvojo“. Jei bus DI grįžtamasis ryšys – reikia rodyti **žingsnius, bandymus, kur sustojo**, ne žalią logą. | ✅ Dabar nėra klaidinančio skaidrumo; ateičiai – gairė įgyvendinant DI feedback. |
| **4. Role-first, ne AI-first** | Moduliai bendri (6 blokų sistema); scenarijai pagal kontekstą (marketingas, HR, produkto vadovas) – **turinio lygyje**, bet nėra atskiros „rolės“ (HR / IT / vadovas) kelio. | ⚠️ Turinys jau rolėms panašus; UX ne „pasirink savo rolę“ pirmiausia. |
| **5. Vertinimas padėti, ne teisti** | Quiz: „Teisingai! / Neteisingai.“ + explanation. Praktinėms užduotims – nėra DI vertinimo; užtenka „užbaigta“. Rizika: **per egzaminą** skamba. | ⚠️ Explanation naudingas, bet framinimas „teisinga/neteisinga“ – ne diagnostinis („čia stipru, čia silpna, pabandyk kitaip“). |
| **6. Per anksti per daug** | Roadmap jau riboja: MVP pirmiausia, be backend/gamification. 1–2 pagrindiniai scenarijai (6 blokai, testas, praktika). | ✅ Atitinka – nuobodus bet veikiantis MVP. |
| **7. Organizacijos atmintis** | Progresas (localStorage): atrakinti moduliai, užbaigtos užduotys. **Nėra:** kas bandyta, kas suveikė/ne, kaip evoliucionavo sprendimai. | ❌ Sesijos metu veikia; po mokymų lieka tik „completed“ – ne istorija bandymų. |
| **8. Teisinė/etinė „by design“** | Nėra realių duomenų siuntimo į API; praktika lokali. Rizikingi veiksmai neblokuojami (nes nėra integracijų). | ⚠️ Kol lokalu – rizika maža; su DI API reikės „neleisti realių duomenų“ ir pan. |

### Ką įgyvendinti jau dabar (low effort, didelė atitiktis)

- **Sandbox pranešimas:** Pirmo modulio / praktinės dalies kontekste trumpas tekstas: „Tai treniruoklis – galite bandyti, klysti ir grįžti atgal; niekas neišlekia į tikrą sistemą.“ (turinis + viena vietė UI.)
- **„Darymo“ CTA:** Modulių/skaidrių pabaigose, kur yra PracticalTask – aiškiai rašyti „Sukurk…“ / „Rezultatas: jūsų promptas/eskizas“, ne tik „Peržiūrėjai“.

### Must (privaloma – MVP / artimiausia release)

- **Kiekvienas modulis baigiasi kūriniu:** Nė vienas modulis tik „peržiūrėjai“ – bent viena užduotis: promptas, workflow eskizas ar sprendimo fragmentas (jau daug kur yra – patikrinti ir užbaigti).
- **Vertinimas diagnostinis:** Quiz ir praktikos feedback – ne tik „teisinga/neteisinga“, bet tonas: „čia stipru“, „čia rizika“, „pabandyk kitaip“ + explanation (turinis ir, jei reikia, mažas UI pakeitimas).

### Should (turėtų – po MVP)

- **Role-first įėjimas (pasirink rolę):** HR / marketingas / vadovas / IT / operacijos – skirtinga pirmoji patirtis arba scenarijų rinkinys (turinys + navigacija).
- **Organizacijos atmintis:** Kaupti, kas bandyta / kas suveikė / kas ne (reikia dizaino: localStorage istorija arba vėliau backend).
- **Skaidrumas, kai bus DI:** Jei bus DI grįžtamasis ryšys – rodyti sprendimo kelią (žingsniai, bandymai, kur sustojo), ne „kaip AI galvojo“.

### Want (norima – vėliau)

- **Teisinė/etinė by design:** Kai bus realūs API/duomenys – neleisti realių asmens duomenų, stabdyti rizikingus veiksmus, architektūra, ne pamokslas.
- **Pilna role-first patirtis:** Skirtingi keliai ir turinys pagal rolę.

---

### 📌 TOP įžvalgos kūrėjams (post-release, esmė – be standarto)

> Šios įžvalgos – **ne oficialus standartas**, o konsoliduota esmė iš analizių, kad kūrėjai (vystant platformą) nepamirštų pagrindų.

1. **Sistema turi mokyti darymo, ne supratimo.** Supratimas ≠ gebėjimas veikti. Modulis turi baigtis **rezultatu** (promptas, workflow, eskizas), ne jausmu „aišku“.
2. **Be safe-to-fail žmonės nemokysis.** Sandbox: galima bandyti, klysti, grįžti; niekas neišlekia į produkciją. Jei atrodo kaip tikras įrankis be apsaugų – žmonės taps pasyvūs.
3. **Skaidrumas ≠ visko rodymas.** Rodyti **sprendimo kelią** (žingsniai, bandymai, kur sustojo, kodėl nepriėmė), ne „mintis“ – tai moko mąstymo be mistifikacijos.
4. **Mokymai role-first, ne AI-first.** Tas pats AI skirtingoms rolėms = skirtingas darbas. HR, marketingas, vadovas, IT neturi matyti tos pačios patirties pirmiausia.
5. **Vertinimas turi padėti, ne teisti.** Diagnostinis: „čia veikia, čia silpna, čia rizika, pabandyk kitaip“ – ne „blogai, kartok“.
6. **Didžiausia rizika – per anksti per daug.** MVP nuobodus bet veikiantis: 1–2 scenarijai, ribotas funkcionalumas, aiškus rezultatas. Plėtra po realaus naudojimo.
7. **Mokymų sistema = organizacijos atmintis.** Vertė po sesijos: kas bandyta, kas suveikė, kas ne, kaip evoliucionavo sprendimai. Jei nieko nelieka – buvo renginys, ne sistema.
8. **Teisinė ir etinė disciplina by design.** Neleisti realių duomenų, stabdyti rizikingus veiksmus, versti galvoti apie pasekmes – architektūra, ne pamokslas.

**Geriau nei „dar viena LMS“:** Ne kurkite mokymų platformos – kurkite **treniruoklį**. Treniruoklis leidžia kartoti, klysti, matyti progresą ir grąžina naudą į realų darbą.

**Top 3 pavojai kūrėjams:** (1) Per daug teorijos, per mažai veiksmo. (2) Bandymas patikti visiems vienu metu. (3) Vertinimas, kuris gąsdina, o ne moko.

---

### Nauji roadmap punktai (iš pedagoginių įžvalgų)

Šie punktai įtraukti į atitinkamus etapus; prioritetai derinami su „Tolesnio plėtros plano“ lentele.

| Prioritetas | Užduotis | Etapas / Sprint |
|-------------|----------|------------------|
| Aukštas | Sandbox pranešimas vartotojui („treniruoklis, galite klysti“) | Fazė 1, turinys/UX (kartu su stabilumu) |
| Aukštas | Quiz/praktikos feedback – diagnostinis tonas („čia stipru / silpna / pabandyk kitaip“) | Fazė 1–2, turinys + mažas UI |
| Vidutinis | Patikrinti, kad kiekvienas modulis baigiasi kūriniu (ne tik peržiūra) | Fazė 1, turinio auditas |
| Vidutinis | Role-first įėjimas arba scenarijų pasirinkimas pagal rolę | Fazė 2 |
| Žemas | Organizacijos atmintis (bandymų istorija) | Fazė 2–3 |
| Žemas | DI grįžtamasis ryšys – rodyti sprendimo kelią, ne „mintis“ | Fazė 2 (kai bus DI) |

---

## 📊 Dabartinės Būklės Analizė

### ✅ Stiprybės

1. **Kokybiškas kodas**
   - ✅ TypeScript su strict mode
   - ✅ 0 linting klaidų
   - ✅ Geras komponentų struktūra
   - ✅ Modernus tech stack (React 18, Vite, Tailwind)

2. **Funkcionalumas**
   - ✅ **6 modulių sistema** (1–3: Learn → Test → Practice; 4–6: Konteksto inžinerija → Testas → Projektas)
   - ✅ Progreso sekimas (localStorage, versijavimas, migracija)
   - ✅ Auto-save, Error Boundary, lazy loading
   - ✅ Dark mode, responsive, klaviatūra, SEO (react-helmet-async)

3. **Testavimas**
   - ✅ Pavieniai testai (unit + integraciniai), CI
   - ⚠️ E2E dar nėra

4. **UX/UI**
   - ✅ Modernus dizainas (Navy/Gold), animacijos, ARIA, mobile-first

### ⚠️ Kritinės Problemos

#### 🔴 Aukšto prioriteto – įgyvendinta (2026-02)

1. **Klaidų valdymas (Error Boundaries)** ✅
   - ✅ ErrorBoundary komponentas, fallback UI, retry
   - **Data:** 2026-02

2. **Testavimo infrastruktūra** ✅
   - ✅ 46 testų (unit + integraciniai), CI (GitHub Actions). Sistema testuojama pavieniais testais; vertinimai geri (2026-02-07).
   - ⚠️ E2E testų dar nėra (žemas prioritetas)

3. **localStorage versijavimas ir migracija** ✅
   - ✅ Versijavimas (v1/v2), validacija, automatinė migracija
   - **Data:** 2026-02

4. **SEO (bazinė)** ✅
   - ✅ react-helmet-async, dinaminis title/description pagal puslapį ir modulį
   - ⚠️ Open Graph, structured data, sitemap – vėliau

#### 🟡 Likusios / vidutinio prioriteto

5. **Nėra produkcijos monitoring**
   - ❌ Nėra error tracking (Sentry, etc.)
   - ❌ Nėra analytics (Google Analytics, etc.)
   - ❌ Nėra performance monitoring
   - **Rizika:** Nežinome, kas neveikia produkcijoje

#### 🟡 Vidutinio prioriteto (veikia, bet gali pagerinti)

6. **Nėra offline palaikymo (PWA)**
   - ❌ Nėra Service Worker
   - ❌ Nėra offline cache
   - ❌ Nėra install prompt
   - **Rizika:** Blogas patirtis prasto interneto sąlygomis

7. **Nėra duomenų eksporto/importo**
   - ❌ Vartotojas negali eksportuoti progreso
   - ❌ Nėra backup funkcijos
   - ❌ Nėra multi-device sinchronizacijos
   - **Rizika:** Duomenų praradimas keičiant įrenginį

8. **Nėra sertifikato generavimo**
   - ❌ Minėta `turinio_pletra.md`, bet neįgyvendinta
   - ❌ Vartotojai negali gauti sertifikato
   - **Rizika:** Sumažėjęs engagement

9. **Nėra DI grįžtamojo ryšio**
   - ❌ Minėta `turinio_pletra.md` (Fazė 3)
   - ❌ Praktinės užduotys neturi DI vertinimo
   - **Rizika:** Sumažėjęs mokymosi efektyvumas

10. **Versijavimas** – dalinai ✅
    - ✅ CHANGELOG.md, versijavimas progress duomenims
    - ⚠️ Semantinio versijavimo procesas – gairės dokumentuose

#### 🟢 Žemo prioriteto (nice-to-have)

11. **Nėra multi-language palaikymo**
    - ❌ Tik lietuvių kalba
    - ❌ Nėra i18n sistemos
    - **Rizika:** Ribotas pasiekiamumas

12. **Nėra advanced gamification**
    - ❌ Nėra badges/achievements
    - ❌ Nėra leaderboards
    - ❌ Nėra social features
    - **Rizika:** Sumažėjęs engagement

13. **Nėra backend integracijos**
    - ❌ Viskas localStorage
    - ❌ Nėra user authentication
    - ❌ Nėra cloud sync
    - **Rizika:** Ribotas scalability

---

## 🎯 Plėtros Planas

### 📅 FAZĖ 1: Stabilizacija ir Pagrindinis Funkcionalumas (2026-02 - 2026-04)

**Tikslas:** Pašalinti kritines problemas, užtikrinti stabilumą

#### Sausis-Vasaris (2026-02 - 2026-03)

**Sprint 1: Klaidų valdymas ir stabilumas (2 savaitės)** ✅ *Įgyvendinta 2026-02*
- [x] **Error Boundaries įgyvendinimas** – ErrorBoundary, fallback UI, retry
- [x] **Duomenų validacija ir migracija** – versijavimas (v1/v2), validacija, migracija (`progress.ts`)
- [x] **Testavimo infrastruktūra** – Vitest + RTL, unit (progress, useAutoSave), integraciniai (App, QuizPage), CI (GitHub Actions)
  - *Sistema testuojama pavieniais testais; 2026-02-07 vertinimai geri.*
  - **Prioritetas:** ~~🔴 KRITINIS~~ → ✅ Atlikta
  - **Įvertinimas:** 16 valandų

**Sprint 2: SEO ir Monitoring (2 savaitės)**
- [ ] **SEO optimizacija**
  - Pridėti React Helmet arba react-helmet-async
  - Meta tags (title, description, keywords)
  - Open Graph tags
  - Twitter Card tags
  - Structured data (JSON-LD) - Course schema
  - Sitemap generavimas
  - robots.txt
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 10 valandų

- [ ] **Produkcijos monitoring**
  - Integruoti Sentry error tracking
  - Integruoti Google Analytics 4
  - Performance monitoring (Web Vitals)
  - Error logging su context
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 8 valandų

**Sprint 3: Dokumentacija ir versijavimas (1 savaitė)**
- [ ] **CHANGELOG.md sukūrimas**
  - Semantinio versijavimo gairės
  - Automatinis changelog generavimas (conventional commits)
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 4 valandos

- [ ] **Contributing.md**
  - Development setup
  - Code style guidelines
  - Pull request procesas
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 6 valandų

#### Kovas (2026-03 - 2026-04)

**Sprint 4: PWA ir offline palaikymas (2 savaitės)**
- [ ] **PWA funkcionalumas**
  - Service Worker sukūrimas
  - Cache strategija (Cache First, Network First)
  - Offline fallback puslapis
  - Install prompt (PWA install banner)
  - Web App Manifest
  - Icons (various sizes)
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 16 valandų

- [ ] **Duomenų eksportas/importas**
  - Export progreso į JSON
  - Import progreso iš JSON
  - Duomenų validacija importo metu
  - UI su drag-and-drop
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 12 valandų

**Sprint 5: Sertifikato generavimas (2 savaitės)**
- [ ] **Sertifikato sistema**
  - PDF generavimas (jsPDF arba PDFKit)
  - Sertifikato dizainas (template)
  - Vartotojo vardo įtraukimas
  - Data ir rezultatas
  - Download funkcija
  - Print funkcija
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 14 valandų

---

### 📅 FAZĖ 2: Funkcionalumo Plėtra (2026-04 - 2026-07)

**Tikslas:** Pridėti naują funkcionalumą, pagerinti UX

#### Balandis-Gegužė (2026-04 - 2026-05)

**Sprint 6: DI grįžtamasis ryšys (3 savaitės)**
- [ ] **DI integracija praktinėms užduotims**
  - API integracija (OpenAI, Anthropic, arba savo backend)
  - Prompt vertinimo sistema
  - Struktūruotas grįžtamasis ryšys (6 blokų analizė)
  - Scoring sistema
  - Suggestions ir pagerinimai
  - Rate limiting ir cost management
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 24 valandos
  - **Rizika:** API costs, response times

**Sprint 7: Papildomi scenarijai (2 savaitės)**
- [ ] **Pridėti 4-6 naujus verslo scenarijus**
  - Finansai/Accounting
  - Legal/Compliance
  - Operations/Logistics
  - Customer Support
  - Product Development
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 16 valandų (turinio kūrimas)

#### Birželis-Liepa (2026-06 - 2026-07)

**Sprint 8: Gamification (2 savaitės)**
- [ ] **Badges ir achievements sistema**
  - Badge dizainas
  - Achievement logika
  - Progress tracking
  - Visual feedback
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 12 valandų

**Sprint 9: Social features (2 savaitės)**
- [ ] **Social sharing**
  - Share sertifikato
  - Share progreso
  - Social media integracija
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 8 valandų

**Sprint 10: Performance optimizacija (1 savaitė)**
- [ ] **Code splitting**
  - Route-based code splitting
  - Component lazy loading
  - Bundle size analizė
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 8 valandų

---

### 📅 FAZĖ 3: Scalability ir Plėtra (2026-07 - 2026-12)

**Tikslas:** Paruošti platformą didesniam naudojimui

#### Rugpjūtis-Rugsėjis (2026-08 - 2026-09)

**Sprint 11: Backend integracija (4 savaitės)**
- [ ] **Backend architektūra**
  - Backend pasirinkimas (Node.js, Python, arba serverless)
  - Database schema (user, progress, certificates)
  - API dizainas (REST arba GraphQL)
  - Authentication sistema (JWT)
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 40 valandų
  - **Rizika:** Didelė užduotis, reikia backend žinių

- [ ] **Frontend integracija**
  - API client (axios arba fetch wrapper)
  - State management (Context API arba Zustand)
  - Offline sync strategija
  - Error handling
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 20 valandų

#### Spalis-Lapkritis (2026-10 - 2026-11)

**Sprint 12: Multi-language palaikymas (3 savaitės)**
- [ ] **i18n sistema**
  - react-i18next arba i18next setup
  - Translation files struktūra
  - Language switcher UI
  - URL-based language routing
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 24 valandos

**Sprint 13: Advanced features (3 savaitės)**
- [ ] **Komandiniai mokymai**
  - Team creation
  - Progress sharing
  - Leaderboards
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 30 valandų

- [ ] **Pažangusis kursas**
  - Advanced techniques modulis
  - Complex scenarios
  - **Prioritetas:** 🟢 ŽEMAS
  - **Įvertinimas:** 20 valandų (turinio kūrimas)

#### Gruodis (2026-12)

**Sprint 14: Optimizacija ir poliravimas (2 savaitės)**
- [ ] **Performance audit**
  - Lighthouse scoring
  - Core Web Vitals optimizacija
  - Bundle size optimizacija
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 12 valandų

- [ ] **Accessibility audit**
  - WCAG 2.1 AA compliance
  - Screen reader testing
  - Keyboard navigation testing
  - **Prioritetas:** 🟡 VIDUTINIS
  - **Įvertinimas:** 10 valandų

---

## 📊 Prioritetų Matrica

| Užduotis | Prioritetas | Įvertinimas | Rizika | ROI | Statusas |
|----------|-------------|-------------|--------|-----|----------|
| Error Boundaries | 🔴→✅ | 8h | Žema | Aukštas | **Atlikta 2026-02** |
| Duomenų migracija | 🔴→✅ | 12h | Vidutinė | Aukštas | **Atlikta 2026-02** |
| Testavimo infrastruktūra | 🔴→✅ | 16h | Žema | Aukštas | **Atlikta 2026-02** (pavieniai testai, vertinimai geri) |
| SEO (bazinė) | 🟡→✅ | 10h | Žema | Vidutinis | **Atlikta 2026-02** (react-helmet-async) |
| SEO (pilna: OG, sitemap) | 🟡 VIDUTINIS | +6h | Žema | Vidutinis | — |
| Monitoring | 🟡 VIDUTINIS | 8h | Žema | Vidutinis | — |
| PWA | 🟡 VIDUTINIS | 16h | Vidutinė | Vidutinis | — |
| Eksportas/Importas | 🟡 VIDUTINIS | 12h | Žema | Vidutinis | — |
| Sertifikatas | 🟡 VIDUTINIS | 14h | Žema | Vidutinis | — |
| DI grįžtamasis ryšys | 🟡 VIDUTINIS | 24h | Aukšta | Aukštas | — |
| Backend integracija | 🟡 VIDUTINIS | 60h | Aukšta | Vidutinis | — |
| Multi-language | 🟢 ŽEMAS | 24h | Vidutinė | Žemas | — |
| Gamification | 🟢 ŽEMAS | 12h | Žema | Žemas | — |

---

## ⚠️ Rizikos Vertinimas

### Aukštos rizikos užduotys

1. **DI grįžtamasis ryšys**
   - **Rizika:** API costs, response times, quality
   - **Mitigacija:** 
     - Pradėti su mock data
     - Rate limiting
     - Cost monitoring
     - Fallback į manual vertinimą

2. **Backend integracija**
   - **Rizika:** Didelė užduotis, reikia backend žinių
   - **Mitigacija:**
     - Pradėti su serverless (Vercel Functions, Netlify Functions)
     - Arba naudoti BaaS (Firebase, Supabase)
     - Phased approach

3. **Duomenų migracija**
   - **Rizika:** Duomenų praradimas
   - **Mitigacija:**
     - Backward compatibility
     - Extensive testing
     - Backup funkcija prieš migraciją

### Vidutinės rizikos užduotys

4. **PWA implementacija**
   - **Rizika:** Browser compatibility
   - **Mitigacija:** Progressive enhancement

5. **Multi-language**
   - **Rizika:** Translation quality
   - **Mitigacija:** Professional translation

---

## 📈 Sėkmės Metrikos

### Techninės metrikos
- ✅ 0 kritinių klaidų produkcijoje
- ✅ Lighthouse score > 90
- ✅ Core Web Vitals: Green
- ✅ Test coverage > 70%
- ✅ Bundle size < 500KB (gzipped)

### Verslo metrikos
- 📊 User retention rate
- 📊 Completion rate (modulių)
- 📊 Average time per session
- 📊 Certificate generation rate
- 📊 User satisfaction (NPS)

### UX metrikos
- 📊 Error rate
- 📊 Time to interactive
- 📊 Mobile vs Desktop usage
- 📊 Dark mode adoption

---

## 🎯 Rekomendacijos

### Būsena 2026-02-07 – pirmieji žingsniai atlikti

1. **Įgyvendinta (2026-02)**
   - [x] Error Boundary, duomenų versijavimas ir migracija, testavimo infrastruktūra (pavieniai testai), SEO (react-helmet-async), accessibility (skip link, aria), 6 moduliai, dokumentacija

2. **Artimiausiai (vasaris–kovas 2026)**
   - [ ] E2E 1–2 kritiniams flow (optional, bet rekomenduojama)
   - [ ] Modulių užrakinimo įjungimas (`DISABLE_MODULE_LOCK = false`), monitoring (Sentry/GA4 – minimalus)
   - [ ] Modulių 4–6 turinio sinchronas (JSON ↔ SOT)

3. **Tolesni 3 mėnesiai**
   - [ ] Sertifikato generavimas, eksportas/importas progreso
   - [ ] PWA arba papildomi scenarijai – pagal poreikį

### Ilgalaikės strategijos

1. **Nedaryti dabar:**
   - ❌ Backend integracija (per anksti, nėra pakankamai vartotojų)
   - ❌ Multi-language (per anksti, fokusuotis į LT rinką)
   - ❌ Advanced gamification (per anksti, pirmiausia stabilumas)

2. **Daryti dabar:**
   - ✅ Stabilumas ir kokybė
   - ✅ SEO (svarbu paieškos matomumui)
   - ✅ Monitoring (svarbu suprasti, kas neveikia)

3. **Planuoti ateičiai:**
   - 🔮 DI grįžtamasis ryšys (kai bus pakankamai vartotojų)
   - 🔮 Backend (kai bus scalability poreikis)
   - 🔮 Multi-language (kai bus tarptautinė plėtra)

---

## 📝 Pastabos

### Realistinis laiko įvertinimas

- **Fazė 1 (3 mėnesiai):** ~80 valandų darbo
  - Jei dirbate 10h/savaitę: ~8 savaitės
  - Jei dirbate 20h/savaitę: ~4 savaitės

- **Fazė 2 (4 mėnesiai):** ~100 valandų darbo
  - Jei dirbate 10h/savaitę: ~10 savaičių
  - Jei dirbate 20h/savaitę: ~5 savaitės

- **Fazė 3 (6 mėnesių):** ~150 valandų darbo
  - Jei dirbate 10h/savaitę: ~15 savaičių
  - Jei dirbate 20h/savaitę: ~7.5 savaitės

**Iš viso:** ~330 valandų darbo per 13 mėnesių

### Kritinės pastabos

1. **Nepamirškite testuoti kiekvieną pakeitimą**
   - Prieš deploy, testuokite lokaliai
   - Naudokite preview build
   - Testuokite skirtingose naršyklėse

2. **Backup strategija**
   - Prieš didesnius pakeitimus, sukurkite backup
   - Naudokite git branches
   - Testuokite staging aplinkoje

3. **Dokumentacija**
   - Dokumentuokite kiekvieną didesnį pakeitimą
   - Atnaujinkite README.md
   - Pridėkite komentarus sudėtingesnėse vietose

4. **User feedback**
   - Rinkite vartotojų atsiliepimus
   - Stebėkite analytics
   - Iteruokite pagal duomenis

---

## 🔄 Roadmap Atnaujinimas

Šis roadmap atnaujinamas:
- **Kas mėnesį:** Peržiūrėti prioritetus ir „Tolesnio plėtros plano“ lentelę
- **Po release:** Pažymėti įgyvendintus punktus
- **Kas ketvirtį:** Ilgalaikė strategija (Fazės 2–3)

**Paskutinis atnaujinimas:** 2026-02-07 (testavimo vertinimas gerai; įtraukta pedagoginių įžvalgų analizė, must–should–want, TOP įžvalgos kūrėjams, nauji roadmap punktai)  
**Kitas peržiūrėjimas:** 2026-03-01

---

<div align="center">

**Promptų anatomija** – Plėtros Roadmap

*Sukurta 2026-02-01 | Atnaujinta 2026-02-07 | Versija 2.0.0*

</div>
