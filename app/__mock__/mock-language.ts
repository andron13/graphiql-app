export const mockLanguageValidationErrors = {
  site_content: {
    submit: "Submit",
    emailConfig: {
      email: "Email",
      password: "Password",
    },
    validationErrors: {
      emailRequired: "Email is required",
      emailInvalid: "Email must be a valid email address",
      passwordRequired: "Password is required",
      passwordStrength:
        "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
      confirmPasswordRequired: "Confirm Password is required",
      passwordsMustMatch: "Passwords must match",
      invalidEmailPassword: "Invalid email or password",
    },
  },
};
