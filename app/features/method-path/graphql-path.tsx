import { useEffect, useState } from "react";

import { useLocation, useNavigate } from "@remix-run/react";

import { defaultGraphqlRequestValues } from "~/__mock__";
import {
  DocumentationSection,
  GraphiQLClientRequestSection,
  ResponseSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts/routes-layout";
import { useUser } from "~/shared/context";
import { useRequestHistory } from "~/shared/hooks";
import { FormValuesGraphql, GraphqlRequestType } from "~/shared/types";
import { decodeRequestUrl } from "~/shared/url/decode-graphql-request-url";
import { encodeRequestUrl } from "~/shared/url/encode-grapql-request-url";

import { ApiResponse } from "../clients-forms/response-section";

export function GraphqlPath() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUser();
  const isUserLogged = isUserLoggedIn();

  const [state, setState] = useState<{
    response: ApiResponse | null;
    error: Error | null;
    loading: boolean;
  }>({
    response: null,
    error: null,
    loading: false,
  });

  const [documentation, setDocumentation] = useState<string>("");

  const urlForDecode = location.pathname + location.search;
  const decodedData: FormValuesGraphql = decodeRequestUrl(urlForDecode);
  const requestData: FormValuesGraphql = decodedData.endpoint
    ? decodedData
    : defaultGraphqlRequestValues;

  const handleSubmit = async (data: FormValuesGraphql) => {
    data.method = "GRAPHQL" as GraphqlRequestType;
    const encodedUrl = encodeRequestUrl(data);

    const request = {
      timestamp: Date.now(),
      type: data.method,
      url: encodedUrl,
      shortUrl: data.endpoint,
    };

    const formData = new FormData();
    formData.append("endpoint", data.endpoint);
    formData.append("query", data.query);

    data.variables?.forEach(({ key, value }) => {
      formData.append("variables", `${key}:${value}`);
    });

    data.headers.forEach(({ key, value }) => {
      formData.append("headers", `${key}:${value}`);
    });

    addRequestToHistory(request);
    navigate(encodedUrl);
    setState({ response: null, error: null, loading: true });

    try {
      const response = await fetch("/graphiql", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        const errorResult = await response.json();
        setState({
          response: {
            status: response.status,
            body: "",
          },
          error: new Error(errorResult.error || "Unknown error occurred"),
          loading: false,
        });
        return;
      }

      const result = await response.json();
      setState({
        response: {
          status: result.status,
          body: JSON.stringify(result.response, null, 2),
        },
        error: null,
        loading: false,
      });
    } catch (error) {
      setState({
        response: null,
        error: error as Error,
        loading: false,
      });
    }
  };

  useEffect(() => {
    if (!isUserLogged) {
      navigate("/");
    }
  });

  const onSDLSubmit = async (endpoint: string) => {
    const formData = new FormData();
    formData.append("endpoint", endpoint);
    formData.append(
      "query",
      `
        {
          __schema {
            types {
              name
              kind
              fields {
                name
              }
            }
          }
        }
      `,
    );

    try {
      const response = await fetch("/graphiql", {
        method: "POST",
        body: formData,
      });

      const result = await response.json();
      const data = JSON.stringify(result.response.data, null, 2);
      setDocumentation(data);
    } catch (error) {
      setDocumentation("");
    }
  };

  return (
    <RoutesLayout>
      <div className="bg-gray-100 p-4">
        <GraphiQLClientRequestSection
          defaultValues={requestData}
          onSubmit={handleSubmit}
          onSDLSubmit={onSDLSubmit}
        />
        {state.loading && (
          <p className="my-2 animate-pulse rounded border border-blue-400 bg-blue-100 p-2 text-blue-500">
            Loading...
          </p>
        )}
        {state.error && (
          <p className="my-2 rounded border border-red-400 bg-red-100 p-2 text-red-500">
            Error: {state.error.message}
          </p>
        )}
        <ResponseSection response={state.response} />
        {documentation && <DocumentationSection sdlResponse={documentation} />}
      </div>
    </RoutesLayout>
  );
}
