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
} from "@chakra-ui/react";
import { projects } from "../constants/constants";

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
const Projects = ({ post, _id }) => {
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

      <Box className="main">
        {projects.map(
          ({ id, image, title, description, tags, source, visit, video }) => (
            <div className="card reveal" key={id}>
              <img src={image} alt={title} />
              <div className="card-body">
                <Center style={{ width: "100%" }}>
                  <Heading size={"lg"} p={"2"}>
                    {title}
                  </Heading>
                </Center>
                <Text p={"2"} fontSize={"md"}>
                  {description}
                </Text>

                <Center>
                  {" "}
                  <Heading size={"md"}>Tech Stacks Used</Heading>
                </Center>
                <Flex gap={"1"} justify={"center"}>
                  {tags.map((tag, index) => (
                    <Text fontSize={"sm"} key={index}>
                      {tag},
                    </Text>
                  ))}
                </Flex>

                <div>
                  <Stack
                    width={"20%"}
                    mt={"1rem"}
                    direction={"row"}
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
                        window.open(video, "_blank");
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
                        window.open(visit, "_blank");
                      }}
                    >
                      {<BsFillEyeFill size="28px" />}
                    </Button>

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
                        window.open(source, "_blank");
                      }}
                    >
                      {<BsGithub size="28px" />}
                    </Button>
                  </Stack>
                </div>
              </div>
            </div>
          )
        )}
      </Box>
    </>
  );
};

export default Projects;
