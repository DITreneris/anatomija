# Release QA Checklist (A-M4)

> **Paskirtis:** 5 min sanity prieš release. Kritinės regresijos aptikimas.
> **Kada:** Prieš kiekvieną deploy / versijavimą.
> **Agentas:** QA_AGENT (dokumentas), atliekama ranka.

---

## 1. Broken links (~2 min)

- [ ] **Internos nuorodos:** Skip link `#main-content` veikia (Home → klaviatūra Tab → Enter).
- [ ] **Išorinės nuorodos (1–2 spot check):** GitHub (App.tsx footer), bent viena ContentSlides nuoroda (įrankiai, šaltiniai) – atsidaro naujame lange, nėra 404.
- [ ] **AI detektoriai / Prompt biblioteka:** Jei naudojami – nuorodos atsidaro.

---

## 2. Mobile sanity (1 skaidrė / 1 kelionė, ~1 min)

- [ ] **Viewport:** DevTools → Mobile (375×667 arba iPhone SE) – puslapis nesusilūžęs.
- [ ] **Modulio skaidrė:** Pirmas modulis → 1 skaidrė – tekstas skaitomas, mygtukai paspaudžiami, navigacija (← / →) veikia.
- [ ] **Moduliai 2 ir 3 (rekomenduojama):** Modulis 2 – bent test-intro arba test-results (radaras, kategorijų mygtukai); Modulis 3 – practice-intro arba practice-scenario (tab’ai, praktinė užduotis). Žr. `docs/development/MOBILE_UI_AUDIT_MOD2_MOD3.md`.

---

## 3. Dark mode sanity (1 kelionė, ~1 min)

- [ ] **Perjungimas:** Tema (light ↔ dark) perjungiama – išsaugoma (refresh išlieka).
- [ ] **Skaidrė:** Bent viena skaidrė (pvz. Modulio 1 ar 4) – tekstas skaitomas, kontrastas pakankamas, nėra baltų „dėmių“.

---

## 4. A11y smoke (~1 min)

- [ ] **Skip link:** Tab nuo puslapio pradžios → matomas „Praleisti į turinį“ (arba panašus) → Enter – fokusas pereina į main turinį.
- [ ] **Klaviatūra:** Skaidrių navigacija veikia rodyklių klavišais (← →).

---

## 5. Lietuviškų raidžių patikrinimas (~1 min)

> **Įtraukta:** 2026-02-11. Tikrinti, kad vartotojui matomieji tekstai naudoja teisingas lietuviškas raides.

- [ ] **Prioritetinės vietos:** HomePage, Testo Rezultatai skaidrė, QuizPage, modulių skaidrės, žodynėlis.
- [ ] **Dažnos klaidos:** `perziureti` → `peržiūrėti`, `Moduli` → `Modulį`, `Ziniu` → `Žinių`, `zemelapis` → `žemėlapis`, `Skaidre` → `Skaidrė`, `Ka ismokote` → `Ką išmokote`, `ypac` → `ypač`, `bloku` → `blokų`, `role` → `rolė`, `struktura` → `struktūra`, `parametru` → `parametrų`, `reiskia` → `reiškia`.
- [ ] **Greitas patikrinimas:** Peržiūrėti bent 1 skaidrę iš kiekvieno modulio + Testo Rezultatus + Pagrindinį – ar nėra „išlindusių“ ASCII raidžių vietoj ž, ė, ą, ų, ū, š, č, į.

---

## 6. MVP release (jei deploy su VITE_MVP_MODE=1)

- [ ] **Tik 3 moduliai:** `VITE_MVP_MODE=1 npm run build` → atidaryti → Moduliai → matyti tik 3 kortelės.
- [ ] **Glossary:** Žodynėlio filtre – tik Moduliai 1, 2, 3 (terminai su moduleId 4+ paslėpti).
- [ ] **HomePage CTA:** Baigus 3 modulius – „Į apklausą“ (ne „Tęsti mokymą“). Paspaudus – navigacija į Apklausą.

---

## 7. Turinio / UX kokybė (~3 min, rekomenduojama)

> **Šaltinis:** [docs/development/context-engineering/eval_rubric.md](context-engineering/eval_rubric.md) – dimensijos (CTA, tonas, lietuviškos, nuorodos, modulių/skaidrių nuoseklumas).

- [ ] **Vienas modulis per release pagal rubric:** Prieš release atlikti vieną rankinį perbėgimą pagal eval_rubric (bent vienas modulis + HomePage arba vienas CTA kelias). Rezultatą įrašyti į TEST_REPORT arba changelog (pvz. „Modulis X – visos dimensijos ≥2, 4/5 = 3“).

---

## Papildomai (jei laiko)

- `npm run build` – sėkmingas.
- `npm run lint` – be klaidų.
- **MVP build:** `VITE_MVP_MODE=1 npm run build` – sėkmingas.

---

---

## Statusas (2026-02-12)

| Kas | Statusas |
|-----|----------|
| **A-M4** | ✅ Įgyvendinta – 6 skyriai (links, mobile, dark, a11y, lietuvių raidės, MVP). |
| **M4 lietuviškos (4.7, 67.5)** | ✅ 2026-02-12 – skaidrės 70 (Modulio 4 santrauka) ir 67.5 (Saugumas) peržiūrėtos §5; klaidų nerasta. |
| **M4 action-intro (id 38)** | ✅ 2026-02-12 – nauja pirmoji skaidrė (hero, CTA, outcomes, aboutText, promptai) peržiūrėta §5; lietuviškos raidės teisingos. |
| **HomePage Hero CTA** | ✅ Baigus modulius – „Į apklausą“; kai apklausa baigta – „Peržiūrėti modulius“. |
| **ModulesPage: CTA po completion** | ✅ Mygtukas „Į apklausą“ pridėtas (2026-02-11). |
| **HomePage P0 (quizCompleted)** | ✅ Įgyvendinta – CTA „Peržiūrėti modulius“ kai viskas baigta. |
| **HomePage P1 (progresas virš CTA)** | ✅ Progresas perkeltas virš CTA (2026-02-11). |
| **Mobile UI Moduliai 2 ir 3** | ✅ 2026-02-11 – touch targets, responsive padding, MatchingQuestion overflow; skyrius 2 papildytas rekomendacija Moduliams 2 ir 3. Žr. MOBILE_UI_AUDIT_MOD2_MOD3.md. |

---

## 6. Cache: kai pakeitimai `modules.json` nesimato

Duomenys įkeliami per `import('./modules.json')` ir gali būti cache'inti (Vite + naršyklė). Dev režime Vite naudoja pluginą `no-cache-modules-json`, kad naršyklė nekešintų šio failo.

- [ ] **Dev režimas:** Sustabdyk `npm run dev` (Ctrl+C), vėl paleisk `npm run dev`. Atidaryk puslapį **naujame tabe** arba **hard refresh** (Ctrl+Shift+R arba Ctrl+F5). Jei vis dar sena versija – Chrome: DevTools → Application → Storage → „Clear site data“ (localhost:3000).
- [ ] **Production build:** Vykdyk `npm run build` ir atidaryk `dist/` arba peržiūrėk su `npm run preview` – tada refresh.

**Nuorodos:** TODO.md (A-M4), RELEASE_SESSION_PLAN_90_150min.md, RELEASE_PLAN_MVP_MODULIAI_1_3.md, MOBILE_UI_AUDIT_MOD2_MOD3.md, **bendri atsiliepimai** – docs/VARTOTOJU_ATSILIEPIMAI_BENDRAS.md.
