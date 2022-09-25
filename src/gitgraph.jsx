import { Box, Center, Heading, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Gitgraph = () => {

    return (
        <>
            <Box fontWeight={"bold"} >
                <Center p={"10"}>
                    <Heading size={"md"} color={useColorModeValue("black", "white")}>My GitHub Calender</Heading>
                </Center>

                <Githubcalendar
                    username="jstgrowup"
                    blockSize={15}
                    blockMargin={5}
                    fontSize={16}
                    color={"green"}
                />
            </Box>
        </>
    );
};