# Report shape

You write the file `SKILL.md`'s Write-to block names. This file
owns the shape. Ids and statuses come from `rubric.md`.

Every section appears, in this order. Write `None.` in a section
with nothing to say. Do not add sections.

```markdown
# ClaimCheck — <short name of the source>

**Source:** <path, URL, or "pasted text">, read <date>. Unchanged.
**Central claim:** > <quoted sentence>
**Summary:** <clear failures: n · partial: n · passed: n · N/A: n>
**Score:** <points> / <applicable> (<n> N/A)

<two to four sentences: which dimensions carry the problem, and
whether a legitimate underlying concern survives.>

## Claims read

- **C-1** > <quote>
- **C-2** > <quote>

## Findings

### 1 · Mechanistic literacy — <status>[ · unverified]

> <quoted line>            ← or: Absent: <what is missing, where>

Why: <one to three sentences>
Contrast: <what the primary source or the physics says, with URL
or path; or "not checked in this run">
Next step: <the specific source to open and what to look for>

### 2 · Quantitative and comparative literacy — <status>
…
### 7 · Source and evidentiary literacy — <status>
…

## Next steps

1. <highest-value check> — <primary source, section or table>
2. …

## Unverified

- <figure or fact> — <why it could not be checked> — <where to check>

## A stronger version

<optional; only if a legitimate concern survives. One short
paragraph naming what the claim would need to pass the failed
dimensions. Not a rewrite of the source.>

## Sources opened

- <title> — <URL or path> — <what was taken from it>
```

Rules:

- Quote, or name the absence. A finding with neither is dropped.
- One status per dimension. No "mostly passed."
- `Contrast` holds checked facts only. If you did not open a
  source, write `not checked in this run` and put the item in
  **Unverified**.
- Show arithmetic for any derived number (for example a unit
  conversion or a percentage of a baseline). Name the inputs.
- Dates: give the year of every figure, the source's and yours.
- Do not end with a cheer or a ruling. End at **Sources opened**.
