import NewSoundCard from "@/components/shared/new-sound-card";
import SoundCard from "@/components/shared/sound-card";
import VolumeSlider from "@/components/shared/volume-slider";
import VolumeWrapper from "@/components/shared/volume-wrapper";
import { Heading } from "@/components/ui/heading";
import { Box, Grid, GridItem } from "@/styled-system/jsx";
import { motion } from "framer-motion";
import React from "react";

export default function Page() {
	return (
		<Box h="full">
			<Heading>Available sounds</Heading>
			<Grid py={2} gap={3} gridTemplateColumns={5}>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<SoundCard />
				</GridItem>
				<GridItem>
					<NewSoundCard />
				</GridItem>
			</Grid>
			<VolumeWrapper />
		</Box>
	);
}
