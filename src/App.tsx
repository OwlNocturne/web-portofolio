import * as React from "react"
import { ChakraProvider } from "@chakra-ui/react"
import NavBar from "./components/NavBar"
import theme from "./theme"
import Hero from "./components/Hero"

export const App = () => (
  <ChakraProvider theme={theme}>
    <NavBar />
    <Hero />
  </ChakraProvider>
)
