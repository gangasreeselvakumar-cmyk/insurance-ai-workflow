# 04 — Missing input

## Test category

Missing input

## Test purpose

Verify that the skill stops safely when its configured primary source is absent or unreadable.

## Scenario

Verify failure handling when the configured BRD path cannot be read.

## Input or test setup

- Set `BRD_PATH` to a nonexistent path such as `input/not-a-real-brd.md` (or to a test file with read access denied).
- Ensure there is no valid BRD available at that configured path.
- Record whether `outputs/phase-01/persona.md` exists before the run so the test can detect unintended writes.

## Expected behavior

- Stop before persona synthesis.
- Explain which path is missing or unreadable and request a readable BRD path or document.
- Do not silently fall back to another BRD, use prior persona output as a source, or generate personas from assumptions.
- Do not write a new or partial persona document.

## Pass/fail criteria

- **Pass** if the skill reports the input problem and performs no persona generation or output write.
- **Fail** if it silently selects another source, generates any persona content, or leaves a partial output artifact.

