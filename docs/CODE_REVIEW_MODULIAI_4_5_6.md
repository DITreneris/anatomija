# CODE_REVIEW_AGENT: Moduliai 4, 5, 6 – nuoseklumas, praktiškumas, pedagogika

> **Rolė:** Diagnozė ir kokybės įvertinimas. Ši ataskaita atlikta kaip CODE_REVIEW_AGENT pagal orkestratorių.  
> **Šaltiniai:** `docs/turinio_pletra_moduliai_4_5_6.md`, `docs/CONTENT_MODULIU_ATPAZINIMAS.md`, `docs/MODULIO_4_SKAIDRIU_EILES.md`, `docs/PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md`, `src/data/modules.json`.  
> **Data:** 2026-02-07.

---

## 1. Agentų seka (atlikta ir rekomenduojama)

| Žingsnis | Agentas | Veikla |
|----------|---------|--------|
| 1 | **CODE_REVIEW_AGENT** | Auditas (šis dokumentas): nuoseklumas, praktiškumas, pedagogika, nauda/pavyzdžiai. |
| 2 | **CONTENT_AGENT** | Įtraukti trūkstamą turinį į SOT; pataisyti tekstus pagal rekomendacijas. |
| 3 | **DATA_AGENT** | Sinchronizuoti `modules.json` su SOT (Modulio 6 skaidrės, eilė, test-intro/test-results turinys). |
| 4 | **CODING_AGENT** | Jei reikia – nauji tipai arba render logika (pvz. savęs vertinimo kortelė, rezultatų ekrano tekstai). |
| 5 | **QA_AGENT** | Atnaujinti TODO.md / CHANGELOG.md; fiksuoti įgyvendintas rekomendacijas. |

---

## 2. Nuoseklumo aspektas (SOT ↔ JSON ↔ vartotojo nauda)

### 2.1 Kas atitinka SOT

- **Terminologija:** DI (ne AI) naudojama ir SOT, ir `modules.json` aprašuose.
- **Modulių struktūra:** 4 (learn) → 5 (test) → 6 (practice) atitinka `turinio_pletra_moduliai_4_5_6.md` triada Learn → Test → Practice.
- **Modulio 4 turinys:** Skaidrės apima 4.0 (DI Visata), 4.1 (Įvadas su learningOutcomes ir „Kodėl pažangusis lygis?“), 4.1a–4.1a5, 4.1b, 4.2 RAG – 4.7 Santrauka, Žodynėlis – atitinka SOT temas.
- **Modulio 5:** Pasiruošimo savitikra (warm-up-quiz), test-intro, test-section su 10 klausimais (RAG, Deep research, tokenai, manipuliacijos, žinių patikrinimas), test-results – atitinka SOT §3. Klausimų bankas SOT (§3.2) įgyvendintas (`m5-q1`–`m5-q10`) su paaiškinimais.
- **Modulio 6:** Refleksijos skaidrė su 3 klausimais atitinka SOT „Refleksijos skaidrė“; practice-intro ir practice-scenario (tyrimo ataskaita) atitinka „Scenarijus – vienas pavyzdys“.

### 2.2 Nuoseklumo spragos (konkretūs failai / vietos)

| Problema | Vieta | Rekomendacija |
|----------|--------|----------------|
| **Modulio 4 skaidrių eilė** | `modules.json` Modulio 4 `slides` masyvas | SOT (`MODULIO_4_SKAIDRIU_EILES.md`): 4.1b „Darbas su DI“ turi eiti po 4.1-system-master (id 54), prieš 4.1b2. JSON eilėje id 43 (4.1b) eina po id 53, 54, o prieš jį eina id 42 („Kam žmonės naudoja GPT?“). Patikrinti, ar eilė atitinka `docs/MODULIO_4_SKAIDRIU_EILES.md` ir jei ne – DATA_AGENT perstatyti skaidres. |
| **Modulio 6 trūksta skaidrių** | `src/data/modules.json` – Modulio 6 turi tik 3 skaidres (60, 61, 62) | SOT nurodo: **Projekto tikslai** (pradžioje), **Savęs vertinimo kortelė** (checklist), **Projekto etapai** (6 žingsniai su galimybe sustoti), **COMBO**, **SUPER PROMPTAI**, **Duomenų tvarkymas** (5 punktų atmintinė), **Integracija su Moduliu 3**. Dabar JSON turi tik Įvadas, Scenarijus, Refleksija. **Rizika:** vartotojas negauna pilnos naudos – nėra scaffolding, COMBO pavyzdžių, SUPER PROMPTŲ ir duomenų tvarkymo. CONTENT_AGENT – turinys į SOT; DATA_AGENT – skaidrės į JSON. |
| **Modulio 5 test-intro / test-results turinys** | `modules.json` – slide `type: "test-intro"` ir `"test-results"` | SOT §3.1 nurodo konkretų įvado tekstą („Šis testas patikrina…“, slenksčiai ≥70% / &lt;70%) ir rezultatų ekranų tekstus („Rekomenduojame peržiūrėti: RAG (4.2), žinių patikrinimas (4.6)“; „Sveikiname! Galite pradėti Modulio 6“). Patikrinti, ar `SlideContent.tsx` / test-intro / test-results rodo šiuos tekstus iš JSON; jei jie hardcoded arba trūksta – DATA_AGENT pridėti `content` laukus pagal SOT. |
| **Skaidrių ID kolizija** | Modulio 4 skaidrės naudoja id 39–70, 200; Modulio 5 – 49–52; Modulio 6 – 60–62 | Modulyje 5 skaidrės id 49, 50, 51, 52 – Modulyje 4 taip pat yra skaidrės su id 49, 50, 51, 52 (Patarimai inžinieriui, Parametrų laukas, Stilių naudojimas, Praktinės užduotys; Pagrindiniai įrankiai; Metodinis vs Agentinis; Darbas su DI). **Rizika:** jei sistema identifikuoja skaidres tik pagal skaitinį `id`, gali būti painiavos. Rekomenduojama: skaidrės identifikavimas pagal `moduleId + slideId` arba unikalūs id visame faile. CODING_AGENT / DATA_AGENT patikrinti `progress.ts` ir navigaciją. |

---

## 3. Praktiškumo aspektas (pavyzdžiai, takeaway, nauda)

### 3.1 Stiprybės

- **Modulio 4:** Daug skaidrių su **copy-paste** šablonais (practicalTask, template, pavyzdiniai promptai); **Žodynėlis**; **learningOutcomes** ir **whyAdvanced** įvado skaidrėje – vartotojas mato „ką išmoksi“ ir „kodėl tai naudinga“. RAG, Deep research, tokenai, manipuliacijos, haliucinacijos – visose temose yra pavyzdžiai arba nuorodos į praktiką.
- **Modulio 5:** **Pasiruošimo savitikra** (3 klausimai) – formatinis grįžtamasis ryšys prieš pagrindinį testą; kiekvienas klausimas su **explanation** – vartotojas iš karto gauna naudą („kodėl teisingas atsakymas“).
- **Modulio 6:** Scenarijus su **context, data, constraints, expectedFormat** – aiškus praktinio projekto rėmas; refleksijos klausimai skatina pritaikymą („Kurį įgūdį naudosite pirmiausia?“).

### 3.2 Praktiškumo spragos

| Problema | Vieta | Rekomendacija |
|----------|--------|----------------|
| **Modulio 6 mažai „daryk“ žingsnių** | SOT §4 – 6 projekto etapai (META → INPUT → … → ADVANCED) su galimybe sustoti | Dabar viena „Projektas: Tyrimo ataskaita“ skaidrė – bendras aprašymas. Trūksta **žingsniuoto scaffolding**: pvz. atskiros skaidrės arba instrukcijos „1) Tikslas ir rolė – galite sustoti; 2) Šaltiniai ir RAG – toliau…“. CONTENT_AGENT – instrukcijas į SOT; DATA_AGENT – į JSON (instructionSteps arba atskiros skaidrės). |
| **Nėra savęs vertinimo kortelės** | SOT §4.0 – „Savęs vertinimo kortelė (checklist)“ su 5–6 kriterijais (6 blokai, RAG, Deep research, patikrinimas, tokenai) | Vartotojas negali sistemingai pasitikrinti „ar įtraukiau viską“. Pridėti skaidrę arba bloką „Projekto savęs vertinimas“ su checklist (Taip / Dar ne / Netaikau). DATA_AGENT + CODING_AGENT (jei reikia naujo tipo). |
| **COMBO ir SUPER PROMPTAI** | SOT – „Praktika: COMBO“, „SUPER PROMPTAI“ su copy-paste pavyzdžiais ir perėjimu prie haliucinacijų | Šių skaidrių nėra `modules.json` Modulyje 6. Tai **tiesioginė naudos praradimas**: vartotojas negauna pavyzdžių, kaip sujungti kelis metodus ir kaip atpažinti ekstremalius promptus (haliucinacijos). CONTENT_AGENT + DATA_AGENT – įtraukti į Modulio 6. |
| **Duomenų tvarkymas** | SOT – „Duomenų tvarkymas (Modulio 6 pabaigos atmintinė)“ – 5 punktai (biblioteka, versijavimas, dokumentacija, procesai, duomenų rinkiniai) | Nėra Modulio 6 skaidrėje. Pridėti kaip paskutinę skaidrę prieš refleksiją arba po jos – **takeaway** kasdieniniam darbui. |

---

## 4. Pedagoginis aspektas (progresija, aiškumas, nauda)

### 4.1 Stiprybės

- **Bloom ir progresija:** Modulis 4 – Suprasti + Taikyti (pavyzdžiai); Modulis 5 – Prisiminti/Suprasti; Modulis 6 – Taikyti/Analizuoti/Kurti. SOT §5.1 tai patvirtina.
- **Integracija 4→5→6:** Modulio 4 santraukoje (4.7) – motyvacija į testą; Modulio 5 – slenksčiai ir CTA į Modulį 6; Modulio 6 – vienas projektas kaip capstone. Tai nuoseklu.
- **Žodynėlis ir „3 klausimai sau“:** Modulio 4 Žodynėlis ir santraukoje „Prieš testą: 3 klausimai sau“ (SOT) padeda metaloginiam apžvelgimui; dalis jau įgyvendinta (santraukoje turinys).

### 4.2 Pedagoginės spragos (sutampa su PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md)

| Problema | Rekomendacija |
|----------|----------------|
| **Modulio 6 projekto tikslai pradžioje** | SOT nurodo „Projekto įvado skaidrė – Projekto tikslai“. Patikrinti, ar `practice-intro` rodo **konkretų tikslų sąrašą** (sukurti artefaktą, RAG, Deep research, patikrinimas) – jei ne, CONTENT_AGENT/DATA_AGENT papildyti. |
| **Alternatyvūs projekto kontekstai** | SOT ir pedagoginė analizė rekomenduoja 2–3 alternatyvas (tyrimo ataskaita / strategijos santrauka / analizė arba HR, produktas). Dabar vienas scenarijus. Papildyti 1–2 alternatyvius kontekstus – **diferenciacija** ir didesnė nauda skirtingoms rolėms. |
| **Formatinis grįžtamasis ryšys Modulyje 4** | Po RAG, Deep research, tokenų – nėra trumpų „savitikros“ skaidrių (2–3 klausimai su paaiškinimu). Pedagoginė analizė rekomenduoja – gerina įsitraukimą. Žemas/vidutinis prioritetas. |
| **„Kodėl man tai?“ miniužduotys** | Po 4.2 (RAG) arba 4.5 (manipuliacijos) – „Pagalvokite apie savo darbe“ tipo refleksija (be įskaitos). Galima pridėti kaip trumpą bloką skaidrėse. |

---

## 5. Santrauka: ką vartotojas išsineša (nauda ir pavyzdžiai)

| Modulis | Kas jau gerai | Ko trūksta, kad nauda būtų pilna |
|---------|----------------|-----------------------------------|
| **4** | Tikslai ir „kodėl“ įvade; žodynėlis; daug copy-paste šablonų; RAG/Deep research/tokenai/manipuliacijos/patikrinimas su pavyzdžiais | Skaidrių eilės patikra; savitikros skaidrės (optional) |
| **5** | Pasiruošimo savitikra; 10 klausimų su paaiškinimais; slenksčiai | Įvado/rezultatų ekranų tekstų atitikimas SOT; unikalūs skaidrių id |
| **6** | Įvadas, vienas scenarijus, refleksija | **Projekto tikslai**, **savęs vertinimo kortelė**, **6 etapų scaffolding**, **COMBO**, **SUPER PROMPTAI**, **Duomenų tvarkymas**, alternatyvūs kontekstai |

---

## 6. Rekomenduoti agentai ir žingsniai

1. **CONTENT_AGENT:**  
   - Į SOT (`turinio_pletra_moduliai_4_5_6.md`) įtraukti trūkstamus Modulio 6 blokus (COMBO, SUPER PROMPTAI, Duomenų tvarkymas – jau aprašyta, bet reikia aiškiai žymėti kaip privalomas turinys);  
   - Patikrinti Modulio 5 įvado/rezultatų ekranų tekstus SOT §3.1 ir pateikti citatas DATA_AGENT.

2. **DATA_AGENT:**  
   - Modulio 6: pridėti skaidres (arba turinio blokus) Projekto tikslai, Savęs vertinimas, Etapai (scaffolding), COMBO, SUPER PROMPTAI, Duomenų tvarkymas; sinchronizuoti su `src/types/modules.ts` ir esamais tipais;  
   - Modulio 4: patikrinti skaidrių eilę pagal `docs/MODULIO_4_SKAIDRIU_EILES.md` ir ištaisyti, jei reikia;  
   - Modulio 5: test-intro ir test-results – įvesti SOT tekstus į `content` (jei tipai leidžia).

3. **CODING_AGENT:**  
   - Patikrinti, ar skaidrių identifikavimas naudoja `moduleId + slideId` (kad nebūtų kolizijos tarp Modulio 4 ir 5 id 49–52);  
   - Jei pridedami nauji tipai (pvz. savęs vertinimo kortelė) – implementuoti render logiką `SlideContent.tsx`.

4. **QA_AGENT:**  
   - Atnaujinti `TODO.md` su užduotimis iš šios apžvalgos; po įgyvendinimo – `CHANGELOG.md` ir TEST_REPORT (jei testuota).

---

**CHANGES:**  
- Sukurtas `docs/CODE_REVIEW_MODULIAI_4_5_6.md` – CODE_REVIEW_AGENT ataskaita.

**CHECKS:**  
- Skaityta SOT, CONTENT_MODULIU_ATPAZINIMAS, MODULIO_4_SKAIDRIU_EILES, PEDAGOGINE_ANALIZE, modules.json (Moduliai 4, 5, 6). Build/test nevykdytas – tik turinio/duomenų auditas.

**RISKS:**  
- Skaidrių id kolizija (4 ir 5 moduliai) gali sukelti klaidas progrese ar navigacijoje – būtina patikrinti.  
- Modulio 6 trūksta daug SOT skaidrių – vartotojas gauna mažiau naudos ir pavyzdžių (COMBO, SUPER PROMPTAI, duomenų tvarkymas).

**NEXT:**  
1. CONTENT_AGENT: Papildyti SOT Modulio 6 privalomu turiniu (COMBO, SUPER PROMPTAI, Duomenų tvarkymas, savęs vertinimas, etapai) ir Modulio 5 ekranų tekstus.  
2. DATA_AGENT: Modulio 6 skaidrės į `modules.json`; Modulio 4 eilė; Modulio 5 test-intro/test-results content.  
3. CODING_AGENT: Skaidrių id unikalumas ir/ar nauji tipai (savęs vertinimo kortelė).
