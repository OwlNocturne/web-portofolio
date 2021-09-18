import { Box, useColorModeValue } from "@chakra-ui/react";
import Social from "./Social";

export default function Footer() {
    return (
        <Box
            bg={useColorModeValue("gray.50", "gray.900")}
            color={useColorModeValue("gray.700", "gray.200")}
        >
            <Social />
        </Box>
    );
}
