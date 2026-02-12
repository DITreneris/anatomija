# Agentų seka: Moduliai 4–6 atitikimas gold standardui

> **Nuoroda:** GOLD_STANDARD_MODULIAI_4_5_6_GAP_ANALIZE.md (spragos), GOLD_STANDARD_MODULIAI_1_2_3.md (etalonas), turinio_pletra_moduliai_4_5_6.md (SOT).

---

## 1. Pipeline (mišri užduotis)

Turinys + JSON + UI → privaloma seka:

1. **CONTENT_AGENT** – reikalavimai, tekstai 5 blokų summary (4.7), CTA Moduliams 5 ir 6.
2. **DATA_AGENT** – modules.json: summary struktūra, test-results/content jei reikia.
3. **CODING_AGENT** – renderinimas (summary jau palaikomas; tikrinti moduleId 4).
4. **CODE_REVIEW_AGENT** – build, lint, regresijos.
5. **QA_AGENT** – dokumentacija, lietuviškos raidos.

---

## 2. Užduotys pagal prioritetą

| Eil. | Užduotis | Agentas | Failai |
|------|-----------|----------|--------|
| 1 | Modulio 4 santrauka (4.7) → `type: "summary"` su 5 blokais | CONTENT → DATA | modules.json, .cursor/rules/content-agent-summary-slide.mdc |
| 2 | Modulio 5: rezultatų ekrano CTA ir 70% slenksčio patikra | DATA / CODING | modules.json, TestPracticeSlides.tsx (moduleId === 5) |
| 3 | Modulio 6: practice-summary arba uždarymo CTA | CONTENT → DATA | modules.json, turinio_pletra_moduliai_4_5_6.md |
| 4 | Progresas / atrakinimas 4→5→6 | CODING / REVIEW | progress.ts, ModulesPage.tsx |
| 5 | Lietuviškos raidos ir release checklist | QA | RELEASE_QA_CHECKLIST.md, CHANGELOG.md |

---

## 3. Šios sesijos fokusas

- **Atlikta:** Spragų analizė (GOLD_STANDARD_MODULIAI_4_5_6_GAP_ANALIZE.md), agentų seka (šis failas).
- **Toliau:** Užduotis 1 – Modulio 4 skaidrė 70 (4.7) konvertuoti į summary su 5 blokais (Celebration Hero, Žinių kortelės, Refleksijos promptas, Kitas žingsnis CTA, Motyvacinis footer).
