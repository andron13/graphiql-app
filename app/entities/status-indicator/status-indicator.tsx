import { FC } from "react";

interface StatusIndicatorProps {
  status: string;
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => {
  const statusCode = parseInt(status, 10);

  const getStatusColor = (code: number) => {
    if (code >= 200 && code < 300) return "text-green-600"; // 2xx Success
    if (code >= 300 && code < 400) return "text-blue-600"; // 3xx Redirection
    if (code >= 400 && code < 500) return "text-yellow-600"; // 4xx Client Error
    if (code >= 500 && code < 600) return "text-red-600"; // 5xx Server Error
    return "text-gray-600";
  };

  const getStatusMessage = (code: number) => {
    if (code >= 200 && code < 300) return "Success";
    if (code >= 300 && code < 400) return "Redirected";
    if (code >= 400 && code < 500) return "Client Error";
    if (code >= 500 && code < 600) return "Server Error";
    return "Unknown Status";
  };

  const statusNumber = isNaN(statusCode) ? -1 : statusCode;

  return (
    <div
      className={`flex w-full justify-between rounded border border-gray-300 bg-gray-50 px-4 py-2 font-semibold ${getStatusColor(statusNumber)}`}
    >
      <span>{getStatusMessage(statusNumber)}</span>
      <span className="ml-2 font-medium text-gray-900">{status}</span>
    </div>
  );
};
