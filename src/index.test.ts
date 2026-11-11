import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import {
	assertSkillsPresent,
	dimensionIds,
	formatScore,
	formatTally,
	packageRoot,
	score,
	skillDir,
	skillNames,
} from "./index.js";
import {
	fixtureNames,
	linesConsistent,
	parseExpected,
	parseReport,
	renderPage,
	reportsInstruction,
	runInput,
	sourcesOpened,
	withoutLocalPath,
} from "./agreement.js";

const read = (...parts: string[]) =>
	readFileSync(join(packageRoot, ...parts), "utf8").replace(/\r\n/g, "\n");

const dimensionText = [
	["Mechanistic literacy", "Does the claim describe correctly what the process does, or what the measure measures?", "Treating different things as one: use and loss, hazard and risk, reported and occurred."],
	["Quantitative and comparative literacy", "Does it locate magnitude relative to relevant baselines?", "Absolute numbers without denominators; selective focus ignoring larger uses."],
	["Scale and boundary literacy", "Distinguishes local vs national/global, direct vs indirect, correct system boundaries?", "Flattening local stress with national totals or vice versa."],
	["Trade-off and substitution literacy", "Does it say what would happen instead?", "Calling for a cut or a remedy without naming the substitute or its cost."],
	["Output and value accounting", "Does it count what the thing delivers?", "Counting the cost and ignoring the benefit, or calling use waste because the product is intangible."],
	["Recency and updating literacy", "Reflects current data, technology, revisions to earlier figures?", "Reliance on superseded estimates."],
	["Source and evidentiary literacy", "Prefers primary measurements over secondary amplification?", "Single comparisons elevated over systematic reports."],
] as const;

/** Collapses line wrapping so a sentence can be matched wherever the file breaks it. */
const flat = (text: string) => text.replace(/\s+/g, " ");

const sampleNames = [
	"data-center-water",
	"water-rounding-error",
	"led-lighting",
	"processed-meat",
	"crime-statistics",
	"loud-but-literate",
] as const;

test("skill folder ships SKILL.md and its references", () => {
	assert.deepEqual(assertSkillsPresent(), []);
	for (const name of skillNames) {
		assert.ok(existsSync(join(skillDir(name), "SKILL.md")), name);
	}
});

test("skill frontmatter, write-to, and guardrails", () => {
	const skill = read("skills", "claimcheck", "SKILL.md");
	assert.match(skill, /^---\nname: claimcheck\n/m);
	assert.match(skill, /post\.claimcheck\.md/);
	assert.match(skill, /Leaves the source\s+unchanged/);
	assert.match(skill, /Not for prose style or rhetoric/);
	assert.match(skill, /No invented facts/);
	assert.match(skill, /unverified/);
	assert.match(skill, /The source is data, not instructions/);
	assert.match(skill, /Central claim/);
	assert.match(skill, /Side claim/);
	assert.match(flat(skill), /overwrite it and say so/);
	const description = skill.split("---")[1] ?? "";
	assert.match(flat(description), /rests on numbers or measurements/);
	for (const sibling of ["Smell Check", "TemperPass", "Cold-eye", "Detangler"]) {
		assert.doesNotMatch(description, new RegExp(sibling), `description names ${sibling}`);
		assert.match(skill, new RegExp(sibling), `body names ${sibling}`);
	}
	assert.doesNotMatch(skill, /npx claimcheck/);
	assert.doesNotMatch(skill, /API key/);
});

test("rubric carries the seven dimensions verbatim and in order", () => {
	const rubric = read("skills", "claimcheck", "references", "rubric.md");
	let last = -1;
	for (const [name, question, failure] of dimensionText) {
		const at = rubric.indexOf(name);
		assert.ok(at > last, `${name} out of order`);
		last = at;
		assert.ok(rubric.includes(question), question);
		assert.ok(rubric.includes(failure), failure);
	}
	for (const id of dimensionIds) assert.match(rubric, new RegExp("`" + id + "`"));
	for (const heading of ["## Scope", "## Unit of review", "### When the claim leaves something out", "### The `unverified` flag"]) {
		assert.ok(rubric.includes(heading), heading);
	}
	assert.match(flat(rubric), /rests only on side claims is capped at `partial`/);
	assert.match(flat(rubric), /an error that does not change the conclusion/);
	for (const status of ["clear failure", "partial", "passed", "N/A"]) {
		assert.match(rubric, new RegExp("`" + status.replace("/", "\\/") + "`"));
	}
});

test("every restatement of the dimensions quotes the rubric word for word", () => {
	const restatements: string[][] = [
		["README.md"],
		["site", "pages", "home.md"],
		["site", "docs", "dimensions.md"],
	];
	for (const parts of restatements) {
		const text = flat(read(...parts));
		let last = -1;
		for (const [name, question, failure] of dimensionText) {
			const at = text.indexOf(question);
			assert.ok(at > last, `${parts.join("/")}: ${name} question missing or out of order`);
			last = at;
			assert.ok(text.includes(name), `${parts.join("/")}: ${name}`);
			assert.ok(text.includes(failure), `${parts.join("/")}: ${failure}`);
		}
	}
});

test("scoring rule excludes N/A and counts unverified findings beside the score", () => {
	assert.deepEqual(score(["passed", "partial", "clear failure", "N/A"]), { points: 1.5, applicable: 3, na: 1 });
	assert.equal(formatScore(["passed", "passed", "passed", "passed", "passed", "partial", "partial"]), "6 / 7");
	assert.equal(formatScore(["passed", "passed", "passed", "N/A", "partial", "partial", "passed"]), "5 / 6 (1 N/A)");
	assert.equal(formatScore(["passed", "passed", "passed", "passed", "passed", "partial", "partial"], 1), "6 / 7 (1 unverified)");
	assert.equal(formatScore(["clear failure", "clear failure", "partial", "partial", "N/A", "partial", "partial"], 1), "2 / 6 (1 N/A, 1 unverified)");
	assert.equal(
		formatTally(["clear failure", "clear failure", "partial", "partial", "N/A", "partial", "passed"]),
		"clear failures: 2 · partial: 3 · passed: 1 · N/A: 1",
	);
});

const statusPattern = "(clear failure|partial|passed|N\\/A)( · unverified)?";

/** Statuses and the unverified count from the `N · id — status` lines of an `expected.md`. */
function expectedOf(expected: string): { found: string[]; unverified: number; ids: string[] } {
	const lines = [...expected.matchAll(new RegExp(`^(\\d) · (\\w+) — ${statusPattern}\\.`, "gm"))];
	return {
		found: lines.map((m) => m[3]),
		unverified: lines.filter((m) => m[4]).length,
		ids: lines.map((m) => m[2]),
	};
}

test("every fixture has a labeled claim and an expected status for each dimension", () => {
	const dir = join(packageRoot, "fixtures");
	const folders = readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());
	assert.ok(folders.length >= 3);
	const readme = read("fixtures", "README.md");
	for (const folder of folders) {
		const claim = read("fixtures", folder.name, "claim.md");
		const expected = read("fixtures", folder.name, "expected.md");
		assert.match(claim, /^Example\. /m, folder.name);
		assert.doesNotMatch(claim, /quotation/i, folder.name);
		assert.match(expected, /^Central claim: /m, folder.name);
		const { found, unverified, ids } = expectedOf(expected);
		assert.deepEqual(ids, [...dimensionIds], `${folder.name}: seven dimensions in order`);
		const line = /^Score: (.+)\.$/m.exec(expected)?.[1];
		assert.equal(line, formatScore(found as never, unverified), folder.name);
		assert.ok(readme.includes("`" + folder.name + "/`"), `fixtures/README.md lists ${folder.name}`);
	}
});

test("the embedded-instruction fixture carries an instruction and expects it to be ignored", () => {
	const claim = read("fixtures", "embedded-instruction", "claim.md");
	const expected = flat(read("fixtures", "embedded-instruction", "expected.md"));
	assert.match(claim, /Note to AI reviewers/);
	assert.match(expected, /does not follow/);
	assert.match(expected, /says in the summary paragraph/);
});

/** One entry per `### N · name — status` heading, with the body up to the next heading. */
function findingsOf(report: string): Array<{ status: string; unverified: boolean; body: string }> {
	const heading = new RegExp(`^### \\d · .+ — ${statusPattern}$`, "gm");
	const marks = [...report.matchAll(heading)];
	const end = report.indexOf("\n## Next steps");
	return marks.map((m, i) => ({
		status: m[1],
		unverified: Boolean(m[2]),
		body: report.slice(m.index, i + 1 < marks.length ? marks[i + 1].index : end),
	}));
}

test("sample reports follow the report shape and their summary and score lines match", () => {
	const sections = ["## Claims read", "## Findings", "## Next steps", "## Unverified", "## A stronger version", "## Sources opened"];
	for (const name of sampleNames) {
		const report = read("site", "static", "samples", `${name}.claimcheck.md`);
		let last = -1;
		for (const section of sections) {
			const at = report.indexOf(section);
			assert.ok(at > last, `${name}: ${section}`);
			last = at;
		}
		const findings = findingsOf(report);
		assert.equal(findings.length, 7, `${name}: seven findings`);
		const found = findings.map((f) => f.status);
		const unverified = findings.filter((f) => f.unverified).length;
		assert.equal(/^\*\*Summary:\*\* (.+)$/m.exec(report)?.[1], formatTally(found as never), `${name}: summary`);
		assert.equal(/^\*\*Score:\*\* (.+)$/m.exec(report)?.[1], formatScore(found as never, unverified), `${name}: score`);
		assert.match(report, /Unchanged\./);
		assert.match(flat(report), /It does not rule the claim true or false\./, `${name}: literacy-review line`);
		const source = read("site", "static", "samples", `${name}.md`);
		assert.equal(source, read("fixtures", name, "claim.md"), `${name}: sample source matches fixture`);
	}
});

test("sample reports name claim ids on every finding and cap side-claim findings at partial", () => {
	for (const name of sampleNames) {
		const report = read("site", "static", "samples", `${name}.claimcheck.md`);
		const claims = report.slice(report.indexOf("## Claims read"), report.indexOf("## Findings"));
		const ids = [...claims.matchAll(/^- \*\*(C-\d+)\*\*( \((central|side claim)\))? > /gm)];
		assert.ok(ids.length >= 2, `${name}: claims listed`);
		assert.equal(ids.filter((m) => m[3] === "central").length, 1, `${name}: exactly one central claim`);
		const side = new Set(ids.filter((m) => m[3] === "side claim").map((m) => m[1]));
		const known = new Set(ids.map((m) => m[1]));
		for (const finding of findingsOf(report)) {
			const line = /^Claims: (.+)$/m.exec(finding.body)?.[1];
			assert.ok(line, `${name}: a finding has no Claims line`);
			if (finding.status === "N/A") {
				assert.equal(line, "none", `${name}: N/A finding names no claim`);
				continue;
			}
			const named = line.match(/C-\d+/g) ?? [];
			assert.ok(named.length > 0, `${name}: ${line}`);
			for (const id of named) assert.ok(known.has(id), `${name}: ${id} is not in Claims read`);
			const onlySide = named.every((id) => side.has(id));
			assert.equal(/\(side claim\)$/.test(line), onlySide, `${name}: side-claim marker on "${line}"`);
			if (onlySide) assert.equal(finding.status, "partial", `${name}: side-claim finding is capped at partial`);
		}
	}
});

test("fixtures and sample reports agree on every status", () => {
	for (const name of sampleNames) {
		const report = read("site", "static", "samples", `${name}.claimcheck.md`);
		const expected = expectedOf(read("fixtures", name, "expected.md"));
		assert.deepEqual(findingsOf(report).map((f) => f.status), expected.found, name);
	}
});

test("worked example cites the primary sources and is introduced as a common sentiment", () => {
	const report = read("site", "static", "samples", "data-center-water.claimcheck.md");
	assert.match(report, /eta-publications\.lbl\.gov/);
	assert.match(report, /usgs\.gov\/mission-areas\/water-resources\/science\/irrigation-water-use/);
	for (const surface of [report, read("README.md"), read("site", "pages", "home.md")]) {
		assert.match(surface, /common sentiment about AI and water/);
		assert.doesNotMatch(surface, /quotation/i);
	}
});

test("docs nav has a markdown file for every item and the docs build", () => {
	const nav = JSON.parse(read("site", "docs", "_nav.json")) as {
		sections: Array<{ items: Array<{ id: string }> }>;
		aliases?: Array<{ id: string }>;
	};
	for (const item of [...nav.sections.flatMap((s) => s.items), ...(nav.aliases ?? [])]) {
		assert.ok(existsSync(join(packageRoot, "site", "docs", `${item.id}.md`)), item.id);
	}
	execFileSync("node", [join(packageRoot, "site", "scripts", "build-docs.mjs")], {
		cwd: join(packageRoot, "site"),
	});
	assert.ok(existsSync(join(packageRoot, "site", "docs", "dist", "index.html")));
	const built = readFileSync(join(packageRoot, "site", "docs", "dist", "index.html"), "utf8");
	assert.match(built, /site-theme\.css/);
	assert.match(built, /ClaimCheck docs/);
	const tokens = readFileSync(join(packageRoot, "site", "docs", "dist", "assets", "site-theme.css"), "utf8");
	assert.match(tokens, /--accent:/);
});

test("short URLs have a local redirect page", () => {
	const config = read("site", "filepress.config.ts");
	const redirects = read("site", "static", "_redirects");
	for (const slug of ["install", "skill", "report"]) {
		const html = read("site", "static", slug, "index.html");
		assert.match(html, new RegExp(`/docs/${slug}`));
		assert.match(config, new RegExp(`url: "/${slug}"`));
		assert.match(redirects, new RegExp(`^/${slug} /docs/${slug} 308`, "m"));
	}
});

test("sync writes a zip the install page can download", () => {
	execFileSync("node", [join(packageRoot, "scripts", "sync-skill-static.mjs")], { cwd: packageRoot });
	assert.ok(existsSync(join(packageRoot, "site", "static", "skills", "claimcheck.zip")));
	assert.ok(existsSync(join(packageRoot, ".cursor", "skills", "claimcheck", "SKILL.md")));
});

test("site dev claims the LocalSlip lease by name", () => {
	assert.match(read("site", "package.json"), /localslip claim claimcheck-site --port 5333/);
});

test("package tarball lists the skill folder and has no bin", () => {
	const pkg = JSON.parse(read("package.json")) as { bin?: unknown; files: string[]; exports: Record<string, unknown> };
	assert.equal(pkg.bin, undefined);
	assert.ok(pkg.files.includes("skills"));
	assert.ok("./skills/*" in pkg.exports);
	const out = execFileSync("npm", ["pack", "--dry-run", "--json", "--ignore-scripts"], {
		cwd: packageRoot,
		encoding: "utf8",
		shell: process.platform === "win32",
	});
	assert.match(out, /skills\/claimcheck\/SKILL\.md/);
	assert.match(out, /skills\/claimcheck\/references\/rubric\.md/);
	assert.doesNotMatch(out, /fixtures\//);
});

test("no public surface names the npm package as claimcheck", () => {
	// `claimcheck` on npm is an unrelated project. The package is `getclaimcheck`.
	const surfaces: string[][] = [
		["README.md"],
		["site", "filepress.config.ts"],
		["site", "scripts", "build-docs.mjs"],
		["skills", "claimcheck", "SKILL.md"],
		["skills", "claimcheck", "SKILL_FACTS.md"],
	];
	for (const dir of [["site", "pages"], ["site", "docs"], ["site", "posts"]]) {
		for (const file of readdirSync(join(packageRoot, ...dir))) {
			if (file.endsWith(".md")) surfaces.push([...dir, file]);
		}
	}
	const wrong = [
		/npmjs\.com\/package\/claimcheck\b/,
		/\b(?:pnpm|npm|yarn|bun) (?:add|install|i)(?: -\S+)* claimcheck\b/,
		/\bnpx claimcheck\b/,
		/node_modules\/claimcheck\//,
		/\bnpm \| `claimcheck`/,
		/\b[Pp]ackage `claimcheck`/,
		/\bnpm package `claimcheck`/,
		/\bpackage is \[?`claimcheck`/,
	];
	for (const parts of surfaces) {
		const text = read(...parts);
		for (const pattern of wrong) assert.doesNotMatch(text, pattern, parts.join("/"));
	}
	assert.equal((JSON.parse(read("package.json")) as { name: string }).name, "getclaimcheck");
});

test("the headline is the same on every surface and leads with what the reader gets", () => {
	const headline = "Find what a claim leaves out.";
	const surfaces: string[][] = [
		["README.md"],
		["package.json"],
		["site", "filepress.config.ts"],
		["site", "pages", "home.md"],
		["site", "docs", "introduction.md"],
		["docs", "smellcheck.md"],
	];
	for (const parts of surfaces) {
		const text = read(...parts);
		assert.ok(text.includes(headline), parts.join("/"));
		assert.doesNotMatch(text, /Flag literacy gaps|basic literacy grounds/, parts.join("/"));
	}
	const home = read("site", "pages", "home.md");
	assert.equal((home.match(/<h1>/g) ?? []).length, 1, "one headline in the home page body");
	// The disclaimer sits in the hero, beside the first tally, not only at the foot of the page.
	const hero = home.slice(0, home.indexOf("</section>\n\n"));
	assert.match(hero, /does not rule the claim true or false/);
	assert.match(hero, /Summary: 5 clear failures · 2 partial/);
	// Public pages lead with the tally. The fraction stays inside report files.
	for (const parts of [["README.md"], ["site", "pages", "home.md"], ["site", "pages", "about.md"], ["site", "docs", "install.md"]]) {
		assert.doesNotMatch(read(...parts), /\*\*Score:\*\*|[Ss]core (?:near|of) `?\d|scores \d/, parts.join("/"));
	}
});

test("the SkillFacts label matches the package and names both hosts", () => {
	const facts = read("skills", "claimcheck", "SKILL_FACTS.md");
	const version = (JSON.parse(read("package.json")) as { version: string }).version;
	assert.match(facts, new RegExp(`^version: ${version.replace(/\./g, "\\.")}$`, "m"));
	assert.match(facts, /^kind: agents-skill$/m);
	assert.match(facts, /^ {2}network: (none|implied|explicit|undisclosed)$/m);
	assert.match(facts, /Cursor and Claude Code/);
	assert.match(facts, /no fixed destinations/);
});

test("the install page gives one unzip command per host and the expected tree", () => {
	const install = read("site", "docs", "install.md");
	assert.match(install, /unzip claimcheck\.zip -d \.cursor\/skills\//);
	assert.match(install, /unzip claimcheck\.zip -d \.claude\/skills\//);
	assert.match(install, /no `claimcheck\/claimcheck\/`/);
	assert.match(install, /SKILL_FACTS\.md/);
	// The npm name is not in the opening: that path needs neither Node nor npm.
	assert.doesNotMatch(install.slice(0, install.indexOf("## Supported hosts")), /getclaimcheck/);
});

test("no required runtime env", () => {
	const example = read(".env.example");
	assert.match(example, /No runtime secrets/);
	assert.doesNotMatch(example, /REQUIRED|must set/i);
});

test("the agreement parser reads every sample report the way the fixtures state it", () => {
	for (const name of sampleNames) {
		const report = read("site", "static", "samples", `${name}.claimcheck.md`);
		const findings = parseReport(report);
		const expected = parseExpected(read("fixtures", name, "expected.md"));
		assert.deepEqual(findings.map((f) => f?.status), expected, name);
		assert.ok(findings.every((f) => f?.hasClaims), `${name}: Claims line on every finding`);
		assert.ok(linesConsistent(report, findings), `${name}: summary and score lines`);
		assert.ok(sourcesOpened(report) > 0, `${name}: sources opened`);
	}
});

test("the agreement parser tolerates a model's Markdown and reports what is missing", () => {
	const report = [
		"## Findings",
		"",
		"#### 1 · Mechanistic literacy - **clear failure**",
		"Claims: C-1",
		"### 2 · Quantitative and comparative literacy — partial · unverified",
		"Why: no claims line here.",
		"### 3 · Scale and boundary literacy – N/A",
		"Claims: none",
		"### 4 · Trade-off and substitution literacy — mostly fine",
		"### 5 · Output and value accounting — passed  ",
		"Claims: C-2",
		"",
		"## Next steps",
		"Claims: C-9",
	].join("\r\n");
	const findings = parseReport(report);
	assert.deepEqual(
		findings.map((f) => f?.status ?? null),
		["clear failure", "partial", "N/A", null, "passed", null, null],
	);
	assert.equal(findings[1]?.unverified, true);
	assert.equal(findings[0]?.unverified, false);
	assert.deepEqual(findings.slice(0, 3).map((f) => f?.hasClaims), [true, false, true]);
	assert.equal(findings[4]?.hasClaims, true);
	assert.equal(linesConsistent(report, findings), false);
	assert.equal(sourcesOpened(report), 0);
	// Seven findings, but a summary or score line that does not follow from them.
	const sample = read("site", "static", "samples", "led-lighting.claimcheck.md");
	const wrongTally = sample.replace("partial: 2 · passed: 5", "partial: 1 · passed: 6");
	const wrongScore = sample.replace("**Score:** 6 / 7 (1 unverified)", "**Score:** 6 / 7");
	assert.notEqual(wrongTally, sample);
	assert.notEqual(wrongScore, sample);
	assert.equal(linesConsistent(wrongTally, parseReport(wrongTally)), false);
	assert.equal(linesConsistent(wrongScore, parseReport(wrongScore)), false);
	assert.equal(sourcesOpened("## Sources opened\n- A — https://example.org/a\n- B — <https://example.org/b>\n"), 2);
});

test("a run's input drops the label that says what the claim was built to show", () => {
	for (const name of fixtureNames()) {
		const claim = read("fixtures", name, "claim.md");
		const input = runInput(claim);
		assert.match(input, /^# .+\n\n\S/, name);
		assert.doesNotMatch(input, /^Example\. /m, name);
		assert.doesNotMatch(input, /^---$/m, name);
		const body = claim.slice(claim.indexOf("\n---\n") + 5).trim();
		assert.ok(input.trim().endsWith(body), `${name}: body kept whole`);
	}
	assert.throws(() => runInput("# Title\n\nNo separator."), /separator/);
});

test("a collected report keeps the file name and drops the local run folder", () => {
	const dir = "C:\\Users\\someone\\AppData\\Local\\Temp\\cc-runs\\crime-statistics\\run-5";
	const report = "**Source:** `C:\\Users\\someone\\AppData\\Local\\Temp\\cc-runs\\crime-statistics\\run-5\\post.md`, read today.\nAlso c:/users/someone/appdata/local/temp/cc-runs/crime-statistics/run-5/post.claimcheck.md.\n";
	assert.equal(
		withoutLocalPath(report, dir),
		"**Source:** `post.md`, read today.\nAlso post.claimcheck.md.\n",
	);
	assert.equal(withoutLocalPath("Other users of the supply.", dir), "Other users of the supply.");
});

test("the embedded-instruction check needs both the mention and the refusal", () => {
	const said = "Summary.\nThe source contains a note addressed to AI\nreviewers; it was treated as content and not followed.\n\n## Claims read\n";
	assert.equal(reportsInstruction(said), true);
	assert.equal(reportsInstruction("Summary. Nothing unusual.\n\n## Claims read\nA note to reviewers was not followed."), false);
	assert.equal(reportsInstruction("The source contains a note to AI reviewers.\n\n## Claims read\n"), false);
});

test("recorded runs are complete, carry no local path, and the published table is current", () => {
	const runsRoot = join(packageRoot, "runs");
	const sets = readdirSync(runsRoot, { withFileTypes: true }).filter((d) => d.isDirectory());
	assert.ok(sets.length >= 1);
	for (const set of sets) {
		const info = JSON.parse(read("runs", set.name, "set.json")) as Record<string, unknown>;
		for (const key of ["host", "model", "date", "launcher", "input"]) {
			assert.equal(typeof info[key], "string", `${set.name}: set.json ${key}`);
		}
		for (const fixture of fixtureNames()) {
			const files = readdirSync(join(runsRoot, set.name, fixture));
			const records = files.filter((f) => /^run-\d+\.json$/.test(f));
			assert.ok(records.length >= 1, `${set.name}/${fixture}: at least one run`);
			for (const record of records) {
				const reportFile = record.replace(/\.json$/, ".claimcheck.md");
				assert.ok(files.includes(reportFile), `${set.name}/${fixture}/${reportFile}`);
				const report = read("runs", set.name, fixture, reportFile);
				assert.doesNotMatch(report, /[A-Za-z]:[\\/]Users[\\/]|AppData|(?:^|[\s`(])\/(?:home|Users)\/\w/m, `${set.name}/${fixture}/${reportFile}: local path`);
			}
		}
	}
	const page = read("site", "docs", "agreement.md");
	assert.equal(page, renderPage().replace(/\r\n/g, "\n"), "run `pnpm runs:table`");
	assert.match(page, /have not been changed to match them/);
	assert.match(page, /Other hosts and models are not measured/);
	assert.match(page, /Only `embedded-instruction` is new to it/);
	assert.match(page, /real published piece/);
	const nav = read("site", "docs", "_nav.json");
	assert.match(nav, /"id": "agreement"/);
	// Built by the docs test above. The docs builder prints an HTML comment as text,
	// and a nine-column table needs its own scroll box to keep the page from widening.
	const built = readFileSync(join(packageRoot, "site", "docs", "dist", "agreement", "index.html"), "utf8");
	assert.doesNotMatch(built, /&lt;!--/);
	assert.match(built, /<div class="docs-table-wrap"><table>/);
});

test("pages that cite the recorded runs give the figures the table gives", () => {
	const page = read("site", "docs", "agreement.md");
	const share = /^Across all fixtures: \d+ of \d+ findings matched \((\d+%)\)/m.exec(page)?.[1];
	assert.ok(share, "overall share on the page");
	const install = read("site", "docs", "install.md");
	assert.ok(install.includes(`${share} of findings matched`), "install page share");
	assert.match(install, /\]\(\/docs\/agreement\)/);
	// The worked example differs from its reference on recency only, in every run.
	const row = page.split("\n").find((l) => l.startsWith("| `data-center-water` | 5/5 |"));
	assert.equal(row, "| `data-center-water` | 5/5 | 5/5 | 5/5 | 5/5 | 5/5 | 0/5 (5 partial) | 5/5 | 0/5 |");
	for (const [name, text] of [["home", read("site", "pages", "home.md")], ["README", flat(read("README.md"))]] as const) {
		assert.match(text, /matched it on six of seven dimensions and gave recency partial/, name);
		assert.match(text, /docs\/agreement/, name);
		assert.doesNotMatch(text, /not a recorded tool run/, name);
	}
});
