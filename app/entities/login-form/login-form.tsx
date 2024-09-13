import { useEffect, useState } from "react";

import { useNavigate } from "@remix-run/react";

import { SignInForm, SignUpForm } from "~/entities/login-form";
import { useLanguage, useUser } from "~/shared/context";

interface LoginFormProps {
  isSignup?: boolean;
}

export const LoginForm = ({ isSignup = false }: LoginFormProps) => {
  const navigate = useNavigate();
  const { isUserLoggedIn } = useUser();
  const isUserLogged = isUserLoggedIn();
  useEffect(() => {
    if (isUserLogged) {
      navigate("/");
    }
  });
  const [isRegistering, setIsRegistering] = useState(isSignup);
  const authForm = isRegistering ? <SignUpForm /> : <SignInForm />;
  const { site_content } = useLanguage();
  return (
    <div className="text flex w-96 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex gap-1">
          <button
            onClick={() => setIsRegistering(false)}
            className={`flex-1 rounded-t-lg p-2 font-semibold ${
              !isRegistering
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {site_content.signIn}
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`flex-1 rounded-t-lg p-2 font-semibold ${
              isRegistering
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            {site_content.signUp}
          </button>
        </div>
        {authForm}
      </div>
    </div>
  );
};
