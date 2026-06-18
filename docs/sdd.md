# company-ux-suite — Software Design Document

**Version: 2.1**
**Status:** Covers the consolidated **v1.0 + v2.1 + R1** architecture and
architectural invariants for the whole suite, and specifies the **foundational
shared kernel** (roadmap Phase 1) in detail. Feature-skill internals (Phases
2–4), R1 remediation mechanics (Phase 5), and the generative path (Phase 6) are
referenced here and gain detailed component sections in `§4` as they are
implemented.

## Changelog

| Version | Notes |
|---------|-------|
| 1.0 | Initial specification — three Agent Skills over a shared kernel; static SVG → HTML/Tailwind → MF2 prototype → Dockerized, Playwright-gated build pipeline; one progressively-enriched Concept Spec. |
| 2.1 | Consolidated baseline of record. Folds in the v2.1 generative-accelerated prototyping direction (OpenUI-Lang, `runtime_mode`, hard static/generative boundary) and the R1 remediation package (schema `2.0` + `migrate.py`, tracked `concepts/` split, single `component_gaps[]`, pack-drift/capture gates, `build_provenance`, escape hatch, `sync --check`). This is the technical contract going forward. |

---

## 1. Architecture Overview

```
                          User utterance (Claude Code session)
                                       │
                                  ┌─────▼─────┐
                                  │  Intent   │  (thin, vendor-agnostic router)
                                  └─────┬─────┘
              ┌──────────────────┬──────┴───────┬──────────────────┐
              ▼                  ▼               ▼                  
     company-ux-designer  company-ux-prototyper  company-ux-builder   ← SKILL.md bundles
       (wireframe+mockup)   (generative | MF2)     (static, gated)     (self-contained,
              │                  │                    │                 synced from shared/)
              └────────┬─────────┴──────────┬─────────┘
                       │                     │
        reads ┌────────▼────────┐   reads/writes ┌──────────▼──────────┐
              │  Knowledge Pack │◄──────────────►│    Concept Spec     │
              │ (constitution)  │   (contract)   │ (versioned JSON,    │
              │ open-ui shape   │                │  monotonic ladder)  │
              └────────▲────────┘                └──────────┬──────────┘
                       │                                     │
              Phase 0 extraction                  ux_suite (Python helper lib)
              from /internal_ui_stack       spec · knowledge · workspace · migrate
                                                  render_contract (Phase 6)
                       │                                     │
        ┌──────────────┴───────────┐         ┌───────────────┴──────────────────┐
        │ shared/  (single source  │  sync   │ concepts/<id>/  (TRACKED baseline)│
        │ of truth) ──────────────►│ _shared │ workspaces/<id>/ (EPHEMERAL, .gi) │
        └──────────────────────────┘  .py    └───────────────────────────────────┘
```

**Rationale for the main choices:**

- **Python (3.11+) for the kernel** (D10) — schema validation, spec lifecycle, and
  scaffolding are deterministic tooling best served by a typed, well-tested
  helper library (`jsonschema`, `pytest`, `ruff`). Generated UI apps use the
  **pnpm/Vite/React/TypeScript** toolchain because the internal library is React.
- **Knowledge Pack in open-ui shape** (D1) — a formal, framework-agnostic
  definition of "what a component is," so component knowledge lives in data, not
  code.
- **One progressively-enriched Concept Spec** (D4) — a single, versioned,
  provenance-carrying file is the only reliable inter-skill contract across
  stateless agentic sessions.
- **Module Federation 2.0** (D6) for the MF2 prototype path; **OpenUI-Lang /
  `@openuidev/lang-core`** (D22) for the generative fast path, confined to the
  prototype loop. **Playwright + axe-core** (D8) for the build gates.
- **Canonical `shared/` synced into self-contained skill bundles** (D13) —
  reconciles Agent-Skills self-containment with a DRY shared kernel.

---

## 2. Architectural Invariants

The numbering below is **permanent**. If a rule here ever conflicts with running
code, the code is the bug. (This set is larger than the usual 3–7 because the SDD
consolidates three locked baselines; each rule is binary.)

- **INV-1: Knowledge Pack is the sole source of component knowledge.** No skill or
  module hardcodes component names, props, states, behaviors, or tokens; every
  component fact is read from a loaded, schema-valid Knowledge Pack. *Why:* keeps
  output faithful to the real design system and swappable at Phase 0.

- **INV-2: The Concept Spec is the only inter-skill contract.** Skills communicate
  solely by reading and writing the versioned `concept-spec.json`; no state passes
  between skills out-of-band. *Why:* stateless sessions need one durable contract.

- **INV-3: Enrichment is monotonic and snapshotted.** A stage may add or refine
  spec content but never silently drops a prior stage's content; every `version`
  bump first writes a snapshot to `spec/history/v{N}.json`. *Why:* preserves an
  auditable, reversible history.

- **INV-4: `fidelity_stage` advances exactly one step, only when preconditions
  hold.** Advancement follows the fixed ladder `draft → wireframe → mockup →
  interactive_prototype → buildable → built`; skipping or reordering is forbidden,
  and each target stage's preconditions must be met first. *Why:* guarantees each
  artifact rests on a complete predecessor.

- **INV-5: Every binding resolves to a real component or a recorded gap.** Each
  `component_bindings[].component` must exist in the *current* Knowledge Pack and
  its `props` must validate against that component's contract; any uncovered need
  is recorded in `component_gaps[]` — never silently omitted and never as a
  boolean flag. *Why:* output stays inside the certifiable library; gaps are
  visible.

- **INV-6: No model runs in a delivered build.** Generative UI exists only in the
  design/prototype loop on local host. No model, prompt, library registration, or
  `render_artifact` appears in any delivered build; every build is static,
  deterministic, and passes the e2e + visual-regression + a11y gates. *Why:* the
  delivered surface must be verifiable and certifiable.

- **INV-7: Generative rendering uses only allowlisted components.** The
  render-contract compiler emits only components whose effective
  `generative_eligible` is `true` in the human-reviewed, default-deny allowlist;
  it hard-fails (`ComponentGapError`) on any unregistered or ineligible component.
  *Why:* the model can never invent or smuggle in a component.

- **INV-8: Canonical and derived artifacts are separated.** `shared/` is the
  single source of truth; skill-bundle copies are generated by `sync_shared.py`
  and never hand-edited (each carries a generated banner); the OpenUI-Lang
  registration and `render_artifact` are compiled from canonical bindings, never
  hand-authored. *Why:* one source of truth; no drift.

- **INV-9: Tracked baseline vs. ephemeral working output.** The canonical concept
  source — spec, history, design, frozen build source, snapshots, logs,
  provenance — is version-controlled under `concepts/<id>/`; only throwaway
  prototype/build working output lives in the gitignored `workspaces/<id>/`.
  Delivered build source is a committed, frozen artifact carrying
  `build_provenance`. *Why:* reproducible, reviewable builds; stable baselines.

- **INV-10: Documents are migrated, then validated against a closed schema.** All
  Concept Spec and Knowledge Pack objects are closed (`additionalProperties:
  false`) except the reserved `sdaad`; every document is migrated to the current
  `schema_version` before it is validated. *Why:* no silent schema drift; clean
  upgrades.

- **INV-11: The `sdaad` object is reserved.** It remains unpopulated until the
  SDAAD integration is formally specified, and the keys `sdaad`,
  `coverage_report`, `component_bindings`, `design_principles`, and
  `knowledge_pack_ref` are not repurposed. *Why:* protects a future integration
  seam from collisions.

---

## 3. Global Types and Contracts

| Type / contract | Canonical source |
|-----------------|------------------|
| **Concept Spec** (JSON document; `schema_version` `2.0`) | `shared/schemas/concept-spec.schema.json` |
| **Knowledge Pack** (JSON document; `schema_version` `2.0`) | `shared/schemas/knowledge-pack.schema.json` |
| **Worked examples** | `shared/schemas/examples/*.json` |
| `FIDELITY_ORDER` (the stage ladder) | `shared/lib/ux_suite/spec.py` |
| `ConceptSpec` (load/validate/evolve/persist) | `shared/lib/ux_suite/spec.py` |
| `KnowledgePack` (load/query) | `shared/lib/ux_suite/knowledge.py` |
| `Workspace` (on-disk layout) | `shared/lib/ux_suite/workspace.py` |
| `migrate` (schema 1.0 → 2.0) — *Phase 5* | `shared/lib/ux_suite/migrate.py` |
| `render_contract` / `ComponentGapError` — *Phase 6* | `shared/lib/ux_suite/render_contract.py` |
| Elicitation entry shape (`stage/question/answer/status/timestamp`) | `shared/elicitation/elicitation-protocol.md` + `ConceptSpec.add_elicitation_entry` |
| Generative eligibility allowlist — *Phase 5/6* | `shared/generative-allowlist.yaml` |

> The JSON Schemas are the authoritative shape for the Concept Spec and Knowledge
> Pack. Canonical source: the paths above. The synced copies under
> `skills/*/references/` and `skills/*/scripts/` are generated — update the
> `shared/` source and re-run `sync_shared.py`; never edit the copies.

> ASSUMPTION: the implemented code currently pins `schema_version` to `1.0` and
> carries the legacy `component_bindings[].gap` boolean. This SDD describes the
> `2.0` contract (per the folded-in R1 decision); the migration is roadmap
> Phase 5. Treat `2.0` as the target the kernel is being brought to.

---

## 4. Component Specifications — Foundational Shared Kernel (Phase 1)

### 4.1 `ConceptSpec` — `shared/lib/ux_suite/spec.py`

- **Purpose:** wrap a Concept Spec document with validation and lifecycle helpers;
  enforce the stage ladder and provenance rules.
- **Interface:**
  - `ConceptSpec.load(path) -> ConceptSpec` — parse + validate (raises `ValueError`
    on bad JSON or schema failure).
  - `validate() -> None` — validate against `concept-spec.schema.json`.
  - `save(path) -> None` — validate, then write formatted JSON.
  - `advance_stage(new_stage, workspace_path) -> None` — snapshot, then bump
    `version` and `fidelity_stage`.
  - `add_elicitation_entry(stage, question, answer, status, timestamp=None,
    workspace_path=None) -> None`; `get_assumed_entries() -> list[dict]`.
  - Properties: `fidelity_stage`, `version`, `id`.
  - *Phase 5 additions:* binding-vs-pack revalidation + `props` validation
    (INV-5), `pack_drift` gate (INV-9 family), gap gate over `component_gaps[]`
    (INV-5), capture gate for generative concepts (INV-6).
- **Behavior rules:** validate on load and before every save; `advance_stage` must
  target exactly the next stage in `FIDELITY_ORDER` and check that stage's
  preconditions *before* writing anything; snapshot the current version to
  `spec/history/v{version}.json` before incrementing; elicitation `status` is one
  of `answered/inferred/assumed/open`.
- **Must NOT:** skip or reorder stages; advance with any `component_gaps[]` entry
  at `status: flagged`; bump `version` without snapshotting first; drop content a
  prior stage wrote; populate `sdaad`; write canonical artifacts anywhere other
  than the tracked `concepts/<id>/` (post-R1).

### 4.2 `KnowledgePack` — `shared/lib/ux_suite/knowledge.py`

- **Purpose:** load and query a Knowledge Pack; the read interface every skill
  uses for component knowledge.
- **Interface:** `KnowledgePack.load(path)`; `validate()`; `get_component(name)`
  (canonical name or alias, case-insensitive) `-> dict | None`;
  `list_components()`; `get_capabilities()`; `get_gaps()`; `covers(need) -> bool`;
  properties `library_name`, `library_version`.
- **Behavior rules:** validate against `knowledge-pack.schema.json` on load;
  component lookup matches `name` then `aliases` case-insensitively.
- **Must NOT:** mutate the loaded pack; be bypassed by hardcoding component facts
  elsewhere (INV-1).

### 4.3 `Workspace` — `shared/lib/ux_suite/workspace.py`

- **Purpose:** manage the on-disk layout for a single concept.
- **Interface:** `Workspace.create(root, concept_id)`; `Workspace.open(root,
  concept_id)`; `spec_path()`, `design_dir()`, `prototype_dir()`, `build_dir()`,
  `logs_dir()`; `load_spec()`, `save_spec(spec)`; `list_designs()`; properties
  `concept_id`, `root`.
- **Behavior rules:** `create` makes all required subdirectories and writes a
  minimal valid draft spec; `open` raises `FileNotFoundError` if absent.
- **Must NOT:** place canonical, tracked artifacts (spec, history, design, frozen
  build, snapshots, logs) under the gitignored `workspaces/` once the R1 split is
  in force (INV-9) — those belong under `concepts/<id>/`.

### 4.4 `migrate` — `shared/lib/ux_suite/migrate.py` *(Phase 5; planned)*

- **Purpose:** upgrade a Concept Spec from `schema_version 1.0` to `2.0` on load.
- **Interface (intended):** `migrate(data: dict) -> dict` invoked by
  `ConceptSpec.load` before validation.
- **Behavior rules:** detect `schema_version`; for `1.0 → 2.0` inject
  `runtime_mode: static`, move any legacy `component_bindings[].gap: true` into a
  `component_gaps[]` entry at `status: flagged`, snapshot the pre-migration file to
  `spec/history/`, then validate against the `2.0` schema (INV-10).
- **Must NOT:** validate before migrating; migrate without first snapshotting; lose
  data during the move.

### 4.5 `sync_shared.py` — `scripts/sync_shared.py`

- **Purpose:** propagate canonical `shared/` resources into each skill bundle.
- **Interface:** `python scripts/sync_shared.py [--dry-run] [--skill NAME]`;
  *Phase 5:* `--check` exits non-zero on any divergence.
- **Behavior rules:** copy `shared/schemas`, `shared/elicitation`, `shared/docs`
  into `references/`, and `shared/lib/ux_suite` into `scripts/ux_suite`, for each
  of the three skills; *Phase 5:* stamp every synced file with a `GENERATED FROM
  shared/ — DO NOT EDIT HERE` banner and wire `--check` into pre-commit + CI.
- **Must NOT:** treat a skill-bundle copy as a source of truth; let drift go
  undetected once `--check` exists (INV-8).

### 4.6 `new_concept.py` — `scripts/new_concept.py`

- **Purpose:** scaffold a new concept workspace plus a blank draft spec.
- **Interface:** `python scripts/new_concept.py --id ID --goal GOAL
  [--workspaces-dir PATH] [--force]`.
- **Behavior rules:** validate the slug (alphanumeric + hyphens); create the
  directory tree; write a minimal valid draft spec and an empty
  `logs/elicitation.jsonl`.
- **Must NOT:** overwrite an existing workspace without `--force`; emit an invalid
  draft spec.

---

## 5. Data Flow

**Authoring (designer → prototyper → builder):**
1. A user utterance is routed by intent to one skill.
2. The skill loads the Knowledge Pack (real, or the mock in `reference-lib/`) and
   the Concept Spec (or bootstraps one via `new_concept.py`).
3. The skill runs one batched elicitation round, writing each Q/A into the spec
   sections *and* `elicitation_log` (mirrored to `logs/elicitation.jsonl`).
4. The skill enriches its layer (designer: intent/IA/composition/bindings/theming;
   prototyper: prototype assets; builder: build directives + frozen source).
5. The skill validates, snapshots the prior version, and advances `fidelity_stage`
   one step — only if the target stage's preconditions hold.

**Generative prototype loop (Phase 6, local host only):**
`component_bindings` → `render_contract` compiler → OpenUI-Lang `render_artifact`
+ library system prompt → streamed into the `lang-core` renderer with mocked data
→ live preview. A gap raises `ComponentGapError` and is recorded in
`component_gaps[]` or routed to the static path — never faked. Before a build may
graduate, the effective composition is **captured back** into the canonical spec
(`generative.captured == true`).

**Build graduation (builder):** the builder consumes the *captured* canonical
`composition`/`component_bindings` (never the `render_artifact`), writes frozen
source into `concepts/<id>/build/src/`, commits visual baselines under
`__snapshots__/`, runs Playwright e2e/visual/a11y against the frozen artifact, and
appends a `build_provenance` record.

---

## 6. Performance Requirements

No hard frame-budget, throughput, or latency numbers apply to the kernel
(deterministic Python tooling) or to the static build (verification, not
runtime). One qualitative requirement: the **generative prototype loop must feel
near-instant** to support rapid, throwaway iteration — it does
edit-bindings → recompile → re-render with no per-concept app rebuild. Prototype
verification is smoke-level only; rigorous gates belong to the build.

> N/A for quantified budgets in this version.

---

## 7. State Management

- **The Concept Spec on disk is the only shared state.** Skills are stateless
  across sessions and coordinate exclusively through it (INV-2). The Knowledge
  Pack is read-only shared input.
- The `ux_suite` classes hold a single in-memory document reference and persist
  via `save`/`advance_stage`; there is no long-lived process state.

**Must never enter shared/global or persisted state:**
- `generative.prototype_model_provider` **secrets** — supplied via environment
  variables only, never inlined into a spec, artifact, or build (INV-6).
- The generative `render_artifact` and library registration as *canonical* state —
  they are derived and droppable; only the bindings they were compiled from are
  canonical (INV-8).
- The `sdaad` object — stays empty (INV-11).

---

## 8. File / Package Structure (kernel-relevant)

```
shared/
├── schemas/
│   ├── concept-spec.schema.json        # Concept Spec (2.0 target)
│   ├── knowledge-pack.schema.json       # Knowledge Pack (2.0 target)
│   └── examples/                        # worked example documents
├── elicitation/elicitation-protocol.md
├── docs/                                # open-ui model, Phase 0 extraction, MF2,
│                                        #   Playwright, SDAAD seam (+ R1/Phase 6 docs)
├── lib/ux_suite/
│   ├── spec.py  knowledge.py  workspace.py
│   ├── migrate.py                       # Phase 5 (planned)
│   ├── render_contract.py               # Phase 6 (planned)
│   └── tests/
└── generative-allowlist.yaml            # Phase 5/6 (planned)
scripts/
├── sync_shared.py   new_concept.py
concepts/<id>/                           # TRACKED baseline of record (Phase 5)
workspaces/<id>/                         # EPHEMERAL working output (gitignored)
```

Each skill bundle mirrors `shared/schemas|elicitation|docs` into
`references/` and `shared/lib/ux_suite` into `scripts/ux_suite` via
`sync_shared.py`.

---

## 9. Infrastructure and Configuration

- **Python tooling:** Python ≥ 3.11; runtime dep `jsonschema>=4.21`; dev deps
  `pytest>=8`, `pytest-cov>=5`, `ruff>=0.4`. `ruff` line length 100, target
  `py311`, lint selects `E, F, I, UP`. `pytest` `testpaths`/`pythonpath` →
  `shared/lib` (see `pyproject.toml`).
- **Generated UI apps:** pnpm + Vite + React + TypeScript + Tailwind; Module
  Federation 2.0 (`@module-federation/vite`, `@module-federation/enhanced`);
  Playwright + `@axe-core/playwright`. Build images: multi-stage
  `node:20-alpine` (build) → `nginx:alpine` (serve); local deploy via
  `docker compose` or `pnpm preview`.
- **Generative runtime (prototype loop only):** `@openuidev/lang-core` (MIT,
  pinned), optional `@openuidev/react-headless`; model API secrets via env only;
  vendored/mirrored per the §8 due-diligence spike (Phase 6).
- **Config injection / sync:** `sync_shared.py` propagates canonical sources;
  *Phase 5* adds `--check`, a `.pre-commit-config.yaml`, and a CI sync-check job.
- **Schema resolution:** `ux_suite` finds schemas via a dual-path search (repo
  layout `shared/schemas/`, then skill-bundle layout `references/schemas/`) so the
  same code runs in both contexts.

---

## 10. Implementation Notes

- **Migrate-then-validate** (INV-10): never validate a freshly loaded document
  before running it through `migrate`; otherwise a legacy `1.0` file fails against
  the closed `2.0` schema for the wrong reason.
- **One gap model** (D33/INV-5): the boolean `component_bindings[].gap` is removed
  in `2.0`; a need with no covering component is a first-class `component_gaps[]`
  record with a `status` and a `decision`. `escape_hatch` (with a decision)
  satisfies the no-unresolved-gaps build precondition; `flagged` does not.
- **Derived, not canonical** (INV-8): the OpenUI-Lang registration and
  `render_artifact` are regenerable design aids; if bindings change after
  compilation, the artifact is stale and must be recompiled.
- **Current vs. target** (see §3 assumption): the kernel is implemented at the
  `1.0` baseline; Phase 5 brings it to `2.0`. New code should target `2.0`
  contracts and add `// SPEC-GAP` / `# SPEC-GAP` notes where the existing code and
  this SDD diverge, rather than silently coding to `1.0`.
- **Non-interactive elicitation:** when there is no human in the loop, do not
  block — choose conservative defaults, mark them `assumed`, and surface them in
  the summary (this is behavior, not an invariant).
