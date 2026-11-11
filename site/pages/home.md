---
title: "ClaimCheck"
description: "ClaimCheck gives your AI agent seven questions to ask of a post or short argument that rests on numbers. You get a report that quotes the claim, shows what it leaves out, and names the primary source to check next. The source stays unchanged."
order: 0
---

<section class="value-hero" aria-label="ClaimCheck overview">
<div class="value-intro"><div class="value-headline">
<p class="value-kind">Review skill for your AI agent</p>
<h1>Find what a claim leaves out.</h1></div>
<div class="value-pitch"><p class="value-lede">ClaimCheck gives your AI agent seven questions to ask of a post or short argument that rests on numbers: what the number measures, what it is compared with, where its boundary sits, and four more. You get a report that quotes the claim, shows which questions it answers and which it skips, and names the primary source to check next.</p>
<div class="cta-row"><a class="cta cta-primary" href="/docs/install">Install ClaimCheck</a><a class="cta cta-secondary" href="#one-example-illustrative">See the water example</a></div>
<p class="value-limit">You receive a Markdown report. The source stays unchanged. The report does not rule the claim true or false. Anything your agent could not check is flagged unverified, not filled in.</p></div>
</div>
<figure class="value-proof worked-example" id="one-example-illustrative" tabindex="-1">
<figcaption>From a viral claim to the questions that settle it</figcaption>
<p class="example-context">A common sentiment about AI and water, and the kind of assertion that merits a more careful check.</p>
<section class="example-step" aria-labelledby="example-before">
<h2 id="example-before"><span>The claim</span> Big number, no baseline</h2>
<blockquote><p>These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone’s homework or a bad poem.</p></blockquote>
</section>
<section class="example-step example-report" aria-labelledby="example-report">
<h2 id="example-report"><span>The report</span> Two of seven findings</h2>
<p class="example-file">Excerpt from <code>data-center-water.claimcheck.md</code><br>Summary: 5 clear failures · 2 partial · 0 passed · 0 N/A</p>
<p><strong>1 · Mechanistic literacy — clear failure</strong><br>Evaporative cooling does not boil or destroy water. It evaporates part of the circulating water to carry heat away; the vapor re-enters the hydrologic cycle. That is consumption from the local supply, not destruction.</p>
<p><strong>2 · Quantitative and comparative literacy — clear failure</strong><br>LBNL: U.S. data centers directly consumed about 66 billion liters (≈ 17.4 billion gallons) in 2023. Set against consumptive use in USGS’s 2020 estimates for the lower 48 states, that is about 0.06% of crop irrigation, 1.1% of public supply, and 2.0% of thermoelectric power. Against water applied on U.S. golf courses in 2020 (GCSAA), about 3.2%. The share depends on the comparison, so the report shows the range.</p>
</section>
<section class="example-step example-after" aria-labelledby="example-after">
<h2 id="example-after"><span>What survives</span> The local question</h2>
<blockquote><p>Boundary — partial. “Out where I live the reservoir is low, and a new data center just went in.” That is a real, checkable concern. Next step: the facility’s water permit, its cooling design, and the reservoir’s drought data.</p></blockquote>
<p class="example-payoff">The report says which parts fail, which concern survives, and what to read to settle it. It does not rule the claim true or false.</p>
</section>
<p class="value-note">Sample report on an illustrative source, not a recorded tool run. Every figure is dated and sourced in the full report.</p>
<a class="example-download" href="/samples/data-center-water.claimcheck.md">Read the complete sample report →</a>
</figure>
</section>

## The opposite claim fails too (illustrative)

A common sentiment from the other side: the concern is nothing. This post has a real figure and names its sources.

```markdown
# ClaimCheck — "AI water use is a rounding error"

**Summary:** clear failures: 2 · partial: 2 · passed: 2 · N/A: 1

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-3
Why: Evaporated water is not destroyed, and it is still used: it
leaves the supply it was drawn from, and the rain falls somewhere
else. That is what "consumption" means.

### 3 · Scale and boundary literacy — clear failure

> "If the national number is a rounding error, the local one is too."

Claims: C-4
Why: A national share used to dismiss a local question. A use that
is small for the country can be large for one reservoir, and the
national figure cannot say which.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-1, C-2
Why: Both figures are attributed to the reports that measure them,
and both check out.
```

Both reports end on the same question: what one facility is permitted to draw from one supply. [Full report](/samples/water-rounding-error.claimcheck.md).

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A post, assertion, thread, or short argument that rests on numbers or measurements, up to about 1,500 words. A file, a URL, or pasted text |
| Writes | `<name>.claimcheck.md` next to a file, replacing an earlier report of that name, or `claimcheck.md` for a URL or pasted text. Chat only, if you ask |
| Changes | Nothing. The source is never edited, and instructions inside it are reviewed, not followed |

| Status | Means | Points |
| --- | --- | --- |
| **clear failure** | The claim commits the dimension’s failure in a way that changes what a reader would conclude | 0 |
| **partial** | Half right, right in one place and wrong in another, or wrong in a way that does not change the conclusion. Also the most a fault in a side claim can get | 0.5 |
| **passed** | The claim handles the dimension well enough that a reader could judge it on this axis. The report says what it did | 1 |
| **N/A** | The claim never touches the topic this dimension covers | left out |
| · **unverified** | A flag beside a status, not a status. The finding depends on a figure your agent could not check against a primary source | scores as its status |

A report leads with the tally: how many dimensions landed on each status. The score line inside the report file is a summary, not a grade. Two claims with the same score can fail for different reasons, and statuses can vary from one model or run to the next. The quoted evidence is what to check.

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

Every finding names the claims it rests on. A fault in a side claim, such as a remedy the main claim does not depend on, is partial at most. [How the statuses are decided](/docs/dimensions).

## Same seven questions, other subjects (illustrative)

Water is one example. The seven questions fit any claim that rests on numbers or measurements: what the number measures, what the baseline is, where the boundary sits, what would happen instead. The subjects below differ on purpose. ClaimCheck asks the same questions whichever way a claim leans.

### A health-risk claim

A common sentiment about processed meat and cancer.

```markdown
# ClaimCheck — "Bacon is the new cigarettes"

**Summary:** clear failures: 2 · partial: 5 · passed: 0 · N/A: 0

### 1 · Mechanistic literacy — clear failure

> "in the same cancer category as cigarettes and asbestos" · "A ham sandwich is as dangerous as smoking."

Claims: C-1, C-2
Why: Treats hazard and risk as one thing. An IARC group states how
strong the evidence is that something can cause cancer. It does not
state how much cancer it causes. IARC (2015): "this does NOT mean
that they are all equally dangerous."

### 2 · Quantitative and comparative literacy — clear failure

> "raises your risk of bowel cancer by 18 percent" · "nearly one in five people who eat the stuff will get cancer from it"

Claims: C-3, C-4
Why: 18% is a relative increase, not one in five. On the U.S.
lifetime baseline of about 3.9% (NCI SEER, 2021–2023 data),
3.9% × 1.18 ≈ 4.6%.
```

The finding underneath survives: processed meat does cause colorectal cancer (IARC, 2015), and the risk rises with the amount eaten. [Full report](/samples/processed-meat.claimcheck.md).

### A claim about crime statistics

A common sentiment about crime.

```markdown
# ClaimCheck — "Crime has never been this bad"

**Summary:** clear failures: 2 · partial: 4 · passed: 0 · N/A: 1

### 2 · Quantitative and comparative literacy — clear failure

> "More than a million violent crimes were reported last year." · "It is the worst it has ever been in this country"

Claims: C-1, C-2
Why: A count with no rate and no earlier year. FBI: 1,119,768
violent crimes in 2025, 327.6 per 100,000 people. In 1991:
1,911,767, and 758.2 per 100,000. The 2025 rate is about 43% of the
1991 rate.

### 3 · Scale and boundary literacy — partial

> "In my city, murders went from 30 to 40 in a single year." · "what is happening here is happening everywhere."

Claims: C-3
Why: The local rise is a real concern. The national figure moved
the other way: murders fell an estimated 18.1% from 2024 to 2025
(FBI).
```

The local question survives: the city’s own counts, as a rate, over ten years. So does the point about unreported crime: about half of violent victimizations were not reported to police (BJS, 2024). The post’s remedy, more police “whatever it costs,” is a side claim: the report marks it partial for naming no cost and takes no side on it. [Full report](/samples/crime-statistics.claimcheck.md).

## A claim that mostly holds (illustrative)

A short post advising LED swaps, citing DOE.

```markdown
# ClaimCheck — swap the last incandescent bulbs

**Summary:** clear failures: 0 · partial: 2 · passed: 5 · N/A: 0

### 6 · Recency and updating literacy — partial

> "lighting is about 15% of an average home's electricity"

Claims: C-4
Why: The figure is from a 2010 DOE guide. EIA's 2020 survey puts
lighting near 6% of home electricity. The advice survives, so the
error is partial, not a clear failure.
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

A loud post with sound numbers [passes ClaimCheck](/samples/loud-but-literate.claimcheck.md) and still deserves a Smell Check. A calm post with no denominator fails ClaimCheck and passes Smell Check.

ClaimCheck reviews what a claim knows: its literacy on seven dimensions. It does not rule a claim true or false, and it does not rewrite it.

Built by [Catalyst Forge LLC](https://www.catalystforge.com). MIT.
