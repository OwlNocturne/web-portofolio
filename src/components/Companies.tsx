import React from "react";
import { Center, Divider, Flex, Heading, HStack, SimpleGrid, VStack } from "@chakra-ui/react";
import CompanyCard from "./CompanyCard";
import CompaniesData from "../data/companies.json";

export default function Project() {
    return (
        <Center w={"full"}>
            <VStack>
                <HStack w={"80%"} p={4}>
                    <Divider />
                    <Heading>Companies</Heading>
                    <Divider />
                </HStack>
                <Flex>
                    <SimpleGrid columns={3} spacing={10}>
                        {CompaniesData.map((data) => (
                            <CompanyCard company={data} key={data.name} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Center>
    );
}
