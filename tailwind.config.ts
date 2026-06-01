import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import plugin from "tailwindcss/plugin";

export default {
	content: ["./src/**/*.{astro,html,js,jsx,md,svelte,ts,tsx,vue}"],
	darkMode: "class",
	corePlugins: {
		// disable aspect ratio as per docs -> @tailwindcss/aspect-ratio
		aspectRatio: false,
		// disable some core plugins as they are included in the css, even when unused
		touchAction: false,
		ringOffsetWidth: false,
		ringOffsetColor: false,
		scrollSnapType: false,
		borderOpacity: false,
		textOpacity: false,
		fontVariantNumeric: false,
	},
	theme: {
		extend: {
			colors: {
				bgColor: "hsl(var(--theme-bg) / <alpha-value>)",
				textColor: "hsl(var(--theme-text) / <alpha-value>)",
				link: "hsl(var(--theme-link) / <alpha-value>)",
				accent: "hsl(var(--theme-accent) / <alpha-value>)",
				"accent-2": "hsl(var(--theme-accent-2) / <alpha-value>)",
				quote: "hsl(var(--theme-quote) / <alpha-value>)",
			},
			fontFamily: {
				// Neo-Brutalism fonts
				sans: ["Space Grotesk", "Inter", ...fontFamily.sans],
				mono: ["Space Mono", "Courier New", ...fontFamily.mono],
				display: ["Space Grotesk", "Inter", ...fontFamily.sans],
			},
			boxShadow: {
				"brutal": "6px 6px 0px 0px #000",
				"brutal-sm": "3px 3px 0px 0px #000",
				"brutal-lg": "8px 8px 0px 0px #000",
			},
			borderWidth: {
				"3": "3px",
				"5": "5px",
			},
			transitionProperty: {
				height: "height",
			},
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			// @ts-ignore
			// Remove above once tailwindcss exposes theme type
			typography: (theme) => ({
				cactus: {
					css: {
						"--tw-prose-body": theme("colors.textColor / 1"),
						"--tw-prose-headings": theme("colors.accent-2 / 1"),
						"--tw-prose-links": theme("colors.textColor / 1"),
						"--tw-prose-bold": theme("colors.textColor / 1"),
						"--tw-prose-bullets": theme("colors.textColor / 1"),
						"--tw-prose-quotes": theme("colors.quote / 1"),
						"--tw-prose-code": theme("colors.textColor / 1"),
						"--tw-prose-hr": "4px solid",
						"--tw-prose-th-borders": theme("colors.textColor / 1"),
					},
				},
				DEFAULT: {
					css: {
						fontFamily: "Space Grotesk, sans-serif",
						a: {
							"@apply cactus-link": "",
							fontWeight: "700",
						},
						strong: {
							fontWeight: "700",
						},
						h1: {
							fontWeight: "700",
							borderBottom: "4px solid",
							paddingBottom: "0.5rem",
						},
						h2: {
							fontWeight: "700",
							borderBottom: "3px solid",
							paddingBottom: "0.25rem",
						},
						h3: {
							fontWeight: "700",
						},
						code: {
							border: "3px solid",
							borderColor: theme("colors.textColor / 1"),
							borderRadius: "0",
							padding: "0.25rem 0.5rem",
							fontFamily: "Space Mono, monospace",
							fontWeight: "700",
							backgroundColor: theme("colors.accent / 0.1"),
						},
						"code::before": {
							content: '""',
						},
						"code::after": {
							content: '""',
						},
						pre: {
							border: "4px solid",
							borderColor: theme("colors.textColor / 1"),
							borderRadius: "0",
							boxShadow: "4px 4px 0px 0px",
						},
						blockquote: {
							borderLeft: "6px solid",
							borderColor: theme("colors.accent / 1"),
							fontWeight: "500",
							fontStyle: "normal",
							backgroundColor: theme("colors.accent / 0.05"),
							padding: "1rem",
						},
						hr: {
							borderTopWidth: "4px",
							borderTopStyle: "solid",
							borderColor: theme("colors.textColor / 1"),
						},
						thead: {
							borderBottomWidth: "4px",
							borderBottomStyle: "solid",
						},
						"thead th": {
							fontWeight: "700",
							borderBottom: "4px solid",
						},
						"tbody tr": {
							borderBottomWidth: "2px",
							borderBottomStyle: "solid",
						},
						tfoot: {
							borderTop: "4px solid",
						},
						ul: {
							listStyleType: "square",
						},
						sup: {
							"@apply ms-0.5": "",
							a: {
								"@apply bg-none": "",
								fontWeight: "700",
								"&:hover": {
									"@apply text-link no-underline bg-none": "",
								},
								"&:before": {
									content: "'['",
								},
								"&:after": {
									content: "']'",
								},
							},
						},
					},
				},
				sm: {
					css: {
						code: {
							fontSize: theme("fontSize.sm")[0],
							fontWeight: "700",
						},
					},
				},
			}),
		},
	},
	plugins: [
		require("@tailwindcss/typography"),
		require("@tailwindcss/aspect-ratio"),
		plugin(function ({ addComponents }) {
			addComponents({
				".cactus-link": {
					"@apply font-bold underline decoration-4 underline-offset-4": {},
					"&:hover": {
						"@apply bg-accent text-bgColor": {},
					},
				},
				".title": {
					"@apply text-2xl font-bold text-accent-2 border-b-4 border-textColor pb-2": {},
				},
				".brutal-card": {
					"@apply border-[5px] border-textColor shadow-brutal rounded-none": {},
				},
				".brutal-btn": {
					"@apply border-[5px] border-textColor bg-accent font-bold px-6 py-3 shadow-brutal transition-all rounded-none hover:translate-x-[4px] hover:translate-y-[4px] hover:shadow-none": {},
				},
			});
		}),
	],
} satisfies Config;
