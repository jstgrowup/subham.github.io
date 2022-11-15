import React from "react";
import {
  Button,
  Center,
  Heading,
  Stack,
  Text,
  useColorModeValue,
  Divider,
  Box,
  Flex,
  SimpleGrid,
  Image,
} from "@chakra-ui/react";

import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";

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
const Projects = () => {
  return (
    <>
      <Divider />

      <Center className="reveal" id="projects" py={4}>
        <Text
          textTransform={"uppercase"}
          color={"blue.400"}
          fontWeight={600}
          fontSize={"sm"}
          bg={useColorModeValue("blue.50", "blue.900")}
          p={2}
          alignSelf={"flex-start"}
          rounded={"md"}
        >
          My Projects
        </Text>
      </Center>
      <Center className="reveal" py={2}>
        <Heading style={{ paddingLeft: 30 }}>
          Here are some of My Projects
        </Heading>
      </Center>

      <SimpleGrid
        columns={["1", "2", "2", "3"]}
        gap={["5", "6", "10"]}
        p={["2", "2", "6", "10"]}
      >
        <Center>
          <Flex
            boxShadow={"2px 5px 10px grey"}
            h={["500px", "550px", "500px", "550px"]}
            borderRadius={"md"}
            w={["300px", "270px", "370px", "400px"]}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://i.ibb.co/d6m68DR/1.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Sparkamerica Clone
                </Heading>
              </Center>
              <Text
                color={useColorModeValue("black", "white")}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                p={"2"}
                align={"center"}
              >
                SparkAmerica is an American health awareness community-building
                website where people register themselves and join the community.
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                ReactJS, ChakraUI, React Router,Typescript, Local Storage,
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open("https://youtu.be/ExVNJnaNgUo", "_blank");
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open("https://spark-america.vercel.app", "_blank");
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              //{" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/jstgrowup/SparkAmerica_Clone.git",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"2px 5px 10px grey"}
            h={["500px", "550px", "500px", "550px"]}
            borderRadius={"md"}
            w={["300px", "270px", "370px", "400px"]}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://i.ibb.co/26JwSLW/2.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Pharmeasy Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                An e-commerce web application that widely provides e-pharmacy,
                diagnostics, and healthcare solutions
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML3, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/posts/subham-dey4021_firstproject-webdevelopment-javascript-activity-6930024203802787840-KrVY?utm_source=share&utm_medium=member_desktop",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://startling-malasada-ccd5c5.netlify.app/sagar%20and%20pravhat/navbarforhome",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              //{" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/jstgrowup/Pharmeasy-Clone",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"2px 5px 10px grey"}
            h={["500px", "550px", "500px", "550px"]}
            w={["300px", "270px", "370px", "400px"]}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://i.ibb.co/G0Brt2G/3.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  BeautyBebo Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                This is an Indian e-commerce website widely known for selling
                beauty products for females
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML3, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://www.linkedin.com/posts/md-irfan-835202221_html-css-javascript-activity-6944537263556956160-U52T?utm_source=share&utm_medium=member_desktop",
                    "_blank"
                  );
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://delightful-duckanoo-17fff8.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              //{" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/jstgrowup/BeautyBebo-clone.git",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"2px 5px 10px grey"}
            h={["500px", "550px", "500px", "550px"]}
            borderRadius={"md"}
            w={["300px", "270px", "370px", "400px"]}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://i.ibb.co/qDnLcJn/4.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  Star Wars Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                This is a mini project where i made a clone of the starwars
                search website ,here you can find the details of you favourite
                starwars character
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                JavaScript, HTML3, CSS, Local Storage
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              // border={"2px"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                // flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open("https://youtu.be/mk53cFRR0Ro", "_blank");
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://starwars-search-subham.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              //{" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/jstgrowup/Starwars_website.git",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
        <Center>
          <Flex
            boxShadow={"2px 5px 10px grey"}
            h={["500px", "550px", "500px", "550px"]}
            borderRadius={"md"}
            w={["300px", "270px", "370px", "400px"]}
            // border={"2px"}
            direction={"column"}
          >
            <Image
              borderRadius={"md"}
              src={"https://i.ibb.co/27bSjG7/Screenshot-254.png"}
              w={"100%"}
            />
            <Box p={["2","2","4"]}>
              <Center style={{ width: "100%" }}>
                <Heading size={"lg"} p={"2"}>
                  TimeCamp Clone
                </Heading>
              </Center>
              <Text
                p={"2"}
                fontSize={"large"}
                fontStyle={"sans-serif"}
                align={"center"}
              >
                Time-camp website which is a time tracking web application used
                to keep track of the team's work progress
              </Text>

              <Text align={"center"}>
                <span style={{ color: "red", fontWeight: "bold" }}>
                  Tech Stacks
                </span>{" "}
                ChakraUI,React Router,Google-Firebase
                Auth,React-redux,Bootstarp,CSS
              </Text>
            </Box>
            <Stack
              mt={"1rem"}
              direction={"row"}
              p={"4"}
              // border={"2px"}
              padding={1}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Button
                // flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _
                focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open("https://youtu.be/0-9m-XROu_w", "_blank");
                }}
              >
                {<BsFillCameraVideoFill size="28px" />}
              </Button>
              <Button
                // flex={1}
                fontSize={"sm"}
                rounded={"full"}
                _focus={{
                  bg: "gray.200",
                }}
                onClick={() => {
                  window.open(
                    "https://timecampclone-cw.netlify.app/",
                    "_blank"
                  );
                }}
              >
                {<BsFillEyeFill size="28px" />}
              </Button>
              //{" "}
              <Button
                fontSize={"sm"}
                rounded={"full"}
                bg={"black"}
                color={"white"}
                boxShadow={
                  "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
                }
                _hover={{
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                }}
                onClick={() => {
                  window.open(
                    "https://github.com/jstgrowup/Time-Camp-Clone",
                    "_blank"
                  );
                }}
              >
                {<BsGithub size="28px" />}
              </Button>
            </Stack>
          </Flex>
        </Center>
      </SimpleGrid>
    </>
  );
};

export default Projects;
