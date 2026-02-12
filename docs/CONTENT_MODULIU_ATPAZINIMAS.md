# Turinio agentas: kur kalbama apie kurį modulį

> **Paskirtis:** Nuosekliai atpažinti, kada tekste kalbama apie **Modulį 1 … 6** (ir planuojamus 7–15), ir išvengti painiavos tarp skaidrių numerių ir modulių.

---

## 1. Greita lentelė – Kas yra kas

| Simbolis / frazė | Reikšmė |
|------------------|--------|
| **Modulis 1** | „6 Blokų Sistema“ (MOKYMASIS) – teorija, 19 skaidrių |
| **Modulis 2** | „Žinių Patikrinimas“ (TESTAS) – 12 klausimų |
| **Modulis 3** | „Praktinis Pritaikymas“ (PRAKTIKA) – 6 scenarijai |
| **Modulis 4** | Pažangusis lygis – teorija (RAG, Deep research, tokenai, manipuliacijos, žinių patikrinimas) |
| **Modulis 5** | Pažangusis lygis – testas (žinių patikrinimas) |
| **Modulis 6** | Pažangusis lygis – praktika (vienas projektas) |
| **Skaidrė 1 … 19** (be modulio pavadinimo) | **Visada Modulio 1** skaidrės, jei kontekstas `turinio_pletra.md` |
| **4.1 … 4.7** (skaidrės / temos) | **Modulio 4** skaidrės/temos (įvadas, RAG, Deep research, … santrauka) |
| **„3 moduliai“** | Moduliai 1 + 2 + 3 (bazinė dalis) |
| **„Moduliai 4–6“** | Pažangusis blokas (teorija + testas + projektas) |
| **„Moduliai 7–15“** | Trys vartotojų keliai (Duomenų analizė 7–9, Agentų inžinerija 10–12, Turinio inžinerija 13–15); žr. §6 |

---

## 2. Kur kuriame faile kalbama apie kurį modulį

### 2.1 `turinio_pletra.md`

| Vieta / frazė | Apie kurį modulį |
|----------------|-------------------|
| Skyrius **„Nauja 3 Modulių Logika“**, medis su MODULIS 1 / MODULIS 2 / MODULIS 3 | 1, 2, 3 (struktūra) |
| **Skaidrė 1.5, 2, 3, … 19** (visi „### Skaidrė …“ iki skyriaus „Modulis 2“) | Modulio 1 skaidrės |
| **„## 📚 Modulis 1: 6 Blokų Sistema“** ir viskas iki „## 📝 Modulis 2“ | Modulis 1 |
| **„Modulio Santrauka“** (skaidrė 19) | Modulio 1 santrauka |
| **„pereiti prie Modulio 2“**, **„Modulio 2: Žinių Patikrinimas“** | Modulis 2 |
| **„## 📝 Modulis 2: Žinių Patikrinimas“** iki **„## 💼 Modulis 3“** | Modulis 2 |
| **„Pereikite prie Modulio 3“**, **„Į Modulį 1“**, **„Pradėti Modulį 3“** | Modulis 1 arba 3 (iš konteksto) |
| **„## 💼 Modulis 3: Praktinis Pritaikymas“** iki „Progreso Logika“ | Modulis 3 |
| **„3 Modulio Patobulinimai“**, **„3 modulio instrukcijoms“** | Modulio 3 |
| **„Modulių Atrakinimas“** (Modulis 1→2→3, Sertifikatas, Modulis 4→5→6) | Visi 1–6 |
| **„Moduliai 4–6 (Pažangusis lygis)“**, nuoroda į `turinio_pletra_moduliai_4_5_6.md` | Moduliai 4, 5, 6 |
| **„Skaidrės 1–3“**, **„Skaidrės 4–11“** (Bloom) | Modulio 1 skaidrės |
| **„skaidrės 8–16“**, **„skaidrės 3–6“** (testo rezultatų CTA) | Modulio 1 skaidrės |

### 2.2 `docs/turinio_pletra_moduliai_4_5_6.md`

| Vieta / frazė | Apie kurį modulį |
|----------------|-------------------|
| Pavadinimas **„Moduliai 4, 5, 6“** | 4, 5, 6 |
| **„Moduliai 1–3“** vs **„Moduliai 4–6“** (lentelė) | 1–3 ir 4–6 |
| **„Modulius 1–3“**, **„moduliais 1–3“** | 1, 2, 3 |
| **„## 2. Teorinė dalis (Modulis 4)“** | Modulis 4 |
| **„Modulis 4“**, **„4.1“ … „4.7“** lentelėje (Skaidrė / tema) | Modulio 4 skaidrės/temos |
| **„4.1-system-master“**, **„System prompt vs Master prompt“** | Modulio 4 skaidrė (takoskyra tarp System ir Master prompt) |
| **„santraukos skaidrėje (4.7)“** | Modulio 4 skaidrė 7 |
| **„## 3. Testas (Modulis 5)“** | Modulis 5 |
| **„Modulio 2“** (formatas toks pat kaip) | Modulis 2 |
| **„peržiūrėti Modulį 4“**, **„Modulis 6“** (slenksčiai) | 4, 6 |
| **„## 4. Praktinė dalis (Modulis 6)“** | Modulis 6 |
| **„Projekto koncepcija (Modulis 6)“**, **„Scenarijus – vienas pavyzdys (Modulis 6)“**, **„Integracija su Moduliu 3 (Modulis 6 ↔ Modulis 3)“** | Modulio 6 turinys (projektas). Numeracija 4.1/4.2/4.3 pašalinta, kad 4.1–4.7 būtų tik Modulio 4 skaidrės. |
| **„Modulyje 3“**, **„Modulio 3“** (4.3 Integracija) | Modulis 3 |
| **„Moduliai 4 → 5 → 6“** | 4, 5, 6 |
| **„Modulio 4 santraukoje (4.7)“** | Modulio 4 skaidrė 7 |
| **„Modulio 1“**, **„Modulio 1 santrauką“** | Modulis 1 |

---

## 3. Painiavos išvengta: „4.1“–„4.7“ tik Moduliui 4

**Buvo:** Faile `turinio_pletra_moduliai_4_5_6.md` **4.x** vartota dvejopai: Modulio 4 skaidrėms (4.1–4.7) ir skyriaus „4. Praktinė dalis“ poskyriams (4.1 Projekto koncepcija, 4.2 Scenarijus, 4.3 Integracija), todėl neaišku, ar „4.1“ – Modulio 4, ar Modulio 6 turinys.

**Pataisyta:** Skyriaus „4. Praktinė dalis (Modulis 6)“ poskyriai pervadinti **be numerių**, su aiškiu modulio žymeniu:
- **### Projekto koncepcija (Modulis 6)**
- **### Scenarijus – vienas pavyzdys (Modulis 6)**
- **### Integracija su Moduliu 3 (Modulis 6 ↔ Modulis 3)**

Dėl to **4.1–4.7** faile `turinio_pletra_moduliai_4_5_6.md` visada reiškia **tik Modulio 4** skaidres/temas.

---

## 4. Kitos turinio nuoseklumo pastabos

- **„Modulio 1 santrauka“** – visada Modulio 1 paskutinė skaidrė (19).  
- **„Modulio 4 santrauka“** – Modulio 4 paskutinė skaidrė/tema (4.7).  
- **„testas“** be modulio: dažniausiai Modulis 2 (bazinis) arba Modulis 5 (pažangus) – iš konteksto (ar kalbama apie 1–3, ar apie 4–6).  
- **„praktika“** / **„scenarijai“**: Modulis 3 = 6 scenarijai; Modulis 6 = 1 projektas.  
- **„6 blokų“** – tai prompto blokai (META, INPUT, …), ne modulių numeriai.

---

## 5. Santrauka atpažinimui

- **Modulis 1** = teorija, 6 blokai, workflow, technikos, 19 skaidrių.  
- **Modulis 2** = testas po Modulio 1, 12 klausimų.  
- **Modulis 3** = praktika, 6 scenarijai.  
- **Modulis 4** = pažangusis teorija (RAG, Deep research, tokenai, manipuliacijos, patikrinimas); skaidrės **4.1–4.7**.  
- **Modulis 5** = pažangusis testas.  
- **Modulis 6** = vienas projektas (capstone).  
- **Skaidrė X** be modulio pavadinimo pagrindiniame faile = **Modulio 1**.  
- **4.1–4.7** modulių 4–6 faile = **Modulio 4** skaidrės. Skyriaus „4. Praktinė dalis (Modulis 6)“ poskyriai pavadinti be numerių (Projekto koncepcija, Scenarijus, Integracija su Moduliu 3), kad 4.x būtų rezervuota tik Moduliui 4.

---

## 6. Moduliai 7–15 (vartotojų keliai)

> **Būklė:** Planuojama plėtra; turinio SOT dar nėra. Ši lentelė – atpažinimui, kai kalbama apie modulius 7–15. Detalios taisyklės (skaidrės X.Y, failų vietos) bus papildytos, kai bus fiksuoti turinio dokumentai. Žr. ROADMAP.md § „Viso turinio plėtra: vartotojų keliai ir moduliai 7–15“.

| Simbolis / frazė | Reikšmė |
|------------------|--------|
| **Modulis 7** | Duomenų analizė (kelias 1) – teorija: DI duomenų analizei, SQL/Python bendram supratimui, promptai. |
| **Modulis 8** | Duomenų analizė – testas. |
| **Modulis 9** | Duomenų analizė – praktika; **finalinis integruotas projektas** (kelio capstone). |
| **Moduliai 7–9** | Vartotojų kelias „Duomenų analizė“ (auditorija: analitikai). Hybrid: privalomas vienas kelias; kiti atrakinami po completion. |
| **Modulis 10** | Agentų inžinerija (kelias 2) – teorija: įrankiai, promptai, sistemos. Įėjimui: inžinieriams būtini Moduliai 4–6 (Konteksto inžinerija). |
| **Modulis 11** | Agentų inžinerija – testas. |
| **Modulis 12** | Agentų inžinerija – praktika; **finalinis integruotas projektas** (kelio capstone). |
| **Moduliai 10–12** | Vartotojų kelias „Agentų inžinerija“ (auditorija: softo inžinieriai). |
| **Modulis 13** | Turinio inžinerija (kelias 3) – teorija: įrankiai, principai, promptai. |
| **Modulis 14** | Turinio inžinerija – testas. |
| **Modulis 15** | Turinio inžinerija – praktika (projektas: image, video, muzika); **finalinis integruotas projektas** (kelio capstone). |
| **Moduliai 13–15** | Vartotojų kelias „Turinio inžinerija“ (auditorija: rinkodaros ir komunikacijos specialistai). |

**SOT vieta:** vienas failas per kelią – `docs/turinio_pletra_moduliai_7_8_9.md`, `docs/turinio_pletra_moduliai_10_11_12.md`, `docs/turinio_pletra_moduliai_13_14_15.md`. Skaidrių numeracija (7.1, 10.2 ir pan.) – tik atitinkamam moduliui. Žr. ROADMAP.md § „Viso turinio plėtra“ (nuspręsta: hybrid, įėjimas 1–3, 9/12/15 = finalinis projektas).
