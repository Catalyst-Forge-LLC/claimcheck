# ClaimCheck — AI water use is a rounding error

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "So nobody who lives near a data center has anything to worry about."
**Summary:** clear failures: 2 · partial: 2 · passed: 2 · N/A: 1
**Score:** 3 / 6 (1 N/A)

Mechanism and boundary carry the problem: the post says evaporated
water is not lost, and it carries a national share down to every
local supply. Its two cited figures are dated and match the primary
sources opened in this run, and the national comparison to irrigation
holds as arithmetic. The concern it dismisses, water availability
near a particular facility, survives, because nothing in the post
measures it. This is a literacy review; it does not rule the claim
true or false.

## Claims read

- **C-1** > "on-site water consumption by all U.S. data centers at about 66 billion liters in 2023, roughly 17 billion gallons"
- **C-2** > "crop irrigation in the lower 48 states withdrew about 111 billion gallons a day in 2020 and consumed most of it"
- **C-3** > "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."
- **C-4** > "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."
- **C-5** (central) > "So nobody who lives near a data center has anything to worry about."
- **C-6** > "If the national number is a rounding error, the local one is too."
- **C-7** > "look at what comes out of those buildings: search, maps, email, payments, hospital records"
- **C-8** (side claim) > "This one is settled, and it will stay settled."

## Findings

### 1 · Mechanistic literacy — clear failure

> "It is not even really used. The water evaporates and comes back as rain, so nothing is lost."

Claims: C-1, C-2, C-4
Why: Treats use and loss as one thing, in the direction of "no loss."
Evaporation is what the word "consumption" in C-1 counts: water that
leaves the local supply as vapor, wherever it later falls. The post
uses the term correctly in its first paragraph ("on-site water
consumption", "withdrew … and consumed most of it") and then
withdraws it for data centers only; the same reasoning would erase
the irrigation baseline it compares against.
Contrast: LBNL 2024 report, p. 56: "Water consumption refers to the
amount of withdrawn water that is permanently removed from the
immediate water cycle due to evaporation or other irreversible
processes."
(https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf).
USGS, Irrigation Water Use: consumptive use means "it did not return
to local waterbodies or groundwater. In the case of irrigation,
consumptive water is incorporated into plants or lost to
evapotranspiration."
(https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use)
Next step: LBNL 2024 report, Section 4, the cooling-system table
(p. 41) and Figure 4.4 — which systems evaporate water and which do
not. For one facility: its utility filing, water withdrawn against
water discharged.

### 2 · Quantitative and comparative literacy — partial

> "Data centers come to a small fraction of one percent of that. Nationally, it is a rounding error."

Claims: C-1, C-2, C-3
Why: The post gives a dated baseline and the share it states is
correct. But it shows a single comparison, and against public supply
the same figure is about 19 times larger as a share; it also prints
an annual figure beside a daily one ("17 billion gallons", "111
billion gallons a day") without the conversion. The national
conclusion survives both points, so this is partial.
Contrast: Arithmetic from the figures opened in this run. The USGS
figures are average daily rates for 2020, a leap year, so they are
multiplied by 366.
- Data centers, 2023: 66 billion L ÷ 3.785 L/gal = 17.4 billion
  gallons (LBNL 2024, p. 55).
- Irrigation withdrawals, 2020: 110,904 mgd × 366 days = 40,591
  billion gallons a year. Share: 17.4 ÷ 40,591 = 0.043%.
- Irrigation consumptive use, 2020: 72% × 110,904 mgd = 79,851 mgd;
  × 366 days = 29,225 billion gallons a year. Share: 17.4 ÷ 29,225 =
  0.060%. (USGS, Irrigation Water Use, URL above.)
- Public supply consumptive use, 2020: 4,241 mgd × 366 days = 1,552
  billion gallons a year. Share: 17.4 ÷ 1,552 = 1.1%, which is
  1.12 ÷ 0.060 = 19 times the irrigation share. Public supply
  withdrawals: 35,823 mgd × 366 = 13,111 billion gallons; share
  17.4 ÷ 13,111 = 0.13%.
  (USGS, Public Supply Water Use,
  https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use)
- Unit check: 17.4 billion gallons ÷ 110.9 billion gallons a day =
  0.157 days, about 3.8 hours of 2020 irrigation withdrawals.
The data-center figure is for 2023 and the USGS figures are for 2020.
Next step: USGS water-use pages, consumptive use by category for
2020, to place the figure against at least one baseline besides
irrigation.

### 3 · Scale and boundary literacy — clear failure

> "If the national number is a rounding error, the local one is too."

Claims: C-5, C-6
Why: Flattens local supply with a national total, and the central
claim rests on that step. A share of national irrigation says nothing
about one watershed or one utility, where the facility's draw meets a
different set of users. The post states its own boundary accurately
("on-site", "all U.S. data centers", "lower 48"), but the title says
"AI water use," and on-site water is one of two water figures in the
report it cites.
Contrast: LBNL 2024 report, p. 41, on water-cooled chillers: "the
water evaporation process in cooling towers has raised concerns
regarding data center water consumption and availability at the local
level"; on waterside economizers: "local water consumption remains an
issue." Same report, p. 57: "The total indirect water footprint of
U.S. data centers is nearly 800 billion liters" (2023, water consumed
generating their electricity); 800 ÷ 66 = 12 times the on-site
figure. Direct plus indirect: 866 billion L ÷ 3.785 = 229 billion
gallons; 229 ÷ 29,225 = 0.78% of 2020 irrigation consumptive use.
The baseline is not uniform either: USGS puts 2020 irrigation
withdrawals at 27,242 mgd in the California-Nevada region and 123 mgd
in the Northeast region, a ratio of 27,242 ÷ 123 = 221.
Next step: the facility's permitted withdrawal or utility filing,
set against the local supply's other users; USGS National Water
Availability Assessment Data Companion, withdrawals by HUC12
subwatershed, for the watershed in question.

### 4 · Trade-off and substitution literacy — N/A

Absent: any call for a cut or a remedy.

Claims: none
Why: The post dismisses a concern and proposes nothing, so it never
touches what would happen instead.
Contrast: None.
Next step: None.

### 5 · Output and value accounting — passed

> "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."

Claims: C-7
Why: Names what the facilities deliver, so a reader can weigh the
water against the product. The list covers data centers in general,
which matches the all-data-centers figure in C-1.
Contrast: not checked in this run.
Next step: None.

### 6 · Recency and updating literacy — partial

> "about 66 billion liters in 2023" · "about 111 billion gallons a day in 2020" · "This one is settled, and it will stay settled."

Claims: C-1, C-2, C-8
Why: The post dates both figures, and each is still the latest in
its series in the sources opened here. But C-8 says the answer will
not change, while the report it cites projects growth through 2028.
The high end of that projection is still a small share of
irrigation, so the national conclusion stands and the finding is
partial.
Contrast: LBNL 2024 report, pp. 55–56: "In 2014, data centers
consumed 21.2 billion liters of water"; 2023 total 66 billion liters
(66 ÷ 21.2 = 3.1 times); "Hyperscale data centers in 2028 are
expected to consume between 60 and 124 billion liters." For hyperscale
alone at the high end: 124 ÷ 3.785 = 32.8 billion gallons; 32.8 ÷
29,225 = 0.11% of 2020 irrigation consumptive use. Same report,
p. 48: average WUE "stays just over 0.36 L/kWh through 2023" and then
"rises slightly, reaching between 0.45 and 0.48 L/kWh." A newer
edition exists: LBNL, *United States Data Center Energy Usage Report:
2025 Update* (June 2026,
https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update).
It revises electricity (2024: "192 terawatt-hours (TWh), accounting
for 4.7% of total U.S. electricity consumption"; 2030 Reference Case
649 TWh) and its text gives no new water estimate, so the 2023 water
figure has not been replaced. The USGS irrigation page gives 2020 as
its latest year.
Next step: the next LBNL edition that restates direct water
consumption; until then, LBNL 2024, Figure 5.9, for the 2028 range.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-1, C-2
Why: Names the agency and the report for both figures, and both are
systematic primary estimates a reader can open. The wording ("puts …
at about", "estimates") fits what they are: modeled estimates, not
metered totals.
Contrast: Both figures match. LBNL 2024, p. 55: "the
66-billion-liter total" for 2023, under "Direct Water Consumption";
Section 4 says PUE and WUE "are simulated using established
thermodynamics-based models." USGS, Irrigation Water Use: "In 2020,
about 110,904 million gallons per day (mgd) of water was withdrawn
for crop irrigation across the lower 48 United States.
Approximately 72% of the water withdrawn for irrigation was
consumptive use." LBNL's publication page dates the report
12/19/2024
(https://energyanalysis.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report).
Next step: None.

## Next steps

1. Settle the local question the central claim skips — the water
   permit or utility filing of a named facility, against its local
   supply's other users; USGS National Water Availability Assessment
   Data Companion, withdrawals and consumptive use by HUC12
   subwatershed.
2. Add a second baseline and do the unit conversion — USGS Public
   Supply Water Use page, 2020 consumptive use (4,241 mgd), beside the
   irrigation figure already cited.
3. Read the mechanism in the cited report — LBNL 2024, Section 4,
   cooling-system table (p. 41) and the definition of water
   consumption on p. 56.
4. Check the other boundary — LBNL 2024, "Indirect Water Consumption
   and Emissions from Electricity Use," pp. 56–58 (nearly 800 billion
   liters in 2023).
5. Check whether "settled" holds — LBNL 2024, Figure 5.9 and pp.
   55–56, for the 2028 range; the next LBNL edition for a restated
   water figure.

## Unverified

- Any local figure — the post names no facility, city, or watershed,
  so there was nothing local to open — the facility's water permit or
  utility filing; USGS HUC12 water-use data. No status depends on it.
- How much of the 66 billion liters serves AI workloads, as the title
  implies — the LBNL passage read (p. 55) splits direct water by
  facility type, not by workload, and no other source was opened —
  operator sustainability disclosures; a later LBNL edition.
- Which services run in the facilities the post has in mind (C-7) —
  no source was opened for this — operator disclosures for a named
  facility. The `passed` on dimension 5 rests on the post naming the
  output, not on this.
- Where evaporated cooling water falls as precipitation — no source
  was opened — regional moisture-recycling studies for the watershed
  in question. The finding on dimension 1 rests on the definition of
  consumption, which was checked.

## A stronger version

The national comparison holds and could stay. To pass the failed
dimensions, the claim would need to drop "nothing is lost" and treat
evaporated cooling water as consumption from the local supply, the
way its own sources do; limit its conclusion to the national scale,
or bring a named facility's draw against that facility's local supply
before saying anything about people who live near one; say that its
figure is on-site water for all data centers, and that the same
report counts a larger indirect figure; show a second baseline beside
irrigation; and give the year of each figure in place of "it will
stay settled."

## Sources opened

- LBNL, *2024 United States Data Center Energy Usage Report* (Shehabi et al., December 2024) — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — 66 billion liters direct water in 2023 and 21.2 billion in 2014 (p. 55); 2028 hyperscale range (pp. 55–56); definition of water consumption (p. 56); indirect water, nearly 800 billion liters (p. 57); local-level remarks in the cooling-system table (p. 41); WUE trend (p. 48); simulation method (Section 4).
- LBNL Energy Analysis Division, publication page for the 2024 report — https://energyanalysis.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report — publication date 12/19/2024, authors, abstract.
- LBNL, *United States Data Center Energy Usage Report: 2025 Update* (June 2026) — https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update — 2024 electricity 192 TWh (4.7%), 2030 Reference Case 649 TWh; a text search for "water", "WUE", and "billion liters" found no new water estimate.
- USGS, Irrigation Water Use — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 2020 crop irrigation withdrawals 110,904 mgd in the lower 48; about 72% consumptive; definition of consumptive use; regional figures (California-Nevada 27,242 mgd, Northeast 123 mgd).
- USGS, Public Supply Water Use — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 2020 public supply withdrawals 35,823 mgd; consumptive use 4,241 mgd (about 12%).
