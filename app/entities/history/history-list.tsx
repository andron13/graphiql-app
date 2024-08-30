import React from "react";

import { HistoryRequest, RequestType } from "~/shared/types";

interface HistoryListProps {
  requests: HistoryRequest[];
}

const getRequestTypeClasses = (type: RequestType) => {
  switch (type) {
    case RequestType.GET:
      return "bg-green-100 text-green-800";
    case RequestType.POST:
      return "bg-blue-100 text-blue-800";
    case RequestType.PUT:
      return "bg-yellow-100 text-yellow-800";
    case RequestType.DELETE:
      return "bg-red-100 text-red-800";
    case RequestType.GRAPHQL:
      return "bg-purple-100 text-purple-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export const HistoryList: React.FC<HistoryListProps> = ({ requests }) => {
  return (
    <div className="my-4 rounded-lg bg-gray-100 p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Request History</h2>
      <ul className="space-y-4">
        {requests.map((request, index) => (
          <li
            key={index}
            className="flex flex-col space-y-2 rounded-lg border border-gray-300 bg-white p-4"
          >
            <div className="flex items-center space-x-2">
              <span
                className={`rounded-full px-2 py-1 text-xs font-semibold ${getRequestTypeClasses(request.type)}`}
              >
                {request.type}
              </span>
              <span className="text-sm text-gray-600">{request.url}</span>
            </div>
            <span className="text-xs text-gray-500">
              {new Date(request.timestamp).toLocaleString()}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};
