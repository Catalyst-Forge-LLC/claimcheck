---
skill_facts_version: "0.1.0"
name: ClaimCheck
developer: Catalyst Forge
version: 0.1.1
status: active
license: MIT
kind: cursor-skill
purpose: "Literacy-gap review of a claim, post, article, or short argument across seven dimensions. Writes a report; leaves the source unchanged."
homepage: "https://claimcheck.dev"
repository: "https://github.com/Catalyst-Forge-LLC/claimcheck"
provenance:
  source: "https://github.com/Catalyst-Forge-LLC/claimcheck"
  publisher: Catalyst Forge
instructions_reach:
  shell: none
  network: optional
  filesystem: read-write
tools_referenced: []
bundled_artifacts:
  - path: SKILL.md
    kind: other
  - path: references/rubric.md
    kind: other
  - path: references/report.md
    kind: other
  - path: references/examples.md
    kind: other
egress:
  telemetry: none
  destinations: []
generated:
  date: 2026-11-10
  generator: hand-written
credits:
  built_by: "Catalyst Forge - https://www.catalystforge.com/"
---

# Skill Facts - ClaimCheck

| | |
|---|---|
| **Developer** | Catalyst Forge |
| **Version** | 0.1.1 |
| **Status** | active |
| **License** | MIT |
| **Kind** | cursor-skill |

## Purpose

Literacy-gap review of a claim, post, article, or short argument across seven dimensions. Writes a report; leaves the source unchanged.

## Provenance

| | |
|---|---|
| Source | https://github.com/Catalyst-Forge-LLC/claimcheck |
| Publisher | Catalyst Forge |

## Instructions reach

| | |
|---|---|
| Shell | none |
| Network | optional (the procedure opens primary sources when the host allows web access; otherwise findings are marked `unverified`) |
| Filesystem | read-write (reads the source, writes the report) |

## Tools referenced

(none)

## Bundled artifacts

- `SKILL.md`
- `references/rubric.md`
- `references/report.md`
- `references/examples.md`

## Egress

| | |
|---|---|
| Telemetry | none |
| Destinations | (none) |
