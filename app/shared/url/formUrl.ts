export type HeadersType = Record<string, string>;

interface FormUrlParams {
  method: string;
  endpoint: string;
  headers?: HeadersType;
  body?: string;
}

export function formUrl({
  method,
  endpoint,
  headers = {},
  body,
}: FormUrlParams): string {
  // Начинаем формирование URL с метода и конечной точки
  let url = `${method}/${endpoint}`;

  // Добавляем тело запроса, если оно существует
  if (body) {
    url += `/${body}`;
  }

  const queryParams = new URLSearchParams(headers).toString();

  if (queryParams) {
    url += `?${queryParams}`;
  }

  return url;
}
