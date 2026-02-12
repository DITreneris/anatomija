# Turinio plėtra – Moduliai 4, 5, 6 (Konteksto inžinerija)

> **Autorinė mokymo medžiaga © 2024-2026 Tomas Staniulis**  
> Šis dokumentas yra **atskiras turinio plėtros failas** moduliams 4–6 ir papildo pagrindinį `turinio_pletra.md`.  
> **Source of truth:** turinio semantika – šis failas; duomenų struktūra – `src/data/modules.json` po sinchronizacijos.

---

## 1. Apimtis ir tikslai

### 1.1 Vieta kurse

| Moduliai 1–3 | Moduliai 4–6 |
|--------------|--------------|
| 6 blokų sistema, workflow, technikos | RAG, Deep research, tokenų ekonomika, promptų manipuliacijos, žinių patikrinimas |
| Žinių testas + 4 scenarijai | Žinių testas (pažangus) + **vienas integruotas projektas** |
| Mokymasis → Testas → Praktika | Ta pati seka, aukštesniu lygiu |

**Prielaida:** Dalyvis baigė Modulius 1–3 ir išmano 6 blokų sistemą, workflow ir praktinį pritaikymą scenarijuose.

### 1.2 Mokymosi tikslai (po modulių 4–6)

- **RAG:** Suprasti, kas yra Retrieval-Augmented Generation, kada naudoti ir kaip promptuose nurodyti šaltinius/kontekstą.
- **Deep research:** Žinoti, kas yra giluminis tyrimas su DI, kaip struktūruoti multi-step užklausas ir kaip tai susiję su 6 blokais.
- **Tokenų ekonomika:** Suprasti tokenų naudojimą (konteksto langas, kainos, max_tokens), mokėti optimizuoti promptus ilgumai ir kainai.
- **Promptų manipuliacijos:** Atpažinti manipuliacijas (šališkumas, leading questions, jailbreak), mokėti vengti ir kritiškai vertinti rezultatus.
- **Žinių patikrinimas ir haliucinacijos:** Suprasti, kas yra haliucinacijos (įtikinamas, bet faktu nepagrįstas DI turinys), kodėl jos atsiranda; žinoti, kaip tikrinti DI atsakymų tikrumą (šaltiniai, cross-check, „nežinau“) ir kaip mažinti haliucinacijų riziką; ryšys su Quality bloką.
- **Projektas:** Sukurti vieną pilną, realų projektą (pvz. tyrimo ataskaita, strategijos dokumentas ar analizė), naudojant 6 blokų sistemą ir pažangias temas.

### 1.3 Modulio 4 pradžios skaidrė (4.1) – privalomas turinys

**Skaidrė „Įvadas į konteksto inžineriją“ (4.1) turi apimti šiuos blokus (kopijuojami į UI/JSON):**

- **„Po šio modulio galėsite:“** (5–6 punktai, pvz. checkmarks)
  1. Suprasti, kas yra RAG ir kada jį naudoti; nurodyti šaltinius prompte.
  2. Žinoti, kas yra Deep research ir kaip struktūruoti multi-step užklausas.
  3. Suprasti tokenų naudojimą (konteksto langas, max_tokens) ir optimizuoti promptus ilgumai/kainai.
  4. Atpažinti promptų manipuliacijas ir formuoti neutralius promptus.
  5. Atpažinti haliucinacijas ir tikrinti DI atsakymų tikrumą (šaltiniai, cross-check, „nežinau“); susieti su Quality bloku.
  6. Pritaikyti tai viską viename projekte (Modulis 6).

- **„Kodėl konteksto inžinerija?“** (2–3 sakiniai)
  - Kai 6 blokai jau įprasti, RAG ir žinių patikrinimas leidžia dirbti su realiais duomenimis ir mažinti klaidas.
  - Tokenų ekonomika – sutaupyti laiko ir išlaidas; manipuliacijų atpažinimas – etiška ir patikima nauda.
  - Tai paruošia vienam integruotam projektui (Modulis 6).

### 1.4 Modulio 4 pirmoji skaidrė (action-intro)

**Tikslas:** Emocinis hook ir itraukimas į mokymus – panašiai kaip Modulio 1 pirmoji skaidrė. Dalyvis per 5–7 sek supranta „kas laukia“, per ~1 min – micro-veiksmas (palyginimas be konteksto vs su šaltiniais).

**Tipas:** `action-intro`. Komponentas: `ActionIntroSlide`. Id skaidrei: **38** (prieš 4.0, kuris lieka id 39).

**Turinys (kopijuojami į UI/JSON):**

- **Hero (3 eilutės):**
  - heroStat: „Jau moki kurti promptus.“
  - heroText: „Dabar – kontekstas ir patikimumas.“
  - heroSubText: „Šiame modulyje išmoksite įtraukti šaltinius į promptus ir tikrinti atsakymus. RAG, haliucinacijos – kaip dirbti protingiau.“

- **CTA:** ctaText: „Pamatyk, kas laukia – per 1 minutę!“

- **Palyginimas (nestruktūruotas vs struktūruotas promptas – Modulio 4 tema):**
  - unstructuredPrompt: „Parašyk man ataskaitą apie Lietuvos BVP tendencijas.“
  - structuredPrompt: „META: Tu esi ekonomistas analitikas. Tikslas: trumpa BVP tendencijų ataskaita.\n\nINPUT: Naudok tik šiuos šaltinius: Eurostat, Lietuvos statistikos departamentas. Jei duomenų nėra – parašyk „Nežinau“, ne spėliok.\n\nOUTPUT: 1 puslapis, 3–5 punktai, su nuorodomis į šaltinius. Kalba: lietuvių.“

- **aboutText:** „Kai 6 blokai jau įprasti, RAG ir žinių patikrinimas leidžia dirbti su realiais duomenimis ir mažinti klaidas. Tokenų ekonomika – sutaupyti laiko ir išlaidas; manipuliacijų atpažinimas – etiška ir patikima nauda. Šis modulis paruoš vienam integruotam projektui (Modulis 6).“

- **outcomes (5–6 punktai):**
  1. Suprasti, kas yra RAG ir kada jį naudoti; nurodyti šaltinius prompte.
  2. Žinoti, kas yra Deep research ir kaip struktūruoti multi-step užklausas.
  3. Suprasti tokenų naudojimą (konteksto langas, max_tokens) ir optimizuoti promptus ilgumai ir kainai.
  4. Atpažinti promptų manipuliacijas ir formuoti neutralius promptus.
  5. Atpažinti haliucinacijas ir tikrinti DI atsakymų tikrumą (šaltiniai, cross-check, „nežinau“); susieti su Quality bloku.
  6. Pritaikyti tai viską viename projekte (Modulis 6).

- **toolsIntro:** „Konteksto inžinerijos principai veikia bet kuriame iš šių įrankių. Žemiau – trumpas įvadas ir naudojimo atvejai.“

- **duration:** „~30–35 min“

**Techninė implementacija:** Tipas `action-intro`; duomenys – `src/data/modules.json` Modulio 4 `slides` masyvo **pirmas** elementas (index 0). Tools – galima perpanaudoti Modulio 1 sąrašą (ChatGPT, Claude, Gemini, Copilot, Grok, DeepSeek) su toolsIntro pritaikytu Moduliui 4.

---

## 2. Teorinė dalis (Modulis 4) – Turinio struktūra

Modulis 4 – **„Konteksto inžinerija“** (level: `learn`). Trukmė: ~30–35 min (orientacinis).

### 2.1 Skaidrių / temų planas

| # | Skaidrė / tema | Trumpas aprašymas | Susijęs su moduliais 1–3 |
|---|----------------|-------------------|---------------------------|
| **4.0** | **DI Visata: kaip viskas susiję** | Pirmoji Modulio 4 skaidrė: palyginimo iliustracijos (Dantės visata / DI visata), esminė žinutė, terminai (žodynėlis). Praktika – atskiroje skaidrėje 4.0-praktika. Iliustracijos turi būti išdidinamos (lightbox). | Modulio 1 kontekstas (kas yra DI) |
| **4.0-praktika** | **Praktika: DI visata** | Atpažinimo pratimas (5 pavyzdžiai – kuris DI sluoksnis) + kopijuojamas promptas „Paaiškink DI visatą“. Atskira skaidrė iškart po 4.0. | 4.0 (hierarchija) |
| **4.1a** | **🧩 Konteksto inžinerija: kaip „valdyti“ DI** | Kas yra konteksto inžinerija: apibrėžimas, ką sudaro kontekstas (tikslas, vaidmuo, ribos, papildoma informacija), kuo padeda DI „visatoje“, esmė vienu sakiniu. Be iliustracijų. | Modulio 1 (kontekstas, 6 blokai) |
| **4.1a2** | **4 dedamosios** | Konceptualus promptų inžinerijos skaidymas: Inžinerija (sistemos projektavimas, iteracijos), Kalbos filosofija (reikšmė, kontekstas), Psichologija (kognityvinis įrėminimas), Komunikacija (aiškios užklausos, žmogaus–DI sąveika). Sutapatinta su Anthropic, Google, OpenAI gairėmis. | Modulio 1 (6 blokai, workflow) |
| **4.1a2-viz** | **Custom GPT kūrimo procesas** | 8 žingsnių diagrama: Tikslas → Rolė → Prisijungimas → Konfigūracija (pavadinimas, instrukcijos, persona) → Papildomos funkcijos (dokumentai, API) → Testavimas → Publikavimas → Tobulinimas (su grįžtamuoju ryšiu). Vizualas: `public/custom_gpt_process.svg`, pritaikytas projekto spalvoms (brand, accent, violet, emerald, rose, slate). | Inžinerija, GPT kūrimas (4.1a2), workflow |
| **4.1-workflow-ex** | **Prezentacijų kūrimas su DI** | Workflow pavyzdys: įrankių sąrašas (Gamma, SlidesAI, Prezent.ai, Canva, Visme, Beautiful.ai), greita orientacija, universalus promptas (8 skaidrės, struktūra, infografikai), takeaway: promptas kuria – ne įrankiai; leverage = struktūra + tikslas. Vieta: prie skaidrės „DI workflow“ arba atskiras blokas. | Workflow (4.1), Rezultatas (prezentacija) |
| **4.1a3** | **Kas yra paskatinamasis mokymas (RL / RLHF)?** | Trumpas paaiškinimas, kaip veikia paskatinamuoju mokymusi paremti modeliai: agentas, aplinka, veiksmai, atlygis, tikslas. Ryšys su GPT modelių RLHF (Reinforcement Learning with Human Feedback) – kaip žmonių grįžtamasis ryšys formuoja „geresnių atsakymų“ strategiją. | Kontekstas apie DI mokymą, ryšys su Quality/etikos tema |
| **4.1a4** | **5 principai, kurie realiai pagerina bet kurį promptą** | Outcome-driven, **žmogui skirta**: subtitle apie naudą („galėsite pats pagerinti“), 5 principai kaip instrukcijos. „Kodėl tai svarbu?“ blokas su kontekstu (pamatas tolimesniems žingsniams – šaltiniai, agentai, gilusis tyrimas), ne sąvokos be paaiškinimo. TIP „Pabandykite“ prieš vertinimo promptą; label žmogui („Įvertinti savo promptą – nukopijuokite ir paleiskite“). Žr. prompt library. | Kartojimas iš Modulio 1, tiltelis į konteksto inžineriją; dalyvis po skaidrės gali pats pataisyti blogą promptą |
| **4.1a5** | **Parametrų laukas, kuriame dirba promptų inžinierius** | 6 parametrų grupės (sisteminiai, metodiniai, turinio, manipuliacijų, kokybiniai, techniniai), kurios apibrėžia, „kur“ realiai dirba promptų inžinierius – nuo modelio pasirinkimo iki atsakymo kokybės ir etikos kontrolės. Skaidrė veikia kaip trumpa „žemėlapių“ apžvalga prieš gilesnes temas. | Kartojimas + struktūruotas paveikslas, padedantis susieti Modulį 1 su Moduliu 4 |
| **4.1a5-style** | **Stilių naudojimas promptuose** | Kokybiniai parametrai praktiškai: kaip nurodyti toną, stilių, auditoriją, kalbą ir struktūrą (verslo tonas, formalus, kompaktiškas; pavyzdiniai sakiniai). Ryšys su Output ir Quality. Vieta: po 4.1a5. | Output, Quality (4.1a5), Modulio 1 |
| **4.1a5-practice** | **Praktinės užduotys (po Stilių)** | 3 kategorijos: (1) Įvairių stilių tekstų kūrimas; (2) Atsakymai į klientų el. laiškus; (3) **HTML kūrimo promptas** – 5 blokai (Vaidmuo, Užduotis, Kontekstas, Formatas, Tonas), pavyzdinis pilnas promptas (vieno puslapio tinklalapis). Ryšys su Meta/Input/Output. | Stilių naudojimas (4.1a5-style), Output, Modulio 1 blokai |
| 4.1 | Įvadas į konteksto inžineriją | Kas bus mokoma, kodėl RAG/Deep research/tokenai/manipuliacijos svarbūs, nuoroda į 6 blokus | Modulio 1 santrauka |
| **4.1-tools** | **Pagrindiniai įrankiai (prieš workflow)** | 5 įrankiai su veikiančiomis nuorodomis: ChatGPT, Claude, Copilot, **Gemini** (tyrimai, dokumentai, vaizdai, video, Google), **Gamma** (prezentacijos, pasiūlymai, brošiūros, leidiniai, tinklalapiai). Vieta: **prieš** 4.1b ir prieš DI workflow pavyzdžius. | Workflow (4.1b), įrankių pasirinkimas |
| **4.1-prompts** | **Metodinis vs Agentinis promptas** | Du tipai: **Metodinis** – pateikia metodiką (rolė, žingsniai, formatas); **Agentinis** – atlieka workflow su agentinėmis funkcijomis (paieška, įrankiai). Agentines funkcijas turi ChatGPT, Claude, Gemini ir kt. Pavyzdžiai: analizės ataskaita vs „ieškok ir surask TOP10“. Vieta: po Pagrindinių įrankių, prieš 4.1b. | Workflow, promptų tipai, įrankiai |
| **4.1-system-master** | **System prompt vs Master prompt** | Takoskyra: **System prompt** – kaip DI turi veikti (taisyklės, apribojimai, elgesys); **Master prompt** – kas yra vartotojas arba organizacija (kontekstas apie jus). Master prompt metodas (Tiago Forte, Hayden Miyamoto): asmeninis profilis DI sistemai, ką apima, kaip sukurti (3 žingsniai), nauda. Vieta: po Metodinio/Agentinio, prieš 4.1b. | Rolė, kontekstas, 4.1a2 (Inžinerija) |
| **4.1b** | **Darbas su DI: struktūruotas procesas** | 8 žingsnių workflow (tikslai → kontekstas → rolė → promptai → grįžtamasis ryšys → konteksto atnaujinimas → šablonai → sesijos pabaiga). **Vieta: po 4.1, prieš 4.1b2 ir 4.1c/4.1d.** Reikia **interaktyvios proceso schemos** (workflow diagrama). | Modulio 1 (6 blokai), workflow |
| **4.1b2** | **BONUS: Proceso prompt ir workflow sudarymas** | Procesais grįstos užklausos – strategijos, projektai, operacijų tobulinimas. Procesas suteikia aiškumą komandoms ir sprendimų priėmėjams. 3 pavyzdžiai (verslo strategija, projektų valdymas, operacijų tobulinimas). | Workflow, Output (struktūra) |
| **4.1c** | **Schema 3: LLM su RAG ir įrankiais** | Konceptualus workflow: Įvestis (tekstas) → LLM → Išvestis; Tool Use (Generation + Retrieval) → duomenų bazė. Paruošia RAG sąvoką. | Input, Output, šaltiniai |
| **4.1d** | **Schema 4: Multi-Modal LLM workflow** | Įvestis/išvestis multi-modal (tekstas + vaizdas); Tool Use (Generation), Memory (Retrieval) → išorinė atmintis. Pažangus workflow prieš RAG. | Input, Output, kontekstas |
| 4.2 | **RAG (Retrieval-Augmented Generation)** | Kas yra RAG: išoriniai šaltiniai + DI. Kada naudoti. Kaip prompte nurodyti šaltinius ir „atsakyk tik iš šios informacijos“. Pavyzdys: ataskaita pagal PDF/sąrašą | Input blokas (duomenys), Quality (šaltiniai) |
| **4.2-open** | **Atviros duomenų bazės ir RAG: oficialūs šaltiniai ir pavyzdžiai** | Oficialūs atviri duomenų šaltiniai (Eurostat, data.gov, nacionaliniai portalai) RAG kontekste; trumpi, realistiniai pavyzdžiai – kaip ieškoti ir naudoti atvirus duomenis DI užklausose. | Input (šaltiniai), Quality (oficialūs duomenys) |
| **4.2a** | **Darbas su RAG: memory, išoriniai įrankiai** | Memory kaip RAG kontekstas; išoriniai įrankiai (NoteLM, Trello). Analizuok ir paruošk duomenis su nuorodomis – gairės ir šablonas. | Input (šaltiniai), Quality (nuorodos) |
| **4.2a-academic** | **DI įrankiai studentams ir mokslui (2026)** | RAG tipo įrankių rinkinys: Perplexity (paieška su šaltiniais), PaperGuide (PDF, literatūra), Scite (citatos), Elicit (tyrimų sintezė). Lentelės, pavyzdiniai promptai, minimalus stackas ir tipinė eiga mokymuose. | RAG (4.2), Input (šaltiniai), Quality (citatos) |
| **4.2b** | **Basic duomenų paruošimas RAG patikimumui** | Patarimai ir promptai: duomenų išvalymas, santraukos, anonsavimas, metaduomenys – kad RAG dirbtų patikimiau. | Input (duomenys), Quality (šaltiniai) |
| **4.2c** | **100% veikiančios strategijos (įtvirtinimas)** | Integruoja geriausius dalykus: žingsnis po žingsnio, mąstymo grandinė (CoT), palyginimai ir analogijos – su pavyzdžiais ir ryšiu su RAG/Deep research. | Reasoning, Output, 6 blokai |
| **4.2-check** | **Savitikra: RAG** | Formatinis grįžtamasis ryšys – 2–3 klausimai po RAG temos. Pedagoginė analizė §2.3. | RAG (4.2) |
| 4.3 | **Deep research (Gilusis tyrimas)** | Giluminis tyrimas kaip DI funkcija ir įrankis: multi-step, sub-klausimai, sintezė; ryšys su RAG; kurie modeliai siūlo (Perplexity, ChatGPT, Claude, Gemini); kaip panaudoti (užduotis agentui, pavyzdinis promptas, šaltiniai, duomenimis pagrįsti sprendimai). CoT/ToT. | RAG, Reasoning, Output, Quality (šaltiniai) |
| **4.3a** | **Praktinės užduotys: promptų sekos (sequence, CoT, ToT)** | Promptų inžinierius gali susikonstruoti promptų sekas – su paaiškinimu ir 3 šablonais: seka, grandinė (CoT), idėjų medis (ToT). | Reasoning, workflow |
| **4.3-check** | **Savitikra: Deep research** | Formatinis grįžtamasis ryšys – 2 klausimai po Deep research temos. Pedagoginė analizė §2.3. | Deep research (4.3) |
| 4.4 | **Tokenų ekonomika** | Tokenai: kas tai, konteksto langas, max_tokens, kainos. Kaip trumpinti kontekstą ir išlaikyti kokybę. Advanced parametrai (jau žinomi iš Modulio 1). **Vizualizacijos:** `tokenization.png`, `platformos_veikimas.png` (public/) | Advanced blokas, Input (apimtis) |
| **4.4-check** | **Savitikra: Tokenai** | Formatinis grįžtamasis ryšys – 2 klausimai po tokenų temos. Pedagoginė analizė §2.3. | Tokenai (4.4) |
| 4.5 | **Promptų manipuliacijos** | Manipuliacija: šališkos užklausos, leading questions, jailbreak. Ko vengti, kaip atpažinti ir kaip formuoti neutralius promptus | Technikos („Manipuliacija – vengti”) |
| 4.6 | **Žinių patikrinimas ir haliucinacijos** | Kas yra haliucinacijos, kodėl DI jų daro; kaip sumažinti (4 patarimai, 5 taisyklės), anti-haliucinacinis šablonas; kaip tikrinti atsakymus: šaltiniai, cross-check, „nežinau“. Ryšys su Quality Control ir etika. | Quality blokas, Modulio 2 (testas) |
| 4.7 | Modulio 4 santrauka | Apžvalga: RAG, Deep research, tokenai, manipuliacijos, haliucinacijos/žinių patikrinimas. **Prieš testą: 3 klausimai sau.** Motyvacija į Modulį 5 (testas) | — |

**Oficiali skaidrių eilė ir motyvacija:** Pilna rekomenduojama seka su „Kodėl čia?“ – žr. `docs/MODULIO_4_SKAIDRIU_EILES.md`.

### 2.1a Modulio 4 žodynėlis (SOT)

Viena vieta – 8–10 terminų su vieno sakinio apibrėžimu. UI: viena skaidrė „Žodynėlis“ (pvz. prieš 4.7 arba kaip 4.7 dalis) arba collapsible.

| Terminas | Apibrėžimas (vienas sakinys) |
|----------|------------------------------|
| **RAG** | Retrieval-Augmented Generation – metodas, kai DI atsakymą generuoja remdamasis surasta informacija iš dokumentų ar duomenų bazių, o ne tik iš savo mokymo. |
| **Deep research** | Giluminis tyrimas su DI – kelios pakopos (klausimų išskaidymas, paieška šaltiniuose, sintezė į vieną atsakymą ar ataskaitą). |
| **Tokenas** | Mažiausias teksto vienetas, kurį DI apdoroja; apytiksliai ~4 simboliai (LT/EN); lemia konteksto langą ir sąnaudas. |
| **Konteksto langas** | Maksimalus įvesties ir išvesties teksto apimtis (tokenais), kurią modelis gali „matyti“ vienu metu; viršijus – seniausia informacija prarandama. |
| **Promptų manipuliacija** | Strategiškai suformuluotų užklausų naudojimas siekiant paveikti DI atsakymus (šališkumas, leading questions ir kt.); ko vengti – neutralūs promptai. |
| **Haliucinacija** | DI sugeneruotas turinys, kuris atrodo įtikinamai, bet yra faktu nepagrįstas, netikslus arba išgalvotas; modelis „užpildo spragas“ tikimybėmis. |
| **Quality blokas** | 6 blokų sistemoje – kokybės reikalavimai: šaltiniai, citavimas, „nežinau“ taisyklė, objektyvumas, ribos. |
| **CoT (chain-of-thought)** | Mąstymo grandinė – prašyti DI žingsnis po žingsnio išdėstyti samprotavimą prieš pateikiant išvadą. |
| **ToT (tree of thought)** | Idėjų medis – kelios paralelės samprotavimo šakos arba variantai, iš kurių renkamasi geriausias. |
| **RLHF** | Reinforcement Learning with Human Feedback – paskatinamasis mokymas su žmogišku grįžtamuoju ryšiu; naudojamas formuoti „geresnių“ atsakymų strategijas DI modeliuose. |
| **Master prompt** | Personalizuotas promptas apie vartotoją ar organizaciją (kas esi, ką darai, tikslai, stilius, auditorija), suteikiantis DI kontekstą – skiriasi nuo System prompt, kuris apibrėžia, kaip DI turi veikti. |
| **System prompt** | Instrukcijos DI sistemai, kaip ji turi veikti – taisyklės, apribojimai, elgesys, formatas (ne apie vartotoją, o apie modelio rolę ir ribas). |

### 2.2 Temų detalė (gairės turiniui)

**Skaidrė „DI Visata: kaip viskas susiję“ (4.0) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** DI VISATA: KAIP VISKAS SUSIJĘ  
  - **Subtitle:** DI – tai ne tik ChatGPT. Žemiau – kaip viskas susiję. (Trumpas, kad pirmą kartą atsidūrusiam nebūtų per daug terminų.)  
  - **Iliustracijos (comparisonImages):** kairė – Dantės visata (metafora), dešinė – DI visata (hierarchija). Šaltiniai: `public/paradise_dante.gif` arba `Dante_visata.png`, `public/ai_universe.gif` arba `DI_visata.png`. **UI:** vaizdai turi būti **išdidinami** (paspaudus – lightbox/overlay), kad būtų lengviau skaityti detales.  
  - **Struktūra – pirmiausia orientacinis blokas, po to veiksmo modelis:**  
    0. **Kodėl pradedame nuo šios skaidrės?** (brand) – Šioje skaidrėje pamatysite, kaip DI sritis susideda iš lygmenų – tai padės vėliau suprasti, kur „telpa“ šaltiniai ir kontekstas.  
    1. **1️⃣ Trumpai (30 s)** (accent) – DI ne tik ChatGPT; suprasi hierarchiją; nauda: vienas promptas paaiškins viską.
    2. **2️⃣ Daryk dabar (2–7 min)** (brand) – nukopijuok promptą, įklijuok į DI, paleisk; CTA „Kopijuoti promptą (žemiau)"; ką gausi: schema + pavyzdžiai.
    3. **3️⃣ Kopijuojamas promptas** – trumpas paaiškinimas + `copyable` blokas (META/INPUT/OUTPUT – „Paaiškink DI visatą").
    4. **4️⃣ Patikra (1 min)** (accent) – 4 klausimai (schema aiški? lygiai turi pavyzdžius? ChatGPT ≠ visa DI? galėtum paaiškinti kolegai?). Formuluotė: **„Jei bent 2 „ne" → grįžk prie prompto ir papildyk INPUT dalį, ne perrašyk visą promptą."**
    5. **🔽 Nori suprasti detaliau?** (`collapsible: true`, terms) – Esminė žinutė (kuo giliau – tuo daugiau galios ir atsakomybės) + Terminai (žodynėlis): DI, ML, neuroniniai tinklai, gilusis mokymasis, generatyvinis DI.
  - **practicalTask pašalintas** iš top-level; promptas perkeltas į section 3 kaip `copyable`.  
  - **Pastaba UI:** Tipas content-block; comparisonImages viršuje, po jų 6 sections (orientacinis + 5 veiksmo modelio), collapsible suskleista pagal nutylėjimą.

**Skaidrė „Praktika: DI visata“ (4.0-praktika) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** PRAKTIKA: DI VISATA  
  - **Subtitle:** Neprivaloma: atpažink sluoksnius ir išmėgink promptą.
  - **Framing:** Skaidrė aiškiai pažymėta kaip **neprivaloma** – pirma sekcija nurodo: „Ši praktika neprivaloma. Nori – atpažink sluoksnius; nenori – pereik prie kitos skaidrės."
  - **Turinys – du blokai (be comparisonImages, be sąvokų blokų):**
    1. **recognitionExercise:** 5 pavyzdžiai – atpažink sluoksnį. Tikslas: ne visi DI sprendimai yra generatyviniai.
  - **Pastaba UI:** tipas `content-block` su `recognitionExercise` ir pirma sekcija su optional framing. Eilė: iškart po 4.0.

**Modulio 4 pradžia – savokos ir konceptualumas:** Pirmosios skaidrės (**4.1a „Konteksto inžinerija: kaip valdyti DI“** ir **4.1a2 „4 dedamosios“**) įtvirtina konteksto inžinerijos sąvoką ir konceptualų skaidymą (inžinerija, kalbos filosofija, psichologija, komunikacija), suderintą su Anthropic, Google, OpenAI šaltiniais. Po to eina 4.1 Įvadas (kas bus modulyje) ir 4.1b Struktūruotas procesas.

**Skaidrė „Konteksto inžinerija: kaip valdyti DI“ (4.1a) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** 🧩 KONTEKSTO INŽINERIJA: KAIP „VALDYTI“ DI  
  - **Subtitle:** Kas tai ir kodėl svarbu – pagrindinė modulio sąvoka.  
  - **Be iliustracijų** (nenaudoti comparisonImages).  
  - **Blokai (pedagogika, aiškumas, CTA):**  
    0. **Kodėl čia?** (brand) – Orientacija: po DI visatos įtvirtiname pagrindinę sąvoką; kontekstas = valdymo svirtis; paruoš RAG, šaltiniams, patikrinimui.  
    1. **Kas yra konteksto inžinerija?** – Apibrėžimas (kas jis yra, ką padaryti, kokio rezultato) + „Paprastai tariant“ (ne klausimas, o situacijos paaiškinimas) viename bloke.  
    2. **Ką sudaro kontekstas?** – Tikslas, Vaidmuo, Ribos, Papildoma informacija (bullet).  
    3. **Kuo tai padeda?** – Mažiau klaidų/haliucinacijų; tikslesni atsakymai; įrankis darbui; automatizacija.  
    4. **Esmė vienu sakiniu** (accent) – Geras kontekstas → geresni sprendimai; DI be konteksto spėlioja.  
    5. **Pabandyk dabar (1 min)** (brand, copyable) – Minimalus konteksto šablonas; CTA: nukopijuok į ChatGPT/Claude, užpildyk, paleisk.  
  - **Pastaba UI:** content-block; 6 sections; blockVariant brand (Kodėl čia, Pabandyk), accent (Esmė); paskutinis section su copyable (TemplateBlock).

**Skaidrė „4 dedamosios“ (4.1a2) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** 4 DEDAMOSIOS. **Subtitle:** Keturi požiūriai į gerus promptus – ir ką tai reiškia praktiškai.  
  - **Tikslas:** Konceptualus rėmas (savokos). **Gairė: esmė pirmiausia** – trumpi blokai (viena mintis + Praktiškai), ne akademinis žargonas; pirmas section „Kodėl čia?“; workflow tooltip – viena eilutė.  
  - **Keturi punktai (numeruoti, antraštė geltona/paryškinta, aprašymas balta):**  
    1. **Inžinerija. Sistemos projektavimas ir optimizavimas. GPT kūrimas ir mokymas.**  
       Kurti naujus promptus, siekiant maksimizuoti DI našumą, vykdant nuolatines iteracijas ir teikiant grįžtamąjį ryšį.  
    2. **Kalbos filosofija. Reikšmė ir interpretacija.**  
       Analizuoti, kaip promptai formuoja kontekstą ir nukreipia DI į nuoseklius atsakymus.  
    3. **Psichologija. Kognityvinis įrėminimas.**  
       Tyrinėti, kaip DI (ir promptų formavimas) riboja arba formuoja žmogaus problemų sprendimą ir atspindi skirtingus pažinimo modelius.  
    4. **Komunikacija. Sąveika ir informacijos perdavimas.**  
       Kurti aiškias ir glaustas užklausas, siekiant parodyti žmogaus ir DI sąveikos efektyvumą.  
  - **Sutampa su oficialiais šaltiniais (skaidrėje arba collapsible „Šaltiniai“):**  
    - **Anthropic (docs.anthropic.com):** aiškumas ir tiesiogumas, pavyzdžiai (multishot), chain-of-thought, rolė (system prompts), iteracija – atitinka **Inžineriją** (optimizavimas, iteracijos) ir **Kalbos filosofiją** (kontekstas, interpretacija).  
    - **Google (developers.google.com, ai.google.dev):** „art and science“ (menas ir mokslas), kontekstas ir pavyzdžiai, aiškios instrukcijos, few-shot, chain-of-thought – atitinka **Inžineriją**, **Kalbos filosofiją** ir **Komunikaciją** (aiškios užklausos).  
    - **OpenAI (platform.openai.com):** struktūruotos instrukcijos, specifiškumas, pavyzdžiai, progresyvus požiūris (zero-shot → few-shot) – atitinka **Inžineriją** ir **Komunikaciją**.  
    *Pastaba:* Oficialūs vadovai nenaudoja būtent „4 dedamųjų“ – tai pedagoginis rėmas, kuris suderinamas su jų gairėmis (inžinerija = projektavimas/iteracija; kalba = kontekstas/reikšmė; psichologija = įrėminimas; komunikacija = aiškumas, žmogaus–DI sąveika).  
  - **Pastaba UI:** Skaidrėje – antraštė „4 DEDAMOSIOS“, 4 kortelės arba numeruotas sąrašas (geltonos antraštės, balti aprašymai); galima collapsible „Kaip tai susiję su Anthropic / Google / OpenAI?“ su trumpu lentelėlės arba sąrašo sutapatinimu.

**Vizualizacija „Custom GPT kūrimo procesas“ (pritaikyta projekto spalvoms):**  
  - **Paskirtis:** Parodyti Custom GPT (asistento) kūrimo procesą – nuo tikslo ir rolės iki konfigūracijos, papildomų funkcijų, testavimo, publikavimo ir tobulinimo (su grįžtamuoju ryšiu į konfigūraciją). Tema susijusi su **4.1a2 „Inžinerija – GPT kūrimas ir mokymas“** ir gali būti naudojama skaidrėje po 4.1b (Darbas su DI) arba kaip atskira „Custom GPT“ skaidrė Modulio 4.  
  - **Vizualinio turto vieta:** `public/custom_gpt_process.svg`.  
  - **Spalvų paletė (projekto):** fono gradientas – brand-50 / slate-50; žingsniai: 1 Tikslas – emerald; 2 Rolė – brand (navy); 3 Prisijungimas – violet; 4 Konfigūracija – accent (auksas); 5 Papildomos funkcijos – rose; 6 Testavimas – brand-400; 7 Publikavimas – emerald; 8 Tobulinimas – accent; rodyklės ir pagrindinis tekstas – slate-700; brūkšninė „grįžtamasis ryšys“ – accent-600. Šriftas – Plus Jakarta Sans.  
  - **Pastaba UI:** Skaidrėje galima rodyti šį SVG kaip paveikslėlį (`<img src="/custom_gpt_process.svg" alt="Custom GPT kūrimo procesas" />`) arba įtraukti į skaidrės tipą su `heroImage` / diagramos bloku.

**Palyginimas: 6 žingsnių vs 8 žingsnių schema (parinktas mūsų variantas):**  
  - **Alternatyvi (6 žingsnių) schema:** Prisijungimas → Pagrindai (pavadinimas, aprašymas) → Instrukcijos (vaidmuo, užduotys) → Įrankiai (Web, Python, API, failai) → Testavimas → Publikavimas. Privalumai: glaustesnė, lengviau skaitoma vieno ekrano skaidrėje; dažnai pridedama „Custom GPT sukurtas sėkmingai!“ ir blokas „Svarbūs reikalavimai:“ (ChatGPT Plus būtina, aiškios instrukcijos, testavimas ir redagavimas bet kada).  
  - **Mūsų pasirinktas variantas (8 žingsnių):** Tikslas → Rolė → Prisijungimas → Konfigūracija (su šakomis: pavadinimas+aprašymas, instrukcijos, persona) → Papildomos funkcijos (dokumentai, API) → Testavimas → Publikavimas → Tobulinimas (su brūkšnine rodykle atgal į Konfigūraciją). Privalumai: aiškiai atskiria **planavimą** (tikslas, rolė) nuo **įrankio naudojimo** (prisijungimas, konfigūracija); rodo **grįžtamąjį ryšį** (tobulinimas → konfigūracija); išlaikome „Svarbūs reikalavimai“ ir „Custom GPT sukurtas sėkmingai!“ blokus schemoje (projekto spalvomis).  
  - **Santrauka:** Naudojame **8 žingsnių** schemą su papildomais rezultato ir reikalavimų blokais – siekiame išlaikyti didesnį aiškumą planavimo ir iteracijos atžvilgiu, kartu pritaikydami geresnius UX elementus iš 6 žingsnių varianto.

**Skaidrė „Kas yra paskatinamasis mokymas (RL / RLHF)?“ (4.1a3) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** Kas yra paskatinamasis mokymas (RL / RLHF)?  
  - **Poantraštė (viena eilutė):** Kaip DI mokosi iš bandymų, klaidų ir žmonių grįžtamojo ryšio  
  - **1️⃣ RL – Reinforcement Learning (be žmonių):**  
    - Paprastas paaiškinimas: DI mokosi veikdamas aplinkoje ir gauna atlygį arba baudą.  
    - Struktūra (labai svarbu parodyti): 🤖 **Agentas** – DI sistema; 🌍 **Aplinka** – situacija / užduotis; ▶️ **Veiksmas** – ką padaro; ⭐ **Atlygis** – ar buvo „gerai“, ar „blogai“.  
    - **Verslo situacija:** El. parduotuvė automatiškai keičia kainas. Kaip mokosi: sistema kelia / mažina kainą ir žiūri, ar auga pardavimai. Atlygis: pardavimų skaičius (daugiau / mažiau). Kada naudoti: kai sėkmę galima tiksliai pamatuoti skaičiais (KPI).  
    - Mintinis modelis: „Padariau → gavau rezultatą → koreguoju elgesį“.  
  - **2️⃣ RLHF – Reinforcement Learning from Human Feedback:**  
    - Kas pasikeičia? 👉 Žmogus tampa atlygio šaltiniu.  
    - Paprastas paaiškinimas: DI mokosi ne tik iš skaičių, bet ir iš to, kuris atsakymas žmonėms atrodo geresnis.  
    - Kaip tai veikia GPT atveju: Žmonės lygina atsakymus → Pažymi „geresnius“ → Modelis išmoksta elgesio taisykles.  
    - **Verslo situacija:** DI rašo atsakymus klientų el. laiškams. Kaip mokosi: darbuotojai pažymi, kuris atsakymas geresnis klientui. Atlygis: žmogaus pasirinkimas („tinka / netinka"). Kada naudoti: kai svarbi kokybė, tonas ir pasitikėjimas, o ne tik skaičiai.  
  - **3️⃣ RL vs RLHF (privaloma palyginimo dalis):** Lentelė: RL (Mokosi iš atlygio; Tinka žaidimams, robotams; Objektyvus tikslas; „Laimėjau / pralaimėjau“) | RLHF (Mokosi iš žmonių; Tinka kalbai, tekstui; Subjektyvi kokybė; „Geriau / blogiau žmogui“).  
  - **4️⃣ RL – Prompto pavyzdys (be žmonių):** Verslo situacija: optimizuoti el. laišką pagal aiškius KPI. Kada naudoti: kai sėkmę galima apibrėžti taisyklėmis ir skaičiais. Kopijuojamas promptas: „Tu esi DI, optimizuojantis verslo el. laiškus. Tikslas: parašyti el. laišką, kuris maksimaliai padidina atidarymo tikimybę. Taisyklės: iki 100 žodžių, aiški vertės pasiūla, aiškus CTA. Sugeneruok 3 variantus ir pats pasirink geriausią pagal kriterijų: „aiškiausias ir trumpiausias"."  
  - **5️⃣ RLHF – Prompto pavyzdys (su žmonėmis):** Verslo situacija: parinkti geriausią el. laišką realiam klientui. Kada naudoti: kai svarbi žmogaus nuomonė, tonas ir pasitikėjimas. Kopijuojamas promptas: „Tu esi DI, kuriantis verslo el. laiškus. Užduotis: sugeneruok 3 el. laiško variantus klientui apie DI mokymus. Tada: paprašyk MANĘS pasirinkti geriausią variantą; paklausk, kas patiko / nepatiko. Remdamasis mano pasirinkimu, sugeneruok 1 patobulintą galutinį laišką."  
  - **6️⃣ Ryšys su GPT, promptais ir etika:** Kodėl tai svarbu mums? GPT ne „galvoja“, o optimizuoja atsakymus pagal: naudą, saugumą, žmonių lūkesčius. Promptas = signalas, pagal kurį modelis parenka išmoktą elgesį.  
  - **7️⃣ Vienos eilutės „aha“ (apačioje):** GPT atsakymai yra RLHF rezultatas – todėl formuluotė, tonas ir kontekstas keičia atsakymo kokybę.

**Mini-skaidrė „RL prompt'as“ – praktiniai pavyzdžiai (4.1a3 papildymas):**  
  Ši skaidrė parodo, kaip **paskatinamojo mokymo idėją** galima taikyti kasdienėje praktikoje – prašant DI **įsivertinti** ir **pagerinti** savo atsakymus.  
  - **Pavadinimas:** RL PROMPT'AS (savęs įvertinimas ir tobulinimas)  
  - **Pavyzdys 1 – savęs įvertinimas ir taisymas:**  
    - PROMPT: „Įvertink savo darbą nuo 1 iki 10. Išanalizuok trūkstamas vietas, papildyk ir pateik galutinį variantą.“  
    - **Kas vyksta:** modelis pats sau suteikia „reward'ą“ (balą), identifikuoja silpnas vietas ir **sistemiškai pataiso** atsakymą.  
    - **Kur naudoti:** ilgi tekstai, ataskaitos, santraukos – prieš siunčiant klientui ar vadovui.  
  - **Pavyzdys 2 – kriterijų kūrimas ir vertinimas:**  
    - PROMPT: „Sukurk kriterijus ir įvertink mano darbą, ar atskiras jo dalis nuo 1 iki 10.“  
    - **Kas vyksta:** pirmiausia sukuriami **vertinimo kriterijai** (pvz., aiškumas, struktūra, tikslumas), tada pagal juos įvertinamas tekstas / sprendimas – tai artima RL idėjai, kai apibrėžiamas „atlygio funkcijos“ profilis.  
    - **Kur naudoti:** projektų aprašai, promptai, prezentacijos – kai norisi greito „peer review“ iš DI.  
  - **Takeaway dalyviui:** RL prompt'ai leidžia **paversti DI savo pačio treneriu** – pirmiausia jis įsivertina ir pasiūlo patobulintą variantą, o jūs vis tiek turite **galutinį žodį ir kritinį vertinimą**.

**Skaidrė „5 principai, kurie realiai pagerina bet kurį promptą“ (4.1a4) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas (outcome-driven):** 5 principai, kurie realiai pagerina bet kurį promptą. Ne „patarimai“, o rezultatas.  
  - **Subtitle (žmogui, „kur esu“ + nauda):** „Po 4 dedamųjų – penki veiksmai, kurie iš karto pagerina bet kurį promptą. Galėsite pats jį įvertinti.“  
  - **Paskirtis:** skaidrė paverčia principus **elgesiu**. Po jos dalyvis gali pats pataisyti blogą promptą. Uždaro modulio „bazę“ ir paruošia tolimesnėms temoms (šaltiniai, agentai, gilusis tyrimas) – kalba žmogui, ne mašinai.  
  - **5 principai – veiksmo forma (ne aprašymai, o instrukcijos):**  
    1. **Aiškumas** → Vienas tikslas, viena užduotis, vienas rezultatas.  
    2. **Eksperimentavimas** → Keisk vieną dalyką vienu metu (ne viską iš karto).  
    3. **Nuo paprasto → prie sudėtingo** → Pirmas promptas – bazė, ne galutinis sprendimas.  
    4. **Kontekstas** → Kas tu? Kam skirta? Kokiame pasaulyje veiki?  
    5. **Žodžių pasirinkimas** → Veiksmažodžiai > abstrakcijos („padaryk“, ne „pagalvok“).  
  - **Vizualinė struktūra:** 2 eilučių kortelės arba ikonų stulpelis (pvz. 🎯 Aiškumas / 🔁 Eksperimentai / 🧱 Sekos logika / 🌍 Kontekstas / ✍️ Žodžiai) – gerai „sėda“ non-tech auditorijai.  
  - **Mini „aha“ blokas apačioje (privalomas):** „Kodėl tai svarbu?“ – žmogui skirta forma: „Šie principai yra pamatas visiems tolimesniems žingsniams modulyje – darbui su šaltiniais, agentais ir giliuoju tyrimu. Klaidos čia vėliau kainuoja daug kartų daugiau.“ Terminai (RAG, agentai, gilusis tyrimas) su trumpu kontekstu, ne atskiros sąvokos.  
  - **Pabandykite (TIP prieš šabloną):** prieš kopijuojamą vertinimo promptą – kvietimas su **„kur paleisti“**: „Atidarykite ChatGPT, Claude arba kitą DI įrankį. Nukopijuokite žemiau esantį promptą, įklijuokite savo promptą ir paleiskite – gausite įvertinimą pagal šiuos 5 principus. Puiku prieš pradedant tolimesnes temas.“
  - **Toliau (transition į 48):** paskutinė sekcija prieš šabloną: „Kitoje skaidrėje – trumpas paaiškinimas, kodėl DI „stengiasi įtikti“ (RL/RLHF).“  
  - **Praktika:** skaidrėje – kopijuojamas **vertinimo promptas**, label žmogui: „Įvertinti savo promptą (5 principai) – nukopijuokite ir paleiskite“. Prompt library: „Prompto kokybės patikrinimas (pagal 5 principus)“.  
  - **Ko NEDARYTI:** nerašyti ilgų paaiškinimų; nemaišyti terminų (RAG, Deep research) be konteksto; nedėti daugiau nei 5 punktų; nerašyti „gražiai“, bet neveikiančiai.

**Skaidrė „Parametrų laukas, kuriame dirba promptų inžinierius“ (4.1a5) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** PARAMETRŲ LAUKAS, KURIAME DIRBA PROMPTŲ INŽINIERIUS  
  - **Paskirtis:** aiškiai parodyti, **kokiais „svirtimis“ gali judinti promptų inžinierius** – nuo modelio pasirinkimo iki turinio ir techninių nustatymų. Tai trumpa „žemėlapio“ skaidrė, jungianti Modulį 1 (6 blokai) su pažangiomis temomis (RAG, manipuliacijos, etika).  
  - **6 parametrų grupės (geltonos antraštės, trumpi paaiškinimai):**  
    1. **Sisteminiai parametrai.**  
       Parametrai, susiję su DI modelio veikimu ir aplinka: kokį modelį pasirenkame (pvz. GPT versija), kokius įrankius / integracijas jis turi, kokia platforma ir prieigos lygis.  
    2. **Metodiniai parametrai.**  
       Būdai ir strategijos, **kaip kuriame rezultatą**: CoT, ToT, RAG, „step‑by‑step“, palyginimai, analogijos, RL promptai, primingas ir pan.  
    3. **Turinio parametrai.**  
       Informacija, kurią pateikiame modeliui: duomenys, šaltiniai, pavyzdžiai, kontekstas, apribojimai. Čia atsiranda RAG, žinių patikrinimas, DI Akto ir etikos reikalavimai.  
    4. **Promptų manipuliacijų parametrai.**  
       Kaip formuluotė gali **pakeisti modelio elgesį** (įrėminimas, rolė, socialinis įrodymas, Cialdini principai ir pan.) – ši grupė yra jautri etikui, todėl Modulyje 4 mokomės manipuliacijas atpažinti ir neutralizuoti.  
    5. **Kokybiniai parametrai.**  
       Atsakymo kokybės nustatymai: aiškumo lygis, detalumas, stilius, auditorija, kalba, struktūra („5 punktai“, „maks. 1 puslapis“, „verslo tonas“).  
    6. **Techniniai parametrai.**  
       Techniniai nustatymai: atsakymo ilgis (**max_tokens**), kūrybiškumas (**temperature**, top‑p), penalties, reasoning depth ir kt. – tai tiesiogiai siejasi su Modulio 1 „Advanced“ ir Modulio 4 tokenų ekonomika.  
  - **Takeaway:** promptų inžinierius **nedirba tik su žodžiais** – jis dirba visame parametrų lauke: nuo sistemos ir metodo iki turinio, etikos ir techninių nustatymų. Tai padeda dalyviui matyti, **kuriose vietose dar turi „svertų“** savo kasdienėje praktikoje.  
  - **Pastaba UI:** skaidrėje galima naudoti 6 punktų sąrašą arba „parametrų žemėlapio“ diagramą (pvz. 6 dėžutės aplink „Promptų inžinierius“ centre).

**Stilių naudojimas promptuose** (4.1a5 pratęsinys – kokybiniai parametrai praktiškai):  
  - **Vieta:** Tiesiogiai po Parametrų lauko (4.1a5); priklauso **Kokybiniams parametrams** ir Modulio 1 **Output / Quality** blokams.  
  - **Pavadinimas:** STILIŲ NAUDOJIMAS PROMPTUOSE.  
  - **Paskirtis:** Parodyti, **kaip konkretiai nurodyti** toną, stilių, auditoriją ir formatą prompte – kad DI atsakymas atitiktų tikslą (verslas, mokslas, viešumas, kompaktiškumas).  
  - **Kas įeina į „stilių“:** **Tonas** (formalus, draugiškas, verslo, akademinis); **stilius** (glaustas, naratyvinis, punktų sąrašas, kompaktiškas); **auditorija** (ekspertai, pradedantieji, vadovai, klientai); **kalba** (lietuvių, anglų, terminų lygis); **struktūra** („5 punktai“, „maks. 1 puslapis“, „santrauka + išvados“).  
  - **Kaip nurodyti prompte:** Aiškios, konkretūs žodžiai – ne „parašyk gerai“, o „verslo tonas“, „formalus stilius“, „tikslini auditoriją: vadovai“, „lietuvių kalba“, „maks. 150 žodžių“, „punktų sąrašas su antraštėmis“.  
  - **Pavyzdžiai (copy-paste fragmentai):**  
    - „Stilius: profesionalus, aiškus, be perteklinių tekstų. Tikslinė auditorija: [X].“  
    - „Formalus tonas, lietuvių kalba. Pateik 5–7 sakinių apibendrinimą.“  
    - „Kompaktiškas stilius; laikykis ~500 žodžių (arba max_tokens≈750).“  
    - „Pataisyk formatavimą pagal [Markdown / įmonės stilių].“  
  - **Ryšys su 6 blokais:** Output (kokią išvestį norime), Quality (kokybės kriteriai – aiškumas, atitikimas auditorijai).  
  - **Pastaba UI:** Skaidrėje arba bloke – antraštė „Stilių naudojimas“; sąrašas „Kas įeina“ (tonas, stilius, auditorija, kalba, struktūra); 2–4 pavyzdiniai sakiniai su CopyButton; nuoroda į 4.1a5 (Kokybiniai parametrai) ir Modulio 1 Output.

**Praktinės užduotys (po Stilių naudojimo)** – turinys (kopijuojamas į UI/JSON):  
  - **Vieta:** Iškart po „Stilių naudojimas promptuose“; skaidrė arba blokas **PRAKTINĖS UŽDUOTYS** – įtvirtina stilių ir tono nurodymus praktikoje.  
  - **Pavadinimas:** PRAKTINĖS UŽDUOTYS.  
  - **Tikslas:** Pademonstruoti įvairių stilių ir formatų taikymą konkrečiose verslo komunikacijos užduotyse; kiekviena užduotis – kopijuojamas promptas (CopyButton).  

  - **1. Įvairių stilių ir formatų tekstų kūrimas**  
    - „Parašyk oficialų kvietimo tekstą į verslo renginį, kuris vyks kitą mėnesį.“ *(oficialus / formalus stilius)*  
    - „Sukurkite formalią sutartį su klientu, parduodu [produktas].“ *(formalus / teisinis stilius)*  
    - „Parašykite skelbimą „ieškome darbuotojo“, naudojant entuziastingą toną.“ *(entuziastingas / įtraukiantis stilius)*  

  - **2. Atsakymai į klientų el. laiškus**  
    - „Parašykite mandagų atsakymą klientui, kuris skundžiasi dėl pavėluoto pristatymo.“ *(mandagus, atsiprašantis, problemų sprendimas)*  
    - „Parašykite profesionalų atsakymą klientui, kuris teiraujasi apie jūsų paslaugų kainas ir nuolaidas.“ *(profesionalus, informatyvus)*  
    - „Parašykite pagarbų atsakymą klientui, kuris domisi grąžinimo politika jūsų internetinėje parduotuvėje.“ *(pagarbus, aiškiai aprašanti politika)*  

  - **3. Vieno puslapio tinklalapio kūrimas (HTML kūrimo promptas)**  
    Struktūruota praktinė užduotis – **5 esminiai blokai**, skirti generuoti profesionalų, modernų, mobilų .html tinklalapį. Ryšys su Modulio 1 blokais (Vaidmuo ≈ Meta, Užduotis+Kontekstas ≈ Input, Formatas+Tonas ≈ Output/Quality).  
    - **#1 Vaidmuo (Role):** „Tavo rolė – patyręs front-end programuotojas ir UX/UI dizaineris.“  
    - **#2 Užduotis (Task):** „Sukurk vieno puslapio .html tinklalapį.“  
    - **#3 Kontekstas (Context):** „Tinklalapis skirtas pristatyti produktą / bendruomenę / paslaugą, tikslas – paskatinti lankytoją atlikti veiksmą.“  
    - **#4 Formatas (Format):** „Grąžink pilną HTML dokumentą su įterptu CSS viename faile, be komentarų ir papildomų paaiškinimų.“  
    - **#5 Tonas (Tone):** „Modernus, aiškus, lengvai skaitomas, pritaikytas mobiliesiems.“  
    - **Pavyzdinis pilnas promptas (CopyButton):**  
      *„Tavo rolė – patyręs front-end programuotojas ir UX/UI dizaineris. Sukurk modernų vieno puslapio .html tinklalapį wingfoil bendruomenei Lietuvoje. Tinklalapis turi pristatyti bendruomenę, treniruotes ir kontaktus, tikslas – kad lankytojas užpildytų kontaktinę formą. Grąžink pilną HTML dokumentą su įterptu CSS viename faile, be komentarų ir papildomų paaiškinimų. Tonas – modernus, aiškus ir draugiškas.“*  

  - **Pastaba UI:** Skaidrėje – antraštė „PRAKTINĖS UŽDUOTYS“; trys kategorijos (Įvairių stilių tekstų kūrimas | Atsakymai į klientų el. laiškus | **HTML kūrimo promptas**); po kiekvienu punktu – CopyButton; 3. kategorijoje – lentelė 5 blokų (Vaidmuo, Užduotis, Kontekstas, Formatas, Tonas) + pilnas pavyzdinis promptas (CopyButton); galima nuoroda į Modulio 1 blokus (Meta, Input, Output).

**Vieta eilėje:** Skaidrė **„Darbas su DI: struktūruotas procesas“** eina **po 4.1a (Konteksto inžinerija), 4.1a2, 4.1a4 (5 principai), 4.1a3 (RL/RLHF), 4.1a5 ir 4.1 – po to eina 4.1b2 (BONUS: Proceso prompt), 4.1c (Schema 3), 4.1d (Schema 4), tada 4.2 RAG ir toliau tokenizaciją (4.4).** Priežastis: pirmiausia dalyviai išmoksta **kas yra konteksto inžinerija** (4.1a–4.1a2), gauna **5 principus ir vertinimo įrankį** (4.1a4 – praktika prieš teoriją), tada **RL/RLHF** (4.1a3), **parametrų lauką (4.1a5)**, o tik po to – struktūruotą darbą su DI (4.1b) ir pažangius workflow.

**Pagrindiniai įrankiai (prieš konstruojant workflow)** – turinys (vieta: **prieš** skaidrę „Darbas su DI: struktūruotas procesas“ ir prieš DI workflow pavyzdžius; kopijuojamas į UI/JSON):  
  - **Pavadinimas:** PAGRINDINIAI ĮRANKIAI.  
  - **Paskirtis:** Parodyti **pagrindinius DI įrankius** ir jų paskirtis – kad prieš konstruojant workflow (8 žingsnių procesas arba įrankių grandinės) dalyvis žinotų, **kurį įrankį** naudoti kokiai užduočiai (rašymas, analizė, biuras).  
  - **Penkių įrankių palyginimas (lentelė arba kortelės) – visi su veikiančiomis nuorodomis:**  

    | Įrankis | Nuoroda | Platforma / kūrėjas | Pagrindinės paskirtys / funkcijos |
    |---------|---------|----------------------|-----------------------------------|
    | **ChatGPT** | https://chat.openai.com | OpenAI (JAV) | Asistentas; rašymui; pagalbai; strategijai; planavimui. |
    | **Claude** | https://claude.ai | Anthropic (JAV) | Duomenims; analizei; vizualizacijai; kodo rašymui; klaidų taisymui. |
    | **Copilot** | https://copilot.microsoft.com | Microsoft (JAV) | Biuro valdymui; integracija su MS Word, PowerPoint, Excel, Teams, Outlook. |
    | **Gemini** | https://gemini.google.com | Google (JAV) | Tyrimams; dokumentų rengimui; vaizdų generavimui; video generavimui; Google aplinka. |
    | **Gamma** | https://gamma.app | Gamma (JAV) | Prezentacijoms; pasiūlymams; brošiūroms; leidiniams; tinklalapiams. |

  - **Takeaway:** Konstruojant workflow – pirmiausia pasirink **tinkamą įrankį** užduočiai (pvz. rašymas/strategija → ChatGPT; duomenys/kodas → Claude; dokumentai/Office → Copilot; tyrimai/vaizdai/Google → Gemini; prezentacijos/turinys → Gamma), tada taikyk 8 žingsnių procesą arba jungk įrankius grandinėse (ChatGPT → Claude → Gamma → …).  
  - **Pastaba UI:** Skaidrė arba blokas „PAGRINDINIAI ĮRANKIAI“ – 5 kortelės (ChatGPT | Claude | Copilot | Gemini | Gamma) su **veikiančiomis nuorodomis** (href į lentelės stulpelį Nuoroda), kūrėju ir sąrašu paskirčių; rodoma **prieš** „Darbas su DI: struktūruotas procesas“ ir prieš skaidrę „DI workflow“ su įrankių grandinės pavyzdžiais.

**Metodinis promptas vs Agentinis promptas** – turinys (vieta: po Pagrindinių įrankių, **prieš** „Darbas su DI: struktūruotas procesas“; kopijuojamas į UI/JSON):  
  - **Pavadinimas:** PRAKTINĖ UŽDUOTIS – METODINIS IR AGENTINIS PROMPTAS.  
  - **Paskirtis:** Parodyti **du promptų tipus** ir **kuo jie skiriasi**: vienas **pateikia metodiką** (struktūra, žingsniai, formatas), kitas **atlieka workflow** – DI naudoja **agentines funkcijas** (paieška, įrankiai, kelios veiklos). Agentines funkcijas turi ChatGPT, Claude, Gemini ir kt. (Browse, Search, Tools).  
  - **Apibrėžimai:**  
    - **Metodinis promptas:** Nurodo **kaip** atlikti užduotį – rolė, žingsniai, reikalinga išvestis (struktūra, formatas). Modelis generuoja atsakymą pagal nurodytą metodiką **vienu ar keliais išėjimais**, be būtinos išorinės paieškos ar įrankių. Pvz. „Rolė – analitikas. Atlik gilią [sektoriaus] analizę [šalis/regionas] kontekste. Pateik: 1) Pagrindinius rinkos dalyvius, 2) Rinkos dydį ir augimo tendencijas, 3) Reguliacinius aspektus, 4) SWOT analizę. Formatas – ataskaita, lentelė.“  
    - **Agentinis promptas:** Prašo DI **atlikti veiksmus** – ieškoti informacijos, naudoti įrankius (Browse, Search, API), surinkti duomenis ir grąžinti rezultatą. DI veikia kaip **agentas** (workflow su skirtingomis agentinėmis funkcijomis). Pvz. „Ieškok info ir surask TOP10 [sektoriaus]: pavadinimas, vadovas, pajamos, kontaktai, el. paštas, web.“ Tokie promptai **reikalauja**, kad platforma turėtų įjungtas paieškos/įrankių režimus (ChatGPT, Claude, Gemini ir t. t.).  
  - **Kuo skiriasi (santrauka):** Metodinis – **pateikia metodiką**, rezultatas – struktūrizuotas atsakymas pagal tavo instrukcijas. Agentinis – **atlieka workflow** su agentinėmis funkcijomis (paieška, ištraukimas, sintezė); reikia įrankių palaikymo.  
  - **Pavyzdiniai promptai (CopyButton):**  
    - **Metodinis:** „Rolė – analitikas. Atlik gilią [Sektoriaus] analizę [šalis/regionas] kontekste. Pateik: 1) Pagrindinius rinkos dalyvius, 2) Rinkos dydį ir augimo tendencijas, 3) Reguliacinius aspektus, 4) SWOT analizę. Formatas – ataskaita, lentelė.“  
    - **Agentinis:** „Ieškok info ir surask TOP10 [sektoriaus]: pavadinimas, vadovas, pajamos, kontaktai, el. paštas, web.“  
  - **Pastaba UI:** Skaidrė „PRAKTINĖ UŽDUOTIS“ – dvi kortelės (Metodinis promptas | Agentinis promptas) su apibrėžimais, „Kuo skiriasi“ bloku ir pavyzdiniais promptais (CopyButton); galima nuoroda „Agentines funkcijas palaiko ChatGPT, Claude, Gemini ir kt.“

**System prompt vs Master prompt** – turinys (vieta: po Metodinio/Agentinio, **prieš** „Darbas su DI: struktūruotas procesas“; kopijuojamas į UI/JSON):  
  - **Pavadinimas:** SYSTEM PROMPT VS MASTER PROMPT.  
  - **Paskirtis:** Aiškiai atskirti **dvi skirtingas promptų paskirtis**: vienas apibrėžia, **kaip DI sistema turi veikti**; kitas – **kas yra vartotojas arba organizacija**, kad DI geriau suprastų kontekstą ir suteiktų personalizuotus atsakymus.  
  - **Takoskyra (lentelė arba dvi kortelės):**  

    | | **System prompt** | **Master prompt** |
    |--|-------------------|-------------------|
    | **Ką apibrėžia** | Kaip DI **turi veikti** – taisyklės, apribojimai, elgesys, formatas. | **Kas yra vartotojas arba organizacija** – kontekstas apie jus. |
    | **Tipinis turinys** | Rolė modelio, kalbos taisyklės, „nežinau“ taisyklė, ribos, output formatas. | Vardas/profesija, organizacijos tikslai, darbo stilius, auditorija, komunikacijos tonas. |
    | **Pavyzdys** | „Atsakyk lietuvių kalba. Jei nežinai – parašyk „Nežinau“. Formatas – punktų sąrašas.“ | „Aš esu startuolio įkūrėjas, dirbu su B2B klientais, 10 m. patirties. Auditorija – vadovai.“ |

  - **Master prompt – apibrėžimas:** Personalizuotas promptas apie **konkretų asmenį arba organizaciją**, suteikiantis DI kontekstą: kas tu esi (vardas, profesija, patirtis), ką daro tavo organizacija, tikslai ir prioritetai, darbo stilius ir pageidavimai, auditorija.  
  - **Master prompt metodas (populiarintojai: Tiago Forte, Hayden Miyamoto):** Master promptas veikia kaip **jūsų asmeninis profilis DI sistemai** – vietoj to, kad kiekvieną kartą aiškintumėte kontekstą, DI jau „žino“, kas jūs esate ir ko jums reikia.  
  - **Ką apima Master prompt:**  
    - **Asmeninis:** vardas ir profesija; patirtis ir įgūdžiai; darbo stilius ir pageidavimai; trumpalaikiai ir ilgalaikiai tikslai; su kuo dirbate (tikslinė auditorija); komunikacijos tonas.  
    - **Organizacijos:** įmonės pavadinimas ir sritis; misija ir vertybės; produktai/paslaugos; tikslinė rinka; brendas ir komunikacijos stilius; strateginiai tikslai.  
  - **Kaip sukurti (3 žingsniai):** (1) DI užduoda klausimus apie jus arba organizaciją; (2) Jūs atsakote (tekstas arba balsas); (3) DI sugeneruoja konsoliduotą Master Prompt dokumentą. Rezultatas: vienas dokumentas, kurį įkeliate į DI kiekvieną kartą arba saugote kaip bazę.  
  - **Praktinis pavyzdys (CopyButton):**  
    - **Be Master prompt:** „Padėk man parašyti LinkedIn įrašą apie naują produktą. Aš esu startuolio įkūrėjas, dirbu su B2B klientais, turiu 10 metų patirties…“ (kontekstas kartojamas kiekvieną kartą).  
    - **Su Master prompt:** „Parašyk LinkedIn įrašą apie naują produktą.“ (DI jau žino, kas tu esi iš Master Prompt – sutaupomas laikas, nuoseklesni rezultatai).  
  - **Nauda (4 punktai):** Sutaupomas laikas – nereikia kartoti konteksto; nuoseklesni rezultatai – DI geriau supranta jūsų poreikius; personalizuoti atsakymai – pritaikyti jūsų stiliui; efektyvesnis darbas – greičiau pasiekiate rezultatų.  
  - **Ryšys su moduliu:** System prompt atitinka **sisteminius parametrus** ir **rolės apibrėžimą** (4.1a5, 4.1b žingsnis 3); Master prompt – **konteksto pateikimą** (4.1b žingsnis 2) ir **Kokybinius parametrus** (stilius, auditorija). Kartu jie padaro DI sesijas nuoseklesnes ir asmenines.  
  - **Pastaba UI:** Skaidrėje – antraštė „SYSTEM PROMPT VS MASTER PROMPT“; lentelė arba dvi kortelės (System prompt | Master prompt); blokas „Master prompt – ką apima“ (Asmeninis / Organizacijos); „Kaip sukurti“ (3 žingsniai); pavyzdys „Be vs Su Master prompt“ (CopyButton); „Nauda“ (4 punktai).

**Darbas su DI: struktūruotas procesas (4.1b) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** DARBAS SU DI: STRUKTŪRUOTAS PROCESAS.  
  - **8 žingsniai (numeruoti, balta / geltona tekstas), tinkami interaktyviam workflow:**  
    1. **Tikslų nustatymas** – Apibrėžkite, ką norite pasiekti: kūryba, tekstų rašymas, problemų sprendimas.  
    2. **Konteksto pateikimas** – Suteikite pradinę informaciją, kad DI geriau suprastų jūsų poreikius.  
    3. **Rolės apibrėžimas** – Nurodykite, kaip turėtų veikti DI (pvz. ekspertas, kūrybinis rašytojas).  
    4. **Promptai** – Turinys, strategijos ir manipuliacijos (ko vengti).  
    5. **Grįžtamasis ryšys** – Tobulinkite užklausas, jei atsakymai nėra tikslūs.  
    6. **Konteksto atnaujinimas** – Ilgesnėse sesijose priminkite DI kontekstą (ryšys su konteksto langu ir „pamiršta“).  
    7. **Šablonų kūrimas** – Naudokite šablonus pasikartojančioms užduotims (ryšys su „Sisteminis svertas“).  
    8. **Sesijos pabaiga** – Apibendrinkite rezultatus ir išsaugokite svarbią informaciją būsimoms sesijoms.  
  - **Interaktyvus workflow (rekomendacija UI):** Nubraižyti procesą kaip 8 blokų / žingsnių schemą (horizontaliai arba vertikaliai); kiekvienas žingsnis – kortelė arba mygtukas, paspaudus – išsiplečia trumpas aprašas ir (neprivaloma) pavyzdys. Galima nuorodos į vėlesnes skaidres (pvz. „Rolė“ → Modulio 1 Meta blokas, „Konteksto atnaujinimas“ → Tokenų ekonomika).  
  - **Ryšys su tokenizacija:** Ši skaidrė eina **prieš** tokenizaciją – pirmiausia suprantamas **struktūruotas darbas su DI**, vėliau (4.4) aiškinama, **kodėl** konteksto langas ir tokenų ribos svarbūs.
  - **Skaidrė „DI workflow“ (UI, tipas `ai-workflow`):** Aiškina bendrus workflow etapus (**1. Įvestis** – tekstinės užklausos, pradiniai duomenys, kontekstas; **2. Apdorojimas** – analizė ir sintezė, struktūros kūrimas, optimizavimas; **3. Rezultatas** – vizualizacija, prezentacija, galutinis produktas) ir pateikia trumpus **įrankių grandinės pavyzdžius**: ChatGPT → Claude AI → Gamma App; GPT → Figma; GPT → Gamma; Gemini → Calendar. Vieta Modulio 4: po skaidrės „Kam žmonės naudoja GPT?“ (pie), prieš „Įvadas į konteksto inžineriją“.

**Workflow pavyzdys: Prezentacijų kūrimas su DI** (viena iš įrankių grandinės pavyzdžių – įdarbinamas prie DI workflow temos):  
  - **Pavadinimas / kontekstas:** 🧠 Prezentacijų kūrimas su DI – švarus įrankių sąrašas. Turinys gali būti rodomas kaip **papildomas blokas** skaidrėje „DI workflow“, atskira skaidrė arba collapsible „Pavyzdys: prezentacijos“.  
  - **Įrankių lentelė (kopijuojama į UI/JSON pagal poreikį):**

    | Įrankis | Kam geriausiai tinka | Pagrindinės DI funkcijos | Išskirtinumas | Nuoroda |
    |---------|----------------------|---------------------------|----------------|---------|
    | Gamma | Vadovams, konsultantams, mokymams | Prompt → visa prezentacija, turinio santraukos, struktūra, vizualai | Prezentacija kaip web puslapis (scroll, interaktyvumas) | https://gamma.app |
    | SlidesAI | Greitam darbui su Google Slides | Tekstas → skaidrės, automatinė struktūra, dizainas | Tiesioginė integracija su Google Slides | https://www.slidesai.io |
    | Prezent.ai | Verslui, korporacijoms | Story builder, brand adaptacija, AI slide generator | Fokusas į verslo naratyvą + brand consistency | https://www.prezent.ai |
    | Canva | Universalus naudojimas | Magic Write, Text-to-Image, šablonai, diagramos | „Viskas viename“: dizainas + DI | https://www.canva.com |
    | Visme | Ataskaitoms, duomenims | DI pagalba vizualams, infografikai, interaktyvumas | Stipriausia duomenų vizualizacija | https://www.visme.co |
    | Beautiful.ai | Tiems, kas nemoka dizaino | Smart templates, auto-layout, brand kit | Dizainas prisitaiko pats | https://www.beautiful.ai |

  - **⚡ Greita orientacija (jei reikia rinktis 1–2):** Mokymams / viešam turiniui → Gamma. Greitai iš teksto į skaidres → SlidesAI. Korporatyvinėms prezentacijoms → Prezent.ai. Universalus kasdienis įrankis → Canva. Duomenys + interaktyvumas → Visme. Be dizaino galvos skausmo → Beautiful.ai.  
  - **🎯 Universalus promptas (veikia su Gamma / Prezent / Canva):**  
    *„Sukurk 8 skaidrių prezentaciją tema [TEMA]. Tikslinė auditorija: [AUDITORIJA]. Stilius: profesionalus, aiškus, be perteklinių tekstų. Įtrauk: – struktūrą (problema → sprendimas → nauda), – 2 infografikus, – 1 vizualinį akcentą, – aiškų „key takeaway“ pabaigoje. Naudok mūsų prekės ženklo spalvas: [SPALVOS].“*  
  - **Takeaway (kritinis vertinimas):** ❌ Ne įrankiai kuria gerą prezentaciją – **promptas kuria**. ❌ ~80 % naudotojų perka „Canva“, bet neišnaudoja DI. ✅ Didžiausias leverage – **turinio struktūra + aiškus tikslas**.  
  - **Pastaba UI:** Galima įtraukti kaip antrą skaidrės „DI workflow“ turinio bloką („Pavyzdys: prezentacijos“), atskirą skaidrę su tipu „workflow-example“ arba collapsible su lentelė + greita orientacija + promptas + takeaway.

**Skaidrė „BONUS: Proceso prompt ir workflow sudarymas“ (4.1b2) – turinys (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po 4.1b (Darbas su DI: struktūruotas procesas); prieš 4.1c (Schema 3). Parodo, kaip **prašyti DI** sukurti procesus ir workflow – natūralus tęsinys po „kaip pats dirbi su DI sistemingai“.  
  - **Pavadinimas:** BONUS: PROCESO PROMPT.  
  - **Apibrėžimas:** Procesais grįstos užklausos skirtos tokioms užduotims kaip **strategijos kūrimas**, **projektų vykdymas** ar **veiklos tobulinimas**. **PROCESAS – SUTEIKIA AIŠKUMO** komandoms ir sprendimų priėmėjams.  
  - **Pavyzdžiai (3, su copy-paste promptais):**  

    1. **Verslo strategijos kūrimas**  
       **Promptas:** „Sukurk procesą vidutinio dydžio technologijų įmonės augimo strategijai plėtoti. Suskirstyk į etapus, tokius kaip rinkos analizė, produkto kūrimas ir veiklos plėtra. Pabrėžk dažniausiai pasitaikančias klaidas ir kaip jų išvengti.“  

    2. **Projektų valdymas**  
       **Promptas:** „Pateik struktūruotą procesą, kaip valdyti skaitmeninę transformaciją, pradedant nuo pirminių suinteresuotų šalių pritarimo iki įgyvendinimo. Įtrauk pagrindinius etapus ir rizikų valdymo strategijas.“  

    3. **Operacijų tobulinimas**  
       **Promptas:** „Nurodyk žingsnis po žingsnio procesą, kaip optimizuoti tiekimo grandinės operacijas mažmeninės prekybos įmonėje. Dėmesį skirk kaštų mažinimui, efektyvumo didinimui ir technologijų integravimui.“  

  - **Ryšys su 4.1b:** Struktūruotas procesas (4.1b) – kaip **tu** dirbi su DI (8 žingsniai); Proceso prompt (4.1b2) – kaip prašai DI **sukurti** procesą/workflow konkrečiai užduočiai (strategija, projektas, operacijos).  
  - **Pastaba UI:** Skaidrėje – antraštė „BONUS: PROCESO PROMPT“, apibrėžimas, 3 kortelės (Verslo strategija | Projektų valdymas | Operacijų tobulinimas) su CopyButton kiekvienam promptui; galima „Kodėl proceso prompt padeda?“ (aiškumas komandoms, sprendimų priėmėjams).

**Vieta prieš RAG:** Skaidrės **4.1c** ir **4.1d** eina **po 4.1b ir 4.1b2, PRIEŠ 4.2 RAG**. Jos apibrėžia konceptualų rėmą: kaip LLM/DI gali naudoti išorinius įrankius (Tool Use) ir atpažinimą (Retrieval), kad vėliau būtų lengviau suprasti RAG (išoriniai šaltiniai + DI).

**Skaidrė „Schema 3: LLM su RAG ir įrankiais“ (4.1c) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** LLM SU RAG IR ĮRANKIAIS (Schema 3).  
  - **Apibrėžimas:** Schema rodo, kaip didelis kalbos modelis (LLM/DI) ne tik generuoja atsakymus iš įvesties, bet gali naudoti **įrankius (Tool Use)** – tarp jų **gavimą (Retrieval)** iš išorinės duomenų bazės – ir tokiu būdu papildyti atsakymus išorine informacija.  
  - **Srautas (flow):**  
    - **Įvestis (Input)** – tekstas → **LLM** → **Išvestis (Output)**.  
    - **Šaka iš LLM:** **Tool Use** → po ja: **Generation** (generavimas) ir **Retrieval** (gavimas). **Retrieval** rodo ryšį su duomenų saugykla (piktograma: duomenų bazė / stulpelių krūva).  
  - **Svarbūs terminai:**  
    - **Tool Use** – DI naudoja išorinius įrankius (kvietimai, paieška, skaičiavimai).  
    - **Generation** – turinio generavimas (tekstas, kodas ir kt.).  
    - **Retrieval** – informacijos gavimas iš išorinio šaltinio (duomenų bazė, dokumentai); tai **RAG** koncepcijos pagrindas.  
  - **Ryšys su RAG (4.2):** Ši schema paruošia RAG temą – parodo, kad DI gali „pažiūrėti“ į duomenis iš duomenų bazės ir juos panaudoti atsakyme.  
  - **Vizualas:** Naudoti schemą pagal autorinę medžiagą (Diagram 3: Input → LLM → Output; iš LLM žemyn → Tool Use → Generation, Retrieval → duomenų bazė).  
  - **Pastaba UI:** Skaidrėje – antraštė, schema (paveikslėlis arba nubraižyta diagrama), trumpas apibrėžimas ir terminai (Tool Use, Generation, Retrieval); galima „Kodėl tai svarbu prieš RAG?“ (1–2 sakiniai).

**Skaidrė „Schema 4: Multi-Modal LLM workflow“ (4.1d) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** MULTI-MODAL LLM WORKFLOW (Schema 4).  
  - **Apibrėžimas:** Pažangesnė schema: LLM/DI apdoroja **multi-modal** įvestį (ne tik tekstas – ir vaizdas, dokumentas ir kt.) ir gali duoti **multi-modal** išvestį. Be to, aiškiai atskiriama **Tool Use** (generavimas) ir **Memory** (atmintis) su **Retrieval** – t. y. informacijos gavimas iš išorinės atminties / žinių bazės.  
  - **Srautas (flow):**  
    - **Įvestis (Input)** – multi-modal (piktogramos: vaizdas, tekstas) → **LLM** → **Išvestis (Output)** – multi-modal.  
    - **Šaka 1 iš LLM:** **Tool Use** → **Generation**.  
    - **Šaka 2 iš LLM:** **Memory** → **Retrieval** → išorinė saugykla (piktograma: blokai / krūva).  
  - **Svarbūs terminai:**  
    - **Multi-modal** – kelios įvesties/išvesties rūšys (tekstas, vaizdas, garsas ir kt.).  
    - **Memory** – aiškiai atskirta „atmintis“ kaip retrieval šaltinis (skirtingai nuo bendro Tool Use), pabrėžia ilgalaikę arba sesijinę informacijos naudojimą.  
    - **Retrieval** – informacijos gavimas iš išorinio šaltinio; čia susieta su Memory.  
  - **Ryšys su RAG (4.2):** Memory + Retrieval konceptualiai artimi RAG – DI „atsimeni“ arba pasiima informaciją iš išorinio šaltinio ir naudoja atsakyme.  
  - **Vizualas:** Naudoti schemą pagal autorinę medžiagą (Diagram 4: Multi-Modal Input → LLM → Multi-Modal Output; Tool Use → Generation; Memory → Retrieval → saugykla).  
  - **Pastaba UI:** Skaidrėje – antraštė, schema, apibrėžimas ir terminai (Multi-modal, Tool Use, Memory, Retrieval); galima palyginimas su Schema 3 (kas pridėta: multi-modal, atskira Memory).

**RAG (4.2) – pristatymas (skaidrės turinys, kopijuojamas į UI/JSON):**  
  - **Vieta:** RAG skaidrė eina **po 4.1c ir 4.1d** – dalyviai jau matė, kad DI gali naudoti Retrieval ir išorinius šaltinius; dabar aiškinama, kaip tai formaliai vadinama (RAG) ir kaip naudoti promptuose.  

  - **Kontekstas ir tokenai (nuoroda į 4.4):** RAG dažnai priklauso nuo to, **kiek konteksto (teksto) gali įtraukti** į vieną užklausą – tai lemia konteksto langas (tokenų riba). Daugiau apie tokenus, konteksto langą ir kaip taupyti – skaidrėse **4.4 Tokenų ekonomika**. Čia pakanka žinoti: kuo daugiau tinkamai paruošto konteksto (šaltinių), tuo tikslesnis RAG atsakymas, jei jis telpa į platformos ribas.  

  - **Pavadinimas:** RETRIEVAL AUGMENTED GENERATION (RAG).  

  - **Apibrėžimas (balta tekstas):**  
    RAG – tai metodas, kai LLM atsakymą generuoja ne iš atminties, o remdamasis **realiai surasta informacija** iš jūsų dokumentų, duomenų bazių ar API.  

  - **Nauda (geltona / paryškinta):**  
    Tai suteikia **tikslumą**, **aktualumą** ir leidžia **pasitikėti rezultatu**.  

  - **Kaip veikia RAG (3 žingsniai):**  
    1. **Paieška (Search)** – sistema suranda reikalingą informaciją iš jūsų šaltinių (dokumentai, DB, žinių bazės).  
    2. **Atranka (Selection)** – modelis pasirenka svarbiausius faktus ir kontekstą.  
    3. **Generavimas (Generation)** – atsakymas sukuriamas remiantis rasta informacija, ne spėlionėmis.  

  - **Promptų gairės (papildomai skaidrėje arba kortelėje):**  
    „Naudok tik pateiktą kontekstą“, „Jei informacijos nėra – parašyk, kad nežinai“, „Cituok šaltinį“.  
  - **Kopijuojamas mini-šablonas RAG stiliaus užklausai:**  
    pvz. „Atsakyk tik pagal šį kontekstą: [įklijuoti tekstą]. Jei atsakymo nėra kontekste – parašyk „Nežinau“. Cituok fragmentą.“  

  - **Pastaba UI:** Skaidrėje – antraštė, apibrėžimas, nauda (3 punktai), 3 žingsniai (Paieška, Atranka, Generavimas) numeruoti; galima CopyButton mini-šablonui ir gairėms.

  - **RAG praktiniai pavyzdžiai – RAG analitikas (du aktualūs šablonai, kopijuojami į UI/JSON):**  
    **Pavadinimas skaidrės / bloko:** RAG ANALITIKAS.  
    **Tikslas:** Parodyti RAG pritaikymą analitinėms užduotims – rolė, užduotis, oficialūs šaltiniai (RAG), reikalinga išvestis, formatas.  

    **1. Rinkos analizės promptas (su RAG)**  
    - **Rolė:** Analitikas.  
    - **Užduotis:** Atlik gilią [Sektoriaus] analizę [šalis/regionas] kontekste.  
    - **RAG – naudok tik surastą informaciją iš oficialių šaltinių:**  
      Lietuvos banko duomenų bazė, Seimo dokumentų paieška, Eurostat, Vyriausybės, ministerijų, ES institucijų ataskaitos.  
    - **Pateik:** Pagrindinius rinkos dalyvius; rinkos dydį ir augimo tendencijas; reguliacinius aspektus; SWOT analizę.  
    - **Formatas:** ES projekto paraiškos dalis.  

    **2. Konkurentų analizės šablonas (su RAG)**  
    - **Rolė:** Technologijų ekspertas.  
    - **Užduotis:** Identifikuok 5 pagrindinius [technologijos/paslaugos] konkurentus ES rinkoje.  
    - **RAG: naudok tik patikimus šaltinius:**  
      Eurostat, OECD, Europos Komisijos duomenų portalai, Registrų centras, Oficialios įmonių ataskaitos.  
    - **Kiekvienam konkurentui pateik:** SWOT; rinkos dalį; inovacijų lygį; sukurk papildomus vertinimo kriterijus ir įvertink pagal juos.  
    - **Formatas:** Analitinė ataskaita.  

    **Pastaba UI:** Skaidrėje arba atskirame bloke „RAG analitikas“ – dvi kortelės (Rinkos analizė | Konkurentų analizė) su Rolė, Užduotis, RAG šaltiniai, Pateik, Formatas; CopyButton kiekvienam šablonui.

**Skaidrė „Atviros duomenų bazės ir RAG: oficialūs šaltiniai ir pavyzdžiai“ (4.2-open) – turinys (kopijuojamas į UI/JSON):**
  - **Vieta:** Po RAG pristatymo (4.2) ir RAG analitiko pavyzdžių; **prieš** 4.2a (Darbas su RAG: memory, išoriniai įrankiai).
  - **Pavadinimas:** ATVIROS DUOMENŲ BAZĖS IR RAG – OFICIALŪS ŠALTINIAI IR PAVYZDŽIAI.
  - **Tikslas:** Parodyti, **kur** rasti oficialius atvirus duomenis ir **kaip** juos naudoti RAG stiliaus užklausose – trumpi, realistiniai pavyzdžiai, parodantys funkcionalumą (paieška, filtravimas, nuorodos).

  - **1. Oficialūs atviri duomenų šaltiniai (RAG kontekste)**  
    - **Eurostat** (ec.europa.eu/eurostat) – ES statistikos: BVP, užimtumas, prekyba, demografija, regionai. API ir atsisiuntimai.  
    - **data.europa.eu** – ES atvirų duomenų portalas: įstatymai, ataskaitos, datasetai iš įstaigų ir valstybių.  
    - **data.gov** (JAV) – JAV valstybiniai atviri duomenys.  
    - **Oficialūs nacionaliniai portalai** – pvz. Lietuva: atviri duomenų šaltiniai (registrai, statistikos departamentas, ministerijų ataskaitos).  
    - **OECD, Pasaulio bankas** – tarptautinė lyginamoji statistika ir rodikliai.

  - **2. Kaip naudoti atviras duomenų bazes ieškant info – trumpi pavyzdžiai (funkcionalumas)**  

    | Pavyzdys | Užklausa / veiksmas | Rezultatas (ką parodo) |
    |----------|----------------------|-------------------------|
    | **Eurostat – BVP tendencija** | „Iš Eurostat duomenų: kokia [šalies] BVP kitimo tendencija per paskutinius 5 metus? Cituok datasetą ar rodiklį.“ | RAG naudoja tik oficialią statistiką; galima nurodyti konkretų dataset (pvz. nama_10_gdp). |
    | **data.europa.eu – tema** | „Surask data.europa.eu atvirų duomenų apie [pvz. atsinaujinančią energiją] ES. Pateik 3 datasetus su nuorodomis ir trumpu aprašymu.“ | Paieška pagal temą; išvestis su nuorodomis – RAG šaltinių nurodymas. |
    | **Registrų / įmonių duomenys** | „Pagal oficialius [šalies] registrus: kokios 5 didžiausios [sektoriaus] įmonės pagal apyvartą? Šaltinį nurodyk.“ | RAG ribojamas oficialiais registrais – mažesnė haliucinacijų rizika. |
    | **Lyginamoji statistika** | „Iš OECD ar Eurostat: palygink [rodiklį, pvz. švietimo išlaidos] 3 šalyse. Pateik skaičius ir šaltinio nuorodas.“ | Keli oficialūs šaltiniai vienoje užklausoje; nuorodos prie kiekvienos išvados. |

  - **3. Kopijuojami mini-promptai (RAG + atviri duomenys)**  
    - „Naudok **tik** Eurostat (ec.europa.eu/eurostat) duomenis. Užduotis: [aprašyk, pvz. BVP palyginimas]. Pateik atsakymą su datasetų pavadinimais ir nuorodomis.“  
    - „Šaltiniai: data.europa.eu ir [ministerijos] ataskaitos. Surask ir apibendrink informaciją apie [tema]. Kiekvieną teiginį pagrįsk šaltiniu.“  
    - „Ieškok oficialių atvirų duomenų (Eurostat, nacionalinis statistikos portalas) apie [tema]. Pateik 3–5 datasetus su nuorodomis ir trumpu naudojimo pavyzdžiu.“

  - **Pastaba UI:** Skaidrėje – blokas „Oficialūs šaltiniai“ (sąrašas su nuorodomis); lentelė „Pavyzdžiai“ (4 eilutės: Eurostat, data.europa.eu, Registrai, Lyginamoji statistika); blokas „Mini-promptai“ su CopyButton; galima collapsible „Nuorodos“ (Eurostat, data.europa.eu, data.gov).

**Skaidrė „Darbas su RAG: memory, išoriniai įrankiai, duomenų paruošimas“ (4.2a) – turinys (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po RAG pristatymo (4.2) ir RAG analitiko pavyzdžių; prieš Deep research (4.3).  
  - **Pavadinimas:** DARBAS SU RAG: MEMORY, IŠORINIAI ĮRANKIAI IR DUOMENŲ PARUOŠIMAS.  
  - **Tikslas:** Parodyti, kaip dirbti su RAG naudojant **Memory** (platformos atmintį), **išorinius įrankius** (NoteLM, Trello ir pan.) ir kaip **analizuoti bei paruošti duomenis su nuorodomis**.  

  - **1. Memory kaip RAG kontekstas**  
    - Platformos **Memory** (pvz. ChatGPT Memory, Claude Projects) leidžia išsaugoti kontekstą, preferencijas ir faktus tarp sesijų – DI gali juos naudoti kaip papildomą „šaltinį“ atsakymams.  
    - **Praktika:** Nurodyk prompte: „Naudok ir mano išsaugotą kontekstą (Memory), ir pateiktus dokumentus.“ Memory + dokumentai = stipresnis RAG scenarijus.  

  - **2. Išoriniai įrankiai – pavyzdžiai**  
    - **NoteLM** – įrankis, leidžiantis susieti užrašus / dokumentus su kalbos modeliu (retrieval iš savo notų); tinka asmeniniam RAG ir nuorodų išsaugojimui.  
    - **Trello** – lentos ir kortelės; galima eksportuoti arba aprašyti užduotis/korteles kaip kontekstą RAG promptui („Analizuok šią Trello lentą: [įklijuoti arba nuoroda]. Pateik santrauką su nuorodomis į korteles.“).  
    - *Bendras principas:* bet koks išorinis šaltinis (notai, lentos, CRM, ataskaitos) gali būti RAG įvestis – svarbu **paruošti duomenis** ir **nurodyti nuorodas**.  

  - **3. Analizuok ir paruošk duomenis su nuorodomis**  
    - **Gairės:**  
      - Struktūruok šaltinius (antraštės, sąrašai, nuorodos į puslapius/korteles).  
      - Pridėk aiškius žymes arba ID (pvz. [Šaltinis 1], [Trello kortelė X]), kad DI galėtų cituoti.  
      - Promptuose reikalauk: „Cituok šaltinį (nuoroda arba ID)“ arba „Pateik nuorodas prie kiekvieno teiginio.“  
    - **Kopijuojamas mini-šablonas:**  
      „Štai duomenys su nuorodomis: [įklijuoti tekstą su [Šaltinis 1], [Šaltinis 2]…]. Analizuok ir pateik išvadas; prie kiekvienos išvados nurodyk nuorodą į šaltinį.“  

  - **Pastaba UI:** Skaidrėje – trys blokai (Memory; Išoriniai įrankiai – NoteLM, Trello; Duomenų paruošimas su nuorodomis); gairės ir CopyButton mini-šablonui; galima nuorodos į NoteLM / Trello (official links) collapsible.

**DI įrankiai studentams ir mokslui (2026)** – turinys (kopijuojamas į UI/JSON; vieta: po 4.2a, prieš 4.2b):  
  - **Pavadinimas:** DIRBTINIO INTELEKTO ĮRANKIAI STUDENTAMS IR MOKSLUI (2026).  
  - **Tikslas:** Parodyti RAG tipo įrankių rinkinį akademinei paieškai, literatūros apžvalgoms ir tyrimų sintezei – su nuorodomis, pavyzdiniais promptais ir tipine eiga mokymuose / RAG demonstracijoms.  

  - **1. Perplexity – DI paieška su šaltiniais**  
    - **Nuoroda:** https://www.perplexity.ai  
    - **Kam skirta:** Greitai rasti patikimus atsakymus; akademinėms užklausoms, literatūros apžvalgoms; faktų tikrinimui su nuorodomis.  
    - **Pagrindinės funkcijos:** Web (atviri interneto šaltiniai), Academic (akademiniai straipsniai), Math (skaičiavimai ir formulės), Writing (struktūruotas teksto generavimas).  
    - **Kainodara:** Nemokama versija – bazinė; PRO ~20 USD/mėn. (įskaitant GPT-4, Claude).  
    - **Pavyzdinis promptas:** „Paaiškink kognityvinio disonanso teoriją. Pateik pagrindinius tyrimus ir realius pavyzdžius marketinge.“  

  - **2. PaperGuide – „kalbėjimas“ su PDF**  
    - **Nuoroda:** https://www.paperguide.ai  
    - **Kam skirta:** Darbas su moksliniais PDF; literatūros apžvalgos; duomenų ištraukimas iš dokumentų.  
    - **Pagrindinės funkcijos:** Chat with PDF, Literature Review, Extract Data (lentelės iš PDF), Reference Manager (citatos, šaltiniai), AI Writing Assistant.  
    - **Kainodara:** Nemokama – riboti atsakymai; mokama: ~10–17 USD/mėn.  
    - **Pavyzdinis promptas:** „Apibendrink šio PDF pagrindines išvadas, metodiką ir apribojimus. Pateik struktūruotą santrauką.“  

  - **3. Scite – išmanios citatos**  
    - **Nuoroda:** https://scite.ai  
    - **Kam skirta:** Patikrinti, kaip cituojami tyrimai; vertinti šaltinių patikimumą; akademinei analizei.  
    - **Pagrindinės funkcijos:** Smart Citations (palaiko / prieštarauja / mini), Citation Statement Search, Reference Check, naršyklės plėtinys (Chrome, Firefox, Safari).  
    - **Kainodara:** 7 dienų nemokamas laikotarpis; ~19 USD/mėn.  
    - **Pavyzdinis promptas:** „Rask pastarųjų 5 metų tyrimus apie nuotolinio darbo poveikį produktyvumui ir nurodyk, kurie tyrimai vieni kitiems prieštarauja.“  

  - **4. Elicit – tyrimų automatizavimas**  
    - **Nuoroda:** https://elicit.com  
    - **Kam skirta:** Sistemingoms literatūros apžvalgoms; duomenų sintezei; RAG tipo tyrimų paruošimui.  
    - **Pagrindinės funkcijos:** Find papers (125+ mln. straipsnių), Extract data from PDF, Concept mapping, struktūruotos lentelės palyginimui.  
    - **Kainodara:** Nemokama – riboti PDF ir eksportai; mokama: ~10–42 USD/mėn.  
    - **Pavyzdinis promptas:** „Apibendrink naujausius tyrimus apie neuroninių tinklų taikymą realiose sistemose. Pateik tendencijas, rizikas ir praktinius pavyzdžius.“  

  - **Kaip naudoti mokymuose / RAG demonstracijoms**  
    - **Minimalus efektyvus stackas:** 🔍 Paieška → Perplexity | 📄 Dokumentai → PaperGuide | 📚 Citatos → Scite | 🧠 Sintezė → Elicit.  
    - **Tipinė eiga:** (1) Surandi šaltinius (Perplexity) → (2) Analizuoji PDF (PaperGuide / Elicit) → (3) Patikrini citavimo kontekstą (Scite) → (4) Sintetini išvadas (Elicit).  

  - **Pastaba UI:** Skaidrėje arba collapsible – antraštė „DI įrankiai studentams ir mokslui (2026)“; 4 kortelės arba lentelė (įrankis, Kam skirta, Pagrindinės funkcijos, Kainodara, Pavyzdinis promptas, Nuoroda); blokas „Minimalus stackas“ ir „Tipinė eiga“; CopyButton pavyzdiniams promptams.

**Skaidrė „Basic duomenų paruošimas RAG patikimumui“ (4.2b) – turinys (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po 4.2a (Darbas su RAG: memory, išoriniai įrankiai); prieš Deep research (4.3).  
  - **Pavadinimas:** BASIC DUOMENŲ PARUOŠIMAS – KAD RAG DIRBTŲ PATIKIMIAU.  
  - **Tikslas:** Patarimai ir copy-paste promptai duomenų paruošimui prieš naudojant RAG – išvalymas, santraukos, anonsavimas, metaduomenys – kad retrieval ir atsakymai būtų tikslesni ir nuorodomis pagrįsti.  

  - **Patarimai (patikimumui):**  
    1. **Duomenų išvalymas** – pašalink perteklinius tarpus, sugadintus simbolius, dubliavimus; išlaikyk vienodą kodavimą (UTF-8). Švarūs duomenys = geresnė paieška ir mažiau klaidų.  
    2. **Santraukos** – ilgiems dokumentams pridėk trumpą santrauką arba „executive summary“ pradžioje; RAG gali greičiau rasti atitikmenis ir teisingai atrinkti kontekstą.  
    3. **Anonsavimas** – aiškios antraštės, skyrių pavadinimai, sąrašai (bullet/numbered); „pasiūlyk“ turinį (kas bus toliau), kad modelis geriau orientuotųsi.  
    4. **Metaduomenys** – pridėk šaltinio pavadinimą, datą, autorių arba tipą (ataskaita, įstatymas, straipsnis) prie bloko; RAG ir DI gali cituoti ir filtruoti pagal juos.  
    5. **Chunking ir fragmentų dydis (chunk size)** – skirk logiškus fragmentus (pastraipa, skyrius), ne per ilgus; vengk per ilgų „gabalių“ be vidinių antraščių. Logiški fragmentai, ne per ilgi – retrieval tikslesnis (geriausios praktikos: chunk dydis lemia retrieval kokybę).  

  - **Kopijuojami promptai (duomenų paruošimui su DI pagalba):**  

    | Paskirtis | Promptas (copy-paste) |
    |-----------|------------------------|
    | **Išvalymas** | „Išvalyk šį tekstą: pašalink perteklinius tarpus ir dubliavimus, išlaikyk vienodą kodavimą. Išvestį pateik kaip paruoštą RAG šaltiniui.“ |
    | **Santrauka** | „Padaryk 2–3 sakinius santrauką šio dokumento pradžiai (executive summary). Tikslas – RAG sistema greičiau rastų atitikmenis.“ |
    | **Anonsavimas** | „Pridėk aiškias antraštes ir skyrių pavadinimus šiam tekstui; jei reikia – trumpą „turinio anonsą“ pradžioje. Formatas: paruošta RAG kontekstui.“ |
    | **Metaduomenys** | „Prie šio teksto bloko pridėk metaduomenis: šaltinio pavadinimas, data, tipas (pvz. ataskaita/įstatymas). Pateik kaip aiškiai pažymėtą bloką pradžioje.“ |
    | **Chunking** | „Suskirstyk šį dokumentą į logiškus fragmentus (pastraipos arba skyriai); prie kiekvieno pridėk trumpą antraštę. Tikslas – paruošti RAG retrieval.“ |
    | **Visa paruošimas** | „Paruošk šį tekstą RAG naudojimui: 1) išvalyk, 2) pridėk santrauką pradžioje, 3) antraštės ir anonsas, 4) metaduomenys (šaltinis, data, tipas). Pateik vienu bloku.“ |

  - **Pastaba UI:** Skaidrėje – blokas „Patarimai“ (5 punktų: išvalymas, santraukos, anonsavimas, metaduomenys, chunking); lentelė „Promptai“ su CopyButton kiekvienam eilutei; galima trumpas „Kodėl tai pagerina RAG?“ (1–2 sakiniai).

**Skaidrė „100% veikiančios strategijos“ (4.2c) – įtvirtinimas (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po 4.2b (Basic duomenų paruošimas); **RAG bloko pabaiga** – įtvirtinimo skaidrė prieš Deep research (4.3). Integruoja geriausius promptinimo ir RAG naudojimo elementus.  
  - **Pavadinimas:** 100% VEIKIANČIOS STRATEGIJOS.  
  - **Tikslas:** Parodyti tris patikimas strategijas bendravimui su DI/LLM – žingsnis po žingsnio, mąstymo grandinė (CoT), palyginimai ir analogijos – su pavyzdžiais, paaiškinimu „kodėl veikia“ ir ryšiu su RAG bei Deep research.  

  - **1. Instrukcija žingsnis po žingsnio**  
    - **Technika:** Prašyk DI išskaidyti sudėtingą užduotį į mažesnius, nuoseklius žingsnius.  
    - **Pavyzdys (copy-paste):** „Pateik žingsnis po žingsnio gidą: kaip įgyvendinti rinkodaros kampaniją socialiniuose tinkluose.“  
    - **Kodėl tai veikia:** Atsakymai tampa struktūrizuoti ir lengvai pritaikomi – išvestis aiškesnė ir veiksmingesnė.  
    - **Ryšys su RAG / Deep research:** Sudėtingas vartotojo klausimas gali būti išskaidytas prieš perduodant RAG; RAG ištrauką galima pateikti žingsniais; Deep research remiasi multi-step struktūra.  

  - **2. Mąstymo grandinė (Chain of Thought, CoT)**  
    - **Technika:** Prašyk DI mąstyti nuo pradžių iki pabaigos nuosekliai, o ne iš karto pateikti išvadą.  
    - **Pavyzdys (copy-paste):** „Paaiškink, kaip veikia kainodaros strategijos – nuo produkto pozicionavimo iki galutinės kainos nustatymo.“  
    - **Kodėl tai veikia:** Mažiau skubotų išvadų; logiškesni ir nuoseklesni paaiškinimai, todėl tikslesni ir labiau patikimi atsakymai.  
    - **Ryšys su RAG / Deep research:** RAG atsakyme CoT padeda sintezuoti kelis šaltinius, atpažinti prieštaravimus ir sudėlioti argumentuotą atsakymą; Deep research (4.3) tiesiogiai naudoja CoT/ToT.  

  - **3. Palyginimai ir analogijos**  
    - **Technika:** Prašyk DI palyginti sąvokas arba naudoti analogijas – sudėtingos idėjos tampa suprantamesnės.  
    - **Pavyzdys (copy-paste):** „Palygink tradicinę ir skaitmeninę rinkodarą; nurodyk, kada geriausia naudoti kiekvieną.“  
    - **Kodėl tai veikia:** Techninės sąvokos lengviau suvokiamos ir įsimenamos – geresnis mokymasis ir išlaikymas.  
    - **Ryšys su RAG / Deep research:** RAG atsakymą galima prašyti pateikti palyginimo forma iš kelių šaltinių; sudėtingas RAG išvestį galima „išsiaiškinti“ per analogijas su pažįstamomis sąvokomis.  

  - **Integracijos pastaba (skaidrėje arba po blokais):** Šios trys strategijos tinka ir **RAG** (duomenų paruošimas, užklausų formulavimas, atsakymų struktūra), ir **Deep research** (žingsniai, samprotavimas, sintezė) – tai bendros „geriausios praktikos“, kurias verta naudoti visame Modulio 4 darbe su DI.  
  - **Pastaba UI:** Skaidrėje – antraštė „100% VEIKIANČIOS STRATEGIJOS“, trys kortelės (Žingsnis po žingsnio | Mąstymo grandinė | Palyginimai ir analogijos), kiekvienoje: Technika, Pavyzdys (CopyButton), Kodėl veikia, Ryšys su RAG/Deep research; galima trumpas blokas „Kaip tai integruoja RAG ir Deep research?“ (1–2 sakiniai).

**Skaidrė „Deep research (Gilusis tyrimas)“ (4.3) – turinys (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po RAG bloko (4.2, 4.2a–4.2c); prieš 4.3a (Praktinės užduotys: promptų sekos). Aiškina **Deep research** kaip DI funkciją ir įrankį – ryšys su RAG, kurie modeliai siūlo, kaip panaudoti praktiškai.  
  - **Pavadinimas:** GILUSIS TYRIMAS (DEEP RESEARCH).  
  - **Apibrėžimas:** Giluminis tyrimas su DI – **kelios pakopos**: klausimų išskaidymas į sub-klausimus, paieška šaltiniuose (RAG tipo), duomenų ištraukimas ir **sintezė** į vieną atsakymą ar ataskaitą. Ryšys su 6 blokais: **Reasoning** (žingsniai, CoT/ToT), **Output** (ataskaitos formatas), **Quality** (šaltiniai, citavimas).  
  - **Ryšys su RAG:** Deep research dažnai **naudoja RAG** – DI pasiima informaciją iš išorinių šaltinių (internetas, dokumentai, duomenų bazės) ir ją apdoroja keliais žingsniais. Skirtumas: RAG daugiausia „viena užklausa → atsakymas su šaltiniais“; Deep research – **multi-step** procesas (pakopos, sub-klausimai, tarpinės išvados, galutinė sintezė).  
  - **Kokie modeliai / platformos siūlo Deep research funkciją:**  
    - **Perplexity** – režimas „Research“ / giluminė paieška su šaltiniais ir keliais žingsniais.  
    - **ChatGPT** – Browse with Bing, Advanced Data Analysis; Custom GPT su įrankiais (paieška, dokumentai) gali imituoti Deep research.  
    - **Claude** (Anthropic) – projekte su priedais (tool use): paieška, dokumentų skaitymas, multi-step užduotys.  
    - **Gemini** (Google) – integruota paieška, „Google it“, ilgesnių tyrimų scenarijai.  
    - **Specializuoti įrankiai** – pvz. Elicit, Consensus (akademinei literatūrai); semantinė paieška + sintezė.  
  - **Kaip panaudoti kaip įrankį:**  
    - **Užduotis agentui (pavyzdinis promptas):** „Paruošk man gilaus tyrimo promptą apie temą [Pavadinimas].“ arba tiesiog: „Atlik gilų tyrimą apie [tema]. Pateik išvadas su šaltiniais.“  
    - **Agentas gali:** analizuoti konkurentų svetaines, skaityti klientų atsiliepimus, ištraukti duomenis iš dokumentų ar lentelių, apibendrinti straipsnius ir interviu – t. y. **retrieval + analizė + sintezė** vienu užsakymu.  
    - **Privalumai:** 📌 **Visada pateikia šaltinius** (atitinka RAG ir žinių patikrinimo reikalavimus). ✅ **Leidžia pagrįsti sprendimus realiais duomenimis** – tyrimas kaip įrankis verslui, mokslui, strategijai.  
  - **Pastaba UI:** Skaidrėje – antraštė „GILUSIS TYRIMAS“; blokas „Kas yra Deep research?“ (apibrėžimas, ryšys su RAG); lentelė arba sąrašas „Kur rasti?“ (Perplexity, ChatGPT, Claude, Gemini, specializuoti įrankiai); blokas „Užduotis agentui“ su pavyzdiniu promptu (CopyButton); sąrašas „Agentas gali:“ ir „Privalumai“ (šaltiniai, duomenimis pagrįsti sprendimai).

**Skaidrė „Praktinės užduotys: promptų sekos, grandinė, medis“ (4.3a) – turinys (kopijuojamas į UI/JSON):**  
  - **Vieta:** Po Deep research (4.3); prieš Tokenų ekonomiką (4.4). Parodo, kaip **promptų inžinierius** gali **susikonstruoti** promptų sekas naudodamas tris būdus: **sequence** (seka), **CoT** (grandinė), **ToT** (idėjų medis).  
  - **Pavadinimas:** PRAKTINĖS UŽDUOTYS.  
  - **Paaiškinimas:** Promptų inžinierius gali prašyti DI sugeneruoti **struktūrizuotus promptų rinkinius** problemai išspręsti – nuoseklią **promptų seką** (sequence), **promptų grandinę** (Chain of Thought – logiški žingsniai vienas iš kito), arba **promptų idėjų medį** (Tree of Thought – kelios galimos kelio šakos, įvertinamos ir renkamasi geriausia). Šie promptai labai naudingi: jie padėda planuoti multi-step tyrimus, Deep research ir sudėtingas užduotis.  
  - **Trumpi pavyzdžiai (copy-paste; [PROBLEMA] – laukas, kur įrašoma konkreči problema):**  

    | Tipas | Paaiškinimas | Kopijuojamas promptas |
    |-------|--------------|------------------------|
    | **Seka (sequence)** | Nuosekli promptų seka – kiekvienas promptas veda į kitą, kol problema išspręsta. | „Parašyk man promptų seką, kuri padėtų išspręsti [PROBLEMA].“ |
    | **Grandinė (CoT)** | Mąstymo grandinė – promptų grandinė, kur kiekvienas žingsnis logiškai kyla iš ankstesnio (Chain of Thought). | „Parašyk man promptų grandinę, kuri padėtų išspręsti [PROBLEMA].“ |
    | **Idėjų medis (ToT)** | Kelios samprotavimo šakos, įvertinamos ir parinkimas geriausias (Tree of Thought). | „Parašyk man promptų idėjų medį, kuris padėtų išspręsti [PROBLEMA].“ |

  - **Ryšys su 4.3:** Deep research naudoja multi-step, CoT ir ToT – ši skaidrė moko **kaip prašyti DI** sugeneruoti tokias sekas/grandines/medžius užuot pats jas rašęs; tai praktinis įgūdis giluminiam tyrimui ir Modulio 6 projektui.  
  - **Pastaba UI:** Skaidrėje – antraštė „PRAKTINĖS UŽDUOTYS“, paaiškinimas (1–2 pastraipos), lentelė su trimis eilutėmis (Seka | Grandinė | Idėjų medis) – kiekvienoje: tipas, trumpas paaiškinimas, CopyButton promptui; [PROBLEMA] pakeičiama konkrečia užduotimi.

**Bridžinė praktika (po 4.3a, prieš 4.4)**  
  - **Vieta:** Po skaidrės „Praktinės užduotys: promptų sekos“ (4.3a); prieš Tokenų ekonomiką (4.4).  
  - **Pavadinimas:** BRIDŽINĖ PRAKTIKA: RAG + DEEP RESEARCH.  
  - **Tikslas:** Viena 5–10 min užduotis, jungianti RAG ir Deep research praktikoje – sumažina kognityvinę spragą tarp teorijos ir taikymo.  
  - **Užduotis:** Paruošk vieną trumpą atsakymą su šaltiniais naudodamas RAG/Deep research stiliaus promptą. Naudok Perplexity, ChatGPT Browse arba pateiktus dokumentus.  
  - **Pavyzdinis promptas (CopyButton):** „Atlik gilų tyrimą apie [tema]. Naudok tik patikimus šaltinius (Eurostat, oficialūs portalai, moksliniai straipsniai). Pateik 1–2 puslapių atsakymą su nuorodomis prie kiekvienos išvados. Jei informacijos nėra – parašyk „Nežinau“.“ [tema] – pvz. „BVP tendencijos Baltijos šalyse per 5 metus“ arba kita aktuali tema.  
  - **Pastaba UI:** Skaidrėje – antraštė „Bridžinė praktika“, užduoties aprašymas, CopyButton pavyzdiniam promptui.

**Tokenų ekonomika (4.4)**  
- **Vizualizacijos (paveikslėliai):**  
  - **`tokenization.png`** (įkelti į `public/tokenization.png`) – tokenizacija ir tokenų naudojimas.  
  - **`platformos_veikimas.png`** (įkelti į `public/platformos_veikimas.png`) – platformos veikimo schema / kontekstas.  
  - **`di_atmintis.png`** (arba `di_context_window.png`) – rekomenduojama sukurti: schema „kaip veikia DI atmintis“ (konteksto langas = vienintelė atmintis; viršijus ribą – seniausia info prarandama).  

- **Skaidrė „Kas yra tokenai?“ – turinys (kopijuojamas į UI/JSON):**  
  - **Apibrėžimas:** Tokenas – mažiausias teksto vienetas, kurį DI modeliai apdoroja vienu metu. Vienas žodis gali būti vienas ar keli tokenai.  
  - **Pavyzdžiai:**  
    - „DI yra ateitis.“ → 4 tokenai  
    - „Artificial intelligence is the future.“ → 6 tokenai  
  - **Kodėl tai svarbu:** Tokenai lemia, kiek teksto gali apdoroti modelis. Daugiau tokenų → didesnės sąnaudos ir ilgesnis generavimas.  

- **Skaidrė „Tokenizavimas“ – encoder pavyzdys ir apibrėžimas (kopijuojamas į UI/JSON):**  
  - **Kairė: GPT token encoder and decoder.**  
    - **Įvestis („Enter text to tokenize it:“):**  
      - „The dog eats the apples“ (angl.)  
      - „El perro come las manzanas“ (isp.)  
      - „片仮名“ (jap. katakana)  
    - **Tokenų ID seka (pilna):**  
      `464 3290 25365 262 22514 198 9527 583 305 1282 39990 582 15201 292 198 31965 229 20015 106 28938 235`  
      **Iš viso: 21 tokenas.**  
    - **Vizualus skaidymas pagal kalbą (spalvoti blokai + ID po kiekvienu):**  
      - **Anglų:** „The“(464) „ dog“(3290) „ eats“(25365) „ the“(262) „ apples“(22514) [198 – tarpas/nauja eilutė]  
      - **Ispanų:** „El“(9527) „ per“(583) „ro“(305) „ come“(1282) „ las“(39990) „ man“(582) „zan“(15201) „ as“(292) [198]  
      - **Japonų:** „片“(31965) „仮“(20015) „名“(28938); papildomi tokenai 229, 106, 235 (tarpai / valdymo simboliai – rytų kalboms vienas simbolis gali atitikti kelis tokenus).  
    - *Pastaba:* 198 dažnai = tarpas arba eilutės pabaiga. Subžodžiai (per+ro, man+zan+as) rodo, kad vienas žodis gali būti keli tokenai.  
  - **Dešinė – apibrėžimas (geltonas blokas, didžiosiomis):**  
    - KIEKVIENAM ŽODŽIUI, SĄVOKAI  
    - YRA SUKURTAS TOKEN'AS  
    - KURIS JŪSŲ NATŪRALIĄ  
    - KALBĄ  
    - PAVERČIA  
    - DI SUPRANTAMA  
    - KOMANDA  
    - *(Šaltinis: natūralią kalbą paverčia į DI suprantamą komandą.)*  
  - *Vizualizacija:* atitinka `tokenization.png`; skaidrėje – šis turinys arba interaktyvus „encoder“ blokas (spalvoti segmentai + ID).  

- **Skaidrė „Kas yra konteksto langas?“ – turinys (kopijuojamas į UI/JSON):**  
  - **Apibrėžimas (geltonas tekstas):** Konteksto langas – tai maksimalus tokenų skaičius, kurį dirbtinio intelekto modelis (pvz. ChatGPT) gali apdoroti vienu metu.  
  - **Tai apima (balta tekstas):**  
    - Tavo užklausą (promptą)  
    - Ankstesnius pokalbio duomenis (istoriją)  
    - Sugeneruotą atsakymą  
  - **Pasekmė (geltonas tekstas):** Jei konteksto langas yra per mažas, modelis gali „pamiršti“ senesnes pokalbio dalis.  

- **Skaidrė „Kaip tai veikia?“ – konteksto langas (kopijuojamas į UI/JSON):**  
  - **Lentelė – Maksimalus konteksto langas (tokenai):**  

    | Modelis | Maksimalus konteksto langas (tokenai) |
    |---------|--------------------------------------|
    | ChatGPT / GPT (mokama / nemokama) | 128 000 / 16 000–32 000 (priklauso nuo versijos) |
    | Claude (Anthropic) | 200 000 (standartas); iki 1 000 000 (premium/enterprise) |
    | Google Gemini | 1 000 000 (Gemini 2.x) |
    | Copilot (Microsoft) | 16 000 – 128 000 (priklauso nuo modelio) |
    | Grok (xAI) | 128 000 – 2 000 000 (priklauso nuo modelio; Grok 4.x Fast iki ~2 mln.) |
    | DeepSeek | 64 000 – 128 000 (DeepSeek Chat 64k, Coder iki 128k) |

  - **Pastaba:** Skaičiai gali keistis (atnaujinti pagal 2024–2025 dokumentaciją). Skaidrėje nurodyti „apie“ arba „iki“ ir pasiūlyti patikrinti oficialiuose šaltiniuose.  
  - **Pavyzdys (paaiškinamasis blokas po lentele):** Jei užklausa = 2 000 tokenų, o modelis grąžina 6 000 tokenų atsakymą, iš viso sunaudojama **8 000 tokenų**. Jei naudojamas modelis su 8 192 tokenų konteksto riba, visa informacija dar tilps į kontekstą. Jei riba viršijama, seniausia informacija bus ištrinta (modelis „pamiršta“).  

- **Skaidrė „Kiek tokenų grąžina promptas?“ – turinys (kopijuojamas į UI/JSON):**  
  - **Įvadas („Vienas promptas“ paryškintas geltonai):** Vienas promptas gali grąžinti skirtingą tokenų skaičių, priklausomai nuo:  
  - **Trys veiksniai (numeruoti):**  
    1. Įvesties dydžio (kiek tokenų sudaro tavo promptą).  
    2. Atsakymo ilgio (kiek modelis sugeneruoja žodžių/tokenų).  
    3. Maksimalaus nustatyto atsakymo ilgio (jei ribojamas generuojamas turinys).  
  - **Kaip apskaičiuoti grąžintus tokenus?**  
    - **Formulė (geltonas tekstas):** Naudoti tokenai = (įvesties tokenai) + (sugeneruoti tokenai).  
  - **Pavyzdys:** Pvz., jei tavo promptas užima 50 tokenų ir modelis grąžina 200 tokenų atsakymą, tada bendrai sunaudosi:  
    - **Skaičiavimas (geltonas):** 50 (įvestis) + 200 (atsakymas) = **250 tokenų**.  

- **Skaidrė „Konteksto langas galioja“ – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** KONTEKSTO LANGAS GALIOJA.  
  - **1. Vienoje užklausoje:**  
    - Jei tavo promptas + atsakymas neviršija konteksto lango ribos, viskas išlieka atmintyje.  
    - Jei atsakymas per ilgas, modelis gali nutraukti generavimą.  
  - **2. Ilgesniame pokalbyje (vienoje sesijoje):**  
    - Modelis prisimena ankstesnį pokalbį tol, kol bendrai sunaudotų tokenų skaičius neviršija ribos.  
    - Kai viršijama konteksto lango riba, seniausia informacija ištrinama.  
  - **Pavyzdys (ikona: segtukas):**  
    - Tarkim, GPT-5 turi 128K tokenų ribą.  
    - Jei per pokalbį sunaudoji daugiau nei 128K tokenų, seniausi žodžiai iš pradžios bus pamiršti.  
  - **Ką tai reiškia? (ikona: raketa):**  
    - Kiekviena nauja užklausa mato visą ankstesnį pokalbį tik tol, kol neišnaudojamas konteksto langas.  
    - Jei nori išsaugoti svarbią informaciją ilguose pokalbiuose, geriau naudoti santraukas.  

- **Skaidrė „Promptingo patarimai“ – tokenų biudžeto valdymas (kopijuojamas į UI/JSON):**  
  - **Tikslas:** Parodyti, kaip šie patarimai **padeda valdyti tokenų biudžetą**; šalia – **trumpi copy-paste promptai** kasdieniniams pokalbiams, kurie taupo tokenus.  
  - **7 patarimai (numeruoti, svarbūs žodžiai paryškinti oranžina), kiekvienas su ryšiu su tokenais:**  
    1. **TURĖKITE STRUKTŪRĄ** – Suplanuokite savo promptus ir atsakymus, kad jie atitiktų **tokenų ribas**. *(Tokenų biudžetas: planuojant įvestį ir laukiamą išvesties ilgį neviršijate konteksto lango.)*  
    2. **SKAIDYKITE** – Temas į potemes, kurios gali būti sprendžiamos pagal **tokenų biudžetą**. *(Mažesnės užduotys = mažesnis vienos žinutės apimtis = lengviau tilpti į ribas.)*  
    3. **KURKITE TIKSLIUS PROMPTUS (GREITUS TIKSLINIMUS)** – **Taupysite tokenus.** *(Trumpas, aiškus prašymas = mažiau įvesties tokenų, mažiau nereikalingo atsakymo.)*  
    4. **APIBENDRINKITE** – Prašykite dar kartą apibendrinti ir nurodydami svarbią informaciją tolesniuose raginimuose. *(Santraukos sumažina kontekstą – ilgame pokalbyje „sena“ istorija pakeičiama trumpa santrauka, taip taupant tokenus.)*  
    5. **TIKRINKITE IR REDAGUOKITE** – Visada patikrinkite, ar segmentuotas arba apibendrintas tekstas atitinka pradinę reikšmę. *(Kokybiškas apibendrinimas = neprarandate prasmės, taupydami tokenus.)*  
    6. **NAUDOKITE „SVERTO“ METODĄ** – Naudokite DI galimybes sukurti kontūrus arba juodraščius, kuriuos galima toliau tobulinti rankiniu būdu. *(Vienas trumpas promptas „sukurk planą“ vietoje ilgo iteravimo = mažiau tokenų.)*  
    7. **NAUDOKITE PROJEKTUS, AGENTUS, GPT** – Valdysite tokenų ekonomiją, pvz. „srautinį perdavimą“ atliekant svarbias užduotis. *(Struktūruotos sesijos / specializuoti įrankiai padeda riboti ir matuoti sunaudojimą.)*  
  - **Šalia – trumpi copy-paste promptai, kurie taupo tokenus kasdieniniuose pokalbiuose:**  

    | Paskirtis | Kopijuojamas promptas |
    |-----------|------------------------|
    | Trumpas atsakymas | „Atsakyk tik 1–2 sakiniais.“ |
    | Be įžangos | „Be įžangos – tik atsakymas į klausimą.“ |
    | Sąrašas vietoj teksto | „Pateik tik numeruotą sąrašą, be paaiškinimų.“ |
    | Santrauka pokalbiui | „Apibendrink šį pokalbį į 3–5 sakinius; tik esmė.“ |
    | Tikslinimas | „Trumpiau: [ką nori].“ arba „Vienu sakinium.“ |

  - **Pastaba UI:** Skaidrėje patarimai kairėje (arba viršuje); dešinėje (arba apačioje) – blokas „Copy-paste: taupyk tokenus“ su šiais promptais ir CopyButton.  

- **Skaidrė „Sisteminis svertas“ – koncepcija aiškiai, praktiškai, pritaikomai (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** SISTEMINIS SVERTAS.  
  - **Aiškiai – pagrindinis principas (mėlyna rombas / bullet):**  
    - **Naudok pakartotinius šablonus** – vietoj naujų užklausų rašymo iš naujo turėk šablonus, kuriuos gali koreguoti.  
    - *Ryšys su tokenais:* vienoda struktūra = mažiau „fluff“, greitesnis tikslinimas = taupomi tokenai ir laikas.  
  - **Praktiškai – prompto struktūros šablonas (ikona: segtukas):**  
    - **Prompto struktūros šablonas:**  
      - Tema: [tema]  
      - Tikslas: [tikslas]  
      - Tonas: [profesionalus / draugiškas]  
      - Ilgis: [trumpas / vidutinis / ilgas]  
      - Stilius: [informacinis / įtikinantis / įtraukiantis]  
    - Šabloną galima naudoti bet kuriam tipui užklausos – pakanka pakeisti laukus.  
  - **Pritaikomai – pavyzdys (ikona: segtukas), copy-paste:**  
    - **Pavyzdys:**  
      - „Sugeneruok 3 LinkedIn postus apie dirbtinį intelektą.  
      - Tema: DI versle  
      - Tikslas: Šviesti auditoriją  
      - Tonas: Draugiškas, bet profesionalus  
      - Ilgis: 100 žodžių“  
    - *Pritaikymas:* tą patį šabloną galima naudoti kitai temai (pvz. „Tema: Žalioji energetika“, „Ilgis: 150 žodžių“) – koreguoji tik reikiamus laukus.  
  - **Ryšys su 7 patarimais:** atitinka patarimą **„NAUDOKITE SVERTO METODĄ“** – šablonai = svertas (vienas kartas sukurtas, daug kartų pritaikomas).  
  - **Ryšys su Moduliu 6:** sisteminis svertas tinka projekto (capstone) planavimui – žr. §4.

- **Skaidrė „Save tobulinantis promptas“ (Loop Prompting) – iteratyvus tobulinimas (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** SAVE TOBULINANTIS PROMPTAS (Loop Prompting).  
  - **Apibrėžimas:** Loop Prompting – iteratyvus tobulinimas, kai DI naudojamas kaip konsultavimo ar teksto tobulinimo partneris.  
  - **6 žingsniai (numeruoti, prie kiekvieno – kopijuojamas prompto pavyzdys, ikona: geltona ranka):**  

    | # | Žingsnis (EN) | Kopijuojamas promptas |
    |---|----------------|------------------------|
    | 1 | **Draft (Pradinis)** | „Sukurk pradinį promptą šia temai.“ |
    | 2 | **Expand (Išplėsk)** | „Išplėsk, pridėk detalių, formatą, stilių, auditoriją.“ |
    | 3 | **Refine (Patobulink)** | „Įvertink aiškumą, pasiūlyk 3 patobulinimus, pašalink perteklinius žodžius.“ |
    | 4 | **Adapt (Pritaikyk)** | „Pritaikyk šį promptą [įrankiui / kontekstui], pridėk papildomų parametrų.“ |
    | 5 | **Summarize (Santrauka)** | „Sutrumpink iki vienos pastraipos ar sakinio.“ |
    | 6 | **Loop (Kartok)** | „Sugeneruok 3 alternatyvias versijas: draugiškesnę / techniškesnę / kūrybiškesnę.“ (Pvz. pradedančiajam.) |

  - **Ryšys su tokenais:** žingsniai **Refine** ir **Summarize** tiesiogiai padeda taupyti tokenus (aiškumas, pašalinti perteklius, sutrumpinti).  
  - **Ryšys su svertu:** DI atlieka „sunkų darbą“ (išplėtimas, vertinimas, alternatyvos) – vartotojas iteruoja su mažomis korekcijomis.  
  - **Modulis 6:** Loop Prompting tinka projekto tobulinimui – nuo juodraščio iki pritaikytos ir sutrumpintos versijos; žr. §4.

- **Skaidrė „Tekstų formatavimas“ – praktiniai patarimai ir trumpi promptai (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** TEKSTŲ FORMATAVIMAS.  
  - **Tikslas:** Tekstų iliustravimui – praktiniai formatavimo patarimai ir trumpi copy-paste promptai, kad DI generuotų gerai struktūruotą, skaitomą išvestį.  
  - **5 punktai (patarimas + trumpas promptas prie kiekvieno):**  

    | Patarimas | Praktinis patarimas | Trumpas copy-paste promptas |
    |-----------|---------------------|----------------------------|
    | **Žymėjimo kalbos (Markup)** | Naudokite DI, kad dokumentus kurtų turtingo teksto formatu – Markdown, HTML arba LaTeX (akademiniam darbui). | „Parašyk [tema] Markdown formatu: antraštės ##, sąrašai, **paryškintas**.“ |
    | **Stilius skaitomumui** | DI gali pasiūlyti **paryškinti**, *kursyvą*, <u>pabraukimą</u> pagrindinėms mintims ar skyriams. | „Paryškink pagrindines mintis **pusjuodžiu**, skyrių antraštes – ##.“ |
    | **Sąrašai ir ženkleliai** | Organizuokite informaciją į numeruotus arba punktinius sąrašus – geresnė hierarchija ir skaitomumas. | „Pateik kaip numeruotą sąrašą“ arba „Sukurk punktinį sąrašą su ženkleliais.“ |
    | **Geriausia praktika – aiškios instrukcijos** | Duokite DI aiškias, detalias instrukcijas formatui (lentelės, skyriai, ilgis) – geriausi rezultatai. | „Formatas: lentelė, 3 stulpeliai – [A], [B], [C]. Antraštė pirmoje eilutėje.“ |
    | **Vėlesnis apdorojimas** | Visada peržiūrėkite ir pataisykite sugeneruotą formatavimą, kad atitiktų poreikius ar standartus. | „Peržiūrėk šį tekstą ir pataisyk formatavimą pagal [Markdown / įmonės stilių].“ |

  - **Pastaba UI:** Skaidrėje – 5 kortelės arba sąrašas su patarimais; šalia ar po kiekvienu – CopyButton trumpiems promptams. Galima iliustruoti pavyzdžiu (prieš / po formatavimo).

- **Skaidrė „Lentelės, tekstų formatavimas“ – paaiškinimai, trumpi promptai ir pavyzdžiai (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** LENTELĖS, TEKSTŲ FORMATAVIMAS.  
  - **Kodėl svarbios lentelės ir formatavimas (balta tekstas):**  
    - Pagerina sudėtingos informacijos skaitomumą ir supratimą.  
    - Palengvina duomenų tvarkymą – juos lengviau palyginti ir analizuoti.  
    - Pagerina estetinį dokumentų ar skaitmeninio turinio patrauklumą.  
    - Išlaiko auditorijos įtraukimą.  
  - **Lentelių kūrimas – du formatai:**  
    - **Markdown formatas** – tinka dokumentams, GitHub, Notion, daugeliui redaktorių; lengvai redaguojamas kaip paprastas tekstas.  
    - **HTML formatas** – tinka svetainėms, el. laiškams, eksportui į Word/PDF; pilnas stiliavimo kontrolė.  
  - **Trumpi copy-paste promptai lentelėms:**  

    | Paskirtis | Trumpas promptas |
    |-----------|------------------|
    | Bendras | „Sukurk lentelę: [tema]. Stulpeliai – [A], [B], [C]. Markdown formatu.“ |
    | Markdown | „Pateik informaciją kaip Markdown lentelę su antrašte. Stulpeliai: [vardai].“ |
    | HTML | „Sukurk HTML lentelę (<table>), 3 stulpeliai, antraštė <th>. Turinys: [aprašymas].“ |
    | Su duomenimis | „Štai duomenys: [sąrašas]. Suformatuok kaip lentelę (Markdown arba HTML), stulpeliai: [vardai].“ |
    | Tikslinimas | „Pridėk stulpelį [X] į šią lentelę“ arba „Lentelę pateik HTML su klasėmis.“ |

  - **Paaiškinimai ir pavyzdžiai:**  
    - **Markdown pavyzdys (paaiškinimas):** Lentelė sudaroma iš eilučių, stulpeliai atskirti `|`, antraštė atskirta `---`. DI gali sugeneruoti iš teksto arba duomenų sąrašo.  
      **Kopijuojamas promptas:** „Sukurk Markdown lentelę: produktas, kaina (EUR), kiekis. 3 pavyzdiniai eilutės.“  
      **Pavyzdys išvesties:**  
      `| Produktas | Kaina (EUR) | Kiekis |`  
      `|-----------|-------------|--------|`  
      `| A         | 10          | 5      |`  
    - **HTML pavyzdys (paaiškinimas):** Lentelė – `<table>`, eilutės `<tr>`, antraštės `<th>`, langeliai `<td>`. Galima pridėti `class` arba `style` stiliavimui.  
      **Kopijuojamas promptas:** „Sukurk HTML lentelę: 2 stulpeliai – Metrikos, Reikšmė. 3 eilutės. Antraštė paryškinta.“  
      **Pavyzdys išvesties (sutrumpintas):** `<table><tr><th>Metrikos</th><th>Reikšmė</th></tr><tr><td>...</td>...</tr></table>`  

  - **Tarpinės užduotys atlikimui – Lentelių kūrimas (3 užduotys + lygiavimas):**  
    - **1. Analizė.**  
      **Promptas (kopijuojamas):** „Sukurk lentelę, skirtą lyginti Lietuvos Seimo rinkimų 2000–2025 metų duomenis. Stulpeliai: „Metai“, „Partijų skaičius“, „Rinkimų laimėtojas“ ir „Ministras pirmininkas“. Užpildyk eilutes atitinkamais duomenimis.“  
      *Tikslas:* lyginamoji analizė su istoriniiais duomenimis; reikalauja konkretaus, struktūruoto išvedimo.  
    - **2. Duomenys.**  
      **Promptas (kopijuojamas):** „Sukurk lentelę, kuri parodytų elektroninės kosmetikos parduotuvės pardavimus: prekė, gamintojas, kaina, kiekis, nuolaida, kaina su nuolaida, viso.“  
      *Tikslas:* komercinių transakcijų suvestinė; kelios skaitinės ir kategorinės reikšmės.  
    - **3. Tvarkaraštis.**  
      **Promptas (kopijuojamas):** „Sukurk [profesija] savaitės darbotvarkę su stulpeliais „Diena“, „Rytas“, „Popietė“ ir „Vakare“. Užpildyk tvarkaraštį su svarbiausiomis veiklomis [n+1] per savaitę.“  
      *Tikslas:* laiko pagrindu struktūruota informacija; pritaikoma bet kuriai profesijai (pakeičiame [profesija] ir [n+1]).  
    - **Lygiavimas (Markdown):**  
      Stulpelių lygiavimas Markdown lentelėse – antraštės eilutėje po `|` naudokite dvitaškį: kairė `:------`, dešinė `-------:`, centras `:------:`.  
      **Pavyzdys sintaksės:**  
      `|:------|-------:|`  
      `| Metai | Partijų skaičius |`  
      `|:------|-------:|`  
      *(„Metai“ – kairėje, „Partijų skaičius“ – dešinėje.)*  
  - **Pastaba UI:** Skaidrėje – sekcija „Kodėl svarbios“, sekcija „Lentelių kūrimas“ (Markdown / HTML), lentelė su trumpais promptais (CopyButton), blokas „Pavyzdžiai“, **tarpinės užduotys atlikimui** (1 Analizė, 2 Duomenys, 3 Tvarkaraštis – su CopyButton promptams), **Lygiavimas** su Markdown pavyzdžiu (galima collapse/expand).

- **Skaidrė „Kaip veikia DI atmintis?“ – vizualinė (rekomenduojama sukurti):**  
  - **Tikslas:** Parodyti, kad DI „atmintis“ = tik dabartinis konteksto langas; nėra ilgalaikės atminties tarp sesijų.  
  - **Vizualizacijos idėja (schema / diagrama):**  
    - **Konteksto langas** kaip fiksuotas „langelis“ (pvz. 128K tokenų): įėjimas (promptas + istorija) + išėjimas (atsakymas) telpa į jį.  
    - Kai **nauja žinutė** pridedama ir bendra suma **viršija ribą** – **seniausia informacija (kairėje)** išmetama iš lango; modelis „pamiršta“.  
    - Galima rodyklėmis: [seniausi prarandami] ← [konteksto langas] → [naujausi lieka].  
  - **Paveikslėlis:** rekomenduojama įkelti `public/di_atmintis.png` (arba `di_context_window.png`) – schema „konteksto langas = vienintelė atmintis per sesiją“.  
  - **Trumpas tekstas skaidrėje:** „DI neprisimena visko, nes mato tik tai, kas telpa į konteksto langą. Ilguose pokalbiuose seniausia informacija išnyksta – todėl svarbu apibendrinimas.“  

- **Praktinės užduotys – konteksto apibendrinimas (tarpinės užduotys su promptų pavyzdžiais):**  
  - **Tikslas:** Kad dalyviai suprastų, **kas yra konteksto apibendrinimas** ir **kodėl DI neprisimena visko** – per praktiką su realiu turiniu ir promptais.  
  - **Užduotis 1 – Knygos santrauka (geltonas tekstas):**  
    - **Užduotis:** Parašykite [mėgstamos knygos] summary / santrauką.  
    - **Prompto pavyzdys (kopijuojamas):** „Tu esi literatūros kritikas. Parašyk 1 puslapio santrauką šiai knygai: [pavadinimas]. Pabrėžk pagrindinę mintį ir 3 svarbiausius įvykius. Kalba: lietuvių.“  
    - **Ryšys su kontekstu:** Ilga knyga netilptų į vieną promptą – reikia apibendrinti (summary) arba pateikti tik pasirinktus fragmentus; tai parodo konteksto ribotumą.  
  - **Užduotis 2 – Prezidento kalbos apibendrinimas:**  
    - **Užduotis:** Nueikite į president.lt, paimkite vieną iš viešai prieinamų LR Prezidento kalbų ir padarykite apibendrinimą.  
    - **Prompto pavyzdys (kopijuojamas):** „Štai LR Prezidento kalbos fragmentas: [įklijuoti ištrauką]. Padaryk 5–7 sakinių apibendrinimą: pagrindinė tema, pagrindinės mintys, išvada. Formalus tonas, lietuvių kalba.“  
    - **Ryšys su kontekstu:** Kalba gali būti ilga – jei įklijuoti visą tekstą, sunaudojami daug tokenų; apibendrinimas sumažina kontekstą vėlesniam pokalbiui („ką DI prisimena“).  
  - **Užduotis 3 – LR Konstitucija: kelios žingsnis (su promptais):**  
    1. **Google** „Lietuvos Respublikos Konstitucija“ – raskite oficialų tekstą.  
    2. **Copy-paste į DI** (pvz. GPT / Claude) – pateikite kaip kontekstą (pvz. skyrių ar ištrauką, ne visą dokumentą, jei per ilgas).  
    3. **Promptas – apibendrinimas:** „Štai LR Konstitucijos [X skyriaus] tekstas. Padaryk struktūruotą santrauką: pagrindinės straipsnių mintys, iki 1 puslapio. Kalba: lietuvių.“  
    4. **Atspindėjimas:** „Ką supratote?“ – trumpas klausimas dalyviui: kodėl pateikėme tik dalį teksto? Kaip santrauka padeda „išsaugoti“ svarbiausią informaciją kontekste?  
  - **Pedagoginė pastaba:** Šios užduotys siejamos su skaidre „Konteksto langas galioja“ ir „Kaip veikia DI atmintis?“ – po jų aiškiau, kodėl apibendrinimas (santraukos) ilguose pokalbiuose yra būtinas.  

- **Pažengusi praktika – ilgo dokumento workflow (PAVYZDŽIAI):**  
  - **Tikslas:** parodyti, kaip **sukurti ilgą dokumentą, paisant tokenų ribų** (pvz. 128 000), naudojant kelių žingsnių promptų seką. Ši užduotis gali būti **Modulio 6 projekto** (capstone) dalis.  
  - **Žingsniai (atitinka skaidrės „PAVYZDŽIAI“ punktus):**  
    1. **PATEIK STRUKTŪRĄ.**  
       - Promptas: „Pateik detalią dokumento struktūrą tema [APIE], kad visas dokumentas tilptų į 128 000 tokenų ribą. Suskirstyk į skyrius ir poskyrius, prie kiekvieno nurodyk rekomenduojamą apimtį (žodžiais/tokenais).“  
       - *Ryšys su tokenais:* iš anksto planuojama, kur „sunaudosime“ daugiausia tokenų.  
    2. **SUGENERUOK TEMŲ IR POTEMIŲ PLANĄ.**  
       - Promptas: „Pagal šią struktūrą sugeneruok temų ir potemių planą su trumpais aprašymais (2–3 sakiniai kiekvienai pote mei).“  
       - *Ryšys su tokenais:* planas trumpesnis nei pilnas tekstas, bet leidžia kontroliuoti apimtį.  
    3. **APIBENDRINK (MAX_TOKENS).**  
       - Promptas: „Apibendrink temą [APIE] iki ~500 žodžių. Naudok kompaktišką stilių; jei reikia, laikykis ~750 tokenų ribos (MAX_TOKENS≈750).“  
       - *Ryšys su tokenais:* naudojamas aiškus ribojimas (žodžiai / max_tokens), kad dalis dokumento netaptų per ilga.  
    4. **SUKURK ŠABLONĄ.**  
       - Promptas: „Pagal šį planą sukurk šabloną (outline su antraštėmis ir vietoms skirtais komentarais), kurį galėčiau pildyti pats arba su DI pagalba.“  
       - *Ryšys su tokenais:* šablonas = mažai tokenų, vėliau galima pildyti po dalį.  
    5. **PATEIK PROJEKTO PLANĄ PAGAL GERIAUSIAS PRAKTIKAS.**  
       - Promptas: „Pateik projekto planą, kaip per kelias sesijas parengti šį dokumentą, paisant tokenų ribų (kiek teksto vienai sesijai, kada daryti santraukas).“  
       - *Ryšys su tokenais:* planuojama, kada daryti santraukas ir „sutrumpinti istoriją“, kad DI nepamirštų svarbios informacijos.  
    6. **VIZUALIZUOK.**  
       - Promptas: „Vizualizuok šį procesą (workflow) paprasta schema: žingsniai 1–6 ir kur sunaudojami/tausojami tokenai.“  
       - *Ryšys su tokenais:* schema sustiprina supratimą, kad tokenų ekonomika = procesų valdymas.  
  - **Kur naudoti:** ši pažengusi užduotis tinka **po pagrindinių praktinių užduočių**, kaip papildomas pratimas dalyviams, kurie nori giliau įvaldyti tokenų biudžeto planavimą ilgiems dokumentams ar projektams.  
  - **Ryšys su Moduliu 6:** šį 6 žingsnių workflow galima naudoti kaip **Modulio 6 projekto** (capstone) pagrindą arba papildomą scenarijų – žr. **§4 (Praktinė dalis, Modulis 6)**.  

- Tokenai: maždaug 1 token ≈ 4 simboliai (LT/EN). Konteksto langas (pvz. 128k).  
- Praktika: sutrumpinti Input, aiškūs Output apribojimai (max žodžiai), max_tokens.  
- Nereikia gilintis į API kainas – pakanka „ilgis = kaina + kokybė“.  
- **Šaltiniai (skaidrėje arba collapsible):**  
  - Towards Data Science / Medium straipsniai apie **InstructGPT** (2022–2023) – tokenizacija, RLHF, modelių mokymas.  
  - Rekomenduojama nuoroda į oficialų OpenAI InstructGPT straipsnį (arxiv) ir 1–2 TDS/Medium paaiškinimus; šaltinius rodyti sutvarkytai (pvz. collapsible kaip Modulio 1 infografike).

**Promptų manipuliacijos (4.5)**  

- **Skaidrė „Kas yra promptų manipuliacijos?“ – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** KAS YRA PROMPTŲ MANIPULIACIJOS?  
  - **Apibrėžimas (ATS blokas):**  
    **Promptų manipuliacija** – tai **strategiškai suformuluotų užklausų naudojimas siekiant paveikti DI generuojamus atsakymus**. Ši praktika remiasi DI modelių dizainu ir tuo, kaip modelis supranta mūsų komandas, kontekstą ir promptų formuluotes.  
  - **Didžiausi DI manipuliacijų iššūkiai (3 punktai, geltona antraštė):**  
    1. **Etika ir saugumas.**  
       DI manipuliacijos kelia rimtų etinių ir saugumo problemų (netiksli informacija, šališkumas, kenkėjiškas turinys). Incidentų, susijusių su DI, skaičius pastaraisiais metais ženkliai augo; etiškas ir saugus DI reguliavimas tampa pasauliniu iššūkiu.  
    2. **Skaidrumas.**  
       Verslai ir organizacijos turės **atskleisti, kaip moko savo DI algoritmus ir kaip naudoja manipuliacijas** (pvz. reklamoje, rekomendacijose). DI generuojant vis didesnę dalį turinio, skaidrumas apie tai, kas yra „žmogaus“ ir kas „DI“ sprendimai, tampa kritiškai svarbus.  
    3. **Patikimumas.**  
       Integruojant DI į viešąjį valdymą, finansus, sveikatą ar švietimą, būtina užtikrinti sprendimų **efektyvumą ir patikimumą**. Jei žmonės matys, kad DI atsakymai lengvai manipuliuojami, **kris pasitikėjimas** pačia technologija.  
  - **Ryšys su kursu:** ši skaidrė įrėmina, **kodėl manipuliacijų tema apskritai svarbi** – ne tik „gudrus triukas“, bet ir etikos, saugumo ir pasitikėjimo DI klausimas. Vėliau sekančiose skaidrėse (4.5) nagrinėjami **konkretūs manipuliatyvių promptų pavyzdžiai** ir **neutralios formuluotės**.  
  - **Pastaba UI:** antraštė, apibrėžimo blokas (su paryškinta sąvoka „Promptų manipuliacija“) ir 3 numeruoti punktai; apačioje galima trumpa pastaba „Šioje dalyje mokomės KĄ laikome manipuliacija ir KAIP jos vengti praktikoje.“  

- **Skaidrė „Manipuliacijų technikos – verslo pavyzdžiai“ – turinys:**  
  - **Pavadinimas:** MANIPULIACIJŲ TECHNIKOS (VERSLO KONTEKSTAS)  
  - **Paskirtis:** parodyti, kaip tie patys rėminimo principai gali būti panaudoti **verslo aplinkoje** – tiek sąmoningai (etikos rizika), tiek tikslingai vengiant manipuliacijų.  
  - **4 technikos su trumpais pavyzdžiais (manipuliacinis vs neutralesnis):**  
    1. **Įrėminimas (framing).**  
       - Manipuliacinis pavyzdys: „Parodyk, kodėl mūsų Q3 kampanija buvo sėkmės istorija, nepaisant kelių iššūkių.“  
       - Neutralesnė alternatyva: „Įvertink mūsų Q3 kampanijos stiprybes ir silpnybes, pateik ir argumentus už, ir prieš.“  
    2. **Konteksto suteikimas (biased context).**  
       - Manipuliacinis pavyzdys: „Remkis tik šiais atrinktais (labai teigiamais) klientų atsiliepimais ir paaiškink, kodėl mūsų naujas produktas yra geriausias rinkoje.“  
       - Neutralesnė alternatyva: „Remkis įvairiais klientų atsiliepimais (teigiamais ir neigiamais) ir pateik subalansuotą naujo produkto vertinimą.“  
    3. **Vaidmens suteikimas (role + bias).**  
       - Manipuliacinis pavyzdys: „Tu esi mūsų pardavimų vadovas, kurio tikslas įrodyti, kad kainų didinimas yra geriausias sprendimas. Pateik argumentus kodėl.“  
       - Neutralesnė alternatyva: „Tu esi nepriklausomas finansų analitikas. Įvertink kainų didinimo ir nedidinimo scenarijus: poveikis pajamoms, klientų išlaikymui ir reputacijai.“  
    4. **Generavimas + įvertinimas (reward funkcijos kreivė).**  
       - Manipuliacinis pavyzdys: „Sugeneruok 5 kainodaros strategijas ir įvertink jas tik pagal tai, kaip maksimaliai padidins trumpalaikes pajamas.“  
       - Neutralesnė alternatyva: „Sugeneruok 5 kainodaros strategijas ir įvertink jas pagal 4 kriterijus: trumpalaikės pajamos, ilgalaikė reputacija, klientų pasitenkinimas ir rizika. Pasiūlyk subalansuotą rekomendaciją.“  
  - **Takeaway:** ta pati technika (įrėminimas, konteksto parinkimas, rolė, „reward“ kriterijai) gali būti naudojama tiek **etiškai** (skaidri analizė), tiek **manipuliatyviai** (vienpusė išvada). Dalyvio tikslas – **atpažinti, kada promptas stumia į norimą atsakymą**, ir pasirinkti neutralesnes formuluotes.  
  - **Pastaba UI:** skaidrėje galima naudoti 2 stulpelius „Manipuliacinis promptas“ vs „Neutrali alternatyva“ (CopyButton abiem), antraštę „Etika verslo kontekste“.  

- **Primingo (priming) manipuliacija – „paruošimo“ funkcija:**  
  - **Pagrindinė idėja:** primingas – tai **parengiamoji žinutė**, kuri „užkrauna“ modelį laukiančiai užduočiai ir gali nukreipti jo dėmesį. Ji pati savaime nėra bloga, bet gali būti naudojama ir manipuliacijai.  
  - **Pagrindinis prompto pavyzdys:**  
    - PROMPT: „Tuoj pateiksiu tau komandą, išanalizuok ir pasiruošk. Kai būsi pasirengęs, sakyk „JAU“.“  
  - **Ką tai daro (4 svertai):**  
    1. **Psichologinis svertas („Priming“).** DI gauna signalą, kad „kažkas svarbaus artėja“, todėl sutelkia dėmesį į būsimą užduotį – dažnai pagerėja atsakymo kokybė.  
    2. **Procesinis svertas („Two-Step Prompting“).** Užduotis padalijama į **parengiamąją** ir **vykdymo** fazę – modelis neskuba generuoti atsakymo iš karto, o pirmiausia „ruošiąsi“.  
    3. **Vėlavimo svertas („Time Delay Leverage“).** Įvedama trumpa „pauzė“: modelis tarsi „susirenka mintis“, o jūs galite dar patikslinti kontekstą prieš pagrindinį klausimą (naudinga sudėtingoms užduotims).  
    4. **Aiškumo svertas („Instructional Clarity“).** Aiškiai nurodoma, kad DI **pirmiausia turi laukti**, o ne iš karto generuoti atsakymą – tai mažina dviprasmybes, ypač daugiaetapiuose procesuose.  
  - **Etikos pastaba:** primingą galima naudoti **skaidriai** („paruošk save analizei“) arba **manipuliatyviai** („pasiruošk įrodyti, kad mūsų sprendimas teisingas“). Kursas akcentuoja **skaidrų primingą** – dėmesio sutelkimą, aiškias instrukcijas ir geresnę kokybę, o ne slaptą nuomonės formavimą.  

- **Skaidrė „DI ir psichologija: Cialdini principai“ – turinys:**  
  - **Pavadinimas:** DI IR PSICHOLOGIJA (CIALDINI PRINCIPAI)  
  - **Paskirtis:** parodyti, kaip **žmonių psichologinės įtakos taisyklės** (pagal Robert Cialdini) gali pasireikšti ir promptuose – tiek manipuliatyviai, tiek etiškai.  
  - **6 principai su trumpais promptų pavyzdžiais (verslo / DI kontekstas):**  
    1. **Abipusiškumo principas.**  
       - Idėja: „Mes jaučiame pareigą atsilginti, jei su mumis elgiamasi maloniai.“  
       - Pavyzdinis promptas: „Ačiū už ankstesnį atsakymą, jis buvo labai išsamus. Ar galėtum padėti suprasti DI poveikį verslo komunikacijai?“  
    2. **Įsipareigojimo ir nuoseklumo principas.**  
       - Idėja: priėmę įsipareigojimą, žmonės linkę jo laikytis.  
       - Pavyzdinis promptas: „Esi daug kalbėjęs apie duomenų privatumo svarbą dirbant su DI. Ar gali žingsnis po žingsnio paaiškinti, kokias priemones naudoti duomenų apsaugai?“  
    3. **Socialinio įrodymo principas.**  
       - Idėja: „Žmonės mokosi iš kitų, kad nustatytų teisingą elgesį.“  
       - Pavyzdinis promptas: „PSO ekspertai teigia, kad DI gali pakeisti sveikatos priežiūrą. Kokie šiuo metu yra geriausi DI naudojimo sveikatos srityje pavyzdžiai?“  
    4. **Autoriteto principas.**  
       - Idėja: žmonės labiau klauso tų, kurie suvokiami kaip ekspertai.  
       - Pavyzdinis promptas: „Pateik 5 greitus būdus, kaip įmonė galėtų pagerinti pelningumą pagal Warren Buffett investavimo principus (trumpai ir praktiškai).“  
    5. **Noro patikti (simpatiškumo) principas.**  
       - Idėja: lengviau pasiduodame tiems, kurie mums patinka.  
       - Pavyzdinis promptas: „Iki šiol tavo paaiškinimai buvo labai naudingi. Pateik aiškų ir suprantamą svarbiausių DI etikos problemų sąrašą, kurį galėčiau panaudoti prezentacijoje komandai.“  
    6. **Trūkumo (retumo) principas.**  
       - Idėja: „Labiau vertiname tai, kas mums mažiau prieinama.“  
       - Pavyzdinis promptas: „Labai mažai kas viešai kalba apie naujausius DI reguliavimo projektus ES. Ar gali atnaujinti šviežiausią informaciją ir trumpai įvertinti galimas rizikas verslui Europoje?“  
  - **Takeaway:** Cialdini principai nėra „tik marketingas“ – jie gali netyčia persikelti ir į mūsų promptus. Svarbu atpažinti, kada **naudojame psichologinius svertus tik aiškumui / motyvacijai**, o kada – **slaptam spaudimui ar manipuliacijai**.  
  - **Pastaba UI:** skaidrėje – antraštė ir numeruotas sąrašas su 6 principų antraštėmis (geltona) ir trumpais promptų pavyzdžiais; galima mažas šone esantis blokas „Klausimas dalyviui: Kurio principo labiausiai norėtum vengti savo promptuose?“  

- **Skaidrė „Promptų manipuliacijos II – pažengusios technikos“ – turinys:**  
  - **Pavadinimas:** PROMPTŲ MANIPULIACIJOS II (PAŽENGUSI PRAKTIKA)  
  - **Tikslas:** parodyti pažangesnes sąveikos formas, kurios gali būti **naudingos**, bet netinkamai naudojamos – virsta manipuliacija.  
  - **Technikos (6–9) su verslo pavyzdžiais:**  
    6. **„Išvirkščias“ promptas (Flipped Interaction).**  
       - Idėja: DI klausia tavęs, kad išsiaiškintų trūkstamą kontekstą.  
       - Pavyzdys (verslas): „Kuriu naują B2B paslaugą. Uždavk man 10 esminių klausimų (tikslinė auditorija, kaina, vertės pasiūlymas, kanalai), kad galėtum sudaryti detalų paleidimo planą.“  
       - Rizika: jei klausimai formuluojami šališkai („kada geriausiai parduosime?“), DI gali sustiprinti jau esamus šališkumus.  
    7. **Modelio žinių panaudojimas.**  
       - Pavyzdys (neutralus): „Papaskok apie klimato kaitos įtaką logistikos sektoriui.“  
       - Verslo pseudo-manipuliacija: „Apibūdink klimato kaitos rizikas, bet parodyk, kodėl jos praktiškai nepalies mūsų įmonės veiklos.“  
       - Gera praktika: aiškiai paprašyti **subalansuotos** analizės („įvertink ir rizikas, ir galimybes mūsų įmonei“).  
    8. **Kūrybinio mąstymo skatinimas.**  
       - Pavyzdys: „Kokios DI naudojimo galimybės švietimo sistemoje?“  
       - Verslo kūrybinis pavyzdys: „Įsivaizduok ateities klientų aptarnavimo skyrių, kuris 5 metus sistemingai naudoja DI. Aprašyk, kaip pasikeitė procesai ir rolės.“  
       - Rizika: kūrybiniai scenarijai gali atrodyti „per tikri“ – priminti, kad tai **hipotetiniai** ateities vaizdai.  
    9. **Sąlyginis promptas (conditional prompts).**  
       - Pavyzdys: „Apibūdink sėkmingą verslą.“  
       - Verslo sąlyginis pavyzdys: „Apibūdink sėkmingą technologijų įmonę, kuri veikia tvarumo srityje ir per 3 metus pasiekė 30 % metinį augimą, laikydamasi griežtų ESG kriterijų.“  
       - Pastaba: sąlyginiai promptai patys savaime nėra blogi – **problema atsiranda, kai sąlygos užkoduotos taip, kad DI praktiškai negali pateikti kitokios (kritiškos) išvados.**  
  - **Pastaba UI:** skaidrėje naudoti numeraciją 6–9 (tęsinys nuo pirmosios manipuliacijų skaidrės), prie kiekvieno punkto – trumpas paaiškinimas + 1–2 verslo pavyzdžiai; pavojus / „etikos rizika“ galima pažymėti ikonėle (⚠️).

- **Praktinė užduotis „Pataisyk promptą“ (po 4.5) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** PRAKTINĖ UŽDUOTIS – PATAISYK PROMPTĄ.  
  - **Paskirtis:** Įtvirtinti atpažinti šališką ar per bendrą promptą ir suformuluoti neutralesnį – viena „pataisyk / pagerink“ tipo užduotis.  
  - **Šališkas pavyzdys (CopyButton):**  
    „Įrodyk, kad mūsų Q3 kampanija buvo sėkmės istorija, nepaisant kelių iššūkių. Pateik argumentus, kodėl tai buvo geriausias sprendimas.“  
  - **Instrukcija dalyviui:** Pataisyk šį promptą taip, kad jis būtų neutralus ir skatintų subalansuotą įvertinimą (stiprybės ir silpnybės). Užrašyk savo variantą arba pasirink iš 2–3 pasiūlymų (jei UI siūlo).  
  - **Pavyzdinis pataisytas variantas (galima CopyButton arba rodyti po užduoties):**  
    „Įvertink mūsų Q3 kampanijos stiprybes ir silpnybes; pateik ir argumentus už, ir prieš. Apibendrink, ką būtų galima pagerinti kitą kartą.“  
  - **Pastaba UI:** Skaidrėje – antraštė, šališkas promptas (CopyButton), instrukcija, laukas arba pasirinkimai; po atlikimo arba „Rodyti pavyzdį“ – neutralus variantas (CopyButton).

- **Skaidrė arba collapsible „Saugumas: prompt injection ir jailbreak“ (4.5) – MUST M4:**  
  - **Pavadinimas:** SAUGUMAS: PROMPT INJECTION IR JAILBREAK  
  - **Paskirtis:** Aiškiai atskirti **verslo manipuliaciją** (šališkumas, įrėminimas – ko vengti etikoje) nuo **saugumo grėsmių** – prompt injection ir jailbreak (OWASP LLM #1). Dalyvis turi žinoti ir etiką, ir pagrindus apsaugos.  
  - **Apibrėžimai (ATS blokai):**  
    - **Prompt injection** – kritinė LLM pažeidžiamumo forma: naudotojo įvestis „įskiepija“ instrukcijas į sistemą, todėl modelis negali patikimai atskirti sistemos ir vartotojo teksto. Pavyzdžiai: tiesioginė („Ignore previous instructions“), netiesioginė (nuotolinių šaltinių turinys – el. laiškai, svetainės), obfuskuota (Base64, Unicode).  
    - **Jailbreak** – bandymas apeiti modelio saugumo ribas (sąmoningas elgesio pakeitimas per specialiai parinktas užklausas).  
  - **Takoskyra:** Verslo manipuliacija = **ką laikome neetišku** (šališki promptai, leading questions). Saugumas = **techninė grėsmė** (įskiepimas, ribų apeijimas) – reikalauja kitokios gynybos (įvesties validacija, system vs user atskyrimas, konteksto ribos).  
  - **2–3 gynybos principai:** (1) Aiškus atskyrimas system vs user promptuose; (2) įvesties sanitizacija ir ribos; (3) konteksto lango ir instrukcijų patikrinimas (žr. OWASP, Anthropic).  
  - **Nuorodos (collapsible „Šaltiniai“ arba skaidrės apačioje):** OWASP LLM Prompt Injection Prevention Cheat Sheet; Anthropic – mitigate jailbreaks and prompt injections.  
  - **Pastaba UI:** Skaidrė arba sulankstomas blokas po „Pataisyk promptą“; antraštė, 2 apibrėžimo blokai, takoskyra (2 stulpeliai arba 2 trumpi blokai), numeruoti gynybos principai, nuorodos. CopyButton nebūtinas – informacinė skaidrė.

**Žinių patikrinimas (4.6)**  

Ši tema apima **du aiškiai atskirus blokus:** (1) **Haliucinacijos** – kas tai, kodėl atsiranda, kaip sumažinti, 5 praktinės taisyklės, anti-haliucinacinis šablonas, detektoriai; (2) **Žinių patikrinimo praktika** – šaltiniai, cross-check, „nežinau“ taisyklė, trikampis žinių patikrinimui, Quality blokas. Skaidrėse ir UI rekomenduojama tema pavadinti „Žinių patikrinimas ir haliucinacijos“, kad dalyvis matytų abu akcentus.

- **Skaidrė „Etika ir duomenų saugumas“ – kodėl tai svarbu versle:**  
  - **Pavadinimas:** ETIKA IR DUOMENŲ SAUGUMAS  
  - **Paskirtis:** paryškinti, kad RAG, manipuliacijos ir haliucinacijų valdymas nėra tik „technika“, bet ir **verslo rizika / reputacija / atsakomybė**. Ši skaidrė tinka kaip tiltas tarp 4.5 (manipuliacijos) ir 4.6 (žinių patikrinimas).  
  - **4 pagrindiniai principai (geltonos antraštės, balti paaiškinimai):**  
    1. **Sąžiningumas (DI šališkumo mažinimas).**  
       Tokią poziciją pasirinkusi organizacija sąmoningai įtraukia etiką į DI kūrimą ir naudojimą – tikrina šališkumą, iškraipymus, neteisingas prielaidas. Versle tai reiškia mažesnę diskriminacijos, klaidinančios reklamos ar neteisingų sprendimų riziką.  
    2. **Pasitikėjimas (Duomenų saugumas).**  
       DI sprendimai remiasi duomenimis – todėl duomenų apsauga tampa **teisiniu, etiniu ir moraliniu imperatyvu**. Klientų ir partnerių pasitikėjimas kris akimirksniu, jei DI projektas nutekins ar netinkamai naudos jautrią informaciją.  
    3. **Skaidrumas (Aiškumas ir atvirumas).**  
       DI sistemų sprendimų priėmimo proceso skaidrumas yra gyvybiškai svarbus žmonėms ir reguliuotojams. Versle tai reiškia aiškiai nurodyti: kur naudojamas DI, kokius duomenis jis naudoja ir kokias ribas turi (pvz., „tai ne finansinė / teisinė konsultacija“).  
    4. **Etiškas DI kūrimas ir diegimas.**  
       DI neturi „pakeisti“ žmogaus, o **papildyti jo gebėjimus**. Etiškas diegimas reiškia, kad DI nenaudojamas darbuotojų ar klientų kontrolei, slaptam manipuliavimui ar nelygybės didinimui; vietoje to akcentuojama pagalba, našumas ir skaidrumas.  
  - **Kodėl tai svarbu versle (3 sakiniais):**  
    - **Rizikos mažinimas:** etika ir duomenų saugumas sumažina teisinių ginčų, reputacijos krizės ir reguliacinės baudos tikimybę.  
    - **Pasitikėjimas ir lojalumas:** skaidriai komunikuojantis DI projektas kuria klientų ir darbuotojų pasitikėjimą – tai ilgalaikis konkurencinis pranašumas.  
    - **Tvarus DI diegimas:** etiškos praktikos leidžia naudoti DI ne „vienkartinei kampanijai“, o kaip tvarų įrankį, integruotą į verslo procesus.  
  - **Pastaba UI:** skaidrėje – 4 numeruoti principai ir trumpos paaiškinančios eilutės; apačioje galima blokas „Klausimai komandai“, pvz.: „Ar mūsų dabartinis DI projektas aiškiai komunikuoja, kokius duomenis naudoja ir kokias ribas turi?“

- **Skaidrė „DI Aktas (EU AI Act) – praktinė verslo santrauka“ – turinys (atnaujinta 2025–2026 m.):**  
  - **Pavadinimas:** DI AKTAS (EU AI ACT) – KĄ TAI REIŠKIA VERSLUI?  
  - **Trumpas kontekstas:** 2025–2026 m. įsigalioja ES **DI Aktas**, kuris nustato taisykles **bendrosios paskirties DI modeliams (GPAI)** ir DI sistemoms Europoje. Tai liečia ne tik modelių kūrėjus, bet ir **įmones, kurios naudoja ar įdiegia DI sprendimus**.  
  - **4 pagrindiniai akcentai skaidrėje (trumpai ir praktiškai):**  
    1. **Autorių teisės ir duomenų kilmė.**  
       - GPAI tiekėjai privalo turėti **autorių teisių politiką** ir dokumentuoti, kokiais duomenimis mokomas modelis (ypač tekstas, vaizdai).  
       - Verslui tai reiškia: rinkdamiesi modelį / platformą, turite klausti **„kaip tvarkomos autorių teisės?“** ir vengti sprendimų, kurie akivaizdžiai ignoruoja teisių turėtojus.  
    2. **Skaidrumas ir dokumentacija.**  
       - Reikalaujama išsamesnės **dokumentacijos apie modelių ribas, galimybes ir rizikas**, kad įmonės galėtų atsakingai juos integruoti.  
       - Verslui: privalu turėti bent trumpą **„DI naudojimo aprašą“** – kokius modelius naudojate, kam, kokie apribojimai (pvz. „nėra finansinės / teisinės konsultacijos“).  
    3. **DI generuoto turinio žymėjimas ir „deepfake“ atskleidimas.**  
       - DI Aktas numato, kad **sintetinis turinys (ypač vaizdai / video)** turi būti atpažįstamas; kuriasi bendras **ES skaidrumo kodeksas**, kuris duos praktines rekomendacijas žymėjimui.  
       - Verslui: jei naudojate DI kurti vizualus, garsą ar tekstą, svarbu **aiškiai pažymėti, kad tai DI generuotas turinys**, ypač viešose kampanijose ar komunikacijoje su klientais.  
    4. **Priežiūra ir atsakomybė viduje.**  
       - DI Aktas skatina organizacijas turėti aiškią **atsakomybės struktūrą** (pvz. DI atsakingas asmuo / DI biuras), kuris prižiūri atitiktį, rizikas ir dokumentaciją.  
       - Verslui: verta skirti **atsakingą žmogų arba mažą darbo grupę**, kuri seka DI projekto rizikas, atnaujina politiką ir yra kontaktas teisiniams / IT / verslo klausimams.  
  - **Kodėl tai svarbu verslui (1–2 sakiniai skaidrės apačioje):**  
    „DI Akto nepaisymas gali reikšti ne tik baudas, bet ir reputacinę žalą. Įmonės, kurios anksti įsiveda aiškias taisykles (autorių teisės, skaidrumas, žymėjimas, atsakomybė), turi didesnį šansą saugiai ir greitai skalėti DI naudą.“  
  - **Pastaba UI:** skaidrės struktūra – 4 numeruoti punktai (su trumpo paragrafo tekstu) ir trumpa apatinė „kodėl tai svarbu“ juosta; nebūtina gilintis į straipsnių numerius, akcentas – **praktinis poveikis verslui**.

- **Kas yra haliucinacijos? (apibrėžimas, skaidrėje arba bloke):**  
  **Haliucinacijos** – tai DI sugeneruotas turinys, kuris **atrodo įtikinamai**, bet yra **faktu nepagrįstas**, **netikslus** arba **išgalvotas**. Modelis „užpildo spragas“ arba atsako pagal tikimybes, ne pagal tiesioginį faktų tikrinimą – todėl gali pateikti klaidingas datas, neegzistuojančius šaltinius, logiškai skambius bet klaidingus paaiškinimus. Supratimas, kas yra haliucinacijos ir kodėl jos atsiranda, padeda kritiškai vertinti DI atsakymus ir naudoti žinių patikrinimo praktikas (šaltiniai, cross-check, „nežinau“).

- **Skaidrė „Kodėl GPT/DI daro haliucinacijas?“ (4.6) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** KODĖL GPT DARO HALIUCINACIJAS? (arba: KODĖL DI DARO HALIUCINACIJAS?)  
  - **5 priežastys (geltona paryškinti raktažodžiai, balta tekstas):**  
    1. **Statistika** – modelis **numato žodžius**, bet **nesupranta pasaulio**; jis generuoja tikimybiškai „tinkamą“ tęsinį, o ne faktu tiesą.  
    2. **Nepatikimi / neišsamūs duomenys** – jei mokymo duomenyse buvo klaidų ar šališkumo, modelis **pakartoja** tas klaidas.  
    3. **Trūksta prieigos prie faktų tikrinimo** – modelis **neturi tiesioginio tikrinimo** prieš atsakydamas; jis negali „pažiūrėti“ į dabartinius duomenis realiu laiku kaip žmogus.  
    4. **Spragų užpildymas** – kai informacijos **trūksta**, modelis **„užpildo“** spragas **logiškai skambiančiomis** detalėmis, kurios gali būti klaidingos.  
    5. **Dviprasmybės** – jei **klausimas neaiškus** arba dviprasmiškas, **klaidų tikimybė didėja** (geometriškai).  
  - **Ryšys su žinių patikrinimu:** Šios priežastys pateisina, kodėl reikia **šaltinių**, **cross-check** ir **„nežinau“ taisyklės** – žr. toliau Quality blokas.  
  - **Pastaba UI:** Skaidrėje – antraštė, 5 punktai su paryškintais raktažodžiais; galima trumpas „Kaip tai susiję su žinių patikrinimu?“ (1–2 sakiniai).

- **Sistemiškas požiūris – „ne tik promptas“:**  
  Kad dalyviai suprastų, kad **haliucinacijas lemia ne vien promptas**, reikia aiškiai nurodyti **keturis lygius**:  
  1. **Modelis ir jo mokymo duomenys** – kokybė, šališkumas ir klaidos mokymo duomenyse atsispindi išvestyje.  
  2. **Pateikti duomenys ir kontekstas** – RAG, dokumentai, įvesties tikslumas; neteisingas ar neišsamus kontekstas skatina „spragų užpildymą“.  
  3. **Promptas** – aiškumas, dviprasmybės, struktūra (6 blokai, promptų inžinerija) – tai viena iš sričių, bet ne vienintelė.  
  4. **Žinių tikrinimo praktikos** – šaltiniai, cross-check, „nežinau“ pripažinimas – tai jau **veiksmai po generavimo**, kurie sumažina žalą.  
  **Takeaway:** „Kaip sumažinti haliucinacijas?“ reikia atsakyti visu sistemos lygiu: patikimi modeliai ir duomenys, aiškus kontekstas (RAG), geri promptai, ir nuolatinis tikrinimas.

- **Skaidrė „Kaip sumažinti haliucinacijas?“ (4.6) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** KAIP SUMAŽINTI HALIUCINACIJAS?  
  - **4 patarimai (su ✓, geltona paryškinti / skaidrėje aiškūs):**  
    1. **Tikrink informaciją patikimuose šaltiniuose.** – Ne tik „ką DI parašė“, bet ar tai atitinka išorinius, patikimus šaltinius; tai sisteminis žinių patikrinimo veiksmas.  
    2. **Formuluok aiškesnius promptus.** – Sumažina dviprasmybes ir „spragų užpildymą“; promptas – viena iš sričių.  
    3. **Naudok promptų inžineriją.** – Struktūra (6 blokai), CoT, aiškūs reikalavimai – padeda modeliui nešokti į išgalvotą turinį.  
    4. **Naudok patikimus modelius ir duomenys.** – Modelio pasirinkimas ir duomenų (RAG, konteksto) kokybė lemia haliucinacijų dažnį; tai **ne tik promptas**.  
  - **Pastaba skaidrėje / po skaidre:** „Haliucinacijas lemia ne tik promptas – ir modelis, duomenys, ir jūsų tikrinimo praktikos.“ (sisteminė žinutė dalyviams.)

- **Skaidrė „Kaip mažinti haliucinacijas? – 5 praktinės taisyklės“ (4.6) – turinys (kopijuojamas į UI/JSON):**  
  Praktinės **pokyčio su DI** taisyklės – ką nurodyti prompte ar naudoti kaip elgesio gaires, kad būtų mažiau haliucinacijų. Skaidrė po „Kaip sumažinti haliucinacijas?“ (4 sisteminiai patarimai).  
  - **Pavadinimas:** KAIP MAŽINTI HALIUCINACIJAS? (arba: 5 PRAKTINĖS TAISYKLĖS POKYTYJE SU DI)  
  - **5 strategijos (kiekviena: antraštė + trumpas paaiškinimas / instrukcija DI):**  
    1. **„Jei neaišku – klausk“ protokolas.**  
       *Instrukcija DI:* „Jei mano užklausa neaiški ar trūksta duomenų, pateik 1–3 patikslinimo klausimus. Nepridėk detalių, kurių nenurodžiau.“  
    2. **Atskirk faktus nuo spėjimų.**  
       *Instrukcija DI:* „Atskirk FAKTUS (paremti duomenimis) ir SPĖJIMUS (prielaidos, interpretacijos). Paženk SPĖJIMAS.“  
    3. **Neprigalvok duomenų.**  
       *Instrukcija DI:* „Nekurk skaičių, datų, procentų, teisinių nuorodų ar statistikos. Jei jų reikia, pasakyk, kad informacijos trūksta.“  
    4. **Jei nesi tikras – pasakyk.**  
       *Instrukcija DI:* „Jei dėl informacijos nesi tikras, parašyk „nesu tikras“ ir nurodyk neapibrėžtumą. Nespėliok.“  
    5. **Naudok tik tai, kas pateikta.**  
       *Instrukcija DI:* „Atsakyk tik remdamasis mano pateikta informacija. Jei reikia išorinių duomenų – pirmiausia paklausk.“  
  - **Ryšys su turiniu:** Šios taisyklės gali būti **įrašomos į Quality bloką** arba naudojamos kaip standartinė „žinių patikrinimo“ instrukcija; jų laikymasis sumažina „spragų užpildymą“ ir nepatikimų faktų generavimą.  
  - **Pastaba UI:** Skaidrėje – antraštė, 5 punktai su antraštėmis ir trumpais paaiškinimais (galima CopyButton su ready-to-paste promptu į Quality bloką).

- **Skaidrė „Sisteminis promptas: anti-haliucinacinis šablonas“ (4.6 / perėjimas į Modulį 6) – turinys:**  
  Ši skaidrė **sujungia 5 praktines taisykles į vieną sisteminį promptą** („ANTI-HALIUCINACINIS PROMPTAS“), kurį dalyviai gali naudoti kaip **Meta / Quality** bloką ilgesniuose projektuose (ypač Modulyje 6).  
  - **Pavadinimas:** SISTEMINIS PROMPTAS (ANTI-HALIUCINACINIS PROMPTAS)  
  - **Tekstas (šablonas, kurį galima kopijuoti į promptą):**  
    - Jei kas nors neaišku ar trūksta informacijos, pateik patikslinimo klausimus.  
    - Neprigalvok faktų, skaičių, datų, statistikos ar citatų.  
    - Naudok tik mano pateiktą informaciją arba plačiai pripažintas žinias.  
    - Aiškiai atskirk: **FAKTAI** vs **SPĖJIMAI**.  
    - Jei nesi tikras, parašyk „nesu tikras“ vietoje spėjimo.  
    - Bet kokią prielaidą pažymėk kaip **SPĖJIMAS**.  
    - Prieš pateikdamas galutinį atsakymą, išvardyk galimas silpnas vietas ar nepagrįstus teiginius.  
  - **Praktinė užduotis (perėjimui į Modulį 6):** „Sukurkite savo projektą, suformuluokite pagrindinį promptą ir įkelkite jį kaip **sisteminį (anti-haliucinacinį) promptą** – panaudokite bent 3–4 iš aukščiau išvardytų punktų.“  
  - **Pastaba UI:** Šią skaidrę galima naudoti kaip tiltelį į Modulio 6 projektą: po teorijos apie haliucinacijas dalyviai gauna konkretų sisteminį šabloną ir kvietimą jį pritaikyti savo projekto promte.

- **Haliucinacijos ir SUPER PROMPTAI:** DI gali generuoti įtikinamą, bet faktu nepagrįstą arba nerealų turinį – ypač kai promptas ekstremalus arba reikalauja neįmanomo (pvz. „72 val. sukurti 1 mln. verslą“). Modulio 6 skaidrė **„SUPER PROMPTAI“** (sekcija EKSPERIMENTUOTI) parodo tokių haliucinacijų galimybes – po jos rekomenduojamas perėjimas prie šios temos (apibrėžimas + „Kodėl DI daro haliucinacijas?“ + kaip tikrinti).  
- **Trikampis žinių patikrinimui:** šaltinis → cross-check → „nežinau“.  
- **Verifikacijos grandinė (CoVe, Chain-of-Verification):** pažangus būdas mažinti haliucinacijas (tyrimuose įrodytas): modelis pirmiausia planuoja patikrinimo klausimus, atsako į juos atskirai, tada generuoja patikslintą galutinį atsakymą. Skaidrėje 4.6 – viena pastraipa arba „Giluminiam“ blokas.
- **Kaip tai įrašyti į Quality bloką:** reikalavimai cituoti, nurodyti ribas, vengti priimti nepatikrintą faktų; arba įtraukti **5 praktines taisykles** („jei neaišku – klausk“, atskirk faktus/spėjimus, neprigalvok duomenų, „nesu tikras“, naudok tik pateiktą) – žr. skaidrė „Kaip mažinti haliucinacijas? – 5 praktinės taisyklės“.

- **Skaidrė „DI turinio detektoriai“ (4.6) – lentelė su nuorodomis:**  
  - **Pavadinimas:** DI TURINIO DETEKTORIAI  
  - **Paskirtis:** parodyti, kokie įrankiai naudojami **DI sugeneruoto turinio aptikimui** (originalumas, autentiškumas, plagijavimas) – svarbu žinių patikrinimui, etikai ir akademiniam / verslo kontekstui.  
  - **Realizacija:** dedikuotas React komponentas `AiDetectorsSlide.tsx` su duomenimis iš `src/data/aiDetectors.ts`. Kortelių grid su filtravimu pagal tipą ir paieška. Praplėsta nuo 5 iki 10 įrankių (2026 m. apžvalga). Slide id: 201, type: `ai-detectors`. Vieta: po slide 200 (haliucinacijų benchmark), prieš slide 68.5 (savitikra).
  - **10 įrankių lentelė (ankstesnė 5 įrankių versija pakeista):**  

  | Įrankis | Pagrindinis dėmesys | Pagrindinės savybės | Tikslinė auditorija | Nuoroda |
  |--------|---------------------|----------------------|---------------------|--------|
  | **Originality.ai** | DI turinio ir plagijavimo nustatymas | Plagijavimo nustatymas, AI turinio aptikimas, Chrome plėtinys | Leidėjai, mokytojai, turinio kūrėjai | [originality.ai](https://originality.ai) |
  | **Undetectable.ai** | DI turinio „humanizavimas“ ir detektoriaus testavimas | AI detektorius + humanizeris; stiliaus imitacija; veikia prieš daugelį detektorių | Turinio kūrėjai, testuotojai (etiška nauda: tikrinant, ar žymėjimas būtinas) | [undetectable.ai](https://undetectable.ai) |
  | **Hix.ai (HIX Bypass)** | Universalus: DI aptikimas ir turinio optimizavimas | Nemokamas AI detektorius (ChatGPT, GPT-4, Claude, Gemini); duomenų optimizavimas | Studentai, mokytojai, rinkodaros specialistai | [bypass.hix.ai/ai-detector](https://bypass.hix.ai/ai-detector), [hix.ai](https://hix.ai) |
  | **Smodin.io** | AI ir žmogaus sukurtos turinio atpažinimas | Unikalumo įvertinimas, tobulinimo pasiūlymai, autentiškumo analizė | Profesionalai, studentai, mokytojai | [smodin.io](https://smodin.io), [smodin.io/ai-content-detector](https://smodin.io/ai-content-detector) |
  | **GPTZero** | DI turinio aptikimas akademinėje ir verslo aplinkoje | Sektorių modeliai, atribucija po sakinio; integracijos su LMS | Švietimas, leidyba, HR | [gptzero.me](https://gptzero.me) |

  - **Etikos pastaba:** Detektoriai naudojami **turinyje patikrinti** (ar tekstas atrodo DI generuotas), o ne slėpti DI naudojimą. „Humanizerių“ (pvz. Undetectable.ai) naudojimas siekiant **apgauti** akademinius ar verslo reikalavimus yra etiškai ir teisiškai rizikingas; kursas rekomenduoja naudoti juos tik **savikontrolei** (pvz. ar reikia pažymėti turinį kaip DI).  
  - **Kodėl verslui:** skaidrumas (DI Akto žymėjimas), pasitikėjimas klientų ir partnerių, akademinio / redakcinio proceso atitiktis.  
  - **Pastaba UI:** skaidrėje – antraštė „DI TURINIO DETEKTORIAI“, lentelė (5 eilutės) su nuorodomis (atidaromos naujame lange); apačioje trumpas blokas „Kada naudoti?“ (savikontrolė, redakcija, atitikties tikrinimas).

**Modulio 4 santrauka (4.7) – turinys (kopijuojamas į UI/JSON):**  
  - **Pavadinimas:** MODULIO 4 SANTRAUKA.  
  - **Apžvalga:** RAG, Deep research, tokenų ekonomika, promptų manipuliacijos, žinių patikrinimas ir haliucinacijos – trumpas ryšių tarp temų pakartojimas.  
  - **Ryšiai tarp temų (2–3 sakiniai, skaidrėje arba po apžvalga):**  
    - **RAG ir žinių patikrinimas** eina kartu: RAG leidžia remtis pateiktais šaltiniais, o žinių patikrinimas (šaltiniai, cross-check, „nežinau“) užtikrina, kad rezultatas būtų patikimas – abu mažina haliucinacijų riziką.  
    - **Tokenų ekonomika** leidžia į kontekstą įtraukti daugiau šaltinių (RAG) ir ilgesnius tyrimus (Deep research), o manipuliacijų atpažinimas ir neutralūs promptai – gauti objektyvesnius atsakymus, kuriuos vėliau lengviau tikrinti.  
    - **Deep research** dažnai naudoja RAG (paieška šaltiniuose) ir CoT/ToT (žingsniai, sintezė); kartu su tokenų ribų suvokimu tai padeda planuoti realius projektus (Modulis 6).  
  - **Prieš testą: 3 klausimai sau** (blokas skaidrėje arba atskira miniužduotis):  
    1. Ar galiu paaiškinti, kas yra RAG ir kada jį naudoti?  
    2. Ar žinau, kaip mažinti haliucinacijas ir tikrinti šaltinius?  
    3. Ar galiu suformuluoti neutralų promptą ir atpažinti manipuliaciją?  
  - **Motyvacija į Modulį 5:** „Kitas žingsnis – **Modulis 5: 15 min prezentacijos sprintas** (iš turimos info) + **mini suvokimo testas**. Susikursite prezentacijos draftą ir pasitikrinsite, ar suprantate esminę struktūrą prieš praktiką.“  
  - **Pastaba UI:** Skaidrėje – apžvalga, blokas „Prieš testą: 3 klausimai sau“ (3 punktai), CTA į Modulį 5.

---

## 3. Prezentacijos sprintas (Modulis 5) – 15 min + mini suvokimo testas

- **Level:** `test`.  
- **Trukmė:** ~15–18 min (sprintas + testas).  
- **Klausimų skaičius:** 3–5 (mini testas po sprinto).  
- **Formatas:** 3 dalys: (1) **Sprintas** (copy‑paste šablonas), (2) **Įrankių pasirinkimas** (klikintinos nuorodos), (3) **Just‑in‑time kortelės** (RAG/Tokenai/Manipuliacijos/Haliucinacijos – tik kai prireikia) + **Mini testas** (klausimas, atsakymo variantai, paaiškinimas).  
- **Atrakinimas:** Modulis 5 atrakintas po Modulio 4 užbaigimo.  
- **Rezultatų slenksčiai:** panašiai kaip Modulio 2 (pvz. &lt;70% → pakartoti sprintą ir peržiūrėti 4.1b/4.1-workflow-ex; ≥70% → rekomenduojama eiti į praktiką, Modulis 6).

### 3.1 Modulio 5 įvado ir rezultatų ekranų turinys (SOT)

**Implementacija:** Modulio 5 `test-intro` ir `test-results` turinys atitinka šį SOT. Rodymas – `src/components/slides/types/AllSlides.tsx` (TestIntroSlide, TestResultsSlide, `moduleId === 5`). DATA_AGENT: jei pereinama prie content-driven UI – įvesti šiuos tekstus į `modules.json` slide `content`.

**Įvado ekranas (prieš pradedant mini testą):**
- **Antraštė:** Mini testas po sprinto.
- **Tekstas:** Pirmiausia atlikote **15 min prezentacijos sprintą** (sukūrėte prezentacijos draftą iš turimos informacijos). Šis mini testas patikrina, ar supratote esminius principus: aiškų brief, struktūrą, įrankio pasirinkimą ir greitą kokybės patikrą.
- **Slenksčiai:** Rezultatas **≥70%** – rekomenduojama pereiti prie Modulio 6 (praktika). Rezultatas **&lt;70%** – rekomenduojama dar kartą pakartoti sprintą ir peržiūrėti Modulio 4 „Struktūruotą procesą“ (4.1b) bei „Prezentacijų kūrimo workflow“ (4.1-workflow-ex).
- **CTA:** Pradėti mini testą.

**Rezultatų ekranas – jei &lt;70%:**
- **Pranešimas:** Rezultatas [X]%. Rekomenduojame **pakartoti 15 min sprintą** (patikslinti brief ir struktūrą), tada vėl atlikti mini testą.
- **Nuorodos:** Jei UI leidžia – nuorodos į Modulio 4 skaidres: 4.1b (struktūruotas procesas) ir 4.1-workflow-ex (prezentacijos workflow).
- **CTA:** Pakartoti sprintą | Bandyti mini testą dar kartą.

**Rezultatų ekranas – jei ≥70%:**
- **Pranešimas:** Sveikiname! Jūsų rezultatas [X]%. Turite veikiančią prezentacijos struktūrą ir suprantate sprinto logiką – galite pereiti į Modulio 6 praktiką.
- **CTA:** Pradėti Modulį 6: Praktika (projektas).

### 3.2 Modulio 5 klausimų bankas (SOT)

Žemiau – **Source of Truth** mini testo klausimams. JSON sinchronizacija: `modules.json` Modulio 5 skaidrės `test-section` su `testQuestions`.

**Sprinto esmė (3–5 kl.):**
- Kas yra „brief“ sprintui? Teisingas: tema + auditorija + tikslas + skaidrių skaičius + tonas/formatas. Paaiškinimas: be brief DI „spėlioja“ ir pateikia bendrybes.
- Ką daryti, jei prezentacija „per ilga“ arba chaotiška? Teisingas: sugriežtinti formatą (pvz. 8 skaidrės, 2 bullet kiekvienai), aiškiai nurodyti struktūrą ir apribojimus (ilgis). Paaiškinimas: struktūra > „gražūs žodžiai“.
- Kuris įrankio pasirinkimas logiškiausias prezentacijos draftui? Teisingas: prezentacijų generatorius (pvz. Gamma) arba DI įrankis + aiškus šablonas. Paaiškinimas: įrankis svarbus, bet didžiausias svertas – prompto struktūra.
- Kas yra greita kokybės patikra prieš siunčiant? Teisingas: ar aiškus tikslas, ar atitinka auditoriją, ar yra logiška struktūra, ar nėra „išgalvotų“ faktų (jei faktai – paprašyti šaltinių / pažymėti prielaidas). Paaiškinimas: Quality – minimalus „stop“ prieš publikavimą.

---

## 4. Praktinė dalis (Modulis 6) – Projekto sukūrimas

- **Level:** `practice`.  
- **Idea:** vienas **integruotas projektas**, ne kelios atskiros užduotys.  
- **Trukmė:** ~25–35 min (orientacinis).

### 4.0 Projekto tikslai, savęs vertinimas, refleksija ir etapai (SOT)

**Implementacija:** Modulio 6 `practice-intro` rodo Projekto tikslus, Savęs vertinimo kortelę ir Projekto etapus. Rodymas – `AllSlides.tsx` PracticeIntroSlide (`moduleId === 6`). COMBO, SUPER PROMPTAI, Duomenų tvarkymas, Refleksija – `modules.json` skaidrės (content-block). Eilė: practice-intro → scenario → COMBO → SUPER PROMPTAI → Duomenų tvarkymas → Refleksija.

**Privalomas turinys Modulio 6 skaidrėse (JSON/UI):** Į `modules.json` ir rodymą būtina įtraukti: (1) **Projekto tikslai** (įvado skaidrėje arba atskirai), (2) **Savęs vertinimo kortelė** (checklist, prieš arba po projekto), (3) **Projekto etapai** (6 žingsniai su galimybe sustoti), (4) **Praktika: COMBO** (skaidrė su pavyzdžiu ir „Tai apima:“), (5) **SUPER PROMPTAI** (MOKYTIS + EKSPERIMENTUOTI su CopyButton ir pastaba apie haliucinacijas), (6) **Duomenų tvarkymas** (5 punktų atmintinė prieš refleksiją). Refleksijos skaidrė – jau aprašyta žemiau.

**Projekto įvado skaidrė – „Projekto tikslai“ (rodomi pradžioje):**
- Sukurti vieną konkretų artefaktą (tyrimo ataskaita / strategijos santrauka / analizė) su 6 blokų sistema.
- Pademonstruoti RAG („naudok tik pateiktą kontekstą“ arba šaltinių sąrašas).
- Įtraukti žingsniuotą tyrimą (Deep research) – 2–3 pakopos.
- Apsvarstyti tokenų ekonomiją ir žinių patikrinimą (šaltiniai arba „nežinau“ taisyklė).

**Savęs vertinimo kortelė (checklist) – prieš arba po projekto:**
| Nr | Kriterijus | Taip / Dar ne / Netaikau |
|----|------------|---------------------------|
| 1 | Naudojau 6 blokų sistemą (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED) | |
| 2 | Įtraukiau RAG elementą (šaltiniai, „naudok tik pateiktą kontekstą“) | |
| 3 | Įtraukiau Deep research žingsnius (multi-step) | |
| 4 | Įtraukiau žinių patikrinimo elementą (šaltiniai arba „nežinau“) | |
| 5 | Apsvarstau tokenų apribojimą (ilgis, max_tokens) | |

**Refleksijos skaidrė (Modulio 6 pabaigoje, prieš „Duomenų tvarkymas“):**
- Klausimai dalyviui: (1) Kas buvo sunkiausia projekte? (2) Kurį įgūdį naudosite pirmiausia darbe? (3) Ką dar norėtumėte išmokti apie DI? Galima laisvo teksto arba tik skaidrėje – sau atsakyti.

**Projekto etapai (scaffolding) – 6 žingsniai su galimybe sustoti:**
1. **Tikslas ir rolė (META)** – ką kuriate, kam, kokia rolė. Galite sustoti ir išsaugoti.
2. **Šaltiniai ir apribojimai (INPUT + RAG)** – kokius duomenis naudojate, RAG gairės.
3. **Formatas (OUTPUT)** – struktūra, ilgis, kalba.
4. **Tyrimo planas (REASONING / Deep research)** – žingsniai, sub-klausimai.
5. **Kokybe ir patikrinimas (QUALITY)** – šaltiniai, „nežinau“, objektyvumas.
6. **Techniniai nustatymai (ADVANCED)** – temperature, max_tokens.

- **Susietas turinys Modulyje 4 (kur vėliau neieškoti):**  
  - **Struktūruotas darbas su DI (8 žingsnių workflow):** žr. **§2, 4.1b „Darbas su DI: struktūruotas procesas“** – eina Modulio 4 priekyje, prieš RAG ir tokenizaciją; reikia interaktyvios proceso schemos.  
  - **Tokenų ekonomika, konteksto langas, tokenų taupymas:** žr. **§2, Tokenų ekonomika (4.4)** – skaidrės „Kas yra tokenai?“, „Tokenizavimas“, „Kas yra konteksto langas?“, „Kaip tai veikia?“ (lentelė modelių), „Kiek tokenų grąžina promptas?“, „Konteksto langas galioja“, **„Promptingo patarimai“** (7 patarimai + copy-paste promptai).  
  - **Praktinės užduotys (apibendrinimas, santraukos):** žr. **§2, 4.4** – „Praktinės užduotys – konteksto apibendrinimas“ (3 užduotys su promptais).  
  - **Pažengusi užduotis (ilgo dokumento workflow, 6 žingsniai):** žr. **§2, 4.4** – „Pažengusi praktika – ilgo dokumento workflow (PAVYZDŽIAI)“ – gali būti naudojama kaip Modulio 6 projekto variantas arba papildomas pratimas.  
  - **Vizualinė skaidrė „Kaip veikia DI atmintis?“:** žr. **§2, 4.4**.

### Projekto koncepcija (Modulis 6)

- **Pavadinimas (darbo):** pvz. „Tyrimo ar strategijos dokumentas su DI“.  
- **Rezultatas:** vienas konkretus artefaktas – pvz. 1–2 puslapių ataskaita ar strategijos santrauka su šaltiniais ir aiškia struktūra.  
- **Proceso reikalavimai:**  
  - Naudoti 6 blokų sistemą (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED).  
  - Pademonstruoti RAG (jei įmanoma – „naudok tik pateiktą kontekstą“ arba sąrašą faktų).  
  - Įtraukti žingsniuotą tyrimą (Deep research) – pvz. 2–3 pakopos: klausimų išskaidymas → atsakymai → sintezė.  
  - Apsvarstyti tokenų ekonomiją (trumpas, bet pakankamas kontekstas).  
  - Įtraukti žinių patikrinimo elementą (šaltiniai arba „nežinau“ taisyklė).

### Scenarijus – vienas pavyzdys (Modulis 6)

- **Kontekstas:** Dalyvis – verslo analitikas. Užduotis – parengti trumpą tyrimo ataskaitą tema X (pvz. „Tendencijos Y rinkoje 2024–2025“).  
- **Duomenys:** Pateikti 1–2 šaltiniai (santraukos arba punktai) + apribojimai (puslapių skaičius, kalba).  
- **Žingsniai (instrukcijos):**  
  1. META – rolė, tikslas, auditorija.  
  2. INPUT – duomenys (šaltiniai), apribojimai (RAG stilius).  
  3. OUTPUT – formatas, struktūra, ilgis.  
  4. REASONING – tyrimo žingsniai (Deep research).  
  5. QUALITY – šaltiniai, patikrinimas, objektyvumas.  
  6. ADVANCED – temperature, max_tokens (tokenų ekonomika).  
- **Tarpiniai sprendimai:** po vieną pavyzdinį bloką kiekvienam žingsniui (kaip Modulyje 3).  
- **Pilnas pavyzdinis sprendimas:** vienas kopijuojamas pilnas promptas + (neprivaloma) pavyzdinis išvesties fragmentas.

### Alternatyvus scenarijus: Custom GPT (ChatGPT projektas) (Modulis 6)

> **Idėja:** dalyvis pasirenka praktiką: (A) tyrimo ataskaita (aukščiau) **arba** (B) „Custom GPT“ (ChatGPT projekto) sukūrimas pagal aiškią schemą.

- **Rezultatas (artefaktas):** vienas „Custom GPT“ projekto aprašas, kurį galima įkelti į įrankį:  
  1) **Tikslas + auditorija**, 2) **Rolė ir ribos**, 3) **Master prompt** (kontekstas apie organizaciją), 4) **System taisyklės** (kaip DI turi veikti), 5) **Testavimo rinkinys** (5 test promptai + expected), 6) **Definition of done**.
- **Schema (privaloma):** naudoti 8 žingsnių „Custom GPT kūrimo procesą“ (žr. `public/custom_gpt_process.svg`) kaip vizualinį vedlį: Tikslas → Rolė → Prisijungimas → Konfigūracija → Papildomos funkcijos → Testavimas → Publikavimas → Tobulinimas.
- **Rekomenduojama eiga (6 žingsniai, kad telptų praktikoje):**
  1. **Tikslas:** ką šis GPT darys (viena užduotis) ir kam (auditorija).
  2. **Rolė:** kaip jis mąsto (pvz. „konsultantas / redaktorius / analitikas“).
  3. **Ribos:** ko jis nedaro (pvz. „nekuria faktų be šaltinių“, „jei nežino – rašo „nežinau““).
  4. **Master prompt:** 6–10 eilučių kontekstas apie organizaciją (stilius, tikslai, auditorija).
  5. **Testavimo rinkinys:** 5 test promptai (normalus, kraštinis, „blogas“/neaiškus, manipuliacinis, su šaltiniais) + 1–2 sakiniai, ko tikimasi.
  6. **Tobulinimas:** pagal 1–2 testus patikslinti taisykles (iteracija).
- **Definition of done (3 kriterijai):**
  1) GPT instrukcijos telpa į 1 ekraną (aiškios, be pertekliaus), 2) testavimo rinkinys parodo, kad GPT elgiasi stabiliai, 3) yra aiškiai aprašytos ribos („nežinau“ + šaltiniai).

### Praktika: COMBO (Modulis 6 – skaidrė / įrankis projekte)

- **Paskirtis:** Parodyti, kaip **sujungti kelis metodus viename prompte**, kad gautum kokybišką rezultatą – ir kaip tai pritaikyti Modulio 6 projektui (rolė + žingsniai + palyginimas + konkreti išvestis).  
- **Pavadinimas skaidrės / bloko:** PRAKTIKA: COMBO.  
- **Posakis skaidrėje:** „Sujunk kelis metodus, kad gautum kokybišką rezultatą.“  

- **Pavyzdys – combo promptas (copy-paste):**  
  „Elkis kaip programinės įrangos inžinierius. Pateik nuoseklų vadovą, kaip įdiegti pokalbių robotą naudojant GPT-5, palygink su tradiciniais taisyklėmis pagrįstais pokalbių robotais, ir sukurk Python kodą.“  

- **Tai apima (skaidrėje – „Tai apima:“):**  
  1. **Vaidmens priskyrimas** – „Elkis kaip programinės įrangos inžinierius“.  
  2. **Žingsnis po žingsnio instrukcija** – „Pateik vadovą, kaip įdiegti pokalbių robotą“.  
  3. **Palyginimas** – „Palygink su taisyklėmis pagrįstais pokalbių robotais“.  
  4. **Kodo išvestis** – „Sukurk Python kodą“.  

- **Tokenų valdymas (skaidrėje – geltona / paryškinta):**  
  „Visuomet įsitikink, kad gerbi tokenų limitą (promptas + atsakymas ≤ [pvz. 4096 arba pagal platformą] tokenų).“  
  *Ryšys su Modulio 4 tokenų ekonomika (4.4) ir Modulio 6 projektu:* projektas turi tilpti į projekto apimtį; COMBO promptai gali būti ilgi – reikia planuoti max_tokens arba skaidyti į kelis promptus.  

- **Pritaikymas Moduliui 6:** Dalyvis gali naudoti COMBO prie projekto (pvz. tyrimo ataskaitos): viena užklausa apjungia **rolę** (analitikas), **žingsniuotą** gidą (Deep research), **palyginimą** (pvz. tendencijos A vs B) ir **formatą** (ataskaita, santrauka). Skaidrė arba blokas „Praktika: COMBO“ – tinkama vietą Modulio 6 įvade arba prieš „Žingsniai (instrukcijos)“, kad dalyvis žinotų, kaip kurti „combo“ tipo promptus projekte.  
- **Pastaba UI:** Skaidrėje – antraštė „PRAKTIKA: COMBO“, posakis „Sujunk kelis metodus…“, pavyzdys (CopyButton), blokas „Tai apima:“ (4 punktai), Tokenų valdymas (paryškintas); galima „Kaip tai naudoti savo projekte?“ (1–2 sakiniai).

### SUPER PROMPTAI (praktinė dalis) ir perėjimas prie haliucinacijų

- **Pavadinimas skaidrės:** SUPER PROMPTAI.  
- **Paskirtis:** Praktinėje dalyje parodyti du tipus „super“ promptų – **MOKYTIS** (struktūruotas mokymasis, 20/80 principas) ir **EKSPERIMENTUOTI** (ekstremalus scenarijus). Antrasis pavyzdys **parodo haliucinacijų galimybes**: ekstremalus, nerealūs apribojimai (72 val., 1 mln. eur., nemokami įrankiai ir pan.) gali paskatinti DI generuoti įtikinamą, bet nerealų arba perdėtą turinį.  
- **1. MOKYTIS (copy-paste):**  
  „Tavo rolė – [X] srities ekspertas. Suteik man 20 proc. informacijos, kad suprasčiau 80 proc. turinio apie temą [TEMA]. Struktūruok atsakymą taip: – Pagrindiniai principai (3–5) – Svarbiausi terminai su apibrėžimais – Praktiniai pavyzdžiai – Dažniausios klaidos, kurių reikia vengti.“  
- **2. EKSPERIMENTUOTI (copy-paste; pedagoginė pastaba žemiau):**  
  „Tavo rolė – brutalus, strateginis IT konsultantas, 15+ metų patirties. Aš papuoliau į bėdą – pralošiau 1 mln. eurų, mafija laiko ginklą prie galvos. Turiu 72 val. Paruošk man planą valanda po valandos, kaip užkurti 1 mln. vertės DI verslą. Jokių atsiprašymų. Jokių ašarų. Tik juodas darbas. Nemokami įrankiai. Jokio tuščiažodžiavimo. Jokių nesąmonių. Tik rezultatas.“  
- **Perėjimas po šios skaidrės – haliucinacijos:** Po „SUPER PROMPTAI“ skaidrės **būtina perėjimas prie temos haliucinacijos**. Ši skaidrė **parodė haliucinacijų galimybes**: kai promptas reikalauja neįmanomo arba labai ekstremalaus scenarijaus (laikas, resursai, „tik rezultatas“), DI gali generuoti įtikinamą, bet faktu nepagrįstą arba nerealų planą – t. y. haliucinaciją. Todėl **po praktinės dalies (SUPER PROMPTAI)** rekomenduojama: (1) trumpas blokas ar skaidrė „Ką tik matėme: ekstremalus promptas gali duoti įtikinamą, bet nerealų atsakymą – tai haliucinacijos pavyzdys“; (2) perėjimas prie Modulio 4 temos **Žinių patikrinimas (4.6)** ir **haliucinacijos** (kaip atpažinti, kaip tikrinti šaltinius, „nežinau“ taisyklė). Jei Modulis 6 eina po Modulio 4/5 – pakanka priminti: „Haliucinacijos ir žinių patikrinimas jau matėte Modulyje 4; čia – praktinis pavyzdys, kaip ekstremalus promptas atskleidžia jų galimybes.“  
- **Pastaba UI:** Skaidrėje – antraštė „SUPER PROMPTAI“, dvi kortelės (MOKYTIS | EKSPERIMENTUOTI) su CopyButton; po antra kortele – trumpas tekstas „Šis promptas gali paskatinti nerealų arba perdėtą atsakymą → perėjimas prie haliucinacijų (žr. Modulio 4 Žinių patikrinimas).“

### Duomenų tvarkymas (Modulio 6 pabaigos atmintinė)

- **Paskirtis:** po projekto ir SUPER PROMPTŲ dalies pateikti **trumpą, praktinę atmintinę**, kaip tvarkyti savo promptus, procesus ir duomenis kasdieniniame darbe – kad išmoktos technikos taptų ilgalaike sistema.  
- **Pavadinimas skaidrės:** DUOMENŲ TVARKYMAS (PRAKTINĖ ATmintinė).  
- **5 punktai (geltonos antraštės, balti paaiškinimai):**  
  1. **Asmeninė promptų biblioteka.**  
     Saugokite šablonus, suskirstytus pagal naudojimo atvejį (pvz. duomenų analizė, turinio generavimas, projektų valdymas), kad juos būtų lengva rasti ir pernaudoti.  
  2. **Promptų versijavimas.**  
     Laikykite senas versijas (pvz. „v1“, „v2“) – taip galite sekti, kurie pakeitimai pagerino rezultatus, ir prireikus grįžti prie ankstesnio varianto.  
  3. **Dokumentacija.**  
     Susikurkite paprastą sistemą dokumentacijai (Notion, Confluence, GitHub README) – rašykite, kam skirtas kiekvienas šablonas, kokie parametrai ir ribos (tokenai, platforma).  
  4. **Procesai.**  
     Vizualizuokite dažniausiai kartojamus DI procesus (schemos, diagramos) ir aprašykite žingsnis po žingsnio vadovus pasikartojančioms užduotims; tai leidžia komandai naudoti DI nuosekliai, ne „iš naujo išradinėjant dviratį“.  
  5. **Duomenų rinkiniai.**  
     Saugokite mažus, reprezentatyvius duomenų rinkinių pavyzdžius (testiniai fragmentai), kad galėtumėte greitai išbandyti naujus promptus ar workflows be būtinybės apdoroti visą duomenų bazę.  
- **Takeaway:** gera **duomenų ir promptų higiena** = mažiau chaoso, lengvesnis testavimas ir greitesnis perėjimas nuo „vienkartinių eksperimentų“ prie tvaraus DI naudojimo versle.  
- **Pastaba UI:** ši skaidrė gali būti **paskutinė Modulio 6 skaidrė prieš refleksiją / uždarymą**; vizualiai – 5 numeruoti punktai + mažas „TIP“ blokas su tekstu „Pradėk nuo 1–2 dalykų (pvz. biblioteka + versijavimas) ir plėsk sistemą palaipsniui.“

### Integracija su Moduliu 3 (Modulis 6 ↔ Modulis 3)

- Modulis 3: 4 atskiri scenarijai (pardavimai, marketingas, HR, produktas).  
- Modulis 6: 1 projektas, kuris **sujungia** kelis konceptus (6 blokai + RAG + Deep research + tokenai + patikrinimas).  
- UI ir instrukcijų struktūra gali būti panaši į Modulio 3 (žingsniai, tarpiniai sprendimai, pilnas pavyzdys), bet užduotis viena, ilgesnė.

### Nuoroda atgal: Modulio 4 turinys, susijęs su Moduliu 6

- **Tokenų ekonomika (4.4), praktinės užduotys, promptingo patarimai, pažengusi praktika:** viskas aprašyta **§2 (Teorinė dalis, Modulis 4)**, bloke **Tokenų ekonomika (4.4)**. Ten rasite skaidrių turinį, copy-paste promptus ir 6 žingsnių ilgo dokumento workflow – kad vėliau nereikėtų ilgai ieškoti.

---

## 5. Pedagoginis įvertinimas

### 5.1 Stiprybės (dizaino sprendimai)

- **Nuoseklumas su 1–3:** Ta pati triada Learn → Test → Practice palaikoma (Moduliai 4 → 5 → 6).  
- **Bloom taksonomija:**  
  - Modulis 4: **Suprasti** (RAG, Deep research, tokenai, manipuliacijos, patikrinimas) ir **Taikyti** (pavyzdžiai, šablonai).  
  - Modulis 5: **Taikyti / Suprasti** (15 min sprintas + mini testas).  
  - Modulis 6: **Taikyti / Analizuoti / Kurti** (vienas projektas su sinteze).  
- **Progresyvus sudėtingumas:** Modulis 6 reikalauja visko iš 4 ir 1–3 – tai atitinka „capstone“ tipo užduotį.  
- **Praktika:** Vienas projektas mažina kognityvinę apkrovą lyginant su keliais atskirais scenarijais ir leidžia giliau įsigilinti.

### 5.2 Rizikos ir rekomendacijos

| Rizika | Rekomendacija |
|--------|----------------|
| Per daug teorijos vienu metu (RAG + Deep research + tokenai + manipuliacijos + patikrinimas) | Kiekvieną temą laikyti 1 skaidre; santraukos skaidrėje (4.7) stiprinti ryšius tarp temų. |
| Tokenų ekonomika gali atrodyti „techniška“ | Laikyti praktinę: „kaip trumpinti ir išlaikyti kokybę“, be API detalių. |
| Manipuliacijos – jautri tema | Pabrėžti „ko vengti“ ir „neutralūs promptai“, be pateikimo pavyzdžių kenkėjiškų promptų. |
| Projektas per laisvas arba per sudėtingas | Aiškiai apibrėžti vieną scenarijų (pvz. tyrimo ataskaita) su fiksuotu formatu ir 6 žingsnių instrukcijomis. |

### 5.3 Įvertinimas pagal turinio_pletra.md principus

- **Terminologija:** DI (ne AI), lietuviški terminai, angliški – su trumpu paaiškinimu (RAG, token, Deep research).  
- **Vertės pasiūlymas:** Po 4–6 dalyvis gali kurti pažangius promptus su šaltiniais, giluminio tyrimo struktūra, sąmoningu tokenų naudojimu ir kritiniu patikrinimu.  
- **Kopijuojami šablonai:** Kiekvienoje temoje (RAG, Deep research, žinių patikrinimas) – bent vienas kopijuojamas pavyzdys arba mini-šablonas.

---

## 6. Turinio_pletra.md įvertinimas ir integracija

### 6.1 Kas jau gerai (turinio_pletra.md)

- Aiški 3 modulių struktūra (Learn → Test → Practice) ir progreso logika.  
- 6 blokų sistema, workflow, technikos, mąstymo modeliai (CoT/ToT) gerai aprašyti – tai yra **pagrindas** moduliams 4–6.  
- Modulio 3 instrukcijos (žingsniai, tarpiniai sprendimai, pavyzdiniai sprendimai) – geras pavyzdys Moduliui 6.  
- Kalbos ir stiliaus gairės (DI, lietuviškas, gramatika) – tiesiogiai perkeliami į 4–6.  
- Changelog ir versijavimas – pakeitimus moduliams 4–6 galima registruoti panašiai.

### 6.2 Kas trūksta 4–6 kontekste

- **turinio_pletra.md** kol kas apima tik Modulius 1–3. Fazė 3 minimas „Pažangusis kursas (advanced techniques)“ be detalės.  
- RAG, Deep research, tokenų ekonomika, promptų manipuliacijos ir žinių patikrinimas nėra aprašyti – **šis failas** (`turinio_pletra_moduliai_4_5_6.md`) užpildo tą spragą.  
- Progreso logika (atrakinimas) dokumente aprašyta tik 1→2→3; reikia papildyti 4→5→6 ir sertifikato sąlygas (jei bus).

### 6.3 Integracija tarp naujų modulių

- **4 → 5:** Modulio 4 santraukoje (4.7) aiškiai nurodyti: „Kitas žingsnis – **Modulis 5: 15 min prezentacijos sprintas** + **mini suvokimo testas**“ (ką tiksliai dalyvis padarys ir ką pasitikrins).  
- **5 → 6:** Testo rezultatų ekrane (kaip Modulio 2) – CTA: „Pradėti Modulį 6: Projekto kūrimas“ (arba „Praktika: projektas“).  
- **1–3 ↔ 4–6:**  
  - Modulio 4 pradžioje (4.1a „Konteksto inžinerija: kaip valdyti DI“ ir 4.1a2 „4 dedamosios“) – savokos, apibrėžimas ir konceptualus skaidymas (sutapatintas su Anthropic, Google, OpenAI); įvade (4.1) – nuorodos į 6 blokus, workflow ir Modulio 1 santrauką.  
  - Kiekvienoje temoje (4.2–4.6) – trumpas „Ryšys su 6 blokais / Moduliu 1“ (jau įrašyta 2.1 lentelėje).  
  - Modulyje 6 – nuoroda, kad projektas naudoja tą pačią 6 blokų sistemą kaip Modulio 3 scenarijai, plius RAG/Deep research/patikrinimas.

### 6.4 Siūlomas pakeitimas pagrindiniame turinio_pletra.md

- Skyriuje **„Atnaujinta struktūra“** arba **„Fazė 2 / Fazė 3“** pridėti bloką:  
  - „Moduliai 4–6 (Konteksto inžinerija): turinio plėtra ir struktūra aprašyta atskirai – žr. `docs/turinio_pletra_moduliai_4_5_6.md`.“  
- Progreso logikoje („Modulių atrakinimas“) pridėti:  
  - Modulis 4 → atrakintas po Modulio 3 (arba po sertifikato, jei taip nuspręsta).  
  - Modulis 5 → po Modulio 4.  
  - Modulis 6 → po Modulio 5 (ir optional: po ≥70% Modulio 5 teste).

---

## 7. Kiti techniniai ir duomenų gairės

- **modules.json:** Moduliams 4, 5, 6 reikės atitinkamų įrašų (`id: 4, 5, 6`), `slides` / `questions` struktūra atitinka esamus tipus arba nauji tipai (pvz. `rag`, `deep-research`, `tokens`, `manipulation`, `verification`) – tipų apibrėžimai turi būti `src/types/modules.ts` ir atvaizdavimas `SlideContent.tsx`.  
- **Progreso logika:** `src/utils/progress.ts` – atrakinimo taisyklės 4, 5, 6 (priklausomai nuo 3 ir vienas kito).  
- **Navigacija:** Modulių sąraše (ModulesPage) ir ModuleView – moduliai 4, 5, 6 rodomi su tais pačiais UX principais kaip 1–3.

---

## 8. Santrauka ir kiti žingsniai

- **Šis failas** yra vienas **turinio plėtros** dokumentas moduliams 4–6: teorija (RAG, Deep research, tokenų ekonomika, promptų manipuliacijos, žinių patikrinimas), testas, vienas praktinis projektas.  
- **Pedagogiškai:** seka Learn → Test → Practice išlaikyta, Bloom atitinka, capstone projektas su integracija.  
- **Integracija su turinio_pletra.md:** pagrindinis failas lieka SOT 1–3; šis failas – SOT 4–6; rekomenduojama viena nuoroda ir progreso taisyklės papildymas pagrindiniame faile.  
- **Sekantys žingsniai:**  
  1. Patvirtinti temų sąrašą ir vieno projekto scenarijų (skyriai „Scenarijus“ ir „Integracija su Moduliu 3“).  
  2. Parašyti faktinį turinį kiekvienai skaidrei (4.1–4.7) pagal šias gaires.  
  3. Sukurti Modulio 5 klausimus ir paaiškinimus.  
  4. Detaliai išrašyti Modulio 6 instrukcijas, tarpinius ir pilną pavyzdinį sprendimą.  
  5. Sinchronizuoti su `modules.json` ir UI (tipai, progresas) pagal DATA_AGENT / CODING_AGENT pipeline.

---

**Versija:** 1.0.0 (2026-02)  
**Failas:** `docs/turinio_pletra_moduliai_4_5_6.md`
