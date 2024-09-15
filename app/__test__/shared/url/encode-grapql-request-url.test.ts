//@ts-nocheck
import { describe, expect, it } from "vitest";

import { FormValuesGraphql } from "~/shared/types";
import { encodeRequestUrl } from "~/shared/url";

describe("encodeRequestUrl", () => {
  it.skip("should encode request URL correctly", () => {
    const data: FormValuesGraphql = {
      method: "POST",
      endpoint: "api/getData",
      query: "query { users { name } }",
      variables: { userId: 1 },
      headers: [
        { key: "Authorization", value: "Bearer token" },
        { key: "Content-Type", value: "application/json" },
      ],
    };

    const result = encodeRequestUrl(data);

    const expectedUrl =
      "/POST/" +
      encodeURIComponent(btoa("api/getData")) +
      "/" +
      encodeURIComponent(btoa("query { users { name } }")) +
      "/" +
      encodeURIComponent(btoa(JSON.stringify({ userId: 1 }))) +
      "?Authorization=Bearer%20token&Content-Type=application%2Fjson";

    expect(result).toBe(expectedUrl);
  });

  it("should return empty string if method or endpoint is missing", () => {
    const data: FormValuesGraphql = {
      method: "",
      endpoint: "api/getData",
      query: "query { users { name } }",
      variables: { userId: 1 },
      headers: [],
    };

    const result = encodeRequestUrl(data);

    expect(result).toBe("");
  });

  it("should handle empty data gracefully", () => {
    const data: FormValuesGraphql = {
      method: "",
      endpoint: "",
      query: "",
      variables: undefined,
      headers: [],
    };

    const result = encodeRequestUrl(data);

    expect(result).toBe("");
  });
});
