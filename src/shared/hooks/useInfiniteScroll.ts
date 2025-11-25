import { useInfiniteQuery } from "@tanstack/react-query";

interface UseConfigProps {
  queryKey: string[];
  queryFn: Function;
  staleTime: number;
  initialPageParam: number;
  mapper: Function;
  getNextPageParam: Function;
  status?: string;
  onTrack?: (context: { pageParam: number; status?: string }) => void;
}

export const useInfiniteScroll = ({
  queryKey,
  queryFn,
  staleTime,
  initialPageParam,
  getNextPageParam,
  mapper,
  status,
  onTrack,
}: UseConfigProps) => {
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
      onTrack?.({ pageParam });
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
