# ClaimCheck — Swap the last incandescent bulbs

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "If you still have incandescent bulbs in the lamps you leave on for hours, swap them for LEDs."
**Summary:** clear failures: 0 · partial: 1 · passed: 6 · N/A: 0
**Score:** 6.5 / 7

The one gap is recency: the post's "about 15%" share of home electricity
comes from an October 2010 DOE fact sheet, and EIA's 2020 survey puts
the share at about 6%. The post does not date the figure. The advice
itself is scaled to the reader's own bulbs and hours, so it does not
depend on that number. This is a literacy review. It does not rule the
claim true or false.

## Claims read

- **C-1** (central) > "If you still have incandescent bulbs in the lamps you leave on for hours, swap them for LEDs."
- **C-2** > "The U.S. Department of Energy says LEDs use at least 75 percent less energy than incandescent bulbs and last up to 25 times longer, for the same light."
- **C-3** > "Compare by lumens, not watts: an LED around 800 lumens replaces an old 60-watt bulb."
- **C-4** > "DOE's lighting guide says lighting is about 15% of an average home's electricity, so in a house still full of old bulbs it adds up."
- **C-5** > "How much it saves depends on how many incandescents you have left and how long they burn." · "In a home that already switched most fixtures, the remaining savings are small — start with the bulbs that are on three or more hours a day."
- **C-6** > "an incandescent's waste heat slightly warms the room, so in a cold climate some of the saving shows up as a little more heating. In summer it works the other way, and the air conditioner does less."

## Findings

### 1 · Mechanistic literacy — passed

> "Compare by lumens, not watts: an LED around 800 lumens replaces an old 60-watt bulb."

Claims: C-2, C-3, C-6
Why: Separates power drawn (watts) from light produced (lumens), which
is the distinction the swap rests on, and treats an incandescent's heat
as a by-product that goes somewhere. The lifetime figure is quoted
without saying that an LED's rated life ends when its light output has
dropped, not when it burns out; the advice does not turn on that.
Contrast: DOE/EE-0344 (October 2010): "While a watt is a measure of
electrical power, a lumen is a measure of light (brightness)."
ENERGY STAR's brightness table lists a minimum of 800 lumens for an old
60-watt incandescent
(https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_brightness).
PNNL's Building America page says an LED product's "lifetime" is
"determined by when its light output is predicted to decrease by 30%"
(https://basc.pnnl.gov/resource-guides/high-efficiency-lighting).
Next step: None for the claim. A reader can confirm the lumen and watt
figures on the Lighting Facts label of the bulbs in hand.

### 2 · Quantitative and comparative literacy — passed

> "How much it saves depends on how many incandescents you have left and how long they burn."

Claims: C-2, C-5
Why: Gives a relative figure with its baseline (an incandescent of the
same light output) and tells the reader which two quantities scale it.
It also says where the saving is small. It gives no per-bulb amount,
but the reader has the inputs to work one out.
Contrast: From the post's own figures: 60 W × (1 − 0.75) = 15 W at
most for the LED, so at least 45 W saved; 45 W × 3 h/day × 365 days =
49,275 Wh, about 49 kWh a year per bulb. Against EIA's 2020 household
averages (press release, June 15, 2023,
https://www.eia.gov/pressroom/releases/press535.php): 49 / 654 kWh of
lighting = 7.5% of an average home's lighting electricity; 49 / 10,566
kWh = 0.47% of its total electricity.
Next step: Count the incandescents still installed and their daily
hours, then repeat the arithmetic above with the wattages on the
bulbs.

### 3 · Scale and boundary literacy — passed

> "In a home that already switched most fixtures, the remaining savings are small"

Claims: C-4, C-5, C-6
Why: Keeps three boundaries apart: the average home against the
reader's home, a house full of old bulbs against one mostly switched,
and the bulb's own electricity against its effect on heating and
cooling. The average-home figure in C-4 is offered as background, and
the post tells the reader not to apply it to a home that has already
switched.
Contrast: EIA, Today in Energy, March 31, 2022: in 2020, 47% of U.S.
households used LEDs for most or all indoor lighting, and 15% used
incandescent or halogen for most of it (31% in 2015)
(https://www.eia.gov/todayinenergy/detail.php?id=51858). The home
"still full of old bulbs" is therefore a minority case, which is how
the post frames it.
Next step: None for the claim. For a specific home, the count of
remaining incandescents is the boundary that matters.

### 4 · Trade-off and substitution literacy — passed

> "One trade-off: an incandescent's waste heat slightly warms the room, so in a cold climate some of the saving shows up as a little more heating. In summer it works the other way, and the air conditioner does less."

Claims: C-1, C-6
Why: Names the substitute (an LED of equal lumens) and says what
happens instead in both seasons. It does not size the heating effect
and does not state the purchase price of the bulbs. The rubric asks
for the substitute or its cost to be named, and it is.
Contrast: LBNL-4220E describes the same interaction ("increasing
winter heating energy demand and reducing summer cooling demand") and
estimates the net effect on primary energy as "likely to be less than
5%, relative to appliance only measures of energy savings," adding
"Fuel switching could be significant." That scenario replaced
incandescents with fluorescent lighting, not LEDs
(https://eta-publications.lbl.gov/sites/default/files/simulating_a_nationally_representative_housing_sample_using_energyplus_lbnl-4220e.pdf).
A Carnegie Mellon thesis modelling 105 U.S. cities reports that in
some regions the effect can "undermine up to 40% of originally
intended primary energy savings" and "lead to 30% less household
monetary savings than intended," while being "at most one percent of
total emissions or energy consumption by a house"
(https://doi.org/10.1184/r1/6716246). Both were read as page excerpts
returned by the search tool, not in full.
Next step: Open the regional results in "Assessing regional
differences in lighting heat replacement effects in residential
buildings across the United States" (Applied Energy, published
2014-12-24, https://doi.org/10.1016/j.apenergy.2014.11.031) and look
for the offset in the reader's climate zone and heating fuel.

### 5 · Output and value accounting — passed

> "for the same light"

Claims: C-2, C-3
Why: Counts what the incandescent delivers, which is light, and holds
it constant across the swap by matching lumens. It also counts the
bulb's second product, heat, in C-6.
Contrast: ENERGY STAR's table pairs each old incandescent wattage with
a minimum lumen output (40 W: 450, 60 W: 800, 75 W: 1,100, 100 W:
1,600), so a like-for-like replacement is defined by light delivered
(https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_brightness).
Next step: None.

### 6 · Recency and updating literacy — partial

> "DOE's lighting guide says lighting is about 15% of an average home's electricity, so in a house still full of old bulbs it adds up."

Claims: C-4
Why: The figure is not dated in the post, and the guide it comes from
is dated October 2010. EIA's 2020 household survey puts lighting at
about 6% of home electricity. The post's own next sentence says the
saving is small in a home that has mostly switched, so the advice
survives; this is a superseded number that does not change the
conclusion.
Contrast: DOE/EE-0344, October 2010: "Lighting accounts for about 15%
of an average home's electricity use"
(https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf).
EIA FAQ, last updated March 15, 2024: "in 2020, electricity
consumption for lighting accounted for about 6% (81 billion
kilowatthours [kWh]) of electricity consumption in U.S. homes," citing
"the most recent RECS"
(https://www.eia.gov/tools/faqs/faq.php?id=99&t=3). EIA press release,
June 15, 2023: average household lighting use was 654 kWh in 2020 and
1,105 kWh in 2015, of 10,566 kWh and 10,720 kWh total. Arithmetic:
654 / 10,566 = 6.2% (2020); 1,105 / 10,720 = 10.3% (2015). For scale,
15% of the 2020 average would be 0.15 × 10,566 = 1,585 kWh, about 2.4
times the 654 kWh EIA measured.
Next step: EIA, RECS 2020 Consumption & Expenditures tables, CE5.1a
and CE5.3a (detailed household site electricity end-use consumption,
totals and averages): read the lighting row, and check whether EIA has
published a survey year later than 2020.

### 7 · Source and evidentiary literacy — passed

> "Source: DOE, *Guide to Energy Efficient Lighting* (DOE/EE-0344)."

Claims: C-2, C-4, C-5
Why: Names the agency, the title, and the document number, so a reader
can open the exact fact sheet. The 75 percent, 25 times, 15 percent,
and three-hours figures are all in it. Two things in the post are not:
the 800-lumen pairing in C-3, which a bulb package settles, and the
heating and cooling interaction in C-6, which carries no source.
Contrast: DOE/EE-0344 (October 2010): "LEDs use at least 75 percent
less energy than incandescent bulbs, emit virtually no heat, and last
25 times longer"; "Replace bulbs that are lit three or more hours a
day." The guide's lumen example is 75 watts and 1,100 lumens, and its
"same amount of light" wording is about CFLs. The post's "up to 25
times longer" and "same light" match PNNL's Building America page:
"ENERGY STAR certified LED products use at least 75% less energy and
last up to 25 times longer than traditional incandescent lighting"
and "approximately 75% less energy ... to produce the same amount of
light" (https://basc.pnnl.gov/resource-guides/high-efficiency-lighting).
The guide is a consumer fact sheet and states its figures without
methods; the measurement behind the 15% share sits with EIA.
Next step: For C-6, the Applied Energy article named under dimension
4. For the share of home electricity, EIA RECS, as under dimension 6.

## Next steps

1. Replace the 2010 share with the measured one — EIA, RECS 2020
   Consumption & Expenditures tables CE5.1a and CE5.3a, lighting row,
   and any later survey year.
2. Read the Lighting Facts label on one old bulb and one LED — lumens
   and watts, then redo the per-bulb arithmetic under dimension 2 with
   the home's own hours.
3. Size the heating and cooling offset for the reader's region —
   "Assessing regional differences in lighting heat replacement
   effects in residential buildings across the United States,"
   Applied Energy, https://doi.org/10.1016/j.apenergy.2014.11.031,
   regional results by climate and heating fuel.
4. Check whether DOE has revised the 15% figure — DOE Energy Saver,
   "Lighting Choices to Save You Money."
5. Price the swap — the shelf price of the LED bulb, set against the
   per-bulb kWh saving at the rate on the reader's electricity bill.

## Unverified

- DOE's current web wording for the 75 percent, 25 times, and 15
  percent figures — three DOE Energy Saver URLs returned 404 in this
  run (`/energysaver/led-lighting`,
  `/energysaver/lighting-choices-save-you-money`,
  `/energysaver/lumens-and-lighting-facts-label` on www.energy.gov) —
  check the live Energy Saver lighting pages.
- Whether a 15% share describes a home lit only by incandescents today
  — no source opened measures lighting's share by bulb type — check
  EIA RECS 2020 microdata or tables CE5.1a and CE5.3a.
- The regional size of the heating and cooling offset — the Applied
  Energy article returned no text, and the LBNL report and the
  Carnegie Mellon thesis were read only as search-tool excerpts —
  check the article and the full texts.
- The publication years of LBNL-4220E and the Carnegie Mellon thesis —
  not shown in the excerpts read — check each document's title page.
- The price of an LED bulb and the wattage of a typical 800-lumen LED
  — the post states neither and no source for them was opened — check
  the product label and shelf price.
- RECS table contents — the table index was opened, the tables CE5.1a
  and CE5.3a were not — open the tables.

## A stronger version

The advice already scales itself to the reader's bulbs and hours. To
pass recency it would date the guide (October 2010) and give EIA's
2020 figure of about 6% beside or instead of the 15%. It would be
easier to judge with one worked per-bulb saving in kWh, the price of
the replacement bulb, and a source for the heating and cooling
interaction that says how large the offset is by climate.

## Sources opened

- DOE, *Guide to Energy Efficient Lighting*, DOE/EE-0344, October 2010 — https://www.energy.gov/sites/prod/files/guide_to_energy_efficient_lighting.pdf — the 75 percent, 25 times, 15 percent, and three-hours wording; the watt and lumen definitions; the 75 W and 1,100 lumen example; the document date.
- EIA, FAQ "How much electricity is used for lighting in the United States?", last updated March 15, 2024 — https://www.eia.gov/tools/faqs/faq.php?id=99&t=3 — lighting at about 6% (81 billion kWh) of home electricity in 2020, per the most recent RECS.
- EIA, press release "Space heating consumed the most energy of any end use in homes, according to latest data," June 15, 2023 — https://www.eia.gov/pressroom/releases/press535.php — average household lighting use of 654 kWh (2020) and 1,105 kWh (2015); average household electricity use of 10,566 kWh (2020) and 10,720 kWh (2015).
- EIA, Today in Energy, "Nearly half of U.S. households use LED bulbs for all or most of their indoor lighting," March 31, 2022 — https://www.eia.gov/todayinenergy/detail.php?id=51858 — household shares by main bulb type, 2015 and 2020.
- EIA, RECS 2020 Consumption & Expenditures tables index — https://www.eia.gov/consumption/residential/data/2020/index.php?view=consumption — table names and numbers only (CE5.1a, CE5.3a).
- ENERGY STAR, "Learn About Brightness" — https://www.energystar.gov/products/lighting_fans/light_bulbs/learn_about_brightness — minimum lumens for 40, 60, 75, and 100 W incandescents. Page undated; opened 2026.
- PNNL, Building America Solution Center, "High-Efficiency Lighting" — https://basc.pnnl.gov/resource-guides/high-efficiency-lighting — read as a search-tool excerpt: the ENERGY STAR "at least 75% less energy" and "up to 25 times longer" wording, "the same amount of light," and the definition of LED lifetime.
- LBNL, "Simulating a Nationally Representative Housing Sample Using EnergyPlus," LBNL-4220E — https://eta-publications.lbl.gov/sites/default/files/simulating_a_nationally_representative_housing_sample_using_energyplus_lbnl-4220e.pdf — read as a search-tool excerpt: the heat replacement effect, its direction by season, and the under-5% net estimate.
- Carnegie Mellon University thesis, "Energy Efficient Lighting: Consumer Preferences, Choices, and System Wide Effects" — https://doi.org/10.1184/r1/6716246 — read as a search-tool excerpt: the up-to-40% regional offset, 30% less monetary saving, and at most 1% of a house's total.
