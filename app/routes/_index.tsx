import { Link } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "app/shared/context";

import { LoremIpsum } from "~/entities/loremipsum";
import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

export default function Index() {
  const { site_content } = useLanguage();

  return (
    <>
      <div className="mt-10 w-11/12 max-w-lg rounded-lg bg-white p-8 text-center shadow-lg">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          {site_content.welcomeMessage.title}
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          {site_content.welcomeMessage.mission}
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
      </div>
    </>
  );
}
