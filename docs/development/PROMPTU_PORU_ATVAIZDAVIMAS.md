# Promptų porų atvaizdavimas – geriausios praktikos

> Lengvai analizuojami **vienokio ir kitokio tipo** promptų pavyzdžiai pagal projekto atvaizdavimo standartus.

---

## 1. Tikslas

- Pateikti **dvi skirtingas promptų rūšis** (pvz. metodinis vs agentinis, nestruktūruotas vs struktūruotas) **greta**.
- Užtikrinti **lengvą analizavimą**: dalyvis iš karto mato, **ką lyginti** ir **kuo skiriasi**.
- Laikytis **UI/UX gairių**: brand / accent / slate blokai, CopyButton, a11y, skenuojamumas.

---

## 2. Atvaizdavimo praktikos (checklist)

| Elementas | Praktika | Pavyzdys |
|-----------|----------|----------|
| **Tipų atskyrimas** | Kiekvienas tipas – atskiras blokas su antrašte (1️⃣ … 2️⃣ arba pavadinimas). | „1️⃣ Metodinis promptas – pavyzdys“, „2️⃣ Agentinis promptas – pavyzdys“ |
| **Kopijuojamas pavyzdys** | Kiekvienam tipui – `copyable` laukas → TemplateBlock (label „Kopijuoti“). | ContentBlockSection.copyable |
| **Vizualinė hierarchija** | Pagrindinė info (apibrėžimai, pavyzdžiai) – **brand** blokas. Palyginimo kriterijai – **terms** (slate). CTA / „pabandyk“ – **accent**. | blockVariant: brand \| terms \| accent |
| **„Ką analizuoti“** | Trumpas, skenuojamas blokas: bullet points, **bold** kriterijų pavadinimams (Rolė, Rezultatas, Įrankiai, Formatas). | Sekcija su blockVariant: terms |
| **Intro** | Viena sekcija „Kuo skiriasi“ – 1–2 sakiniai per tipą; **bold** pagrindiniams žodžiams. | blockVariant: brand |
| **Skenuojamumas** | Antraštės `font-bold text-lg`; nelaužyti ilgų pastraipų; CTA aiškus. | Pagal UI_UX_AGENT.md |

---

## 3. Referencinė skaidrė (implementuota)

| Kas | Vieta |
|-----|--------|
| **Skaidrė** | Modulis 4 – „Metodinis vs Agentinis promptas“ (id: 54) |
| **Tipas** | `content-block` |
| **Struktūra** | 1) Kuo skiriasi (brand) 2) Metodinis – pavyzdys + copyable (brand) 3) Agentinis – pavyzdys + copyable (brand) 4) Ką analizuoti (terms) |
| **Duomenys** | `src/data/modules.json` – skaidrė id 54 |

---

## 4. Kiti galimi porų pavyzdžiai (tas pats šablonas)

- **Nestruktūruotas vs Struktūruotas** – jau yra `comparison` skaidrė (id 13): dvi kortelės, CopyButton, pros/cons, statistikos.
- **Manipuliacinis vs Neutralus** – Modulio 4 manipuliacijų skaidrėse: po technikos – „manipuliacinis pavyzdys“ ir „neutralesnis variantas“ su CopyButton.
- **Zero-shot vs Few-shot** – dvi sekcijos su vienu pavyzdžiu kiekviena, copyable; „Ką analizuoti“: ar pateikti pavyzdžiai, ar tik instrukcija.

Kurdami naują „porų“ skaidrę: naudokite **content-block** su 2–4 sekcijomis, **copyable** pavyzdžiams, **blockVariant** hierarchijai ir **„Ką analizuoti“** terms bloku.

---

## 5. Nuorodos

- UI/UX: `docs/development/UI_UX_AGENT.md`, `docs/QA_DI_VISATA_UI_UX.md`
- Tipai: `ContentBlockSection` (`src/types/modules.ts`) – copyable, blockVariant
- Turinio SOT (Metodinis/Agentinis): `docs/turinio_pletra_moduliai_4_5_6.md` – „Metodinis promptas vs Agentinis promptas“
