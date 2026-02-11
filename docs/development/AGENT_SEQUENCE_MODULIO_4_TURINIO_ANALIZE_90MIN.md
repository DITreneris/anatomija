# Agentų seka: Modulio 4 turinio analizė (90 min, skill transfer)

> **Paskirtis:** Nuosekli agentų seka, kad būtų atlikta Modulio 4 turinio analizė ir pateiktas aiškus verdiktas: kas per daug, ko trūksta, ar realiai telpa į 90 min, kaip perdaryti į V2 su veikiančiu rezultatu. Fokusas – **skill transfer**, ne teorija.

---

## 1. Užduotis (TASK)

Išanalizuoti **Modulio 4** turinį (90 min, 2×45) ir pateikti aiškų verdiktą:

- kas **per daug**,
- **ko trūksta**,
- ar **realiai telpa į laiką**,
- **kaip perdaryti į V2**, kad dalyvis išeitų su **veikiančiu rezultatu**.

**Kontekstas:**

| Parametras | Reikšmė |
|------------|--------|
| **Modulis** | 4 (Konteksto inžinerija) |
| **Trukmė** | 90 min (2 dalys po 45 min) |
| **Auditorija** | non-tech / mixed |
| **Tikslas po modulio** | Dalyvis moka atlikti **1 konkretų veiksmą** (įvardinti analizėje) |

**Turinio šaltinis:** Modulio 4 turinys iš SOT (žr. §2).

---

## 2. Įvesties šaltiniai (SOURCE OF TRUTH)

| Šaltinis | Paskirtis |
|----------|-----------|
| **`docs/turinio_pletra_moduliai_4_5_6.md`** | Turinio SOT: skyrius „2. Teorinė dalis (Modulis 4)“, skaidrių/temų planas (2.1 lentelė), temų detalė (2.2), žodynėlis (2.1a). Naudoti modulių atpažinimui: **4.1–4.7 = tik Modulio 4** (`docs/CONTENT_MODULIU_ATPAZINIMAS.md`). |
| **`docs/MODULIO_4_SKAIDRIU_EILES.md`** | Oficiali skaidrių eilė (~30 pozicijų), „Kodėl čia?“ kiekvienai skaidrei; naudinga vertinti, kur viršijami laiko limitai. |
| **`src/data/modules.json`** (optional) | Faktinė skaidrių skaičius ir tipai Modulyje 4 – patikrinti apimtį (kiek skaidrių realiai renderinama). |

Analizę atlikti pagal **įvesties šaltinius**, ne „įklijuotą“ atskirą tekstą – jei vartotojas įklijuoja modulio turinį, jis gali būti naudojamas kaip papildomas kontekstas arba patikrinimui.

---

## 3. Agentų seka

Užduotis **ne mišri įgyvendinimo prasme** (nereikalauja keisti JSON ar UI vienu metu) – reikia **analizės dokumento**. Todėl pagrindinis atsakingas – **CONTENT_AGENT** (mokymų turinio kūrėjas ir fasilitatorius); sekantys agentai – **patikra** ir **išvesties išsaugojimas**.

| Žingsnis | Agentas | Ką daro |
|----------|---------|---------|
| **1** | **CONTENT_AGENT** | Veikia kaip **top mokymų turinio kūrėjas ir fasilitatorius**, orientuotas į **skill transfer**. Skaito SOT (`turinio_pletra_moduliai_4_5_6.md` – Modulio 4 skyrių) ir `MODULIO_4_SKAIDRIU_EILES.md`. Atlieka pilną analizę ir pateikia išvestį **tiksliai pagal §4 formatą** (Verdiktas, Laiko realistiškumas, Per daug/trūksta, Praktikos kokybė, V2 pasiūlymas). Laikosi **QUALITY** ir **TONE** (§5, §6). **Nekeičia** kodo ar JSON – tik analizuoja ir rekomenduoja. |
| **2** | **CODE_REVIEW_AGENT** (rekomenduojama) | Greita patikra: ar analizė neprieštarauja SOT (`turinio_pletra_moduliai_4_5_6.md`, `CONTENT_MODULIU_ATPAZINIMAS.md`); ar V2 pasiūlymas ir „ką pjauti“ atitinka realią skaidrių/temų struktūrą; ar rekomendacijos įgyvendinamos (pvz. vienas core pratimas, definition of done). **Jokių pakeitimų** – tik apžvalga ir, jei reikia, 1–3 pataisymų pastabos CONTENT_AGENT išvesties. |
| **3** | **QA_AGENT** (optional) | Išvestį išsaugoti į `docs/` (pvz. `docs/MODULIO_4_TURINIO_ANALIZE_90MIN_VERDIKTAS.md`). Jei analizė nurodo sekančius žingsnius – įrašyti į `TODO.md` (prioritetas, sritis CONTENT arba DATA). Atnaujinti `CHANGELOG.md` tik jei po to keičiamas realus turinys/struktūra. |

**Trumpas workflow:**  
SOT + skaidrių eilė → **CONTENT_AGENT** (pilna analizė pagal §4) → **CODE_REVIEW_AGENT** (sanity check) → **QA_AGENT** (išsaugoti doc + TODO jei reikia).

---

## 4. Išvesties formatas (CONTENT_AGENT privalo pildyti)

CONTENT_AGENT atsakymą struktūruoti **tiksliai** taip:

---

### 1. Verdiktas (maks. 5 eilutės)

- **Telpa / netelpa** (viena frazė)
- **Didžiausia problema**
- **Didžiausia stiprybė**
- **Kas būtina pjauti**
- **Kas duoda didžiausią ROI**

---

### 2. Laiko realistiškumas (2×45)

**1 dalis (45 min):**

- Kontekstas + schema – **maks. 15 min**
- Pavyzdys (blogas → geras) – **10 min**
- Mikro-praktika – **15 min**
- Aptarimas – **5 min**

**2 dalis (45 min):**

- Priminta schema – **5 min**
- Core praktika (realus scenarijus) – **25 min**
- Kokybės vertinimas (checklist) – **10 min**
- Išvados – **5 min**

**Pažymėti:** kur dabartinis turinys **viršija** šiuos limitus (konkretūs skyriai/skaidrės arba temos).

---

### 3. Per daug / trūksta

**Per daug (pjauti arba perkelti į optional):**

- [tema] – kodėl low-ROI

**Trūksta (būtina pridėti):**

- 1 **hero pratimas**
- 1 **kokybės kriterijų rinkinys**
- 1 **realus verslo pavyzdys**

---

### 4. Praktikos kokybė

- Ar yra **vienas core pratimas**? (taip / ne)
- Ar dalyvis išeina su **artefaktu**? (kas?)
- Ar yra **definition of done**? (3 kriterijai)

---

### 5. V2 pasiūlymas (trumpai)

- **Nauja struktūra** (blokai + minutės)
- **Ką išmetam**
- **Ką paliekam kaip core**
- **Ką perkeliame į optional**

---

## 5. QUALITY (checklist) – CONTENT_AGENT laikytis

- [ ] **1 tikslas**, ne daugiau (vienas konkretus veiksmas po modulio)
- [ ] **Praktika ≥ 40 % laiko**
- [ ] **≤ 5 naujos sąvokos**
- [ ] **Aiškus skill transfer** (ką žmogus galės padaryti po 90 min)

---

## 6. TONE

- **Kritiškas, konkretus**, be teorijos pertekliaus.
- **Fokusas:** ką žmogus **galės padaryti** po 90 min, ne „ką supras“.

---

## 7. Nuorodos

| Kas | Kur |
|-----|-----|
| Turinio SOT (Moduliai 4–6) | `docs/turinio_pletra_moduliai_4_5_6.md` |
| Modulio 4 skaidrių eilė | `docs/MODULIO_4_SKAIDRIU_EILES.md` |
| Modulių atpažinimas (4.1–4.7 = Modulis 4) | `docs/CONTENT_MODULIU_ATPAZINIMAS.md` |
| Orkestratorius | `docs/development/AGENT_ORCHESTRATOR.md` |
| Duomenų tiesa (optional) | `src/data/modules.json` (Modulio 4 skaidrės) |

---

*Kai pateiksi kontekstą (arba nurodysi „analizuok pagal SOT“), pirmas žingsnis – **CONTENT_AGENT** su šiuo dokumentu ir §4 formatu. Po to – CODE_REVIEW_AGENT, tada QA_AGENT išsaugojimui.*
