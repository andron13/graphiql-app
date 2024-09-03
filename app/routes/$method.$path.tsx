import { json } from "@remix-run/node";
import { useLoaderData, useLocation, useParams } from "@remix-run/react";

export const loader = async ({ request }: { request: Request }) => {
  const url = new URL(request.url);
  const method = request.method;

  const body =
    method !== "GET" && method !== "HEAD" ? await request.text() : null;

  console.log("Method:", method);
  console.log("URL:", url.pathname);
  console.log("Body:", body);

  return json({ method, url: url.pathname, body });
};

interface LoaderData {
  method: string;
  url: string;
  body: string | null;
}

export default function PostHandler() {
  const data = useLoaderData<LoaderData>(); // Указываем тип данных
  const params = useParams();
  const location = useLocation();

  return (
    <div className="rounded-lg bg-white p-6 shadow-lg">
      <h2 className="mb-4 text-3xl font-bold text-blue-600">
        Полученные данные:
      </h2>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-800">
        {JSON.stringify(data, null, 2)}
      </pre>

      <h3 className="mb-2 mt-6 text-2xl font-semibold text-green-600">
        URL из окна браузера:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-800">
        {location.pathname}
      </pre>

      <h3 className="mb-2 mt-6 text-2xl font-semibold text-purple-600">
        URL из данных:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-800">
        {data.url}
      </pre>

      <h3 className="mb-2 mt-6 text-2xl font-semibold text-red-600">
        Параметры маршрута:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-100 p-4 text-gray-800">
        {params.path}
      </pre>
    </div>
  );
}
