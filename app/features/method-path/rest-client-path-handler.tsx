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

    console.log("Сформированный URL:", encodedUrl);

    urlWorker(encodedUrl, method);
  };

  function urlWorker(url: string, method: RestRequestType) {
    const request = {
      timestamp: Date.now(),
      type: method,
      url: url,
    };

    addRequestToHistory(request);

    navigate(url);
  }

  const decodedData = decodeRequestUrl(path);

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

        {/* Добавляем декодированные данные */}
        <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
          Decoded Data:
        </h3>
        <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
          {JSON.stringify(decodedData, null, 2)}
        </pre>
      </div>
    </RoutesLayout>
  );
}
