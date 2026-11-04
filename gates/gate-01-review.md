# Gate 01 — Discovery Review

## Purpose

Provide the human review checkpoint for Phase 1 — Discover. This gate evaluates the persona and pain-point outputs against the BRD and Phase 1 requirements. Phase 2 must not proceed until an authorized human records an explicit `APPROVED` decision.

## Required inputs

Confirm that each required file exists, is readable, and is the intended version:

- `input/brd.md` — authoritative source.
- `workflow/phase-1-discover.md` — Phase 1 scope, validation criteria, and review gate requirements.
- `outputs/phase-01/persona.md` — persona output under review.
- `outputs/phase-01/pain-points.md` — pain-point output under review.
- `skills/persona-synthesis-skill.md` — persona structure and evidence/confidence conventions.
- Any relevant Phase 1 quality findings and their disposition, including `outputs/phase-01/quality-review.md` if produced.

The presence of an output, test report, or agent review does not establish human approval. Confirm reviewer authority and any prior review dispositions through the project's established review process.

## Review checklist

The reviewer must inspect both outputs against the BRD and Phase 1 definition:

### Evidence and traceability

- Every material persona and pain-point statement cites real BRD sections that support the statement.
- Evidence is faithful to the source; unsupported user research, quotations, demographics, behaviors, or measurements are absent.
- BRD working hypotheses and proposed workflows are not presented as validated user findings or observed behavior.
- The pain-point output distinguishes a stated need from an evidenced current pain point.

### Confidence and assumptions

- Material insights use the appropriate label: `HIGH` (direct BRD evidence), `MEDIUM` (reasonable inference), `LOW` (assumption or unestablished detail), or `CONTRADICTORY` (conflicting inputs).
- Inferences are identified and have validation guidance; assumptions state what needs confirmation and how it will be reviewed.
- Confidence labels describe evidence strength in the source and are not represented as validated research confidence.

### Contradictions and completeness

- Conflicting statements are cited on both sides, labeled `CONTRADICTORY`, and left for an identified human decision rather than silently reconciled.
- Persona roles are relevant and distinguishable; direct users and indirect stakeholders are represented correctly.
- Both outputs meet the required fields and validation criteria in `workflow/phase-1-discover.md`.
- The outputs preserve BRD boundaries for authorized access, human underwriting authority, traceability, and review before external actions.
- Open questions and unresolved items are visible and assigned for follow-up or explicitly accepted as unresolved by an accountable reviewer.

Record each failed check with the output location, BRD reference, observed issue, and required correction or human decision.

## Decision criteria

The reviewer must record exactly one decision:

- **`APPROVED`** — both outputs are present, complete, traceable, aligned with the BRD and Phase 1 definition, and preserve all relevant uncertainties and conflicts. Any accepted unresolved questions have an accountable owner and documented disposition. Phase 2 may proceed only after this decision is recorded.
- **`REVISION REQUIRED`** — any required output is missing or unreadable, a material claim lacks evidence or confidence, an unsupported claim is present, a contradiction is hidden or silently resolved, a required field/check is missing, or reviewer approval is not granted. Phase 2 must not proceed.

No agent, test result, silence, or inferred intent can substitute for the authorized human's explicit decision. If the reviewer cannot complete the review, record `REVISION REQUIRED` and explain the blocker.

## Reviewer comments

The reviewer should record:

- Evidence-supported strengths and issues in each output.
- Corrections required, including exact file sections and source references.
- Contradictions or assumptions requiring a business decision or research.
- Accepted unresolved items, accountable owners, and follow-up expectations.
- Any scope or authority concern requiring escalation.

## Decision recording

When this gate is executed, record the completed review in the project's review record. If no review-record location has been designated, use `outputs/reviews/gate-01-review-record.md`. Do not create or update that record merely by reading this definition.

The review record must include:

- Gate identifier and reviewed artifact versions/paths.
- Reviewer name or accountable role, authority, and review date.
- Checklist findings and reviewer comments.
- Decision exactly as `APPROVED` or `REVISION REQUIRED`.
- Rationale, unresolved items, owners, and any required follow-up.
- For `APPROVED`, an explicit statement that Phase 2 is authorized to proceed.

## Revision handling

For `REVISION REQUIRED`, return the findings to the responsible analyst(s). Update only the affected Phase 1 outputs through the project's approved change process, preserve source evidence and confidence labels, then rerun the applicable validation and this gate. Record the revised artifact versions and a new decision; do not overwrite or erase the earlier decision history.

## Failure handling

- If any required input is missing or unreadable, stop the review, identify the exact path and problem, and record `REVISION REQUIRED`. Do not infer the missing content or generate replacement Phase 1 outputs.
- If evidence is insufficient, mark the claim for removal or explicit `LOW` assumption treatment with validation guidance; do not approve it as fact.
- If material source statements conflict, preserve both references and require accountable human resolution or documented acceptance as an open constraint. Do not choose a side silently.
- If the reviewer lacks authority or cannot make the decision, record `REVISION REQUIRED` and identify the appropriate reviewer; do not treat an agent's assessment as approval.
- Until the completed review record contains an explicit `APPROVED` decision, Phase 2 remains blocked.
