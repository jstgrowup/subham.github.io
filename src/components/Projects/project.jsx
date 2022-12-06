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
  HStack,
} from "@chakra-ui/react";
import { BsFillCameraVideoFill, BsFillEyeFill, BsGithub } from "react-icons/bs";
import { CheckIcon } from "@chakra-ui/icons";
function Project({ img, head, des, tech, yt, ver, git, features }) {
  return (
    <Center className="reveal">
      <Flex
        direction={["column", "column", "column", "row"]}
        boxShadow={"2px 5px 10px grey"}
        borderRadius={"3xl"}
        w={["98%", "90%", "80%"]}
      >
        <Image
        borderRadius={"2xl"}
          w={["100%", "100%", "100%", "53%"]}
          src={img}
        />

        <Flex direction={"column"} p={["1", "2", "2", "3"]}>
          <Center style={{ width: "100%" }}>
            <Heading size={"lg"} p={"3"}>
              {head}
            </Heading>
          </Center>
          <Text
            color={useColorModeValue("black", "white")}
            fontSize={"large"}
            fontStyle={"sans-serif"}
            p={"2"}
            align={"center"}
          >
            {des}
          </Text>
          <Text align={"center"} color={"red"} fontWeight="bold">
            Tech Stacks
            <Flex
              color={useColorModeValue("black", "white")}
              fontSize={"md"}
              fontStyle={"sans-serif"}
              gap={"1"}
              align={"center"}
              justify={"center"}
            >
              {tech.map((el) => (
                <Text>{el},</Text>
              ))}
            </Flex>
          </Text>

          <Text align={"center"} color={"red"} fontWeight="bold">
            Features
            <Flex
              color={useColorModeValue("black", "white")}
              fontSize={"md"}
              direction="column"
              fontStyle={"sans-serif"}
              gap={"2"}
              align={"center"}
              justify={"center"}
            >
              {features.map((el) => (
                <Text gap={"4"}>
                  <CheckIcon color={"green.600"} />
                  {el}
                </Text>
              ))}
            </Flex>
          </Text>
          <Stack
            mt={"1rem"}
            direction={"row"}
            padding={1}
            justifyContent={"space-between"}
            alignItems={"center"}
          >
            <Button
              fontSize={"sm"}
              bg={"black"}
              color={"white"}
              rounded={"full"}
              _
              focus={{
                bg: "gray.200",
              }}
              _hover={{
                bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
              }}
              onClick={() => {
                window.open(yt, "_blank");
              }}
            >
              {<BsFillCameraVideoFill size="28px" />}
            </Button>
            <Button
              fontSize={"sm"}
              rounded={"full"}
              bg={"black"}
              color={"white"}
              _hover={{
                bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
              }}
              onClick={() => {
                window.open(ver, "_blank");
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
                window.open(git, "_blank");
              }}
            >
              {<BsGithub size="28px" />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
    </Center>
  );
}

export default Project;
