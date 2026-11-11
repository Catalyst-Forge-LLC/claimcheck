# ClaimCheck — AI is drinking our water

**Source:** `post.md`, read 2026-11-11. Unchanged.
**Central claim:** > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
**Summary:** clear failures: 4 · partial: 3 · passed: 0 · N/A: 0
**Score:** 1.5 / 7

The problem sits in mechanism, magnitude, output, and evidence: the
post treats local evaporation as destruction, gives its totals no
baseline, counts no output at all, and names one unnamed graphic as
its source. A legitimate concern survives. Data centers do consume
water by evaporation, the national total is real and in the billions
of gallons (LBNL, 2023 data), and a low reservoir next to a new
facility is a checkable local question. This is a literacy review.
It does not rule the claim true or false.

## Claims read

- **C-1** > "Every time you ask a chatbot a question, a data center somewhere drinks a bottle of water." · "a whole bottle for every conversation"
- **C-2** (central) > "These AI data centers are wasting billions of gallons of water a year — water that is gone forever, boiled off so a machine can write someone's homework or a bad poem."
- **C-3** > "Meanwhile families in drought areas are told to take shorter showers."
- **C-4** > "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."
- **C-5** (side claim) > "If these companies actually cared, they would stop using water altogether."
- **C-6** > "Nothing useful comes out of those buildings. It's water poured down the drain for nothing."

## Findings

### 1 · Mechanistic literacy — clear failure

> "water that is gone forever, boiled off" · "water poured down the drain"

Claims: C-2, C-6
Why: Treats use and loss as one thing, in two ways that do not
agree. "Boiled off" is evaporation, which takes water out of the
local supply; "gone forever" turns that local loss into
destruction; "poured down the drain" is discharge, a different path
that returns water. The post also treats every data center as one
that evaporates water.
Contrast: LBNL, *2024 United States Data Center Energy Usage
Report* (December 2024), p. 56: "Water consumption refers to the
amount of withdrawn water that is permanently removed from the
immediate water cycle due to evaporation or other irreversible
processes." The loss is to the immediate cycle, which is the part
the post gets right. Same report, p. 45: "While air-cooled chillers
use no water, they use more energy."
https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf
Next step: LBNL 2024, Section 4, Table 4.2 (major cooling systems)
and Figure 4.4 (site WUE by cooling system) — which systems
evaporate water and which do not.

### 2 · Quantitative and comparative literacy — clear failure

> "billions of gallons of water a year" · "Multiply that by millions of people and it's staggering."

Claims: C-1, C-2, C-3
Why: Absolute numbers with no denominator. The reader cannot tell
big from small without a rate, a share of a total, or a named
larger and smaller use. The one comparison offered, "shorter
showers," carries no number.
Contrast: LBNL 2024, p. 55: U.S. data centers of all kinds directly
consumed 66 billion liters in 2023. 66 billion L ÷ 3.785 L/gal ≈
17.4 billion gallons, so "billions of gallons" is the right order
of size for on-site use. USGS Professional Paper 1894-D (2025)
gives average consumptive use for the conterminous U.S., water
years 2010–20: crop irrigation 75,698 Mgal/d, public supply 4,219
Mgal/d, thermoelectric power (fresh water) 2,904 Mgal/d. Times 365:
27.63 trillion, 1.54 trillion, and 1.06 trillion gallons a year.
17.4 billion is about 0.063% of irrigation (17.4 ÷ 27,630), 1.13%
of public supply (17.4 ÷ 1,540), and 1.64% of thermoelectric
(17.4 ÷ 1,060). The years differ (2023 against a 2010–20 average),
and the data-center figure is on-site water only.
https://pubs.usgs.gov/publication/pp1894D
Next step: USGS PP 1894-D, abstract and "Estimated Water Use by
Category" — consumptive use by category. Then the same comparison
for the watershed the post is about.

### 3 · Scale and boundary literacy — partial

> "Out where I live the reservoir is low, and a new data center just went in. That is what is happening to the whole country."

Claims: C-4, C-1, C-2
Why: The first sentence names a local stress a reader could check.
The second carries it to the whole country with no national figure.
The post's two numbers also leave their boundary unstated: on-site
water or power-plant water too, AI servers or all data centers.
Contrast: LBNL 2024 puts direct use at 66 billion liters (2023,
p. 55) and indirect use through electricity at "nearly 800 billion
liters" (2023, p. 57): 800 ÷ 66 ≈ 12 times as much. Li et al.
(arXiv 2304.03271v5, 2025), Table 1, U.S. average per GPT-3
request: 2.200 mL on-site + 14.704 mL off-site = 16.904 mL, so
14.704 ÷ 16.904 ≈ 87% is off-site. LBNL 2024, Section 5: of
"nearly 100 TWh" of server energy in 2023, AI servers used "more
than 40 TWh," so the national water total covers more than AI. The
local reservoir: not checked in this run; the post names no place.
https://arxiv.org/html/2304.03271v5
Next step: the facility's water permit or utility filing (source,
annual volume, cooling type) against the reservoir operator's
storage record and the supply's other users.

### 4 · Trade-off and substitution literacy — partial

> "If these companies actually cared, they would stop using water altogether."

Claims: C-5 (side claim)
Why: Names a remedy and neither a substitute nor a cost. The
central claim is about how much water is used and lost and does not
depend on the remedy, so the finding is capped at partial. This
takes no position on the remedy.
Contrast: LBNL 2024, p. 45: "In many cases, there are tradeoffs
between low PUEs and low site WUEs," and "While air-cooled chillers
use no water, they use more energy." Same report, p. 57: data
center electricity carried a national average of 4.52 L/kWh of
indirect water in 2023.
Next step: LBNL 2024, Figure 4.4 (PUE and site WUE by cooling
system) and Figure 5.10 (water intensity of electricity by county);
the facility's cooling design.

### 5 · Output and value accounting — clear failure

> "Nothing useful comes out of those buildings." · "so a machine can write someone's homework or a bad poem" · "poured down the drain for nothing"

Claims: C-2, C-6
Why: Names two trivial outputs, then says there is no output at
all, and calls the whole use waste on that basis. A claim may argue
the benefit is not worth the water, but it has to name the benefit
to weigh it.
Contrast: LBNL 2024, Section 5, "Server Electricity Use": of
"nearly 100 TWh" of server energy in 2023, conventional servers
used "nearly 60 TWh" and AI servers "more than 40 TWh." Most of the
computing in "those buildings" is not AI. Which services that
computing runs: not checked in this run.
Next step: name the services the local facility runs (operator
filing or planning application); compare water per unit of output
with other uses the reader accepts.

### 6 · Recency and updating literacy — partial

> "I saw it in a graphic going around: a whole bottle for every conversation."

Absent: a date for any figure in the post.

Claims: C-1, C-2
Why: Wrong in one place and right in another. The bottle figure has
the form of an estimate made for an earlier model (GPT-3, first
posted 2023), and a newer per-prompt figure exists. "Billions of
gallons … a year" is undated too, but it still agrees with the
latest national estimate, so the central total stands either way.
Contrast: Li et al., arXiv 2304.03271 (v1 April 2023, v5 March
2025): "GPT-3 needs to 'drink' (i.e., consume) a 500ml bottle of
water for roughly 10 – 50 medium-length responses, depending on
when and where it is deployed." Google (August 2025, data from May
2025): "the median Gemini Apps text prompt … consumes 0.26
milliliters (or about five drops) of water," with the note "The
data and claims have not been verified by an independent
third-party." 500 mL ÷ 0.26 mL ≈ 1,900 prompts per bottle on that
figure. The two are not like for like: different models, different
boundaries, and one is an operator's own report. The latest LBNL
water figure is still the 2024 report's (2023 data); the *2025
Update* (June 2026) revises electricity, and a text search of it
finds no water figure.
https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference
https://www.osti.gov/servlets/purl/3374245
Next step: the latest version of Li et al. and its Table 1; the
newest operator per-prompt disclosures and what each one counts.

### 7 · Source and evidentiary literacy — clear failure

> "I saw it in a graphic going around"

Claims: C-1, C-2, C-4
Why: The only source named is an unnamed graphic, which is
secondary amplification. "Billions of gallons" has no source, and
the local case is one anecdote with no utility or permit record.
The post also states the graphic's figure two ways, per "question"
and per "conversation," so its scope is lost.
Contrast: The study the figure resembles states its scope: GPT-3,
"roughly 10 – 50 medium-length responses" per 500 mL, on-site and
off-site water together (Li et al., v5, Table 1). Whether the
graphic drew on that study: not checked in this run; the graphic is
not identified.
https://arxiv.org/abs/2304.03271
Next step: find the graphic and the citation printed on it; open
that source and read its unit and scope. For the national total,
LBNL 2024, Section 5, "Direct Water Consumption."

## Next steps

1. Put a baseline under "billions of gallons" — LBNL 2024, Section
   5, "Direct Water Consumption" and "Indirect Water Consumption,"
   against USGS PP 1894-D, consumptive use by category.
2. Find the graphic and its printed citation — then Li et al.,
   arXiv 2304.03271, Table 1, for the unit (responses per 500 mL)
   and the on-site and off-site split.
3. Check the local case — the facility's water permit or utility
   filing, the reservoir operator's storage record, and the
   utility's deliveries by customer class.
4. Check the newer per-prompt figures — operator disclosures from
   2025 on, and whether each counts on-site water only.
5. Price the remedy — LBNL 2024, Figure 4.4 (PUE and site WUE by
   cooling system) and Figure 5.10 (water intensity of electricity).
6. Name the output — the services the local facility runs, from the
   operator's filing or planning application.

## Unverified

- The graphic and its figure — the post does not identify it — the graphic itself and the citation printed on it.
- The low reservoir, the new data center, and whether the facility draws on that reservoir — the post names no place — the reservoir operator's storage data and the facility's water permit or utility filing.
- "families in drought areas are told to take shorter showers" — no place or date given — the state or utility drought orders for the area meant.
- How much of the 66 billion liters (2023) goes to AI servers — the LBNL passages read split electricity by server type, not water — LBNL 2024, Section 5, Figure 5.9 and its data.
- Which services U.S. data centers run, and in what shares — no source opened for it — operator filings and annual reports.
- Google's 0.26 mL per prompt — an operator's own figure, not independently verified, and the page read does not say whether power-plant water is counted — the technical paper linked from the Google post.

## A stronger version

The local concern can be made checkable. A version that passes
would name the facility and the reservoir, cite the water permit or
utility filing, and give the facility's yearly consumptive use as a
share of that supply next to its other users. It would say that the
water evaporates and leaves the local supply, say whether its
numbers count on-site water or power-plant water too, and date
each figure. It would name what the facility delivers before
arguing the water is not worth it, and if it asks for cooling
without water, name the electricity that replaces it.

## Sources opened

- Shehabi et al., *2024 United States Data Center Energy Usage Report*, LBNL, December 2024 — https://eta-publications.lbl.gov/sites/default/files/2024-12/lbnl-2024-united-states-data-center-energy-usage-report_1.pdf — definition of water consumption (p. 56); air-cooled chiller trade-off (p. 45); direct water 66 billion liters in 2023 (p. 55); indirect water nearly 800 billion liters and 4.52 L/kWh in 2023 (p. 57); server energy by type in 2023 (Section 5).
- Smith et al., *United States Data Center Energy Usage Report: 2025 Update*, LBNL, June 2026 — https://www.osti.gov/servlets/purl/3374245 — text search for water figures; none found.
- Medalie et al., *Water use across the conterminous United States, water years 2010–20*, USGS Professional Paper 1894-D, 2025 — https://pubs.usgs.gov/publication/pp1894D — average consumptive use for public supply, crop irrigation, and thermoelectric power.
- Li et al., "Making AI Less 'Thirsty'," arXiv 2304.03271 — https://arxiv.org/abs/2304.03271 and https://arxiv.org/html/2304.03271v5 — version dates (v1 April 2023, v5 March 2025); 500 mL per 10–50 GPT-3 responses; Table 1 on-site and off-site water per request.
- Vahdat and Dean, "How much energy does Google's AI use? We did the math," Google Cloud Blog, August 21, 2025 — https://cloud.google.com/blog/products/infrastructure/measuring-the-environmental-impact-of-ai-inference — 0.26 mL per median Gemini Apps text prompt (May 2025 data) and the not-independently-verified note.
