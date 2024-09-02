import {
  ResponseSection,
  RestApiRequestSection,
} from "app/entities/clients-forms";

export default function RestClient() {
  return (
    <div className="bg-gray-100 p-4">
      <RestApiRequestSection />
      <ResponseSection />
    </div>
  );
}
