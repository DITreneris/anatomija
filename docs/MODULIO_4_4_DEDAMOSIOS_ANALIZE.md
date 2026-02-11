# Skaidrė „4 dedamosios“ – turinio ir pedagoginė analizė

> **Skaidrė:** Modulis 4, id 45.  
> **Tikslas:** Parodyti promptų inžineriją kaip keturių sričių sankirtą (SOT: `turinio_pletra_moduliai_4_5_6.md`).

---

## 1. Kas buvo peržiūrėta

| Aspektas | Būklė prieš | Problema |
|----------|--------------|----------|
| **Subtitle** | Ilgas, techninis („sutapatinta su Anthropic, Google, OpenAI“) | Mažiau aiškus mokiniui – kam tai? |
| **Workflow antraštės** | „Workflow 1“, „Workflow 2“ | Neaišku, ką vaizduoja; nesusieta su „Inžinerija“. |
| **4 blokai** | Tik teorinis aprašymas | Trūko **praktinio** ryšio – „ką tai reiškia man?“ |
| **Užbaigimas** | Paskutinis blokas – „Komunikacija“ | Nėra **takeaway** – kodėl keturios dedamosios kartu svarbios. |
| **Kognityvinė apkrova** | Daug sąvokų iš eilės | Sunku išsirinkti „ką atsiminti“ ir „ką daryti kitaip“. |

---

## 2. Ką pataisiau (turinyje)

- **Subtitle:** Sutrumpintas ir orientuotas į mokinį: *„Keturi kampai, iš kurių susideda geri promptai – inžinerija, kalba, psichologija, komunikacija“*. Šaltinių nuoroda (Anthropic, Google, OpenAI) palikta 4. bloke (Komunikacija).
- **Workflow vaizdų labeliai:** Pakeisti į *„Inžinerija praktikoje – pavyzdys 1“* ir *„Inžinerija praktikoje – pavyzdys 2“*, kad būtų aiškus ryšys su pirmuoju bloku.
- **Praktiškai sakiniai:** Prie kiekvieno iš 4 blokų pridėtas trumpas **Praktiškai:** sakinys:
  - **Inžinerija:** geriau mažiau promptų, bet juos tobulinti, nei daug vienkartinių; nuoroda į žemiau esančius workflow pavyzdžius.
  - **Kalbos filosofija:** žodžių pasirinkimas ir kontekstas nulemia interpretaciją.
  - **Psichologija:** kaip suformuluoti – taip ir žmogus/komanda suvoks; geri promptai sumažina neaiškumus.
  - **Komunikacija:** aiškios, glaustos užklausos → geriau nuspėjami atsakymai.
- **Esmė (accent blokas):** Pridėtas paskutinis blokas: *„Visi keturi kampai veikia kartu. Geras promptas liečia visus keturis – ne tik „ką parašiau“, bet ir kaip projektavome, kaip suprasime kalbą, ką įrėminsime ir kaip aiškiai perduosime.“* – kad būtų viena aiški žinutė ir praktinis takeaway.

---

## 3. Galimi tolimesni žingsniai (SHOULD/COULD)

| Pasiūlymas | Pedagoginis pagrindas | Kur |
|------------|------------------------|-----|
| **Collapsible „Kaip tai susiję su Anthropic / Google / OpenAI?“** | Mažina pagrindinį ekraną; tiems, kam rūpi šaltiniai – galima išskleisti. | UI: papildomas blokas su sutapatinimo lentele (SOT §4.1a2). |
| **Trumpas „Kas čia?“ tekstas virš 4 blokų** | Pirmas sakinys nustato tikslą: „Šioje skaidrėje – keturi kampai, iš kurių susideda geri promptai.“ | Pridėti kaip optional `intro` į content arba pirmą section su `blockVariant: 'default'`. |
| **Workflow vaizdų paaiškinimas** | Jei .png rodo „Basic vs Workflow“ (kaip Modulyje 1), labelius galima pakeisti į „Basic naudojimas“ ir „Workflow naudojimas“. | `modules.json` – `workflowImages[].label` pagal realų turinį. |

---

## 4. Santrauka

- **Aiškumas:** Subtitle ir blokų „Praktiškai“ sakiniai padeda suprasti **ką tai reiškia praktiškai**.
- **Suprantamas takeaway:** Blokas „Esmė“ apibendrina, kodėl keturios dedamosios laikomos kartu.
- **Ryšys su inžinerija:** Workflow antraštės susietos su „Inžinerija praktikoje“.
- **Maksimalus praktiškumas:** Kiekvienas blokas turi konkretų „ką daryti / į ką atsižvelgti“ sakinį.

CHANGES: atnaujintas `src/data/modules.json` – skaidrė „4 dedamosios“ (subtitle, workflowImages labels, 4 sections + „Praktiškai“, naujas „Esmė“ accent blokas). Sukurtas `docs/MODULIO_4_4_DEDAMOSIOS_ANALIZE.md`.

CHECKS: JSON validumas – sveiki; `blockVariant: "accent"` jau palaikomas ContentBlockSlide.

RISKS: Jei skaidrė atrodo per ilga, „Esmė“ bloką galima sutrumpinti arba perkelti į kitą skaidrę.

NEXT: (optional) pridėti collapsible „Šaltiniai“; pritaikyti workflow labelius pagal realų .png turinį (Basic vs Workflow).
