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
  SiRedis,
  SiJsonwebtokens,
  SiAmazonaws,
} from "react-icons/si";
import {
  IoLogoJavascript,
  IoLogoNodejs,
  IoLogoHtml5,
  IoLogoReact,
  IoLogoGithub,
  IoLogoCss3,
} from "react-icons/io5";


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
const Feature = ({ icon, iconBg }) => {
  return (
    <Stack direction={"row"} align={"center"}>
      <Flex gap={"3"}
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
    <Container className="reveal" id="skills" maxW={"7xl"} py={20} isLazy>
      <Center p={"10"}>
        <Heading color={useColorModeValue("black", "white")} size="md">
          Tech Skills
        </Heading >
      </Center>

      <SimpleGrid columns={{ base: 3, sm: 5, md: 7 }} spacing={8}>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>React</Heading >
        </Flex>

        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Nodejs</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Javascript</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>HTML</Heading>
        </Flex>


        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>MongoDB</Heading>
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Expressjs</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>GitHub</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Heroku</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Git</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>CSS3</Heading >
        </Flex>

        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Postman</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Redux</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>ChakraUI</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


          <Feature
            icon={
              <Icon
                as={SiRedis}
                color={useColorModeValue("#A32422", "#A32422")}
                boxSize={"62"}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>Redis</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>


          <Feature
            icon={
              <Icon
                as={SiJsonwebtokens}
                color={useColorModeValue("#4DC7C2", "black")}
                boxSize={"62"}
              />
            }
            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>JWT</Heading>
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>

          <Feature
            icon={
              <Icon
                as={SiAmazonaws}
                color={useColorModeValue("#4DC7C2", "black")}
                boxSize={"62"}
              />
            }

            iconBg={useColorModeValue("black", "white")}
          />
          <Heading color={useColorModeValue("black", "white")} size={"md"}>AWS</Heading >
        </Flex>
        <Flex gap={"3"} direction={"column"} align={"center"}>

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
          <Heading color={useColorModeValue("black", "white")} size={"md"}>NextJS</Heading >

        </Flex>
      </SimpleGrid>
    </Container>
  );
};

export default About;
