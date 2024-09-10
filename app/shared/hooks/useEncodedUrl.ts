import { useMemo } from "react";

const base64Encode = (str: string): string => {
  try {
    return btoa(str);
  } catch {
    return "";
  }
};

const stringifyJson = (obj: unknown): string => {
  try {
    return JSON.stringify(obj);
  } catch {
    return "";
  }
};

interface UseEncodedUrlParams {
  method: string;
  endpoint: string;
  body: unknown;
  headers: Record<string, string>;
}

export const useEncodedUrl = ({
  method,
  endpoint,
  body,
  headers,
}: UseEncodedUrlParams) => {
  const base64EncodedEndpoint = useMemo(
    () => base64Encode(endpoint),
    [endpoint],
  );

  const base64EncodedBody = useMemo(
    () => base64Encode(stringifyJson(body)),
    [body],
  );

  const queryParams = useMemo(
    () =>
      new URLSearchParams(
        Object.entries(headers).map(([key, value]) => [
          encodeURIComponent(key),
          encodeURIComponent(value),
        ]),
      ).toString(),
    [headers],
  );

  const url = useMemo(() => {
    let basePath = `/${method}/${base64EncodedEndpoint}`;
    if (base64EncodedBody) {
      basePath += `/${base64EncodedBody}`;
    }
    return queryParams ? `${basePath}?${queryParams}` : basePath;
  }, [method, base64EncodedEndpoint, base64EncodedBody, queryParams]);

  return {
    url,
    base64EncodedEndpoint,
    base64EncodedBody,
    queryParams,
  };
};
