import { Box, VStack } from "@/styled-system/jsx";
import { Heading } from "../ui/heading";
import { Text } from "../ui/text";
import { PlusIcon } from "@heroicons/react/24/solid";

export default function NewSoundCard() {
	return (
		<Box
			cursor={"pointer"}
			p={3}
			h="full"
			rounded="xl"
			bg="bg.800"
			borderWidth={2}
			borderColor={{
				_hover: "brand.500",
				base: "bg.400",
			}}
			transitionDuration={"fast"}
			borderStyle={"dashed"}
		>
			<VStack h="full" justifyContent={"center"}>
				<PlusIcon width={23} />
				<Heading size="lg">New sound</Heading>
			</VStack>
		</Box>
	);
}
