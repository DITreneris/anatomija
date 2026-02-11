# Seka: gili kodo analizė → fiksuojam klaidas → taisom

> **Tikslas:** Standartinė pakartotinai naudojama seka, kai reikia **giliai išanalizuoti kodą**, **užfiksuoti** rastas klaidas/rizikas ir **pataisyti** jas.  
> **Principas (AGENT_ORCHESTRATOR):** Pirmiausia diagnozė → tada įgyvendinimas.

---

## 1. Bendras ciklas

```
[1] GILI ANALIZĖ (CODE_REVIEW_AGENT)
        ↓
[2] FIKSUOJAM KLAIDAS (dokumentas + prioritetai)
        ↓
[3] TAISOM (CODING_AGENT / DATA_AGENT / CONTENT_AGENT pagal problemą)
        ↓
[4] PATIKRA (CODE_REVIEW_AGENT sanity check)
        ↓
[5] SUVEDIMAS (QA_AGENT – changelog, TODO)
```

---

## 2. Žingsnis 1 – Gili kodo analizė (CODE_REVIEW_AGENT)

**Kas daroma:**

- Paleisti **build, testus, lint:** `npm run build`, `npm run test:run`, `npm run lint`.
- Peržiūrėti **kritines vietas** pagal kontekstą (pvz. `SlideContent.tsx`, `modulesLoader.ts`, `progress.ts`, `ModuleView.tsx`, `QuizPage.tsx`, route-level loading).
- Patikrinti **SOT atitiktį:** turinys ↔ `modules.json` ↔ UI komponentai; tipai `src/types/modules.ts`.
- Išskirti **rizikas ir klaidas** su severity: **P1** (kritinė), **P2** (vidutinė), **P3** (žema).

**Išvestis:** Diagnozės ataskaita (lentelė: vieta, problema, severity) ir rekomenduota agentų seka tolesniam darbui.

**Nuorodos:** `AGENT_ORCHESTRATOR.md` → CODE_REVIEW_AGENT; pavyzdys – `CODE_REVIEW_GILI_ANALIZE_AGENTU_SEKA.md`.

---

## 3. Žingsnis 2 – Fiksuojam klaidas

**Kur fiksuoti:**

| Kas | Kur |
|-----|-----|
| **Bendra būklė ir prioritetai** | `CODE_REVIEW_ANALYSIS.md` – skyriai „Prioritetuotos problemos“, „Rizikos“, „Rekomenduoti žingsniai“. |
| **Konkreti analizės sesija** | Atskiras doc, pvz. `docs/development/CODE_REVIEW_GILI_ANALIZE_AGENTU_SEKA.md` arba naujas `CODE_REVIEW_YYYY-MM-DD_<tema>.md` – pilna diagnozė, lentelė, įgyvendinimo planas. |
| **Vartotojo / testų klaidos** | `docs/development/TEST_REPORT.md` – QA_AGENT priima, fiksuoja, įrašo sprendimus į `TODO.md`. |

**Privaloma:**

- Kiekvienai problemai: **failas (arba sritis), aprašymas, severity (P1/P2/P3), statusas** (nauja / planuojama / sutvarkyta).
- Rekomenduotas **agentas pataisymui:** CODING_AGENT / DATA_AGENT / CONTENT_AGENT / UI_UX_AGENT / SCHEME_AGENT.

---

## 4. Žingsnis 3 – Taisom

**Kas daro:**

- **CODING_AGENT** – komponentai, hooks, tipai, null guards, refaktoras, lint klaidos.
- **DATA_AGENT** – `modules.json`, `promptLibrary.json`, `glossary.json`, struktūra, validacija.
- **CONTENT_AGENT** – tekstai, CTA, terminai (SOT: `turinio_pletra.md`, `docs/turinio_pletra_moduliai_4_5_6.md`).
- **UI_UX_AGENT** – layout, a11y, vizualinė hierarchija (pagal `UI_UX_AGENT.md`).
- **SCHEME_AGENT** – diagramos, rodyklės, proporcijos (pagal `SCHEME_AGENT.md`).

**Taisyklės:**

- Keisti **minimaliai** (maži diffai); didesnis perstatymas – pirmiausia **planas (3 žingsniai)**.
- Po pakeitimų – **build, testai, lint** vėl paleisti.

---

## 5. Žingsnis 4 – Patikra (CODE_REVIEW_AGENT)

- Trumpa **sanity check:** ar pakeitimai atitinka diagnozę, ar nėra regresijų.
- Jei reikia – papildomos pastabos (1–3) pataisymų autorius.

---

## 6. Žingsnis 5 – Suvedimas (QA_AGENT)

- **CHANGELOG.md** – įrašas apie pataisymus (kas pakeista, data).
- **TODO.md** – atnaujinti statusus (sutvarkyta / perkelta), pridėti „NEXT“ jei liko darbų.
- **CODE_REVIEW_ANALYSIS.md** – atnaujinti problemų lentelę (statusas → sutvarkyta, data).

---

## 7. Agentų seka (santrauka)

| Etapas | Agentas | Veikla |
|--------|---------|--------|
| 1 | CODE_REVIEW_AGENT | Gili analizė, diagnozė, rizikų lentelė |
| 2 | (tas patis / QA) | Fiksavimas: CODE_REVIEW_ANALYSIS.md + konkretus doc arba TEST_REPORT |
| 3 | CODING_AGENT / DATA_AGENT / … | Taisymas pagal prioritetus |
| 4 | CODE_REVIEW_AGENT | Sanity check po pakeitimų |
| 5 | QA_AGENT | CHANGELOG, TODO, CODE_REVIEW_ANALYSIS atnaujinas |

---

## 8. Privalomi kokybės vartai (kiekviename etape)

Kiekvienas agentas atsakymo pabaigoje **privalo** pateikti:

```
CHANGES:
- failas → ką pakeitei (1–3 eil.)

CHECKS:
- ką patikrinai (build/test/lint) arba „negalėjau, nes …“

RISKS:
- 1–3 realios rizikos (konkretu)

NEXT:
- 1–3 sekančios užduotys (konkretu, su failais)
```

---

## 9. Nuorodos

- **Orkestratorius:** `docs/development/AGENT_ORCHESTRATOR.md`
- **Bendra code review būklė:** `CODE_REVIEW_ANALYSIS.md`
- **Pavyzdys gilios analizės + įgyvendinimo:** `docs/development/CODE_REVIEW_GILI_ANALIZE_AGENTU_SEKA.md`
- **Vartotojo testų klaidos:** `docs/development/TEST_REPORT.md`, `TODO.md`
