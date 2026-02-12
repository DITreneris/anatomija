# Gold standard: Moduliai 4–6 – spragų analizė

> **Paskirtis:** Lyginame modulius 4, 5, 6 su gold standardu (GOLD_STANDARD_MODULIAI_1_2_3.md) ir turinio SOT (docs/turinio_pletra_moduliai_4_5_6.md). Trūkumų sąrašas – pagrindas CONTENT_AGENT → DATA_AGENT → CODING_AGENT darbui.
> **Versija:** 1.0.0  
> **Data:** 2026-02-11  

---

## 1. Etalonas (gold standard) – ką tikriname

| Sritis | Gold (Moduliai 1–3) | Pritaikymas 4–6 |
|--------|----------------------|------------------|
| **Pedagogika** | Learn → Test → Practice; Bloom | 4 (learn) → 5 (test) → 6 (practice) – **atitinka** |
| **Santraukos skaidrė** | 5 blokų modelis (Celebration Hero, Žinių kortelės, Refleksijos promptas, Kitas žingsnis CTA, Motyvacinis footer); `type: "summary"` | Modulio 4: **4.7 – content-block, ne summary** |
| **Testas** | test-intro → test-section → test-results; 15 klausimų; kategorijos; remediation (radar); PASS 70% | Modulis 5: sprintas + mini testas 3–5 kl.; **savitas formatas** – sutarta SOT |
| **Praktika** | practice-intro → practice-scenario(6) → practice-summary; žingsniai, hint, partial solution | Modulis 6: vienas projektas; **practice-summary arba uždarymo CTA** – tikrinti |
| **Progresas** | completedModules, completedTasks, moduleTestScores; atrakinimas N po (N-1) | 4→5→6 atrakinimas – **tikrinti** progress.ts / UI |
| **CTA** | Konkretūs: „Pereikite prie Modulio 2“, „Pradėti Modulį 3“, „Pakartoti testą“ | 4.7 → Modulis 5; 5 results → Modulis 6 – **tekstai SOT** |

---

## 2. Modulio 4 – spragos

| # | Kriterijus (gold) | Dabartinė būklė | Spraga / veiksmas |
|---|-------------------|-----------------|-------------------|
| 1 | **Santraukos skaidrė (4.7)** – 5 blokų modelis, `type: "summary"` | Skaidrė id 70: `type: "content-block"`, turinys – „Modulio 4 santrauka“, 3 klausimai sau, apžvalga | **SPRAGA:** Nėra Celebration Hero, Žinių kortelių grid, Refleksijos prompto (Meta+Input+Output), Kitas žingsnis CTA („Pereikite prie Modulio 5“), Motyvacinis footer. CONTENT_AGENT + DATA_AGENT: pervesti į `summary` su `introHeading`, `introBody`, `stats`, `sections`, `reflectionPrompt`, `reflectionTitle`, `tagline`, CTA į Modulį 5. |
| 2 | CTA po santraukos | SOT: „Kitas žingsnis – Modulis 5: 15 min prezentacijos sprintas + mini suvokimo testas“ | Įtraukti į summary „Kitas žingsnis“ bloką (emerald, ArrowRight). |
| 3 | Skaidrių grupavimas (fazės) | ModuleView `typeToPhase` – ar Modulio 4 fazės apibrėžtos? | Maža rizika; jei reikia – UI_UX_AGENT. |

**Prioritetas Moduliui 4:** 1–2 (santrauka į gold summary tipą ir CTA).

---

## 3. Modulio 5 – spragos

| # | Kriterijus (gold) | Dabartinė būklė | Spraga / veiksmas |
|---|-------------------|-----------------|-------------------|
| 1 | Testas: intro → section → results | test-intro (512) → test-section (513, 3 kl.) → test-results (514) | **Atitinka.** SOT sąmoningai: 3–5 kl. (mini testas po sprinto). |
| 2 | PASS 70%, žinutės <70% / ≥70%, CTA | TestResultsSlide – moduleId === 5: tekstai ir mygtukai | **Tikrinti:** ar rezultatų ekrane rodomi teisingi CTA („Pakartoti sprintą“ / „Pradėti Modulį 6“) ir slenksčio 70% naudojimas. |
| 3 | Įvado tekstas (test-intro) | SOT §3.1: „Mini testas po sprinto“, „15 min sprintas“, slenksčiai, CTA | DATA_AGENT: ar modules.json test-intro turinys atitinka SOT (jei content-driven). |
| 4 | Remediacija (radar, deep link) | Modulis 2 turi radar + deep link į Modulio 1 skaidres | Modulis 5 – mini testas; SOT nereikalauja pilnos remediacijos. **OK.** |

**Prioritetas Moduliui 5:** 2–3 (patikrinti rezultatų ekrano tekstus ir 70% logiką).

---

## 4. Modulio 6 – spragos

| # | Kriterijus (gold) | Dabartinė būklė | Spraga / veiksmas |
|---|-------------------|-----------------|-------------------|
| 1 | practice-intro → scenario(s) → **practice-summary** | practice-intro (60) → optional Custom GPT schema → optional Custom GPT scenario → Tyrimo ataskaita scenario (61) → COMBO (62) → SUPER PROMPTAI (63) → Duomenų tvarkymas (64) | **SPRAGA:** Nėra skaidrės `type: "practice-summary"`. Paskutinės – content-block (Duomenų tvarkymas, refleksija SOT). Gold: praktikos modulis turi practice-summary su CTA (į modulių sąrašą arba toliau). |
| 2 | CTA po praktikos | Modulio 3: „Į modulių sąrašą“ / „Toliau“ | Moduliui 6: aiškus uždarymo CTA („Į modulių sąrašą“ arba sertifikatas, jei bus). CONTENT_AGENT: apibrėžti; DATA_AGENT: jei reikia – practice-summary skaidrė arba paskutinės skaidrės CTA blokas. |
| 3 | Scenarijus: žingsniai, hint, partial solution | Tyrimo ataskaita + Custom GPT – scenario su context, data, constraints, expectedFormat | SOT: žingsniai (6), tarpiniai sprendimai, pilnas pavyzdys. **Tikrinti:** ar PracticalTask rodo instructions.steps, hint, partialSolution. |

**Prioritetas Moduliui 6:** 1–2 (practice-summary arba vienoda CTA/uždarymas; žingsniai/hint – implementacija).

---

## 5. Bendros sritis

| Sritis | Būklė | Veiksmas |
|--------|--------|----------|
| **Progresas / atrakinimas** | Modulis 4 atrakintas po 3; 5 po 4; 6 po 5 (optional ≥70% Modulio 5) | Patikrinti `progress.ts`, `ModulesPage.tsx`, MVP gating. |
| **Lietuviškos raides** | RELEASE_QA_CHECKLIST §5 | Prieš release – peržiūrėti vartotojo matomus tekstus (ypač 4.7, Modulio 5/6 CTA). |
| **Terminologija** | DI, ne AI; lietuviški terminai | SOT laikomasi – QA_AGENT paskutinėje peržiūroje. |

---

## 6. Agentų seka (rekomenduojama)

1. **CONTENT_AGENT** – Modulio 4 santrauka (4.7): tekstai 5 blokų modeliui (introHeading, introBody, stats, sections, reflectionPrompt, tagline, CTA į Modulį 5). Modulio 6: uždarymo CTA tekstas (practice-summary arba paskutinė skaidrė).
2. **DATA_AGENT** – modules.json: 4.7 skaidrę perkelti iš content-block į summary, įrašyti content pagal content-agent-summary-slide.mdc; Modulio 5 test-intro/test-results content jei content-driven; Modulio 6 – pridėti practice-summary skaidrę jei priimta.
3. **CODING_AGENT** – jei reikia: SlideContent/ModuleView atpažintų Modulio 4 summary; Modulio 6 practice-summary renderinimas (kaip Modulio 3).
4. **CODE_REVIEW_AGENT** – patikra: build, lint, regresijos.
5. **QA_AGENT** – CHANGELOG, RELEASE_QA_CHECKLIST, lietuviškos raidos.

---

## 7. Failai ir nuorodos

| Sritis | Failas |
|--------|--------|
| Gold standard (1–3) | docs/development/GOLD_STANDARD_MODULIAI_1_2_3.md |
| Turinio SOT (4–6) | docs/turinio_pletra_moduliai_4_5_6.md |
| Santraukos skaidrės SOT | .cursor/rules/content-agent-summary-slide.mdc |
| Duomenys | src/data/modules.json |
| Progresas | src/utils/progress.ts |
| Routing | src/components/SlideContent.tsx, ModuleView.tsx |

---

**Santrauka:** Pagrindinės spragos – (1) Modulio 4 santrauka 4.7 kaip **summary** su 5 blokais; (2) Modulio 5 rezultatų/CTA tikrinimas; (3) Modulio 6 **practice-summary** arba aiškus uždarymo CTA. Darbą pradėti nuo CONTENT_AGENT (reikalavimai, tekstai), tada DATA_AGENT (JSON), CODING_AGENT (render).
