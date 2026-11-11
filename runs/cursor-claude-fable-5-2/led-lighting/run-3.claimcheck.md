# ClaimCheck — Swap the last incandescent bulbs

**Source:** `post.md`, read 2026-11-11. Unchanged.  
**Central claim:** > "If you still have incandescent bulbs in the lamps you leave on for hours, swap them for LEDs."  
**Summary:** clear failures: 0 · partial: 1 · passed: 6 · N/A: 0  
**Score:** 6.5 / 7

Recency carries the one problem: the post's share-of-home-electricity figure comes from a guide dated October 2010, the post does not date it, and EIA's latest measured figure (2020) is less than half of it. The advice is conditional on still having incandescent bulbs, and the post says the savings are small in a home that has already switched, so the conclusion stands with the newer figure. The other six dimensions pass, and the sources opened in this run agree with the figures the post takes from its cited guide. This is a literacy review. It does not rule the claim true or false.

## Claims read

- **C-1** (central) > "If you still have incandescent bulbs in the lamps you leave on for hours, swap them for LEDs."
- **C-2** > "The U.S. Department of Energy says LEDs use at least 75 percent less energy than incandescent bulbs and last up to 25 times longer, for the same light."
- **C-3** > "Compare by lumens, not watts: an LED around 800 lumens replaces an old 60-watt bulb."
- **C-4** > "DOE's lighting guide says lighting is about 15% of an average home's electricity, so in a house still full of old bulbs it adds up."
- **C-5** > "How much it saves depends on how many incandescents you have left and how long they burn." · "In a home that already switched most fixtures, the remaining savings are small — start with the bulbs that are on three or more hours a day."
- **C-6** > "an incandescent's waste heat slightly warms the room, so in a cold climate some of the saving shows up as a little more heating. In summer it works the other way, and the air conditioner does less."

## Findings

### 1 · Mechanistic literacy — passed

> "Compare by lumens, not watts" · "for the same light"

Claims: C-2, C-3
Why: Keeps power drawn (watts) apart from light produced (lumens), and states the energy saving at equal light. That is the distinction the advice rests on.
Contrast: DOE, *Guide to Energy Efficient Lighting* (DOE/EE-0344, October 2010): "While a watt is a measure of electrical power, a lumen is a measure of light (brightness)." https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf. ENERGY STAR, "Learn About Brightness" (page undated, opened 2026): old incandescent 60 watts → 800 minimum lumens. https://www.energystar.gov/products/light_bulbs/learn-about-brightness
Next step: None.

### 2 · Quantitative and comparative literacy — passed

> "How much it saves depends on how many incandescents you have left and how long they burn."

Claims: C-2, C-4, C-5
Why: Gives a relative saving with its baseline (an incandescent at the same light), a share of a named total (home electricity), and tells the reader to scale both by their own bulb count and hours. How current that share is belongs to dimension 6.
Contrast: The 2010 DOE guide carries all three: "LEDs use at least 75 percent less energy than incandescent bulbs", "Lighting accounts for about 15% of an average home's electricity use", and "Replace bulbs that are lit three or more hours a day". Derived from the post's own figures, for one bulb: 60 W × (1 − 0.75) = 15 W at most; 3 h/day × 365 = 1,095 h/year; 60 W × 1,095 h = 65.7 kWh and 15 W × 1,095 h = 16.4 kWh; 65.7 − 16.4 = at least 49.3 kWh saved per bulb per year.
Next step: None.

### 3 · Scale and boundary literacy — passed

> "an average home's electricity" · "in a house still full of old bulbs" · "In a home that already switched most fixtures, the remaining savings are small"

Claims: C-4, C-5, C-6
Why: Keeps the average home apart from the reader's home, in both directions, and keeps the direct saving (lighting electricity) apart from the indirect effects (heating and cooling) by climate and season.
Contrast: EIA, Residential Energy Consumption Survey: in 2020, 47% of households used LEDs for most or all indoor lighting and 15% used incandescent or halogen bulbs for most of it (https://www.eia.gov/todayinenergy/detail.php?id=51858, published 2022). Preliminary 2024 results: 37% used LEDs for all indoor lighting and 5% used incandescent or halogen bulbs for all of it (https://www.eia.gov/consumption/residential/, released 2026). The 2020 and 2024 questions differ ("most" and "all"), so the two years are not a like-for-like series. The home the post addresses is a minority case, and the post's "If you still have" scopes it that way.
Next step: None.

### 4 · Trade-off and substitution literacy — passed

> "One trade-off: an incandescent's waste heat slightly warms the room, so in a cold climate some of the saving shows up as a little more heating. In summer it works the other way, and the air conditioner does less."

Claims: C-1, C-6
Why: Names the substitute (LEDs) and a cost of the swap (more heating in a cold climate), with the opposite effect in summer. It gives the cost a direction and no size; the purchase price of the bulb is not mentioned.
Contrast: Min, Azevedo and Hakkarainen, *Applied Energy* 141 (2015), abstract: replacing incandescent bulbs "increases demands for heating service" and "decreases demands for cooling service"; "In some regions, these heating and cooling effects from more efficient lighting can undermine up to 40% of originally intended primary energy savings, erode anticipated carbon savings completely, or lead to 30% less household monetary savings than intended"; and "for moderate lighting efficiency interventions, the overall effect is small in magnitude, corresponding at most to 1% of either total emissions or of energy consumption by a house." https://ideas.repec.org/a/eee/appene/v141y2015icp12-18.html. Abstract only; the regional results were not read. "A little" fits the whole-house figure; measured against the lighting saving itself, the offset can be larger in some regions.
Next step: Open the full paper (DOI 10.1016/j.apenergy.2014.11.031) and find the result for your climate region and heating fuel: what share of the lighting saving the added heating takes back.

### 5 · Output and value accounting — passed

> "for the same light" · "an incandescent's waste heat slightly warms the room"

Claims: C-2, C-3, C-6
Why: Counts what the incandescent bulb delivers. Light is held equal in lumens, and the bulb's heat is treated as worth something in a cold climate instead of being written off as waste.
Contrast: The 2010 DOE guide says incandescent bulbs "waste 90% of their energy as heat" and does not mention that heat's effect on heating or cooling. The post counts more of the output than its cited source does.
Next step: None.

### 6 · Recency and updating literacy — partial

> "DOE's lighting guide says lighting is about 15% of an average home's electricity" · "Source: DOE, *Guide to Energy Efficient Lighting* (DOE/EE-0344)."

Claims: C-4
Why: The guide is dated October 2010 and the post gives no year for it or for the figure. EIA's latest measured share is about 6% for 2020: 6 ÷ 15 = 0.4, so less than half of the guide's figure. The post's next sentence ("In a home that already switched most fixtures, the remaining savings are small") covers the change in direction, and the advice is conditional on still having incandescents, so this is an error that does not change the conclusion.
Contrast: EIA FAQ, "How much electricity is used for lighting in the United States?" (last updated March 15, 2024): "in 2020, electricity consumption for lighting accounted for about 6% (81 billion kilowatthours [kWh]) of electricity consumption in U.S. homes." https://www.eia.gov/tools/faqs/faq.php?id=99&t=3. The guide's footer reads "DOE/EE-0344 • October 2010". EIA's RECS page (2026) says the full 2024 data set will be released in spring 2027, so 2020 is the latest consumption figure available.
Next step: EIA FAQ id=99 for the 2020 share; then EIA RECS 2024 consumption and expenditures tables when published (the 2020 equivalents are tables CE5.1a and CE5.3a, detailed household site electricity end-use consumption) for the lighting share of household electricity.

### 7 · Source and evidentiary literacy — passed

> "Source: DOE, *Guide to Energy Efficient Lighting* (DOE/EE-0344)."

Claims: C-2, C-4, C-5
Why: Names the agency, the title, and the report number, and a reader can open it. The 75 percent figure, the 15% share, and the three-hours rule are all in that document.
Contrast: Opened and compared. Three details in the post are not in the guide: it says LEDs "last 25 times longer" where the post says "up to 25 times longer"; its lumens example is a 75-watt bulb and 1,100 lumens, not 60 watts and 800 lumens (ENERGY STAR's table gives 60 W → 800 lumens); and it says nothing about the heating and cooling trade-off in C-6. The guide states the 15% share without naming the survey behind it; the measurement of that share is EIA's RECS.
Next step: None for the cited figures. For C-6, see dimension 4.

## Next steps

1. Size the heating offset for a cold-climate home — Min, Azevedo and Hakkarainen, "Assessing regional differences in lighting heat replacement effects in residential buildings across the United States," *Applied Energy* 141 (2015), regional results by climate and heating fuel. This is the one check that could change what a cold-climate reader concludes about how much the swap saves.
2. Date the lighting share — EIA FAQ "How much electricity is used for lighting in the United States?" (id=99). One page; gives the 2020 figure and its survey.
3. Update the lighting share — EIA RECS 2024 consumption and expenditures tables, detailed household site electricity end-use consumption, due spring 2027.
4. Check DOE's current wording of the 75 percent and 25 times figures — DOE Energy Saver, "LED Lighting" page. Look for "up to" and for whether the figures are limited to ENERGY STAR products.
5. Read a measured heating-season result — Parekh et al., "Benchmarking of Energy Savings Associated with Compact Fluorescent Lighting in Homes," ACEEE Summer Study 2006 (Canadian Centre for Housing Technology twin-house tests), heating-season and cooling-season results.

## Unverified

- "last up to 25 times longer" as DOE's wording — the cited 2010 guide says "last 25 times longer"; DOE's Energy Saver pages returned 404 at three URLs in this run — DOE Energy Saver, "LED Lighting" page.
- How large "a little more heating" is for an LED swap in a given U.S. climate — only the abstract of the 2015 *Applied Energy* study was read; it gives upper bounds across regions, not a figure per climate — the paper's regional results.
- Measured heating-season offset in a real house — the 2006 CCHT twin-house paper was located but its text was not read in this run, so no figure from it is used here — https://www.eceee.org/static/media/uploads/site-2/library/conference_proceedings/ACEEE_buildings/2006/Panel_9/p9_23/paper.pdf
- The survey and year behind the guide's "about 15%" — the guide names no source for it — EIA RECS editions before 2010.
- Lighting's share of home electricity after 2020 — not yet published — EIA RECS 2024 consumption tables, spring 2027.

## A stronger version

To pass recency, the post would give the guide's date (October 2010) next to the 15% figure and set EIA's 2020 figure of about 6% beside it, so a reader can see that the average home has already taken most of the saving and that the advice now applies to the homes and fixtures that have not. Giving the heating trade-off a size for a cold climate would let a reader weigh it, though the trade-off dimension does not depend on it.

## Sources opened

- DOE, *Guide to Energy Efficient Lighting*, DOE/EE-0344, October 2010 — https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf — publication date; "at least 75 percent less energy"; "last 25 times longer"; "about 15% of an average home's electricity use"; "lit three or more hours a day"; watt and lumen definitions; 75-watt / 1,100-lumen example; "waste 90% of their energy as heat".
- EIA, FAQ "How much electricity is used for lighting in the United States?", last updated March 15, 2024 — https://www.eia.gov/tools/faqs/faq.php?id=99&t=3 — lighting about 6% (81 billion kWh) of home electricity consumption in 2020, from RECS.
- EIA, Today in Energy, "Nearly half of U.S. households use LED bulbs for all or most of their indoor lighting," March 31, 2022 — https://www.eia.gov/todayinenergy/detail.php?id=51858 — 2020 shares of households by main bulb type (47% LED, 15% incandescent or halogen).
- EIA, Residential Energy Consumption Survey landing page — https://www.eia.gov/consumption/residential/ — preliminary 2024 RECS lighting results (37% LED for all indoor lighting, 5% incandescent or halogen for all), released 2026; full 2024 data due spring 2027.
- EIA, 2020 RECS Consumption & Expenditures tables index — https://www.eia.gov/consumption/residential/data/2020/index.php?view=consumption — table names only (CE5.1a, CE5.3a); the tables themselves were not opened.
- ENERGY STAR, "Learn About Brightness" — https://www.energystar.gov/products/light_bulbs/learn-about-brightness — 60-watt incandescent → 800 minimum lumens.
- Min, Azevedo and Hakkarainen, "Assessing regional differences in lighting heat replacement effects in residential buildings across the United States," *Applied Energy* 141 (2015), pp. 12–18, abstract page — https://ideas.repec.org/a/eee/appene/v141y2015icp12-18.html — direction of the heating and cooling effects; "up to 40%", "30% less", and "at most to 1%" bounds.
