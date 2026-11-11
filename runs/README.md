# Recorded runs

Reports a model wrote when asked to use ClaimCheck on the sample
claims in `fixtures/`. They are records, not reference answers, and
nobody has edited them. The one change made on the way in: where a
report spells out the full path of its run folder, only the file
name is kept.

Each set is one host and model:

```text
runs/<set>/
├── set.json                       host, model, date, how runs were launched
└── <fixture>/
    ├── run-<n>.claimcheck.md      the report, as written
    └── run-<n>.json               source unchanged? report path, extra files
```

`site/docs/agreement.md` tabulates every set against
`fixtures/*/expected.md`. It is generated; change `src/agreement.ts`
or `set.json`, not the page.

## Add a set

1. `pnpm runs:prepare <work-dir> 5` makes one folder per run outside
   the repo, holding the claim as `post.md` and a copy of the skill.
   Keep the work folder outside the repo so a run cannot read
   `expected.md`.
2. In each folder, ask the agent: "Use ClaimCheck on `post.md`.
   Follow the installed ClaimCheck skill. Write the report. Leave
   the source unchanged." Start every run fresh, with no memory of
   the others.
3. `pnpm runs:collect <work-dir> <set>` copies the reports here.
4. Write `runs/<set>/set.json`. `readings` is optional: hand-written
   notes on what the differing reports say.
5. `pnpm runs:table`, then `pnpm test`.
