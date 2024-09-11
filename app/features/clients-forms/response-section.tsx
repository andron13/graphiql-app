import { FC } from "react";

import { JsonBodyViewer } from "~/entities/json-body-viewer";
import { StatusIndicator } from "~/entities/status-indicator";

interface ResponseSectionProps {
  responseStatus: string;
  responseBody: string;
}

export const ResponseSection: FC<ResponseSectionProps> = ({
  responseStatus,
  responseBody,
}) => {
  return (
    <div className="mt-4 rounded-lg bg-white p-4 shadow-md">
      <div className="mb-4">
        <label className="mb-2 block text-lg font-medium text-gray-700">
          Response
        </label>
        <div className="mb-2">
          <label className="mb-1 block text-sm font-medium text-gray-600">
            Status:
          </label>
          <StatusIndicator status={responseStatus} />
        </div>
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Body:
        </label>
        <div className="h-96 overflow-auto rounded border border-gray-300 bg-gray-100 p-2 text-sm">
          <JsonBodyViewer data={responseBody} />
        </div>
      </div>
    </div>
  );
};
