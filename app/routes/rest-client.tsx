import { useNavigate } from "@remix-run/react";

import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { UrlencodedFormData } from "~/shared/types";
import { defaultRequestValues } from "~/test/mock";

export default function RestClient() {
  const navigate = useNavigate();
  const handleSubmit = async (data: UrlencodedFormData) => {
    const method = data.method;
    const endpoint = encodeURIComponent(data.endpoint);

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
