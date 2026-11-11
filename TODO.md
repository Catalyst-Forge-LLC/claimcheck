# ClaimCheck — Feature Backlog

---

## Spine

- [x] Skill: SKILL.md, rubric, report shape, examples
- [x] TypeScript path catalog + package.json (`getclaimcheck`, no `bin`)
- [x] FilePress site: home, install, dimensions, report, skill, about
- [x] Fixtures: data-center-water, led-lighting, loud-but-literate, processed-meat, crime-statistics
- [x] Sources table for every number on a public page (`docs/sources.md`)

## Before first ship

- [x] Confirm LBNL 2024 Section 5 figures on the primary PDF (pp. 55–57): confirmed 2026-11-11 and marked "read directly" in `docs/sources.md`. The 150–280 billion L 2028 range is not in the report's text and is not used publicly
- [ ] Confirm whether the LBNL 2025 Update publishes water totals
- [x] Domain secured: claimcheck.dev (Sam, 2026-11-10)
- [x] Cloudflare Pages project `claimcheck` live at claimcheck.dev
- [x] npm package name: `getclaimcheck` (`claimcheck` on npm is another project; `getclaimcheck` was unclaimed on 2026-11-11)
- [x] First publish of `getclaimcheck` (Sam; 0.1.1 on npm, 2026-11-11). Release contract: package directory is the repo root; version lives in the root `package.json`; build is `pnpm build` (`prepublishOnly` runs `tsc && pnpm test`); README is the root `README.md`
- [x] Enrolled in LocalHelm as `claimcheck` with npm name `getclaimcheck` (2026-11-11)
- [x] GitHub repo `Catalyst-Forge-LLC/claimcheck` (2026-11-11)
- [x] LocalSlip lease `claimcheck-site` on 5333
- [ ] Real logo (current one is a placeholder mark)
- [ ] Add ClaimCheck to catalystforge.com/tools (shelf entry, tools.md, tools.json)
- [ ] Add ClaimCheck to the sibling "when to use which" lines (Smell Check, Cold-eye, TemperPass)
- [ ] First recorded model run on each fixture; compare with `expected.md`

## Next

- [x] SKILL_FACTS label (`skills/claimcheck/SKILL_FACTS.md`)
