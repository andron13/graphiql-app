import { SubmitHandler, useForm } from "react-hook-form";

import { signInWithEmailAndPassword } from "@firebase/auth";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "@remix-run/react";

import { auth } from "~/shared/authentification/firebase";
import { useLanguage, useUser } from "~/shared/context";
import { AccountCredentials } from "~/shared/types";
import { createYupSchemaSignIn } from "~/shared/validation/validationSchema";

export function SignInForm() {
  const navigate = useNavigate();
  const { login: loginContext } = useUser();
  const { site_content } = useLanguage();
  const yupSchema = createYupSchemaSignIn(site_content);

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<AccountCredentials>({
    resolver: yupResolver(yupSchema),
  });

  const onSubmit: SubmitHandler<AccountCredentials> = async (data) => {
    const { email, password } = data;
    const invalidCredentials = site_content.authErrors.invalidCredentials;
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password,
      );
      const firebaseUser = userCredential.user;
      if (firebaseUser) {
        loginContext(email, password);
        navigate("/rest-client");
      }
    } catch (error) {
      setError("email", {
        type: "firebase",
        message: invalidCredentials,
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between space-y-4"
    >
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          {site_content.emailConfig.email}
        </label>
        <input
          type="text"
          {...register("email")}
          name="email"
          className="textInput"
          id="email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>
      <div>
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="password"
        >
          {site_content.emailConfig.password}
        </label>
        <input
          type="password"
          {...register("password")}
          name="password"
          className="textInput"
          id="password"
        />
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>
      <button type="submit" className="registerButton">
        {site_content.submit}
      </button>
    </form>
  );
}
