# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**company-ux-suite** is a specification-driven system of three coordinated Agent Skills (designer, prototyper, builder) that takes UX concepts from wireframe to production-grade applications. All output is bound to an organization's internal component library via a shared Knowledge Pack. The system enforces a hard boundary: generative UI is confined to prototyping; all delivered builds are static, deterministic, and verification-gated.

## Architecture

```
Skills (SKILL.md bundles)
   ├── company-ux-designer     (wireframe + mockup)
   ├── company-ux-prototyper   (interactive prototype: MF2 or generative)
   └── company-ux-builder      (static, Dockerized, Playwright-gated)
        ↓ read/write
   Concept Spec (versioned JSON) — the inter-skill contract
        ↓ read
   Knowledge Pack (open-ui shape) — the component library constitution
```

- **Concept Spec**: Single versioned JSON file that travels the fidelity ladder (`draft → wireframe → mockup → interactive_prototype → buildable → built`), enriched monotonically by each skill
- **Knowledge Pack**: Organization's component library in open-ui.org shape (anatomy, parts, states, behaviors, accessibility)
- **shared/**: Single source of truth (schemas, Python lib, docs, elicitation protocol) synced into self-contained skill bundles via `sync_shared.py`
- **concepts/<id>/**: Tracked baseline of record (planned R1)
- **workspaces/<id>/**: Ephemeral throwaway output (gitignored)

## Development Commands

### Python Tooling (kernel/helpers)
```bash
# Install Python helper library + dev deps
pip install -e ".[dev]"

# Run the ux_suite library test suite
pytest

# Run tests with coverage
pytest --cov=ux_suite

# Lint/format Python code
ruff check shared/lib/
ruff format shared/lib/
```

### Concept Management
```bash
# Create a new concept workspace with blank draft spec
python scripts/new_concept.py --id weather-dashboard \
  --goal "Weather dashboard for end users"

# Sync canonical shared/ resources into skill bundles
python scripts/sync_shared.py

# Verify skill bundles are in sync (planned R1)
python scripts/sync_shared.py --check
```

### Generated UI Apps (prototype/build)
Generated apps use **pnpm + Vite + React + TypeScript + Tailwind**. Commands vary by concept; typically:

```bash
cd workspaces/<concept-id>/prototype/
pnpm install
pnpm dev          # Start dev server

cd workspaces/<concept-id>/build/
docker compose up  # Run Dockerized build
```

### Schema Validation
The `ux_suite` Python library validates concept specs and knowledge packs against JSON schemas in `shared/schemas/`:
- `concept-spec.schema.json` (current version: 1.0, planned upgrade to 2.0 in R1)
- `knowledge-pack.schema.json`

Example schemas available in `shared/schemas/examples/`.

## Key Directories

- **skills/**: Three SKILL.md bundles with synced `references/` and `scripts/` subdirs
- **shared/**: Canonical sources
  - `lib/ux_suite/`: Python library (`spec.py`, `knowledge.py`, `workspace.py` + tests)
  - `schemas/`: JSON Schemas + examples
  - `docs/`: Technical references (open-ui model, MF2, Playwright, SDAAD seam)
  - `elicitation/`: Elicitation protocol
- **docs/**: Four canonical documents (README, roadmap, SDD, AGENT_PROMPT)
- **sdaad/**: Generator prompts for canonical docs
- **scripts/**: `new_concept.py`, `sync_shared.py`
- **workspaces/**: Per-concept ephemeral output (spec/, design/, prototype/, build/, logs/)
- **reference-lib/**: Mock internal library for de-risking (demoted to offline-CI fallback after Phase 0)
- **internal_ui_stack/**: Organization's real UI suite (Phase 0 mount point, gitignored)

## Specification-Driven Development

**No major feature is implemented without a specification in `docs/sdd.md`.**

The four canonical documents (maintained in dependency order):
1. **README.md** — mission, domain, use cases, scope
2. **docs/roadmap.md** — delivery phases, sequencing, status
3. **docs/sdd.md** — Software Design Document (technical authority: architecture, invariants, types, component contracts)
4. **docs/AGENT_PROMPT.md** — system prompt for AI implementation sessions

When architecture/types/invariants change, bump `docs/sdd.md` and `docs/AGENT_PROMPT.md` versions **together in the same commit** and append to the SDD changelog.

Architectural invariants are listed in `docs/sdd.md §2`. Decision ledger is `DECISIONS.md` (append-only).

## Current Phase

**Phase 0 (In Progress)**: Integrate the organization's actual UI suite from `/internal_ui_stack`. This produces the real Knowledge Pack data artifact via extraction methodology. The mock library (`reference-lib/`) was used for de-risking and will become an offline-CI fallback fixture after Phase 0 completes.

## Technology Stack

- **Python 3.11+**: Helper library, validators, scripts (`jsonschema`, `pytest`, `ruff`)
- **React + TypeScript + Vite**: Generated UI apps
- **pnpm**: Package manager for generated apps
- **Module Federation 2.0**: Prototype micro-frontend topology
- **Playwright + axe-core**: Build verification gates (e2e, visual regression, accessibility)
- **Docker**: Build containerization
- **OpenUI-Lang** (`@openuidev/lang-core`): Generative prototype fast path (Phase 6, prototype-loop only)

## Design Decisions

Key decisions are tracked in `DECISIONS.md`. Notable ones:
- **D1**: Component meta-model uses open-ui.org shape
- **D3**: Three separate skills (designer, prototyper, builder) vs. one
- **D4**: Single progressively-enriched Concept Spec as inter-skill contract
- **D6**: Module Federation 2.0 for prototypes
- **D7**: Prototypes are fast/throwaway; builds are production-grade/gated
- **D8**: Playwright for e2e + visual regression + axe-core for a11y
- **D13**: Canonical `shared/` resources synced into self-contained skill bundles

## Open Design Questions

Living register: `files/ux-suite-GAP-ANALYSIS.md`

- G11: CI/execution environment not yet specified
- G12: MF2 cross-remote state & screen→remote mapping unspecified
- G13: Single design-token artifact (e.g., Tailwind preset)
- G14: `lang-core` anti-corruption layer
- G15-G25: Mock-data contract, keyboard/focus a11y beyond axe, failure taxonomy, etc.

Phase 7 (Conversational Web Front Door) addresses G16 (front-door intent classification).

## Testing Strategy

- **Python library**: `pytest` for `ux_suite` (spec, knowledge, workspace modules)
- **Schema validation**: Validate concept specs and knowledge packs against JSON schemas
- **Generated builds**: Playwright e2e + visual regression + axe-core accessibility checks
- **Architecture invariants**: See `docs/sdd.md §2` (must hold on every commit)

## Workflow

Per-file implementation workflow (from `docs/AGENT_PROMPT.md`):
1. Quote the spec section
2. Check dependencies
3. Check invariants
4. Write/modify code
5. Type-check
6. Verify against acceptance criteria
7. Sync shared resources with `python scripts/sync_shared.py`

Before implementing a phase:
1. Confirm spec coverage exists in `docs/sdd.md`
2. Implement following the workflow
3. Run `pytest` for Python library
4. Schema-validate example documents
5. Confirm architectural invariants hold
6. Update roadmap status
