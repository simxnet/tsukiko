import { type RecipeVariantProps, cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";
import Link from "next/link";

export const button = cva({
	base: {
		alignItems: "center",
		display: "inline-flex",
		justifyContent: "center",
		position: "relative",
		whiteSpace: "nowrap",
		rounded: "lg",
		cursor: "pointer",
		transitionDuration: "fast",
		fontWeight: 500,
		w: "fit",
		_disabled: {
			opacity: 0.5,
			pointerEvents: "none",
		},
		userSelect: "none",
		"& svg": {
			width: "4",
			height: "4",
		},
		"& .l": {
			mr: 2,
		},
		"& .r": {
			ml: 2,
		},
	},
	variants: {
		color: {
			brand: {
				bg: {
					base: "brand.500",
					_hover: "brand.600",
					_active: "brand.700",
				},
				color: "ButtonText",
			},
			gray: {
				bg: {
					base: "bg.800",
					_hover: "bg.700",
					_active: "bg.600",
				},
				color: "bg.200",
			},
			bad: {
				bg: {
					base: "bad",
					_hover: "bad/80",
					_active: "bad/70",
				},
				color: "ButtonText",
			},
		},
		size: {
			sm: {
				fontSize: "smallest",
				h: 9,
				px: 4,
				py: 2,
			},
			md: {
				h: 10,
				px: 5,
				py: 2,
			},
			lg: {
				h: 12,
				px: 7,
				py: 5,
				rounded: "xl",
				fontSize: "lg",
			},
		},
	},
	defaultVariants: {
		color: "brand",
		size: "md",
	},
});

export type ButtonVariants = RecipeVariantProps<typeof button>;

export const Button = styled("button", button);
export const LinkButton = styled(Link, button);
