import { HttpGetClient } from "../../protocols/http/http-get-client";
import { CharactersHandler } from "../../../domain/usecases/characters";

export class RemoteGetCharacters implements CharactersHandler {
  constructor(
    private readonly url: string,
    private readonly httpGetClient: HttpGetClient
  ) {}

  async get(): Promise<any> {
    const result = await this.httpGetClient.get(this.url);

    return result;
  }
}
