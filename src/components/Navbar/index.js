import React from "react";

import {
  Box,
  HStack,
  Flex,
  Link,
  Button,
  IconButton,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const Navbar = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
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
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              style={{ cursor: "pointer", fontWeight: "bold" }}
            >
              {/* {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))} */}
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
          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "dark" ? <SunIcon /> : <MoonIcon />}
              </Button>
            </Stack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#"
                onClick={isOpen ? onClose : onOpen}
              >
                Home
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#about"
                onClick={isOpen ? onClose : onOpen}
              >
                About
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="#projects"
                onClick={isOpen ? onClose : onOpen}
              >
                Projects
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="blog"
                onClick={isOpen ? onClose : onOpen}
              >
                Blog
              </Link>
              <Link
                py={1}
                rounded={"md"}
                _hover={{
                  textDecoration: "none",
                }}
                href="contact"
                onClick={isOpen ? onClose : onOpen}
              >
                Contact
              </Link>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
