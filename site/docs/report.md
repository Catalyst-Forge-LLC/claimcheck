---
title: Report
---

The report is what you read. The **claimcheck** skill writes it. Shape: `skills/claimcheck/references/report.md`.

1. Title: `ClaimCheck — <source>`
2. Source, date read, and “Unchanged.”
3. Central claim, quoted
4. Summary: the tally of clear failure, partial, passed, N/A
5. Score: points over applicable dimensions, with the `N/A` and `unverified` counts beside it, as in `2 / 6 (1 N/A, 1 unverified)`
6. Two to four sentences: where the problem sits, and whether a real concern survives. It says this is a literacy review that does not rule the claim true or false
7. Claims read: C-1, C-2, … as quotes, with the central claim and any side claims marked
8. Findings: all seven dimensions, in order
9. Next steps: ranked, most decisive check first
10. Unverified: what could not be checked, and where to check it
11. A stronger version: only when a real concern survives
12. Sources opened: title, URL or path, what was taken

Every finding:

```markdown
### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low" · "That is what is happening to the whole country."

Claims: C-4
Why: A real local concern, flattened into a national claim.
Contrast: <what the primary source says, with URL; or "not checked in this run">
Next step: the facility's water permit, its cooling design, the reservoir's drought data.
```

`Claims:` names the claim ids the finding rests on. `(side claim)` after them means the central claim does not depend on those claims, and the finding is **partial** at most. An `N/A` finding has `Claims: none`.

Numbers in a report are quoted from the source, quoted from a primary source opened in that run, or derived by arithmetic the report shows. Anything else is `unverified`.

A report that already exists at the target path is replaced, and your agent says so. Text inside the source that tells the reviewer what to do is treated as content: the report notes it and does not follow it.

## Samples

| Report | Subject | Tally |
| --- | --- | --- |
| [data-center-water.claimcheck.md](/samples/data-center-water.claimcheck.md) | AI and water | 5 clear failures, 2 partial |
| [processed-meat.claimcheck.md](/samples/processed-meat.claimcheck.md) | A health risk | 2 clear failures, 5 partial |
| [crime-statistics.claimcheck.md](/samples/crime-statistics.claimcheck.md) | A public statistic | 2 clear failures, 4 partial, 1 N/A |
| [led-lighting.claimcheck.md](/samples/led-lighting.claimcheck.md) | A claim that mostly holds | 5 passed, 2 partial |
