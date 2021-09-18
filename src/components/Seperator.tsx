import React from "react";
import { Center, Divider, Heading, HStack } from "@chakra-ui/react";

export default function Seperator({ title = "" }) {
    return (
        <Center w={"full"}>
            <HStack w={"80%"} p={4} spacing="24px">
                <Divider />
                <Heading>{title}</Heading>
                <Divider />
            </HStack>
        </Center>
    );
}
