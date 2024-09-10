import { useLocation, useNavigate, useParams } from "@remix-run/react";

import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts";
import {
  useDecodedUrl,
  useEncodedUrl,
  useRequestHistory,
} from "~/shared/hooks";
import { RestRequestType, UrlencodedFormData } from "~/shared/types";
import { defaultRequestValues } from "~/test/mock";

export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const { method, endpoint, body, headers, fullUrl } = useDecodedUrl();

  // Добавляем хук useEncodedUrl
  // const { url } = useEncodedUrl({
  //   method,
  //   endpoint,
  //   body,
  //   headers,
  // });

  const params = useParams();
  const location = useLocation();
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  const navigate = useNavigate();

  const handleSubmit = async (data: UrlencodedFormData) => {
    const method = data.method as RestRequestType;
    const endpoint = encodeURIComponent(data.endpoint);
    const headers = data.headers.reduce(
      (acc, header) => {
        acc[header.key] = header.value;
        return acc;
      },
      {} as Record<string, string>,
    );

    const urlPath = `/${method}/${endpoint}`;
    const queryParams = data.headers
      .map(
        (header) =>
          `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`,
      )
      .join("&");

    const fullUrl = queryParams ? `${urlPath}?${queryParams}` : urlPath;
    console.log("Сформированный URL:", fullUrl);

    urlWorker(fullUrl, method);
  };

  function urlWorker(url: string, method: RestRequestType) {
    // TODO:
    // 1. Fetch the data and display the response
    // 2. Format the URL for an internal page if needed
    // 3. Navigate to this URL (x- done)
    // 4. Record the request in the user's history
    const request = {
      timestamp: Date.now(),
      type: method,
      url: url,
    };

    addRequestToHistory(request);

    navigate(url);
  }

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
        <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
          URL from the browser window:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {location.pathname}
        </pre>

        <h3 className="mb-4 mt-8 border-b-2 border-red-300 pb-2 text-3xl font-semibold text-red-700">
          Route Parameters:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {params.path}
        </pre>
      </div>
      <div className="bg-gray-100">
        <div className="rounded-lg bg-white p-8 shadow-xl ring-1 ring-gray-200">
          <h2 className="mb-6 border-b-2 border-blue-300 pb-2 text-4xl font-extrabold text-blue-700">
            Received Data:
          </h2>
          <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
            Method: <span className="font-medium">{method}</span>
          </p>
          <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
            Endpoint: <span className="font-medium">{endpoint}</span>
          </p>
          <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
            Headers:{" "}
            <span className="font-medium">{JSON.stringify(headers)}</span>
          </p>
          <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
            Body: <span className="font-medium">{JSON.stringify(body)}</span>
          </p>
          <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
            fullUrl: <span className="font-medium">{fullUrl}</span>
          </p>
        </div>
      </div>
    </RoutesLayout>
  );
}
