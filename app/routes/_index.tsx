import type { MetaFunction } from "@remix-run/node";
import { useNavigate } from "@remix-run/react";

import { SecondaryMenu } from "~/entities/nav";
import { useLanguage, useUser } from "~/shared/context";
import websiteConfig from "~/shared/website-config";
import { metatags } from "~/shared/website-config/meta-semantic";

export const meta: MetaFunction = () => {
  return [
    { title: websiteConfig.name },
    { name: metatags.description, content: websiteConfig.description },
  ];
};

export default function Index() {
  const { site_content } = useLanguage();
  const { user, isUserLoggedIn } = useUser();
  const isUserLogged = isUserLoggedIn();
  return (
    <>
      <h1 className="mb-4 text-2xl font-bold text-gray-800">
        {site_content.welcomeMessage.title}{" "}
        {isUserLogged && ` ${"email" in user && user.email}!`}
      </h1>
      <SignInSignUp />
      {isUserLogged && <SecondaryMenu />}
    </>
  );
}

const SignInSignUp = () => {
  const navigate = useNavigate();
  const { site_content } = useLanguage();
  const { isUserLoggedIn } = useUser();
  if (isUserLoggedIn()) return null;
  return (
    <div className="mb-6 flex justify-center space-x-4">
      <button
        onClick={() => navigate("/login")}
        className="w-48 rounded-md bg-blue-600 px-4 py-2 font-semibold text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
        {site_content.signIn}
      </button>
      <button
        onClick={() => navigate("/login?signup=true")}
        className="registerButton w-48"
      >
        {site_content.signUp}
      </button>
    </div>
  );
};
