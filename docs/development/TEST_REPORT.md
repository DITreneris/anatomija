# Testų ataskaita (vartotojo klaidos)

> **Tikslas:** QA_AGENT priima vartotojo testų klaidas, fiksuoja čia ir įrašo sprendimus į `TODO.md`.

## Kaip naudoti

1. **Vartotojas** praneša testų klaidą (kas nutiko, kur, kokios lūžimo sąlygos).
2. **QA_AGENT** įrašo įrašą žemiau („Nauji įrašai“) ir, jei reikia veiksmo, prideda atitinkamą punktą į `TODO.md` (P1/P2/P3 arba skyrių „Iš vartotojo testų“).

## Įrašo formatas

Kiekvienam pranešimui:

- **Data** – kada užfiksavome
- **Aprašymas** – kas neveikia / kokia klaida (1–3 sakiniai)
- **Kontekstas** – puslapis, modulis, veiksmas (pvz. „Modulio 4 skaidrė 46, mygtukas Kopijuoti“)
- **Prioritetas** – P1 (kritinis) / P2 (vidutinis) / P3 (žemas)
- **Statusas** – `nauja` | `į TODO įrašyta` | `vykdoma` | `išspręsta`
- **Sprendimas / veiksmas** – trumpas aprašymas, ką reikia padaryti (arba nuoroda į TODO punktą)

---

## Nauji įrašai

*(Čia QA_AGENT prideda naujus vartotojo praneštus įrašus. Seni įrašai gali būti perkelti į „Archyvas“ arba ištrinti po išsprendimo.)*

| Data       | Aprašymas | Kontekstas | P | Statusas | Sprendimas / nuoroda į TODO |
|------------|-----------|------------|---|----------|-----------------------------|
| 2026-02-07 | Modulio 1: sąvokos ir terminai ne iki galo paaiškinti; „terminai ne visi žinomi ir situacijos“ neaiškios | Modulis 1, ~30 min vartotojo | P2 | išspręsta | DefinitionsSlide: contextIntro („Kas čia?“); Workflow intro – dvi situacijos (pokalbis vs darbas); turinio_pletra.md SOT atnaujintas. |
| 2026-02-07 | Moduliai 1 ir 3: vartotojas tikėjosi vesti tik tai, kas skliausteliuose, ne visą promptą; „tik pradžią duoda suvesti“ | Praktinės užduotys, prompt įvedimo laukas, Moduliai 1 ir 3 | P2 | išspręsta | PracticalTask: inputHint + default tekstas virš textarea „Įveskite visą promptą…“; Modulio 1 pirmoji užduotis – inputHint JSON. |
| 2026-02-07 | Testo rezultatų ekrane scroll – nesunku pražiopsoti, kad viršutinį atsakymą atsakė neteisingai | QuizPage, rezultatų rodinys po testo (Modulio 1/2) | P2 | į TODO įrašyta | Žr. TODO „Iš vartotojo testų“ #3 – CODING |
| 2026-02-07 | **Tomo patirtis: Custom GPT kūrimo procesas (Modulio 4, 4.1a2-viz)** – IA paini (vienas ilgas vizualas, nėra „tu esi čia“); kognityvinė apkrova didelė (abstraktūs žodžiai); vartotojo veiksmų beveik nėra; navigacija silpna; vizualas per „diagraminis“; nėra gerų/blogų pavyzdžių. Detalė žemiau. | Modulio 4, skaidrė Custom GPT kūrimo procesas, `custom_gpt_process.svg` | P1 | į TODO įrašyta | Žr. TODO „Iš vartotojo testų“ #4–#9; analizė žemiau |
| 2026-02-07 | **Vartotojo patirties apibendrinimas (16 m., mobilus):** 2 mod. – pasirinkus atsakymą ir nueinus toliau nepatikrinus, grįžus atsakymų/paaiškinimo nebematyti; 3 mod. – skaidres prascrolinamos be atliktos praktinės užduoties, nėra „padaryk dabar“ impulso. | QuizPage (2 mod.), ModuleView + PracticalTask (3 mod.) | P2 | išspręsta | Quiz: paaiškinimas rodomas visada, kai klausimas jau atsakytas (įsk. grįžus atgal). ModuleView: skaidrėse su practicalTask „Pirmyn“/„Baigti“ disabled kol užduotis neįvykdyta + pranešimas „Atlikite užduotį žemiau…“. CHANGELOG, TODO atnaujinti. |
| *(pavyzdys)* | Rezultatų ekrane rodoma NaN | QuizPage, modulis 5, <70% | P1 | išspręsta | TODO: QuizPage rezultatų skaičiavimas – patikrinti edge cases |
| 2026-02-09 | Modulio 4 skaidrė „Praktika: DI visata“ – „Nepavyko užkrauti skaidrės“; konsolė: `ReferenceError: useEffect is not defined` | ContentBlockSlide (ContentSlides.tsx), lokalus dev | P1 | išspręsta | ContentSlides.tsx: pridėtas trūkstamas `useEffect` importas (accordion būsena). CHANGELOG atnaujintas. |
| 2026-02-09 | **Vitest – visi 5 testų failai lūžta:** `TypeError: Cannot read properties of undefined (reading 'on')` ❯ src/test/setup.ts:64:1. Test Files 5 failed, Tests no tests. | Lokalus `npm run test:run`, Windows | P1 | išspręsta | setup.ts – process stub (globalThis, global, vi.stubGlobal). 2026-02-12: testų suite praeina (64 testai); pridėti sixBlockStructure, useSlideNavigation.fastTrack, a11y.smoke (axe-core). Jei vartotojo aplinkoje vis lūžta – tikrinti Node versiją ir `npm run test:run` iš projekto root. |
| 2026-02-11 | Build lūžta: ContentSlides.tsx:181 Expected ")" but found "{". Action-intro DALIS C – du vaikiniai elementai be wrapper. | npm run build, Vite/esbuild | P1 | išspręsta | Pridėtas React fragment wrapper; build ir lint OK. CHANGELOG atnaujintas. |

---

## Analizė (QA_AGENT) – vartotojo patirtis 2026-02-07

**Šaltinis:** Eglės atsiliepimai (pokalbis 2026-02-06); fokusas – Moduliai 1–3 ir testo UX.

| Tematika | Kas matoma | Išvada / rekomendacija |
|----------|------------|-------------------------|
| **Modulio 1 – „nesupranta“ / sąvokos** | Terminai ne visi žinomi, situacijos neaiškios; ~30 min vien modulyje. | **Turinys (CONTENT):** Modulyje 1 stiprinti sąvokų paaiškinimus, pridėti trumpą žodynėlį ar „Kas čia?“ blokus prie pirmų skaidrių; situacijas iliustruoti pavyzdžiais. |
| **Modulio 3 – „nesupranta“** | Ne tai, kad turinys nesuprantamas – **lūžis lūžta įvedimo modelio**: vartotojas tikėjosi vesti **tik skliausteliuose** nurodytas dalis, o ne visą promptą. Tas pats Modulyje 1. | **UX (CONTENT + CODING):** 1) Instrukcijoje aiškiai nurodyti: „Įveskite visą promptą“ arba „Įveskite tik žodžius į skliaustelius“. 2) Jei dizainas leidžia – atskiri įvedimo laukai vietoj vieno ilgo (pvz. laukas tik skliausteliams). |
| **Testas – rezultatas** | Testas aiškus, bet rezultatų ekrane scroll – viršutinį (neteisingą) atsakymą nesunku pražiopsoti. | **UI (CODING):** Rezultatų bloke užtikrinti, kad pirmas klausimas/atsakymas būtų matomas (scroll į view arba paryškinti klaidingus atsakymus), kad būtų aišku, kur klaida. |
| **Modulis 2** | „Antras modulis ok“ – jokių veiksmų. | — |

**Santrauka:** „3 modulio nesupranta“ ir „pirmame modulyje sąvokos ne iki galo paaiškintos“ atitinka **du skirtingus** pataisymus: (1) Modulis 1 – turinys/terminai; (2) Moduliai 1 ir 3 – praktinių užduočių įvedimo aiškumas (ką vesti ir kaip rodoma). Trečiasis punktas – testo rezultatų matomumas. Visi trys įrašyti TEST_REPORT ir TODO.

---

## Analizė (QA_AGENT) – Tomo patirtis: Custom GPT kūrimo procesas (2026-02-07)

**Kontekstas:** Modulio 4 skaidrė „Custom GPT kūrimo procesas“ (4.1a2-viz), vizualas `custom_gpt_process.svg`. Vartotojas Tomas: procesas rodomas kaip vienas ilgas vizualas, per statiška IA, per didelė kognityvinė apkrova, be aiškių veiksmų ir gerų/blogų pavyzdžių.

| # | Sritis | Kas blogai | Ką taisyti |
|---|--------|------------|------------|
| 1 | **IA (informacinė architektūra)** | Vienas ilgas vizualas, reikia scrollinti; nėra „tu esi čia“ (tik „skaidrė 6/35“); du ekranai atrodo kaip skirtingi pasauliai, nėra step focus. | Stepper UI: 1 žingsnis = 1 ekranas. Aktyvus – ryškus, praeiti – muted, ateinantys – disabled. Pvz. [Tikslas]→[Rolė]→[Prisijungimas]→[Konfigūracija]… |
| 2 | **Kognityvinė apkrova** | Daug spalvų, burbulų, rodyklių; punktyrinė „grįžtamojo ryšio“ rodyklė neaiški; tekstai abstraktūs („Konfigūracija“, „Papildomos funkcijos“). | Kiekvienas žingsnis: 1 sakinys → **ką DARAI**, ne „kas tai yra“. Pvz. „Čia tu aprašai, kaip GPT elgsis ir kam jis skirtas“ arba „Parašyk instrukcijas taip, lyg aiškintum naujam darbuotojui.“ |
| 3 | **Vartotojo veiksmai** | Tik skaito ir žiūri; nėra mini užduočių, checklist, mikro patvirtinimų. | Kiekviename žingsnyje: A) „Ką padaryti dabar“ (checklist), B) mini input (laukelis / pasirinkimas), C) vizualus progresas (✔️ žingsnis užbaigtas). |
| 4 | **Navigacija** | „Pirmyn“ per silpnas; „Atgal“ paslėptas; viršutinė nav (Žodynėlis, Apklausa) išblaško. | Mokymosi režime – uždara nav: tik „← Ankstesnis žingsnis“, „→ Kitas žingsnis“, „🧠 Pagalva / pavyzdys“. CTA: ne „Pirmyn“, o „Toliau: Konfigūracija“. |
| 5 | **Vizualinis stilius** | Burbulai + rodyklės = corporate flowchart; lėta, šalta. | Procesą į istoriją: 👤 Tu, 🤖 Tavo GPT, 🎯 Tikslas, 🧪 Testas, 🚀 Publikavimas. Mažiau spalvų, viena akcentinė „aktyviam žingsniui“. |
| 6 | **Prarasta galimybė** | Nėra gerų vs blogų pavyzdžių, realios GPT instrukcijos, dažnių klaidų. | Prie kiekvieno žingsnio: 🟢 Geras pavyzdys, 🔴 Blogas pavyzdys, ⚠️ 1 dažna klaida. |

**Tomo prioritetų sąrašas (be kompromisų):**

- **MUST:** Step-by-step UI (1 žingsnis = 1 ekranas); aiškus „ką daryti dabar“; mini užduotys + checkmark'ai; aiškesni CTA („Toliau: …“).
- **SHOULD:** Gyvi pavyzdžiai (good/bad); uždara mokymosi navigacija; paprastesnė, šiltesnė vizualinė kalba.
- **NICE:** Progreso santrauka („tavo GPT jau turi…“); greitas peršokimas tarp žingsnių; refleksijos ekranas pabaigoje.

---

## Archyvas

*(Išspręstos arba nebeaktualios klaidos galima perkelti čia su data ir trumpu „Kaip išspręsta“.)*

---

*Šaltinis: `docs/development/AGENT_ORCHESTRATOR.md` → QA_AGENT.*
