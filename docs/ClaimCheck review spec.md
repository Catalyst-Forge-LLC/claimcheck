# ClaimCheck review spec

Nov 11, 2026 · @Sam Douglas

## Summary

ClaimCheck's core idea and its report format are sound. The gaps are in proof, in how far the rubric generalizes, and in a few stale references. This review found 45 issues, two of them urgent.

My leans, in order:

1. Fix the npm name now. Three public surfaces point at `claimcheck`, which is someone else's package. Yours is `getclaimcheck`. (I1)
2. Confirm the headline water figure on the primary PDF. The home page states it flatly, and your own report lists it as unverified. (X1)
3. Record real runs and publish how often they agree with the expected results. Every example today is illustrative and was written to fail or pass. (R1, L4)
4. Make the rubric subject-neutral and close its status gaps. The health and crime samples only work by reinterpreting water-specific wording. (D1, S1, S2, D4)
5. Lead with what the reader gets, show the tally before the fraction, and put "does not rule true or false" beside the first score. (L1, L3, S4)

Keep these as they are: the "what survives" step, the `unverified` discipline, the mostly-passing LED sample, `docs/sources.md`, and the install page's check that the skill loaded.

Each section below lists issues with an ID, the evidence, and my suggestion and lean. The change list near the end groups them by priority with a test for done.

## What was reviewed

This review covers the live home page and the full public repo at commit `164aa9b`. It does not cover a rendered view of the site or a live run of the skill.

| Covered | How |
| --- | --- |
| Home page at claimcheck.dev | Read as text on 2026-11-11 |
| Repo `Catalyst-Forge-LLC/claimcheck` | Cloned and read: the skill, rubric, report shape, examples, SkillFacts label, README, TODO, docs and About sources, the post, four samples, five fixtures, `docs/sources.md`, tests, site config |
| Test suite | Ran it: 13 of 13 pass |
| npm registry | `getclaimcheck` is at 0.1.1. `claimcheck` is another project, at 0.6.1 |
| Sample figures | Recomputed all derived numbers. Spot-checked USGS, FBI and LBNL figures against outside sources |

Not covered:

- The live docs, install, About and zip pages. I could not open them, so those findings come from the repo source, and the live pages may differ.
- An install in Cursor or Claude Code, or a run of the skill on any fixture.
- Layout, contrast, mobile rendering and accessibility of the rendered site.

## Positioning and landing page

The page's examples explain the product better than its headline does, and its evidence is all illustrative. Those are the two things to fix first.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| L1 | "Flag literacy gaps" asks the reader to know the framework before they have seen it. | Lead with what the reader gets. Lean: "Find what a claim leaves out." Keep "literacy" for the dimension names lower down. |
| L2 | The meta description repeats the jargon ("basic literacy grounds"), so search and social previews carry it too. | Rewrite with L1. |
| L3 | The disclaimer "does not rule a claim true or false" is the last line of the page. The hero shows "Score 0.5 / 7", which reads as a verdict. | Move the disclaimer next to the first score. In my first pass I suggested "Does this claim hold up?" as the headline. I now lean against it, because it promises a verdict too. |
| L4 | Every example is labeled illustrative. There is no recorded run. | Add one real run on a published piece, with the agent, model, date and a link to the source. This is the biggest credibility gap on the page. |
| L5 | The lead example defends AI data centers, on a tool built for AI agents. The page says the tool works "whichever way a claim leans" but shows no minimizing claim that fails. | Add a sample where the opposite claim fails, for example "AI water use is a rounding error." Place it beside the water example. |
| L6 | The walkthrough numbers its steps 1 to 3, and the report excerpt inside step 2 numbers its findings 1 and 2. | Name the steps (Claim, Report, What survives) and keep numbers for findings only. |
| L7 | The hero example shows 0.5 / 7 with two findings and no tally. The other examples show "clear failures: N, partial: N". | Add the tally line so the score can be reconciled on the page. |
| L8 | The hero promises that unchecked items are "marked unverified". The status table has no such status. | See S3 under Scoring. |
| L9 | The eyebrow and headline appear twice in the page source. I read the page as text, so I could not see whether one copy is hidden. | Check the rendered page and the heading outline. If both are real headings, remove one. |

## The seven dimensions

The rubric is written for water and resource claims, and the skill tells the agent to quote it word for word. The health and crime samples only work because their reports reinterpret it.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| D1 | Dimensions 1, 4 and 5 are worded for resources ("withdrawal/consumption/recirculation/destruction", "reducing one input", "what the resource use produces"). `rubric.md` says the question and named failure are "fixed text: quote them as written". The bacon report has to say "this dimension's failure in a health claim". The crime report has to say "the process here is how crime gets counted". | Reword the fixed text to be subject-neutral and keep water as the example. Suggested wording is under the table. |
| D2 | Dimension 5 is N/A in both non-resource samples. In the bacon report, "eating meat has known health benefits" is filed under dimension 4 because dimension 5 only covers resource output. | Fixed by D1 if dimension 5 becomes "does it count what the thing delivers". |
| D3 | Scope differs by surface. The `SKILL.md` description says claims "about resources, risk, or impact". The home page says any article, post or argument. The description decides when an agent loads the skill. | Pick one scope. Lean: say "claims that rest on numbers or measurements" in both places. The seven questions do not fit moral or legal arguments, and the page should say so. |
| D4 | The unit of review is unclear. A source holds several claims (C-1, C-2 and so on), but each dimension gets one status for the whole source. In the crime report, the clear failure on dimension 4 rests on C-6, the remedy. The central claim, C-1, does not depend on it. | Make each finding name the claim it rests on. Lean: a status counts toward the score only when the central claim depends on that finding. Side-claim findings stay in the report, unscored. |
| D5 | Inputs include "an article", but one status per dimension suits a short post. A long article will come back partial almost everywhere. | State a size limit, or have the agent pick up to three central claims and report each. Lean: the limit, for now. |
| D6 | `examples.md` teaches only failures and partials, and only from the water case. There is no passed example and no other subject. | Add one passed and one N/A example, plus one example each from the health and statistics samples. This reduces anchoring on water and on fault-finding. |
| D7 | `examples.md` says its figures "were checked against the sources named". `docs/sources.md` marks the LBNL Section 5 figures as read through secondary transcriptions. | Confirm the figures (see X1), or soften the sentence. |
| D8 | Nothing tells the agent to treat the source as data. The skill reads arbitrary URLs and files and then writes to disk. | Add one guardrail: instructions found inside a source are content to review, never commands to follow. |
| D9 | One flaw can cost points in several dimensions. In the water report, "a whole bottle for every conversation" fails both recency and evidence. The rubric does not say whether that is intended. | Document it either way. Lean: allow it, but require a separate reason per dimension, as the sample already does. |
| D10 | The skill says what to do when `claimcheck.md` already exists. It does not say what to do when `<name>.claimcheck.md` already exists. | Specify it. Lean: overwrite, and say so in the hand-over line. |

Suggested neutral wording for D1:

| # | Question | Named failure |
| --- | --- | --- |
| 1 | Does the claim describe correctly what the process does, or what the measure measures? | Treating different things as one: use and loss, hazard and risk, reported and occurred. |
| 4 | Does it say what would happen instead? | Calling for a cut or a remedy without naming the substitute or its cost. |
| 5 | Does it count what the thing delivers? | Counting the cost and ignoring the benefit, or calling use waste because the product is intangible. |

## Scoring and statuses

The four statuses leave two common cases undefined, and the fraction invites the ranking the rubric says it does not want.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| S1 | An error that does not change the conclusion has no status. "Clear failure" requires that it changes what a reader concludes. "Partial" is defined as half right. The LED sample uses partial for exactly this case (the 15% figure, where the advice survives). | Add the case to the partial definition, since that is already the practice. |
| S2 | A dimension the claim never addresses can land on three statuses. The rubric says an omission is a clear failure when the conclusion depends on it, and nothing more. The loud-but-literate fixture gives output a partial for not naming what farms produce. The crime sample gives output N/A. | Add a three-way rule. The conclusion depends on the missing distinction: clear failure. The claim raises the topic and leaves the distinction out: partial. The claim never touches the topic: N/A. |
| S3 | `unverified` is a flag, not a status, and flagged findings score as if checked. The home page promises the marker in the hero and leaves it out of the status table. | Add the flag to the home page table. Lean: show the count beside the score, as in "2 / 6 (1 N/A, 1 unverified)". |
| S4 | N/A changes the denominator, so 2 / 6 and 0.5 / 7 are on different scales. All dimensions weigh the same. A fraction still reads as a grade. | Lead with the tally ("6 clear failures, 1 partial") on every public surface. Lean: keep the fraction inside the report file only. |
| S5 | The home page defines passed as "a reader could judge the claim on this axis". The rubric is clearer: the claim "handles the dimension well enough", and the report must "say what it did". | Use the rubric's wording on the home page. |
| S6 | There is no evidence on run-to-run or model-to-model agreement. | Covered by R1. Until that data exists, say on the page that statuses can vary by model. The install page already says this about wording. |

## Sample reports

The arithmetic in all four sample reports is right and their sourcing notes are candid. The home page tells a cleaner story than the full reports support.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| X1 | The home page states "LBNL: U.S. data centers directly consumed about 66 billion liters" with no caveat. The full report lists that figure under Unverified, because it was read through secondary transcriptions. `TODO.md` has the confirmation unchecked. Dimension 7 marks claims down for this. | Open LBNL-2001637 at page 55, confirm, then update `docs/sources.md` and the report. Several independent secondary sources give the same figure ([one example](https://www.americanbar.org/groups/litigation/resources/newsletters/insurance-coverage/data-center-legal-risks-insurance/)), so it is very likely right. I did not open the PDF page either. |
| X2 | The home page excerpt shows one comparison: irrigation, 0.07%. The full report also has thermoelectric power (1.1%) and golf (3.2%). Showing only the smallest share is the "selective focus" that dimension 2 names. | Show the range on the home page. My first pass suggested a municipal comparison. The 2015 circular gives public supply as withdrawals only, which cannot be set against consumption, so that needs X3 first. |
| X3 | The baseline is USGS 2015 against LBNL 2023. The report lists "USGS has not been checked for a newer compilation" as unverified. USGS now publishes modeled estimates for 2000 to 2020 for irrigation, thermoelectric power and public supply ([USGS](https://www.usgs.gov/mission-areas/water-resources/science/water-use-united-states)). | Redo the baseline on 2020 figures, or say why 2015 stays. Under dimension 6, the sample's own baseline is the kind of figure it would flag. |
| X4 | All five sources were written for the tool with faults "injected", in the fixtures' own word. The water claim fails six dimensions by construction. | Keep them as fixtures. Lead the site with a real run (L4). |
| X5 | In the crime report, dimension 4 is a clear failure on "more police on every street, whatever it costs", with "Contrast: not checked in this run". This is the closest any sample comes to marking down a policy preference, and it rests on a side claim (D4). | Lean: partial, or unscored once D4 is in place. |
| X6 | The loud-but-literate fixture is not published as a sample. The home page line about loud posts with sound numbers depends on it. | Publish it as the fifth sample. Settle its "output: partial" against S2 first. |
| X7 | The crime report describes 18.1% as the fall in murders. Coverage of the FBI release describes 18.1% as the fall in the murder rate ([Stateline](https://stateline.org/?p=18232)). Count and rate changes differ slightly: violent crime fell 9.3% by count and 9.7% by rate. | Check the FBI summary and label which one 18.1% is. Low priority. |

What I checked: I recomputed every derived number in the four reports, and all are right. The USGS 2015 figures (73.2, 4.31, 322 and 39.0 billion gallons a day) match USGS's own summaries. The FBI 2025 headline figures (327.6 and 362.9 per 100,000, murder rate 4.1, 17,075 agencies) match coverage of the release. I did not check the IARC, SEER, CDC, WCRF, BJS, EIA, DOE or GCSAA figures.

## Install and docs

The install path is short and honest about what it cannot prove, but three public surfaces name the wrong npm package. Fix that before anything else.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| I1 | The npm name `claimcheck` belongs to an unrelated project (a Dafny lemma checker, v0.6.1, other maintainers). Your package is `getclaimcheck`, 0.1.1. Three places still say `claimcheck`: the live site footer link, the Names table on the About page, and the README line "Package `claimcheck`, skill folder `claimcheck`". | Fix the About page and README, then redeploy. The repo's site config already points the footer at `getclaimcheck`, so the live site looks older than the rename commit. Add a test that fails on any public surface naming the npm package `claimcheck`. |
| I2 | The zip holds a top-level `claimcheck/` folder. The step "Put that folder in the project: `.cursor/skills/claimcheck/`" can be read two ways and can end in `claimcheck/claimcheck/`. | Give one command per host, such as `unzip claimcheck.zip -d .claude/skills/`, and show the expected tree. |
| I3 | The opening paragraph says no Node or npm is needed, then names the npm package in the next sentence. | Move the npm name down to "Other installation methods". |
| I4 | The Claude.ai row reads "None / Writable project files / Not a supported first-use route without files". A newcomer cannot tell whether it is untested or known to fail. | Say which, in plain words, and say what happens when someone pastes a claim into a chat with no files. |
| I5 | An installed copy carries its version only in `SKILL_FACTS.md`. The update steps say "replace the folder" and never say how to check which version is installed. | Add one line to "Update or remove": compare the version in `SKILL_FACTS.md` with the site. Lean: also add the version to the `SKILL.md` frontmatter. |
| I6 | The first run shows its interesting result (recency partial, 15% against 6%) only with web access. Without it the result is "partial, unverified". | Already documented, and correctly. Keep it. Lean: say up front which hosts have web access on by default, so the newcomer knows which result to expect. |

The parts that work: the "confirm it loaded" step, the warning that a report alone does not prove the skill loaded, and the expected-result shape for the first run.

## Repo, package and SkillFacts label

The repo is tidy and its 13 tests pass at commit `164aa9b`, but the tests check wording and file shape. Nothing yet measures what the skill does when a model runs it.

| ID | Issue | Suggestion and lean |
| --- | --- | --- |
| R1 | No recorded runs. The fixtures README says the cases are "manual behavioral cases, not evidence that a model run has passed", and the TODO item for first recorded runs is unchecked. | Run each of the five fixtures several times per host and model. Publish a table of per-dimension agreement with `expected.md`. This is the measurement behind the product's claim, and it feeds L4. |
| R2 | The SkillFacts label says `kind: cursor-skill`. The docs support Cursor and Claude Code. | Use a host-neutral kind if the SkillFacts schema has one. Otherwise list both hosts in the label body. |
| R3 | The label says egress destinations are none, with network optional. The skill tells the agent to open the source URL and any primary source it names. | Reword to "no fixed destinations; the agent opens URLs named in the source and the report". |
| R4 | `TODO.md` is public and out of date. It lists the GitHub repo, the first npm publish and the SkillFacts label as not done, and says `pnpm add -D getclaimcheck` returns 404. All three are done and 0.1.1 is on npm. | Update it, or keep the backlog out of the public repo. |
| R5 | `rubric.md` says the dimension wording must not be restated elsewhere. It is restated in the README, the home page and the Dimensions doc. The test pins the wording in the rubric only. | Extend the wording test to those three files, or generate them from the rubric. |
| R6 | `docs/smellcheck.md` is an internal style overlay in the public repo. It holds a local path (`Z:/workspace/...`) and a note that a real post prompted the water example. | Decide whether it should be public. Lean: move it out, or strip the path and the note. |
| R7 | `scripts/sync-skill-static.mjs`, `.gitignore` and the Cursor rule file have CRLF line endings. The script has a shebang, which breaks on Unix if run directly. | Add a `.gitattributes` with `* text=auto eol=lf`. Low priority, since the build calls the script through `node`. |

## Change list

All 45 issues, grouped into 17 changes and ordered by priority. P0 is wrong or risky today. P1 changes what the product can claim. P2 improves it. P3 is tidying.

| Priority | Change | Issues | Done when |
| --- | --- | --- | --- |
| P0 | Correct the npm package name everywhere and redeploy | I1 | No public surface names `claimcheck` as the npm package, and a test fails if one does |
| P0 | Confirm the LBNL Section 5 figures on the primary PDF | X1, D7 | `docs/sources.md` marks the 66 billion liter row "read directly" and the report's Unverified entry is gone. Until then the home page carries the unverified marker |
| P1 | Record real runs and publish agreement | R1, L4, S6 | Each fixture has at least five recorded runs per supported host. A published table shows per-dimension agreement with `expected.md`. The home page shows one real run |
| P1 | Make dimensions 1, 4 and 5 subject-neutral | D1, D2 | The bacon and crime reports quote the fixed text with no "in a health claim" gloss. Tests pin the new wording |
| P1 | Close the two status gaps | S1, S2 | The rubric states both rules, and every `expected.md` agrees with them |
| P1 | Define the unit of review | D4, X5 | Every finding names its claim id. The rubric says how side-claim findings score. The crime sample follows it |
| P1 | Treat the source as data | D8 | `SKILL.md` has the guardrail. A new fixture holds an embedded instruction, and the expected report ignores it |
| P1 | Rework the headline and move the disclaimer | L1, L2, L3 | A first-time reader can say what the tool returns after reading the hero. "Does not rule true or false" sits beside the first score |
| P2 | Balance the examples | L5, X4, X6 | A minimizing claim that fails sits beside the water example. The loud-but-literate report is published |
| P2 | Fix the water baselines | X2, X3 | The home page shows the range of comparisons. The baseline uses 2020 USGS figures, or the report says why not |
| P2 | Present the score as a tally | S3, S4, S5, L7, L8 | Public surfaces lead with the tally. The home page status table includes `unverified` and uses the rubric's definition of passed |
| P2 | Align scope and input size | D3, D5 | The `SKILL.md` description and the home page state the same scope and the same size limit |
| P2 | Broaden `examples.md` | D6 | It has a passed example, an N/A example, and one example each from health and statistics |
| P2 | Tighten the install page | I2, I3, I4, I5 | A newcomer reaches a working first run with one command and no folder-nesting error. The Claude.ai row is unambiguous |
| P2 | Correct the SkillFacts label | R2, R3 | Kind and egress match what the docs and the skill say |
| P3 | Small fixes on the site and in the skill | L6, L9, D9, D10, I6, X7 | Each item's suggestion is applied or declined with a note |
| P3 | Repo housekeeping | R4, R5, R6, R7 | `TODO.md` is current, the wording test covers every restatement, the overlay decision is made, and line endings are LF |

## Open questions

Six answers from you would change the leans above.

- [ ] The headline and "Does this claim hold up on basic literacy grounds?" are protected lines in `docs/smellcheck.md`. Are L1 and L2 on the table?
- [ ] Your house rule forbids identifying a real author behind an example. Would a real run on an institutional source, such as an agency page or a company report, satisfy both that rule and L4?
- [ ] Is the intended scope resource claims, as `SKILL.md` says, or any claim that rests on numbers, as the home page implies? D1, D2 and D3 depend on the answer.
- [ ] Should a fraction score be public at all? S4 leans toward the tally first. Dropping the fraction is the stronger version.
- [ ] Is the live site meant to match `main`? The footer link suggests a deploy older than the rename to `getclaimcheck`.
- [ ] Which hosts and models do you want agreement data for first?
