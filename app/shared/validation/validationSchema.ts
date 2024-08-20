import * as yup from "yup";

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

export const yupSchema = yup.object({
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .email("Email must be a valid email address"),
  password: yup
    .string()
    .required("Password is required")
    .test(
      "password-strength",
      "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
      passwordStrengthTest,
    ),
  confirmPassword: yup
    .string()
    .required("Confirm Password is required")
    .oneOf([yup.ref("password")], "Passwords must match"),
});
