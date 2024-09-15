// @ts-nocheck
import { expect, test, vi } from "vitest";

import { action } from "~/routes/graphiql";

global.fetch = vi.fn();

test("returns error for invalid input", async () => {
  const request = new Request("http://localhost", {
    method: "POST",
    body: new URLSearchParams({
      endpoint: "",
      query: "",
    }),
  });

  const response = await action({
    request,
    params: {},
    context: {},
  });

  if (response instanceof Response) {
    const result = await response.json();
    expect(response.status).toBe(400);
    expect(result.error).toBe("Invalid input");
  }
});

test("sends valid GraphQL request", async () => {
  (global.fetch as vi.Mock).mockResolvedValue({
    ok: true,
    json: async () => ({
      data: { message: "Success" },
    }),
  } as Response);

  const request = new Request("http://localhost", {
    method: "POST",
    body: new URLSearchParams({
      endpoint: "http://mock-endpoint.com/graphql",
      query: "{ testQuery }",
    }),
  });

  const response = await action({
    request,
    params: {},
    context: {},
  });

  if (response instanceof Response) {
    const result = await response.json();
    expect(response.status).toBe(200);
    expect(result.response.data).toEqual({ message: "Success" });
  }
});

test("handles GraphQL errors", async () => {
  (global.fetch as vi.Mock).mockResolvedValue({
    ok: false,
    json: async () => ({
      errors: [{ message: "GraphQL Error" }],
    }),
  } as Response);

  const request = new Request("http://localhost", {
    method: "POST",
    body: new URLSearchParams({
      endpoint: "http://mock-endpoint.com/graphql",
      query: "{ testQuery }",
    }),
  });

  const response = await action({
    request,
    params: {},
    context: {},
  });

  if (response instanceof Response) {
    const result = await response.json();
    expect(response.status).toBe(500);
    expect(result.error).toBe("GraphQL Error");
  }
});
