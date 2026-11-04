# Gate 02 Group 02 — Checklist Ownership Decision Draft

## Purpose

This document proposes a decision for Gate 02 Group 2 — Checklist Ownership. It is a proposal for review and does not constitute formal approval.

## Proposed decision

**Option A — Human-owned checklist selection.**

The Insurance Submission Intake Assistant must never independently select, assign, or determine which insurance checklist applies to a submission. An authorized intake or underwriting contact must confirm the applicable checklist.

The assistant may provide general checklist-related guidance supported by the approved synthetic FAQ dataset. It must not invent required documents, infer carrier-specific requirements, or present an unverified checklist as authoritative.

## Scope and boundaries

- **Permitted knowledge source:** `input/insurance-faq-dataset.json`.
- **Data scope:** Synthetic FAQ data only.
- The assistant has no access to real customer or policyholder data, live insurance systems, or unapproved external sources.
- Automatic checklist selection or assignment is outside the proposed scope.
- This draft does not authorize implementation or changes to existing Gate 02 review records.

## Required approvals

The following roles must be identified and approve this proposal before it is treated as formally approved. Names, dates, and evidence are recorded only when actually provided.

| Required role | Approver name | Approval date | Evidence of approval | Status |
|---|---|---|---|---|
| Product or Business Owner | Not provided | Not provided | Not provided | Pending — approver not yet confirmed |
| Intake or Underwriting Process Owner | Not provided | Not provided | Not provided | Pending — approver not yet confirmed |
| Security/Data Governance Representative | Not provided | Not provided | Not provided | Pending — approver not yet confirmed |
| Gate 02 Approver | Not provided | Not provided | Not provided | Pending — approver not yet confirmed |

## Acceptance criteria

The proposal is acceptable for review when each criterion below is defined and can be verified:

1. The assistant does not independently select, assign, or confirm a checklist.
2. When asked which checklist applies, the assistant directs the user to an authorized intake or underwriting contact unless an explicitly approved capability is introduced in a separately approved future scope.
3. The assistant does not invent required-document lists or carrier-specific checklist rules.
4. Any general guidance is grounded in the approved synthetic FAQ dataset and cites the supporting FAQ entry where applicable.
5. Questions that cannot be answered from the approved dataset receive this standard abstention response: “The FAQ dataset does not provide an answer to that question.”
6. Tests cover checklist-selection requests, unsupported checklist requirements, and attempts to persuade the assistant to bypass human confirmation. These tests are acceptance criteria; no tests are executed by this draft.
7. No live checklist system, external data source, or real insurance data is used.
8. Any future proposal to automate checklist selection requires separate documented approval, validated selection rules, and an updated governance review before implementation.

## Status

**PROPOSED — NOT FORMALLY APPROVED**

### Open dependencies

- Identify the accountable Product/Business Owner, Intake/Underwriting Process Owner, Security/Data Governance Representative, and Gate 02 Approver.
- Obtain documented approval from the required approvers.
- Keep the official Gate 02 records unchanged until the authorized review process updates them.

## Change restrictions

This is a draft proposal only. It does not record or imply approval, modify an official review record, resolve open dependencies, or authorize implementation.
