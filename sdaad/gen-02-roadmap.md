# Generator Prompt: docs/roadmap.md

## Purpose of this file
This file contains a prompt that instructs an AI agent to generate the **initial roadmap**
(`docs/roadmap.md`) for a project using the SDAAD workflow.

- **What it produces:** a first-draft delivery roadmap — the project's "when / what order / status / decisions" document.
- **Where it sits in the chain:** SECOND. It depends on the README. Generate the README first and have it available.
- **How to use it:** open a fresh AI agent window, copy everything below `=== COPY FROM HERE ===`, paste it, provide the README when asked, answer the questions, and the agent will produce the file.

## Why it is structured the way it is
The prompt ingests the README so the roadmap stays consistent with the mission and scope already
defined, then runs a single elicitation round. It fixes the section skeleton and enforces the two
roadmap-specific disciplines that prevent later pain: **phase numbers are stable identifiers**
(execution order is stated separately) and **architectural rules are referenced, not restated**.
Content and phase breakdown are left to agent judgment within those rails.

---

=== COPY FROM HERE ===

You are generating the initial `docs/roadmap.md` for a software project that follows the
Spec-Driven AI-Assisted Development (SDAAD) workflow. The roadmap is the delivery authority: it
decides what gets built, in what order, and tracks the status of each phase.

Work in two phases. Do not skip Phase 1.

## Phase 1 — Elicitation
First, ask me to paste the project's `README.md` (or confirm it is already available in this
conversation). You need it to stay consistent with the established mission, use cases, and scope.

Then ask the following questions in a single batch, numbered, and wait for my answers. Fill in
anything already answered in this conversation and ask only what is missing. Do not begin writing
until I have answered.

1. What are the major capabilities or deliverables this project will ship, in rough chunks? (These become phases.)
2. Which capability should be built first, second, third? (Execution order — this can differ from the order you list them.)
3. Is there a foundational phase (scaffold, shared types, contracts) that must come before feature work?
4. For each capability, what would "done" look like — how would you verify it works?
5. Is this an event-driven or API-first system with contracts/topics/endpoints worth listing centrally? If so, what are they?
6. Are there any delivery decisions already made (sequencing, scope cuts, deferrals) and the reasons behind them?
7. Do you want to schedule **spec reconciliation phases** — short, planned phases that realign all four SDAAD documents (README, roadmap, SDD, agent prompt) after a run of feature work? Options: (a) yes, insert one after each major feature phase; (b) yes, insert one at a cadence I specify; (c) no, I will reconcile ad hoc. A reconciliation phase converts documentation-alignment work from guilt-driven cleanup into a planned, trackable deliverable — most projects benefit from at least one. If you are unsure, default to (a).

## Phase 2 — Generation
After I answer, produce a single `docs/roadmap.md` file with exactly these sections, in this order:

1. **Title** (H1): "[Project Name] — Major Feature Roadmap"
2. **1. Objective** — one paragraph stating the product goal for the current release; consistent with the README mission.
3. **2. Development Workflow** — the numbered steps for taking a phase from selection to merge, including: confirm spec coverage in `docs/sdd.md` before implementing, and bump `docs/sdd.md` + `docs/AGENT_PROMPT.md` versions together when architecture changes. Include a line: "Architectural invariants: see docs/sdd.md §2."
4. **3. Roadmap Status** — a table with columns: Phase | Capability | Status | Completion notes. Number the phases from my Q1 capabilities. If I chose to schedule reconciliation phases (Q7), insert them at the chosen points using a decimal identifier (e.g., "Phase 3.5 — Spec Reconciliation") so feature phase numbers stay stable; give each the capability "Realign README, roadmap, SDD, and agent prompt." Mark all as "Planned." Add a note beneath the table: "Phase numbers are stable identifiers. Execution sequence is stated separately below."
5. **4. Execution Sequence** — the build order from my Q2/Q3, written as "Phase X → Phase Y → ...", with a one-line explanation if the order differs from numeric order.
6. **5. Contract / API / Topic Definitions** — only if Q5 indicated they exist; otherwise omit this section or note it as not applicable.
7. **6. Phased Feature Plan** — one subsection per phase, each with: Goal (one sentence), Acceptance criteria (testable, from Q4), Completed items (empty for now), Verification steps. For any reconciliation phase, the Goal is to realign the four documents; acceptance criteria are: agent-prompt version matches SDD version, no phase-numbering collisions, no stale sections, and each information type has a single home. Reference the existing-projects audit worksheet as the verification step rather than restating it.
8. **7. Decisions and Open Questions** — decisions from Q6 with their rationale, plus any open questions.

## Boundaries (keep the roadmap in its lane)
The roadmap owns delivery phases, status, sequencing, and decisions. To prevent overlap and future
drift, do not put the following here:
- Architectural invariants or principles — reference `docs/sdd.md §2` instead of restating them.
- Technical specifications of how a feature is built — the SDD owns the "how"; the roadmap describes "what" at the capability level.
- AI model selection guidance — that belongs in `docs/AGENT_PROMPT.md`.

## Quality rules
- Treat phase numbers as permanent. Recommend that renumbering be avoided once assigned.
- Keep acceptance criteria specific and testable; avoid vague adjectives.
- Do not invent capabilities I did not describe. Where you infer a sensible phase boundary, mark it
  with `> ASSUMPTION: ...` for me to confirm.

When finished, output the complete `docs/roadmap.md` as a single fenced code block, then list any
`ASSUMPTION` notes and open items I still need to resolve.
