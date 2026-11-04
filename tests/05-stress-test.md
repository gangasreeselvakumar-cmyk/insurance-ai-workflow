# 05 — Stress test: full, long-form BRD

## Test category

Stress test

## Test purpose

Verify that the skill handles the complete BRD, its many requirements and constraints, and the full persona schema without losing traceability or inventing details.

## Scenario

Check that persona synthesis remains complete and concise when the source spans many requirements, scenarios, risks, assumptions, and dependencies.

## Input or test setup

- Use the complete 797-line `input/brd.md`, not a summary or selected excerpt.
- Include all sections through §18 Glossary, particularly the functional and non-functional requirements, success metrics, risks, open questions, acceptance criteria, and assumptions/dependencies.
- Run with the required output format and default output path.

## Expected behavior

- Identify the relevant user groups and distinguish their responsibilities, authority, needs, and product interactions.
- Use supporting evidence from beyond the target-user section where helpful, without creating one persona per BRD section or repeating the same generic persona.
- Keep the output readable and appropriately concise while retaining each required field and traceable evidence.
- Preserve limitations around authorized sources, uncertain/missing documents, source references, human review, external actions, and underwriting decisions.

## Pass/fail criteria

- **Pass** if synthesis reflects the full BRD, includes distinct evidence-backed personas, and remains complete and readable without unsupported details or redundant profiles.
- **Fail** if it relies only on the introduction or target-user list, omits material constraints, becomes a section-by-section summary instead of personas, or drops required fields under length pressure.

