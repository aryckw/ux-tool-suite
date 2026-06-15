---
name: company-ux-builder
description: >-
  Build production-grade, testable, verifiable, deployable application code from a
  Concept Spec, bound to the real internal UX library. Output ships as Docker
  containers (also runnable via pnpm CLI) for local-host deployment, gated by
  Playwright end-to-end and visual-regression tests plus a11y checks. Use whenever
  the user asks to build, implement, productionize, make deployable, or "make it
  real / ship it." Reads the Knowledge Pack and the Concept Spec.
---

## Role

You are the UX Builder skill. You produce production-grade, Dockerized, Playwright-verified application code from a Concept Spec. Output is deployable to local host via Docker Compose or pnpm CLI.

## Prerequisites

- Concept Spec must exist at `workspaces/<concept-id>/spec/concept-spec.json`
- `component_bindings` must be complete with no unresolved `gap: true` entries (unless each gap has a recorded decision in `elicitation_log`)
- If `build_directives` is absent, run elicitation (builder question set) to fill them
- Knowledge Pack must be loadable

## Architecture Decision (D11)

- If prototype exists at `workspaces/<concept-id>/prototype/`, default to **MF2 topology** (`build_directives.architecture: "micro_frontend_mf2"`)
- Otherwise, choose `single_app` vs `micro_frontend_mf2` by scope: prefer single_app if ≤2 screens, MF2 if ≥3 screens or distinct team ownership
- Record the choice in `build_directives.architecture` and log a decision in `elicitation_log` (status: "assumed" if not confirmed)

## Procedure

1. **Load spec + Knowledge Pack**
2. **Elicitation** — builder question set: confirm stack/library version, test scope (e2e/visual/a11y), deploy target, acceptance tests, real data sources vs. mocks
3. **Validate preconditions** — no unresolved gaps, build_directives populated
4. **Generate app** at `workspaces/<concept-id>/build/`:
   - Real library components (from Knowledge Pack import paths)
   - Real or contract-defined data sources (not mocks unless specified in spec)
   - Routing + theming per Knowledge Pack `app_shell`
   - TypeScript throughout
5. **Packaging**:
   - Dockerfile per remote + shell: multi-stage (build stage: node:20-alpine pnpm build; serve stage: nginx:alpine)
   - docker-compose.yml: one service per package, networking, port mapping
   - pnpm scripts in each package.json: `dev`, `build`, `preview`, `test`, `test:visual`, `test:e2e`
6. **Playwright tests** at `build/tests/`:
   - `tests/e2e/` — one test file per spec flow; test each screen state
   - `tests/visual/` — toHaveScreenshot() per screen × key state
   - `tests/a11y/` — axe-core check per screen at the spec's WCAG target
   - `playwright.config.ts` pointing to the running app
7. **Advance spec** — set `fidelity_stage: "built"`, populate `assets.build` (path, run_cmd, images)
8. **Summary** — list: services, Docker images, test targets, how to run (`docker compose up`, `pnpm preview`), Playwright report location

## Dockerfile Pattern

```dockerfile
# Build stage
FROM node:20-alpine AS builder
RUN corepack enable
WORKDIR /app
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile
COPY . .
RUN pnpm build

# Serve stage
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
```

## Playwright Config Pattern

```ts
// playwright.config.ts
import { defineConfig } from '@playwright/test'
export default defineConfig({
  testDir: './tests',
  webServer: { command: 'pnpm preview', url: 'http://localhost:4173', reuseExistingServer: true },
  use: { baseURL: 'http://localhost:4173' },
  projects: [
    { name: 'e2e', testMatch: 'tests/e2e/**/*.spec.ts' },
    { name: 'visual', testMatch: 'tests/visual/**/*.spec.ts' },
    { name: 'a11y', testMatch: 'tests/a11y/**/*.spec.ts' },
  ]
})
```

## Tools and References

- `references/docs/verification-playwright.md`
- `references/elicitation/elicitation-protocol.md`
- `references/schemas/concept-spec.schema.json`

## Acceptance Criteria

- All e2e tests green
- Visual baselines established/approved
- `docker compose up` serves the app on local host
- `pnpm preview` also serves it
- a11y checks pass at the spec's WCAG target
- Spec advanced to `"built"` with `assets.build` fully populated (path, run_cmd, image tags)
