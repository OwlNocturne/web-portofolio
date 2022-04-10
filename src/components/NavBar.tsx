import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
    Button,
    Flex,
    HStack,
    Select,
    Spacer,
    useColorMode,
    useColorModeValue,
} from "@chakra-ui/react";
import NavLink from "./NavLink";
import Social from "./Social";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import SettingsData from "../data/settings.json";

function LanguageSelect() {
    const { i18n } = useTranslation();
    const [selectedOption, setSelectedOption] = useState(i18n.language);
    const { lng } = SettingsData;

    return (
        <Select
            value={selectedOption}
            mr={4}
            onChange={(e) => {
                if (i18n.language !== e.target.value) {
                    i18n.changeLanguage(e.target.value);
                    setSelectedOption(e.target.value);
                }
            }}
        >
            {lng.map((data) => {
                const { key } = data;
                if (data.value !== null || data.key !== null)
                    return <option value={data.value}>{i18n.t(key)}</option>;
                else return null;
            })}
            {/* <option value={"en"}>{t("english")}</option>
            <option value={"ja"}>{t("japanese")}</option>
            <option value={"pt"}>{t("portuguese")}</option> */}
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
        <Flex
            bg={useColorModeValue("gray.100", "gray.900")}
            px={4}
            w="100%"
            h={16}
            alignItems={"center"}
        >
            <HStack spacing={4} display="flex">
                {Links.map((link) => (
                    <NavLink key={link.key} navLink={link}></NavLink>
                ))}
            </HStack>
            <Spacer />
            <HStack spacing={4}>
                <Social />
                <LanguageSelect />
                <Button
                    _hover={{
                        textDecoration: "none",
                        bg: useColorModeValue("blue.200", "blue.600"),
                    }}
                    onClick={toggleColorMode}
                >
                    {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                </Button>
            </HStack>
        </Flex>
    );
}
