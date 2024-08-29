import { useNavigate } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";
import { useLanguage, useUser } from "app/shared/context";

import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

export default function Index() {
  const { site_content } = useLanguage();
  const navigate = useNavigate();
  const { user } = useUser();
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        {site_content.welcomeMessage.title}
      </h1>
      <ul>
        <li>User: {"email" in user ? user.email : "Аноним"}</li>
        {"password" in user && <li>Password: {user.password}</li>}
        <li>Language: {user.language}</li>
      </ul>
      <div className="mb-6 flex justify-center space-x-4">
        <button
          onClick={() => navigate("/login")}
          className="w-32 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/login?signup=true")}
          className="registerButton w-32"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
