# ux-tool-suite — Claude session context

## What this repo is

A three-skill agentic UX pipeline that takes a product idea from concept spec → wireframe → interactive prototype → production build. Each skill is a self-contained `SKILL.md` bundle. A shared Python library and JSON Schema layer enforce the contract between skills.

Branch: `claude/relaxed-goldberg-hc7mo0`

---

## Skill pipeline

```
company-ux-designer   →  company-ux-prototyper  →  company-ux-builder
     (design)                  (MF2 React)             (Docker + Playwright)
```

- **Designer**: loads knowledge pack, runs elicitation, emits SVG wireframes + HTML mockup, advances concept spec to `mockup`
- **Prototyper**: generates pnpm workspace MF2 monorepo (shell + remotes), advances spec to `interactive_prototype`
- **Builder**: adds Dockerfiles, Playwright e2e/visual/a11y, advances spec to `built`

Each skill lives at `skills/<name>/SKILL.md`. Run `python scripts/sync_shared.py` after editing shared code.

---

## Key contracts

### Concept Spec (`shared/schemas/concept-spec.schema.json`)
Versioned JSON. Required fields: `schema_version`, `id`, `version`, `fidelity_stage`, `intent`.

Fidelity ladder (single-step only): `draft → wireframe → mockup → interactive_prototype → buildable → built`

```python
from ux_suite.spec import ConceptSpec
s = ConceptSpec.load(Path('workspaces/my-concept/spec/concept-spec.json'))
s.validate()
s.advance_stage()  # enforces single-step + per-stage preconditions
```

### Knowledge Pack (`shared/schemas/knowledge-pack.schema.json`)
Open-UI-shaped JSON describing a component library. Key: `meta`, `tech_stack`, `components[]`.

```python
from ux_suite.knowledge import KnowledgePack
kp = KnowledgePack.load(Path('shared/schemas/examples/knowledge-pack.chakra-ui.json'))
kp.get_component('Avatar')   # by name or alias, case-insensitive
kp.covers('switch toggle')   # substring match across all component needs
```

Chakra UI v3.36.0 knowledge pack: `shared/schemas/examples/knowledge-pack.chakra-ui.json`

---

## Workspaces

Each workspace at `workspaces/<concept-id>/`:
```
spec/concept-spec.json        # validated spec, single source of truth
design/                       # SVG wireframes, HTML mockup
prototype/                    # pnpm MF2 workspace
  packages/shell/             # :3000, ChakraProvider host
  packages/<remote>/          # :3001, exposes ./App
  pnpm-workspace.yaml
  .npmrc                      # node-linker=hoisted (required on Windows)
logs/elicitation.jsonl
```

Existing workspaces: `task-manager`, `settings-panel`, `user-directory`, `weather-dashboard`

---

## MF2 prototype topology

- Shell (`packages/shell`, port 3000): `ChakraProvider value={defaultSystem}` host, lazy-loads remote via `React.lazy(() => import('remoteName/App'))`
- Remote (`packages/<name>`, port 3001): exposes `'./App': './src/App'`, also has standalone `main.tsx` with own `ChakraProvider` for dev

**Run any prototype:**
```bash
cd workspaces/<concept-id>/prototype
pnpm install    # first time; node-linker=hoisted is applied via .npmrc
pnpm dev        # starts both servers via concurrently
# Open :3001 for standalone view (most reliable)
# Open :3000 for federated shell (requires browser to broker MF2 handshake)
```

**vite.config.ts shared rules:**
- Only `react`, `react-dom`, `react-router-dom` in MF2 `shared:{}` — never `@chakra-ui/react`
- Root `tsconfig.json` with `references` to each package (required by MF2 DTS plugin)
- `onlyBuiltDependencies: [esbuild]` in `pnpm-workspace.yaml` (top-level key, not under `pnpm:`)

---

## Chakra UI v3 critical rules

| Wrong | Correct |
|---|---|
| `<Provider>` | `<ChakraProvider value={defaultSystem}>` |
| `colorScheme="blue"` | `colorPalette="blue"` |
| `<Tooltip label="...">` | `title` attr on the element — Tooltip is compound-only |
| `@chakra-ui/react` in MF2 `shared` | Remove it — causes module resolution conflicts |
| `<Avatar name="x" />` | `<Avatar.Root><Avatar.Fallback>AB</Avatar.Fallback></Avatar.Root>` |

All components are compound (namespace objects). Pattern:
```tsx
import { Avatar, Switch, Tabs, Dialog, Drawer, Checkbox, RadioGroup } from '@chakra-ui/react'
// Always use: ComponentName.Root / .Trigger / .Content / etc.
```

---

## Python helpers

```bash
# Run tests
python -m pytest shared/lib/ux_suite/tests/   # 48 tests

# Scaffold new workspace
python scripts/new_concept.py <slug> --goal "What it does"

# Sync shared/ into skill bundles (after editing shared code)
python scripts/sync_shared.py
```

`PYTHONPATH=shared/lib` or add `shared/lib` to sys.path.

---

## Windows gotchas

- **pnpm MAX_PATH**: `.npmrc` with `node-linker=hoisted` is already in each prototype. If you add a new prototype, include it.
- **pnpm v11 build approval**: `onlyBuiltDependencies` must be a top-level key in `pnpm-workspace.yaml`, not nested under `pnpm:`. The `"pnpm"` field in `package.json` is ignored in v11.
- **Trailing commas in JSON**: `package.json` must be strict JSON (no trailing commas).

---

## Decisions reference

Full decisions log: `DECISIONS.md` (D1–D14). Key ones:

| ID | Decision |
|---|---|
| D1 | Open-UI shape for knowledge packs |
| D4 | Concept Spec is the skill-to-skill contract |
| D5 | Fidelity ladder: 6 stages, single-step only |
| D6 | MF2 topology: one shell + one remote per major view |
| D11 | Builder reuses MF2 topology from prototyper output |
| D13 | `sync_shared.py` keeps skills self-contained |
