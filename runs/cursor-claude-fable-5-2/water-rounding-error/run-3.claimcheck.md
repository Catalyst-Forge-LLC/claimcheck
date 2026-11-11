# ClaimCheck — AI water use is a rounding error

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "AI water use is a rounding error"
**Summary:** clear failures: 2 · partial: 3 · passed: 1 · N/A: 1
**Score:** 2.5 / 6 (1 N/A)

The national comparison is sourced to two agency reports, and both
figures match what those reports say. The problem sits in mechanism
and boundary: the post says evaporated water is not lost, and it
carries a national share down to every local supply. Magnitude,
recency, and evidence are each half right. A legitimate concern
survives: the cited LBNL report itself notes concern about water
"availability at the local level". This is a literacy review. It
does not rule the claim true or false.

## Claims read

- **C-1** (central) > "AI water use is a rounding error" (the
  title; the body applies it nationally in C-4 and locally in C-6)
- **C-2** > "Lawrence Berkeley National Laboratory's 2024 data center report puts on-site water consumption by all U.S. data centers at about 66 billion liters in 2023, roughly 17 billion gallons."
- **C-3** > "The U.S. Geological Survey estimates that crop irrigation in the lower 48 states withdrew about 111 billion gallons a day in 2020 and consumed most of it."
- **C-4** > "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."
- **C-5** > "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."
- **C-6** > "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."
- **C-7** (side claim) > "And look at what comes out of those buildings: search, maps, email, payments, hospital records."
- **C-8** (side claim) > "This one is settled, and it will stay settled."

## Findings

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-5
Why: Treats use and loss as one thing. Water that evaporates is
the part counted as consumed: it leaves the local supply, even
though it stays in the global water cycle. The post uses the term
correctly for irrigation in C-3 ("withdrew … and consumed most of
it"), then drops the distinction for data centers, and the "nothing
to worry about" conclusion leans on that.
Contrast: USGS Professional Paper 1894-D (2025), glossary:
"Consumptive use is the part of water withdrawn that is evaporated,
transpired, incorporated in products or crops, consumed by humans
or livestock, or otherwise removed from the immediate water
environment."
(https://pubs.usgs.gov/publication/pp1894D/full). LBNL 2024, p. 56:
"Water consumption refers to the amount of withdrawn water that is
permanently removed from the immediate water cycle due to
evaporation or other irreversible processes."
(https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf).
The 66-billion-liter figure in C-2 is a consumption figure. By the
post's own reasoning the irrigation baseline, which USGS says is
"lost to evapotranspiration", would not count as used either.
Next step: USGS PP 1894-D, glossary and figure 1, for withdrawal,
consumptive use, and return flow. LBNL 2024, Section 4, cooling
systems table, for which systems evaporate water.

### 2 · Quantitative and comparative literacy — partial

> "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."

Claims: C-2, C-3, C-4
Why: Half right. The post names a denominator, dates it, and the
share it states holds. But it sets an annual total beside a daily
rate without showing the conversion, and it shows only the largest
water use in the country. Against a second baseline the same figure
is about 1.1%, which is not a small fraction of one percent.
Contrast: Arithmetic from the figures opened in this run (data
center figure is 2023, USGS figures are 2020):

- 66 billion L ÷ 3.785 L/gal = 17.4 billion gal a year.
- Irrigation withdrawals: 110,904 Mgal/d × 366 days = 40,591
  billion gal. 17.4 ÷ 40,591 = 0.043%.
- Irrigation consumptive use: 110,904 × 0.72 = 79,851 Mgal/d × 366
  = 29,225 billion gal. 17.4 ÷ 29,225 = 0.060%.
- Public supply withdrawals: 35,823 Mgal/d × 366 = 13,111 billion
  gal. 17.4 ÷ 13,111 = 0.13%.
- Public supply consumptive use: 4,241 Mgal/d × 366 = 1,552 billion
  gal. 17.4 ÷ 1,552 = 1.1%.

Irrigation figures: USGS, Irrigation Water Use
(https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use).
Public supply figures: USGS, Public Supply Water Use
(https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use).
Next step: USGS water-use pages, consumptive use by category, 2020.
Put the data center figure beside more than one category, in the
same unit and period.

### 3 · Scale and boundary literacy — clear failure

> "If the national number is a rounding error, the local one is too."

Claims: C-4, C-6
Why: A national total is used to dismiss a local question. A small
share of all U.S. irrigation says nothing about one facility's
share of one town's supply or one watershed, and the conclusion in
C-6 rests on that step. Two smaller boundary gaps sit beside it:
the figure is on-site only (the post says so) while the same report
counts a larger off-site amount, and the title says "AI" while the
figure covers all data centers.
Contrast: LBNL 2024, p. 41: "the water evaporation process in
cooling towers has raised concerns regarding data center water
consumption and availability at the local level." LBNL 2024, p. 55:
"hyperscale and colocation account for 84% of the 66-billion-liter
total". USGS PP 1894-D: "Withdrawals for these categories of water
use are highly spatially variable". LBNL 2024, p. 57: "The total
indirect water footprint of U.S. data centers is nearly 800 billion
liters", water consumed at power plants for the electricity; 800 ÷
66 = 12.1 times the on-site figure. On that wider boundary, (66 +
800) = 866 billion L ÷ 3.785 = 228.8 billion gal, and 228.8 ÷
29,225 = 0.78% of irrigation's 2020 consumptive use. No figure for
any single facility or watershed was checked in this run; the post
names none.
Next step: for a named facility, its water permit or utility filing
against the local supplier's total deliveries; USGS monthly water
use by small watershed (HUC12) for the basin it draws from.

### 4 · Trade-off and substitution literacy — N/A

Absent: any cut or remedy. The post argues that a concern is
unfounded and proposes nothing.

Claims: none
Why: The claim never touches this dimension's topic.
Contrast: not checked in this run
Next step: None.

### 5 · Output and value accounting — passed

> "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."

Claims: C-7 (side claim)
Why: Names what the facilities deliver, so a reader can weigh the
water against a product. The services listed are those of all data
centers, which matches the boundary of the water figure in C-2.
Contrast: not checked in this run
Next step: None.

### 6 · Recency and updating literacy — partial

> "2024 data center report … in 2023" · "in 2020" · "This one is settled, and it will stay settled."

Claims: C-2, C-3, C-8
Why: Half right. Each figure is dated and each is still the latest
water figure from its source. But the post says the matter "will
stay settled" while the report it cites projects growth, and it
does not mention that LBNL issued an update in June 2026. The
national comparison would survive the projected growth, so the
error does not change that conclusion.
Contrast: LBNL 2024, pp. 55–56: "Hyperscale data centers in 2028
are expected to consume between 60 and 124 billion liters", against
66 billion liters for all data centers in 2023. At the high end,
124 billion L ÷ 3.785 = 32.8 billion gal, and 32.8 ÷ 29,225 = 0.11%
of irrigation's 2020 consumptive use. LBNL, *United States Data
Center Energy Usage Report: 2025 Update* (published 2026-06-18,
https://www.osti.gov/servlets/purl/3374245): a text search of the
report finds no water-consumption figure; it revises electricity
estimates and says it is "increasingly important to also understand
how this growth interacts with, and may be constrained by, supply
chain capacity, workforce availability, and water resources." The
USGS irrigation page shows 2020 as its most recent year.
Next step: LBNL 2024, Figure 5.9, for the 2028 range by data center
type; the next LBNL edition that reports water; USGS water-use
pages for estimates after 2020.

### 7 · Source and evidentiary literacy — partial

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates" · "The numbers are in."

Claims: C-2, C-3, C-5, C-6
Why: Right in one place, absent in another. Both national figures
are traced to named agency sources and both match. C-5 and C-6
cite nothing: no measurement of where the evaporated water returns,
and no permit, utility filing, or watershed record behind the local
conclusion. "The numbers are in" rests a local finding on two
national estimates.
Contrast: LBNL 2024, p. 55: "the 66-billion-liter total" for 2023
matches C-2. USGS, Irrigation Water Use: "In 2020, about 110,904
million gallons per day (mgd) of water was withdrawn for crop
irrigation across the lower 48 United States. Approximately 72% of
the water withdrawn for irrigation was consumptive use" matches
C-3. Both are modeled estimates, not metered totals: LBNL says its
water metrics "are simulated using established thermodynamics-based
models", and USGS says "2020 values are modeled estimates". USGS PP
1894-D gives a slightly different figure for water year 2020:
108,723 Mgal/d withdrawn and 78,400 Mgal/d consumed.
Next step: the local records named under dimension 3. For C-3, cite
the USGS page or PP 1894-D by title so a reader can open it.

## Next steps

1. Check the local case the post dismisses — a named facility's
   water permit or utility filing, against the local supplier's
   total deliveries and the USGS HUC12 water-use data for that
   watershed.
2. Read the definition of consumptive use — USGS PP 1894-D,
   glossary and figure 1. One paragraph settles "nothing is lost."
3. Read the off-site figure and the projection — LBNL 2024,
   Section 5, "Indirect Water Consumption and Emissions from
   Electricity Use" (pp. 56–58) and Figure 5.9 (p. 56).
4. Add a second baseline — USGS, Public Supply Water Use, 2020
   consumptive use.
5. Find how much evaporated cooling water falls again in the same
   basin — a peer-reviewed moisture-recycling study for the region
   in question.

## Unverified

- Water use at any single data center, or the condition of any
  local supply — the post names no facility, and none was looked
  up — the facility's permit or utility filing; USGS HUC12 data.
- Where evaporated cooling water falls as rain, and how much
  returns to the basin it left — no primary source was opened on
  this — a peer-reviewed moisture-recycling study.
- AI's share of the 66 billion liters — LBNL's Figure 5.9 splits
  direct water by data center type, and no split by workload was
  found in the passages read — LBNL 2024, Section 5.
- Whether USGS has published national irrigation estimates for any
  year after 2020 — only the two USGS topic pages and PP 1894-D
  were opened — USGS, Accessing Water Use Data.
- Whether the 2025 Update carries water data in a chart or image —
  the check was a text search of the PDF — the report's figures.

## A stronger version

The national point survives: on the sources the post cites, on-site
data center water consumption in 2023 was a few hundredths of one
percent of irrigation's. A version that passed the failed
dimensions would keep that claim national, call the water consumed
because it evaporates, state that the figure is on-site and give
the off-site figure from the same report, show a second baseline
such as public supply, and either drop the local conclusion or rest
it on a named facility's permit and the local supply's records. It
would also date the claim instead of saying it will stay settled,
since the cited report projects growth through 2028.

## Sources opened

- LBNL, *2024 United States Data Center Energy Usage Report* (December 2024) — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — 66 billion liters direct water in 2023 and the 84% share (p. 55); 60–124 billion liters for hyperscale in 2028 (pp. 55–56); the definition of water consumption (p. 56); nearly 800 billion liters indirect (p. 57); local-level concern in the cooling systems table (p. 41); water metrics are simulated (p. 39).
- LBNL publication record for the 2024 report — https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report — publication date 12/19/2024.
- LBNL, *United States Data Center Energy Usage Report: 2025 Update* (2026-06-18) — https://www.osti.gov/servlets/purl/3374245 — a newer edition exists; no water-consumption figure found by text search; the quoted line on water resources.
- USGS, Irrigation Water Use — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 110,904 Mgal/d withdrawn in 2020, 72% consumptive; 2020 values are modeled.
- USGS, Public Supply Water Use — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 35,823 Mgal/d withdrawn in 2020, 4,241 Mgal/d consumptive.
- USGS Professional Paper 1894-D, *Water use across the conterminous United States, water years 2010–20* (first posted January 15, 2025) — https://pubs.usgs.gov/publication/pp1894D/full — definition of consumptive use; water year 2020 irrigation figures; spatial variability.
