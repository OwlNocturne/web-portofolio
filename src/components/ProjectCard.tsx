import { Badge, Box, Image } from "@chakra-ui/react";

export enum ProjectType {
    ALL = 0,
    GAME = 1,
    APP = 2,
    WEB = 3,
}

type ProjectCardProps = {
    imageUrl: string;
    imageAlt: string;
    title: string;
    shortDescription: string;
    longDescription: string;
    platforms: string;
    languages: string;
    projectType: ProjectType;
};

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" position="relative">
            <Box display="block">
                <Image src={`${project.imageUrl}`} alt={project.imageAlt} />
                <Badge
                    borderRadius="full"
                    colorScheme="gray"
                    variant="solid"
                    px="2"
                    position="absolute"
                    top="5px"
                    right="5px"
                    z-index="2"
                >
                    {project.platforms}
                </Badge>
            </Box>
            <Box p="6">
                <Box d="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                        {project.title}
                    </Badge>
                    <Box
                        color="gray.500"
                        fontWeight="semibold"
                        letterSpacing="wide"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        &bull; {project.shortDescription}
                    </Box>
                </Box>

                <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                    {project.longDescription}
                </Box>
            </Box>
        </Box>
    );
}
