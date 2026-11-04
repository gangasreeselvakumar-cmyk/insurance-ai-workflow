# Run Phase 2 — Requirements and Workflow Design

## Purpose and authority

Use this runner to execute `workflow/phase-2-design.md` for the AI Underwriting Assistant for Commercial Insurance Submission Intake. The phase definition and `gates/gate-02-review.md` govern the work. Downstream implementation is prohibited until an authorized human records an explicit Gate 02 `APPROVED` decision.

## Preconditions and required inputs

Before design work begins, verify all of the following:

- `input/brd.md` exists and is readable.
- `workflow/phase-2-design.md`, `workflow/phase-1-discover.md`, and `gates/gate-02-review.md` exist and are readable.
- `outputs/phase-01/persona.md` and `outputs/phase-01/pain-points.md` exist and are readable.
- `outputs/reviews/gate-01-review-record.md` (or the established review-record path) contains an explicit human `APPROVED` decision for the current Phase 1 output versions and states Phase 2 may proceed. Verify the reviewer and artifact versions; file presence or test results alone are insufficient.
- Any Phase 1 blocking validation findings or contradictions have been resolved or explicitly recorded as constraints by an accountable human.
- `agents/agent-01.md`, `agents/agent-02.md`, and `agents/agent-03.md` are readable.
- `skills/persona-synthesis-skill.md` is readable as the shared evidence/confidence convention; do not treat it as a requirements-design skill.

If a prerequisite fails, stop before generating Phase 2 outputs. Report the exact missing input, unreadable file, or absent/invalid approval decision. Do not infer approval, generate missing Phase 1 outputs, or work around Gate 01.

## Execution sequence

1. Verify the preconditions above and confirm that the Gate 01 approval applies to the versions of both Phase 1 outputs being used. If any check fails, stop.
2. Read the full BRD and the approved Phase 1 persona and pain-point outputs. Treat the BRD as authoritative for product scope and distinguish its stated requirements/proposals from evidence that a feature, integration, or live source is implemented.
3. Apply `workflow/phase-2-design.md` to produce `outputs/phase-02/requirements.md`. Include stable requirement identifiers, users, source references, evidence/confidence status, acceptance criteria, dependencies, and open questions as required by the phase definition.
4. Produce `outputs/phase-02/chatbot-workflow.md` with the chatbot-first underwriter landing-page workflow. Cover supported submission search, source-grounded summaries, missing-information states, source conflicts, navigation, human review/confirmation, and safe empty/error/unsupported states. Preserve access limits and underwriting authority.
5. Use Agent 01 and Agent 02 responsibilities from the existing definitions to check alignment with approved personas and pain points. Do not regenerate Phase 1 outputs or turn assumptions into business facts.
6. Have Agent 03 independently validate both Phase 2 drafts against the BRD, approved Phase 1 outputs, and phase criteria. Produce `outputs/phase-02/validation-report.md` with checks, findings, evidence, status, and recommended correction or human decision.
7. Validate the three outputs before gate review:
   - Each material requirement and workflow decision traces to the BRD or approved Phase 1 findings; citations exist and support the claim.
   - BRD statements, design proposals, inferences, assumptions, dependencies, contradictions, and verified implementation facts are distinguished.
   - Confidence labels use `HIGH`, `MEDIUM`, `LOW`, or `CONTRADICTORY` where applicable, with evidence and review guidance.
   - Requirements have testable acceptance criteria; no unsupported metrics, priorities, data fields, repositories, integrations, live data, or implemented capabilities are invented.
   - The workflow includes the required search, summaries, missing-information distinctions, source traceability, human oversight, and safe error handling.
   - The validation report records all failures and unresolved decisions; no contradiction is silently resolved and no material validation failure is hidden.
8. If validation fails, do not present the phase as ready or bypass the review gate. Record defects and required corrections; revise and rerun validation before review.
9. If validation passes, present all three outputs, findings, assumptions, dependencies, and contradictions to authorized business and product/system reviewers. Apply `gates/gate-02-review.md` in full.
10. Record the human's actual decision as exactly `APPROVED` or `REVISION REQUIRED` in `outputs/reviews/gate-02-review-record.md` (or the project's explicitly designated review record). Include reviewed artifact paths/versions, reviewer authority and date, comments, rationale, unresolved items, and conditions.
11. Stop after recording the decision. On `REVISION REQUIRED`, correct the cited issues and repeat validation and review. Do not begin downstream implementation until the record contains an explicit human `APPROVED` decision authorizing implementation and any approval conditions are satisfied.

## Output paths

- `outputs/phase-02/requirements.md`
- `outputs/phase-02/chatbot-workflow.md`
- `outputs/phase-02/validation-report.md`
- Gate decision record: `outputs/reviews/gate-02-review-record.md`, unless an established review process specifies another location.

## Evidence, data, and scope limits

- Use `input/brd.md` as the product source and the approved Phase 1 files as reviewed discovery context.
- Do not claim that submission systems, connected repositories, integrations, checklists, live data, or proposed capabilities exist or are available unless independently verified and documented.
- Mark unverified dependencies and design choices as assumptions or open questions with evidence and review guidance.
- Keep material underwriting decisions with authorized professionals. Require human review and appropriate confirmation for consequential or external actions.

## Stop and error rules

- Missing or unreadable BRD, phase definition, Phase 1 output, agent definition, skill reference, or gate definition: stop and report the exact path.
- Missing Gate 01 record, non-`APPROVED` status, invalid reviewer, stale artifact versions, or no explicit Phase 2 authorization: stop; do not infer approval.
- Validation failure, unsupported claim, untraceable source, missing acceptance criterion, or unresolved material contradiction: report it, keep the phase pending, and require correction or accountable human disposition.
- Gate 02 missing, incomplete, or `REVISION REQUIRED`: downstream implementation remains blocked.
- Missing human reviewer, absent decision record, unmet approval condition, or uncertain decision: stop and leave the phase pending. Never create an approval on behalf of a human.
- Do not execute implementation, run another phase, or create or execute an orchestrator as part of this runner.
