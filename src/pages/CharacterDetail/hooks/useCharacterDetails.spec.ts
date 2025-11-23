import { renderHook } from "@testing-library/react";
import { describe, it, expect, beforeEach, vi, type Mock } from "vitest";

vi.mock("@tanstack/react-query", () => ({
  useQuery: vi.fn(),
}));

vi.mock("../../../lib/clients/axios/axiosClient", () => {
  return {
    AxiosClient: vi.fn().mockImplementation(function () {
      return {};
    }),
  };
});

vi.mock("../../../lib/HttpClient", () => {
  return {
    HttpClient: vi.fn().mockImplementation(function () {
      return { get: vi.fn() };
    }),
  };
});

import { useCharacterDetails } from "./useCharacterDetails";
import { useQuery as mockUseQuery } from "@tanstack/react-query";
import { HttpClient } from "../../../lib/HttpClient";
import { AxiosClient } from "../../../lib/clients/axios/axiosClient";

describe("useCharacterDetails", () => {
  const characterId = "123";
  const mockGet = vi.fn();
  const mockData = {
    id: characterId,
    name: "Rick",
    origin: { name: "Earth" },
    location: { name: "Citadel" },
  };

  beforeEach(() => {
    vi.clearAllMocks();

    (AxiosClient as unknown as Mock).mockImplementation(function () {
      return {};
    });

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

    const { result } = renderHook(() => useCharacterDetails(characterId));

    expect(result.current.isLoading).toBe(false);
    expect(result.current.isError).toBe(false);
    expect(result.current.data).toEqual({ character: mockData });
    expect(result.current.refetch).toBeDefined();
  });

  it("should call httpClient.get with correct characterId", () => {
    (mockUseQuery as Mock).mockImplementation(({ queryFn }) => {
      queryFn();
      return {};
    });

    renderHook(() => useCharacterDetails(characterId));

    expect(mockGet).toHaveBeenCalledWith(`/character/${characterId}`);
  });
});
