import { Box } from "@chakra-ui/react";
import React from "react";
import Githubcalendar from "react-github-calendar";
export const Gitgraph = () => {

    return (
        <>
            <Box fontWeight={"bold"} >

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