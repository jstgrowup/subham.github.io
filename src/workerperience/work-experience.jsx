import React from "react";

import institutions from "./company-data.json";
import CompanyCard from "./company-card";

import {
  Center,
  Container,
  Heading,
  useColorModeValue,
} from "@chakra-ui/react";
function Workexperience() {
  return (
    <>
      <Center>
        <Heading color={useColorModeValue("black", "white")} size="lg">
          Experience
        </Heading>
      </Center>
      <Container
        mt="5"
        maxW={"5xl"}
        isLazy
        boxShadow="dark-lg"
        borderRadius="md"
      >
        {institutions.institutions.map(
          ({ name, role, address, img, responsibilities, learn, interval }) => (
            <CompanyCard
              name={name}
              img={img}
              address={address}
              responsibilities={responsibilities}
              learn={learn}
              interval={interval}
              role={role}
            />
          )
        )}
      </Container>
    </>
  );
}

export default Workexperience;
