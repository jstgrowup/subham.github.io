import * as React from "react";

import { Center, ChakraProvider, Divider, Heading } from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

import About from "./components/About";
import Projects from "./components/Projects";
import Gitgraph from "./gitgraph";

const App = () => {
  return (
    <ChakraProvider>
      <Navbar />
      <Hero />
      <About />
      <Center
        display={"flex"}
        flexDirection="column"
        gap={"10"}
    
      >
        <Heading>My GitHub Contribution Graph</Heading>
        <Gitgraph />
      </Center>
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
};
export default App;
