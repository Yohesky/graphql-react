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

export const characters = gql`
  query {
    characters(page: 1) {
      results {
        id
        name
        image
        species
        status
      }
    }
  }
`;

export const characterById = gql`
  query ($id: ID!) {
    character(id: $id) {
      id
      name
      image
      species
      status
      origin {
        name
        dimension
      }
      episode {
        name
      }
      location {
        name
        dimension
      }
    }
  }
`;

export const queryDictionary = {
  ["episodes-query"]: episodes,
  ["characters-query"]: characters,
  ["characterById-query"]: characterById,
};
