import { FormValues } from "~/shared/types";

/**
 * @Autor @andron13 - https://github.com/andron13
 * Encodes a string in Base64 format.
 *
 * @param {string} data - The string to encode.
 * @returns {string} The Base64 encoded string, or an empty string if encoding fails.
 */
function encodeBase64(data: string): string {
  try {
    return btoa(encodeURIComponent(data));
  } catch (e) {
    return "";
  }
}

/**
 * Encodes a `FormValues` object into a request URL.
 *
 * The URL format is: `/{method}/{encodedEndpoint}/{encodedBody}/{encodedVariables}?{queryParams}`
 *
 * - `method`: HTTP method (e.g., GET, POST)
 * - `endpoint`: API endpoint
 * - `body`: Request body, encoded in Base64
 * - `variables`: Encoded variables as a JSON string
 * - `headers`: Query parameters, encoded in Base64
 *
 * @param {FormValues} data - The form values to encode into a URL.
 * @returns {string} The encoded URL.
 */
export function encodeRequestUrl(data: FormValues): string {
  const { method, endpoint, body, headers, variables, query } = data;

  if (!method || !endpoint) {
    return "";
  }

  const encodedEndpoint = encodeBase64(endpoint);

  const encodedBody = body
    ? encodeBase64(typeof body === "string" ? body : JSON.stringify(body))
    : "";

  const encodedVariables = variables
    ? encodeBase64(JSON.stringify(variables))
    : "";

  const queryParams = (headers as { key: string; value: string }[])
    .concat(
      query?.map((queryItem, index) => ({
        key: `query${index}`,
        value: queryItem.join(","), // Join string[] into a single string
      })) || [],
    )
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
  }${encodedVariables ? "/" + encodedVariables : ""}${
    queryParams ? "?" + queryParams : ""
  }`;

  return fullUrl;
}
