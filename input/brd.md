# BRD: AI Underwriting Assistant for Commercial Insurance Submission Intake

## 1. Project Overview

A commercial insurance organization is introducing an **AI Underwriting
Assistant** within its underwriter workbench. The experience is centered
on a conversational assistant on the landing page, supported by a clear
view of submissions, pending work, priority items, and recent activity.

Commercial insurance underwriters and underwriting assistants work with
submissions that may include applications, business descriptions,
exposure information, loss runs, schedules, and other supporting
documents. Reviewing and organizing this information can involve
repetitive searches, manual completeness checks, and follow-up with
brokers.

The AI Underwriting Assistant will help users find available submission
information, summarize supplied documents, identify missing or
inconsistent details, explain administrative submission status, and
prepare follow-up questions or draft messages. It will make the
workbench easier to navigate while keeping underwriting decisions under
the control of authorized professionals.

The initial experience is intended for desktop use in a professional
commercial insurance environment.

## 2. Business Problem

Underwriters and underwriting assistants may need to move between
submission lists, detail screens, document repositories, and notes to
understand the current state of a submission. Important information can
be spread across multiple documents, and incomplete submissions can
require repeated manual review and broker follow-up.

Users may experience challenges such as:

-   "I need to understand a submission before I open every document."
-   "I want to find my high-priority submissions quickly."
-   "I need to know which documents or fields are still missing."
-   "I spend time searching through submission details to answer simple
    status questions."
-   "I want to draft a clear broker follow-up without starting from
    scratch."
-   "I need to verify where an AI-generated summary came from before
    relying on it."
-   "I do not want a chatbot to make underwriting decisions on my
    behalf."

These are working problem hypotheses for product discovery. They must be
validated with underwriters, underwriting assistants, and relevant
stakeholders before being treated as confirmed research findings.

The product should reduce avoidable administrative effort without hiding
important details, inventing information, or interrupting the
established underwriting process.

## 3. Product Goal

Create a practical AI-assisted landing page that helps commercial
insurance underwriters understand and act on submission-related work
through a conversational interface.

The experience should:

-   Make the AI assistant the primary interaction on the landing page.
-   Help users find and understand submissions using natural-language
    questions.
-   Summarize submission information from available and authorized
    sources.
-   Identify missing required information and expected documents.
-   Highlight possible inconsistencies for human verification.
-   Help users understand administrative status, ownership, and next
    steps.
-   Draft broker follow-up questions and messages for review.
-   Provide clear links or actions to relevant submission details when
    supported.
-   Show supporting source references for important extracted facts
    where available.
-   Keep the underwriter in control of all material decisions and
    external actions.

## 4. Target Users

### 4.1 Commercial Insurance Underwriter

An insurance professional who evaluates commercial risks, reviews
submission information, and decides the next underwriting action under
the organization's rules and authority.

**Needs:** - Understand a submission quickly. - Find important risk and
exposure details in supplied information. - Identify missing documents
and unanswered questions. - Review source evidence before relying on a
summary. - Move from the assistant to the relevant submission detail. -
Retain full control over underwriting judgment and decisions.

### 4.2 Underwriting Assistant / Submission Intake Specialist

A team member who receives, organizes, and checks incoming submissions
before or during underwriter review.

**Needs:** - Check submission completeness. - Identify missing or
inconsistent information. - Prepare concise summaries for
underwriters. - Draft broker follow-up requests. - Track outstanding
items and submission status. - Avoid repeating manual checks across
multiple screens.

### 4.3 Underwriting Manager

A manager who oversees workload, service levels, submission progress,
and team consistency.

**Needs:** - Understand workload and pending items. - Identify
submissions requiring attention. - Review administrative bottlenecks. -
Encourage consistent intake practices. - Ensure AI-assisted outputs
remain reviewable and accountable.

### 4.4 Broker / Agent (Indirect Stakeholder)

A broker or agent who provides the submission and responds to requests
for additional information. The broker is not necessarily a direct user
of the initial underwriter landing page.

**Needs:** - Receive clear, specific requests for missing information. -
Avoid repeated or contradictory requests. - Understand what is required
to continue the submission process.

### 4.5 Product Owner / System Administrator

A stakeholder responsible for configuring workflow rules, managing
authorized integrations, and maintaining the product.

**Needs:** - Define required fields and document checklists. - Control
access to submission data. - Review errors and feedback. - Monitor
usage, output quality, and workflow performance.

## 5. User Needs

### Commercial Insurance Underwriter Needs

-   A single starting point for submission-related work.
-   A conversational way to ask questions about authorized submission
    data.
-   Concise summaries with clear separation between source facts and
    AI-generated suggestions.
-   Visibility into missing information, potential conflicts, and
    outstanding questions.
-   Links to supporting documents or source locations when available.
-   Clear indication when information is unavailable or cannot be
    verified.
-   The ability to continue the work in the existing submission
    workflow.

### Underwriting Assistant Needs

-   Fast completeness checks.
-   A list of missing fields and expected documents.
-   Identification of conflicting values across supplied documents.
-   Reusable follow-up question and message drafts.
-   Clear submission identifiers and status.
-   A way to verify and correct generated information.

### Underwriting Manager Needs

-   Visibility into pending, overdue, and high-priority work when this
    data is available.
-   Consistent status definitions and intake checks.
-   Traceable outputs and human review outcomes.
-   Insight into recurring causes of incomplete submissions.

### Product and Administration Needs

-   Configurable field and document requirements.
-   Secure access to authorized information sources.
-   Clear handling of errors and unsupported requests.
-   A way to evaluate AI output quality and user feedback.
-   Integration boundaries that are explicit and testable.

## 6. Proposed Solution

Introduce an **AI Underwriting Assistant** as the primary interaction on
the underwriter workbench landing page.

The landing page should combine a conversational workspace with
supporting work context. The assistant is the main entry point, while
submission lists, priority indicators, recent activity, and navigation
help users verify information and continue work.

The experience should feel:

-   Professional and trustworthy.
-   Clear and efficient.
-   Calm and appropriate for business-critical work.
-   Transparent about the source and certainty of information.
-   Helpful without being overly conversational.
-   Consistent with the organization's existing underwriting workbench
    and design system.

The assistant should not behave as an unrestricted general-purpose
chatbot. It should focus on permitted underwriting-workbench tasks,
identify when a request is outside its supported scope, and avoid
implying that it has accessed data or completed an action when it has
not.

### Proposed Landing Page Structure

1.  **Primary AI assistant area:** Greeting, example prompts,
    conversation history, message input, and response area.
2.  **Work context:** Assigned submissions, high-priority items, pending
    reviews, or recent submissions, subject to available data and
    business validation.
3.  **Response evidence:** Source document references, submission
    identifiers, timestamps, and links to details where supported.
4.  **Next-step actions:** Open submission, review missing information,
    copy a summary, or prepare a follow-up draft.
5.  **Status and safety cues:** Loading, no results, access denied,
    source unavailable, error, and human-review-required states.

The chatbot should be the main activity, but it should not be the only
way to access important work. Users must still be able to navigate to
submission details and verify information directly.

## 7. Key Features

### 7.1 Conversational Landing Page

The landing page should provide a clear conversational entry point for
submission-related tasks.

Users should be able to: - Enter questions in natural language. - Select
suggested prompts for common tasks. - View the conversation history
within the current session. - See when the assistant is processing, has
no results, or encounters an error. - Start a new conversation or clear
the current conversation where appropriate. - Open relevant submission
details from assistant responses.

Example prompts: - "Summarize my highest-priority submissions." - "What
information is missing from submission SUB-1042?" - "Find submissions
waiting for loss runs." - "Draft a broker follow-up for the missing
documents."

The assistant must not claim to search live data unless the relevant
data source and integration are connected and functioning.

### 7.2 Submission Search and Discovery

The assistant should help users locate submissions using supported
search fields, such as submission ID, business name, assigned
underwriter, status, line of business, or effective date.

Expected behavior: - Show matching results with enough context to
distinguish them. - Ask a clarifying question when a search is
ambiguous. - Respect the current user's access permissions. - Explain
when no matching submission is found. - Provide a route to the relevant
submission details when the application supports it.

### 7.3 Submission Summary

The assistant should generate a concise summary from available
submission records and supplied documents.

Possible summary fields include: - Submission ID and business name. -
Line of business and requested effective date, if available. - Business
description and exposure details, if supplied. - Documents received and
expected documents. - Missing information and unresolved questions. -
Current administrative status and assigned owner, if available. - Source
references for important facts.

Unknown values must be labeled as unknown or unavailable. The assistant
must not fabricate risk details, status, coverage terms, or source
citations.

### 7.4 Missing Information and Document Checklist

The assistant should compare available submission information with a
configurable checklist for the applicable line of business.

Example: - Application: Received. - Loss runs: Missing. - Vehicle
schedule: Received, pending verification. - Additional exposure details:
Required.

The assistant should distinguish between: - Confirmed missing
information. - Information not found in the sources checked. -
Information present but requiring verification. - Requirements that have
not been configured.

It must not label a document as missing merely because it lacks access
to the relevant repository.

### 7.5 Inconsistency Identification

The assistant should flag possible conflicts across supplied records or
documents.

Example: - The application lists one business address, while a
supporting document lists another. - The requested effective date
differs between two supplied sources.

The assistant should display the conflicting values and their source
references where available. It must not silently select a value or
resolve a material conflict without human verification.

### 7.6 Broker Follow-Up Drafting

The assistant should prepare a professional follow-up draft based on
verified missing items or questions selected by the user.

Example: "Please provide the latest loss runs for the requested policy
period so we can continue the submission review."

Users should be able to review and edit the draft before copying or
sending it. Sending messages externally must require an explicitly
configured integration and appropriate human confirmation.

### 7.7 Work Queue and Priority Context

The landing page may show supporting work context such as: - Assigned to
me. - High priority. - Pending review. - Awaiting broker information. -
Recently updated submissions.

These indicators must use actual configured submission data and agreed
status definitions. They should not be presented as live or personalized
if the underlying data is unavailable.

### 7.8 Contextual Actions

Where supported by the application, the assistant may provide actions
such as: - Open submission details. - View source document. - Copy
summary. - Prepare follow-up draft. - Show missing-information
checklist.

Actions that change business data, send messages, or trigger an external
workflow must be clearly described and confirmed where appropriate. The
assistant must report the actual result of an action and must not claim
success when the action fails or is unavailable.

### 7.9 Feedback and Correction

Users should be able to flag an incorrect summary, incorrect extraction,
or unhelpful response.

The workflow should capture feedback in a manner that supports quality
improvement without exposing unnecessary sensitive data. Corrections
should remain distinguishable from the original AI-generated output.

### 7.10 Empty, Error, and Unsupported States

The interface should provide understandable states for: - No submissions
found. - No submission context selected. - Missing or unreadable source
documents. - Unauthorized access. - Unsupported question or action. - AI
service unavailable. - Processing timeout. - Partial results.

Each state should explain what happened and offer a safe next step.

## 8. Example Scenarios

### Scenario 1: Underwriter Wants a Quick Submission Summary

An underwriter opens the landing page and asks:

"Summarize submission SUB-1042."

The assistant retrieves the submission only if the relevant authorized
data source is connected. It summarizes the available business
information, documents received, missing items, and unresolved
questions. It includes links or references to source material where
available.

**Outcome:** The underwriter gets a concise starting point and can
verify the information in the submission record.

### Scenario 2: Underwriter Wants to Find Missing Documents

An underwriter asks:

"Which of my submissions are missing loss runs?"

The assistant searches the accessible submission data and configured
document checklist. It returns matching submissions, explains the basis
of the result, and provides links to the relevant records.

**Outcome:** The underwriter can prioritize follow-up without manually
opening every accessible submission.

If the system cannot access the document repository or required
checklist, it must state that limitation rather than inventing results.

### Scenario 3: Underwriting Assistant Prepares Broker Follow-Up

An underwriting assistant asks:

"Draft a follow-up for the missing documents in SUB-1042."

The assistant lists the missing items supported by the available record
and prepares a professional message. The user reviews and edits it
before copying or sending it.

**Outcome:** The user has a consistent draft while retaining control
over external communication.

### Scenario 4: Assistant Finds Conflicting Information

The assistant identifies two different business addresses in the
supplied application and supporting document.

It displays both values, identifies their sources where possible, and
flags the discrepancy for review.

**Outcome:** The user can verify the correct value instead of relying on
an unsupported AI choice.

### Scenario 5: User Asks for an Underwriting Decision

An underwriter asks:

"Should I approve this risk?"

The assistant may summarize relevant supplied information and identify
unanswered questions, but it must not make or imply a binding
underwriting decision. It should explain that the authorized underwriter
must evaluate the risk under the organization's rules.

**Outcome:** The assistant supports preparation and analysis without
replacing professional judgment.

### Scenario 6: Submission Search Returns No Results

A user asks for a submission that cannot be found in the connected data.

The assistant explains that no matching result was found in the sources
it could access and offers to refine the search using a submission ID or
business name.

**Outcome:** The user understands the limitation and can take a
practical next step.

## 9. Content Tone

The assistant should sound: - Professional. - Clear and concise. -
Neutral and evidence-based. - Helpful without being overly casual. -
Transparent about uncertainty. - Appropriate for a regulated business
workflow.

The assistant should avoid: - Inventing facts or citations. -
Overconfident statements when evidence is incomplete. - Making
unsupported underwriting recommendations. - Claiming an action was
completed when it was not. - Using vague responses such as "Everything
looks good" without explaining the basis. - Exposing restricted
submission information. - Presenting administrative completeness as
underwriting approval.

**Good tone:**

"Loss runs were not found in the documents available to this review.
Please verify the document repository before requesting them from the
broker."

**Avoid:**

"The loss runs are missing. The submission is ready to decline."

## 10. Functional Requirements

### FR1: AI Assistant Landing Page

The application should provide a conversational landing page with a
message input, send action, response area, suggested prompts, and
visible processing and error states.

### FR2: Natural-Language Submission Queries

The assistant should interpret supported user questions and map them to
permitted submission-search, summary, and checklist operations.

### FR3: Authorized Submission Search

The system should search only connected data sources that the current
user is authorized to access.

### FR4: Submission Summarization

The assistant should summarize available submission details and
distinguish sourced facts from unknown or unverified information.

### FR5: Missing Information Detection

The system should compare available fields and documents against a
configurable checklist and report missing or unverified items
accurately.

### FR6: Inconsistency Flagging

The system should identify conflicting values in accessible sources and
present them for human review.

### FR7: Broker Follow-Up Drafting

The assistant should generate editable follow-up drafts based on
selected, verified missing items or questions.

### FR8: Contextual Navigation

Where supported, the assistant should link users to the relevant
submission record or source document.

### FR9: Human Review and Confirmation

The system should keep material decisions under human control and
require appropriate confirmation before external or consequential
actions.

### FR10: Work Queue Context

The landing page should display agreed submission work indicators when
reliable data is available.

### FR11: Feedback and Correction

Users should be able to report incorrect or unhelpful outputs and
distinguish their corrections from AI-generated content.

### FR12: Safe Error Handling

The system should explain missing inputs, access limitations,
unsupported requests, and service failures without fabricating results.

### FR13: Output Traceability

The system should retain source references and relevant execution
details for generated summaries where supported by the data and
applicable retention rules.

### FR14: Access Control

The system should respect existing authorization rules for submission
records, documents, and user actions.

### FR15: Auditability

The system should record appropriate workflow events, gate outcomes, and
human review decisions without logging secrets or unnecessary sensitive
information.

## 11. Non-Functional Requirements

### Performance

The interface should provide immediate feedback after a user submits a
message. Response-time targets should be defined after the selected
model, integrations, and workload are measured.

### Accuracy and Grounding

The assistant should use accessible source information, mark unknown
values clearly, and avoid unsupported facts. Quality should be measured
against a representative test set.

### Security and Privacy

Submission information may be confidential. Access should be
permission-aware, and sensitive data should be protected in transit, at
rest, and in logs according to the organization's policies.

### Reliability

The system should handle unavailable model services, missing source
data, and integration errors with clear messages. It should not claim
that a query or action succeeded unless success is confirmed.

### Auditability

Important outputs should be traceable to their input sources where
possible. Human corrections and approval decisions should be
distinguishable from AI-generated results.

### Usability and Accessibility

The interface should have a clear visual hierarchy, readable typography,
keyboard support, accessible focus states, and appropriate contrast.
Chat should not be the only route to essential submission information.

### Maintainability

Agent responsibilities, skill instructions, input/output contracts, and
business rules should be modular and documented. Configuration should be
separated from hardcoded business logic where practical.

### Integration

The system should integrate only with approved and accessible data
sources. Any data source or action not yet connected must be clearly
identified as a dependency rather than a working capability.

## 12. Success Metrics

The product should be evaluated using measures such as:

-   Time taken to locate and understand a submission.
-   Percentage of generated factual claims supported by source evidence.
-   Accuracy of missing-field and missing-document detection.
-   Percentage of responses that require substantial correction.
-   User satisfaction with summary usefulness and clarity.
-   Rate of successful navigation from assistant responses to source
    records.
-   Percentage of test cases correctly blocked when permissions,
    required inputs, or validation gates fail.
-   Reduction in avoidable manual steps during submission intake,
    measured against an agreed baseline.
-   Human reviewer agreement with generated summaries and flagged
    inconsistencies.

Numerical targets should be established after baseline measurement and
user testing. They should not be assumed before evidence is available.

## 13. Risks

### Risk 1: Hallucinated Submission Information

The assistant may generate details that are not supported by the source.

**Mitigation:** Require source-grounded responses, explicit unknown
values, output validation, and human verification for important facts.

### Risk 2: Unauthorized Data Exposure

A response may reveal a submission or document the user is not
authorized to access.

**Mitigation:** Enforce authorization at the data-access layer and
validate permissions for each requested record and action.

### Risk 3: Confusing Readiness with Underwriting Approval

Users may interpret an intake summary or completeness status as an
underwriting decision.

**Mitigation:** Use explicit status definitions and visible human-review
requirements. Do not allow the assistant to approve, decline, price, or
bind a risk autonomously.

### Risk 4: Incorrect Missing-Document Alerts

A document may exist in a repository that is not connected or accessible
to the assistant.

**Mitigation:** State which sources were checked and distinguish "not
found in accessible sources" from "confirmed missing."

### Risk 5: Overreliance on Chat

Users may struggle if critical actions or records are available only
through conversation.

**Mitigation:** Retain conventional navigation, work queues, submission
detail views, and direct source access.

### Risk 6: Incorrect External Actions

A draft may be sent or a record changed without proper authorization or
confirmation.

**Mitigation:** Separate drafting from execution, require appropriate
confirmation, and verify the actual result of any connected action.

### Risk 7: Low Trust or Adoption

Users may not trust generated summaries if their sources and limitations
are unclear.

**Mitigation:** Provide source references, transparent uncertainty,
feedback mechanisms, and consistent response behavior.

## 14. Open Questions

-   Which commercial lines of business should the first version support?
-   Which submission fields and document types are required for each
    line?
-   Which submission system and document repository can be accessed?
-   What authorization rules apply to submissions, documents, and
    actions?
-   Should the landing page show assigned work, priority work, recent
    submissions, or all three?
-   Which actions should be available directly from assistant responses?
-   Which actions require confirmation or additional permissions?
-   What is the required format and retention period for audit logs?
-   Should the first version support only text chat or later include
    voice interaction?
-   What model and hosting approach are approved by the organization?
-   How will source references be displayed for extracted fields?
-   Which performance and accuracy targets will be agreed with users?
-   Which accessibility and design-system standards must the interface
    follow?

These questions should be resolved through stakeholder interviews,
data-access review, technical discovery, and prototype testing.

## 15. Acceptance Criteria

The initial product is ready for controlled evaluation when:

-   The landing page presents the AI Underwriting Assistant as its
    primary interaction.
-   Users can enter natural-language questions and receive responses in
    a clear conversation layout.
-   The interface provides suggested prompts, processing feedback, and
    understandable error states.
-   Supported queries use connected and authorized submission data.
-   Submission summaries distinguish source facts from unknown or
    unverified information.
-   Missing information and document checks use a configurable
    checklist.
-   Possible inconsistencies are shown with supporting source references
    where available.
-   Follow-up messages can be reviewed and edited before external
    sending.
-   Assistant responses provide navigation to relevant records where
    supported.
-   The system respects authorization and does not expose restricted
    records.
-   The assistant does not autonomously approve, decline, price, or bind
    insurance risks.
-   The system does not claim to have completed unavailable or failed
    actions.
-   Human review and appropriate confirmation gates are enforced.
-   Outputs and important workflow events are traceable according to
    approved policies.
-   Core scenarios, failure cases, access checks, and output quality are
    tested.
-   The product has been evaluated with representative underwriters and
    underwriting assistants.

## 16. Suggested Initial Release

The first release should focus on a small, testable set of capabilities:

1.  Conversational landing page with suggested prompts.
2.  Search over an approved sample or connected submission dataset.
3.  Submission summary grounded in supplied records.
4.  Missing-information checklist.
5.  Draft broker follow-up.
6.  Source references and links to relevant details where available.
7.  Human review, safe error handling, and execution logging.

Additional capabilities such as broad portfolio analytics, automated
external messaging, complex workflow changes, and autonomous
underwriting decisions should not be assumed part of the initial
release.

## 17. Assumptions and Dependencies

### Assumptions

-   The primary users are commercial insurance underwriters and
    underwriting assistants.
-   The first experience is a desktop web workbench.
-   The conversational assistant is the primary landing-page activity.
-   Users need to verify AI-generated information before acting on it.
-   A fictional sample dataset can be used while the product is being
    prototyped.
-   A human reviewer retains responsibility for underwriting decisions.

### Dependencies

-   An approved submission data source or representative sample dataset.
-   A document repository or sample document text for document-related
    checks.
-   Configured fields, document requirements, and status definitions.
-   An approved LLM provider and secure credential configuration if a
    hosted model is used.
-   Authentication and authorization controls for any connected business
    data.
-   Defined output schemas, test scenarios, and human review procedures.
-   An approved design system and application technology stack.

## 18. Glossary

-   **BRD:** Business Requirements Document.
-   **Submission:** Information and documents provided for consideration
    of commercial insurance coverage.
-   **Underwriter:** An insurance professional responsible for
    evaluating risks within the organization's rules and authority.
-   **Underwriting Assistant:** A team member who supports submission
    intake, completeness checks, and coordination.
-   **AI Underwriting Assistant:** A conversational interface that helps
    users retrieve, summarize, and organize authorized submission
    information.
-   **Submission readiness:** An administrative assessment of the
    completeness and clarity of the information available for human
    review; not an underwriting approval.
-   **Source reference:** A link, document identifier, or other
    traceable pointer supporting a reported fact.
-   **Human-in-the-loop review:** A checkpoint where an authorized
    person verifies information or approves a next step before the
    workflow continues.

------------------------------------------------------------------------

## End of BRD
