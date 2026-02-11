# Agentų seka: Modulių aprašymų tokenų riba ir UI/UX maketas

> Mišri užduotis: turinys + JSON + UI. Pagal `AGENT_ORCHESTRATOR.md` – pipeline per CONTENT → DATA → CODING → CODE_REVIEW.

---

## 1. Problema

- Modulių kortelės (Moduliai puslapyje) turi skirtingą aukštį dėl **skirtingo aprašymo ilgio**.
- Moduliai 4, 5, 6 – aprašymai per ilgi (4–5 eilučių), kortelės vizualiai „šokinėja“.
- Reikia: vienodas aukštis / gražus grid, skenuojami trumpi aprašymai.

---

## 2. Agentų seka

| Žingsnis | Agentas | Užduotis |
|----------|---------|----------|
| 1 | **CONTENT_AGENT** | Nustatyti kriterijus: max 120 simbolių (~25 tokenų), 1–2 sakiniai, esmė be detalių |
| 2 | **DATA_AGENT** | Schema `maxLength: 120`, sutrumpinti esamus aprašymus `modules.json` |
| 3 | **CODING_AGENT** (UI_UX) | `ModulesPage` – line-clamp arba min-height kartelėms, vienodas kortelių aukštis |
| 4 | **CODE_REVIEW_AGENT** | Patikra: schema, validacija, build |
| 5 | **QA_AGENT** | Dokumentacija, CHANGELOG |

---

## 3. Kriterijai modulio aprašymams

| Kriterijus | Reikšmė | Priežastis |
|------------|---------|-----------|
| **Max simboliai** | 120 | ~2–3 eilutės standartiniame ekrane, vienodas kortelių aukštis |
| **Struktūra** | 1–2 sakiniai | Esmė, ne detalių sąrašas |
| **Tone** | Neformalus, verslo | Suprantama dalyviui |
| **CTA** | Nėra | CTA – mygtuke „Atidaryti“, ne aprašyme |

Šaltinis: `.cursor/rules/module-description-criteria.mdc`

---

## 4. Failai ir pakeitimai

| Failas | Pakeitimas |
|--------|------------|
| `.cursor/rules/module-description-criteria.mdc` | Nauja taisyklė – CONTENT_AGENT modulio aprašymams |
| `scripts/schemas/modules.schema.json` | `module.description` → `maxLength: 120` |
| `src/data/modules.json` | Sutrumpinti modulių 4, 5, 6 `description` |
| `src/components/ModulesPage.tsx` | `line-clamp-3` arba `min-h-[4.5rem]` aprašymui |

---

## 5. Risky

- Per griežtas limitas gali prarasti svarbią informaciją → CONTENT_AGENT turi išlaikyti semantiką.
- `line-clamp` nukerpa tekstą – geriau sutrumpinti šaltinyje (JSON) nei slėpti su CSS.

---

## 6. Turinio peržiūra (2026-02-11)

Sutrumpinti aprašymai patikrinti su `turinio_pletra.md` ir `docs/turinio_pletra_moduliai_4_5_6.md`:
- **Mod 1:** „6 blokai nuo A iki Z“ – atitinka SOT.
- **Mod 2:** „15 klausimų 5 tipais“ – atitinka (subtitle „15 atsitiktinių“; 5 tipai – MCQ, matching, ordering, true-false, scenario).
- **Mod 3:** „6 scenarijai, šablonų biblioteka“ – atitinka.
- **Mod 4:** „RAG, šaltiniai, giluminis tyrimas, tokenai, manipuliacijos, haliucinacijos“ – atitinka 1.1 lentelę.
- **Mod 5:** „15 min draftas + mini testas, ≥70% prieš Modulį 6“ – atitinka.
- **Mod 6:** „Tyrimo ataskaita arba Custom GPT“ – atitinka.

---

## 7. Šaltiniai

- `docs/development/AGENT_ORCHESTRATOR.md` – mišrių užduočių pipeline
- `docs/development/UI_UX_AGENT.md` – layout, skenuojamumas
