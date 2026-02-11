# Moduliai 4–6: logikos, mokymosi turinio ir praktiškumo peržiūra

> **Šaltinis:** `docs/turinio_pletra_moduliai_4_5_6.md`, `docs/PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md`.  
> **Tikslas:** Apžvelgti logiką, kokios temos/potemės padengtos, kokių trūksta, ir pasiūlyti **top 3 low-hanging fruits**.

---

## 1. Logikos aspektas

| Elementas | Būklė | Pastaba |
|-----------|--------|---------|
| **Seka 4→5→6** | ✅ | Teorija → Testas → Praktika (capstone); atrakinimas 4 po 3, 5 po 4, 6 po 5 (optional ≥70% M5). |
| **Mokymosi tikslai** | ✅ | 1.2 – RAG, Deep research, tokenai, manipuliacijos, žinių patikrinimas ir haliucinacijos, projektas; 4.1 įvadas – „Po šio modulio galėsite“ (6 punktai) + „Kodėl pažangusis lygis?“ |
| **Bloom** | ✅ | M4: Suprasti + Taikyti; M5: Prisiminti/Suprasti; M6: Taikyti/Analizuoti/Kurti. |
| **Ryšiai su 1–3** | ✅ | Kiekvienoje temoje (2.1 lentelė) – stulpelis „Susijęs su moduliais 1–3“; 6 blokų nuorodos. |
| **Scaffolding M6** | ✅ | 4.0 – 6 etapų (META → INPUT+RAG → OUTPUT → REASONING → QUALITY → ADVANCED), „galite sustoti ir išsaugoti“. |
| **Slenksčiai ir CTA** | ✅ | M5: <70% / ≥70% su tekstais ir CTA; M4.7 – motyvacija į M5; M5 rezultatai – CTA į M6. |

**Išvada:** Logika nuosekli; trūksta tik tarpinių „savitikrų“ (formatinis grįžtamasis ryšys) ir aiškaus „Ką įgijote?“ po M5/M6 (tekstai dalinai yra 3.1).

---

## 2. Mokymosi turinio padengimas – temos ir potemės

### 2.1 Jau padengta (pilnai arba gausiai)

| Temos / potemės | Vieta | Turinio tipas |
|-----------------|-------|----------------|
| **Įvadas ir savokos** | 4.1, 4.1a–4.1a5, 4.1a5-style, 4.1a5-practice | Apibrėžimai, 4 dedamosios, RL/RLHF, patarimai, parametrų laukas, stiliai, praktinės užduotys (CopyButton) |
| **Įrankiai ir procesas** | 4.1-tools, 4.1-prompts, 4.1b, 4.1b2, 4.1-workflow-ex | Įrankiai (5), metodinis vs agentinis, 8 žingsnių workflow, proceso promptas, prezentacijų pavyzdys |
| **RAG** | 4.1c, 4.1d, 4.2, 4.2-open, 4.2a, 4.2a-academic, 4.2b, 4.2c | Schemos, apibrėžimas, oficialūs šaltiniai, memory/įrankiai, duomenų paruošimas, 100% strategijos, RAG analitikas |
| **Deep research** | 4.3, 4.3a | Apibrėžimas, modeliai, pavyzdinis promptas, praktinės užduotys (sekos, CoT, ToT) |
| **Tokenų ekonomika** | 4.4 (didelis blokas) | Tokenai, konteksto langas, max_tokens, 7 patarimai, šablonai, lentelės/formatavimas, konteksto apibendrinimas, ilgo dokumento workflow, „DI atmintis“ (tekstas; vizualas rekomenduojamas) |
| **Manipuliacijos** | 4.5 | Kas yra, 3 iššūkiai, verslo technikos (4), primingas, Cialdini (6), pažangusios (6–9), etika |
| **Žinių patikrinimas ir haliucinacijos** | 4.6 | Etika/duomenų saugumas, DI Aktas, haliucinacijos (apibrėžimas, kodėl, 4+5 taisyklės), anti-haliucinacinis šablonas, detektoriai, trikampis |
| **Santrauka M4** | 4.7 | Apžvalga temų, motyvacija į M5 |
| **Modulis 5** | §3 | Įvadas, slenksčiai, rezultatų ekranų tekstai; klausimų bankas (10 kl. pagal temas su teisingais atsakymais ir paaiškinimais) |
| **Modulis 6** | §4 | Tikslai, savęs vertinimo kortelė (5 kriterijų), refleksijos klausimai (3), 6 etapų scaffolding, koncepcija, scenarijus (verslo analitikas), COMBO, SUPER PROMPTAI, Duomenų tvarkymas (5 punktai), integracija su M3 |

### 2.2 Ko trūksta arba kas tik dalinai padengta

| Trūksta / silpna vieta | Detalė | Prioritetas |
|------------------------|--------|-------------|
| **4.7 – refleksija prieš testą** | Nėra bloko „Prieš testą: 3 klausimai sau“ (Ar galiu paaiškinti RAG? Ar žinau kaip mažinti haliucinacijas? Ar galiu suformuluoti neutralų promptą?). | Aukštas (lengva papildyti) |
| **Žodynėlis / glosarijus** | Terminai (RAG, Deep research, tokenas, konteksto langas, manipuliacija, haliucinacija, CoT, ToT, RLHF, Quality blokas) aiškinami tekste, bet **nėra vienoje vietoje** – sunkiau peržiūrėti ir pasikartoti. | Vidutinis |
| **Tarpinės savitikros M4** | Po RAG, Deep research, tokenų – nėra 2–3 uždaro tipo klausimų su iš karto rodomu paaiškinimu (formatinis grįžtamasis ryšys). | Vidutinis |
| **Pasiruošimo savitikra prieš M5** | Nėra 3–5 bandomųjų klausimų „Ar pasiruošę?“ be įskaitos į rezultatą. | Vidutinis |
| **„Pataisyk promptą“** | Daug copy-paste; mažai **pataisymo / pagerinimo** tipo užduoties (pvz. vienas šališkas arba silpnas promptas → dalyvis rašo pataisytą). | Vidutinis |
| **Vizualai** | „Kaip veikia DI atmintis?“ – **rekomenduojama sukurti** `di_atmintis.png`; 8 žingsnių workflow – **rekomenduojama** interaktyvi schema. Turinys aprašytas, vizualų turto dar nėra. | Žemas (priklauso nuo dizaino) |
| **Alternatyvūs M6 kontekstai** | Vienas detalus scenarijus (verslo analitikas); 2–3 projekto **tipai** įvardinti (tyrimo ataskaita, strategija, analizė), bet be atskirų pilnų scenarijų (pvz. HR, produktas). | Žemas |
| **„Kaip naudoti šį modulį“** | Nėra trumpo gido „minimalus kelias“ (4.1, 4.2, 4.3, 4.5, 4.6, 4.7) vs „pilnas“ – diferenciacija skubantiems. | Žemas |

---

## 3. Mokymosi praktiškumas

| Aspektas | Padengta | Trūksta |
|----------|----------|---------|
| **Kopijuojami šablonai** | ✅ RAG mini-šablonas, RAG analitikas, proceso promptai, 4.2b/4.2c, 4.3a sekos, tokenų šablonai, 5 taisyklės anti-haliucinacijoms, COMBO, SUPER PROMPTAI | — |
| **Praktinės užduotys** | ✅ Stiliai (3 kategorijos), HTML promptas, 4.2-open pavyzdžiai, 4.3a (CoT/ToT), tokenų konteksto apibendrinimas (3 užduotys), lentelių kūrimas (3), manipuliacijos verslo pavyzdžiai | **„Pataisyk promptą“** – viena užduotis |
| **Projekto scaffolding** | ✅ 6 etapų, savęs vertinimo kortelė, refleksijos klausimai | — |
| **Testas** | ✅ Klausimų bankas (10 kl.), įvado ir rezultatų ekranų tekstai | Pasiruošimo savitikra (optional) |
| **Ryšiai su darbe** | Dalyje pavyzdžių – verslo kontekstas | Aiškios **„Pagalvokite apie savo darbe“** miniužduotys (refleksija) tik pedagoginėje analizėje kaip rekomendacija |

**Išvada:** Praktiškumas stiprus (daug CopyButton, šablonų, etapų); didžiausia spraga – **viena pataisymo tipo užduotis** ir **4.7 refleksija prieš testą**.

---

## 4. Top 3 low-hanging fruits

**Kriterijai:** mažas darbo kiekis SOT / turinyje, didelis poveikis mokymosi logikai ar praktiškumui, be būtinų naujų UI komponentų.

---

### 1) 4.7 santraukoje pridėti „Prieš testą: 3 klausimai sau“

- **Kas:** Modulio 4 santraukos (4.7) skaidrės turinyje papildyti bloku **„Prieš testą: 3 klausimai sau“** su trimis sakiniais:
  - „Ar galiu paaiškinti, kas yra RAG ir kada jį naudoti?“
  - „Ar žinau, kaip mažinti haliucinacijas ir tikrinti šaltinius?“
  - „Ar galiu suformuluoti neutralų promptą ir atpažinti manipuliaciją?“
- **Kur:** `turinio_pletra_moduliai_4_5_6.md` – skyrius **2.2** (Temų detalė), prie 4.7 santraukos gairių; arba **2.1** lentelėje 4.7 eilutės aprašyme nurodyti „+ Prieš testą: 3 klausimai sau“.
- **Kodėl LHF:** Vienas pastraipos dydžio papildymas; stiprina metaloginį apžvelgimą ir pasiruošimą testui be papildomų skaidrių.

---

### 2) Modulio 4 žodynėlis (viena vietą SOT)

- **Kas:** Pridėti **„Modulio 4 žodynėlis“** – 8–10 terminų su **vieno sakinio** apibrėžimu: RAG, Deep research, tokenas, konteksto langas, manipuliacija (promptų), haliucinacija, Quality blokas, CoT (chain-of-thought), ToT (tree of thought), RLHF.
- **Kur:** `turinio_pletra_moduliai_4_5_6.md` – naujas poskyris **2.2** pabaigoje arba prieš **2.2** kaip **„2.1a Žodynėlis (SOT)“**; UI – viena skaidrė „Žodynėlis“ (pvz. prieš 4.7 arba kaip 4.7 dalis) arba collapsible.
- **Kodėl LHF:** Viena lentelė / sąrašas faile; nepriklauso nuo naujų komponentų – galima rodyti kaip paprastą skaidrės tipą ar sąrašą.

---

### 3) Viena „Pataisyk promptą“ praktinė užduotis

- **Kas:** Viena **praktinė užduotis** po 4.5 (manipuliacijos) arba po 4.2c: pateikti **vieną šališką arba per bendrą promptą**, instrukcija dalyviui – **pataisyti arba pagerinti** (laisvas tekstas arba pasirinkimas iš 2–3 variantų). Pvz. šališkas: „Įrodyk, kad mūsų Q3 kampanija buvo sėkminga“ → neutralus variantas.
- **Kur:** `turinio_pletra_moduliai_4_5_6.md` – **2.2**, skiltyje **Promptų manipuliacijos (4.5)** pridėti poskyrį **„Praktinė užduotis: Pataisyk promptą“** su 1 pavyzdiniu silpnu promptu ir instrukcija; CopyButton gali būti „Pavyzdinis pataisytas variantas“ (paslėptas arba po užduoties).
- **Kodėl LHF:** Viena užduotis, mažas teksto blokas; užpildo spragą „pataisyk / pagerink“ tipo praktikoje be naujo UI tipo (gali būti ta pati skaidrė kaip kitos praktinės).

---

## 5. Santrauka

| Sritis | Stiprybės | Pagrindinės spragos |
|--------|-----------|----------------------|
| **Logika** | 4→5→6, tikslai, Bloom, scaffolding, CTA | Tarpinės savitikros, „Ką įgijote?“ po M5/M6 (tekstai dalinai yra) |
| **Turinys** | Visos pagrindinės temos ir potemės padengtos (4.1–4.7, M5, M6) | 4.7 refleksija prieš testą, žodynėlis vienoje vietoje |
| **Praktiškumas** | Daug šablonų, CopyButton, 6 etapų projektas, savęs vertinimas | Viena „pataisyk promptą“ užduotis |

**Top 3 low-hanging fruits (įdiegta 2026-02):**  
1) **4.7 – „Prieš testą: 3 klausimai sau“** – įrašyta `turinio_pletra_moduliai_4_5_6.md`: skaidrės 4.7 turinys + blokas „Prieš testą: 3 klausimai sau“, 2.1 lentelėje 4.7 aprašyme.  
2) **Modulio 4 žodynėlis** – įrašyta **§2.1a Modulio 4 žodynėlis (SOT)** su 10 terminų (RAG, Deep research, tokenas, konteksto langas, manipuliacija, haliucinacija, Quality blokas, CoT, ToT, RLHF).  
3) **„Pataisyk promptą“** – įrašyta praktinė užduotis po 4.5: šališkas Q3 kampanijos pavyzdys, instrukcija pataisyti, pavyzdinis neutralus variantas (CopyButton).

---

**CHANGES:**  
- Sukurtas `docs/MODULIAI_4_5_6_LOGIKOS_TURINIO_PERZIURA.md` – logikos, turinio padengimo ir praktiškumo peržiūra bei 3 LHF.

**CHECKS:**  
- Turinys suderintas su `turinio_pletra_moduliai_4_5_6.md` ir `PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md`.

**RISKS:**  
- Žodynėlis ir „Pataisyk promptą“ reikalauja 1 naujos skaidrės ar bloko UI (jei norima atskirai rodyti).

**NEXT:**  
1. Įdiegti 3 LHF SOT faile (`turinio_pletra_moduliai_4_5_6.md`).  
2. Sinchronizuoti su `modules.json` / UI (žodynėlis, 4.7 blokas, nauja praktinė užduotis).
