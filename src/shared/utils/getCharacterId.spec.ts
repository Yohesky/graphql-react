import { describe, it, expect } from "vitest";

import { getCharacterId } from "./getCharacterId";

describe("getCharacterId", () => {
  it("should extract the last segment of the URL as the ID", () => {
    const url = "https://api.example.com/characters/123";
    const result = getCharacterId(url);
    expect(result).toBe("123");
  });

  it("should work when the URL ends with a trailing slash", () => {
    const url = "https://api.example.com/characters/456/";
    const result = getCharacterId(url);
    expect(result).toBe("456");
  });

  it("should work with short relative URLs", () => {
    const url = "characters/789";
    const result = getCharacterId(url);
    expect(result).toBe("789");
  });

  it("should return an empty string when the URL is empty", () => {
    const url = "";
    const result = getCharacterId(url);
    expect(result).toBe("");
  });

  it("should handle URLs that contain query parameters (when pre-processed)", () => {
    const url = "https://api.com/characters/999?test=123";
    const cleaned = url.split("?")[0];
    const result = getCharacterId(cleaned);
    expect(result).toBe("999");
  });
});
