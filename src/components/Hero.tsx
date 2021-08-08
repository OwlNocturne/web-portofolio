import { Stack, Flex, Text, VStack, useBreakpointValue, Heading } from "@chakra-ui/react";

export default function Hero() {
    return (
        <Flex
            w={"full"}
            h={"40vh"}
            backgroundImage={
                "url(https://images.unsplash.com/photo-1556438064-2d7646166914?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80)"
            }
            backgroundSize={"cover"}
            backgroundPosition={"50% 65%"}
        >
            <VStack
                w={"full"}
                justify={"center"}
                px={useBreakpointValue({ base: 4, md: 8 })}
                bgGradient={"linear(to-r, blackAlpha.800, transparent)"}
            >
                <Stack w={"full"} align={"flex-start"} spacing={6}>
                    <Heading fontWeight={600} fontSize={"6xl"} lineHeight={"110%"}>
                        Title
                    </Heading>
                    <Text color={"white"} fontWeight={700} lineHeight={1.2} fontSize={"3xl"}>
                        Description
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
}
