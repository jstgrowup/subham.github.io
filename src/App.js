import {
  Center,
  ChakraProvider,
  Divider,
  Flex,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import About from "./components/About";
import Projects from "./components/Projects";
import { Gitgraph } from "./gitgraph";
import GitStats from "./gitStats";

const App = () => {
  return (
    <ChakraProvider>

      <Navbar />

      <Hero />
      <About />
      <Center>
        <Gitgraph />
      </Center>
      <Center>
        <Flex direction={"column"} alignItems="center" gap={"10"}>
          <Heading size={"md"} color={useColorModeValue("black", "white")}>My Github Stats</Heading>
          <GitStats />
        </Flex>
      </Center>
      <Projects />
      <Divider />
      <Contact />
      <Footer />
    </ChakraProvider>
  );
};
export default App;