import * as React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import theme from "./theme";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Companies from "./components/Companies";

export const App = () => (
    <ChakraProvider theme={theme}>
        <NavBar />
        <Hero />
        <Projects />
        <Companies />
        <Contact />
    </ChakraProvider>
);
