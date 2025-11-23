import { useInfiniteQuery } from "@tanstack/react-query";

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
