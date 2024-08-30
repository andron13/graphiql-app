import { FC } from "react";

import { HistoryRequest } from "~/shared/types";

import { RequestTypeBadge } from "./";

interface HistoryListItemProps {
  request: HistoryRequest;
}

export const HistoryListItem: FC<HistoryListItemProps> = ({ request }) => {
  const germanDate = new Date(request.timestamp).toLocaleString("de-DE");
  return (
    <li className="flex flex-col space-y-2 rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex items-center space-x-2">
        <RequestTypeBadge type={request.type} />
        <span className="text-sm text-gray-600">{request.url}</span>
      </div>
      <span className="text-xs text-gray-500">{germanDate}</span>
    </li>
  );
};
