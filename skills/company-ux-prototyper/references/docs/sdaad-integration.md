# SDAAD Integration

> **STATUS: STUB / RESERVED — Do not implement. This document reserves the integration seam.**

## What This Is

This document reserves the integration point between this UX tool suite and SDAAD (Spec-Driven AI-Assisted Development), Eric's broader workflow for producing production code from structured specifications.

No implementation is required now. The schema fields and naming conventions described below are reserved to avoid future collisions. Do not build against this interface until the SDAAD integration is formally specced.

## Intended Mapping

When the integration is developed, the following layer mappings are anticipated:

- **Constitution layer**: The Knowledge Pack (`knowledge-pack.<slug>.json`) combined with `design_principles[]` maps to the SDAAD "library constitution" — the stable set of constraints and affordances that an AI assistant must respect when generating code against this design system.
- **Contract layer**: The Concept Spec produced by the designer skill maps to SDAAD document-generator prompts. SDAAD could both consume Concept Specs (as input to code generation) and emit them (as structured output from a document-generator stage).
- **Wiki bundle**: The Knowledge Pack could be hosted as the SDAAD wiki, providing component-level documentation to downstream SDAAD agents without requiring a separate documentation pipeline.

## Reserved Integration Point

The `sdaad` object in the Concept Spec schema (`concept-spec.schema.json`) is the designated integration field. It is currently `null` in all generated specs. Do not populate it in any skill implementation until the integration is formally designed.

## Stability Constraints

- Keep all schema versions pinned and semantically versioned.
- Do not rename `coverage_report`, `component_bindings`, `design_principles`, or `knowledge_pack_ref` — these are the fields most likely to become SDAAD integration surfaces.
- Avoid reusing the key `sdaad` for any other purpose in any schema in this project.
