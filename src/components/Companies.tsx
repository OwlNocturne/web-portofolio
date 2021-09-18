import React from "react";
import { Center, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import CompanyCard from "./CompanyCard";
import CompaniesData from "../data/companies.json";
import Seperator from "./Seperator";

export default function Companies() {
    return (
        <Center w={"full"} id="Companies">
            <VStack>
                <Seperator title={"Companies"} />
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
