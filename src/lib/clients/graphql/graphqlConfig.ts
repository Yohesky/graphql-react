import { GraphQLClient } from "graphql-request";
import API from "../../../constants/API.json";
export const graphqlClient = new GraphQLClient(API.BASE_URL, {
  headers: {},
});
