# Elicitation Protocol

## Principle

Ask only what changes the output. Before generating any question, a skill must check three sources in order:

1. **The user's request** — what has already been stated, even informally?
2. **The workspace context** — does an existing Concept Spec, prior elicitation log, or Knowledge Pack answer the question?
3. **Reasonable inference** — can the answer be safely inferred from the domain, the stack, or standard practice?

If a question can be answered by any of these three sources, do not ask it. Log the answer as `"status": "inferred"` or `"status": "assumed"` with a short rationale. Reserve elicitation for questions whose answers would materially change what gets designed, built, or tested.

## Budget

Each skill gets **one batched round of elicitation**. Ask all questions in a single message, grouped by topic. Do not follow up with a second round. After receiving answers (or after a timeout in non-interactive mode), proceed with the best available information. Cap questions at the smallest set that materially changes the result — in practice, this is usually three to six questions per stage.

## Stage-Specific Question Sets

The following questions are the candidates each skill draws from. Do not ask a question if its answer is already known.

### designer

- **Goal**: What is the primary user goal this UI serves? (e.g., "monitor system status", "submit a purchase order")
- **Target users**: Who are the primary users — internal staff, end customers, developers, admins? Any relevant expertise level?
- **Scope**: Which screens or flows should be covered in this design pass? List them if known.
- **Key data**: What are the main data objects shown or manipulated? (e.g., "orders with status, amount, and customer name")
- **Branding / mode**: Should the design use the standard theme, a dark mode variant, or a custom brand color?
- **Platform / devices**: Desktop only, mobile-first, or responsive? Any specific viewport breakpoints that matter?
- **Accessibility target**: WCAG 2.2 AA (default) or AAA? Any users with specific assistive technology needs?

### prototyper

- **Primary flows**: Which user flows must be demonstrable in the prototype? (Map to Concept Spec flows if available.)
- **Screen states**: Which states need to be clickable — empty, loading, error, success? Any edge cases (e.g., partial failure)?
- **Data shape**: What does the mock data look like? Provide a sample record or describe the key fields so mock factories match reality.
- **Navigation between remotes**: Which remotes link to each other? What triggers the transition?

### builder

- **Stack / library version**: Confirm the component library name and version (should match Knowledge Pack, but verify for divergence).
- **Test scope**: Which test types are required — e2e, visual, a11y, or all three? Any flows explicitly out of scope?
- **Deploy target**: Local dev only, Vercel/Netlify preview, or a specific internal environment? Affects base URL and env variable wiring.
- **Acceptance tests**: Are there explicit acceptance criteria that must pass before the build is considered done?
- **Real data vs. mocks**: Should the build wire to real API endpoints or use MSW/fixture mocks? If real, what is the base URL?

## Question Format

Group questions by topic. Number them. Ask all at once in a single message. Do not intersperse commentary between questions.

**Example question block (designer stage):**

> Before I produce the Concept Spec, I have a few questions to make sure the output matches your needs:
>
> **Goal & users**
> 1. What is the primary thing a user is trying to accomplish on this screen — is it reviewing data, taking an action, or both?
> 2. Are these internal team members or external customers? Any accessibility accommodations beyond standard WCAG AA?
>
> **Scope & data**
> 3. Should this design pass cover just the list view, or also the detail/edit views?
> 4. What are the key fields on each record? (A quick list is fine — e.g., "name, status, created_at, assignee".)
>
> **Context**
> 5. Dark mode, light mode, or both?

That is the complete question block. After the user responds, proceed — do not ask more questions.

## Recording Answers

Every question and answer must be written in two places:

1. **In the relevant Concept Spec section** — update `intent`, `screens`, `flows`, or `design_principles` as appropriate so the answers are reflected in the spec itself.
2. **In the elicitation log** — append one entry per question to the in-memory log (and to `logs/elicitation.jsonl` in the workspace) with this structure:

```json
{
  "stage": "designer",
  "question": "What is the primary user goal?",
  "answer": "Monitor real-time order status across all warehouses.",
  "status": "answered",
  "timestamp": "2026-06-15T10:22:00Z"
}
```

Valid `status` values:

- `"answered"` — the human provided an explicit answer.
- `"inferred"` — derived from context, request, or existing spec without asking.
- `"assumed"` — no information available; a sensible default was chosen.
- `"open"` — question was asked but not yet answered (should not persist past the elicitation round).

## Mirror to Workspace Log

After each elicitation round, append all entries for this session to `logs/elicitation.jsonl` in the workspace root (one JSON object per line, newline-delimited). This log persists across skill invocations so later stages can see what earlier stages learned without re-asking.

## Non-Interactive Fallback

When there is no human in the loop (automated pipeline, CI, or batch mode), do not block waiting for answers. Instead:

1. Choose the most conservative or most common sensible default for each unknown.
2. Mark every such entry `"status": "assumed"`.
3. Include a numbered list of all assumptions in the final output summary under a clearly labeled "Assumptions" section.

The output must still be complete and valid — assumed values are not a reason to produce a partial result.

## Anti-Patterns

Do not do any of the following:

- **Ask questions whose answers do not change the output.** "What color do you like?" is not a valid question if the Knowledge Pack defines the color tokens.
- **Ask multiple rounds.** One round, all questions together, then proceed.
- **Ask about things already in the Concept Spec.** If the spec says `platform: "desktop"`, do not ask which platform.
- **Ask for confirmation of inferred values.** Infer, log, and proceed. If the inference turns out to be wrong, the human can correct the spec directly.
- **Use elicitation to delay work.** If a question is not truly blocking, proceed with an assumption rather than waiting.
