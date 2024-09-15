import { FC } from "react";

import { dummySdlResponse } from "~/__mock__/dummy-response-values";
import { JsonBodyViewer } from "~/entities/json-body-viewer";

interface DocumentationSectionProps {
  sdlResponse?: string;
}

export const DocumentationSection: FC<DocumentationSectionProps> = ({
  sdlResponse = dummySdlResponse,
}) => {
  return (
    <div className="mt-4 rounded bg-white p-4 shadow">
      <h2 className="mb-2 text-lg font-medium">Documentation</h2>
      <div className="rounded border border-gray-300 bg-gray-50 p-2">
        <JsonBodyViewer data={sdlResponse} />
      </div>
    </div>
  );
};
