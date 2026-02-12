# Modulio 4 skaidrių eilė (oficiali)

> **Paskirtis:** Viena vieta – rekomenduojama Modulio 4 skaidrių/temų seka su trumpu pateisinimu kiekvienam žingsniui. SOT: `docs/turinio_pletra_moduliai_4_5_6.md`. Atpažinimas: 4.1–4.7 = tik Modulio 4 (`docs/CONTENT_MODULIU_ATPAZINIMAS.md`).  
> **Paskutinė atnaujinta:** 2026-02-12 (Modulio 4 pirmoji skaidrė – action-intro id 38; 4.0 perkelta į eilę 2).

---

## Pilna seka ir motyvacija

| Eilė | ID | Skaidrė / tema | Kodėl čia? |
|------|-----|----------------|------------|
| 0 | 38 | Modulio 4 įvadas / itraukimas (action-intro) | Pirmoji skaidrė – itraukimas į mokymus, hook, CTA; panaši į Modulio 1 pirmąją. |
| 1 | 4.0 | DI Visata: kaip viskas susiję | Kontekstas (AI→DI hierarchija) ir atsakomybė; primena Modulio 1 „kas yra DI“. |
| 2 | 4.1a | Konteksto inžinerija: kaip „valdyti“ DI | Apibrėžiama pagrindinė modulio sąvoka; paruošia visas tolesnes temas (kontekstas = valdymo svirtis). |
| 3 | 4.1a2 | 4 dedamosios | Konceptualus rėmas (inžinerija, kalba, psichologija, komunikacija) – suderinama su oficialiais šaltiniais; padeda suprasti, „kur“ dirba promptų inžinierius. |
| 3a | 4.1-system-master | System prompt vs Master prompt | Tiesiog po 4 dedamųjų – rolė ir kontekstas; kaip DI „žino“, kas tu esi. |
| 3b | 4.1b2 | Proceso prompt ir workflow sudarymas | Tiesiog po System vs Master – proceso promptai, šablonai. |
| 4 | 4.1a2-viz | Custom GPT kūrimo procesas | Vizualizuoja inžinerijos dedamąją (8 žingsnių schema); optional giliam įsigilinimui. |
| 5 | 4.1a4 | 5 principai, kurie realiai pagerina bet kurį promptą | Patarimai inžinieriui – outcome-driven; 5 principai veiksmo forma; „Kodėl tai svarbu?“; vertinimo promptas. Pirmiau nei RL/RLHF – praktika prieš teoriją. |
| 7 | 4.1a3 | Kas yra paskatinamasis mokymas (RL/RLHF)? | Po patarimų – paaiškina, kodėl DI „stengiasi įtikti“; paruošia Quality ir žinių patikrinimo temas. |
| 8 | 4.1a5 | Parametrų laukas | „Žemėlapis“ – kur dirba inžinierius (6 parametrų grupės); susieja Modulį 1 su 4. |
| 9 | 4.1a5-style | Stilių naudojimas promptuose | Kokybiniai parametrai praktiškai; optional/giluminiam. |
| 10 | 4.1a5-practice | Praktinės užduotys (po Stilių) | Įtvirtina stilius; optional. |
| 11 | 4.1 | Įvadas į konteksto inžineriją | Kas bus modulyje (RAG, Deep research, tokenai, manipuliacijos, patikrinimas); nuoroda į 6 blokus. |
| 12 | 4.1-tools | Pagrindiniai įrankiai | Paruošia workflow – kokius įrankius naudoti (ChatGPT, Claude, Gemini, Gamma ir kt.). |
| 13 | 4.1-prompts | Metodinis vs Agentinis promptas | Skiria „pateikti metodiką“ nuo „atlikti workflow“ – paruošia RAG/Deep research (agentinis = paieška, šaltiniai). |
| 14 | 4.1b | Darbas su DI: struktūruotas procesas | 8 žingsnių workflow – kaip sistemingai dirbti su DI; pagrindas visiems tolesniems metodams. |
| 15 | 4.1c | Schema 3: LLM su RAG ir įrankiais | Konceptualus rėmas: Retrieval + Generation; tiesiogiai paruošia RAG (4.2). |
| 16 | 4.1d | Schema 4: Multi-Modal LLM workflow | Memory, Retrieval – konceptualiai artimi RAG; paruošia 4.2. |
| 19 | 4.2 | RAG (Retrieval-Augmented Generation) | Pagrindinė tema: šaltiniai + DI; kaip nurodyti šaltinius prompte. Po schemų (4.1c, 4.1d) – aišku, „iš kur“ atsiranda RAG. |
| 20 | 4.2-open | Atviros duomenų bazės ir RAG | Oficialūs šaltiniai (Eurostat, data.gov); praktika RAG. |
| 21 | 4.2a | Darbas su RAG: memory, išoriniai įrankiai | Memory, NoteLM, Trello; duomenų paruošimas su nuorodomis. |
| 22 | 4.2a-academic | DI įrankiai studentams ir mokslui | Optional – akademiniam kontekstui (Perplexity, PaperGuide, Scite, Elicit). |
| 23 | 4.2b | Basic duomenų paruošimas RAG patikimumui | Išvalymas, santraukos, metaduomenys – kad RAG būtų patikimesnis. |
| 24 | 4.2c | 100% veikiančios strategijos | CoT, žingsnis po žingsnio, palyginimai – bendros geriausios praktikos; tiltelis į Deep research. |
| 24a | 4.2-check | Savitikra: RAG | Formatinis grįžtamasis ryšys – 2–3 klausimai po RAG temos; dalyvis patikrina supratimą. Pedagoginė analizė §2.3. |
| 25 | 4.3 | Deep research (Gilusis tyrimas) | Multi-step tyrimas su DI; naudoja RAG; CoT/ToT. Logiška po RAG – „RAG + kelios pakopos“. |
| 26 | 4.3a | Praktinės užduotys: promptų sekos (sequence, CoT, ToT) | Kaip prašyti DI sugeneruoti promptų sekas/grandines/medžius. |
| 26b | 4.3b | Bridžinė praktika: RAG + Deep research | Jungiamoji 5–10 min užduotis – sujungti RAG ir Deep research su šaltiniais vienoje praktikoje; tiltelis prieš tokenus. |
| 26c | 4.3-check | Savitikra: Deep research | Formatinis grįžtamasis ryšys – 2 klausimai po Deep research temos. Pedagoginė analizė §2.3. |
| 27 | 4.4 | Tokenų ekonomika | Kas yra tokenai, konteksto langas, max_tokens; kaip taupyti ir išlaikyti kokybę. Po RAG/Deep research – dabar aišku, *kiek* konteksto „telpa“. |
| 27a | 4.4-check | Savitikra: Tokenai | Formatinis grįžtamasis ryšys – 2 klausimai po tokenų temos. Pedagoginė analizė §2.3. |
| 28 | 4.5 | Promptų manipuliacijos | Šališkumas, leading questions, neutralūs promptai; ko vengti. Prieš patikrinimą – pirma „neblogai formuluoti“, paskui „tikrinti“. |
| 28b | 4.5-safety | Saugumas: prompt injection ir jailbreak | MUST M4: takoskyra nuo verslo manipuliacijos; OWASP #1; gynybos principai (system vs user, sanitizacija, ribos). |
| 29 | 4.6 | Žinių patikrinimas ir haliucinacijos | Haliucinacijos, kaip mažinti, anti-haliucinacinis šablonas, šaltiniai, cross-check; Quality blokas. Natūralus pabaiga – patikimumas ir etika. |
| 30 | 4.7 | Modulio 4 santrauka | Apžvalga, ryšiai tarp temų, „3 klausimai sau“, CTA į Modulį 5 (testas). |

---

## Trumpos taisyklės

- **38 (action-intro) visada pirmas** – itraukimas, hook, CTA; po jo **4.0** – DI kontekstas.
- **4.1a2 (4 dedamosios) → System vs Master → Proceso prompt** – sąvokos tiesiog po 4 dedamųjų; po jų Skyriaus riba, tada Metodinis vs Agentinis, Custom GPT.
- **4.1a → 4.1a5 → 4.1** – konceptualus pagrindas ir parametrų laukas, tada įvadas „kas bus modulyje“.
- **4.1b po 4.1** – struktūruotas procesas prieš schemas (4.1c, 4.1d).
- **4.1c, 4.1d prieš 4.2** – RAG konceptualiai paruošiamas (Retrieval, Tool Use).
- **4.2 → 4.3** – RAG pirmiausia, Deep research kaip multi-step RAG.
- **4.2-check, 4.3-check, 4.4-check** – savitikros (warm-up-quiz) po atitinkamų temų; formatinis grįžtamasis ryšys.
- **4.4 po 4.3** – tokenai po „ką įtraukiame“ (RAG, Deep research); dabar „kiek telpa“.
- **4.5 → 4.6** – manipuliacijos (ko vengti), paskui patikrinimas (kaip tikrinti).
- **4.7 paskutinis** – santrauka ir perėjimas į Modulį 5.
- **4.1-workflow-ex (8 skaidrių prezentacija)** – perkelta į Modulį 5 kaip pirmoji skaidrė (id 47); čia nebeskaičiuojama.
- **Praktika: DI visata (4.0-praktika, id 39.5)** – `modules.json` eilėje dabar **prieš Skyriaus ribą** (40.5 „Pirma dalis baigta“), t. y. po „Darbas su DI: struktūruotas procesas“ (43).

---

## Nuorodos

- Turinio SOT: `docs/turinio_pletra_moduliai_4_5_6.md` (skyrius 2, 2.1 lentelė ir 2.2 temų detalė).
- Modulių atpažinimas: `docs/CONTENT_MODULIU_ATPAZINIMAS.md`.
- Sinchronizacija su UI: `src/data/modules.json` – skaidrių eilė turi atitikti šią seką.
