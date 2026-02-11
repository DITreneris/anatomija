# Agentų seka: System prompt, Proceso prompt, Struktūruotas procesas – tobulinimas

> **Paskirtis:** Nuosekli agentų seka skaidrių **54.5 (System prompt vs Master prompt)**, **55 (Proceso prompt ir workflow sudarymas)** ir **43 (Struktūruotas procesas)** turinio tobulinimui pagal nustatytus standartus, **nekeičiant esmės**.

---

## 1. Užduotis (TASK)

- **Analizuoti** tris skaidres (turinys, struktūra, nuoseklumas).
- **Tobulinti** pagal geriausius projekto standartus: TL;DR → Do now → Copy–paste prompt → Quality check → Optional (collapsible).
- **Nekeisti esmės**: System/Master takoskyra, proceso 3 žingsniai, workflow schema ir pavyzdžiai lieka semantiškai tie patys.

**Kontekstas:**

| Parametras | Reikšmė |
|------------|--------|
| **Skaidrės** | 54.5 System prompt vs Master prompt, 55 Proceso prompt, 43 Struktūruotas procesas |
| **Duomenų šaltinis** | `src/data/modules.json` |
| **Turinio SOT** | `docs/turinio_pletra_moduliai_4_5_6.md` (4.1-system-master, 4.1b2, 4.1b) |
| **Standartai** | DI (ne AI), lietuvių kalba, vienoda CTA/Quality check formuluotė, collapsible „Nori suprasti detaliau?“ |

---

## 2. Įvesties šaltiniai (SOURCE OF TRUTH)

| Šaltinis | Paskirtis |
|----------|-----------|
| **`docs/turinio_pletra_moduliai_4_5_6.md`** | Turinio SOT: System vs Master, Proceso prompt, Struktūruotas procesas (4.1b – 8 žingsniai, DI workflow 3 etapai). |
| **`docs/CONTENT_MODULIU_ATPAZINIMAS.md`** | 4.1–4.7 = tik Modulio 4; vienoda terminologija. |
| **`src/data/modules.json`** | Faktinis skaidrių turinys (id 54.5, 55, 43). |

---

## 3. Agentų seka

Užduotis **mišri**: turinys (tekstai, nuoseklumas) + duomenys (JSON). Pipeline pagal orkestratorių:

| Žingsnis | Agentas | Ką daro |
|----------|---------|---------|
| **1** | **CONTENT_AGENT** | Analizuoja tris skaidres pagal SOT ir standartus. Pateikia **konkretų tobulinimų sąrašą** (kas pakeisti, citatos): TL;DR aiškumas, Do now CTA vienodumas, Quality check formuluotė („Jei bent 2 „ne““), optional antraštė („Nori suprasti detaliau?“), rašymo klaidos (pvz. „Pradinis užklausas“ → „Pradinis užklausa“), esmės nekeičia. |
| **2** | **DATA_AGENT** | Taiko CONTENT_AGENT pasiūlymus į `modules.json`: pakeičia tik nurodytus tekstus/blokus, išlaiko JSON validumą. |
| **3** | **CODE_REVIEW_AGENT** (rekomenduojama) | Patikrina: ar JSON validus, ar turinys atitinka SOT, ar nėra prieštaravimų tarp skaidrių. |
| **4** | **QA_AGENT** (optional) | Įrašo pakeitimus į CHANGELOG; atnaujina šį dokumentą, jei seka keičiama. |

**Trumpas workflow:**  
SOT + modules.json → **CONTENT_AGENT** (analizė + tobulinimų sąrašas) → **DATA_AGENT** (pakeitimai JSON) → **CODE_REVIEW_AGENT** (patikra) → **QA_AGENT** (doc/changelog).

---

## 4. Turinio tobulinimų standartai (CONTENT_AGENT laikosi)

- **TL;DR:** 1–2 sakiniai, be „procesų“/„analizės“ perteklius; **DI**, ne „AI“.
- **Do now:** Aiškus veiksmas („Paimk…“, „Nukopijuok…“); vienas CTA – „🔘 Kopijuoti promptą (žemiau)“; „Nedaryk idealaus – įklijuok tai, ką turi dabar“.
- **Copy–paste prompt:** Vienas blokas (ROLE/TASK/CONTEXT/RULES/OUTPUT); be teorijos skyriaus.
- **Quality check:** 4 klausimai su paryškinimais; **„Jei bent 2 „ne“ → grįžk prie…“** (vienoda formuluotė visose trijose skaidrėse).
- **Optional:** Antraštė **„🔽 Nori suprasti detaliau? (optional)“**; `collapsible: true`; teorija/palyginimai/lentelės – nekeičiant esmės.
- **Terminologija:** DI visur; lietuvių kalba; „output“ leidžiama su kontekstu (output formatas).

---

## 5. Nuorodos

- Orkestratorius: `docs/development/AGENT_ORCHESTRATOR.md`
- Modulio 4 skaidrių eilė: `docs/MODULIO_4_SKAIDRIU_EILES.md`
- Turinio SOT Moduliams 4–6: `docs/turinio_pletra_moduliai_4_5_6.md`
