<p align="center">
  <img src="https://claimcheck.dev/logo.png" alt="ClaimCheck" width="128" />
</p>

# ClaimCheck

An installable skill for AI agents.

Flag literacy gaps in claims and arguments.

Does this claim hold up on basic literacy grounds? ClaimCheck gives
your agent a seven-dimension review for an article, post, assertion,
or short argument. The agent writes a report that quotes the claim,
classifies each dimension as **clear failure**, **partial**,
**passed**, or **N/A**, explains why, and names the primary source to
check next. The source does not change. Anything the agent could not
check is marked `unverified` instead of filled in.

**Get started:** pick the agent, install the skill, then run the
sample claim at
[claimcheck.dev/docs/install](https://claimcheck.dev/docs/install).

- [Cursor](https://claimcheck.dev/docs/install#cursor)
- [Claude Code](https://claimcheck.dev/docs/install#claude-code)

Claude.ai without project files is not a supported first-use route.

**Site:** [claimcheck.dev](https://claimcheck.dev)

## The seven dimensions

| # | Dimension | Question | Named failure |
| --- | --- | --- | --- |
| 1 | Mechanistic literacy | Does the claim describe correctly what the process does, or what the measure measures? | Treating different things as one: use and loss, hazard and risk, reported and occurred. |
| 2 | Quantitative and comparative literacy | Does it locate magnitude relative to relevant baselines? | Absolute numbers without denominators; selective focus ignoring larger uses. |
| 3 | Scale and boundary literacy | Distinguishes local vs national/global, direct vs indirect, correct system boundaries? | Flattening local stress with national totals or vice versa. |
| 4 | Trade-off and substitution literacy | Does it say what would happen instead? | Calling for a cut or a remedy without naming the substitute or its cost. |
| 5 | Output and value accounting | Does it count what the thing delivers? | Counting the cost and ignoring the benefit, or calling use waste because the product is intangible. |
| 6 | Recency and updating literacy | Reflects current data, technology, revisions to earlier figures? | Reliance on superseded estimates. |
| 7 | Source and evidentiary literacy | Prefers primary measurements over secondary amplification? | Single comparisons elevated over systematic reports. |

The wording is the rubric's, word for word. It fits any claim that
rests on numbers or measurements: a resource, a risk, a statistic.

Every finding names the claims it rests on. A report leads with a
tally ("5 clear failures, 2 partial"). Inside the report file a
score line follows: passed = 1, partial = 0.5, clear failure = 0,
N/A left out of the denominator, and the number of `unverified`
findings beside it. The tally and the score are a summary. The
explanations are the product. ClaimCheck does not rule a claim true
or false.

## Worked example: "AI is drinking our water"

A common sentiment about AI and water, and the kind of assertion
that merits a more careful check:

> These AI data centers are wasting billions of gallons of water a
> year — water that is gone forever, boiled off so a machine can
> write someone's homework or a bad poem.

**ClaimCheck's report, excerpt:**

```markdown
### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off" · "poured down the drain"

Why: Evaporative cooling does not boil or destroy water. It evaporates
part of the circulating water to carry heat away; the vapor re-enters
the hydrologic cycle. That is consumption from the local supply, not
destruction. "Down the drain" is discharge — withdrawn and returned.

### 2 · Quantitative and comparative literacy — clear failure

> "billions of gallons of water a year"

Contrast: LBNL puts U.S. data-center direct water consumption at
66 billion liters (≈ 17.4 billion gallons) in 2023. Against USGS's
2020 estimates of consumptive use in the lower 48 states, that is
≈ 0.06% of crop irrigation's, ≈ 1.1% of public supply's, and ≈ 2.0%
of thermoelectric power's. Against water applied on U.S. golf
facilities in 2020 (GCSAA), ≈ 3.2%. The share depends on the
comparison, so the report shows the range.
```

Five clear failures and two partials. One partial is boundary: the
post's local reservoir is a real, checkable concern, and the report
says what a stronger claim would need to settle it. The other is
the remedy, which names no substitute.
This is a sample report on an illustrative source, not a recorded
run. [Complete sample report](https://claimcheck.dev/samples/data-center-water.claimcheck.md) ·
[sources and arithmetic](https://github.com/Catalyst-Forge-LLC/claimcheck/blob/main/docs/sources.md).

A second sample, [processed-meat.claimcheck.md](https://claimcheck.dev/samples/processed-meat.claimcheck.md),
is a health-risk claim: "A ham sandwich is as dangerous as smoking."
Two clear failures and five partials. The underlying finding survives
(IARC, 2015: processed meat causes colorectal cancer); the post's
reading of how large the risk is does not.

A third, [crime-statistics.claimcheck.md](https://claimcheck.dev/samples/crime-statistics.claimcheck.md),
is a claim about public statistics: "It is the worst it has ever
been in this country." Two clear failures, four partials, and one
N/A. The count it
quotes is true (FBI, 2025) and well below 1991; the rise in the
writer's own city survives as a real, checkable concern.

A fourth, [led-lighting.claimcheck.md](https://claimcheck.dev/samples/led-lighting.claimcheck.md),
passes five dimensions and is partial on two: a sound claim with
one superseded figure and one uncited line.

The subjects differ on purpose. ClaimCheck asks the same seven
questions of any claim, whichever way it leans.

## First run

Save [led-lighting.md](https://claimcheck.dev/samples/led-lighting.md),
then ask:

> Use ClaimCheck on `led-lighting.md`. Follow the installed ClaimCheck
> skill. Write the report. Leave the source unchanged.

The report lands in `led-lighting.claimcheck.md`. The source should
be unchanged. Recency should come back **partial**: the "about 15%"
household lighting share is from a 2010 DOE guide, and EIA's 2020
survey puts it near 6%. Wording varies by model. A report alone does
not prove the skill loaded: check the agent's skill list, or ask it
to quote the first heading of `SKILL.md`.

A writable workspace is required. Web access is optional: without
it, findings that need a primary source are marked `unverified`.
npm package `getclaimcheck`, skill folder `claimcheck`.

## When to use which

| You have | Ask | Use |
| --- | --- | --- |
| A claim, post, or argument | Does it hold up: process, magnitude, boundary, trade-offs, output, recency, sources? | **ClaimCheck** |
| Prose that reads padded, loud, or off-register | How is it phrased? | [Smell Check](https://smellcheck.dev) |
| A plan or decision still on the table | What am I assuming? What would break it? | [TemperPass](https://temperpass.dev) |
| A finished README, skill, or site | Can a newcomer use it? | [Cold-eye](https://coldeye.dev) |
| Files after a round of edits | What broke or went stale? | [Detangler](https://detangler.dev) |

Limited overlap. A loud post with sound numbers passes ClaimCheck
and still deserves a Smell Check. A calm post with no denominator
fails ClaimCheck and passes Smell Check.

## Other installation methods

npm supplies the skill files. It does not register the skill with
the agent.

```bash
pnpm add -D getclaimcheck
```

Copy `node_modules/getclaimcheck/skills/claimcheck/` into the same
destination the [Get started](https://claimcheck.dev/docs/install)
page names for your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## License

MIT. Copyright Catalyst Forge LLC.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
