import React from "react";

import {
  Box,
  HStack,
  Flex,
  Link,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        bg={useColorModeValue("gray.100", "gray.900")}
        px={4}
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <HStack spacing={8}>
          <Box
            bgGradient="linear(to-r, #EC9F05, #FF4E00)"
            bgClip="text"
            fontSize="2xl"
            fontWeight="extrabold"
            fontFamily="sans-serif"
          >
            Subham Dey
          </Box>
          <HStack
            spacing={4}
            display={{ base: "none", md: "flex" }}
            style={{ cursor: "pointer", fontWeight: "bold" }}
          >
            {/* <Link
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
            </Link> */}
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
              Skills
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
        <Flex alignItems={"center"}>
          <Stack direction={"row"} spacing={7}>
            <Button onClick={toggleColorMode}>
              {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Box pb={4} display={{ md: "none" }}>
        <Stack spacing={4}>
          <Link
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
            }}
          >
            Home
          </Link>
          <Link
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
            }}
          >
            About
          </Link>
          <Link
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
            }}
          >
            Projects
          </Link>
          <Link
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
            }}
          >
            Blog
          </Link>
          <Link
            py={1}
            rounded={"md"}
            _hover={{
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </Stack>
      </Box>
    </>
  );
};

export default Navbar;
