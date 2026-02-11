# Agentų seka: release paruošimas (kodo patikra, README, dokumentacija)

> **Paskirtis:** Vienas dokumentas su agentų seka prieš release – kodo patikra, taisymai (jei reikia), README ir dokumentacijos atnaujinimas.
> **Kada naudoti:** Prieš deploy / versijavimą (GitHub Pages, testuotojams, MVP arba pilnas release).

---

## Greitos nuorodos

| Dokumentas | Paskirtis |
|------------|-----------|
| [RELEASE_QA_CHECKLIST.md](RELEASE_QA_CHECKLIST.md) | 5 min sanity prieš release (nuorodos, mobile, dark, a11y, lietuviškos raidės, MVP). |
| [RELEASE_PLAN_MVP_MODULIAI_1_3.md](RELEASE_PLAN_MVP_MODULIAI_1_3.md) | MVP release gate, module gating, release-ready užduotys. |
| [AGENT_ORCHESTRATOR.md](AGENT_ORCHESTRATOR.md) | Agentų rolės, SOT, kokybės vartai (CHANGES, CHECKS, RISKS, NEXT). |

---

## Etapų lentelė

| Etapas | Agentas | Užduotis | Artefaktai / išvestis |
|--------|---------|----------|------------------------|
| 1 | CODE_REVIEW_AGENT | Kodo patikra: build, lint, test:run, MVP build; diagnozė, rizikos | Diagnozės ataskaita (OK arba problemų sąrašas + rekomendacija) |
| 2 | CODING_AGENT / DATA_AGENT | Tik jei 1 nustatė blockerius – taisymai | Pakeisti failai; CHANGES/CHECKS/RISKS/NEXT |
| 3 | QA_AGENT | README atnaujinimas, RELEASE_QA_CHECKLIST atlikimas, lietuviškos raidės, CHANGELOG | Atnaujinti README.md, CHANGELOG (jei reikia); nuorodos teisingos |
| 4 (optional) | CODE_REVIEW_AGENT / QA_AGENT | Galutinė suderinamumo patikra | Patvirtinimas, kad release gate įvykdytas |

---

## Etapas 1: Kodo patikra (CODE_REVIEW_AGENT)

**Užduotis:** Diagnozė prieš release – ar build/lint/test/MVP build eina, kur rizika, ar nėra akivaizdžių regresijų.

**Veiksmai:**

1. Patikrinti, kad šios komandos sėkmingos (arba nurodyti, kur lūžta):
   - `npm run build` (įskaitant `prebuild` → `npm run validate:schema`)
   - `npm run lint`
   - `npm run test:run`
   - `VITE_MVP_MODE=1 npm run build`
2. Trumpa apžvalga: kritiniai keliai (progress, quiz, ModuleView, MVP gating), tipai (`src/types/modules.ts`), duomenų validacija (JSON schemos).
3. Išvestis: **diagnozės ataskaita** – „viskas OK“ arba sąrašas problemų su failais/eilutėmis ir rekomendacija (CODING_AGENT arba DATA_AGENT).

**Artefaktai:** Jokių pakeitimų kode (tik apžvalga); galimas trumpas sąrašas „NEXT“ (ką pataisyti).

---

## Etapas 2: Taisymai (CODING_AGENT arba DATA_AGENT) – tik jei reikia

**Įsijungia:** Jei CODE_REVIEW_AGENT nustatė blockerius (lūžtančius build/test/lint arba kritines rizikas).

**Užduotis:** Ištaisyti nurodytas problemas; minimalūs pakeitimai; po pakeitimų pakartoti build/lint/test.

**Artefaktai:** Pakeisti failai; atsakymo pabaigoje privalomas blokas CHANGES, CHECKS, RISKS, NEXT (pagal AGENT_ORCHESTRATOR).

---

## Etapas 3: Dokumentacija ir release gate (QA_AGENT)

**Užduotis:**

1. **README.md** – suderinti su realia konfigūracija:
   - `package.json` scriptai: `dev`, `build`, `preview`, `lint`, `test`, `test:run`, `test:coverage`, `validate:schema`
   - MVP build: `VITE_MVP_MODE=1 npm run build` (įskaitant Windows pastabą, jei reikia)
   - Node reikalavimai (`engines` arba tekstas)
   - Projekto struktūra (jei pasikeitė) – žr. `src/` medį
   - Dokumentacijos nuorodos: `docs/README.md`, turinio SOT (`turinio_pletra.md`, `docs/turinio_pletra_moduliai_4_5_6.md`), RELEASE_QA_CHECKLIST
2. **RELEASE_QA_CHECKLIST** – atlikti rankiniu būdu arba aiškiai nurodyti, kad 5 min sanity vykdomas pagal [RELEASE_QA_CHECKLIST.md](RELEASE_QA_CHECKLIST.md) skyrius 1–6 (broken links, mobile, dark, a11y, lietuviškos raidės, MVP).
3. **Lietuviškų raidžių spot-check** – pagal RELEASE_QA_CHECKLIST §5: prioritetinės vietos – HomePage, QuizPage, Testo Rezultatai, žodynėlis, modulių skaidrės; dažnos klaidos (ž, ė, ą, ų, ū, š, č, į).
4. **CHANGELOG.md** – jei buvo reikšmingų pakeitimų nuo paskutinio release – atnaujinti [Unreleased] arba nauja versija.

**Artefaktai:** Atnaujinti README.md, CHANGELOG.md (jei reikia); patikrinti, kad nuorodos į docs teisingos.

---

## Etapas 4 (optional): Galutinė patikra (CODE_REVIEW_AGENT arba QA_AGENT)

**Užduotis:** Trumpa patikra:

- Ar README nuorodos ir komandos atitinka `package.json` ir `vite.config.ts`.
- Ar release gate sąlygos (iš RELEASE_PLAN_MVP_MODULIAI_1_3.md) įvykdytos:
  - MVP-G1, MVP-G2, MVP-G3 (jei MVP release)
  - `npm run build` su `VITE_MVP_MODE=1` sėkmingas
  - `npm run lint` be klaidų
  - RELEASE_QA_CHECKLIST atliktas
  - CHANGELOG atnaujintas

---

*Šis dokumentas – agentų sekos „source of truth“ release paruošimui. Cursor rule: `.cursor/rules/agent-orchestrator.mdc`.*
