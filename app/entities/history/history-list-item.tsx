import { FC } from "react";

import { Link } from "@remix-run/react";

import { HistoryRequest } from "~/shared/types";

import { RequestTypeBadge } from "./";

interface HistoryListItemProps {
  request: HistoryRequest;
}

export const HistoryListItem: FC<HistoryListItemProps> = ({ request }) => {
  const germanDate = new Date(request.timestamp).toLocaleString("de-DE");

  const linkStyle = "text-blue-500 hover:underline truncate";

  return (
    <li className="flex flex-col space-y-2 rounded-lg border border-gray-300 bg-white p-4">
      <div className="flex items-center space-x-2">
        <RequestTypeBadge type={request.type} />
        <Link
          to={request.url}
          className={linkStyle}
          title={request.url} // Показываем полный URL при наведении
        >
          {request.shortUrl}
        </Link>
      </div>
      <span className="text-xs text-gray-500">{germanDate}</span>
    </li>
  );
};
