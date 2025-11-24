import { useInfiniteQuery } from "@tanstack/react-query";
import { TrackBuilder } from "../utils/TrackBuilder";

interface UseConfigProps {
  queryKey: string[];
  queryFn: Function;
  staleTime: number;
  initialPageParam: number;
  mapper: Function;
  getNextPageParam: Function;
  status?: string;
}

export const useInfiniteScroll = ({
  queryKey,
  queryFn,
  staleTime,
  initialPageParam,
  getNextPageParam,
  mapper,
  status,
}: UseConfigProps) => {
  const initTracks = new TrackBuilder(`/characters/${status}`)
    .setLocation("colombia")
    .setTime(Date.now())
    .setView("characters");

  const {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    refetch,
    fetchNextPage,
  } = useInfiniteQuery({
    queryKey: [...queryKey, status],
    queryFn: ({ pageParam = 1 }) => {
      const clonedTracks = initTracks.clone();
      clonedTracks.setAddiniotalProperty(
        "action",
        pageParam === 1 ? "init_load" : "load_more"
      );
      console.log("🚀 ~ useInfiniteScroll ~ clonedTracks:", clonedTracks);
      return queryFn({ pageParam, status });
    },
    staleTime,
    initialPageParam,
    getNextPageParam: (data) => getNextPageParam(data),
    select: (data) => mapper(data),
  });

  return {
    isLoading,
    isError,
    error,
    data,
    isFetching,
    fetchNextPage,
    refetch,
  };
};
