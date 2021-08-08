import { Box, Image } from "@chakra-ui/react";

type CompanyCardProps = {
    name: string;
    imageUrl: string;
    imageAlt: string;
    websiteUrl: string;
};

export default function ProjectCard({ company }: { company: CompanyCardProps }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
            <Box display="block">
                <Image src={company.imageUrl} alt={company.imageAlt} />
            </Box>
        </Box>
    );
}
