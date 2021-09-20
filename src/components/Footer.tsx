import { Flex, Spacer, useColorModeValue } from "@chakra-ui/react";
import Social from "./Social";

export default function Footer() {
    return (
        <Flex
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
            pl={5}
            pr={5}
        >
            <Spacer />
            <Social />
        </Flex>
    );
}
