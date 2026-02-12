# LLM schemos vizualinis vertinimas ir geriausios praktikos

**Schema:** `public/llm_autoregressive_rytas_zalgiris.svg` (skaidrė 40.8)  
**Agentas:** SCHEME_AGENT (gairės: `docs/development/SCHEME_AGENT.md`)

---

## 1. Kas vizualiai blogai arba silpna

| Problema | Aprašymas | Severity |
|----------|-----------|----------|
| **Išvesties blokas – ne lentelė** | Tikimybės rodomos kaip viena eilutė („m. 22% · LKL 18% · čempionatą 15%“). Originale (RBC) Output = lentelė su stulpeliais Token / Probability. Vizualiai neperteikia „pasiskirstymo“ kaip lentelės. | Vidutinė |
| **LLM blokas – tik tekstas** | Tik etiketė „LLM“, be piktogramos (neuroninis tinklas, „apdorojimas“). Originale – neuroninio tinklo schema LLM bloke. Mažesnė vizualinė išraiška. | Žema |
| **Feedback etiketė** | Dabar: „Įvestis + „m.““ (aprašo rezultatą). Originale: „Choose NBA“ (aprašo veiksmą – pasirinkimas). Daliai vartotojų „Pasirinkta: m.“ būtų intuityviau. | Žema |
| **Ilgas tekstas įvesties blokuose** | „Vilniaus Rytas tapo čempionais 2024“ / „… 2024 m.“ gali siaurėti ar lūžti labai mažu viewport (mobile) – nepatikrinta. | Žema (jei būtų problemos) |

**Santrauka:** Semantika ir srautas teisingi; trūkumai – vizualinė išraiška (lentelė, LLM piktograma) ir etiketės formuluotė.

---

## 2. Ką schemų agentas jau daro gerai (geriausios praktikos)

| SCHEME_AGENT taisyklė | Įgyvendinimas LLM schemoje |
|------------------------|----------------------------|
| **§3.1 Viena geometrijos tiesa** | Komentaras viršuje: `START_X=24`, `BOX_W1=140`, `GAP=24`, `ARROW_MARKER_LEN=9`, `ROW1_Y=88`, `ROW2_Y=204`. Koordinatės iš konstantų, ne magic numbers. |
| **§3.2 Rodyklės kraštas į kraštą** | Forward linijos: `x1=164` (Įvestis dešinė), `x2=179` (188−9), t.y. prieš LLM kraštą atėmus marker length. Nėra persidengimo su blokais. |
| **§3.4 Feedback path** | Path nekerta blokų: iš Pasirinkta1 apačios → žemyn → horizontaliai → į Įvestis2 viršų. Punktyrinė + accent spalva. |
| **§3.8 Dvi rodyklių semantikos** | Forward: #7B8794, solid, 3px, atskiras marker. Feedback: #b8860b (accent), stroke-dasharray 6 4, atskiras marker. Vizualiai atskirti. |
| **§3.9 Spalvos ir šriftai** | Brand (#334e68), accent (Pasirinkta rėmelis, feedback, #b8860b). Plus Jakarta Sans, lietuviškas turinys. |
| **A11y** | `<title>`, `<desc>` su pilnu aprašu; `aria-labelledby`, `aria-describedby`, `role="img"`. Lietuviškos raidės SVG – XML entitetais (&#381;, &#269; ir kt.). |

**Santrauka:** Geometrija, rodyklės, feedback path, spalvos ir a11y atitinka SCHEME_AGENT gaires.

---

## 3. Kur geriausios praktikos (nuorodos)

| Sritis | Geriausia praktika | Kur aprašyta |
|--------|--------------------|--------------|
| Geometrija | Konstantos vienoje vietoje, rect/line iš jų | SCHEME_AGENT §3.1 |
| Rodyklės | Kraštas į kraštą, refX = ARROW_MARKER_LEN | §3.2, §3.3 |
| Forward vs feedback | Pilka solid vs accent punktyrinė, atskiri markeriai | §3.8 |
| Feedback path | Nekirsti blokų, path iki tikslo krašto | §3.4 |
| Horizontalus layout | Viewbox aukštis, ROW_Y, START_X, GAP | §3.7.1 |
| Etiketės virš rodyklių | Y = box.y − 6, X = gap centras, bold 11px | §3.7.3 |
| A11y | `<title>`, `<desc>`, lietuviškos raidės entitetais | Projekto a11y + SCHEME_AGENT §3.9 |

**Pastaba:** Ši schema – statinis SVG, ne React; todėl §3.6 (interaktyvumas), §3.7.4 (rankinis feedback polygon) ir pan. čia neprivalomi, bet SCHEME_AGENT gali juos taikyti naujoms interaktyvioms diagramoms.

---

## 4. Rekomendacijos tolesniam tobulinimui

1. **Feedback etiketė (greitas pakeitimas)**  
   Pakeisti „Įvestis + „m.““ → **„Pasirinkta: m.“** – labiau atitinka originalo „Choose NBA“ semantiką (veiksmas – pasirinkimas).

2. **Išvesties blokas – lentelės vizualas (opcional)**  
   Jei norima artimesnio RBC lentelės įspūdžio: Išvesties bloke naudoti atskiras `<text>` eilutes su fiksuotu išlyginimu (pvz. tokenas kairėje, % dešinėje) arba labai paprasta „pseudo-lentelė“ (linija po „Tokenas · Tikimybė“, po to eilutės „m. │ 22%“ ir pan.). Dabar antraštė „Tokenas · Tikimybė“ jau padeda.

3. **LLM blokas – piktograma (opcional)**  
   SCHEME_AGENT gali pridėti mažą, stilizuotą neuroninio tinklo schemą (mazgai + ryšiai) į LLM `rect` – pagal §3.9 ir originalo vizualą. Nebūtina, jei prioritetas – paprastumas.

4. **Mobile / siauras viewport**  
   Jei atsiras lūžiantys teksto atvejai – sumažinti šrifto dydį įvesties blokuose arba sutrumpinti pavyzdį (pvz. „Rytas čempionais 2024“).

---

## 5. Išvada

- **Vizualiai blogai:** Nėra kritinių klaidų. Silpnesnės vietos: Išvestis ne vizualiai lentelė, LLM be piktogramos, feedback etiketė galėtų būti „Pasirinkta: m.“.
- **Schemų agentas:** Laikosi geometrijos konstantų, edge-to-edge rodyklių, atskiros forward/feedback semantikos, a11y (`<title>`, `<desc>`), lietuviškų raidžių. Tai atitinka SCHEME_AGENT geriausias praktikas.
- **Geriausios praktikos:** Aprašytos `docs/development/SCHEME_AGENT.md` §3.1–3.9; ši schema atitinka §3.1, 3.2, 3.4, 3.8, 3.9. Tolesnis žingsnis – pasirinktinai pakeisti feedback etiketę ir (jei norima) stiprinti Išvesties „lentelės“ vizualą arba LLM piktogramą.
