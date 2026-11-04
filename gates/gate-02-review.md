# Gate 02 — Workflow Design Review

## Purpose

Provide the human approval checkpoint for Phase 2 — Requirements and Workflow Design. Review the requirements, chatbot workflow, and validation report against the BRD and approved Phase 1 outputs. Downstream implementation must not proceed until an authorized human records an explicit `APPROVED` decision.

## Required inputs

Confirm that each required file exists, is readable, and is the intended version:

- `input/brd.md` — authoritative source for product requirements, scope, constraints, risks, assumptions, and open questions.
- `workflow/phase-1-discover.md` and `workflow/phase-2-design.md` — discovery and design criteria, output contracts, and review requirements.
- `outputs/phase-01/persona.md` and `outputs/phase-01/pain-points.md` — Phase 1 outputs with a recorded Gate 01 `APPROVED` decision.
- `outputs/phase-02/requirements.md` — proposed requirements baseline.
- `outputs/phase-02/chatbot-workflow.md` — proposed chatbot-first landing-page workflow.
- `outputs/phase-02/validation-report.md` — validation findings and their dispositions.
- The Gate 01 review record and any relevant decision/disposition records for Phase 2 findings.

An agent's validation report is evidence for review, not human approval. If Gate 01 approval is absent, Gate 02 cannot approve the design.

## Review checklist

### Consistency with source and Phase 1

- Each material requirement and workflow decision is traceable to the BRD, an approved Phase 1 finding, or is explicitly labeled as a proposal, inference, assumption, dependency, or open question.
- Source references are real and support the associated claim.
- Requirements and workflow are consistent with approved personas and pain points. Any conflict between BRD and Phase 1 material is exposed as `CONTRADICTORY` and routed to an accountable human.
- No user research, behavior, business metric, repository, integration, live data access, or implementation status is invented or implied without verification.

### Requirements and chatbot workflow

- Requirements have stable identifiers, intended users, testable acceptance criteria, relevant source references, dependencies, and open questions where applicable.
- The landing page is chatbot-first while preserving access to submission details and relevant work context; chat is not the only way to access important work.
- Submission search is limited to supported query types and connected, authorized sources. The design does not claim live search or data availability unless verified.
- Summaries use available source information, distinguish facts from suggestions, expose unknowns, and provide source references where available.
- Missing-information checks distinguish confirmed missing information, not found in checked sources, unavailable/inaccessible sources, items requiring verification, and unconfigured requirements.
- Source conflicts display conflicting values and references and remain subject to human verification; the assistant does not silently resolve them.
- Error and empty states accurately cover no results, missing input, access denial, unavailable sources/services, unsupported requests, and failures without implying an action succeeded when it did not.

### Human oversight and safety

- Material underwriting decisions remain with authorized professionals; administrative completeness is not treated as underwriting approval.
- Relevant outputs and actions retain human review and confirmation. External sending or other consequential actions require an explicitly configured capability and appropriate confirmation.
- Access, source traceability, privacy, auditability, and escalation constraints in the BRD are preserved.

### Validation report and completeness

- The validation report identifies its reviewed inputs and checks evidence, assumptions, confidence/evidence status, contradictions, structure, and implementation claims.
- Findings identify affected locations, source basis, observed issue, and a recommended correction or human decision.
- Material validation failures are corrected and revalidated or explicitly remain blockers; they are not waived by omission.
- All three outputs meet the required output contracts in `workflow/phase-2-design.md`.

Record each failed check with the output location, source reference, observed issue, and required correction or human decision.

## Decision criteria

The reviewer must record exactly one decision:

- **`APPROVED`** — all three Phase 2 outputs are present, complete, traceable, testable where appropriate, consistent with the BRD and approved Phase 1 inputs, and preserve human authority and safe handling. Any accepted unresolved assumptions or conflicts have accountable owners, documented dispositions, and conditions that do not invalidate the approved scope. Downstream implementation may proceed only after this decision is recorded.
- **`REVISION REQUIRED`** — any required output or approval record is missing or unreadable; a material requirement lacks evidence or acceptance criteria; the workflow omits required behavior or safe states; implementation/live-data claims are unverified; a contradiction is hidden or silently resolved; validation findings remain unaddressed; or the human reviewer withholds approval. Downstream implementation must not proceed.

No agent report, test result, silence, or inferred intent can substitute for the authorized human's explicit decision. If the reviewer cannot complete the review, record `REVISION REQUIRED` and explain the blocker.

## Reviewer comments

The reviewer should record:

- Findings on requirements, workflow, and validation report separately.
- Source traceability gaps, unsupported assumptions, contradictions, and safety/authority concerns.
- Required corrections with exact file sections and source references.
- Accepted open questions, their accountable owners, and any implementation constraints.
- Any conditions on approval and the evidence needed to satisfy them.

## Decision recording

When this gate is executed, record the completed review in the project's review record. If no review-record location has been designated, use `outputs/reviews/gate-02-review-record.md`. Do not create or update that record merely by reading this definition.

The review record must include:

- Gate identifier and reviewed artifact versions/paths.
- Reviewer name or accountable role, authority, and review date.
- Checklist findings and reviewer comments.
- Decision exactly as `APPROVED` or `REVISION REQUIRED`.
- Rationale, unresolved items, owners, and any conditions/follow-up.
- For `APPROVED`, an explicit statement that downstream implementation is authorized.

## Revision handling

For `REVISION REQUIRED`, return findings to the responsible analyst(s). Revise only affected Phase 2 outputs through the project's approved change process, maintain source references and uncertainty labels, and rerun validation. Repeat this gate against the revised artifacts. Record each review cycle as a new decision without overwriting earlier decision history. Do not change Phase 1 approvals or BRD requirements as a shortcut to passing this gate.

## Failure handling

- If a required input, Phase 1 approval record, or Phase 2 output is missing or unreadable, stop and record `REVISION REQUIRED` with the exact missing path or approval evidence. Do not generate missing phase outputs as part of the gate.
- If an output is untraceable, unsupported, structurally incomplete, or inconsistent with the BRD, report the defect and required correction; do not silently repair or approve it.
- If requirements conflict with the BRD or approved Phase 1 findings, label and cite the conflict, request an accountable human decision, and keep implementation blocked until resolved or explicitly accepted within the authorized review process.
- If live data, integration, access, or implementation status cannot be verified, treat it as an unresolved dependency or claim requiring correction. Do not infer availability.
- If the reviewer lacks authority or approval is conditional and the conditions are unmet, record `REVISION REQUIRED`; do not proceed downstream.
- Until the completed review record contains an explicit `APPROVED` decision, downstream implementation remains blocked.
