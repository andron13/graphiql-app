import { FC } from "react";

import { JsonBodyViewer } from "~/entities/json-body-viewer";
import { StatusIndicator } from "~/entities/status-indicator";

export interface ApiResponse {
  status?: string | number;
  body?: string;
}

interface ResponseSectionProps {
  response: ApiResponse | null;
}

export const ResponseSection: FC<ResponseSectionProps> = ({ response }) => {
  const responseStatus = response?.status ?? "N/A";
  const responseBody = response?.body ?? "";

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
          <div className="rounded border border-gray-300 bg-gray-50 p-2">
            <div className="flex items-center space-x-2">
              <StatusIndicator status={responseStatus.toString()} />
            </div>
          </div>
        </div>
        <label className="mb-1 block text-sm font-medium text-gray-600">
          Body:
        </label>
        <div className="h-96 overflow-auto rounded border border-gray-300 bg-gray-100 p-2 text-sm">
          {responseBody ? (
            <JsonBodyViewer data={responseBody} />
          ) : (
            <span className="text-gray-600">no body</span>
          )}
        </div>
      </div>
    </div>
  );
};
