# Phase 2 — Proposed Requirements Baseline

## Purpose and scope

Translate the approved discovery findings and `input/brd.md` into a traceable requirements baseline for a chatbot-first landing page in the AI Underwriting Assistant for Commercial Insurance Submission Intake. This document defines proposed product behavior; it does not describe implemented software, establish that submission data or integrations are connected, grant data access, or delegate underwriting authority.

**Status:** Proposed requirements for Gate 02 human review. No Gate 02 decision has been made.

## Intended users

- Commercial insurance underwriter — reviews risk and submission information and retains underwriting judgment. (BRD §§4.1, 5; persona: `Commercial Insurance Underwriter`.)
- Underwriting assistant / submission intake specialist — organizes submissions, checks completeness, and prepares follow-up drafts. (BRD §§4.2, 5; persona with same role title.)
- Underwriting manager — oversees workload and consistency where configured data supports it. (BRD §4.3; persona: `Underwriting Manager`.)
- Product owner / system administrator — configures requirements, access, and operational controls. (BRD §4.5; persona: `Product Owner / System Administrator`.)
- Broker / agent — indirect stakeholder who supplies information and may receive reviewed follow-up. The BRD does not establish the broker as a direct user of the initial landing page. (BRD §4.4; persona: `Broker / Agent (Indirect Stakeholder)`.)

## Evidence and confidence conventions

- **BRD requirement — HIGH:** explicitly stated in the BRD. HIGH describes source support, not validated user research or implementation.
- **Approved discovery evidence — HIGH:** explicitly present in the Gate 01 approved Phase 1 artifacts. This is reviewed discovery context, not a substitute for a BRD requirement.
- **Design proposal — MEDIUM:** a concrete design choice inferred from BRD and approved discovery needs; requires human review.
- **Assumption / open question — LOW:** an unverified dependency or choice. Confirm with the named business, product, system, or access owner before implementation.
- **CONTRADICTORY:** reserved for conflicting source statements. No material BRD-versus-approved-Phase-1 conflict was identified during this design pass; continue to expose any conflict discovered during implementation or review rather than resolving it silently.

## Functional requirements

### FRD-01 — Chatbot-first landing page with direct navigation

- **Requirement:** Provide a conversational assistant as the primary landing-page interaction, alongside supporting work context and direct navigation to submission lists and details where supported.
- **Users:** Underwriter, intake specialist, manager.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§3, 6, 7.1, 7.8; FR1, FR8; risk 5. Approved discovery: PP-01 and PP-10; underwriter and intake personas.
- **Acceptance criteria:** The proposed page has an assistant entry point and a visible route to submission details independent of chat. If a navigation capability is not configured, the UI states that it is unavailable instead of implying navigation occurred.
- **Dependencies / open questions:** Product/design owner to confirm placement and supported navigation targets. **LOW** assumption: existing workbench routes can be linked; verify with the system owner.

### FRD-02 — Supported natural-language requests and clarification

- **Requirement:** Support only defined submission-related queries and operations; ask for clarification when the request is ambiguous and explain when it is unsupported.
- **Users:** Underwriter, intake specialist.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.1–7.2, 9; FR2; scenario 6. Approved discovery: persona expectations and PP-03.
- **Acceptance criteria:** For an ambiguous query the assistant requests the missing discriminator before returning submission-specific information. For an unsupported request, it explains the supported scope and does not fabricate a result or claim an action.
- **Dependencies / open questions:** Product owner must define supported query types and permitted operations before implementation. No unlisted query fields are assumed by this requirement.

### FRD-03 — Authorized submission search

- **Requirement:** Search only supported fields in connected sources that the current user is authorized to access; report the scope actually searched.
- **Users:** Underwriter, intake specialist, manager, subject to permissions.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.2, 8 scenarios 2 and 6; FR3, FR12, FR14; risk 2. Approved discovery: PP-03 and PP-09.
- **Acceptance criteria:** Search behavior identifies the supported fields and source scope; unauthorized records are not disclosed; no-result and unavailable-source responses accurately describe what could be checked. No response states that live search occurred unless a functioning authorized source was independently verified.
- **Dependencies / open questions:** **LOW** assumptions: connected submission source, supported search schema, identity/access controls, and permission enforcement are not established as implemented. System/data/access owners must verify each before any live-search claim.

### FRD-04 — Source-grounded submission summaries

- **Requirement:** Summarize only information supplied by or retrieved from available, authorized sources; identify unknown or unverified values and show source references where available.
- **Users:** Underwriter, intake specialist.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§5, 7.3, 8 scenario 1, 9; FR4, FR13; NFR Accuracy and Grounding. Approved discovery: PP-04.
- **Acceptance criteria:** Every material extracted fact has a source reference when one is available; unavailable values are labeled unknown/unavailable; suggestions are separated from source facts; unsupported coverage, status, or risk details are not generated.
- **Dependencies / open questions:** Source formats, citation granularity, and any retrieval capability require system-owner verification. They are not asserted to exist.

### FRD-05 — Configured missing-information checks

- **Requirement:** Compare information found in accessible sources against a checklist configured for the applicable line of business, and distinguish: confirmed missing, not found in checked sources, source unavailable/inaccessible, requires verification, and requirement not configured.
- **Users:** Underwriter, intake specialist; product/system administrator configures applicable requirements.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.4, 8 scenario 2; FR5; risks 3–4; §14 open questions. Approved discovery: PP-02, PP-05, PP-09.
- **Acceptance criteria:** Each checklist item shows its state and the sources/checklist basis. Lack of repository access is never reported as confirmed missing. Administrative completeness is not presented as underwriting approval.
- **Dependencies / open questions:** **LOW** assumption: a current, approved, line-of-business checklist and source coverage can be configured. Product and underwriting owners must specify checklist ownership, versioning, and effective date.

### FRD-06 — Conflicting-source presentation

- **Requirement:** Surface conflicting values with each available source reference and defer resolution to an authorized human.
- **Users:** Underwriter, intake specialist.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.5, 8 scenario 4; FR6, FR13; risk 1. Approved discovery: PP-06.
- **Acceptance criteria:** The workflow presents both values and provenance where available, marks the discrepancy for verification, and does not silently choose, overwrite, or label either value correct.
- **Dependencies / open questions:** Underwriting/product owners to define escalation and correction procedures. No conflict resolution policy is inferred.

### FRD-07 — Editable follow-up drafts with human control

- **Requirement:** Prepare a follow-up draft only from verified missing items or user-selected questions; require user review/editing before copying or sending. Sending requires a configured integration and appropriate confirmation.
- **Users:** Primarily intake specialist; underwriter may review.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§3, 7.6, 7.8, 8 scenario 3; FR7, FR9; risk 6. Approved discovery: PP-07.
- **Acceptance criteria:** Draft content identifies its basis; the user can edit and review it; no message is sent by draft generation. If sending is unavailable, the UI offers only supported alternatives and does not report delivery.
- **Dependencies / open questions:** **LOW** assumption: a messaging integration may be considered in future; no integration is confirmed. System/access owner must verify authorization, recipient selection, and confirmation requirements before enabling sending.

### FRD-08 — Work context and queue indicators

- **Requirement:** Show assigned, priority, pending, overdue, or recent-work context only when actual configured data, agreed definitions, permissions, and freshness support the display.
- **Users:** Underwriter, manager, intake specialist.
- **Evidence status / confidence:** BRD requirement — **HIGH** for conditional display; data availability is unverified.
- **Evidence:** BRD §§1, 6, 7.7, 14; FR10. Approved discovery: manager persona and PP-08.
- **Acceptance criteria:** Every displayed indicator has an agreed definition and source; unavailable context is labeled unavailable; the design does not imply personalization, freshness, or live data without verification.
- **Dependencies / open questions:** **LOW** assumption: assignment, priority, status, and recency fields are available and governed. Confirm source, definitions, freshness, and role permissions with owners.

### FRD-09 — Contextual navigation and action-result truthfulness

- **Requirement:** Offer only supported actions such as opening a submission, viewing a source, copying a summary, or showing a checklist; confirm consequential changes and report actual action outcomes.
- **Users:** Underwriter, intake specialist.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.8, 8 scenarios 1–4; FR8–FR9, FR12. Approved discovery: PP-01, PP-10.
- **Acceptance criteria:** The UI distinguishes available from unavailable actions. On failure, it reports failure and a safe next step; it never states success without a successful action result.
- **Dependencies / open questions:** Supported action list and confirmation policy require product/system-owner approval.

### FRD-10 — Feedback and correction

- **Requirement:** Allow users to flag incorrect or unhelpful output and keep corrections distinguishable from the original generated response.
- **Users:** Underwriter, intake specialist; product/system administrator reviews quality signals.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §7.9; FR11; product and administration needs §5.
- **Acceptance criteria:** Feedback is labeled as user feedback/correction, not silently substituted as source evidence; capture avoids unnecessary sensitive data.
- **Dependencies / open questions:** **LOW** assumption: a feedback capture and retention mechanism will be configured. Privacy, retention, access, and review ownership need approval.

### FRD-11 — Safe empty, error, and unsupported states

- **Requirement:** Provide truthful, actionable states for no result, missing context/input, inaccessible or unavailable sources, partial results, service failure, timeout, and unsupported request.
- **Users:** All direct landing-page users.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§7.10, 8 scenario 6; FR12; NFR Reliability; risks 1–2, 4.
- **Acceptance criteria:** State identifies what happened and the checked scope where known, does not imply an action or search completed when it did not, and offers a safe next step. Partial results disclose their limitation.
- **Dependencies / open questions:** Product/system owner to define service status signals and user-safe recovery options.

### FRD-12 — Human authority, access, privacy, and auditability

- **Requirement:** Keep underwriting decisions and external actions with appropriately authorized professionals; protect access, privacy, and audit requirements; retain review/confirmation where required.
- **Users:** All users and system/access owners.
- **Evidence status / confidence:** BRD requirement — **HIGH**.
- **Evidence:** BRD §§3, 7.6–7.8, 9, FR9, FR14–FR15; §§11, 13 risks 2–3, 6. Approved discovery: all direct-user personas and PP-10.
- **Acceptance criteria:** The assistant does not approve, decline, price, bind, or otherwise make a material underwriting decision; administrative readiness is visibly distinct from underwriting approval; access is checked before data disclosure; external actions require configured authority and confirmation.
- **Dependencies / open questions:** Security, access, privacy, audit, and underwriting owners must approve applicable policies. This requirement does not assert controls are implemented.

## Non-functional requirements

| ID | Requirement | Evidence status / confidence | Evidence and acceptance criteria |
|---|---|---|---|
| NFRD-01 | Ground outputs in source material and expose uncertainty. | BRD requirement — **HIGH** | BRD §11 Accuracy and Grounding; risks 1 and 7; FR4, FR13. Acceptance: unsupported facts/citations are not emitted; unknowns and source scope are visible. |
| NFRD-02 | Preserve secure access and privacy boundaries. | BRD requirement — **HIGH** | BRD §11 Security and Privacy; FR14; risk 2. Acceptance: access and sensitive-data handling are reviewed by accountable owners before implementation. |
| NFRD-03 | Provide reliable, truthful status and recovery behavior. | BRD requirement — **HIGH** | BRD §11 Reliability; FR12. Acceptance: errors, timeouts, partial results, and unavailability are distinguishable and do not imply completion. |
| NFRD-04 | Maintain traceability and reviewability. | BRD requirement — **HIGH** | BRD §§7.3, 7.5, FR13, FR15, §11 Auditability. Acceptance: sources and relevant review/action outcomes can be inspected subject to approved policy. |
| NFRD-05 | Usability, accessibility, maintainability, and integration boundaries must be defined and evaluated. | BRD requirement — **HIGH** at category level; specific targets are open. | BRD §11 Usability and Accessibility, Maintainability, Integration. Acceptance: owners define applicable standards and verification method before implementation. No numerical targets are invented. |

## Constraints, risks, and unresolved decisions

- The BRD's §2 pain statements are working hypotheses, not validated research. Approved Phase 1 artifacts retain that qualification; do not convert them into measured user findings. (BRD §2; Phase 1 quality review.)
- A proposed search, checklist, source link, queue, or messaging action is not proof that a repository, checklist, integration, or live data connection exists. Verify each dependency before implementation or any claim of availability. (BRD §§7.2–7.8, 14, 17.)
- Administrative completeness is not underwriting approval. Material underwriting judgment remains with an authorized professional. (BRD §§3, 8 scenario 5, 13 risk 3.)
- **LOW — open question:** Which data sources and search fields are connected and authorized? Resolve with system/data/access owners.
- **LOW — open question:** Who owns checklist content/versioning by line of business, and which source coverage permits a “confirmed missing” state? Resolve with underwriting/product owners.
- **LOW — open question:** Which queue/status definitions, freshness rules, and roles are valid? Resolve with product/system owners.
- **LOW — open question:** Are any external messaging or workflow integrations in scope, configured, and authorized? Resolve with system/access owners; sending remains disabled until verified.
- **LOW — open question:** What are the approved audit, feedback, privacy, accessibility, and retention controls? Resolve with accountable product/security/system owners.
- **Contradictions:** None identified between the reviewed BRD and approved Phase 1 artifacts for this baseline. This is a review result, not a claim that source materials can never contain conflicts. Any newly found conflict must be marked `CONTRADICTORY`, cite both sides, and be routed for human resolution.

## Human decisions requested at Gate 02

1. Confirm the proposed requirement scope and intended direct user roles.
2. Assign owners and exit criteria for the LOW-confidence data, checklist, queue, messaging, privacy, and audit dependencies above.
3. Confirm that source uncertainty, missing-information states, and human authority constraints meet underwriting and intake expectations.
4. Resolve or explicitly accept any reviewer-identified conflict or open question with an accountable owner and conditions.

