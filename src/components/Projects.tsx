import React from "react";
import { Center, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import ProjectData from "../data/projects.json";

// const ProjectCards = ProjectData.;

export default function Project() {
    console.log(ProjectData);
    return (
        <Center w={"full"}>
            <VStack>
                <Heading>Projects</Heading>
                <Flex>
                    <SimpleGrid columns={2} spacing={10}>
                        {ProjectData.map((data) => (
                            <ProjectCard project={data} key={data.title} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Center>
    );
}
