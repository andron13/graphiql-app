import { describe, expect, it } from "vitest";

import { RestRequestType, UrlencodedFormData } from "~/shared/types";
import { encodeRequestUrl } from "~/shared/url/encode-request-url";

describe("encodeRequestUrl", () => {
  it("encodes request data into a URL string with method, endpoint, body, and headers", () => {
    const requestData: UrlencodedFormData = {
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
    const requestData: UrlencodedFormData = {
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
    const requestData: UrlencodedFormData = {
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
    const requestDataMissingMethod: UrlencodedFormData = {
      method: "" as RestRequestType,
      endpoint: "https://example.com/api/missing",
      body: "",
      headers: [],
    };

    const resultMissingMethod = encodeRequestUrl(requestDataMissingMethod);
    expect(resultMissingMethod).toBe("");

    const requestDataMissingEndpoint: UrlencodedFormData = {
      method: RestRequestType.DELETE,
      endpoint: "",
      body: "",
      headers: [],
    };

    const resultMissingEndpoint = encodeRequestUrl(requestDataMissingEndpoint);
    expect(resultMissingEndpoint).toBe("");
  });

  it.skip("handles invalid Base64 encoding gracefully", () => {
    const invalidRequestData: UrlencodedFormData = {
      method: RestRequestType.PATCH,
      endpoint: "invalid_url_with_special_#_characters",
      body: "",
      headers: [],
    };

    const result = encodeRequestUrl(invalidRequestData);

    expect(result).toBe(
      "/PATCH/aW52YWxpZF91cmxfd2l0aF9zcGVjaWFsXyUzRF9jaGFyYWN0ZXJz",
    );
  });
});
