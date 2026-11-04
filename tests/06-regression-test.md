# 06 — Regression test: unchanged BRD and current persona baseline

## Test category

Regression test

## Test purpose

Verify that subsequent runs preserve the current output's supported role coverage and the skill's evidence and decision-boundary safeguards.

## Scenario

Verify that a future run on the unchanged BRD preserves the current persona document's core coverage and the skill's evidence safeguards.

## Input or test setup

- Use the unchanged `input/brd.md` and the current `outputs/phase-01/persona.md` as the semantic baseline.
- Run `skills/persona-synthesis-skill.md` to the specified output path, then compare the new document with the baseline by required content and evidence, not exact wording.

## Expected behavior

- Retain the source note and statement that the personas are BRD-based synthesis, not validated user research.
- Preserve the current role coverage: Commercial Insurance Underwriter; Underwriting Assistant / Submission Intake Specialist; Underwriting Manager; Product Owner / System Administrator; and Broker / Agent marked as an indirect stakeholder.
- Preserve each persona's required fields, relevant evidence, and validation questions.
- Keep §2 pain points qualified as hypotheses; distinguish proposed workflows and inferences from established facts; maintain human decision authority and source/access limits.
- Allow wording improvements when all semantic requirements remain satisfied.

## Pass/fail criteria

- **Pass** if each baseline role and safeguard remains represented, citations map to real BRD sections, and all required fields remain present; exact sentence matching is not required.
- **Fail** if a role is lost or mislabeled, unsupported claims appear, hypothesis/inference labels disappear, a source reference is invalid, or the assistant is portrayed as making underwriting decisions.
