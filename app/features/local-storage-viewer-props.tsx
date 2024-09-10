// TODO : JUST TEST, YOU CAN DELETE IT LATER
import { FC } from "react";

import { useRequestHistory } from "~/shared/hooks";

export const RequestHistoryViewer: FC = () => {
  const { history, clearHistory } = useRequestHistory();

  return (
    <div className="flex w-[600px] flex-col overflow-y-auto rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-6 text-2xl font-bold text-gray-900">Request History</h2>
      <button
        onClick={clearHistory}
        className="mb-6 rounded-lg bg-red-600 px-4 py-2 font-medium text-white transition-colors duration-300 hover:bg-red-700"
      >
        Clear History
      </button>
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
  );
};
