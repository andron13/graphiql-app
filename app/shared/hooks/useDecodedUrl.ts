import { useMemo } from "react";

import { useLocation, useParams } from "@remix-run/react";

const base64Decode = (str: string) => {
  try {
    return atob(str);
  } catch {
    return "";
  }
};

const parseJson = (str: string) => {
  try {
    return JSON.parse(str);
  } catch {
    return {};
  }
};

export const useDecodedUrl = () => {
  const { method, endpoint, body } = useParams();
  const location = useLocation();

  const queryParams = useMemo(
    () => new URLSearchParams(location.search),
    [location.search],
  );

  const decodedEndpoint = useMemo(
    () => base64Decode(endpoint || ""),
    [endpoint],
  );
  const decodedBody = useMemo(() => base64Decode(body || ""), [body]);

  const headers = useMemo(() => {
    const headers: Record<string, string> = {};
    queryParams.forEach((value, key) => {
      headers[key] = decodeURIComponent(value);
    });
    return headers;
  }, [queryParams]);

  const requestBody = useMemo(() => parseJson(decodedBody), [decodedBody]);

  const fullUrl = useMemo(
    () => `${location.pathname}${location.search}`,
    [location.pathname, location.search],
  );

  return {
    method: method || "",
    endpoint: decodedEndpoint,
    body: requestBody,
    headers,
    fullUrl, // for debugging purposes
  };
};
