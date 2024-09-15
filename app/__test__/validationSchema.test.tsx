import { describe, expect, it } from "vitest";

import { IAppStrings } from "~/shared/types";
import { createYupSchema, createYupSchemaSignIn } from "~/shared/validation";

const siteContent: IAppStrings = {
  websiteConfig: {
    name: "",
    description: "",
  },
  validationErrors: {
    emailRequired: "Email is required",
    emailInvalid: "Email is invalid",
    passwordRequired: "Password is required",
    passwordStrength:
      "Password must be at least 8 characters long, contain one digit, one special character, and one letter",
    confirmPasswordRequired: "Confirm password is required",
    passwordsMustMatch: "Passwords must match",
    invalidEmailPassword: "Invalid email or password",
  },
  welcomeMessage: {
    title: "",
    subtitle: "",
    mission: "",
  },
  secondaryMenu: {
    restClient: "",
    graphiqlClient: "",
    history: "",
  },
  signIn: "",
  signOut: "",
  signUp: "",
  submit: "",
  register: "",
  websiteErrors: {
    siteNotFound: "",
    pageNotFoundMessage: "",
    wrongTurnMessage: "",
    goBackToHomepage: "",
  },
  emailConfig: {
    email: "",
    password: "",
    confirmPassword: "",
  },
  languageLabels: {
    en_GB: "English",
    de_DE: "Deutsch",
    ru_RU: "Русский",
  },
  authErrors: {
    invalidCredentials: "Invalid email or password.",
    accountLocked: "Your account is locked. Please contact support.",
    passwordExpired: "Your password has expired. Please reset it.",
    tooManyAttempts: "Too many login attempts. Please try again later.",
    emailInUseError: "A user with this email already exists",
  },
  registrationMessages: {
    registrationFailed: "Registration failed. Please try again.",
    registrationSuccessful: "Registration successful! Welcome aboard.",
  },
};
describe("createYupSchema", () => {
  it("should validate a correct password", async () => {
    const schema = createYupSchema(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "PasswordIsValid@1",
        confirmPassword: "PasswordIsValid@1",
      }),
    ).resolves.toBeTruthy();
  });

  it("should invalidate a password that is too short", async () => {
    const schema = createYupSchema(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "Pass@1",
        confirmPassword: "Pass@1",
      }),
    ).rejects.toThrow(siteContent.validationErrors.passwordStrength);
  });

  it("should invalidate a password without a digit", async () => {
    const schema = createYupSchema(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "Password@",
        confirmPassword: "Password@",
      }),
    ).rejects.toThrow(siteContent.validationErrors.passwordStrength);
  });

  it("should invalidate a password without a special character", async () => {
    const schema = createYupSchema(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "Password1",
        confirmPassword: "Password1",
      }),
    ).rejects.toThrow(siteContent.validationErrors.passwordStrength);
  });

  it("should invalidate passwords that do not match", async () => {
    const schema = createYupSchema(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "PasswordIsValid@1",
        confirmPassword: "InPasswordIsValid@1",
      }),
    ).rejects.toThrow(siteContent.validationErrors.passwordsMustMatch);
  });
});

describe("createYupSchemaSignIn", () => {
  it("should validate correct credentials", async () => {
    const schema = createYupSchemaSignIn(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "PasswordIsValid@1",
      }),
    ).resolves.toBeTruthy();
  });

  it("should invalidate missing email", async () => {
    const schema = createYupSchemaSignIn(siteContent);

    await expect(
      schema.validate({
        email: "",
        password: "PasswordIsValid@1",
      }),
    ).rejects.toThrow(siteContent.validationErrors.emailRequired);
  });

  it("should invalidate invalid email", async () => {
    const schema = createYupSchemaSignIn(siteContent);

    await expect(
      schema.validate({
        email: "invalid-email",
        password: "PasswordIsValid@1",
      }),
    ).rejects.toThrow(siteContent.validationErrors.emailInvalid);
  });

  it("should invalidate missing password", async () => {
    const schema = createYupSchemaSignIn(siteContent);

    await expect(
      schema.validate({
        email: "test@example.com",
        password: "",
      }),
    ).rejects.toThrow(siteContent.validationErrors.passwordRequired);
  });
});
