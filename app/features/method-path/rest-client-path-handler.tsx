import { useLocation, useNavigate } from "@remix-run/react";

import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts";
import { useRequestHistory } from "~/shared/hooks";
import { RestRequestType, UrlencodedFormData } from "~/shared/types";
import { decodeRequestUrl } from "~/shared/url/decodeRequestUrl";
import { encodeRequestUrl } from "~/shared/url/encodeRequestUrl";
import { defaultRequestValues } from "~/test/mock";

export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  const navigate = useNavigate();

  const handleSubmit = async (data: UrlencodedFormData) => {
    const method = data.method as RestRequestType;
    const encodedUrl = encodeRequestUrl(data);

    // Log original data and encoded URL
    console.log("Original Data:", data);
    console.log("Encoded URL:", encodedUrl);

    // Call function to handle URL
    urlWorker(encodedUrl, method);
  };

  function urlWorker(url: string, method: RestRequestType) {
    const request = {
      timestamp: Date.now(),
      type: method,
      url: url,
    };

    // Log request added to history and navigation URL
    console.log("Adding request to history:", request);
    addRequestToHistory(request);

    console.log("Navigating to URL:", url);
    navigate(url);
  }

  // Decode URL
  const decodedData = decodeRequestUrl(path);

  // Log decoded data
  console.log("Decoded Data:", decodedData);

  return (
    <RoutesLayout>
      <div className="bg-gray-100">
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
        <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
          Rest path: <span className="font-medium">{path}</span>
        </p>
        <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
          URL segment: <span className="font-medium">{firstSegment}</span>
        </p>

        {/* Display original data and encoded URL */}
        <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
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
        <div className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
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
