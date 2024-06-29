import type { Metadata } from "next";
import { Inter as Font } from "next/font/google";

import "@/styles/globals.css";
import { Container, VStack } from "@/styled-system/jsx";
import Header from "@/components/shared/layout/header";

const font = Font({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Tsukiko",
	description: "Tsukiko soundboard",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={font.className}>
				<VStack alignItems={"start"} w="full">
					<Container w="full">
						<Header />
						{children}
					</Container>
				</VStack>
			</body>
		</html>
	);
}
