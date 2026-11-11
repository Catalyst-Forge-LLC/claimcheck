# ClaimCheck — "AI is drinking our water"

Worked sample, written to show the report format. The source is an
example of a common sentiment about AI and water, the kind of
assertion that merits a more careful check. Figures in **Contrast**
were checked on 2026-11-10 against the sources listed at the end.
The LBNL Section 5 water figures were confirmed on the primary PDF
on 2026-11-11, and the USGS baselines were moved to its 2020
estimates the same day.

**Source:** `data-center-water.md` (example), read 2026-11-10. Unchanged.
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever"
**Summary:** clear failures: 5 · partial: 2 · passed: 0 · N/A: 0
**Score:** 1 / 7

The claim fails on mechanism, magnitude, output, recency, and
evidence. Its remedy names no substitute, which is a side claim and
is marked partial. One concern survives: a new facility drawing on
a low local reservoir is a real, checkable question. The post turns
it into a national story without the numbers to carry it. This is a
literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water."
- **C-2** > "I saw it in a graphic going around: a whole bottle for every conversation."
- **C-3** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-4** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-5** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-6** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off" · "poured down the drain"

Claims: C-3, C-6
Why: The post uses three incompatible models for one process.
Evaporative cooling does not boil water and does not destroy it: it
evaporates part of the circulating water to carry heat away, and the
vapor re-enters the hydrologic cycle (usually somewhere else, which
is why it counts as *consumption* from the local supply). "Down the
drain" describes a third thing — discharge (cooling tower
blowdown), which is *withdrawn* and returned, not consumed. And
closed-loop and air-cooled systems recirculate or use no on-site
water at all. Withdrawal, consumption, recirculation, and
destruction are different things. Treating use and loss as one is
the dimension's named failure.

Contrast: LBNL 2024 describes water-cooled chillers releasing heat
"via cooling towers" and notes "the water evaporation process in
cooling towers has raised concerns regarding data center water
consumption and availability at the local level"; it lists
air-cooled chillers as preferred "where minimal on-site water
consumption is crucial." Physics: water's latent heat of
vaporization near 30 °C is about 2.43 MJ/kg, and 1 kWh is 3.6 MJ,
so fully evaporative heat rejection takes roughly 3.6 ÷ 2.43 ≈ 1.5
liters per kWh of heat. The 2023 national average implied by LBNL's
own totals is far lower — 66 billion L ÷ 176 TWh ≈ 0.375 L per kWh
of facility electricity, roughly a quarter of the fully evaporative
figure — because many sites reject heat with economizers and dry
coolers much of the year.

Next step: LBNL 2024, Section 4, Table 4.2 (cooling systems) and
the PUE/WUE results — which systems evaporate water, which do not.

### 2 · Quantitative and comparative literacy — clear failure

> "billions of gallons of water a year" · "Multiply that by millions of people and it's staggering."

Claims: C-1, C-3
Why: No denominator and no comparison. "Billions of gallons" is
large next to a bathtub and small next to irrigation; the reader
cannot tell which. The post singles out one user of water and omits
larger users in the same places.

Contrast (arithmetic shown; years differ and are named):

| Use | Figure | Year | Per year | Data-center direct as share |
| --- | --- | --- | --- | --- |
| U.S. data centers, direct consumption (LBNL) | 66 billion L ≈ 17.4 Bgal | 2023 | 17.4 Bgal | — |
| Crop irrigation, consumptive use, lower 48 states (USGS) | about 72% of 110,904 Mgal/d ≈ 79,900 Mgal/d | 2020 | ≈ 29,100 Bgal | ≈ 0.06% |
| Public supply, consumptive use, lower 48 states (USGS) | 4,241 Mgal/d | 2020 | ≈ 1,550 Bgal | ≈ 1.1% |
| Thermoelectric power, consumptive use of fresh water, lower 48 states (USGS) | 2,359 Mgal/d | 2020 | ≈ 861 Bgal | ≈ 2.0% |
| U.S. golf facilities, applied water (GCSAA) | 1,686,269 acre-ft × 325,851 gal | 2020 | ≈ 549 Bgal | ≈ 3.2% |

The shares run from about 0.06% to about 3.2%, a factor of roughly
50, depending on the comparison. A reader shown only the irrigation
row, or only the golf row, would be shown a selected comparison,
which is the second half of this dimension's named failure.

Conversions: 66 × 10⁹ L ÷ 3.785 L/gal = 17.4 × 10⁹ gal. Daily
values × 365 (1,000 Mgal = 1 Bgal). Irrigation: 0.72 × 110,904 ≈
79,900 Mgal/d. Limits on these rows: the USGS 2020 values are
modeled estimates for the lower 48 states, three years older than
the LBNL figure, which is for the whole country. USGS gives the
irrigation share as "approximately 72%". Golf "applied water" is
irrigation applied, not measured consumption, so that row is an
upper-bound comparison. Do not divide a consumption figure by a
withdrawal total: in the same USGS data, thermoelectric power
withdrew 59,889 Mgal/d of fresh water and consumed 3.9% of it.

Next step: USGS water-use pages for irrigation, public supply, and
thermoelectric power (2020 estimates, consumptive use); LBNL 2024,
Section 5.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in." · "That is what is happening to the whole country."

Claims: C-4
Why: The first sentence is the strongest line in the post: a local
supply under stress and a new local user is exactly the boundary
where data-center water matters. The second sentence flattens that
local stress into a national claim the post never supports. The post
also never separates **direct** water (on site, cooling) from
**indirect** water (consumed at power plants that make the
electricity), which differ by an order of magnitude and sit in
different watersheds.

Contrast: LBNL 2024 puts indirect water for U.S. data centers in
2023 at "nearly 800 billion liters" (≈ 211 Bgal), about 12× the
66-billion-liter direct figure (800 ÷ 66 ≈ 12.1), and says the
indirect estimate depends on the local grid mix. (Section 5, pp. 55
and 57, read directly.)

Next step: for the local claim, the facility's water permit or
utility service agreement (withdrawal and consumption), its cooling
design, and the reservoir operator's drought data. For the national
claim, LBNL Section 5, direct vs indirect tables.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-5 (side claim)
Why: Waterless cooling exists, but it is a swap, not a free cut.
Air-cooled and dry systems remove on-site evaporation and raise
electricity use, and electricity generation consumes water too —
nationally about 4.35 L per kWh on average, per LBNL. Whether
switching saves water overall depends on the local grid and climate.
The post calls for a cut and never names the substitute or its
cost. The central claim does not depend on this remedy, so the
finding is capped at partial.

Contrast: LBNL 2024: "In many cases, there are tradeoffs between low
PUEs and low site WUEs… While air-cooled chillers use no water, they
use more energy." (Section 4.) The 4.35 L/kWh U.S. average and
4.52 L/kWh for data-center electricity are from Section 5, p. 57.
Both read directly.

Next step: LBNL 2024, Section 4 "PUE and WUE Results"; for a given
site, the grid's water-intensity factor (LBNL Figure 5.10 maps it by
county).

### 5 · Output and value accounting — clear failure

> "so a machine can write someone's homework or a bad poem" · "Nothing useful comes out of those buildings."

Claims: C-3, C-6
Why: "Waste" is assigned because the product is digital and the
post's chosen examples are trivial. The same facilities run search,
email, payments, logistics, hospital records, and scientific
computing; LBNL counts all U.S. data centers, not chatbots alone. A
post may argue some outputs are not worth their water — that is a
legitimate value judgment — but "nothing useful" counts the output as
zero instead of weighing it.

Contrast: LBNL 2024's totals cover all U.S. data centers (176 TWh in
2023, 4.4% of U.S. electricity), with AI-accelerated servers one
growing share. Not checked in this run: a per-service breakdown of
water use; none was found in the sources opened.

Next step: name the services the nearby facility actually runs
(operator disclosures, utility filings), then compare water per unit
of output with uses the reader already accepts.

### 6 · Recency and updating literacy — clear failure

> "a whole bottle for every conversation"

Claims: C-1, C-2
Why: The "bottle per conversation" line traces to an early academic
estimate for GPT-3-era models (about 500 mL per 10–50 medium-length
responses, depending on location and timing, counting both on-site
and power-plant water). The post states it without a date, rounds it
up to one bottle per conversation, and ignores the systematic 2024
national estimate and newer measured per-prompt disclosures.

Contrast: Li, Yang, Islam & Ren, "Making AI Less 'Thirsty'" (arXiv
2304.03271; CACM 2025): ~500 mL per 10–50 responses, scope-1 plus
scope-2 water. Google (arXiv 2508.15734, August 2025): median Gemini
Apps text prompt 0.26 mL of water and 0.24 Wh, May 2025 production
data — an operator self-report whose scope critics dispute (The
Verge). LBNL's 2025 Update (June 2026) revised electricity (192 TWh
in 2024) but, per two secondary summaries, did not publish new water
totals, so 2023 remains the latest national water year in that
series. *The 2025 Update's water scope was not read in the primary
PDF in this run.*

Next step: open the latest version of the Li et al. paper and its
scope section; open Google's paper's methodology; open the LBNL 2025
Update and search for water.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around"

Claims: C-2
Why: The only evidence is a secondary graphic of unknown origin. One
striking per-query comparison is promoted over the systematic
national report that exists for exactly this question, and the
graphic's number is used without its stated scope.

Contrast: The systematic source is LBNL's 2024 United States Data
Center Energy Usage Report (LBNL-2001637), prepared under the Energy
Act of 2020, with a bottom-up model and stated limits ("the lack of
data availability significantly limits the analysis").

Next step: cite LBNL 2024 Section 5 directly; for a local claim, cite
the facility's permit or the utility's filing.

## Next steps

1. **The local question** — the nearby facility's water permit or
   utility agreement, its cooling design, and the reservoir's drought
   status. This is the check that could make the post's strongest
   line true or false.
2. **USGS water-use pages, 2020 consumptive use by category** — the
   baseline for magnitude. Cheapest check.
3. **LBNL 2025 Update** — confirm whether it revises water.
4. **Li et al. latest version and Google's methodology** — settle the
   per-prompt figure and its scope before quoting any per-query
   number.

## Unverified

- Whether the LBNL 2025 Update publishes water — two secondary
  summaries say it does not. Check the Update.
- Any per-service breakdown of data-center water — none found.
- Whether USGS publishes 2020 estimates for the whole country, not
  only the lower 48 states — not found on the pages opened. Check
  the USGS water-use data releases.
- Whether USGS has estimates newer than 2020 — its pages say work
  is underway. Check the same pages.

## A stronger version

A post that passed would keep the local reservoir and drop the
national leap. It would say what the new facility cools with, how
much it is permitted to withdraw and expected to consume, how that
compares with the reservoir's other users (farms, power plants,
towns, golf courses), what the facility would use instead and what
that costs in electricity, and what services it runs. That post
could still conclude the facility is a bad trade for that watershed —
and a reader could check it.

## Sources opened

- LBNL, *2024 United States Data Center Energy Usage Report* (Shehabi et al., Dec 2024, LBNL-2001637) — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — executive summary (176 TWh, 4.4%, 325–580 TWh in 2028), Section 4 cooling systems and the PUE/WUE trade-off quote, and Section 5 water figures (p. 55: "the 66-billion-liter total" for 2023; p. 57: "nearly 800 billion liters", 4.52 and 4.35 L/kWh). Read directly.
- AWWA, Carpenter & Gonsenhauser, "Utility Planning for Data Centers" — https://doi.org/10.1002/awwa.2515 — 5.6 Bgal (2014) → 17 Bgal (2023) direct; 211 Bgal indirect.
- USGS, "Irrigation Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 2020, lower 48 states: 110,904 Mgal/d withdrawn for crop irrigation, approximately 72% consumptive; "2020 values are modeled estimates". Read directly.
- USGS, "Public Supply Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 2020, lower 48 states: 35,823 Mgal/d withdrawn, about 12% (4,241 Mgal/d) consumptive. Read directly.
- USGS, "Thermoelectric Power Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use — 2020, lower 48 states: 59,889 Mgal/d of fresh water withdrawn, about 3.9% (2,359 Mgal/d) consumptive. Read directly.
- USGS Circular 1441, *Estimated Use of Water in the United States in 2015* — https://pubs.usgs.gov/publication/cir1441 — the last compiled national report (2015). Its figures were this report's baseline until the 2020 estimates replaced them.
- GCSAA, *Golf Course Environmental Profile, Phase III, Vol. I* (2022) — https://www.gcsaa.org/docs/default-source/environment/phase-3-water-survey-full-report.pdf — 1,686,269 acre-feet applied in 2020; 1 acre-foot = 325,851 gal.
- Li, Yang, Islam, Ren, "Making AI Less 'Thirsty'" — https://arxiv.org/abs/2304.03271 — per-response estimate and its scope (via abstract and search summary).
- Google, "Measuring the environmental impact of delivering AI at Google Scale" — https://arxiv.org/abs/2508.15734 — 0.26 mL, 0.24 Wh per median Gemini Apps text prompt (via abstract and search summary).
- LBNL, *United States Data Center Energy Usage Report: 2025 Update* — https://escholarship.org/uc/item/33m6w3x0 — 192 TWh in 2024 (via secondary summary).
