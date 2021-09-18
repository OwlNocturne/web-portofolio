import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Spacer,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import Social from "./Social";

const Links = [
    { displayText: "About", toID: "AboutMe", key: "navAbout" },
    { displayText: "Portofolio", toID: "Portofolio", key: "navAbout" },
    { displayText: "Contact", toID: "Contact", key: "navAbout" },
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
                            <NavLink key={link.key} navLink={link}></NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Social />
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
