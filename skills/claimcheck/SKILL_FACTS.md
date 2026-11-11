---
skill_facts_version: "0.1.0"
name: ClaimCheck
developer: Catalyst Forge
version: 0.1.1
status: active
license: MIT
kind: agents-skill
purpose: "Literacy-gap review of a claim, post, or short argument that rests on numbers or measurements, across seven dimensions. Writes a report; leaves the source unchanged."
homepage: "https://claimcheck.dev"
repository: "https://github.com/Catalyst-Forge-LLC/claimcheck"
provenance:
  source: "https://github.com/Catalyst-Forge-LLC/claimcheck"
  publisher: Catalyst Forge
instructions_reach:
  shell: none
  network: implied
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
  destinations: [undisclosed]
generated:
  date: 2026-11-11
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
| **Kind** | agents-skill |

*Host-neutral skill folder. Supported hosts: Cursor and Claude Code. Other agents that read `SKILL.md` are untested.*

## Purpose

Literacy-gap review of a claim, post, or short argument that rests on numbers or measurements, across seven dimensions. Writes a report; leaves the source unchanged.

## Provenance

| | |
|---|---|
| Source | https://github.com/Catalyst-Forge-LLC/claimcheck |
| Publisher | Catalyst Forge |

## Instructions reach

| | |
|---|---|
| Shell | none |
| Network | implied (the procedure tells the agent to open the source and the primary sources a report names when the host allows web access; no URL is written into the skill. Without web access, findings are marked `unverified`) |
| Filesystem | read-write (reads the source, writes the report; never edits the source) |

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
| Destinations | undisclosed: no fixed destinations. The agent opens URLs named in the source and the primary sources the report names, so the hosts depend on the claim under review |
