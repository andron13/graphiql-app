import { useState } from "react";

import { FormValues } from "~/shared/types";

export interface FetchResponse {
  status: number;
  body: string;
}

export function useFetchRequest() {
  const [response, setResponse] = useState<FetchResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const sendRequest = async (params: FormValues) => {
    setLoading(true);
    setError(null);

    try {
      const { method, endpoint, headers, body } = params;
      const fetchHeaders: Record<string, string> = headers.reduce(
        (acc, { key, value }) => {
          acc[key] = value;
          return acc;
        },
        {} as Record<string, string>,
      );

      const fetchOptions: RequestInit = {
        method,
        headers: fetchHeaders,
        body: method === "GET" ? undefined : body,
      };

      console.log("Sending request with options:", {
        method,
        endpoint,
        headers: fetchHeaders,
        body,
      });

      const fetchResponse = await fetch(endpoint, fetchOptions);

      console.log("Received response:", {
        status: fetchResponse.status,
        statusText: fetchResponse.statusText,
      });

      if (!fetchResponse.ok) {
        throw new Error(`HTTP error! Status: ${fetchResponse.status}`);
      }

      const responseBody = await fetchResponse.text();
      console.log("Response body:", responseBody);

      setResponse({ status: fetchResponse.status, body: responseBody });
    } catch (error) {
      console.error("Fetch error:", error);
      setError(error as Error);
    } finally {
      setLoading(false);
    }
  };

  return { response, error, loading, sendRequest };
}
