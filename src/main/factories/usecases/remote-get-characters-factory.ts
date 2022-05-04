import { makeAxiosHttpClient } from "../http/axios-http-client-factory";
import { RemoteGetCharacters } from "../../../data/usecases/characters/remote-get-characters";
import { CharactersHandler } from "../../../domain/usecases/characters";

export const makeRemoteCharactersHandler = (): CharactersHandler =>
  new RemoteGetCharacters(
    "https://rickandmortyapi.com/api/character",
    makeAxiosHttpClient()
  );
