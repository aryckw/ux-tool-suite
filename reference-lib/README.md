# reference-lib — Mock Internal UI Library

A tiny mock component library for pipeline de-risking. Its purpose is to exercise the full
designer → prototyper → builder pipeline before the real `/internal_ui_stack` is mounted.

## Components

| Component | Variants | Status |
|-----------|----------|--------|
| Button | primary, secondary, ghost, danger | stable |
| Card | default, elevated, outlined | stable |
| Input | default, error, success | stable |
| Stat | default, trend-up, trend-down | stable |
| ChartPlaceholder | (type prop: bar/line/pie) | stable |
| AppShell | — | stable |

## Knowledge Pack

The machine-readable description of this library (in open-ui shape) lives at:

```
shared/schemas/examples/knowledge-pack.mock-lib.json
```

It is automatically synced into each skill bundle by `scripts/sync_shared.py`.

## Usage

When running skills before Phase 0 (the real library ingestion), the skills fall back to this
mock library. No installation needed — it is a pure knowledge artifact, not a running package.

## Relationship to Phase 0

Phase 0 reads `/internal_ui_stack` and produces a Knowledge Pack in the same schema. Once that
pack is in place, the skills switch to the real library automatically — no skill code changes.
