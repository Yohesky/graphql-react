import type { InfiniteData } from "@tanstack/react-query";
import type { EpisodesResponse } from "../interfaces/Episodes";
import { episodeMapper } from "../mappers/episode.mapper";
import { clientFactory } from "../../../shared/utils/clientFactory";

const graphClient = clientFactory["graph-client"]();

export const baseConfig = {
  queryKey: ["episodes"],
  staleTime: 1000 * 60 * 5,
  initialPageParam: 1,
  queryFn: ({ pageParam = 1 }: { pageParam?: number }) =>
    graphClient.get<EpisodesResponse>("episodes-query", {
      page: Number(pageParam),
    }),
  getNextPageParam: (lastPage: EpisodesResponse) => lastPage.episodes.info.next,
  mapper: (data: InfiniteData<EpisodesResponse, number>) => {
    const episodes = data.pages.map((page) => page.episodes.results).flat();
    const mappedData = episodeMapper(episodes);
    return mappedData;
  },
};
