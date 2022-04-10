import React from "react";
import { Flex, Select, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import Seperator from "./Seperator";
import { useTranslation } from "react-i18next";

export default function Portofolio() {
    const [projectType, setProjectType] = React.useState(0);
    const { t } = useTranslation();
    const projectData = t("projectsData", { returnObjects: true });

    return (
        <VStack w={"full"} id="Portofolio">
            <Seperator title={t("portfolio")} />
            <Select w="20%" pb={4} onChange={(e) => setProjectType(parseInt(e.target.value))}>
                <option value={0}>{t("all")}</option>
                <option value={1}>{t("games")}</option>
                <option value={2}>{t("apps")}</option>
                <option value={3}>{t("web")}</option>
            </Select>
            <Flex>
                <SimpleGrid columns={{ base: 1, sm: 1, md: 2, lg: 3, xl: 4 }} spacing={10}>
                    {projectData.map((data) => {
                        if (projectType === 0 || data.projectType === projectType)
                            return <ProjectCard project={data} key={data.title} />;
                        else return null;
                    })}
                </SimpleGrid>
            </Flex>
        </VStack>
    );
}
