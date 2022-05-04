import axios from "axios";
import { HttpGetClient } from "../../data/protocols/http/http-get-client";

export class AxiosHttpClient implements HttpGetClient {
  async get(url: string) {
    const response = await axios.get(url);

    return response.data;
  }
}
