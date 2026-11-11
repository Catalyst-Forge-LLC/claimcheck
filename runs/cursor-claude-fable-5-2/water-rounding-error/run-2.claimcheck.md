# ClaimCheck — AI water use is a rounding error

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "The panic about AI and water is innumerate."
**Summary:** clear failures: 2 · partial: 1 · passed: 3 · N/A: 1
**Score:** 3.5 / 6 (1 N/A)

The national arithmetic holds: both figures match the reports the
post names, and the share it states is right. The problem sits in
two steps the post takes after the arithmetic. It says evaporated
water is not lost (mechanism), and it carries a national share down
to every locality (boundary). The national point survives; the
local worry the post dismisses is not answered by anything in it.
This is a literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** (central) > "The panic about AI and water is innumerate." Title: "AI water use is a rounding error".
- **C-2** > "Lawrence Berkeley National Laboratory's 2024 data center report puts on-site water consumption by all U.S. data centers at about 66 billion liters in 2023, roughly 17 billion gallons."
- **C-3** > "The U.S. Geological Survey estimates that crop irrigation in the lower 48 states withdrew about 111 billion gallons a day in 2020 and consumed most of it."
- **C-4** > "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."
- **C-5** > "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."
- **C-6** > "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."
- **C-7** > "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."
- **C-8** (side claim) > "The numbers are in. This one is settled, and it will stay settled."

## Findings

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-5 (against C-2, C-3)
Why: Treats use and loss as one thing, in the direction of "no
loss." Evaporation is what consumption means: the water leaves the
local supply, and rain falls somewhere else at some other time. The
post gets the distinction right two paragraphs earlier ("on-site
water consumption"; irrigation "withdrew ... and consumed most of
it"), then drops it. By the same reasoning irrigation loses nothing
either, and the post's own comparison would have nothing to compare.
Contrast: LBNL 2024, p. 56: "Water consumption refers to the amount
of withdrawn water that is permanently removed from the immediate
water cycle due to evaporation or other irreversible processes."
USGS, Irrigation Water Use page (2020 data): consumptive use means
the water "did not return to local waterbodies or groundwater."
URLs under Sources opened.
Next step: LBNL 2024, the cooling-system descriptions on
pp. 41–45, for which systems evaporate water and which do not;
USGS water-use definitions of withdrawal, consumptive use, and
return flow.

### 2 · Quantitative and comparative literacy — passed

> "Data centers come to a small fraction of one percent of that."

Claims: C-2, C-3, C-4
Why: Gives an absolute figure, a named larger use, the year of
each, and says the irrigation number is a withdrawal of which most
was consumed. A reader can redo the division. The post shows one
comparison, the largest use; a second is shown below, and the
national share stays small under it.
Contrast: Both figures match what the sources say. LBNL 2024,
p. 55: "the 66-billion-liter total" for 2023. USGS: "In 2020, about
110,904 million gallons per day (mgd) of water was withdrawn for
crop irrigation across the lower 48 United States," about 72% of
it consumptive. Arithmetic, mine:

- 66 billion L ÷ 3.785 L/gal = 17.4 billion gal (2023).
- Irrigation withdrawals: 110,904 Mgal/d × 365 = 40,480 billion
  gal/yr (2020). 17.4 ÷ 40,480 = 0.04%.
- Irrigation consumptive use: 110,904 × 0.72 = 79,851 Mgal/d;
  × 365 = 29,146 billion gal/yr. 17.4 ÷ 29,146 = 0.06%.
- Public supply (USGS, 2020: 35,823 Mgal/d withdrawn, 4,241 Mgal/d
  consumed): 35,823 × 365 = 13,075 billion gal/yr, 17.4 ÷ 13,075 =
  0.13%; 4,241 × 365 = 1,548 billion gal/yr, 17.4 ÷ 1,548 = 1.1%.

The data-center year is 2023 and the USGS year is 2020; the post
states both.
Next step: None.

### 3 · Scale and boundary literacy — clear failure

> "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."

Claims: C-6, C-4, C-1
Why: Flattens local stress with a national total. A share of
lower-48 irrigation says nothing about one facility's draw on one
watershed or one utility, and the post offers no local figure. The
dismissal in C-1 rests on this step. A second boundary is stated
but not carried through: the figure is "on-site," and the same
report puts the water consumed to generate the electricity far
higher.
Contrast: LBNL 2024, p. 41: "the water evaporation process in
cooling towers has raised concerns regarding data center water
consumption and availability at the local level." LBNL 2024, p. 57
(2023): "The total indirect water footprint of U.S. data centers is
nearly 800 billion liters." Arithmetic, mine: 800 ÷ 66 = about 12
times the on-site figure; 66 + 800 = 866 billion L ÷ 3.785 = 229
billion gal; 229 ÷ 29,146 = 0.8% of irrigation's consumptive use,
and 229 ÷ 1,548 = 15% of public supply's. That water is consumed at
power plants across the grid, so it is a different place as well as
a different quantity. Also: the title says "AI"; the figure covers
"all U.S. data centers," and the passage read (p. 55) splits water
by data center type, not by AI and other workloads.
Next step: Pick a facility. Open its water permit or the serving
utility's filing and compare the permitted or billed volume with
the utility's total deliveries and the watershed's other users.
USGS publishes withdrawals by subwatershed (HUC12) in the National
Water Availability Assessment Data Companion.

### 4 · Trade-off and substitution literacy — N/A

Absent: any call for a cut or a remedy. The post argues that a
concern is unfounded and proposes nothing.

Claims: none
Why: The claim never touches what would happen instead.
Contrast: None.
Next step: None.

### 5 · Output and value accounting — passed

> "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."

Claims: C-7
Why: Names what the facilities deliver and sets it beside the water
figure. The services listed are those of data centers in general,
which is the boundary of the water number the post uses.
Contrast: LBNL 2024, p. 55, counts water across hyperscale,
colocation, and internal data centers, so the figure and the listed
services cover the same set of buildings. The list of services
itself was not checked against a source.
Next step: None.

### 6 · Recency and updating literacy — partial

> "This one is settled, and it will stay settled."

Claims: C-2, C-3, C-8
Why: Right in one place and wrong in another. The post dates both
figures (2023 and 2020), and the 2023 water figure is still LBNL's
latest. But "will stay settled" sets aside the growth the same
report shows and projects. The national share stays small under
the report's 2028 range, so the conclusion in C-4 does not change.
Contrast: LBNL 2024, pp. 55–56: "In 2014, data centers consumed
21.2 billion liters of water"; 66 billion liters by 2023;
"Hyperscale data centers in 2028 are expected to consume between
60 and 124 billion liters." Arithmetic, mine: 66 ÷ 21.2 = 3.1 times
in nine years; 124 ÷ 3.785 = 32.8 billion gal, and 32.8 ÷ 29,146 =
0.11% of irrigation's 2020 consumptive use, for hyperscale alone.
A newer edition exists: LBNL's *United States Data Center Energy
Usage Report: 2025 Update* (published 2026-06-18). It contains no
water estimate (the word appears twice, neither time with a
figure). It revises electricity: Reference Case "649 TWh in 2030,"
against "approximately 176 TWh in 2023" in the 2024 report (p. 57),
with earlier years revised slightly down. Electricity is not water,
but on-site and indirect water both follow it. The USGS page opened
gives 2020 as its latest year and notes "2020 values are modeled
estimates."
Next step: LBNL 2024, Figure 5.9 (direct water by data center
type, through 2028). Watch for LBNL's next water estimate; the
2025 Update does not supply one.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-2, C-3
Why: Both figures are traced to the agency reports that produced
them, with the year, and both match. The LBNL citation names the
report; the USGS one names the agency and year but no report
title. C-5 and C-6 cite nothing; those gaps are counted under
dimensions 1 and 3.
Contrast: LBNL 2024, p. 55, and the USGS Irrigation Water Use page
give the figures as the post states them (see dimension 2).
Next step: None.

## Next steps

1. Local draw against local supply — a named facility's water
   permit or utility filing, set against that utility's deliveries
   and the watershed's other uses (USGS National Water Availability
   Assessment Data Companion, HUC12 withdrawals). This is the check
   that decides whether C-6 holds anywhere.
2. Direct beside indirect — LBNL 2024, pp. 55–57: the 66 billion
   liters on site and the "nearly 800 billion liters" at power
   plants, both for 2023. Two pages, already located.
3. What "consumption" means — LBNL 2024, p. 56, and the USGS
   definition of consumptive use, read against C-5.
4. AI's share — LBNL 2024, Section 5 results by server and data
   center type, for how much of the 2023 total belongs to AI
   workloads. The post's title says AI; its number does not.
5. Trend — LBNL 2024, Figure 5.9, 2014 to 2028, and the next LBNL
   water estimate when one is published.

## Unverified

No finding's status depends on these.

- The local share for any facility or watershed — the post names
  none, and none was checked — facility water permit or utility
  filing; USGS HUC12 data.
- AI's share of the 66 billion liters — the passage read splits by
  data center type only; the rest of the report was not searched
  for a split by workload — LBNL 2024, Section 5.
- That the listed services ("search, maps, email, payments,
  hospital records") run in the data centers counted — not checked
  against a source — operator disclosures.
- Whether USGS has published an irrigation estimate later than
  2020 — only the Irrigation Water Use page was opened; it shows
  2020 as the latest year — USGS water-use data releases and
  Professional Paper 1894-D, which was not opened in this run.
- How much of data-center cooling water is evaporated rather than
  discharged ("The water evaporates") — not checked — LBNL 2024,
  cooling-system descriptions, pp. 41–45.

## A stronger version

The national point survives and can be made without the two failed
steps. A version that passes would keep the sourced comparison,
add a second baseline and the indirect water at power plants, call
evaporated water what both of its sources call it (consumed, gone
from the local supply), and stop at the national boundary or bring
a local measurement before saying anything about people who live
near a facility. It would also date the conclusion to 2023 rather
than promise it will hold, since its own source projects growth.
The local concern is a separate question the national figure
cannot settle in either direction.

## Sources opened

- Shehabi et al., *2024 United States Data Center Energy Usage Report*, Lawrence Berkeley National Laboratory, December 2024 — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — 66 billion liters direct water in 2023 and 21.2 billion in 2014 (p. 55); 2028 hyperscale range of 60–124 billion liters (pp. 55–56); definition of water consumption (p. 56); "nearly 800 billion liters" indirect and 176 TWh in 2023 (p. 57); local-level concern about cooling-tower evaporation (p. 41).
- LBNL publication page for the 2024 report — https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report — title, authors, date (2024-12-19).
- U.S. Geological Survey, "Irrigation Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 110,904 Mgal/d withdrawn for crop irrigation in the lower 48 in 2020; about 72% consumptive; meaning of consumptive use; "2020 values are modeled estimates."
- U.S. Geological Survey, "Public Supply Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 35,823 Mgal/d withdrawn and 4,241 Mgal/d consumed for public supply in the lower 48 in 2020.
- Smith et al., *United States Data Center Energy Usage Report: 2025 Update*, Lawrence Berkeley National Laboratory, published 2026-06-18 — https://escholarship.org/content/qt33m6w3x0/qt33m6w3x0.pdf — no water estimate in the update; Reference Case 649 TWh in 2030; earlier years revised slightly down.
