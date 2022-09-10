import React from "react";
import {
  Container,
  Stack,
  Flex,
  Box,
  Heading,
  Text,
  Button,
  Image,
  Icon,
  // IconButton,
  IconProps,
  useColorModeValue,
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";
import { ChevronDownIcon } from "@chakra-ui/icons";
import Typewriter from "typewriter-effect";
import heroImage from "./image/Subham.JPG";
import resume from "./image/resume.png";

const Hero = () => {
  return (
    <>
      <Container maxW={"7xl"} isLazy>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 19 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 6 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: "3xl", sm: "4xl", lg: "6xl" }}
              fontFamily={"sans-serif"}
            >
              <Text
                as={"span"}
                position={"relative"}
                _after={{
                  content: "''",
                  width: "full",
                  height: "20%",
                  position: "absolute",
                  bottom: 2,
                  left: 0,
                  bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                  zIndex: -1,
                }}
              >
                Welcome to my
              </Text>
              <br />
              <Text
                as={"span"}
                color={"pink.400"}
                bgGradient="linear(to-r, #EC9F05, #FF4E00)"
                bgClip="text"
              >
                Portfolio!
              </Text>
            </Heading>

            <Heading>
              {" "}
              <Typewriter
                options={{
                  strings: ["Hi, I am Subham Dey"],
                  autoStart: true,
                  loop: true,
                }}
              />
            </Heading>
            <Text
              color={useColorModeValue("black", "white")}
              fontSize={"large"}
              fontStyle={"sans-serif"}
            >
              A Full Stack Developer aspires to create some good web
              applications by leveraging my skills in Frontend and Backend
              development by producing production-ready code. A team player and
              a collaborative developer having Leadership, Management, and
              teaching skills
            </Text>
            <Stack
              spacing={{ base: 4, sm: 6 }}
              direction={{ base: "column", sm: "row" }}
            >
              <Popover placement="bottom" isLazy>
                <PopoverTrigger>
                  <Button
                    rounded={"full"}
                    rightIcon={<ChevronDownIcon />}
                    size={"lg"}
                    colorScheme={"red"}
                    fontWeight={"normal"}
                    bgGradient="linear(to-r, #EC9F05, #FF4E00)"
                    _hover={{ bgGradient: "linear(to-l, #EC9F05, #FF4E00)" }}
                    w="fit-content"
                  >
                    My Resume
                  </Button>
                </PopoverTrigger>
                <PopoverContent _focus={{ boxShadown: "#f4f4" }} ml={5}>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader fontWeight="bold">
                    My Resume(Click on image to open)
                  </PopoverHeader>
                  <PopoverBody>
                    <Image
                      alt={"Hero Image"}
                      fit={"cover"}
                      align={"center"}
                      w={"100%"}
                      h={"100%"}
                      src={resume}
                      onClick={() => {
                        window.open("drivelink", "_blank");
                      }}
                    />
                  </PopoverBody>
                </PopoverContent>
              </Popover>
            </Stack>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"220%"}
              h={"210%"}
              position={"absolute"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("red.50", "red.400")}
            />
            <Box
              position={"relative"}
              height={"380px"}
              rounded={"3xl"}
              boxShadow={"2xl"}
              width={"70%"}
              overflow={"hidden"}
            >
              <Image
                alt={"Subham Dey"}
                fit={"cover"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={heroImage}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    </>
  );
};

export default Hero;

export const Blob = (props: IconProps) => {
  return (
    <Icon
      width={"100%"}
      viewBox="0 0 578 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        className="blob"
        d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
        fill="#EC9000"
      />
    </Icon>
  );
};
