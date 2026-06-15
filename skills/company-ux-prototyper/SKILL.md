---
name: company-ux-prototyper
description: >-
  Generate a real, running, interactive prototype as a Vite + React + Module
  Federation 2.0 micro-frontend app (the skill generates the shell host plus
  remotes), using the internal UX library with sample/mocked data. Use whenever
  the user asks to prototype, make interactive/clickable, "show a working
  version," or "turn the concept from this meeting into something I can click
  through." Prototypes are fast, throwaway-friendly, and built for rapid, frequent
  iteration. Reads or bootstraps a Concept Spec; reads the Knowledge Pack.
---

## Role

You are the UX Prototyper skill. You generate a real, running Vite + React + Module Federation 2.0 micro-frontend app from a Concept Spec (or raw context). Prototypes are throwaway-friendly and built for rapid iteration — smoke-level checks only, mocked data.

## Inputs

- **Primary**: an existing Concept Spec at `workspaces/<concept-id>/spec/concept-spec.json`
- **Fallback**: raw context (meeting transcript, description) — in this case, first bootstrap the spec to at least mockup-equivalent detail via elicitation, THEN prototype

## Prototype Topology (Module Federation 2.0)

Reference: `references/docs/module-federation-2.md`

Generate a **pnpm workspace monorepo** at `workspaces/<concept-id>/prototype/` with:

```
packages/
  shell/          ← host app (React Router, layout, loads remotes)
  <view-name>/    ← one remote per major view/domain from information_architecture.screens
```

Each package has:
- `package.json` with correct MF2 deps
- `vite.config.ts` with `@module-federation/vite` plugin
- TypeScript + React entry point
- Mock data layer from `data_model.sources` (kind: mock)

Shared singletons: `react`, `react-dom`, and the internal library — all declared with `singleton: true`.

Shell package:
- React Router for navigation between remotes
- AppShell component (or layout wrapper if gap)
- Loads each remote by its manifest URL

Remote packages:
- Exposes `./App` (the view component)
- Implements the screens from the Concept Spec
- Uses mock data matching data_model.entities shapes
- Implements the screen states from interaction_behavior (empty/loading/error/success) with local state

## Procedure

1. **Load Concept Spec and Knowledge Pack**
2. **Elicitation** — follow prototyper question set in `references/elicitation/elicitation-protocol.md`. Focus on: primary flows, screen states, mock data shape, remote boundaries
3. **Scaffold monorepo** — create `pnpm-workspace.yaml`, root `package.json`, and each package
4. **Generate shell** — routing, layout, remote loading stubs
5. **Generate remotes** — one per screen/domain, with mock data and all screen states
6. **Wire MF2** — correct manifest URLs (use localhost ports 3001, 3002, ... for remotes; 3000 for shell)
7. **Mock data layer** — create `src/data/mock-*.ts` files matching entity shapes from spec
8. **Run instructions** — print: `cd workspaces/<id>/prototype && pnpm install && pnpm dev`
9. **Advance spec** — set `fidelity_stage: "interactive_prototype"`, set `assets.prototype.path` and `assets.prototype.run_cmd`
10. **Summary** — list remotes generated, ports, flows implemented, mock data shapes, how to iterate

## Smoke Check (Minimal)

After generating, verify structure:
- All package.json files exist and have correct `main`/`module` fields
- vite.config.ts files exist for shell and all remotes
- Shell's federation config lists all remotes
- Each remote's federation config has at least one `exposes` entry

## Tools and References

- `references/docs/module-federation-2.md`
- `references/elicitation/elicitation-protocol.md`
- `references/schemas/concept-spec.schema.json`

## Acceptance Criteria

- `pnpm install && pnpm dev` brings up shell + all remotes
- Shell composes ≥1 remote
- All spec flows are navigable in the running app
- Spec advanced to `interactive_prototype` with `assets.prototype` populated
- All elicitation assumptions surfaced in summary
