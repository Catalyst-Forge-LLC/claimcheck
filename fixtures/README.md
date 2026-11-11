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
| `loud-but-literate/` | Loud register, literate content. Tone findings are a miss. One `N/A`. | 5 / 6 (1 N/A) |

Every source is an example written for ClaimCheck and opens with
the word "Example." `data-center-water/claim.md` puts a common
sentiment into one post: assertions that are widely made and merit
a more careful check.

Wording varies by model. Check statuses and the quoted evidence,
not exact sentences. A report that invents a number without marking
it `unverified` is a miss regardless of score.
