import { FC } from "react";

interface ResponseSectionProps {
  responseStatus: string;
  responseBody: string;
}

export const ResponseSection: FC<ResponseSectionProps> = ({
  responseStatus,
  responseBody,
}) => {
  return (
    <div className="mt-4 rounded-lg bg-white p-4 shadow">
      <div className="mb-4">
        <label className="mb-2 block font-medium">Response</label>
        <div className="mb-2">
          <label className="mb-1 block">Status:</label>
          <input
            type="text"
            value={responseStatus}
            readOnly
            className="w-full rounded border border-gray-300 bg-gray-50 p-2"
          />
        </div>
        <label className="mb-1 block">Body:</label>
        <textarea
          value={responseBody}
          readOnly
          className="h-32 w-full rounded border border-gray-300 bg-gray-50 p-2"
        />
      </div>
    </div>
  );
};
