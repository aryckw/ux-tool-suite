# Generator Prompt: docs/AGENT_PROMPT.md

## Purpose of this file
This file contains a prompt that instructs an AI agent to generate the **initial AI agent system
prompt** (`docs/AGENT_PROMPT.md`) for a project using the SDAAD workflow.

- **What it produces:** a first-draft agent prompt at a version matching the SDD — the operational interface that grounds future AI coding sessions in the project's spec.
- **Where it sits in the chain:** FOURTH (last). It is derived primarily from the SDD, and also reads the roadmap. Have both available.
- **How to use it:** open a fresh AI agent window, copy everything below `=== COPY FROM HERE ===`, paste it, provide the SDD and roadmap when asked, answer the questions, and the agent will produce the file.

## Why it is structured the way it is
This generator's main job is to **derive** the agent prompt from the SDD rather than invent new
rules, so the two stay coupled from birth. It fixes the prompt skeleton and bakes in the three
disciplines that prevent the most common AI-session failures: **the prompt version is set to match
the SDD version**, **its internal build phases use letters so they never collide with the roadmap's
numbered phases**, and **the invariants are carried as a labeled copy of the SDD's**. The per-file
workflow and "Done means" checklist are standardized for repeatable agent behavior; project-specific
rules and the high-risk "never guess" list are elicited so the prompt fits the actual stack.

---

=== COPY FROM HERE ===

You are generating the initial `docs/AGENT_PROMPT.md` for a software project that follows the
Spec-Driven AI-Assisted Development (SDAAD) workflow. This file is the system prompt that a future
AI coding agent will be given at the start of each implementation session. Its purpose is to ground
that agent in the project's specification and to make its behavior consistent and predictable.

Your task is primarily one of **derivation**: translate the project's SDD into operational rules for
an implementation agent. Avoid introducing technical rules that are not grounded in the SDD; where
the SDD is silent on something an implementer would need, surface it as a question rather than
inventing a rule.

Work in two phases. Do not skip Phase 1.

## Phase 1 — Elicitation
First, ask me to paste `docs/sdd.md` and `docs/roadmap.md` (or confirm they are available). You need
the SDD to derive the invariants, stack, and component contracts, and the roadmap to describe the
current phase context.

Then ask the following questions in a single batch, numbered, and wait for my answers. Fill in
anything derivable from the SDD/roadmap yourself and ask only what those documents do not cover. Do
not begin writing until I have answered.

1. What command type-checks or compiles the project? (Used in the per-file workflow.)
2. Are there project-specific conventions an implementer must follow that are not already invariants? (Naming, comment headers, file organization, import rules.)
3. What are the categories where the agent should never guess and must ask first? (The high-risk decisions specific to this project.)
4. Will you use different AI models for different kinds of work? If so, which model for what?
5. What is the current state of the project right now — which phases are complete, what is the current phase, and what file or component comes next?

## Phase 2 — Generation
After I answer, produce a single `docs/AGENT_PROMPT.md` file with exactly these sections, in this order:

1. **Header block** (as comments or a clearly marked block):
   - Title: "[Project Name] — AI Agent System Prompt"
   - "Version: [set this to the SDD's version]"
   - Usage line: provide this whole file as the system prompt at session start.
   - "Spec: docs/sdd.md v[X.Y] — must be present in project root."
   - "Roadmap: docs/roadmap.md — read at session start for current phase."
2. **WHO YOU ARE** — role definition for the implementation agent: works spec-first, does not invent interfaces the spec does not define, flags gaps before writing code.
3. **THE STACK** — derived from SDD §1; languages, frameworks, versions, package scheme.
4. **THE SPEC** — how to use the SDD: before any file, read and quote the relevant section, implement missing dependencies first, and on silence use judgment plus a `// SPEC-GAP: <description>` comment.
5. **ARCHITECTURAL INVARIANTS** — copied from SDD §2, prefaced with: "Reproduced from docs/sdd.md §2 for quick access. If these conflict with the SDD, the SDD wins. Update this section when the SDD updates."
6. **IMPLEMENTATION RULES** — derived from the SDD and my Q2, organized by concern (general, framework-specific, performance, state management, style, infrastructure).
7. **IMPLEMENTATION ORDER** — a dependency-ordered build list for the current phase. Label these internal build phases with LETTERS (Phase A, Phase B, ...) so they never collide with the roadmap's numbered phases. Use checkboxes that reflect the current real state from my Q5.
8. **HOW TO WORK** — include these subsections:
   - *Starting a session:* read the SDD and roadmap, then report current phase, next file, and the spec section covering it.
   - *Per-file workflow:* the 8 steps — Announce, Quote spec, Check deps, Check invariants, Write, Type-check (using my Q1 command), Verify invariants, Report.
   - *SPEC-GAP comments:* the convention and the instruction to report all gaps at phase end.
   - *When the user asks to deviate:* implement, update the SDD, bump this file's version to match, report the spec change.
   - *When uncertain:* ask one focused question before writing; never guess on the categories from my Q3.
9. **CURRENT PHASE CONTEXT** — from my Q5: completed phases, current phase and its acceptance criteria, next file. Note that this is the section to update between sessions.
10. **MODEL SELECTION** — from my Q4; omit if not applicable.
11. **DONE MEANS** — a completion checklist: type-check passes, all spec props/methods/behaviors implemented, one verification line per invariant, spec-reference comment present at the top of each file, all SPEC-GAP items reported, spec updated if a deviation was requested.

## Boundaries and coupling rules
- Set the **Version** to exactly match the SDD version you were given. State in your closing summary
  that these two versions must always be bumped together.
- The invariants section is the one sanctioned copy in the workflow. Keep it labeled as a copy.
- Use LETTERS for this file's internal build phases. Do not reuse the roadmap's phase numbers.
- This file owns agent behavior, build order, and model selection. It does not own architecture
  (the SDD does) or delivery sequencing (the roadmap does); reference those rather than restating them.

## Quality rules
- Derive rules from the SDD wherever possible. If you find yourself writing a technical rule with no
  basis in the SDD, stop and ask me whether it belongs in the SDD instead.
- Make the per-file workflow and "Done means" checklist concrete enough that an agent following them
  produces consistent results, without micromanaging style choices the SDD leaves open.
- Where you must assume something for coherence, mark it `> ASSUMPTION: ...` for my confirmation.

When finished, output the complete `docs/AGENT_PROMPT.md` as a single fenced code block, then
confirm the version you set, list any `ASSUMPTION` notes, and remind me of the coupling rule:
SDD version and agent-prompt version are bumped together in the same commit.
