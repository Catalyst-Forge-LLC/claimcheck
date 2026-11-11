# Sources behind the worked examples

Checked 2026-11-10 (water, LED) and 2026-11-11 (processed meat).
Every figure on the site, in the README, and in the sample reports comes from this table or from arithmetic on it.
"Read directly" means the primary document was opened. "Via
transcription" means the figure was read from secondary pages that
quote the primary text with page numbers; confirm on the primary
before reusing it.

## Data-center water

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| U.S. data-center electricity | 176 TWh, 4.4% of U.S. electricity | 2023 | LBNL 2024 report, Executive Summary | Read directly |
| U.S. data-center electricity, scenario range | 325–580 TWh, 6.7–12.0% | 2028 | LBNL 2024, Executive Summary | Read directly |
| Air-cooled vs evaporative trade-off | "While air-cooled chillers use no water, they use more energy." | — | LBNL 2024, Section 4 | Read directly |
| Local-level concern | "the water evaporation process in cooling towers has raised concerns regarding data center water consumption and availability at the local level" | — | LBNL 2024, Table 4.2 | Read directly |
| Site vs source WUE | site = facility water; source = water to generate the electricity | — | LBNL 2024, Section 4 | Read directly |
| Direct (on-site) water consumption | 66 billion L (≈ 17.4 billion gal) | 2023 | LBNL 2024, Section 5, p. 55 | Via transcription |
| Direct water consumption | 21.2 billion L (≈ 5.6 billion gal) | 2014 | LBNL 2024, p. 55 | Via transcription; AWWA gives 5.6 Bgal |
| Hyperscale + colocation share of direct | 84% | 2023 | LBNL 2024, p. 55 | Via transcription |
| Hyperscale direct water, scenario range | 60–124 billion L (≈ 15.9–32.8 billion gal) | 2028 | LBNL 2024, pp. 55–56 | Via transcription |
| All on-site water, scenario range | ≈ 150–280 billion L (≈ 40–74 billion gal) | 2028 | LBNL 2024 as cited by Li et al. (CACM 2025) and AWWA (40–73 Bgal) | Via two secondary citations |
| Indirect water (power plants) | nearly 800 billion L (≈ 211 billion gal) | 2023 | LBNL 2024, p. 57 | Via transcription; AWWA gives 211 Bgal |
| Indirect water intensity | 4.52 L/kWh (data centers); 4.35 L/kWh (U.S. average) | 2023 | LBNL 2024, Section 5 | Via transcription |
| LBNL 2025 Update | 192 TWh in 2024; no new national water totals reported | 2024 | LBNL 2025 Update (June 18, 2026) | Via secondary summaries |
| Per-response estimate | ≈ 500 mL per 10–50 medium-length responses (GPT-3; on-site + power-plant water) | 2023 | Li, Yang, Islam, Ren, arXiv 2304.03271; CACM 2025 | Via abstract and search summary |
| Per-prompt operator disclosure | 0.26 mL water, 0.24 Wh, median Gemini Apps text prompt | May 2025 data | Google, arXiv 2508.15734 | Via abstract and search summary |

URLs:

- LBNL 2024: https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf (LBNL-2001637)
- Transcriptions: https://datacentercensus.com/water-and-power · https://research.californiacompute.org/wiki/sources/lbnl-2024-us-data-center-energy-usage-report/
- AWWA: https://doi.org/10.1002/awwa.2515
- LBNL 2025 Update: https://escholarship.org/uc/item/33m6w3x0 · https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update
- Li et al.: https://arxiv.org/abs/2304.03271
- Google: https://arxiv.org/abs/2508.15734

## Baselines

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| U.S. total withdrawals | 322 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract) |
| Thermoelectric withdrawals / consumption | 133 Bgal/d / 4.31 Bgal/d (3%) | 2015 | USGS Circular 1441 | Read directly (abstract) |
| Irrigation withdrawals / consumption | 118 Bgal/d / 73.2 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract) |
| Public-supply withdrawals | 39.0 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract) |
| Golf facilities, applied water | 1,686,269 acre-feet (21% recycled) | 2020 | GCSAA Golf Course Environmental Profile, Phase III Vol. I (2022) | Read directly |
| Acre-foot | 325,851 gal | — | GCSAA report | Read directly |

URLs:

- USGS: https://pubs.usgs.gov/publication/cir1441
- GCSAA: https://www.gcsaa.org/docs/default-source/environment/phase-3-water-survey-full-report.pdf

## Derived numbers (arithmetic)

- 66 × 10⁹ L ÷ 3.785 L/gal ≈ 17.4 × 10⁹ gal. 800 × 10⁹ L ≈ 211 × 10⁹ gal.
- Irrigation consumption per year: 73.2 × 365 ≈ 26,700 Bgal. Data-center direct share ≈ 17.4 ÷ 26,700 ≈ 0.07%.
- Thermoelectric consumption per year: 4.31 × 365 ≈ 1,570 Bgal. Share ≈ 1.1%.
- Golf applied water: 1,686,269 × 325,851 ≈ 549 Bgal. Share ≈ 3.2%. (Applied, not consumed: upper-bound comparison.)
- Implied average direct intensity: 66 × 10⁹ L ÷ 176 × 10⁹ kWh ≈ 0.375 L/kWh.
- Indirect ÷ direct: 800 ÷ 66 ≈ 12.
- Fully evaporative heat rejection: 3.6 MJ/kWh ÷ ≈2.43 MJ/kg (latent heat of vaporization near 30 °C) ≈ 1.5 L per kWh of heat.

The years differ (2015 USGS, 2020 GCSAA, 2023 LBNL). Every
comparison on the site names both years.

## LED example

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| LED vs incandescent | at least 75% less energy; last 25× longer | 2010 | DOE, Guide to Energy Efficient Lighting, DOE/EE-0344 | Read directly |
| Lighting share of home electricity | about 15% | 2010 | DOE/EE-0344 | Read directly |
| Lighting share of home electricity | about 6% (81 billion kWh) | 2020 | EIA FAQ id=99 (RECS 2020), updated March 15, 2024 | Read directly |

URLs:

- DOE: https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf
- EIA: https://www.eia.gov/tools/faqs/faq.php?id=99

## Processed-meat example

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| Classification of processed meat | Group 1, carcinogenic to humans; "sufficient evidence in humans that the consumption of processed meat causes colorectal cancer" | 2015 | IARC Press Release No. 240, 26 October 2015 | Read directly |
| What a group means | "The IARC classifications describe the strength of the scientific evidence about an agent being a cause of cancer, rather than assessing the level of risk." | 2015 | IARC Monographs Q&A, Volume 114 | Read directly |
| Same group as tobacco and asbestos | "this does NOT mean that they are all equally dangerous" | 2015 | IARC Monographs Q&A, Volume 114 | Read directly |
| Dose-response | about 18% higher colorectal cancer risk per 50 g of processed meat eaten daily (analysis of 10 studies) | 2015 | IARC Press Release No. 240; Q&A | Read directly |
| Individual risk | "remains small, but this risk increases with the amount of meat consumed" | 2015 | IARC Press Release No. 240 | Read directly |
| Safe level | "the data available for evaluation did not permit a conclusion about whether a safe level exists" | 2015 | IARC Monographs Q&A, Volume 114 | Read directly |
| Definition of processed meat | salting, curing, fermentation, smoking, or other processes; "may also contain other red meats, poultry, offal, or meat by-products" | 2015 | IARC Press Release No. 240 | Read directly |
| Cancer deaths attributed to diets high in processed meat | about 34,000 per year worldwide | as cited in 2015 (GBD year not given) | IARC Monographs Q&A, citing the Global Burden of Disease Project | Read directly |
| Cancer deaths due to tobacco smoking | about 1 million per year worldwide | as cited in 2015 (GBD year not given) | IARC Monographs Q&A, citing the Global Burden of Disease Project | Read directly |
| Studies considered | more than 800 | 2015 | IARC Press Release No. 240 | Read directly |
| Hazard vs risk; classification still stated; guideline on animal-source foods in development | — | read 2026-11-11 | WHO Q&A | Read directly |
| Lifetime risk of colorectal cancer diagnosis, U.S. men and women | approximately 3.9% | 2021–2023 data | NCI SEER Cancer Stat Facts: Colorectal Cancer | Read directly |
| Lung cancer risk, people who smoke cigarettes vs people who do not | 15 to 30 times | page dated 2026 | CDC, Lung Cancer Risk Factors | Read directly |
| Processed meat and colorectal cancer | "convincing evidence"; "no level of intake associated with a lack of colorectal cancer risk"; bacon listed as processed meat | read 2026-11-11 | WCRF, Limit consumption of red and processed meat | Read directly |

URLs:

- IARC Press Release No. 240: https://www.iarc.who.int/wp-content/uploads/2018/07/pr240_E.pdf
- IARC Monographs Q&A, Volume 114: https://www.iarc.who.int/wp-content/uploads/2018/11/Monographs-QA_Vol114.pdf
- WHO Q&A: https://www.who.int/news-room/questions-and-answers/item/cancer-carcinogenicity-of-the-consumption-of-red-meat-and-processed-meat
- NCI SEER: https://seer.cancer.gov/statfacts/html/colorect.html
- CDC: https://www.cdc.gov/lung-cancer/risk-factors/index.html
- WCRF: https://www.wcrf.org/research-policy/evidence-for-our-recommendations/limit-red-processed-meat/

Derived:

- Baseline raised by the relative increase: 3.9% × 1.18 ≈ 4.6%. Added risk ≈ 0.7 percentage points, about 7 in 1,000. Shows scale only: the 3.9% is a U.S. average that includes people who already eat processed meat, and the 18% is pooled from other populations.
- Smoking: 15 to 30 times is an increase of 1,400% to 2,900%.
- Deaths: 1,000,000 ÷ 34,000 ≈ 29.

Not checked: a newer pooled dose-response estimate (WCRF Continuous
Update Project), what 50 g is in servings, and the Global Burden of
Disease year behind the two death figures.
