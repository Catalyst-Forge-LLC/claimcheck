---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. Package name on npm: `claimcheck`. Installed skill folder: `claimcheck`.

ClaimCheck writes a report file. A writable workspace is required. Web access is optional: with it, your agent opens the primary sources the report names; without it, those findings are marked `unverified`. Claude.ai without project files is not a supported first-use route.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Confirm the skill appears before the first run |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Confirm the skill appears before the first run |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Unverified |
| Claude.ai | None | Writable project files | Not a supported first-use route without files |

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A report alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

## Cursor

### Get it

Download [claimcheck.zip](/skills/claimcheck.zip).

### Add it

Unzip it. You should see `SKILL.md` and a `references/` folder.

Put that folder in the project:

`.cursor/skills/claimcheck/`

[Install for all projects](#install-for-all-projects) if you want it in every Cursor project.

### Confirm it

If Cursor lists installed skills, confirm `claimcheck`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save this claim as `led-lighting.md` in the project, or [download it](/samples/led-lighting.md):

```markdown
If you still have incandescent bulbs in the lamps you leave on for
hours, swap them for LEDs. The U.S. Department of Energy says LEDs
use at least 75 percent less energy than incandescent bulbs and last
up to 25 times longer, for the same light. ...
DOE's lighting guide says lighting is about 15% of an average home's
electricity, so in a house still full of old bulbs it adds up.
```

Then ask:

> Use ClaimCheck on `led-lighting.md`. Follow the installed ClaimCheck skill. Write the report. Leave the source unchanged.

### Find the result

The report lands in `led-lighting.claimcheck.md` next to the file.

Success looks like this shape, not identical wording from every model:

- A summary line and a score near `6 / 7`
- Recency marked **partial**, pointing at the “about 15%” figure (a 2010 DOE guide; EIA’s 2020 survey puts lighting near 6%)
- No clear failures, and no findings about tone
- The source itself unchanged

Without web access, recency may come back **partial · unverified** with a next step naming EIA’s Residential Energy Consumption Survey. That is a correct run.

## Claude Code

### Get it

Download [claimcheck.zip](/skills/claimcheck.zip).

### Add it

Unzip, then put the folder in the repo:

`.claude/skills/claimcheck/`

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/claimcheck/` instead.

### Confirm it

If Claude Code lists skills, confirm `claimcheck`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save the claim as `led-lighting.md`, or [download it](/samples/led-lighting.md). Then ask:

> Use ClaimCheck on `led-lighting.md`. Follow the installed ClaimCheck skill. Write the report. Leave the source unchanged.

### Find the result

Open `led-lighting.claimcheck.md`. Look for seven findings, recency marked partial, and the source unchanged.

## A harder sample

[data-center-water.md](/samples/data-center-water.md) is the worked example: a common sentiment about AI and water, written out as one post. Expect six clear failures and one partial (boundary), a score near `0.5 / 7`, and a **Next steps** list that starts with the local reservoir question. Compare with the [complete sample report](/samples/data-center-water.claimcheck.md).

## After the review

There is no apply skill. Read the findings. Edit or answer the source yourself, or ask your agent for a named follow-up outside this skill.

### Update or remove

Replace the installed `claimcheck` folder to update. Delete that folder to uninstall. Copied skills do not refresh when you bump the npm package `claimcheck`.

## Other ways to ask

Once the first run works:

- Does this claim hold up?
- ClaimCheck this article.
- What does this argument leave out?

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D claimcheck
```

Copy `node_modules/claimcheck/skills/claimcheck/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The package is [`claimcheck`](https://www.npmjs.com/package/claimcheck) on npm. The skill folder name is `claimcheck`.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/claimcheck) and copy `skills/claimcheck/`.

### Install for all projects

- Cursor: `~/.cursor/skills/claimcheck/`
- Claude Code: `~/.claude/skills/claimcheck/`

Same folder shape. Discovery and first-use checks are the same.

The report shape is on [Report](/docs/report).
