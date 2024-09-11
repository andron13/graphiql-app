import * as yup from "yup";

import { IAppStrings } from "~/shared/types";

const hasMinLength = (password: string, length: number = 8) =>
  password.length >= length;

const hasDigit = (password: string) => /[0-9]/.test(password);

const hasSpecialChar = (password: string) =>
  /[!@#$%^&*(),.?":{}|<>]/.test(password);

const hasLetter = (password: string): boolean => {
  const letterRegex = /\p{L}/u;
  return [...password].some((char) => letterRegex.test(char));
};

const passwordStrengthTest = (password: string) => {
  return (
    hasMinLength(password, 8) &&
    hasLetter(password) &&
    hasDigit(password) &&
    hasSpecialChar(password)
  );
};

export const createYupSchema = (site_content: IAppStrings) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .required(site_content.validationErrors.emailRequired)
      .email(site_content.validationErrors.emailInvalid),
    password: yup
      .string()
      .required(site_content.validationErrors.passwordRequired)
      .test(
        "password-strength",
        site_content.validationErrors.passwordStrength,
        passwordStrengthTest,
      ),
    confirmPassword: yup
      .string()
      .required(site_content.validationErrors.confirmPasswordRequired)
      .oneOf(
        [yup.ref("password")],
        site_content.validationErrors.passwordsMustMatch,
      ),
  });

export const createYupSchemaSignIn = (site_content: IAppStrings) =>
  yup.object({
    email: yup
      .string()
      .trim()
      .required(site_content.validationErrors.emailRequired)
      .email(site_content.validationErrors.emailInvalid),
    password: yup
      .string()
      .required(site_content.validationErrors.passwordRequired),
  });
