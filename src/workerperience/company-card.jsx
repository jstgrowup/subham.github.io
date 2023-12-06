import {
  Box,
  Center,
  Flex,
  Heading,
  Image,
  Text,
  useColorModeValue,
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
    <Flex
      direction={["column", "column", "row", "row"]}
      color={useColorModeValue("black", "white")}
    >
      <Box
        w={"27%"}
        display={"flex"}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Image h="min" w={"full"} src={img} rounded="md" />
      </Box>
      <Flex
        color="blackAlpha.900"
        fontSize={"md"}
        fontStyle={"sans-serif"}
        fontWeight={"500"}
        direction={"column"}
        gap={"1"}
        w={["100%", "100%", "75%", "75%"]}
      >
        <Heading color="black" fontSize="3xl">
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
        <Center py={"2"}>
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
