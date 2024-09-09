import { useState } from "react";

import { useLocation, useNavigate, useParams } from "@remix-run/react";

import {
  DocumentationSection,
  GraphiQLClientRequestSection,
  ResponseSection,
} from "~/features/clients-forms";
import { useRequestHistory } from "~/shared/hooks";
import { FormValuesGraphql, RestRequestType } from "~/shared/types/types";
import { defaultGraphqlRequestValues } from "~/test/mock";

export function GraphqlPath() {
  const [response, setResponse] = useState({
    responseStatus: "",
    responseBody: "",
  });
  const { addRequestToHistory } = useRequestHistory();

  const location = useLocation();
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  const navigate = useNavigate();

  function urlWorker(url: string, method: RestRequestType) {
    const request = {
      timestamp: Date.now(),
      type: method,
      url: url,
    };

    addRequestToHistory(request);

    navigate(url);
  }

  function JSONPrettify(jsonString: string) {
    return JSON.stringify(JSON.parse(jsonString), null, 2);
  }

  const onSubmit = async (data: FormValuesGraphql) => {
    const formData = new FormData();
    formData.append("endpoint", data.endpoint);
    formData.append("query", data.query);
    formData.append("variables", data.variables || "");

    data.headers.forEach(({ key, value }) => {
      formData.append("headers", `${key}:${value}`);
    });

    const method = "GRAPHQL" as RestRequestType;
    const endpoint = encodeURIComponent(data.endpoint);
    const urlPath = `/${method}/${endpoint}`;

    const queryParams = data.headers
      .map(
        (header) =>
          `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`,
      )
      .join("&");

    const fullUrl = queryParams ? `${urlPath}?${queryParams}` : urlPath;

    urlWorker(fullUrl, method);

    try {
      const response = await fetch("/graphiql", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      setResponse({
        responseStatus: response.status.toString(),
        responseBody: JSONPrettify(JSON.stringify(result?.data)),
      });
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="bg-gray-100 p-4">
      <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
        GraphQL path: <span className="font-medium">{path}</span>
      </p>
      <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
        Url segment: <span className="font-medium">{firstSegment}</span>
      </p>
      <GraphiQLClientRequestSection
        defaultValues={defaultGraphqlRequestValues}
        onSubmit={onSubmit}
      />
      <ResponseSection
        responseStatus={response.responseStatus}
        responseBody={response.responseBody}
      />
      <DocumentationSection />
    </div>
  );
}
