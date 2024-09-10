import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RoutesLayout } from "~/layouts/routes-layout";
import { useRequestHistory } from "~/shared/hooks";

export default function History() {
  const { history } = useRequestHistory();

  if (history.length === 0) {
    return <HistoryNoRequests />;
  }

  return (
    <RoutesLayout>
      <div className="flex flex-col items-center justify-center">
        <div className="flex w-[600px] flex-col overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">
            Request History
          </h2>

          {history.length === 0 ? (
            <p className="text-gray-500">No requests found</p>
          ) : (
            <ul className="space-y-4">
              {history.map((entry) => (
                <li
                  key={entry.timestamp}
                  className="flex flex-col space-y-2 rounded-lg border border-gray-200 bg-gray-50 p-4 shadow-md"
                >
                  <div className="text-gray-700">
                    <strong className="text-gray-900">Type:</strong>{" "}
                    <span className="ml-1 text-gray-600">{entry.type}</span>
                  </div>
                  <div className="text-gray-700">
                    <strong className="text-gray-900">URL:</strong>{" "}
                    <div className="ml-1 overflow-x-auto whitespace-nowrap text-gray-600">
                      {entry.url}
                    </div>
                  </div>
                  <div className="text-gray-700">
                    <strong className="text-gray-900">Timestamp:</strong>{" "}
                    <span className="ml-1 text-gray-600">
                      {new Date(entry.timestamp).toLocaleString()}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>
        <HistoryList requests={history} />
      </div>
    </RoutesLayout>
  );
}
