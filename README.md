# company-ux-suite

Three coordinated Anthropic Agent Skills for UX design, prototyping, and building — over a shared knowledge kernel.

## Skills

| Skill | Trigger intents | Output |
|-------|----------------|--------|
| `company-ux-designer` | design, wireframe, mockup, sketch, lay out | SVG wireframes + HTML/Tailwind mockups + Concept Spec |
| `company-ux-prototyper` | prototype, interactive, clickable, from meeting | Running Vite + React + MF2 micro-frontend app |
| `company-ux-builder` | build, implement, productionize, ship | Dockerized app + Playwright e2e/visual/a11y gates |

## Architecture

```
User utterance → {designer | prototyper | builder}
                      ↕                ↕
              Knowledge Pack    Concept Spec (monotonically enriched)
```

Three properties hold the system together:
1. **Knowledge Pack** — the internal component library modeled in open-ui shape (produced by Phase 0).
2. **Concept Spec** — single versioned file enriched stage-by-stage: `draft → wireframe → mockup → interactive_prototype → buildable → built`.
3. **Shared elicitation protocol** — all skills ask questions the same way and write answers with provenance.

## Repository layout

```
skills/           Three SKILL.md bundles (self-contained, synced from shared/)
shared/           Canonical schemas, docs, elicitation protocol, Python lib
scripts/          sync_shared.py, new_concept.py
workspaces/       Per-concept outputs (gitignored)
reference-lib/    Mock internal library for pipeline de-risking
internal_ui_stack/ READ-ONLY mount (Phase 0, gitignored)
```

## Quick start

```bash
# Create a new concept workspace
python scripts/new_concept.py --id weather-dashboard --goal "Weather dashboard for end users"

# Sync shared resources into skill bundles
python scripts/sync_shared.py

# Run tests
pip install -e ".[dev]"
pytest
```

## Phase 0 — real library ingestion

When `/internal_ui_stack` is mounted, run the Phase 0 extraction to produce a real Knowledge Pack:

```bash
# (Phase 0 session) read shared/docs/knowledge-pack-extraction.md for methodology
```

See `shared/docs/knowledge-pack-extraction.md` for the extraction methodology.

## Fidelity ladder

| Stage | Artifact | Toolchain |
|-------|----------|-----------|
| wireframe | SVG (grayscale, structural) | — |
| mockup | HTML + Tailwind | Library tokens |
| interactive_prototype | MF2 micro-frontend | Vite + React + pnpm |
| built | Production app | Docker + Playwright |

## Decisions

See `DECISIONS.md` for the full decision ledger.
