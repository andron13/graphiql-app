//app/routes/api/fetch.ts
import { json } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import { cors } from "remix-utils/cors";

export const loader: LoaderFunction = async ({ request }) => {
  const url = new URL(request.url);
  console.log({ url });

  const endpoint = url.searchParams.get("endpoint");
  console.log({ endpoint });

  if (!endpoint) {
    return json({ error: "Endpoint is required" }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint);
    // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    console.log({ response });
    if (!response.ok) {
      throw new Response("Failed to fetch data", { status: response.status });
    }
    const data = await response.json();
    const jsonResponse = json(data);
    console.log("#### work ####");
    // Настройка CORS
    return cors(request, jsonResponse, {
      origin: "*", // Разрешить все источники
      methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "HEAD"], // Разрешенные методы
      allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"], // Разрешенные заголовки
      credentials: true, // Разрешить отправку учетных данных
    });
  } catch (error) {
    return json({ error: "Failed to fetch data" }, { status: 500 });
  }
};
