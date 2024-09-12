import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";

import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/outline";
import { yupResolver } from "@hookform/resolvers/yup";

import { registerWithEmailAndPassword } from "~/shared/authentification";
import { useLanguage } from "~/shared/context";
import { AccountRegistration } from "~/shared/types";
import { createYupSchema } from "~/shared/validation";

export function SignUpForm() {
  const { site_content } = useLanguage();
  const yupSchema = createYupSchema(site_content);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<AccountRegistration>({
    resolver: yupResolver(yupSchema),
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => setShowPassword((prev) => !prev);

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prev) => !prev);
  };

  const onSubmit: SubmitHandler<AccountRegistration> = async (data) => {
    const { email, password } = data;
    try {
      await registerWithEmailAndPassword(email, password);
    } catch (error) {
      console.error("Ошибка регистрации:", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-between space-y-4"
    >
      <div>
        <label className="passwordLabel" htmlFor="email">
          Email:
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
          Password:
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
          Confirm Password:
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
      <button type="submit" className="registerButton">
        {site_content.register}
      </button>
    </form>
  );
}
