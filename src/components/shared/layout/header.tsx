import { Box, Container, HStack } from "@/styled-system/jsx";
import Settings from "./settings";
import { Heading } from "@/components/ui/heading";

export default function Header() {
	return (
		<Box position={"sticky"} w="full" top={0} py={4}>
			<Box
				bg="bg.800/70"
				w="full"
				rounded="xl"
				borderWidth={1}
				borderColor={"bg.600"}
				backdropBlur={"lg"}
				backdropFilter={"auto"}
				py={4}
			>
				<Container>
					<HStack justifyContent={"space-between"}>
						<Box>
							<Heading size="lg">Tsukiko 🦀</Heading>
						</Box>
						<Box>
							<Settings />
						</Box>
					</HStack>
				</Container>
			</Box>
		</Box>
	);
}
