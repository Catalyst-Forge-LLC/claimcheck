import { defineFilepressConfig } from "getfilepress";

const github = "https://github.com/Catalyst-Forge-LLC/claimcheck";
const npm = "https://www.npmjs.com/package/getclaimcheck";

export default defineFilepressConfig({
	title: "ClaimCheck",
	description: "Does this claim hold up on basic literacy grounds? ClaimCheck gives your AI agent a seven-dimension review for an article, post, or argument. You get a report that quotes the claim, classifies each dimension, and names the primary source to check next. The source stays unchanged.",
	tagline: "Flag literacy gaps in claims and arguments.",
	lede: "Review skill for your AI agent",
	url: "https://claimcheck.dev",
	author: "Catalyst Forge LLC",
	logo: "/logo.png",
	ogImage: "/logo.png",
	homePage: "home",
	nav: [
		{ label: "Home", href: "/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Docs", href: "/docs/" },
		{ label: "Posts", href: "/posts" },
		{ label: "About", href: "/about" },
		{ label: "GitHub", href: github, icon: "github" },
	],
	footerLinks: [
		{ label: "See the rest of the Catalyst Forge shelf.", href: "https://catalystforge.com/tools/" },
		{ label: "Get started", href: "/docs/install" },
		{ label: "Posts", href: "/posts" },
		{ label: "npm", href: npm },
		{ label: "GitHub", href: github, icon: "github" },
	],
	topics: [],
	paths: [
		{ url: "/docs", dir: "docs/dist" },
		{ url: "/install", dir: "static/install" },
		{ url: "/skill", dir: "static/skill" },
		{ url: "/report", dir: "static/report" },
	],
});
