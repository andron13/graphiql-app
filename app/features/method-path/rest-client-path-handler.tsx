import { useLocation, useNavigate } from "@remix-run/react";

import { defaultRequestValues } from "~/__mock__";
import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts";
import { useRequestHistory } from "~/shared/hooks";
import { RestRequestType, UrlencodedFormData } from "~/shared/types";
import { decodeRequestUrl, encodeRequestUrl } from "~/shared/url";

export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const navigate = useNavigate();

  const urlForDecode = location.pathname + location.search;
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  const decodedData = decodeRequestUrl(urlForDecode);

  const handleSubmit = async (data: UrlencodedFormData) => {
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
        <RestApiRequestSection
          defaultValues={defaultRequestValues}
          onSubmit={handleSubmit}
        />
        <ResponseSection />
      </div>
      <div className="rounded-lg bg-white p-8 shadow-xl ring-1 ring-gray-200">
        <h2 className="mb-6 border-b-2 border-blue-300 pb-2 text-4xl font-extrabold text-blue-700">
          Received Data:
        </h2>
        <div className="mb-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
          <p>
            Rest path: <span className="font-medium">{path}</span>
          </p>
          <p>
            URL segment: <span className="font-medium">{firstSegment}</span>
          </p>
        </div>

        <h3 className="mb-4 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
          Original Data:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {JSON.stringify(defaultRequestValues, null, 2)}
        </pre>

        <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
          Encoded URL:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {JSON.stringify(
            { encodedUrl: encodeRequestUrl(defaultRequestValues) },
            null,
            2,
          )}
        </pre>

        <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
          Decoded Data:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {JSON.stringify(decodedData, null, 2)}
        </pre>
        <div className="mb-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
          <h4 className="font-semibold">Decoded Headers:</h4>
          <pre className="rounded border border-gray-300 bg-gray-50 p-3">
            {decodedData.headers
              ? JSON.stringify(decodedData.headers, null, 2)
              : "No headers"}
          </pre>
        </div>
      </div>
    </RoutesLayout>
  );
}
