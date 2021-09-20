import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Link, useColorModeValue } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";

type CompanyCardProps = {
    name: string;
    agency?: string;
    websiteUrl: string;
    roles: string;
};

export default function CompanyCard({ company }: { company: CompanyCardProps }) {
    const { t } = useTranslation();

    return (
        <HStack
            display="block"
            maxW={"320px"}
            bg={useColorModeValue("white", "gray.900")}
            boxShadow={"2xl"}
            rounded={"lg"}
            p={6}
            textAlign={"center"}
        >
            <Heading fontSize={"2xl"} fontFamily={"body"}>
                {company.name}
            </Heading>
            {company.agency && (
                <Heading fontSize={"xs"} fontFamily={"body"}>
                    ({t("via")} {company.agency})
                </Heading>
            )}
            <Box fontWeight={600} color={"gray.500"}>
                {t("roles")}: {company.roles}
            </Box>
            <Link href={company.websiteUrl} fontWeight={600} color={"gray.500"} mb={4} isExternal>
                {t("corporateWebsite")} <ExternalLinkIcon mx="2px" />
            </Link>
        </HStack>
    );
}
