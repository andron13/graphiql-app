import { FormValues } from "~/shared/types";

export const sendRequest = async (formValues: FormValues) => {
  try {
    const { method, endpoint, headers, body } = formValues;
    const formattedHeaders: HeadersInit = headers.reduce(
      (acc, { key, value }) => ({ ...acc, [key]: value }),
      {},
    );

    const fetchOptions: RequestInit = {
      method,
      headers: {
        "Content-Type": "application/json",
        ...formattedHeaders,
      },
      body: method !== "GET" ? JSON.stringify(body) : undefined,
    };

    const response = await fetch(endpoint, fetchOptions);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();

    return {
      status: response.status,
      response: data,
      error: null,
      loading: false,
    };
  } catch (error) {
    return {
      status: undefined,
      response: null,
      error,
      loading: false,
    };
  }
};
