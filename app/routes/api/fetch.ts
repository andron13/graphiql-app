import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { cors } from "remix-utils/cors";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);

  const endpoint = url.searchParams.get("endpoint");

  if (!endpoint) {
    return json({ error: "Endpoint is required" }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint);
    if (!response.ok) {
      throw new Response("Failed to fetch data", { status: response.status });
    }
    const data = await response.json();
    const jsonResponse = json(data);

    return cors(request, jsonResponse, {
      origin: "*",
      methods: [
        "GET",
        "POST",
        "PUT",
        "DELETE",
        "OPTIONS",
        "HEAD",
        "CONNECT",
        "TRACE",
        "PATCH",
        "GRAPHQL",
      ],
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"],
      credentials: true,
    });
  } catch (error) {
    return json({ error: "Failed to fetch data" }, { status: 500 });
  }
};
