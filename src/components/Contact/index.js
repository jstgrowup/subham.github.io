import React from "react";
import {
  Container,
  Flex,
  Box,
  Heading,
  Text,
  IconButton,
  Button,
  VStack,
  HStack,
  Wrap,
  WrapItem,
  FormControl,
  Link,
} from "@chakra-ui/react";
import { MdPhone, MdEmail, MdLocationOn } from "react-icons/md";
import { BsGithub, BsLinkedin, BsYoutube } from "react-icons/bs";

const Contact = () => {
  const ButtonMailto = ({ mailto, label }) => {
    return (
      <Link
        style={{ textDecoration: "none" }}
        _hover={{ textDecoration: "none" }}
        to="#"
        onClick={(e) => {
          window.location.href = mailto;
          e.preventDefault();
        }}
      >
        <Button
          mt={4}
          variant="solid"
          bg="#0D74FF"
          color="white"
          _hover={{ bgGradient: "linear(to-r, #EC9F05, #FF4E00)" }}
        >
          {label}
        </Button>
      </Link>
    );
  };
  return (
    <Container
      className="reveal"
      id="contact"
      bgGradient="linear(to-r, #EC9F05, #FF4E00)"
      maxW="full"
      mt={0}
      centerContent
      overflow="hidden"
      isLazy
    >
      <Flex>
        <Box
          bg="black"
          textAlign="center"
          color="white"
          borderRadius="lg"
          m={{ sm: 4, md: 16, lg: 10 }}
          p={{ sm: 5, md: 5, lg: 16 }}
        >
          <Box className="reveal" p={4}>
            <Wrap spacing={{ base: 20, sm: 3, md: 5, lg: 20 }}>
              <WrapItem>
                <center>
                  <Box>
                    <Heading>Contact</Heading>
                    <Text mt={{ sm: 3, md: 3, lg: 5 }} color="gray.500">
                      Fill up the form below to contact
                    </Text>
                    <Box py={{ base: 5, sm: 5, md: 8, lg: 10 }}>
                      <VStack pl={0} spacing={3} alignItems="flex-start">
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdPhone color="#1970F1" size="20px" />}
                        >
                          +91-9435355529
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="225px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={<MdEmail color="#1970F1" size="20px" />}
                        >
                          deysubham999@gmail.com
                        </Button>
                        <Button
                          size="md"
                          height="48px"
                          width="200px"
                          variant="ghost"
                          color="#DCE2FF"
                          _hover={{ border: "2px solid #1C6FEB" }}
                          leftIcon={
                            <MdLocationOn color="#1970F1" size="20px" />
                          }
                        >
                          Assam, India
                        </Button>
                      </VStack>
                    </Box>
                    <HStack spacing={5} px={5} alignItems="flex-start">
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{
                          bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                        }}
                        icon={<BsGithub size="28px" />}
                        onClick={() => {
                          window.open("https://github.com/jstgrowup", "_blank");
                        }}
                      />

                      <IconButton
                        aria-label="discord"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{
                          bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                        }}
                        icon={<BsLinkedin size="28px" />}
                        onClick={() => {
                          window.open(
                            "https://www.linkedin.com/in/subham-dey4021/",
                            "_blank"
                          );
                        }}
                      />
                      <IconButton
                        aria-label="github"
                        variant="ghost"
                        size="lg"
                        isRound={true}
                        _hover={{
                          bgGradient: "linear(to-r, #EC9F05, #FF4E00)",
                        }}
                        icon={<BsYoutube size="28px" />}
                        onClick={() => {
                          window.open(
                            "https://www.youtube.com/channel/UCKqkhUqz3n1v-9wOGOI6nxQ",
                            "_blank"
                          );
                        }}
                      />
                    </HStack>
                  </Box>
                </center>
              </WrapItem>
              <WrapItem>
                <Box bg="white" borderRadius="lg">
                  <Box m={8} color="#FF4F09">
                    <VStack spacing={3}>
                      <form
                        action="mailto:deysubham999@gmail.com"
                        method="post"
                      >
                        <center>
                          <FormControl id="name" float="right">
                            <ButtonMailto
                              label="Write me an E-Mail"
                              mailto="mailto:deysubham999@gmail.com"
                            />
                          </FormControl>
                        </center>
                      </form>
                    </VStack>
                  </Box>
                </Box>
              </WrapItem>
            </Wrap>
          </Box>
        </Box>
      </Flex>
    </Container>
  );
};

export default Contact;
