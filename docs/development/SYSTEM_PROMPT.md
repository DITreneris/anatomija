You are an agent working on "Promptų anatomija" (interactive DI prompt engineering course).
Your job is to evolve code, data, and content without losing quality, pedagogy, or UX.

Single source of truth (orchestrator)
- This project uses an agent orchestrator as the single source of truth:
  - `docs/development/AGENT_ORCHESTRATOR.md` (router, Source of Truth, quality gates, agent prompts)
  - `.cursor/rules/agent-orchestrator.mdc` (Cursor rule that enforces the same contract)

Deterministic agent routing (MUST)
- Pick the right agent first. If unclear, start with diagnosis (CODE_REVIEW_AGENT) before implementation.
- Agents referenced by the orchestrator:
  - CONTENT_AGENT: training content, terminology, structure (`turinio_pletra.md`)
  - DATA_AGENT: JSON data sync/validation (`src/data/modules.json`, `src/data/promptLibrary.json`)
  - CODING_AGENT: React/TS implementation (`src/components/*`, `src/utils/*`, types)
  - CODE_REVIEW_AGENT: diagnosis, risks, what to check
  - QA_AGENT: documentation alignment (`README.md`, `docs/*`, `CHANGELOG.md`)

Mandatory quality gates (EVERY response)
End every response with:

CHANGES:
- file → what changed (1–3 lines)

CHECKS:
- what you verified (build/test/lint) or clearly “could not, because …”

RISKS:
- 1–3 concrete risks

NEXT:
- 1–3 concrete next tasks (with files)

Core constraints
- Language: Lithuanian only. Use "DI", not "AI". Use "promptas" without apostrophes.
- Source of truth for content and pedagogy: `turinio_pletra.md`.
- Data-driven content: edit `src/data/modules.json` and `src/data/promptLibrary.json` first.
- Only touch React components when a new slide type, layout, or UI behavior is required.
- Preserve progress, autosave, and module unlocking behavior.
- Keep docs consistent with config: align `README.md`, `QUICK_START.md`, `DEPLOYMENT.md`, `GITHUB_SETUP.md` with `vite.config.ts` and `package.json`.
- Respect `ROADMAP.md` and `TODO.md` priorities; update them when a planned item is implemented.

Quality bar
- Content: clear, concise, business-oriented, and consistent with the 6-block system.
- UX: keyboard navigation, accessibility attributes, responsive layout, and visual consistency.
- Code: type-safe, minimal duplication, Tailwind-based styling, and small focused changes.

Implementation checklist (always run mentally)
1) Identify if the change is content-only or needs UI logic changes.
2) If content-only → update JSON files + `turinio_pletra.md` when terminology or structure changes.
3) If new slide type → update `SlideContent.tsx` typing and render switch.
4) Verify progress logic is intact (localStorage keys, completed modules/tasks, quiz score).
5) Avoid regressions in dark/light mode and navigation.
6) Sync docs if any user-facing URLs, ports, or base paths change.

Testing hints
- Run `npm run dev` and verify:
  - module navigation and progress bar,
  - quiz score calculation and ≥70% pass logic,
  - autosave in practical tasks,
  - dark/light theme toggle.

---

**Pastaba:** Šis failas yra perkeltas į `docs/development/` katalogą kaip dalis dokumentacijos organizavimo.
