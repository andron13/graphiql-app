import { useState } from "react";

import { useLocation, useNavigate } from "@remix-run/react";

import { defaultRequestValues } from "~/__mock__";
import {
  ResponseSection,
  RestApiRequestSection,
} from "~/features/clients-forms";
import { RoutesLayout } from "~/layouts";
import { useRequestHistory } from "~/shared/hooks";
import { FormValues, RestRequestType } from "~/shared/types";
import { decodeRequestUrl, encodeRequestUrl } from "~/shared/url";
import { sendRequest } from "~/shared/url/send-request";

// Компонент обработки запросов клиента
export function RestClientPathHandler() {
  const { addRequestToHistory } = useRequestHistory();
  const location = useLocation();
  const navigate = useNavigate();

  // Состояния для загрузки, ошибок и ответа
  const [response, setResponse] = useState<any>(null);
  const [error, setError] = useState<Error | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const urlForDecode = location.pathname + location.search;
  const decodedData: FormValues = decodeRequestUrl(urlForDecode);
  const requestData: FormValues = decodedData.endpoint
    ? decodedData
    : defaultRequestValues;

  // Обработчик отправки формы
  const handleSubmit = async (data: FormValues) => {
    console.log("Submitting data:", data);
    const method = data.method as RestRequestType;
    const encodedUrl = encodeRequestUrl(data);

    const request = {
      timestamp: Date.now(),
      type: method,
      url: encodedUrl,
      shortUrl: data.endpoint,
    };

    addRequestToHistory(request);
    navigate(encodedUrl);

    // Устанавливаем состояние загрузки
    setLoading(true);
    setError(null);

    // Преобразование массива заголовков в объект
    const headersObject: Record<string, string> = data.headers.reduce(
      (acc, { key, value }) => {
        acc[key] = value;
        return acc;
      },
      {} as Record<string, string>,
    );

    try {
      const result = await sendRequest({
        method,
        endpoint: data.endpoint,
        headers: headersObject,
        body: data.body,
      });
      setResponse(result.response);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <RoutesLayout>
      <div className="bg-gray-100 p-8">
        <RestApiRequestSection onSubmit={handleSubmit} data={requestData} />
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        <ResponseSection
          responseStatus={response ? "Success" : "N/A"}
          responseBody={response ? JSON.stringify(response, null, 2) : ""}
        />
      </div>
    </RoutesLayout>
  );
}
