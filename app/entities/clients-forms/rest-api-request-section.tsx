import { RestRequestType as RequestType } from "~/shared/types";

export const RestApiRequestSection = () => {
  return (
    <div className="rounded bg-white p-4 shadow">
      <div className="mb-4 flex gap-4">
        <div className="flex-1">
          <label className="mb-2 block font-medium">Method</label>
          <select className="w-full rounded border border-gray-300 p-2">
            {Object.values(RequestType).map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>
        <div className="flex-2">
          <label className="mb-2 block font-medium">Endpoint URL</label>
          <input
            type="text"
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
            className="flex-1 rounded border border-gray-300 p-2"
          />
          <input
            type="text"
            placeholder="Header Value"
            className="flex-1 rounded border border-gray-300 p-2"
          />
          <button className="rounded bg-blue-500 p-2 text-white">
            Add Header
          </button>
        </div>
        <div className="rounded border border-gray-300 bg-gray-50 p-2">
          {/* Header items will go here */}
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Body</label>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="JSON/Text Editor"
        />
      </div>
    </div>
  );
};
