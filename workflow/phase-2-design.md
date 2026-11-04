# Phase 2 — Requirements and Workflow Design

## 1. Goal and scope

Translate the approved Phase 1 discovery findings and the BRD into a traceable requirements baseline and a chatbot-first underwriter landing-page workflow for the AI Underwriting Assistant for Commercial Insurance Submission Intake.

This phase defines proposed product behavior, user flows, requirements, acceptance criteria, dependencies, and validation findings. It does not implement the product, establish that submission data or integrations are live, authorize access to data, or transfer underwriting decisions to the assistant. Describe capabilities as proposed unless implementation is independently verified and documented.

## 2. Preconditions

Do not execute Phase 2 until all of the following are true:

- `outputs/phase-01/persona.md` exists and is readable.
- `outputs/phase-01/pain-points.md` exists and is readable.
- Both Phase 1 outputs have passed the human review gate in `workflow/phase-1-discover.md`. Verify recorded approval in the project's established review process; file existence, prior test results, or an agent's review alone do not establish approval.
- Any Phase 1 validation failures or contradictions that block design have been resolved by an accountable human or explicitly recorded as open constraints for Phase 2.

At the time this phase definition was prepared, `outputs/phase-01/pain-points.md` was missing and no approval record was found in the paths inspected. These are execution blockers to resolve before starting Phase 2; this phase definition does not satisfy or bypass them.

## 3. Required inputs

Confirm each required input exists, is readable, and is the intended version before execution:

- `input/brd.md` — authoritative source for product scope, requirements, constraints, risks, assumptions, and open questions.
- `outputs/phase-01/persona.md` — reviewed user roles, needs, workflows, and assumptions.
- `outputs/phase-01/pain-points.md` — reviewed pain points, needs, workflow challenges, evidence, and validation questions.
- `workflow/phase-1-discover.md` — Phase 1 scope, validation rules, and human review gate.
- Recorded human approval and disposition of Phase 1 review findings in the project's established review process.
- `agents/agent-01.md`, `agents/agent-02.md`, and `agents/agent-03.md` — roles and responsibilities for persona analysis, pain-point analysis, and quality review.
- `skills/persona-synthesis-skill.md` — shared evidence, assumption, confidence, and contradiction conventions. Use it as a reference; it is not a requirements-generation skill.

Treat BRD requirements and proposals as source statements, not proof that features, integrations, data, or workflows have been implemented. Treat persona and pain-point outputs as reviewed discovery inputs, not replacements for BRD evidence.

## 4. Execution sequence

1. Verify all preconditions and required inputs. If Phase 1 is not approved or any required input is absent or unreadable, stop and follow Error handling.
2. Read the full BRD and approved Phase 1 outputs. Reconcile each proposed requirement and workflow element with its source evidence, user need, constraint, open question, and approved discovery finding.
3. Identify functional and non-functional requirements for the chatbot-first underwriter landing page. Keep confirmed BRD requirements, proposed design choices, assumptions, dependencies, and unresolved questions distinct.
4. Define the end-to-end workflow, including entry, supported user requests, authorized submission search, source-grounded summaries, missing-information checks, source conflicts, navigation, review/confirmation, and safe empty/error/unsupported states.
5. Produce `requirements.md` and `chatbot-workflow.md` in `outputs/phase-02/`. Include traceability, confidence or evidence status, acceptance criteria, and validation needs.
6. Agent 03 reviews both drafts against the BRD, approved Phase 1 findings, and this phase's validation criteria. Produce `validation-report.md` in `outputs/phase-02/`; report defects and recommended corrections without silently editing requirements or approving unsupported claims.
7. Address review findings in the draft deliverables, then rerun validation. Preserve unresolved conflicts and open questions for human decision.
8. Present all three outputs, validation findings, dependencies, assumptions, and unresolved items to the human approvers. Record the decision and any conditions in the established review process.
9. Proceed to downstream implementation only after the human approval gate passes.

## 5. Agent and skill responsibilities

### Agent 01 — Persona Analyst

- Use the approved `outputs/phase-01/persona.md` to check that requirements and workflow steps serve the intended user roles.
- Do not regenerate the persona output as part of Phase 2 unless separately authorized.
- Surface role or workflow mismatches with BRD references for human review.

### Agent 02 — Pain Point Analyst

- Use the approved `outputs/phase-01/pain-points.md` to trace requirements and workflow steps to reviewed needs and pain points.
- Do not turn assumptions into facts or reprioritize approved business needs without human direction.
- Do not regenerate the Phase 1 pain-point output during Phase 2 unless separately authorized.

### Agent 03 — Quality Reviewer

- Independently review the Phase 2 requirements and workflow against the BRD, approved Phase 1 outputs, and this phase definition.
- Check evidence traceability, confidence/evidence status, assumptions, contradictions, unsupported implementation claims, output structure, and preserved human authority.
- Save findings and recommendations to `outputs/phase-02/validation-report.md` for this phase. This Phase 2 report path overrides Agent 03's general Phase 1 output path for this assignment; do not overwrite Phase 1 review artifacts.
- Do not silently change requirements, resolve business conflicts, or approve unsupported claims.

### Skill

- Use `skills/persona-synthesis-skill.md` only as the shared convention for evidence, assumptions, confidence labels, contradictions, source references, and review guidance. It does not define the requirements or workflow output format.
- No dedicated requirements-design skill is currently specified. Follow this phase definition and the BRD; do not create a new skill as part of executing Phase 2 unless separately requested.

## 6. Expected outputs

Create the following Markdown files under `outputs/phase-02/` only when Phase 2 is executed:

### `outputs/phase-02/requirements.md`

Include:

- Purpose, scope, intended user groups, and a clear statement that this is a proposed requirements baseline.
- Functional and non-functional requirements with stable identifiers.
- For each requirement: description, user/role served, source reference(s), evidence status, confidence where it is an inference or assumption, acceptance criteria, dependencies, and open questions.
- Distinction between BRD-stated requirements, design proposals, assumptions, and implementation facts. Do not assert implementation or live connectivity without verified evidence.
- Constraints, risks, unresolved contradictions, and human decisions required.

### `outputs/phase-02/chatbot-workflow.md`

Describe the proposed chatbot-first underwriter landing-page workflow, including:

- Initial landing page with the assistant as the primary interaction and supporting work context/navigation, without making chat the only route to submission details.
- User request and clarification behavior for supported submission questions.
- Submission search and discovery limited to connected, authorized sources and supported query fields; do not imply current live search unless verified.
- Summary generation from available source information, with unknowns clearly labeled and citations/source links shown where available.
- Missing-information checks against configured requirements, distinguishing confirmed missing, not found in checked sources, unavailable/inaccessible sources, information requiring verification, and unconfigured requirements.
- Inconsistency handling that shows conflicting values and their sources and asks for human verification instead of silently resolving them.
- Contextual navigation and actions, including any confirmation or review steps.
- Human review of summaries, corrections, and follow-up drafts; explicit confirmation and configured authorization for any external action. No autonomous approve, decline, price, bind, or other underwriting decision.
- Empty, no-result, access-denied, source-unavailable, loading, error, and unsupported-request states with clear, truthful user guidance.
- Workflow assumptions, alternatives, dependencies, and open questions with source references and confidence/evidence status.

### `outputs/phase-02/validation-report.md`

Include:

- Validation scope, inputs and versions reviewed, and execution method.
- Check or finding, affected requirement/workflow location, supporting BRD or Phase 1 references, observed result, and PASS/FAIL or equivalent disposition.
- Findings for unsupported claims, traceability gaps, missing or misapplied confidence labels, unmarked assumptions, unresolved contradictions, structure omissions, and claims that imply unverified live data or implementation.
- Recommended correction or the human decision needed; do not make that decision on behalf of business owners.
- Overall validation status and any blockers to human approval or downstream implementation.

## 7. Requirements for the chatbot-first landing page

The requirements and workflow must preserve the following BRD-backed behavior:

- **Chatbot-first, with direct navigation:** Make the assistant the primary landing-page activity while retaining visible access to submission lists, relevant details, and other work context where supported. Do not make chat the only way to reach important work. Evidence: §§3, 6, 7.1, 7.8; FR1, FR8; §13 risk 5.
- **Submission search:** Support only defined query types and accessible sources. Respect current-user authorization, explain no results and source unavailability accurately, and never claim a live search was performed when it was not. Evidence: §§7.2, 8 scenarios 2 and 6; FR2–FR3, FR12, FR14.
- **Submission summaries:** Summarize only information available in supplied/connected authorized sources. Separate facts from suggestions, identify unknowns, and show source references or links where available. Evidence: §§5, 7.3, 8 scenario 1; FR4, FR13; §11 Accuracy and Grounding.
- **Missing-information checks:** Compare found information with configured requirements. Distinguish confirmed missing information from not found in checked sources, inaccessible or unavailable sources, information requiring verification, and requirements not configured. Do not equate administrative completeness with underwriting approval. Evidence: §§7.4, 8 scenario 2; FR5; §13 risks 3–4.
- **Source traceability and conflicts:** Show source references for important extracted facts where available. Surface conflicting values with both sources and defer substantive resolution to an authorized human. Evidence: §§7.3, 7.5, 8 scenario 4; FR6, FR13.
- **Human review and authority:** Keep material underwriting decisions with authorized professionals. Require user review and confirmation for relevant actions; follow-up messages must be editable and reviewed before copying/sending, and sending requires a configured integration and appropriate confirmation. Evidence: §§3, 7.6, 8 scenarios 3 and 5; FR7, FR9.
- **Safe errors and unsupported requests:** State clearly when input is missing, access is denied, data is unavailable, no result is found, a request is unsupported, or a service fails. Do not invent, imply access, or claim an action completed when it did not. Evidence: §§7.10, 8 scenario 6; FR12; §11 Reliability.
- **Work context:** Show pending, priority, assigned, overdue, or recent work only when actual configured data, agreed definitions, permissions, and freshness support it. Mark unavailable context clearly. Evidence: §7.7; FR10; §14 open questions.

These statements specify proposed behavior grounded in the BRD. They are not evidence that corresponding functionality, integrations, configured checklists, or live submission data currently exist.

## 8. Validation criteria

All three outputs must pass these checks before human approval:

- Requirements and workflow steps are traceable to the BRD and approved Phase 1 findings; each citation points to a real section that supports the claim.
- Direct BRD statements are distinguished from proposed design choices, reasonable inferences, assumptions, and implementation facts. No capability is called implemented or live without separate verification.
- Use the shared confidence conventions where a confidence label applies: `HIGH` for direct BRD evidence (not user-research validation), `MEDIUM` for a supported inference, `LOW` for an assumption, and `CONTRADICTORY` for conflicting input. For every inference or assumption, include evidence and review guidance. For conflicts, cite both sides and identify the human decision needed.
- Requirements are testable and have acceptance criteria. Do not invent numeric targets, priorities, data fields, repository names, integrations, or user behaviors absent from approved sources; mark unresolved choices as open questions.
- The workflow covers search, summaries, missing-information checks, traceability, human review, navigation, and safe errors/unsupported states.
- The workflow preserves authorization, uncertainty distinctions, conflict visibility, and human authority over underwriting decisions and external actions.
- Requirements remain consistent with approved personas and pain points. If a Phase 1 finding conflicts with the BRD, do not silently prefer it; report the contradiction for human resolution.
- Validation findings are independently supported and do not silently alter business requirements.
- No unsupported user research, observed workflow, integration, live data, or implementation claim is introduced.

## 9. Human approval gate before downstream implementation

An authorized human review must approve the requirements baseline and workflow before downstream implementation begins. Approval must be recorded in the project's established review process; a passed agent validation report alone is not approval.

Reviewers should include underwriting and submission-intake representatives, plus product and system/data/access owners for decisions within their remit. They must confirm:

- Requirements reflect BRD scope and approved Phase 1 findings, and remain testable.
- Evidence, assumptions, confidence labels, contradictions, dependencies, and open questions are visible and accurately represented.
- Search, summaries, missing-information states, traceability, safe errors, and human review behavior match business and authorization expectations.
- No requirement implies unverified integrations, live data, or implemented capabilities.
- Underwriting decisions and external actions remain under appropriate human authority and confirmation.
- Validation findings are resolved or explicitly accepted with accountable owners and conditions.

If approval is withheld or conditional, record the requested changes, owner, and exit criteria. Do not start implementation until approval and required conditions are satisfied.

## 10. Error handling

- **Phase 1 not approved:** stop before design execution. Report which approval or disposition is missing; do not infer approval from file existence or test results.
- **Missing or unreadable required input:** stop and report the exact path and issue. Do not substitute generic requirements, regenerate Phase 1 outputs, or design from assumptions alone.
- **Missing pain-point output or approval evidence:** treat as a blocking precondition, keep Phase 2 unstarted, and state the required Phase 1 action.
- **Insufficient source evidence:** omit the unsupported requirement or mark it as a `LOW` assumption with a concrete question and review action. Do not fabricate data, integrations, user behavior, or metrics.
- **Contradictory BRD and Phase 1 content:** mark the affected requirement/workflow as `CONTRADICTORY`, cite each side, describe the impact, and request an authorized human decision. Do not silently reconcile or choose a source.
- **Unavailable or unverified integration/data source:** state it as an open dependency or assumption and specify what must be verified. Never claim live submission data or implementation exists based only on the BRD.
- **Validation failure:** report findings and recommended corrections; do not present the phase as approved or advance to downstream implementation until corrected and revalidated.
- **Human approval absent or withheld:** retain a pending status and record the outstanding decision or condition; do not proceed downstream.
