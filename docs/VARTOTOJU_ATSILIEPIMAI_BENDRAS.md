# Vartotojų atsiliepimai – bendra analizė

> **Paskirtis:** Vienas šaltinis (bendri atsiliepimai) – gyvo testavimo ir vartotojų feedback analizė. Naudoti planuojant V2, B2B, formatų adaptaciją ir agentų darbus (CONTENT_AGENT, UI_UX_AGENT, QA_AGENT).
> **Versija:** Įtraukta V1 Testavimo feedback analizė prieš release 1.2 (2026-02-11).

---

## Šaltiniai

| Šaltinis | Data | Apimtis |
|----------|------|--------|
| **Gyvas testavimas** | 2025-05-02 | Demonstracija, stabilumas, bendri geri atsiliepimai; terminologijos pataisymai. Žr. `docs/GYVAS_TESTAVIMAS_2025-05-02.md`. |
| **Testų ataskaita (klaidos)** | 2026-02-07 – 2026-02-11 | Konkrečios klaidos, Moduliai 1–4 UX, Eglės ir Tomo patirtis, sprendimai. Žr. `docs/development/TEST_REPORT.md`. |
| **V1 Testavimo feedback analizė** | Prieš 1.2 (2026-02-11) | 4 testuotojai (54 m. teisininkė, 25 m. media planuotoja, 48 m. konsultantas, 56 m. vadovas); segmentai, horizontalios įžvalgos, strateginė išvada, V2 rekomendacijos. Žr. skyrius žemiau. |

---

# V1 Testavimo feedback analizė (prieš release 1.2)

## Testuotojų profilis

1. **Moteris, 54 m., teisininkė**
2. **Moteris, 25 m., media planuotoja**
3. **Vyras, 48 m., komunikacijos konsultantas**
4. **Vyras, 56 m., įmonės vadovas**

---

## 1. Pagrindiniai signalai pagal segmentus

### 54 m. teisininkė

**Raktažodžiai:** Struktūruota, aišku, informativu, „beveik ir pasimokiau tuo pačiu“, naudinga žaliems / pusžaliams.

**Išvada:** Aukštas aiškumo lygis, realus mokymosi efektas, tinka pradedančiai auditorijai, geras kognityvinis balansas (ne per sudėtinga).

---

### 25 m. media planuotoja

**Raktažodžiai:** Patiko, norėsiu pasigilinti, neturiu realaus pavyzdžio, jaunesnė auditorija tingi skaityti, siūlo video formatą.

**Išvada:** Vertė suvokiama; trūksta aiškaus pritaikymo (use-case); formatą reikia trumpinti / vizualizuoti; potencialas video-first versijai.

---

### 48 m. komunikacijos konsultantas

**Raktažodžiai:** Patinka skaityti, neturi pastabų.

**Išvada:** Tekstas įtraukiantis, tonas geras, emocinis palaikymas; nėra gilaus kritinio feedbacko; nepateikta aiški transformacijos indikacija.

---

### 56 m. įmonės vadovas

**Raktažodžiai:** Buvo žinoma, bet ir naujo, geri įspūdžiai, labai tvarkingai padaryta, dėstymas, praktika, testas.

**Išvada:** Struktūrinė validacija; vertina pilną mokymo ciklą; produktas suvokiamas kaip sisteminis; tinka B2B kontekstui.

---

## 2. Horizontalios įžvalgos

### Kas veikia

- Aiški struktūra
- Loginis dėstymas
- Praktikos integracija
- Testavimo elementas
- Profesionalus tonas
- Nėra atstūmimo reakcijų

### Kur silpniausia vieta

- Trūksta aiškaus „Kur pritaikyti?“ bloko
- Nėra instant-use-case jaunajai auditorijai
- Formatui trūksta trumpesnės versijos
- Nėra diferencijuoto lygio pozicionavimo

---

## 3. Segmentų žemėlapis

| Segmentas | Reakcijos tipas | Rizika | Galimybė |
|-----------|-----------------|--------|----------|
| 50+ profesionalai | Vertina struktūrą | Per daug teksto | B2B mokymai |
| 25–35 m. | Vertina greitį | Per ilga forma | Video versija |
| Patyrę konsultantai | Emocinis palaikymas | Nėra advanced lygio | Advanced modulis |
| Įmonių vadovai | Vertina sistemą | Reikia verslo use-case | Pardavimo argumentas |

---

## 4. Strateginė išvada

Produktas šiuo metu:

- Turi aiškų **Starter** lygio PMF
- Struktūriškai stiprus
- Suvokiamas kaip sisteminis
- Reikalauja formato adaptacijos jaunesnei auditorijai
- Turi potencialą B2B konvertuoti į „DI darbo metodiką“

---

## 5. Rekomenduojami veiksmai (V2)

1. Pridėti **„Kur tai pritaikyti?“** bloką po kiekvienu moduliu.
2. Sukurti **60–120 sek. micro video** versiją.
3. **Įvardinti lygį** (Starter).
4. Paruošti **Advanced** modulio planą.
5. Parengti **B2B pitch** versiją su struktūros akcentu.

---

## 6. Statusas (V1)

| Aspektas | Statusas |
|----------|----------|
| Turinio kokybė | ✔ Validuota |
| Struktūra | ✔ Validuota |
| Starter segmentas | ✔ Validuotas |
| Formatas jaunimui | ⚠ Tobulintinas |
| Advanced lygis | ⚠ Reikalingas |

---

---

## 7. Kiek V1.2 jau atitinka vartotojų atsiliepimus

### Kas jau padengta (1.2)

| V1 signalas / silpniausia vieta | Ką 1.2 padarė | Atitikmuo |
|---------------------------------|----------------|-----------|
| **Aiški struktūra, loginis dėstymas** | Struktūra palikta; 6 scenarijai M3, modulių aprašymai ≤120 simb., MVP (1–3 mod.) | ✔ Stiprinama |
| **Praktika + testas** | Remediation uždara kilpa („Grįžti į rezultatą“, „Pakartok 3 kl.“), diagnostinis quiz feedback, PracticalTask Redaguoti/Kopijuoti | ✔ Gerokai padengta |
| **Profesionalus tonas, nėra atstūmimo** | Action-intro hook („Problema – tavo promptas“), CTA „30 s“, Lucide ikonos, emerald M3 | ✔ Išlaikyta |
| **Jaunesnė auditorija / formatas** | 30 s CTA, trumpesnis hero; mobile UI (M2, M3 touch, overflow); **nėra** dar video ar „Kur pritaikyti?“ | ⚠ Dalinai (UX geresnė, turinio formato ne) |
| **B2B / vadovai vertina sistemą** | MVP leidžia siųsti „tik 3 modulius“; pilnas ciklas (moduliai → testas → rezultatai → remediation); **nėra** dar B2B pitch ar „Starter“ žymės | ⚠ Paruošta, bet be pozicionavimo |
| **Matavimas / outcome** | Vienas KPI + event tracking (`learningEvents.ts`), JSON Schema + CI, 5 min release QA gate | ✔ Techniškai padengta (analizės MUST) |

### Kas liko nepadengta (V1 atsiliepimai)

- **„Kur tai pritaikyti?“** – blokas po kiekvienu moduliu (V2 rekomendacija #1) – **nėra**.
- **60–120 sek. micro video** – (V2 #2) – **nėra**.
- **Įvardinti lygį (Starter)** – (V2 #3) – **nėra** (nėra UI žymės „Starter lygis“).
- **Advanced modulio planas** – (V2 #4) – **nėra** dokumentuoto plano.
- **B2B pitch versija** – (V2 #5) – **nėra**.
- **Instant use-case jaunajai auditorijai** – susiję su „Kur pritaikyti?“ ir video – **nėra**.
- **Diferencijuotas lygis** – tik vienas lygis (Starter) – **nėra** advanced.

---

## 8. Ką tobulinti toliau (prioritetai)

- **Turinys / pritaikymas:** „Kur pritaikyti?“ blokas po moduliu – tiesiogiai atsako į 25 m. ir vadovų „neturiu realaus pavyzdžio“ / „reikia verslo use-case“. Pirmas turinio prioritetas po 1.2.
- **Formatas jaunimui:** Trumpesnė versija arba video – didelė pastanga; pradėti nuo vieno „30 s“ ar „1 min“ takeaway skaidrės arba nuorodos į video (jei bus).
- **Pozicionavimas:** Įvardinti „Starter“ (HomePage arba Modulių puslapyje) – mažas pakeitimas, didelė aiškumo nauda.
- **B2B:** Pitch vienas puslapis arba PDF – naudinga įmonių vadovams; galima po to, kai „Kur pritaikyti?“ jau yra.

---

## 9. Must–Should–Want (vystant sistemą)

Sujungta su `docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md` ir V1 atsiliepimais.

### MUST (kritinis – jei nedarai, skausmas artimiausiai)

| # | Punktas | Šaltinis | 1.2 būklė |
|---|---------|----------|-----------|
| M1 | Turinio kontraktas (JSON Schema + CI) | Analizės verdiktas | ✔ Įgyvendinta |
| M2 | Vienas KPI + event tracking | Analizės verdiktas | ✔ Įgyvendinta |
| M3 | Remediation uždara kilpa | Analizės verdiktas | ✔ Įgyvendinta |
| M4 | Content QA gate prieš release | Analizės verdiktas | ✔ Įgyvendinta (5 min) |
| **M5** | **„Kur pritaikyti?“ po moduliu (bent 1–2 mod.)** | **V1 atsiliepimai** | ❌ Dar ne |

*M5 – pirmas naujas MUST iš vartotojų: be „kur pritaikyti?“ sunku konvertuoti į „naudosiu“.*

### SHOULD (stipriai pakels kokybę)

| # | Punktas | Šaltinis |
|---|---------|----------|
| S1 | 6 blokų checklist: structure check (ne tik keyword) | Analizės verdiktas |
| S2 | A11y automatika (axe-core smoke) | Analizės verdiktas |
| S3 | Design system įtvirtinimas (Card, Banner, CTA) | Analizės verdiktas |
| S4 | Optional → „Fast track“ toggle | Analizės verdiktas |
| **S5** | **Įvardinti lygį (Starter)** | **V1 atsiliepimai** |
| **S6** | **B2B pitch (1 puslapis / PDF)** | **V1 atsiliepimai** |

### WANT (nice-to-have)

| # | Punktas |
|---|---------|
| W1 | 60–120 sek. micro video (1–2 moduliams arba „kas yra 6 blokai“) |
| W2 | Advanced modulio planas (dokumentas, ne dar įgyvendinimas) |
| W3 | Spaced retry, remediation mini-proof (Analizės verdiktas) |

---

## 10. Rekomenduojama seka po 1.2

1. **CONTENT_AGENT + DATA:** Pridėti „Kur tai pritaikyti?“ bloką – pradėti nuo Modulio 1 ir 3 (SOT → `modules.json` → skaidrė/summary tipas). **MUST (M5).**
2. **CONTENT_AGENT + UI:** Įvardinti „Starter lygis“ – HomePage arba ModulesPage (vienas sakinys arba badge). **SHOULD (S5).**
3. **QA_AGENT / CONTENT:** Paruošti B2B pitch (1 puslapis: struktūra, praktika, testas, „DI darbo metodika“). **SHOULD (S6).**
4. **SHOULD techniniai:** 6 blokų structure check (S1), Fast track (S4), a11y smoke (S2) – pagal ANALIZES_VERDIKTAS seką.
5. **WANT:** Advanced modulio planas (doc); video – kai bus resursų.

---

## Nuorodos į agentus ir release

- **Klaidos ir sprendimai:** `docs/development/TEST_REPORT.md` (QA_AGENT priima įrašus, TODO.md veiksmai).
- **Agentų router ir SOT:** `.cursor/rules/agent-orchestrator.mdc`, `docs/development/AGENT_ORCHESTRATOR.md`.
- **Release QA:** `docs/development/RELEASE_QA_CHECKLIST.md`.
- **Analizės verdiktas (MUST/SHOULD):** `docs/development/ANALIZES_VERDIKTAS_MUST_SHOULD_WANT.md`.
- **Roadmap (user feedback):** `ROADMAP.md` – skyrius „User feedback“.
- **Roadmap versija 2.0:** `ROADMAP.md` – skyrius „Plėtros planas – versija 2.0 (Must–Should–Want)“: M5, S1–S6, W1–W3.

*Paskutinis atnaujinimas: 2026-02-11 (V1 analizė; 1.2 atitikmuo; v2.0 planas perkeltas į ROADMAP).*
