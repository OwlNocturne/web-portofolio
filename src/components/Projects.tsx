import React from "react";
import { Center, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import ProjectData from "../data/projects.json";

export default function Project() {
    return (
        <Center w={"full"}>
            <VStack>
                <Heading>Portofolio</Heading>
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
