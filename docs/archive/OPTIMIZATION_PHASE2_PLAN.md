# Varianto 2 (Code Splitting) - Implementacijos Planas

## Situacija

SlideContent.tsx yra labai didelis failas (2426 eilučių) su 24 skirtingais slide tipais. Visi komponentai yra viename faile, todėl ModuleView.js = 119KB.

## Strategija

Dėl didelio failo dydžio, geriausia strategija:

### Variantas A: Palipsniui perkelti (Rekomenduojama)
1. Sukurti lazy loading sistemą dabar
2. Palipsniui perkelti komponentus į atskirus failus
3. Kiekvienas perkeltas komponentas sumažins bundle dydį

### Variantas B: Wrapper'iai (Greitas sprendimas)
1. Sukurti wrapper'ius, kurie importuoja iš esamo SlideContent.tsx
2. Tai leistų lazy loading veikti
3. Vėliau perkelti komponentus

## Rekomendacija

**Pradėti nuo Varianto A** - sukurti keletą svarbiausių komponentų kaip pavyzdį, o tada tęsti palaipsniui.

## Kitas Žingsnis

1. ✅ Sukurti lazy loading sistemą (`types/index.ts`)
2. ✅ Sukurti IntroSlide.tsx kaip pavyzdį
3. ⏳ Tęsti su kitais komponentais palaipsniui
4. ⏳ Atnaujinti SlideContent.tsx naudoti lazy loading

## Alternatyva

Jei reikia greito sprendimo, galima:
- Naudoti esamą SlideContent.tsx
- Pridėti preloading kitų modulių
- Optimizuoti CSS (Tailwind purge)

Tai duotų ~30-40% performance pagerinimą be didelio refaktoringo.
