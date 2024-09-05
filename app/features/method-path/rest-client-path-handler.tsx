import { useLocation, useNavigate, useParams } from "@remix-run/react";

import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { UrlencodedFormData } from "~/shared/types";
import { defaultRequestValues } from "~/test/mock";

export function RestClientPathHandler() {
  const params = useParams();
  const location = useLocation();
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  const navigate = useNavigate();
  const handleSubmit = async (data: UrlencodedFormData) => {
    const method = data.method;
    const endpoint = encodeURIComponent(data.endpoint);

    const urlPath = `/${method}/${endpoint}`;
    const queryParams = data.headers
      .map(
        (header) =>
          `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`,
      )
      .join("&");

    const fullUrl = queryParams ? `${urlPath}?${queryParams}` : urlPath;
    console.log("Сформированный URL:", fullUrl);

    navigate(fullUrl);
  };

  return (
    <div className="bg-gray-100 p-4">
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
      <RestApiRequestSection
        defaultValues={defaultRequestValues}
        onSubmit={handleSubmit}
      />
      <ResponseSection />
    </div>
  );
}
