import {
  DocumentationSection,
  GraphiQLClientRequestSection,
  ResponseSection,
} from "~/entities/clients-forms";

export default function GraphiQLClient() {
  return (
    <div className="bg-gray-100 p-4">
      <GraphiQLClientRequestSection />
      <ResponseSection />
      <DocumentationSection />
    </div>
  );
}
