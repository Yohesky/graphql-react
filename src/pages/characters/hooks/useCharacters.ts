import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import type { CharactersResponse } from "../interfaces/Characters";

const queryClient = new GraphQLClient();
const httpClient = new HttpClient(queryClient);

export const useCharacters = () => {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["characters"],
    queryFn: () => httpClient.get<CharactersResponse>("characters-query"),
    staleTime: 1000 * 60 * 5,
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
  };
};
