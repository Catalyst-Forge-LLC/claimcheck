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

| # | Dimension | Question | Typical failure |
| --- | --- | --- | --- |
| 1 | Mechanistic literacy | Does the claim correctly model the physical/chemical/operational process? | Treating withdrawal/consumption/recirculation/destruction as identical. |
| 2 | Quantitative and comparative literacy | Does it locate magnitude relative to relevant baselines? | Absolute numbers without denominators; selective focus ignoring larger uses. |
| 3 | Scale and boundary literacy | Distinguishes local vs national/global, direct vs indirect, correct system boundaries? | Flattening local stress with national totals or vice versa. |
| 4 | Trade-off and substitution literacy | Recognizes reducing one input increases another? | Treating one resource as independently bad without substitutes. |
| 5 | Output and value accounting | Incorporates what the resource use produces? | Labeling use "waste" solely because product is non-physical. |
| 6 | Recency and updating literacy | Reflects current data, technology, revisions to earlier figures? | Reliance on superseded estimates. |
| 7 | Source and evidentiary literacy | Prefers primary measurements over secondary amplification? | Single comparisons elevated over systematic reports. |

Score: passed = 1, partial = 0.5, clear failure = 0, N/A left out of
the denominator. The score is a summary line. The explanations are
the product.

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
66 billion liters (≈ 17.4 billion gallons) in 2023. USGS puts U.S.
irrigation consumptive use at 73.2 billion gallons per day in 2015
(≈ 26,700 billion a year). Share ≈ 0.07%.
```

Score 0.5 / 7: six clear failures and one partial. The partial is
boundary: the post's local reservoir is a real, checkable concern,
and the report says what a stronger claim would need to settle it.
This is a sample report on an illustrative source, not a recorded
run. [Complete sample report](https://claimcheck.dev/samples/data-center-water.claimcheck.md) ·
[sources and arithmetic](https://github.com/Catalyst-Forge-LLC/claimcheck/blob/main/docs/sources.md).

A second sample, [led-lighting.claimcheck.md](https://claimcheck.dev/samples/led-lighting.claimcheck.md),
scores 6 / 7: a sound claim with one superseded figure.

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
Package `claimcheck`, skill folder `claimcheck`.

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
pnpm add -D claimcheck
```

Copy `node_modules/claimcheck/skills/claimcheck/` into the same
destination the [Get started](https://claimcheck.dev/docs/install)
page names for your agent.

Updating the npm dependency does not refresh a folder you already
copied. Copy again after you bump the package.

## License

MIT. Copyright Catalyst Forge LLC.

[See the rest of the Catalyst Forge shelf.](https://catalystforge.com/tools/)
