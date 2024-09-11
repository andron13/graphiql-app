import { IAppStrings } from "../types";

export const en: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "The application allows users to interact with RESTful APIs and GraphQL endpoints, offering method selection, URL input, headers editing, and response viewing.",
  },
  welcomeMessage: {
    title: "Welcome",
    subtitle: "Welcome to our website!",
    mission: "Discover amazing features and functionality.",
  },
  secondaryMenu: {
    restClient: "Rest Client",
    graphiqlClient: "GraphiQL Client",
    history: "History",
  },
  signIn: "Sign In",
  signOut: "Sign Out",
  signUp: "Sign Up",
  submit: "Submit",
  register: "Register",
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
  websiteErrors: {
    siteNotFound: "Page not found",
    pageNotFoundMessage: "We can't find the page at:",
    wrongTurnMessage:
      "It looks like you took a wrong turn. Please go back to the homepage to find what you are looking for.",
    goBackToHomepage: "Go back to the homepage",
  },
};
