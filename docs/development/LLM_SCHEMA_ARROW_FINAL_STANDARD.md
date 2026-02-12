# LLM schemos rodyklių FINAL standartas

**Taikymas:** `public/llm_autoregressive_rytas_zalgiris.svg` ir kitos instrukcinės srauto diagramos, kur pagrindas – logika, ne dekoracija.

---

## 1. Vienas pagrindinis srautas

- **Srautas:** Įvestis → LLM → Išvestis → Pasirinkta (core logika).
- Visos horizontalios rodyklės pagrindiniame sraute:
  - **identiškos** (vienodas stilius, spalva, storis)
  - **vienodo storio** (1px)
  - **vienodo atstumo** (edge-to-edge arba vienodas GAP)
  - **vienodo kontrasto**
- Jokios variacijos pagrindiniame sraute.

---

## 2. Autoregresijos grįžimas (loop) – NE pagrindinis srautas

- Loop rodyklė:
  - **neturi būti ryškesnė** nei pagrindinės
  - **neturi būti ilgesnė** nei būtina
  - neturi kirsti pusės ekrano
- Turi būti: **trumpa, subtili, semantiškai aiški**.
- Praneša tik vieną dalyką: *„Pasirinktas tokenas tampa naujos įvesties dalimi.“*
- **Spalva:** ta pati neutrali pilka kaip pagrindinis srautas (rodyklė be akcento). Akcentas (geltona) – tik **Pasirinkta** bloke.

---

## 3. Krypties logika

- Rodyklės:
  - **horizontaliai sulygiuotos** (y = bloko vertikalus centras)
  - **vienodas „kvėpavimas“** tarp blokų (vienodas atstumas)
  - **neliečia blokų kampų** (baigiasi prieš bloką, atsižvelgiant į arrowhead)
- Blogai: rodyklė liečia bloką per aukštai arba per žemai → vizualinis disbalansas.
- Gerai: rodyklė jungia blokų **centro linijas** (horizontaliai).

---

## 4. Spalvinė semantika

| Elementas      | Spalva           | Reikšmė        |
|----------------|------------------|----------------|
| Pilka (srautas)| #94a3b8 (neutral 400) | Įvestis → LLM → Išvestis → Pasirinkta ir **loop** |
| Tamsi mėlyna   | #334e68 (brand)  | Sistema (LLM blokas, blokų kontūrai) |
| Geltona/amber  | #b8860b, #7a5807 | **Tik** Pasirinkta blokas (rėmelis, tekste) |
| Rodyklė        | **Niekada** akcentas, jei nėra „pasirinkimas“ | Rodyklė = srautas, ne pasirinkimo indikatorius |

---

## 5. Vizualinė hierarchija

**Teisinga eilė (nuo svarbiausio):**

1. Blokai (turinys)
2. Tekstas (įvestis, išvestis, etiketės)
3. Pagrindinės rodyklės (forward)
4. Loop rodyklė
5. Pagalbiniai užrašai (šaltinis, „Pridedama prie naujos įvesties“)

Rodyklės turi būti **žemiau** blokų ir teksto hierarchijoje (pagalbinės, ne dominuojančios).

---

## 6. Konkretūs techniniai reikalavimai (agentui)

| Parametras            | Reikšmė                          |
|----------------------|-----------------------------------|
| **Arrow thickness**  | 1px                              |
| **Arrowhead size**   | ~40% mažesnė nei „stambus“ variantas (pvz. 5×4px) |
| **Color**            | neutral 400–500 tone (#94a3b8, #64748b) |
| **Equal spacing**    | vienodas atstumas tarp visų blokų (GAP) |
| **Max arrow length**| ne ilgesnė nei 1 bloko plotis    |
| **No crossing**     | jokių kertančių įstrižų           |
| **No mixed styles**  | vienas stilius pagrindiniame sraute; loop – ta pati pilka, tik punktyras |

---

## 7. Įgyvendinimas (LLM schema 2026-02)

- **Forward:** 1px stroke, marker 5×4px (refX=4), #94a3b8. x2 = nextBoxLeft − 4. y = row center (116, 232).
- **Loop:** 1px stroke, stroke-dasharray 5 3, #94a3b8 path ir polygon, #64748b circle stroke ir label. Path toliau nuo blokų (y=196). Mažas polygon (tip 204, base 211).
- **Pasirinkta blokas:** rėmelis ir teksto spalva lieka accent (#b8860b, #7a5807). Geltona = tik čia.

Failas: `public/llm_autoregressive_rytas_zalgiris.svg`.
