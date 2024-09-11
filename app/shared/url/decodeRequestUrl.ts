import {
  FormValues,
  GraphqlRequestType,
  RestRequestType,
} from "~/shared/types";

/**
 * Decodes an encoded request URL into a request data object.
 *
 * @param encodedUrl - The encoded request URL in the format "{method}/{encodedEndpointUrl}/{encodedBody}?{queryParams}".
 * @returns A `FormValues` object which includes:
 * - `method`: The request method, cast to `RestRequestType` or `GraphqlRequestType`.
 * - `endpoint`: The decoded request endpoint.
 * - `body`: The decoded request body if it exists.
 * - `headers`: An array of headers, where each header has `key` and `value`.
 * @Author @andron13 - Andrej Podlubnyj
 */
export function decodeRequestUrl(encodedUrl: string): FormValues {
  const [baseUrl, queryParams] = encodedUrl.split("?");
  const [method, encodedEndpointUrl, encodedBody] = baseUrl
    .split("/")
    .filter(Boolean);

  let endpoint: string;
  try {
    endpoint = decodeURIComponent(atob(encodedEndpointUrl));
  } catch (error) {
    endpoint = "";
  }

  let body: string;
  if (encodedBody) {
    try {
      body = decodeURIComponent(atob(encodedBody));
    } catch (error) {
      body = "";
    }
  } else {
    body = "";
  }

  let headers: { key: string; value: string }[] = [];
  if (queryParams) {
    headers = queryParams
      .split("&")
      .map((param) => param.split("="))
      .filter(([key, value]) => key && value)
      .map(([key, value]) => ({
        key: decodeURIComponent(key),
        value: decodeURIComponent(value),
      }));
  }

  return {
    method: method as RestRequestType | GraphqlRequestType,
    endpoint,
    body,
    headers,
  };
}
