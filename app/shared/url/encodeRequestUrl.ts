import { UrlencodedFormData } from "~/shared/types";

function encodeBase64(data: string): string {
  return btoa(data);
}

export function encodeRequestUrl(data: UrlencodedFormData) {
  const { method, endpoint, body, headers } = data;

  const encodedEndpoint = encodeBase64(endpoint);
  const encodedBody = body ? encodeBase64(body) : "";

  const queryParams = headers
    .map(
      (header) =>
        `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`,
    )
    .join("&");

  const fullUrl = `/${method}/${encodedEndpoint}${
    encodedBody ? "/" + encodedBody : ""
  }${queryParams ? "?" + queryParams : ""}`;

  return fullUrl;
}
