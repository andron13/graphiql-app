import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const endpoint = formData.get("endpoint");
  const query = formData.get("query");
  const variables = formData.get("variables");

  const headers: Record<string, string> = {};
  formData.getAll("headers").forEach((header) => {
    const [key, value] = (header as string).split(":");
    if (key && value) {
      headers[key.trim()] = value.trim();
    }
  });

  if (typeof endpoint !== "string" || !endpoint || typeof query !== "string") {
    return json({ error: "Invalid input" }, { status: 400 });
  }

  try {
    const response = await fetch(endpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        ...headers,
      },
      body: JSON.stringify({
        query,
        variables: variables ? JSON.parse(variables as string) : {},
      }),
    });

    const result = await response.json();
    return json(result);
  } catch (error) {
    return json({ error }, { status: 500 });
  }
};
