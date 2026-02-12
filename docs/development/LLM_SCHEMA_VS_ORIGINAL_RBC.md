# LLM autoregresinė schema: palyginimas su originalu (RBC Borealis)

**Originalas:** [RBC Borealis – Figure 2. Autoregressive language model](https://rbcborealis.com/research-blogs/a-high-level-overview-of-large-language-models/)  
**Mūsų schema:** `public/llm_autoregressive_rytas_zalgiris.svg` (skaidrė 40.8)

---

## 1. Ar kalba apie tą patį? Taip

Abi schemos rodo tą patį procesą:

- **Žingsnis N:** Įvestis (tekstas) → LLM → Išvestis (tikimybių pasiskirstymas kitam tokenui) → pasirinktas tokenas.
- **Grįžtamasis ryšys:** Pasirinktas tokenas (originale – rodyklė nuo Output lentelės su etikete „Choose X“) tampa Žingsnio N+1 įvesties dalimi.
- **Žingsnis N+1:** Praplėsta įvestis → LLM → naujas tikimybių pasiskirstymas → naujas pasirinktas tokenas.

Semantika atitinka: autoregresija = „buvusi įvestis + pasirinktas žodis → nauja įvestis“.

---

## 2. Struktūros palyginimas

| Elementas | Originalas (RBC) | Mūsų schema | Atitikimas |
|-----------|-------------------|-------------|------------|
| Žingsnių skaičius | (a) Step N, (b) Step N+1 | Žingsnis N, Žingsnis N+1 | Taip |
| Įvesties blokas | „Input“ + tekstas | „Įvestis“ + tekstas | Taip |
| LLM blokas | „LLM“ + neuroninio tinklo piktograma | „LLM“ (tekstas) | Taip (vizualas skiriasi) |
| Išvestis | **Lentelė** „Output“ su stulpeliais Token, Probability | **Vienas blokas** „Išvestis (tikimybės)“ su token% tekste | Taip (skirtingas išdėstymas) |
| Pasirinktas tokenas | Nėra atskiro bloko; rodyklė iš Output eilutės, etiketė „Choose NBA“ | Atskiras blokas **„Pasirinkta“** + tokenas (m. / LKL) | Skiriasi (mūsų aiškiau atskiriame „kas pasirinkta“) |
| Feedback rodyklė | Punktyrinė, nuo Output → į N+1 Input, etiketė „Choose NBA“ | Punktyrinė, nuo Pasirinkta → į N+1 Įvestis, etiketė „Įvestis + m.“ | Taip (semantika та pati) |
| Pavyzdys | Toronto Raptors, 2019, NBA, game, championship | Vilniaus Rytas, 2024 m., m., LKL, čempionatą | Taip (lokalizavimas) |

---

## 3. Kas gerai (palikti)

- Srauto tvarka: Įvestis → LLM → Išvestis → Pasirinkta; feedback į kitos eilutės Įvestį.
- Dvi eilutės (N ir N+1), aiški autoregresija.
- Forward kietos rodyklės, feedback – punktyrinė (accent), atitinka SCHEME_AGENT.
- Vietinis pavyzdys (Rytas, LKL) ir šaltinis RBC Borealis apačioje.
- Atskiras „Pasirinkta“ blokas padaro aiškiau, **kuris** tokenas pereina į kitą žingsnį (originale tai tik rodyklės etiketė).

---

## 4. Pasiūlymai (neprivalomi)

### 4.1 Žingsnio N+1 įvesties aiškumas

- **Originale:** Step N+1 Input = pilnas tekstas: „The Toronto Raptors won the 2019 **NBA**“.
- **Pas mus:** Įvestis „… 2024 m.“ – trumpinys.

**Pasiūlymas:** Jei telpa, Žingsnyje N+1 įvestyje rodyti pilną praplėstą sakinį, pvz. „Vilniaus Rytas tapo čempionais 2024 m.“ (su paryškintu „m.“ arba be), kad būtų aišku, kad tai „buvusi įvestis + pasirinktas tokenas“. Jei vietos mažai – palikti „… 2024 m.“ ir po schema (arba figcaption) vienu sakiniu paaiškinti: „Žingsnyje N+1 įvestis = ankstesnė įvestis + pasirinktas tokenas „m.“.“

### 4.2 Išvesties bloko vizualas (lentelė vs tekstas)

- **Originale:** Output = lentelė (Token | Probability).
- **Pas mus:** viena eilutė „m. 22% · LKL 18% · …“.

**Pasiūlymas:** Palikti kaip yra – kompaktiška ir skaitoma. Jei norima labiau „lentelės“ įspūdžio, galima įvesties bloke pridėti antra eilutę su antrašte „Tokenai:“ arba „Tikimybės:“, bet tai ne būtina.

### 4.3 Feedback etiketės formuluotė

- **Originale:** „Choose NBA“ (veiksmas).
- **Pas mus:** „Įvestis + „m.““ (rezultatas – kas pridedama prie įvesties).

**Pasiūlymas:** Palikti „Įvestis + „m.““ – aiškiai rodo, kad pasirinktas tokenas **įeina** į kitos eilutės įvestį. Alternatyva: „Pasirinkta: m.“ arba „Pridėti prie įvesties: m.“ – abu priimtini.

### 4.4 LLM bloko piktograma

- **Originale:** LLM bloke – neuroninio tinklo schema (mazgai, ryšiai).
- **Pas mus:** tik tekstas „LLM“.

**Pasiūlymas:** Palikti tik tekstą – schema lieka paprasta ir vienoda su projekto stilius. Piktogramą galima pridėti vėliau (SCHEME_AGENT), jei norima labiau „AI“ vizualo.

---

## 5. Santrauka

| Klausimas | Atsakymas |
|-----------|-----------|
| Ar schema kalba apie tą patį? | **Taip** – autoregresinis LLM: įvestis → LLM → tikimybės → pasirinktas tokenas → praplėsta įvestis. |
| Ar struktūra panaši? | **Taip** – dvi eilutės, tie patys blokai (įvestis, LLM, išvestis, pasirinkimas/feedback). |
| Skirtumai | Originalas – Output lentelė, „chosen“ tik rodyklės etiketė; mūsų – vienas Išvesties blokas + atskiras Pasirinkta blokas. Abu variantai semantiškai teisingi. |
| Rekomenduoti pakeitimai | **(Įgyvendinta)** Žingsnis N įvestis be „m.“; N+1 – pilnas sakinys „… 2024 m.“; Išvesties bloke antraštė „Tokenas · Tikimybė“; body/imageAlt/desc atnaujinti. |

---

**Failai:** `public/llm_autoregressive_rytas_zalgiris.svg`, `src/data/modules.json` (id 40.8), šaltinis – RBC Borealis (nuoroda schemoje ir skaidrėje).
