import { describe, expect, it } from "vitest";

import { FormValues, RestRequestType } from "~/shared/types";
import { encodeRequestUrl } from "~/shared/url/encode-request-url";

describe("encodeRequestUrl", () => {
  it("encodes request data into a URL string with method, endpoint, body, and headers", () => {
    const requestData: FormValues = {
      method: RestRequestType.POST,
      endpoint: "https://example.com/api/test",
      body: '{"key":"value"}',
      headers: [
        { key: "Authorization", value: "Bearer token" },
        { key: "Custom-Header", value: "CustomValue" },
      ],
    };

    const result = encodeRequestUrl(requestData);

    expect(result).toBe(
      "/POST/aHR0cHMlM0ElMkYlMkZleGFtcGxlLmNvbSUyRmFwaSUyRnRlc3Q=/JTdCJTIya2V5JTIyJTNBJTIydmFsdWUlMjIlN0Q=?Authorization=Bearer%20token&Custom-Header=CustomValue",
    );
  });

  it("encodes request data without body", () => {
    const requestData: FormValues = {
      method: RestRequestType.GET,
      endpoint: "https://example.com/api/data",
      body: "",
      headers: [{ key: "Authorization", value: "Bearer token" }],
    };

    const result = encodeRequestUrl(requestData);

    expect(result).toBe(
      "/GET/aHR0cHMlM0ElMkYlMkZleGFtcGxlLmNvbSUyRmFwaSUyRmRhdGE=?Authorization=Bearer%20token",
    );
  });

  it("encodes request data without headers", () => {
    const requestData: FormValues = {
      method: RestRequestType.PUT,
      endpoint: "https://example.com/api/update",
      body: '{"key":"value"}',
      headers: [],
    };

    const result = encodeRequestUrl(requestData);

    expect(result).toBe(
      "/PUT/aHR0cHMlM0ElMkYlMkZleGFtcGxlLmNvbSUyRmFwaSUyRnVwZGF0ZQ==/JTdCJTIya2V5JTIyJTNBJTIydmFsdWUlMjIlN0Q=",
    );
  });

  it("returns an empty string if method or endpoint is missing", () => {
    const requestDataMissingMethod: FormValues = {
      method: "" as RestRequestType,
      endpoint: "https://example.com/api/missing",
      body: "",
      headers: [],
    };

    const resultMissingMethod = encodeRequestUrl(requestDataMissingMethod);
    expect(resultMissingMethod).toBe("");

    const requestDataMissingEndpoint: FormValues = {
      method: RestRequestType.DELETE,
      endpoint: "",
      body: "",
      headers: [],
    };

    const resultMissingEndpoint = encodeRequestUrl(requestDataMissingEndpoint);
    expect(resultMissingEndpoint).toBe("");
  });
});
