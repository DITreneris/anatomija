# Planas: 3 skaidrės Modulio 4 – veiksmo modelis (Trumpai → Daryk dabar → Kopijuojamas promptas → Patikra)

> **Tikslas:** Įtraukti dar 3 Modulio 4 skaidres į „veiksmo skaidrių“ praktiką (aiškumas, paprastumas, nauda). Pedagogiškai tinkamiausios: **49 (5 principai)**, **65.5 (Bridžinė praktika RAG + Deep research)**, **58 (RAG)**.

---

## 1. Skaidrių parinkimas ir pedagoginis pagrindimas

| ID | Skaidrė | Kodėl tinka |
|----|---------|-------------|
| **49** | 5 principai, kurie realiai pagerina bet kurį promptą | Jau yra **veiksmas** (įvertinti promptą) ir **practicalTask** (vertinimo promptas). Dalyvis gauna naudą iš karto – įveda savo promptą, gauna įvertinimą. Trumpai (nauda) → Daryk dabar (nukopijuok, įklijuok savo promptą) → Kopijuojamas promptas → Patikra. 5 principai ir „Kodėl tai svarbu?“ – į optional. |
| **65.5** | Bridžinė praktika: RAG + Deep research | **Viena 5–10 min užduotis** – idealus veiksmo formatas. Trumpai (sujungsi RAG + DR, 2 promptai) → Daryk dabar (pasirink temą, nukopijuok, paleisk) → Kopijuojamas promptas (2 promptai) → Patikra (ar šaltiniai, ar gilinimas naudingas). Esamas 3 žingsnių aprašymas ir savirefleksija – į optional. |
| **58** | RAG (Retrieval-Augmented Generation) | **Pagrindinė tema** – bet dalyvis gali **iškart pabandyti** RAG (mini-šablonas jau yra). Trumpai (RAG = atsakymas iš šaltinių, tiksliau) → Daryk dabar (įklijuok dokumentą/tekstą + klausimą) → Kopijuojamas promptas (RAG šablonas) → Patikra. „Kas yra RAG“, „Kaip veikia“, „Pagalvokite apie darbą“ – į optional. |

---

## 2. Agentų seka

| Žingsnis | Agentas | Ką daro |
|----------|---------|---------|
| **1** | **CONTENT_AGENT** | Nustato kiekvienos skaidrės naują struktūrą pagal `AGENT_ORCHESTRATOR.md` „Geros praktikos – veiksmo skaidrės“: Trumpai (nauda), Daryk dabar (Ką daryti + CTA), Kopijuojamas promptas, Patikra (4 klausimai + „Jei bent 2 ne“), Optional (collapsible) su esamu teorijos turiniu. Esmės nekeičia. |
| **2** | **DATA_AGENT** | Taiko pakeitimus į `src/data/modules.json`: skaidrės 49, 65.5, 58 – nauji `sections` (5 blokų modelis), išlaikomas `practicalTask` arba `copyable` kur reikia. JSON validus. |
| **3** | **CODE_REVIEW_AGENT** | Patikrina: JSON parse, ar skaidrės rodomos, ar nėra prarastos esmės (5 principai, RAG apibrėžimas, bridžinė užduotis). |
| **4** | **QA_AGENT** | Atnaujina CHANGELOG; šį planą palieka kaip vykdymo dokumentą. |

**Workflow:** Planas (šis doc) → CONTENT_AGENT (struktūros spec) → DATA_AGENT (JSON) → CODE_REVIEW → QA.

---

## 3. Ką keičiama kiekvienoje skaidrėje (santrauka)

### 49 – 5 principai
- **Trumpai:** Nauda – 5 principai = pamatas; gali iš karto įvertinti savo promptą.
- **Daryk dabar:** Nukopijuok žemiau esantį promptą, įklijuok savo promptą į INPUT, paleisk DI. 🔘 Kopijuoti promptą.
- **Kopijuojamas promptas:** Esamas vertinimo promptas (ROLE/TASK/INPUT/EVALUATION FORMAT/RULES/OUTPUT).
- **Patikra:** Ar gavai įvertinimo lentelę? Ar 3 silpnos vietos aiškios? Ar pataisytas variantas naudingas? Jei bent 2 „ne“ – grįžk prie savo prompto arba pakeisk INPUT.
- **Optional (collapsible):** 5 principai (1–5), Kodėl tai svarbu?, Toliau (RL/RLHF).

### 65.5 – Bridžinė praktika
- **Trumpai:** 5–10 min: sujungsi RAG ir Deep research – du promptai, viena tema. Šaltiniai + gilinimas.
- **Daryk dabar:** Pasirink temą. Nukopijuok žemiau esantį šabloną. Paleisk 1. promptą (RAG), paskui 2. (Deep research). 🔘 Kopijuoti promptą.
- **Kopijuojamas promptas:** Dviejų žingsnių šablonas (1 PROMPTAS RAG, 2 PROMPTAS Deep research).
- **Patikra:** Ar atsakyme yra nuorodos? Ar 2. promptas davė naujų įžvalgų? Ar galėtum tai panaudoti darbe? Jei bent 2 „ne“ – pabandyk kitą temą arba papildyk promptą.
- **Optional:** 3 žingsniai detaliau, Savirefleksija.

### 58 – RAG
- **Trumpai:** RAG = DI atsakymas **iš tavo šaltinių** (dokumentai, duomenys) – tiksliau ir patikimiau nei „iš galvos“.
- **Daryk dabar:** Paimk tekstą ar dokumento fragmentą. Įklijuok į promptą žemiau (kontekstas) + savo klausimą. Paleisk. 🔘 Kopijuoti promptą.
- **Kopijuojamas promptas:** Mini-šablonas: „Atsakyk tik pagal šį kontekstą: [įklijuoti]. Jei atsakymo nėra – parašyk Nežinau. Cituok fragmentą.“
- **Patikra:** Ar atsakymas remiasi kontekstu? Ar DI nurodė „Nežinau“, jei trūko info? Ar cituota? Jei bent 2 „ne“ – papildyk kontekstą arba pakeisk klausimą.
- **Optional:** Kas yra RAG, Nauda, Kaip veikia (3 žingsniai), Promptų gairės, Kontekstas ir tokenai, Pagalvokite apie savo darbą.

---

## 4. Nuorodos

- Veiksmo skaidrių geriausios praktikos: `docs/development/AGENT_ORCHESTRATOR.md` (CONTENT_AGENT → „Geros praktikos – veiksmo skaidrės“).
- Panaši seka: `docs/development/AGENT_SEQUENCE_SKAIDRES_SYSTEM_PROCESO_STRUKTURUOTAS.md`.
- SOT: `docs/turinio_pletra_moduliai_4_5_6.md`.
