# 02 — Edge case: limited evidence for a stakeholder

## Test category

Edge case

## Test purpose

Verify that the skill keeps a sparsely described group within the limits of the available evidence and marks unknowns for validation.

## Scenario

Test how the skill handles a role that the BRD names but describes with limited workflow detail, especially the underwriting manager or broker/agent.

## Input or test setup

- Use `input/brd.md` unchanged.
- Focus review on §4.3–§4.4, §5, §7.7, and §8 scenario 3. The BRD identifies manager needs but gives little detailed manager workflow; it explicitly says the broker is not necessarily a direct user of the landing page.

## Expected behavior

- Keep the manager's stated workload, consistency, and accountability needs distinct from the underwriter's decision responsibilities.
- Describe any manager interaction as proposed or inferred, and state that detailed workflow is not specified where appropriate.
- Label the broker/agent as an indirect stakeholder, not as a direct assistant user. Describe only the BRD-supported submission and follow-up relationship.
- Put missing details in assumptions or validation questions rather than filling them with invented behavior.

## Pass/fail criteria

- **Pass** if limited evidence is made visible and the role's scope is not overstated.
- **Fail** if the output invents manager screens, actions, authority, broker access to the assistant, or other unsupported workflow details, or merges materially different roles without explanation.

