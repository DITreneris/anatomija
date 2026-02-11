# MVP Release Planas – Moduliai 1–3 (GitHub, testuotojams)

> **Tikslas:** Saugiai paruošti ir išleisti Modulius 1–3 į GitHub, dalintis nuoroda testavimui. Vartotojai negali pasiekti Modulių 4+ (nei per UI, nei per tiesioginius URL, nei per manipuliuotą būseną).
>
> **Rolė:** Senior Developer + Release Engineer + Security Reviewer  
> **Stilius:** Ship it safely. Minimalus scope, maksimalus saugumas.

---

## 1. Projekto architektūra (MVP kontekstas)

| Komponentas | Dabartinė būsena | MVP pastaba |
|-------------|------------------|-------------|
| **Frontend** | React SPA (Vite), state-based navigacija | Be URL routing – nėra hash/path parametrų |
| **Duomenys** | `modules.json`, `glossary.json` – bundle’inami | Visi 6 moduliai bundle’e; reikia runtime filtro |
| **Progresas** | `localStorage` (progress.ts) | Client-side tik; serverio nėra |
| **API** | Nėra | SPA be backend |
| **Deploy** | GitHub Pages, `base: /anatomija/` | Statinis HTML/JS |

**Išvada:** „Server-side“ ir „API“ klasikiniu prasme nėra. Prieigos kontrolė = **runtime guard’ai** (UI + komponentų lygyje) + **build-time filtravimas** (optional).

---

## 2. Agentų seka (kas ką daro)

| Etapas | Agentas | Užduotis | Artefaktai |
|-------|---------|-----------|------------|
| **1. Diagnozė** | CODE_REVIEW_AGENT | Module gating audit: kur tikrinama, kur ne; bypass scenarijai | `RELEASE_PLAN_MVP_MODULIAI_1_3.md` §4 (šis doc) |
| **2. Prieigos kontrolė** | CODING_AGENT | MVP guard: env `VITE_MVP_MODE`, filtravimas modulių, ModuleView redirect | `modulesLoader.ts`, `App.tsx`, `ModulesPage.tsx` |
| **3. Saugumo patikra** | CODE_REVIEW_AGENT | Negatyvūs testai: bandymai apeiti (moduleId 4,5,6) | `*.test.tsx` |
| **4. CI papildymas** | CODING_AGENT | Secret scan (optional), MVP build step | `.github/workflows/test.yml` |
| **5. QA + Release** | QA_AGENT | RELEASE_QA_CHECKLIST, CHANGELOG, nuorodos testuotojams | `RELEASE_QA_CHECKLIST.md`, `CHANGELOG.md` |

**Mišri užduotis (turinyje + duomenyse):** CONTENT_AGENT (HomePage CTA 3/3) → DATA_AGENT (jei reikia `modules-mvp.json`) → CODING_AGENT.

---

## 3. Release-ready užduočių planas (prioritetais, DoD)

### P0 – Release blocker (būtina)

| ID | Užduotis | Definition of Done | Failai |
|----|----------|-------------------|--------|
| **MVP-G1** | Module gating – Moduliai 4+ nepasiekiami | 1) `VITE_MVP_MODE=1` build rodo tik modulius 1,2,3. 2) Bandymas atidaryti modulį 4+ → redirect į Modules arba 404. 3) Glossary filtras (terms su moduleId 4+ paslėpti). | `modulesLoader.ts`, `App.tsx`, `ModulesPage.tsx`, `GlossaryPage.tsx` |
| **MVP-G2** | Guard vietose: ModulesPage + ModuleView + handleModuleSelect | 1) ModulesPage: rodyti tik modulius 1–3 kai MVP. 2) App: prieš render ModuleView – `if (MVP && selectedModule > 3) redirect`. 3) handleModuleSelect: atmetti moduleId > 3 kai MVP. | `App.tsx`, `ModulesPage.tsx` |
| **MVP-G3** | HomePage CTA (3/3 moduliai) | Kai completedCount === 3 ir totalModules === 3: CTA „Į apklausą“ arba „Peržiūrėti modulius“ (ne „Tęsti mokymą“). | `HomePage.tsx` |

### P1 – Labai pageidautina

| ID | Užduotis | Definition of Done | Failai |
|----|----------|-------------------|--------|
| **MVP-T1** | Negatyvūs testai (bypass scenarijai) | 1) Testas: `MVP_MODE` – handleModuleSelect(4) nekeičia selectedModule arba redirect. 2) Testas: ModulesPage rodo 3 modulius kai MVP. | `App.integration.test.tsx`, `ModulesPage` test |
| **MVP-CI1** | CI: MVP build + lint | `npm run build` su `VITE_MVP_MODE=1`; lint praeina. | `.github/workflows/test.yml` |
| **MVP-QA1** | Release QA checklist (A-M4) | RELEASE_QA_CHECKLIST atliktas prieš release. | Rankinis |

### P2 – Pageidautina

| ID | Užduotis | Definition of Done |
|----|----------|-------------------|
| **MVP-CI2** | Secret scan (grep / Gitleaks) | CI step: bez `API_KEY`, `SECRET`, `password` ir pan. |
| **MVP-QA2** | Dokumentacija: kaip paleisti MVP build | README arba docs: `VITE_MVP_MODE=1 npm run build` |

### Release gate (kada leisti release)

- [ ] MVP-G1, MVP-G2, MVP-G3 įgyvendinti
- [ ] `npm run build` su `VITE_MVP_MODE=1` sėkmingas
- [ ] `npm run lint` be klaidų
- [ ] RELEASE_QA_CHECKLIST atliktas
- [ ] CHANGELOG atnaujintas

---

## 4. Prieigos kontrolės (Module gating) specifikacija

### 4.1 UI sluoksnis

| Vieta | Veiksmas | MVP elgesys |
|------|----------|-------------|
| **ModulesPage** | Rodomi moduliai | `modules.filter(m => !MVP || m.id <= 3)` → tik 1, 2, 3 |
| **ModulesPage** | Kortelės klik | `handleModuleSelect` – jau validuoja selectedModule; papildomai: `if (MVP && id > 3) return` |
| **App** | Render ModuleView | `currentPage === 'module' && selectedModule && (!MVP || selectedModule <= 3)` → kitaip redirect į `modules` |
| **HomePage** | Progreso tekstas | `totalModules` = 3 kai MVP; CTA priklauso nuo 3/3 |
| **AppNav** | Navigacija | Moduliai 4+ nepasiekiami per state – tik per programinį redirect |

### 4.2 „API“ sluoksnis (SPA kontekste)

| Vieta | Veiksmas | MVP elgesys |
|-------|----------|-------------|
| **modulesLoader** | `loadModules()` | Kai `VITE_MVP_MODE=1`: grąžinti `{ ...data, modules: modules.filter(m => m.id <= 3) }` |
| **getModule(id)** | Gauti modulį | Jei MVP ir id > 3 → `null` arba throw |

**Pastaba:** Tikras API nėra – čia „duomenų sluoksnis“ (loader).

### 4.3 „DB“ / localStorage sluoksnis

| Vieta | Veiksmas | MVP elgesys |
|-------|----------|-------------|
| **Progress** | completedModules, completedTasks | Saugoti tik modulių 1,2,3 duomenis. Modulio 4+ progresas MVP režime ignoruojamas (nebūna). |
| **Glossary** | Filtravimas | `GlossaryPage`: terms su `moduleId > 3` kai MVP – nefiltruoti į dropdown, bet galima rodyti tik M1–M3 termų filtruose. |

### 4.4 Tiesioginis URL / būsenos manipulacija

| Vektorius | Rizika | Apsauga |
|-----------|--------|---------|
| Hash routing (`#module/4`) | Nėra – app nenaudoja hash | N/A |
| State per sessionStorage / inject | Žema – reikia dev tools | ModuleView guard: jei `selectedModule > 3` ir MVP → redirect |
| localStorage progresas | Progresas moduliams 4+ nenaudojamas MVP | Filtruojant modulius, UI jų nerodo |

---

## 5. Saugumo check-list + dažniausi bug/skylių taškai

### 5.1 Saugumo check-list (MVP)

| # | Patikrinimas | Kaip atlikti |
|---|--------------|--------------|
| 1 | Module gating veikia | `VITE_MVP_MODE=1 npm run build` → atidaryti → matyti tik 3 modulius |
| 2 | Bypass per state | Dev tools: `window.__REACT_DEVTOOLS__` arba rankinis: ar įmanoma `setSelectedModule(4)`? Guard App/ModuleView turi blokuoti |
| 3 | Glossary nėra M4+ terminų | GlossaryPage filtre – tik Moduliai 1, 2, 3 |
| 4 | Quiz | Apklausa bendra – MVP laikyti. Jei quiz turi module-specific – filtrų |
| 5 | Nuorodos į M4+ | modules.json, turinys – ar nėra nuorodų „Žiūrėk Modulį 4“? CONTENT patikra |
| 6 | Env kintamasis nepraleidžiamas | `VITE_MVP_MODE` tik build-time; production build su juo |

### 5.2 Dažniausi bug/skylių taškai

| Taškas | Problema | Kaip aptikti |
|--------|----------|--------------|
| **DISABLE_MODULE_LOCK** | DEV/localhost – visi atrakinti | MVP build turi būti `NODE_ENV=production`; `localhost` tik development. Production deploy (GitHub Pages) ≠ localhost |
| **handleModuleSelect be validacijos** | Tiesioginis moduleId 4 iš remediation/quiz | Integracinis testas: `handleModuleSelect(4)` kai MVP → nieko neįvyksta arba redirect |
| **modulesLoader cache** | Pirmas load be MVP, antras su MVP | Ensure `VITE_MVP_MODE` tikrinamas kiekviename load; arba clear cache build prieš/deploy |
| **Glossary terms** | Rodomi M4 terminai | Rankinis: Glossary filter → tik 1,2,3. |
| **HomePage totalModules** | `totalModules` iš modulesData – jau filtruoti, tai 3 | Automatiškai, jei modulesLoader filtruoja |

### 5.3 Apsaugos nuo tipinių klaidų

| Klaida | Apsauga |
|--------|--------|
| Pamiršti `VITE_MVP_MODE` production build | CI step: `VITE_MVP_MODE=1 npm run build` – fail build jei nestabilu |
| Moduliai 4+ matomi per klaidą | Double guard: ModulesPage (data) + App (render) |
| Secret / API key bundle | `grep -r "API_KEY\|SECRET\|password" src/` arba Gitleaks CI |

---

## 6. Testavimas ir verifikacija

### 6.1 E2E scenarijai (rankiniai)

| # | Scenarijus | Laukiamas rezultatas |
|---|------------|----------------------|
| 1 | MVP build → Moduliai → matyti 3 kortelės | Tik Moduliai 1, 2, 3 |
| 2 | MVP build → Bandyti URL manipuliuoti | Nėra hash routing – state vienintelis vektorius |
| 3 | MVP build → Baigti 3 modulius → HomePage | CTA „Į apklausą“ arba „Peržiūrėti“ |
| 4 | Full build (be MVP) – development | Visi 6 moduliai (kaip dabar) |

### 6.2 Negatyvūs testai (automatiniai)

```ts
// Pseudo: App.integration.test.tsx
describe('MVP mode', () => {
  it('does not allow selecting module 4 when VITE_MVP_MODE=1', () => {
    vi.stubEnv('VITE_MVP_MODE', '1');
    const { result } = renderHook(() => useApp());
    act(() => result.current.handleModuleSelect(4));
    expect(result.current.selectedModule).not.toBe(4);
    // arba: expect(mockNavigate).toHaveBeenCalledWith('modules');
  });
});
```

### 6.3 CI minimalus (jau yra + papildymai)

| Step | Dabartinis | MVP papildymas |
|------|------------|----------------|
| validate:schema | ✅ | — |
| lint | ✅ | — |
| test:run | ✅ | + MVP negatyvūs testai |
| build | ❌ | + `VITE_MVP_MODE=1 npm run build` (optional, atskiras job) |
| secret scan | ❌ | Optional: `grep` / Gitleaks |

---

## 7. Release procesas (žingsniai)

1. **Implementuoti** MVP-G1, MVP-G2, MVP-G3.
2. **Parašyti** negatyvius testus (MVP-T1).
3. **Paleisti** `VITE_MVP_MODE=1 npm run build` lokaliai.
4. **Atlikti** RELEASE_QA_CHECKLIST.
5. **Deploy** į GitHub Pages (pvz. `main` → `gh-pages` arba Actions).
6. **Publish** nuorodą: `https://ditreneris.github.io/anatomija/` (+ env arba atskiras branch MVP).
7. **CHANGELOG** – MVP release pastaba.

### GitHub Pages MVP variantai

| Variantas | Aprašymas |
|-----------|-----------|
| **A** | Atskiras branch `release/mvp` – build su `VITE_MVP_MODE=1`, deploy iš jo |
| **B** | `main` build su `VITE_MVP_MODE=1` – visada MVP kol neišjungiama |
| **C** | GitHub Actions env: `VITE_MVP_MODE` = secret/repo variable |

**Rekomenduojama:** A arba B – paprastiau. Kai bus pilna versija – perjungti į build be MVP.

---

## 8. Rollback / kill-switch

| Situacija | Veiksmas |
|-----------|----------|
| Aptrūko MVP | Rollback: ankstesnis deploy (GitHub Pages history) arba revert push |
| Reikia pilnų 6 modulių | Build be `VITE_MVP_MODE`; deploy iš `main` |
| Kritinė klaida | `VITE_MVP_MODE=0` (arba pašalinti) → rebuild → redeploy |

---

## 9. Nuorodos ir susiję failai

| Dokumentas | Paskirtis |
|------------|-----------|
| `TODO.md` | Release blockers, prioritetai |
| `docs/development/RELEASE_QA_CHECKLIST.md` | A-M4 QA gate |
| `docs/development/AGENT_ORCHESTRATOR.md` | Agentų parinkimas |
| `docs/development/RELEASE_SESSION_PLAN_90_150min.md` | Sesijos planas |
| `vite.config.ts` | base path, env |

---

**CHANGES:** Šis dokumentas – naujas.  
**CHECKS:** Peržiūrėta pagal TODO.md, modulesLoader, App.tsx, ModulesPage.tsx.  
**RISKS:** MVP režimas priklauso nuo env – būtina deploy konfigūracijoje nustatyti.  
**NEXT:** 1) CODING_AGENT – įgyvendinti MVP-G1, MVP-G2. 2) CODING_AGENT – MVP-G3 (HomePage). 3) CODE_REVIEW_AGENT – negatyvūs testai.
