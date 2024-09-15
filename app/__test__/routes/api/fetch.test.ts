import { describe, expect, it, vi } from "vitest";

import { loader } from "~/routes/api/fetch";

describe("loader", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("returns 400 if no endpoint is provided", async () => {
    const mockRequest = new Request("http://localhost?endpoint=");

    const response = (await loader({
      request: mockRequest,
      params: {},
      context: {},
    })) as Response;

    expect(response.status).toBe(400);
    const responseBody = await response.json();
    expect(responseBody.error).toBe("Endpoint is required");
  });

  it("returns 500 if fetching data fails", async () => {
    global.fetch = vi.fn().mockRejectedValue(new Error("Network error"));

    const mockRequest = new Request(
      "http://localhost?endpoint=https://example.com/api/data",
    );

    const response = (await loader({
      request: mockRequest,
      params: {},
      context: {},
    })) as Response;

    expect(response).not.toBeNull();

    if (response) {
      const responseBody = await response.json();
      expect(response.status).toBe(500);
      expect(responseBody.error).toBe("Failed to fetch data");
    }
  });

  it("returns data if fetch is successful", async () => {
    const mockData = { key: "value" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const mockRequest = new Request(
      "http://localhost?endpoint=https://example.com/api/data",
    );

    const response = (await loader({
      request: mockRequest,
      params: {},
      context: {},
    })) as Response;

    expect(response).not.toBeNull();

    if (response) {
      const responseBody = await response.json();
      expect(response.status).toBe(200);
      expect(responseBody).toEqual(mockData);
    }
  });

  it.skip("handles non-ok response from fetch", async () => {
    global.fetch = vi.fn().mockResolvedValue({
      ok: false,
      status: 404,
      json: async () => ({ error: "Not Found" }),
    });

    const mockRequest = new Request(
      "http://localhost?endpoint=https://example.com/api/data",
    );

    const response = (await loader({
      request: mockRequest,
      params: {},
      context: {},
    })) as Response;

    expect(response).not.toBeNull();

    if (response) {
      const responseBody = await response.json();
      expect(response.status).toBe(404);
      expect(responseBody.error).toBe("Failed to fetch data");
    }
  });

  it.skip("returns CORS headers in response", async () => {
    const mockData = { key: "value" };
    global.fetch = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const mockRequest = new Request(
      "http://localhost?endpoint=https://example.com/api/data",
    );

    const response = (await loader({
      request: mockRequest,
      params: {},
      context: {},
    })) as Response;

    expect(response).not.toBeNull();

    if (response) {
      const corsHeaders = response.headers.get("Access-Control-Allow-Origin");
      expect(corsHeaders).toBe("*");
    }
  });
});
