import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Heading, Link, useColorModeValue } from "@chakra-ui/react";

type CompanyCardProps = {
    name: string;
    websiteUrl: string;
};

export default function ProjectCard({ company }: { company: CompanyCardProps }) {
    return (
        <Box
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
            <Link href={company.websiteUrl} fontWeight={600} color={"gray.500"} mb={4} isExternal>
                Corporate website <ExternalLinkIcon mx="2px" />
            </Link>
        </Box>
    );
}
