# Decision Ledger — company-ux-suite

> Append future changes with date + rationale. Never edit existing rows in place.

| # | Decision | Rationale |
|---|----------|-----------|
| D1 | Component meta-model = **open-ui.org** shape (anatomy → parts → states → behaviors → a11y). wandb/openui out of scope. | A formal, framework-agnostic definition of "what a component is." |
| D2 | Internal library is a **modern React** codebase, ingested from `/internal_ui_stack` in a separate **Phase 0** session. | Library content is not yet available; only its information requirements are defined now. |
| D3 | **Three skills**, not one: `company-ux-designer`, `company-ux-prototyper`, `company-ux-builder`, over a shared kernel. | Distinct success criteria, toolchains, and triggering intents. |
| D4 | One **progressively-enriched Concept Spec** is the inter-skill contract; it behaves like a configuration baseline (monotonic enrichment + provenance). | Single source of truth across stateless Claude Code sessions. |
| D5 | Fidelity ladder: **wireframe = SVG**, **mockup = HTML/Tailwind**, **prototype = real running micro-frontend app**, **build = production app**. | Matches requested artifact fidelities. |
| D6 | Prototype topology = **Vite + React + Module Federation 2.0**; the skill **generates the shell** plus remotes. | MF2 is the current default for same-framework (React) micro-frontends; shell is not assumed to pre-exist. |
| D7 | Prototype vs. build boundary: prototypes are fast concept validation with **sample/mocked data, smoke-level checks, throwaway-friendly, rapid iteration**; builds are **production-grade, bound to the real library, Dockerized + pnpm CLI, deployable to local host, Playwright-gated**. | Approved boundary. |
| D8 | Verification = **Playwright** for e2e **and** visual regression (plus axe-core a11y checks, since a11y is in the component model). | Single tool covers both requested checks. |
| D9 | Host = **Claude Code**; skills authored as portable `SKILL.md` Agent Skills with no Claude-Code-only assumptions. | Portability across agentic sessions. |
| D10 | Helper scripts (validators, scaffolders, spec ops) in **Python**; generated UI apps use the **pnpm/Vite/React/TS** toolchain. | Approved language split. |
| D11 | `[ASSUMPTION]` Builder reuses the prototype's MF2 topology when one exists; otherwise it selects single-app vs. micro-frontend by scope and records the choice in `build_directives.architecture`. | Confirmed shell-gen + MF2 for prototypes but topology not pinned for builder; this default preserves continuity and is overridable per-concept. |
| D12 | `[ASSUMPTION]` Repo name `company-ux-suite` (houses three skills). Original working name was `company-ux-designer-skill`; renamed to avoid collision with the `company-ux-designer` skill. | Naming clarity; trivially renamable. |
| D13 | `[ASSUMPTION]` Shared resources are authored once under `shared/` and **synced** into each skill bundle by `scripts/sync_shared.py`, so each skill stays self-contained and independently packageable while staying DRY. | Reconciles Agent-Skills self-containment with a shared kernel. |
| D14 | No SDAAD integration now, but a reserved seam is included (Section 11). | Approved; avoid designing out the future state. |
