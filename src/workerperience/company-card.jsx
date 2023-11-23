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
}) {
  return (
    <SimpleGrid w="100%" columns={[1, 1, 2, 2]}>
      <Box w="25%">
        <Image h={"full"} w={"full"} src={img} rounded="md" />
      </Box>
      <Flex
        color="blackAlpha.900"
        fontSize={"md"}
        fontStyle={"sans-serif"}
        fontWeight={"500"}
        direction={"column"}
      >
        <Heading color="black" fontSize="xl">
          {name}
        </Heading>
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
    </SimpleGrid>
  );
}

export default CompanyCard;
