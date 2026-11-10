# Sources behind the worked examples

Checked 2026-11-10. Every figure on the site, in the README, and in
the sample reports comes from this table or from arithmetic on it.
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
