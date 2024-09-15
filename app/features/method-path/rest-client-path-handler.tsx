import { useState } from "react";

import { useLocation, useNavigate } from "@remix-run/react";

import { defaultRequestValues } from "~/__mock__";
import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { ApiResponse } from "~/features/clients-forms/response-section";
import { RoutesLayout } from "~/layouts";
import { useUser } from "~/shared/context";
import { useRequestHistory } from "~/shared/hooks";
import { FormValues, RestRequestType } from "~/shared/types";
import { decodeRequestUrl, encodeRequestUrl, sendRequest } from "~/shared/url";

export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const navigate = useNavigate();

  const [response, setResponse] = useState<ApiResponse | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const urlForDecode = location.pathname + location.search;
  const decodedData: FormValues = decodeRequestUrl(urlForDecode);
  const requestData: FormValues = decodedData.endpoint
    ? decodedData
    : defaultRequestValues;

  const handleSubmit = async (data: FormValues) => {
    const method = data.method as RestRequestType;
    const encodedUrl = encodeRequestUrl(data);

    const request = {
      timestamp: Date.now(),
      type: method,
      url: encodedUrl,
      shortUrl: data.endpoint,
    };

    addRequestToHistory(request);
    navigate(encodedUrl);

    setLoading(true);
    setError(null);

    try {
      const result = await sendRequest(data);
      const status = result.status;
      setResponse({
        status: status,
        body: JSON.stringify(result.response, null, 2),
      });
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoutesLayout>
      <RestApiRequestSection onSubmit={handleSubmit} data={requestData} />
      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
      <ResponseSection response={response} />
    </RoutesLayout>
  );
}
