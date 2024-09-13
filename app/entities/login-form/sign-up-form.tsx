import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";
import { useNavigate } from "@remix-run/react";

import { registerWithEmailAndPassword } from "~/shared/authentification";
import { useLanguage, useUser } from "~/shared/context";
import { AccountRegistration } from "~/shared/types";
import { createYupSchema } from "~/shared/validation";

export function SignUpForm() {
  const navigate = useNavigate();
  const { login: loginContext } = useUser();
  const { site_content } = useLanguage();
  const yupSchema = createYupSchema(site_content);
  const registrationFailed: string =
    site_content.registrationMessages.registrationFailed;
  const registrationSuccessful: string =
    site_content.registrationMessages.registrationSuccessful;
  const emailInUseError: string = site_content.authErrors.emailInUseError;
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountRegistration>({
    resolver: yupResolver(yupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<AccountRegistration> = async (data) => {
    const { email, password } = data;
    const timeout = 1000;
    try {
      await registerWithEmailAndPassword(email, password);
      setSuccessMessage(registrationSuccessful);
      setErrorMessage(null);

      setTimeout(() => {
        loginContext(email, password);
        setTimeout(() => {
          navigate("/rest-client");
        }, timeout);
      }, timeout);
    } catch (error) {
      const firebaseError = error as Error;
      if (
        (firebaseError as unknown as { code: string }).code ===
        "auth/email-already-in-use"
      ) {
        setErrorMessage(emailInUseError);
      } else {
        setErrorMessage(registrationFailed);
      }
      setSuccessMessage(null);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between space-y-4"
    >
      <div>
        <label className="passwordLabel" htmlFor="email">
          {site_content.emailConfig.email}
        </label>
        <input
          type="text"
          {...register("email")}
          className="textInput"
          id="email"
        />
        {errors.email && (
          <span className="text-sm text-red-500">{errors.email.message}</span>
        )}
      </div>

      <div>
        <label className="passwordLabel" htmlFor="password">
          {site_content.emailConfig.password}
        </label>
        <div className="relative flex items-center">
          <input
            type={showPassword ? "text" : "password"}
            {...register("password")}
            className="textInput"
            id="password"
          />
          <button
            id="show-password"
            type="button"
            onClick={togglePasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
          >
            {showPassword ? (
              <EyeSlashIcon className="eyebrow" />
            ) : (
              <EyeIcon className="eyebrow" />
            )}
          </button>
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">
            {errors.password.message}
          </span>
        )}
      </div>

      <div>
        <label className="passwordLabel" htmlFor="confirmPassword">
          {site_content.emailConfig.confirmPassword}
        </label>

        <div className="relative">
          <input
            type={showConfirmPassword ? "text" : "password"}
            {...register("confirmPassword")}
            className="textInput"
            id="confirmPassword"
          />
          <button
            id="show-confirmPassword"
            type="button"
            onClick={toggleConfirmPasswordVisibility}
            className="absolute inset-y-0 right-0 flex items-center px-2 text-sm text-gray-500"
          >
            {showConfirmPassword ? (
              <EyeSlashIcon className="eyebrow" />
            ) : (
              <EyeIcon className="eyebrow" />
            )}
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="text-sm text-red-500">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>

      {successMessage && <div className="text-green-500">{successMessage}</div>}
      {errorMessage && <div className="text-red-500">{errorMessage}</div>}

      <button type="submit" className="registerButton">
        {site_content.register}
      </button>
    </form>
  );
}
