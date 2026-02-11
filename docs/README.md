# 📚 Dokumentacijos Struktūra

Šis katalogas yra organizuota dokumentacijos vieta projekto dokumentams.

## 📁 Struktūra

```
docs/
├── getting-started/     # Pradžios gidai
│   └── QUICK_START.md
├── development/         # Development dokumentacija
│   ├── AGENT_ORCHESTRATOR.md  # Agentų router, SOT, kokybės vartai
│   ├── SEKA_GILI_ANALIZE_FIKSUOJAM_TAISOM.md  # Seka: gili analizė → fiksavimas → taisymas
│   ├── PLAN_AGENTAI_DARBAI.md # Agentų ir darbų planas, Modulio 4 MUST/SHOULD
│   ├── TEST_REPORT.md         # Vartotojo testų klaidos (QA_AGENT)
│   ├── TESTING_CHECKLIST.md
│   ├── SYSTEM_PROMPT.md
│   ├── SCHEME_AGENT.md        # Schemų/diagramų agentas
│   └── UI_UX_AGENT.md         # UI/UX gairės
├── deployment/          # Deployment instrukcijos
│   ├── DEPLOYMENT.md
│   └── GITHUB_SETUP.md
├── MODULIO_4_TURINIO_ANALIZE.md   # Modulio 4: logika, struktūra, pedagogika, pasiūlymai
├── MODULIO_4_SKAIDRIU_EILES.md   # Modulio 4 oficiali skaidrių eilė (4.0→4.7) + motyvacija
├── turinio_pletra_moduliai_4_5_6.md  # SOT Moduliams 4–6 (teorija, testas, projektas)
├── CONTENT_MODULIU_ATPAZINIMAS.md    # Kur kalbama apie kurį modulį (4.1–4.7 = Modulis 4)
├── PEDAGOGINE_ANALIZE_MODULIAI_4_5_6.md
├── SKAIDRIU_TIPU_ANALIZE.md
└── archive/            # Pasenusios dokumentacijos versijos
    └── [archived files]
```

## 📖 Pagrindinė Dokumentacija

Pagrindinė dokumentacija yra projekto root kataloge:

- **README.md** - Pagrindinis projekto aprašymas ir instrukcijos
- **ROADMAP.md** - Plėtros planas ir prioritetai
- **TODO.md** - Dabartinės užduotys ir progresas
- **CHANGELOG.md** - Versijų istorija
- **turinio_pletra.md** - Turinio šaltinis ir tiesa (pedagogika, terminologija)

## 🔍 Kategorijos

### Getting Started
Pradžios gidai ir instrukcijos naujiems kūrėjams.

### Development
Development dokumentacija:
- **AGENT_ORCHESTRATOR.md** – agentų orkestratorius (router, Source of Truth, kokybės vartai, CONTENT/DATA/CODING/CODE_REVIEW/QA promptai)
- **SEKA_GILI_ANALIZE_FIKSUOJAM_TAISOM.md** – standartinė seka: gili kodo analizė → fiksuojam klaidas → taisom (CODE_REVIEW → fiksavimas → CODING/DATA/CONTENT → patikra → QA)
- Testavimo checklist
- System prompt (AI agent guidelines)
- Code style guidelines (planuojama)

### Deployment
Deployment ir hosting instrukcijos:
- GitHub Pages
- Vercel / Netlify
- Build konfigūracija

### Turinys ir Moduliai 4–6
- **MODULIO_4_TURINIO_ANALIZE.md** – Modulio 4 turinio analizė: logika, struktūra, pedagoginė nauda, prioritetiniai patobulinimai ir statusas (įgyvendinta 1–3).
- **MODULIO_4_SKAIDRIU_EILES.md** – Oficiali Modulio 4 skaidrių eilė su „Kodėl čia?“; nuoroda iš SOT (`turinio_pletra_moduliai_4_5_6.md` §2.1).
- **turinio_pletra_moduliai_4_5_6.md** – Source of Truth moduliams 4–6 (teorinė dalis, testas, praktinė dalis).
- **CONTENT_MODULIU_ATPAZINIMAS.md** – Kur kalbama apie kurį modulį (4.1–4.7 = tik Modulio 4 skaidrės).

### Archive
Pasenusios dokumentacijos versijos, kurios gali būti naudingos istorinei informacijai, bet nėra aktualios dabartiniam naudojimui.

## 📝 Dokumentacijos Atnaujinimas

Kai atnaujinama dokumentacija:
1. Atnaujinkite atitinkamą failą `docs/` kataloge
2. Jei dokumentacija paseno, perkėlkite į `docs/archive/`
3. Atnaujinkite `README.md` root kataloge, jei reikia

## 🔗 Nuorodos

- [Pagrindinis README](../README.md)
- [Roadmap](../ROADMAP.md)
- [TODO](../TODO.md)
- [Changelog](../CHANGELOG.md)

---

**Pastaba:** Ši struktūra buvo sukurta 2026-02-02 kaip dalis dokumentacijos organizavimo proceso.
