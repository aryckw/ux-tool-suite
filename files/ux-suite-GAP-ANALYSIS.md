# company-ux-suite — Specification Gap Analysis (register)

> **Living register.** Tracks specification gaps that create downstream technical
> debt. G1–G10 are **resolved by change package R1** (`REMEDIATION-R1.md`).
> G11–G25 remain **open** and are candidates for a future package (R2).
> Baselines in force: v1.0 (locked), v2.1 (locked), R1 (locked).

**Severity:** `Critical` = undermines the baseline/verification model ·
`Significant` = real debt that accrues quietly · `Hygiene` = cheap now, costly to
retrofit.

**Owners:** `CODER` = the agentic coding session · `P0` = Phase 0 / extraction
owner · `ERIC/CCB` = human policy/security decision · `ROUTER` = front-door work.

---

## Resolved in R1 (G1–G10)

| ID | Title | Severity | Affected | Owner | Fix (summary) | R1 § |
|----|-------|----------|----------|-------|---------------|------|
| G1 | Source of truth is gitignored | Critical | v1 §3 | CODER | Split tracked `concepts/<id>/` (spec, history, design, frozen build, snapshots, logs) from ephemeral `workspaces/<id>/` (prototype, build caches). Track `concepts/`. | R1-1 |
| G2 | Build reproducibility undefined; visual baselines unstable | Critical | v1 §3, §9 | CODER | Generated build source is a committed, frozen artifact under `concepts/<id>/build/`; snapshots committed; regeneration is an explicit diff+re-baseline action; add `build_provenance`. | R1-2, R1-5 |
| G3 | No Knowledge Pack lifecycle; bindings never revalidated | Critical | v1 §4, §5.2 | P0, CODER | Add binding-vs-pack revalidation gate, `pack_drift` flag on version bump, pack changelog + ownership/cadence doc. | R1-3, R1-4 |
| G4 | No schema migration; `additionalProperties` open | Critical | v1 §5.1, v2.1 §2 | CODER | Bump `schema_version` 1.0→2.0; add `migrate.py`; set `additionalProperties:false` on objects (except reserved `sdaad`). | R1-2, R1-3 |
| G5 | Generative prototype→build capture step missing | Critical | v2.1 §5, §6 | CODER | Add capture/write-back of the model's effective composition into canonical `composition`/`component_bindings`; `generative.captured` gate before graduation. | R1-2, R1-3 |
| G6 | Three colliding gap representations | Significant | v1 §5.1/§5.2/§9, v2.1 D26/D27 | CODER | Remove `component_bindings[].gap` boolean; single `component_gaps[]` with `status` enum + `decision` object (supplies the gate's missing field). | R1-2, R1-3, R1-6 |
| G7 | `component_bindings.props` unvalidated | Significant | v1 §5.1/§5.2 | CODER | Validate props against the bound component's pack contract at write time. | R1-3 |
| G8 | `generative_eligible` inferred from static source | Significant | v2.1 §3 | ERIC/CCB, P0 | Inference produces a *proposed* flag only; effective eligibility comes from a human-reviewed, default-deny allowlist. | R1-4 |
| G9 | `component_gaps` dead-ends; no interim path | Significant | v2.1 D26/D27 | CODER, ERIC/CCB | Add sanctioned `escape_hatch` status: isolated, labeled, logged one-off static component (static build only; never generative; outside the certifiable-library claim). | R1-6 |
| G10 | `sync_shared.py` no drift detection/trigger | Significant | v1 §10 | CODER | `--check` mode fails on divergence; wire pre-commit + CI; banner synced copies as generated. | R1-7 |

---

## Open (G11–G25) — candidates for R2

| ID | Title | Severity | Affected | Owner | Proposed fix |
|----|-------|----------|----------|-------|--------------|
| G11 | No CI/execution environment specified | Significant | v1 §12 | CODER | Define the pipeline (Playwright/Docker/pnpm/pytest runners + gates). Partially seeded by R1-7's CI; needs full pipeline. |
| G12 | MF2 cross-remote state & screen→remote mapping unspecified | Significant | v1 §8 | CODER | Specify decomposition rule, shared-state strategy, cross-remote nav/event contract. |
| G13 | No single design-token artifact | Significant | v1 §7/§8/§9 | CODER | Generate one tokens artifact (e.g. Tailwind preset) consumed by mockup/prototype/build. |
| G14 | `lang-core` has no anti-corruption layer | Significant | v2.1 §5, §8 | CODER | Isolate behind a thin internal adapter so pre-1.0 churn is contained. |
| G15 | Mock-data contract is a bare string | Significant | v1 §5.1 | CODER | Define mock-data schema + generation rule keyed to `data_model.entities`. |
| G16 | Front-door intent classification & reference resolution unspecified | Significant | v1 §2, v2.1 §7 | ROUTER | Specify intent classification + how "the concept we discussed" resolves to a concept-id. |
| G17 | a11y verification is axe-only | Significant | v1 §9 | CODER | Add keyboard/focus-order verification; treat axe as necessary-not-sufficient. |
| G18 | `id` derivation & concurrency unspecified | Hygiene | v1 §5.1 | CODER | Define id (hash of what), collision rule, and file-lock/merge for concurrent sessions. |
| G19 | Ingested context: no storage/retention/classification handling | Significant | v1 §5.1 | ERIC/CCB | Define storage, retention, and classification-marking handling for transcripts/docs. |
| G20 | No SBOM/license compliance on builder output | Significant | v1 §9 | ERIC/CCB, CODER | Add SBOM generation + license scan gate to the build. |
| G21 | `elicitation_log` vs `logs/elicitation.jsonl` — no canonical | Hygiene | v1 §5.1/§6 | CODER | Declare in-spec log canonical (R1's tracked spec makes this natural); mirror is derived. |
| G22 | No failure taxonomy | Significant | v1 (all skills) | CODER | Define behavior for malformed pack, abandoned elicitation, partial build. |
| G23 | Acceptance criteria not machine-checkable per skill | Significant | v1 §7–§9 | CODER | Add executable per-skill acceptance harness (beyond the e2e smoke). |
| G24 | Orphan `fidelity_stage: buildable` | Hygiene | v1 §5.1 | CODER | Assign an actor/transition that sets `buildable`, or remove the stage. |
| G25 | No behavior when concept exceeds library capability | Significant | v1 §4/§9 | CODER | Act on pack `capabilities`/`gaps`: detect over-reach, surface it, route to gap/escape-hatch. |

---

## Notes

- R1 fixes are cross-cutting: G2/G5/G6 all touch the schema, and G1/G2/G9 all touch
  the directory layout. R1 presents the **net** schema and directory changes so the
  coding session applies them coherently rather than as ten conflicting edits.
- Several open items (G11, G13, G14, G16, G22) are best resolved **before** the
  coding session hardens the corresponding surface; flag for R2 scoping.
