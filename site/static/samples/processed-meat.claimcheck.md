# ClaimCheck — "Bacon is the new cigarettes"

Worked sample, written to show the report on a health-risk claim.
The source is an example of a common sentiment about processed meat
and cancer, the kind of assertion that merits a more careful check.
Figures in **Contrast** were checked on 2026-11-11 against the
sources listed at the end.

**Source:** `processed-meat.md` (example), read 2026-11-11. Unchanged.
**Central claim:** > "A ham sandwich is as dangerous as smoking."
**Summary:** clear failures: 2 · partial: 5 · passed: 0 · N/A: 0
**Score:** 2.5 / 7 (1 unverified)

The claim fails on mechanism and magnitude: it reads an evidence
category as a danger ranking, and a relative increase as an absolute
risk. The finding underneath is real and survives. Processed meat
does cause colorectal cancer, and the risk rises with the amount
eaten. What the post gets wrong is the size of that risk, and what
its own substitute changes. This is a literacy review. It does not
rule the claim true or false.

## Claims read

- **C-1** > "the World Health Organization has put bacon, ham, and hot dogs in the same cancer category as cigarettes and asbestos."
- **C-2** (central) > "A ham sandwich is as dangerous as smoking."
- **C-3** > "Just 50 grams a day raises your risk of bowel cancer by 18 percent."
- **C-4** > "That means nearly one in five people who eat the stuff will get cancer from it."
- **C-5** > "My uncle had bacon every morning of his life and died of colon cancer at 61. I don't need a study to tell me why."
- **C-6** > "There is no safe amount."
- **C-7** (side claim) > "We threw out everything in the fridge and switched to turkey bacon and chicken sausages, and you should too."

## Findings

### 1 · Mechanistic literacy — clear failure

> "in the same cancer category as cigarettes and asbestos" · "A ham sandwich is as dangerous as smoking."

Claims: C-1, C-2
Why: The first sentence is accurate. IARC, the WHO's cancer agency,
placed processed meat in Group 1, the group that also holds tobacco
smoking and asbestos. (Bacon is not among IARC's named examples,
but it fits the definition, and WCRF lists it.) The second sentence
misreads what the group does. An IARC group states how strong the evidence is that
something can cause cancer (a hazard). It does not state how much
cancer it causes at a given exposure (a risk). Two agents can share
a group and differ in risk by orders of magnitude. Treating hazard
and risk as one thing is this dimension's named failure.

Contrast: IARC's own Q&A (2015) asks this exact question and
answers: "No, processed meat has been classified in the same
category as causes of cancer such as tobacco smoking and asbestos
(IARC Group 1, carcinogenic to humans), but this does NOT mean that
they are all equally dangerous. The IARC classifications describe
the strength of the scientific evidence about an agent being a
cause of cancer, rather than assessing the level of risk." WHO's
current Q&A draws the same line between hazard assessment and risk
at a particular level of exposure.

Next step: IARC Monographs Q&A, Volume 114, the question on tobacco
smoking and asbestos.

### 2 · Quantitative and comparative literacy — clear failure

> "raises your risk of bowel cancer by 18 percent" · "nearly one in five people who eat the stuff will get cancer from it"

Claims: C-3, C-4
Why: The 18 percent is a relative increase: 18 percent more than
whatever the risk was before. The post gives no baseline, then
restates the figure as an absolute risk of about one in five. Those
are different quantities, and the gap between them is the whole
claim.

Contrast (arithmetic shown; years are named):

| Quantity | Figure | Year | Source |
| --- | --- | --- | --- |
| Increase in colorectal cancer risk per 50 g of processed meat eaten daily | about 18% (relative) | 2015 | IARC Q&A, from an analysis of 10 studies |
| Lifetime risk of a colorectal cancer diagnosis, U.S. men and women | approximately 3.9% | 2021–2023 data | NCI SEER |
| That baseline raised by 18% | 3.9% × 1.18 ≈ 4.6% | — | derived |
| Added risk | 4.6% − 3.9% ≈ 0.7 percentage points, about 7 in 1,000 | — | derived |
| The post's reading | "nearly one in five", about 180 to 200 in 1,000 | — | the source |
| Lung cancer risk, people who smoke cigarettes vs people who do not | 15 to 30 times | page dated 2026 | CDC |
| Cancer deaths per year worldwide attributed to diets high in processed meat | about 34,000 | as cited in 2015 | IARC Q&A, citing the Global Burden of Disease Project |
| Cancer deaths per year worldwide due to tobacco smoking | about 1 million | as cited in 2015 | IARC Q&A, citing the same project |

The 4.6% row shows scale. It is not an estimate for any one person:
SEER's 3.9% is an average over everyone in the U.S., including
people who already eat processed meat, and the 18% is pooled from
studies of other populations. On the smoking comparison: 15 to 30
times is an increase of 1,400% to 2,900%, against 18%. On deaths:
1,000,000 ÷ 34,000 ≈ 29. IARC's press release puts it in words:
"For an individual, the risk of developing colorectal cancer
because of their consumption of processed meat remains small, but
this risk increases with the amount of meat consumed."

Next step: the national cancer registry's lifetime-risk figure for
the reader's own country (for the U.S., NCI SEER Cancer Stat Facts:
Colorectal Cancer), then apply the relative increase to it.

### 3 · Scale and boundary literacy — partial

> "Just 50 grams a day" · "people who eat the stuff" · "My uncle had bacon every morning of his life and died of colon cancer at 61. I don't need a study to tell me why."

Claims: C-3, C-4, C-5
Why: The first quote keeps the boundary the figure needs: 18% is
per 50-gram portion eaten daily. The next sentence drops it, and
the figure becomes true of anyone who eats any amount. It also
widens "bowel cancer" to "cancer". Then a population estimate is
applied to one person. Studies of many people can show that risk is
higher among those who eat more. They cannot say why one man got
cancer.

Contrast: IARC Q&A (2015): "every 50 gram portion of processed meat
eaten daily increases the risk of colorectal cancer by about 18%"
and "the risk generally increased with the amount of meat
consumed." On who is most at risk: "The available data did not
allow conclusions about whether the risks differ in different
groups of people."

Next step: the Lancet Oncology summary that the IARC press release
points to, and Monographs Volume 114, for the range of daily intake
the 10 studies covered.

### 4 · Trade-off and substitution literacy — partial

> "switched to turkey bacon and chicken sausages"

Claims: C-7 (side claim)
Why: The post names what it eats instead, which is the question
this dimension asks. It does not check the swap. Processed meat is
defined by the process, not the animal, and the definition includes
poultry. Turkey bacon and chicken sausage that are cured, salted,
or smoked are processed meat under the definition the post relies
on, so the swap may change nothing about the classification. The
central claim does not depend on the swap, so this finding could
not go lower than partial.

Contrast: IARC press release (2015): "Processed meat refers to meat
that has been transformed through salting, curing, fermentation,
smoking, or other processes to enhance flavour or improve
preservation. Most processed meats contain pork or beef, but
processed meats may also contain other red meats, poultry, offal,
or meat by-products such as blood." IARC Q&A: "there is not enough
information to say whether higher or lower cancer risks are related
to eating any particular type of red meat or processed meat." WCRF
names unprocessed
alternatives: "poultry, fish, eggs, and dairy are valuable sources
of protein and micronutrients." Whether the specific products are
cured or smoked was not checked in this run.

Next step: the label of the substitute product (curing, smoking,
added nitrite or nitrate), against the IARC definition.

### 5 · Output and value accounting — partial

Absent: any mention of what the food provides, where the post says
"We threw out everything in the fridge".

Claims: C-7 (side claim)
Why: The post counts the cost of the food and leaves out the
benefit. It raises the topic by telling readers to throw the food
out. The central claim is about the size of a risk and would stand
or fall the same way with the benefit named, so this is partial.

Contrast: IARC Q&A (2015), under "Should I stop eating meat?":
"Eating meat has known health benefits." The same answer says many
national health recommendations advise people to limit processed
meat. How large those benefits are for processed meat in particular
was not checked in this run.

Next step: IARC Monographs Q&A, Volume 114, "Should I stop eating
meat?"; the national dietary guideline for the reader's country.

### 6 · Recency and updating literacy — partial · unverified

> "It's official: the World Health Organization has put bacon, ham, and hot dogs in the same cancer category"

Claims: C-1, C-3
Why: The post gives no date and reads as news. The classification
was announced on 26 October 2015. It has not been withdrawn: WHO's
current Q&A still states it, and WCRF reaches the same conclusion.
So the finding is current, and the post would pass by dating it.
Not checked: whether a newer pooled estimate has replaced the 18%
per 50 grams.

Contrast: IARC Press Release No. 240 is dated 26 October 2015. WHO's
Q&A, read 2026-11-11, says a WHO guideline on the optimal intake of
animal-source foods is in development, so advice on amounts is the
part still moving. WCRF's recommendation page, read 2026-11-11:
"There is convincing evidence that consumption of processed meat is
a cause of colorectal cancer."

Next step: WCRF's Continuous Update Project report on colorectal
cancer, for its dose-response estimate and its date; WHO's
guideline on animal-source foods, when published.

### 7 · Source and evidentiary literacy — partial

> "It's official: the World Health Organization" · "There is no safe amount." · "I don't need a study to tell me why."

Claims: C-1, C-5, C-6
Why: A real primary evaluation stands behind the post, and the post
names the body. Three things fall short. The evaluation is cited by headline, with no
document a reader could open. "No safe amount" is attributed to an
evaluation that did not reach that conclusion: IARC said the data
did not settle the question. (WCRF goes further, and the line is
closer to WCRF's wording than to IARC's. Neither says how large the
risk is at small amounts.) And one family case is ranked above the
studies, which is this dimension's named failure: a single
comparison elevated over the systematic report.

Contrast: IARC Q&A (2015): "The risk increases with the amount of
meat consumed, but the data available for evaluation did not permit
a conclusion about whether a safe level exists." WCRF: "The
evidence on processed meat is even more clear-cut, with no level of
intake associated with a lack of colorectal cancer risk." IARC
press release: the Working Group "considered more than 800
studies," and "the most influential evidence came from large
prospective cohort studies conducted over the past 20 years."

Next step: cite IARC Press Release No. 240 and the Volume 114 Q&A
directly, and attribute "no level of intake" to WCRF if that is the
claim.

## Next steps

1. **The baseline** — the lifetime risk of colorectal cancer where
   the reader lives (U.S.: NCI SEER Cancer Stat Facts). This is the
   check that turns "18 percent" into a size.
2. **IARC's own answer on smoking** — Monographs Q&A, Volume 114,
   one page. Cheapest check, and it settles the central claim.
3. **The substitute's label** — whether the turkey bacon and chicken
   sausage are cured, salted, or smoked.
4. **The dose range** — the Lancet Oncology summary and Monographs
   Volume 114, for the intakes the 18% was measured over.
5. **Newer estimates** — WCRF's Continuous Update Project report on
   colorectal cancer; the status of WHO's guideline on animal-source
   foods.

## Unverified

- Whether a newer pooled estimate replaces "18% per 50 g daily" —
  only WCRF's recommendation page was opened, not its colorectal
  cancer report. Check the WCRF Continuous Update Project.
- What 50 grams is in servings (slices, sausages) — not checked.
  Check the product label or USDA FoodData Central.
- Whether the turkey bacon and chicken sausage in question are cured
  or smoked — depends on the product. Check the label.
- Whether poultry-based processed meat carries the same risk as
  pork or beef — IARC says there is not enough information to
  compare types. Check Monographs Volume 114.
- Lifetime colorectal cancer risk for people who eat no processed
  meat — not found. SEER's 3.9% covers everyone.
- The Global Burden of Disease year behind "34,000" and "1 million"
  — the IARC Q&A says "most recent estimates" as of 2015 and gives
  no year. Check the GBD results tool for current figures.
- The status of WHO's guideline on animal-source foods — described
  as in development. Check WHO's nutrition guidelines page.

## A stronger version

A post that passed would keep the finding and give it a size. It
would say that IARC classified processed meat as a cause of
colorectal cancer in October 2015, that the group describes the
strength of the evidence and not the level of risk, and that each
50 grams eaten daily raises the risk by about 18%: on the U.S.
average, from about 3.9 in 100 over a lifetime to about 4.6 in 100.
It would say the risk rises with the amount, name a substitute that is not itself cured or smoked, and
link the evaluation. That post could still conclude that eating
less processed meat is worth it, and a reader could check it.

## Sources opened

- IARC, Press Release No. 240, "IARC Monographs evaluate consumption of red meat and processed meat", 26 October 2015 — https://www.iarc.who.int/wp-content/uploads/2018/07/pr240_E.pdf — Group 1 classification and its basis, 18% per 50 g daily, "remains small", definition of processed meat including poultry, more than 800 studies. Read directly.
- IARC, "Q&A on the carcinogenicity of the consumption of red meat and processed meat" (Monographs Volume 114, 2015) — https://www.iarc.who.int/wp-content/uploads/2018/11/Monographs-QA_Vol114.pdf — the answer on tobacco smoking and asbestos, 10-study analysis, 34,000 and 1 million deaths per year, safe level not concluded, no comparison between types, health benefits of meat. Read directly.
- WHO, Q&A "Cancer: Carcinogenicity of the consumption of red meat and processed meat" — https://www.who.int/news-room/questions-and-answers/item/cancer-carcinogenicity-of-the-consumption-of-red-meat-and-processed-meat — hazard versus risk, classification still stated, guideline on animal-source foods in development. Read directly.
- NCI SEER, Cancer Stat Facts: Colorectal Cancer — https://seer.cancer.gov/statfacts/html/colorect.html — approximately 3.9% lifetime risk of diagnosis, based on 2021–2023 data. Read directly.
- CDC, "Lung Cancer Risk Factors" — https://www.cdc.gov/lung-cancer/risk-factors/index.html — people who smoke cigarettes are 15 to 30 times more likely to get lung cancer or die from it. Read directly.
- World Cancer Research Fund, "Limit consumption of red and processed meat" — https://www.wcrf.org/research-policy/evidence-for-our-recommendations/limit-red-processed-meat/ — convincing evidence for processed meat and colorectal cancer, bacon listed as processed meat, no level of intake without risk, unprocessed alternatives. Read directly.
