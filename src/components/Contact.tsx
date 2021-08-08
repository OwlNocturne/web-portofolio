import { FormEvent, useState } from "react";
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

export default function Contact() {
    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const [state, setState] = useState<"initial" | "submitting" | "success">("initial");
    const [error, setError] = useState(false);

    function handleSubmit(e: FormEvent) {
        e.preventDefault();

        setError(false);
        setState("submitting");

        // TODO Actually send email
        setTimeout(() => {
            if (email === "fail@example.com") {
                setError(true);
                setState("initial");
                return;
            }
            setState("success");
        }, 1000);
    }

    return (
        <Flex
            m={10}
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
                <Heading as={"h2"} fontSize={{ base: "xl", sm: "2xl" }} textAlign={"center"} mb={5}>
                    Contact Me
                </Heading>
                <VStack as={"form"} spacing={"12px"} onSubmit={handleSubmit}>
                    <FormControl isRequired>
                        <FormLabel>Email address</FormLabel>
                        <Input
                            variant={"solid"}
                            borderWidth={1}
                            color={"gray.800"}
                            _placeholder={{
                                color: "gray.400",
                            }}
                            borderColor={useColorModeValue("gray.300", "gray.700")}
                            id={"email"}
                            type={"email"}
                            required
                            placeholder={"Your Email"}
                            aria-label={"Your Email"}
                            value={email}
                            disabled={state !== "initial"}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </FormControl>
                    <FormControl isRequired>
                        <FormLabel>Your Name</FormLabel>
                        <Input
                            variant={"solid"}
                            borderWidth={1}
                            color={"gray.800"}
                            _placeholder={{
                                color: "gray.400",
                            }}
                            borderColor={useColorModeValue("gray.300", "gray.700")}
                            id={"name"}
                            type={"text"}
                            required
                            placeholder={"Your Name"}
                            aria-label={"Your Name"}
                            value={name}
                            disabled={state !== "initial"}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </FormControl>
                    <FormControl w={"100%"} isRequired>
                        <FormLabel>Message:</FormLabel>
                        <Textarea
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Please insert your text"
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
    );
}
