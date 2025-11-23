import { useInfiniteQuery } from "@tanstack/react-query";

interface UseConfigProps {
  queryKey: string[];
  queryFn: Function;
  staleTime: number;
  initialPageParam: number;
  mapper: Function;
  getNextPageParam: Function;
}

export const useInfiniteScroll = ({
  queryKey,
  queryFn,
  staleTime,
  initialPageParam,
  getNextPageParam,
  mapper,
}: UseConfigProps) => {
  const { isLoading, isError, error, data, isFetching, fetchNextPage } =
    useInfiniteQuery({
      queryKey,
      queryFn: ({ pageParam = 1 }) => {
        return queryFn({ pageParam });
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
  };
};
