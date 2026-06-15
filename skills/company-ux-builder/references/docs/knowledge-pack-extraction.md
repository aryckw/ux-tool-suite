# Knowledge Pack Extraction — Phase 0 Methodology

## Overview

Phase 0 is the agentic session that reads a React component library codebase at `/internal_ui_stack` and produces a Knowledge Pack: a structured JSON document that the designer, prototyper, and builder skills treat as ground truth about what components exist, how they are used, and how they behave. The Knowledge Pack must validate against `shared/schemas/knowledge-pack.schema.json` before it is written.

Phase 0 does not make design decisions. It reads, extracts, and records — with explicit confidence scores and provenance for every claim.

## Source Mapping

Phase 0 reads the following locations in priority order. When the same fact appears in multiple sources, the most specific source wins (e.g., a TypeScript interface beats a README description).

### Package and Build Configuration

- **`package.json` / lockfile**: Extract `name`, `version`, `dependencies`, `peerDependencies`, and `scripts`. Map `scripts.build`, `scripts.storybook`, and `scripts.test` to `tech_stack.build_commands`. Peer dependencies become `tech_stack.peer_dependencies`.
- **`tsconfig.json`**: Record `compilerOptions.target`, `compilerOptions.lib`, and `paths` (aliased import roots). Path aliases affect how source_refs are written.

### Design Tokens

- **Tailwind config (`tailwind.config.*`)**: Resolve `theme.extend` and `theme` objects. Capture all color, spacing, border-radius, font, and shadow scales as `design_tokens[]` entries with `category` set to the appropriate Open UI token category.
- **CSS custom properties** (`:root` blocks in global CSS): Extract variable names and values. Note light/dark mode variants when `@media (prefers-color-scheme: dark)` or `[data-theme="dark"]` selectors are present.
- **Token JSON files** (`tokens.json`, `design-tokens.json`, or Style Dictionary output): Parse directly; these are the highest-confidence token source.

### Component Source Files

- **`src/**/components/**` (`.tsx`, `.ts`, `.jsx`)**: For each component file:
  - Extract TypeScript interfaces and `type` aliases tagged as props (name pattern: `*Props`, `*ComponentProps`). These become `props[]` entries with `type` and `required` derived from the interface shape. Optional fields (`?`) set `required: false`.
  - Extract `PropTypes` declarations as a fallback when TypeScript interfaces are absent.
  - Infer `anatomy.parts[]` from the JSX tree — identify the root element and named child elements that appear consistently across usages.
  - Infer `variants[]` from prop unions (`variant?: 'primary' | 'secondary' | 'ghost'`) or `className` switch statements.
  - Infer `states[]` from conditional class application patterns (`isLoading`, `isDisabled`, `isError` prop patterns).

### Storybook Files

- **`*.stories.tsx` / `*.stories.ts`**: These are the highest-confidence source for examples, variants, and states.
  - Map each named export (story) to an `examples[]` entry with the Storybook ID (`ComponentName--story-name` format) in `source_refs`.
  - Extract `args` objects to confirm prop defaults and valid enum values.
  - Extract `play` functions to infer `behaviors[]` and `keyboard_map[]` entries.
  - Extract `parameters.a11y` configurations into the `accessibility` object.

### Documentation

- **`*.mdx` files / docs site source**: Extract `design_principles`, usage do/don't guidance, and any stated WCAG targets. Map "Do" / "Don't" blocks to `examples[]` entries with a `type: "guidance"` tag.
- **`README.md` / `CONTRIBUTING.md` / design-system docs**: Extract high-level `design_principles[]`, `capabilities[]`, known `gaps[]`, and `app_shell` description. These populate the top-level Knowledge Pack fields, not individual components.

### Barrel Exports

- **`index.ts` / `index.tsx` (barrel files)**: The canonical `name` for each component is its export name from the top-level barrel. The `import.named_export` field is set from here. If a component is not exported from the barrel, it is treated as internal and excluded from the Knowledge Pack unless a story explicitly demonstrates it.

### Tests and Accessibility Configurations

- **`*.test.tsx` / `*.spec.tsx`**: Extract `userEvent` and `fireEvent` call patterns to populate `behaviors[]`. Extract `getByRole` queries to confirm ARIA roles for `accessibility.role`.
- **Axe / jest-axe configurations**: Extract `runOnly` rule sets as `accessibility.wcag_notes` context.

## Output Rules

These rules are non-negotiable:

1. **Never invent props or behaviors.** If a prop is referenced in a test but not defined in an interface, record it with `confidence: 0.5` and add it to `coverage_report.missing[]` with a note explaining the gap.
2. **Provenance is mandatory.** Every component entry must have at least one `source_refs[]` entry. Entries without provenance must not be written to the output file.
3. **Confidence scoring**: Assign each component a `confidence` value between 0 and 1:
   - 1.0: props from TypeScript interface + story + test all agree
   - 0.8: TypeScript interface + story agree; no test
   - 0.6: props inferred from source only; no story
   - 0.4 or below: inferred from usage patterns or README only
4. **coverage_confidence**: The top-level `coverage_confidence` field is the fraction of components with `confidence >= 0.8`.

## Validation

Before writing the output file, run the extracted JSON against `shared/schemas/knowledge-pack.schema.json`. Fix all schema validation errors. If a field cannot be populated with real data, set it to `null` rather than omitting it or inventing a value.

## Output Location

Write the validated Knowledge Pack to:

```
shared/schemas/examples/knowledge-pack.<library-slug>.json
```

where `<library-slug>` is the kebab-cased `name` field from `package.json` (e.g., `company-ui`, `acme-design-system`).

## Phase 0 Checklist

Work through these steps in order. Do not skip steps.

1. Read `package.json` → populate `tech_stack`, `peer_dependencies`, `build_commands`.
2. Read `tsconfig.json` → record `language`, `path_aliases`.
3. Locate and parse token sources (Tailwind config, CSS variables, token JSON) → populate `design_tokens[]`.
4. Locate barrel exports (`index.ts`) → build the initial component name list.
5. For each component name: find the source file, stories file, and test file.
6. Extract props from TypeScript interfaces. Fall back to PropTypes if needed.
7. Extract anatomy, variants, and states from source and stories.
8. Extract examples and source_refs from stories and MDX.
9. Extract behaviors and keyboard_map from tests and story play functions.
10. Extract accessibility data from tests, axe configs, and MDX.
11. Compute per-component confidence scores.
12. Record all gaps and low-confidence items in `coverage_report.missing[]`.
13. Validate the full document against `knowledge-pack.schema.json`.
14. Write to `shared/schemas/examples/knowledge-pack.<library-slug>.json`.
15. Print a summary: total components, coverage_confidence, count of gaps, count of low-confidence items.
