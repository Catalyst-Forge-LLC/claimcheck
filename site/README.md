# claimcheck.dev

```bash
pnpm install
pnpm docs:build
pnpm dev
pnpm build
```

## FilePress patch

`patches/getfilepress@0.1.58.patch` fixes `pnpm dev` when FilePress runs as
an installed dependency and the home page shows an xFacts label. Without it
the label's font files return 403 and Vite fails to pre-bundle
`XFactsRail.svelte`, so the page never hydrates. It touches only
`packages/app/vite.config.ts` and has no effect on `pnpm build`.

Remove the patch and its `patchedDependencies` entry in `package.json` once
a FilePress release carries the same fix.
