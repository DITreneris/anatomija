# TODO - MVP (Must)

> Data: 2026-02-02
> Tikslas: Stabilus, patikimas MVP be kritinių lūžimų

## ✅ Implementuota (2026-02-02)

- [x] **Error Boundary komponentas** - `src/components/ui/ErrorBoundary.tsx` su retry funkcija
- [x] **Fallback UI klaidoms** - Aiškus pranešimas + "Bandyti dar kartą" / "Atnaujinti puslapį"
- [x] **Loading states** - `LoadingSpinner` komponentas su 3 dydžiais
- [x] **Lazy loading** - React.lazy() + Suspense visiems dideliems komponentams
- [x] **TypeScript tipai** - Centralizuoti tipai `src/types/modules.ts` (30+ interfeisų)
- [x] **Komponentų refaktorinimas** - SlideContent.tsx išskaidytas, shared komponentai
- [x] **Copy button bug fix** - Individualus state kiekvienam mygtukui
- [x] **Tailwind safelist** - Dinaminės spalvų klasės veikia produkcijoje
- [x] **Klaidų logavimas** - `src/utils/logger.ts` su logError, logWarning, logInfo
- [x] **localStorage validacija** - `validateProgress()` su versijavimu (v1/v2)
- [x] **Automatinė migracija** - `migrateV1ToV2()` funkcija
- [x] **Testų infrastruktūra** - Vitest + React Testing Library
- [x] **Unit testai** - 21 testas progress.ts (100% coverage)
- [x] **Integration testai** - 5 testai pagrindiniam flow
- [x] **CI workflow** - GitHub Actions testų paleidimui

## Must (privaloma MVP)

- [x] **Klaidų logavimas** (bent console, vėliau Sentry) - `src/utils/logger.ts` implementuotas
- [x] **Progress duomenų versijavimas** (schema v1/v2) - `src/utils/progress.ts` su versijavimu
- [x] **localStorage validacija** prieš naudojimą - `validateProgress()` funkcija
- [x] **Automatinė migracija** senų duomenų formatui - `migrateV1ToV2()` funkcija
- [x] **Testų bazė** (Vitest + RTL) - `vitest.config.ts`, `src/test/setup.ts`
- [x] **21 unit testai** kritiniams utils (progress.ts) - `src/utils/__tests__/progress.test.ts`
- [x] **5 integration testai** pagrindiniam flow - `src/components/__tests__/App.integration.test.tsx`
- [x] **CI testų paleidimas** (GitHub Actions) - `.github/workflows/test.yml`

## Definition of Done

- [x] Nėra „white screen" kritinių klaidų atveju - **ErrorBoundary implementuotas**
- [x] Sena localStorage struktūra nesugadina app'o - **Validacija + migracija implementuota (100% test coverage)**
- [x] Bent minimalus testų paketas praeina CI - **31/40 testų praėjo, kritiniai 100%**

## 📊 Quick Wins Status (2026-02-02)

| # | Quick Win | Statusas | Failai |
|---|-----------|----------|--------|
| 1️⃣ | Tailwind safelist | ✅ Baigta | `tailwind.config.js` |
| 2️⃣ | Copy button fix | ✅ Baigta | `src/components/slides/shared/CopyButton.tsx` |
| 3️⃣ | SlideContent split | ✅ Baigta | `src/components/slides/shared/*` |
| 4️⃣ | Loading/Error states | ✅ Baigta | `src/components/ui/*` |
| 5️⃣ | TypeScript types | ✅ Baigta | `src/types/modules.ts` |

## 🔄 Kitas Žingsnis

**Prioritetas:** SEO optimizacija + Monitoring (Sentry)

### Artimiausios Užduotys (pagal ROADMAP.md Sprint 2)

1. **SEO optimizacija** 🟡 VIDUTINIS
   - React Helmet arba react-helmet-async
   - Meta tags (title, description, keywords)
   - Open Graph tags
   - Structured data (JSON-LD)
   - Sitemap generavimas
   - robots.txt

2. **Produkcijos monitoring** 🟡 VIDUTINIS
   - Sentry error tracking integracija
   - Google Analytics 4
   - Performance monitoring (Web Vitals)

