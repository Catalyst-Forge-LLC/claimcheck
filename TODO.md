# ClaimCheck — Feature Backlog

---

## Spine

- [x] Skill: SKILL.md, rubric, report shape, examples
- [x] TypeScript path catalog + package.json (`claimcheck`, no `bin`)
- [x] FilePress site: home, install, dimensions, report, skill, about
- [x] Fixtures: data-center-water, led-lighting, loud-but-literate
- [x] Sources table for every number on a public page (`docs/sources.md`)

## Before first ship

- [ ] Confirm LBNL 2024 Section 5 figures on the primary PDF (pp. 55–57); move them from "via transcription" to "read directly" in `docs/sources.md`
- [ ] Confirm whether the LBNL 2025 Update publishes water totals
- [x] Domain secured: claimcheck.dev (Sam, 2026-11-10)
- [ ] Create the Cloudflare Pages project `claimcheck` and point claimcheck.dev at it
- [x] npm package name: `getclaimcheck` (`claimcheck` on npm is another project; `getclaimcheck` was unclaimed on 2026-11-11)
- [ ] First publish of `getclaimcheck` (Sam publishes). Release contract: package directory is the repo root; version lives in the root `package.json`; build is `pnpm build` (`prepublishOnly` runs `tsc && pnpm test`); README is the root `README.md`. `npm pack --dry-run` on 2026-11-11: `getclaimcheck@0.1.0`, 10 files (`dist/index.js`, `dist/index.d.ts`, `skills/claimcheck/`, `README.md`, `LICENSE`, `package.json`). Until it is published, `pnpm add -D getclaimcheck` in the README and install docs returns 404
- [x] Enrolled in LocalHelm as `claimcheck` with npm name `getclaimcheck` (2026-11-11)
- [ ] Create GitHub repo `Catalyst-Forge-LLC/claimcheck`
- [ ] Confirm LocalSlip lease `claimcheck-site` on 5205 is free
- [ ] Real logo (current one is a placeholder mark)
- [ ] Add ClaimCheck to catalystforge.com/tools (shelf entry, tools.md, tools.json)
- [ ] Add ClaimCheck to the sibling "when to use which" lines (Smell Check, Cold-eye, TemperPass)
- [ ] First recorded model run on each fixture; compare with `expected.md`

## Next

- [ ] Optional SKILL_FACTS label from skillfacts.dev
