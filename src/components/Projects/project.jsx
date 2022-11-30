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
function Project({ img, head, des, tech, yt, ver, git }) {
  return (
    <Center>
      <Flex
        direction={["column", "column", "row", "row"]}
        boxShadow={"2px 5px 10px grey"}
        borderRadius={"md"}
        w={["98%", "90%", "90%"]}
      >
        <Image
          borderRadius={"md"}
          w={["100%", "100%", "50%", "50%"]}
          src={img}
        />

        <Flex direction={"column"} p={["2", "2", "4"]}>
          <Center style={{ width: "100%" }}>
            <Heading size={"lg"} p={"2"}>
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
              gap={"3"}
              align={"center"}
              justify={"center"}
            >
              {tech.map((el) => (
                <Text>{el}</Text>
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
              rounded={"full"}
              _
              focus={{
                bg: "gray.200",
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
              _focus={{
                bg: "gray.200",
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
