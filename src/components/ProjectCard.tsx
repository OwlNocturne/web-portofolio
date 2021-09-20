import { Badge, Box, Image, useColorModeValue } from "@chakra-ui/react";

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
    roles: string;
    projectType: ProjectType;
};

export default function ProjectCard({ project }: { project: ProjectCardProps }) {
    return (
        <Box
            maxW="sm"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            position="relative"
            bg={useColorModeValue("white", "gray.800")}
        >
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
            <Box pl={3} pr={3} pb={3}>
                <Box
                    color="blue.400"
                    fontWeight="semibold"
                    fontSize="sm"
                    textTransform="uppercase"
                    mt={2}
                >
                    {project.roles}
                </Box>

                <Box mt={2} d="flex" alignItems="center">
                    <Badge borderRadius="full" px="3" colorScheme="teal">
                        {project.title}
                    </Badge>
                    <Box
                        color="gray.400"
                        fontWeight="semibold"
                        fontSize="xs"
                        textTransform="uppercase"
                        ml="2"
                    >
                        &bull; {project.shortDescription}
                    </Box>
                </Box>

                <Box mt={2} ml={1} fontWeight="semibold" fontSize="sm" lineHeight="tight">
                    {project.longDescription}
                </Box>
            </Box>
        </Box>
    );
}
