# Skaidrė 4.1a3 „Paskatinamasis mokymas (RL / RLHF)“ – nuorodos ir agentų seka

> **Paskirtis:** Greita nuoroda į skaidrę ir paruošta agentų seka tobulinimui. Kai įkelsite kontekstą (reikalavimai, pakeitimai), judėk pagal šią seką.

---

## 1. Kur skaidrė yra

| Kas | Vieta |
|-----|--------|
| **Modulis** | Modulis 4 |
| **Skaidrė / tema** | 4.1a3 – „Kas yra paskatinamasis mokymas (RL / RLHF)?“ |
| **Turinio SOT (Moduliai 4–6)** | `docs/turinio_pletra_moduliai_4_5_6.md` – skyrius „Skaidrė „Kas yra paskatinamasis mokymas (RL / RLHF)?“ (4.1a3)“ (apie 175–188 eil.) |
| **Duomenys (render)** | `src/data/modules.json` – skaidrė **id: 48** (`type: "content-block"`, 5 sekcijos: RL, RLHF, lentelė RL vs RLHF, ryšys su GPT/etika, „aha“ accent) |
| **Eilė Modulyje 4** | `docs/MODULIO_4_SKAIDRIU_EILES.md` – 7-oji eilutė (4.1a3). Skaidrė eina **po** 4.1a4 (5 principai, id 49). |
| **Žodynėlis** | `src/data/glossary.json` ir `modules.json` – terminas **RLHF** |
| **Render** | `src/components/slides/types/ContentSlides.tsx` – `ContentBlockSlide`; RL diagrama – `RlProcessBlock`, `RlProcessDiagram` (shared) |

**Dabartinė būklė:**  
JSON turi pilną turinį (5 sekcijos, lentelė RL vs RLHF, „aha“ su `blockVariant: "accent"`). **RL sekcija (1️⃣):** interaktyvi horizontali diagrama `RlProcessBlock` – clickable žingsniai (Agentas, Aplinka, Veiksmas, Atlygis), „Tu esi čia“, paaiškinimai apačioje, grįžtamasis ryšys (mintinis modelis); `section.image: "rl_process_diagram"`. Pateikimo tobulinimui naudojama agentų seka žemiau.

---

## 2. Agentų seka tobulinimui (kai įkelsite kontekstą)

Užduotis **mišri** (turinis + JSON + galimas UI), todėl seka pagal `AGENT_ORCHESTRATOR.md` §4:

| Žingsnis | Agentas | Ką daro |
|----------|---------|---------|
| **1** | **CONTENT_AGENT** | Pagal jūsų kontekstą ir SOT – atnaujina/patikslinia tekstus (RL, RLHF, 5 komponentai, Quality/etika), terminologiją (DI), aiškumą. Išvestis: konkretūs tekstai / reikalavimai DATA_AGENT ir CODING_AGENT. |
| **2** | **DATA_AGENT** | Sinchronizuoja `modules.json` (id: 48): turinys, `blockVariant` (brand / accent / terms) vizualinei hierarchijai. Gali paliesti `glossary.json` jei keičiasi RLHF apibrėžimas. |
| **3** | **CODING_AGENT / UI_UX_AGENT** | Render logika, blokų stiliai pagal `docs/development/UI_UX_AGENT.md`: brand/accent/slate, a11y (aria-label lentelėms), dark mode, skenuojamumas. |
| **4** | **CODE_REVIEW_AGENT** | Patikrina: ar turinys atitinka SOT, ar JSON validus, ar nėra regresijų. |
| **5** | **QA_AGENT** | Dokumentacija, galutinis suvedimas, CHANGELOG jei aktualu. |

**Trumpas workflow:**  
Kontekstas → CONTENT_AGENT (tekstai/SOT) → DATA_AGENT (modules.json, blockVariant) → CODING_AGENT/UI_UX_AGENT (render, spalvos, a11y) → CODE_REVIEW_AGENT → QA_AGENT.

---

## 3. Pateikimo tobulinimo seka (spalvos, dėstymas, pedagogika, žodynas, UI/UX)

Kai **turinis lieka tas pats**, tik gerinamas pateikimas:

| Žingsnis | Agentas | Ką daro |
|----------|---------|---------|
| **1** | **CONTENT_AGENT** | Patikrina žodyną (RLHF žodyne), terminologiją (DI), aiškumą sakiniams; jei reikia – siūlo smulkias formuliacijas (ne keičiant prasmės). |
| **2** | **DATA_AGENT** | Pridedi `blockVariant` skaidrei 48: RL ir RLHF blokams – `brand`; palyginimo lentelės blokui – `terms`; „aha“ – jau `accent`. Tai suteikia vizualinę hierarchiją (brand = pagrindinė info, terms = neutralus palyginimas, accent = esminė žinutė). |
| **3** | **UI_UX_AGENT / CODING_AGENT** | Tikrina ir taiko: (a) spalvas pagal `tailwind.config.js` (brand/accent/slate); (b) lentelės a11y (`aria-label`, `role="region"`); (c) antraščių hierarchiją (`font-bold text-lg`); (d) dark mode visiems blokams; (e) skenuojamumą (bullet points, **bold** svarbiems žodžiams). |
| **4** | **CODE_REVIEW_AGENT** | Greita patikra: ar SOT laikomasi, ar JSON validus, ar UI atitinka `docs/QA_DI_VISATA_UI_UX.md`. |

**Checklist (4.1a3 pateikimui):**

- [ ] Sekcijos 1 (RL) ir 2 (RLHF) – brand blokas (`bg-brand-50 dark:bg-brand-900/20 border-l-brand-500`)
- [ ] Sekcija 3 (RL vs RLHF lentelė) – terms/slate kontekstas, lentelė su aiškia antrašte
- [ ] Sekcija 5 („aha“) – accent blokas (CTA)
- [ ] Lentelė: `aria-label` „Palyginimo lentelė RL ir RLHF“
- [ ] Žodynėlis: RLHF terminas suderintas su SOT
- [ ] Dark mode visiems blokams

---

## 4. Nuorodos į SOT turinį (4.1a3)

- **Pavadinimas:** Kas yra paskatinamasis mokymas (RL / RLHF)?
- **Poantraštė:** Kaip DI mokosi iš bandymų, klaidų ir žmonių grįžtamojo ryšio.
- **RL:** Paprastas paaiškinimas; struktūra (Agentas, Aplinka, Veiksmas, Atlygis); mintinis modelis.
- **RLHF:** Žmogus – atlygio šaltinis; kaip veikia GPT atveju (lyginama, pažymima, išmoksta).
- **RL vs RLHF:** Lentelė (Mokosi iš atlygio / žmonių; Tinka žaidimams / kalbai; Objektyvus / subjektyvi kokybė; „Laimėjau“ / „Geriau žmogui“).
- **Ryšys su GPT ir etika:** Promptas = signalas; optimizuoja naudą, saugumą, lūkesčius.
- **„Aha“:** GPT atsakymai – RLHF rezultatas; formuluotė, tonas ir kontekstas keičia kokybę.

Kai įkelsite kontekstą (ką norite pakeisti / pridėti), pirmas žingsnis – **CONTENT_AGENT**. Pateikimo tobulinimui – **DATA_AGENT** (blockVariant) + **UI_UX_AGENT/CODING_AGENT** (spalvos, a11y).
