# ClaimCheck — "AI is drinking our water"

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
**Summary:** clear failures: 4 · partial: 3 · passed: 0 · N/A: 0
**Score:** 1.5 / 7 (1 unverified)

The problem sits in mechanism, magnitude, output, and evidence: the post treats evaporated water as destroyed, gives an annual total with no baseline, counts no product, and rests its opening figure on an unnamed graphic. A legitimate concern survives. "Billions of gallons a year" is the right order of magnitude for U.S. data centers (LBNL, 2023 data), and a new facility drawing on a low local reservoir is a real and checkable question. This is a literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water." · "a whole bottle for every conversation"
- **C-2** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-3** > "Meanwhile families in drought areas are told to take shorter showers."
- **C-4** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-5** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-6** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off" · "It's water poured down the drain for nothing."

Claims: C-2, C-6
Why: Treats use and loss as one thing. "Boiled off" points at the right loss path (evaporation takes water out of the local supply), but evaporated water re-enters the water cycle and is not destroyed, and water "poured down the drain" is discharged, which is the opposite fate. The "gone forever" conclusion rests on merging these.
Contrast: USGS, *Water Use in the United States* (2020 data page): "Water that does not return to local water bodies or groundwater is called 'consumptive use.' Consumptive use includes water that evaporates into the atmosphere" (https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states). LBNL 2024, pp. 56–57: "Water consumption refers to the amount of withdrawn water that is permanently removed from the immediate water cycle due to evaporation or other irreversible processes" (https://escholarship.org/content/qt32d6m0d1/qt32d6m0d1.pdf). Li et al. (v5, 2025), Section 2: for cooling towers, "roughly 80% of water withdrawal is evaporated"; the rest is discharged (https://arxiv.org/abs/2304.03271).
Next step: LBNL 2024, Section 4, Figure 4.4 (PUE and site WUE by cooling system) — which systems evaporate water and which use little or none. Then the local facility's cooling type.

### 2 · Quantitative and comparative literacy — clear failure

> "wasting billions of gallons of water a year" · "Multiply that by millions of people and it's staggering."

Claims: C-1, C-2, C-3
Why: An absolute number with no denominator, and a multiplication the post never carries out. The only comparison offered is household showers (C-3); larger uses of the same kind are left out, so a reader cannot tell big from small.
Contrast: LBNL 2024, p. 55: all U.S. data centers, not only AI, directly consumed a "66-billion-liter total" in 2023. Arithmetic: 66 billion L ÷ 3.785 L/gal = 17.4 billion gal/yr, so "billions of gallons" is the right order of magnitude; ÷ 365 = 47.8 million gal/day (mgd). Against USGS 2020 consumptive use, lower 48 states: irrigation 110,904 mgd × 72% = 79,851 mgd → 47.8 ÷ 79,851 = 0.06%; public supply 4,241 mgd → 47.8 ÷ 4,241 = 1.1%; thermoelectric power 2,359 mgd → 47.8 ÷ 2,359 = 2.0%. Caveats: the years differ (2023 against 2020) and USGS covers the lower 48 only. USGS pages: https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use, https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use, https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use.
Next step: LBNL 2024, "Direct Water Consumption" and Figure 5.9, set beside USGS consumptive use by category for the same region and, when USGS publishes it, the same year.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country." · "a data center somewhere drinks a bottle of water"

Claims: C-1, C-4
Why: The first sentence names a local, checkable stress, which is the right boundary for water. The second carries it to the whole country with no national figure. Separately, C-1 assigns the whole bottle to the data center, while the nearest study found in this run counts most of its per-request water at power plants (the post names no source, so that link is inferred).
Contrast: Li et al. (v5, 2025), Table 1, U.S. average for GPT-3: 2.200 mL on-site + 14.704 mL off-site = 16.904 mL per request; 14.704 ÷ 16.904 = 87% off-site. LBNL 2024, pp. 55–57: 66 billion L direct in 2023 against an indirect footprint of "nearly 800 billion liters" through electricity. U.S. Drought Monitor, map of 3 Nov 2026: 43.98% of the contiguous U.S. by area in drought (D1–D4) and 30.94% with no dryness or drought (https://usdmdataservices.unl.edu/api/USStatistics/GetDroughtSeverityStatisticsByAreaPercent?aoi=us&startdate=10/20/2026&enddate=11/11/2026&statisticsType=1). A drought map is not a reservoir record; it shows only that conditions differ across the country. The post's reservoir and facility are unnamed: not checked in this run.
Next step: the local reservoir's storage record from its operator or state water agency, and the facility's water permit or utility filing — its annual consumption as a share of that supply.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-5 (side claim)
Why: Calls for a remedy and names neither the substitute nor its cost. The central claim does not depend on the remedy, so the finding is capped at partial. No position is taken on the remedy.
Contrast: LBNL 2024, p. 45: "In many cases, there are tradeoffs between low PUEs and low site WUEs" and "While air-cooled chillers use no water, they use more energy." Electricity carries water of its own: LBNL 2024, p. 57, puts 2023 data-center electricity at a "national average of 4.52 L/kWh of indirect water consumption."
Next step: LBNL 2024, Section 4, Figure 4.4, for the energy penalty of waterless cooling; then the facility's cooling design and the water intensity of its grid.

### 5 · Output and value accounting — clear failure

> "Nothing useful comes out of those buildings." · "so a machine can write someone's homework or a bad poem"

Claims: C-2, C-6
Why: Names two trivial outputs, then says there is no output at all, and "wasting" in the central claim depends on that. A claim may argue the benefit is not worth the water, but it has to count the benefit to do so.
Contrast: LBNL 2024 describes data centers as housing "computing equipment that operates continuously to support on-demand network requests," across internal business, colocation, and hyperscale facilities; its 66-billion-liter figure covers all of them, not AI alone. The share of that water or computing that serves chatbots: not checked in this run.
Next step: LBNL 2024, the split between AI (accelerated) and conventional servers; the services the local facility runs; water per unit of output set beside other uses the reader accepts.

### 6 · Recency and updating literacy — partial · unverified

> "I saw it in a graphic going around: a whole bottle for every conversation."

Absent: a date for any figure in the post.

Claims: C-1
Why: Nothing is dated, and the per-question figure resembles an estimate first posted in 2023 for GPT-3, an earlier generation; the post does not note newer operator disclosures. The central annual figure does not depend on it and is in line with the most recent national report opened in this run, so this is an error that leaves the central conclusion standing. Flagged because the graphic's source could not be identified.
Contrast: Li et al. (first posted April 2023; v5 March 2025): GPT-3 "needs to 'drink' (i.e., consume) a 500ml bottle of water for roughly 10 – 50 medium-length responses." The same paper cuts both ways: it calls its estimate "on the conservative side" and says later models "could consume substantially more energy and water than GPT-3 for processing the same request." Google (August 2025, data from May 2025): "the median Gemini Apps text prompt ... consumes 0.26 milliliters (or about five drops) of water," derived from its 2024 fleet-wide water usage effectiveness, with the note that the figures "have not been verified by an independent third-party" (https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference). Sam Altman (10 June 2025): the average ChatGPT query "uses about 0.000085 gallons of water," stated without a method; 0.000085 gal × 3,785 mL/gal = 0.32 mL (https://blog.samaltman.com/the-gentle-singularity). Prompts per 500 mL bottle: 500 ÷ 16.904 = 29.6 (Li, total); 500 ÷ 2.200 = 227 (Li, on-site only); 500 ÷ 0.26 = 1,923 (Google); 500 ÷ 0.32 = 1,554 (Altman). The scopes differ: Li's total includes power-plant water, and the operator figures do not say they do.
Next step: find the graphic and the study and year it cites; open Google's technical paper (arXiv:2508.15734) for its scope definition; check whether a national estimate newer than LBNL 2024 exists.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around"

Claims: C-1, C-2
Why: Secondary amplification of an unnamed figure; the annual total in the central claim has no source at all. The systematic sources exist and were not cited, and the figure as stated does not match the nearest one.
Contrast: Li et al. (v5, 2025) gives one bottle per 10–50 responses, not per question. At its U.S. average, 500 ÷ 16.904 = 29.6 responses per bottle, so "a bottle of water" per question is about 30 times that estimate. "A whole bottle for every conversation" fits the paper only if a conversation runs 10–50 responses; the post uses both wordings. Whether the graphic derives from this paper: not checked in this run.
Next step: Li et al., Table 1, for the per-request figure and its scope; LBNL 2024, Figure 5.9, for the annual total.

## Next steps

1. Put the annual total against a baseline — LBNL, *2024 United States Data Center Energy Usage Report*, "Direct Water Consumption" and Figure 5.9, beside USGS consumptive use for irrigation, public supply, and thermoelectric power.
2. Trace the opening figure — find the graphic and the study it cites; compare with Li et al., "Making AI Less 'Thirsty'" (arXiv:2304.03271), Table 1, on-site and off-site columns.
3. Check the local case — the reservoir operator's storage record and the facility's water permit or utility filing: annual consumption, cooling type, share of local supply.
4. Update the per-prompt figure — Google's technical paper (arXiv:2508.15734) and any operator disclosure with a stated method; note which include power-plant water.
5. Price the remedy — LBNL 2024, Section 4, Figure 4.4, for the energy cost of waterless cooling, and the water intensity of the local grid.
6. Count the output — the services the facility runs and the AI share of data-center load in LBNL 2024.

## Unverified

- The graphic and its source — the post does not name it; the link to Li et al. is inferred from the bottle figure — the graphic itself, then the study it cites.
- The local reservoir level and the new data center — the post names no place — the reservoir operator or state water agency; the facility's permit or utility filing.
- The AI share of data-center water — the LBNL total covers all U.S. data centers and the split was not looked up — LBNL 2024, server and water chapters.
- Whether LBNL 2024 is still the latest national estimate — no search for a successor was made — LBNL and DOE publication pages.
- The operator per-prompt figures (0.26 mL, 0.32 mL) — self-reported and not independently verified; Google's technical paper was not opened — arXiv:2508.15734; any third-party audit.
- "families in drought areas are told to take shorter showers" — no order or place named — the state or utility drought order in question.
- "millions of people" — no usage count given or checked — operator usage disclosures.

## A stronger version

The local concern can stand on its own. A stronger claim would name the reservoir and the facility, give the facility's metered or permitted annual consumption as a share of that supply, and say whether its cooling evaporates water or uses little. It would keep on-site water apart from power-plant water, cite a dated study for any per-question figure, and set the national total beside irrigation and public supply. It would say what the facility delivers and then argue that the product is not worth the water. If it asks for waterless cooling, it would name the extra electricity that requires.

## Sources opened

- Shehabi et al., *2024 United States Data Center Energy Usage Report*, LBNL-2001637, December 2024 — https://escholarship.org/content/qt32d6m0d1/qt32d6m0d1.pdf (linked from https://eta.lbl.gov/publications/2024-lbnl-data-center-energy-usage-report) — 66 billion L direct consumption in 2023; nearly 800 billion L indirect; 4.52 L/kWh; definition of water consumption; air-cooled chiller trade-off; description of data centers.
- Li, Yang, Islam, Ren, "Making AI Less 'Thirsty'," arXiv:2304.03271v5, March 2025 — https://arxiv.org/abs/2304.03271 (PDF https://arxiv.org/pdf/2304.03271v5) — 500 mL per 10–50 responses for GPT-3; Table 1 U.S. average on-site, off-site, and total per request; definition of consumption; caveats on newer models.
- USGS, *Water Use in the United States* — https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states — definition of consumptive use.
- USGS, *Irrigation Water Use* — https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use — 110,904 mgd withdrawn in 2020, about 72% consumptive.
- USGS, *Public Supply Water Use* — https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use — 4,241 mgd consumptive use in 2020.
- USGS, *Thermoelectric Power Water Use* — https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use — 2,359 mgd consumptive use in 2020.
- U.S. Drought Monitor data service, map of 3 Nov 2026 — https://usdmdataservices.unl.edu/api/USStatistics/GetDroughtSeverityStatisticsByAreaPercent?aoi=us&startdate=10/20/2026&enddate=11/11/2026&statisticsType=1 — 43.98% of the contiguous U.S. in D1–D4; 30.94% none.
- Vahdat and Dean, "How much energy does Google's AI use? We did the math," Google Cloud Blog, 21 August 2025 — https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference — 0.26 mL per median Gemini Apps text prompt; basis and the no-third-party-verification note.
- Altman, "The Gentle Singularity," 10 June 2025 — https://blog.samaltman.com/the-gentle-singularity — 0.000085 gallons per average ChatGPT query.
