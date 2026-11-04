# Phase 2 — Proposed Chatbot-First Underwriter Landing-Page Workflow

## Status and evidence convention

This is a proposed workflow for Gate 02 review, grounded in `input/brd.md` and the approved Phase 1 persona and pain-point artifacts. It does not establish that an application, submission repository, integration, configured checklist, or live data source exists. **HIGH** means direct source support, not validated user research or implementation; **MEDIUM** means a design inference; **LOW** means an unverified assumption; **CONTRADICTORY** means conflicting sources requiring human resolution.

## Intended roles

The direct initial landing-page roles are the commercial insurance underwriter, underwriting assistant/submission intake specialist, and potentially underwriting manager, subject to role permissions and product validation. The BRD describes the broker/agent as an indirect stakeholder, not necessarily a direct landing-page user. Product owners/system administrators configure supporting controls. (BRD §§4–5; approved `outputs/phase-01/persona.md`.)

## Proposed end-to-end flow

### 1. Landing page and work context

Show the assistant as the primary activity, with visible access to submission lists, relevant details, and supported work context. Provide suggested tasks and a clear input area. Chat must not be the only route to important submission information. (BRD §§3, 6, 7.1, 7.8; FR1, FR8; **HIGH**.)

Display assigned, priority, pending, overdue, or recent work only if configured data, permission, agreed definitions, and freshness support it. Otherwise show a truthful unavailable state or omit the indicator. Do not present illustrative or stale content as live/personalized work. (BRD §7.7, FR10, §14; **HIGH** for the condition; **LOW** for data availability, which is unverified.)

### 2. Interpret the request and clarify

Classify the request as supported submission search, summary, missing-information check, conflict review, navigation, or follow-up drafting. If no submission is selected and the request needs one, ask for an identifier or other supported discriminator. If search terms match multiple records, request clarification before displaying sensitive details. Explain unsupported requests and offer a supported next step. (BRD §§7.1–7.2, 7.10, FR2; **HIGH**.)

### 3. Search only within verified scope

For supported search requests, query only connected sources and fields that the current user is authorized to access. Disclose the source/scope searched when available. Search fields may include submission ID, business name, assigned underwriter, status, line of business, or effective date only where the product owner has defined and the source supports them. Do not claim a live search, connected source, or complete result set without independent verification. (BRD §7.2, FR3, FR14; **HIGH** for the constraint; **LOW** for actual source/schema availability.)

**Branches:**

- **One or more matches:** present enough authorized context to distinguish results and allow the user to open a supported detail view.
- **No match:** say no matching item was found in the accessible sources searched; offer a supported refinement. Do not say no such submission exists globally. (BRD §8 scenario 6; **HIGH**.)
- **Ambiguous match:** ask a clarifying question before exposing details. (**MEDIUM** design inference from BRD §7.2.)
- **No connected/authorized source:** state that search is unavailable or not configured; do not substitute assumed data. (**HIGH** constraint; **LOW** source configuration is unverified.)
- **Access denied:** explain that the user cannot access the requested information; do not reveal protected record details. (BRD §§7.2, 7.10, FR14; **HIGH**.)

### 4. Summarize source information

Generate a concise summary only from supplied or retrieved authorized material. Separate source facts from assistant-generated suggestions; label unknown or unverified information; provide source document/record references and links where available. Let the user open the relevant submission or source directly where supported. (BRD §§5, 7.3, 7.8, 9, FR4, FR13; **HIGH**.)

If sources are incomplete or partially unavailable, identify which information and sources were available to the summary. Never invent a business description, exposure, coverage term, submission status, citation, or completed retrieval. (BRD §§7.3, 7.10, 9; risks 1–2; **HIGH**.)

### 5. Check missing information and conflicts

Compare observed information with a checklist only when the applicable checklist is configured and its scope/version can be established. For each item, distinguish:

1. **Confirmed missing** — the configured check establishes absence within its defined, accessible scope.
2. **Not found in checked sources** — no item was located, but absence is not established beyond the named sources.
3. **Source unavailable/inaccessible** — the required source could not be checked; do not call the item missing.
4. **Requires verification** — information is present but needs a human check.
5. **Requirement not configured** — no applicable checklist rule is available.

Show the checklist/source basis. Keep administrative completeness visibly separate from underwriting approval. (BRD §7.4, scenarios 2 and 5, FR5, risks 3–4; **HIGH**.)

When accessible sources disagree, show both conflicting values and their source references, mark the item for human verification, and do not select or overwrite a value. (BRD §7.5, scenario 4, FR6, FR13; approved Phase 1 PP-06; **HIGH**.)

### 6. Prepare a follow-up draft or navigate

If requested, prepare an editable draft using only verified missing items or questions selected by the user. The user reviews and edits it before copying or sending. Draft creation does not send a message. Sending is available only if a messaging integration and authorization have been configured and verified, and the user confirms the action. Report the actual result; if sending is unavailable or fails, say so. (BRD §§7.6, 7.8, FR7–FR9; **HIGH** for intended behavior; **LOW** for integration availability.)

Offer supported navigation such as opening a submission, viewing a source, copying a summary, or opening a checklist. Require review/confirmation for consequential data changes or external actions. Do not make or imply approve, decline, pricing, binding, or other underwriting decisions. (BRD §§3, 7.8, scenarios 3 and 5, FR8–FR9; **HIGH**.)

### 7. Feedback and safe completion

Where a feedback mechanism is configured, allow the user to flag an incorrect or unhelpful response; retain user corrections as distinct from original AI output. Privacy and retention behavior must be defined before implementation. (BRD §7.9, FR11; **HIGH** for proposed capability; **LOW** for the mechanism/configuration.)

End each path with the actual result and any outstanding human verification. Do not convert an administrative checklist result into a risk recommendation or underwriting decision. (BRD §§3, 8 scenario 5, 13 risk 3; **HIGH**.)

## Safe state behavior

| State | User-facing behavior | Evidence / confidence |
|---|---|---|
| Missing input or no submission context | Ask for the required supported identifier or selection; do not guess which submission is meant. | BRD §§7.1, 7.10; **HIGH**. |
| No results | State that no match was found in the sources actually checked; offer a supported search refinement. | BRD §8 scenario 6; **HIGH**. |
| Access denied | State that access is unavailable; do not reveal protected data or infer its contents. | BRD §§7.2, 7.10, FR14; **HIGH**. |
| Source/repository unavailable or unconfigured | Name the unavailable scope where known; distinguish it from a confirmed missing item; suggest an authorized manual check. | BRD §§7.4, 7.10, scenario 2; **HIGH**. |
| Loading / timeout / service failure | Show that processing is pending or failed; offer retry or supported manual navigation; do not claim completion. | BRD §7.10, FR12, §11 Reliability; **HIGH**. |
| Partial results | Identify the sources/results available and the unavailable scope; qualify summary/checklist conclusions. | BRD §7.10, FR12; **HIGH**. |
| Unsupported request | Explain the supported scope and offer a safe alternative; do not improvise an answer/action. | BRD §§6, 7.10, 9; **HIGH**. |
| Conflicting sources | Display both values and provenance, flag for human verification, and leave resolution open. | BRD §7.5, scenario 4, FR6; **HIGH**. |
| External action unavailable or unsuccessful | State that no action was sent/completed and provide a safe next step. | BRD §§7.6, 7.8, 7.10, FR7, FR12; **HIGH**. |

## Assumptions, dependencies, and review questions

- **LOW:** No live submission system, document repository, or integration is verified by the BRD or this design. Which sources, fields, identity controls, and permissions are available? System/data/access owners must answer before implementation.
- **LOW:** Checklist configuration is not established. Who owns requirements by line of business, versions, and the evidence threshold for “confirmed missing”?
- **LOW:** Work queue data and definitions are not established. Which statuses, assignment fields, freshness rules, and roles are approved?
- **LOW:** External messaging is not established. Is it in scope, technically configured, and appropriately authorized? Keep sending disabled until verified.
- **LOW:** Feedback capture, audit, privacy/retention, and accessibility mechanisms need accountable owners and approved policy.
- **MEDIUM:** Clarifying ambiguous search requests before displaying results is a proposed interaction derived from the BRD's clarification and access requirements; reviewers should confirm whether it fits current intake practice.
- **Contradictions:** None identified between the reviewed BRD and approved Phase 1 artifacts in this workflow. Any conflict discovered later must cite both sources, be labeled `CONTRADICTORY`, and remain for accountable human resolution.

