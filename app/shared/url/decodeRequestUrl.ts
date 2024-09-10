export function decodeRequestUrl(encodedUrl: string): {
  method: string;
  endpointUrl: string;
  requestBody?: object;
  headers?: Record<string, string>;
} {
  // Split the URL into base URL and query parameters
  const [baseUrl, queryParams] = encodedUrl.split("?");

  console.log("Base URL:", baseUrl);
  console.log("Query Parameters:", queryParams);

  // Split base URL into method, encoded endpoint URL, and optionally encoded body
  const [method, encodedEndpointUrl, encodedBody] = baseUrl
    .split("/")
    .filter(Boolean);

  console.log("Method:", method);
  console.log("Encoded Endpoint URL:", encodedEndpointUrl);
  console.log("Encoded Body:", encodedBody);

  let endpointUrl: string;
  try {
    endpointUrl = atob(encodedEndpointUrl);
    console.log("Decoded Endpoint URL:", endpointUrl);
  } catch (error) {
    console.error("Error decoding endpointUrl:", error);
    endpointUrl = "";
  }

  let requestBody: object | undefined;
  if (encodedBody) {
    try {
      requestBody = JSON.parse(atob(encodedBody));
      console.log("Decoded Request Body:", requestBody);
    } catch (error) {
      console.error("Error decoding requestBody:", error);
      requestBody = undefined;
    }
  }

  let headers: Record<string, string> = {};
  if (queryParams) {
    const headerEntries = queryParams
      .split("&")
      .map((param) => param.split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => [
        decodeURIComponent(key),
        decodeURIComponent(value),
      ]);

    console.log("Header Entries:", headerEntries);

    headers = Object.fromEntries(headerEntries);
    console.log("Decoded Headers:", headers);
  }

  return { method, endpointUrl, requestBody, headers };
}
