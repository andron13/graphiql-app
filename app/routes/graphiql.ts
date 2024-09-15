import { json } from "@remix-run/node";
import type { ActionFunction } from "@remix-run/node";

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const endpoint = formData.get("endpoint");
  const query = formData.get("query");

  const variables: Record<string, string> = {};

  formData.getAll("variables")?.forEach((variable) => {
    const [key, value] = (variable as string).split(":");
    if (key && value) {
      variables[key.trim()] = value.trim();
    }
  });

  const headers: Record<string, string> = {};
  formData.getAll("headers")?.forEach((header) => {
    const [key, value] = (header as string).split(":");
    if (key && value) {
      headers[key.trim()] = value.trim();
    }
  });

  if (typeof endpoint !== "string" || !endpoint || typeof query !== "string") {
    return json({ error: "Invalid input" }, { status: 400 });
  }

  const fetchOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      ...headers,
    },
    body: JSON.stringify({
      query,
      variables: variables ? JSON.stringify(variables) : {},
    }),
  };

  try {
    const response = await fetch(endpoint, fetchOptions);
    const data = await response.json();

    if (!response.ok || data.errors) {
      throw new Error(`${data.errors[0].message}`);
    }

    return json({
      status: response.status,
      response: data,
    });
  } catch (error) {
    let errorMessage = "Something went wrong";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return json({ error: errorMessage }, { status: 500 });
  }
};
