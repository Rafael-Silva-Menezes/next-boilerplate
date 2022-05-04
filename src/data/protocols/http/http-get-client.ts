import { RemoteCharactersResultModel } from "../../models/remote-characters-result-model";

export interface HttpGetClient {
  get(url: string): Promise<RemoteCharactersResultModel>;
}
