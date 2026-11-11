# ClaimCheck — "AI is drinking our water"

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
**Summary:** clear failures: 4 · partial: 3 · passed: 0 · N/A: 0
**Score:** 1.5 / 7 (1 unverified)

Mechanism, magnitude, output, and evidence carry the problem: the post treats evaporated water as destroyed, gives "billions of gallons" no baseline, counts the product as zero, and rests its per-question figure on an unnamed graphic. A legitimate concern survives. Data centers do consume water on site (LBNL estimates 66 billion liters in 2023), evaporated water is lost to the local supply, and that matters where a reservoir is low. This is a literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-2** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water. I saw it in a graphic going around: a whole bottle for every conversation."
- **C-3** > "Multiply that by millions of people and it's staggering."
- **C-4** > "Meanwhile families in drought areas are told to take shorter showers."
- **C-5** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-6** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-7** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off"

Claims: C-1
Why: Treats loss to the local supply as destruction. "Boiled off" points at the real pathway, evaporation, but "gone forever" describes water that no longer exists, and the central claim leans on that permanence. Evaporation moves water out of the local system; it does not remove it from the water cycle.
Contrast: USGS (page opened 2026) defines the loss this way: "Water that does not return to local water bodies or groundwater is called 'consumptive use.' Consumptive use includes water that evaporates into the atmosphere" (https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states). USGS Water Science School (opened 2026): "On a global scale, the amount of water evaporating is about the same as the amount of water delivered to the Earth as precipitation," and "Once evaporated, a water molecule spends about 10 days in the air" (https://www.usgs.gov/special-topics/water-science-school/science/evaporation-and-water-cycle). Not every data center evaporates water: LBNL (2024) says "air-cooled chillers use no water" (PDF URL under Sources opened).
Next step: LBNL, *2024 United States Data Center Energy Usage Report*, the discussion of site water use by cooling system. Look for which cooling designs evaporate water on site and which do not, then find which design the facility in question uses.

### 2 · Quantitative and comparative literacy — clear failure

> "billions of gallons of water a year" · "Multiply that by millions of people and it's staggering."

Claims: C-1, C-3, C-4
Why: Absolute numbers with no denominator. The reader gets no share of a total, no rate, and no larger or smaller use to compare against, so "staggering" cannot be judged. C-4 sets data centers beside household showers but gives a figure for neither.
Contrast: "Billions of gallons" is the right order of magnitude for on-site use by all U.S. data centers. LBNL (2024) estimates 66 billion liters of direct water consumption in 2023; 66 ÷ 3.785 liters per gallon = 17.4 billion gallons. USGS Professional Paper 1894-D (2025) gives average consumptive use in the lower 48 for water years 2010–20, in million gallons per day (https://pubs.usgs.gov/publication/pp1894D). Multiplying each by 365:

- Crop irrigation: 75,698 × 365 = 27,630 billion gallons a year. 17.4 ÷ 27,630 = 0.063%.
- Thermoelectric power (fresh water): 2,904 × 365 = 1,060 billion gallons a year. 17.4 ÷ 1,060 = 1.64%.
- Public supply: 4,219 × 365 = 1,540 billion gallons a year. 17.4 ÷ 1,540 = 1.13%.

The two sources do not line up exactly: LBNL's figure is a 2023 estimate for the United States, and the USGS figures are a 2010–20 average for the lower 48.
Next step: USGS Professional Paper 1894-D, table 4, for consumptive use by category; LBNL 2024, chapter 5, "Water and Emission Impacts," Figure 5.9, for the data-center total by year and facility type.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country." · "a data center somewhere drinks a bottle of water"

Claims: C-5, C-2
Why: The first sentence of C-5 names a local stress that could be checked. The second carries it to the whole country without a national figure. C-2 also places the whole per-question amount at the data center, although the study the figure most likely comes from counts water used at power plants as well.
Contrast: Water stress is not uniform nationally. The U.S. Drought Monitor data service puts 43.98% of the lower 48 in drought (D1–D4) on the map dated November 3, 2026, so 100 − 43.98 = 56.02% was not (URL under Sources opened). Only this one national indicator is shown because no national dataset pairing reservoir levels with data-center siting was opened in this run. On direct and indirect water, LBNL (2024) reports 66 billion liters consumed on site in 2023 and "nearly 800 billion liters" consumed indirectly through electricity use; 800 ÷ 3.785 = 211 billion gallons. The two are different boundaries and the post does not say which it means.
Next step: The reservoir operator's storage data and the new facility's water permit or utility filing. Look for whether the facility draws on that reservoir, and its permitted volume against the supply's other users.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-6 (side claim)
Why: Calls for a cut and names no substitute or cost. The central claim does not depend on the remedy, so the finding is capped at partial. No position is taken on the remedy.
Contrast: LBNL (2024): "water-cooled chillers and other evaporation-based cooling systems are generally more energy efficient than an air-cooled chiller or other waterless systems. While air-cooled chillers use no water, they use more energy." The same report puts indirect water consumption for data-center electricity at a 2023 national average of 4.52 liters per kilowatt-hour, so added electricity carries its own water use.
Next step: LBNL 2024, the PUE and site and source WUE results by cooling system. Look for how much extra electricity a waterless design uses in the facility's climate.

### 5 · Output and value accounting — clear failure

> "Nothing useful comes out of those buildings. It's water poured down the drain for nothing." · "so a machine can write someone's homework or a bad poem"

Claims: C-1, C-7
Why: Names two trivial outputs and then counts the output as nothing. "Wasting" in the central claim depends on that zero. The post may argue the product is not worth the water, but it has to count the product to make that argument.
Contrast: The national water total is not a chatbot figure. LBNL's 66 billion liters (2023) is a total for U.S. data centers of every type, including hyperscale, colocation, and internal facilities. The report says U.S. data centers used 176 TWh, or 4.4% of U.S. electricity, in 2023. Which services those facilities run, and what share of their water serves AI, was not checked in this run.
Next step: The operator's description of what the facility in question runs, and LBNL 2024, chapter 5, for the split of energy and water by server and facility type. Compare water per unit of output with other uses the reader accepts.

### 6 · Recency and updating literacy — partial · unverified

> "I saw it in a graphic going around: a whole bottle for every conversation."

Claims: C-2, C-1
Why: No figure in the post carries a date. "Billions of gallons a year" still matches the latest national estimate, but the per-question figure most likely traces to an estimate for an older model, and newer measured figures exist. The link between the graphic and that study could not be checked, hence the flag.
Contrast: Li and others, "Making AI Less 'Thirsty,'" was first posted to arXiv in April 2023 and last revised in March 2025. Its estimate is for GPT-3, and it says "the water consumption per request may decrease in the future" (https://arxiv.org/html/2304.03271v5). Google (August 2025, data from May 2025) reports that the median Gemini Apps text prompt "consumes 0.26 milliliters (or about five drops) of water," and adds that the figures "have not been verified by an independent third-party" (URL under Sources opened). At that rate a 500 mL bottle covers 500 ÷ 0.26 ≈ 1,900 prompts. The two figures use different boundaries: Li and others include water for electricity generation, and Google applies its data centers' water usage effectiveness.
Next step: Find the graphic and its date. Then open the latest version of Li and others and the newest operator per-prompt disclosures, and note the model, the year, and whether power-plant water is counted.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around"

Claims: C-2, C-1, C-4, C-5
Why: The only source named is an unidentified graphic. The annual total, the reservoir, and the shower restrictions have no source at all. The figure the graphic most likely repeats comes from a study that states its scope, and the post's version drops that scope.
Contrast: Li and others (arXiv 2304.03271, v5, 2025): "GPT-3 needs to 'drink' (i.e., consume) a 500ml bottle of water for roughly 10 – 50 medium-length responses, depending on when and where it is deployed." That is 500 ÷ 50 = 10 mL to 500 ÷ 10 = 50 mL per response. If the post's bottle is 500 mL, "a bottle" per question is 10 to 50 times the study's per-response figure. The study defines a medium-sized request as up to about 800 words of input and 150–300 words of output.
Next step: Name the graphic and trace it to its study. For the annual total, cite LBNL 2024, chapter 5. For the reservoir, cite the operator's storage data.

## Next steps

1. Check the local case, which is where the surviving concern lives — the new facility's water permit or utility filing, and the reservoir operator's storage data. Look for the facility's water source and permitted volume against the supply's other users.
2. Trace the bottle figure, the cheapest check — Li and others, arXiv 2304.03271, abstract and section 3.3.2. Confirm the "10 – 50 medium-length responses" wording and that the estimate counts off-site water.
3. Put the annual total against baselines — LBNL 2024, chapter 5, Figure 5.9, and USGS Professional Paper 1894-D, table 4.
4. Separate AI from other data-center work — LBNL 2024, chapter 5, energy and water by server and facility type; operator sustainability reports.
5. Price the remedy — LBNL 2024, PUE and WUE results by cooling system.
6. Update the per-question figure — the newest operator per-prompt disclosures, with model, year, and boundary noted.

## Unverified

- That the "graphic going around" derives from Li and others, and the size of its bottle — the post does not identify the graphic — ask for the graphic, then compare it with arXiv 2304.03271.
- AI's share of the 66 billion liters — the LBNL passages opened give a total for all U.S. data centers, not AI alone — LBNL 2024, chapter 5; operator sustainability reports.
- "millions of people" — the post gives no count or source — operator usage disclosures.
- The low reservoir and the new data center — the post names no place — the reservoir operator's storage data; the facility's water permit or utility filing.
- "families in drought areas are told to take shorter showers" — no place or date given — the local water utility's drought-stage orders.
- Which services the data centers in question run — not opened in this run — the operator's service descriptions.

## A stronger version

A stronger version would say that data centers consume water on site by evaporation, which removes it from the local supply, and would drop "gone forever." It would give a dated total with its source and at least two baselines, and say whether the total counts on-site water only or power-plant water too. It would keep the local case local: name the reservoir, the facility's water source, and its permitted volume against other users. It would name what the facility produces before arguing that the product is not worth the water, and name what a waterless design costs in electricity.

## Sources opened

- Li, Yang, Islam, and Ren, "Making AI Less 'Thirsty': Uncovering and Addressing the Secret Water Footprint of AI Models," arXiv 2304.03271, v5 (submitted April 6, 2023; revised March 26, 2025) — https://arxiv.org/abs/2304.03271 and https://arxiv.org/html/2304.03271v5 — the "500ml bottle … for roughly 10 – 50 medium-length responses" sentence, the request definition, the three water scopes, and the dates.
- Shehabi and others, *2024 United States Data Center Energy Usage Report*, Lawrence Berkeley National Laboratory, December 2024 — https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report and https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — 66 billion liters direct water in 2023, "nearly 800 billion liters" indirect, 4.52 L/kWh, 176 TWh and 4.4% of U.S. electricity, and the air-cooled chiller sentence.
- Medalie and others, *Water use across the conterminous United States, water years 2010–20*, USGS Professional Paper 1894-D, January 2025 — https://pubs.usgs.gov/publication/pp1894D — consumptive use for crop irrigation (75,698 Mgal/d), public supply (4,219 Mgal/d), and thermoelectric power from fresh water (2,904 Mgal/d).
- USGS, "Water Use in the United States" — https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states — the definition of consumptive use.
- USGS Water Science School, "Evaporation and the Water Cycle" — https://www.usgs.gov/special-topics/water-science-school/science/evaporation-and-water-cycle — evaporation balanced by precipitation globally; about 10 days in the air.
- Google Cloud blog, "Measuring the environmental impact of AI inference," August 21, 2025 — https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference — 0.26 mL per median Gemini Apps text prompt (May 2025 data), and the note that the figures are not independently verified.
- U.S. Drought Monitor data service, map dated November 3, 2026 — https://usdmdataservices.unl.edu/api/USStatistics/GetDroughtSeverityStatisticsByAreaPercent?aoi=conus&startdate=11/3/2026&enddate=11/3/2026&statisticsType=1 — 43.98% of the lower 48 in drought (D1–D4). The Drought.gov national page (https://www.drought.gov/national) gives 43.4% for the same date in its summary sentence; the data-service figure is used here.
