import { useQuery } from "@tanstack/react-query";
import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import { episodeMapper } from "../mappers/episode.mapper";
import type { EpisodesResponse } from "../interfaces/Episodes";

const queryClient = new GraphQLClient();
const httpClient = new HttpClient(queryClient);

export const useEpisodes = () => {
  const { isLoading, isError, error, data, isFetching } = useQuery({
    queryKey: ["episodes"],
    queryFn: () => httpClient.get<EpisodesResponse>("episodes-query"),
    select: (data) => {
      const mappedData = episodeMapper(data.episodes.results);
      return mappedData;
    },
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
