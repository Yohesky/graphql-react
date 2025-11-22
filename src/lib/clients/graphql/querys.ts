import { gql } from "graphql-request";

export const episodes = gql`
  query {
    episodes(page: 1) {
      results {
        id
        name
        episode
        characters {
          id
          name
          image
        }
      }
    }
  }
`;

export const queryDictionary = {
  ["episodes-query"]: episodes,
};
