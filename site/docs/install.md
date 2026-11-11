---
title: Get started
---

Install the skill in your agent, then use it. You do not need Node or npm for this path. The installed skill folder is named `claimcheck`.

ClaimCheck writes a report file, so a writable workspace is required.

Web access is optional, and it changes what the first run shows. With it, your agent opens the primary sources the report names and can check a figure. Without it, those findings are flagged `unverified` and the report says where to check. Cursor and Claude Code can both open web pages when their web tools are turned on and you approve the request. If you are not sure, ask your agent “can you open a web page?” before the first run.

## Supported hosts

| Host | Scope | Required | Notes |
| --- | --- | --- | --- |
| Cursor | Project skills folder | Writable workspace | Confirm the skill appears before the first run |
| Claude Code | Project or `~/.claude/skills/` | Writable workspace | Confirm the skill appears before the first run |
| Other agents that read `SKILL.md` | Manual copy | Writable workspace | Not tested |
| Claude.ai chat | Not supported | — | Not tested. The skill needs a folder to load from and a place to write the report, and a plain chat has neither |

If you paste a claim into a chat that has no skill installed, you get the model’s own answer, not a ClaimCheck report: no rubric was loaded, and nothing was written to a file.

A folder on disk is not proof the agent loaded the skill. Prefer the host’s skill list or a visible file-read of `SKILL.md`. A report alone does not prove loading.

## Which agent do you use?

- [Cursor](#cursor)
- [Claude Code](#claude-code)

## Cursor

### Get it

Download [claimcheck.zip](/skills/claimcheck.zip).

### Add it

The zip holds one folder named `claimcheck`. From the project root, unzip it into `.cursor/skills/`:

```bash
unzip claimcheck.zip -d .cursor/skills/
```

On Windows PowerShell:

```powershell
Expand-Archive claimcheck.zip -DestinationPath .cursor\skills\
```

You should end up with this, and no `claimcheck/claimcheck/`:

```text
.cursor/skills/claimcheck/
├── SKILL.md
├── SKILL_FACTS.md
└── references/
    ├── rubric.md
    ├── report.md
    └── examples.md
```

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

- A summary line near `clear failures: 0 · partial: 2 · passed: 5 · N/A: 0`
- A `Claims:` line on every finding, naming the claims it rests on
- Recency marked **partial**, pointing at the “about 15%” figure (a 2010 DOE guide; EIA’s 2020 survey puts lighting near 6%)
- No clear failures, and no findings about tone
- The source itself unchanged

Without web access, recency may come back **partial · unverified** with a next step naming EIA’s Residential Energy Consumption Survey, and the report will not quote the 6% figure. That is a correct run.

## Claude Code

### Get it

Download [claimcheck.zip](/skills/claimcheck.zip).

### Add it

The zip holds one folder named `claimcheck`. From the repo root, unzip it into `.claude/skills/`:

```bash
unzip claimcheck.zip -d .claude/skills/
```

On Windows PowerShell:

```powershell
Expand-Archive claimcheck.zip -DestinationPath .claude\skills\
```

You should end up with this, and no `claimcheck/claimcheck/`:

```text
.claude/skills/claimcheck/
├── SKILL.md
├── SKILL_FACTS.md
└── references/
    ├── rubric.md
    ├── report.md
    └── examples.md
```

[Install for all projects](#install-for-all-projects) uses `~/.claude/skills/` as the destination instead.

### Confirm it

If Claude Code lists skills, confirm `claimcheck`. Otherwise ask it to open `SKILL.md` from that folder and quote the first heading.

### Try it

Save the claim as `led-lighting.md`, or [download it](/samples/led-lighting.md). Then ask:

> Use ClaimCheck on `led-lighting.md`. Follow the installed ClaimCheck skill. Write the report. Leave the source unchanged.

### Find the result

Open `led-lighting.claimcheck.md`. Look for seven findings, recency marked partial, and the source unchanged.

## Harder samples

[data-center-water.md](/samples/data-center-water.md) is the worked example: a common sentiment about AI and water, written out as one post. Expect five clear failures, two partials (boundary, and trade-offs because the remedy is a side claim), and a **Next steps** list that starts with the local reservoir question. Compare with the [complete sample report](/samples/data-center-water.claimcheck.md).

[water-rounding-error.md](/samples/water-rounding-error.md) is the same subject from the other side: a common sentiment that the concern is nothing (“If the national number is a rounding error, the local one is too”). Expect clear failures on mechanism and boundary, magnitude and recency marked **partial**, output and evidence **passed**, and trade-offs **N/A**. Compare with the [complete sample report](/samples/water-rounding-error.claimcheck.md).

[processed-meat.md](/samples/processed-meat.md) is a health-risk claim: a common sentiment about processed meat and cancer (“A ham sandwich is as dangerous as smoking”). Expect clear failures on mechanism and magnitude, partials on the other five, and a report that keeps the underlying finding: processed meat does cause colorectal cancer. Compare with the [complete sample report](/samples/processed-meat.claimcheck.md).

[crime-statistics.md](/samples/crime-statistics.md) is a claim about public statistics: a common sentiment about crime (“It is the worst it has ever been in this country”). Expect clear failures on magnitude and evidence, boundary marked **partial** because the writer’s own city is a real concern, trade-offs marked **partial** because the remedy is a side claim, and output marked **N/A**. Compare with the [complete sample report](/samples/crime-statistics.claimcheck.md).

[loud-but-literate.md](/samples/loud-but-literate.md) is a shouting post with sound numbers. Expect four dimensions **passed**, output and recency **partial**, trade-offs **N/A**, and no finding about capital letters or exclamation marks. Compare with the [complete sample report](/samples/loud-but-literate.claimcheck.md).

Statuses can vary from one model or run to the next, most often between **partial** and its neighbors. Check the quoted evidence and the claim ids, not the count.

## After the review

There is no apply skill. Read the findings. Edit or answer the source yourself, or ask your agent for a named follow-up outside this skill.

### Update or remove

To see which version is installed, open `SKILL_FACTS.md` in the installed `claimcheck` folder and read its `version` line. Compare it with the latest version on [npm](https://www.npmjs.com/package/getclaimcheck).

To update, delete the installed `claimcheck` folder and unzip a fresh download in its place. To uninstall, delete the folder. A copied skill does not refresh when you bump the npm package.

## Other ways to ask

Once the first run works:

- Does this claim hold up?
- ClaimCheck this article.
- What does this argument leave out?

## Other installation methods

npm supplies the skill files. It does not register the skill with the agent.

```bash
pnpm add -D getclaimcheck
```

Copy `node_modules/getclaimcheck/skills/claimcheck/` into the same destination you would use above.

Updating the npm dependency does not refresh a folder you already copied. Copy again after you bump the package.

Node.js 20+. The npm package is [`getclaimcheck`](https://www.npmjs.com/package/getclaimcheck). The name `claimcheck` on npm is a different, unrelated project. The installed skill folder is still named `claimcheck`.

Or clone the [repo](https://github.com/Catalyst-Forge-LLC/claimcheck) and copy `skills/claimcheck/`.

### Install for all projects

- Cursor: `unzip claimcheck.zip -d ~/.cursor/skills/`
- Claude Code: `unzip claimcheck.zip -d ~/.claude/skills/`

Same folder shape: `~/.cursor/skills/claimcheck/SKILL.md` or `~/.claude/skills/claimcheck/SKILL.md`. Discovery and first-use checks are the same.

The report shape is on [Report](/docs/report).
