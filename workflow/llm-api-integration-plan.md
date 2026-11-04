# Optional LLM API Integration Plan

## Purpose and status

This document plans a possible future LLM API integration for the Insurance Submission Intake Assistant. **No LLM provider, API connection, backend, credential, or production data flow is currently confirmed by the reviewed project materials. This plan does not implement or authorize one.** The offline FAQ notebook remains usable without an API key.

## Project references reviewed

- `workflow/implementation-plan.md` — **not found** at the requested path.
- `outputs/phase-02/implementation-plan.md` — actual implementation plan found and reviewed. It keeps data access/search, checklist ownership, work-queue definitions, external messaging, and privacy/audit controls open; it also says the LLM provider/model is undecided and secrets must not enter frontend code.
- `chat_llm.ipynb` — 17-cell synthetic-data learning prototype. It loads settings from a local `.env`, displays no secret, and gates an OpenAI-compatible example behind `ENABLE_LLM_CALL = False`; it states the provider and compatibility are unconfirmed. No API request was made as part of this review.
- `outputs/insurance_faq_assistant.ipynb` — 14-cell self-contained offline FAQ notebook. It embeds the FAQ data, performs local question matching, includes tests in notebook cells, and clearly states no live LLM mode is implemented.
- `input/insurance-faq-dataset.json` — 25 FAQ entries in six categories. This dataset is the proposed approved FAQ knowledge source for FAQ answers; it contains no optional URLs.
- `workflow/insurance-faq-notebook-generator-prompt.md` — requires the FAQ JSON to be the sole business source, safe unknown-question handling, and a clear distinction between offline FAQ matching and an actual LLM call.
- `outputs/reviews/gate-02-review-record.md` — Gate 02 is recorded as `APPROVED` with conditions. The five open question groups remain unresolved, and the record says not to assume integrations or live data access.

## 1. Offline matching and an LLM API integration are different

### Existing offline FAQ matching

`outputs/insurance_faq_assistant.ipynb` compares a user question with question text in the embedded FAQ JSON and returns a stored answer, asks for clarification, or abstains. It runs locally with Python's standard library, needs no API key, sends no request externally, and cannot retrieve submission records. It does not generate a new answer from a language model.

### Optional LLM API integration

An API integration would send a request from a trusted backend service to an external or separately hosted model, then receive generated text. It introduces provider selection, credentials, network access, possible data transfer and retention, cost, latency, and new failure modes. It is not equivalent to offline FAQ matching and is not currently configured.

**Recommended boundary:** retain offline retrieval as the first step and reliable fallback. Use an LLM only as an optional language layer over a small, relevant set of FAQ entries, if the provider, data handling, and organizational use are approved. The model must not become a new source of insurance facts. For FAQ questions, returning the exact dataset answer may be safer than generating paraphrases.

## 2. Proposed request and response flow

The following is a design proposal, not an implemented architecture. A server-side API boundary is recommended for protecting credentials; the project has not selected or deployed a backend technology.

1. **Angular client (future):** collect a user question and send it to an approved backend endpoint. The browser must never contain the provider key.
2. **Backend input checks:** validate the request shape, reject empty/oversized input, apply the approved user identity/access controls, and avoid logging secrets or unnecessary sensitive content.
3. **FAQ retrieval:** match the question against the canonical FAQ dataset. The dataset should be loaded or packaged server-side with integrity/schema validation; avoid maintaining an independently edited copy. Retrieve only relevant entry IDs, questions, answers, and verified optional references.
4. **Scope and support check:** if no FAQ entry is sufficiently relevant, if matches are ambiguous, or if the question asks for a coverage decision, carrier-specific rule, live submission status, or other unsupported information, do not call the LLM. Return a clear abstention or clarification response and direct the user to the insurer's actual procedure or an authorized human.
5. **Optional model call:** only when allowed by policy and needed, send the user question plus the selected FAQ entries and strict instructions to answer only from that context. Do not send submission records, customer/broker details, policy documents, or other live data in this FAQ-only integration.
6. **Response checks:** validate the provider response shape, size, and any cited FAQ IDs. Reject citations that do not exist in the selected context. If the response adds unsupported facts, fails grounding checks, or is ambiguous, do not display it as authoritative; fall back to the exact FAQ answer or a safe abstention.
7. **Angular display:** show the answer and the source FAQ question/ID or link only if supplied by the dataset. Clearly label model-generated wording if used, retain a route to the original FAQ answer, and provide a human escalation path.
8. **Failure/fallback:** on missing configuration, timeout, access denial, rate limiting, provider error, invalid response, or grounding failure, do not claim the request succeeded. Return the offline FAQ answer only if there is an unambiguous supported match; otherwise abstain.

### Data-flow boundary

```text
Angular client (no provider secret)
        │ user question + approved session context
        ▼
Trusted backend (input/access checks, FAQ retrieval, support gate)
        │ only selected FAQ content, when optional API use is approved
        ▼
Approved LLM provider
        │ generated response
        ▼
Backend validation (schema, citations, support, safe fallback)
        ▼
Angular client (answer, FAQ source, uncertainty/escalation)
```

This diagram is a proposed flow; no service or connection is established by it.

## 3. FAQ knowledge source and unsupported questions

- Treat `input/insurance-faq-dataset.json` as the single approved business source for this FAQ integration unless a formal change approves another source. Do not use model pretraining, `chat_llm.ipynb`, the BRD, or general web knowledge to fill FAQ gaps.
- Validate the complete dataset on load: JSON syntax, array/object structure, required non-empty fields, unique IDs, and allowed optional fields. Fail closed if validation fails; do not silently skip malformed entries.
- Prefer matching and returning the source answer verbatim. If an approved LLM is used to rephrase, provide only the relevant dataset entries and require a citation to the supporting FAQ ID. Preserve the original answer for comparison.
- Reject empty or malformed user requests before retrieval or API use. Treat ambiguous matches as a clarification request, not an invitation to combine answers.
- If no FAQ supports the question, return a safe response such as “The FAQ dataset does not provide an answer to that question.” Do not answer from model knowledge.
- Explicitly abstain from carrier-specific underwriting rules, company procedures not in the JSON, coverage decisions, legal conclusions, and live submission information. Route such questions to the insurer's actual procedure or an authorized person without inventing contact details.
- Keep the product boundary clear: no approval, decline, pricing, binding, or material underwriting decision is delegated to the assistant.
- Do not add URLs or citations unless they exist in the source dataset and have been verified.

## 4. Credential and secret handling with local `.env`

No `.env` file or credential is created by this plan. Credentials must be obtained from an approved provider/account by an authorized owner, never generated or guessed by the coding assistant.

When implementation is approved:

1. Confirm provider, secret ownership, credential scope, rotation/revocation, and approved runtime with security/privacy and system owners.
2. Store a developer's local credential in an ignored project-root `.env` file or inject it through an approved secret manager/environment in the backend runtime. A template file may contain variable names and dummy placeholders only.
3. Verify `.env` is excluded from source control before placing a real key in it. Check that it is not staged or tracked.
4. Load the credential only in trusted server-side code. Read it from an environment variable; never copy it into a notebook cell, notebook output, Angular build variables, browser bundle, browser storage, URL, logs, screenshots, or error text.
5. Never return secret values to the client, and do not log request headers, full provider errors, or prompts that may contain restricted data. Log only approved metadata and redact sensitive values under a policy approved by the privacy/security owner.
6. On missing or invalid credentials, stop the API path and give a generic setup/configuration message without displaying the secret. Keep offline FAQ behavior available when possible.
7. Use TLS for remote provider traffic and define credential rotation and incident response before release.

The current `chat_llm.ipynb` illustrates local environment-variable loading for synthetic data only; it is not a secure production backend and does not establish that `.env` is ignored in this project. Verify repository ignore rules before any credential is created.

## 5. Dependencies and setup prerequisites

### Decisions and organizational prerequisites

- Approved LLM provider and model, including confirmation of endpoint, authentication, API format, service region, and contractual/data-handling terms.
- Approved purpose and permitted data categories. For this proposed FAQ-only path, prohibit live customer, broker, policy, or submission data unless separately reviewed and authorized.
- Organizational security, privacy, legal/compliance, procurement, and product approval as applicable; provider use, retention, logging, and model training settings must be reviewed.
- Accountable owners for the unresolved Gate 02 areas: data access/search scope; checklist ownership; work-queue definitions; external messaging; and privacy/audit controls. API integration must not be treated as resolving these questions.
- Approved backend/API architecture, hosting, authentication/authorization, network egress, rate limits, timeout/retry behavior, monitoring, and cost limits.
- Approved FAQ ownership, update/version process, and accountable business reviewer for FAQ answer changes.

### Candidate software dependencies

These are candidates, not confirmed project dependencies. Choose only after backend/provider decisions:

- Python runtime for a Python backend, if selected.
- The selected provider's official server-side SDK **or** a maintained HTTP client such as `requests`/`httpx`; do not install multiple clients without a need.
- `python-dotenv` for local development only if approved; production should use the approved runtime secret injection mechanism.
- A web framework such as FastAPI only if Python is selected for the backend. This project does not currently specify or implement one.
- Existing Angular app and its approved API client conventions for the later frontend. No Angular application is currently created by this plan.
- Standard-library JSON/schema/input validation where sufficient; add a validation package only if the selected implementation needs it.

### Beginner-friendly setup sequence (future work)

1. Confirm prerequisites and make a small local branch or other approved isolated workspace; preserve the approved notebooks and FAQ file.
2. Select and document the provider and backend architecture with owners. If unresolved, remain in offline/mock mode.
3. Set up the chosen Python environment and install pinned, reviewed dependencies using the project's selected dependency manager.
4. Add a `.gitignore` rule for `.env` and verify the file is not tracked. Do not create or populate `.env` until credentials are authorized.
5. Provide a placeholder configuration template without secrets. Document required variable names only after provider configuration is known.
6. Implement and test the backend support gate and FAQ retrieval first, using local test fixtures and no network calls.
7. Add a provider adapter behind a feature flag only after approval. Keep the API call disabled by default in development until a developer deliberately enables it with authorized configuration.
8. Connect a later Angular frontend to the backend only after the backend contract and authentication/access model are approved. Never call the provider directly from Angular.
9. Complete verification and human review before any deployment. This plan authorizes no deployment.

## 6. Verification tests required before use

Use mocked provider responses and synthetic FAQ-only content for automated tests. Do not require a real API key or make live calls in routine tests.

### FAQ source and support tests

- Valid FAQ question returns the exact approved entry or a response with a valid FAQ ID citation.
- Unknown question is rejected before any provider call and returns a safe abstention.
- Empty/whitespace input is rejected before retrieval/API call.
- Ambiguous match asks for clarification and does not combine answers.
- Malformed JSON, missing required field, blank value, duplicate ID, and invalid optional reference fail closed before use.
- A question requesting a coverage decision or unlisted carrier rule is not answered from model knowledge.

### API adapter tests with mocks

- Missing/invalid provider configuration blocks the call and reveals no secret.
- Valid approved-format request includes only the question and selected FAQ context; no unrelated file or submission data is sent.
- Timeout, network error, rate limit, non-success status, invalid JSON, empty answer, and unexpected response shape trigger safe error behavior.
- Invalid/made-up FAQ citations, claims not supported by supplied FAQ content, and provider refusal are handled safely; use exact stored answer or abstention as designed.
- Provider output cannot override original FAQ wording or introduce a coverage/underwriting decision.
- Fallback to offline matching works without credentials and makes no external request.

### Security, privacy, and integration tests

- No secret appears in notebook source/output, source control, Angular bundle, browser storage, logs, error text, or HTTP response to the client.
- `.env` is ignored and untracked; production secret injection uses the approved mechanism.
- Only the backend can reach the provider; Angular never receives the key.
- TLS, authentication, authorization, egress, rate limits, request size limits, retention, redaction, and audit behavior meet owner-approved criteria.
- End-to-end tests use synthetic or formally approved test content and confirm that live submission sources remain disconnected unless separately authorized.

Tests passing with mocks do not prove provider availability, privacy approval, or production readiness. A real connectivity check, if later needed, requires explicit authorization, a controlled test account, synthetic content, and approved data-handling conditions.

## 7. Decisions required before implementation

Record decisions and accountable owners before enabling API functionality:

| Decision | Current status | Required confirmation |
|---|---|---|
| LLM provider, model, API format, endpoint, and region | **OPEN — not selected** | Product and security/privacy/system owners approve provider, service terms, endpoint/auth format, data usage, and approved model. |
| API account and credential access | **OPEN — no credential configured** | Authorized account owner provisions a scoped key and owns rotation/revocation; coding assistant must not request or expose it. |
| FAQ source governance | **OPEN — dataset exists; governance not confirmed** | Business owner approves FAQ content, versioning, updates, answer accuracy, and source-ID citation behavior. |
| Privacy and external processing | **OPEN — approval not documented** | Privacy/security/legal/compliance owners approve data categories, transfer, retention, logging, provider training/retention settings, and incident handling. |
| Backend boundary and deployment | **OPEN — no backend specified** | System/architecture owner approves backend technology, hosting, authentication, secret storage, egress, monitoring, and API contract. |
| Human review and product scope | **OPEN — role and release rules need confirmation** | Underwriting/product owners approve the abstention, escalation, answer presentation, and no-decision boundary. |
| Gate 02 conditions | **OPEN — five question groups unresolved** | Assign owners and close or constrain the relevant data access, checklist, work-queue, external messaging, and privacy/audit prerequisites before implementing dependent capabilities. |

No item in this table is resolved by writing this plan or by Gate 02's approval of the requirements/workflow baseline.

## 8. Beginner-friendly implementation sequence

### Stage A — Keep the existing offline FAQ notebook as baseline

Use `outputs/insurance_faq_assistant.ipynb` to understand local FAQ matching and the embedded dataset. Keep it offline; do not make an API call or replace its matching behavior with a model. Confirm the source dataset and embedded copy remain aligned when the dataset changes through an approved process.

### Stage B — Build a backend FAQ service without an LLM

After backend ownership and architecture are approved, expose a small endpoint that validates a user question, retrieves FAQ entries, and returns exact answers or safe clarification/abstention. Test it with synthetic requests and mocked data. This separates business-source handling from any provider-specific code.

### Stage C — Add an isolated provider adapter

After all provider and privacy approvals, add one server-side adapter for the selected API. Make the adapter opt-in and configurable without embedding secrets in code. Pass only relevant FAQ context; reject unsupported questions before calling the provider. Keep an offline-only path and safe fallback.

### Stage D — Connect the future Angular frontend

Once the API contract, authentication, authorization, and backend deployment path are approved, have Angular call the backend. Preserve the FAQ source/citation, unknown/clarification states, and human escalation. The browser must not communicate with the model provider using a secret.

### Stage E — Verify, review, and release separately

Run the approved unit, mocked API, security, privacy, integration, and end-to-end checks. Review findings with underwriting, product, system, and security/privacy owners. Resolve required conditions and obtain any separate implementation/release approval before deployment. No deploy step is performed by this plan.

## Remaining prerequisites

- The requested `workflow/implementation-plan.md` path is missing; the current plan is `outputs/phase-02/implementation-plan.md`.
- LLM provider, model, endpoint, API account, and credentials are not selected/configured.
- No backend service, server-side secret store, Angular app, or production integration is specified or implemented.
- API data handling, privacy, logging, retention, provider terms, and organizational approval remain to be confirmed.
- The five Gate 02 question groups remain open; owners and verification evidence must be assigned before implementing dependent capabilities.

