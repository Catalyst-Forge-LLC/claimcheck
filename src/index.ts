import { existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const packageRoot = join(dirname(fileURLToPath(import.meta.url)), "..");
const skillsDir = join(packageRoot, "skills");

export const skillNames = ["claimcheck"] as const;

export type SkillName = (typeof skillNames)[number];

/** The seven dimensions, in report order. `references/rubric.md` owns the wording. */
export const dimensionIds = [
	"mechanism",
	"magnitude",
	"boundary",
	"tradeoff",
	"output",
	"recency",
	"evidence",
] as const;

export type DimensionId = (typeof dimensionIds)[number];

export const statuses = ["clear failure", "partial", "passed", "N/A"] as const;

export type Status = (typeof statuses)[number];

const points: Record<Status, number | null> = {
	"clear failure": 0,
	partial: 0.5,
	passed: 1,
	"N/A": null,
};

/** Scoring rule from `references/rubric.md`: N/A is excluded from the denominator. */
export function score(results: readonly Status[]): { points: number; applicable: number; na: number } {
	let total = 0;
	let applicable = 0;
	let na = 0;
	for (const status of results) {
		const value = points[status];
		if (value === null) na += 1;
		else {
			total += value;
			applicable += 1;
		}
	}
	return { points: total, applicable, na };
}

/**
 * The report's score line. `unverified` is the number of findings that carry
 * the `unverified` flag; they score as written and are counted beside the score.
 */
export function formatScore(results: readonly Status[], unverified = 0): string {
	const { points: p, applicable, na } = score(results);
	const notes: string[] = [];
	if (na > 0) notes.push(`${na} N/A`);
	if (unverified > 0) notes.push(`${unverified} unverified`);
	const base = `${p} / ${applicable}`;
	return notes.length > 0 ? `${base} (${notes.join(", ")})` : base;
}

/** The report's summary line. The tally comes before the score everywhere. */
export function formatTally(results: readonly Status[]): string {
	const count = (status: Status) => results.filter((r) => r === status).length;
	return `clear failures: ${count("clear failure")} · partial: ${count("partial")} · passed: ${count("passed")} · N/A: ${count("N/A")}`;
}

export function skillDir(name: SkillName): string {
	return join(skillsDir, name);
}

export function assertSkillsPresent(): string[] {
	const missing: string[] = [];
	for (const name of skillNames) {
		for (const file of ["SKILL.md", "references/rubric.md", "references/report.md", "references/examples.md"]) {
			const path = join(skillDir(name), file);
			if (!existsSync(path)) missing.push(path);
		}
	}
	return missing;
}

export { packageRoot, skillsDir };
