# ClaimCheck — AI water use is a rounding error

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "AI water use is a rounding error" (the title)
**Summary:** clear failures: 2 · partial: 2 · passed: 2 · N/A: 1
**Score:** 3 / 6 (1 N/A)

The two figures the post cites match the reports it names, and the
national share it derives from them is right. The problem sits in
dimensions 1 and 3: the post says evaporated water is "not even
really used," and it carries a national share down to every
locality. Dimensions 2 and 6 are partial because the only baseline
shown is the largest one and a 2023 figure is called permanent. The
national point survives; so does the local concern the post
dismisses, which it gives a reader no way to judge. This is a
literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** (central) > "AI water use is a rounding error"
- **C-2** > "on-site water consumption by all U.S. data centers at about 66 billion liters in 2023, roughly 17 billion gallons"
- **C-3** > "crop irrigation in the lower 48 states withdrew about 111 billion gallons a day in 2020 and consumed most of it"
- **C-4** > "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."
- **C-5** > "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."
- **C-6** > "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."
- **C-7** > "search, maps, email, payments, hospital records. People use them every day."
- **C-8** > "The numbers are in. This one is settled, and it will stay settled."

No side claims. C-2 to C-8 each support C-1, and the post proposes
no remedy.

## Findings

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-5
Why: Treats use and loss as one thing, in the dismissing direction.
Consumption is defined by what leaves the local supply, and
evaporation is that loss; the post's first paragraph uses the term
correctly ("on-site water consumption," "consumed most of it") and
this paragraph cancels it. The same reasoning would erase the
irrigation baseline in C-3, because that water is mostly
evapotranspired too.
Contrast: LBNL 2024, p. 56: "Water consumption refers to the amount
of withdrawn water that is permanently removed from the immediate
water cycle due to evaporation or other irreversible processes."
(https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf)
USGS, 2020 irrigation estimates: consumptive use means "it did not
return to local waterbodies or groundwater. In the case of
irrigation, consumptive water is incorporated into plants or lost
to evapotranspiration."
(https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use)
Where evaporated cooling water later falls as rain: not checked in
this run.
Next step: LBNL 2024, Table 4.2 (from p. 40), for which cooling
systems evaporate water and which do not; the USGS Water Science
glossary entry for "consumptive use," linked from the USGS page
above.

### 2 · Quantitative and comparative literacy — partial

> "Data centers come to a small fraction of one percent of that."

Absent: any second baseline. Irrigation is the only comparison in
the post.

Claims: C-2, C-3, C-4
Why: The post gives a dated denominator and the share is right
against it. But irrigation is the largest of the three USGS
categories checked here, so it yields the smallest share; against
the other two the same volume is about 1% to 2%, not "a small
fraction of one percent." "Small nationally" stands on every
baseline checked, which is why this is partial.
Contrast: arithmetic from figures opened in this run. The post also
sets a yearly figure beside a daily one, so both are put in gallons
per year here.

- Data centers, 2023 (LBNL 2024, p. 55): 66 billion L ÷ 3.785 L/gal
  = 17.4 billion gal.
- Irrigation, 2020 (USGS): 110,904 Mgal/d × 366 days = 40,591
  billion gal withdrawn; × 72% consumptive = 29,225 billion gal.
  17.4 ÷ 29,225 = 0.06%.
- Public supply, 2020 (USGS): 4,241 Mgal/d consumptive × 366 days
  = 1,552 billion gal. 17.4 ÷ 1,552 = 1.1%.
  (https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use)
- Thermoelectric power, 2020 (USGS): 2,359 Mgal/d consumptive × 366
  days = 863 billion gal. 17.4 ÷ 863 = 2.0%.
  (https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use)

The data-center year (2023) and the USGS year (2020) differ. The
post dates both.
Next step: USGS water-use pages for public supply and
thermoelectric power, 2020 consumptive use; the USGS National Water
Availability Assessment Data Companion for a total across all
categories, which would give a share of the whole.

### 3 · Scale and boundary literacy — clear failure

> "If the national number is a rounding error, the local one is too."

Claims: C-6, C-2, C-1
Why: A national share is used to dismiss a local question. A small
share of U.S. water says nothing about one watershed, and "nobody
who lives near a data center has anything to worry about" rests on
that step. Two more boundaries are named in C-2 and then dropped
from the conclusion: the figure is "on-site" only, and it covers
"all U.S. data centers" under a title about AI.
Contrast: LBNL 2024, Table 4.2 (pp. 40–41): cooling-tower
evaporation "has raised concerns regarding data center water
consumption and availability at the local level," and "local water
consumption remains an issue." USGS 2020 shows the national
denominator is itself uneven: California-Nevada took 24.6% of
irrigation withdrawals (27,242 Mgal/d) and the Northeast about 0.1%
(123 Mgal/d). Direct against indirect, LBNL 2024, p. 57: "The total
indirect water footprint of U.S. data centers is nearly 800 billion
liters" in 2023, water consumed at power plants; 800 ÷ 66 = 12
times the on-site figure the post uses. The post names no facility
or watershed, so no local figure was checked.
Next step: for a named facility, its permitted withdrawal or
utility filing against the local supply's other users; USGS
water-use estimates for that subwatershed (HUC12) in the National
Water Availability Assessment Data Companion.

### 4 · Trade-off and substitution literacy — N/A

Absent: any call for a cut or a remedy, anywhere in the post.

Claims: none
Why: The post describes a concern and dismisses it. It proposes
nothing, so there is no substitute or cost for it to name.
Contrast: None.
Next step: None.

### 5 · Output and value accounting — passed

> "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."

Claims: C-7
Why: Names what the facilities deliver, so a reader can weigh the
water against the product. The list fits the all-data-center figure
in C-2 rather than the "AI" in the title; it names no AI output.
Contrast: LBNL 2024, p. 49: in 2023, GPU-accelerated AI servers
used "more than 40 TWh" of "nearly 100 TWh" of server energy, so AI
is part of the load behind the water figure and not all of it. The
report splits direct water by data center type (Figure 5.9), not by
workload. Which services run in which facilities: not checked in
this run.
Next step: None.

### 6 · Recency and updating literacy — partial

> "about 66 billion liters in 2023" · "a day in 2020" · "This one is settled, and it will stay settled."

Claims: C-2, C-3, C-8
Why: The post dates both figures, and both were still the latest in
their series when read. But "it will stay settled" treats a 2023
snapshot as permanent, when the report it cites shows on-site use
tripling from 2014 to 2023 and projects more by 2028. The national
share stays small even at the top of that range, so the error does
not change the national conclusion.
Contrast: LBNL 2024, pp. 55–56: 21.2 billion L in 2014 and 66
billion L in 2023 (66 ÷ 21.2 = 3.1 times); "Hyperscale data centers
in 2028 are expected to consume between 60 and 124 billion liters,"
which is hyperscale alone against 66 for all types in 2023. At 124
billion L: 124 ÷ 3.785 = 32.8 billion gal; 32.8 ÷ 29,225 = 0.11% of
2020 irrigation consumptive use. LBNL's 2025 Update (June 2026)
revises electricity only: data centers "could account for 11.8% of
total U.S. electricity by 2030," where "the 2024 Report estimate
range was 6.7% to 12.0% of total U.S. electricity by 2028." A text
search of that update found no water estimate, only two passing
mentions of water.
(https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update)
The USGS pages, opened 2026-11-11, give 2020 as their current year
of estimates.
Next step: LBNL's next report in this series, for a water estimate
later than 2023; USGS water-use pages, for estimates later than
2020.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-2, C-3
Why: Both figures are attributed to systematic primary reports, and
both match what those reports say. The USGS dataset is not named,
but agency, category, area, and year were enough to find it. C-5
and C-6 cite nothing; those gaps are counted under dimensions 1
and 3.
Contrast: LBNL 2024, p. 55: "By 2023, hyperscale and colocation
account for 84% of the 66-billion-liter total." USGS: "In 2020,
about 110,904 million gallons per day (mgd) of water was withdrawn
for crop irrigation across the lower 48 United States," and
"Approximately 72% of the water withdrawn for irrigation was
consumptive use."
Next step: None.

## Next steps

1. Check one named facility against its own watershed. This is the
   check that would most change the conclusion. Open the facility's
   water permit or utility filing, and the USGS subwatershed
   (HUC12) water-use estimates in the National Water Availability
   Assessment Data Companion. Look for the facility's consumption
   as a share of local consumptive use, by month.
2. Read three more pages of the report the post already cites. This
   is the cheapest check. LBNL 2024, pp. 55–57: the 2028 projection
   for direct water and the "nearly 800 billion liters" of indirect
   water.
3. Add baselines. USGS public supply and thermoelectric power
   pages, 2020 consumptive use, then a total across all categories
   from the Data Companion.
4. Settle the mechanism. LBNL 2024, Table 4.2 and p. 56, and the
   USGS glossary entry for "consumptive use": what counts as
   consumed and why evaporation is the loss.
5. Watch for a newer water figure. LBNL's next report in the
   series; the 2025 Update did not carry one.

## Unverified

- Where evaporated cooling water falls as rain ("comes back as
  rain") — no source on atmospheric moisture transport was opened —
  a basin water budget in the USGS National Water Availability
  Assessment. Finding 1 does not depend on it; it rests on the
  definitions of consumption quoted there.
- Water conditions near any particular data center — the post names
  no facility or watershed — the facility's permit or utility
  filing; USGS HUC12 estimates.
- How much of the 66 billion liters serves AI rather than other
  workloads — the LBNL passages opened split water by data center
  type only — LBNL 2024, Section 5; operator disclosures.
- Which services (search, maps, email, payments, hospital records)
  run in the facilities counted — no source opened — operator
  disclosures.
- Data centers' share of all U.S. consumptive use — only three USGS
  category pages were opened — USGS National Water Availability
  Assessment Data Companion.

## A stronger version

The national point survives on the figures cited. A version that
passed the failed dimensions would keep the 66 billion liters and
show it against more than one baseline, in the same units. It would
say that evaporated water is consumed, meaning lost to the local
supply, as the post's own sources define it. It would limit the
conclusion to the national scale, or test a named facility against
its own watershed. It would say that "on-site" leaves out water
consumed at power plants, and that the figure covers all data
centers and not AI alone. And it would date the conclusion to 2023
and note the projection in the same report.

## Sources opened

- Shehabi et al., *2024 United States Data Center Energy Usage Report*, Lawrence Berkeley National Laboratory, December 2024 — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — direct water 21.2 billion L (2014) and 66 billion L (2023), the 2028 hyperscale range of 60 to 124 billion L (pp. 55–56); the definition of water consumption (p. 56); indirect water of nearly 800 billion L (p. 57); the local-level notes in Table 4.2 (pp. 40–41); server energy and the AI share (p. 49).
- LBNL publication record for the 2024 report — https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report — authors and publication date, 12/19/2024.
- Smith et al., *United States Data Center Energy Usage Report: 2025 Update*, Lawrence Berkeley National Laboratory, June 2026 — https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update — electricity outlook of 11.8% by 2030 against the 2024 report's 6.7% to 12.0% by 2028; no new water estimate.
- USGS, "Irrigation Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 2020 crop irrigation withdrawals of 110,904 Mgal/d in the lower 48, 72% consumptive, the definition of consumptive use, and the regional split.
- USGS, "Public Supply Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 2020 withdrawals of 35,823 Mgal/d and consumptive use of 4,241 Mgal/d.
- USGS, "Thermoelectric Power Water Use" — https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use — 2020 freshwater withdrawals of 59,889 Mgal/d and consumptive use of 2,359 Mgal/d.
