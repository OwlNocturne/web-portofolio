import { Center, Flex, Heading, SimpleGrid, VStack } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";

const project1 = {
    imageUrl:
        "https://assets.nintendo.com/image/upload/c_limit,f_auto,q_auto,w_1920/ncom/en_US/games/wii-u/e/eba-and-egg-a-hatch-trip-wii-u/screenshot-gallery/screenshot01.png",
    imageAlt: "Eba Egg Logo",
    title: "Eba & Egg",
    shortDescription: "Wii U Game",
    longDescription: "This is a game for the Wii U",
    platforms: "Wii U",
    languages: "C#",
};

const project2 = {
    imageUrl: "https://jp.techcrunch.com/wp-content/uploads/2018/10/sub11.jpg",
    imageAlt: "Sarah Hacker Club 1",
    title: "Sarah Hacker Club",
    shortDescription: "AR Game ",
    longDescription: "This is an escape game for mobile games played in location",
    platforms: "Android, iPhone",
    languages: "C#",
};

const ProjectCards = [project1, project2];

export default function Project() {
    return (
        <Center w={"full"}>
            <VStack>
                <Heading>Projects</Heading>
                <Flex>
                    <SimpleGrid columns={2} spacing={10}>
                        {ProjectCards.map((card) => (
                            <ProjectCard project={card} />
                        ))}
                    </SimpleGrid>
                </Flex>
            </VStack>
        </Center>
    );
}
