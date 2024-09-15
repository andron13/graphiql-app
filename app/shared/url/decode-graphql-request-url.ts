import { FormValuesGraphql } from "~/shared/types";

export function decodeRequestUrl(encodedUrl: string): FormValuesGraphql {
  const [baseUrl, queryParams] = encodedUrl.split("?");
  const [method, encodedEndpointUrl, encodedQuery, encodedVariables] = baseUrl
    .split("/")
    .filter(Boolean);

  let endpoint: string = "";
  try {
    endpoint = decodeURIComponent(atob(encodedEndpointUrl));
  } catch (error) {
    endpoint = "";
  }

  let query: string = "";

  if (encodedQuery) {
    try {
      const decodedQuery = decodeURIComponent(atob(encodedQuery));
      query = decodedQuery;
    } catch (error) {
      query = "";
    }
  }

  let variables: Record<string, string>[] = [];
  if (encodedVariables) {
    try {
      const variablesString = decodeURIComponent(atob(encodedVariables));
      variables = JSON.parse(variablesString) || [];
    } catch (error) {
      variables = [];
    }
  }
  const headers: { key: string; value: string }[] = [];

  if (queryParams) {
    queryParams.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      if (key && value) {
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value);
        headers.push({
          key: decodedKey,
          value: decodedValue,
        });
      }
    });
  }

  return {
    endpoint: endpoint || "",
    query,
    headers,
    variables,
  };
}
