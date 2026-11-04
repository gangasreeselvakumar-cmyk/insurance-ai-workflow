# Gate 02 Decision Draft — Group 4: External Communications

## Document metadata

- **Document type:** Decision Draft (Governance Artifact)
- **Target Gate:** Gate 02 — Workflow Design Review
- **Open Question Group:** Group 4 — External Messaging / External Communications
- **Current status:** PROPOSED — NOT FORMALLY APPROVED
- **Date created:** 2026-10-28
- **Target artifact path:** `outputs/reviews/gate-02-group-04-external-communications-decision-draft.md`

---

## 1. Purpose and Context

During the Gate 02 Workflow Design Review (`outputs/reviews/gate-02-review-record.md`), the baseline requirements and workflow design were approved with conditions, keeping five governance question groups explicitly open. Group 4 addresses external messaging and communications:

> *"Is sending broker follow-up in scope, and what integration, recipients, authorization, review, confirmation, audit, and failure handling are required?"*

This draft documents the proposed decision for Gate 02 Group 4 as a proposal for stakeholder and governance review. This document is a proposal for review, not formal approval, and does not authorize or implement external integrations.

---

## 2. Proposed Decision

**Decision: Option A — Drafting guidance only.**

The Insurance Submission Intake Assistant may assist users by drafting external communication text (such as email drafts to brokers, customers, or insurers) strictly when the communication content is supported by the approved synthetic FAQ dataset or by information explicitly supplied by the user for drafting purposes.

### 2.1 Explicit Prohibitions and Behavioral Safeguards
The assistant must never:
- **Send emails, SMS, letters, or messages:** Zero outbound transmission capability.
- **Contact external parties:** Must not attempt or pretend to contact brokers, policyholders, customers, carriers, or other external parties.
- **Invoke messaging or communication services:** No connection to SMTP, SendGrid, Twilio, MS Exchange, Gmail, CRM systems, or external communication integrations.
- **Falsely claim message dispatch:** Must never state, claim, or imply that a message was sent, scheduled, queued, delivered, or received.
- **Imply authorization or approval:** Must not state or imply that a draft was approved, authorized, or sent by an authorized underwriter or corporate representative.
- **Invent insurance details or policy terms:** Must not fabricate policy terms, coverage decisions, carrier-specific procedures, or other unsupported insurance facts.

### 2.2 Draft-Only Workflow Requirement
All generated communication outputs are strictly non-operational text drafts intended for human inspection, verification, editing, and manual sending through authorized, secure communication channels completely outside this prototype.

If a requested communication requires details not present in the approved synthetic FAQ dataset or the user's explicit drafting prompt, the assistant must ask for the missing information or clearly state the limitation rather than inventing details.

---

## 3. Scope and Boundaries

- **Current Prototype Scope:** Offline text drafting assistance only.
- **Permitted Knowledge Source:** `input/insurance-faq-dataset.json` (strictly aligned with `faq-010`, which distinguishes drafting assistance from authorized sending).
- **Data Boundary:** Synthetic FAQ data only for this prototype.
- **Zero Real Customer Data:** Real customer, policyholder, broker, or financial information must never be used, accepted, processed, or logged.
- **Zero Integrations:** No email, messaging, CRM, work-queue, or external communication integrations.
- **Zero Live System Access:** No connection to live insurance systems, repositories, or external network services.
- **Governance Preservation:** This draft does not alter or replace existing Gate 02 review records or implementation plans.

---

## 4. Required Approval Roles

Documented approval from all four designated governance roles is required before this proposal can be formally ratified. Individual approver identities are not yet confirmed:

| Required Governance Role | Role Responsibilities | Assigned Individual | Sign-off Status |
|---|---|---|---|
| **Product / Business Owner** | Confirms the permitted communication-drafting use cases and functional scope. | *Not yet identified* | Pending — approver not yet confirmed |
| **Intake or Underwriting Process Owner** | Confirms that generated drafts cannot make or imply unauthorized insurance decisions. | *Not yet identified* | Pending — approver not yet confirmed |
| **Security / Data Governance Representative** | Confirms the data boundary and permitted handling of communication content. | *Not yet identified* | Pending — approver not yet confirmed |
| **Gate 02 Approver** | Reviews and formally approves the decision through the established governance process. | *Not yet identified* | Pending — approver not yet confirmed |

---

## 5. Acceptance Criteria

The proposal is acceptable for review and downstream implementation when the following criteria are defined and can be verified:

1. **Draft Text Only:** The assistant generates draft text only and never sends a message.
2. **Zero Communication APIs:** No external email, messaging, CRM, or communication API is invoked.
3. **Truthful Dispatch Reporting:** The assistant never claims, states, or implies that a message was sent, delivered, or received.
4. **No Unsupported Insurance Facts:** Drafts do not invent unsupported insurance facts, policy terms, or coverage decisions.
5. **Explicit Handling of Missing Details:** Missing information is requested or explicitly identified rather than fabricated.
6. **Comprehensive Test Coverage:** Automated and regression tests cover ordinary drafting requests, unsupported insurance statements, requests to send messages, and adversarial attempts to make the assistant falsely claim dispatch.
7. **Strict Boundary Isolation:** No real customer data or external communication integration is used.
8. **Controlled Future Capabilities:** Any future sending capability requires a separate documented proposal, authorized business and security approvals, controlled integration, and updated governance review before implementation.

---

## 6. Status and Open Dependencies

- **Current Status:** `PROPOSED — NOT FORMALLY APPROVED`
- **Open Dependencies:**
  1. Identify the accountable individuals for each of the four designated approver roles.
  2. Conduct formal stakeholder review across Product, Underwriting, Security, and Governance leads.
  3. Obtain documented approval decisions from all four required approvers.
  4. Keep the official Gate 02 question group marked as **OPEN** in `outputs/phase-02/implementation-plan.md` and `outputs/reviews/gate-02-review-record.md` until the authorized governance process confirms formal resolution.
