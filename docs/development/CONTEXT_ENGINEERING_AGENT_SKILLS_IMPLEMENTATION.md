# Context Engineering: Agent-Skills Repo → Promptų anatomija

**Source:** [muratcankoylan/Agent-Skills-for-Context-Engineering](https://github.com/muratcankoylan/Agent-Skills-for-Context-Engineering)  
**Target:** Promptų anatomija (modulinė mokymų platforma, React/GitHub Pages)  
**Audience:** Team shipping fast; low-risk, high-ROI changes only.  
**Language:** EN (business-technical).

---

## 1. Bottom line: what breaks first in our architecture

| Issue | Why it hurts | Where it shows |
|-------|--------------|----------------|
| **No single content/module registry** | SOT is split across `turinio_pletra.md`, `turinio_pletra_moduliai_4_5_6.md`, `CONTENT_MODULIU_ATPAZINIMAS.md`, and `modules.json`. Agents and humans must remember which file owns what → context debt, duplicate edits, drift. | Confusion "4.1" = Modulio 4 vs Modulio 6; repeated fixes in CONTENT_MODULIU_ATPAZINIMAS. |
| **Progressive disclosure only in rules, not in data** | All module/slide context is effectively "load everything." No lightweight index (names + descriptions) for "what to load when." | Heavier agent context; no clear "next step" for "what to do next" without reading full SOT. |
| **"What next?" is implicit** | Next step lives in UI copy and scattered CTA docs, not in a machine-readable flow (e.g. Module N → Quiz / Module N+1 / Certificate). | More triukšmas for product/QA; harder to automate checks (e.g. "does CTA match actual next step?"). |
| **No explicit context budget for agents** | Orchestrator rule lists many SOT files but no token/size guidance or "load only when" triggers. | Risk of lost-in-the-middle when many docs are opened; no compaction/masking strategy. |
| **Evaluation is manual checklist only** | QA = RELEASE_QA_CHECKLIST.md (human). No rubric for "content quality" or "UX consistency" that could be automated (heuristics or LLM-as-judge). | Regressions in tone, CTA clarity, or module flow slip through until manual review. |
| **Memory is only localStorage progress** | No separation of "session notes" (current task, last file) vs "long-term memory" (decisions, patterns, release state). | Hard to onboard; no durable record of why we chose X for Modulio 4. |

**Single sentence:** We have good SOT tables and agent roles, but we lack a **single content registry**, **explicit context budget**, **routing/next-step contract**, and **evaluation hooks**—so the first thing that "breaks" under load is **clarity of where to look and what to do next**, not the app code itself.

---

## 2. Extracted best practices (repo → transferable principles)

| # | Principle | Why it works | When it fails | Minimal implementation |
|---|-----------|--------------|---------------|-------------------------|
| 1 | **Single source of truth per concern** | One place to look → less drift, fewer conflicts. | When SOT is too big (monolith); split by concern (content vs data vs UI). | Keep SOT table in orchestrator; add one **SOT index** (sot_index.json) that points to which file owns modules/slides/content. |
| 2 | **Progressive disclosure** | Load names/descriptions first; full content when relevant. | When the model doesn’t know when to load more (need clear triggers). | Registry with `id`, `title`, `description`, `sotPath`; agents load full file only when task touches that module/section. |
| 3 | **Context budget and placement** | Attention is finite; start/end get more weight; middle degrades. | When critical info is buried in the middle of long context. | context_budget.md: max lines/size per doc type; "critical info at top/bottom"; compaction trigger at ~70–80% (for agents). |
| 4 | **Observation masking / offload** | Tool outputs (e.g. file reads) dominate tokens; replace with refs + short summary. | When the agent must reason over full content (then keep excerpt, not full file). | Rule: "Return path + 2–3 line summary; agent reads full file only when needed." |
| 5 | **Filesystem as scratch / plan** | Persist plans and state in files so they survive context compaction. | When file layout is chaotic (naming, locations). | Use `docs/development/` for plans; `scratch/` or `docs/development/scratch/` for session plans; one file per "current plan" with clear name. |
| 6 | **Memory layers (working vs short-term vs long-term)** | Working = current context; short-term = session; long-term = cross-session. | When everything is treated the same (no retention policy). | memory_schema.md: what goes in "session notes" vs "long-term" (decisions, release state); we don’t need a DB—just conventions and maybe a MEMORY.md per release. |
| 7 | **Explicit routing / access gating** | One place defines "what’s public, what’s locked, what unlocks what." | When gating is duplicated in code and docs. | sot_index.json (or modules registry) includes `public: true` for 1–3 and `unlocksAfter: moduleId`; code reads from same source. |
| 8 | **Evaluation rubric + LLM-as-judge (optional)** | Rubrics reduce variance; judge scales checks. | When rubric is too vague or judge has no ground truth. | eval_rubric.md: dimensions (e.g. CTA clarity, tone, lietuviškos), levels, pass threshold; optional: 1–2 heuristics (e.g. "CTA contains next module name"). |
| 9 | **Skill/section under ~500 lines** | Keeps single-load context manageable; details in references. | When the 500-line cap forces over-splitting (then one main + refs). | Keep SKILL.md / key rules under 500 lines; move details to references/ or linked docs. |
| 10 | **Trigger-based optimization** | Only compact/mask when approaching limit. | When triggers are too late (e.g. 95%) or too early (e.g. 40%). | Document trigger: "When total context (files opened) > N pages or ~70% of typical window, summarize or load by section." |
| 11 | **Place critical info at edges** | Start and end of context get more attention. | When structure is flat and long. | In every SOT doc: "Summary / key decisions at top; next steps / checklist at bottom." |
| 12 | **Done criteria + QA check per change** | Prevents "done" meaning "code merged" without verification. | When QA is generic. | Every implementation step below has "Done criteria" and "Test/QA check"; tie to RELEASE_QA_CHECKLIST or TEST_REPORT. |

---

## 3. Mapping: our pattern → repo pattern → target pattern

| Our current pattern | Repo pattern | Recommended target pattern |
|--------------------|--------------|-----------------------------|
| SOT in orchestrator table only; content in 2+ markdown files + JSON | Single SOT per concern; progressive disclosure (index → full load) | **sot_index.json**: registry of modules/slides with `sotPath`, `description`; agents load full SOT only when task scope matches. |
| Gating: `DISABLE_MODULE_LOCK` + `progress.completedModules` in code | Explicit routing; access rules in one place | **sot_index.json** (or derived from modules.json): `publicModules: [1,2,3]`, `unlocksAfter: { 4: 3, 5: 4, 6: 5 }`; UI/agents read same contract. |
| "What next?" in CTA copy and various docs | Plan persistence; next step explicit | **sot_index.json** or small **routing** section: `nextStepAfterModule: { 1: "module", 2: "module", 3: "quiz", ... }`; CTA text can be generated or validated from this. |
| No context size guidance for agents | Context budget; compaction at ~70–80% | **context_budget.md**: max doc size, "load only when," critical-info placement; optional compaction trigger in agent instructions. |
| Progress = localStorage only; no "memory" concept | Memory layers (working / short-term / long-term) | **memory_schema.md**: session notes (current task, last file) vs long-term (release decisions, patterns); optional MEMORY.md or release notes. |
| QA = human checklist only | Evaluation rubric; LLM-as-judge or heuristics | **eval_rubric.md**: dimensions (CTA, tone, lietuviškos, links); pass threshold; optional script/heuristic (e.g. "CTA contains next target"). |
| Many development docs, no index | Skill index with descriptions; load by relevance | **docs/development/README.md** (or CONTEXT_ENGINEERING_INDEX.md): list of key docs + one-line description + "when to read"; agents load by trigger. |

---

## 4. Target architecture v0.1 (text schema + files)

```
┌─────────────────────────────────────────────────────────────────────────┐
│                        PROMPTŲ ANATOMIJA – CONTEXT LAYERS                 │
├─────────────────────────────────────────────────────────────────────────┤
│  SOT LAYER                                                                │
│  • sot_index.json          ← Module/slide registry, SOT paths, gating    │
│  • turinio_pletra.md       ← Moduliai 1–3 (content truth)                │
│  • turinio_pletra_moduliai_4_5_6.md  ← Moduliai 4–6                      │
│  • CONTENT_MODULIU_ATPAZINIMAS.md   ← Where "Modulis X" means what       │
│  • src/data/modules.json   ← UI data (derived from content; DATA_AGENT)   │
├─────────────────────────────────────────────────────────────────────────┤
│  ROUTING / ACCESS                                                         │
│  • sot_index.json: publicModules [1,2,3], unlocksAfter {4:3, 5:4, 6:5}   │
│  • nextStepAfterModule: 1→module, 2→module, 3→quiz, 4→5→6→certificate   │
│  • Single source for "what’s locked" (code reads from here or sync)     │
├─────────────────────────────────────────────────────────────────────────┤
│  CONTEXT BUDGET (agents)                                                  │
│  • context_budget.md       ← Max sizes, load-only-when, placement       │
│  • .cursor/rules stay minimal; link to context_budget.md                  │
├─────────────────────────────────────────────────────────────────────────┤
│  MEMORY (conventions, not DB)                                             │
│  • memory_schema.md        ← What = session notes vs long-term          │
│  • Optional: docs/development/MEMORY.md or release_notes/               │
├─────────────────────────────────────────────────────────────────────────┤
│  EVALUATION                                                               │
│  • eval_rubric.md          ← Dimensions, levels, pass threshold         │
│  • RELEASE_QA_CHECKLIST.md ← Stays; can reference eval_rubric            │
│  • Optional: 1–2 heuristics (e.g. CTA contains next target)              │
└─────────────────────────────────────────────────────────────────────────┘
```

**File/component mapping:**

| Component | Current | Target v0.1 |
|-----------|---------|-------------|
| Module list / gating | `modules.json` + `ModulesPage.tsx` (locked set from progress) | Keep; add optional **sot_index.json** as source of truth for "what is public" and "what unlocks what" (can sync to modules.json or stay doc-only). |
| Progress | `progress.ts` + localStorage | Unchanged. |
| Agent "which file to open" | Orchestrator rule table | Orchestrator + **sot_index.json** (and context_budget.md) so agents load by task. |
| Content registry | Scattered (CONTENT_MODULIU_ATPAZINIMAS, turinio_pletra*) | **sot_index.json**: moduleId, title, sotPath, description, public, unlocksAfter. |
| Evaluation | RELEASE_QA_CHECKLIST only | **eval_rubric.md** for content/UX; checklist remains for deployment. |

---

## 5. Implementation plan (2 weeks)

### Day 1–2: Quick wins (no code break)

| Step | Action | Done criteria | Test/QA check |
|------|--------|----------------|---------------|
| 1.1 | Add **context_budget.md** (see Artifacts) under `docs/development/`. | File exists; referenced in agent-orchestrator or CONTEXT_ENGINEERING doc. | Agent instruction "read context_budget when context grows" works. |
| 1.2 | Add **memory_schema.md** (see Artifacts). | File exists; team knows "session notes" vs "long-term." | One release note or MEMORY note written per schema. |
| 1.3 | Add **eval_rubric.md** (see Artifacts). | File exists; RELEASE_QA_CHECKLIST links to it for "content/UX quality." | One manual pass on one module using rubric. |

### Week 1: Stabilisation

| Step | Action | Done criteria | Test/QA check |
|------|--------|----------------|---------------|
| 2.1 | Create **sot_index.json** (see Artifacts) with modules 1–6, SOT paths, public, unlocksAfter, nextStep. | JSON valid; all 6 modules present; paths match repo. | `node -e "require('./docs/development/context-engineering/sot_index.json')"` (or script) runs. |
| 2.2 | Document in orchestrator (or AGENT_ORCHESTRATOR.md): "For module/slide scope, prefer sot_index.json; load full SOT only when editing that module." | Doc updated. | Agent task "change Modulio 4 skaidrė 4.1" uses index then loads turinio_pletra_moduliai_4_5_6. |
| 2.3 | Add **docs/development/context-engineering/README.md** listing context_budget, memory_schema, eval_rubric, sot_index and "when to use." | File exists. | New dev finds "where is SOT index?" in &lt; 1 min. |

### Week 2: Refactor only if ROI > risk

| Step | Action | Done criteria | Test/QA check |
|------|--------|---------------|---------------|
| 3.1 | **Optional:** Wire ModulesPage gating from sot_index (e.g. read publicModules / unlocksAfter from JSON or generated constant). | If done: build passes; production gating unchanged (1–3 public, 4–6 locked by progress). | `npm run build`; manual: 3 moduliai atrakinti, 4–6 užrakinti when 3 not completed. |
| 3.2 | **Optional:** One heuristic from eval_rubric (e.g. "CTA contains next module name") as script or CI step. | If done: script runs in CI or pre-commit; no false positives on current content. | Run script on current CTA copy; fix if needed. |
| 3.3 | **Do not** rewrite modules.json structure or merge turinio_pletra into one file in this phase. | N/A | Avoid large content/JSON refactors. |

---

## 6. Pitfalls (top 3) and how to avoid them

| Pitfall | Mitigation |
|---------|------------|
| **sot_index.json and modules.json drift** | Treat sot_index as the registry for "where is truth"; modules.json stays UI data. Either (a) generate modules.json from sot_index + content (later), or (b) document "sot_index = agent/SOT; modules.json = app; sync by hand on release." Do not maintain two sources of module list without a clear owner. |
| **Over-engineering memory** | We are not building a vector DB. memory_schema.md = conventions (session notes vs release notes). One MEMORY.md or release_notes/ folder is enough for v0.1. Skip "long-term memory" infra until we have a real need. |
| **Evaluation rubric ignored** | Tie eval_rubric to a concrete moment: e.g. "Before release, one person runs eval_rubric on one module and logs result in TEST_REPORT or changelog." Optional: one automated check (e.g. lietuviškos or CTA pattern) so rubric is not only manual. |

---

## 7. Artifacts (templates to drop in)

All artifacts live under **`docs/development/context-engineering/`** so they stay together.

| Artifact | Purpose |
|----------|---------|
| **context_budget.md** | Context size and load rules for agents. |
| **sot_index.json** | Module/slide registry, SOT paths, gating, next step. |
| **memory_schema.md** | What counts as session notes vs long-term. |
| **eval_rubric.md** | Dimensions, levels, pass threshold; optional LLM-as-judge note. |

See the files in that folder. Adjust paths (e.g. `sotPath`) to match your repo.

---

## 8. Assumptions and what would change recommendations

| Assumption | If false, then |
|------------|-----------------|
| We keep two content SOTs (Moduliai 1–3 vs 4–6). | If you merge into one file later, sot_index.json just points to one path; rest unchanged. |
| Gating stays in app (progress + completedModules). | If you move gating to server, sot_index can still define "public" and "unlocksAfter" for API. |
| No backend for memory. | If you add a backend, memory_schema becomes the contract for what to store where. |
| Evaluation stays human-led. | If you add LLM-as-judge, eval_rubric.md is the rubric; add a small script that calls API and writes scores. |

---

**CHANGES:**  
- Added `docs/development/CONTEXT_ENGINEERING_AGENT_SKILLS_IMPLEMENTATION.md` (this doc).  
- To add: `docs/development/context-engineering/` with context_budget.md, sot_index.json, memory_schema.md, eval_rubric.md.

**CHECKS:**  
- None yet (doc-only). After artifacts are in place: build + optional schema validation of sot_index.json.

**RISKS:**  
- sot_index.json may drift from modules.json if not synced.  
- Team may skip eval_rubric if not tied to release gate.

**NEXT:**  
- Create `docs/development/context-engineering/` and the four artifact files.  
- Link this doc from agent-orchestrator or AGENT_ORCHESTRATOR.md.  
- Optionally add one heuristic (e.g. CTA or lietuviškos) to CI or pre-commit.
