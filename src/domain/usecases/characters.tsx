import { RemoteCharactersResultModel } from "../../data/models/remote-characters-result-model";

export interface CharactersHandler {
  get: () => Promise<RemoteCharactersResultModel>;
}
