import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Button, Flex, HStack, useColorMode, useColorModeValue } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Links = [
    { displayText: "About", toID: "about" },
    { displayText: "Projects", toID: "Projects" },
    { displayText: "Contact", toID: "Contact" },
];

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w="100%">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <HStack spacing={8} alignItems={"center"}>
                    <Box>Portofolio</Box>
                    <HStack spacing={4} display="flex">
                        {Links.map((link) => (
                            <NavLink navLink={link}></NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
