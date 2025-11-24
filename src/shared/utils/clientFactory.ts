import { axiosHttpClient } from "../../lib/clients/axios/axiosClient";
import { graphQLClient } from "../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../lib/HttpClient";

const axiosClientSingleton = new HttpClient(axiosHttpClient);
const graphClientSingleton = new HttpClient(graphQLClient);

export const clientFactory = {
  ["axios-client"]: axiosClientSingleton,
  ["graph-client"]: graphClientSingleton,
};
