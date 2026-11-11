# ClaimCheck — "AI water use is a rounding error"

Worked sample, written to show the report on a claim that plays a
concern down. The source is an example of a common sentiment about
AI and water, the kind of assertion that merits a more careful
check. It is the mirror of `data-center-water.md`. Figures in
**Contrast** were checked on 2026-11-11 against the sources listed
at the end.

**Source:** `water-rounding-error.md` (example), read 2026-11-11. Unchanged.
**Central claim:** > "So nobody who lives near a data center has anything to worry about."
**Summary:** clear failures: 2 · partial: 2 · passed: 2 · N/A: 1
**Score:** 3 / 6 (1 N/A)

The post's national figure is about right, and it names its sources
and what the facilities deliver. It fails on mechanism and
boundary: it argues that evaporated water is not used, and it
carries a national share down to every local supply. The local
question survives, and it is the same one the opposite post leaves
open. This is a literacy review. It does not rule the claim true or
false.

## Claims read

- **C-1** > "Lawrence Berkeley National Laboratory's 2024 data center report puts on-site water consumption by all U.S. data centers at about 66 billion liters in 2023, roughly 17 billion gallons."
- **C-2** > "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."
- **C-3** > "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."
- **C-4** (central) > "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."
- **C-5** > "look at what comes out of those buildings: search, maps, email, payments, hospital records."
- **C-6** > "This one is settled, and it will stay settled."

## Findings

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-3
Why: Treats use and loss as one thing, in the direction that plays
the concern down. It is true that evaporated water is not
destroyed. It does not follow that it is not used. The vapor leaves
the place it was drawn from, and the rain falls somewhere else, so
the local river, reservoir, or aquifer has less. That is what
"consumption" means, and it is the word the post's own source uses
for the 66 billion liters in C-1.

Contrast: USGS defines consumptive use on its 2020 pages as water
that "did not return to local waterbodies or groundwater." LBNL
2024, on cooling towers: "the water evaporation process in cooling
towers has raised concerns regarding data center water consumption
and availability at the local level."

Next step: LBNL 2024, Section 4, Table 4.2 (cooling systems), for
which systems evaporate water and which do not.

### 2 · Quantitative and comparative literacy — partial

> "about 66 billion liters in 2023, roughly 17 billion gallons" · "a small fraction of one percent of that"

Claims: C-1, C-2
Why: Half right. The post gives a figure with its year and source,
and a denominator, and its arithmetic holds: against crop
irrigation the share is about 0.06%. But it shows one comparison,
and it is the one that gives the smallest share. Other comparisons
from the same agency and year give shares about 20 to 35 times
larger. Selective focus is the second half of this dimension's
named failure.

Contrast (arithmetic shown; years differ and are named):

| Use | Figure | Year | Per year | Data-center direct as share |
| --- | --- | --- | --- | --- |
| U.S. data centers, direct consumption (LBNL) | 66 billion L ≈ 17.4 Bgal | 2023 | 17.4 Bgal | — |
| Crop irrigation, consumptive use, lower 48 states (USGS) | about 72% of 110,904 Mgal/d ≈ 79,900 Mgal/d | 2020 | ≈ 29,100 Bgal | ≈ 0.06% |
| Public supply, consumptive use, lower 48 states (USGS) | 4,241 Mgal/d | 2020 | ≈ 1,550 Bgal | ≈ 1.1% |
| Thermoelectric power, consumptive use of fresh water, lower 48 states (USGS) | 2,359 Mgal/d | 2020 | ≈ 861 Bgal | ≈ 2.0% |

Conversions: 66 × 10⁹ L ÷ 3.785 L/gal = 17.4 × 10⁹ gal. Daily
values × 365 (1,000 Mgal = 1 Bgal). Irrigation: 0.72 × 110,904 ≈
79,900 Mgal/d. Ratios: 1.1 ÷ 0.06 ≈ 18 and 2.0 ÷ 0.06 ≈ 33, so
about 20 to 35 times after rounding. The USGS 2020 values are
modeled estimates for the lower 48 states, three years older than
the LBNL figure, which is for the whole country. All of these
shares are small. The finding is that the post shows one of them.

Next step: USGS water-use pages for public supply and
thermoelectric power (2020 estimates, consumptive use).

### 3 · Scale and boundary literacy — clear failure

> "If the national number is a rounding error, the local one is too."

Claims: C-4
Why: This is the step the central claim rests on, and it is the
dimension's named failure: a national total used to flatten a local
stress. Water is drawn from one river, reservoir, or aquifer. A use
that is a small share of the country's water can be a large share
of one supply, and the national figure cannot say which. The post
also counts on-site water only. The water consumed at the power
plants that supply the same facilities is about twelve times
larger, and it is drawn in other places.

Contrast: LBNL 2024, p. 57: "The total indirect water footprint of
U.S. data centers is nearly 800 billion liters," which is about 12
times the on-site figure (800 ÷ 66 ≈ 12.1), and it varies with the
regional grid mix. LBNL names the local level as where the concern
sits (quoted under 1). No figure for any one facility or watershed
was opened in this run; the post names none.

Next step: for a given facility, its water permit or utility
service agreement (withdrawal and consumption), set against the
other users of the same supply and the supply's drought status.

### 4 · Trade-off and substitution literacy — N/A

Absent: any call for a cut or a remedy.

Claims: none
Why: The post argues that a concern is unfounded. It proposes
nothing, so there is no substitute or cost to name.

Contrast: not needed.

Next step: None.

### 5 · Output and value accounting — passed

> "look at what comes out of those buildings: search, maps, email, payments, hospital records."

Claims: C-5
Why: The post names what the facilities deliver and sets it beside
the cost, so a reader can weigh the two. Whether the benefit is
worth the water is a value judgment the post is entitled to make.

Contrast: LBNL 2024's totals cover all U.S. data centers (176 TWh
in 2023), not AI alone. A per-service breakdown of water use was
not found in the sources opened.

Next step: None.

### 6 · Recency and updating literacy — partial

> "about 66 billion liters in 2023" · "This one is settled, and it will stay settled."

Claims: C-1, C-6
Why: The figure is dated, and 2023 is the latest year in the
report's series, so the first quote holds. The second does not. The
same report shows the figure moving fast and projects that it will
keep moving. The central claim does not depend on the forecast, so
this is partial.

Contrast: LBNL 2024, p. 55: "In 2014, data centers consumed 21.2
billion liters of water," against "the 66-billion-liter total" in
2023 (66 ÷ 21.2 ≈ 3.1 times in nine years). For 2028: "Hyperscale
data centers in 2028 are expected to consume between 60 and 124
billion liters." That is one type of facility alone, set against 66
billion liters for all types in 2023 (124 ÷ 66 ≈ 1.9).

Next step: LBNL 2024, Section 5, Figure 5.9; the LBNL 2025 Update,
to see whether it revises water.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-1, C-2
Why: Both figures are attributed to the systematic primary reports
that measure them, by name and year, and both check out. A link or
a page number would make them easier to open.

Contrast: LBNL 2024, p. 55, gives the 66 billion liters. USGS gives
110,904 Mgal/d withdrawn for crop irrigation in the lower 48 states
in 2020, about 111 billion gallons a day, with approximately 72%
consumed.

Next step: None.

## Next steps

1. **The local question** — the nearby facility's water permit or
   utility agreement, and the other users and drought status of the
   supply it draws on. This is the check the central claim skips,
   and the one that could make it true or false for a given place.
2. **The other comparisons** — USGS's 2020 consumptive use for
   public supply and thermoelectric power. Cheapest check.
3. **The trend** — LBNL 2024, Figure 5.9, and the 2025 Update.
4. **Indirect water** — LBNL 2024, Section 5, p. 57, and Figure
   5.10 for how it varies by county.

## Unverified

- How on-site water consumption is spread across watersheds — LBNL
  gives national totals by facility type. Check operator
  disclosures and state or utility permit records.
- Any figure for a specific facility — the post names none.
- Whether the LBNL 2025 Update publishes water — two secondary
  summaries say it does not. Check the Update.

## A stronger version

A post that passed would keep the national share and stop there. It
would show the range of comparisons, not only the smallest. It
would say that evaporated water is consumed from the local supply,
that a small national share says nothing about one watershed, and
that the figure is growing. It could still conclude that the
national alarm is out of proportion, and a reader could check it.
What it could not say is that no local supply has a problem.

## Sources opened

- LBNL, *2024 United States Data Center Energy Usage Report* (Shehabi et al., Dec 2024, LBNL-2001637) — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — p. 55: 21.2 billion L in 2014, "the 66-billion-liter total" for 2023, hyperscale 60 to 124 billion L in 2028; p. 57: "nearly 800 billion liters" indirect; Table 4.2: the local-level concern; executive summary: 176 TWh in 2023. Read directly.
- USGS, "Irrigation Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 2020, lower 48 states: 110,904 Mgal/d withdrawn for crop irrigation, approximately 72% consumptive. Read directly.
- USGS, "Public Supply Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 2020, lower 48 states: 4,241 Mgal/d consumptive (about 12% of 35,823 Mgal/d withdrawn); consumptive use defined as water that "did not return to local waterbodies or groundwater". Read directly.
- USGS, "Thermoelectric Power Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use — 2020, lower 48 states: 2,359 Mgal/d of fresh water consumptive (about 3.9% of 59,889 Mgal/d withdrawn). Read directly.
