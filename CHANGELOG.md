# Changelog

Visos reikšmingos pakeitimų šiame projekte bus dokumentuojamos šiame faile.

Formatas pagrįstas [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
ir šis projektas laikosi [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added
- ESLint konfigūracija (`.eslintrc.cjs`)
- Cursor rules failas (`.cursorrules`)
- CHANGELOG.md dokumentacija
- Code evaluation ir improvements dokumentas
- Dokumentacijos reorganizacija (`docs/` struktūra)
- Prettier konfigūracija (`.prettierrc.json`)
- EditorConfig (`.editorconfig`)

### Changed
- Atnaujintas `package.json` su pilna informacija (author, repository, bugs, homepage)
- Dokumentacija reorganizuota: perkelta į `docs/` katalogą
- Atnaujintos nuorodos `.cursorrules` ir `.cursor/rules/project.md`
- Root kataloge išlaikyti tik aktualūs dokumentai

### Removed
- Originalūs dokumentacijos failai root kataloge (perkelti į `docs/`)

## [2.1.0] - 2026-02-02

### Added
- Error Boundary komponentas su retry funkcija
- Loading states su LoadingSpinner komponentu
- Lazy loading visiems dideliems komponentams
- TypeScript tipai centralizuoti `src/types/modules.ts`
- localStorage validacija su versijavimu (v1/v2)
- Automatinė migracija senų duomenų formatui
- Testų infrastruktūra (Vitest + React Testing Library)
- 21 unit testas progress.ts (100% coverage)
- 6 integration testai
- CI workflow (GitHub Actions)
- Klaidų logavimas su context (`src/utils/logger.ts`)

### Changed
- SlideContent.tsx refaktorintas į mažesnius komponentus
- CopyButton fix - individualus state kiekvienam mygtukui
- Tailwind safelist - dinaminės spalvų klasės veikia produkcijoje

## [2.0.0] - 2026-02

### Added
- Skaidrė "Ką Reiškia Promptas?" su apibrėžimais
- Skaidrė "Pagrindiniai Promptų Tipai" (sisteminiai, kontekstiniai, vaidmens)
- Promptų biblioteka su instrukcijomis
- 13 skaidrių vietoj 11 pirmame modulyje

### Changed
- AI → DI (Dirbtinis Intelektas)
- Pataisyta lietuvių kalbos gramatika
- Atnaujinta spalvų schema (Navy/Gold)

## [1.0.0] - 2024

### Added
- Pradinė versija su 3 moduliais
- Progreso sekimas (localStorage)
- Automatinis juodraščių išsaugojimas
- Tamsusis/šviesusis režimas
- Responsive dizainas
- Klaviatūros navigacija
- Šventimo animacijos (confetti)
