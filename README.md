# company-ux-suite

Three coordinated Anthropic Agent Skills — **designer**, **prototyper**, and
**builder** — that take a UX concept from a rough idea to a production-grade,
verified application, all grounded in an organization's own internal component
library and coordinated through a single, progressively-enriched specification.

## 1. Mission Statement

company-ux-suite lets a product team move a UI concept across the full fidelity
ladder — from grayscale wireframe, to themed mockup, to a running interactive
prototype, to a deployable, test-gated build — without ever leaving the
organization's sanctioned component library. It exists so that designers, PMs,
and engineers working inside agentic sessions (Claude Code) can produce visually
intentional, accessible, library-faithful UI artifacts that hand off cleanly to
one another, with every decision recorded and every component traceable back to
the real internal design system.

## 2. System Intent

The suite is three portable `SKILL.md` Agent Skills over a shared knowledge
kernel. Each skill consumes and enriches one versioned **Concept Spec** and reads
one **Knowledge Pack** (the internal library modeled in open-ui shape):

- **company-ux-designer** — produces SVG wireframes and HTML/Tailwind mockups,
  and authors the Concept Spec (intent, information architecture, composition,
  component bindings, theming).
- **company-ux-prototyper** — produces a real, running, interactive prototype.
  Its default fast path streams **OpenUI-Lang** from the company library and
  renders it live (throwaway-friendly, no per-concept scaffold); an opt-in path
  scaffolds a Vite + React + Module Federation 2.0 micro-frontend app.
- **company-ux-builder** — produces a **static, deterministic**, Dockerized
  application bound to the real library, gated by Playwright end-to-end, visual
  regression, and accessibility checks, and deployable to local host.

A governing rule sits above the suite: **generative UI is a design/prototype
accelerator only. Every delivered build is static, deterministic, and passes the
verification gates. No model runs in a delivered application.**

### Non-Goals (this version)

- **Delivered/runtime generative UI.** Models never ship in a build; the
  static/generative boundary is fixed for this version.
- **Automatic creation of new components.** When the library lacks coverage, the
  suite *records* a structured gap (and may, with a recorded decision, author a
  labeled one-off via the escape hatch); it does not invent library components.
- **Non-React, non-web targets.** Vue/Svelte/email/mobile/browser-bundle reach is
  out of scope; the company React library is the sole component source.
- **OpenUI-Lang's built-in component libraries** as a component source — it is the
  *mechanism*, not the *components*.
- **Live SDAAD integration.** A reserved seam exists (see §5 and
  `shared/docs/sdaad-integration.md`); it is not implemented in this version.

## 3. Core Use Cases

- As a **designer**, I need to turn a goal and a set of screens into grayscale
  wireframes and themed mockups using only my org's library tokens and
  components, so that what I show is faithful to the real design system.
- As a **PM or stakeholder**, I need a rough idea or meeting transcript turned
  into a clickable, running prototype, so that I can validate the concept quickly
  before committing engineering effort.
- As an **engineer**, I need a validated concept compiled into a deterministic,
  Dockerized application gated by automated e2e/visual/a11y tests, so that I can
  deploy and trust it.
- As any **contributor**, I need each skill to ask only the questions that change
  the outcome and to record every answer with provenance, so that decisions are
  auditable and later stages never re-ask what earlier stages learned.
- As a **platform owner**, I need every UI artifact bound to canonical library
  components — with uncovered needs surfaced as explicit, tracked gaps — so that
  output stays inside the certifiable design system.
- As a **library owner (Phase 0)**, I need the internal React library extracted
  into a machine-readable Knowledge Pack, so that all three skills draw from one
  authoritative source without hardcoding component knowledge.

## 4. Domain Model

- **Knowledge Pack** — the internal component library expressed in
  [open-ui.org](https://open-ui.org) shape (anatomy → parts → states → behaviors
  → accessibility), plus tech stack, design tokens, design principles, patterns,
  app-shell conventions, and a coverage report. Produced by **Phase 0** library
  extraction. It is the *constitution*: the stable set of components, tokens, and
  constraints every skill must respect. No skill hardcodes component knowledge.

- **Concept Spec** — a single versioned JSON file that is the *contract* between
  skills. It is enriched monotonically as it advances through the **fidelity
  ladder** (`draft → wireframe → mockup → interactive_prototype → buildable →
  built`), with each stage adding its layer, bumping the version, and snapshotting
  the prior version. It carries intent, information architecture, data model,
  composition, **component bindings** (the linchpin: each UI need → a canonical
  library component), theming, interaction behavior, accessibility, assets, build
  directives, an elicitation log, and (under the v2.x baseline) `runtime_mode`,
  `generative` artifacts, `component_gaps`, and `build_provenance`.

- **Component Binding** — the mapping from a concrete UI need on a screen to a
  named, canonical component in the Knowledge Pack (with variant, states, and
  props). Props are validated against the bound component's contract.

- **Component Gap** — the single, structured record of a UI need the library does
  not cover, with a status (`flagged` / `deferred` / `escape_hatch` / `resolved`),
  a decision object, and an open-ui-shaped `proposed_component` stub. There is no
  boolean gap flag.

- **Skill** — one of the three Agent Skills (designer / prototyper / builder),
  each a self-contained `SKILL.md` bundle that reads the Knowledge Pack, enriches
  the Concept Spec, and emits artifacts.

- **Workspace vs. Concept** — `concepts/<id>/` holds the **tracked** baseline of
  record (spec, history, design, frozen build source, snapshots, logs,
  provenance); `workspaces/<id>/` holds **ephemeral**, gitignored throwaway output
  (the running prototype and build working dirs).

- **Elicitation Log** — the provenance ledger appended to as skills ask
  questions; every fact is marked `answered` / `inferred` / `assumed` / `open`.

- **Generative artifacts** — the OpenUI-Lang library registration and per-concept
  `render_artifact`, both **derived** from the canonical Knowledge Pack and
  bindings and used only to fuel the prototype loop. Never hand-authored, never
  shipped.

## 5. Specification-Driven Development

This project is governed by four canonical documents, generated and maintained in
dependency order:

1. **README.md** (this file) — mission, domain, use cases, scope.
2. **docs/roadmap.md** — delivery phases, sequencing, and status.
3. **docs/sdd.md** — the Software Design Document: architecture, invariants,
   types, and component contracts. The technical authority.
4. **docs/AGENT_PROMPT.md** — the system prompt that grounds AI implementation
   sessions in the spec. Its version is kept in lockstep with the SDD.

**No major feature is implemented without a specification in `docs/sdd.md`.**

## 6. Quick Start

```bash
# Install Python helper tooling (schema validation, spec ops, scripts)
pip install -e ".[dev]"

# Run the helper-library test suite
pytest

# Create a new concept workspace + blank draft spec
python scripts/new_concept.py --id weather-dashboard \
  --goal "Weather dashboard for end users"

# Propagate canonical shared/ resources into each skill bundle
python scripts/sync_shared.py

# (After R1) verify skill bundles are in sync with shared/
python scripts/sync_shared.py --check
```

> ASSUMPTION: `sync_shared.py --check` is part of the planned R1 hardening and is
> not yet implemented in the current code. See `docs/roadmap.md`.

Generated UI apps (prototype/build) use the **pnpm + Vite + React + TypeScript +
Tailwind** toolchain; run instructions are emitted by the prototyper and builder
skills per concept (e.g. `pnpm install && pnpm dev`, `docker compose up`).

## 7. Repository Structure

```
company-ux-suite/
├── README.md                  # this file — mission, domain, scope
├── DECISIONS.md               # append-only decision ledger (D1–D37)
├── pyproject.toml             # Python helper tooling (jsonschema, ruff, pytest)
├── docs/                      # canonical specification documents
│   ├── roadmap.md             # delivery phases, sequencing, status
│   ├── sdd.md                 # software design document (technical authority)
│   └── AGENT_PROMPT.md        # system prompt for AI implementation sessions
├── sdaad/                     # generator prompts for the four canonical docs
├── skills/                    # three self-contained SKILL.md bundles
│   ├── company-ux-designer/   #   (references/ + scripts/ synced from shared/)
│   ├── company-ux-prototyper/
│   └── company-ux-builder/
├── shared/                    # canonical sources — single source of truth
│   ├── schemas/               #   concept-spec + knowledge-pack JSON Schemas + examples
│   ├── elicitation/           #   elicitation-protocol.md
│   ├── docs/                  #   open-ui model, Phase 0 extraction, MF2, Playwright, SDAAD seam
│   └── lib/ux_suite/          #   Python lib: spec, knowledge, workspace (+ tests)
├── scripts/                   # sync_shared.py, new_concept.py
├── concepts/<id>/             # TRACKED baseline of record (planned, R1)
├── workspaces/<id>/           # EPHEMERAL throwaway output (gitignored)
├── reference-lib/             # tiny MOCK internal library for pipeline de-risking
└── internal_ui_stack/         # READ-ONLY Phase 0 mount (gitignored; not yet present)
```

> ASSUMPTION: `concepts/<id>/` (the tracked baseline split) is introduced by the
> planned R1 remediation; the current code uses only `workspaces/<id>/`. See
> `docs/roadmap.md`.

## 8. Open Design Questions

A living register of specification gaps is tracked in
`files/ux-suite-GAP-ANALYSIS.md`. G1–G10 are resolved by change package R1; the
following remain open candidates for a future package (R2):

- **CI / execution environment (G11)** — the full Playwright/Docker/pnpm/pytest
  pipeline and gates are not yet specified.
- **MF2 cross-remote state & screen→remote mapping (G12)** — decomposition rule,
  shared-state strategy, and cross-remote navigation contract are unspecified.
- **Single design-token artifact (G13)** — no one tokens artifact (e.g. a
  Tailwind preset) is yet consumed by mockup/prototype/build.
- **`lang-core` anti-corruption layer (G14)** — the pre-1.0 generative runtime is
  not yet isolated behind a thin internal adapter.
- **Mock-data contract (G15)**, **front-door intent classification (G16)**,
  **keyboard/focus a11y verification beyond axe (G17)**, **id derivation &
  concurrency (G18)**, **ingested-context retention/classification (G19)**,
  **SBOM/license compliance on builds (G20)**, **failure taxonomy (G22)**,
  **machine-checkable per-skill acceptance (G23)**, and **over-library-capability
  behavior (G25)** — all open.

See `docs/roadmap.md §7` for how these feed future phases and reconciliation.
