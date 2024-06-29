"use client";

import { Box, VStack } from "@/styled-system/jsx";
import { Heading } from "../ui/heading";
import { motion, spring } from "framer-motion";
import { PlayIcon } from "@heroicons/react/24/solid";
import { css } from "@/styled-system/css";
import { Text } from "../ui/text";

export default function SoundCard() {
	return (
		<motion.div
			whileHover={{ scale: 1.05, transition: spring }}
			whileTap={{ scale: 0.95, transition: spring }}
		>
			<Box
				userSelect={"none"}
				cursor={"pointer"}
				p={3}
				rounded="xl"
				bg="bg.800"
				borderWidth={1}
				borderColor={"bg.600"}
				className="group"
			>
				<VStack>
					<VStack>
						<PlayIcon
							className={css({
								color: "brand.500",
								transitionDuration: "slow",
								w: "14",
								h: "14",
								pos: "absolute",
								_groupHover: { opacity: 1 },
								opacity: 0,
							})}
						/>
						<Box
							_groupHover={{
								transitionDuration: "normal",
								opacity: 0,
							}}
						>
							<img width={55} alt="laugh sound" src="/emojis/joy_emoji.png" />
						</Box>
					</VStack>
					<Heading size="lg">Loud laugh</Heading>
					<Text size="sm">Click to play</Text>
				</VStack>
			</Box>
		</motion.div>
	);
}
