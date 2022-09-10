import React from "react";
import {
  Container,
  SimpleGrid,
  Flex,
  Text,
  Stack,
  Icon,
  useColorModeValue,
} from "@chakra-ui/react";
import { TbBrandNextjs } from "react-icons/tb";
import {
  SiMongodb,
  SiExpress,
  SiHeroku,
  SiGit,
  SiPostman,
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoPython,
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
        w={58}
        h={58}
        align={"center"}
        justify={"center"}
        rounded={"full"}
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
      <Text color={"gray.500"} fontSize={"xl"}>
        Some of the Stack I know
      </Text>
      <SimpleGrid columns={{ base: 2,sm:5, md: 7 }} spacing={10}>
        <Feature
          icon={
            <Icon
              as={IoLogoReact}
              color={useColorModeValue("blue.200", "blue.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoPython}
              color={useColorModeValue("blue.200", "blue.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoNodejs}
              color={useColorModeValue("green.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "green.900")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoJavascript}
              color={useColorModeValue("yellow.300", "yellow.400")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoHtml5}
              color={useColorModeValue("red.300", "red.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={TbBrandNextjs}
              color={useColorModeValue("white", "black")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        <Feature
          icon={
            <Icon
              as={SiMongodb}
              color={useColorModeValue("green.500", "green.300")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiExpress}
              color={useColorModeValue("white", "blue.600")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoGithub}
              color={useColorModeValue("white", "blue.700")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiHeroku}
              color={useColorModeValue("white", "blue.700")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={SiGit}
              color={useColorModeValue("red", "red.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />
        <Feature
          icon={
            <Icon
              as={IoLogoCss3}
              color={useColorModeValue("blue.200", "blue.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        <Feature
          icon={
            <Icon
              as={SiPostman}
              color={useColorModeValue("white", "red.500")}
              w={10}
              h={10}
            />
          }
          iconBg={useColorModeValue("black", "white")}
        />

        {/* <Flex>
          <Image
            width={"100%"}
            rounded={"md"}
            alt={"feature image"}
            src={
              "https://spectrum.ieee.org/media-library/image.jpg?id=25587918"
            }
            objectFit={"cover"}
          />
        </Flex> */}
      </SimpleGrid>
    </Container>
  );
};

export default About;
