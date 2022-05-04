import Home from "../presentation/pages/home";
import { makeRemoteCharactersHandler } from "../main/factories/usecases/remote-get-characters-factory";
import { CharacterModel } from "../domain/models/characterModel";

export async function getServerSideProps() {
  const remoteCharactersHandler = makeRemoteCharactersHandler();

  const data = await remoteCharactersHandler.get();
  const characters: CharacterModel[] = data.results;

  return { props: { characters } };
}

export default function makeHome({
  characters,
}: {
  characters: CharacterModel[];
}) {
  return <Home characters={characters} />;
}
