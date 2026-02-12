# LLM schemos rodyklių problemos – detali analizė

**Schema:** `public/llm_autoregressive_rytas_zalgiris.svg` (skaidrė 40.8)

---

## 1. Kas su rodyklėmis gerai (palikti)

- **Forward rodyklės** (Įvestis → LLM → Išvestis → Pasirinkta): aiškios, kraštas į kraštą, vienoda spalva (#7B8794) ir storis, logika teisinga.
- **Feedback path**: sklandūs kampai (Q), rankinis polygon, pradžios apskritimas – vizualiai tvarkinga.

---

## 2. Kas blogai su rodyklėmis – detaliai

### 2.1 Tarpžingsninė rodyklė: neaiški naujos įvesties sudėtis

**Problema:** Rodyklė eina **tik iš** bloko „Pasirinkta: čempionais“ **į** bloką „Įvestis: Rytas tapo čempionais“.

- Vizualiai rodyklė „neša“ tik **vieną** dalyką – pasirinktą tokeną „čempionais“.
- Nauja įvestis „Rytas tapo čempionais“ susidaro iš **dviejų** dalių: (1) buvusi įvestis „Rytas tapo“ ir (2) pasirinktas tokenas „čempionais“.
- Diagramoje **nebūna jokios rodyklės ar elemento**, kuris rodytų, kad buvusi įvestis „Rytas tapo“ pernešama į N+1. Todėl atrodo, kad nauja įvestis atsiranda tik iš „čempionais“.

**Pasekmė:** Skaitančiam gali atrodyti, kad „čempionais“ vienas sudaro visą „Rytas tapo čempionais“, nors logiškai tai **konkatenacija**: buvusi įvestis + pasirinktas tokenas.

---

### 2.2 Etiketė „Įvestis + „čempionais““ neattitinka rodyklės

**Problema:** Etiketė aprašo **rezultatą** (nauja įvestis = įvestis + čempionais), bet rodyklė **prasideda tik ties „Pasirinkta“** bloku.

- Rodyklės **ištaka** – tik „čempionais“.
- Tekste minimas „Įvestis“ (buvusi įvestis) diagramoje **neiš kur** neateina – nėra rodyklės iš Žingsnio N „Įvestis“ į Žingsnio N+1 „Įvestis“.
- Todėl etiketė skamba kaip „įvestis plius čempionais“, o vizualiai matome tik „čempionais → į naują įvestį“.

**Pasekmė:** Etiketė ir vizualus srautas nesutampa – skaitytojas gali manyti, kad rodyklė „daro“ visą naują įvestį, o ne tik prideda vieną tokeną prie jau egzistuojančios eilutės.

---

### 2.3 Punktyrinė linija – semantika

**Faktas:** Tarpžingsninė rodyklė nubrėžta **punktyrine** linija (SCHEME_AGENT: feedback = punktyrinė, accent).

- Projekte tai **sąmoningas** pasirinkimas: atskirti „pagrindinį srautą“ (solid) nuo „grįžtamojo ryšio“ (dashed).
- Autoregresijoje šis ryšys iš tiesų yra **tiesioginis ir būtinas**: ankstesnio žingsnio išvestis tiesiogiai tampa kitos įvesties dalimi.
- Daliai žiūrovų punktyrinė linija asocijuojasi su „papildomu“ ar „ne tokiu stipriu“ ryšiu, todėl gali atrodyti, kad ryšys „silpnesnis“ nei yra.

**Pasekmė:** Semantiškai projekto taisyklėms atitinka, bet aiškumo didinimui galima papildomai stiprinti **etiketės** ir **vizualaus konkatenacijos** aiškumą, o ne būtinai keisti linijos stilius.

---

## 3. Santrauka: ką pataisyti

| Nr | Problema | Tipas |
|----|----------|--------|
| 1 | Naujos įvesties sudėtis (buvusi įvestis + tokenas) vizualiai neparodyta – rodyklė tik iš „Pasirinkta“ | Vizualinė / semantinė |
| 2 | Etiketė „Įvestis + „čempionais““ neattitinka vienos rodyklės (rodyklė tik iš čempionais) | Etiketė |
| 3 | Punktyrinė linija gali būti interpretuojama kaip „silpnesnis“ ryšis, nors jis tiesioginis | Interpretacija |

---

## 4. Pasiūlymai pataisymams

### 4.1 Etiketė (lengvas pataisymas)

- **Variantas A:** Pakeisti į **„Pridėti prie įvesties: „čempionais““** – aiškiau, kad rodyklė rodo *veiksmą* (ką pridedame), o ne pilną naujos įvesties formulę.
- **Variantas B:** **„Pasirinkta → įvestis N+1“** arba **„Tokenas „čempionais“ eina į kitos eilutės įvestį“** – tiesiogiai aprašo, ką rodyklė daro.
- **Variantas C:** Palikti „Įvestis + „čempionais““, bet **po diagramos** (figcaption arba body) vienu sakiniu paaiškinti: „Žingsnyje N+1 įvestis = Žingsnio N įvestis + pasirinktas tokenas.“

Rekomenduojama **A** arba **B** – etiketė tada atitinka vienos rodyklės prasmę.

**Įgyvendinta (2026-02):** Etiketė pakeista į **„Pridėti prie įvesties: „čempionais““** (variantas A) – SVG `llm_autoregressive_rytas_zalgiris.svg`.

**Vartotojo įžvalga – vizualinis svoris (2026-02):** Forward rodyklės per sunkios (trikampiai kaip mygtukai, konkuruoja su LLM). Pataisyta: **plona linija 1.5px + maža rodyklės galva 8px**, spalva **#94a3b8** (švelnesnė už blokų kontūrą). Feedback: path nuleistas toliau nuo blokų (horizontalus segmentas y=196), mažesnis polygon (tip 204, bazė 212), 1.5px punktyras, mažesnis start circle (r=3.5), etiketė **„Pridedama prie naujos įvesties“** po horizontaliu segmentu. Schema – instrukcinė, ne dekoratyvinė.

### 4.2 Vizualus konkatenacijos aiškumas (sunkesnis)

Jei norima **vizualiai** parodyti, kad nauja įvestis = buvusi + tokenas:

- Pridėti **antrą rodyklę** iš Žingsnio N bloko „Įvestis“ („Rytas tapo“) į Žingsnio N+1 „Įvestis“, pvz. šviesesne ar punktyrine, su etikete „buvusi įvestis“, **arba**
- Prie N+1 „Įvestis“ bloko pridėti **trumpą tekstą** po etikete: „Rytas tapo“ + „čempionais“ (dvi eilutės arba su „+“), kad būtų aišku, kad tai konkatenacija.

Abu variantai didina diagramos „švarą“, todėl verta rinktis tik jei prioritetas – maksimalus aiškumas, o ne minimalus elementų skaičius.

### 4.3 Punktyrinė vs kieta linija

- **Palikti punktyrinę** – jei laikomės SCHEME_AGENT (feedback = dashed) ir norime vienodo stiliaus su kitomis diagramomis.
- **Keisti į kietą** – jei norime pabrėžti, kad šis ryšys yra tiesioginis ir privalomas (tada rekomenduotina vienodai pakeisti ir kitose „feedback“ diagramose, kad būtų nuoseklu).

---

## 5. Išvada

**Pagrindinė problema su rodyklėmis:** tarpžingsninė rodyklė ir jos etiketė neparodo ir nepaaiškina **konkatenacijos** (buvusi įvestis + pasirinktas tokenas). Vizualiai atrodo, kad tik „čempionais“ eina į naują įvestį, o etiketė kalba apie „Įvestis + čempionais“, todėl kilsta neaiškumų.

**Pirmas žingsnis:** pakeisti etiketę į veiksmą/rezultatą, atitinkantį vienos rodyklės (pvz. „Pridėti prie įvesties: „čempionais““ arba „Tokenas → įvestis N+1“). Tada, jei reikia dar didesnio aiškumo – pridėti vizualų konkatenacijos užuominą (antra rodyklė arba tekstas bloke).
