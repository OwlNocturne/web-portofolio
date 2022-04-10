import { chakra, Stack, useColorModeValue, VisuallyHidden } from "@chakra-ui/react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { ReactNode } from "react";
import SocialData from "../data/social.json";

const SocialButton = ({
    children,
    label,
    href,
}: {
    children: ReactNode;
    label: string;
    href: string;
}) => {
    return (
        <chakra.button
            bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
            rounded={"full"}
            w={8}
            h={8}
            cursor={"pointer"}
            as={"a"}
            href={href}
            display={"inline-flex"}
            alignItems={"center"}
            justifyContent={"center"}
            transition={"background 0.3s ease"}
            _hover={{
                bg: useColorModeValue("blue.200", "blue.600"),
            }}
        >
            <VisuallyHidden>{label}</VisuallyHidden>
            {children}
        </chakra.button>
    );
};

export default function Social() {
    return (
        <Stack py={4} direction={"row"} spacing={4} justify={"center"} align={"center"}>
            <SocialButton label={"LinkedIn"} href={SocialData.linkedin}>
                <FaLinkedin />
            </SocialButton>
            <SocialButton label={"GitHub"} href={SocialData.github}>
                <FaGithub />
            </SocialButton>
        </Stack>
    );
}
