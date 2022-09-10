import React from "react";
import {
  Box,

  Container,
  Link,
  HStack,
  Stack,
  useColorModeValue,

} from "@chakra-ui/react";



 

const Footer = () => {
  return (
    <Box
      bg={useColorModeValue("gray.50", "gray.900")}
      color={useColorModeValue("gray.700", "gray.200")}
    >
      <Container
        as={Stack}
        maxW={"6xl"}
        py={4}
        spacing={4}
        justify={"center"}
        align={"center"}
      >
        <HStack spacing={8} alignItems={"center"}>
          <Box
            bgGradient="linear(to-r, #EC9F05, #FF4E00)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            fontFamily="sans-serif"
          >
            Subham Dey
          </Box>
          <HStack as={"nav"} spacing={4} display={{ base: "none", md: "flex" }}>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#"}
            >
              Home
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#about"}
            >
              About
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#projects"}
            >
              Projects
            </Link>
            <Link
              px={2}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              py={1}
              rounded={"md"}
              _hover={{
                textDecoration: "none",
                bg: useColorModeValue("gray.200", "gray.700"),
              }}
              href={"#contact"}
            >
              Contact
            </Link>
          </HStack>
        </HStack>
      </Container>

      <div className="sticky-social">
        <ul className="social">
          <li className="youtube">
            <Link href="https://www.youtube.com/channel/UCKqkhUqz3n1v-9wOGOI6nxQ">
              <i className="fa fa-youtube" aria-hidden="true"></i>
            </Link>
          </li>
          <li className="git">
            <Link href="https://github.com/jstgrowup">
              <i className="fa fa-github" aria-hidden="true"></i>
            </Link>
          </li>

          <li className="linked">
            <Link href="https://www.linkedin.com/in/subham-dey4021/">
              <i className="fa fa-linkedin" aria-hidden="true"></i>
            </Link>
          </li>
        </ul>
      </div>
    </Box>
  );
};

export default Footer;
