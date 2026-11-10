# Rubric

This file owns the seven dimensions, the four statuses, and the
scoring rule. `SKILL.md` points here. `report.md` uses the ids
and status words defined here. Do not restate them elsewhere.

## The seven dimensions

Run all seven, in this order. The question and the named
failure are fixed text: quote them as written.

| # | Id | Dimension | Question | Typical failure |
| --- | --- | --- | --- | --- |
| 1 | `mechanism` | Mechanistic literacy | Does the claim correctly model the physical/chemical/operational process? | Treating withdrawal/consumption/recirculation/destruction as identical. |
| 2 | `magnitude` | Quantitative and comparative literacy | Does it locate magnitude relative to relevant baselines? | Absolute numbers without denominators; selective focus ignoring larger uses. |
| 3 | `boundary` | Scale and boundary literacy | Distinguishes local vs national/global, direct vs indirect, correct system boundaries? | Flattening local stress with national totals or vice versa. |
| 4 | `tradeoff` | Trade-off and substitution literacy | Recognizes reducing one input increases another? | Treating one resource as independently bad without substitutes. |
| 5 | `output` | Output and value accounting | Incorporates what the resource use produces? | Labeling use "waste" solely because product is non-physical. |
| 6 | `recency` | Recency and updating literacy | Reflects current data, technology, revisions to earlier figures? | Reliance on superseded estimates. |
| 7 | `evidence` | Source and evidentiary literacy | Prefers primary measurements over secondary amplification? | Single comparisons elevated over systematic reports. |

### What to look for

**1 · Mechanism.** Name the process the claim describes (cooling,
combustion, irrigation, mining, recycling). Ask what physically
happens to the resource: is it borrowed and returned
(withdrawal), lost to the local system (consumption, for water
usually evaporation), cycled in a loop (recirculation), or
transformed so it cannot be used again (destruction)? A claim
that says "uses," "drinks," "burns," or "destroys" must match the
process. Verbs that imply destruction for a process that only
relocates the resource are a mechanism failure, not a word choice.

**2 · Magnitude.** Every absolute number needs a denominator the
reader can hold: share of a total, per unit of output, or a
comparison to a named larger and smaller use. Check whether the
comparison set is chosen fairly: a claim that singles out one
user while omitting larger users of the same resource in the same
place fails here. Big-sounding units ("billions of gallons") with
no baseline are the common case.

**3 · Boundary.** Ask which boundary each number uses: site or
supply chain, direct or indirect, one facility, one watershed,
one country, the world, one year or cumulative. Two numbers with
different boundaries cannot be compared or added without saying
so. Fails in both directions: national averages used to dismiss a
local shortage, and a local shortage used to describe a national
total.

**4 · Trade-off.** Ask what the alternative uses. Reducing one
input (water, land, fuel, labor) often raises another
(electricity, emissions, cost, materials). A claim that a
resource use is bad must at least acknowledge the substitute, or
it is arguing for a swap it has not priced.

**5 · Output.** Ask what the resource use produces and whether the
claim counts it. "Waste" means use with no useful product. A
claim may argue that the output is not worth the input — that is
a legitimate value judgment — but it must name the output to make
the argument. Calling use "waste" because the product is digital,
financial, or otherwise non-physical is the failure.

**6 · Recency.** Find the date of every figure. Ask whether a
newer edition, revision, or measurement exists, and whether the
technology the number describes has changed. A per-unit estimate
from an earlier generation of equipment, or a projection that a
later report replaced, is superseded. Old data is not wrong by
age alone: a figure that is still the latest available passes if
the claim dates it.

**7 · Evidence.** Trace each figure to where it was measured.
Prefer agency datasets, systematic reports, and peer-reviewed
studies with stated methods over press coverage, viral graphics,
and single anecdotes. One striking comparison ("a bottle of water
per…") promoted over the systematic report it came from, or used
without its stated scope, is the failure. A claim with no source
at all fails here unless it is trivially checkable.

## Statuses

| Status | Use when | Score |
| --- | --- | --- |
| `clear failure` | The claim commits the dimension's failure in a way that changes what a reader would conclude. Quote it. | 0 |
| `partial` | The claim gets the distinction half right, right in one place and wrong in another, or right but unstated where it matters. Quote both sides, or quote and name the omission. | 0.5 |
| `passed` | The claim handles the dimension well enough that a reader could judge it on this axis. Say what it did. | 1 |
| `N/A` | The dimension does not apply to this claim (for example no resource use, so no trade-off). Say why in one line. | excluded |

An omission can be a `clear failure`. Absence counts when the
missing distinction is what the claim's conclusion depends on.

Add the flag `unverified` to any finding whose classification
depends on a figure you could not check against a primary source
in this run. The status stands; the flag tells the reader what to
check first.

## Scoring

- `passed` = 1, `partial` = 0.5, `clear failure` = 0.
- `N/A` dimensions are excluded from the denominator.
- Write the score as `<points> / <applicable>` and, when any
  dimension is `N/A`, say how many: `4.5 / 6 (1 N/A)`.
- Seven applicable dimensions is the full scale: `0–7`.

The score is a summary line, not a verdict. Two claims at 3.5
can fail for different reasons. Readers should go to the
findings, so the report puts the score last in the summary
block and never ranks claims by score alone.

## Ranking inside the report

Dimensions are always reported in order 1–7. The **Next steps**
section ranks the recommended checks: first the check that would
most change the conclusion, then the cheapest check, then the
rest.
