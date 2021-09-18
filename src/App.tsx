import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
import Hero from "./components/Hero";
import Portofolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Companies from "./components/Companies";

export const App = () => (
    <ChakraProvider theme={theme}>
        <NavBar />
        <Hero />
        <Portofolio />
        <Companies />
        <Contact />
    </ChakraProvider>
);
