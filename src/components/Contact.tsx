import { useEffect, useState } from "react";
import {
    FormControl,
    Input,
    Button,
    useColorModeValue,
    Heading,
    Text,
    Container,
    Flex,
    FormLabel,
    Textarea,
    VStack,
} from "@chakra-ui/react";
import { CheckIcon } from "@chakra-ui/icons";
import React from "react";
import Seperator from "./Seperator";
import { useTranslation } from "react-i18next";

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [state, setState] = useState<"initial" | "submitting" | "success">("initial");
    const [error] = useState(false);
    const { t } = useTranslation();

    useEffect(() => {
        if (window.location.search.includes("success=true")) {
            setState("success");
        }
    }, []);

    return (
        <VStack w={"full"} mb={50} id="Contact">
            <Seperator title={t("contact")} />
            <Flex
                w={"full"}
                m={[10, 50]}
                align={"center"}
                justify={"center"}
                bg={useColorModeValue("gray.50", "gray.800")}
            >
                <Container
                    maxW={"lg"}
                    bg={useColorModeValue("white", "whiteAlpha.100")}
                    boxShadow={"xl"}
                    rounded={"lg"}
                    p={6}
                    direction={"column"}
                >
                    <Heading
                        as={"h2"}
                        fontSize={{ base: "xl", sm: "2xl" }}
                        textAlign={"center"}
                        mb={5}
                    >
                        {t("contactMe")}
                    </Heading>
                    <VStack
                        as={"form"}
                        spacing={"12px"}
                        name={"contact"}
                        method={"POST"}
                        action={"/contact/?success=true"}
                        data-netlify="true"
                    >
                        <input type="hidden" name="form-name" value="contact" />
                        <FormControl isRequired>
                            <FormLabel>{t("emailAddress")}</FormLabel>
                            <Input
                                id={"email"}
                                name={"email"}
                                variant={"solid"}
                                borderWidth={1}
                                color={"gray.800"}
                                _placeholder={{
                                    color: "gray.400",
                                }}
                                borderColor={useColorModeValue("gray.300", "gray.700")}
                                type={"email"}
                                required
                                placeholder={t("yourEmailPlaceholder")}
                                aria-label={t("yourEmailPlaceholder")}
                                value={email}
                                disabled={state !== "initial"}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </FormControl>
                        <FormControl isRequired>
                            <FormLabel>{t("yourName")}</FormLabel>
                            <Input
                                id={"name"}
                                name={"name"}
                                variant={"solid"}
                                borderWidth={1}
                                color={"gray.800"}
                                _placeholder={{
                                    color: "gray.400",
                                }}
                                borderColor={useColorModeValue("gray.300", "gray.700")}
                                type={"text"}
                                required
                                placeholder={t("yourNamePlaceholder")}
                                aria-label={t("yourNamePlaceholder")}
                                value={name}
                                disabled={state !== "initial"}
                                onChange={(e) => setName(e.target.value)}
                            />
                        </FormControl>
                        <FormControl w={"100%"} isRequired>
                            <FormLabel>{t("message")}:</FormLabel>
                            <Textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                placeholder={t("insertTextPlaceholder")}
                            />
                        </FormControl>

                        <FormControl w={{ base: "100%", md: "40%" }}>
                            <Button
                                colorScheme={state === "success" ? "green" : "blue"}
                                isLoading={state === "submitting"}
                                w="100%"
                                type={state === "success" ? "button" : "submit"}
                            >
                                {state === "success" ? <CheckIcon /> : "Submit"}
                            </Button>
                        </FormControl>
                    </VStack>
                    <Text mt={2} textAlign={"center"} color={error ? "red.500" : "gray.500"}>
                        {error
                            ? "A error occured! Please try again later."
                            : "Looking forward to hear from you!"}
                    </Text>
                </Container>
            </Flex>
        </VStack>
    );
}
