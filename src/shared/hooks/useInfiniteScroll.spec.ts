import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, type Mock } from "vitest";
import { useInfiniteScroll } from "./useInfiniteScroll";

vi.mock("@tanstack/react-query", () => ({
  useInfiniteQuery: vi.fn(),
}));

import { useInfiniteQuery as mockUseInfiniteQuery } from "@tanstack/react-query";

describe("useInfiniteScroll", () => {
  const queryKey = ["episodes"];
  const queryFn = vi.fn();
  const staleTime = 1000;
  const initialPageParam = 1;
  const getNextPageParam = vi.fn();
  const mapper = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("should return correct values from useInfiniteQuery", () => {
    const mockResult = {
      isLoading: false,
      isError: false,
      error: null,
      data: ["test"],
      isFetching: false,
      fetchNextPage: vi.fn(),
      refetch: vi.fn(),
    };
    (mockUseInfiniteQuery as Mock).mockReturnValue(mockResult);

    const { result } = renderHook(() =>
      useInfiniteScroll({
        queryKey,
        queryFn,
        staleTime,
        initialPageParam,
        getNextPageParam,
        mapper,
      })
    );

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual(["test"]);
    expect(result.current.fetchNextPage).toBeDefined();
    expect(result.current.refetch).toBeDefined();
  });

    it("should include status in queryKey if provided", () => {
      const mockResult = {};
      (mockUseInfiniteQuery as Mock).mockReturnValue(mockResult);

      renderHook(() =>
        useInfiniteScroll({
          queryKey,
          queryFn,
          staleTime,
          initialPageParam,
          getNextPageParam,
          mapper,
          status: "active",
        })
      );

      expect(mockUseInfiniteQuery as Mock).toHaveBeenCalledWith(
        expect.objectContaining({
          queryKey: [...queryKey, "active"],
        })
      );
    });

    it("should call queryFn with correct params", () => {
      const mockResult = {};
      (mockUseInfiniteQuery as Mock).mockReturnValue(mockResult);

      renderHook(() =>
        useInfiniteScroll({
          queryKey,
          queryFn,
          staleTime,
          initialPageParam,
          getNextPageParam,
          mapper,
          status: "pending",
        })
      );

      const call = (mockUseInfiniteQuery as Mock).mock.calls[0][0];
      call.queryFn({ pageParam: 2 });

      expect(queryFn).toHaveBeenCalledWith({ pageParam: 2, status: "pending" });
    });

    it("should call getNextPageParam and mapper", () => {
      const mockResult = {};
      (mockUseInfiniteQuery as Mock).mockReturnValue(mockResult);

      renderHook(() =>
        useInfiniteScroll({
          queryKey,
          queryFn,
          staleTime,
          initialPageParam,
          getNextPageParam,
          mapper,
        })
      );

      const call = (mockUseInfiniteQuery as Mock).mock.calls[0][0];
      const dummyData = { pages: [] };

      call.getNextPageParam(dummyData);
      call.select(dummyData);

      expect(getNextPageParam).toHaveBeenCalledWith(dummyData);
      expect(mapper).toHaveBeenCalledWith(dummyData);
    });

    it("should handle error and loading states", () => {
      const mockResult = {
        isLoading: true,
        isError: true,
        error: new Error("Test error"),
        data: null,
        isFetching: false,
        fetchNextPage: vi.fn(),
        refetch: vi.fn(),
      };
      (mockUseInfiniteQuery as Mock).mockReturnValue(mockResult);

      const { result } = renderHook(() =>
        useInfiniteScroll({
          queryKey,
          queryFn,
          staleTime,
          initialPageParam,
          getNextPageParam,
          mapper,
        })
      );

      expect(result.current.isLoading).toBe(true);
      expect(result.current.isError).toBe(true);
      expect(result.current.error).toEqual(new Error("Test error"));
      expect(result.current.data).toBeNull();
    });
});
