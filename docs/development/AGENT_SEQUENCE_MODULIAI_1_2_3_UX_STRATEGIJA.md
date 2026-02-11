# Agentų seka: Modulių 1–2–3 UX/UI strategija ir vartotojo kelionės analizė

> **Rolė:** Tu esi **Senior UX/UI strategas + Instructional Designer + Product Reviewer** (B2B mokymų platformoms). Vertini kaip vartotojas, bet sprendimus priimi kaip žmogus, kuris turi pristatyti **veikiantį, skalę atlaikantį šabloną** ateities moduliams.

---

## 1. Užduotis (TASK)

Išanalizuoti **Modulius 1–2–3** (turinį + struktūrą + vizualinį pateikimą) iš vartotojo perspektyvos ir pateikti:

1. **UI/UX** – aiškumas, skaitomumas, vizualinė hierarchija, konsistencija, „kas toliau?“ signalai, CTA, informacijos tankis.
2. **Vartotojo kelionė** – įėjimas → orientacija → mokymasis → praktika → grįžtamasis ryšys → uždarymas.
3. **Užduočių kokybė** – stipriausi ir silpniausi task'ai (learning value, aiškumas, trukmė, realus pritaikomumas, frikcija).
4. **Vienalytiškumas** – kiek moduliai yra vienas „produktas“; kur nesutampa tonas, formatas, praktikos lygis, tempo ritmas.
5. **Vizualinis individualumas** – moduliai 1–2–3 turi skirtis spalviškai, bet iš tos pačios spalvų gamos:
   - Pasiūlyti **spalvų sistemą:** 1 bendra bazinė paletė + 3 modulio akcentai (1 akcentinė spalva kiekvienam moduliui).
   - Kiekvienam moduliui: kaip išlaikyti individualumą (ikonos, cover stilius, divider'ai, kortelės), bet likti šablonu ateičiai.

**Kontekstas (modulių atpažinimas):** Žr. `docs/CONTENT_MODULIU_ATPAZINIMAS.md` – Modulis 1 = 6 Blokų Sistema (19 skaidrių), Modulis 2 = Žinių Patikrinimas (testas, 12+ klausimų), Modulis 3 = Praktinis Pritaikymas (4 scenarijai).

---

## 2. Apribojimai (CONSTRAINTS)

- **Nedaryti „didelio redesign“ be ROI:** siūlyti **iteracinius patobulinimus** su dydžiu: **Small / Medium / Large** (su trumpu pagrindimu).
- **Neperrašinėti turinio iš esmės:** fokusas į **struktūrą, UX aiškumą, užduočių kokybę, šabloniškumą, vizualinę sistemą**.
- Jei trūksta informacijos (nematai modulių turinio ar UI): pateikti **geriausią planą pagal prielaidas**, tada užduoti **maks. 3 tikslinius klausimus**, ko reikia kad įvertintum tiksliai.

---

## 3. Įvesties šaltiniai (SOURCE OF TRUTH)

| Šaltinis | Paskirtis |
|----------|-----------|
| **`turinio_pletra.md`** | Turinio SOT Moduliams 1–3: skaidrių planas, temos, CTA, praktikos aprašymai. Naudoti modulių atpažinimui: Skaidrė 1…19 = Modulio 1; Modulis 2 = testas; Modulis 3 = 4 scenarijai. |
| **`docs/CONTENT_MODULIU_ATPAZINIMAS.md`** | Vienoda modulių ir skaidrių numeracija (4.1–4.7 = tik Modulio 4; čia – tik 1, 2, 3). |
| **`src/data/modules.json`** | Faktinė struktūra: moduliai 1–3, skaidrių tipai (`action-intro`, `content-block`, `test-intro`, `test-section`, `practice-intro`, `practice-scenario`, `practice-summary` ir kt.), slide id, content. |
| **`docs/development/UI_UX_AGENT.md`** | UI/UX gairės: brand / accent / slate, a11y, vizualinė hierarchija, blokų stiliai. |
| **`docs/MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md`** | Esamas Modulio 1 vs 2 vizualinio skirtumo įvertinimas ir sprendimai (jau dalinai įgyvendinti). |
| **`tailwind.config.js`** | Dabartinė spalvų sistema: brand, accent, slate, di-visata; safelist. |
| **`vartotojo_kelione.md`** (optional) | Vartotojo kelionės ir emocinio hook'o pastabos. |

Analizę atlikti pagal šiuos šaltinius; jei vartotojas pateikia papildomą kontekstą (screenshots, konkretūs skaidrių id) – naudoti kaip papildymą.

---

## 4. Agentų seka

Užduotis **analizės ir strategijos** – reikia **išvesties dokumento** (rekomendacijos, spalvų sistema, S/M/L patobulinimai), ne tiesioginio kodo/JSON keitimo. Todėl pagrindinis atsakingas – **CONTENT_AGENT** (mokymų struktūra, kelionė, užduočių kokybė, vienalytiškumas) kartu su **UI_UX_AGENT** (UI/UX kriterijai, vizualinė hierarchija, spalvų sistema ir individualumas). Sekantys – **CODE_REVIEW_AGENT** (sanity check), **QA_AGENT** (išsaugojimas).

| Žingsnis | Agentas | Ką daro |
|----------|---------|--------|
| **1** | **CONTENT_AGENT** | Veikia kaip **Instructional Designer + Product Reviewer**. Skaito SOT (`turinio_pletra.md`, modulių struktūra iš `modules.json`). Atlieka analizę **§5.1–5.4**: vartotojo kelionė (įėjimas → orientacija → mokymasis → praktika → grįžtamasis ryšys → uždarymas), užduočių kokybė (stipriausi/silpniausi task'ai), vienalytiškumas (tonas, formatas, praktikos lygis, tempo ritmas). Pildo išvestį **tiksliai pagal §6 formatą**. **Nekeičia** kodo ar JSON – tik analizuoja ir rekomenduoja. |
| **2** | **UI_UX_AGENT** (gairės) | Veikia kaip **Senior UX/UI strategas**. Naudoja `UI_UX_AGENT.md`, `tailwind.config.js`, `MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md`. Atlieka **§5.1 (UI/UX)** ir **§5.5 (Vizualinis individualumas)**: aiškumas, skaitomumas, hierarchija, konsistencija, CTA, informacijos tankis; **spalvų sistema** (1 bazinė paletė + 3 modulio akcentai); **per modulį** – ikonos, cover stilius, divider'ai, kortelės – kaip išlaikyti individualumą šablone. Pateikia rekomendacijas CONTENT_AGENT išvesties papildymui arba atskiru bloku toje pačioje ataskaitoje. |
| **3** | **CODE_REVIEW_AGENT** (rekomenduojama) | Greita patikra: ar analizė neprieštarauja SOT; ar S/M/L prioritetai pagrįsti; ar spalvų pasiūlymas suderinamas su `tailwind.config.js` ir esama brand/accent; ar rekomendacijos įgyvendinamos (failai, komponentai). Jokių pakeitimų – tik apžvalga ir, jei reikia, 1–3 pataisymų pastabos. |
| **4** | **QA_AGENT** (optional) | Išvestį išsaugoti į `docs/` (pvz. `docs/MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md`). Jei analizė nurodo sekančius žingsnius – įrašyti į `TODO.md` (prioritetas, sritis CONTENT / DATA / CODING / UI_UX). |

**Trumpas workflow:**  
SOT + modules.json + UI_UX_AGENT.md + tailwind → **CONTENT_AGENT** (§5.1–5.4, §6) + **UI_UX_AGENT** (§5.1, §5.5, spalvų sistema) → **CODE_REVIEW_AGENT** (sanity check) → **QA_AGENT** (doc + TODO).

---

## 5. Analizės kriterijai (ką vertinti)

### 5.1 UI/UX

| Kriterijus | Klausimas / matas |
|------------|--------------------|
| **Aiškumas** | Ar antraštės, subtitles ir CTA sako vieną mintį? Ar vartotojas iš karto supranta „kas čia“ ir „ką daryti“? |
| **Skaitomumas** | Ilgos pastraipos vs chunking; kontrastas; šriftų dydis. |
| **Vizualinė hierarchija** | Ar brand / accent / slate naudojami nuosekliai? (Žr. `UI_UX_AGENT.md`.) Ar svarbiausias blokas matomas pirmas? |
| **Konsistencija** | Ar visi trys moduliai naudoja tą pačią blokų kalbą (border-l-4, rounded-xl, badge'ai)? |
| **„Kas toliau?“ signalai** | Ar yra aiškūs „Toliau“, „Pereiti prie testo“, „Pradėti scenarijų“ ir pan.? Ar progresas matomas (progress bar, „X iš Y“)? |
| **CTA** | Ar CTA mygtukai ir nuorodos konkretūs (ne tik „Toliau“)? Ar matomi ir pasiekiami (touch targets, a11y)? |
| **Informacijos tankis** | Per mažai vs per daug per vieną skaidrę; ar skaidrė „kvėpuoja“ (tarpas, skyrikliai)? |

### 5.2 Vartotojo kelionė

Vertinti **fazėmis** (ne tik skaidrė po skaidrės, bet kaip visuma):

| Fazė | Kas įvertinama |
|------|-----------------|
| **Įėjimas** | Pirmas įspūdis (Modulio 1 pradžia arba bendras įėjimas į kursą). Ar yra „hook“, aiškus pažadas, motyvacija? |
| **Orientacija** | Ar dalyvis greitai supranta, „kur esu“ ir „kiek dar liko“ (modulio/skaidrės)? |
| **Mokymasis** | Modulio 1 skaidrės: ar tempo ritmas tinkamas? Ar teorija ir praktika (copy-paste promptai) subalansuotos? |
| **Praktika** | Modulio 3: ar scenarijai aiškūs? Ar instrukcijos pakankamos? Ar yra „mažas laimėjimas“ po kiekvieno? |
| **Grįžtamasis ryšys** | Modulio 2 (testas): ar rezultatai aiškūs? Ar yra remediation / „ką toliau“? |
| **Uždarymas** | Ar modulio/skyriaus pabaiga jaučiama (santrauka, sertifikatas, „Į kitą modulį“)? |

### 5.3 Užduočių kokybė

Identifikuoti **stipriausius** ir **silpniausius** task'us (praktikos užduotys, testo klausimai, scenarijų žingsniai) pagal:

| Matas | Aprašymas |
|-------|-----------|
| **Learning value** | Kiek tikrai prideda įgūdžių / supratimo? |
| **Aiškumas** | Ar instrukcijos vienareikšmės? Ar žinoma „ką atlikti“ ir „ką gauti“? |
| **Trukmė** | Ar įvertinta realiai (per trumpa / per ilga)? |
| **Realus pritaikomumas** | Ar dalyvis gali tai pritaikyti darbe iš karto? |
| **Frikcija** | Techninės kliūtys („kur įklijuoti?“), per daug žingsnių, neaiškūs CTA. |

Išvestyje: **Top 3 stipriausi**, **Top 3 silpniausi** (su modulio + skaidrės/task identifikatoriumi ir trumpu pagrindimu).

### 5.4 Vienalytiškumas

| Aspektas | Klausimas |
|----------|-----------|
| **Tonas** | Ar visi trys moduliai „kalba“ ta pačia kalba (formalus vs draugiškas, lietuvių terminologija)? |
| **Formatas** | Ar skaidrių tipų naudojimas panašus (pvz. Modulio 1 daug tipų, Modulio 2 mažai – ar tai pateisinama)? |
| **Praktikos lygis** | Ar Modulio 1 „veiksmo“ skaidrės (copy-paste) ir Modulio 3 scenarijai atitinka tą patį „doing“ lygį? |
| **Tempo ritmas** | Ar perėjimas 1→2→3 jaučiamas sklandžiai, ar staigus (pvz. ilgas scroll testu vs trumpos skaidrės)? |

Išvestyje: **kur vienalytiška** („vienas produktas“), **kur ne** (konkretūs pavyzdžiai).

### 5.5 Vizualinis individualumas ir spalvų sistema

**Reikalavimas:** Moduliai 1–2–3 turi **skirtis spalviškai**, bet iš **tos pačios spalvų gamos**. Šablonas turi būti **skalė atlaikantis** – t. y. Moduliams 4–6 galima pridėti naujus akcentus iš tos pačios bazės.

**Ką pasiūlyti:**

1. **Bazinė paletė (bendra visiems moduliams)**  
   - Pagrindinės spalvos: pagrindas (background), tekstas, neutralūs (slate). Gali atitikti dabartinį `brand` + `slate` arba aiškiai apibrėžti „base neutral“.

2. **3 modulio akcentai**  
   - **Modulis 1:** viena akcentinė spalva (pvz. mokymo / pasitikėjimo – jau naudojamas brand navy).  
   - **Modulis 2:** kita akcentinė (pvz. testas / įvertinimas – gal amber/gold arba atskira „test“ spalva).  
   - **Modulis 3:** trečia (pvz. praktika / veiksmas – gal emerald arba accent gold).  
   Spalvos turi būti **iš tos pačios gamos** (harmoningu palete), kad neatsirastų „triukšmo“.

3. **Per modulį – individualumas be laužymo šablono**  
   - **Ikonos:** ar kiekvienas modulis turi savo ikoną (Target, Brain, Settings – jau yra `modules.json`)? Ar pakanka, ar reikia papildomų vizualinių ženklų?  
   - **Cover / įvado skaidrė:** ar Modulio 1 intro, Modulio 2 test-intro, Modulio 3 practice-intro naudoja skirtingą „cover“ stilių (gradientas, hero, kortelės), bet tą pačią struktūrą?  
   - **Divider'ai ir skyrikliai:** ar tarp skyrių naudojami vienodi principai (linija, badge, trumpas tekstas), bet skirtinga modulio akcento spalva?  
   - **Kortelės:** ar scenarijų / klausimų kortelės laikosi tos pačios geometrijos (rounded-xl, border), bet modulio akcentas naudojamas border arba badge?

Išvestyje: **konkretus spalvų pasiūlymas** (hex arba Tailwind pavadinimai) + **lentelė „Modulis → akcentas, ikona, cover, divider, kortelė“** kad ateityje būtų aišku, kaip pritaikyti šabloną Moduliams 4–6.

---

## 6. Išvesties formatas (privalo pildyti CONTENT_AGENT + UI_UX_AGENT)

Ataskaitą struktūruoti **tiksliai** taip:

---

### 1. Santrauka (maks. ½ puslapio)

- **Bendras įvertinimas:** ar moduliai 1–2–3 jaučiami kaip vienas produktas? (taip / dalinai / ne)
- **Didžiausios stiprybės** (3)
- **Didžiausios spragos** (3)
- **ROI prioritetas:** vienas „jei daryti tik vieną dalyką“ – kas duoda didžiausią naudą?

---

### 2. UI/UX (§5.1)

- **Aiškumas / skaitomumas / hierarchija:** 2–3 sakiniai + 1–2 konkretūs pavyzdžiai (skaidrė arba tipas).
- **Konsistencija:** kur atitinka brand/accent/slate, kur ne (Modulio 2 kortelės, TestIntroSlide ir t. t.).
- **„Kas toliau?“ ir CTA:** kas gerai, ko trūksta (konkretūs vietos).
- **Informacijos tankis:** kur per mažai / per daug (optional: skaidrės id arba tipas).

---

### 3. Vartotojo kelionė (§5.2)

- Kiekvienai **fazei** (įėjimas, orientacija, mokymasis, praktika, grįžtamasis ryšys, uždarymas): **1–2 sakiniai** + optional „geriausia / silpniausia“ vieta.

---

### 4. Užduočių kokybė (§5.3)

- **Top 3 stipriausi task'ai:** modulio + skaidrė/task + trumpas pagrindimas.
- **Top 3 silpniausi:** tas pats + siūlomas pataisymo kryptis (Small/Medium).

---

### 5. Vienalytiškumas (§5.4)

- **Kur vienalytiška:** tonas, formatas, praktika, tempo.
- **Kur ne:** konkretūs nesutapimai + siūlomas žingsnis (S/M/L).

---

### 6. Vizualinis individualumas ir spalvų sistema (§5.5)

- **Bazinė paletė:** kurių spalvų naudoti bendrai (vardas + hex arba Tailwind).
- **3 modulio akcentai:** Modulis 1 = …, Modulis 2 = …, Modulis 3 = … (vardas + paskirtis).
- **Lentelė:** Modulis | Akcentas | Ikonos / cover / divider / kortelės (1 eilutė per modulį).
- **Ateičiai (4–6):** kaip pridėti naują modulio akcentą nepažeidžiant bazės.

---

### 7. Iteraciniai patobulinimai (S/M/L)

Sąrašas **prioritetuotas**. Kiekvienam punktui:

- **Pavadinimas** (trumpas)
- **Dydis:** Small / Medium / Large
- **Aprašymas:** 1–2 sakiniai
- **Kur:** modulys, skaidrės tipas arba komponentas (failas jei žinomas)
- **ROI:** kodėl verta (pvz. „sumažina frikciją“, „vienodina vizualą su M1“)

**Pavyzdys:**

| # | Pavadinimas | Dydis | Aprašymas | Kur | ROI |
|---|-------------|-------|-----------|-----|-----|
| 1 | TestIntro blokai brand/accent | S | „Testo struktūra“ ir „Tikslas“ stilizuoti kaip brand ir accent blokai | Modulis 2, TestIntroSlide | Vizualinė konsistencija su M1 |

*(Pastaba: dalis jau įgyvendinta – žr. MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md; ataskaitoje pažymėti „jau padaryta“ ir siūlyti tik likusius.)*

---

### 8. Jei trūksta informacijos

- **Planas pagal prielaidas:** ką vertinti ir kokią išvadą tikėtis, remiantis SOT ir `modules.json`.
- **Maks. 3 tiksliniai klausimai:** pvz. „Ar turite vartotojo testų atsiliepimų iš Modulio 3?“ / „Ar reikia įvertinti mobilų vaizdą?“ / „Kuri skaidrė (id) yra prioritetinė?“  

---

## 7. Kokybės ir tono gairės

- **Vertinti kaip vartotojas:** „Ar aš suprantu, ką daryti? Ar jaučiuosi orientuotas? Ar CTA aiškus?“  
- **Sprendimus – kaip produktas:** „Ar šis pakeitimas padaro šabloną geresnį ateities moduliams? Ar nepažeidžiame skalės?“  
- **Iteraciškumas:** visada S/M/L + ROI; neredaguoti turinio teksto, nebent tai aiškiai „struktūra“ (pvz. CTA frazė).  
- **Terminologija:** DI (ne AI); lietuvių kalba; jei angliški terminai – trumpas paaiškinimas.

---

## 8. Nuorodos

| Kas | Kur |
|-----|-----|
| Turinio SOT (Moduliai 1–3) | `turinio_pletra.md` |
| Modulių atpažinimas | `docs/CONTENT_MODULIU_ATPAZINIMAS.md` |
| Duomenų struktūra | `src/data/modules.json` (moduliai 1–3, slides) |
| UI/UX gairės | `docs/development/UI_UX_AGENT.md` |
| Spalvos | `tailwind.config.js` |
| M1 vs M2 vizualinis įvertinimas | `docs/MODULIO_1_IR_2_VIZUALINIU_STILIU_IVERTINIMAS.md` |
| Orkestratorius | `docs/development/AGENT_ORCHESTRATOR.md` |

---

*Kai paleidi šią seką, pirmas žingsnis – **CONTENT_AGENT** su šiuo dokumentu ir §5–6 formatu (kelionė, užduotys, vienalytiškumas), kartu **UI_UX_AGENT** (UI/UX + §5.5 spalvų sistema ir individualumas). Po to – CODE_REVIEW_AGENT, tada QA_AGENT išsaugojimui.*
