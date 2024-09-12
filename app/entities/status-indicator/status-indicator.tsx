import { FC } from "react";

interface StatusIndicatorProps {
  status: string;
}

export const StatusIndicator: FC<StatusIndicatorProps> = ({ status }) => {
  const isSuccess = status.startsWith("2") || status.startsWith("Success");
  const getStatusColor = (status: string) => {
    if (isSuccess) return "text-green-600";
    if (status.startsWith("4")) return "text-yellow-600";
    if (status.startsWith("5")) return "text-red-600";
    return "text-gray-600";
  };

  return (
    <input
      type="text"
      value={status}
      readOnly
      className={`text w-full rounded border border-gray-300 bg-gray-50 p-2 font-semibold ${getStatusColor(status)}`}
    />
  );
};
