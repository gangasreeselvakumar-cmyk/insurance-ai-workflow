# Implementation Plan — AI Underwriting Assistant

## Purpose and status

This plan stages implementation work against the Gate 02-approved requirements and chatbot workflow. It is a planning document; artifacts created or checked separately are not automatically evidence that a planned stage is complete. Current status is recorded below and must be rechecked against files and execution evidence.

The Gate 02 approval explicitly keeps five question groups open and prohibits assuming integrations or live data access. Any capability depending on an unresolved item must remain unimplemented and disabled until the relevant decision and verification criteria are satisfied.

## Approved baseline

Use these approved artifacts as the implementation baseline:

- `outputs/phase-02/requirements.md`
- `outputs/phase-02/chatbot-workflow.md`
- `outputs/phase-02/validation-report.md`
- `outputs/reviews/gate-02-review-record.md`

The Gate 02 record is `APPROVED` with conditions. Approval permits downstream implementation subject to those conditions; it does not mean any code or external capability exists. Do not change the BRD or approved Phase 2 artifacts as a shortcut to resolving an implementation dependency. Record approved requirement changes through the project change process.

## Open decisions and verification gates

The owner roles below are **proposed, not confirmed assignments**. No individual owner or decision has been supplied. Project leadership should assign accountable owners before work depending on each decision begins.

| Open question | Proposed accountable role (unconfirmed) | Evidence or information needed | Verification and acceptance criteria | Dependencies and affected capabilities | Current status | Must dependent capability remain unimplemented until verified? |
|---|---|---|---|---|---|---|
| **1. Data access and search scope:** Which submission/document sources, fields, identities, permissions, and freshness guarantees are available and approved? | Proposed: system/data/access owner, with underwriting product owner for business scope. | Source inventory; approved field/query scope; identity and authorization design; data-owner permission; source freshness/availability definition; test access in a non-production environment. | Owners approve the source and field list; access tests prove users see only authorized records; freshness and unavailable-source behavior can be represented accurately; search results can be traced to their source. No live-search claim before these checks pass. | Submission search, summaries, missing-information checks, source citations, work context, and any data-backed UI/API. | **OPEN — unresolved; no live source or access verified.** | **YES.** Keep production/live search and data-backed capabilities unimplemented/disabled. UI and notebook may use clearly labeled synthetic fixtures only. |
| **2. Checklist ownership:** Who owns required documents/fields per line of business, versioning, applicability, and the threshold for saying an item is confirmed missing? | Proposed: underwriting operations/product owner, with intake specialist input. | Approved checklist content; line-of-business applicability; version/effective date; source coverage; definitions for confirmed missing, not found, unavailable, requires verification, and unconfigured; change and approval process. | An accountable underwriting owner approves a versioned checklist and applicability rules; sample cases demonstrate each status accurately; inability to inspect a source never becomes a confirmed-missing result. | Missing-information checks, completeness display, broker follow-up drafts, status and readiness presentation. | **OPEN — unresolved; checklist is not verified as configured.** | **YES.** Keep authoritative checklist evaluation and “confirmed missing” results unimplemented until the rules and source coverage are approved. A non-authoritative mock may be used for UI exploration if labeled. |
| **3. Work-queue definitions:** Which assignment, priority, pending, overdue, and recency concepts are valid, who can see them, and what data freshness is acceptable? | Proposed: product owner and system/workflow owner, with underwriting manager review. | Business definitions and ownership; source fields; role permissions; freshness/latency expectations; examples of boundary cases; treatment of unavailable or stale values. | Business and system owners approve definitions and source mapping; role-based tests verify display restrictions; stale/unavailable values are clearly marked and never represented as current. | Assigned/priority/pending/recent work panels, manager views, search filters, work-context summaries. | **OPEN — unresolved; data and definitions are not verified.** | **YES.** Keep live or personalized queue indicators unimplemented/disabled until definitions, data, permissions, and freshness are verified. Static layout prototyping may use labeled placeholders. |
| **4. External messaging:** Is sending broker follow-up in scope, and what integration, recipients, authorization, review, confirmation, audit, and failure handling are required? | Proposed: product owner and system/access owner, with underwriting operations and messaging/security owner review. | Explicit scope decision; approved channel/provider; integration and credentials ownership; recipient resolution rules; user permissions; message retention/audit requirements; confirmation and failure semantics. | Owners approve scope and controls; tests prove draft generation never sends; sending requires review, authorized recipient, explicit confirmation, and verified integration; success/failure is reported truthfully. | Sending broker messages, outbound workflow actions, delivery status, audit record. Editable offline draft generation is separately reviewable and must still use verified items. | **OPEN — unresolved; no external messaging integration is confirmed.** | **YES.** Keep external sending unimplemented/disabled until scope, integration, authorization, and safeguards are verified. Never place provider credentials in Angular/browser code. |
| **5. Privacy and audit controls:** What sensitive data may be processed, logged, retained, redacted, or sent to an AI provider, and what audit/accessibility/reliability controls apply? | Proposed: security/privacy owner and system owner, with legal/compliance and underwriting product input as applicable. | Data classification; approved processing locations/providers; retention/deletion rules; logging/redaction policy; access controls; audit events; incident handling; accessibility and reliability requirements; vendor/security review where applicable. | Accountable owners approve data flows and retention; tests confirm secrets and sensitive values are not exposed in client bundles or inappropriate logs; authorization and audit behavior is verified; accessibility/reliability criteria are measurable and reviewed before release. | All production LLM requests, submission/document processing, logs, feedback, analytics, audit, user identity, and external actions. | **OPEN — unresolved; no policy or control approval documented here.** | **YES.** Keep production use with sensitive/real submission data and production release unimplemented until controls are approved and verified. Local learning work must use synthetic/non-sensitive data and approved provider settings only. |

## Staged implementation plan

The stages below describe planned work and exit checks; they are not execution records. Stages may be prototyped against synthetic fixtures where specified, but passing a prototype check does not resolve an open decision or authorize a production capability.

### Stage 0 — Assign owners and close capability-specific prerequisites

**Planned work:** Assign accountable owners for the five open-question groups. Gather required evidence and decisions. Record decisions, verification results, and any limitations in the project review/change record. Identify which capability slices can proceed without live data or sensitive information.

**Exit criteria:** Each dependency needed for the next stage has either (a) an approved decision and testable acceptance criteria, or (b) a clearly bounded prototype mode that uses synthetic data and cannot reach production sources. Unresolved questions remain marked OPEN; do not infer closure from discussion or file existence.

### Stage 1 — Beginner-friendly `chat_llm.ipynb` learning prototype

**Status:** `chat_llm.ipynb` exists and contains a synthetic-data learning prototype. Its current notebook metadata records execution counts for 9 code cells and saved outputs; this metadata alone does not establish that its optional provider request was enabled or succeeded. The current source has `ENABLE_LLM_CALL = False` by default. `outputs/insurance_faq_api_assistant.ipynb` is a separate API prototype; its metadata records execution counts for 7 code cells and saved outputs for 6 cells. Separately, `outputs/faq_api_evaluation_report.md` records a historical 21/21 evaluation result: 8 Tier A offline cases and 13 Tier B live API calls. These prototype artifacts and historical results do not establish current credential validity, current API access, organizational authorization, or production readiness. A separate `outputs/insurance_faq_assistant.ipynb` exists for offline FAQ matching; on 2026-10-21 its five code cells, including the valid/unknown/empty/malformed-data assertions, completed successfully in an isolated Python harness with synthetic input. The notebook file itself retains no saved cell outputs; that harness execution did not test a provider or API connection.

**Remaining planned work:** Review the existing learning notebook against its beginner and safety criteria, preserve synthetic-only data, and decide whether any revisions are needed. Use small cells and explain environment setup, inputs, outputs, and safe errors. Do not treat the offline FAQ run as verification of the separate API example.

**Provider/API dependency:** The BRD and Gate 02 artifacts do not approve an LLM provider for production. The historical evaluation report identifies OpenAI `gpt-4.1-mini` as the prototype evaluation provider and records live calls; this does not establish current access, credential validity, or organizational/production authorization. Treat provider and data-handling approval as decisions for product and security/privacy owners. Do not include a real API key in the notebook, outputs, source control, or committed examples. Clearly distinguish mock responses from responses returned by a configured provider.

**Exit criteria:** A new user can follow the setup and run the safe demonstration; the notebook explains required configuration, handles missing/invalid configuration without printing secrets, and labels all synthetic or mocked content. No connection to submission data is claimed.

### Stage 2 — Secure local API-key configuration with `.env`

**Planned work:** If an LLM provider is approved and a developer independently obtains authorized credentials, configure local development to read a key from an ignored `.env` file. Provide only a placeholder template such as `.env.example` if approved by project conventions; it must contain variable names and dummy placeholders, never a credential. Confirm `.env` is excluded from version control before any secret is entered. Load secrets in a trusted local/server-side runtime and fail safely when absent.

**Security boundary:** Do not embed an API key in Angular code, browser storage, notebook output, screenshots, logs, or commits. If the Angular UI needs an LLM response, it should call an approved server-side boundary that owns the secret; the API/backend architecture and deployment are not yet defined and require review. Do not create or populate `.env` during this planning task.

**Exit criteria:** Secret-handling owner approves the storage and runtime approach; repository ignore behavior is verified; secret scanning or equivalent review confirms no credential is committed or exposed; absent/invalid keys yield a safe, non-secret-revealing error. This does not itself authorize sending real submission content to an LLM provider.

### Stage 3 — Angular chatbot landing-page prototype

**Planned work:** Build the approved chatbot-first landing-page experience in Angular, including the assistant area, conversation states, source/evidence presentation, direct-navigation affordances, and safe empty/error/unsupported states from the approved workflow. Start with mock/synthetic data and an isolated service interface. Keep the UI clear that mock responses are examples. Do not put API credentials or privileged data access in the client.

**Dependencies:** Confirm Angular/version/design-system conventions and the server-side API contract before implementation. Work-queue data, connected search, checklist results, source documents, and external messaging remain gated by open items 1–4. If a dependency is unresolved, implement only the non-connected presentation shell or leave the corresponding control disabled with truthful unavailable copy.

**Exit criteria:** UI review confirms chat is primary but not the only route to details; states distinguish missing, unavailable, not found, requires verification, and unconfigured; provenance and uncertainty can be shown; no underwriting decision is made by the assistant. Any unresolved capability remains clearly disabled or presented as a non-operational mock.

### Stage 4 — Approved backend/source integration and controlled capability enablement

**Planned work:** Only after applicable owner decisions, connect one approved source/capability at a time through a reviewed server-side boundary. Apply access checks at the data-access layer, preserve source provenance, and add explicit health/error behavior. Add checklist, queue, or messaging capability only after its corresponding open question is resolved and the acceptance conditions in this plan are verified.

**Exit criteria:** System/data/access/security owners verify the approved source, permissions, privacy/audit controls, and failure behavior in a non-production environment; business owners accept the results; no unresolved capability is enabled. Production use requires any additional organizational release approvals.

### Stage 5 — Integration and end-to-end testing

**Planned work:** After stages 0–4 and applicable dependency gates are satisfied, write and execute integration and end-to-end checks across the Angular UI, approved server-side boundary, and approved sources. Test with synthetic or formally approved test data. Include negative and safety cases, not only successful responses.

**Planned coverage:**

- Authorization and role boundaries; denied access leaks no record details.
- Search scope, ambiguous requests, no results, unavailable sources, stale/partial results, and accurate source attribution.
- Summary grounding, unknown values, unsupported claims, and visible source references.
- Checklist outcomes: confirmed missing, not found in checked sources, unavailable/inaccessible, requires verification, and unconfigured.
- Conflicting values preserve both sources and require human resolution.
- Drafting does not send; external sending, if approved and enabled, requires authorization and confirmation and reports actual outcomes.
- API key absent/invalid, provider timeout/failure, secret redaction, no key in client bundle, and no secret in logs or repository.
- Human review, navigation, accessibility, and administrative completeness kept separate from underwriting decisions.

**Exit criteria:** Each check has an observed result, defects are corrected and re-tested, security/privacy and business owners sign off within their remit, and no production-blocking open item remains for the capabilities being released. Test execution and results must be recorded separately; this plan does not claim tests have run or passed.

## Cross-stage controls

- Keep the approved Phase 2 baseline and this plan under version control without changing approved artifacts silently.
- Track requirement IDs (FRD/NFRD) through implementation tasks and tests; record any proposed scope change for approval.
- Keep all user-facing data claims within the actual verified source scope. Synthetic, mock, unavailable, partial, and live states must be distinct.
- Maintain human authority for underwriting decisions. The assistant may support review but must not approve, decline, price, bind, or send external communications without the appropriate verified capability and human confirmation.
- Do not use real submission data in prototypes, notebooks, logs, or an external model unless applicable data/privacy/security owners have explicitly approved the data flow.
- Treat the five items above as open until decision evidence and acceptance results are recorded. A planned task, prototype, mock, or passing UI test does not resolve an item.

## Immediate next decisions and prerequisites

1. Assign accountable individuals to the five proposed owner roles and document the assignments.
2. Decide the approved LLM provider/model and whether any data may be sent to it; otherwise keep the notebook fully mocked/offline.
3. Confirm development environment, Angular conventions, and whether a server-side API boundary is available or needs separate architecture approval.
4. Obtain approved synthetic/test data and determine applicable privacy, secret-handling, audit, accessibility, and test-data rules.
5. Resolve or explicitly scope out each live capability before implementing it; keep dependent features disabled while unresolved.

## Current implementation status

**Status checked:** 2026-11-03 (Asia/Kolkata). This is a file-and-evidence snapshot, not a Gate decision or end-to-end orchestration run. Notebook metadata and historical evaluation documentation are artifact evidence; they do not establish current API availability or production authorization.

- `chat_llm.ipynb`: **ARTIFACT PRESENT; NOTEBOOK CELLS HAVE EXECUTION METADATA.** Nine code cells have execution counts and saved outputs. Its current source leaves `ENABLE_LLM_CALL` false by default; the metadata does not establish that an API request ran or succeeded.
- `outputs/insurance_faq_assistant.ipynb`: **ARTIFACT PRESENT; NOTEBOOK CELLS NOT RECORDED AS EXECUTED.** Its code cells have no saved execution counts or outputs. The separate isolated-harness run recorded above passed its synthetic FAQ checks; that does not verify a provider or API connection.
- `outputs/insurance_faq_api_assistant.ipynb`: **ARTIFACT PRESENT; NOTEBOOK CELLS HAVE EXECUTION METADATA.** Seven code cells have execution counts and six have saved outputs. The notebook contains a prototype API request path; cell metadata does not by itself establish current access or production readiness.
- `outputs/faq_api_evaluation_report.md`: **HISTORICAL PROTOTYPE EVALUATION RECORDED AS 21/21 PASS.** The report records 8 Tier A offline cases and 13 Tier B live API calls using OpenAI `gpt-4.1-mini`. The evaluator was not rerun for this status snapshot; the report does not establish current credential validity, current API access, or organizational authorization.
- Local `.env` and `.gitignore`: **FILES PRESENT.** `.gitignore` contains exclusions for `.env` and `.env.*`. `.env` contents were not inspected; credential validity/configuration and source-control tracking status are not established by file presence or ignore rules alone.
- Backend/API service: **NOT IMPLEMENTED; ARCHITECTURE UNAPPROVED.** The project contains notebook-based API prototype code and an evaluator, but no standalone backend service or approved server/API architecture is evidenced by the inspected project paths.
- Angular chatbot UI: **NOT IMPLEMENTED.** No root Angular `package.json` or application was found in the inspected project paths.
- Data, checklist, queue, or messaging integrations: **NOT IMPLEMENTED / NOT VERIFIED.**
- Persona skill test suite: its report records **6 PASS, 0 FAIL, 0 NOT RUN**. This is a skill-test result, not an application or integration test.
- Phase 2 document validation: `outputs/phase-02/validation-report.md` records **PASS** for the requirements/workflow documents; it is not an implementation test.
- Integration and end-to-end tests: **NOT RUN.**
- Gate 01 and Gate 02: **APPROVED** in their preserved review records for the artifact versions recorded there. Gate 02 conditions remain in force; approval does not close dependencies.
- Five Gate 02 question groups: **OPEN** — data access/search, checklist ownership, work-queue definitions, external messaging, and privacy/audit controls.
- LLM provider and authorized API access: **PROTOTYPE USE DOCUMENTED; CURRENT/PRODUCTION STATUS UNVERIFIED.** The historical report records OpenAI API calls. Current provider access, credential validity, and organizational authorization are not established by that report.

