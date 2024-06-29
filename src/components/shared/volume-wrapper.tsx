"use client";

import { Box, Center } from "@/styled-system/jsx";
import { AnimatePresence, motion, spring } from "framer-motion";
import VolumeSlider from "./volume-slider";
import { useState } from "react";
import { Text } from "../ui/text";
import { useLocalStorage } from "react-use";

export default function VolumeWrapper() {
	const [volumeVisible, setVolumeVisible] = useState<boolean>(false);

	return (
		<motion.div
			onMouseEnter={() => setVolumeVisible(true)}
			onMouseLeave={() => setVolumeVisible(false)}
		>
			<Box
				position="fixed"
				left={0}
				bottom={0}
				borderTopWidth={2}
				borderStyle={"dashed"}
				borderColor={"bg.600"}
				w="screen"
				h={20}
			>
				<AnimatePresence>
					{!volumeVisible && (
						<Center my={"auto"} h="full">
							<motion.div
								initial={{ y: 50, scale: 0.6 }}
								animate={{ y: 0, scale: 1 }}
								exit={{ y: 50, scale: 0.6, opacity: 0 }}
								transition={{
									...spring,
									delay: 0.2,
								}}
							>
								<Text size="xs">Hover here to see volume slider</Text>
							</motion.div>
						</Center>
					)}
				</AnimatePresence>
			</Box>
			<AnimatePresence>
				{volumeVisible && (
					<Box
						position="fixed"
						bottom={5}
						left="50%"
						transform="translateX(-50%)"
					>
						<motion.div
							initial={{ y: 50, scale: 0.6 }}
							animate={{ y: 0, scale: 1.1 }}
							exit={{ y: 50, scale: 0.6 }}
							transition={{
								...spring,
								delay: 0.2,
							}}
						>
							<VolumeSlider />
						</motion.div>
					</Box>
				)}
			</AnimatePresence>
		</motion.div>
	);
}
