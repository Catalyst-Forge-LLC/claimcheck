# Rubric

This file owns the seven dimensions, the four statuses, the unit of
review, and the scoring rule. `SKILL.md` points here. `report.md`
uses the ids and status words defined here. Public pages that
restate the table quote it word for word.

## Scope

ClaimCheck reviews claims that rest on numbers or measurements, on
any subject: a resource, a risk, a statistic, a cost. It does not
fit arguments that rest on values or law alone. If the source has
no claim of that kind, say so and stop.

It is built for a post or short argument, up to about 1,500 words.
For a longer piece, review the section that carries the central
claim and name that section in the report's Source line.

## The seven dimensions

Run all seven, in this order. The question and the named failure
are fixed text: quote them as written.

| # | Id | Dimension | Question | Named failure |
| --- | --- | --- | --- | --- |
| 1 | `mechanism` | Mechanistic literacy | Does the claim describe correctly what the process does, or what the measure measures? | Treating different things as one: use and loss, hazard and risk, reported and occurred. |
| 2 | `magnitude` | Quantitative and comparative literacy | Does it locate magnitude relative to relevant baselines? | Absolute numbers without denominators; selective focus ignoring larger uses. |
| 3 | `boundary` | Scale and boundary literacy | Distinguishes local vs national/global, direct vs indirect, correct system boundaries? | Flattening local stress with national totals or vice versa. |
| 4 | `tradeoff` | Trade-off and substitution literacy | Does it say what would happen instead? | Calling for a cut or a remedy without naming the substitute or its cost. |
| 5 | `output` | Output and value accounting | Does it count what the thing delivers? | Counting the cost and ignoring the benefit, or calling use waste because the product is intangible. |
| 6 | `recency` | Recency and updating literacy | Reflects current data, technology, revisions to earlier figures? | Reliance on superseded estimates. |
| 7 | `evidence` | Source and evidentiary literacy | Prefers primary measurements over secondary amplification? | Single comparisons elevated over systematic reports. |

### What to look for

**1 · Mechanism.** Name the process or the measure the claim leans
on, then ask what it does or what it counts. For a resource: is it
borrowed and returned (withdrawal), lost to the local system
(consumption, for water usually evaporation), cycled in a loop
(recirculation), or transformed so it cannot be used again
(destruction)? For a classification: does it rank how strong the
evidence is (hazard) or how large the effect is (risk)? For a
statistic: does it count what happened, or what was reported,
recorded, or surveyed? A claim that treats two of these as one
thing fails here. Verbs that imply the wrong one ("destroys" for a
process that relocates, "as dangerous as" for a shared evidence
category) are a mechanism failure, not a word choice.

**2 · Magnitude.** Every absolute number needs a denominator the
reader can hold: a rate, a share of a total, per unit of output, or
a comparison to a named larger and smaller case. A relative change
needs the baseline it applies to. Check whether the comparison set
is chosen fairly: a claim that singles out one case while omitting
larger ones of the same kind fails here, and so does a claim that
shows only the comparison that flatters it. Big-sounding units
("billions of gallons," "a million crimes") with no baseline are
the common case.

**3 · Boundary.** Ask which boundary each number uses: site or
supply chain, direct or indirect, one facility, one city, one
watershed, one country, the world, one year or cumulative, one
person or a population. Two numbers with different boundaries
cannot be compared or added without saying so. Fails in both
directions: a national average used to dismiss a local problem, and
a local problem used to describe a national total.

**4 · Trade-off.** Ask what would happen instead. Cutting one thing
usually raises another: less water, more electricity; one food
dropped, another eaten; a remedy adopted, its cost paid from
something else. A claim that calls for a cut or a remedy must at
least name the substitute or the cost, or it is arguing for a swap
it has not priced. Take no position on the remedy. Say whether it
is priced.

**5 · Output.** Ask what the thing the claim objects to delivers,
and whether the claim counts it. "Waste" means use with no useful
product. A claim may argue that the benefit is not worth the cost.
That is a legitimate value judgment, but the claim must name the
benefit to make it. Counting only the cost, or calling use "waste"
because the product is digital, financial, or otherwise
intangible, is the failure. The cost of a remedy the claim
proposes belongs to dimension 4, not here.

**6 · Recency.** Find the date of every figure. Ask whether a newer
edition, revision, or measurement exists, and whether the thing the
number describes has changed. A per-unit estimate from an earlier
generation of equipment, a projection that a later report replaced,
or a trend that has since reversed is superseded. Old data is not
wrong by age alone: a figure that is still the latest available
passes if the claim dates it.

**7 · Evidence.** Trace each figure to where it was measured.
Prefer agency datasets, systematic reports, and peer-reviewed
studies with stated methods over press coverage, viral graphics,
feeds, and single anecdotes. One striking comparison promoted over
the systematic report it came from, or used without its stated
scope, is the failure. A claim with no source at all fails here
unless it is trivially checkable.

## Unit of review

A source usually holds several claims. List them (C-1, C-2, …) and
pick the **central claim**: the one the rest supports.

- A **supporting claim** is one the central claim leans on.
- A **side claim** is one the central claim does not depend on. A
  remedy ("so we should…"), an aside, or a personal choice is
  usually a side claim.

Each dimension gets one status for the source. Every finding names
the claim ids it rests on.

A finding that rests only on side claims is capped at `partial`,
however clear the fault. Write `(side claim)` after the ids. The
cap keeps a throwaway line from costing as much as a fault in the
central claim.

One flaw may count under more than one dimension, for example a
viral figure that is both out of date and unsourced. Each finding
then needs its own reason. Do not repeat a sentence across
dimensions.

## Statuses

| Status | Use when | Score |
| --- | --- | --- |
| `clear failure` | The claim commits the dimension's failure in a way that changes what a reader would conclude. Quote it. | 0 |
| `partial` | The claim gets the distinction half right, right in one place and wrong in another, or right but unstated where it matters. Also: an error that does not change the conclusion, and a fault that rests only on a side claim. Quote both sides, or quote and name the omission. | 0.5 |
| `passed` | The claim handles the dimension well enough that a reader could judge it on this axis. Say what it did. | 1 |
| `N/A` | The claim never touches the topic this dimension covers. Say why in one line. | excluded |

### When the claim leaves something out

An omission can land on three statuses. Decide in this order:

1. The central claim's conclusion depends on the missing
   distinction: `clear failure`.
2. The claim raises the topic and leaves the distinction out, and
   the conclusion would stand either way: `partial`.
3. The claim never touches the topic: `N/A`.

Example: a post that calls for a cut and names no substitute raises
the topic of dimension 4. A post that only describes a problem and
proposes nothing never touches it.

### The `unverified` flag

Add the flag `unverified` to any finding whose classification
depends on a figure you could not check against a primary source
in this run. The status stands and scores as written. The flag
tells the reader what to check first, and the score line counts
the flagged findings.

## Scoring

- `passed` = 1, `partial` = 0.5, `clear failure` = 0.
- `N/A` dimensions are excluded from the denominator.
- Write the tally first: `clear failures: n · partial: n · passed:
  n · N/A: n`. Then the score as `<points> / <applicable>`.
- After the score, in one pair of parentheses, count the `N/A`
  dimensions and the `unverified` findings when there are any:
  `4.5 / 6 (1 N/A)`, `6 / 7 (1 unverified)`,
  `2 / 6 (1 N/A, 1 unverified)`.
- Seven applicable dimensions is the full scale: `0–7`.

The score is a summary line, not a verdict and not a grade. Two
claims at 3.5 can fail for different reasons, and a score out of 6
is not on the same scale as a score out of 7. Readers should go to
the findings, so the report puts the tally before the score and
never ranks claims by score alone. Statuses can vary from one
model or run to the next; the quoted evidence is what to check.

## Ranking inside the report

Dimensions are always reported in order 1–7. The **Next steps**
section ranks the recommended checks: first the check that would
most change the conclusion, then the cheapest check, then the
rest.
