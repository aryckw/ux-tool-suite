# Open UI Component Model

## What Is Open UI?

Open UI is a W3C Community Group initiative to standardize UI component definitions across frameworks and design systems. Rather than reinventing semantics for every library, Open UI publishes canonical component anatomy — the structural vocabulary that describes what a component is, what parts it contains, and how it behaves — independently of any implementation language or framework.

In this project, every component in the Knowledge Pack is shaped against the Open UI model. This means the designer, prototyper, and builder skills can reason about components without needing to know whether the underlying library uses React, Vue, Svelte, or web components. The implementation details live in the Knowledge Pack; the shared vocabulary lives here.

## The Component Shape

Each component entry in the Knowledge Pack conforms to the following structure:

### Identity

- **name**: The canonical identifier used across all skills (e.g., `Button`, `DataTable`, `Combobox`).
- **aliases**: Alternative names the same component appears under in different libraries or design systems (e.g., `PressableButton`, `ActionButton`).
- **category**: One of `navigation`, `input`, `display`, `overlay`, `layout`, or `feedback`. Drives placement heuristics in the designer skill.
- **status**: `stable`, `beta`, or `deprecated`. Skills suppress `deprecated` components from proposals unless explicitly requested.

### Import

The **import** object records how to bring the component into code:

- `package`: The npm package name (e.g., `@company/ui`).
- `named_export`: The exported symbol (e.g., `Button`).
- `file_path`: The resolved path within the package when direct imports are needed.

### Anatomy

**anatomy.parts[]** lists every structural sub-element the component renders, regardless of whether they are exposed as slots or props. Examples:

- `Button`: `root`, `label`, `icon-left`, `icon-right`, `spinner`
- `Checkbox`: `root`, `control`, `indicator`, `label`

Parts are used by the builder skill to target CSS tokens and by the designer skill to describe partial customizations.

### Slots

**slots[]** are named content injection points — places where the consumer can insert arbitrary markup. Each slot entry has a `name` and an optional `description`. Examples for a `Card` component: `header`, `body`, `footer`, `actions`.

### Props

**props[]** is the typed API surface. Each entry carries:

- `name`: Prop identifier.
- `type`: TypeScript-style type string (`string`, `boolean`, `number`, `ReactNode`, etc.).
- `required`: Boolean.
- `default`: The value when omitted.
- `enum`: Allowed string literals when the type is a union.
- `description`: One-line human summary.

### Variants

**variants[]** capture visual or behavioral modes that do not map to a single prop value. Examples: `primary`, `secondary`, `ghost`, `destructive`. Each variant entry names the mode and optionally notes which props drive it.

### States

**states[]** enumerate the component lifecycle: `default`, `hover`, `focus`, `active`, `disabled`, `loading`, `error`, `selected`, `expanded`, `indeterminate`. Skills use states to ensure every screen state is represented in prototypes and tested in e2e suites.

### Behaviors

**behaviors[]** are trigger-to-result pairs describing interactive logic, for example:

- `"press Enter"` → `"submit"`
- `"press Escape"` → `"close overlay"`
- `"click outside"` → `"dismiss"`

### Keyboard Map

**keyboard_map[]** encodes the WAI-ARIA keyboard interaction model. Each entry specifies a key, the resulting action, and any preconditions (e.g., `"focus must be inside the listbox"`).

### Accessibility

The **accessibility** object captures:

- `role`: ARIA role (e.g., `button`, `dialog`, `listbox`).
- `aria_attributes`: Required and optional ARIA attributes with expected values.
- `focus_management`: How focus moves on open, close, or selection.
- `wcag_notes`: Relevant WCAG 2.2 success criteria and level (A/AA/AAA).

### Composition

- **composed_of**: Components this one is built from internally (e.g., `Combobox` is composed of `Input` + `Listbox` + `Popover`).
- **commonly_used_with**: Components frequently placed alongside this one in real layouts.

### Tokens Used

**tokens_used[]** lists the design token references this component consumes (e.g., `color.action.primary`, `space.component.md`, `radius.button`). The builder skill uses this list to wire token overrides.

### Examples and Source Refs

- **examples[]**: Usage code snippets or Storybook story IDs demonstrating key configurations.
- **source_refs[]**: Provenance — file paths in the extracted codebase, documentation URLs, and Storybook IDs. Every component must have at least one source ref.

## Why Framework-Agnostic?

The Open UI shape decouples design intent from implementation. The designer skill can write a Concept Spec that references `DataTable` with `sortable: true` without knowing whether the library uses a render-prop API or a slots API. The prototyper maps that to a Storybook story by name. The builder imports by canonical name from the Knowledge Pack and resolves the actual import path from the `import` field. Framework migrations do not require Concept Spec rewrites.

## How Skills Use the Component Model

- **designer**: Maps each composition region in the layout to a component name. Selects variants and states needed for each screen state.
- **prototyper**: Looks up the component by name in the Knowledge Pack to find its Storybook story ID and prop signature, then wires mock data.
- **builder**: Resolves `import.package` and `import.named_export` to write real import statements; applies `tokens_used` to theme overrides.

## Gap Handling

When no component in the Knowledge Pack covers a design need, the designer sets `gap: true` on the affected `component_bindings[]` entry and records the need in `coverage_report.missing[]`. The prototyper and builder see this flag and either construct a bespoke component or escalate to the human for a library decision. Gap components are never silently invented — they are always visible in the coverage report.
