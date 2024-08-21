import * as yup from "yup";

import { IAppStrings } from "~/shared/types";

/*
    Client-side validation should be implemented
    for email and password strength:
         - minimum 8 characters,
         - one digit,
         - one special character,
         - at least one letter; Unicode passwords must be supported.
 */

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
