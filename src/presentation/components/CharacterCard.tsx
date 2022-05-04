import { Flex, Img, Text } from "@chakra-ui/react";
import { CharacterModel } from "../../domain/models/characterModel";

export default function CharacterCard({
  characterData,
}: {
  characterData: CharacterModel;
}) {
  return (
    <Flex
      w="12vw"
      h="12vw"
      bg="#ededed"
      borderRadius="brand.md"
      direction="column"
      m="5px"
      position="relative"
    >
      <Img
        src={characterData.image}
        borderRadius="brand.circular"
        w="70%"
        m="10px 15% 0px 15%"
      />
      <Text
        textAlign="center"
        w="100%"
        fontSize="brand.sm"
        color="brand.primaryDark"
        fontWeight="bold"
        position="absolute"
        bottom="0"
      >
        {characterData.name}
      </Text>
    </Flex>
  );
}
