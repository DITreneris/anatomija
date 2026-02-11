# Moduliai 1–2–3: UX/UI strategijos ataskaita

> **Data:** 2026-02-11  
> **Seka:** `docs/development/AGENT_SEQUENCE_MODULIAI_1_2_3_UX_STRATEGIJA.md`  
> **Šaltiniai:** `turinio_pletra.md`, `src/data/modules.json`, `UI_UX_AGENT.md`, `MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md`, `tailwind.config.js`, `vartotojo_kelione.md`

---

## 1. Santrauka (maks. ½ puslapio)

- **Bendras įvertinimas:** Moduliai 1–2–3 jaučiami kaip **dalinai** vienas produktas. Struktūra (1 mokymasis → 2 testas → 3 praktika) aiški, turinys ir CTA rezultatų ekrane suderinti su SOT; vizualiai ir kelionės „sklandumui“ dar trūksta vienodumo (M2 ilgas scroll, M3 CTA konkretumas, M1 hook).

- **Didžiausios stiprybės:**  
  1) **Aiški 3 modulių logika** – mokymasis → patikrinimas → pritaikymas; progreso ir atrakinimo taisyklės aiškios.  
  2) **Modulio 3 praktika** – 4 scenarijai su žingsniais, hint, partial solution ir pilnais pavyzdžiais; didelė learning value.  
  3) **Modulio 2 testas** – 15 klausimų, 5 formatai, paaiškinimai ir remediation („Į Modulį 1“ / „Pradėti Modulį 3“); rezultatų CTA pagal SOT.

- **Didžiausios spragos:**  
  1) **Įėjimo hook** – pirmos 5–7 sekundės per „dokumentacinius“ (vartotojo kelionės feedbackas: „2x tikslesni“ – abstraktus, nėra diskomforto ar konkretaus pažado).  
  2) **Modulio 2 vizualinė monotonija** – viena ilga skaidrė su daug klausimų; dalis pataisymų jau įgyvendinta (brand blokai, švelnus fonas, skyrikliai, CTA gradientas), bet „kur esu“ (X iš 15) gali būti aiškesnis.  
  3) **Modulio 3 „kas toliau?“** – CTA po kiekvieno scenarijaus („Pereiti prie Scenarijaus 2“ ir t. t.) pagal PLAN_MODULIO_3_UI_UX jau planuoti; praktikos įvado „4 scenarijų kortelės su progresu“ – dalinai įgyvendinta arba planuota.

- **ROI prioritetas (vienas dalykas):** **Sustiprinti pirmą ekraną (Modulio 1 / bendras įėjimas)** – vienas konkretus pažadas arba trumpas „diskomfortas“ (pvz. „95 % žmonių rašo per silpnus promptus“) + aiškus 30 s veiksmas. Tai tiesiogiai didina engagement ir „vieno produkto“ jausmą.

---

## 2. UI/UX (§5.1)

- **Aiškumas / skaitomumas / hierarchija:** Modulio 1 turi aiškią vizualinę hierarchiją – brand/accent/slate blokai, skirtingi skaidrių tipai (action-intro, content-block, hierarchy, summary). Antraštės ir CTA daugumoje skaidrių aiškūs. Modulio 2 TestIntro po pataisymų naudoja brand ir accent blokus – atitinka M1. Silpniausia vieta: **pirmoji skaidrė (action-intro)** – hero statistikos („2x tikslesni“) be konteksto (2x ką, per kiek, lyginant su kuo) mažina aiškumą (žr. vartotojo_kelione.md).

- **Konsistencija:** Kur atitinka: M1 blokų skaidrės, Modulio 1 santrauka (summary), TestIntroSlide po 3.1 (brand/accent), klausimų kortelės po 3.2 (švelnus brand fonas). Kur dar gali būti stiprinama: **Modulio 3 practice-intro** – ar naudoja tą pačią „cover“ kalbą kaip M1 module-intro (gradientas, hero, vienas accent CTA)? **Practice-scenario** kortelės – border/rounded-xl bendri, bet modulio akcento (pvz. emerald praktikai) naudojimas padarytų M3 vizualiai atpažįstamą.

- **„Kas toliau?“ ir CTA:** Gerai: Modulio 1 santraukoje „Pereikite prie Modulio 2“, testo rezultatų ekrane „Pakartoti testą“ / „Į Modulį 1“ / „Pradėti Modulį 3“ pagal rezultatą, progreso juosta. Trūksta: **konkretūs CTA Modulio 3** kiekvienos practice-scenario skaidrės pabaigoje („Pereiti prie Scenarijaus 2“, „Į Praktikos santrauką“) – PLAN_MODULIO_3_UI_UX #10 tai adresuoja; **pirmo ekrano** vienas aiškus veiksmas per 30 s.

- **Informacijos tankis:** Modulio 1 kai kuriose content-block skaidrėse gali būti daug sekcijų (collapsible padeda). Modulio 2 – vienoje skaidrėje 15 klausimų: tankis didelis, bet skyrikliai (3.3) ir grupavimas pagal temas sumažina clutter. Modulio 3 scenarijų aprašymai (context, data, constraints, expectedFormat) + 6 žingsnių instrukcijos – informacijos pakankamai, bet struktūruota (accordion, steps).

---

## 3. Vartotojo kelionė (§5.2)

| Fazė | Įvertinimas |
|------|-------------|
| **Įėjimas** | Silpniausia vieta: emocinis hook per silpnas (vartotojo_kelione.md). Pirmas ekranas profesionali, bet „dar vienas kursas“ – nėra konflikto ar konkretaus pažado per 5–7 s. Geriausia: pasitikėjimas (švarus layoutas, progresas matomas). |
| **Orientacija** | Gerai: modulių sąrašas, progreso juosta, „X skaidrė“ / slide indeksas. Modulyje 2 „kur esu“ gali būti stiprinamas („5 iš 15 klausimų“, skyrikliai tarp grupių – jau įgyvendinta). |
| **Mokymasis** | Modulio 1: tempo ritmas skirtingas skaidrėse (trumpos veiksmo skaidrės su copy-paste vs teorinės). Veiksmo skaidrėse CTA aiškus („Kopijuoti promptą“). Santraukoje (19) – „Ką išmokote“ + CTA į M2. |
| **Praktika** | Modulio 3: 4 scenarijai su aiškia struktūra (context, data, constraints, format), žingsniai, hint, partial solution. Trūksta: aiškus „mažas laimėjimas“ po kiekvieno scenarijaus („Užbaigiau“ + vizualinis atpildas); konkretūs CTA „Pereiti prie Scenarijaus 2“ ir t. t. |
| **Grįžtamasis ryšys** | Modulio 2 rezultatai: procentas, žinutė (<70% vs ≥70%), mygtukai „Pakartoti“ / „Į Modulį 1“ / „Pradėti Modulį 3“. Remediation aiški (peržiūrėti skaidres 8–16, 3–6). |
| **Uždarymas** | Modulio 1 santrauka – uždarymas prieš testą. Modulio 2 – rezultatų ekranas su CTA. Modulio 3 – practice-summary; rekomenduojama turėti aiškų uždarymo CTA („Į modulių sąrašą“ arba „Pradėti Modulį 4“). |

---

## 4. Užduočių kokybė (§5.3)

### Top 3 stipriausi task'ai

| # | Modulys / skaidrė / task | Pagrindimas |
|---|--------------------------|-------------|
| 1 | **Modulis 3, Scenarijus 1 (slide 31), pilnas praktinis užduotis su 6 žingsniais** | Realus verslo kontekstas (Q3 ataskaita valdybai), aiškūs duomenys, partial solution kiekvienam blokui, pilnas pavyzdys – learning value ir pritaikomumas dideli. |
| 2 | **Modulis 2, Scenario klausimai (q12, q13)** | Pritaikymas realioje situacijoje (marketingo vadovas, kolegos promptas); Bloom 3–4; paaiškinimas moko, ne tik vertina. |
| 3 | **Modulis 1, veiksmo skaidrės su kopijuojamu promptu** (pvz. 6 blokų šablonas, technikos) | „Daryk dabar“ + copy-paste – tiesioginis pritaikomumas; trukmė 2–7 min pagal turinio_pletra. |

### Top 3 silpniausi + siūlomas pataisymas

| # | Modulys / skaidrė / task | Problema | Siūlomas pataisymas (S/M) |
|---|---------------------------|----------|----------------------------|
| 1 | **Modulis 1, pirmoji skaidrė (action-intro)** | Hero statistika „2x tikslesni“ be konteksto; nėra vieno aiškaus veiksmo per 30 s; CTA „Pažiūrėk struktūriškai“ per švelnus. | **M:** Pridėti 1 sakinį kontekstui (2x ką / lyginant su kuo) arba pakeisti į „diskomforto“ pažadą + vienas mygtukas „Pamatyti skirtumą per 30 s“. |
| 2 | **Modulis 3, practice-intro (slide 30)** | Jei nėra scenarijų kortelių su progresu (X iš 4 užbaigta) – orientacija silpnesnė. | **S:** Įgyvendinti scenarijų lentelę su progresu ir navigacija (PLAN_MODULIO_3_UI_UX #8 – dalinai planuota). |
| 3 | **Modulis 2, ilgas scroll vienoje skaidrėje** | 15 klausimų – kognityvinė apkrova; „kur esu“ gali būti aiškesnis. | **S:** Skyrikliai ir CTA gradientas jau įgyvendinti. Papildomai: sticky „X iš 15“ arba mini-progress virš klausimų. |

---

## 5. Vienalytiškumas (§5.4)

- **Kur vienalytiška:** **Tonas** – lietuvių kalba, DI terminologija, profesionalus B2B stilius visuose trijuose moduliuose. **Praktikos lygis** – Modulio 1 copy-paste promptai ir Modulio 3 scenarijai abu „doing“ orientuoti (veiksmas, ne tik teorija). **Progreso logika** – 1→2→3 ir CTA („Pereiti prie Modulio 2“, „Pradėti Modulį 3“) suderinti su SOT.

- **Kur ne:** **Formatas** – Modulio 1 daug skaidrių tipų (action-intro, definitions, content-block, hierarchy, summary…), Modulio 2 – praktiškai 3 (test-intro, test-section, test-results). Tai **pateisinama** (skirtinga funkcija: mokymasis vs testas), bet vizualiai M2 atrodė „mažiau spalvotas“ – dalinai išspręsta 3.1–3.4. **Tempo ritmas** – perėjimas iš M1 (daug trumpų skaidrių) į M2 (vienas ilgas scroll) jaučiamas staigiai; skyrikliai ir brand spalvos padeda. **Modulio 3** – 4 atskiros skaidrės (scenarijai), ritmas panašesnis į M1 (po skaidrę).

Siūlomas žingsnis: **S** – užtikrinti, kad M3 practice-intro vizualiai „kalba“ ta pačia cover kalba kaip M1 (hero arba gradientas + vienas CTA). **M** – vienodas principas „modulio pradžios skaidrė“ (intro): vienas hero/gradient blokas + 1–2 info blokai (brand/accent) + „Pradėti“.

---

## 6. Vizualinis individualumas ir spalvų sistema (§5.5)

### Bazinė paletė (bendra visiems moduliams)

- **Pagrindas / neutral:** `slate` (50–900) – fonai, border, antriniai tekstai. `tailwind.config.js` jau turi.
- **Tekstas:** `gray-900` / `slate-700` (light), `dark:slate-200` (dark).
- **Bendras pagrindinis srautui:** `brand` (#627d98 navy) – pasitikėjimas, pagrindinė informacija. Naudoti bendrai (header, navigacija, bendri blokai).

### 3 modulio akcentai (iš tos pačios gamos)

| Modulis | Akcentas | Tailwind | Paskirtis |
|---------|----------|----------|-----------|
| **Modulis 1** | Navy (brand) | `brand-500`, `brand-50`, `border-brand-500` | Mokymasis, pasitikėjimas – jau naudojamas. |
| **Modulis 2** | Auksas (accent) | `accent-500`, `accent-50`, `border-accent-500` | Testas, įvertinimas, „pasiekimas“. Skiriasi nuo M1, bet harmoningu su brand. |
| **Modulis 3** | Emerald | `emerald-500`, `emerald-50`, `border-emerald-500` | Praktika, veiksmas, „daryk“. Jau naudojamas safelist. |

Visos trys spalvos **iš tos pačios gamos**: brand (vėsesnis), accent (šiltas auksas), emerald (šiltas žalias) – gali būti naudojami kartu be „triukšmo“.

### Lentelė: Modulis → akcentas, ikona, cover, divider, kortelės

| Modulis | Akcentas | Ikonos | Cover / įvado skaidrė | Divider'ai | Kortelės |
|---------|----------|--------|------------------------|------------|----------|
| **1** | brand (navy) | Target (`modules.json`) | action-intro: tamsus hero, gradient tekstas, CTA gradient mygtukas | section-break, brand linija | content-block: brand/accent/slate border-l-4; blokų skaidrės – atskira spalva pagal temą |
| **2** | accent (auksas) | Brain | test-intro: gradient (violet→brand), brand + accent blokai (jau 3.1) | Skyriklis virš CTA (3.3); galima accent linija tarp klausimų grupių | Klausimų kortelės: švelnus brand fonas (3.2); rezultatai emerald/rose |
| **3** | emerald | Settings | practice-intro: rekomenduojama vienoda struktūra kaip M1 intro – hero arba gradient + accent CTA; scenarijų kortelės su emerald border/badge | Tarp scenarijų – plona emerald linija arba „Scenarijus 2“ badge | practice-scenario: rounded-xl, border; galima `border-emerald-300` arba badge emerald „Praktika“ |

### Ateičiai (Moduliai 4–6)

- Pridėti **naują modulio akcentą** iš tos pačios paletės: pvz. **violet** (Modulis 4 – pažangusis teorija), **amber** arba **rose** (Modulis 5 – testas), **cyan** (Modulis 6 – projektas). Visi jau yra `tailwind.config.js` safelist.
- Šablonas: kiekvienam moduliui `modules.json` – `icon` + tema; cover skaidrė naudoja to modulio akcentą (border, gradient, badge); divider ir kortelės – tas pats akcentas. Bazė (slate, brand pagrindui) lieka bendra.

---

## 7. Iteraciniai patobulinimai (S/M/L)

Prioritetuota. **Jau padaryta** (žr. MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md): 3.1 TestIntro blokai brand/accent, 3.2 klausimų kortelės švelnus brand, 3.3 skyriklis virš CTA, 3.4 CTA gradientas ir shadow.

| # | Pavadinimas | Dydis | Aprašymas | Kur | ROI |
|---|-------------|-------|-----------|-----|-----|
| 1 | Pirmos skaidrės hook ir 30 s veiksmas | **M** | Pridėti kontekstą „2x“ (ką / lyginant su kuo) arba „diskomforto“ pažadą + vienas aiškus CTA („Pamatyti skirtumą per 30 s“). | Modulis 1, action-intro (slide 1) | Didina engagement ir „vieno produkto“ jausmą; adresuoja vartotojo_kelione.md. |
| 2 | Modulio 3 konkretūs CTA po scenarijaus | **S** | „Pereiti prie Scenarijaus 2“ / „…Scenarijaus 3“ / „…Scenarijaus 4“ / „Į Praktikos santrauką“ vietoj bendro „Toliau“. | ModuleView footer nav arba SlideContent, Modulio 3 slides 31–34 | Sumažina frikciją „ką toliau“; atitinka PLAN_MODULIO_3_UI_UX #10. |
| 3 | Scenarijų lentelė su progresu (M3 įvadas) | **M** | 4 scenarijų kortelės su statusu (Ne pradėta / Vykdoma / Užbaigta), „X iš 4 užbaigta“, klikas – navigacija į tą skaidrę. | practice-intro (slide 30), TestPracticeSlides.tsx | Orientacija ir motyvacija; atitinka PLAN_MODULIO_3_UI_UX #8. |
| 4 | Modulio 3 cover vizualiai su emerald | **S** | Practice-intro naudoti emerald kaip modulio akcentą (border, badge „4 scenarijai“, CTA mygtukas). | practice-intro, TestPracticeSlides.tsx | Vizualinis individualumas M3; šablonas ateičiai (M6). |
| 5 | Modulio 2 „X iš 15“ sticky arba mini-progress | **S** | Virš klausimų arba sticky rodyk „5 iš 15“ (ar panašiai), kad būtų aiškiau „kur esu“. | TestSectionSlide, TestPracticeSlides.tsx | Sumažina disorientaciją ilgame scroll. |
| 6 | Rezultatų juosta paryškinimas (M2) | **S** (optional) | Pridėti CheckCircle su brand spalva arba border-l-4 rezultatų blokui („Atsakymai patikrinti“). | TestPracticeSlides.tsx, test-results | Vizualinė konsistencija su M1 celebration blokais (3.5). |
| 7 | Practice-summary uždarymo CTA | **S** | Aiškus mygtukas „Į modulių sąrašą“ arba „Pradėti Modulį 4“ (jei atrakintas). | practice-summary (slide 35) | Uždarymo fazė kelionėje – aiškus „pabaiga“. |

---

## 8. Jei trūksta informacijos

- **Planas pagal prielaidas:** Ataskaita paremta SOT (`turinio_pletra.md`, `modules.json`), esamais docs (UI_UX_AGENT, MODULIO_1_IR_2, PLAN_MODULIO_3_UI_UX) ir vartotojo_kelione.md. Nežiūrėta live UI (screenshots); skaidrių tipai ir turinys imti iš JSON ir turinio_pletra.
- **Tiksliniai klausimai (max 3), jei norima tikslinti:**  
  1) Ar turite naujų vartotojo testų atsiliepimų po 2026-02-10 (po M2 vizualinių pataisymų)?  
  2) Ar reikia įvertinti mobilų vaizdą (touch targets, scroll, CTA matomumas)?  
  3) Kuri skaidrė (id arba tipas) yra prioritetinė pirmam iteracijai – pirmoji (action-intro), TestIntro, ar practice-intro?

---

**CHANGES:** Sukurta ataskaita `docs/MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md`.  
**CHECKS:** Turinys suderintas su AGENT_SEQUENCE dokumentu §6 formatu; SOT nuorodos nurodytos.  
**RISKS:** Spalvų pasiūlymai (emerald M3) reikalauja Tailwind safelist patikros – emerald jau yra.  
**NEXT:** Įrašyti prioritetus į TODO.md; įgyvendinimui naudoti PLAN_MODULIO_3_UI_UX ir CODING_AGENT + UI_UX_AGENT.
