import { Link } from "react-router-dom";

import { useLanguage, useUser } from "app/shared/context";

import { LoremIpsum } from "~/entities/loremipsum";

export default function About() {
  const { site_content } = useLanguage();
  const { user } = useUser();

  return (
    <>
      <article>
        <div className="rounded-lg bg-white p-8 text-center shadow-lg">
          <h1 className="mb-4 text-4xl font-semibold text-gray-800">
            {site_content.welcomeMessage.title}
          </h1>
          <p className="text-lg text-gray-600">
            {site_content.welcomeMessage.subtitle}
          </p>
          <ul>
            {"email" in user && <li>Email: {user.email}</li>}
            {"password" in user && <li>Password: {user.password}</li>}
            <li>Language: {user.language}</li>
          </ul>
        </div>
        <p className="pt-8 text-center">Test text</p>
      </article>
      <LoremIpsum />
      <p className="mb-6 text-lg text-gray-600">
        {site_content.welcomeMessage.mission}
      </p>

      <Link
        to="/login"
        className="inline-block rounded-md bg-indigo-600 px-6 py-3 font-semibold text-white shadow-md transition duration-200 ease-in-out hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Go to Login
      </Link>
    </>
  );
}
