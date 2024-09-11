/**
 * @Author @andron13 - Andrej Podlubnyj
 * Encodes request data into a URL string.
 *
 * This function takes an object containing the request method, endpoint URL, body, and headers,
 * and encodes these values into a URL string format. The URL string includes the encoded endpoint URL,
 * optional encoded body, and headers as query parameters.
 *
 * @param data - An object containing the request data, which includes:
 * - `method`: The HTTP method for the request.
 * - `endpoint`: The URL endpoint for the request.
 * - `body`: The body of the request, if present.
 * - `headers`: An array of headers, where each header has a `key` and `value`.
 * @returns The encoded URL string in the format "{method}/{encodedEndpoint}/{encodedBody}?{queryParams}".
 */
import { UrlencodedFormData } from "~/shared/types";

/**
 * Encodes a string into Base64 format after URI encoding.
 *
 * @param data - The string to be encoded.
 * @returns The Base64-encoded string. Returns an empty string if encoding fails.
 */
function encodeBase64(data: string): string {
  try {
    return btoa(encodeURIComponent(data));
  } catch (e) {
    return "";
  }
}

/**
 * Encodes request data into a URL string.
 *
 * @param data - An object of type `UrlencodedFormData` containing:
 * - `method`: The HTTP method for the request.
 * - `endpoint`: The URL endpoint for the request.
 * - `body`: The body of the request, if present.
 * - `headers`: An array of headers, where each header has a `key` and `value`.
 * @returns The encoded URL string in the format "{method}/{encodedEndpoint}/{encodedBody}?{queryParams}".
 */
export function encodeRequestUrl(data: UrlencodedFormData): string {
  const { method, endpoint, body, headers } = data;

  if (!method || !endpoint) {
    return "";
  }

  const encodedEndpoint = encodeBase64(endpoint);
  const encodedBody = body ? encodeBase64(body) : "";

  const queryParams = headers
    .map((header) => {
      if (!header.key || !header.value) {
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
