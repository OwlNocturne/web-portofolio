import React from "react";
import { Box, Center, Flex, Heading, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

import ProjectData from "../data/projects.json";

export default function Portofolio() {
    const [projectType, setProjectType] = React.useState(0);

    return (
        <Center w={"full"} id="Portofolio">
            <VStack>
                <Heading>Portofolio</Heading>
                <Box w={"full"}>
                    <Select
                        align={"flex-start"}
                        w={{ base: "20%", md: "20%" }}
                        onChange={(e) => setProjectType(parseInt(e.target.value))}
                    >
                        <option value={0}>All</option>
                        <option value={1}>Games</option>
                        <option value={2}>Apps</option>
                        <option value={3}>Web</option>
                    </Select>
                </Box>
                <Flex>
                    <SimpleGrid columns={3} spacing={10}>
                        {ProjectData.map((data) => {
                            if (projectType === 0 || data.projectType === projectType)
                                return <ProjectCard project={data} key={data.title} />;
                            else return null;
                        })}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Center>
    );
}
