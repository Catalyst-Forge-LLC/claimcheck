# ClaimCheck — "AI is drinking our water"

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
**Summary:** clear failures: 4 · partial: 3 · passed: 0 · N/A: 0
**Score:** 1.5 / 7 (1 unverified)

The problem sits in four dimensions: mechanism ("gone forever"),
magnitude (no baseline for any number), output ("nothing useful"),
and evidence (an unnamed graphic). A legitimate concern survives:
evaporative cooling does remove water from the local supply, the
national total is in the billions of gallons and rising, and a new
facility beside a low reservoir is a fair thing to ask about. This
is a literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water."
- **C-2** > "I saw it in a graphic going around: a whole bottle for every conversation."
- **C-3** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-4** > "Meanwhile families in drought areas are told to take shorter showers."
- **C-5** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-6** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-7** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off"

Claims: C-3
Why: "Boiled off" names evaporation, which is what evaporative
cooling does. "Gone forever" then treats water lost to the local
supply as water destroyed, and the sentence applies it to every
"AI data center" although some cooling designs evaporate no water.
The central claim's "wasting" leans on that step.
Contrast: LBNL (2024) defines consumption as water "permanently
removed from the immediate water cycle due to evaporation or other
irreversible processes." The word the claim drops is "immediate."
The same report says "air-cooled chillers use no water."
USGS (2020 estimates) describes consumptive use as water that "did
not return to local waterbodies or groundwater."
<https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf>,
<https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use>
Next step: LBNL 2024, Section 4, the site WUE results by cooling
system: which systems evaporate water and which do not. For a named
facility, its cooling design.

### 2 · Quantitative and comparative literacy — clear failure

> "billions of gallons of water a year" · "Multiply that by millions of people and it's staggering." · "a bottle of water" for "a question" (C-1), then "a whole bottle for every conversation" (C-2)

Claims: C-1, C-2, C-3, C-4
Why: No number has a denominator. The yearly total has no baseline.
The per-use figure changes its unit between two sentences, from a
question to a conversation. The one comparison offered, showers
(C-4), carries no figure, and larger water uses are left out.
Contrast: LBNL (2024) puts direct water consumption by all U.S.
data centers, not AI alone, at 66 billion liters in 2023.
66 billion L ÷ 3.785 L/gal = 17.4 billion gallons, so "billions of
gallons a year" is the right order of size for that total.
17.4 billion gal ÷ 365 = 47.8 million gallons per day (mgd).
Against USGS consumptive-use estimates for 2020, lower 48 states:

- Irrigation: 110,904 mgd withdrawn × 0.72 consumptive ≈ 79,851 mgd. 47.8 ÷ 79,851 = 0.06%.
- Public supply: 4,241 mgd. 47.8 ÷ 4,241 = 1.1%.
- Thermoelectric power: 2,359 mgd. 47.8 ÷ 2,359 = 2.0%.

The years differ (2023 against 2020), and LBNL covers the whole
U.S. while the USGS pages cover the lower 48.
On the per-use figure, Li et al. (2023, revised 2025) estimate one
500 ml bottle "for roughly 10 – 50 medium-length responses."
500 ml ÷ 50 = 10 ml and 500 ml ÷ 10 = 50 ml per response. C-1's
bottle per question is 10 to 50 times that.
<https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use>,
<https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use>,
<https://arxiv.org/html/2304.03271>
Next step: LBNL 2024, Section 5, "Direct Water Consumption"
(Figure 5.9), for the national total by year. USGS water-use pages
for consumptive use by category. For C-5, the same ratio at local
scale: the facility's water use against its utility's total.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country." · "a data center somewhere drinks a bottle of water"

Claims: C-1, C-5
Why: The first sentence of C-5 is a local, checkable observation,
though it does not say the data center draws on that reservoir. The
second carries it to the whole country with no national figure.
C-1 places the whole bottle at the data center, while the study the
figure matches counts water at power plants as well.
Contrast: Li et al. define operational water as "on-site scope-1
water and off-site scope-2 water," and the bottle figure comes from
their case study of GPT-3's operational footprint. LBNL (2024) gives
both boundaries for 2023: 66 billion liters direct, and "nearly 800
billion liters" indirect through electricity. 800 ÷ 66 ≈ 12 times
the direct figure. LBNL adds that indirect intensity shows
"significant, yet uneven, variability across different regions."
The local case was not checked in this run: the post names no place.
Next step: the reservoir operator's storage record; the facility's
water permit or its utility service agreement, for source and
volume; the utility's supply plan, for the other users on the same
source.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-6 (side claim)
Why: Calls for a cut and names neither the substitute nor its cost.
The central claim is about how much water is used and whether it is
wasted. It does not depend on the remedy, so the finding is capped
at partial. This review takes no position on the remedy.
Contrast: LBNL (2024), Section 4: "there are tradeoffs between low
PUEs and low site WUEs. For example, water-cooled chillers and other
evaporation-based cooling systems are generally more energy
efficient than an air-cooled chiller or other waterless systems.
While air-cooled chillers use no water, they use more energy."
Section 5 puts the 2023 national average for data center
electricity at 4.52 L/kWh of indirect water consumption.
Next step: LBNL 2024, Section 4, PUE and site WUE by cooling
system, and Figure 5.10 for the water intensity of the grid where
the facility sits.

### 5 · Output and value accounting — clear failure

> "so a machine can write someone's homework or a bad poem" · "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

Claims: C-3, C-7
Why: Names two outputs, then says nothing useful comes out.
"Wasting" in the central claim rests on that. A claim may argue the
benefit is not worth the water, but it has to count the benefit
first.
Contrast: The LBNL (2024) water total covers every type of U.S.
data center (internal, colocation, hyperscale) and runs back to
2014. It is not a figure for AI or chatbots alone. Those facilities
used 176 TWh in 2023, "4.4% of total U.S. electricity consumption."
Which services a given facility runs was not checked in this run.
Next step: name the services the local facility runs, from the
operator's site page or its permit application. Then compare water
per unit of output with other uses the reader accepts.

### 6 · Recency and updating literacy — partial · unverified

> "I saw it in a graphic going around: a whole bottle for every conversation."

Absent: a date for the bottle figure or for "billions of gallons of
water a year."

Claims: C-1, C-2, C-3
Why: Neither figure is dated. The bottle figure matches an estimate
first posted in 2023 for GPT-3, and a newer per-prompt disclosure is
far lower. The yearly total is rising in the latest national report,
so the central claim's direction is not out of date. Unverified:
the graphic is unnamed, so its link to that study is an inference.
Contrast: Li et al. posted version 1 on 6 April 2023 and version 5
on 26 March 2025. The estimate is for GPT-3 and varies "depending on
when and where it is deployed." Google (August 2025) reports that
"the median Gemini Apps text prompt" "consumes 0.26 milliliters (or
about five drops) of water," on May 2025 data and its 2024 fleetwide
water usage effectiveness. 500 ml ÷ 0.26 ml ≈ 1,900.
10 ml ÷ 0.26 ml ≈ 38 and 50 ml ÷ 0.26 ml ≈ 190. The two are not
like for like: Li et al. include power-plant water and Google's
figure rests on data center water use. Google states that its
figures "have not been verified by an independent third-party."
LBNL (2024): direct consumption was 21.2 billion liters in 2014 and
66 billion in 2023, and hyperscale facilities alone "are expected to
consume between 60 and 124 billion liters" in 2028.
<https://arxiv.org/abs/2304.03271>,
<https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference>
Next step: find the graphic and the date and source printed on it.
Then set the newest operator per-prompt disclosures beside Li et
al., and note which scopes each one counts.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around"

Absent: any source for "billions of gallons of water a year."

Claims: C-2, C-3
Why: The per-use figure rests on an unnamed graphic, and the yearly
total on nothing. The study the bottle figure matches states a
scope the claim drops: one model, a range of responses, and a
dependence on place and time. A systematic national report exists
and is not cited.
Contrast: Li et al.: "GPT-3 needs to 'drink' (i.e., consume) a 500ml
bottle of water for roughly 10 – 50 medium-length responses,
depending on when and where it is deployed." LBNL's 2024 United
States Data Center Energy Usage Report gives national direct and
indirect totals with stated methods.
Next step: trace the graphic to the source it cites. Open Li et
al., Section 3.3, and LBNL 2024, Section 5, and quote those instead.

## Next steps

1. The local case: how much water the new data center takes, from
   what source, against the other users of that source — the
   facility's water permit or utility service agreement, and the
   reservoir operator's storage record.
2. The bottle figure: the graphic's printed source, then Li et al.,
   "Making AI Less 'Thirsty'" (arXiv 2304.03271), Section 3.3, for
   the per-response range and the scopes counted.
3. The national total and its baseline: LBNL 2024, Section 5
   (Figure 5.9), against USGS consumptive use by category for 2020.
4. The remedy's cost: LBNL 2024, Section 4, PUE and site WUE by
   cooling system, and Figure 5.10 for grid water intensity.
5. Current per-prompt figures: operator disclosures from 2025 on,
   with the scope each one counts.
6. What the facility delivers: the services it runs, from the
   operator or the permit application.

## Unverified

- The origin of the graphic and its figure — the post names neither — the graphic's own citation, then Li et al. (arXiv 2304.03271).
- "the reservoir is low, and a new data center just went in" — the post names no place — the reservoir operator's storage data and the facility's water permit.
- "families in drought areas are told to take shorter showers" — no place or date given — the state or utility drought orders in force.
- "That is what is happening to the whole country" — no national check was made in this run — U.S. Drought Monitor for drought extent, LBNL 2024 for where data centers sit.
- The AI share of the 66 billion liters — the LBNL passages read give the total for all data centers — LBNL 2024, Section 5, and operator reports.
- Which services the facilities run — not checked — operator site pages and permit applications.
- Google's 0.26 ml per prompt — opened, but self-reported and, in Google's words, not verified by an independent third party — Google's technical paper and any outside audit.

## A stronger version

A version that passes would name the place, the facility, and the
water source. It would give the facility's yearly consumption beside
the supply's other users, and say that the water leaves the local
basin by evaporation. It would cite the national total from the
LBNL report with a baseline, and date the per-use figure with its
scope. It would name what the facility delivers before weighing it
against the water, and price the electricity that a waterless design
would add.

## Sources opened

- Shehabi et al., *2024 United States Data Center Energy Usage Report*, LBNL, December 2024 — <https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf> (PDF text extracted and searched for these passages; landing page <https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report>) — the definition of consumption, the air-cooled chiller trade-off, direct water in 2014 and 2023, the 2028 range, indirect water and 4.52 L/kWh for 2023, 176 TWh and 4.4% for 2023.
- Li, Yang, Islam, and Ren, "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models," arXiv 2304.03271, version 5 — <https://arxiv.org/abs/2304.03271> and <https://arxiv.org/html/2304.03271> — version dates, the 500 ml sentence, the scope definitions.
- USGS, "Irrigation Water Use" — <https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use> — 2020 withdrawals and consumptive share.
- USGS, "Public Supply Water Use" — <https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use> — 2020 consumptive use and its definition.
- USGS, "Thermoelectric Power Water Use" — <https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use> — 2020 consumptive use.
- USGS Circular 1441, *Estimated use of water in the United States in 2015* — <https://pubs.usgs.gov/publication/cir1441> — opened; no figure taken, because the 2020 pages above are newer for these categories.
- Vahdat and Dean, "How much energy does Google's AI use? We did the math," Google Cloud Blog, 21 August 2025 — <https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference> — the per-prompt water figure, its data dates, and the no-third-party-verification note.
