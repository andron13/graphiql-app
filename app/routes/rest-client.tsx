import { useNavigate } from "react-router-dom";

import {
  ResponseSection,
  RestApiRequestSection,
} from "app/entities/clients-forms";

import { UrlencodedFormData } from "~/shared/types";
import { defaultRequestValues } from "~/test/mock";

export default function RestClient() {
  const navigate = useNavigate();
  const handleSubmit = async (data: UrlencodedFormData) => {
    const method = data.method;
    const endpoint = encodeURIComponent(data.endpoint);
    const body = data.body ? encodeURIComponent(data.body) : null;

    const urlPath = `/${method}/${endpoint}`;
    const queryParams = data.headers
      .map(
        (header) =>
          `${encodeURIComponent(header.key)}=${encodeURIComponent(header.value)}`,
      )
      .join("&");

    const fullUrl = queryParams ? `${urlPath}?${queryParams}` : urlPath;
    console.log("Сформированный URL:", fullUrl);

    navigate(fullUrl);
  };

  return (
    <div className="bg-gray-100 p-4">
      <RestApiRequestSection
        defaultValues={defaultRequestValues}
        onSubmit={handleSubmit}
      />
      <ResponseSection />
    </div>
  );
}
