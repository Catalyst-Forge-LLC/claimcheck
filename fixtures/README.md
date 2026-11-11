# Sample sources

Claims for trying the skill. Each folder has a `claim.md` source
and an `expected.md` naming the status each dimension should get and
why. The skill writes the report; nothing here is a command-line
corpus, and these are manual behavioral cases, not evidence that a
model run has passed.

| Folder | What it calibrates | Expected score |
| --- | --- | --- |
| `data-center-water/` | The worked example. Fails six dimensions, keeps the local concern alive. | 0.5 / 7 |
| `led-lighting/` | A mostly-passing claim. Partial on recency and evidence only. | 6 / 7 |
| `processed-meat/` | A health-risk claim. Evidence category read as danger, relative risk read as absolute. The cancer finding survives. One `N/A`. | 2 / 6 (1 N/A) |
| `crime-statistics/` | A claim about public statistics. A count with no rate or earlier year, one city read as the country, an unpriced remedy. The local rise survives. One `N/A`. | 1.5 / 6 (1 N/A) |
| `loud-but-literate/` | Loud register, literate content. Tone findings are a miss. One `N/A`. | 5 / 6 (1 N/A) |

Every source is an example written for ClaimCheck and opens with
the word "Example." `data-center-water/claim.md`,
`processed-meat/claim.md`, and `crime-statistics/claim.md` each put
a common sentiment into one post: assertions that are widely made
and merit a more careful check. The three cover different subjects
on purpose, so no one topic reads as the product's target.

Wording varies by model. Check statuses and the quoted evidence,
not exact sentences. A report that invents a number without marking
it `unverified` is a miss regardless of score.
