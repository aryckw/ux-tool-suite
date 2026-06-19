# company-ux-suite — Change Package R1 (applies G1–G10)

> **Artifact version: R1 — LOCKED.** A configuration change package against the
> locked baselines **v1.0** and **v2.1**. Supersedes the specific sections named
> below; everything else in v1.0/v2.1 is unchanged. The effective baseline of
> record is now **v1.0 + v2.1 + R1**. Do not edit in place; supersede via a
> further change package (R2) with a recorded change rationale.
>
> **Class:** treat as a Class I change (alters interfaces: directory layout, the
> Concept Spec schema, and lifecycle gates). Each change is keyed to a gap ID from
> `GAP-ANALYSIS.md`.

**Audience:** the agentic coding session. Apply the **net** directory + schema +
lifecycle changes in §§1–3 first (they consolidate several gap fixes), then §§4–7.

---

## 0. Decision ledger — additions (append to `DECISIONS.md`)

| # | Decision | Fixes |
|---|----------|-------|
| D28 | Concept Specs, design artifacts, frozen build source, and snapshots are **version-controlled** under a tracked `concepts/<id>/`; only throwaway prototype/build working output is ephemeral under `workspaces/<id>/`. | G1 |
| D29 | Generated **build source is a committed, frozen artifact**; regeneration is an explicit, reviewed re-baseline action. Builds carry `build_provenance`. | G2 |
| D30 | A spec's `component_bindings` are **revalidated against the current Knowledge Pack**; a pack version bump flags `pack_drift` and blocks stage advance until revalidated. | G3 |
| D31 | The Concept Spec schema is **versioned and migratable** (`schema_version` 2.0; `migrate.py`); objects are **closed** (`additionalProperties:false`) except the reserved `sdaad`. | G4 |
| D32 | A generative prototype's effective composition is **captured back** into the canonical spec and human-confirmed before a build may graduate. | G5 |
| D33 | **One** gap model: `component_gaps[]` with a `status` enum and a `decision` object. The `component_bindings[].gap` boolean is removed. | G6 |
| D34 | Binding `props` are **validated against the bound component's pack contract** at write time. | G7 |
| D35 | `generative_eligible` is a **human-reviewed, default-deny allowlist**; static inference only proposes. | G8 |
| D36 | A sanctioned **`escape_hatch`** path allows an isolated, labeled, logged one-off static component (static build only; excluded from the certifiable-library claim). | G9 |
| D37 | `sync_shared.py --check` fails on drift; enforced via pre-commit + CI; synced copies are banner-marked generated. | G10 |

---

## 1. Net directory layout (supersedes v1 §3 trees + `.gitignore`) — G1, G2, G9

Replace the per-concept layout and ignore rules with:

```
company-ux-suite/
├── concepts/                         # TRACKED — the baseline of record
│   └── <concept-id>/
│       ├── spec/concept-spec.json    # canonical source of truth (now tracked)
│       ├── spec/history/vN.json      # tracked version snapshots
│       ├── design/                   # tracked: *.svg wireframes, *.html mockups
│       ├── build/                    # tracked: FROZEN generated source (G2)
│       │   ├── src/ ...              #   committed, reviewed application code
│       │   ├── __snapshots__/        #   committed Playwright visual baselines
│       │   └── _escape_hatch/        #   isolated one-off components (G9), if any
│       ├── logs/elicitation.jsonl    # tracked provenance mirror
│       └── provenance.json           # build_provenance records (G2)
├── workspaces/                       # EPHEMERAL (gitignored) — throwaway only
│   └── <concept-id>/
│       ├── prototype/                # generative or MF2 prototype app (disposable)
│       └── build-work/               # transient build/test working dir, node_modules, dist
└── ...                               # (skills/, shared/, scripts/, reference-lib/, internal_ui_stack/ unchanged)
```

`.gitignore` (net): ignore `workspaces/`, `**/node_modules/`, `**/dist/`,
`**/.vite/`, `.venv/`. **Do not ignore `concepts/`.** Asset paths in the spec now
resolve under `concepts/<id>/` for tracked outputs and `workspaces/<id>/` for the
disposable prototype. `assets.build.path` MUST point at the frozen
`concepts/<id>/build/`.

---

## 2. Net Concept Spec schema delta (supersedes v1 §5.1 + v2.1 §2) — G4, G5, G6, G2

Apply all of the following to `concept-spec.schema.json`:

1. **Versioning + closure (G4):** set `schema_version` to `const "2.0"`; add
   `"additionalProperties": false` to the root and every object subschema **except**
   `sdaad` (which stays open/reserved). Update `required` to include `runtime_mode`.
2. **Remove** `component_bindings[].gap` (G6).
3. **Replace/extend `component_gaps[]`** (G6, supersedes v2.1's stub) with:

```
component_gaps:
  - id: string
    screen_id: string
    need: string
    proposed_component:               # OUI-Spec-shaped stub (not created in v2.x)
      name, anatomy[], props[], states[], accessibility{}
    status: enum [flagged, deferred, escape_hatch, resolved]   # flagged = unresolved
    decision:                         # REQUIRED unless status == flagged (supplies the gate's missing field)
      by: string                      # human or "agent"
      rationale: string
      timestamp: date-time
    escape_hatch_ref: string          # path under concepts/<id>/build/_escape_hatch/ when status==escape_hatch
```

4. **Add `generative.captured` + capture pointer (G5):**

```
generative:
  ...                                 # (v2.1 fields retained)
  captured: boolean                   # default false; true only after write-back (R1-3 gate)
  capture_diff_ref: string            # path to the confirmed prototype→spec diff
```

5. **Add `build_provenance` (G2):**

```
build_provenance:
  - build_id: string
    source_hash: string               # hash of frozen concepts/<id>/build/src
    snapshot_baseline_hash: string
    generator: string                 # model/build identifier
    spec_version: integer             # spec.version this build was generated from
    timestamp: date-time
    regenerated_from: string|null     # prior build_id if this was a re-baseline
```

Mirror the versioning + closure rule (G4) into `knowledge-pack.schema.json`
(`schema_version` 2.0; closed objects).

---

## 3. Net lifecycle rules (supersedes v1 §5.2) — G3, G4, G5, G6, G7

Implement in `ux_suite/spec.py` (+ new `ux_suite/migrate.py`). On every load:

1. **Migrate-then-validate (G4):** `migrate.py` detects `schema_version`, upgrades
   `1.0 → 2.0` (inject `runtime_mode: static`; move any legacy
   `component_bindings[].gap:true` into a `component_gaps[]` entry with
   `status: flagged`), snapshots the pre-migration file to `spec/history/`, then
   validates against the 2.0 schema.
2. **Binding integrity (G6, G7):** every `component_bindings[].component` MUST exist
   in the **current** Knowledge Pack; its `props` MUST validate against that
   component's `props[]` contract (names, types, required, enum). A need with no
   covering component MUST appear in `component_gaps[]` (never a silent omission and
   no boolean).
3. **Pack-drift gate (G3):** if `knowledge_pack_ref.version` ≠ the loaded pack's
   `meta.library_version`, set `pack_drift: true` and **refuse to advance
   `fidelity_stage`** until bindings are revalidated (step 2) and `pack_drift`
   cleared. Record the revalidation in `elicitation_log`.
4. **Gap gate (G6):** refuse stage advance to `built` if any `component_gaps[]` has
   `status: flagged`. `deferred | escape_hatch | resolved` are permitted **only**
   with a populated `decision`.
5. **Capture gate (G5):** a `runtime_mode: generative_accelerated` concept MUST have
   `generative.captured == true` before the builder may graduate it; the builder
   consumes the captured canonical `composition`/`component_bindings`, never the
   (droppable) `render_artifact`.
6. **Monotonic enrichment + provenance:** unchanged from v1 §5.2 (snapshot before
   each `version` bump; `assumed` entries surfaced).

---

## 4. Knowledge Pack lifecycle + eligibility allowlist — G3, G8

- **Lifecycle doc:** add `shared/docs/knowledge-pack-lifecycle.md` defining: the
  **owner** who re-runs Phase 0 extraction, the **cadence** (on each library
  release and on demand), and a required `meta.changelog`/`meta.supersedes` so pack
  diffs are auditable. Add those fields to `knowledge-pack.schema.json`.
- **Eligibility (G8):** Phase 0 writes only `coverage_report[].generative_eligible_proposed`
  (inference). The **effective** `generative_eligible` is set solely from a tracked,
  **default-deny** allowlist `shared/generative-allowlist.yaml`
  (`component → {eligible: bool, reviewed_by, rationale}`). The render-contract
  compiler reads the reviewed flag only; anything absent is ineligible. Update
  `shared/docs/openui-lang-registration.md` accordingly.

---

## 5. Builder reproducibility (supersedes v1 §9 packaging/verification) — G2

- The builder writes generated application source into the **tracked, frozen**
  `concepts/<id>/build/src/` and commits Playwright visual baselines under
  `concepts/<id>/build/__snapshots__/`. The build is an artifact, not a per-run
  regeneration.
- **Regeneration is explicit:** a `--regenerate` action produces a diff against the
  frozen source for human review; on approval it overwrites the frozen source,
  re-baselines snapshots, and appends a new `build_provenance` record
  (`regenerated_from` set).
- **Gates run against the frozen artifact** (deterministic), not a fresh generation.
  Acceptance (v1 §9) otherwise unchanged.

---

## 6. Component-gap escape hatch (extends v2.1 D26/D27; updates builder) — G9

- When a `component_gaps[]` entry is set `status: escape_hatch` (with a `decision`),
  the **static builder only** may author a single isolated component under
  `concepts/<id>/build/_escape_hatch/`, clearly labeled as non-library and logged.
- Escape-hatch components are **never** offered to the generative path (registered-
  only, D26) and are **excluded** from any "bound to the certifiable company
  library" claim; they are flagged for the future authoring workflow (D27).
- Builder gate: `escape_hatch` satisfies the no-unresolved-gaps precondition (it is
  a recorded decision), unlike `flagged`.

---

## 7. `sync_shared.py` hardening + CI (supersedes v1 §10 self-containment) — G10

- Add `sync_shared.py --check`: exits non-zero if any skill's synced copy differs
  from canonical `shared/`. Default `sync_shared.py` (no flag) re-propagates.
- Every synced file gets a top banner: `GENERATED FROM shared/ — DO NOT EDIT HERE`.
- Add `.pre-commit-config.yaml` running `sync_shared.py --check`, and a CI job
  (`.github/workflows/sync-check.yml` or equivalent) doing the same on PRs.

---

## 8. Affected-files manifest + sequencing + DoD deltas

**New files:** `ux_suite/migrate.py`; `shared/docs/knowledge-pack-lifecycle.md`;
`shared/docs/generative-capture.md`; `shared/generative-allowlist.yaml`;
`.pre-commit-config.yaml`; CI sync-check workflow.
**Changed files:** `concept-spec.schema.json`, `knowledge-pack.schema.json`,
`ux_suite/spec.py`, `ux_suite/workspace.py` (new tracked/ephemeral split),
`scripts/sync_shared.py`, `.gitignore`, the prototyper SKILL (capture step), the
builder SKILL (frozen artifact + escape hatch), and both example specs (migrate to
2.0; add a worked `component_gaps`/capture example).

**Sequencing (insert before v1 §12 step 8 smoke / v2.1 §12):**
apply §1 layout → §2 schema → §3 lifecycle + `migrate.py` → migrate example specs →
§4 lifecycle/eligibility docs + allowlist → §5 builder freeze → §6 escape hatch →
§7 sync hardening + CI → re-run `sync_shared.py`.

**DoD additions:** old (1.0) example spec migrates cleanly to 2.0 and validates with
`additionalProperties:false`; a tracked `concepts/<id>/` is produced and the
disposable `workspaces/<id>/` is gitignored; a bindings-vs-pack mismatch is caught
by the pack-drift gate; a `flagged` gap blocks `built` while an `escape_hatch` gap
(with decision) passes; a generative prototype cannot graduate until
`captured == true`; a re-run build reproduces from the frozen source with a stable
snapshot baseline; and `sync_shared.py --check` fails on an injected drift.
