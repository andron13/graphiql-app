import { FC } from "react";

import { useRequestHistory } from "~/shared/hooks";

export const RequestHistoryViewer: FC = () => {
  const { history, clearHistory } = useRequestHistory();

  return (
    <div className="flex flex-col rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-2xl font-semibold text-gray-800">
        Request History
      </h2>
      <button
        onClick={clearHistory}
        className="mb-4 rounded-lg bg-red-600 px-4 py-2 font-semibold text-white transition-colors duration-300 hover:bg-red-700"
      >
        Clear History
      </button>
      {history.length === 0 ? (
        <p className="text-gray-600">No requests found</p>
      ) : (
        <ul className="space-y-4">
          {history.map((entry) => (
            <li
              key={entry.timestamp}
              className="rounded-lg border border-gray-200 p-4 shadow-sm"
            >
              <div className="text-gray-700">
                <strong>Type:</strong>{" "}
                <span className="ml-1 text-gray-600">{entry.type}</span>
              </div>
              <div className="mt-1 text-gray-700">
                <strong>URL:</strong>{" "}
                <span className="ml-1 text-gray-600">{entry.url}</span>
              </div>
              <div className="mt-1 text-gray-700">
                <strong>Timestamp:</strong>{" "}
                <span className="ml-1 text-gray-600">
                  {new Date(entry.timestamp).toLocaleString()}
                </span>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
