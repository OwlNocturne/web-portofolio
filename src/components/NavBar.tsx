import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Box,
    Button,
    Flex,
    HStack,
    Select,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import Social from "./Social";
import { useTranslation } from "react-i18next";
import { useState } from "react";

function LanguageSelect() {
    const { t, i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(i18n.language);

    return (
        <Select
            value={selectedOption}
            alignItems={"center"}
            mr={5}
            w={{ base: "100%", md: "100%" }}
            onChange={(e) => {
                if (i18n.language !== e.target.value) {
                    i18n.changeLanguage(e.target.value);
                    setSelectedOption(e.target.value);
                }
            }}
        >
            <option value={"en"}>{t("english")}</option>
            <option value={"ja"}>{t("japanese")}</option>
            <option value={"pt"}>{t("portuguese")}</option>
        </Select>
    );
}

export default function NavBar() {
    const { colorMode, toggleColorMode } = useColorMode();
    const { t } = useTranslation();

    const Links = [
        { displayText: t("about"), toID: "AboutMe", key: "navAbout" },
        { displayText: t("portfolio"), toID: "Portofolio", key: "navPortfolio" },
        { displayText: t("contact"), toID: "Contact", key: "navContact" },
    ];

    return (
        <Box bg={useColorModeValue("gray.100", "gray.900")} px={4} w="100%">
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <HStack spacing={8} alignItems={"center"}>
                    <HStack spacing={4} display="flex">
                        {Links.map((link) => (
                            <NavLink key={link.key} navLink={link}></NavLink>
                        ))}
                    </HStack>
                </HStack>
                <Flex alignItems={"center"}>
                    <Social />
                    <LanguageSelect />
                    <Button onClick={toggleColorMode}>
                        {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                </Flex>
            </Flex>
        </Box>
    );
}
