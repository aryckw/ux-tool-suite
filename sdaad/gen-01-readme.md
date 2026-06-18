# Generator Prompt: README.md

## Purpose of this file
This file contains a prompt that instructs an AI agent to generate the **initial README.md**
for a project using the Spec-Driven AI-Assisted Development (SDAAD) workflow.

- **What it produces:** a first-draft `README.md` — the project's "why / what / who / domain / scope" document.
- **Where it sits in the chain:** FIRST. The README has no upstream dependencies. Generate it before the roadmap, SDD, and agent prompt.
- **How to use it:** open a fresh AI agent window (Claude Code, Claude chat, etc.), copy everything below the line marked `=== COPY FROM HERE ===`, paste it, and answer the questions the agent asks. The agent will then produce the file.

## Why it is structured the way it is
The prompt forces a **single batch of clarifying questions before any writing**, which makes the
output grounded and repeatable rather than improvised. It fixes the section skeleton and the
ownership boundaries (what the README must NOT contain) so every README across your projects looks
and behaves the same. Within those rails, the agent is free to choose wording, depth, and examples.

---

=== COPY FROM HERE ===

You are generating the initial `README.md` for a software project that follows the Spec-Driven
AI-Assisted Development (SDAAD) workflow. The README is the project's orientation document. Its
job is to let any reader — human or AI agent — understand the project's purpose, domain, and scope
in under ten minutes.

Work in two phases. Do not skip Phase 1.

## Phase 1 — Elicitation
Ask me the following questions in a single batch, numbered, then wait for my answers. If I have
already provided some answers in this conversation, fill those in and only ask what is missing.
Do not begin writing the document until I have answered.

1. What is the project name?
2. In one or two sentences, what problem does this project solve, and for whom?
3. Who are the primary users or roles? (List each.)
4. What are the 3–7 most important things a user needs to do with this system? (Capabilities, not features.)
5. What is explicitly OUT of scope for the current version? (Non-goals.)
6. What are the core domain objects or concepts and how do they relate? (Even a rough list.)
7. What is the technology stack at a high level? (Just enough to write a quick-start; deep detail belongs in the SDD.)
8. How does someone run the project locally? (Commands, if known. If unknown, say so and I will mark it as a placeholder.)
9. Are there any open design questions you already know are unresolved?

## Phase 2 — Generation
After I answer, produce a single `README.md` file with exactly these sections, in this order:

1. **Project title** (H1)
2. **1. Mission Statement** — one paragraph, from my answer to Q2.
3. **2. System Intent** — what the system is, followed by a **Non-Goals (this version)** subsection. Scope non-goals to the current version so they will not contradict a future roadmap.
4. **3. Core Use Cases** — my Q4 capabilities rendered as user stories: "As a [role], I need [capability] so that [outcome]."
5. **4. Domain Model** — definitions and relationships of the domain objects. Definitions only, not data schemas.
6. **5. Specification-Driven Development** — a short paragraph linking the four canonical documents (this README, `docs/roadmap.md`, `docs/sdd.md`, `docs/AGENT_PROMPT.md`) and stating the rule: "No major feature is implemented without a specification in docs/sdd.md."
7. **6. Quick Start** — runnable commands in a fenced block, or a clearly labeled placeholder if I did not provide them.
8. **7. Repository Structure** — a directory map with one line per entry; use placeholders where structure is not yet known.
9. **8. Open Design Questions** — my Q9 items, or a note that none are currently tracked.

## Boundaries (keep the README in its lane)
The README owns mission, domain, use cases, and scope. To keep it scannable and to prevent overlap
with the other documents, do not put the following here:
- Delivery phases, status, or sequencing — those belong in `docs/roadmap.md`.
- Architectural invariants, type definitions, or technical decisions — those belong in `docs/sdd.md`.
- Detailed build/test/deploy procedures — those belong in a developer guide.

Where the README needs to point at this content, reference it by name rather than reproducing it.

## Quality rules
- Prefer plain, concrete prose. Aim for a document a new engineer can read in under ten minutes.
- Do not invent facts I did not provide. Where you must make a reasonable assumption to keep the
  document coherent, insert it as a clearly labeled note: `> ASSUMPTION: ...` so I can confirm or correct it.
- Target length 200–400 lines. If the domain model is large enough to push past that, suggest
  extracting it to `docs/domain-model.md` and leave a linked stub.

When finished, output the complete `README.md` as a single fenced code block, then give me a short
list of any `ASSUMPTION` notes and any placeholders I still need to fill in.
