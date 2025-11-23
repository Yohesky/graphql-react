import { gql } from "graphql-request";

export const episodes = gql`
  query ($page: Int) {
    episodes(page: $page) {
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
      info {
        next
      }
    }
  }
`;

export const characters = gql`
  query ($page: Int) {
    characters(page: $page) {
      results {
        id
        name
        image
        species
        status
      }
      info {
        next
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
