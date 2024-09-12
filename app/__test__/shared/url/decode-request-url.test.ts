import { describe, expect, it } from "vitest";

import { RestRequestType } from "~/shared/types";
import { decodeRequestUrl } from "~/shared/url/decode-request-url";

describe("decodeRequestUrl", () => {
  it("decodes a valid encoded URL with method, endpoint, body, headers, and queries", () => {
    const encodedUrl =
      "POST/c3VwZXJzZWNyZXQ=/dGVzdEJvZHk=?Authorization=Bearer%20token&Custom-Header=CustomValue&query0=firstQuery&query1=secondQuery";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("supersecret");
    expect(result.body).toBe("testBody");
    expect(result.headers).toEqual([
      { key: "Authorization", value: "Bearer token" },
      { key: "Custom-Header", value: "CustomValue" },
    ]);
    expect(result.query).toEqual([["firstQuery"], ["secondQuery"]]);
  });

  it("decodes a URL with no body", () => {
    const encodedUrl =
      "GET/c29tZUVuZHBvaW50?Authorization=Bearer%20token&query0=queryExample";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.GET);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([
      { key: "Authorization", value: "Bearer token" },
    ]);
    expect(result.query).toEqual([["queryExample"]]);
  });

  it("decodes a URL with no headers but with queries", () => {
    const encodedUrl = "POST/c29tZUVuZHBvaW50/dGVzdEJvZHk=?query0=onlyQuery";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("testBody");
    expect(result.headers).toEqual([]);
    expect(result.query).toEqual([["onlyQuery"]]);
  });

  it("returns empty endpoint and body for invalid base64 strings", () => {
    const encodedUrl = "POST/invalidBase64/invalidBodyBase64";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.POST);
    expect(result.endpoint).toBe("");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([]);
    expect(result.query).toBeUndefined();
  });

  it("handles URLs with no queryParams and no queries correctly", () => {
    const encodedUrl = "GET/c29tZUVuZHBvaW50";

    const result = decodeRequestUrl(encodedUrl);

    expect(result.method).toBe(RestRequestType.GET);
    expect(result.endpoint).toBe("someEndpoint");
    expect(result.body).toBe("");
    expect(result.headers).toEqual([]);
    expect(result.query).toBeUndefined();
  });
});
