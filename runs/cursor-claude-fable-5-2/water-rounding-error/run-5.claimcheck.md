# ClaimCheck — AI water use is a rounding error

**Source:** `post.md`, read 2026-11-11. Unchanged.  
**Central claim:** > "AI water use is a rounding error" (the title)  
**Summary:** clear failures: 2 · partial: 1 · passed: 3 · N/A: 1  
**Score:** 3.5 / 6 (1 N/A)

The national arithmetic holds: both figures match the sources the post names, and the share comes out where the post says it does. The problems are in the two steps that follow. Mechanism fails where the post says evaporated water is not lost, and boundary fails where it carries a national share to every local supply. A legitimate concern survives, which is water availability near individual facilities, and the LBNL report the post cites raises it. This is a literacy review and does not rule the claim true or false.

## Claims read

- **C-1** (central) > "AI water use is a rounding error" · "The panic about AI and water is innumerate."
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

Claims: C-2, C-5  
Why: Treats use and loss as one thing, in the dismissive direction. Evaporated water stays in the hydrologic cycle, but it leaves the supply it was drawn from, and that loss is what the "consumption" figure in C-2 measures. Paragraph one uses the terms correctly ("on-site water consumption", "withdrew … and consumed most of it"); paragraph two then denies the distinction, and C-6 opens with "So" on the strength of it.  
Contrast: USGS defines consumptive use as water that "did not return to local waterbodies or groundwater" (https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use). LBNL 2024, p. 56: "Water consumption refers to the amount of withdrawn water that is permanently removed from the immediate water cycle due to evaporation or other irreversible processes." LBNL reports the 66 billion liters under the heading "Direct Water Consumption" (p. 55).  
Next step: LBNL 2024, Section 4, Table 4.2 (pp. 40–41), for which cooling systems evaporate water and which do not. For any one facility, find where its makeup water is drawn from and whether any is discharged back.

### 2 · Quantitative and comparative literacy — passed

> "Data centers come to a small fraction of one percent of that."

Claims: C-2, C-3, C-4  
Why: Gives the absolute figure, a named baseline, and the share, and the share checks out. Two things are left to the reader: the data-center figure is per year and the irrigation figure is per day, and irrigation is the largest baseline available, so the other comparisons below come out higher.  
Contrast: Arithmetic from the two sources the post names, plus two more USGS categories. The data-center figure is for 2023 and the USGS figures are for 2020, which had 366 days.

- 66 billion L ÷ 3.785 L per gallon = 17.4 billion gallons (LBNL 2024, p. 55).
- Irrigation withdrawals: 110,904 million gallons per day × 366 = 40,591 billion gallons. 17.4 ÷ 40,591 = 0.043%.
- Irrigation consumptive use: 72% × 110,904 = 79,851 million gallons per day × 366 = 29,225 billion gallons. 17.4 ÷ 29,225 = 0.060%.
- Public supply consumptive use: 4,241 million gallons per day × 366 = 1,552 billion gallons. 17.4 ÷ 1,552 = 1.1%.
- Thermoelectric power consumptive use (freshwater): 2,359 million gallons per day × 366 = 863 billion gallons. 17.4 ÷ 863 = 2.0%.

USGS figures are from https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use, https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use, and https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use.  
Next step: None.

### 3 · Scale and boundary literacy — clear failure

> "So nobody who lives near a data center has anything to worry about. If the national number is a rounding error, the local one is too."

Claims: C-1, C-6  
Why: Uses a national share to dismiss a local question. A ratio of two national totals says nothing about one watershed, because data centers and irrigation are each concentrated in particular places, and the post gives no local figure. A second boundary is labeled but not carried through: the title covers "AI water use", while C-2 counts on-site water for all data centers and leaves out the water consumed generating their electricity.  
Contrast: LBNL 2024, Table 4.2 (pp. 40–41): cooling-tower evaporation "has raised concerns regarding data center water consumption and availability at the local level", and with waterside economizers "local water consumption remains an issue." LBNL 2024, Section 4: "Virginia hosts the highest electricity demand associated with data centers in the United States … followed by California and Texas." USGS, 2020: the California-Nevada region took 24.6% of irrigation withdrawals (27,242 million gallons per day) and the Northeast 0.1% (123 million gallons per day). LBNL 2024, p. 57: "The total indirect water footprint of U.S. data centers is nearly 800 billion liters"; 800 ÷ 66 ≈ 12 times the on-site figure.  
Next step: For a named facility, its water permit or utility filing for the volume drawn, set against the same supply's other users. USGS National Water Availability Assessment Data Companion (https://water.usgs.gov/nwaa-data/) has withdrawals by HUC12 subwatershed for the surrounding area.

### 4 · Trade-off and substitution literacy — N/A

Absent: any call for a cut, a remedy, or an alternative.

Claims: none  
Why: The post dismisses a concern and proposes nothing, so it never touches this dimension.  
Contrast: None.  
Next step: None.

### 5 · Output and value accounting — passed

> "And look at what comes out of those buildings: search, maps, email, payments, hospital records. People use them every day."

Claims: C-7  
Why: Names what the facilities deliver, at the same boundary as its water figure (all data centers). It lists no output specific to AI, though the title is about AI; that mismatch is counted under dimension 3.  
Contrast: LBNL 2024, p. 49: servers used "nearly 100 TWh in 2023", of which GPU-accelerated AI servers used "more than 40 TWh" and conventional servers "nearly 60 TWh". The buildings carry both kinds of work. The report does not list services by name.  
Next step: None.

### 6 · Recency and updating literacy — partial

> "about 66 billion liters in 2023" · "in 2020" · "This one is settled, and it will stay settled."

Claims: C-2, C-3, C-8  
Why: Every figure is dated, and each is the latest I found from its agency, which is the half that passes. The other half is C-8, which treats a 2023 snapshot as permanent when the report it cites projects growth. That fault rests on a side claim, and the national share stays under one percent at the projected high end, so the status is partial. The post itself carries no date.  
Contrast: LBNL 2024, pp. 55–56: "Hyperscale data centers in 2028 are expected to consume between 60 and 124 billion liters", against 66 billion for all data centers in 2023. 124 billion L ÷ 3.785 = 32.8 billion gallons; 32.8 ÷ 29,225 = 0.11% of 2020 irrigation consumptive use. LBNL 2024, p. 48: average site WUE "stays just over 0.36 L/kWh through 2023" and then reaches "between 0.45 and 0.48 L/kWh". LBNL's 2025 Update (June 2026, https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update) puts data-center electricity at 192 TWh in 2024, with a Reference Case of 464 TWh in 2028 and 649 TWh in 2030; the 2024 report had 176 TWh for 2023 (p. 5). The update's text gives no new water-consumption estimate. The USGS irrigation page, read 2026-11-11, still gives 2020 as its latest year.  
Next step: The next LBNL edition that revises the water estimate, and the USGS Data Companion for years after 2020.

### 7 · Source and evidentiary literacy — passed

> "Lawrence Berkeley National Laboratory's 2024 data center report" · "The U.S. Geological Survey estimates"

Claims: C-2, C-3  
Why: Names the agency for each figure and the report for one, and both figures match what those sources say. C-5 and C-6 cite nothing; those gaps are counted under dimensions 1 and 3.  
Contrast: LBNL 2024, p. 55: "By 2023, hyperscale and colocation account for 84% of the 66-billion-liter total". USGS: "In 2020, about 110,904 million gallons per day (mgd) of water was withdrawn for crop irrigation across the lower 48 United States" and "Approximately 72% of the water withdrawn for irrigation was consumptive use". Both are modeled estimates, not metered totals: LBNL's PUE and WUE "are simulated using established thermodynamics-based models" (Section 4, Method Overview), and USGS says "A hydrologic modeling approach was used to estimate agricultural irrigation water use and consumptive use for 2000-2020".  
Next step: None.

## Next steps

1. Local water data for a named facility — its water permit or utility filing, against the other users of the same supply and the USGS HUC12 withdrawals for that area. This is the check C-6 skips and the one most likely to change the conclusion.
2. The definition of consumptive use — one sentence on the USGS irrigation page, and LBNL 2024, p. 56. This is the cheapest check and it settles C-5.
3. Direct against indirect water — LBNL 2024, pp. 55–57, on-site consumption and the indirect footprint from electricity.
4. The trend — LBNL 2024, pp. 48 and 55–56 for the 2028 water range, and the 2025 Update for electricity through 2030.

## Unverified

- Water use near any specific data center, as a share of the local supply — the post names no facility, so there was nothing to open — the facility's water permit or utility filing; USGS National Water Availability Assessment Data Companion, HUC12 tables.
- AI's share of the 66 billion liters — LBNL 2024, p. 55 splits the total by data-center type, not by workload, and I found no AI-specific water figure — LBNL 2024, Section 5; operator disclosures.
- Whether a newer national estimate of on-site water consumption exists — I searched the text of LBNL's 2025 Update only, and did not inspect its figures or other publishers — LBNL Center of Expertise for Data Center Energy, publications list.
- That the services listed in C-7 run in the facilities LBNL counted — not checked — LBNL 2024, Table 4.1, data center space types.
- The USGS figures were read from the agency's summary pages, not recomputed from the underlying data releases — Martin et al., 2025 and Haynes et al., 2023, linked from those pages.

## A stronger version

A version that passed the failed dimensions would keep the national comparison and stop there, or go on to earn the local claim with local data. It would say that the 66 billion liters is water consumed, meaning evaporated and not returned to the supply it came from. It would put one facility's draw against its own watershed or utility before saying anything about people who live near it. It would also say which water it counts (on-site, all data centers, 2023) and that the report it cites expects the figure to grow.

## Sources opened

- 2024 United States Data Center Energy Usage Report (Shehabi et al., LBNL, December 2024) — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — 66 billion liters on-site in 2023 and the split by type (p. 55); 2028 hyperscale range (pp. 55–56); definition of water consumption (p. 56); indirect footprint of nearly 800 billion liters (p. 57); WUE trend (p. 48); server energy by type (p. 49); local-level concerns in Table 4.2 (pp. 40–41); location of demand and simulation method (Section 4); 176 TWh in 2023 (p. 5).
- United States Data Center Energy Usage Report: 2025 Update (LBNL, June 2026) — https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update — 192 TWh in 2024, 464 TWh in 2028 and 649 TWh in 2030 (Reference Case); no water-consumption estimate in its text.
- Irrigation Water Use (USGS) — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 2020 withdrawals of 110,904 million gallons per day, 72% consumptive use, the definition of consumptive use, regional shares, and the modeling method.
- Public Supply Water Use (USGS) — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 2020 consumptive use of 4,241 million gallons per day.
- Thermoelectric Power Water Use (USGS) — https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use — 2020 freshwater consumptive use of 2,359 million gallons per day.
