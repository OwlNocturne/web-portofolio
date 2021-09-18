import { Stack, Flex, Text, VStack, useBreakpointValue, Heading } from "@chakra-ui/react";

export default function AboutMe() {
    return (
        <Flex
            w={"full"}
            h={"40vh"}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"50% 65%"}
            id="AboutMe"
        >
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={
                    "linear(to-r, blackAlpha.900, blackAlpha.900, blackAlpha.300, transparent)"
                }
            >
                <Stack w={"full"} align={"flex-start"} spacing={6}>
                    <Heading fontWeight={600} fontSize={"6xl"} lineHeight={"110%"}>
                        Daniel Morais
                    </Heading>
                    <Text
                        color={"gray.300"}
                        fontWeight={700}
                        lineHeight={1.2}
                        fontSize={"2xl"}
                        w={"40%"}
                    >
                        I have delivered a variety of software products filling roles as varied as
                        Director, Scrum Master, and Software engineer. I try to challenge myself in
                        a variety of user-centered roles.
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
}
