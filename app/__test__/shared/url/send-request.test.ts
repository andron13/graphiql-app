import { describe, expect, it, vi } from "vitest";

import { FormValues, RestRequestType } from "~/shared/types";
import { sendRequest } from "~/shared/url/send-request";

describe("sendRequest", () => {
  beforeEach(() => {
    vi.resetAllMocks();
  });

  it("sends a request with the correct method, headers, and body", async () => {
    const mockResponseData = { success: true };
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponseData),
      statusText: "OK",
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const formValues: FormValues = {
      method: RestRequestType.POST,
      endpoint: "/api/test",
      headers: [
        { key: "Authorization", value: "Bearer token" },
        { key: "Custom-Header", value: "CustomValue" },
      ],
      body: { key: "value" },
    };

    const result = await sendRequest(formValues);

    expect(global.fetch).toHaveBeenCalledWith("/api/test", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
        "Custom-Header": "CustomValue",
      },
      body: JSON.stringify({ key: "value" }),
    });

    expect(result.response).toEqual(mockResponseData);
    expect(result.error).toBeNull();
    expect(result.loading).toBe(false);
  });

  it("does not send a body with GET requests", async () => {
    const mockResponseData = { success: true };
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponseData),
      statusText: "OK",
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const formValues: FormValues = {
      method: RestRequestType.GET,
      endpoint: "/api/test",
      headers: [{ key: "Authorization", value: "Bearer token" }],
      body: null,
    };

    const result = await sendRequest(formValues);

    expect(global.fetch).toHaveBeenCalledWith("/api/test", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer token",
      },
      body: undefined,
    });

    expect(result.response).toEqual(mockResponseData);
    expect(result.error).toBeNull();
    expect(result.loading).toBe(false);
  });

  it("handles server errors correctly", async () => {
    const mockResponse = {
      ok: false,
      statusText: "Not Found",
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const formValues: FormValues = {
      method: RestRequestType.GET,
      endpoint: "/api/not-found",
      headers: [],
      body: null,
    };

    const result = await sendRequest(formValues);

    expect(global.fetch).toHaveBeenCalledWith("/api/not-found", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      body: undefined,
    });

    expect(result.response).toBeNull();
    expect(result.error).toBeInstanceOf(Error);
    expect(result.loading).toBe(false);
  });

  it("sends a request without headers if no headers are provided", async () => {
    const mockResponseData = { success: true };
    const mockResponse = {
      ok: true,
      json: vi.fn().mockResolvedValue(mockResponseData),
      statusText: "OK",
    };

    global.fetch = vi.fn().mockResolvedValue(mockResponse);

    const formValues: FormValues = {
      method: RestRequestType.POST,
      endpoint: "/api/no-headers",
      headers: [],
      body: { key: "value" },
    };

    const result = await sendRequest(formValues);

    expect(global.fetch).toHaveBeenCalledWith("/api/no-headers", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ key: "value" }),
    });

    expect(result.response).toEqual(mockResponseData);
    expect(result.error).toBeNull();
    expect(result.loading).toBe(false);
  });
});
