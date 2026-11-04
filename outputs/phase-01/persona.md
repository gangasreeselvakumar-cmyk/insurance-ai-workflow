# User Personas: AI Underwriting Assistant

**Source:** `input/brd.md`  
**Basis:** **[HIGH]** These profiles synthesize what the BRD states and proposes; they are not validated user research. Evidence: §2 calls the problem statements working hypotheses, and §§14–15 identify discovery and evaluation still needed. Review: Validate the hypotheses and role interpretations with representative users and stakeholders before treating them as confirmed findings.

## Confidence key

- **HIGH:** Directly stated in the BRD; this indicates source support, not validated research.
- **MEDIUM:** A reasonable inference from cited BRD statements that should be checked with users or stakeholders.
- **LOW:** An assumption or unresolved validation question; do not treat it as fact.
- **CONTRADICTORY:** Conflicting source statements; preserve both and seek an authoritative resolution without silently choosing one.

## Commercial Insurance Underwriter

- **Role and responsibilities:** **[HIGH]** Direct user who evaluates commercial risks, reviews submission information, and decides the next underwriting action under organizational rules and authority. Evidence: §4.1. Review: Confirm role boundaries and decision authority with underwriting stakeholders.
- **Goals:**
  - **[HIGH]** Understand a submission quickly and find important risk and exposure details in supplied information. Evidence: §§4.1, 5 (Commercial Insurance Underwriter Needs). Review: Validate which details are most useful across supported lines of business.
  - **[HIGH]** Identify missing documents and unanswered questions, verify source evidence, and continue in the existing submission workflow. Evidence: §§4.1, 5. Review: Confirm required source links and workflow transitions.
- **Needs:**
  - **[HIGH]** Concise summaries with a clear distinction between source facts and AI-generated suggestions, with source references and unknowns shown. Evidence: §5 (Commercial Insurance Underwriter Needs), §7.3. Review: Validate the evidence display and unknown-value language with underwriters.
  - **[HIGH]** Search authorized submission data and navigate to relevant details when supported. Evidence: §§5, 7.2, 7.8. Review: Confirm supported search fields, access behavior, and navigation routes.
- **Pain points:**
  - **[HIGH]** The BRD presents moving between submission lists, detail screens, repositories, and notes, repeated review, and broker follow-up as working problem hypotheses. Evidence: §2. Review: Validate frequency and impact with underwriters; do not treat these hypotheses as established research.
  - **[HIGH]** The BRD records a stated discovery concern about relying on summaries without knowing their source, and a desire to retain control of underwriting decisions. Evidence: §2. Review: Validate trust and control needs with users.
- **Behaviors and workflow:**
  - **[HIGH]** Proposed workflow: ask a submission question, review available information and source references, then open the relevant record to verify it. Evidence: §8 scenario 1 and §7.3. Review: Confirm this proposed sequence matches actual work.
  - **[HIGH]** Proposed workflow: search accessible submissions for missing items and review the configured checklist and record links. Evidence: §8 scenario 2 and §§7.2, 7.4. Review: Confirm data-source and checklist availability; distinguish “not found in checked sources” from “confirmed missing.”
  - **[HIGH]** These are proposed scenarios, not observed current behaviors. Evidence: §8 is titled “Example Scenarios.” Review: Validate workflow with representative underwriters.
- **Expectations from the AI Underwriting Assistant:**
  - **[HIGH]** Use only connected, authorized sources; label unknown values and cite supporting material where available. Evidence: §§7.1–7.3, FR3–FR4. Review: Verify access and source-reference behavior for each integration.
  - **[HIGH]** Flag conflicts for human verification and do not make or imply binding underwriting decisions. Evidence: §§7.5, 8 scenarios 4–5, FR6, FR9. Review: Confirm decision and escalation boundaries with authorized underwriting leaders.
- **Potential concerns or barriers:**
  - **[HIGH]** The BRD identifies unsupported summaries, unauthorized data exposure, and confusion between administrative completeness and underwriting approval as product risks. Evidence: §13 risks 1–3. Review: Validate controls and terminology with users and compliance stakeholders.
- **Relevant BRD evidence:** **[HIGH]** §4.1 states the underwriter's role; §5 lists needs; §§7.2–7.5 and §8 scenarios 1, 2, 4, and 5 describe proposed interactions and limits. Evidence: the cited sections. Review: Check these source sections when confirming this profile.
- **Assumptions or questions requiring validation:**
  - **[LOW]** Which submission details most affect an underwriter's next action? Evidence: Not specified as a prioritized list in §§4–5; §14 asks which lines and fields to support. Review: Ask underwriters and product stakeholders before prioritizing persona needs.
  - **[LOW]** What evidence presentation is sufficient for verification? Evidence: §14 asks how source references should be displayed. Review: Validate with representative users through workflow review.
- **Confidence, evidence, and review guidance:** **[MEDIUM]** No contradictory input identified in the BRD reviewed for this role. Evidence: §§4–8 and §13 consistently reserve material underwriting decisions for authorized professionals. Review: Recheck this conclusion if the BRD or decision policy changes.

## Underwriting Assistant / Submission Intake Specialist

- **Role and responsibilities:** **[HIGH]** Direct user who receives, organizes, and checks incoming submissions before or during underwriter review. Evidence: §4.2. Review: Confirm intake responsibilities and handoffs with intake staff.
- **Goals:**
  - **[HIGH]** Check completeness, identify missing or inconsistent information, prepare concise summaries, track outstanding items, and draft broker follow-ups. Evidence: §§4.2, 5 (Underwriting Assistant Needs). Review: Confirm the order and ownership of these tasks with users.
  - **[HIGH]** Reduce repeated manual checks across multiple screens. Evidence: §4.2 and §2, where the burden is described as a working hypothesis. Review: Validate the current workflow and measure the claimed burden before treating it as established.
- **Needs:**
  - **[HIGH]** A configurable checklist, clear submission identifiers and status, and a way to verify or correct generated information. Evidence: §§5, 7.4, 7.9. Review: Confirm required fields, document types, status definitions, and correction ownership.
  - **[HIGH]** Editable follow-up drafts grounded in verified missing items. Evidence: §§5, 7.6, FR7. Review: Confirm review and approval steps before any external communication.
- **Pain points:** **[HIGH]** The BRD frames repetitive completeness checks and repeated broker follow-up as working problem hypotheses, not validated findings. Evidence: §2. Review: Validate their frequency and impact with intake specialists.
- **Behaviors and workflow:**
  - **[HIGH]** Proposed workflow: compare available submission data with configured requirements, distinguish missing from unverified or inaccessible information, and prepare a draft for user review. Evidence: §§7.4, 7.6, 8 scenario 3. Review: Confirm checklist sources and review steps with intake staff.
  - **[HIGH]** The proposed follow-up is reviewed and edited before copying or sending; external sending requires an explicitly configured integration and appropriate confirmation. Evidence: §7.6. Review: Confirm the applicable communication policy and permissions.
- **Expectations from the AI Underwriting Assistant:**
  - **[HIGH]** Distinguish confirmed missing information, information not found in checked sources, information requiring verification, and requirements not configured. Evidence: §7.4. Review: Verify these states against the organization's checklist and repositories.
  - **[HIGH]** Show conflicting values and their sources without silently resolving material conflicts. Evidence: §7.5, FR6. Review: Confirm which roles resolve source conflicts.
- **Potential concerns or barriers:**
  - **[HIGH]** The BRD identifies incorrect missing-document alerts when the relevant repository is unavailable and incorrect external actions as risks. Evidence: §13 risks 4 and 6. Review: Verify source availability cues and confirmation gates before deployment.
- **Relevant BRD evidence:** **[HIGH]** §§4.2 and 5 define this role and its needs; §§7.4–7.6 and §8 scenario 3 describe proposed checks and follow-up. Evidence: the cited sections. Review: Check current checklist and communication procedures with intake stakeholders.
- **Assumptions or questions requiring validation:**
  - **[LOW]** Which checklist rules and document requirements apply to each line of business? Evidence: §§14 and 17 list these as open questions/dependencies. Review: Obtain approved requirements from business owners before configuring checks.
  - **[LOW]** Which repositories and status terms are used by intake staff today? Evidence: Not established in §§4–8; §14 asks which systems and status choices are in scope. Review: Confirm during workflow and integration discovery.
- **Confidence, evidence, and review guidance:** **[MEDIUM]** No contradictory input identified in the BRD reviewed for this role. Evidence: §§4–8 and §13 align on intake support, verified information, and human review before external action. Review: Recheck against any future changes to requirements or communication policy.

## Underwriting Manager

- **Role and responsibilities:** **[HIGH]** Stakeholder who oversees workload, service levels, submission progress, and team consistency. Evidence: §4.3. Review: Confirm managerial responsibilities and decision rights with the organization.
- **Goals:**
  - **[HIGH]** Understand workload and pending items, identify submissions requiring attention, review administrative bottlenecks, and encourage consistent intake. Evidence: §4.3. Review: Validate which outcomes are priorities for managers.
  - **[HIGH]** Ensure AI-assisted outputs are reviewable and accountable. Evidence: §4.3 and §5 (Underwriting Manager Needs). Review: Confirm what traceability and review outcomes managers need.
- **Needs:**
  - **[HIGH]** Visibility into pending, overdue, or high-priority work when reliable data is available, plus consistent status definitions and intake checks. Evidence: §5 (Underwriting Manager Needs). Review: Define data freshness, status meaning, and priority criteria with business owners.
  - **[HIGH]** Traceable outputs, human review outcomes, and insight into recurring causes of incomplete submissions. Evidence: §5. Review: Confirm the level of detail and access appropriate for the manager role.
- **Pain points:** **[HIGH]** The BRD identifies administrative bottlenecks and pending-work visibility as needs, while §2 labels the broader problem statements as working hypotheses. Evidence: §§2, 4.3, 5. Review: Validate the actual bottlenecks and their impact; do not treat them as confirmed research.
- **Behaviors and workflow:** **[MEDIUM]** A manager may use configured work-queue context to identify submissions requiring attention; this is inferred from the stated oversight needs and queue feature. Evidence: §§4.3, 5, 7.7. Review: Confirm manager use cases and desired workflow with managers.
  - **[LOW]** Detailed manager screens, review cadence, and portfolio analytics needs are not specified. Evidence: §§4.3, 7.7, and §14's open questions about landing-page work context. Review: Ask managers which views and cadence they need before designing them.
- **Expectations from the AI Underwriting Assistant:**
  - **[HIGH]** Work indicators use actual configured data and agreed status definitions and are not presented as live or personalized when data is unavailable. Evidence: §7.7 and FR10. Review: Verify data provenance and freshness before displaying indicators.
  - **[HIGH]** Outputs and human review outcomes remain traceable and accountable. Evidence: §5 and FR13–FR15. Review: Confirm audit and retention rules with policy owners.
- **Potential concerns or barriers:** **[HIGH]** The BRD identifies unavailable or misleading work context and overreliance on chat as risks to manage. Evidence: §§7.7, 13 risk 5. Review: Validate that direct navigation and reliable data remain available in manager workflows.
- **Relevant BRD evidence:** **[HIGH]** §4.3 and §5 state oversight needs; §7.7 and FR10 define work context limitations; FR13–FR15 address traceability and audit. Evidence: the cited sections. Review: Confirm that manager access aligns with authorization policy.
- **Assumptions or questions requiring validation:**
  - **[LOW]** Which queue measures, thresholds, and bottlenecks matter most to managers? Evidence: §14 asks whether the landing page should show assigned, priority, recent, or all submissions; no thresholds are defined. Review: Agree definitions and thresholds with managers before configuration.
  - **[LOW]** What manager-level detail and access are appropriate? Evidence: Not specified in §§4–7. Review: Resolve with managers and access-control owners.
- **Confidence, evidence, and review guidance:** **[MEDIUM]** No contradictory input identified in the BRD reviewed for this role. Evidence: §§4.3, 5, 7.7, and FR10 describe consistent, data-dependent workload visibility. Review: Recheck if status or access requirements change.

## Product Owner / System Administrator

- **Role and responsibilities:** **[HIGH]** Stakeholder responsible for configuring workflow rules, managing authorized integrations, and maintaining the product. Evidence: §4.5. Review: Confirm ownership boundaries across product, administration, and data teams.
- **Goals:**
  - **[HIGH]** Define required fields and document checklists, control access to submission data, review errors and feedback, and monitor usage and output quality. Evidence: §§4.5, 5 (Product and Administration Needs). Review: Assign each configuration and review responsibility to an accountable owner.
  - **[HIGH]** Keep integration boundaries explicit and testable. Evidence: §5 (Product and Administration Needs) and §11 (Integration). Review: Confirm which integrations are approved and operational.
- **Needs:** **[HIGH]** Configurable requirements, secure authorized sources, clear handling of errors and unsupported requests, and means to evaluate quality and feedback. Evidence: §5 (Product and Administration Needs), FR5, FR12–FR15. Review: Validate configuration, security, and quality-evaluation requirements with owners.
- **Pain points:** **[LOW]** The BRD does not establish current administrator pain points; any operational burden is an assumption. Evidence: §§4.5, 5, and 14 state needs and open questions but no validated administrator pain research. Review: Ask administrators about current maintenance and integration burdens before describing them as pain points.
- **Behaviors and workflow:**
  - **[HIGH]** Stated responsibilities include configuring workflow rules and authorized integrations and maintaining the product. Evidence: §4.5. Review: Confirm actual operating procedures with the responsible teams.
  - **[MEDIUM]** Reviewing feedback, errors, usage, output quality, and workflow performance is a likely operational workflow inferred from §4.5 and §5. Evidence: §§4.5, 5. Review: Validate frequency, tooling, and ownership with product and administration stakeholders.
- **Expectations from the AI Underwriting Assistant:** **[HIGH]** Respect authorization, identify unsupported requests and unavailable sources, and provide traceable outputs and appropriate error handling. Evidence: §§7.10, FR3, FR12–FR15, §11. Review: Verify permission and failure behavior with security and integration owners.
- **Potential concerns or barriers:** **[HIGH]** The BRD identifies authorization gaps, unavailable integrations, sensitive data handling, audit retention, and output quality as dependencies or open questions. Evidence: §§11, 13 risks 1–2, 14, 17. Review: Resolve these dependencies before production use.
- **Relevant BRD evidence:** **[HIGH]** §§4.5 and 5 define administration needs; FR3, FR5, FR12–FR15 and §§11, 14, 17 state control requirements and dependencies. Evidence: the cited sections. Review: Validate these against approved governance and integration decisions.
- **Assumptions or questions requiring validation:**
  - **[LOW]** Who owns each configuration, access, audit-retention, and quality decision? Evidence: §14 lists related open questions but does not assign owners. Review: Establish accountable owners before configuration.
  - **[LOW]** Which source systems, model services, and quality thresholds will be approved? Evidence: §§12, 14, 17 leave these as measures, questions, or dependencies. Review: Confirm through technical and business governance.
- **Confidence, evidence, and review guidance:** **[MEDIUM]** No contradictory input identified in the BRD reviewed for this role. Evidence: §§4.5, 5, 10–11, and 14–17 consistently describe configurable, permission-aware, auditable operation while leaving dependencies open. Review: Recheck after governance and integration decisions are made.

## Broker / Agent (Indirect Stakeholder)

- **Role and responsibilities:** **[HIGH]** Indirect stakeholder who provides submissions and responds to requests for additional information; the BRD says the broker is not necessarily a direct user of the initial underwriter landing page. Evidence: §4.4. Review: Confirm broker touchpoints and communication ownership with business stakeholders.
- **Goals:** **[HIGH]** Receive clear, specific requests, avoid repeated or contradictory requests, and understand what is needed to continue the submission process. Evidence: §4.4. Review: Validate these stated needs with broker-facing users or brokers.
- **Needs:** **[HIGH]** Follow-up requests should identify missing information or documents clearly. Evidence: §4.4 and §7.6. Review: Validate request wording and required detail with the people who prepare and receive follow-ups.
- **Pain points:** **[HIGH]** The BRD identifies avoiding repeated or contradictory requests as a broker need; it does not present this as validated broker research, and §2 marks problem statements as hypotheses. Evidence: §§2, 4.4. Review: Validate whether and how often brokers experience repeated or conflicting requests.
- **Behaviors and workflow:**
  - **[HIGH]** BRD scenario: an underwriting assistant prepares a follow-up draft, and the internal user reviews and edits it before copying or sending. Evidence: §7.6 and §8 scenario 3. Review: Confirm the internal review and communication workflow.
  - **[HIGH]** The broker is not described as interacting directly with the initial assistant. Evidence: §4.4. Review: Revisit only if the product scope later adds broker-facing access.
- **Expectations from the AI Underwriting Assistant:** **[MEDIUM]** A resulting broker request should be specific and based on verified missing items; this is an inference from the broker's stated needs and the draft safeguards. Evidence: §§4.4, 7.4, 7.6. Review: Validate request quality with broker-facing staff and, where appropriate, brokers.
- **Potential concerns or barriers:** **[MEDIUM]** Ambiguous, duplicated, contradictory, or inaccurate requests could make it harder for brokers to respond; this is inferred from the stated desire to avoid repeated or contradictory requests. Evidence: §4.4. Review: Confirm these impacts with broker-facing users and brokers.
- **Relevant BRD evidence:** **[HIGH]** §4.4 identifies the broker as indirect and states broker needs; §7.6 and §8 scenario 3 describe internal draft preparation and review. Evidence: the cited sections. Review: Confirm indirect stakeholder status remains true for the release scope.
- **Assumptions or questions requiring validation:**
  - **[LOW]** Which communication channels, terminology, or request format do brokers prefer? Evidence: Not specified in §§4.4, 7.6, or §8. Review: Ask broker-facing staff and representative brokers before standardizing messages.
  - **[LOW]** Whether brokers need deadlines, progress updates, or consolidated requests is not specified. Evidence: Not established in the cited sections. Review: Validate before adding these expectations to product scope.
- **Confidence, evidence, and review guidance:** **[MEDIUM]** No contradictory input identified in the BRD reviewed for this role. Evidence: §4.4 makes the broker an indirect stakeholder and §7.6 keeps message review with the internal user. Review: Recheck if broker-facing features are added or communication policy changes.

## Cross-persona conflict review

- **[MEDIUM]** No contradictory input was identified in the reviewed BRD. The source consistently keeps underwriting decisions with authorized professionals and requires review before external actions. Evidence: §§1, 3, 6, 7.6, 8 scenario 5, FR9, and §13 risk 3. Review: Re-run this conflict check whenever the BRD or delegated-authority rules change.
