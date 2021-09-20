import React from "react";
import { Center, Flex, SimpleGrid, VStack } from "@chakra-ui/react";
import CompanyCard from "./CompanyCard";
import Seperator from "./Seperator";
import { useTranslation } from "react-i18next";

export default function Companies() {
    const { t } = useTranslation();
    const companiesData = t("companiesData", { returnObjects: true });

    return (
        <Center w={"full"} id="Companies">
            <VStack>
                <Seperator title={t("companies")} />
                <Flex>
                    <SimpleGrid columns={3} spacing={10}>
                        {companiesData.map((data) => (
                            <CompanyCard company={data} key={data.name} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Center>
    );
}
