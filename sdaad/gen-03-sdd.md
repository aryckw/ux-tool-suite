# Generator Prompt: docs/sdd.md

## Purpose of this file
This file contains a prompt that instructs an AI agent to generate the **initial Software Design
Document** (`docs/sdd.md`) for a project using the SDAAD workflow.

- **What it produces:** a first-draft SDD at version 1.0 — the project's technical contract: architecture, invariants, types, component specs.
- **Where it sits in the chain:** THIRD. It depends on the README and the roadmap. Have both available.
- **How to use it:** open a fresh AI agent window, copy everything below `=== COPY FROM HERE ===`, paste it, provide the README and roadmap when asked, answer the questions, and the agent will produce the file.

## Why it is structured the way it is
The SDD is the document the AI implementation agent leans on most, so this generator is the most
rigorous. It ingests the upstream documents, runs one elicitation round, and fixes the section
skeleton plus the two highest-leverage disciplines: **invariants are binary, numbered, and stable**,
and **embedded source code is referenced to a canonical file rather than pasted as the sole source
of truth**. It deliberately scopes the first version to the architecture plus the earliest planned
phase, so the SDD starts small and grows with the project rather than being over-specified up front.

---

=== COPY FROM HERE ===

You are generating the initial `docs/sdd.md` (Software Design Document) at version 1.0 for a
software project that follows the Spec-Driven AI-Assisted Development (SDAAD) workflow. The SDD is
the technical contract for the project. It is the document the AI implementation agent will read
before writing any code, so precision and internal consistency matter more here than anywhere else.

Work in two phases. Do not skip Phase 1.

## Phase 1 — Elicitation
First, ask me to paste the project's `README.md` and `docs/roadmap.md` (or confirm they are
available in this conversation). You need them to align the architecture with the established
domain and to know which phase to specify first.

Then ask the following questions in a single batch, numbered, and wait for my answers. Fill in
anything already answered and ask only what is missing. Do not begin writing until I have answered.

1. What is the technology stack in detail — languages, frameworks, key libraries with versions, package/namespace scheme, and any monorepo structure?
2. What is the high-level architecture? Describe the layers or major components and how they connect. (A rough sketch is fine; I can refine.)
3. What are the hard rules that must never be violated in this codebase — the things that, if broken, are bugs by definition? (These become the architectural invariants. Aim for 3–7.)
4. What are the core shared types or contracts, and where will they live in the codebase?
5. Which roadmap phase should this first version of the SDD specify in detail? (Usually the foundational phase or the first feature phase.)
6. For that phase: what components or modules will be built, and what is each responsible for?
7. Are there quantified performance requirements? (Frame budgets, throughput, latency, etc.)
8. What is the state-management approach, and is there anything that must specifically never live in shared/global state?
9. Are there design tokens, config schemas, or other data that will exist as files in the repo and might be tempting to paste into this document?

## Phase 2 — Generation
After I answer, produce a single `docs/sdd.md` file with exactly these sections, in this order:

1. **Title** (H1) plus a header block: **Version: 1.0** and **Status:** (what scope/phase this version covers).
2. **Changelog** — a table with one row for v1.0: "Initial specification."
3. **1. Architecture Overview** — an ASCII diagram (or a clearly described layout) of the layers/components from Q2, with one-line rationale for the main technology choices.
4. **2. Architectural Invariants** — the rules from Q3, each formatted as: "**INV-N: [Name].** [Binary rule.] [Why it exists.]" Number them sequentially. Note that the numbering is permanent.
5. **3. Global Types and Contracts** — the types from Q4, each with its canonical source file path.
6. **4. Component Specifications** — for the phase from Q5/Q6, one subsection per component with: Purpose, Interface (props/methods/events), Behavior rules, and an explicit "Must NOT" list.
7. **5. Data Flow** — how data moves for the key scenarios in this phase.
8. **6. Performance Requirements** — quantified, from Q7; omit or mark N/A if none.
9. **7. State Management** — from Q8, including what must never enter shared/global state.
10. **8. File / Package Structure** — the canonical directory layout relevant to this phase.
11. **9. Infrastructure and Configuration** — build, deploy, and config-injection conventions, to the extent known.
12. **10. Implementation Notes** — explanatory notes for non-obvious decisions (not step-by-step procedures).

## Boundaries and the embedded-code rule
- The SDD owns architecture, invariants, types, and component contracts. It does not own delivery
  sequencing (the roadmap does) or AI agent procedure (the agent prompt does).
- For anything from Q9 that exists as a real file in the repo (design tokens, schemas, type files):
  name the canonical source file path and include at most a representative snippet. Add a note:
  "Canonical source: [path]. Update both together when this changes." Do not present a pasted block
  as the sole source of truth with no link back to the file.

## Quality rules
- Write invariants so that a reader can objectively tell whether one is violated. If a proposed rule
  is a preference or style choice rather than a binary rule, place it under Implementation Notes
  instead of the invariant list.
- Scope this first version to the architecture plus the single phase from Q5. Do not pre-specify
  later phases; the SDD grows a new section per phase over time.
- Do not invent technical details I did not provide. Where a reasonable default is needed for
  coherence, mark it `> ASSUMPTION: ...` for my confirmation.
- Keep this version focused; if it approaches ~800 lines, flag that and suggest what to defer.

When finished, output the complete `docs/sdd.md` as a single fenced code block, then list the
invariants you defined (by ID), any `ASSUMPTION` notes, and anything I still need to confirm.
Remind me that the agent prompt's version must be set to match this SDD version (1.0).
