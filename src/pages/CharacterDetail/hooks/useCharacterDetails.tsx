import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import type { CharacterDetail } from "../interfaces/CharacterDetail";

const queryClient = new GraphQLClient();
const httpClient = new HttpClient(queryClient);

export const useCharacterDetails = (characterId: string) => {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["character", "details", characterId],
    queryFn: () =>
      httpClient.get<CharacterDetail>("characterById-query", {
        id: characterId,
      }),
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
