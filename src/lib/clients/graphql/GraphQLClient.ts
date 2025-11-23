import type { HttpClientInterface } from "../../HttpClientInterface";
import { graphqlClient } from "./graphqlConfig";
import { queryDictionary } from "./querys";

export class GraphQLClient implements HttpClientInterface {
  async get<T>(
    url: keyof typeof queryDictionary,
    params?: Record<string, string>
  ): Promise<T> {
    const query = queryDictionary[url];
    const data = await graphqlClient.request(query, params);
    return data as T;
  }
}
