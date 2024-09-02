export const GraphiQLClientRequestSection = () => {
  return (
    <div className="rounded bg-white p-4 shadow">
      {/* Request Section */}
      <div className="mb-4">
        <label className="mb-2 block font-medium">Endpoint URL</label>
        <input
          type="text"
          className="w-full rounded border border-gray-300 p-2"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">SDL URL</label>
        <div className="flex gap-2">
          <input
            type="text"
            className="flex-1 rounded border border-gray-300 p-2"
          />
          <button className="rounded bg-blue-500 p-2 text-white">
            Fetch SDL
          </button>
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
          {/* Пример заголовка, можно убрать */}
          <div className="flex justify-between border-b p-1 last:border-b-0">
            <span>Header Key:</span>
            <span>Header Value</span>
          </div>
        </div>
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Query</label>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="GraphQL Query"
        />
      </div>

      <div className="mb-4">
        <label className="mb-2 block font-medium">Variables</label>
        <textarea
          className="h-32 w-full rounded border border-gray-300 p-2"
          placeholder="JSON Variables"
        />
      </div>
    </div>
  );
};
