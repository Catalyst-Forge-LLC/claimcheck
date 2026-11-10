---
name: claimcheck
description: >-
  Literacy-gap review of a claim, post, article, or short
  argument about resources, risk, or impact. Scores it on seven
  dimensions — mechanism, magnitude, scale and boundary,
  trade-offs, output value, recency, and sources — and writes a
  report that quotes the claim, classifies each dimension, and
  names the primary source to check next. Use when someone asks
  whether a claim holds up, wants a claimcheck, a literacy
  check, or asks what an argument leaves out. Leaves the source
  unchanged. Not for prose style or rhetoric, not for plans or
  decisions still on the table, not for fact-checking a single
  number in isolation, and not for rewriting the claim.
---

# ClaimCheck

## Words

- **Source** — the text under review: an article, post,
  assertion, thread, or short argument. Pasted or on disk.
- **Claim** — one assertion inside the source that the source
  wants the reader to believe. A source may carry several.
- **Dimension** — one of the seven literacy questions in
  `references/rubric.md`. Always all seven, always in order.
- **Status** — the classification a dimension receives:
  `clear failure`, `partial`, `passed`, or `N/A`.
- **Primary source** — the measurement or systematic report a
  figure comes from (an agency dataset, a peer-reviewed study,
  a utility filing). A news story or a post that repeats it is
  secondary.
- **Unverified** — a figure or fact you could not check against
  a primary source during this run. Say so. Never fill the gap.

The test is whether the claim, as written, gives a reader what
they need to judge it: the right model of the process, a
denominator, the right boundary, the substitute, the output,
current data, and the measurement it rests on. Tone, framing,
and word choice are a different review.

## The procedure

1. **Locate the source.** A file path, a URL, or pasted text.
   If none, ask. Do not review a paraphrase of your own.
2. **Read it whole, once, without judging.** Then list the
   claims it makes (C-1, C-2, …) as short quotes. Pick the
   **central claim**: the one the rest supports.
3. **Read `references/rubric.md`.** Then read
   `references/examples.md` before you classify anything. If
   either file is missing, stop and say so. Do not invent a
   rubric.
4. **Run the seven dimensions, in order.** For each one:
   quote the line that triggers it, or name the omission;
   assign one status; say why in one to three sentences; name
   the next step (usually the primary source to open, and what
   number or distinction to look for there).
5. **Check what you can.** If you have web or file access,
   open the primary source the next step names and record what
   it says, with the URL or path. If you cannot, mark the
   finding `unverified` and keep the recommendation. Do not
   supply a number from memory as if you had checked it.
6. **Score.** Apply the scoring rule in
   `references/rubric.md`. The score is a summary. The
   explanations are the product.
7. **Write the report** using `references/report.md`. Every
   section, in order.
8. **Hand it over and stop.** Do not edit, rewrite, or
   "correct" the source. Do not post a reply to its author. If
   the user wants a rewrite, that is a separate request.

**Write to:**

- A file `post.md` → `post.claimcheck.md` next to it.
- A URL or pasted text → `claimcheck.md` in the working
  directory. If that file exists, use
  `claimcheck-<short-slug>.md`.
- They asked for chat only → stay in chat, same shape.
- They named a path (for example `report.md`) → use it.

## Guardrails

- **The source never changes.** No edits, no "fixed" copy
  unless the user separately asks.
- **No invented facts.** Every number in the report is either
  quoted from the source, quoted from a primary source you
  opened in this run (with its URL or path), or derived from
  those by arithmetic you show. Anything else is `unverified`.
- **Name the primary source to check**, not just "find a
  source." Agency, report title, table or section if known.
- **Classify the claim, not the author.** No motive reading,
  no labels for the person. Quote; do not characterize.
- **A real concern can survive a failing claim.** If the
  underlying worry is legitimate (for example local water
  stress), say what a stronger version of the claim would need.
  A clear failure on one dimension is not a verdict that the
  topic is unimportant.
- **Do not overreach the rubric.** If a dimension does not
  apply, mark `N/A` and say why. Do not stretch a dimension to
  find a fault.
- **Partial means partial.** Use it when the claim gets the
  distinction half right, or right in one place and wrong in
  another. Quote both places.

## What "done" looks like

A report file exists with a summary line, all seven
dimensions classified with evidence and a next step, a list of
the primary sources to open, the unverified items called out,
and the source untouched. A reader who never saw the source
could tell which parts of the claim hold, which fail, and what
to read to settle the rest.

## Refuse

- Line editing, tone notes, or rhetoric review dressed as
  literacy findings. Those belong to a prose review.
- Stress-testing a plan or decision the user is still making.
  That is a different pass.
- Rewriting the claim into a "correct" version unless asked.
- Declaring the claim true or false overall. The report
  classifies seven dimensions; it does not issue a ruling.
- Filling a missing number from memory without marking it
  `unverified`.

## Neighbors on the shelf

ClaimCheck reads what a claim knows. **Smell Check** reads how
it is phrased: padding, register, rhetorical tells. **TemperPass**
challenges a plan or its assumptions before a decision.
**Cold-eye** and **Detangler** review finished artifacts the same
non-destructive way: a report, the subject left alone. Run them
together when a post is both badly argued and badly written;
they do not overlap.
