# Turinio Plėtra - Promptų anatomija Mokymas

> **Autorinė mokymo medžiaga © 2024-2026 Tomas Staniulis**
> 
> Šis dokumentas aprašo "Promptų anatomija" mokymo turinio struktūrą, pedagoginę logiką ir plėtros planą.

---

## 📊 Atnaujinta Struktūra (2026-02-03)

### ✅ Nauja 3 Modulių Logika

```
📚 MODULIS 1: "6 Blokų Sistema" (MOKYMASIS) - 25 min
   ├── 1. Įvadas į Promptų Inžineriją (su DI įrankiais bloku) ✅
   ├── 1.5. Generatyvaus DI Poveikis Produktyvumui (infografikas su statistika) ✅
   ├── 2. Ką Reiškia "Promptas"? (apibrėžimai, 3 aspektai) ✅
   ├── 3. Workflow Samprata (2 schemos + 2 promptų pavyzdžiai) ✅
   ├── 4. Pagrindiniai Promptų Tipai (sisteminiai, kontekstiniai, vaidmens) ✅
   ├── 5. Prompting'o Technikos (6 technikos + kopijuojami pavyzdžiai) ✅
   ├── 6. Gero Prompto Šablonas (META + INPUT + OUTPUT) ✅
   ├── 7. Ko jau išmokome? (3→6 blokų perėjimas) ✅
   ├── 8. Hierarchinė Struktūra (6 blokų apžvalga)
   ├── 9. 1️⃣ Meta Blokas (rolė, kontekstas, tikslas)
   ├── 10. 2️⃣ Input Blokas (duomenys, faktai, apribojimai)
   ├── 11. 3️⃣ Output Blokas (formatas, struktūra, reikalavimai)
   ├── 12. Mąstymo Modeliai (CoT vs ToT)
   ├── 13. 4️⃣ Reasoning Blokas (mąstymo seka, logika)
   ├── 14. 5️⃣ Quality Control (kokybės kriterijai)
   ├── 15. 6️⃣ Advanced Parameters (temperature, reasoning gylis)
   ├── 16. 6️⃣ Advanced Parameters (II) (atsakymo kontrolė) ✅
   ├── 17. Pilnas Prompto Pavyzdys (visi 6 blokai)
   ├── 18. Prieš vs Po (palyginimas)
   └── 19. Modulio Santrauka
   
📝 MODULIS 2: "Žinių Patikrinimas" (TESTAS) - 10 min
   ├── Testo Įvadas (12 klausimų apie 6 blokus ir workflow)
   ├── Meta Blokas – Testas (2 klausimai)
   ├── Input ir Output – Testas (3 klausimai)
   ├── Reasoning ir Quality – Testas (2 klausimai)
   ├── Advanced ir Bendra – Testas (3 klausimai)
   ├── Workflow ir Technikos – Testas (2 klausimai) ✅
   └── Testo Rezultatai
   
💼 MODULIS 3: "Praktinis Pritaikymas" (PRAKTIKA) - 20 min
   ├── Praktikos Įvadas
   ├── Scenarijus 1: Pardavimų Analizė (E-commerce)
   ├── Scenarijus 2: Marketingo Planas (B2B)
   ├── Scenarijus 3: HR Dokumentas (Darbuotojų apklausa)
   ├── Scenarijus 4: Produkto Aprašymas (SaaS)
   └── Praktikos Santrauka
```

### Moduliai 4–6 (Konteksto inžinerija)

**Turinio plėtra ir struktūra** moduliams 4–6 aprašyta atskirai: **[docs/turinio_pletra_moduliai_4_5_6.md](docs/turinio_pletra_moduliai_4_5_6.md)**. Ten rasite skaidrių planą, mokymosi tikslus, Modulio 4 pradžios blokus („Po šio modulio galėsite:“, „Kodėl konteksto inžinerija?“), Modulio 5 testą ir Modulio 6 projektą.

**Progreso / atrakinimo logika (4→5→6):**
- **Modulis 4** (Konteksto inžinerija) – atrakintas po **Modulio 3** (praktikos) užbaigimo.
- **Modulis 5** (Žinių patikrinimas, pažangus) – atrakintas po **Modulio 4** užbaigimo.
- **Modulis 6** (Projekto kūrimas) – atrakintas po **Modulio 5**; rekomenduojama prieiga po ≥70% Modulio 5 teste (optional).

Implementacija: `src/utils/progress.ts` (atrakinimo taisyklės), `src/data/modules.json` (modulių 4–6 duomenys).

---

## 🆕 Nauji Skaidrių Turiniai

### Skaidrė 1.5: Generatyvaus DI Poveikis Produktyvumui ✅
**ID:** 0.5 (kode)

**Tikslas:** Parodyti mokslinius tyrimų rezultatus apie DI produktyvumo poveikį, motyvuoti mokymąsi.

**Turinys:**
- Infografikas su statistika apie generatyvaus DI poveikį produktyvumui
- Hero statistika: 56% greitesnis darbas
- 3 pagrindinės kategorijos su statistikomis
- 4 insight box'ai su pagrindiniais rezultatais
- Collapsible šaltinių sekcija su 3 moksliniais tyrimais

**Šaltiniai:**
1. Shakked Noy & Whitney Zhang - Science (2023), MIT
2. Sida Peng et al. - arXiv/Microsoft Research (2023)
3. Erik Brynjolfsson et al. - NBER (2023), Stanford & MIT

**Pastaba:** Ši skaidrė įtraukta po įvado, kad motyvuotų mokymąsi ir parodytų praktinę DI naudos vertę.

### Skaidrė 2: Ką Reiškia "Promptas"?

**Tikslas:** Įvesti pagrindinius apibrėžimus prieš gilintis į struktūrą.

**Kontekstas („Kas čia?“):** Skaidrėje – du pagrindiniai žodžiai: *promptas* ir *promptų inžinerija*. Jei dar nepažįstate – žemiau trumpai paaiškinama, ką jie reiškia ir kodėl tai svarbu praktikoje. (Atitinka `contextIntro` skaidrės turinyje.)

**Turinys:**
- **Promptas** – tekstinė instrukcija ar klausimas DI modeliui
- **Promptų inžinerija** – menas ir mokslas efektyviai bendrauti su DI

**3 Pagrindiniai Aspektai:**
| Aspektas | Aprašymas |
|----------|-----------|
| 🟣 Žmogaus ir mašinos sąveika | Gebėjimas "susikalbėti" su DI |
| 🔵 Kalbos išmanymas | Sintaksė, semantika, žodžių parinkimas |
| 🟡 Psichologija ir kūrybiškumas | Kūrybinė motyvacija, kritinis mąstymas |

**Išvada (inžinerinis požiūris):** Promptų inžinerija = Specifikacija + Struktūra + Iteracija

**Kodėl tai inžinerija:**
- **Specifikacija** – aiškus tikslas, auditorija, reikalavimai
- **Struktūra** – kontekstas, apribojimai, formatas, prioritetai
- **Iteracija** – testavimas, tikslinimas, kokybės kriterijai

**Pastaba:** kūrybiškumas padeda, bet nėra branduolys.

**Šaltiniai (gairės):**
- OpenAI Prompt Engineering Guide: https://platform.openai.com/docs/guides/prompt-engineering
- Microsoft OpenAI Prompt Engineering: https://learn.microsoft.com/azure/ai-services/openai/concepts/prompt-engineering
- Anthropic Prompt Engineering: https://docs.anthropic.com/claude/docs/prompt-engineering

---

### Skaidrė 3: Workflow Samprata

**Tikslas:** Parodyti skirtumą tarp paprasto pokalbio ir darbo workflow.

**Kontekstas (situacijos):** Dvi situacijos: (1) kai tiesiog kalbate su DI (pokalbis, idėjos, paaiškinimai) ir (2) kai naudojate jį darbui – dokumentams, analizėms, planams; tada reikia aiškesnės struktūros. Įvado tekstas skaidrėje tai nurodo.

**Turinys:**
- Schema 1: Basic naudojimas (pokalbis) - Input (klausimas) → LLM → Output (atsakymas)
- Schema 2: Workflow naudojimas (procesams) - Input (promptas + duomenys) → LLM → Output (analizė/dokumentas/planas)
- 2 kopijuojami pavyzdžiai (basic naudojimas + workflow naudojimas)

---

### Skaidrė 4: Pagrindiniai Promptų Tipai

**Tikslas:** Supažindinti su 3 promptų tipais prieš pereinant prie 6 blokų.

| Tipas | Spalva | Funkcija | Pavyzdys |
|-------|--------|----------|----------|
| **Sisteminiai** | Mėlyna | Nustato DI darbo tikslą ir funkciją | "Tu esi rinkodaros analitikas..." |
| **Kontekstiniai** | Žydra | Pateikia situacinę informaciją | "Lietuvos logistikos sektorius, 2024 m. duomenys..." |
| **Vaidmens** | Rožinė | Formuoja komunikacijos stilių ir toną | "Įsivaizduok, kad esi įmonės vadovas..." |

**Praktinis patarimas:** Promptų kombinacija leidžia gauti maksimaliai tikslų ir verslo poreikius atitinkantį rezultatą. Tai ypač svarbu ruošiant strateginius dokumentus ar analizes.

---

### Skaidrė 5: Promptavimo Technikos

**Tikslas:** Supažindinti su 6 bazinėmis technikomis, kad būtų aišku, kaip formuoti užklausas.

**Glausta logika:**
1) Pradedame nuo **zero-shot** (be konteksto)  
2) Tada **few-shots** (su pavyzdžiais)  
3) Pereiname į **minčių grandinę** (užduotis žingsniais)  
4) Parodome **promptų seką** (vienas rezultatas tampa kito pradžia)  
5) Sustipriname **instruktavimu** (formatas, tonas)  
6) Įvardijame **manipuliaciją** (ko vengti)

**Greitai kopijuojami pavyzdžiai:**
```
Zero-shot: Sukurk 1 sakinio produkto šūkį.
Few-shots: Pateik 2 šūkių pavyzdžius, tada sukurk 3 naujus.
Suplanuok: 1) koncepcija 2) planas 3) biudžetas 4) darbų grafikas.
Promptų seka: Sukurk tezes → Sudaryk planą → Parašyk įvadą.
Instruktavimas: Parašyk 200 žodžių pranešimą, formalus tonas, LT kalba.
Manipuliacija (vengti): Įrodyk, kad X geriau už Y (šališka užklausa).
```

---

### Skaidrė 6: Gero Prompto Šablonas (META + INPUT + OUTPUT)

**Tikslas:** Suskaidyti 3 pagrindinius blokus ir sujungti į vieną aiškų šabloną.

**META (kas jūs esate ir kam):**
- **Vaidmuo**: kas jūs esate (funkcija, patirtis)
- **Tikslas**: ką reikia sukurti
- **Auditorija**: kam skirtas rezultatas

**INPUT (ką turite):**
- **Duomenys**: faktai, skaičiai, kontekstas
- **Apribojimai**: laikas, biudžetas, ribos

**OUTPUT (ko norite):**
- **Formatas**: lentelė, sąrašas, dokumentas
- **Struktūra**: punktai, skyriai, seka
- **Tonas**: profesionalus, aiškus, draugiškas

**Kopijuojamas šablonas:**
```
META: Vaidmuo – [kas esate]. Tikslas – [ką sukurti]. Auditorija – [kam].
INPUT: Duomenys – [faktai/skaičiai]. Apribojimai – [laikas/biudžetas].
OUTPUT: Format – [lentelė/sąrašas/dokumentas]. Struktūra – [punktai/skyriai]. Tonas – [stilius].
```

**Pavyzdys:**
```
META: Vaidmuo – marketingo vadovas. Tikslas – paruošti SWOT analizę. Auditorija – vadovybė.
INPUT: Duomenys – produktas „EcoBox“, tikslas mažmeninė prekyba. Apribojimai – 1 puslapis.
OUTPUT: Format – lentelė su punktais. Struktūra – S/W/O/T po 3 punktus. Tonas – profesionalus, aiškus.
```

---

### Skaidrė 7: Nuo 3 blokų iki 6 blokų

**Tikslas:** Paaiškinti, kodėl prie 3 blokų pridedame Reasoning, Quality ir Advanced.

**Turinys:**
- Mapping: META / INPUT / OUTPUT → branduolys
- REASONING / QUALITY / ADVANCED → kontrolė ir patikrinamumas
- Išvada: 3 blokai = aiški užklausa; 6 blokai = aiški + nuspėjama + patikrinama

---

### Skaidrė 10: Mąstymo Modeliai

**Tikslas:** Paaiškinti, kaip per Reasoning bloką valdoma DI sprendimo logika ir kokie mąstymo modeliai egzistuoja.

**Pagrindinis klausimas:** Kaip per Reasoning bloką valdoma DI sprendimo logika?

**Svarbi pastaba:**
Tai nėra DI „natūralus mąstymas“. Tai – struktūra, kurią tu nurodai prompt'e, kad DI spręstų užduotį tinkamu būdu.

**Reasoning blokas nusprendžia:**
- ar DI eis viena nuoseklia logine seka
- ar išbandys kelias alternatyvas ir pasirinks geriausią

**1️⃣ GRANDINĖ – Chain of Thought (CoT)**

Viena linijinė minčių seka. Sprendimas vyksta žingsnis po žingsnio.

**Kada naudoti:**
- kai yra vienas aiškus atsakymas
- kai reikia loginio paaiškinimo
- kai svarbus nuoseklumas ir tikslumas

**Tinka:**
- analizėms
- skaičiavimams
- procesų paaiškinimams

**Kaip atrodo Reasoning bloke:**

```
REASONING:
1. Apibrėžk problemą
2. Išanalizuok turimus duomenis
3. Padaryk išvadą
```

**2️⃣ MEDIS – Tree of Thoughts (ToT)**

Kelios mąstymo šakos (alternatyvos). DI išbando kelis variantus ir pasirenka geriausią.

**Kada naudoti:**
- kai yra keli galimi sprendimai
- kai reikia kūrybos ar strategijos
- kai svarbu įvertinti pliusus ir minusus

**Tinka:**
- strateginiams sprendimams
- marketingui
- idėjų generavimui

**Kaip atrodo Reasoning bloke:**

```
REASONING:
1. Įvardink problemą
2. Sugeneruok 3 sprendimo variantus
3. Įvertink kiekvieno privalumus ir trūkumus
4. Pasirink geriausią
```

**Kaip pasirinkti?**

- **Aiškus atsakymas** → CoT (Chain of Thought)
- **Reikia pasirinkti iš kelių** → ToT (Tree of Thoughts)

**Verslo pavyzdys №1 – CoT (Analizė)**

```
REASONING (CoT):
1. Apibrėžk Q3 pardavimų metrikas
2. Palygink su Q2 ir praėjusių metų Q3
3. Identifikuok pagrindines tendencijas
4. Suformuluok išvadą apie Q4 prognozę
```

**Verslo pavyzdys №2 – ToT (Strategija)**

```
REASONING (ToT):
1. Įvardink problemą: mažas LinkedIn įsitraukimas
2. Sugeneruok 3 sprendimo variantus:
   a) Informacinis postas
   b) Klausimo forma
   c) Provokuojanti įžvalga
3. Įvertink kiekvieno privalumus ir trūkumus
4. Pasirink geriausią pagal B2B auditorijos poreikius
```

**Kopijuojami šablonai**

**CoT šablonas:**
```
REASONING (CoT):
1. Apibrėžk problemą
2. Išanalizuok duomenis
3. Padaryk išvadą
```

**ToT šablonas:**
```
REASONING (ToT):
1. Įvardink problemą
2. Sugeneruok [N] sprendimo variantus
3. Įvertink kiekvieno privalumus ir trūkumus
4. Pasirink geriausią
```

**Svarbi pastaba**

⚠️ **Jei nenurodysi reasoning struktūros, DI pasirinks ją atsitiktinai arba paviršutiniškai.**

👉 Geri rezultatai prasideda nuo teisingo mąstymo modelio pasirinkimo.

---

### Skaidrė 11: 4️⃣ Reasoning Blokas

**Tikslas:** Paaiškinti, kaip nurodyti DI sprendimo logiką prieš pateikiant atsakymą.

**Pagrindinis klausimas:** Kaip mąstyti prieš pateikiant atsakymą?

**Apibrėžimas:**
Reasoning blokas nurodo, kokią sprendimo logiką DI turi taikyti prieš pateikdamas atsakymą. Jis naudojamas tada, kai reikia ne tik teksto, bet pagrįsto sprendimo.

**Kada naudoti Reasoning bloką?**

✅ **Naudok, kai:**
- reikia sprendimo ar rekomendacijos
- yra keli galimi variantai
- reikia įvertinti rizikas ar kompromisus

❌ **NENAUDOK, kai:**
- reikia greito fakto
- reikia perrašyti ar sutrumpinti tekstą
- atsakymas turi būti vienas ir akivaizdus

**Trumpa (Lite) Reasoning versija – 80% atvejų**

Tinka kasdieniams verslo klausimams:
1. Kokia problema?
2. Kokie 2–3 galimi sprendimai?
3. Kuris geriausias ir kodėl?

**Pilna Reasoning struktūra (Advanced)**

1️⃣ **Apibrėžti problemą**
- Kokia tikroji problema, kurią reikia išspręsti?

2️⃣ **Analizuoti turimus duomenis**
- Ką jau žinome? Kokie faktai, apribojimai, kontekstas?

3️⃣ **Nustatyti trūkstamus elementus**
- Ko trūksta pilnam sprendimui? Kokios prielaidos daromos?

4️⃣ **Įvardinti galimus variantus**
- Kokie galimi sprendimo būdai?

5️⃣ **Įvertinti kompromisus**
- Kiekvieno varianto privalumai ir trūkumai?

6️⃣ **Išvada**
- Kurį sprendimą rekomenduoti ir kodėl?

**Verslo pavyzdys №1 – Sprendimas**

```
REASONING:
1. Problema: Įmonėje darbuotojai naudoja ChatGPT be taisyklių.
2. Duomenys: 40 darbuotojų, jautrūs duomenys, nėra DI politikos.
3. Trūksta: aiškių naudojimo ribų ir atsakomybės.
4. Variantai:
   a) Visiškai uždrausti DI
   b) Leisti naudoti be ribojimų
   c) Parengti DI politiką
5. Kompromisai:
   a) Saugu, bet mažina efektyvumą
   b) Greita, bet rizikinga
   c) Reikalauja darbo, bet valdoma
6. Išvada: Rekomenduoti DI politikos sukūrimą.
```

**Verslo pavyzdys №2 – Marketingas**

```
REASONING:
1. Problema: LinkedIn įrašai nesulaukia reakcijų.
2. Duomenys: B2B auditorija, mažas įsitraukimas.
3. Trūksta: aiškaus CTA.
4. Variantai:
   a) Informacinis postas
   b) Klausimo forma
   c) Provokuojanti įžvalga
5. Kompromisai:
   a) Saugu, bet nuobodu
   b) Skatina komentarus
   c) Rizikinga, bet viral
6. Išvada: Rinktis klausimo formą.
```

**Kopijuojamas šablonas**

```
REASONING:
1. Problema:
2. Turimi duomenys:
3. Ko trūksta:
4. Galimi variantai:
5. Kompromisai:
6. Išvada:
```

**Svarbi pastaba**

⚠️ Reasoning blokas nepadarys stebuklo, jei:
- problema apibrėžta netiksliai
- pateikti klaidingi duomenys
- neaiškus galutinis tikslas

👉 Geras reasoning prasideda nuo aiškios problemos.

---

## 🎯 Pedagoginė Logika

### Kodėl ši struktūra geresnė?

| Senas modelis | Naujas modelis |
|---------------|----------------|
| 3 moduliai = 3 atskiri mokymai | 1 nuoseklus mokymas + testas + praktika |
| Teorija išskaidyta | Visa teorija vienoje vietoje |
| Iškart į blokus | Pirma apibrėžimai → tipai → blokai |
| Testas pabaigoje | Testas po teorijos, prieš praktiką |
| 1-2 praktinės užduotys | 4 realūs verslo scenarijai |
| Tas pats pavyzdys visur | Skirtingi kontekstai: E-com, Marketing, HR, Product |

### Mokymosi Seka (Bloom's Taxonomy)

```
1. ŽINOTI (Skaidrės 1-3) → Kas yra promptas? Kokie tipai?
2. SUPRASTI (Skaidrės 4-11) → Kodėl kiekvienas blokas svarbus?
3. PRISIMINTI (Modulis 2) → Ar galiu atsakyti į klausimus?
4. TAIKYTI (Modulis 3) → Ar galiu sukurti savo promptą?
```

### Vertės pasiūlymas vartotojui (Ką gausite)

Po mokymo galėsite kurti struktūruotus DI promptus verslo ataskaitoms, marketingo planams ir HR dokumentams. Gausite kopijuojamus 6 blokų šablonus, galimybę patikrinti žinias teste ir pritaikyti sistemą keturiuose realiuose verslo scenarijuose. Šis tekstas turi būti rodomas pradiniame puslapyje (Home) arba modulių sąraše – „Ką gausite“ bloke.

---

## 📚 Modulis 1: 6 Blokų Sistema (18 Skaidrių)

### Skaidrė 1: Ta pati užduotis. Du skirtingi atsakymai. ✅ (v3 – 2026-02-11, P2 hook)
**Tikslas:** Emocinis hook per 5 sek + pirmas interaktyvus veiksmas per ~30 sek (paspaudus CTA – palyginimas toje pačioje skaidrėje).
**Tipas:** `action-intro` (v2 – vartotojo kelionė; v3 – P2: problėmos nukreipimas + 30 s CTA)

**Kontekstas:** v1 (2x statistika) buvo per abstrakti. v2: provokacija + konfliktas. v3: **problėmos nukreipimas** („Problema – ne DI. Problema – tavo promptas“) ir **aiškus CTA** („Pamatyk skirtumą per 30 sekundžių!“) – pagal MODULIAI_1_2_3_UX_STRATEGIJA_ATASKAITA.md.

**Turinys (3 dalys):**

**A) Provokacija + CTA hero bloke (5-7 sek.):**
- Tamsus fonas (gray-900 → brand-900) – vizualinis kontrastas su likusia skaidre
- Pagrindinė antraštė: "Ta pati užduotis."
- Antroji eilutė (brand-300): "Du skirtingi atsakymai."
- Konflikto sub-text (hook): "Problema – ne DI. Problema – tavo promptas." **Variant A – dviejų eilučių smūgis:** 1. eilutė 60% opacity / šviesesnė pilka; 2. eilutė bold + accent (geltona); line-height 1.5; 8–12px tarpas tarp eilučių.
- CTA mygtukas **hero viduje**: "Pamatyk skirtumą per 30 sekundžių! →" (pulse animacija iki paspaudimo; po paspaudimo per ~30 s matomas palyginimas)
- Po paspaudimo – mygtukas dingsta, atsiranda mikro-summary

**B) Side-by-side palyginimas (atsiskleidžia po CTA):**
- Kairė (rose): Tuščias promptas – "Parašyk man marketingo planą." + anotacija "Neaiškus tikslas. Nėra konteksto. DI spėlioja."
- Dešinė (emerald, ring akcentas): 6 blokų promptas – META/INPUT/OUTPUT + anotacija "Aiškus kontekstas, struktūra, rezultatas." + CopyButton
- Visa sekcija animuotai atsiskleidžia (animate-fade-in)

**C) Kontekstas (kompaktiškas, visada matomas):**
- Opacity 60% prieš reveal, 100% po reveal
- "Šiuose mokymuose išmoksite 6 blokų sistemą..." (1 sakinys)
- Outcomes (3 punktai: nuspėjami rezultatai, 6 blokai bet kuriame įrankyje, mažiau iteracijų)
- Trukmė + mygtukas „DI įrankiai – peržiūrėti“ (išskleidžia bloką apačioje)

**D) DI įrankiai (apačioje, aiškiai išskleidžiamas blokas):**
- Paspaudus „DI įrankiai – peržiūrėti“ – atsiranda pilno pločio sekcija po kontekstu
- Antraštė: „DI įrankiai – kur pradėti“
- Intro tekstas (pvz. kad 6 blokų principai veikia bet kuriame įrankyje)
- Kortelės kiekvienam įrankiui: pavadinimas (nuoroda, ne mažomis raidėmis), trumpas aprašymas, „Populiariausi naudojimo atvejai“ (user case’ai: pvz. Laiškai, Santraukos, Brainstorming)
- Įrankiai: ChatGPT, Claude, Gemini, Copilot, Grok, DeepSeek – su nuorodomis, aprašymais ir use cases

**Techninė implementacija:**
- Tipas: `action-intro`
- Komponentas: `ActionIntroSlide` (`src/components/slides/types/ContentSlides.tsx`)
- TypeScript: `ActionIntroContent` – `heroSubText`, `ctaText`; įrankiams: `toolsIntro`, `tools[].description`, `tools[].useCases` (`src/types/modules.ts`)
- Duomenys: `src/data/modules.json` – Modulio 1 skaidrė 1 `content.tools` su aprašymais ir use cases
- Senasis `IntroSlide` paliekamas kaip fallback / Modulio 4 intro

### Skaidrė 1.5: Generatyvaus DI Poveikis Produktyvumui ✅
**ID:** 0.5 (kode)

**Tikslas:** Parodyti mokslinius tyrimų rezultatus apie DI produktyvumo poveikį, motyvuoti mokymąsi.

**Turinys:**
- **Infografikas** su statistika apie generatyvaus DI poveikį produktyvumui
- **Hero statistika:** 56% greitesnis darbas
- **3 pagrindinės kategorijos:**
  - **Turinio Rašymas:** +40% greitis, +18% kokybė
  - **Programavimas:** +56% greitis, +55% kodas
  - **Klientų Aptarnavimas:** +14% bendrai, +34% pradedantiesiems
- **4 insight box'ai:**
  - 56% Greičiau
  - 18% Gerėja Kokybė
  - +34% Pradedantys
  - 15% Ekspertai
- **Išvada:** "DI perima rutinos užduotis, leidžia dirbti greičiau ir geriau, o pradedantiesiems padeda labiausiai."

**Šaltiniai (moksliniai tyrimai):**
1. **Shakked Noy & Whitney Zhang**, "Experimental Evidence on the Productivity Effects of Generative Artificial Intelligence"
   - Science (2023, Vol. 381), MIT
   - https://www.science.org/doi/10.1126/science.adh2586

2. **Sida Peng, Aadharsh Kannan, Mert Demirer et al.**, "The Impact of AI on Developer Productivity: Evidence from GitHub Copilot"
   - arXiv (2023), Microsoft Research
   - https://arxiv.org/abs/2302.06590

3. **Erik Brynjolfsson, Danielle Li & Lindsey Raymond**, "Generative AI at Work"
   - NBER (2023), Stanford & MIT
   - https://www.nber.org/papers/w31161

**Techninė implementacija:**
- Tipas: `infographic`
- Komponentas: `ProductivityInfographicSlide`
- Collapsible šaltiniai (pagal nutylėjimą paslėpti)
- Responsive dizainas su dark mode palaikymu
- UX optimizacija: kompaktiški insight box'ai, sumažinti padding'ai

**Pastaba:** Ši skaidrė įtraukta po įvado, kad motyvuotų mokymąsi ir parodytų praktinę DI naudos vertę remiantis moksliniais tyrimais.

### Skaidrė 2: Promptas ir Promptų Inžinerija ✅ (Perdarytas 2026-02-09, veiksmo modelis)
**Tikslas:** Vietoj pasyvaus skaitymo -- interaktyvus terminų atradimas per click-to-reveal korteles.
**Tipas:** `definitions` (komponentas perstruktūruotas)

**Turinys (veiksmo modelis):**

**A) Hook (tamsus, provokuojantis):**
- "Kiekvieną kartą rašydami DI -- jūs rašote promptą. Klausimas: ar darote tai struktūriškai?"
- Subtilus "Paspauskite korteles žemiau" CTA

**B) Dvi interaktyvios kortelės (click-to-expand):**
- [💬 Promptas] -- paspausk → apibrėžimas atsiskleidžia su border-left akcentu
- [🔧 Promptų Inžinerija] -- paspausk → apibrėžimas + 3 dedamosios (Specifikacija, Struktūra, Iteracija) atsiskleidžia

**C) 3 Dedamosios (rodomi po Inžinerijos atskleidimo):**
- 3 kortelės horizontaliai (sm:grid-cols-3) su slide-in animacija
- Kiekviena su ikona, aprašymu ir kopijuojamu pavyzdžiu

**D) Key Insight (rodomas kai ABU terminai atskleisti):**
- "Promptų inžinerija = Specifikacija + Struktūra + Iteracija"
- bounce-in animacija -- "payoff" momentas

**E) Šaltiniai (collapsible, rodomi tik po reveal):**
- OpenAI, Microsoft, Anthropic gairės

### Skaidrė 3: Workflow Samprata ✅
**ID:** 15 (kode)
- 2 schemos (pokalbis vs dokumentų workflow)
- 2 kopijuojami pavyzdžiai (basic + liepiantis)

### Skaidrė 4: Pagrindiniai Promptų Tipai ✅
**ID:** 3 (kode)
- Sisteminiai promptai
- Kontekstiniai promptai
- Vaidmens promptai
- Praktinis patarimas: kombinuokite visus tris

### Skaidrė 5: Prompting'o Technikos ✅
**ID:** 14 (kode)
- 6 technikos su kopijuojamais pavyzdžiais

### Skaidrė 6: Gero Prompto Šablonas ✅
**ID:** 16 (kode)
- META + INPUT + OUTPUT šablonas
- Kopijuojamas pavyzdys

### Skaidrė 7: Ko jau išmokome? ✅
**ID:** 17 (kode)
- Pereiname nuo 3 blokų (META + INPUT + OUTPUT) prie 6 blokų
- Pridedame Reasoning, Quality ir Advanced – tikrinimui ir stabilumui

### Skaidrė 8: Hierarchinė Struktūra
**ID:** 4 (kode)
- 6 blokų piramidė (nuo svarbiausio)
- Kiekvieno bloko prioritetas
- Trumpi apibūdinimai kiekvienam blokui

### Skaidrės 9-11: Pagrindiniai 3 Blokai
**ID:** 5, 6, 7 (kode)

**Skaidrė 9: 1️⃣ Meta Blokas**
- Rolė, kontekstas ir tikslas – kas esate ir ką darote?

**Skaidrė 10: 2️⃣ Input Blokas**
- Faktai, duomenys ir apribojimai – ką turite?

**Skaidrė 11: 3️⃣ Output Blokas**
- Formatas ir struktūra – ko tikitės?

### Skaidrė 12: Mąstymo Modeliai
**ID:** 8 (kode)
- CoT vs ToT – kaip valdoma DI sprendimo logika?

### Skaidrės 13-15: Papildomi 3 Blokai
**ID:** 9, 10, 11 (kode)

**Skaidrė 13: 4️⃣ Reasoning Blokas**
- Mąstymo logika – kaip DI turi mąstyti?

**Skaidrė 14: 5️⃣ Quality Control Blokas**
- Kokybės kriterijai – kaip patikrinti?

**Skaidrė 15: 6️⃣ Advanced Parameters**
- Pažangūs parametrai – kaip tiksliai kontroliuoti?

### Skaidrė 16: 6️⃣ Advanced Parameters (II) ✅
**ID:** 18 (kode)
- Atsakymo kontrolė – ilgis, fokusas, pasikartojimai
- Frequency penalty, Presence penalty, Max tokens, Top-p parametrai

### Skaidrės 17-19: Pavyzdžiai ir Santrauka

**Skaidrė 17: Pilnas Prompto Pavyzdys**
**ID:** 12 (kode)
Kiekviena skaidrė turi:
- **Pagrindinį klausimą** (pvz., "Kas esate ir ką darote?")
- **Apibrėžimą** (kas tai yra)
- **Komponentus** (ką apima)
- **Gerą vs blogą pavyzdį**
- **Kopijuojamą šabloną** ✅

**Greitas šablonų rinkinys (įterpti į kiekvieną bloką):**
```
META: Tu esi [vaidmuo]. Tikslas: [rezultatas]. Auditorija: [kam].
INPUT: Duomenys: [faktai/skaičiai]. Apribojimai: [laikas/biudžetas].
OUTPUT: Format: [struktūra]. Ilgis: [apimtis]. Tonas: [stilius].
REASONING: 1) [žingsnis] 2) [žingsnis] 3) [žingsnis]
QUALITY: ✓ [kriterijus] ✓ [kriterijus] ✓ [kriterijus]
ADVANCED: Temperature: [0.2–0.7]. Reasoning: [normal/extended].
```

- Visi 6 blokai veikia kartu
- Praktinė užduotis: sukurkite savo pilną promptą

### Skaidrė 18: Prieš vs Po
**ID:** 13 (kode)
- Nestruktūruotas promptas (40% tikslumas)
- Struktūruotas promptas (85% tikslumas)
- Rezultatų palyginimas

### Skaidrė 19: Modulio Santrauka
**ID:** 14 (kode)

**Tikslas:** Apibendrinti visą Modulio 1 turinį ir motyvuoti pereiti prie Modulio 2.

**UI Struktūra:**

1. **Įvado blokas** (emerald/brand gradient)
   - Pavadinimas: "🎉 Ką išmokote"
   - Tekstas: "Sveikiname! Dabar žinote, kaip profesionaliai struktūruoti promptus naudojant 6 blokų sistemą, workflow sampratą ir promptavimo technikas."

2. **6 Pagrindiniai Blokai** (brand spalva, 2 stulpelių grid)
   - 1. **Meta** - rolė, kontekstas ir tikslas (kas esate ir ką darote)
   - 2. **Input** - duomenys, faktai ir apribojimai (ką turite)
   - 3. **Output** - formatas, struktūra ir tonas (ko norite)
   - 4. **Reasoning** - mąstymo struktūra (CoT arba ToT)
   - 5. **Quality** - kokybės kriterijai (kaip patikrinti)
   - 6. **Advanced** - parametrai (Temperature, Reasoning depth)

3. **Workflow ir Technikos** (2 stulpelių grid)
   - **Workflow Samprata** (violet spalva):
     - Basic naudojimas - Pokalbiams, idėjoms, diskusijoms. Ribota kontrolė.
     - Workflow naudojimas - Dokumentams, procesams. Aiškus formatas ir rezultatas.
   - **Promptavimo Technikos** (amber spalva):
     - Zero-shot - be pavyzdžių
     - Few-shots - su pavyzdžiais
     - Minčių grandinė - žingsniais
     - Promptų seka - rezultatas tampa promptu
     - Instruktavimas - formatas, tonas
     - Manipuliacija - ko vengti

4. **Mąstymo Modeliai ir 3→6 Blokų Perėjimas** (2 stulpelių grid)
   - **Mąstymo Modeliai** (cyan spalva):
     - CoT (Chain of Thought) - Viena loginė seka. Tinka analizėms, skaičiavimams.
     - ToT (Tree of Thoughts) - Kelios alternatyvos. Tinka strategijai, kūrybai.
   - **Nuo 3 iki 6 Blokų** (rose spalva):
     - 3 blokai (Meta + Input + Output) = aiški užduotis
     - 6 blokai (+ Reasoning + Quality + Advanced) = aiški + nuspėjama + patikrinama
     - Pastaba: "Sudėtingoms užduotims reikia ne tik aiškumo, bet ir validavimo."

5. **Pagrindinės Idėjos** (emerald spalva, 2 stulpelių grid)
   - Hierarchija yra kritinė (nuo svarbiausio)
   - Konkretumas > bendrumas (tikslūs skaičiai)
   - Pavyzdžiai pagerina rezultatus (Few-shots)
   - Kokybės kontrolė būtina (Quality blokas)
   - Workflow > Basic (procesams)
   - Mąstymo modeliai svarbūs (CoT/ToT pasirinkimas)

6. **Motyvacija pereiti prie Modulio 2** (violet/brand gradient)
   - Pavadinimas: "🎯 Kitas Žingsnis:"
   - Tekstas: "Dabar, kai išmokote 6 blokų sistemą, workflow ir technikas, laikas patikrinti savo žinias!"
   - Info blokas: "→ Pereikite prie Modulio 2: 'Žinių Patikrinimas'"
   - Paaiškinimas: "Teste patikrinsite, ar supratote kiekvieną bloką, workflow ir technikas. Kiekvienas klausimas turi paaiškinimą, todėl tai yra ir mokymosi galimybė."

7. **Galutinė Motyvacija** (brand/accent gradient, baltas tekstas)
   - Pavadinimas: "Sėkmės su DI! 🚀"
   - Tekstas: "Struktūruoti promptai = nuspėjami rezultatai = didesnis efektyvumas"

**Vizualiniai Elementai:**
- Spalvų kodavimas: brand (blokai), violet (workflow), amber (technikos), cyan (mąstymo modeliai), rose (3→6 perėjimas), emerald (idėjos)
- Responsive dizainas: grid layout su 1-2 stulpeliais
- Dark mode palaikymas: visi elementai turi dark variantus
- CheckCircle ikonos pagrindinėse idėjose

---

## 📝 Modulis 2: Žinių Patikrinimas (Testas)

### Testo Struktūra (v2 – 2026-02-09)
- **15 klausimų** su **5 skirtingais formatais** (buvo 12 MCQ)
- Klausimai sugrupuoti pagal blokus ir temas
- Kiekvienas klausimas turi paaiškinimą IR užuominą (progressive hint)
- Galutinis rezultatas procentais + per-bloko žinių žemėlapis
- Gamifikacija: streak indikatorius, „Puikiai!" ženklelis
- **5 tipai:** MCQ (5), True/False (3), Matching (1), Ordering (1), Scenario (2)
- **Bloom taksonomija:** Remember → Understand → Apply → Analyze
- **Backward compatible:** klausimai be `type` = MCQ
- **Komponentai:** `src/components/slides/shared/questions/`

### Ko tikėtis teste
Teste bus patikrinama: **Meta bloko** vaidmuo ir turinys (2 kl.), **Input ir Output** skirtumas bei formatas (3 kl.), **Reasoning ir Quality Control** paskirtis (2 kl.), **Advanced parametrai** ir bendra 6 blokų sistema (3 kl.), **workflow** ir **promptavimo technikos** (2 kl.). Kiekvienas klausimas turi paaiškinimą po atsakymo – tai ir mokymosi galimybė, ne tik vertinimas.

### Klausimų Pasiskirstymas
| Blokas | Klausimų sk. |
|--------|--------------|
| Meta | 2 |
| Input + Output | 3 |
| Reasoning + Quality | 2 |
| Advanced + Bendra | 3 |
| Workflow + Technikos | 2 |
| **Viso** | **12** |

### Testo Formatas
```
Klausimas: "Nuo ko geriausia pradėti promptą?"
○ Nuo rolės ir tikslo (Meta) ✓
○ Nuo rezultatų formato (Output)
○ Nuo duomenų (Input)
○ Nuo parametrų (Advanced)

Paaiškinimas: "Meta blokas yra svarbiausias – 
jis nustato kontekstą visam likusiam promptui."
```

### Testo rezultatų ekrano turinys (CTA)
Rezultatų ekrane (po paskutinio klausimo) rodomi **procentas** ir **žinutė**, priklausanti nuo rezultato:

- **Jei &lt;70%:** „Rekomenduojame dar kartą peržiūrėti Modulį 1, ypač 6 blokų skyrius (skaidrės 8–16) ir workflow/technikas (skaidrės 3–6). Kiekvienas klausimas turi paaiškinimą – naudokite juos mokymuisi. Galite pakartoti testą.“
- **Jei ≥70%:** „Sveikiname! Jūsų žinios pakankamos praktikai. Pereikite prie Modulio 3: Praktinis pritaikymas – ten pritaikysite 6 blokų sistemą realiems verslo scenarijams.“

UI turi siūlyti aiškius mygtukus: „Pakartoti testą“ / „Į Modulį 1“ (kai &lt;70%) ir „Pradėti Modulį 3“ (kai ≥70%).

---

## 💼 Modulis 3: Praktinis Pritaikymas

### 6 Verslo Scenarijai

#### Scenarijus 1: Vadovo Strateginė Ataskaita
- **Kontekstas**: Ketvirčio/pusmečio rezultatų apžvalga valdybai/savininkams
- **Užduotis**: Parengti aiškią, struktūruotą ataskaitą su KPI, rizikomis ir prioritetais
- **Fokusas**: Sprendimų logika, santrauka, rekomendacijos
- **Duomenys**: Q2 2024 rezultatai – pajamos, marža, projekto būsena, rizikos
- **Formatas**: Executive Summary, 1–2 puslapiai, KPI dashboard, 3 prioritetai

#### Scenarijus 2: Pardavimų Analizė ir Veiksmų Planas
- **Kontekstas**: Pardavimų augimas, kritimas arba stagnacija
- **Užduotis**: Išanalizuoti duomenis ir pateikti konkrečius veiksmus rezultatams gerinti
- **Fokusas**: Skaičiai → įžvalgos → veiksmai
- **Duomenys**: Q3 pardavimai, metrikos vs planas, segmentų palyginimas
- **Formatas**: Analizė + 5 konkrečių veiksmų su terminais ir atsakingais

#### Scenarijus 3: Marketingo Kampanijos Planas
- **Kontekstas**: Nauja kampanija ar produkto komunikacija rinkoje
- **Užduotis**: Sukurti aiškų veiksmų planą su auditorija, kanalais ir KPI
- **Fokusas**: Struktūra, tikslumas, rezultato matavimas
- **Duomenys**: Biudžetas, tikslinė auditorija, kanalai, konkurentai
- **Formatas**: Strateginis dokumentas su kanalais, KPI, laikotarpiu

#### Scenarijus 4: Vidaus Komunikacijos Dokumentas
- **Kontekstas**: Pokyčiai organizacijoje (strategija, restruktūrizacija, nauja sistema)
- **Užduotis**: Parengti aiškų ir darbuotojams suprantamą pranešimą
- **Fokusas**: Tonas, aiškumas, pasipriešinimo mažinimas
- **Duomenys**: Kas keičiasi, kodėl, kada, ką darbuotojai turi žinoti
- **Formatas**: Vidinis pranešimas / el. laiškas, 300–500 žodžių, Q&A skyrius

#### Scenarijus 5: Personalo Sprendimų Analizė
- **Kontekstas**: Darbuotojų apklausos rezultatai, motyvacija ar efektyvumo klausimai
- **Užduotis**: Išanalizuoti situaciją ir pateikti veiksmų planą vadovybei
- **Fokusas**: Duomenų interpretacija, prioritetai, realūs sprendimai
- **Duomenys**: Apklausos rezultatai, problemos sritys, biudžetas
- **Formatas**: Ataskaita su analize ir veiksmų planu

#### Scenarijus 6: Kliento Skundo Valdymas
- **Kontekstas**: Nepatenkinto kliento situacija ar reputacinė rizika
- **Užduotis**: Parengti atsakymą klientui ir vidinį veiksmų planą problemai spręsti
- **Fokusas**: Empatija, atsakomybė, sprendimo struktūra
- **Duomenys**: Skundo aprašymas, istorija, kliento tipas
- **Formatas**: Atsakymas klientui (el. laiškas) + vidinis veiksmų planas (3–5 punktai)

### Kiekvieno Scenarijaus Struktūra
1. **Kontekstas** - Kas jūs esate ir ką darote
2. **Duomenys** - Konkretūs skaičiai ir faktai
3. **Apribojimai** - Laikas, biudžetas, komanda
4. **Laukiamas formatas** - Ką reikia sukurti
5. **Užduotis** - Sukurti pilną 6 blokų promptą
6. **Instrukcijos su žingsniais** ✅ - Detali gairė kiekvienam blokui
7. **Tarpiniai sprendimai** ✅ - Kopijuojami sprendimai kiekvienam blokui
8. **Pavyzdiniai sprendimai** ✅ - Pilni pavyzdžiai visiems scenarijams

### 🆕 3 Modulio Patobulinimai (2026-02)

#### ✨ Nauja Funkcionalumas

**1. Instrukcijos su žingsniais (Žingsnis po žingsnio)**
- Kiekvienas scenarijus turi 6 žingsnius (po vieną kiekvienam blokui)
- Kiekvienas žingsnis turi:
  - **Pavadinimą ir aprašymą** - Aiškiai nurodo, ką reikia daryti
  - **Patarimą (hint)** - Greitas patarimas, kaip užpildyti bloką
  - **Tarpinį sprendimą** - Kopijuojamas sprendimas, kurį galima naudoti kaip pagrindą
- Accordion UI - Galima išskleisti/suskleisti kiekvieną žingsnį
- Vizualus dizainas su spalvų kodavimu (brand spalva žingsniams, amber patarimams, emerald sprendimams)

**2. Tarpiniai sprendimai (Partial Solutions)**
- Kiekvienam blokui (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED)
- Kopijuojami su vienu paspaudimu
- Padeda suprasti, kaip formuoti kiekvieną bloką
- Nėra pilno sprendimo - tik pagrindas, kurį reikia pritaikyti

**3. Pavyzdiniai sprendimai (Full Templates)**
- Visi 6 scenarijai turi pilnus pavyzdinius sprendimus
- Kopijuojami su vienu paspaudimu
- Rodo, kaip visi 6 blokai veikia kartu
- Realūs verslo scenarijai su konkretūs duomenys

#### 📋 Scenarijų Detalės

**Scenarijus 1: Vadovo Strateginė Ataskaita** – KPI, rizikos, prioritetai valdybai
**Scenarijus 2: Pardavimų Analizė ir Veiksmų Planas** – Skaičiai → įžvalgos → veiksmai
**Scenarijus 3: Marketingo Kampanijos Planas** – Auditorija, kanalai, KPI
**Scenarijus 4: Vidaus Komunikacijos Dokumentas** – Pokyčių pranešimas darbuotojams
**Scenarijus 5: Personalo Sprendimų Analizė** – Apklausos analizė ir veiksmų planas
**Scenarijus 6: Kliento Skundo Valdymas** – Atsakymas klientui + vidinis veiksmų planas

Kiekvienas scenarijus turi: instrukcijas su 6 žingsniais, tarpinius sprendimus, pilną pavyzdį.

#### 🎯 Pedagoginė Vertė

**Prieš patobulinimus:**
- Užduotys buvo per abstrakčios
- Nėra aiškių gairių
- Tik 1 scenarijus turėjo pavyzdį
- Sunku suprasti, nuo ko pradėti

**Po patobulinimų:**
- ✅ Aiškios instrukcijos su žingsniais
- ✅ Tarpiniai sprendimai padeda pradėti
- ✅ Visi scenarijai turi pavyzdžius
- ✅ Struktūruotas mokymasis (žingsnis po žingsnio)
- ✅ Geresnė mokymosi patirtis

#### 🛠️ Techniniai Pakeitimai

**TypeScript Tipai (`src/types/modules.ts`):**
- Pridėti `InstructionStep` interfeisas:
  ```typescript
  interface InstructionStep {
    step: number;
    title: string;
    description: string;
    hint: string;
    partialSolution: string;
  }
  ```
- Pridėtas `TaskInstructions` interfeisas:
  ```typescript
  interface TaskInstructions {
    title: string;
    steps: InstructionStep[];
  }
  ```
- Atnaujintas `PracticalTask` interfeisas su `instructions?: TaskInstructions`

**Komponentas (`src/components/slides/shared/PracticalTask.tsx`):**
- Pridėta instrukcijų sekcija su accordion funkcionalumu
- Tarpinių sprendimų rodymas su kopijavimo funkcija
- Patarimų blokai su vizualiu akcentu
- Responsive dizainas su dark mode palaikymu

**Duomenys (`src/data/modules.json`):**
- Visi 4 scenarijai atnaujinti su `instructions` objektais
- Pridėti tarpiniai sprendimai kiekvienam žingsniui
- Pridėti pilni pavyzdiniai sprendimai visiems scenarijams

---

## 🎓 Progreso Logika

### Modulių Atrakinimas
```
Modulis 1 → Visada atrakintas
Modulis 2 → Atrakinamas baigus Modulį 1
Modulis 3 → Atrakinamas baigus Modulį 2
Sertifikatas (bazinis) → Baigus visus 3 modulius + ≥70% teste

Modulis 4 → Atrakinamas baigus Modulį 3 (pažangusis lygis)
Modulis 5 → Atrakinamas baigus Modulį 4
Modulis 6 → Atrakinamas baigus Modulį 5 (optional: ≥70% Modulio 5 teste)
```

### Progreso Sekimas
- Kiekvieno modulio procentas
- Bendra pažanga
- Užbaigtų praktinių užduočių skaičius
- Testo rezultatas

---

## 🌐 Kalbos ir Stiliaus Gairės

### Terminologija
| Angliškai | Lietuviškai |
|-----------|-------------|
| AI | DI (Dirbtinis Intelektas) |
| prompt | promptas |
| prompt engineering | promptų inžinerija |
| input | įvestis / duomenys |
| output | išvestis / rezultatas |

### Gramatika
- Vartojama "DI" vietoj "AI"
- "promptas, promptui, promptą, promptus" (be apostrofo)
- "mąstyti" vietoj "galvoti" kalbant apie DI

---

## 📋 Pavyzdžių Biblioteka

### Pilnas Prompto Pavyzdys (Scenarijus 1)

```
META:
Tu esi vyresnysis verslo analitikas su 8 metų patirtimi 
e-commerce srityje. Tavo tikslas – parengti Q3 pardavimų 
ataskaitą valdybos nariams, kurie priims strateginius Q4 sprendimus.

INPUT:
Q3 2024 duomenys:
- Pajamos: 250k EUR (+15% vs Q2)
- Užsakymai: 1200 (vidutinis čekis 208 EUR)
- Grąžinimų rodiklis: 3.2%
- Kategorijos: Elektronika 45%, Apranga 30%, Namai 25%

Apribojimai:
- Terminas: 3 dienos
- Auditorija: 6 valdybos nariai su skirtinga patirtimi

OUTPUT:
Formatas: Executive Summary (1-2 puslapiai)
Struktūra:
1) Pagrindinės metrikos (KPI dashboard)
2) Tendencijos (vs Q2, vs praėjusių metų)
3) Kategorijų analizė (top performers)
4) Rekomendacijos Q4 (3 konkrečios)

Kalba: lietuvių
Tonas: profesionalus, verslo

REASONING:
1) Apibendrinti pagrindinius KPI vienoje vietoje
2) Palyginti su ankstesniais laikotarpiais
3) Identifikuoti augimo ir problemų sritis
4) Suformuluoti 3 aiškias, veiksmais pagrįstas rekomendacijas

QUALITY:
✓ Visi skaičiai tikslūs ir patikrinti
✓ Palyginimas su Q2 pateiktas
✓ Rekomendacijos konkrečios ir įgyvendinamos
✓ Dokumentas neviršija 2 puslapių
✓ Tinkamas valdybos nariams

ADVANCED:
- Temperature: 0.3 (faktinis, tikslus tonas)
- Reasoning: normalus
- Format: struktūruotas verslo dokumentas
```

### Mini Promptai Greitam Kopijavimui

**1) Vienas sakinys (zero-shot):**
```
Sukurk vieno sakinio produkto šūkį sveikatos programėlei.
```

**2) Su pavyzdžiais (few-shots):**
```
Pavyzdžiai:
1) „Mažiau streso, daugiau energijos.“
2) „Tavo sveikata – tavo planas.“
Sukurk dar 3 panašaus stiliaus šūkius.
```

**3) Struktūruota užduotis (minčių grandinė):**
```
1) koncepcija 2) planas 3) biudžetas 4) darbų grafikas.
```

**4) Promptų seka:**
```
Sukurk 5 tezes apie darbuotojų įsitraukimą → Sudaryk plano struktūrą → Parašyk 1 pastraipos įvadą.
```

**5) Instruktavimas:**
```
Parašyk 180–220 žodžių pranešimą investuotojams. Tonas: formalus. Kalba: LT.
```

---

## 🔄 Ateities Plėtra

### Fazė 1 (Dabartinė) ✅
- ✅ 3 modulių sistema (Learn → Test → Practice)
- ✅ 16 skaidrių teorijoje (įtraukta Workflow + Technikos + Mąstymo Modeliai)
- ✅ 4 praktiniai scenarijai
- ✅ Interaktyvus testas
- ✅ Progreso sekimas
- ✅ Promptų biblioteka su kopijavimo funkcija
- ✅ Kopijuojami šablonai kiekviename bloke
- ✅ Lietuviška terminologija (DI vietoj AI)
- ✅ Modernus Navy/Gold dizainas

### Techniniai Patobulinimai (2026-02) ✅
- ✅ **Tailwind safelist** - Pataisyta dinaminės spalvų klasės produkcijoje
- ✅ **Copy button bug fix** - Individualus state kiekvienam kopijavimo mygtukui
- ✅ **Komponentų refaktorinimas** - SlideContent.tsx išskaidytas į mažesnius komponentus
- ✅ **Loading/Error states** - Pridėtas LoadingSpinner ir ErrorBoundary
- ✅ **TypeScript tipai** - Centralizuoti tipai `src/types/modules.ts`
- ✅ **Lazy loading** - Komponentai kraunami on-demand (geresnis initial load)
- ✅ **Shared komponentai** - CopyButton, TemplateBlock, PracticalTask perpanaudojami

### Nauji Patobulinimai (2026-02) ✅

**1. Nauja skaidrė: Mąstymo Modeliai** ✅
- Pridėta skaidrė apie CoT (Chain of Thought) vs ToT (Tree of Thoughts)
- Vizualizacija su nuotrauka (`mastymo_modeliai.png`)
- Detalus CoT aprašymas su pavyzdžiais
- Detalus ToT aprašymas su pavyzdžiais
- "Kaip pasirinkti?" gairės
- Kopijuojami šablonai abiems modeliams

**2. Reasoning bloko patobulinimas** ✅
- Išplėstas Reasoning blokas su:
  - "Kada naudoti / kada nenaudoti" sekcija
  - Trumpa (Lite) versija (80% atvejų)
  - Pilna (Advanced) struktūra su 6 žingsniais
  - 2 verslo pavyzdžiai su CopyButton
  - Svarbi pastaba apie reasoning struktūros svarbą

**3. 3 Modulio Patobulinimai** ✅ (Naujausi)
- **Instrukcijos su žingsniais** - Kiekvienas scenarijus turi 6 žingsnius (po vieną kiekvienam blokui)
- **Tarpiniai sprendimai** - Kopijuojami sprendimai kiekvienam blokui
- **Pavyzdiniai sprendimai** - Visi 4 scenarijai turi pilnus pavyzdžius
- **UI patobulinimai** - Accordion su instrukcijomis, kopijavimo funkcijos
- **Pedagoginė vertė** - Struktūruotas mokymasis žingsnis po žingsnio

**4. Skaidrių numerių atnaujinimas** ✅
- Skaidrė 10: Mąstymo Modeliai (nauja)
- Skaidrė 11: Reasoning Blokas (buvo 10)
- Skaidrė 12: Quality Control (buvo 11)
- Skaidrė 13: Advanced Parameters (buvo 12)
- Skaidrė 14: Pilnas Pavyzdys (buvo 13)
- Skaidrė 15: Prieš vs Po (buvo 14)
- Skaidrė 16: Santrauka (buvo 15)

**5. UI komponentai** ✅
- **ReasoningModelsSlide** - Naujas komponentas su vizualizacija
- **PracticalTask** - Patobulintas su instrukcijų sekcija
- **CopyButton** - Individualus state kiekvienam mygtukui

### Fazė 2 (Planuojama)
- [ ] Sertifikato generavimas
- [ ] Promptų išsaugojimas/eksportavimas
- [ ] Papildomi scenarijai (8-10 viso)
- [ ] ROI skaičiuoklė

### Moduliai 4–6 (Pažangusis lygis) – Turinio plėtra
- **Atskiras turinio plėtros failas:** [`docs/turinio_pletra_moduliai_4_5_6.md`](docs/turinio_pletra_moduliai_4_5_6.md)
- **Teorija (Modulis 4):** RAG, Deep research, tokenų ekonomika, promptų manipuliacijos, žinių patikrinimas
- **Testas (Modulis 5):** Žinių patikrinimas pažangiam lygiui
- **Praktika (Modulis 6):** Vienas integruotas projektas (capstone)
- Progreso logika: 4 atrakinamas po 3; 5 po 4; 6 po 5 (ir optional ≥70% Modulio 5 teste)

### Fazė 3 (Ateitis)
- [ ] DI grįžtamasis ryšys praktinėms užduotims
- [ ] Komandiniai mokymai
- [ ] Pažangusis kursas (advanced techniques) – turinys plėtojamas pagal `docs/turinio_pletra_moduliai_4_5_6.md`
- [ ] Integracija su DI įrankiais

---

## 📜 Autorinės Teisės

```
╔════════════════════════════════════════════════════════════════╗
║                                                                ║
║   PROMPTŲ ANATOMIJA - Interaktyvus DI Mokymas                   ║
║                                                                ║
║   Autorinė mokymo medžiaga                                     ║
║   © 2024-2026 Tomas Staniulis                                  ║
║   Visos teisės saugomos                                        ║
║                                                                ║
║   Mokymo turinys, metodika ir 6 blokų sistema yra              ║
║   Tomo Staniulio intelektinė nuosavybė.                        ║
║                                                                ║
║   Programinė įranga platinama pagal MIT licenciją.             ║
║                                                                ║
╚════════════════════════════════════════════════════════════════╝
```

**Kontaktai:**
- GitHub: [DITreneris](https://github.com/DITreneris)

**Versija:** 2.3.0 (2026-02)

---

## 🛠️ Techninė Architektūra

### Projekto Struktūra (Atnaujinta)

```
src/
├── components/
│   ├── slides/              # Skaidrių komponentai
│   │   ├── shared/         # Bendri komponentai
│   │   │   ├── CopyButton.tsx      # Kopijavimo mygtukas (individualus state)
│   │   │   ├── TemplateBlock.tsx   # Šablonų blokas
│   │   │   └── PracticalTask.tsx   # Praktinė užduotis
│   │   └── index.ts        # Re-exports
│   ├── ui/                 # UI komponentai
│   │   ├── LoadingSpinner.tsx      # Loading indikatorius
│   │   ├── ErrorBoundary.tsx        # Error handling
│   │   └── index.ts
│   ├── App.tsx             # Pagrindinis komponentas (lazy loading)
│   ├── HomePage.tsx
│   ├── ModulesPage.tsx
│   ├── ModuleView.tsx
│   ├── QuizPage.tsx
│   └── SlideContent.tsx    # Refaktorintas (1400 eilučių)
├── types/
│   └── modules.ts          # TypeScript tipai (30+ interfeisų)
├── utils/
│   ├── progress.ts         # Progreso valdymas
│   └── useAutoSave.ts      # Auto-save hook
└── data/
    ├── modules.json         # Modulių duomenys
    └── promptLibrary.json   # Promptų biblioteka
```

### Techninės Detalės

#### 1. Tailwind Safelist
`tailwind.config.js` dabar turi safelist dinaminėms spalvų klasėms:
- `bg-{color}-{shade}` (rose, orange, amber, emerald, brand, violet, cyan, fuchsia)
- `text-{color}-{shade}`
- `border-{color}-{shade}`
- Dark mode variantai

**Rezultatas:** Visos dinaminės klasės veikia produkcijoje ✓

#### 2. Copy Button Fix
Kiekvienas `CopyButton` komponentas turi savo state:
- Prieš: vienas `copied` state visoms kopijoms → visi mygtukai rodė "Copied"
- Po: individualus `copiedId` tracking → tik paspaustas mygtukas rodo "Copied"

#### 3. Komponentų Refaktorinimas
- **SlideContent.tsx**: 1802 → ~1400 eilučių
- Išskirti shared komponentai: `CopyButton`, `TemplateBlock`, `PracticalTask`
- Kiekvienas slide tipas dabar atskira funkcija (lengviau testuoti)

#### 4. Loading/Error States
- **LoadingSpinner**: 3 dydžiai (sm, md, lg)
- **ErrorBoundary**: Class component su retry funkcija
- **Lazy loading**: React.lazy() + Suspense visiems dideliems komponentams

#### 5. TypeScript Tipai
`src/types/modules.ts` apima:
- `Slide`, `Module`, `Quiz` interfeisus
- `TestQuestion`, `Scenario`, `PracticalTask`
- `InstructionStep`, `TaskInstructions` (nauji - 3 modulio instrukcijoms)
- `DefinitionsContent`, `PromptTypesContent`, ir kt.
- `BlockColor`, `SlideType` tipus

**Rezultatas:** Pilnas type safety + autocomplete visur ✓

#### 6. 3 Modulio Instrukcijų Sistema
- **Accordion UI** - Išskleidžiamos/suskleidžiamos instrukcijų sekcijos
- **Tarpiniai sprendimai** - Kopijuojami su CopyButton
- **Patarimų blokai** - Vizualus akcentas su amber spalva
- **Responsive dizainas** - Veikia mobile ir desktop
- **Dark mode** - Pilnas palaikymas

### Build Metrikos

- **Build laikas:** ~40s
- **Bundle dydis:** ~280KB (gzip: ~120KB)
- **Linter klaidos:** 0 ✓
- **TypeScript klaidos:** 0 ✓

---

## 📝 Changelog (2026-02)

### Versija 2.4.0 - Vartotojų testų atsakas: UX patobulinimai (2026-02-09)

Remiantis vartotojų testais (20260209_user_tests.md) su 2 dalyviais (Moduliai 1-3).

#### ✨ Nauja Funkcionalumas

**1. Nauja pirma veiksmo skaidrė (action-intro)**
- Hero blokas su statistika (2x tikslesni rezultatai)
- Micro-action: nestruktūruotas vs struktūruotas promptas su mygtuku „Pažiūrėk"
- Sutrumpintas kontekstas su collapsible DI įrankiais
- Naujas slide tipas `action-intro`, naujas `ActionIntroSlide` komponentas
- Naujas `ActionIntroContent` TypeScript interfeisas

**2. Resume / State Save mechanizmas**
- Slide pozicija išsaugoma localStorage per `useSlideNavigation`
- „Sveiki sugrįžę!" resume prompt su mygtukais „Tęsti" / „Nuo pradžios"
- Apsauga nuo duomenų praradimo su `beforeunload` event
- Persistent „Juodraštis išsaugotas" indikatorius PracticalTask komponente

**3. Kognityvinės apkrovos mažinimas**
- Supaprastinti Modulio 1 skaidrių 2-3 tekstai (definitions, workflow)
- Trumpesni aprašymai, vizualiniai elementai vietoj ilgų tekstų

**4. Grupuotas progreso indikatorius**
- Progress bar su etapų pavadinimais (Pagrindai → Šablonas → 6 Blokai → Santrauka)
- Spalvų kodavimas: brand (aktyvus), emerald (praėjęs), gray (būsimas)
- Automatinis grupavimas pagal slide tipus

#### 🛠️ Techniniai Pakeitimai

**Failai:**
- `src/types/modules.ts` – pridėtas `ActionIntroContent` interfeisas, `action-intro` tipas
- `src/components/slides/types/ContentSlides.tsx` – naujas `ActionIntroSlide` komponentas
- `src/components/slides/types/AllSlides.tsx` – re-export
- `src/components/slides/types/index.ts` – re-export
- `src/components/SlideContent.tsx` – `action-intro` case
- `src/data/modules.json` – pirma skaidrė pakeista iš `intro` į `action-intro`
- `src/utils/useSlideNavigation.ts` – slide pozicijos persist + `savedSlidePosition`
- `src/components/ModuleView.tsx` – resume prompt UI + `SlideGroupProgressBar`
- `src/components/slides/shared/PracticalTask.tsx` – beforeunload + persistent saved indicator

#### 📊 Statistikos
- **Naujų komponentų:** 2 (`ActionIntroSlide`, `SlideGroupProgressBar`)
- **Naujų TypeScript tipų:** 1 (`ActionIntroContent`)
- **Atnaujintų komponentų:** 4
- **Build:** ✓ (1414 modules, 0 errors)

---

### Versija 2.3.0 - 3 Modulio Patobulinimai: Instrukcijos ir Tarpiniai Sprendimai

#### ✨ Nauja Funkcionalumas

**1. Instrukcijos su žingsniais visiems scenarijams**
- Kiekvienas scenarijus turi 6 žingsnius (po vieną kiekvienam blokui)
- Kiekvienas žingsnis turi:
  - Pavadinimą ir aprašymą
  - Patarimą (hint) su konkrečiais pavyzdžiais
  - Tarpinį sprendimą, kurį galima kopijuoti
- Accordion UI su išskleidžiamais/suskleidžiamais žingsniais
- Vizualus dizainas su spalvų kodavimu

**2. Tarpiniai sprendimai (Partial Solutions)**
- Kiekvienam blokui (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED)
- Kopijuojami su vienu paspaudimu
- Padeda suprasti, kaip formuoti kiekvieną bloką
- Nėra pilno sprendimo - tik pagrindas, kurį reikia pritaikyti

**3. Pavyzdiniai sprendimai visiems scenarijams**
- Scenarijus 1: Pardavimų Analizė - patobulintas su instrukcijomis
- Scenarijus 2: Marketingo Planas - pridėtas pilnas pavyzdys
- Scenarijus 3: HR Dokumentas - pridėtas pilnas pavyzdys
- Scenarijus 4: Produkto Aprašymas - pridėtas pilnas pavyzdys

#### 🛠️ Techniniai Pakeitimai

**TypeScript Tipai:**
- Pridėti `InstructionStep` ir `TaskInstructions` interfeisai
- Atnaujintas `PracticalTask` interfeisas su `instructions?: TaskInstructions`

**Komponentas PracticalTask:**
- Pridėta instrukcijų sekcija su accordion funkcionalumu
- Tarpinių sprendimų rodymas su kopijavimo funkcija
- Patarimų blokai su vizualiu akcentu
- Responsive dizainas su dark mode palaikymu

**Duomenys:**
- Visi 4 scenarijai atnaujinti su `instructions` objektais
- Pridėti tarpiniai sprendimai kiekvienam žingsniui
- Pridėti pilni pavyzdiniai sprendimai visiems scenarijams

#### 📊 Statistikos

- **Atnaujintų scenarijų:** 4 (visi turi instrukcijas)
- **Naujų pavyzdinių sprendimų:** 3 (scenarijai 2, 3, 4)
- **Tarpinių sprendimų:** 24 (6 žingsnių × 4 scenarijai)
- **Naujų TypeScript tipų:** 2 (`InstructionStep`, `TaskInstructions`)

---

### Versija 2.2.0 - Mąstymo Modelių Skaidrė ir Reasoning Bloko Patobulinimas

#### ✨ Nauja Funkcionalumas

**1. Nauja Skaidrė: Mąstymo Modeliai (Skaidrė 10)**
- Pridėta nauja skaidrė apie Chain of Thought (CoT) vs Tree of Thoughts (ToT)
- Vizualizacija su nuotrauka (`mastymo_modeliai.png`)
- Detalus CoT (Grandinė) aprašymas:
  - Kada naudoti
  - Kam tinka
  - Verslo pavyzdys su CopyButton
- Detalus ToT (Medis) aprašymas:
  - Kada naudoti
  - Kam tinka
  - Verslo pavyzdys su CopyButton
- "Kaip pasirinkti?" sekcija su aiškiomis gairėmis
- Kopijuojami šablonai abiems modeliams
- Svarbi pastaba apie reasoning struktūros svarbą

**2. Reasoning Bloko Patobulinimas (Skaidrė 11)**
- Išplėsta "Kada naudoti / kada nenaudoti" sekcija su ✅/❌ indikatoriais
- Pridėta Trumpa (Lite) versija – 80% atvejų
- Patobulinta Pilna (Advanced) struktūra su 6 žingsniais
- Pridėti 2 verslo pavyzdžiai su CopyButton:
  - Pavyzdys №1 – Sprendimas (DI politikos klausimas)
  - Pavyzdys №2 – Marketingas (LinkedIn įrašai)
- Atnaujintas kopijuojamas šablonas su pilna 6 žingsnių struktūra
- Pridėta svarbi pastaba apie reasoning struktūros apribojimus

#### 🔄 Struktūros Pakeitimai

- **Skaidrių numerių atnaujinimas:**
  - Skaidrė 10: Mąstymo Modeliai (nauja)
  - Skaidrė 11: Reasoning Blokas (buvo 10)
  - Skaidrė 12: Quality Control (buvo 11)
  - Skaidrė 13: Advanced Parameters (buvo 12)
  - Skaidrė 14: Pilnas Pavyzdys (buvo 13)
  - Skaidrė 15: Prieš vs Po (buvo 14)
  - Skaidrė 16: Santrauka (buvo 15)
- **Bendras skaidrių skaičius:** 15 → 16 skaidrių

#### 🛠️ Techniniai Pakeitimai

- **Naujas UI komponentas:** `ReasoningModelsSlide`
  - Struktūra: Klausimas → Vizualizacija → Grandinė → Medis → Kaip pasirinkti → Šablonai → Pastaba
  - Responsive dizainas su grid layout
  - Dark mode palaikymas
  - CopyButton funkcionalumas visiems pavyzdžiams
  
- **Atnaujinta `modules.json`:**
  - Pridėta nauja skaidrė su `id: 8`, `type: "reasoning-models"`
  - Atnaujinti visų vėlesnių skaidrių ID
  
- **Atnaujinta `types/modules.ts`:**
  - Pridėtas naujas tipas `'reasoning-models'` į `SlideType` union
  
- **Atnaujinta `SlideContent.tsx`:**
  - Pridėtas naujas case `'reasoning-models'` į switch statement
  - Sukurtas `ReasoningModelsSlide` komponentas (~200 eilučių)
  - Patobulintas `ReasoningBlockSlide` komponentas (~250 eilučių)

#### 📁 Failų Pakeitimai

- ✅ `turinio_pletra.md` - Pridėta nauja skaidrės aprašymas, atnaujinti numeriai
- ✅ `src/data/modules.json` - Pridėta nauja skaidrė, atnaujinti ID
- ✅ `src/types/modules.ts` - Pridėtas naujas tipas
- ✅ `src/components/SlideContent.tsx` - Pridėti nauji komponentai
- ✅ `public/mastymo_modeliai.png` - Pridėta vizualizacijos nuotrauka

#### 📊 Statistikos

- **Naujų komponentų:** 1 (`ReasoningModelsSlide`)
- **Atnaujintų komponentų:** 1 (`ReasoningBlockSlide`)
- **Naujų skaidrių:** 1 (Mąstymo Modeliai)
- **Atnaujintų skaidrių:** 1 (Reasoning Blokas)
- **Naujų pavyzdžių:** 4 (2 CoT, 2 ToT)
- **Naujų šablonų:** 2 (CoT ir ToT)
