import type { InfiniteData } from "@tanstack/react-query";
import type { CharactersResponse } from "../interfaces/Characters";
import { clientFactory } from "../../../shared/utils/clientFactory";

const graphClient = clientFactory["graph-client"];

export const baseConfig = {
  queryKey: ["characters"],
  queryFn: ({
    pageParam = 1,
    status,
  }: {
    pageParam: number;
    status: string;
  }) => {
    const params = {
      page: Number(pageParam),
    };

    if (status !== "all") {
      Object.assign(params, { status });
    }
    return graphClient.get<CharactersResponse>("characters-query", params);
  },
  staleTime: 1000 * 60 * 5,
  initialPageParam: 1,
  getNextPageParam: (lastPage: CharactersResponse) =>
    lastPage.characters.info.next,
  mapper: (data: InfiniteData<CharactersResponse, number>) => {
    return data.pages.map((page) => page.characters.results).flat();
  },
};
