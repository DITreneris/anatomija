# Modulio 3 (Praktinis Pritaikymas) UI/UX – geriausios praktikos

> **Šaltiniai:** interneto paieška (2025) – interaktyvūs IT mokymai, promptų inžinerija, konteksto inžinerija, e-learning engagement, top praktikos.  
> **Tikslas:** konkrečios idėjos, ką galima naudoti tobulinant Modulio 3 UI/UX (4 verslo scenarijai, 6 blokų sistema).

---

## 1. Kas jau gerai (santrauka iš šaltinių)

- **Interaktyvus e-learning** gerina engagement ir retention vs pasyvus turinys (Articulate, Elucidat).
- **Mikromokymai** su interaktyvumu ~17 % efektyvesni; **click-and-reveal**, **žingsnis po žingsnio**, **šablonų kopijavimas** – įprastos praktikos.
- **Promptų inžinerija:** aiškios instrukcijos, pavyzdžiai (few-shot), konteksto valdymas, iteratyvus testavimas (OpenAI, IBM, Learn Prompting).
- **Konteksto inžinerija:** ne tik vienas promptas – sistema (rolė, istorija, dokumentai, apribojimai) – labai atitinka jūsų 6 blokų ir scenarijų struktūrą.
- **UI/UX e-learning:** mažesnė kognityvinė apkrova, mobilumas, aiški navigacija, CTA ir „kitas žingsnis“ didina užbaigimus (Elucidat 2025, CISIN).

---

## 2. Top 10 praktikų pritaikomų Moduliui 3

| # | Praktika | Šaltinis / logika | Pritaikymas Moduliui 3 |
|---|----------|-------------------|-------------------------|
| **1** | **Click-and-reveal / progresyvinis atskleidimas** | Articulate, microlearning – mažina clutter, didina curiosity | Scenarijaus skaidrėje: „Kontekstas“, „Duomenys“, „Apribojimai“, „Laukiamas rezultatas“ – **tabs arba accordion**, ne viskas iš karto. Arba „Pirmas žingsnis: perskaityk kontekstą“ → paspaudus atsiranda duomenys ir t.t. |
| **2** | **Drag-and-drop blokų surinkimas** | E-learning engagement – aktyvus, ne tik skaityti | **Pasirinktina:** „Surinkite 6 blokus“ – tempk ir atleisk META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED į teisingą tvarką. Po to rodomas tekstinis šablonas. Gali būti tik Scenarijuje 1 kaip „šiltas startas“. |
| **3** | **Branching / pasirinkimai su pasekmėmis** | Scenarijų mokymai – „jei pasirinksi X, matysi Y“ | Po savo prompto įvedimo: **„Kas būtų, jei pakeistum temperature į 0.8?“** – vienas pasirinkimas su trumpu paaiškinimu (ne pilnas chatbot). Arba „Kuri rolė geriausiai tinka?“ – 2–3 variantai su one-line feedback. |
| **4** | **Žingsnis po žingsnio su „partial reveal“** | Articulate, scaffolding – mažina overwhelm | Jūs jau turite **instructions.steps** su hint ir partialSolution. **UI tobulinimas:** vietoj vieno didelio textarea – **6 mažesni laukai (po bloką)** arba stepper, kur atsiranda kitas laukas tik uždarius ankstesnį. Taip aiškiau, kur dabar dėti dėmesį. |
| **5** | **Pavyzdžio „pilnas / sutrumpintas“ perjungimas** | Konteksto inžinerija – valdyti konteksto ilgį | Šablono mygtukas **„Peržiūrėti pilną pavyzdį“** – pasirinktinai **„Trumpa versija (tik META+INPUT+OUTPUT)“** vs **„Pilna (visi 6 blokai)“**. Mažina kognityvinę apkrovą tiems, kurie nori tik priminti struktūrą. |
| **6** | **Momentinis „saved“ ir progreso vizualizacija** | EdTech 2025 – trust, mažina anxiety | Jūs jau turite auto-save ir „Išsaugota“. **Papildomai:** mažas **progress bar arba 6 blokų checklist** (META ✓, INPUT ✓, …) pagal to, ar textarea turi bent X simbolių ar keyword. Vizualiai matosi „kiek dar liko“. |
| **7** | **Refleksijos promptas po kiekvieno scenarijaus** | AICoursify, santraukos skaidrės – +22.8 % produktyvumas | Po Scenarijaus 1–4: **vienas kopijuojamas klausimas**, pvz. „Kurį bloką šiandien išmokau geriausiai pritaikyti?“ arba naudoti **reflection prompt** iš content-agent-summary-slide (What–So What–Now What). Viena kortelė su Copy mygtuku. |
| **8** | **Scenarijų lentelė su progresu** | UI patterns – predictability, „kur esu“ | Modulio 3 pradžioje (Praktikos Įvadas): **4 scenarijų kortelės su statusu** – Ne pradėta / Vykdoma / Užbaigta (ikona ar spalva). Klikas – scroll/navigacija į tą scenarijų. Taip pat **„3 iš 4 užbaigta“** skaitiklis. |
| **9** | **Trumpi „tip“ įterptukai** | Prompt engineering gairės – „be specific“, „use separators“ | Prie textarea arba prie kiekvieno žingsnio – **vienos eilutės patarimas**, pvz. „META: pradėk nuo rolės ir auditorijos“, „OUTPUT: nurodyk kalbą ir ilgį“. Galima iš `task.instructions.steps[].hint` jau rodyti kaip tooltip arba inline tip. |
| **10** | **Aiškus CTA į „Kitas scenarijus“ ir Santrauką** | Elucidat – konkretus CTA +23 % | Apačioje scenarijaus skaidrės: **„Užbaigiau šį scenarijų“** (jau turite) + **„Pereiti prie Scenarijaus 2“** / **„Į Praktikos santrauką“** su rodykle. Vietoj bendro „Toliau“ – konkretus tikslas. |

---

## 3. Konteksto inžinerija ir promptų inžinerija – tiesioginė sąsaja

- **Konteksto inžinerija** (Anthropic, „Beyond Prompting“): optimizuojamas **visas** kontekstas – system prompt, istorija, dokumentai, apribojimai. Jūsų 6 blokai (META, INPUT, OUTPUT, REASONING, QUALITY, ADVANCED) – tai būtent konteksto inžinerijos struktūra.
- **UI įžvalga:** pavadinti blokus taip, kad būtų aišku „ką DI mato“ – pvz. trumpas paaiškinimas po antrašte: „META – rolė ir tikslas (system context)“.
- **Top prompt engineering praktikos** (OpenAI, IBM): aiškios instrukcijos pradžioje, separatoriai (###), pavyzdžiai, progresyvinis sudėtingumas. Modulyje 3 tai jau atspindi: šablonas su META/INPUT/…, žingsnis po žingsnio. Galima **dar labiau** pabrėžti: „Pirmas žingsnis – META (rolė)“, „Antras – INPUT (duomenys)“ su trumpu „kodėl ta tvarka“.

---

## 4. Prioritetai įgyvendinimui (rekomenduojama eilė)

1. **Greiti laimėjimai (mažas diff):**  
   - **#8** – scenarijų progresas įvado skaidrėje (4 kortelės su statusu).  
   - **#10** – konkretūs CTA „Pereiti prie Scenarijaus 2“ ir „Į Santrauką“.  
   - **#9** – hint kaip tooltip prie žingsnių (jau yra `hint` JSON).

2. **Vidutinė pastanga:**  
   - **#1** – Kontekstas/Duomenys/Apribojimai/Rezultatas kaip **tabs** arba **accordion** (viena skaidrė).  
   - **#6** – 6 blokų checklist/progress pagal užpildymą.  
   - **#7** – refleksijos promptas (viena kopijuojama kortelė) po scenarijaus arba prie santraukos.

3. **Didesni feature:**  
   - **#4** – stepper su atskirais laukais per bloką (vietoj vieno didelio textarea).  
   - **#2** – drag-and-drop „surink 6 blokus“ (Scenarijus 1).

---

## 5. Šaltiniai (santrauka)

- **Interaktyvus e-learning:** Articulate (interactive e-learning strategies), Elucidat (engaging elearning, State of Digital Learning 2025), Learning Everest (microlearning), CISIN (EdTech UX 2025).
- **Prompt engineering:** OpenAI API best practices, IBM 2026 Guide to Prompt Engineering, Learn Prompting, Google Vertex AI prompt design.
- **Konteksto inžinerija:** Anthropic (effective context engineering), Medium/Towards Data Science (context vs prompt engineering), field guide to context engineering.
- **UI/UX ir engagement:** NNGroup (interaction design), Articulate (compelling interactions), engagement frameworks (student–content, student–instructor).

---

**CHANGES:**  
- Sukurtas `docs/MODULIO_3_UI_UX_GERIAUSIOS_PRAKTIKOS.md` – tyrimo santrauka ir Top 10 praktikų su konkrečiais Modulio 3 pasiūlymais.

**CHECKS:**  
- Failas tik dokumentacija; build/test nevykdyti.

**RISKS:**  
- Kai kurie punktai (drag-and-drop, branching) reikalauja naujų komponentų ir turinio; pradėti nuo #8, #10, #9.

**NEXT:**  
- Prioritetu įgyvendinti #8 (scenarijų progresas), #10 (CTA), #9 (hint tooltip); tada #1 (tabs/accordion) ir #6 (checklist).  
- Jei reikia, DATA_AGENT gali papildyti `modules.json` (reflection prompt, CTA tekstai); UI_UX_AGENT/CODING_AGENT – komponentus pagal šį dokumentą.
