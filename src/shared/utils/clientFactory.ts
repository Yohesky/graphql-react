import { AxiosClient } from "../../lib/clients/axios/axiosClient";
import { GraphQLClient } from "../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../lib/HttpClient";

export function createAxiosClient() {
  const axios = new AxiosClient();
  return new HttpClient(axios);
}

export function createGraphClient() {
  const graphQL = new GraphQLClient();
  return new HttpClient(graphQL);
}

export const clientFactory = {
  ["axios-client"]: createAxiosClient,
  ["graph-client"]: createGraphClient,
};
