export const sendRequest = async ({
  method,
  endpoint,
  headers,
  body,
}: {
  method: string;
  endpoint: string;
  headers: Record<string, string>;
  body?: string;
}) => {
  try {
    const apiUrl = new URL("/api/fetch", window.location.origin);
    apiUrl.searchParams.set("endpoint", endpoint);

    console.log("Sending request to:", apiUrl.toString());
    console.log("Request Method:", method);
    console.log("Request Headers:", {
      ...headers,
      "Content-Type": "application/json",
    });
    console.log("Request Body:", body);

    const fetchOptions: RequestInit = {
      method,
      headers: {
        ...headers,
        "Content-Type": "application/json",
      },
      body: method === "GET" ? undefined : JSON.stringify(body),
    };

    const response = await fetch(apiUrl.toString(), fetchOptions);
    console.log("Response Status:", response.status);
    console.log("Response Status Text:", response.statusText);

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Response Data:", data);

    return {
      response: data,
      error: null,
      loading: false,
    };
  } catch (error) {
    console.error("Request Error:", error);
    return {
      response: null,
      error,
      loading: false,
    };
  }
};
