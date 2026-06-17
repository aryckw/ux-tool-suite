---
name: generate-knowledge-pack
description: >
  Produce a validated Knowledge Pack JSON file for any React component library —
  whether publicly hosted on GitHub/npm or available locally at /internal_ui_stack.
  The output is the primary input contract for the company-ux-designer skill and
  all downstream SDAAD pipeline stages.
inputs:
  - name: library_ref
    description: >
      One of: (a) a public GitHub URL (e.g. https://github.com/org/repo),
      (b) an npm package name at an optional version (e.g. @chakra-ui/react@3.36.0),
      or (c) the literal string "internal" to read from /internal_ui_stack.
    required: true
  - name: output_slug
    description: >
      Kebab-cased identifier for the output file.
      Result is written to shared/schemas/examples/knowledge-pack.<output_slug>.json.
    required: true
outputs:
  - name: knowledge_pack_path
    description: Absolute path of the written and validated JSON file.
  - name: coverage_confidence
    description: Fraction of components with confidence >= 0.8 (0–1).
  - name: gap_count
    description: Number of entries in the gaps[] array.
---

# Generate Knowledge Pack — Agent Procedure

## Purpose

A Knowledge Pack is the single source of truth about a component library for the
entire SDAAD pipeline. It answers three questions the designer, prototyper, and
builder skills ask at every step:

1. **Does the library cover this UI need?** (`kp.covers(need)`)
2. **What is the exact import and compound-component pattern?** (`kp.get_component(name)`)
3. **What gaps require third-party libraries or custom code?** (`kp.gaps`)

A Knowledge Pack that is wrong is worse than no Knowledge Pack — it causes the
prototyper to generate code that silently fails at runtime. Every claim must be
verified against source, not inferred from marketing copy or README descriptions.

---

## Strategy Selection

### Public library (GitHub or npm)

Use **WebFetch** to read source files directly from the repository. Prefer the
GitHub raw content URL pattern:

```
https://raw.githubusercontent.com/<org>/<repo>/<ref>/<path>
```

Determine `<ref>` by fetching `package.json` first — use the tag that matches the
target version (e.g. `v3.36.0`). If no tag exists, use `main`.

npm package contents can be browsed at:
```
https://unpkg.com/<package>@<version>/<path>
```

Use unpkg as a fallback when GitHub raw URLs 404.

### Internal library (`/internal_ui_stack`)

Use **Read** and **Glob** tools directly. Follow the source mapping in
`shared/docs/knowledge-pack-extraction.md`. Return to this file for the
output rules, confidence scoring, and validation steps — those are shared
between both strategies.

---

## Step-by-Step Procedure

Work through every step in order. Do not skip steps or reorder them.

### Step 1 — Resolve the library root and version

**Public:** Fetch `package.json` (or `packages/<main-package>/package.json` for
monorepos). Extract `name`, `version`, `peerDependencies`, `dependencies`,
`scripts.build`, `scripts.test`. Identify whether this is a monorepo (look for
`workspaces` field or a `packages/` directory).

**Internal:** Read `/internal_ui_stack/package.json`. Same fields.

Record: `meta.library_name`, `meta.library_version`, `tech_stack.*`.

### Step 2 — Locate the component barrel export

The barrel export (`index.ts` or `index.tsx`) defines the canonical name of
every public component. This is the authoritative list — if a component is not
exported from the barrel, exclude it.

**Public monorepos:** The barrel is typically at
`packages/<main-package>/src/index.ts`.

**Internal:** `src/index.ts` or `src/components/index.ts`.

Parse the export names. Build the initial `component_names[]` list. Compound
components (e.g. `Avatar`) may export as a namespace object — note this
pattern: you will record the sub-parts as `anatomy.parts[]`.

### Step 3 — Identify the styling system and design tokens

**CSS custom properties:** Look for `:root` blocks in theme files
(`tokens.css`, `theme.ts`, `tokens/colors.ts`). Record color, spacing,
radius, shadow, and typography scales.

**Tailwind:** Fetch `tailwind.config.ts` or `tailwind.config.js`. Resolve
`theme.extend.*`.

**Token JSON / Style Dictionary:** Parse directly — highest confidence.

Set `design_tokens.source.file` and `design_tokens.source.format`. Populate
`design_tokens.color.light`, `design_tokens.color.dark`, etc. It is acceptable
to record a representative subset (e.g., semantic color tokens only) and note
the full token count in a gap entry.

### Step 4 — Extract each component

For each name in `component_names[]`, fetch or read these files in priority
order. Stop once you have sufficient data (confidence 0.8+).

**Priority order:**
1. TypeScript props interface (`*Props` type in the component source file)
2. Anatomy / recipe file (often at `src/theme/recipes/<name>.ts` or
   `src/components/<Name>/<name>.anatomy.ts`)
3. Storybook story file (`<Name>.stories.tsx`)
4. Test file (`<Name>.test.tsx`)
5. MDX documentation file

**For each component, populate:**

| Field | Source |
|---|---|
| `name` | Barrel export name (canonical) |
| `aliases` | Alternative names users might ask for (e.g. "button" → ["btn", "cta"]) |
| `category` | One of: form, display, feedback, navigation, overlay, layout, data |
| `status` | `stable` / `beta` / `deprecated` — from source annotation or docs |
| `import.package` | npm package name |
| `import.export` | Exact named export (critical — must match source exactly) |
| `anatomy.parts` | Sub-component names for compound pattern (Root, Trigger, Content…) |
| `props[]` | Name, type, required, default, enum values — from TypeScript interface |
| `variants[]` | Valid values of the `variant` prop |
| `states[]` | Tracked states: hover, focus, disabled, loading, error, checked… |
| `behaviors[]` | Trigger → result pairs (e.g. click → opens, Escape → closes) |
| `keyboard_map[]` | Key → action pairs extracted from tests or ARIA docs |
| `accessibility.role` | ARIA role (from test `getByRole` or ARIA spec reference) |
| `accessibility.aria` | Required aria-* attributes |
| `accessibility.focus_management` | How focus moves on open/close/select |
| `composition.composed_of` | Internal primitives this component builds on |
| `composition.commonly_used_with` | Sibling components frequently paired in stories |
| `examples[0].code` | Minimal working usage snippet (20 lines max) |
| `source_refs[]` | File path(s) or URLs where evidence was found |

**Compound component note:** If the library uses compound components (namespace
objects), the `import.export` is the namespace root (e.g. `"Avatar"`) and
`anatomy.parts` lists the sub-parts (`["Root", "Image", "Fallback"]`). The
`examples[].code` must show the compound pattern, not a simple JSX element.

**Do not invent.** If a field cannot be populated from source, omit it or set
it to `null`. Record the gap in `coverage_report[].missing[]`.

### Step 5 — Assign confidence scores

For each component, assign a `confidence` value and record it in
`coverage_report[]`:

| Evidence available | Confidence |
|---|---|
| TypeScript interface + story + passing test | 1.0 |
| TypeScript interface + story | 0.8 |
| TypeScript interface only | 0.6 |
| Inferred from usage or README | 0.4 |
| Copied from docs/marketing copy without source verification | 0.2 |

`meta.coverage_confidence` = count(confidence >= 0.8) / total components.

### Step 6 — Identify the app shell

The app shell section tells the prototyper how to bootstrap a working app
using this library. This is the highest-stakes section: an incorrect
`theme_provider` value will cause every prototype to fail at runtime.

Populate `app_shell` fields:

| Field | How to find it |
|---|---|
| `theme_provider` | The **exact** export name used as the root provider — verify from source, not README. Common mistakes: `"Provider"` vs `"ChakraProvider"`, missing required props |
| `theme_provider_props` | Required props (e.g. `value={defaultSystem}`) — fetch the provider source file and read its props interface |
| `routing_lib` | Preferred router (e.g. `react-router-dom`) — from peer deps or getting-started docs |
| `layout_primitives` | Layout components (Box, Stack, Grid, Flex, Container…) |
| `recommended_structure` | Brief description of how to wire shell + provider + router |

**Verification requirement:** After writing `theme_provider`, fetch the
provider component's source file and confirm the exact export name and required
props match what you recorded. A mismatch here causes `Element type is invalid`
or `ChakraProvider requires a value prop` errors at runtime and invalidates the
entire prototype.

### Step 7 — Record capabilities and gaps

`capabilities[]`: What the library confidently covers (form controls, overlay
management, data display, theming, a11y, etc.).

`gaps[]`: What it explicitly does NOT provide. Common gaps:
- Drag and drop (use `@dnd-kit/core`)
- Data grid / virtual scroll
- Rich text editor
- Date/time picker (if absent from components[])
- Chart / data visualisation
- File upload with preview

Third-party recommendations belong in gaps — record the gap and the suggested
library so the prototyper knows what to reach for.

### Step 8 — Validate

Run the Python validator before writing the output file:

```bash
PYTHONPATH=shared/lib python -c "
from pathlib import Path
from ux_suite.knowledge import KnowledgePack
kp = KnowledgePack.load(Path('shared/schemas/examples/knowledge-pack.<slug>.json'))
print('Valid. Components:', len(kp.data['components']))
print('Coverage confidence:', kp.data['meta']['coverage_confidence'])
"
```

Fix all schema validation errors. Do not write a file that fails validation.

### Step 9 — Write and report

Write to: `shared/schemas/examples/knowledge-pack.<output_slug>.json`

Print a completion report:

```
Knowledge Pack: <library_name> <library_version>
Components extracted: N
Coverage confidence: 0.XX
Gaps recorded: N
Low-confidence components (<0.8): [list]
Output: shared/schemas/examples/knowledge-pack.<slug>.json
```

---

## Confidence Calibration Notes

These patterns recur across public libraries and are common sources of
over-confident extraction. Apply extra scrutiny:

**Provider naming:** Documentation often uses a simplified name. Always verify
the exact exported symbol from the source barrel. Example: Chakra UI docs say
"wrap with Provider" but the export is `ChakraProvider` and it requires a
`value` prop — both facts invisible from the README.

**Compound component sub-parts:** Storybook stories sometimes use a simplified
wrapper component that doesn't exist in the published package. Verify against
the barrel export, not the story file alone.

**Required props with no default:** TypeScript interfaces mark optional props
with `?`. Props without `?` and without a default value are required — they
will cause runtime errors if omitted. Record them in `props[].required: true`.

**Version-specific breaking changes:** If the target version is a major bump
(v2→v3), fetch the CHANGELOG or migration guide and record API changes in
`coverage_report[].missing[]` with a note so downstream skills know which
patterns changed.

---

## Reference Files

| File | Purpose |
|---|---|
| `shared/schemas/knowledge-pack.schema.json` | Schema to validate against |
| `shared/schemas/examples/knowledge-pack.chakra-ui.json` | Worked example (public GitHub extraction, Chakra UI v3.36.0) |
| `shared/schemas/examples/knowledge-pack.mock-lib.json` | Minimal example (6 components) |
| `shared/docs/knowledge-pack-extraction.md` | Internal library procedure (filesystem read variant) |
| `shared/lib/ux_suite/knowledge.py` | Python `KnowledgePack` class used by all downstream skills |

---

## Output Contract

The written file must satisfy all of the following before the pipeline may
proceed:

- [ ] Validates against `knowledge-pack.schema.json` with zero errors
- [ ] `meta.library_name` and `meta.library_version` match the source
- [ ] `meta.coverage_confidence` is computed, not guessed
- [ ] Every component has at least one `source_refs[]` entry
- [ ] `app_shell.theme_provider` verified against source (not docs)
- [ ] `app_shell.theme_provider_props` lists all required props
- [ ] All gaps requiring third-party libraries are named in `gaps[]`
- [ ] `coverage_report[]` has one entry per component with a confidence score
