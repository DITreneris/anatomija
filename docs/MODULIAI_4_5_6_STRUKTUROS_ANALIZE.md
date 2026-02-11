# Moduliai 4–6: struktūros ir mokymosi logikos analizė

> **Agentas:** CONTENT_AGENT.  
> **Šaltinis:** `docs/turinio_pletra_moduliai_4_5_6.md`, `docs/CONTENT_MODULIU_ATPAZINIMAS.md`.  
> **Tikslas:** Peržiūrėti modulius 4–6 struktūros ir mokymosi logikos aspektu; rekomenduoti, kaip geriausiai išdėlioti skaidres pagal mokymosi tikslus, praktiką, vartotojo kelionę ir patogumą.

---

## 1. Struktūros apžvalga

| Modulis | Paskirtis | Turinys | Skaidrės / elementai |
|--------|-----------|---------|----------------------|
| **4** | Teorija (pažangusis lygis) | RAG, Deep research, tokenai, manipuliacijos, žinių patikrinimas + įvadinė konceptualizacija (savokos, workflow, įrankiai) | 4.1a … 4.1d, 4.2–4.7 + daug papildomų (4.1-tools, 4.1-prompts, 4.2-open, 4.2a–4.2c, 4.3a ir kt.) |
| **5** | Testas | Žinių patikrinimas (10–12 klausimų) | Įvadas, klausimai, rezultatų ekranai (<70 % / ≥70 %) |
| **6** | Praktika | Vienas integruotas projektas (capstone) | Tikslai, 6 žingsnių scaffolding, COMBO, SUPER PROMPTAI, Duomenų tvarkymas, refleksija |

**Vartotojo kelionė:** Modulis 3 → Modulis 4 (teorija) → Modulis 5 (testas) → Modulis 6 (projektas). Atrakinimas: 4 po 3; 5 po 4; 6 po 5 (neprivaloma: ≥70 % Modulio 5).

---

## 2. Mokymosi tikslai vs dabartinė eilė

**Dokumente nurodyti tikslai (1.2):**
1. RAG – suprasti, kada naudoti, kaip nurodyti šaltinius.
2. Deep research – žinoti, kaip struktūruoti multi-step užklausas.
3. Tokenų ekonomika – suprasti tokenus, optimizuoti ilgumai/kainai.
4. Promptų manipuliacijos – atpažinti ir vengti, formuoti neutralius promptus.
5. Žinių patikrinimas – tikrinti DI atsakymus, ryšys su Quality.
6. Projektas – pritaikyti viską Modulio 6 projekte.

**Dabartinė pagrindinių temų eilė Modulyje 4 (2.1 lentelė + „Vieta eilėje“):**
- Didelis **įvadinis blokas 4.1***: 4.1a (Kas yra promptų inžinerija?), 4.1a2 (4 dedamosios), 4.1a2-viz, 4.1-workflow-ex, 4.1a3 (RL/RLHF), 4.1a4 (Patarimai), 4.1a5 (Parametrų laukas), 4.1a5-style, 4.1a5-practice → **4.1 Įvadas** → 4.1-tools, 4.1-prompts → 4.1b (Struktūruotas procesas), 4.1b2, 4.1c, 4.1d → **4.2 RAG** → … → **4.3 Deep research** → **4.4 Tokenai** → **4.5 Manipuliacijos** → **4.6 Žinių patikrinimas** → **4.7 Santrauka**.

**Pastaba:** Pagrindinės temos 4.2–4.7 **atitinka** mokymosi tikslus ir yra logiškai išdėstytos (RAG → Deep research → tokenai → manipuliacijos → patikrinimas → santrauka). Problema – **įvado skaidrė „4.1 Įvadas į pažangų lygį“** (su „Po šio modulio galėsite“ ir „Kodėl pažangusis lygis?“) dokumente eina **po** daugelio konceptinių skaidrių (4.1a–4.1a5-practice). Dalyvis ilgai nemato aiškaus modulio kelio žemėlapio.

---

## 3. Pagrindinės rekomendacijos skaidrių išdėstymui

### 3.1 Modulio 4 pradžia: įvadas pirmiau

- **Rekomendacija:** Skaidrę **„4.1 Įvadas į pažangų lygį“** (su „Po šio modulio galėsite“ ir „Kodėl pažangusis lygis?“) rodyti **pirmą** arba **iškart po 1–2 savokų skaidrių**.
- **Variantas A (minimalus pakeitimas):** Eilė: **4.1 Įvadas** → 4.1a (Kas yra promptų inžinerija?) → 4.1a2 (4 dedamosios) → … likusi 4.1* serija. Taip dalyvis iš karto mato tikslus ir motyvaciją.
- **Variantas B (savokos pirmiau):** Eilė: 4.1a → 4.1a2 → **4.1 Įvadas** → 4.1a3, 4.1a4, 4.1a5 … (įvadas po „kas tai“ ir „4 dedamosios“, bet prieš detalesnį workflow/įrankius). Tai išlaiko „apibrėžkime, kas yra“ prieš „ką mes čia mokinsimės“.

**Rekomenduojama:** Variantas A – **4.1 Įvadas pirmas**, kad mokymosi tikslai ir vartotojo kelionė būtų aiškūs nuo pirmos skaidrės.

---

### 3.2 Temų blokai pagal tikslus ir praktiką

Skaidres naudinga grupuoti į **aiškius blokus**, kuriuos atspindi ir navigacija (jei UI leidžia):

| Blokas | Skaidrės (orientacinis diapazonas) | Mokymosi tikslas | Praktika |
|--------|------------------------------------|------------------|----------|
| **Įvadas ir savokos** | 4.1, 4.1a, 4.1a2, 4.1a2-viz, 4.1a3, 4.1a4, 4.1a5, 4.1a5-style, 4.1a5-practice | Kas yra promptų inžinerija, 4 dedamosios, RL/RLHF, patarimai, parametrų laukas, stilius | Praktinės užduotys (stiliai, HTML) |
| **Įrankiai ir procesas** | 4.1-tools, 4.1-prompts, 4.1b, 4.1b2, 4.1-workflow-ex | Įrankiai, metodinis vs agentinis, 8 žingsnių procesas, proceso promptas | Workflow pavyzdžiai (prezentacijos) |
| **Paruošimas RAG** | 4.1c, 4.1d | Schema LLM+RAG, multi-modal workflow | — |
| **RAG** | 4.2, 4.2-open, 4.2a, 4.2a-academic, 4.2b, 4.2c | RAG apibrėžimas, oficialūs šaltiniai, memory/įrankiai, duomenų paruošimas, 100 % strategijos | RAG analitikas, šablonai |
| **Deep research** | 4.3, 4.3a | Gilusis tyrimas, promptų sekos (CoT, ToT) | Praktinės užduotys (sekos) |
| **Tokenų ekonomika** | 4.4 (+ visos 4.4 skaidrės) | Tokenai, konteksto langas, max_tokens, optimizavimas | Konteksto apibendrinimas, ilgo dokumento workflow |
| **Manipuliacijos** | 4.5 (+ skaidrės 4.5) | Kas yra manipuliacijos, technikos, Cialdini, etika | Verslo pavyzdžiai (neutralūs vs manipuliaciniai) |
| **Žinių patikrinimas ir haliucinacijos** | 4.6 (+ skaidrės 4.6) | **Haliucinacijos** (kas tai, kodėl, kaip sumažinti) + žinių patikrinimas (šaltiniai, cross-check, „nežinau“), anti-haliucinacinis šablonas | 5 praktinės taisyklės, detektoriai |
| **Santrauka** | 4.7 | Apžvalga, motyvacija į Modulį 5 | — |

Praktika kiekviename bloke padės įtvirtinti tikslus ir sumažina „per daug teorijos vienu metu“ pojūtį.

---

### 3.3 Vartotojo kelionė ir patogumas

- **Progresija:** Įvadas → savokos → įrankiai/procesas → RAG (paruošimas 4.1c/4.1d, tada 4.2) → Deep research → tokenai → manipuliacijos → patikrinimas → santrauka. Ši seka dokumente jau atspindėta; reikia tik **4.1 įvadą** perkelti į pradžią.
- **Nuorodos tarp modulių:** 4.7 aiškiai nurodo „Modulis 5: testas“; Modulio 5 rezultatų ekranai – „Modulis 6: projektas“. Tai palaikyti.
- **Patogumas:** Modulis 4 ilgas (~30+ skaidrių). Siūloma:
  - **Skyrių antraštės** arba „milestone“ skaidrės (pvz. po 4.1*, po 4.2, po 4.4), kad dalyvis matytų, kur yra kurse.
  - **Trumpas „greitas kelias“** (tik 4.1 → 4.2 → 4.3 → 4.4 → 4.5 → 4.6 → 4.7) – tik tiems, kurie jau žino savokas ir nori tik pagrindinių temų; realizuoti kaip pasirinktinę navigaciją arba „praleisti įvadinį bloką“, jei UI leidžia.

---

### 3.4 Moduliai 5 ir 6

- **Modulis 5:** Struktūra tinkama – įvadas (slenksčiai, CTA) → testas → rezultatai (<70 % / ≥70 %) su aiškiais CTA. Klausimų pasiuntimas pagal temas (RAG, Deep research, tokenai, manipuliacijos, patikrinimas) atitinka Modulio 4 tikslus.
- **Modulis 6:** Vienas projektas, 6 žingsnių scaffolding, COMBO, SUPER PROMPTAI, Duomenų tvarkymas, refleksija – logiška. SUPER PROMPTAI → priminti haliucinacijas ir nuorodą į 4.6 – palaikyti kaip dokumente.

---

## 4. Konkretus siūlomas skaidrių eilės variantas (Modulis 4)

Prioritetas: **mokymosi tikslai**, **praktika po kiekvienos didesnės temos**, **vartotojo kelionė**, **patogumas**.

1. **4.1** – Įvadas į pažangų lygį („Po šio modulio galėsite“, „Kodėl pažangusis lygis?“).
2. **Savokos:** 4.1a → 4.1a2 → 4.1a2-viz → 4.1a3 → 4.1a4 → 4.1a5 → 4.1a5-style → 4.1a5-practice.
3. **Įrankiai ir procesas:** 4.1-tools → 4.1-prompts → 4.1b → 4.1b2 → 4.1-workflow-ex (arba prie 4.1b).
4. **Paruošimas RAG:** 4.1c → 4.1d.
5. **RAG:** 4.2 → 4.2-open → 4.2a → 4.2a-academic → 4.2b → 4.2c.
6. **Deep research:** 4.3 → 4.3a.
7. **Tokenų ekonomika:** visos 4.4 skaidrės (pagal dokumentą).
8. **Manipuliacijos:** visos 4.5 skaidrės.
9. **Žinių patikrinimas:** visos 4.6 skaidrės.
10. **4.7** – Modulio 4 santrauka (motyvacija į Modulį 5).

Papildomos skaidrės (RL promptas, lentelės, DI atmintis, PAVYZDŽIAI ir kt.) lieka tose pačiose temose pagal dokumento „Vieta“ nurodymus.

---

## 5. Santrauka

| Aspektas | Būsena | Veiksmas |
|----------|--------|----------|
| Mokymosi tikslai | 4.2–4.7 atitinka tikslus | Išlaikyti eilę; 4.1 įvadą rodyti pirmą |
| Praktika | Yra po stilių, RAG, Deep research, tokenų, patikrinimo | Išlaikyti; grupuoti pagal blokus |
| Vartotojo kelionė | 4→5→6 ir slenksčiai aiškūs | Palaikyti; 4.7 ir 5 rezultatų ekranuose stiprinti CTA |
| Patogumas | Ilgas 4 modulis | Skyrių/milestone skaidrės; galimybė „greito kelio“ (optional) |

**Rekomenduojamas minimalus pakeitimas SOT faile:** `docs/turinio_pletra_moduliai_4_5_6.md` – skyriuje **2.1 Skaidrių / temų planas** ir ten, kur nurodyta **„Vieta eilėje“**, nustatyti, kad **4.1 Įvadas į pažangų lygį** eina **pirmas** (prieš 4.1a). Tada sinchronizuoti su `src/data/modules.json` (DATA_AGENT) ir UI (CODING_AGENT), jei skaidrių eilė saugoma ten.

---

**CHANGES:**
- Sukurtas `docs/MODULIAI_4_5_6_STRUKTUROS_ANALIZE.md` – struktūros ir mokymosi logikos analizė, rekomendacijos skaidrių išdėstymui.

**CHECKS:**
- Dokumentas peržiūrėtas pagal `turinio_pletra_moduliai_4_5_6.md` ir `CONTENT_MODULIU_ATPAZINIMAS.md`; skaidrių numeracija (4.1–4.7, 4.1a ir kt.) naudota nuosekliai.

**RISKS:**
- Jei `modules.json` jau turi fiksuotą skaidrių eilę, reikės sinchronizuoti su DATA_AGENT.
- „Greitas kelias“ (praleisti įvadinį bloką) reikalauja UI/navigacijos pakeitimų.

---

## 6. Haliucinacijų atskyrimas turinyje (papildyta peržiūra)

**Problema:** Struktūros lygmenyje (1.2 Mokymosi tikslai, 2.1 lentelė, 4.7 santrauka) **haliucinacijos** buvo neįvardintos – tema buvo tik „Žinių patikrinimas“, nors detaliame turinyje (4.6) haliucinacijos užima didelį bloką (apibrėžimas, kodėl atsiranda, kaip sumažinti, 5 taisyklės, anti-haliucinacinis šablonas, detektoriai).

**Atlikti pataisymai SOT faile `turinio_pletra_moduliai_4_5_6.md`:**
- **1.2 Mokymosi tikslai:** punktas „Žinių patikrinimas“ pakeistas į „Žinių patikrinimas ir haliucinacijos“ su aiškiu haliucinacijų apibrėžimu ir tikslais.
- **1.3 Įvado skaidrė (4.1):** punktas 5 papildytas – „Atpažinti haliucinacijas ir tikrinti DI atsakymų tikrumą“.
- **2.1 lentelė, 4.6 eilutė:** pavadinimas ir aprašymas – „Žinių patikrinimas ir haliucinacijos“, įtrauktas haliucinacijų blokas (kas tai, kodėl, kaip sumažinti, 5 taisyklės, šablonas).
- **4.7 santrauka:** apžvalgoje įrašyta „haliucinacijos/žinių patikrinimas“.
- **Skyrius 4.6 (2.2):** pridėta aiški pastaba, kad tema apima du blokus – (1) Haliucinacijos, (2) Žinių patikrinimo praktika; rekomenduojama UI rodyklių pavadinime naudoti „Žinių patikrinimas ir haliucinacijos“.

Dalyvis ir navigacija dabar aiškiai mato, kad **haliucinacijos** yra atskira, įvardinta tema (po 4.6), o ne tik „žinių patikrinimo“ dalis be pavadinimo.

---

**NEXT:**
1. Patvirtinti su užsakovo: ar 4.1 Įvadas tikrai pirmas.
2. Atnaujinti `turinio_pletra_moduliai_4_5_6.md` skyrių 2.1 ir „Vieta eilėje“ pagal rekomendacijas (4.1 pirmas).
3. Sinchronizuoti skaidrių eilę ir 4.6 pavadinimą su `modules.json` / UI (jei reikia).
