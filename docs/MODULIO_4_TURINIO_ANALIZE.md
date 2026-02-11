# Modulio 4 turinio analizė: logika, struktūra, pedagoginė nauda, pasiūlymai

> **Data:** 2026-02-07  
> **SOT:** `docs/turinio_pletra_moduliai_4_5_6.md`  
> **Atpažinimas:** `docs/CONTENT_MODULIU_ATPAZINIMAS.md` (4.1–4.7 = tik Modulio 4 skaidrės)

---

## 1. Trumpa apžvalga

**Modulis 4** – „Konteksto inžinerija“ (pažangusis teorijos modulis). Tikslas: po Modulių 1–3 įtvirtinti 6 blokų sistemą ir įvesti RAG, Deep research, tokenų ekonomiką, promptų manipuliacijas bei žinių patikrinimą. Trukmė ~30–35 min.

---

## 2. Logikos analizė

### 2.1 Stiprybės

- **Aiški prielaida:** Dalyvis baigė 1–3 ir išmano 6 blokų sistemą – tai leidžia ned kartoti bazės, o kilti aukščiau.
- **Nuosekli tema po temos:** Konceptualus rėmas (4.0–4.1a) → praktinis procesas (4.1b) → konceptualios schemos (4.1c, 4.1d) → RAG (4.2) → Deep research (4.3) → tokenai (4.4) → manipuliacijos (4.5) → patikrinimas (4.6) → santrauka (4.7). RAG prieš Deep research yra logiška (RAG = šaltiniai; Deep research = multi-step + RAG).
- **Ryšiai su Moduliu 1:** Kiekvienoje temoje dokumente nurodytas „Ryšys su 6 blokais / Moduliu 1“ – padeda neprarasti siūlo.
- **„Vieta eilėje“ dokumentuota:** Pvz. 4.1b eina po 4.1a–4.1a5 ir 4.1; 4.1c/4.1d – prieš 4.2 RAG. Tai užtikrina, kad implementuotojai laikytųsi tos pačios sekos.

### 2.2 Silpnos vietos ir rizikos

| Problema | Priežastis |
|----------|------------|
| **4.1 eilė vs lentelė** | Lentelėje 4.1 („Įvadas į konteksto inžineriją“) eina *po* 4.1a5; „Vieta eilėje“ teigia: 4.1a → 4.1a2 → … → 4.1a5 → **4.1** → 4.1b. Tai sutampa, bet skaidrių ID painiojasi: yra 4.1, 4.1a, 4.1a2 … 4.1b, 4.1b2, 4.1c, 4.1d, 4.1-tools, 4.1-prompts, 4.1-system-master. Naujokui sunku iš karto suprasti, kuri skaidrė kur eina. |
| **Tokenų ekonomika (4.4) vėlai** | 4.4 eina po RAG ir Deep research. Konteksto langas ir tokenai tiesiogiai susiję su RAG (kiek konteksto „telpa“). Galima argumentuoti, kad trumpas „konteksto lango“ įvadas būtų naudingas jau prieš 4.2 (RAG), o pilna 4.4 – po 4.3. |
| **Manipuliacijos (4.5) ir patikrinimas (4.6)** | Logiška: pirma „ko vengti“ (manipuliacijos), paskui „kaip tikrinti“ (žinių patikrinimas, haliucinacijos). Etika ir DI Aktas (4.6 kontekste) gerai sujungia 4.5 → 4.6. |
| **Per daug sub-skaidrių 4.1** | 4.1a, 4.1a2, 4.1a3, 4.1a4, 4.1a5, 4.1a5-style, 4.1a5-practice, 4.1, 4.1-tools, 4.1-prompts, 4.1-system-master, 4.1b, 4.1b2, 4.1c, 4.1d – ilga „įvado“ dalis. Pedagogiškai gera (pamatinės sąvokos pirmiausia), bet rizika – nuovargis prieš pasiekus RAG. |

### 2.3 Pasiūlymai logikai

1. **Vienas „Modulio 4 skaidrių eilės“ lapas** (SOT faile arba CONTENT doc): vienoje vietoje pilna rekomenduojama seka (4.0 → 4.1a → … → 4.7) su trumpu pateisinimu prie kiekvieno žingsnio („Kodėl čia?“). Tai padėtų ir turinio, ir JSON sinchronizacijai.
2. **Trumpas „Konteksto langas“ blokas prieš RAG:** vienoje skaidrėje arba 4.2 įvade 1–2 sakiniai: „RAG dažnai priklauso nuo to, kiek konteksto (tokenų) gali įtraukti; daugiau – 4.4.“ Taip sumažinama „kodėl 4.4 taip vėlai?“ kognityvinė spraga.
3. **Sutrumpinti arba perkelti dalį 4.1:** Pvz. 4.1a5-style ir 4.1a5-practice galima žymėti kaip „optional / giluminiam mokymui“ arba perkelti po 4.2 (praktika po RAG), kad 4.1 blokas būtų glaustesnis ir greičiau pasiektų RAG.

---

## 3. Struktūros analizė

### 3.1 Stiprybės

- **Fiksuota numeracija 4.0–4.7:** Pagrindinės temos (4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7) aiškios; sub-skaidrės (4.1a, 4.2-open, 4.2a ir kt.) leidžia plėsti be modulių painiavos (CONTENT_MODULIU_ATPAZINIMAS.md: 4.1–4.7 rezervuota tik Moduliui 4).
- **Žodynėlis (2.1a):** 8–10 terminų vienoje vietoje – gerai atpažinimui ir kartojimui.
- **Kiekvienai temai – „Ryšys su moduliais 1–3“** lentelėje (2.1) – struktūra skaidri.

### 3.2 Silpnos vietos

- **Pavadinimų ilgumas:** Skaidrės pavadinimai kartais labai ilgi (pvz. „Darbas su RAG: memory, išoriniai įrankiai ir duomenų paruošimas“). UI gali reikalauti sutrumpintų variantų.
- **BONUS / optional ne visur aiškūs:** 4.1b2 pažymėtas kaip BONUS; 4.1a5-style ir 4.1a5-practice – ne. Jei dalis turinio laikoma neprivaloma, verta nuosekliai žymėti (pvz. „Optional“ arba „Giluminiam mokymui“).
- **4.6 apimtis:** 4.6 apima ir haliucinacijas, ir žinių patikrinimą, ir etiką/duomenų saugumą, ir DI Aktą. Turinio daug; gali būti skaidoma į 4.6a (haliucinacijos + kaip mažinti) ir 4.6b (žinių patikrinimas + etika/reguliavimas), arba išlaikyti vieną bloką, bet su aiškiomis vidinėmis antraštėmis.

### 3.3 Pasiūlymai struktūrai

1. Kiekvienai skaidrei SOT faile pridėti **trumpą pavadinimą UI** (pvz. „RAG: memory ir įrankiai“), jei skiriasi nuo pilno.
2. Nuosekliai žymėti **optional/BONUS** skaidres (viena konvencija dokumente).
3. Santraukoje (4.7) **aiškiai išvardinti 5–6 pagrindines temas** (RAG, Deep research, tokenai, manipuliacijos, patikrinimas/haliucinacijos) su vienu sakinio „ką išmokote“ – kad struktūra atsispindėtų ir pabaigoje.

---

## 4. Pedagoginė nauda

### 4.1 Stiprybės

- **Bloom atitikmuo:** Modulis 4 apibrėžtas kaip **Suprasti** + **Taikyti** (pavyzdžiai, šablonai). Tai atitinka dokumentą (§5.1).
- **Kopijuojami šablonai ir promptai:** Beveik kiekvienoje skaidrėje – CopyButton verti pavyzdžiai (RAG mini-šablonas, anti-haliucinacinis promptas, tokenų taupymo frazės ir kt.) – didina pritaikomumą.
- **„3 klausimai sau“ prieš testą (4.7):** Metakognicinis žingsnis – ar galiu paaiškinti RAG, ar žinau, kaip mažinti haliucinacijas, ar galiu atpažinti manipuliacijas. Gerai paruošia Modulio 5.
- **Kartojimo skaidrė (4.1a4) ir parametrų laukas (4.1a5):** Aiškiai sujungia Modulį 1 su 4 – „kur esi“ ir „ką darai toliau“.
- **Praktinės užduotys įvairiose temose:** Stiliai (4.1a5-practice), RAG analitikas, „Pataisyk promptą“ (4.5), konteksto apibendrinimas (4.4), refleksija (LR Konstitucija) – ne tik teorija.
- **Ryšys su RLHF (4.1a3):** Trumpas paaiškinimas, kodėl DI „stengiasi įtikti“ ir kaip tai susiję su Quality – padeda suprasti, kodėl žinių patikrinimas ir neutralūs promptai svarbūs.

### 4.2 Silpnos vietos

- **Kognityvinė apkrova:** Daug naujų sąvokų vienu metu (RAG, Deep research, CoT, ToT, tokenai, manipuliacijos, haliucinacijos, DI Aktas). Rizika – paviršutiniškas įsiminimas be gilesnio įsisavinimo.
- **Praktika fragmentuota:** Praktikos įdėtos į atskiras skaidres (stiliai, RAG, manipuliacijos, tokenai), bet nėra vienos „Modulio 4 miniprojekto“ užduoties, kuri sujungtų RAG + Deep research + patikrinimą (tai atidedama į Modulį 6).
- **Skirtingi auditorijos segmentai:** Akademinis (4.2a-academic, PaperGuide, Scite) ir verslo (RAG analitikas, manipuliacijos versle) maišomi tame pačiame modulyje. Tai pliusas (kiekvienas randa savo), bet gali būti naudinga aiškiai pažymėti „Studentams“ / „Verslui“ kur reikia.

### 4.3 Pasiūlymai pedagogikai

1. **Santraukoje (4.7) stiprinti ryšius tarp temų:** Ne tik sąrašas, bet 2–3 sakiniai tipo „RAG ir žinių patikrinimas kartu mažina haliucinacijas“; „Tokenų ekonomika leidžia į kontekstą įtraukti daugiau šaltinių (RAG)“. Tai padėtų Bloom „Suprasti“ lygmeniui.
2. **Viena „bridžinė“ praktika po 4.3 arba prieš 4.4:** Pvz. „Naudodami RAG ir Deep research stiliaus promptą, paruoškite vieną trumpą atsakymą su šaltiniais“ – 5–10 min, be pilno Modulio 6 projekto.
3. **Pasirinktinas kelias:** Pažymėti 2–3 skaidres kaip „Verslui“ ir 2–3 „Studentams / mokslui“, kad skirtingi dalyviai galėtų pasirinkti gilintis (likusi dalis bendra).
4. **Modulio 4 pradžioje (4.1) aiškiai pakartoti 6 tikslus:** Jau yra „Po šio modulio galėsite“; galima pridėti trumpą „Šiame modulyje susieti visi 6 blokai su RAG, patikrinimu ir tokenais“ – siekiant orientacijos.

---

## 5. Santrauka: prioritetiniai patobulinimai

| Prioritetas | Pasiūlymas | Kur taikyti | Statusas |
|-------------|------------|-------------|----------|
| **Aukštas** | Sudaryti vieną oficialų „Modulio 4 skaidrių eilės“ dokumentą su motyvacija kiekvienam žingsniui. | SOT (turinio_pletra_moduliai_4_5_6.md) arba CONTENT | ✅ **Įgyvendinta:** `docs/MODULIO_4_SKAIDRIU_EILES.md`; nuoroda SOT §2.1 |
| **Aukštas** | Santraukoje (4.7) aiškiai stiprinti ryšius tarp RAG, Deep research, tokenų, manipuliacijų ir patikrinimo (2–3 sakiniai). | SOT – skaidrė 4.7 | ✅ **Įgyvendinta:** SOT 4.7 – blokas „Ryšiai tarp temų“ (3 sakiniai) |
| **Vidurinis** | Prieš RAG (4.2) įtraukti 1–2 sakinius apie konteksto langą/tokenus; nuoroda į 4.4. | SOT – 4.2 pristatymas | ✅ **Įgyvendinta:** SOT 4.2 – „Kontekstas ir tokenai (nuoroda į 4.4)“ |
| **Vidurinis** | Nuosekliai žymėti optional/BONUS skaidres; suteikti trumpus UI pavadinimus ilgoms skaidrėms. | SOT – 2.1 lentelė ir gairės | — |
| **Žemas** | Viena trumpa „bridžinė“ praktika (RAG + Deep research + šaltiniai) po 4.3 arba prieš 4.4. | SOT – naujas blokas arba 4.3a pratęsimas | — |
| **Žemas** | Pasirinktinai žymėti skaidres „Verslui“ / „Studentams“, kur tema labiau specializuota. | SOT – 2.1 arba 2.2 | — |

---

## 6. CHANGES / CHECKS / RISKS / NEXT (pagal workspace rules)

**CHANGES:**
- Sukurtas `docs/MODULIO_4_TURINIO_ANALIZE.md` – analizė, logika, struktūra, pedagogika, pasiūlymai.
- **2026-02-07 (QA atnaujinimas):** Pasiūlymai 1–3 įgyvendinti; prioritetų lentelėje pažymėtas statusas (✅ įgyvendinta); NEXT atnaujintas.

**CHECKS:**
- Skaityta SOT `docs/turinio_pletra_moduliai_4_5_6.md` (Modulio 4 skyriai, 2.1 lentelė, 2.2 temų detalė, §5 pedagogika, §6 integracija).
- Naudota `docs/CONTENT_MODULIU_ATPAZINIMAS.md` – 4.1–4.7 = tik Modulio 4.

**RISKS:**
- Pasiūlymai keičia tik dokumentaciją; faktinis turinys (JSON, UI) nekeistas – reikės DATA_AGENT/CODING_AGENT, jei bus toliau įgyvendinama.
- Eilės dokumentas sukurtas; `modules.json` skaidrių eilė turi atitikti `docs/MODULIO_4_SKAIDRIU_EILES.md`.

**NEXT:**
1. ~~Priimti sprendimą dėl prioritetinių pasiūlymų (4.7 ryšiai, eilės lapas).~~ – **Atlikta.**
2. ~~Papildyti SOT 4.7 ir 4.2.~~ – **Atlikta.**
3. Sinchronizuoti `modules.json` su `MODULIO_4_SKAIDRIU_EILES.md` (DATA_AGENT), jei eilė dar skiriasi.
4. Įgyvendinti likusius pasiūlymus (optional/BONUS žymėjimai, trumpi UI pavadinimai, bridžinė praktika, Verslui/Studentams) – pagal poreikį.
