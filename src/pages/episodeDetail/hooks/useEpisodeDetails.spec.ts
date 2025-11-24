import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, type Mock } from "vitest";
import { clientFactory } from "../../../shared/utils/clientFactory";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("../../../lib/HttpClient", () => {
  return {
    HttpClient: vi.fn().mockImplementation(function () {
      return { get: vi.fn() };
    }),
  };
});

import { useEpisodeDetails } from "./useEpisodeDetails";
import { useQuery as mockUseQuery } from "@tanstack/react-query";
import { HttpClient } from "../../../lib/HttpClient";

describe("useEpisodeDetails", () => {
  const episodeId = "123";
  const mockGet = vi.fn();
  const mockData = {
    id: episodeId,
    name: "Rick",
  };

  beforeEach(() => {
    vi.clearAllMocks();
    vi.spyOn(clientFactory["axios-client"], "get").mockImplementation(mockGet);

    (HttpClient as unknown as Mock).mockImplementation(function () {
      return {
        get: mockGet,
      };
    });
  });

  it("should return correct values from useQuery", () => {
    const mockResult = {
      isLoading: false,
      isError: false,
      error: null,
      data: { character: mockData },
      isFetching: false,
      refetch: vi.fn(),
    };
    (mockUseQuery as Mock).mockReturnValue(mockResult);

    const { result } = renderHook(() => useEpisodeDetails(episodeId));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ character: mockData });
    expect(result.current.refetch).toBeDefined();
  });

  it("should call httpClient.get with correct episodeId", async () => {
    mockGet.mockResolvedValue({ data: mockData });

    (mockUseQuery as Mock).mockImplementation(({ queryFn }) => {
      queryFn();
      return {};
    });

    await Promise.resolve();
    renderHook(() => useEpisodeDetails(episodeId));

    expect(mockGet).toHaveBeenCalledWith(`/episode/${episodeId}`);
  });
});
