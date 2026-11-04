# Gate 02 Decision Draft — Group 1: Data Access and Search Scope

## Document metadata

- **Document type:** Decision Draft (Governance Artifact)
- **Target Gate:** Gate 02 — Workflow Design Review
- **Open Question Group:** Group 1 — Data Access and Search Scope
- **Current status:** PROPOSED — NOT FORMALLY APPROVED
- **Date created:** 2026-10-28
- **Target artifact path:** `outputs/reviews/gate-02-group-01-data-access-decision-draft.md`

---

## 1. Context and Background

During the Gate 02 Workflow Design Review (`outputs/reviews/gate-02-review-record.md`), the review was recorded as `APPROVED` with conditions, keeping five governance question groups explicitly open. Group 1 specifically addresses data access and search scope:

> *"Which submission/document sources, fields, identities, permissions, and freshness guarantees are available and approved?"*

This draft documents the proposed decision for Group 1 to establish a formal boundary for the Insurance Submission Intake Assistant prototype.

---

## 2. Proposed Decision

**Decision: Synthetic FAQ dataset only.**

The assistant is strictly limited to an offline synthetic FAQ dataset. No real submission intake data, production databases, live insurer APIs, or external search mechanisms are approved or connected.

### 2.1 Permitted Data Source
- **Single Permitted Source:** `input/insurance-faq-dataset.json`
- **Source Description:** Static JSON file containing exactly 25 synthetic insurance FAQ entries across 6 categories (Getting started, Insurance submission intake, Required documents and missing information, Submission status and workflow, Underwriter review and escalation, Data privacy and safe AI usage).
- **Source Modification Policy:** The dataset must remain fixed. Any changes, additions, or reclassifications require documented governance approval before use.

### 2.2 Strict Data Boundaries
- **Synthetic Data Only:** All questions, examples, and test interactions must use purely synthetic, fictional insurance scenarios.
- **No Real Policyholder or Customer Data:** Real policyholder names, tax IDs, commercial business names, policy numbers, or broker information must never be entered, ingested, processed, or logged.
- **No Live Insurance System Connections:** No connection to policy administration systems (PAS), document management repositories, claim systems, or underwriting workbenches is permitted.
- **No External or Web Search:** The assistant must not invoke external search engines, scrapers, or third-party data services.

### 2.3 Answer and Abstention Policy
- **Strict Grounding:** Assistant responses must be directly and fully grounded in relevant FAQ excerpts supplied from `input/insurance-faq-dataset.json`.
- **Mandatory Source Citations:** Statements of fact must cite the supporting synthetic FAQ identifier (e.g., `[faq-001]`).
- **Safe Abstention:** If a user query falls outside the provided FAQ context, seeks underwriting decisions, pricing, binding authority, or requests carrier-specific procedures not in the synthetic dataset, the assistant must return a standard, non-speculative abstention:
  > *"The FAQ dataset does not provide an answer to that question."*
- **No Speculation:** The assistant must never invent insurance requirements, checklists, pricing formulas, or status definitions.

---

## 3. Required Approval Roles

Individual approvers have not yet been formally assigned by organizational leadership. Final ratification of this decision requires explicit sign-off from all three designated roles:

| Required Role | Responsibilities | Assigned Individual | Sign-off Status |
|---|---|---|---|
| **Product / Business Owner** | Approves the functional scope, FAQ content domain, and business boundaries. | *Not yet identified* | PENDING |
| **Security / Data Governance Representative** | Approves data classification, privacy controls, synthetic boundary, and credential protection. | *Not yet identified* | PENDING |
| **Gate 02 Approver** | Confirms alignment with Gate 02 conditions and authorizes downstream prototype staging. | *Not yet identified* | PENDING |

---

## 4. Acceptance Criteria

Formal acceptance of this decision requires meeting and maintaining the following criteria:

1. **Approved Dataset Access Only:** The assistant runtime accesses only `input/insurance-faq-dataset.json`. No unapproved local or remote data source is accessed.
2. **Factually Grounded Answers:** All generated answers are traceable to and supported by relevant synthetic FAQ entries.
3. **Safe Abstention on Unsupported Topics:** Unsupported topics, ambiguous queries with insufficient context, and out-of-scope actions reliably trigger safe abstention.
4. **Absolute Data Isolation:** Zero real customer, policyholder, broker, or live submission data is used or accepted.
5. **Verified Test Coverage:** Automated test suites maintain rigorous coverage of source grounding, citation validity, unsupported topic gating, and out-of-scope/adversarial requests without leaking credentials or data.
6. **Controlled Expansion:** Any future data source expansion, live source connection, or schema change requires documented governance review and formal approval prior to implementation.

---

## 5. Status and Open Dependencies

- **Current Status:** `PROPOSED — NOT FORMALLY APPROVED`
- **Open Dependencies:**
  1. Identify accountable individuals for the Product/Business Owner, Security/Data Governance, and Gate 02 Approver roles.
  2. Conduct formal stakeholder review of this draft decision and its acceptance criteria.
  3. Obtain and record explicit human approval decisions in the project governance log prior to closing Gate 02 Group 1.
- **Operational Constraint:** Until formal sign-off is recorded, Gate 02 Group 1 remains classified as **OPEN** in `outputs/phase-02/implementation-plan.md` and `outputs/reviews/gate-02-review-record.md`.
