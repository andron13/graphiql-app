import {
  FormValues,
  GraphqlRequestType,
  RestRequestType,
} from "~/shared/types";

export function decodeRequestUrl(encodedUrl: string): FormValues {
  const [baseUrl, queryParams] = encodedUrl.split("?");
  const [method, encodedEndpointUrl, encodedBody, encodedVariables] = baseUrl
    .split("/")
    .filter(Boolean);

  let endpoint: string = "";
  try {
    endpoint = decodeURIComponent(atob(encodedEndpointUrl));
  } catch (error) {
    endpoint = "";
  }

  let body: string | Record<string, unknown> | null = "";
  if (encodedBody) {
    try {
      const decodedBody = decodeURIComponent(atob(encodedBody));
      body = decodedBody.startsWith("{")
        ? JSON.parse(decodedBody)
        : decodedBody;
    } catch (error) {
      body = "";
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
  const queries: string[][] = [];

  if (queryParams) {
    queryParams.split("&").forEach((param) => {
      const [key, value] = param.split("=");
      if (key && value) {
        const decodedKey = decodeURIComponent(key);
        const decodedValue = decodeURIComponent(value);

        if (decodedKey.startsWith("query")) {
          // Если параметр query, добавляем его в массив queries
          queries.push(decodedValue.split(","));
        } else {
          // Остальные параметры рассматриваем как заголовки
          headers.push({
            key: decodedKey,
            value: decodedValue,
          });
        }
      }
    });
  }

  return {
    method: method as RestRequestType | GraphqlRequestType,
    endpoint: endpoint || "",
    body: body || "",
    headers,
    variables,
    query: queries.length > 0 ? queries : undefined,
  };
}
