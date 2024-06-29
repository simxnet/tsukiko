"use client";

import { Button } from "@/components/ui/button";
import { menuItem, menuItems } from "@/components/ui/motion/menu";
import { Text } from "@/components/ui/text";
import { menuVariants } from "@/lib/variants";
import { css, cx } from "@/styled-system/css";
import { Flex } from "@/styled-system/jsx";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import {
	ArchiveBoxIcon,
	ChevronDownIcon,
	CodeBracketIcon,
	PlusIcon,
	SpeakerWaveIcon,
	TrashIcon,
} from "@heroicons/react/24/solid";
import { AnimatePresence, motion } from "framer-motion";

export default function Settings() {
	return (
		<Flex alignItems={"center"} gap={2}>
			<Menu>
				{({ open }) => (
					<>
						<MenuButton size="sm" as={Button}>
							Settings <ChevronDownIcon className="r" />
						</MenuButton>
						<AnimatePresence>
							{open && (
								<MenuItems
									static
									as={motion.div}
									variants={menuVariants}
									initial="initial"
									animate="enter"
									exit="exit"
									anchor="bottom end"
									className={menuItems()}
								>
									<MenuItem as={"div"} className={menuItem()}>
										<PlusIcon />
										<Text>Add sound</Text>
									</MenuItem>
									<MenuItem as={"div"} className={menuItem()}>
										<ArchiveBoxIcon />
										<Text>Create backup</Text>
									</MenuItem>
									<MenuItem as={"div"} className={menuItem()}>
										<SpeakerWaveIcon />
										<Text>Volume</Text>
									</MenuItem>
									<MenuItem as={"div"} className={menuItem()}>
										<CodeBracketIcon />
										<Text>Source code</Text>
									</MenuItem>
									<MenuItem
										as={"div"}
										className={cx(menuItem(), css({ color: "red.500!" }))}
									>
										<TrashIcon />
										<Text color="red.500!">Delete all sounds</Text>
									</MenuItem>
								</MenuItems>
							)}
						</AnimatePresence>
					</>
				)}
			</Menu>
		</Flex>
	);
}
