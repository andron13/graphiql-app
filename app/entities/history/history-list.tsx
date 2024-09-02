import { FC } from "react";

import { HistoryRequest } from "~/shared/types";
import { mockHistory } from "~/test/mock";

import { HistoryListItem } from "./";

interface HistoryListProps {
  requests: HistoryRequest[];
}

export const HistoryList: FC<HistoryListProps> = ({ requests }) => {
  const data = [...requests, ...mockHistory];
  return (
    <div className="my-4 rounded-lg bg-gray-100 p-4 shadow-md">
      <h2 className="mb-4 text-2xl font-semibold">Request History</h2>
      <ul className="space-y-4">
        {data.map((request) => {
          const keyToString = request.timestamp + request.url + request.type;
          return <HistoryListItem key={keyToString} request={request} />;
        })}
      </ul>
    </div>
  );
};
