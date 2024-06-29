import { defineConfig } from "@pandacss/dev";
import { getColors } from "theme-colors";

const backgroundColors = getColors("#1A191B");

function generateColorTokens(colors: Record<string, string>) {
	return Object.entries(colors).reduce(
		(acc: Record<string, { value: string }>, [key, value]) => {
			acc[key] = { value };
			return acc;
		},
		{},
	);
}

export default defineConfig({
	preflight: true,

	include: [
		"./src/components/**/*.{ts,tsx,js,jsx}",
		"./src/app/**/*.{ts,tsx,js,jsx}",
	],

	exclude: [".next", "node_modules", "target"],

	theme: {
		extend: {
			tokens: {
				colors: {
					brand: {
						950: {
							value: "var(--colors-brand-950)",
						},
						900: {
							value: "var(--colors-brand-900)",
						},
						800: {
							value: "var(--colors-brand-800)",
						},
						700: {
							value: "var(--colors-brand-700)",
						},
						600: {
							value: "var(--colors-brand-600)",
						},
						500: {
							value: "var(--colors-brand-500)",
						},
						400: {
							value: "var(--colors-brand-400)",
						},
						300: {
							value: "var(--colors-brand-300)",
						},
						200: {
							value: "var(--colors-brand-200)",
						},
						100: {
							value: "var(--colors-brand-100)",
						},
						50: {
							value: "var(--colors-brand-50)",
						},
					},
					bg: generateColorTokens(backgroundColors),
					success: {
						value: "#00c06b",
					},
				},
			},
		},
	},

	globalCss: {
		extend: {
			body: {
				bg: "bg.950",
				color: "bg.50",
			},
		},
	},

	outdir: "src/styled-system",
	jsxFramework: "react",
});
