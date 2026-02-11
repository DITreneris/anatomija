# Agentų seka: skaidrės „5 principai, kurie realiai pagerina bet kurį promptą“ (4.1a4)

**Statusas:** tobulinimas atliktas (outcome-driven turinys, 5 principai veiksmo forma, „Kodėl tai svarbu?“ blokas, vertinimo promptas skaidrėje + prompt library).

## Skaidrės vieta

| Kas | Kur |
|-----|-----|
| **Pavadinimas** | 5 principai, kurie realiai pagerina bet kurį promptą (4.1a4) |
| **JSON** | `src/data/modules.json` – skaidrė su `id: 49`, `type: "content-block"` |
| **Turinio SOT** | `docs/turinio_pletra_moduliai_4_5_6.md` – lentelė 4.1a4, detalūs turinio blokai (skyrius „Skaidrė 5 principai…“) |
| **Render** | `SlideContent.tsx` → `ContentBlockSlide` (content-block) |
| **Vertinimo promptas** | Skaidrėje: `content.practicalTask`; žodyne: `src/data/promptLibrary.json` – sekcija „6. Kokybė ir vertinimas“, id `prompt-quality-5` |

Dabartinis JSON: 5 sekcijų (heading + body), 6-oji sekcija „Kodėl tai svarbu?“ su `blockVariant: "accent"`, `practicalTask` su vertinimo promptu.

---

## Agentų seka (kai gausi tobulinimo duomenis)

Tobulinimas apima **turinį + JSON + galimai UI** → mišri užduotis, pipeline pagal `AGENT_ORCHESTRATOR.md` §4.

1. **CONTENT_AGENT**
   - Įvestis: tavo pateikti duomenys (naujas tekstas, punktai, pakeitimai).
   - Veiksmai: atnaujinti turinio SOT – `docs/turinio_pletra_moduliai_4_5_6.md` (4.1a4 lentelė + skyrius „Skaidrė 5 principai…“). Terminologija: DI, lietuvių kalba; outcome-driven, veiksmo forma.
   - Išvestis: galutinis tekstas skaidrei + aiškūs reikalavimai DATA_AGENT (ką įrašyti, ar 5 punktai atskirai, ar vienas body).

2. **DATA_AGENT**
   - Įvestis: CONTENT_AGENT reikalavimai ir atnaujintas SOT.
   - Veiksmai: sinchronizuoti `src/data/modules.json` – skaidrė `id: 49`. Atnaujinti `title`, `subtitle`, `content.sections` (vienas ar kelii `body` blokai pagal CONTENT_AGENT struktūrą). Nesulaužyti `content-block` tipo ir esamos struktūros.
   - Išvestis: atnaujintas JSON; jei reikia naujų laukų ar tipo – pasiūlymas CODING_AGENT.

3. **CODING_AGENT** (tik jei reikia)
   - Jei CONTENT_AGENT/DATA_AGENT nustatė, kad reikia naujos struktūros (pvz. 5 atskirų antraščių+tekstų, TIP blokas) – atnaujinti render logiką `SlideContent.tsx` arba atitinkamą skaidrių tipą, kad atitiktų naują JSON.
   - Jei pakanka tik teksto pakeitimų JSON – šį žingsnį praleisti.

4. **CODE_REVIEW_AGENT**
   - Patikrinti: ar JSON validus, ar skaidrė rodoma teisingai, ar nėra regresijų, ar terminologija (DI) ir SOT atitinka.

5. **QA_AGENT**
   - Trumpas CHANGELOG/TODO įrašas (ką pakeista), jei reikia – atnaujinti `docs/MODULIO_4_SKAIDRIU_EILES.md` arba susijusią dokumentaciją.

---

## Greita nuoroda

- SOT (Moduliai 4–6): `docs/turinio_pletra_moduliai_4_5_6.md`
- Duomenų tiesa: `src/data/modules.json` (skaidrė id 49)
- Atpažinimas: `docs/CONTENT_MODULIU_ATPAZINIMAS.md` (4.1a4 = Modulio 4 skaidrė)

Kai pateiksi duomenis – pradėk nuo **CONTENT_AGENT** (atnaujinti SOT), tada **DATA_AGENT** (JSON).
