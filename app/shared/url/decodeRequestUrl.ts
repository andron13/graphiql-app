export function decodeRequestUrl(encodedUrl: string): {
  method: string;
  endpointUrl: string;
  requestBody?: object;
  headers?: Record<string, string>;
} {
  const [baseUrl, queryParams] = encodedUrl.split("?");
  console.log("Query Parameters:", queryParams);
  const [method, encodedEndpointUrl, encodedBody] = baseUrl
    .split("/")
    .filter(Boolean);

  let endpointUrl: string;
  try {
    endpointUrl = atob(encodedEndpointUrl);
  } catch (error) {
    // console.error("Error decoding endpointUrl:", error);
    endpointUrl = "";
  }

  let requestBody: object | undefined;
  if (encodedBody) {
    try {
      requestBody = JSON.parse(atob(encodedBody));
    } catch (error) {
      // console.error("Error decoding requestBody:", error);
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

    headers = Object.fromEntries(headerEntries);
  }
  return { method, endpointUrl, requestBody, headers };
}
