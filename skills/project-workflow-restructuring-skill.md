---
name: project-workflow-restructuring
description: Inspect and reorganize an existing project into a specified workflow layout while preserving file contents, avoiding overwrites, and reporting missing or ambiguous mappings. Use when restructuring project folders; do not use to create missing deliverables or execute workflow phases.
---

# Project Workflow Restructuring Skill

## Purpose

Inspect an existing project, map its files to a requested standard workflow layout, and safely reorganize only existing files whose destinations are clear. Preserve source contents, expose gaps and conflicts, and verify the resulting structure. This skill does not create missing workflow, agent, gate, or orchestration artifacts and does not execute project phases.

## Inputs

- **Project root:** the current project directory unless the user supplies another explicit path.
- **Target layout:** the user's requested directory and file structure. Treat its hierarchy literally where clear; if indentation or placement is ambiguous, include competing interpretations in the plan and resolve them with the user before moving affected files.
- **Preservation requirements:** any files or categories the user explicitly says must remain intact. Always preserve existing file contents and avoid overwriting or deleting files.

## Preconditions

1. Confirm the project root and that it is the intended workspace.
2. Inspect the existing directory tree and list files before making changes. Include hidden files and relevant nested files; do not assume a file exists because another document references it.
3. Read relevant existing workflow definitions and key source/output files when needed to determine what they are and whether a destination is unambiguous.
4. Confirm that the requested target layout is sufficiently clear to map files. If hierarchy or a filename mapping is unclear, record the ambiguity rather than guessing.
5. Do not start a reorganization until the proposed change plan has been presented and reviewed as required below.

## Mapping and planning

1. Create an inventory with each existing path, file type or purpose where known, proposed destination, and status: `KEEP`, `MOVE`, `CONFLICT`, `UNMAPPED`, or `MISSING`.
2. Map a file only when its role and target path are unambiguous. A matching filename is not enough if the target has a different purpose or multiple plausible destinations.
3. Identify every required target directory or file that is absent. Report it as missing; do not create a placeholder, template, guessed content, or empty directory to make the tree look complete.
4. Identify existing files or directories not represented in the target layout. Preserve them in place unless the target mapping is clear and consistent with the user's preservation requirements. Report unlisted but intentionally preserved items.
5. Check every proposed destination before moving anything. If it already exists, do not overwrite, merge, delete, or rename either file automatically—even if the contents appear identical. Mark the mapping `CONFLICT` and leave both unchanged pending direction.
6. Prepare a proposed change plan showing source path, destination path, reason, content-preservation approach, and any risk or ambiguity. Include files that will remain unchanged, required items that are missing, and unresolved mappings.
7. Present the plan before applying moves or other structural changes. Do not apply a destructive or ambiguous change before the plan is reviewed and the user has authorized that change. If approval is absent or unclear, stop after the plan.

## Reorganization procedure

After the applicable plan is approved:

1. Recheck that source files still exist and destination paths remain available. If the tree has changed since planning, update the plan and obtain review for the changed or newly ambiguous mappings.
2. Move only existing files with approved, unambiguous mappings. Preserve file contents byte-for-byte; do not rewrite, normalize, or combine documents during relocation.
3. Do not delete files, overwrite destinations, create missing deliverables, fabricate a project brief, or create agents, gates, orchestrators, or phase runners that are absent.
4. Do not move a file merely to eliminate an unlisted directory. If it has no safe target, preserve it in place and report it as `UNMAPPED`.
5. If any move fails or a conflict appears, stop that mapping, leave the source intact, do not attempt a destructive workaround, and report the exact paths and issue. Continue only with other independently approved, unambiguous mappings.

## Verification

After approved moves:

- Re-list the project structure and compare it with the target layout.
- Confirm each moved file is at the approved destination, each source path is absent only because that file was moved, and file contents are unchanged.
- Confirm no existing destination was overwritten and no file was deleted or duplicated as part of the operation.
- Report required paths that remain missing, conflicts and unresolved mappings, and preserved items outside the target layout.
- Do not claim the target layout is complete when required files are missing or unresolved items remain.

## Reusable mapping guidance

Use the user's specified target layout for each project. The following are examples of safe reasoning, not fixed paths for every project:

- Existing files already at the required path are `KEEP`; do not move or rewrite them.
- Existing phase definitions may stay under an existing `workflow/` directory when the target includes that directory, even if the target list does not enumerate every phase-definition filename.
- Existing tests or reports omitted from a target template must be preserved. Leave them in place unless the user specifies a clear destination; report the unresolved mapping.
- A report may be moved into a review directory only when its purpose and the target's review-directory semantics clearly match. Do not infer this from the word “report” alone.
- A target filename that is absent is `MISSING`; do not invent its contents or claim it exists.

## Error handling and limitations

- If the project root cannot be inspected, stop and explain which path failed.
- If the target hierarchy, source-to-destination mapping, or destination ownership is ambiguous, do not move the affected files. Add the ambiguity to the plan and request direction before proceeding with it.
- If a source file is unreadable, preserve it in place and report that its purpose or contents could not be verified.
- If a destination conflict exists, preserve both source and destination and report the conflict; never resolve it by overwrite, merge, delete, or unrequested rename.
- If execution is not explicitly requested, or if the plan has not been reviewed as required, do not make structural changes.
- This skill reorganizes existing project files only. It does not generate missing content, validate the business correctness of project artifacts, or execute workflows.

## Completion summary

After verification, report:

- Files moved and their old and new paths.
- Files left unchanged, including files already at their target path and files intentionally preserved outside the target layout.
- Required target files or directories that are missing.
- Conflicts, ambiguous/unmapped files, and any moves not completed.
- Verification results and whether the target layout is complete or remains partial.

Do not claim success for a move or a complete layout without verifying the resulting paths and preserved contents.
