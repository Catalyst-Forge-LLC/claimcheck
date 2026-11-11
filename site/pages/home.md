---
title: "Flag literacy gaps in claims and arguments."
description: "Does this claim hold up on basic literacy grounds? ClaimCheck gives your AI agent a seven-dimension review for an article, post, or argument. You get a report that quotes the claim, classifies each dimension, and names the primary source to check next. The source stays unchanged."
order: 0
---

<section class="value-hero" aria-label="ClaimCheck overview">
<div class="value-intro"><div class="value-headline">
<p class="value-kind">Review skill for your AI agent</p>
<h1>Flag literacy gaps in claims and arguments.</h1></div>
<div class="value-pitch"><p class="value-lede">Does this claim hold up on basic literacy grounds? ClaimCheck gives your AI agent a seven-dimension review for an article, post, or short argument. You get a report that quotes the claim, says which dimensions fail and why, and names the primary source to check next.</p>
<div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install ClaimCheck</a><a class="cta cta-secondary" href="#one-example-illustrative">See the water example</a></div>
<p class="value-limit">You receive a Markdown report. The source stays unchanged. Anything your agent could not check is marked unverified, not filled in.</p></div>
</div>
<figure class="value-proof worked-example" id="one-example-illustrative" tabindex="-1">
<figcaption>From a viral claim to the questions that settle it</figcaption>
<p class="example-context">A common sentiment about AI and water, and the kind of assertion that merits a more careful check.</p>
<section class="example-step" aria-labelledby="example-before">
<h2 id="example-before"><span>1 · The claim</span> Big number, no baseline</h2>
<blockquote><p>These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone’s homework or a bad poem.</p></blockquote>
</section>
<section class="example-step example-report" aria-labelledby="example-report">
<h2 id="example-report"><span>2 · ClaimCheck’s report</span> Two of seven findings</h2>
<p class="example-file">Excerpt from <code>data-center-water.claimcheck.md</code></p>
<p><strong>1 · Mechanistic literacy — clear failure</strong><br>Evaporative cooling does not boil or destroy water. It evaporates part of the circulating water to carry heat away; the vapor re-enters the hydrologic cycle. That is consumption from the local supply, not destruction.</p>
<p><strong>2 · Quantitative literacy — clear failure</strong><br>LBNL: U.S. data centers directly consumed about 66 billion liters (≈ 17.4 billion gallons) in 2023. USGS: U.S. irrigation consumed 73.2 billion gallons <em>per day</em> in 2015. Share ≈ 0.07%.</p>
</section>
<section class="example-step example-after" aria-labelledby="example-after">
<h2 id="example-after"><span>3 · What survives</span> The local question</h2>
<blockquote><p>Boundary — partial. “Out where I live the reservoir is low, and a new data center just went in.” That is a real, checkable concern. Next step: the facility’s water permit, its cooling design, and the reservoir’s drought data.</p></blockquote>
<p class="example-payoff">Score 0.5 / 7. The report says which parts fail, which concern survives, and what to read to settle it.</p>
</section>
<p class="value-note">Sample report on an illustrative source, not a recorded tool run. Every figure is dated and sourced in the full report.</p>
<a class="example-download" href="/samples/data-center-water.claimcheck.md">Read the complete sample report →</a>
</figure>
</section>

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | An article, post, assertion, thread, or short argument. A file, a URL, or pasted text |
| Writes | `<name>.claimcheck.md` next to a file, or `claimcheck.md` for a URL or pasted text. Chat only, if you ask |
| Changes | Nothing. The source is never edited |

| Status | Means | Points |
| --- | --- | --- |
| **clear failure** | The claim commits the dimension’s failure, and it changes the conclusion | 0 |
| **partial** | Half right, or right in one place and wrong in another | 0.5 |
| **passed** | A reader could judge the claim on this axis | 1 |
| **N/A** | The dimension does not apply | left out |

The score is a summary line. Two claims at 3.5 can fail for different reasons, so the findings come first.

## The seven dimensions

1. **Mechanistic literacy.** Does the claim correctly model the physical/chemical/operational process? Fails when withdrawal, consumption, recirculation, and destruction are treated as identical.
2. **Quantitative and comparative literacy.** Does it locate magnitude relative to relevant baselines? Fails on absolute numbers without denominators, or selective focus that ignores larger uses.
3. **Scale and boundary literacy.** Does it distinguish local from national or global, direct from indirect? Fails when local stress is flattened into national totals, or the reverse.
4. **Trade-off and substitution literacy.** Does it recognize that reducing one input increases another? Fails when one resource is treated as independently bad, with no substitute named.
5. **Output and value accounting.** Does it count what the resource use produces? Fails when use is called “waste” only because the product is non-physical.
6. **Recency and updating literacy.** Does it reflect current data, technology, and revisions? Fails on superseded estimates.
7. **Source and evidentiary literacy.** Does it prefer primary measurements over secondary amplification? Fails when a single comparison is promoted over systematic reports.

## A health claim, same seven questions (illustrative)

A common sentiment about processed meat and cancer. The dimensions are worded for resource claims. They read the same way on a risk claim: what the category measures, what the baseline is, what the swap changes.

```markdown
# ClaimCheck — "Bacon is the new cigarettes"

**Summary:** clear failures: 2 · partial: 4 · passed: 0 · N/A: 1
**Score:** 2 / 6 (1 N/A)

### 1 · Mechanistic literacy — clear failure

> "in the same cancer category as cigarettes and asbestos" · "A ham sandwich is as dangerous as smoking."

Why: An IARC group states how strong the evidence is that something
can cause cancer. It does not state how much cancer it causes. IARC
(2015): "this does NOT mean that they are all equally dangerous."

### 2 · Quantitative and comparative literacy — clear failure

> "raises your risk of bowel cancer by 18 percent" · "nearly one in five people who eat the stuff will get cancer from it"

Why: 18% is a relative increase, not one in five. On the U.S.
lifetime baseline of about 3.9% (NCI SEER, 2021–2023 data),
3.9% × 1.18 ≈ 4.6%.
```

The finding underneath survives: processed meat does cause colorectal cancer (IARC, 2015), and the risk rises with the amount eaten. [Full report](/samples/processed-meat.claimcheck.md).

## A claim that mostly holds (illustrative)

A short post advising LED swaps, citing DOE.

```markdown
# ClaimCheck — swap the last incandescent bulbs

**Summary:** clear failures: 0 · partial: 2 · passed: 5 · N/A: 0
**Score:** 6 / 7

### 6 · Recency and updating literacy — partial

> "lighting is about 15% of an average home's electricity"

Why: The figure is from a 2010 DOE guide. EIA's 2020 survey puts
lighting near 6% of home electricity. The advice survives.
```

No invented faults. Five dimensions pass and say so. [Full report](/samples/led-lighting.claimcheck.md).

## When to use which

| You have | Use |
| --- | --- |
| A claim, post, or argument: does it hold up? | **ClaimCheck** |
| Prose that reads padded or off-register | [Smell Check](https://smellcheck.dev) |
| A plan or decision still on the table | [TemperPass](https://temperpass.dev) |
| A finished README, skill, or site: can a newcomer use it? | [Cold-eye](https://coldeye.dev) |
| Files after edits: what went stale? | [Detangler](https://detangler.dev) |

A loud post with sound numbers passes ClaimCheck and still deserves a Smell Check. A calm post with no denominator fails ClaimCheck and passes Smell Check.

ClaimCheck is a literacy review. It does not rule a claim true or false, and it does not rewrite it.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
