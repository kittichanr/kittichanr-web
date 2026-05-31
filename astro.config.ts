import { defineConfig, passthroughImageService } from "astro/config";
import tailwind from "@astrojs/tailwind";
import sitemap from "@astrojs/sitemap";
import remarkUnwrapImages from "remark-unwrap-images";
import rehypeExternalLinks from "rehype-external-links";
import vercel from "@astrojs/vercel";
import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
	site: "https://kittichanr-blog.vercel.app/",
	markdown: {
		remarkPlugins: [remarkUnwrapImages],
		rehypePlugins: [
			[rehypeExternalLinks, { target: "_blank", rel: ["nofollow, noopener, noreferrer"] }],
		],
		remarkRehype: { footnoteLabelProperties: { className: [""] } },
		shikiConfig: {
			theme: "dracula",
			// wrap: true,
		},
	},
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		sitemap(),
		icon(),
	],
	image: {
		service: passthroughImageService(),
		// FIXME: update astro version and use below config when release this version https://github.com/withastro/astro/pull/9463
		// domains: ["astro-cactus.chriswilliams.dev", "localhost"],
	},
	// https://docs.astro.build/en/guides/prefetch/
	prefetch: true,
	output: "static",
	adapter: vercel({
		webAnalytics: {
			enabled: true,
		},
	}),
});
