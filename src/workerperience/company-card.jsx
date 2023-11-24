import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import { ListItem, UnorderedList } from "@chakra-ui/react";
function CompanyCard({
  name,
  address,
  img,
  responsibilities,
  learn,
  interval,
  role,
}) {
  return (
    <Flex direction={["column", "column", "row", "row"]}>
      <Box w={"25%"}>
        <Image h={"full"} w={"full"} src={img} rounded="md" />
      </Box>
      <Flex
        color="blackAlpha.900"
        fontSize={"md"}
        fontStyle={"sans-serif"}
        fontWeight={"500"}
        direction={"column"}
        w={["100%", "100%", "75%", "75%"]}
      >
        <Heading color="black" fontSize="2xl">
          {name}
        </Heading>
        <Text>{role}</Text>
        <Text>{interval}</Text>
        <Text>{address}</Text>
        <Text fontWeight="bold">Responsibilities</Text>
        <UnorderedList>
          {responsibilities.map((item) => {
            return <ListItem>{item}</ListItem>;
          })}
        </UnorderedList>
        <Center py={"4"}>
          <Flex gap={["4", "4", "10", "10"]} flexWrap="wrap">
            {learn.map(({ title, logo }) => {
              return <Image boxSize="16" src={logo} key={title} />;
            })}
          </Flex>
        </Center>
      </Flex>
    </Flex>
  );
}

export default CompanyCard;
