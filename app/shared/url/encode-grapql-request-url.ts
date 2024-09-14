import { FormValuesGraphql } from "~/shared/types";

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
 * Encodes a `FormValuesGraphql` object into a request URL.
 *
 * The URL format is: `/{method}/{encodedEndpoint}/{encodedQuery}/{encodedVariables}?{queryParams}`
 *
 * - `method`: GRAPHQL method
 * - `endpoint`: API endpoint
 * - `query`: Request query, encoded in Base64
 * - `variables`: Encoded variables as a JSON string
 * - `headers`: Query parameters, encoded in Base64
 *
 * @param {FormValues} data - The form values to encode into a URL.
 * @returns {string} The encoded URL.
 */
export function encodeRequestUrl(data: FormValuesGraphql): string {
  const { method, endpoint, query, headers, variables } = data;

  if (!method || !endpoint) {
    return "";
  }

  const encodedEndpoint = encodeBase64(endpoint);

  const encodedQuery = query
    ? encodeBase64(typeof query === "string" ? query : JSON.stringify(query))
    : "";

  const encodedVariables = variables
    ? encodeBase64(JSON.stringify(variables))
    : "";

  const queryParams = (headers as { key: string; value: string }[])
    .map((header) => {
      if (!header.key || !header.value) {
        return "";
      }
      return `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`;
    })
    .filter((param) => param !== "")
    .join("&");

  const fullUrl = `/${method}/${encodedEndpoint}${
    encodedQuery ? "/" + encodedQuery : ""
  }${encodedVariables ? "/" + encodedVariables : ""}${
    queryParams ? "?" + queryParams : ""
  }`;

  return fullUrl;
}
