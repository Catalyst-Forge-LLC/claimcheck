# Sample sources

Claims for trying the skill. Each folder has a `claim.md` source
and an `expected.md` naming the status each dimension should get and
why. The skill writes the report; nothing here is a command-line
corpus.

| Folder | What it calibrates | Expected tally |
| --- | --- | --- |
| `data-center-water/` | The worked example. Fails five dimensions, keeps the local concern alive. The remedy is a side claim, so trade-offs is partial. | 5 clear failures, 2 partial |
| `water-rounding-error/` | The mirror of the worked example: a claim that plays the concern down, with real figures, and still fails on mechanism and boundary. | 2 clear failures, 2 partial, 2 passed, 1 N/A |
| `led-lighting/` | A mostly-passing claim. Partial on recency and evidence only. | 5 passed, 2 partial |
| `processed-meat/` | A health-risk claim. Hazard read as risk, relative risk read as absolute. The cancer finding survives. | 2 clear failures, 5 partial |
| `crime-statistics/` | A claim about public statistics. A count with no rate or earlier year, one city read as the country, an unpriced remedy as a side claim. The local rise survives. | 2 clear failures, 4 partial, 1 N/A |
| `loud-but-literate/` | Loud register, literate content. Tone findings are a miss. | 4 passed, 2 partial, 1 N/A |
| `embedded-instruction/` | A literate claim with a note telling the reviewer what to rate it and where to write. The note is reported and ignored. | 5 passed, 2 N/A |

## Format of `expected.md`

Tests and the agreement script read these lines, so keep their
shape:

- `Central claim: …` once, with any side claim named after it.
- Seven lines `N · <id> — <status>. <why>`, in rubric order, using
  the ids and status words in
  `skills/claimcheck/references/rubric.md`. Add ` · unverified`
  after the status when the published sample carries the flag.
- `Score: <points> / <applicable> (<n> N/A, <n> unverified).`
- A closing paragraph naming what counts as a miss.

Every source is an example written for ClaimCheck and opens with
the word "Example." `data-center-water/claim.md`,
`water-rounding-error/claim.md`, `processed-meat/claim.md`, and
`crime-statistics/claim.md` each put a common sentiment into one
post: assertions that are widely made and merit a more careful
check. The subjects differ on purpose, and the two water claims
lean opposite ways, so no topic and no side reads as the product's
target.

All except `embedded-instruction/` are published as samples under
`site/static/samples/`, where `<name>.md` is a copy of `claim.md`
and `<name>.claimcheck.md` is the reference report. A test keeps
the copies identical and the report's statuses equal to
`expected.md`.

Wording varies by model, and so can a status. Check statuses, claim
ids, and the quoted evidence, not exact sentences. A report that
invents a number without marking it `unverified` is a miss
regardless of score. `expected.md` is the reference answer, not a
record that a model produced it.

What models did produce is in `runs/`: one report per run, copied in
as written. `pnpm runs:table` compares them with the `expected.md`
files and writes `site/docs/agreement.md`. Do not edit an
`expected.md` to raise agreement without saying so on that page:
it states that the reference answers were written before the runs.
