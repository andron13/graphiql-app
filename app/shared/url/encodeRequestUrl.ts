import { UrlencodedFormData } from "~/shared/types";

function encodeBase64(data: string): string {
  try {
    return btoa(encodeURIComponent(data));
  } catch (e) {
    // console.error("Failed to encode base64:", e);
    return "";
  }
}

export function encodeRequestUrl(data: UrlencodedFormData): string {
  const { method, endpoint, body, headers } = data;

  if (!method || !endpoint) {
    // console.error("Method and endpoint are required.");
    return "";
  }

  const encodedEndpoint = encodeBase64(endpoint);
  const encodedBody = body ? encodeBase64(body) : "";

  const queryParams = headers
    .map((header) => {
      if (!header.key || !header.value) {
        // console.error("Header key or value is missing.");
        return "";
      }
      return `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`;
    })
    .filter((param) => param !== "")
    .join("&");

  const fullUrl = `/${method}/${encodedEndpoint}${
    encodedBody ? "/" + encodedBody : ""
  }${queryParams ? "?" + queryParams : ""}`;

  return fullUrl;
}
