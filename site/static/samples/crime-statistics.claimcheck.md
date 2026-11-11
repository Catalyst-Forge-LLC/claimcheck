# ClaimCheck — "Crime has never been this bad"

Worked sample, written to show the report on a claim about public
statistics. The source is an example of a common sentiment about
crime, the kind of assertion that merits a more careful check.
Figures in **Contrast** were checked on 2026-11-11 against the
sources listed at the end.

**Source:** `crime-statistics.md` (example), read 2026-11-11. Unchanged.
**Central claim:** > "It is the worst it has ever been in this country"
**Summary:** clear failures: 3 · partial: 3 · passed: 0 · N/A: 1
**Score:** 1.5 / 6 (1 N/A)

The claim fails on magnitude, trade-offs, and evidence: a count
with no rate and no earlier year, a remedy with no price, and a
neighborhood app in place of the national datasets. Two things in
it are right and survive. The rise in the writer's own city is a
real, checkable concern, and a large share of crime is never
reported to police. Neither supports "the worst it has ever been."

## Claims read

- **C-1** > "Crime is out of control. It is the worst it has ever been in this country"
- **C-2** > "More than a million violent crimes were reported last year."
- **C-3** > "In my city, murders went from 30 to 40 in a single year. That is a 33 percent jump, and what is happening here is happening everywhere."
- **C-4** > "My neighborhood app shows a new break-in or car theft every single day. A few years ago I never saw any of that."
- **C-5** > "the official numbers can't be trusted anyway, because most crime never gets reported."
- **C-6** > "The only answer is more police on every street, whatever it costs."

## Findings

### 1 · Mechanistic literacy — partial

> "the official numbers can't be trusted anyway, because most crime never gets reported."

Why: The process here is how crime gets counted, and the post has
half of it. The fact is about right: in the national victimization
survey, roughly half of violent victimizations were not reported to
police. The conclusion does not follow. The FBI's figures are, by
design, counts of crime reported to law enforcement, with estimates
for agencies that did not report. A separate household survey
exists to measure crime whether or not it was reported.
Under-reporting sets the level of the police count. It does not
show which way crime is moving, and it is not new: the survey
series that measures it began in 1973.

Contrast: BJS, *Criminal Victimization, 2024*: "there were 23.3
violent victimizations per 1,000 persons age 12 or older" and "the
rate of violent victimizations reported to police was 11.2 per
1,000." Share reported: 11.2 ÷ 23.3 ≈ 48%; not reported ≈ 52%. The
survey counts nonfatal violent crime including simple assault, so
its totals are not the FBI's totals. FBI, *UCR Summary, 2025*: the
NCVS "collects information on crimes experienced by individuals and
households whether or not those crimes were reported to law
enforcement," and of the two programs: "Together, they can provide
a greater understanding of crime trends in the United States."

Next step: BJS *Criminal Victimization, 2024*, the tables on
victimizations reported and not reported to police, by type of
crime.

### 2 · Quantitative and comparative literacy — clear failure

> "More than a million violent crimes were reported last year." · "It is the worst it has ever been in this country"

Why: The count is true and tells the reader nothing alone. It has
no rate (per how many people?) and no earlier year to compare with.
"The worst it has ever been" is a comparison across time, made
without a single past figure.

Contrast (arithmetic shown; years are named):

| Measure | 1991 | 2025 | 2025 as share of 1991 |
| --- | --- | --- | --- |
| Violent crimes, estimated (FBI) | 1,911,767 | 1,119,768 | 1,119,768 ÷ 1,911,767 ≈ 59% |
| Violent crime rate per 100,000 inhabitants (FBI) | 758.2 | 327.6 | 327.6 ÷ 758.2 ≈ 43% |
| Murder rate per 100,000 inhabitants (FBI) | 9.8 | 4.1 | 4.1 ÷ 9.8 ≈ 42% |

1991 is the highest violent crime rate in the FBI table opened,
which covers 1991 to 2010. Earlier years were not opened. The FBI
widened its definition of rape in 2013, so the 2025 total counts
some offenses the 1991 total did not; the comparison is
approximate, and the change would raise the later figure, not lower
it. For the most recent year, FBI, *UCR Summary, 2025*: the violent
crime rate fell from 362.9 in 2024 to 327.6 in 2025, a 9.7%
decline, and "the 2025 estimated murder and nonnegligent
manslaughter rate—4.1 per 100,000 inhabitants—matches the rates
observed in 1955 and 1956, making it tied for lowest rates recorded
since national estimates began."

Next step: FBI Crime Data Explorer, national violent crime rate by
year, for the full series.

### 3 · Scale and boundary literacy — partial

> "In my city, murders went from 30 to 40 in a single year." · "what is happening here is happening everywhere."

Why: The first sentence is the strongest line in the post. A rise
from 30 to 40 is ten more people killed in one city, and the
arithmetic is right: 10 ÷ 30 ≈ 33%. The second sentence stretches
one city over the country. National and local figures can move in
opposite directions, and here the national one did. A one-year
change in a count this small also needs more than two years of
data before it is a trend.

Contrast: FBI, *UCR Summary, 2025*: murder and nonnegligent
manslaughter decreased an estimated 18.1% nationwide from 2024 to
2025. In the comparison by population group, "no population group
designated within 'CIUS, 2025' showed an increase in the
year-to-year violent crime trend," and murder fell in every group,
by 9.2% to 27.4%. A group average does not rule out a rise in one
city.

Next step: the city police department's own murder counts for the
last ten years, and the city's population, to state a rate per
100,000.

### 4 · Trade-off and substitution literacy — clear failure

> "The only answer is more police on every street, whatever it costs."

Why: The post names a remedy and declines to price it. "Whatever it
costs" sets the cost aside in so many words, and "the only answer"
rules out alternatives without naming one. A post may argue that
more police are worth the money. To make that argument it has to
say what the money is and what it would otherwise pay for. This
finding takes no position on the remedy.

Contrast: not checked in this run.

Next step: the city's adopted budget (police share, cost per added
officer), and what the city would cut or raise to pay for it.

### 5 · Output and value accounting — N/A

Absent: any claim about what a use of a resource produces. Nothing
is called waste.

Why: The post is about how much crime there is and what to do about
it, not about whether a resource use is worth its product.

Contrast: not needed.

Next step: None.

### 6 · Recency and updating literacy — partial

> "More than a million violent crimes were reported last year." · "A few years ago I never saw any of that."

Why: "Last year" has no year. The count itself is current: it
matches the FBI's latest estimate, for 2025. The picture around it
is not. A sharp rise fits 2020 to 2022, when the murder rate
reached a 20-year high. The latest full year shows the largest
one-year fall on record, and the first half of 2026 continues it.

Contrast: FBI, *UCR Summary, 2025* (released August 2026): murder
rates "reached a 20-year high of 6.6 offenses per 100,000
inhabitants in 2020 and 2022"; from 2024 to 2025 "the United States
has recorded its largest year-to-year decreases in both the
estimated violent crime rate and the estimated murder and
nonnegligent manslaughter rate" since estimates began in 1936.
Preliminary, January to June 2026 against the same months of 2025:
violent crime down 10.6%. The FBI notes its 2021 estimates are not
comparable to other years.

Next step: date the figure (2025), and check the FBI's quarterly
releases for the current year.

### 7 · Source and evidentiary literacy — clear failure

> "My neighborhood app shows a new break-in or car theft every single day." · "anyone who says otherwise is not paying attention."

Why: The evidence offered is a feed of posts and what people say. A
feed measures how much gets posted and how many neighbors have
joined. It has no denominator and no earlier year. The systematic
sources that exist for exactly this question, the FBI's national
estimates and the BJS victimization survey, are not opened. They
are dismissed in one line. The one real figure in the post is given
without a source.

Contrast: FBI, *UCR Summary, 2025*: data from 17,075 law
enforcement agencies covering 96.2% of the population. On the
crimes the post names: burglary decreased an estimated 15.8% and
motor vehicle theft 22.7% from 2024 to 2025, and both rates were
the lowest in the report's 20-year series.

Next step: cite the FBI's *UCR Summary of Reported Crimes in the
Nation, 2025* for national figures and BJS's *Criminal
Victimization* for unreported crime; for the neighborhood, the
police department's incident data by area.

## Next steps

1. **The local question** — the city police department's murder
   counts for the last ten years, stated as a rate per 100,000.
   This is the check that could make the post's strongest line a
   trend or a one-year swing.
2. **The national rate by year** — FBI Crime Data Explorer. Cheapest
   check, and it settles "the worst it has ever been."
3. **Unreported crime** — BJS *Criminal Victimization, 2024*, the
   tables on reporting to police.
4. **The price of the remedy** — the city's adopted budget.

## Unverified

- Whether 1991 is the highest violent crime rate on record — the
  FBI table opened covers 1991 to 2010 only. Check the FBI Crime
  Data Explorer for earlier years.
- The city's figures (30 and 40 murders) — the post names no city.
  Check the police department's published counts.
- The share of property crime (break-ins, car thefts) not reported
  to police — only the violent-crime highlights of the BJS report
  were opened. Check its property-crime tables.
- Whether BJS has published victimization estimates for 2025 — none
  was found in this run. Check the BJS publications page.
- What a neighborhood app's post volume tracks — no source opened.
- The cost and effect of added police staffing — not checked.

## A stronger version

A post that passed would keep the city and drop "everywhere" and
"ever." It would give the city's murders as a rate, over ten years,
next to the national rate for the same years. It would date its
national figure and say where it came from. It would keep the point
about unreported crime and cite the survey that measures it. And it
would say what more police would cost and what that money would
otherwise do. That post could still conclude the city has a problem
worth paying to fix, and a reader could check it.

## Sources opened

- FBI, *UCR Summary of Reported Crimes in the Nation, 2025* (released August 2026) — https://cde.ucr.cjis.gov/LATEST/resources/reports/UCR_Summary_of_Reported_Crimes_in_the_Nation_2025.pdf — 1,119,768 violent crimes and 327.6 per 100,000 in 2025; 362.9 in 2024; year-to-year changes by offense; murder rate 4.1 and the 20-year series; trends by population group; agency coverage; preliminary 2026; differences between FBI and BJS measures. Read directly.
- FBI, *Crime in the United States, 2010*, Table 1 (1991–2010) — https://ucr.fbi.gov/crime-in-the-u.s/2010/crime-in-the-u.s.-2010/tables/10tbl01.xls — 1991: 1,911,767 violent crimes, rate 758.2, murder rate 9.8. Read directly.
- FBI, press release "FBI Releases 2024 Reported Crimes in the Nation Statistics", August 5, 2025 — https://www.fbi.gov/news/press-releases/fbi-releases-2024-reported-crimes-in-the-nation-statistics — the revised rape definition and which years use it. Read directly.
- BJS, *Criminal Victimization, 2024* (September 2025), publication page — https://bjs.ojp.gov/library/publications/criminal-victimization-2024 — 23.3 violent victimizations per 1,000 persons age 12 or older; 11.2 per 1,000 reported to police; what the survey counts; series began in 1973. Highlights read directly; the full report was not opened.
