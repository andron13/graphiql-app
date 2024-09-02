import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { RestRequestType as RequestType } from "~/shared/types";

interface FormState {
  method: RequestType;
  endpoint: string;
  headers: { key: string; value: string }[];
  body: string;
}

const serializeState = (state: FormState) => {
  return encodeURIComponent(JSON.stringify(state));
};

const deserializeState = (stateString: string): FormState => {
  return JSON.parse(decodeURIComponent(stateString));
};

const defaultValues = {
  method: RequestType.POST,
  endpoint: "https://hp-api.onrender.com/api/characters",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Authorization", value: "Bearer YOUR_TOKEN" },
    { key: "Content-Type", value: "application/json" },
  ],
  body: JSON.stringify({
    name: "Harry Potter",
    house: "Gryffindor",
    age: 11,
  }),
};

export const RestApiRequestSection = () => {
  const [method, setMethod] = useState<RequestType>(defaultValues.method);
  const [endpoint, setEndpoint] = useState<string>(defaultValues.endpoint);
  const [headers, setHeaders] = useState<{ key: string; value: string }[]>(
    defaultValues.headers,
  );
  const [body, setBody] = useState<string>(defaultValues.body);
  const [headerKey, setHeaderKey] = useState<string>("");
  const [headerValue, setHeaderValue] = useState<string>("");

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const stateString = params.get("state");
    if (stateString) {
      const state = deserializeState(stateString);
      setMethod(state.method || defaultValues.method);
      setEndpoint(state.endpoint || defaultValues.endpoint);
      setHeaders(state.headers || defaultValues.headers);
      setBody(state.body || defaultValues.body);
    }
  }, [location.search]);

  const handleAddHeader = () => {
    if (headerKey && headerValue) {
      setHeaders([...headers, { key: headerKey, value: headerValue }]);
      setHeaderKey("");
      setHeaderValue("");
    }
  };

  const handleFormSubmit = () => {
    const state = {
      method,
      endpoint,
      headers,
      body,
    };
    const serializedState = serializeState(state);
    const url = `${window.location.origin}${window.location.pathname}?state=${serializedState}`;
    console.log("Сформированный URL:", url);

    // Navigate to the new URL with the serialized state
    navigate(`?state=${serializedState}`);
  };

  return (
    <div className="rounded bg-white p-4 shadow">
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="mb-2 block font-medium">Method</label>
          <select
            className="w-fit rounded border border-gray-300 p-2"
            value={method}
            onChange={(e) => setMethod(e.target.value as RequestType)}
          >
            {Object.values(RequestType).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-2 w-full">
          <label className="mb-2 block font-medium">Endpoint URL</label>
          <input
            type="text"
            className="w-full rounded border border-gray-300 p-2"
            value={endpoint}
            onChange={(e) => setEndpoint(e.target.value)}
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Headers</label>
        <div className="mb-2 flex gap-2">
          <input
            type="text"
            placeholder="Header Key"
            className="flex-1 rounded border border-gray-300 p-2"
            value={headerKey}
            onChange={(e) => setHeaderKey(e.target.value)}
          />
          <input
            type="text"
            placeholder="Header Value"
            className="flex-1 rounded border border-gray-300 p-2"
            value={headerValue}
            onChange={(e) => setHeaderValue(e.target.value)}
          />
          <button
            className="rounded bg-blue-500 p-2 text-white"
            onClick={handleAddHeader}
          >
            Add Header
          </button>
        </div>
        <div className="rounded border border-gray-300 bg-gray-50 p-2">
          {headers.map((header, index) => (
            <div key={index}>
              {header.key}: {header.value}
            </div>
          ))}
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Body</label>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="JSON/Text Editor"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </div>

      <button
        className="mt-4 rounded bg-green-500 p-2 text-white"
        onClick={handleFormSubmit}
      >
        Send Request
      </button>
    </div>
  );
};
