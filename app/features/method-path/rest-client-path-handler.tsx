import { useLocation, useNavigate } from "@remix-run/react";

import { defaultRequestValues } from "~/__mock__";
import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts";
import { useRequestHistory } from "~/shared/hooks";
import { FormValues, RestRequestType } from "~/shared/types";
import { decodeRequestUrl, encodeRequestUrl } from "~/shared/url";

export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const navigate = useNavigate();

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
  };

  return (
    <RoutesLayout>
      <div className="bg-gray-100 p-8">
        <RestApiRequestSection onSubmit={handleSubmit} data={requestData} />
        <ResponseSection />
      </div>
    </RoutesLayout>
  );
}
