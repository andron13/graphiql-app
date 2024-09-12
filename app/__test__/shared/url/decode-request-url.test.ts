import { describe, expect, it } from "vitest";

import { RestRequestType } from "~/shared/types";
import { decodeRequestUrl } from "~/shared/url/decode-request-url";

describe("decodeRequestUrl", () => {
  it("decodes a valid encoded URL with method, endpoint, body, and headers", () => {
    const encodedUrl =
      "POST/c3VwZXJzZWNyZXQ=/dGVzdEJvZHk=?Authorization=Bearer%20token&Custom-Header=CustomValue";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("supersecret");
    expect(result.body).toBe("testBody");
    expect(result.headers).toEqual([
      { key: "Authorization", value: "Bearer token" },
      { key: "Custom-Header", value: "CustomValue" },
    ]);
  });

  it("decodes a URL with no body", () => {
    const encodedUrl = "GET/c29tZUVuZHBvaW50?Authorization=Bearer%20token";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.GET);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([
      { key: "Authorization", value: "Bearer token" },
    ]);
  });

  it("decodes a URL with no headers", () => {
    const encodedUrl = "POST/c29tZUVuZHBvaW50/dGVzdEJvZHk=";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("testBody");
    expect(result.headers).toEqual([]);
  });

  it("returns empty endpoint and body for invalid base64 strings", () => {
    const encodedUrl = "POST/invalidBase64/invalidBodyBase64";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([]);
  });

  it("handles URLs with no queryParams correctly", () => {
    const encodedUrl = "GET/c29tZUVuZHBvaW50";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.GET);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([]);
  });
});
