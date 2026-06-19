# company-ux-suite — Build Instruction Set, v2.1 (change-spec)

> **Artifact version: 2.1 — LOCKED baseline.** Frozen on approval. Supersedes
> selected sections of v1.0; v1.0 remains locked as the prior baseline. This
> document expresses **deltas only** — any v1 section not referenced here is
> unchanged and still in force. Do not edit in place; supersede via a v3 artifact
> with a recorded change rationale.

**Audience:** an agentic coding session (Claude Code). Execute the deltas in order
(Section 12), running the §8 due-diligence spike before wiring generative pieces.

---

## 0. Relationship to v1 and the governing principle

v1 builds UI by **authoring static artifacts** (agent writes SVG/HTML/React;
builder ships deterministic, Dockerized, Playwright-gated code). v2 adds
**runtime generative UI** drawn from **thesysdev/openui** ("OpenUI-Lang") — a
registered component library compiled into a model contract, with a renderer
composing UI live from streamed model output restricted to registered components.

**Governing principle (hardened):**

> **Generative UI is a design/prototype accelerator ONLY. It uses only components
> that exist in the company UI framework. Every delivered build is static,
> deterministic, and passes the v1 verification gates. No model runs in delivered
> applications.**

This means: there is **no delivered/runtime generative surface** in v2.x, **no
model-hosting concern in production**, and the builder is effectively v1 plus the
ability to graduate a generative-accelerated prototype into static code.

---

## 1. Decision ledger — additions (append to `DECISIONS.md`)

| # | Decision | Status |
|---|----------|--------|
| D15 | Three "OpenUI"s disambiguated: **OUI-Spec** = W3C `open-ui.org` (abstract component meta-model; v1 anchor); **OpenUI-Lang** = thesysdev/openui at openui.com (generative runtime; new in v2); wandb/openui out of scope. | Fixed |
| D16 | OUI-Spec and OpenUI-Lang are complementary: OUI-Spec defines *what a component is*; OpenUI-Lang defines *how a model emits/renders it from a registered library*. v2 uses both. | Fixed |
| D17 | Add **`runtime_mode`** to the Concept Spec: `static` \| `generative_accelerated`. Default `static`. It describes the **design/prototype approach only** — the build is **always static**. | Fixed |
| D18 | **Hard boundary:** generative UI exists only at the design/prototype stages. All builds are static and pass the v1 gates (e2e + visual regression + a11y). | Fixed |
| D19 | The Knowledge Pack stays **canonical**; its OpenUI-Lang registration (Zod contracts + generated prompt) is a **derived, regenerable** artifact used only to fuel the prototype loop. | Fixed |
| D20 | `component_bindings` stay canonical; the OpenUI-Lang `render_artifact` is **compiled from** bindings, never hand-authored. | Fixed |
| D21 | Generative streaming is the **default fast prototype path**; the v1 MF2 scaffold is retained as **opt-in** for true multi-remote composition or direct MF2-build continuity. | Confirmed |
| D22 | **Adopt `@openuidev/lang-core`** (MIT, pinned) as the generative runtime. The §8 spike is **due-diligence verification** (license scan, version pinning, offline/vendoring, security review), not a fork. Fallback `vendor-minimal` only if a check fails; `defer` only on a blocking compliance issue. | Resolved → adopt |
| D23 | Generative runs **only in the dev/prototype loop on local host**; an external model API is acceptable there (secrets via env only). **No model in delivered apps**, so no enclave/self-hosted policy is required for production. | Resolved |
| D24 | **Builder is static-only.** No generative or adaptive build path. Builder = v1 §9, plus explicit support for consuming bindings proven in a generative prototype. | Resolved |
| D25 | Vue/Svelte/email/mobile reach and OpenUI-Lang's built-in component libraries are **out of scope** — the company library remains the sole component source; OpenUI-Lang is the *mechanism*, not the *component source*. | Fixed |
| D26 | Generative prototyping uses **only registered, `generative_eligible` company components**. The render-contract compiler **hard-fails** on any unregistered component. No components are invented at prototype time in v2.x. | Fixed (per your #4) |
| D27 | **Future seam — new-component authoring.** When a binding hits a gap, v2.x records a structured `component_gap` (with an OUI-Spec-shaped `proposed_component` stub) and degrades gracefully; it does **not** create the component. A future version turns this record into a governed component-authoring + library-contribution workflow (CCB-style approval into the company library). v2 must record gaps in a forward-compatible shape so this is not designed out. | Reserved (per your #4) |

---

## 2. Concept Spec schema — deltas (extends v1 §5.1)

Add these top-level properties; everything else in v1 §5.1 is unchanged.

```
runtime_mode:
  enum: [static, generative_accelerated]   # default: static
  note: describes design/prototype approach only; the build is always static

generative:                                # populated only when generative_accelerated
  library_registration_ref: string         # compiled OpenUI-Lang library (Zod + prompt), derived
  render_artifact: string                   # DERIVED OpenUI-Lang for the concept, compiled from bindings
  prototype_model_provider:                 # DEV/PROTOTYPE LOOP ONLY
    kind: enum [external_api, local]        # never shipped; secrets via env
    ref: string

component_gaps:                            # forward-compatible record for D27
  - screen_id: string
    need: string
    proposed_component:                     # OUI-Spec-shaped stub (NOT created in v2.x)
      name: string
      anatomy: [...]
      props: [...]
      states: [...]
      accessibility: {...}
    status: enum [flagged, deferred]        # v2.x: flagged|deferred; future: proposed|approved|authored
```

Lifecycle additions (`ux_suite/spec.py`):

- `runtime_mode: static` ⇒ `generative` MUST be empty.
- `render_artifact` MUST be (re)compiled from `component_bindings`; mark stale if
  bindings change after compilation.
- A generative prototype with an unresolved gap MUST NOT silently render that
  region; the compiler raises a structured gap (see §4) and the region either
  falls back to the static path or is recorded in `component_gaps` and deferred.
- `prototype_model_provider` is never copied into any `build` artifact.

---

## 3. Knowledge Pack / Phase 0 — deltas (extends v1 §4)

Phase 0 additionally emits, from the same React-source extraction, an
**OpenUI-Lang library registration** used only to fuel the prototype loop:

- Per component, derive a typed contract (Zod) from extracted `props`+`states`+
  `variants`, plus a model-facing description.
- Mark each component **`generative_eligible`** (boolean). Default **false** for
  components performing side effects, auth, navigation-with-consequences, or
  destructive actions — these stay static-only and are never offered to the model.
- Emit a generated **system prompt** and **schema** for the eligible subset
  (mirrors OpenUI-Lang's library→prompt/schema capability). Store as **derived**
  artifacts beside the canonical Knowledge Pack (D19).
- Extend `coverage_report[]` with `generative_eligible` and `contract_confidence`.

Author `shared/docs/openui-lang-registration.md` describing the compilation and the
eligibility policy. The canonical v1 §4.1 fields are unchanged; this is a derived
layer beside them, and it never ships in a delivered build.

---

## 4. New shared module — render-contract compiler

Add `shared/lib/ux_suite/render_contract.py` (Python, per v1 D10):

- **Input:** the OpenUI-Lang registration subset + a Concept Spec's
  `component_bindings` + `composition`.
- **Output:** the concept's OpenUI-Lang `render_artifact` + the library system
  prompt to feed the prototype-loop model.
- **Guarantees (D26):** only `generative_eligible` components may appear; any
  binding to an unregistered/ineligible component raises a structured
  `ComponentGapError` carrying an OUI-Spec-shaped `proposed_component` stub
  (feeds `component_gaps`, D27) — never a silent omission.
- Runtime parse/stream/render is provided by `lang-core` (D22). This module only
  produces inputs and validates the model's streamed output against the schema.

---

## 5. `company-ux-prototyper` — deltas (supersedes v1 §8 procedure; frontmatter updated)

Updated `description`:

```yaml
description: >-
  Generate a real, running, interactive prototype from a concept. Default fast
  path: stream OpenUI-Lang from the company component library and render it live
  for near-instant, throwaway-friendly iteration with no per-concept app scaffold,
  using ONLY components that exist in the company UI framework. Opt-in path:
  scaffold a Vite + React + Module Federation 2.0 micro-frontend app (shell +
  remotes) when the concept needs true multi-remote composition or will graduate
  directly into an MF2 build. Use whenever the user asks to prototype, make
  interactive/clickable, "show a working version," or "turn the concept from this
  meeting into something I can click through." Reads or bootstraps a Concept Spec;
  reads the Knowledge Pack.
```

Procedure:

1. Default to the **generative fast path** (`runtime_mode: generative_accelerated`)
   unless flagged for MF2 (D21).
2. **Generative path:** compile the render contract (§4); stream OpenUI-Lang into
   the `lang-core` renderer with sample/mocked data; expose the live surface;
   iterate by editing bindings/composition and recompiling — no scaffold, no
   rebuild. On a gap (D26): route that region via the static mockup path **or**
   record a `component_gap` and defer (D27); never invent a component.
3. **MF2 path:** unchanged from v1 §8.
4. Either path: smoke-checks only; write/advance the Concept Spec to
   `interactive_prototype`; record `render_artifact` (if generative).

Acceptance: live preview renders from the spec; (generative) only registered
components appear and streamed output validates against the schema; gaps are
recorded, not faked; (MF2) shell composes ≥1 remote.

---

## 6. `company-ux-builder` — deltas (extends v1 §9; D18/D24)

Builder is **static-only**, exactly as v1 §9 (production code on the real library,
Dockerized + pnpm CLI, Playwright e2e + visual regression + a11y gates). The single
delta:

- **Graduation route:** accept a Concept Spec whose prototype was
  `generative_accelerated`, and compile its **proven `component_bindings`** into
  authored, deterministic, gated code. The generative `render_artifact` is a design
  aid only and is **not** carried into the build; the bindings are.
- No generative, adaptive, or model-embedding output is produced. No
  `prototype_model_provider` reaches the build.

This keeps the entire delivered surface verifiable and certifiable.

---

## 7. Interactive front door — resolved default (low stakes)

`[ASSUMPTION]` Use `@openuidev/react-headless` for streaming state **in the
prototype-preview loop only**; keep intent classification in a thin,
vendor-agnostic router (v1 D9). No coupling of routing logic to any vendor package.
Revisit freely; nothing downstream depends on this choice.

---

## 8. GATE — `lang-core` due-diligence spike (run before wiring §§3–5 generative)

Posture is **adopt** (D22). The spike verifies, it does not decide:

1. **License/compliance:** MIT confirmed; transitive-dependency license scan clean.
2. **Pinning/stability:** pin exact versions (pre-1.0); record an upgrade policy.
3. **Offline/vendoring:** renderer + library run from a private mirror / vendored
   copy with no runtime calls to vendor infrastructure.
4. **Security:** streamed-output handling reviewed; registered-components-only
   rendering confirmed; no `eval`/dynamic-code-execution paths.

Outcome: `adopt` (default) · `vendor-minimal` (only if a check fails — copy/trim
the parser+renderer) · `defer` (only on a blocking compliance issue — ship v2's
static-relevant deltas and revisit). Produce `docs/spike-lang-core.md` + a
`DECISIONS.md` entry.

---

## 9. Generative-UI scope & security policy (D23, simplified)

- Generative UI runs **only** in the dev/prototype loop on local host.
- External model API acceptable there; secrets via env only; never inlined into
  specs or artifacts. Optionally log prototype generations for audit.
- **No model, prompt, registration, or `render_artifact` ships in any delivered
  build.** Therefore no enclave/self-hosted-model requirement exists for
  production, and no runtime injection surface exists in delivered apps.
- Structural safety in the loop comes from registered-components-only rendering
  plus schema validation of streamed output before render.

---

## 10. Future versions / reserved seams (do not build now)

- **New-component authoring (D27, per your #4):** a future skill turns a
  `component_gap` into a designed OUI-Spec component, prototypes it, and proposes
  it for governed (CCB-style) contribution into the company library. v2.x only
  records the gap in a forward-compatible shape.
- **Delivered runtime generative UI:** explicitly out of scope now; the
  static/generative boundary (D18) is what would be revisited if ever in scope.
- **SDAAD integration:** v1 §11 seam unchanged; the compiled library
  registration is a natural SDAAD constitution-layer artifact, the Concept Spec
  the contract layer.

---

## 11. Out of scope for v2

Vue/Svelte/email/mobile/browser-bundle targets; OpenUI-Lang's built-in component
libraries as a component source; delivered/runtime generative UI; automatic
creation of new components.

---

## 12. Build sequencing — deltas (after the v1 scaffold exists)

1. **GATE:** run the §8 due-diligence spike → record outcome (default `adopt`).
   If `defer`, apply only the static-relevant deltas and stop.
2. Apply Concept Spec schema deltas (§2): `runtime_mode`, `generative`,
   `component_gaps` + lifecycle rules; add one `static` and one
   `generative_accelerated` example spec.
3. Apply Phase 0 / Knowledge Pack deltas (§3): OpenUI-Lang registration +
   `generative_eligible` policy + `openui-lang-registration.md`. Exercise now
   against the v1 mock library.
4. Implement `render_contract.py` (§4) with `ComponentGapError` + tests.
5. Update the prototyper (§5): generative fast path + retained MF2 opt-in + gap
   handling.
6. Update the builder (§6): confirm static-only; add the graduation route that
   consumes generative-origin bindings.
7. Apply the front-door default (§7). Run `sync_shared.py`.

**Definition of done (v2.1 delta phase):**
the §8 spike is recorded; the static v1 pipeline is **unchanged and still green**;
the generative fast path renders a live preview of the weather-dashboard concept
from the mock library using **only registered components**; a deliberate gap
produces a recorded `component_gap` + graceful fallback (not a crash, not an
invented component); a `generative_accelerated` prototype graduates to a `static`
build with v1 gates intact and **no model/registration/render_artifact present in
the delivered output**; and Phase 0 swap-in of the real library still requires no
skill code changes.
