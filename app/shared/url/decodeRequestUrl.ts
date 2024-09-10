export function decodeRequestUrl(encodedUrl: string): {
  method: string;
  endpointUrl: string;
  requestBody?: object;
  headers?: Record<string, string>;
} {
  const [baseUrl, queryParams] = encodedUrl.split("?");

  const [method, encodedEndpointUrl, encodedBody] = baseUrl
    .split("/")
    .filter(Boolean);

  let endpointUrl: string;
  try {
    endpointUrl = atob(encodedEndpointUrl);
  } catch (error) {
    console.error("Ошибка декодирования endpointUrl:", error);
    endpointUrl = "";
  }

  let requestBody: object | undefined;
  if (encodedBody) {
    try {
      requestBody = JSON.parse(atob(encodedBody));
    } catch (error) {
      console.error("Ошибка декодирования requestBody:", error);
      requestBody = undefined;
    }
  }

  let headers: Record<string, string> = {};
  if (queryParams) {
    headers = Object.fromEntries(
      queryParams
        .split("&")
        .map((param) => param.split("="))
        .filter(([key, value]) => key && value) // Filter out any invalid entries
        .map(([key, value]) => [
          decodeURIComponent(key),
          decodeURIComponent(value),
        ]),
    );
  }

  return { method, endpointUrl, requestBody, headers };
}
