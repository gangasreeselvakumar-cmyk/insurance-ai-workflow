# Pain Points and Needs: AI Underwriting Assistant for Commercial Insurance Submission Intake

**Source:** `input/brd.md` (reviewed in full). This is a BRD-based synthesis, not validated user research. The BRD explicitly describes the §2 business problems as working hypotheses that require validation.

## Confidence and evidence key

- **HIGH:** The BRD explicitly states the need, problem, requirement, or risk. This indicates source support, not validation with users.
- **MEDIUM:** A reasonable inference from cited BRD content; validate the interpretation with relevant users or stakeholders.
- **LOW:** An assumption or detail not established by the BRD; do not rely on it until checked.
- **CONTRADICTORY:** Relevant source statements conflict; cite both sides and defer resolution to an accountable human. No label is assigned merely because details are open or incomplete.

## Pain point and needs inventory

### PP-01 — Submission context is spread across screens, documents, and notes

- **Pain point or need:** **[HIGH]** The BRD says underwriters and underwriting assistants may move among submission lists, detail screens, document repositories, and notes, and that important information can be spread across multiple documents. Evidence: §§1–2. Review: Confirm the sources and sequence involved with underwriters and intake specialists.
- **Affected users:** **[HIGH]** Commercial insurance underwriters and underwriting assistants/submission intake specialists. Evidence: §§1–2 and §§4.1–4.2. Review: Confirm whether these groups encounter the same information-gathering problem or need different workflow support.
- **Workflow context and consequence:** **[MEDIUM]** Gathering context across several locations may increase navigation and review effort before a user understands a submission. Evidence: §§1–2. This is an inference, not a measured impact. Review: Validate the actual workflow and measure effort before prioritizing a solution.
- **Evidence status:** **[HIGH]** §2 explicitly identifies its business-problem statements as working hypotheses for product discovery. Evidence: §2. Review: Keep this qualification until user/stakeholder research validates the problem.
- **Assumptions or questions:** **[LOW]** The BRD does not establish which repositories or screens are used in current practice, how often switching occurs, or how much effort it consumes. Evidence: §§2, 14, and 17. Review: Map representative workflows and confirm source systems before designing or estimating impact.

### PP-02 — Repeated manual completeness checks and broker follow-up

- **Pain point or need:** **[HIGH]** The BRD states that incomplete submissions can require repeated manual review and broker follow-up; the intake specialist needs to check completeness, identify missing items, and track outstanding information. Evidence: §§1–2, 4.2, and 5 (Underwriting Assistant Needs). Review: Validate which checks and follow-ups are actually repetitive and who owns each step.
- **Affected users:** **[HIGH]** Underwriting assistants/submission intake specialists are directly responsible for receiving, organizing, and checking submissions; underwriters also need visibility into missing documents and unanswered questions. Evidence: §§4.1–4.2 and 5. Review: Confirm handoffs and whether the tasks differ by role.
- **Workflow context and consequence:** **[MEDIUM]** Repeating checks across screens may delay preparation of a submission for underwriter review. Evidence: §§2 and 4.2. The delay is an inference; no duration or frequency is given. Review: Validate the sequence and measure delay before treating it as an established outcome.
- **Evidence status:** **[HIGH]** The broader §2 problem statements are explicitly working hypotheses, while completeness checks and tracking are stated needs in §5. Evidence: §§2 and 5. Review: Keep hypothesis and need distinct; validate the actual burden with intake staff.
- **Assumptions or questions:** **[LOW]** The applicable checklists, line-of-business differences, task ownership, and current completeness rates are not established. Evidence: §§14 and 17. Review: Obtain approved checklist rules and workflow details from accountable business owners.

### PP-03 — Finding submissions, priority work, and status may require manual searching

- **Pain point or need:** **[HIGH]** The BRD includes a working hypothesis that users spend time searching submission details for simple status questions and want to find high-priority submissions quickly. Managers also state a need for visibility into pending, overdue, and high-priority work when data is available. Evidence: §§2, 4.3, 5 (Underwriting Manager Needs), and 7.2–7.7. Review: Validate the search burden and define agreed status and priority meanings with users and business owners.
- **Affected users:** **[HIGH]** Underwriters and underwriting managers are named in the related problem statements and needs. Evidence: §§2, 4.1, 4.3, and 5. Review: Confirm whether intake specialists share the same prioritization needs.
- **Workflow context and consequence:** **[MEDIUM]** A consolidated search or work context could reduce repeated navigation and help users locate relevant records, if configured data and definitions support it. Evidence: §§6–7.2, 7.7, and FR2–FR3/FR10. This is a proposed benefit, not a verified capability or outcome. Review: Validate supported search fields, data availability, and queue definitions before relying on it.
- **Evidence status:** **[HIGH]** The §2 search problems are working hypotheses; queue indicators are conditional on actual configured data and agreed definitions. Evidence: §§2 and 7.7. Review: Preserve both conditions in requirements and user-facing status.
- **Assumptions or questions:** **[LOW]** The BRD does not define priority thresholds, data freshness, queue ownership, or whether all named search fields are available. Evidence: §§7.2, 7.7, and 14. Review: Resolve these with product, system, and business owners before configuration.

### PP-04 — Users need to verify where generated summaries came from

- **Pain point or need:** **[HIGH]** The BRD states a discovery hypothesis that users need to verify the source of an AI-generated summary before relying on it. It also requires source references for important extracted facts where available and clear separation of source facts from suggestions. Evidence: §2, §3, §5 (Commercial Insurance Underwriter Needs), and §§7.3/FR13. Review: Validate which source details users need to see to verify a summary.
- **Affected users:** **[HIGH]** Underwriters are explicitly identified as needing source evidence; the BRD also requires traceability and accountability for AI-assisted outputs. Evidence: §4.1, §5, and FR13–FR15. Review: Confirm what evidence each user role can access under existing permissions.
- **Workflow context and consequence:** **[MEDIUM]** Without sufficient source context, a user may be less able to verify an extracted fact before relying on it. Evidence: §§2, 5, and 7.3. This is a cautious inference. Review: Test source-reference presentation with representative users and access-control owners.
- **Evidence status:** **[HIGH]** The stated trust concern is a §2 working hypothesis; the traceability capability is proposed in the BRD, not evidence of an implemented feature. Evidence: §§2, 6, 7.3, and FR13. Review: Maintain this distinction in designs and evaluation.
- **Assumptions or questions:** **[LOW]** Required citation granularity, source-link behavior, timestamps, and handling when a source reference is unavailable remain to be specified. Evidence: §§7.3 and 14. Review: Agree the evidence display and unavailable-source behavior before implementation.

### PP-05 — Missing information can be confused with unavailable or unverified information

- **Pain point or need:** **[HIGH]** The BRD requires checks for missing information and explicitly distinguishes confirmed missing information, information not found in checked sources, information requiring verification, and unconfigured requirements. Evidence: §7.4 and FR5. Review: Confirm the wording and operational meaning of each state with intake and underwriting stakeholders.
- **Affected users:** **[HIGH]** Underwriters and intake specialists need visibility into missing documents and fields; product administrators configure requirements. Evidence: §§4.1–4.2, 4.5, and 5. Review: Confirm checklist ownership and which roles review each status.
- **Workflow context and consequence:** **[HIGH]** The BRD identifies incorrect missing-document alerts when a repository is unavailable as a product risk and says not to label a document missing merely because the relevant repository cannot be accessed. Evidence: §7.4 and §13 Risk 4. Review: Verify that source availability and checklist configuration are surfaced before interpreting an item as missing.
- **Evidence status:** **[HIGH]** This is an explicit product requirement and risk, not validated evidence that current users have experienced the failure. Evidence: §7.4, FR5, and §13 Risk 4. Review: Keep implementation claims separate from the stated requirement and validate it in testing when systems exist.
- **Assumptions or questions:** **[LOW]** The organization-specific status vocabulary, repository inventory, and approved checklist for each line of business are not specified. Evidence: §§14 and 17. Review: Obtain the authoritative checklist and status definitions before using this logic.

### PP-06 — Conflicting values require human verification

- **Pain point or need:** **[HIGH]** The BRD calls for identifying inconsistent information, showing conflicting values with source references where available, and not silently selecting or resolving a material conflict. Evidence: §§3, 5, 7.5, 8 Scenario 4, and FR6. Review: Confirm which business roles own each type of conflict resolution.
- **Affected users:** **[HIGH]** Underwriters and intake specialists need to identify conflicts; the BRD's scenario directs a user to verify the discrepancy. Evidence: §§4.1–4.2, 5, and 8 Scenario 4. Review: Validate escalation and correction ownership with these roles.
- **Workflow context and consequence:** **[MEDIUM]** A user may have to compare separate documents or values to resolve a discrepancy. Evidence: §2 and §8 Scenario 4. This is an inference from the proposed conflict scenario and document-fragmentation hypothesis, not an observed frequency. Review: Validate the actual comparison workflow and common conflict types.
- **Evidence status:** **[HIGH]** The BRD explicitly describes conflict identification and human verification as proposed behavior; it does not establish how often such conflicts occur. Evidence: §§7.5 and 8 Scenario 4. Review: Do not portray the example scenario as measured incident data.
- **Assumptions or questions:** **[LOW]** Conflict severity rules, escalation owners, and whether corrections update source records are unspecified. Evidence: §§7.5, 7.9, and 14. Review: Define these with authorized underwriting and system owners; do not let the assistant resolve substantive conflicts autonomously.

### PP-07 — Broker requests should be clear and avoid repetition or contradiction

- **Pain point or need:** **[HIGH]** The broker/agent is an indirect stakeholder whose stated needs include clear, specific requests and avoiding repeated or contradictory requests. The BRD also proposes reviewed internal follow-up drafts based on verified missing items. Evidence: §4.4, §§7.4/7.6, and §8 Scenario 3. Review: Validate request quality and communication handoffs with broker-facing staff and, where appropriate, brokers.
- **Affected users:** **[HIGH]** Internal underwriting assistants prepare follow-ups; brokers/agents provide submissions and respond but are not necessarily direct users of the initial landing page. Evidence: §§4.2 and 4.4. Review: Keep broker status indirect unless the product scope is explicitly changed.
- **Workflow context and consequence:** **[MEDIUM]** An inaccurate, repeated, or contradictory request could make it harder for a broker to understand what is needed. Evidence: §4.4. This consequence is inferred from the stated need. Review: Validate the impact and current follow-up process with broker-facing staff.
- **Evidence status:** **[HIGH]** The broker needs are explicitly stated but do not constitute validated broker research; §2 characterizes broader problem statements as working hypotheses. Evidence: §§2 and 4.4. Review: Preserve this qualification in product decisions.
- **Assumptions or questions:** **[LOW]** Preferred channels, message formats, deadlines, and broker access to the assistant are not specified. Evidence: §§4.4, 7.6, and 14. Review: Validate before expanding scope or designing external communications.

### PP-08 — Managers need accountable visibility into pending work and bottlenecks

- **Pain point or need:** **[HIGH]** The BRD states manager needs for workload and pending-item visibility, attention to submissions requiring attention, administrative-bottleneck review, consistent intake, and accountable AI-assisted outputs. Evidence: §§4.3 and 5 (Underwriting Manager Needs). Review: Confirm which manager decisions and views are in the initial release scope.
- **Affected users:** **[HIGH]** Underwriting managers. Evidence: §4.3. Review: Confirm role-specific access and oversight responsibilities.
- **Workflow context and consequence:** **[MEDIUM]** Reliable configured queue information may help managers locate work requiring attention; that benefit depends on data quality, freshness, permissions, and agreed status definitions. Evidence: §§6, 7.7, FR10, and §14. Review: Validate measures and data conditions before presenting the information as current or personalized.
- **Evidence status:** **[HIGH]** The oversight items are stated needs; they are not validated evidence of current pain or quantified bottlenecks. Queue data is conditional on availability. Evidence: §§2, 4.3, 5, 7.7, and 14. Review: Validate current bottleneck impact and data availability before prioritizing or presenting queue information as current.
- **Assumptions or questions:** **[LOW]** Queue thresholds, review cadence, manager screens, and access detail are unspecified. Evidence: §14. Review: Agree the measures and permissions with managers and system owners.

### PP-09 — Product administration needs explicit configuration and operational controls

- **Pain point or need:** **[HIGH]** Product owners/system administrators need to define required fields and document checklists, control access, review errors and feedback, monitor usage/output quality, and keep integration boundaries explicit. Evidence: §§4.5 and 5 (Product and Administration Needs). Review: Assign each configuration and operational responsibility to an accountable owner.
- **Affected users:** **[HIGH]** Product owners and system administrators. Evidence: §4.5. Review: Confirm whether these are one role or responsibilities distributed across multiple teams.
- **Workflow context and consequence:** **[MEDIUM]** Configuration, access, feedback, and output-quality monitoring are proposed administrative responsibilities that would require clear ownership to operate consistently. Evidence: §§4.5, 5, and 11. The need for ownership is an inference; the BRD does not describe the current operating process. Review: Map current and proposed ownership with product, system, and security stakeholders.
- **Evidence status:** **[LOW]** The BRD establishes administration needs and dependencies but does not establish current administrator pain points or operational burden. Evidence: §§4.5, 5, 11, 14, and 17. Review: Validate with system/product owners before describing an administrative burden as an existing pain point.
- **Assumptions or questions:** **[LOW]** Integration ownership, approved data sources, access procedures, model/service decisions, and quality thresholds remain open. Evidence: §§11, 14, and 17. Review: Resolve through business, security, and technical governance before relying on a design assumption.

### PP-10 — Chat must not obscure direct navigation or human authority

- **Pain point or need:** **[HIGH]** The BRD says the assistant should be the primary landing-page interaction while preserving direct navigation to submission details. It identifies overreliance on chat and confusion between administrative readiness and underwriting approval as risks. Evidence: §§3, 6, 13 Risks 3 and 5, and FR8–FR9. Review: Confirm users can verify details outside chat and that readiness labels cannot be mistaken for underwriting decisions.
- **Affected users:** **[HIGH]** Underwriters and other authorized workbench users; material decisions remain with authorized professionals. Evidence: §§3–5 and FR9. Review: Confirm decision authority and control language with underwriting leadership.
- **Workflow context and consequence:** **[MEDIUM]** If chat becomes the only route or presents administrative completeness as approval, users could lose context or misunderstand decision status. Evidence: §§6, 13 Risks 3 and 5. This is a product-risk interpretation, not a claim that such harm has occurred. Review: Evaluate navigation and status cues with users before implementation.
- **Evidence status:** **[HIGH]** These are explicit design requirements and identified risks, not findings that the proposed assistant has been implemented or that users have already over-relied on it. Evidence: §§6, 13, and FR8–FR9. Review: Preserve the distinction through design and validation.
- **Assumptions or questions:** **[LOW]** The exact terminology for administrative readiness, human-review-required states, and underwriter decision status is open. Evidence: §§7.10, 9, 14, and 18. Review: Agree terms with underwriting stakeholders and test for comprehension.

## Contradiction review

No material contradictory requirement or user statement was identified in the reviewed BRD. The chatbot-first landing-page direction is paired with a requirement to retain direct navigation; these are complementary constraints, not a conflict. Evidence: §§6, 7.8, FR1, and FR8. Review: Recheck this assessment whenever the BRD changes; escalate any new conflicting statements using `CONTRADICTORY` and preserve both source references.

## Validation note

The pain points in §2 remain working hypotheses; stated needs, proposed functionality, and product risks are labeled separately above. No frequency, time saving, operational impact size, interview result, or validated user finding has been invented. This document requires review under `gates/gate-01-review.md` before Phase 2 may proceed.
