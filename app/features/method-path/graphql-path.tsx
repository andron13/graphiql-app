import { useLocation } from "@remix-run/react";

import {
  DocumentationSection,
  GraphiQLClientRequestSection,
  ResponseSection,
} from "~/features/clients-forms";

export const GraphqlPath = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const firstSegment = path.split("/")[1];
  return (
    <div className="bg-gray-100 p-4">
      <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
        GraphQL path: <span className="font-medium">{path}</span>
      </p>
      <p className="m-4 border-l-4 border-green-500 pl-4 text-lg font-semibold text-green-700">
        Url segment: <span className="font-medium">{firstSegment}</span>
      </p>
      <GraphiQLClientRequestSection />
      <ResponseSection />
      <DocumentationSection />
    </div>
  );
};
