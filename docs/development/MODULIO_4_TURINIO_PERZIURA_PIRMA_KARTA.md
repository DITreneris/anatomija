# Modulio 4 turinio peržiūra: pirmą kartą atsidūrusiam vartotojui

> **Data:** 2026-02-12. **Tikslas:** Įvertinti, ar turinys būtų aiškus vartotojui, kuris pirmą kartą atsiduria Modulyje 4.  
> **2026-02-12:** Įgyvendinti siūlymai – action-intro heroSubText ir subtitle; 4.0 orientacinis blokas ir trumpesnis subtitle.

---

## 1. Skaidrė 1 (action-intro, id 38) – „Jau moki kurti promptus…“

**Kas gerai:**
- Hero aiškiai nurodo progresą („Jau moki kurti promptus“) ir žingsnį toliau („Dabar – kontekstas ir patikimumas“).
- CTA „Pamatyk, kas laukia – per 1 minutę!“ duoda konkretų veiksmą.
- Palyginimas (be šaltinių vs su šaltiniais) parodo modulio temą praktiškai.

**Kas gali būti neaišku pirmą kartą:**
- **„RAG, šaltiniai, haliucinacijos“** – trys sąvokos subtitle / heroSubText be paaiškinimo. Vartotojas dar nežino, ką tai reiškia; gali atrodyti „techniška“.
- **aboutText** pradeda nuo „Kai 6 blokai jau įprasti…“ – gerai tiems, kurie baigė M1–M3; jei kas atsidūrė tiesiai M4, kontekstas gali trūkti.
- **6 outcomes** vienoje skaidrėje – daug punktų; pirmą žvilgsnį gali perplūsti.

**Siūlymai (opcional):**
- ~~Subtitle arba heroSubText papildyti vienu sakinio~~ **✅ Įgyvendinta:** heroSubText dabar „Šiame modulyje išmoksite įtraukti šaltinius į promptus ir tikrinti atsakymus. RAG, haliucinacijos – kaip dirbti protingiau.“; subtitle „Šiame modulyje – šaltiniai, duomenys ir atsakymų tikrinimas“.
- Outcomes pirmoje skaidrėje rodyti 3–4, likusius – „ir dar: tokenai, projektas“ (sutrumpintai) – nekeista (galima vėliau).

---

## 2. Skaidrė 2 (4.0) – „DI Visata: kaip viskas susiję“

**Kas gerai:**
- Dantės vs DI visatos palyginimas vizualiai aiškus ir įdomus.
- Žemiau yra struktūra: „1️⃣ Trumpai“, „2️⃣ Daryk dabar“, kopijuojamas promptas, patikra, žodynėlis – vartotojas gali veikti.

**Kas gali būti neaišku pirmą kartą:**
- **Subtitle** iš karto meta 5 terminus: „DI → Mašininis mokymasis → Neuroniniai tinklai → Gilusis mokymasis → Generatyvinis DI“. Be paaiškinimo – per daug informacijos pirmame ekrane.
- **Pirmas įspūdis** – du dideli blokai su paveikslais ir teksto aprašymais. „Ką daryti?“ (1️⃣ Trumpai, 2️⃣ Daryk dabar) matosi tik scrollinus žemyn – vartotojas gali manyti, kad čia tik „skaityti“, o ne „daryti“.
- **Dantės analogija** – ne visiems iš karto aišku, kodėl tai susiję su konteksto inžinerija; trūksta vieno sakinio tipo „Pradedame nuo bendro vaizdo, kad vėliau lengviau suprastumėt RAG ir šaltinius.“

**Siūlymai (opcional):**
- ~~Viršuje pridėti orientacinį sakinį~~ **✅ Įgyvendinta:** pirmas section „Kodėl pradedame nuo šios skaidrės?“ su nurodytu tekstu (brand).
- ~~Subtitle sutrumpinti~~ **✅ Įgyvendinta:** subtitle dabar „DI – tai ne tik ChatGPT. Žemiau – kaip viskas susiję.“ Pilna hierarchija lieka žodynėlyje (collapsible).

---

## 3. Bendros išvados

| Skaidrė | Aiškumas pirmą kartą | Rizika |
|---------|------------------------|--------|
| Action-intro (38) | Geras hero ir CTA; sąvokos RAG/haliucinacijos dar nepaaiškintos | Vidutinė – galima pridėti vieną „apie ką modulis“ sakinį |
| DI Visata (39) | Vizualai geri; per daug terminų subtitle; „Ką daryti?“ reikia scrollinti | Vidutinė – orientacinis sakinys viršuje + lengvas subtitle sutrumpinimas |

**Rekomendacija:** Jei norima padaryti minimalius pakeitimus be didesnio turinio perrašymo: (1) action-intro – vienas sakinys „Šiame modulyje išmoksite…“; (2) 4.0 – vienas orientacinis sakinys viršuje ir (pasirinktinai) trumpesnis subtitle. Likę turinys gali likti kaip yra – žodynėlis ir „1️⃣ Trumpai“ jau padeda.
