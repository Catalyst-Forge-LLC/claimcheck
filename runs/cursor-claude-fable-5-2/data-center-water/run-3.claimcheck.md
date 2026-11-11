# ClaimCheck — AI is drinking our water

**Source:** `post.md`, read 2026-11-11. Unchanged.  
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."  
**Summary:** clear failures: 4 · partial: 3 · passed: 0 · N/A: 0  
**Score:** 1.5 / 7 (1 unverified)

The problem sits in four dimensions: mechanism, magnitude, output, and
evidence. The post treats evaporated water as destroyed, gives no
baseline for any number, counts no benefit, and names no source except
an unidentified graphic. A legitimate concern survives: a data center
that evaporates water in a basin with a low reservoir is a real,
checkable local question, and "billions of gallons a year" is the right
order of magnitude for direct water use by all U.S. data centers in
2023. This is a literacy review. It does not rule the claim true or
false.

## Claims read

- **C-1** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water." Restated as "a whole bottle for every conversation."
- **C-2** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-3** > "Meanwhile families in drought areas are told to take shorter showers."
- **C-4** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-5** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-6** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off" · "It's water poured down the drain for nothing."

Claims: C-2, C-6
Why: Treats loss to the local supply as destruction, and then describes
the same water as going down a drain, which is a third fate
(discharge). "Boiled off" points at the real loss route, evaporation,
but "gone forever" is what the central claim's "wasting" leans on.
Contrast: Evaporated water leaves the local supply and re-enters the
water cycle as vapor; it is not destroyed. LBNL (2024), Section 5:
"Water consumption refers to the amount of withdrawn water that is
permanently removed from the immediate water cycle due to evaporation
or other irreversible processes." The qualifier is "immediate." The
same report: "While air-cooled chillers use no water, they use more
energy," so not every facility evaporates water
(https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf).
Google (2025): "On average, Google consumes 80% of the water
withdrawn," so part of what is taken in is returned
(https://arxiv.org/html/2508.15734).
Next step: LBNL 2024 report, Section 4, the cooling-system cases behind
the PUE and WUE results: which systems evaporate water and which do
not. For the local facility, its water permit: withdrawal against
discharge.

### 2 · Quantitative and comparative literacy — clear failure

> "a data center somewhere drinks a bottle of water" · "Multiply that by millions of people and it's staggering." · "billions of gallons of water a year"

Claims: C-1, C-2, C-3
Why: No denominator anywhere: no bottle size, no count of questions, no
share of any total. The one comparison offered is household showers,
with the larger water uses left out, so a reader cannot tell big from
small.
Contrast: National total. LBNL (2024) puts direct water consumption by
all U.S. data centers, not AI alone, at 66 billion liters in 2023 ("the
66-billion-liter total"). 66 billion L ÷ 3.785411784 L/gal = 17.4
billion gal a year; ÷ 365 = 47.8 million gal/d = 0.0478 Bgal/d. USGS
Circular 1441 (2015 estimates,
https://pubs.usgs.gov/publication/cir1441) gives three baselines:

- Irrigation consumptive use, 73.2 Bgal/d: 0.0478 ÷ 73.2 = 0.065%.
- Thermoelectric-power consumptive use, 4.31 Bgal/d: 0.0478 ÷ 4.31 = 1.1%.
- Public-supply withdrawals, 39.0 Bgal/d: 0.0478 ÷ 39.0 = 0.12%. This
  one is a withdrawal figure, so it is not like for like.

The years differ (2023 against 2015). Per question. Li et al. (first
posted 2023, latest version 2025, https://arxiv.org/html/2304.03271)
estimate 500 mL for "roughly 10 – 50 medium-length responses": 500 ÷ 50
= 10 mL and 500 ÷ 10 = 50 mL per response. If the post's bottle is
500 mL, a bottle per question is 10 to 50 times that estimate.
Next step: USGS water-use data, consumptive use by category for the
newest year available, set beside LBNL 2024 Section 5, Figure 5.9.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in." · "That is what is happening to the whole country." · "a data center somewhere drinks a bottle of water"

Claims: C-1, C-4
Why: The first sentence names a local stress that can be checked,
though it does not say the data center draws on that reservoir. The
second carries one reservoir to the whole country without a national
figure, and the per-question line puts all of the water at the data
center. The central claim's national total does not rest on the
anecdote, so this is partial.
Contrast: In Li et al., Table 1, the U.S.-average request uses 2.200 mL
on site and 14.704 mL off site, 16.904 mL in total; 14.704 ÷ 16.904 =
87% of it is water consumed at power plants, not at the data center.
500 ÷ 16.904 = 29.6 requests per 500 mL, the figure the table prints.
LBNL (2024): "Indirect water use and GHG emissions associated with
electricity use represent impacts occurring at the power generation
source." The reservoir and the facility: not checked in this run; the
post names neither.
Next step: the reservoir operator's storage records, and the
facility's water permit or utility service agreement: which source it
draws on, the permitted volume, and its share of that supply's
deliveries.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-5 (side claim)
Why: Calls for a cut to zero and names neither the substitute nor its
cost. The central claim does not depend on the remedy, so the finding
is capped at partial. This review takes no position on the remedy.
Contrast: LBNL (2024): "While air-cooled chillers use no water, they
use more energy." Li et al.: "Some data centers may opt for dry
coolers, which consume no on-site water year-round [19]. However, this
approach typically increases cooling energy consumption compared to
water-based cooling methods, potentially exacerbating the overall
stress on water resources due to higher scope-2 water consumption."
Google (2025) states that "all new data centers developed in
high-stress locations will make use of air-cooled technology during
normal operations."
Next step: LBNL 2024 report, Section 4, PUE and WUE by cooling system:
the extra electricity a waterless design uses, and the water consumed
generating that electricity.

### 5 · Output and value accounting — clear failure

> "so a machine can write someone's homework or a bad poem" · "Nothing useful comes out of those buildings." · "wasting"

Claims: C-2, C-6
Why: Names two trivial outputs, then says there are none, and calls the
whole use waste on that basis. The post may argue that the benefit is
not worth the water, but it has to count the benefit to make that
argument. "Wasting" is in the central claim.
Contrast: LBNL's 66-billion-liter figure covers all U.S. data centers:
"hyperscale and colocation account for 84%" and "internal data centers"
12%. It is not a figure for chatbots alone. Google (2025) describes
the output it measures as "AI models now serving billions of user
prompts globally"; that is the operator's own account. What the
facility near the author runs: not checked in this run.
Next step: the operator's description of the workloads the facility
serves; then water per unit of output (for example per prompt, Google
2025, Table 2) beside other uses the reader accepts.

### 6 · Recency and updating literacy — partial · unverified

> "I saw it in a graphic going around"

Absent: a year for any figure in the post.

Claims: C-1, C-2
Why: The undated "billions of gallons" still matches the order of the
latest national estimate opened in this run (2023 data). The
per-question bottle, if it descends from the 2023 estimate for GPT-3,
has been overtaken by a measured per-prompt figure. Unverified because
the graphic is not identified, so its origin and date could not be
checked.
Contrast: Li et al. was first posted 2023-04-06 and last revised
2025-03-26 (https://arxiv.org/abs/2304.03271). It models GPT-3 with an
assumed 0.004 kWh per request and says "the water consumption per
request may decrease in the future. However, the total water
consumption is likely to continue rising." Google (posted 2025-08-21,
https://arxiv.org/abs/2508.15734) measured the median Gemini Apps text
prompt in May 2025 at 0.26 mL, counting "the water consumed for
cooling machines and associated infrastructure in data centers," which
is on-site water only. On site against on site: 2.200 mL ÷ 0.26 mL =
8.5 times lower. 500 mL ÷ 0.26 mL = 1,923 prompts per 500 mL. The two
differ in operator, model, and method (estimate against measurement),
so read the direction, not the ratio.
Next step: find the graphic and its date; open the study it cites in
its latest version; compare with the newest operator disclosures and
note which boundary each one uses.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around: a whole bottle for every conversation."

Claims: C-1, C-2, C-4
Why: The only source named is an unidentified graphic. The annual total
and the reservoir have no source at all. The post gives the figure two
ways, per question and per conversation, and cites nothing that would
settle which one the graphic meant.
Contrast: The nearest primary source for a bottle figure is Li et al.:
"GPT-3 needs to "drink" (i.e., consume) a 500ml bottle of water for
roughly 10 – 50 medium-length responses, depending on when and where it
is deployed." That is a bottle per 10 to 50 responses, with a stated
scope. For the national total the systematic report is LBNL (2024),
Section 5.
Next step: identify the graphic and follow it to the study it cites;
cite LBNL 2024 Section 5 for the national figure and the local
utility's records for the reservoir.

## Next steps

1. Set the national total against baselines — LBNL, *2024 United States
   Data Center Energy Usage Report*, Section 5, Figure 5.9 (direct
   water, 2023), beside USGS consumptive use by category for the newest
   year available. This changes "staggering" into a share.
2. Read one table — Li et al., "Making AI Less 'Thirsty'," Table 1:
   water per request, on site and off site, and requests per 500 mL.
   This is the cheapest check and it settles the per-question figure.
3. Check the local case — the reservoir operator's storage records and
   the facility's water permit or utility service agreement: source,
   permitted volume, share of the supply.
4. Compare current per-prompt disclosures — Elsworth et al. (Google,
   2025), Table 2, and any other operator's measured figure, with the
   boundary each one uses.
5. Price the remedy — LBNL 2024, Section 4, PUE and WUE by cooling
   system, and the report's indirect water intensity for the added
   electricity.
6. Confirm the editions — whether LBNL has published an update since
   December 2024, and USGS water-use estimates later than 2015.

## Unverified

- The graphic and its figure — the post does not identify it — ask the author, or search for the image and the study it cites.
- That the bottle figure descends from Li et al. — an inference from the matching "bottle" wording, not a traced link — the graphic's own citation.
- The size of the post's bottle — not stated — the graphic.
- The low reservoir and the new data center — neither is named — the reservoir operator's storage data and the facility's water permit.
- "families in drought areas are told to take shorter showers" — no place or order named — the state or local drought declaration.
- What the facility near the author runs — not named — the operator's filings or site description.
- Indirect water consumption for U.S. data centers in 2023, "nearly 800 billion liters" — seen only on secondary pages that quote the LBNL report — LBNL 2024, Section 5, "Indirect Water Consumption and Emissions from Electricity Use."
- The AI share of the 66 billion liters — not checked — LBNL 2024, Section 5.
- USGS estimates later than 2015 — the USGS water-use page returned HTTP 403 — https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states
- Whether the December 2024 LBNL report has been superseded — one secondary dataset in the search results says a 2025 update exists; not opened — LBNL Energy Analysis Division publications.
- The section number of the LBNL cooling-system results — the report was read as excerpts, not in full; an excerpt cites Figure 4.7 for WUE — the report's table of contents.

## A stronger version

A claim that would pass names the facility and the supply it draws
on, gives the facility's permitted or metered consumption as a share
of that supply, and says whether the water is evaporated or returned.
It cites a per-prompt figure from the study or disclosure it came
from, with the year and whether power-plant water is included. It
sets the national total against other uses, keeps the local case and
the national total apart, and names what the facility delivers before
arguing that the water is not worth it. If it proposes waterless
cooling, it states the added electricity.

## Sources opened

- Li, Yang, Islam, Ren, "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models" — https://arxiv.org/abs/2304.03271 and https://arxiv.org/html/2304.03271 — posting and revision dates; the 500 mL per 10–50 responses sentence; Table 1, U.S.-average row; the 0.004 kWh per request assumption; the dry-cooler passage.
- Elsworth et al., "Measuring the environmental impact of delivering AI at Google Scale" — https://arxiv.org/abs/2508.15734 and https://arxiv.org/html/2508.15734 — 0.26 mL per median Gemini Apps text prompt, May 2025; the water boundary; 80% of withdrawn water consumed; air-cooled sites in high-stress locations.
- Shehabi et al., *2024 United States Data Center Energy Usage Report*, LBNL, 2024-12-19 — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — read as page-text excerpts returned by the web search tool; a direct download returned a bot-challenge page and the eScholarship copy returned no content, so the full report was not read. Taken: the 66-billion-liter direct total for 2023; the definition of water consumption; the air-cooled chiller sentence; the indirect-water sentence.
- LBNL publication page for the same report — https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report — authors and date.
- Dieter et al., *Estimated use of water in the United States in 2015*, USGS Circular 1441, published 2018 — https://pubs.usgs.gov/publication/cir1441 — irrigation consumptive use 73.2 Bgal/d; thermoelectric consumptive use 4.31 Bgal/d; public-supply withdrawals 39.0 Bgal/d.
