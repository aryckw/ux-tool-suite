# company-ux-suite — Major Feature Roadmap

## 1. Objective

Deliver three coordinated Agent Skills — designer, prototyper, builder — over a
shared knowledge kernel, so that a UX concept can travel the full fidelity ladder
(wireframe → mockup → interactive prototype → static, verified build) entirely
inside an organization's sanctioned component library, coordinated by one
progressively-enriched Concept Spec. The current release consolidates the locked
baseline of record — **v1.0 + v2.1 + R1** — into a buildable, reproducible
pipeline whose delivered output is always static, deterministic, and
verification-gated, with generative UI confined to the prototype loop. The
immediate next phase integrates the organization's **actual** UI suite (Phase 0),
replacing the mock library the pipeline was de-risked against.

## 2. Development Workflow

The steps for taking a phase from selection to merge:

1. **Select** the next phase from the Execution Sequence (§4); confirm its phase
   number is stable and untouched.
2. **Confirm spec coverage in `docs/sdd.md`.** Before implementing, verify the SDD
   has a component specification covering this phase. If it does not, add the spec
   section *first* and only then write code. No major feature is implemented
   without a specification in `docs/sdd.md`.
3. **Implement** following the per-file workflow in `docs/AGENT_PROMPT.md` (quote
   the spec, check dependencies, check invariants, write, type-check, verify).
4. **Verify** against the phase's acceptance criteria (§6): run `pytest` for the
   `ux_suite` library, schema-validate both example documents, and confirm each
   architectural invariant holds. Architectural invariants: see `docs/sdd.md §2`.
5. **Sync** canonical resources into the skill bundles with
   `python scripts/sync_shared.py` (and, after R1, `--check` in CI).
6. **Version coupling.** If the work changes architecture, types, invariants, or
   component contracts, bump `docs/sdd.md` and `docs/AGENT_PROMPT.md` versions
   **together in the same commit**, and append a row to the SDD changelog.
7. **Update status** in §3 of this roadmap (Status + Completion notes).
8. **Merge** once acceptance criteria pass and the four canonical docs are
   consistent.

## 3. Roadmap Status

| Phase | Capability | Status | Completion notes |
|-------|-----------|--------|------------------|
| 0 | Internal library ingestion — integrate the organization's actual UI suite (real Knowledge Pack + end-to-end pipeline proof) | In progress | Schema + extraction methodology defined and **de-risked against the mock** (`reference-lib/`). Mock de-risking is complete; **real-suite ingestion is NOT done.** Actionable when `/internal_ui_stack` is mounted in a local agentic session; the mock is demoted to an offline-CI fallback fixture on completion. |
| 0.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after the real suite is integrated: re-point references to the real pack (mock kept as fallback), refresh Knowledge Pack examples, confirm SDD + agent-prompt versions stay aligned. |
| 1 | Foundational shared kernel (schemas, `ux_suite` lib, workspace/scripts, elicitation protocol, shared docs) | Needs review | Built at the v1.0 baseline against the **mock** library; schema is `1.0`. May need updates once the real suite is ingested (Phase 0). R1 upgrades (2.0 schema, `concepts/` split, gates) pending in Phase 5. |
| 2 | `company-ux-designer` skill (SVG wireframes + HTML/Tailwind mockups + Concept Spec authoring) | Needs review | `SKILL.md` present and synced; produces specs to `mockup`. Built against the **mock** library; revisit after the real suite is ingested (Phase 0). |
| 2.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 3 | `company-ux-prototyper` skill (MF2 micro-frontend prototype) | Needs review | MF2 path implemented; generative fast path is Phase 6. Built against the **mock** library; revisit after the real suite is ingested (Phase 0). |
| 3.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 4 | `company-ux-builder` skill (static, Dockerized, Playwright-gated build) | Needs review | Static build + e2e/visual/a11y scaffolding; freeze/provenance is Phase 5. Built against the **mock** library; revisit after the real suite is ingested (Phase 0). |
| 4.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 5 | R1 remediation (schema 2.0 + `migrate.py`, `concepts/` tracked split, single `component_gaps[]`, pack-drift gate, props validation, build freeze + `build_provenance`, escape hatch, `sync --check` + CI) | Planned | Consolidates gap fixes G1–G10. Net schema/directory/lifecycle changes. |
| 5.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after R1 lands; bump SDD + agent-prompt versions together. |
| 6 | v2.1 generative-accelerated prototyping (`lang-core` due-diligence spike, render-contract compiler, `generative_eligible` allowlist, capture gate) | Planned | Default fast prototype path; gated by §8 spike. Builder stays static-only. |
| 6.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after the generative path lands. |
| 7 | Conversational Web Front Door — chat web client + orchestration backend over the kernel/skills (**resolves G16**) | Planned | New orchestration + presentation subsystem (SDD §1.1, §4.7–4.11, INV-12…15). MVP runs against the designer mockup output; live preview depends on Phase 6; build-from-chat depends on Phase 0 + Phase 5 + a defined execution sandbox (G11). |
| 7.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after the front door lands. |

> Phase numbers are stable identifiers. Execution sequence is stated separately
> below. Reconciliation phases use decimal identifiers so feature-phase numbers
> never shift.

> ASSUMPTION: Phases 1–4 exist (schemas, the `ux_suite` library, the three
> `SKILL.md` bundles, example workspaces) but were built and validated against the
> **mock** library, so they are marked **Needs review** — they may need updating
> once the organization's actual suite is ingested in Phase 0. A full `pytest`
> pass was not re-run as part of doc generation — confirm before relying on the
> status.

## 4. Execution Sequence

Built so far (against the mock library; **needs review** after Phase 0):
Phase 1 → Phase 2 → Phase 3 → Phase 4.

Remaining: **Phase 0 → Phase 5 → Phase 6 → Phase 7**, with a reconciliation phase
after each.

- The foundational kernel (Phase 1) preceded all feature skills because the
  Concept Spec and Knowledge Pack schemas plus the `ux_suite` library are the
  contracts every skill consumes.
- **Phase 0 (real-library ingestion) is the next phase**, even though its number
  is lowest. The three skills were built and de-risked against the mock library;
  Phase 0 could only run once the organization's actual UI suite became available
  (mounted at `/internal_ui_stack` during a local agentic session). Phase numbers
  are stable identifiers — this is exactly why execution order is stated
  separately from numbering.
- **Phase 0 precedes R1 (Phase 5)** so that R1 hardens the 2.0 schema, lifecycle,
  gates, and reproducibility against the **real** Knowledge Pack rather than the
  mock. The mock library is demoted to an offline-CI fallback fixture on Phase 0
  completion.
- **R1 (Phase 5) precedes the generative path (Phase 6)** because Phase 6 depends
  on the 2.0 schema, the single `component_gaps[]` model, the `generative_eligible`
  allowlist, and the capture gate that R1 introduces.
- **The Front Door (Phase 7) is last** because its full experience composes the
  others: the MVP (7a/7b) needs only the designer (Phases 1–2), the live preview
  (7c) needs the generative path (Phase 6), and build-from-chat (7d) needs the real
  pack (Phase 0), the build freeze/gates (Phase 5), and a defined execution
  sandbox (G11). It adds no contract — it orchestrates the existing pipeline.

## 5. Contract Definitions

This is a contract-coordinated system. The central contracts (full technical
detail in `docs/sdd.md §3`):

- **Concept Spec** — `shared/schemas/concept-spec.schema.json`. The inter-skill
  contract, enriched monotonically along the fidelity ladder. Ownership by stage:

  | Stage transition | Owning skill | Precondition (enforced in `ux_suite/spec.py`) |
  |------------------|--------------|-----------------------------------------------|
  | `draft → wireframe` | designer | `intent.goal` + `information_architecture.screens` populated |
  | `wireframe → mockup` | designer | `composition` + `component_bindings` populated |
  | `mockup → interactive_prototype` | prototyper | `assets.prototype.path` set (+ `generative.captured` if generative) |
  | `interactive_prototype → buildable` | builder | `build_directives` populated; no `component_gaps[]` with `status: flagged` |
  | `buildable → built` | builder | `assets.build.path` set (frozen artifact under `concepts/<id>/build/`) |

- **Knowledge Pack** — `shared/schemas/knowledge-pack.schema.json`. The
  constitution; produced by Phase 0; the sole source of component knowledge.

- **OpenUI-Lang render contract** (Phase 6) — `render_artifact` + library system
  prompt, **derived** from `component_bindings` by `ux_suite/render_contract.py`.
  Hard-fails (`ComponentGapError`) on any unregistered/ineligible component.

- **Generative eligibility allowlist** (Phase 5/6) —
  `shared/generative-allowlist.yaml`. Human-reviewed, default-deny.

## 6. Phased Feature Plan

### Phase 0 — Internal library ingestion (integrate the organization's actual UI suite)
- **Goal:** ingest the organization's **actual** UI suite into a schema-valid
  Knowledge Pack and prove the full pipeline runs against it, replacing the mock.
- **Acceptance criteria:** the suite is read read-only from `/internal_ui_stack`
  during a local agentic session; the emitted pack validates against
  `knowledge-pack.schema.json`; every component carries `source_refs` provenance;
  unknown facts are recorded in `coverage_report[].missing` with low confidence
  (never invented); the designer → prototyper → builder pipeline runs end-to-end
  against the real pack with **no skill-code change**; the mock library
  (`reference-lib/` + `knowledge-pack.mock-lib.json`) is kept only as an
  **offline-CI / dev fallback** fixture (the real pack becomes the default runtime
  source).
- **Completed items:** _(mock de-risking only — the mock pipeline runs; real-suite
  ingestion is pending the mount.)_
- **Verification steps:** validate the produced pack; run a sample concept through
  all three skills against the real pack; confirm the real pack is the default
  source (mock retained only as fallback) and no skill code changed.
- **Out of scope (remain open R2 gaps):** single design-token artifact (G13),
  adapter / anti-corruption layer (G14), Knowledge Pack lifecycle + drift (G3).

### Phase 1 — Foundational shared kernel
- **Goal:** establish the schemas, the `ux_suite` Python library, the workspace
  layout, the scripts, the elicitation protocol, and the shared reference docs.
- **Acceptance criteria:** both example documents validate; `ux_suite` tests pass;
  `new_concept.py` creates a valid draft workspace; `sync_shared.py` makes each
  skill bundle self-contained; stage-advance preconditions are enforced.
- **Completed items:** schemas, `spec.py` / `knowledge.py` / `workspace.py`,
  `new_concept.py`, `sync_shared.py`, elicitation protocol, shared docs.
- **Verification steps:** `pip install -e ".[dev]" && pytest`.
- **Status:** Needs review — built against the mock library; revisit once Phase 0 lands.

### Phase 2 — company-ux-designer
- **Goal:** produce SVG wireframes + HTML/Tailwind mockups and author the Concept
  Spec to `mockup`.
- **Acceptance criteria:** spec validates; every composition region has a
  component binding or a recorded `component_gaps[]` entry; mockups use only
  library tokens (no ad-hoc hex); `intent.constraints.a11y_target` set; all
  assumptions surfaced in the summary.
- **Completed items:** `company-ux-designer/SKILL.md`.
- **Verification steps:** run the designer against the mock library on a sample
  concept; validate the resulting spec.
- **Status:** Needs review — built against the mock library; revisit once Phase 0 lands.

### Phase 3 — company-ux-prototyper
- **Goal:** produce a real, running interactive prototype from a Concept Spec.
- **Acceptance criteria:** `pnpm install && pnpm dev` brings up shell + all
  remotes; shell composes ≥1 remote; all spec flows are navigable; spec advanced
  to `interactive_prototype` with `assets.prototype` populated.
- **Completed items:** `company-ux-prototyper/SKILL.md` (MF2 path).
- **Verification steps:** scaffold the MF2 monorepo for a sample concept; smoke
  check (package.json/vite.config present, federation lists remotes).
- **Status:** Needs review — built against the mock library; revisit once Phase 0 lands.

### Phase 4 — company-ux-builder
- **Goal:** produce a static, Dockerized, Playwright-gated build bound to the real
  library.
- **Acceptance criteria:** all e2e tests green; visual baselines established;
  `docker compose up` and `pnpm preview` both serve the app; a11y checks pass at
  the spec's WCAG target; spec advanced to `built` with `assets.build` populated.
- **Completed items:** `company-ux-builder/SKILL.md` (static path).
- **Verification steps:** generate the build for a sample concept; run the
  Playwright e2e/visual/a11y suite.
- **Status:** Needs review — built against the mock library; revisit once Phase 0 lands.

### Phase 5 — R1 remediation
- **Goal:** apply the net directory + schema + lifecycle changes that close
  gaps G1–G10 and make the pipeline reproducible and versioned.
- **Acceptance criteria:** a 1.0 example spec migrates cleanly to 2.0 and
  validates with `additionalProperties:false`; a tracked `concepts/<id>/` is
  produced while `workspaces/<id>/` is gitignored; a bindings-vs-pack mismatch is
  caught by the pack-drift gate; a `flagged` gap blocks `built` while an
  `escape_hatch` gap (with a decision) passes; a re-run build reproduces from the
  frozen source with a stable snapshot baseline; `sync_shared.py --check` fails on
  an injected drift.
- **Completed items:** _(none — planned.)_
- **Verification steps:** new tests for `migrate.py`, the pack-drift gate, the gap
  gate, build reproducibility, and `sync --check`.

### Phase 6 — v2.1 generative-accelerated prototyping
- **Goal:** add the generative fast prototype path drawn from the company library,
  retaining the MF2 path as opt-in and keeping the builder static-only.
- **Acceptance criteria:** the `lang-core` due-diligence spike is recorded
  (`docs/spike-lang-core.md` + DECISIONS entry); the static pipeline is unchanged
  and still green; the generative path renders a live preview of a sample concept
  using **only registered components**; a deliberate gap produces a recorded
  `component_gaps[]` entry + graceful fallback (no crash, no invented component);
  a `generative_accelerated` prototype graduates to a `static` build with no
  model/registration/`render_artifact` present in the delivered output.
- **Completed items:** _(none — planned; gated by the spike.)_
- **Verification steps:** run the spike; exercise the render-contract compiler and
  `ComponentGapError`; confirm graduation drops all generative artifacts.

### Phase 7 — Conversational Web Front Door
- **Goal:** a chat web client + orchestration backend where a user describes a UI
  in natural language and sees it rendered with the organization's own components,
  iterating conversationally and promoting up the fidelity ladder on request. An
  orchestration + presentation layer over the kernel and skills — no new contract.
  Specified in SDD §1.1, §4.7–4.11, INV-12…15. **Resolves G16.**
- **Sub-steps (lettered; never collide with phase numbers):**
  - **7a — Orchestration kernel:** FastAPI `FrontDoor` service, `Session` model,
    concept lifecycle over `ux_suite`, `AgentRunner` (one headless skill run), WS
    streaming. *Depends: Phases 1–2.*
  - **7b — Chat client MVP:** two-pane SPA; conversation + binding/gap/stage cards;
    **mockup preview** (designer HTML/Tailwind, no model). *Depends: 7a.*
  - **7c — Live generative preview:** wire the prototyper generative fast path into
    the preview; near-instant re-render on binding edits. *Depends: Phase 6.*
  - **7d — Stage promotion + build from chat:** "make it clickable" (MF2) and
    "ship it" (static, gated build) as explicit gated actions with streamed gate
    results. *Depends: Phase 0 + Phase 5 + G11 sandbox.*
  - **7e — Intent classification (resolves G16):** robust turn routing
    (`new_concept`/`refine`/`advance`/`answer`/`question`/`undo`/`unknown`),
    confidence-gated disambiguation, quick-reply chips.
  - **7f — Sessions/persistence/multi-concept:** concurrency lock (touches G18),
    auth seam (out of scope for v1 single-tenant/local).
- **Acceptance criteria:** typing a description bootstraps a concept and streams a
  designer-authored mockup; refinements iterate at-stage without bumping `version`
  (INV-12); gaps surface as cards writing a `component_gaps[]` decision (INV-5);
  the live preview is prototype-loop only (INV-14); `advance → built` walks the
  ladder one rung at a time (INV-4) and yields a static build with no model in the
  bundle (INV-6); all concept mutation goes through `ux_suite` (INV-13); the
  classifier proposes but never enforces gates (INV-15); expensive/destructive
  intents require explicit confirmation.
- **Completed items:** _(none — planned; SDD §1.1/§4.7–4.11 specified.)_
- **Verification steps:** classifier eval set `(utterance, state) → IntentResult`
  scored hardest on `advance→built` and `new vs refine` (an instance of G23);
  end-to-end: a concept walks draft→built from chat; assert no
  model/registration/`render_artifact` in the delivered build (INV-6).
- **Out of scope (v1):** auth / multi-tenant isolation; an `undo` taxonomy entry is
  optional for the first cut (restores a snapshot as a new version per INV-3/INV-12).

### Reconciliation Phase Template (applies to all X.5 phases)
- **Goal:** realign the four canonical documents (README, roadmap, SDD, agent
  prompt) after a run of feature work.
- **Acceptance criteria:** the agent-prompt version matches the SDD version; no
  phase-numbering collisions; no stale sections; each information type has a
  single home (mission/domain → README; phases/status → roadmap; architecture/
  invariants/types → SDD; agent behavior → agent prompt).
- **Verification steps:** complete the existing-projects audit worksheet rather
  than re-deriving these checks here.

Phases 2.5 / 3.5 / 4.5 were satisfied by the initial generation of this canonical
doc set (2026-06). Phases 0.5 / 5.5 / 6.5 / 7.5 are planned per the template above.

## 7. Decisions and Open Questions

### Decisions (from `DECISIONS.md`; rationale abbreviated)
- **Three skills over a shared kernel** (D3) — distinct success criteria,
  toolchains, and triggering intents.
- **One progressively-enriched Concept Spec as the contract** (D4) — single source
  of truth across stateless agentic sessions.
- **Static/generative boundary is hard** (D18/D24) — generative UI is a
  prototype-only accelerator; every build is static and gated; no model ships.
- **Knowledge Pack stays canonical; generative registration is derived** (D19/D20)
  — `render_artifact` is compiled from bindings, never hand-authored.
- **Tracked `concepts/` vs. ephemeral `workspaces/`** (D28) and **frozen build
  artifact with provenance** (D29) — reproducible, reviewable builds.
- **One gap model** (D33) — `component_gaps[]` with status + decision; the boolean
  `gap` flag is removed.
- **`generative_eligible` is a default-deny human allowlist** (D35); a sanctioned
  **escape hatch** (D36) permits an isolated, labeled, logged one-off component,
  excluded from the certifiable-library claim.
- **Adopt `@openuidev/lang-core` (pinned, MIT)** (D22) — verified by the §8 spike,
  not forked.
- **Real-suite integration folds into Phase 0** (not a new phase number) — the
  expanded Phase 0 ingests the organization's actual UI suite and proves the
  pipeline end-to-end; the mock library (`reference-lib/`) was only a de-risking
  stand-in and is demoted to an offline-CI fallback fixture on completion (the
  real pack becomes the default source). Sequenced **before R1** so the hardening
  work targets the real pack. *Rationale:* preserves phase-number stability while
  making real integration the next actionable phase.
- **Phases 1–4 are marked "Needs review"** — they were built and validated against
  the mock library and may need updating once the real suite is ingested in
  Phase 0.
- **A Conversational Web Front Door is its own subsystem (Phase 7), not a skill**
  — a chat web client + orchestration backend over the existing kernel/skills,
  adding no new contract and no component knowledge. It is the concrete resolution
  of G16. The within-stage **snapshot-cadence rule is locked** (INV-12): iterating
  at a stage is unbounded and never bumps `version`; snapshots occur only on
  `advance_stage` or an explicit user checkpoint. *Rationale:* the suite already
  coordinates through one on-disk Concept Spec across stateless sessions; the front
  door hosts those sessions behind a conversation and surfaces what the skills
  write, rather than introducing a parallel source of truth.

### Open questions (gap register; R2 candidates)
G11 CI/execution environment *(forced into scope by Phase 7d's agent sandbox)* ·
G12 MF2 cross-remote state & screen→remote mapping · G13 single design-token
artifact · G14 `lang-core` anti-corruption layer · G15 mock-data contract · G16
front-door intent classification **→ addressed by Phase 7 (`IntentClassifier`)** ·
G17 keyboard/focus a11y beyond axe · G18 id derivation & concurrency *(touched by
Phase 7f's per-concept lock)* · G19 ingested-context retention/classification
*(touched by Phase 7's untrusted-input handling)* · G20 SBOM/license compliance on
builds · G22 failure taxonomy · G23 machine-checkable per-skill acceptance
*(classifier eval set is an instance)* · G25 over-library-capability behavior.
See `files/ux-suite-GAP-ANALYSIS.md`.
