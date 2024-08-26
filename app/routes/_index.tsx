import { useNavigate } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";
import { useLanguage } from "app/shared/context";

import LoginForm from "~/entities/login-form/login-form";
import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

export default function Index() {
  const { site_content } = useLanguage();
  const navigate = useNavigate();

  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        {site_content.welcomeMessage.title}
      </h1>
      <div className="mb-6 flex">
        <button
          onClick={() => navigate("/login")}
          className="flex-1 rounded-t-lg bg-indigo-600 py-2 text-lg font-semibold text-white"
        >
          Sign In
        </button>
        <button
          onClick={() => navigate("/login?signup=true")}
          className="flex-1 rounded-t-lg bg-indigo-600 py-2 text-lg font-semibold text-white"
        >
          Sign Up
        </button>
      </div>
    </>
  );
}
