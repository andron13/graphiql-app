import { Link } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";

import { LoremIpsum } from "~/entities/loremipsum";
import { useUser } from "~/shared/store";
import { LanguageCode } from "~/shared/types";
import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

export default function Index() {
  const { user, setLanguage } = useUser();

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100">
      <div className="w-11/12 max-w-lg rounded-lg bg-white p-8 text-center shadow-lg">
        <div className="mb-4">
          <p className="text-gray-700">
            Current Language: <strong>{user.language}</strong>
          </p>
          <div className="mt-4 flex justify-center space-x-4">
            <button
              onClick={() => setLanguage(LanguageCode.DE_DE)}
              className="rounded-md bg-blue-500 px-4 py-2 font-medium text-white transition duration-200 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Switch to German
            </button>
            <button
              onClick={() => setLanguage(LanguageCode.EN_GB)}
              className="rounded-md bg-green-500 px-4 py-2 font-medium text-white transition duration-200 ease-in-out hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            >
              Switch to English
            </button>
          </div>
        </div>
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to Our App
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Discover amazing features and functionality.
        </p>
        <Link
          to="/login"
          className="inline-block rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Go to Login
        </Link>
      </div>
      <div className="mt-8 w-11/12 max-w-lg">
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
        <LoremIpsum />
      </div>
    </div>
  );
}
