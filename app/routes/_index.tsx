import { useNavigate } from "react-router-dom";

import type { MetaFunction } from "@remix-run/node";

import { SecondaryMenu } from "~/entities/nav/secondary-menu";
import { useLanguage, useUser } from "~/shared/context";
import { frontPageMetaArray } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [...frontPageMetaArray];
};

export default function Index() {
  const { site_content } = useLanguage();
  const { user, isUserLoggedIn } = useUser();
  const isUserLogged = isUserLoggedIn();
  return (
    <>
      <h1 className="mb-4 text-4xl font-bold text-gray-800">
        {isUserLogged
          ? `Welcome back ${"email" in user ? user.email : null}`
          : site_content.welcomeMessage.title}
      </h1>
      <SignInSignUp />
      <SecondaryMenu />
    </>
  );
}

const SignInSignUp = () => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUser();
  if (!isUserLoggedIn()) return null;
  return (
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
  );
};
