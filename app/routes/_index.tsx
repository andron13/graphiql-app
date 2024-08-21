import { useState } from "react";
import { Link } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";

import { LoremIpsum } from "~/entities/loremipsum";
import { defaultLanguage } from "~/shared/translations/appStrings";
import { BaseUser, User } from "~/shared/types/types";
import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

const anonymousUser: BaseUser = {
  language: defaultLanguage,
};
export default function Index() {
  const [user, setUser] = useState<BaseUser | User>(anonymousUser);

  return (
    <div className="flex flex-col items-center justify-center bg-gray-100">
      <div className="rounded-lg bg-white p-8 text-center shadow-lg">
        <p>Current Language: {user.language}</p>

        <h1 className="mb-4 text-4xl font-bold text-gray-800">
          Welcome to Our App
        </h1>
        <p className="mb-6 text-lg text-gray-600">
          Discover amazing features and functionality.
        </p>
        <Link
          to="/login"
          className="inline-block rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
        >
          Go to Login
        </Link>
      </div>
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
      <LoremIpsum />
    </div>
  );
}
