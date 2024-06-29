import { type Variants, spring } from "framer-motion";

export const menuVariants: Variants = {
	initial: {
		scale: 0.9,
		x: 0,
		opacity: 0,
		transformOrigin: "top right",
		transition: spring,
	},
	enter: {
		scale: 1,
		opacity: 1,
		transition: spring,
		transformOrigin: "top right",
	},
	exit: {
		scale: 0.9,
		opacity: 0,
		transition: { duration: 0.1 },
		transformOrigin: "top right",
	},
};
