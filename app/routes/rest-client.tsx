import { useState } from "react";

export default function RestClient() {
  const [method, setMethod] = useState("GET");
  const [url, setUrl] = useState("");
  const [headers, setHeaders] = useState([]);
  const [headerKey, setHeaderKey] = useState("");
  const [headerValue, setHeaderValue] = useState("");
  const [body, setBody] = useState("");
  const [responseStatus, setResponseStatus] = useState("");
  const [responseBody, setResponseBody] = useState("");

  const addHeader = () => {
    setHeaders([...headers, { key: headerKey, value: headerValue }]);
    setHeaderKey("");
    setHeaderValue("");
  };

  return (
    <div className="bg-gray-100 p-4">
      <div className="rounded bg-white p-4 shadow">
        {/* Request Section */}
        <div className="mb-4 flex gap-4">
          <div className="flex-1">
            <label className="mb-2 block font-medium">Method</label>
            <select
              value={method}
              onChange={(e) => setMethod(e.target.value)}
              className="w-full rounded border border-gray-300 p-2"
            >
              <option value="GET">GET</option>
              <option value="POST">POST</option>
              <option value="PUT">PUT</option>
              <option value="DELETE">DELETE</option>
            </select>
          </div>
          <div className="flex-2">
            <label className="mb-2 block font-medium">Endpoint URL</label>
            <input
              type="text"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="w-full rounded border border-gray-300 p-2"
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">Headers</label>
          <div className="mb-2 flex gap-2">
            <input
              type="text"
              placeholder="Header Key"
              value={headerKey}
              onChange={(e) => setHeaderKey(e.target.value)}
              className="flex-1 rounded border border-gray-300 p-2"
            />
            <input
              type="text"
              placeholder="Header Value"
              value={headerValue}
              onChange={(e) => setHeaderValue(e.target.value)}
              className="flex-1 rounded border border-gray-300 p-2"
            />
            <button
              onClick={addHeader}
              className="rounded bg-blue-500 p-2 text-white"
            >
              Add Header
            </button>
          </div>
          <div className="rounded border border-gray-300 bg-gray-50 p-2">
            {headers.map((header, index) => (
              <div
                key={index}
                className="flex justify-between border-b p-1 last:border-b-0"
              >
                <span>{header.key}:</span>
                <span>{header.value}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-4">
          <label className="mb-2 block font-medium">Body</label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            className="h-32 w-full rounded border border-gray-300 p-2"
            placeholder="JSON/Text Editor"
          />
        </div>
      </div>

      {/* Response Section */}
      <div className="mt-4 rounded bg-white p-4 shadow">
        <div className="mb-4">
          <label className="mb-2 block font-medium">Response</label>
          <div className="mb-2">
            <label className="mb-1 block">Status:</label>
            <input
              type="text"
              value={responseStatus}
              readOnly
              className="w-full rounded border border-gray-300 bg-gray-50 p-2"
            />
          </div>
          <label className="mb-1 block">Body:</label>
          <textarea
            value={responseBody}
            readOnly
            className="h-32 w-full rounded border border-gray-300 bg-gray-50 p-2"
          />
        </div>
      </div>
    </div>
  );
}
