import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Link, useColorModeValue } from "@chakra-ui/react";

type CompanyCardProps = {
    name: string;
    agency?: string;
    websiteUrl: string;
    roles: string;
};

export default function CompanyCard({ company }: { company: CompanyCardProps }) {
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
                    (Via {company.agency})
                </Heading>
            )}
            <Box fontWeight={600} color={"gray.500"}>
                Roles: {company.roles}
            </Box>
            <Link href={company.websiteUrl} fontWeight={600} color={"gray.500"} mb={4} isExternal>
                Corporate website <ExternalLinkIcon mx="2px" />
            </Link>
        </HStack>
    );
}
