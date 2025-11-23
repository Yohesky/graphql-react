import type { InfiniteData } from "@tanstack/react-query";
import { GraphQLClient } from "../../../lib/clients/graphql/GraphQLClient";
import { HttpClient } from "../../../lib/HttpClient";
import type { CharactersResponse } from "../interfaces/Characters";

const queryClient = new GraphQLClient();
const httpClient = new HttpClient(queryClient);

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
    return httpClient.get<CharactersResponse>("characters-query", params);
  },
  staleTime: 1000 * 60 * 5,
  initialPageParam: 1,
  getNextPageParam: (lastPage: CharactersResponse) =>
    lastPage.characters.info.next,
  mapper: (data: InfiniteData<CharactersResponse, number>) => {
    return data.pages.map((page) => page.characters.results).flat();
  },
};
