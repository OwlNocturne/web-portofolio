import { Stack, Flex, Text, VStack, useBreakpointValue, Heading } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

export default function AboutMe() {
    const { t } = useTranslation();

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
                bgGradient={{
                    base: "linear(to-r, blackAlpha.900, blackAlpha.900, blackAlpha.800, blackAlpha.600)",
                    sm: "linear(to-r, blackAlpha.900, blackAlpha.900, blackAlpha.600, blackAlpha.200)",
                    md: "linear(to-r, blackAlpha.900, blackAlpha.900, blackAlpha.300, transparent)",
                }}
            >
                <Stack w={"full"} align={"flex-start"} spacing={6}>
                    <Heading
                        color={"gray.300"}
                        fontWeight={600}
                        fontSize={{ base: "30px", md: "45px", lg: "56px" }}
                        lineHeight={"110%"}
                    >
                        {t("myName")}
                    </Heading>
                    <Text
                        color={"gray.300"}
                        fontWeight={600}
                        fontSize={["xs", "sm", "md", "lg", "xl"]}
                    >
                        {t("role")}
                    </Text>
                    <Text
                        color={"gray.300"}
                        fontWeight={400}
                        lineHeight={1.2}
                        fontSize={["xs", "sm", "md", "lg"]}
                        w={{ base: "80%", sm: "70%", md: "60%", lg: "50%" }}
                    >
                        {t("aboutMeDescription")}
                    </Text>
                </Stack>
            </VStack>
        </Flex>
    );
}
