import React from "react";
import { Divider, Heading, Flex } from "@chakra-ui/react";

export default function Seperator({ title = "" }) {
    return (
        <Flex my={5} w={"80%"} alignItems={"center"}>
            <Divider flex={1} mr={8} />
            <Heading>{title} </Heading>
            <Divider flex={1} ml={8} />
        </Flex>
    );
}
