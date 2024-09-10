export function HistoryNoRequests() {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-100 p-4">
      <div className="rounded bg-white p-6 text-center shadow">
        <p className="mb-4 text-lg font-medium">
          You haven't executed any requests
        </p>
        <p className="mb-6">It's empty here. Try:</p>
        <div className="flex justify-center gap-4">
          <a
            href="/rest-client"
            className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600"
          >
            REST Client
          </a>
          <a
            href="/graphiql-client"
            className="rounded bg-green-500 px-4 py-2 text-white hover:bg-green-600"
          >
            GraphiQL Client
          </a>
        </div>
      </div>
    </div>
  );
}
