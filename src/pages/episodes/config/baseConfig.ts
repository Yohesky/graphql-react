import type { InfiniteData } from "@tanstack/react-query";
import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import type { EpisodesResponse } from "../interfaces/Episodes";
import { episodeMapper } from "../mappers/episode.mapper";

const queryClient = new GraphQLClient();
const httpClient = new HttpClient(queryClient);

export const baseConfig = {
  queryKey: ["episodes"],
  staleTime: 1000 * 60 * 5,
  initialPageParam: 1,
  queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
    httpClient.get<EpisodesResponse>("episodes-query", {
      page: Number(pageParam),
    }),
  getNextPageParam: (lastPage: EpisodesResponse) => lastPage.episodes.info.next,
  mapper: (data: InfiniteData<EpisodesResponse, number>) => {
    const episodes = data.pages.map((page) => page.episodes.results).flat();
    const mappedData = episodeMapper(episodes);
    return mappedData;
  },
};
