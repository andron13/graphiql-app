import { useState } from "react";

import { LoginForm, RegisterForm } from "~/entities/login-form";

export default function Auth() {
  const [isRegistering, setIsRegistering] = useState(false);
  const authForm = isRegistering ? <RegisterForm /> : <LoginForm />;

  return (
    <div className="flex w-96 items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-4xl rounded-lg bg-white p-8 shadow-lg">
        <div className="mb-6 flex">
          <button
            onClick={() => setIsRegistering(false)}
            className={`flex-1 rounded-t-lg py-2 text-lg font-semibold ${
              !isRegistering
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Login
          </button>
          <button
            onClick={() => setIsRegistering(true)}
            className={`flex-1 rounded-t-lg py-2 text-lg font-semibold ${
              isRegistering
                ? "bg-indigo-600 text-white"
                : "bg-gray-200 text-gray-700"
            }`}
          >
            Register
          </button>
        </div>
        {authForm}
      </div>
    </div>
  );
}
