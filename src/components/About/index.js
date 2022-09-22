import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Stack,
  Icon,
  useColorModeValue,
  Center,
  Heading,
} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiHeroku,
  SiGit,
  SiPostman,
  SiRedux,
  SiChakraui,
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGithub,
  IoLogoCss3,
} from "react-icons/io5";
import { ReactElement } from "react";

interface FeatureProps {
  text: string;
  iconBg: string;
  icon?: ReactElement;
}
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
const Feature = ({ icon, iconBg }: FeatureProps) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex
        boxSize={"70"}
        borderRadius={"lg"}
        align={"center"}
        justify={"center"}
        bg={iconBg}
      >
        {icon}
      </Flex>
    </Stack>
  );
};

const About = () => {
  return (
    <Container className="reveal" id="about" maxW={"7xl"} py={20} isLazy>
      <Center>
        <Heading color={useColorModeValue("black", "white")} size="md">
          Tech Skills
        </Heading>
      </Center>

      <SimpleGrid columns={{ base: 3, sm: 5, md: 7 }} spacing={10}>
        <Feature
          icon={
            <Icon
              as={IoLogoReact}
              color={useColorModeValue("blue.200", "blue.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        <Feature
          icon={
            <Icon
              as={IoLogoNodejs}
              color={useColorModeValue("green.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "green.900")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoJavascript}
              color={useColorModeValue("yellow.300", "yellow.400")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoHtml5}
              color={useColorModeValue("red.300", "red.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={TbBrandNextjs}
              color={useColorModeValue("white", "black")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        <Feature
          icon={
            <Icon
              as={SiMongodb}
              color={useColorModeValue("green.500", "green.300")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiExpress}
              color={useColorModeValue("white", "blue.600")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoGithub}
              color={useColorModeValue("white", "blue.700")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiHeroku}
              color={useColorModeValue("white", "blue.700")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiGit}
              color={useColorModeValue("red", "red.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoCss3}
              color={useColorModeValue("blue.200", "blue.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        <Feature
          icon={
            <Icon
              as={SiPostman}
              color={useColorModeValue("#EE6D3F", "#EE6D3F")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiRedux}
              color={useColorModeValue("white", "red.500")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiChakraui}
              color={useColorModeValue("#4DC7C2", "#4DC7C2")}
              boxSize={"62"}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
      </SimpleGrid>
    </Container>
  );
};

export default About;
