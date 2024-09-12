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
    // Handle decoding error
  }

  let body: string | Record<string, unknown> | null = null;
  if (encodedBody) {
    try {
      const decodedBody = decodeURIComponent(atob(encodedBody));
      body = decodedBody.startsWith("{")
        ? JSON.parse(decodedBody)
        : decodedBody;
    } catch (error) {
      // Handle decoding or parsing error
    }
  }

  let variables: Record<string, string>[] = [];
  if (encodedVariables) {
    try {
      const variablesString = decodeURIComponent(atob(encodedVariables));
      variables = JSON.parse(variablesString) || [];
    } catch (error) {
      // Handle decoding or parsing error
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
          // Если параметр query, добавляем в массив queries
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
    endpoint,
    body,
    headers,
    variables,
    query: queries.length > 0 ? queries : undefined, // Возвращаем только если есть queries
  };
}
