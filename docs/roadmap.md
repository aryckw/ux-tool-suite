# company-ux-suite — Major Feature Roadmap

## 1. Objective

Deliver three coordinated Agent Skills — designer, prototyper, builder — over a
shared knowledge kernel, so that a UX concept can travel the full fidelity ladder
(wireframe → mockup → interactive prototype → static, verified build) entirely
inside an organization's sanctioned component library, coordinated by one
progressively-enriched Concept Spec. The current release consolidates the locked
baseline of record — **v1.0 + v2.1 + R1** — into a buildable, reproducible
pipeline whose delivered output is always static, deterministic, and
verification-gated, with generative UI confined to the prototype loop.

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
| 0 | Internal library ingestion (Phase 0 Knowledge Pack extraction) | Planned | Schema + extraction methodology defined; awaits `/internal_ui_stack` mount. Mock library (`reference-lib/`) stands in. |
| 1 | Foundational shared kernel (schemas, `ux_suite` lib, workspace/scripts, elicitation protocol, shared docs) | Done (v1.0) | Built at the v1.0 baseline; schema is `1.0`. R1 upgrades (2.0 schema, `concepts/` split, gates) pending in Phase 5. |
| 2 | `company-ux-designer` skill (SVG wireframes + HTML/Tailwind mockups + Concept Spec authoring) | Done (v1.0) | `SKILL.md` present and synced; produces specs to `mockup`. |
| 2.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 3 | `company-ux-prototyper` skill (MF2 micro-frontend prototype) | Done (v1.0) | MF2 path implemented; generative fast path is Phase 6. |
| 3.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 4 | `company-ux-builder` skill (static, Dockerized, Playwright-gated build) | Done (v1.0) | Static build + e2e/visual/a11y scaffolding; freeze/provenance is Phase 5. |
| 4.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Done | Folded into the initial canonical-doc generation (2026-06). |
| 5 | R1 remediation (schema 2.0 + `migrate.py`, `concepts/` tracked split, single `component_gaps[]`, pack-drift gate, props validation, build freeze + `build_provenance`, escape hatch, `sync --check` + CI) | Planned | Consolidates gap fixes G1–G10. Net schema/directory/lifecycle changes. |
| 5.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after R1 lands; bump SDD + agent-prompt versions together. |
| 6 | v2.1 generative-accelerated prototyping (`lang-core` due-diligence spike, render-contract compiler, `generative_eligible` allowlist, capture gate) | Planned | Default fast prototype path; gated by §8 spike. Builder stays static-only. |
| 6.5 | Spec Reconciliation — realign README, roadmap, SDD, and agent prompt | Planned | Run after the generative path lands. |

> Phase numbers are stable identifiers. Execution sequence is stated separately
> below. Reconciliation phases use decimal identifiers so feature-phase numbers
> never shift.

> ASSUMPTION: Phases 1–4 are recorded as "Done (v1.0)" from the presence of the
> schemas, the `ux_suite` library, the three `SKILL.md` bundles, and example
> workspaces. A full `pytest` pass was not re-run as part of doc generation —
> confirm before relying on the status.

## 4. Execution Sequence

Phase 1 → Phase 2 → Phase 3 → Phase 4 → Phase 5 → Phase 6
(with Phase 0 runnable at any point once `/internal_ui_stack` is mounted, and a
reconciliation phase after each feature phase).

- The foundational kernel (Phase 1) precedes all feature skills because the
  Concept Spec and Knowledge Pack schemas plus the `ux_suite` library are the
  contracts every skill consumes.
- **Phase 0 is order-independent**: the suite is de-risked against the mock
  library, so ingestion of the real library can run before or after the feature
  skills without changing skill code.
- **R1 (Phase 5) precedes the generative path (Phase 6)** because Phase 6 depends
  on the 2.0 schema, the single `component_gaps[]` model, the `generative_eligible`
  allowlist, and the capture gate that R1 introduces.

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

### Phase 0 — Internal library ingestion
- **Goal:** extract the internal React library into a schema-valid Knowledge Pack.
- **Acceptance criteria:** the emitted pack validates against
  `knowledge-pack.schema.json`; every component carries `source_refs` provenance;
  unknown facts are recorded in `coverage_report[].missing` with low confidence
  (never invented); skills run against the real pack with **no skill code change**.
- **Completed items:** _(none — methodology and schema defined; mock library
  stands in via `reference-lib/`.)_
- **Verification steps:** validate the produced pack; run the mock pipeline
  unchanged after swapping in the real pack.

### Phase 1 — Foundational shared kernel
- **Goal:** establish the schemas, the `ux_suite` Python library, the workspace
  layout, the scripts, the elicitation protocol, and the shared reference docs.
- **Acceptance criteria:** both example documents validate; `ux_suite` tests pass;
  `new_concept.py` creates a valid draft workspace; `sync_shared.py` makes each
  skill bundle self-contained; stage-advance preconditions are enforced.
- **Completed items:** schemas, `spec.py` / `knowledge.py` / `workspace.py`,
  `new_concept.py`, `sync_shared.py`, elicitation protocol, shared docs.
- **Verification steps:** `pip install -e ".[dev]" && pytest`.

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

### Phase 3 — company-ux-prototyper
- **Goal:** produce a real, running interactive prototype from a Concept Spec.
- **Acceptance criteria:** `pnpm install && pnpm dev` brings up shell + all
  remotes; shell composes ≥1 remote; all spec flows are navigable; spec advanced
  to `interactive_prototype` with `assets.prototype` populated.
- **Completed items:** `company-ux-prototyper/SKILL.md` (MF2 path).
- **Verification steps:** scaffold the MF2 monorepo for a sample concept; smoke
  check (package.json/vite.config present, federation lists remotes).

### Phase 4 — company-ux-builder
- **Goal:** produce a static, Dockerized, Playwright-gated build bound to the real
  library.
- **Acceptance criteria:** all e2e tests green; visual baselines established;
  `docker compose up` and `pnpm preview` both serve the app; a11y checks pass at
  the spec's WCAG target; spec advanced to `built` with `assets.build` populated.
- **Completed items:** `company-ux-builder/SKILL.md` (static path).
- **Verification steps:** generate the build for a sample concept; run the
  Playwright e2e/visual/a11y suite.

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
doc set (2026-06). Phases 5.5 / 6.5 are planned per the template above.

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

### Open questions (gap register; R2 candidates)
G11 CI/execution environment · G12 MF2 cross-remote state & screen→remote mapping
· G13 single design-token artifact · G14 `lang-core` anti-corruption layer · G15
mock-data contract · G16 front-door intent classification · G17 keyboard/focus
a11y beyond axe · G18 id derivation & concurrency · G19 ingested-context
retention/classification · G20 SBOM/license compliance on builds · G22 failure
taxonomy · G23 machine-checkable per-skill acceptance · G25 over-library-capability
behavior. See `files/ux-suite-GAP-ANALYSIS.md`.
