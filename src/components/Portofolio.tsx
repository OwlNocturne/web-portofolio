import React from "react";
import { Box, Center, Flex, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Seperator from "./Seperator";
import { useTranslation } from "react-i18next";

export default function Portofolio() {
    const [projectType, setProjectType] = React.useState(0);
    const { t } = useTranslation();
    const projectData = t("projectsData", { returnObjects: true });

    return (
        <Center w={"full"} id="Portofolio">
            <VStack>
                <Seperator title={t("portfolio")} />
                <Box w={"full"}>
                    <Select
                        align={"flex-start"}
                        w={{ base: "20%", md: "20%" }}
                        onChange={(e) => setProjectType(parseInt(e.target.value))}
                        mb={5}
                    >
                        <option value={0}>{t("all")}</option>
                        <option value={1}>{t("games")}</option>
                        <option value={2}>{t("apps")}</option>
                        <option value={3}>{t("web")}</option>
                    </Select>
                </Box>
                <Flex>
                    <SimpleGrid columns={3} spacing={10}>
                        {projectData.map((data) => {
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
