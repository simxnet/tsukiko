import { cva } from "@/styled-system/css";
export const menuItems = cva({
	base: {
		display: "flex",
		flexDirection: "column",
		bg: "bg.700/80",
		backdropFilter: "auto",
		backdropBlur: "md",
		borderWidth: 1,
		borderColor: "bg.600",
		rounded: "lg",
		p: 1,
		minWidth: "200px",
		mt: 1,
		shadow: "2xl",
		zIndex: 100,
		transformOrigin: "top right",
	},
});

export const menuItem = cva({
	base: {
		display: "inline-flex",
		alignItems: "center",
		px: 3,
		py: 2,
		rounded: "lg",
		fontSize: "small",
		color: "bg.300",
		cursor: "pointer",
		_hover: {
			bg: "bg.600",
			color: "white",
		},
		_disabled: {
			opacity: 0.5,
			cursor: "not-allowed",
		},

		"&[data-focus]": {
			bg: "bg.600",
			color: "white",
		},

		"& svg": {
			w: "4",
			h: "4",
			mr: 2,
		},
	},
});
