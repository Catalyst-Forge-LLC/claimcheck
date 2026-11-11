import assert from "node:assert/strict";
import { existsSync, readFileSync, readdirSync } from "node:fs";
import { join } from "node:path";
import { execFileSync } from "node:child_process";
import { test } from "node:test";
import {
	assertSkillsPresent,
	dimensionIds,
	formatScore,
	packageRoot,
	score,
	skillDir,
	skillNames,
} from "./index.js";

const read = (...parts: string[]) =>
	readFileSync(join(packageRoot, ...parts), "utf8").replace(/\r\n/g, "\n");

const dimensionText = [
	["Mechanistic literacy", "Does the claim correctly model the physical/chemical/operational process?", "Treating withdrawal/consumption/recirculation/destruction as identical."],
	["Quantitative and comparative literacy", "Does it locate magnitude relative to relevant baselines?", "Absolute numbers without denominators; selective focus ignoring larger uses."],
	["Scale and boundary literacy", "Distinguishes local vs national/global, direct vs indirect, correct system boundaries?", "Flattening local stress with national totals or vice versa."],
	["Trade-off and substitution literacy", "Recognizes reducing one input increases another?", "Treating one resource as independently bad without substitutes."],
	["Output and value accounting", "Incorporates what the resource use produces?", 'Labeling use "waste" solely because product is non-physical.'],
	["Recency and updating literacy", "Reflects current data, technology, revisions to earlier figures?", "Reliance on superseded estimates."],
	["Source and evidentiary literacy", "Prefers primary measurements over secondary amplification?", "Single comparisons elevated over systematic reports."],
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
	const description = skill.split("---")[1] ?? "";
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
	for (const status of ["clear failure", "partial", "passed", "N/A"]) {
		assert.match(rubric, new RegExp("`" + status.replace("/", "\\/") + "`"));
	}
});

test("scoring rule excludes N/A", () => {
	assert.deepEqual(score(["passed", "partial", "clear failure", "N/A"]), { points: 1.5, applicable: 3, na: 1 });
	assert.equal(formatScore(["passed", "passed", "passed", "passed", "passed", "partial", "partial"]), "6 / 7");
	assert.equal(formatScore(["passed", "passed", "passed", "N/A", "partial", "partial", "passed"]), "5 / 6 (1 N/A)");
});

test("every fixture has a labeled claim and an expected score", () => {
	const dir = join(packageRoot, "fixtures");
	const folders = readdirSync(dir, { withFileTypes: true }).filter((d) => d.isDirectory());
	assert.ok(folders.length >= 3);
	for (const folder of folders) {
		const claim = read("fixtures", folder.name, "claim.md");
		const expected = read("fixtures", folder.name, "expected.md");
		assert.match(claim, /^Example\. /m, folder.name);
		assert.doesNotMatch(claim, /quotation/i, folder.name);
		assert.match(expected, /^Score: /m, folder.name);
	}
});

function statusesOf(report: string): string[] {
	return [...report.matchAll(/^### \d · .+ — (clear failure|partial|passed|N\/A)/gm)].map((m) => m[1]);
}

test("sample reports follow the report shape and their score line matches", () => {
	const sections = ["## Claims read", "## Findings", "## Next steps", "## Unverified", "## A stronger version", "## Sources opened"];
	for (const name of ["data-center-water", "led-lighting"]) {
		const report = read("site", "static", "samples", `${name}.claimcheck.md`);
		let last = -1;
		for (const section of sections) {
			const at = report.indexOf(section);
			assert.ok(at > last, `${name}: ${section}`);
			last = at;
		}
		const found = statusesOf(report);
		assert.equal(found.length, 7, `${name}: seven findings`);
		const line = /^\*\*Score:\*\* (.+)$/m.exec(report)?.[1];
		assert.equal(line, formatScore(found as never), name);
		assert.match(report, /Unchanged\./);
		const source = read("site", "static", "samples", `${name}.md`);
		assert.equal(source, read("fixtures", name, "claim.md"), `${name}: sample source matches fixture`);
	}
});

test("worked example cites the primary sources and is introduced as a common sentiment", () => {
	const report = read("site", "static", "samples", "data-center-water.claimcheck.md");
	assert.match(report, /eta-publications\.lbl\.gov/);
	assert.match(report, /pubs\.usgs\.gov\/publication\/cir1441/);
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
	assert.match(read("site", "package.json"), /localslip claim claimcheck-site --port 5205/);
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

test("no required runtime env", () => {
	const example = read(".env.example");
	assert.match(example, /No runtime secrets/);
	assert.doesNotMatch(example, /REQUIRED|must set/i);
});
