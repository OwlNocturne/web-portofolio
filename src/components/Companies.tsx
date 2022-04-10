import React from "react";
import { Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import CompanyCard from "./CompanyCard";
import Seperator from "./Seperator";
import { useTranslation } from "react-i18next";

export default function Companies() {
    const { t } = useTranslation();
    const companiesData = t("companiesData", { returnObjects: true });

    return (
        <VStack w={"full"} id="Companies">
            <Seperator title={t("companies")} />
            <Flex>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10} mx={4}>
                    {companiesData.map((data) => (
                        <CompanyCard company={data} key={data.name} />
                    ))}
                </SimpleGrid>
            </Flex>
        </VStack>
    );
}
