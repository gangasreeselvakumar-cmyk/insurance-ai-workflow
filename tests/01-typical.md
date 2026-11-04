# 01 — Typical BRD synthesis

## Test category

Typical

## Test purpose

Verify that the skill produces evidence-based personas from a complete, readable BRD in the ordinary case.

## Scenario

Generate personas from the complete commercial insurance submission-intake BRD under normal conditions.

## Input or test setup

- Use the readable project source `input/brd.md` without modification.
- Run `skills/persona-synthesis-skill.md` with its default input path and output contract.
- Treat §4 Target Users, §5 User Needs, §7 Key Features, §8 Example Scenarios, and the remaining BRD sections as source evidence.

## Expected behavior

- Create `outputs/phase-01/persona.md` as Markdown.
- Produce a concise set of distinct, BRD-supported personas. For this BRD, the relevant groups include the underwriter, underwriting assistant/intake specialist, manager, product owner/system administrator, and broker/agent as an indirect stakeholder where useful.
- Include every required persona field and cite accurate BRD sections.
- Mark §2 problem statements as working hypotheses and proposed workflows as proposed or inferred, not validated observations.
- Preserve the broker's indirect status and the underwriter's decision authority.

## Pass/fail criteria

- **Pass** if the output exists at the exact path, has all required fields for each persona, traces claims to the BRD, distinguishes facts/inferences/validation questions, and does not claim validated research.
- **Fail** if personas are generic, materially duplicated, unsupported, missing required fields, inaccurately cited, or imply that the assistant makes underwriting decisions.

