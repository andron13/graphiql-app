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
    <div className="rounded-lg bg-white p-8 shadow-xl ring-1 ring-gray-200">
      <h2 className="mb-6 border-b-2 border-blue-300 pb-2 text-4xl font-extrabold text-blue-700">
        Полученные данные:
      </h2>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
        {JSON.stringify(data, null, 2)}
      </pre>

      <h3 className="mb-4 mt-8 border-b-2 border-green-300 pb-2 text-3xl font-semibold text-green-700">
        URL из окна браузера:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
        {location.pathname}
      </pre>

      <h3 className="mb-4 mt-8 border-b-2 border-purple-300 pb-2 text-3xl font-semibold text-purple-700">
        URL из данных:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
        {data.url}
      </pre>

      <h3 className="mb-4 mt-8 border-b-2 border-red-300 pb-2 text-3xl font-semibold text-red-700">
        Параметры маршрута:
      </h3>
      <pre className="overflow-x-auto rounded-lg border border-gray-300 bg-gray-50 p-5 text-gray-900 shadow-inner">
        {params.path}
      </pre>
    </div>
  );
}
