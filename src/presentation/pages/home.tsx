import { Flex, Text } from "@chakra-ui/react";
import { CharacterModel } from "../../domain/models/characterModel";
import CharacterCard from "../components/CharacterCard";

export default function Home({ characters }: { characters: CharacterModel[] }) {
  return (
    <Flex w="100%" h="100vh" bg="product.pjDark" direction="column" p="0px 5%">
      <Text
        textAlign="center"
        w="100%"
        fontSize="brand.xxxl"
        color="brand.secondaryLight"
        fontWeight="bold"
        mb="50px"
      >
        Top 20 Rick & Morty Characters
      </Text>
      <Flex w="100%" alignItems="center" justifyContent="center" wrap="wrap">
        {characters?.map((character) => (
          <CharacterCard characterData={character} key={character.id} />
        ))}
      </Flex>
    </Flex>
  );
}
