---
title: What it does
---

**ClaimCheck** is an installable skill for AI agents. Find what a claim leaves out.

Give it a post, assertion, or short argument that rests on numbers or measurements, on any subject: a resource, a risk, a statistic. An agent reads the skill, runs seven literacy dimensions, and writes a report. Each finding quotes the claim or names what is missing, names the claims it rests on, gets one status, says why, and names the primary source to check next.

**[Get started](/docs/install):** install the skill in your agent, then use it.

## What it reads, writes, and changes

| | |
| --- | --- |
| Reads | A post, assertion, thread, or short argument, up to about 1,500 words. For a longer piece, the section that carries the central claim |
| Writes | `<name>.claimcheck.md` next to a file, replacing an earlier report of that name, or `claimcheck.md` for a URL or pasted text |
| Changes | Nothing. The source is never edited |

## What it does not do

- Rule a claim true or false. It classifies seven dimensions.
- Rewrite the claim, unless you ask separately.
- Review tone or phrasing. That is [Smell Check](https://smellcheck.dev).
- Stress-test a plan you are still deciding. That is [TemperPass](https://temperpass.dev).
- Fill in a number it could not check. That becomes `unverified`, with the source to open.
- Review an argument that rests on values or law alone. The seven questions need a number or a measurement to work on.
- Take a side on a remedy. It says whether the remedy names its cost or its substitute.
- Follow instructions written inside the source. They are reviewed as content and noted in the report.

## When to use which

| You have | Use |
| --- | --- |
| A claim, post, or argument | **ClaimCheck** |
| Prose that reads padded, loud, or off-register | [Smell Check](https://smellcheck.dev) |
| A plan or decision on the table | [TemperPass](https://temperpass.dev) |
| A finished README, skill, or site | [Cold-eye](https://coldeye.dev) |
| Files after edits | [Detangler](https://detangler.dev) |

Like Cold-eye and Detangler, ClaimCheck is non-destructive: a report next to the subject, the subject left alone.

The [dimensions](/docs/dimensions). The [report shape](/docs/report).
