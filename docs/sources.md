# Sources behind the worked examples

Checked 2026-11-10 (water, LED) and 2026-11-11 (processed meat,
crime statistics).
Every figure on the site, in the README, and in the sample reports comes from this table or from arithmetic on it.
"Read directly" means the primary document was opened. A row marked
"via" a secondary citation, summary, or abstract was not read on
the primary; confirm it there before reusing it.

## Data-center water

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| U.S. data-center electricity | 176 TWh, 4.4% of U.S. electricity | 2023 | LBNL 2024 report, Executive Summary | Read directly |
| U.S. data-center electricity, scenario range | 325–580 TWh, 6.7–12.0% | 2028 | LBNL 2024, Executive Summary | Read directly |
| Air-cooled vs evaporative trade-off | "While air-cooled chillers use no water, they use more energy." | — | LBNL 2024, Section 4 | Read directly |
| Local-level concern | "the water evaporation process in cooling towers has raised concerns regarding data center water consumption and availability at the local level" | — | LBNL 2024, Table 4.2 | Read directly |
| Site vs source WUE | site = facility water; source = water to generate the electricity | — | LBNL 2024, Section 4 | Read directly |
| Direct (on-site) water consumption | 66 billion L (≈ 17.4 billion gal) | 2023 | LBNL 2024, Section 5, p. 55 | Read directly (2026-11-11) |
| Direct water consumption | 21.2 billion L (≈ 5.6 billion gal) | 2014 | LBNL 2024, p. 55 | Read directly (2026-11-11); AWWA gives 5.6 Bgal |
| Hyperscale + colocation share of direct | 84% | 2023 | LBNL 2024, p. 55 | Read directly (2026-11-11) |
| Hyperscale direct water, scenario range | 60–124 billion L (≈ 15.9–32.8 billion gal) | 2028 | LBNL 2024, pp. 55–56 | Read directly (2026-11-11) |
| All on-site water, scenario range | ≈ 150–280 billion L (≈ 40–74 billion gal) | 2028 | LBNL 2024 as cited by Li et al. (CACM 2025) and AWWA (40–73 Bgal) | Via two secondary citations. Not found in the report's text on 2026-11-11 (it may sit in Figure 5.9). Not used on any public page |
| Indirect water (power plants) | nearly 800 billion L (≈ 211 billion gal) | 2023 | LBNL 2024, p. 57 | Read directly (2026-11-11); AWWA gives 211 Bgal |
| Indirect water intensity | 4.52 L/kWh (data centers); 4.35 L/kWh (U.S. average) | 2023 | LBNL 2024, Section 5, p. 57 | Read directly (2026-11-11) |
| LBNL 2025 Update | 192 TWh in 2024; no new national water totals reported | 2024 | LBNL 2025 Update (June 18, 2026) | Via secondary summaries |
| Per-response estimate | ≈ 500 mL per 10–50 medium-length responses (GPT-3; on-site + power-plant water) | 2023 | Li, Yang, Islam, Ren, arXiv 2304.03271; CACM 2025 | Via abstract and search summary |
| Per-prompt operator disclosure | 0.26 mL water, 0.24 Wh, median Gemini Apps text prompt | May 2025 data | Google, arXiv 2508.15734 | Via abstract and search summary |

URLs:

- LBNL 2024: https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf (LBNL-2001637)
- AWWA: https://doi.org/10.1002/awwa.2515
- LBNL 2025 Update: https://escholarship.org/uc/item/33m6w3x0 · https://www.energy.gov/documents/united-states-data-center-energy-usage-report-2025-update
- Li et al.: https://arxiv.org/abs/2304.03271
- Google: https://arxiv.org/abs/2508.15734

## Baselines

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| Crop irrigation withdrawals, lower 48 states | 110,904 Mgal/d; approximately 72% consumptive | 2020 | USGS, Irrigation Water Use | Read directly (2026-11-11). Modeled estimate |
| Public supply withdrawals / consumptive use, lower 48 states | 35,823 Mgal/d / 4,241 Mgal/d (about 12%) | 2020 | USGS, Public Supply Water Use | Read directly (2026-11-11). Modeled estimate |
| Thermoelectric fresh-water withdrawals / consumptive use, lower 48 states | 59,889 Mgal/d / 2,359 Mgal/d (about 3.9%) | 2020 | USGS, Thermoelectric Power Water Use | Read directly (2026-11-11). Modeled estimate |
| How the 2020 values relate to 2015 | "2020 values are modeled estimates, so the change from 2015 partly reflects different methods." | 2020 | USGS, the three pages above | Read directly (2026-11-11) |
| U.S. total withdrawals | 322 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract). No longer used on a public page |
| Thermoelectric withdrawals / consumption | 133 Bgal/d / 4.31 Bgal/d (3%) | 2015 | USGS Circular 1441 | Read directly (abstract). Used by the loud-but-literate example |
| Irrigation withdrawals / consumption | 118 Bgal/d / 73.2 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract). Used by the loud-but-literate example |
| Public-supply withdrawals | 39.0 Bgal/d | 2015 | USGS Circular 1441 | Read directly (abstract). Used by the loud-but-literate example |
| Golf facilities, applied water | 1,686,269 acre-feet (21% recycled) | 2020 | GCSAA Golf Course Environmental Profile, Phase III Vol. I (2022) | Read directly |
| Acre-foot | 325,851 gal | — | GCSAA report | Read directly |

URLs:

- USGS, Irrigation Water Use: https://www.usgs.gov/mission-areas/water-resources/science/irrigation-water-use
- USGS, Public Supply Water Use: https://www.usgs.gov/mission-areas/water-resources/science/public-supply-water-use
- USGS, Thermoelectric Power Water Use: https://www.usgs.gov/mission-areas/water-resources/science/thermoelectric-power-water-use
- USGS Circular 1441 (2015): https://pubs.usgs.gov/publication/cir1441
- GCSAA: https://www.gcsaa.org/docs/default-source/environment/phase-3-water-survey-full-report.pdf

## Derived numbers (arithmetic)

- 66 × 10⁹ L ÷ 3.785 L/gal ≈ 17.4 × 10⁹ gal. 800 × 10⁹ L ≈ 211 × 10⁹ gal.
- Data-center direct consumption per day: 17,400 Mgal ÷ 365 ≈ 47.8 Mgal/d.
- Crop irrigation consumptive use (2020): 0.72 × 110,904 ≈ 79,900 Mgal/d; × 365 ≈ 29,100 Bgal a year. Data-center direct share ≈ 17.4 ÷ 29,100 ≈ 0.06%.
- Public supply consumptive use (2020): 4,241 Mgal/d × 365 ≈ 1,550 Bgal. Share ≈ 17.4 ÷ 1,550 ≈ 1.1%.
- Thermoelectric consumptive use of fresh water (2020): 2,359 Mgal/d × 365 ≈ 861 Bgal. Share ≈ 17.4 ÷ 861 ≈ 2.0%.
- Range of the four shares: 3.2 ÷ 0.06 ≈ 50.
- Golf applied water: 1,686,269 × 325,851 ≈ 549 Bgal. Share ≈ 3.2%. (Applied, not consumed: upper-bound comparison.)
- Implied average direct intensity: 66 × 10⁹ L ÷ 176 × 10⁹ kWh ≈ 0.375 L/kWh.
- Indirect ÷ direct: 800 ÷ 66 ≈ 12.
- Fully evaporative heat rejection: 3.6 MJ/kWh ÷ ≈2.43 MJ/kg (latent heat of vaporization near 30 °C) ≈ 1.5 L per kWh of heat.

The years differ (2020 USGS, 2020 GCSAA, 2023 LBNL), and so do the
areas: the USGS 2020 estimates cover the lower 48 states, LBNL the
whole country. Every comparison on the site names both years. The
water example used USGS's 2015 compilation until 2026-11-11; the
2020 modeled estimates replaced it because they are newer and give
consumptive use for public supply, which the 2015 abstract does
not.

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

## Crime-statistics example

| Figure | Value | Year | Source | How read |
| --- | --- | --- | --- | --- |
| Violent crimes, estimated | 1,119,768 | 2025 | FBI, UCR Summary of Reported Crimes in the Nation, 2025 (released August 2026) | Read directly |
| Violent crime rate | 327.6 per 100,000 inhabitants | 2025 | FBI, UCR Summary 2025 | Read directly |
| Violent crime rate | 362.9 per 100,000 inhabitants (updated) | 2024 | FBI, UCR Summary 2025 | Read directly |
| Change in violent crime rate | −9.7%, the largest year-to-year decrease since estimates began in 1936 | 2024 to 2025 | FBI, UCR Summary 2025 | Read directly |
| Change in estimated offenses | violent crime −9.3%; murder −18.1%; burglary −15.8%; motor vehicle theft −22.7% | 2024 to 2025 | FBI, UCR Summary 2025 | Read directly |
| Murder rate | 4.1 per 100,000, tied with 1955 and 1956 for the lowest since 1936 | 2025 | FBI, UCR Summary 2025 | Read directly |
| Murder rate, 20-year high | 6.6 per 100,000 | 2020 and 2022 | FBI, UCR Summary 2025, Figure 1 | Read directly |
| Murder trend by population group | down in every group, −9.2% to −27.4%; no group showed a rise in violent crime | 2024 to 2025 | FBI, UCR Summary 2025, Table 4 | Read directly |
| Agency coverage | 17,075 agencies, 96.2% of population | 2025 | FBI, UCR Summary 2025 | Read directly |
| Preliminary violent crime | −10.6% | January–June 2026 vs same months 2025 | FBI, UCR Summary 2025 | Read directly |
| Violent crimes, estimated | 1,911,767; rate 758.2 per 100,000; murder rate 9.8 | 1991 | FBI, Crime in the United States 2010, Table 1 | Read directly |
| Revised rape definition | adopted 2013; violent crime estimates for 2013 onward use it | — | FBI press release, August 5, 2025; UCR Summary 2025 | Read directly |
| Violent victimizations | 23.3 per 1,000 persons age 12 or older | 2024 | BJS, Criminal Victimization, 2024 (September 2025) | Highlights read directly |
| Violent victimizations reported to police | 11.2 per 1,000 persons age 12 or older | 2024 | BJS, Criminal Victimization, 2024 | Highlights read directly |

URLs:

- FBI UCR Summary 2025: https://cde.ucr.cjis.gov/LATEST/resources/reports/UCR_Summary_of_Reported_Crimes_in_the_Nation_2025.pdf
- FBI CIUS 2010, Table 1: https://ucr.fbi.gov/crime-in-the-u.s/2010/crime-in-the-u.s.-2010/tables/10tbl01.xls
- FBI press release, 2024 statistics: https://www.fbi.gov/news/press-releases/fbi-releases-2024-reported-crimes-in-the-nation-statistics
- BJS: https://bjs.ojp.gov/library/publications/criminal-victimization-2024

Derived:

- 2025 count as a share of 1991: 1,119,768 ÷ 1,911,767 ≈ 59%.
- 2025 rate as a share of 1991: 327.6 ÷ 758.2 ≈ 43%. Murder rate: 4.1 ÷ 9.8 ≈ 42%.
- Share of violent victimizations reported to police: 11.2 ÷ 23.3 ≈ 48%; not reported ≈ 52%.
- The post's own figure: (40 − 30) ÷ 30 ≈ 33%.

Not checked: FBI rates before 1991 (so 1991 is the highest in the
table opened, not a confirmed record), the share of property crime
not reported to police, and whether BJS has published 2025
victimization estimates. The 1991 and 2025 totals use different
rape definitions; the comparison is approximate. The FBI and BJS
figures count different things (police-reported serious violent
crime; survey-reported nonfatal violent crime including simple
assault).
