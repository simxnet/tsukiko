"use client";

import { css } from "@/styled-system/css";
import { SpeakerWaveIcon, SpeakerXMarkIcon } from "@heroicons/react/20/solid";
import * as RadixSlider from "@radix-ui/react-slider";
import {
	animate,
	motion,
	useMotionValue,
	useMotionValueEvent,
	useTransform,
} from "framer-motion";
import { type ElementRef, useRef, useState } from "react";
import { useLocalStorage } from "react-use";

const MAX_OVERFLOW = 30;

export default function VolumeSlider() {
	const [volume, setVolume] = useLocalStorage("vdata", 50);

	const ref = useRef<ElementRef<typeof RadixSlider.Root>>(null);
	const [region, setRegion] = useState("middle");
	const clientX = useMotionValue(0);
	const overflow = useMotionValue(0);
	const scale = useMotionValue(1);

	useMotionValueEvent(clientX, "change", (latest) => {
		if (ref.current) {
			const { left, right } = ref.current.getBoundingClientRect();
			let newValue: number;

			if (latest < left) {
				setRegion("left");
				newValue = left - latest;
			} else if (latest > right) {
				setRegion("right");
				newValue = latest - right;
			} else {
				setRegion("middle");
				newValue = 0;
			}

			overflow.jump(decay(newValue, MAX_OVERFLOW));
		}
	});

	return (
		<motion.div
			onHoverStart={() => animate(scale, 1.1)}
			onHoverEnd={() => animate(scale, 1)}
			onTouchStart={() => animate(scale, 1.1)}
			onTouchEnd={() => animate(scale, 1)}
			style={{
				scale,
				opacity: useTransform(scale, [1, 1.2], [0.7, 1]),
			}}
			className={css({
				display: "flex",
				w: "min",
				touchAction: "none",
				userSelect: "none",
				alignItems: "center",
				justifyContent: "center",
				gap: "3",
			})}
		>
			<motion.div
				animate={{
					scale: region === "left" ? [1, 1.3, 1] : 1,
					transition: { duration: 0.25 },
				}}
				style={{
					x: useTransform(() =>
						region === "left" ? -overflow.get() / scale.get() : 0,
					),
				}}
			>
				<SpeakerXMarkIcon
					onClick={() => setVolume(0)}
					className={css({
						color: volume === 0 ? "brand.500" : "bg.100",
						w: 5,
						h: 5,
						translateX: "0",
						translateY: "0",
						cursor: "pointer",
					})}
				/>
			</motion.div>

			<RadixSlider.Root
				ref={ref}
				value={[volume ?? 50]}
				onValueChange={([v]) => setVolume(Math.floor(v))}
				step={0.01}
				className={css({
					pos: "relative",
					display: "flex",
					w: "200px",
					maxW: "200px",
					flexGrow: "1",
					cursor: "grab",
					touchAction: "none",
					userSelect: "none",
					alignItems: "center",
					pt: "4",
					pb: "4",
					_active: { cursor: "grabbing" },
				})}
				onPointerMove={(e) => {
					if (e.buttons > 0) {
						clientX.jump(e.clientX);
					}
				}}
				onLostPointerCapture={() => {
					animate(overflow, 0, { type: "spring", bounce: 0.5 });
				}}
			>
				<motion.div
					style={{
						scaleX: useTransform(() => {
							if (ref.current) {
								const { width } = ref.current.getBoundingClientRect();

								return 1 + overflow.get() / width;
							}
						}),
						scaleY: useTransform(overflow, [0, MAX_OVERFLOW], [1, 0.8]),
						transformOrigin: useTransform(() => {
							if (ref.current) {
								const { left, width } = ref.current.getBoundingClientRect();

								return clientX.get() < left + width / 2 ? "right" : "left";
							}
						}),
						height: useTransform(scale, [1, 1.2], [6, 12]),
						marginTop: useTransform(scale, [1, 1.2], [0, -3]),
						marginBottom: useTransform(scale, [1, 1.2], [0, -3]),
					}}
					className={css({ display: "flex", flexGrow: "1" })}
				>
					<RadixSlider.Track
						className={css({
							pos: "relative",
							isolation: "isolate",
							h: "full",
							flexGrow: "1",
							overflow: "hidden",
							rounded: "full",
							bgColor: "bg.500",
						})}
					>
						<RadixSlider.Range
							className={css({
								pos: "absolute",
								h: "full",
								bg: "brand.500",
							})}
						/>
					</RadixSlider.Track>
				</motion.div>
				<RadixSlider.Thumb />
			</RadixSlider.Root>

			<motion.div
				animate={{
					scale: region === "right" ? [1, 1.3, 1] : 1,
					transition: { duration: 0.25 },
				}}
				style={{
					x: useTransform(() =>
						region === "right" ? overflow.get() / scale.get() : 0,
					),
				}}
			>
				<SpeakerWaveIcon
					onClick={() => setVolume(100)}
					className={css({
						color: volume === 100 ? "brand.500" : "bg.100",
						w: 5,
						h: 5,
						translateX: "0",
						translateY: "0",
						cursor: "pointer",
					})}
				/>
			</motion.div>
		</motion.div>
	);
}

// Sigmoid-based decay function
function decay(value: number, max: number) {
	if (max === 0) {
		return 0;
	}

	const entry = value / max;
	const sigmoid = 2 * (1 / (1 + Math.exp(-entry)) - 0.5);

	return sigmoid * max;
}
