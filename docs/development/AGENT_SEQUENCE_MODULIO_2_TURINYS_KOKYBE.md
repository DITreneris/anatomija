# Modulio 2: Agentų seka ir darbų planas (turinis + kokybė)

> **Tikslas:** Išanalizuoti 2 mokymų modulį pagal geriausias praktikas; užtikrinti lietuviškas raides visur; įgyvendinti TODO.md likusius darbus palaipsniui (tokenų limitas).

---

## 1. Kontekstas

| Šaltinis | Turinys |
|----------|---------|
| **Modulis 2** | „Žinių Patikrinimas“ (TESTAS) – 15 klausimų, 5 tipai (MCQ, True/False, Matching, Ordering, Scenario). SOT: `turinio_pletra.md` § Modulis 2. |
| **Duomenys** | `src/data/modules.json` (modulio 2 skaidrės, test-intro, test-section, testQuestions), `src/data/questionPool.ts` (question bank). |
| **TODO.md** | Modulio 2 Fazė 2 (P2): F2-1 pool, F2-2 radar, F2-3 remediation deep links, F2-4 score animation. Fazė 3 (P3): F3-1–F3-5. |

**Problema:** Modulio 2 turinyje (ypač `questionPool.ts`) ne visur naudojamos lietuviškos raidės (ą, č, ę, ė, į, š, ų, ū, ž). Kokybės kontrolė – CONTENT_AGENT pagal SOT ir kalbos gaires.

---

## 2. Agentų seka (prioritetas)

| Etapas | Agentas | Užduotis | Failai |
|--------|---------|----------|--------|
| 1 | **CONTENT_AGENT** | Lietuviškų raidžių ir rašybos patikra bei taisymas | `questionPool.ts`, turinio SOT atitiktis |
| 2 | **DATA_AGENT** | Sinchronas: questionPool ↔ SOT; modules.json Modulio 2 teksto patikra | `questionPool.ts`, `modules.json` |
| 3 | **CODING_AGENT** | Jei reikia – render, tipai, quiz logika (F2-2, F2-3, F2-4) | `QuizPage.tsx`, `QuizResultsView.tsx`, question components |
| 4 | **CODE_REVIEW_AGENT** | Patikra: ar visur LT raidės, ar build/test/lint OK | — |
| 5 | **QA_AGENT** | TODO.md, CHANGELOG, dokumentacijos atnaujinimas | `TODO.md`, `CHANGELOG.md` |

---

## 3. Darbų planas (prioritetuota)

### Fazė A – Kokybė (dabar)

| # | Užduotis | Agentas | Aprašymas |
|---|----------|---------|-----------|
| A1 | **Lietuviškos raidės `questionPool.ts`** | CONTENT | Visi klausimai, atsakymai, paaiškinimai, užuominos – atkurti ąčęėįšųūž. |
| A2 | **Lietuviškos raidės / rašyba `modules.json` Modulio 2** | CONTENT/DATA | testQuestions ir test-intro tekste – patikrinti ir taisyti (pvz. „kodel“ → „kodėl“, „Isversk“ → „Išversk“, „sudetingesniu“ → „sudėtingesnio“). |
| A3 | **Kokybės kontrolės checklist (optional)** | QA | Trumpas punktas .cursor/rules arba docs: „Lietuviškos raidės būtinos visame vartotojui matomame turinyje“. |

### Fazė B – TODO.md Modulio 2 F2 (vėliau)

| # | Užduotis | Šaltinis | Pastaba |
|---|----------|----------|---------|
| B1 | F2-1 Klausimų pool | TODO § F2-1 | 30–40 klausimų, atsitiktinis 15 parinkimas – jau yra questionPool; patikrinti ar logika atitinka. |
| B2 | F2-2 Radar/spider chart rezultatuose | TODO § F2-2 | Vizualus per-bloko žemėlapis (8 ašys). |
| B3 | F2-3 Remediation deep links | TODO § F2-3 | „Peržiūrėti skaidrę X“ → onGoToModule(slideId). |
| B4 | F2-4 Score animation | TODO § F2-4 | Count-up 0 → X% (1.5s). |

### Fazė C – TODO.md Modulio 2 F3 (P3, backlog)

| # | Užduotis | Pastaba |
|---|----------|---------|
| C1–C5 | F3-1 Confidence indicator, F3-2 Spaced repetition, F3-3 Timed challenge, F3-4 Adaptive difficulty, F3-5 Peer comparison | Žemas prioritetas; po F2. |

---

## 4. Kokybės kontrolė (CONTENT_AGENT)

- **Kalba:** lietuvių; visur vartoti **DI**, ne „AI“ (išskyrus citatas).
- **Rašyba:** būtinos lietuviškos raidės: ą, č, ę, ė, į, š, ų, ū, ž. Nenaudoti ASCII pakaitalų („a“ vietoj „ą“, „e“ vietoj „ė“, „z“ vietoj „ž“ ir t. t.).
- **SOT:** Modulio 2 struktūra ir terminai – pagal `turinio_pletra.md` (Testo struktūra, Ko tikėtis teste, Klausimų pasiskirstymas, Rezultatų ekrano turinys).
- **Terminologija:** žr. `turinio_pletra.md` § Kalbos ir Stiliaus Gairės (promptas, įvestis, išvestis, mąstyti).

---

## 5. Įgyvendinimo eilė (tokenų limitas)

1. **Ši sesija:** Fazė A1 (questionPool.ts – visi lietuviški pataisymai) + A2 (modules.json Modulio 2 fragmentai).
2. **Sekanti:** Build/lint patikra; CHANGES/NEXT įrašymas; optional A3.
3. **Vėliau:** F2-1–F2-4 pagal TODO.md (atskiros sesijos).

---

---

## 6. Įgyvendinimo ataskaita (2026-02-10)

**Fazė A1–A2 atlikta (CONTENT + DATA):**

- **questionPool.ts:** Visi klausimai, atsakymai, paaiškinimai ir užuominos – atkurtos lietuviškos raidės (ą, č, ę, ė, į, š, ų, ū, ž). Pataisyti: pradėti, promptą, rolė, rezultatų, duomenų, parametrų, kontekstą, apibrėžia, skaičiai, žodžių, užsakymų, mąstyti, žingsniais, haliucinacijų, Nežinau, Tačiau, kūrybiškesnio, sąrašą, lietuviškai, struktūra, peržiūra, pavyzdžiai, reiškia, užduotį, grandinė, Jūs, Rašote, ketvirtinę, pardavimų, lentelėje, parašė, straipsnį, šaltinių, anglų, reikėjo, Pridėti, žurnalistas, Pridėjus, iš, šių, rekomendacijų, mažiausiai, mažiau, pridėjus, įrankius, problemines sritis ir kt. Failo viršutinio komentaro lietuviškos raidės atkurtos.
- **modules.json (Modulio 2):** testQuestions hint/explanation – „kodel rasau konteksta“ → „kodėl rašau kontekstą“; „sudetingesniu mastymo“ → „sudėtingesnio mąstymo“; „Isversk si sakini“ → „Išversk šį sakinį“; „mastymo sekos“ → „mąstymo sekos“.

**CHANGES:**
- `src/data/questionPool.ts` – lietuviškos raidės visuose 35+ klausimuose (question, options, explanation, hint, scenarioContext).
- `src/data/modules.json` – 2 vietos Modulio 2 (q1 hint, q5 explanation/hint).
- `docs/development/AGENT_SEQUENCE_MODULIO_2_TURINYS_KOKYBE.md` – naujas dokumentas (agentų seka, darbų planas, kokybės kontrolė).
- `TODO.md` – nuoroda į AGENT_SEQUENCE_MODULIO_2_TURINYS_KOKYBE.md.

**CHECKS:**
- Lint: `questionPool.ts` – 0 klaidų. Build/lint buvo paleisti (gali užtrukti didesniam projektui).

**RISKS:**
- Jei kur nors naudojami seni eilučių hash ar lyginamieji stringai (testai, i18n), reikėtų patikrinti, ar atitinka naujus tekstus.
- Modulio 2 test-section skaidrėse `modules.json` dar yra ~10 testQuestions įdėtų tiesiogiai – jie jau turėjo teisingas raides; pataisytos tik 2 vietos.

**NEXT:**
1. Paleisti `npm run build` ir `npm run test:run` lokaliai – įsitikinti, kad viskas veikia.
2. F2-1–F2-4 (TODO § Modulio 2 Fazė 2): question pool logika, radar chart, remediation deep links, score animation – atskira sesija.
3. Optional: pridėti į .cursor/rules arba docs trumpą kokybės punktą „Lietuviškos raidės būtinos visame vartotojui matomame turinyje“.

---

*Dokumentas sukurtas pagal agent-orchestrator.mdc ir TODO.md. Atnaujinta: 2026-02-10.*
