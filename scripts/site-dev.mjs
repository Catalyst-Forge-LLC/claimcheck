#!/usr/bin/env node
/**
 * Sync skill zips and docs, then start FilePress.
 * Port comes from LocalSlip (`claimcheck-site`). Claim in site/package.json.
 */
import { spawn, spawnSync } from "node:child_process";
import { existsSync, watch } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const site = join(root, "site");
const node = process.execPath;

function run(args, cwd = root) {
	const result = spawnSync(node, args, { cwd, stdio: "inherit" });
	if (result.status !== 0) process.exit(result.status ?? 1);
}

// Run the site's own FilePress. A global `filepress` on PATH is a different
// version and lacks the patch in site/patches, so it is never a fallback.
const filepress = join(site, "node_modules", "getfilepress", "scripts", "filepress.mjs");
if (!existsSync(filepress)) {
	console.error(
		"Site dependencies are not installed. From the repo root: pnpm --dir site install",
	);
	process.exit(1);
}

run([join(root, "scripts/sync-skill-static.mjs")]);
run([join(site, "scripts/build-docs.mjs")], site);

let docsTimer;
watch(join(site, "theme.css"), () => {
	clearTimeout(docsTimer);
	docsTimer = setTimeout(() => {
		run([join(site, "scripts/build-docs.mjs")], site);
	}, 200);
});

const child = spawn(node, [filepress, "dev", "--host", "0.0.0.0"], {
	cwd: site,
	stdio: "inherit",
});
child.on("exit", (code) => process.exit(code ?? 1));
