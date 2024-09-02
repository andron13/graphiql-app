import { HeadersType } from "~/shared/url/formUrl";

interface DecodedUrlParams {
  method: string;
  endpoint: string;
  headers: HeadersType;
  body: string;
}

export function decodeUrl(url: string): DecodedUrlParams {
  const [method, encodedEndpoint, encodedBody, queryString] = url.split("/");

  const endpoint = encodedEndpoint ? atob(encodedEndpoint) : "";
  const body = encodedBody ? atob(encodedBody) : "";

  const headers: HeadersType = {};
  if (queryString) {
    const queryParams = new URLSearchParams(queryString);
    queryParams.forEach((value, key) => {
      headers[key] = value; // URLSearchParams уже возвращает декодированные значения
    });
  }

  return { method, endpoint, headers, body };
}
