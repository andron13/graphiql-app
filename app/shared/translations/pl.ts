import { IAppStrings, LanguageCode } from "../types";

export const pl: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "Aplikacja umożliwia użytkownikom interakcję z API RESTful i punktami końcowymi GraphQL, oferując wybór metod, wprowadzanie URL, edytowanie nagłówków i przeglądanie odpowiedzi.",
  },
  welcomeMessage: {
    title: "Witamy",
    subtitle: "Witamy na naszej stronie!",
    mission: "Odkryj niesamowite funkcje i możliwości.",
  },
  secondaryMenu: {
    restClient: "Rest Client",
    graphiqlClient: "GraphiQL Client",
    history: "Historia",
  },
  signIn: "Zaloguj się",
  signOut: "Wyloguj się",
  signUp: "Zarejestruj się",
  submit: "Prześlij",
  register: "Zarejestruj się",
  validationErrors: {
    emailRequired: "Email jest wymagany",
    emailInvalid: "Email musi być prawidłowym adresem",
    passwordRequired: "Hasło jest wymagane",
    passwordStrength:
      "Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej 1 cyfrę, jeden znak specjalny i co najmniej jedną literę",
    confirmPasswordRequired: "Potwierdzenie hasła jest wymagane",
    passwordsMustMatch: "Hasła muszą się zgadzać",
    invalidEmailPassword: "Nieprawidłowy email lub hasło",
  },
  websiteErrors: {
    siteNotFound: "Strona nie znaleziona",
    pageNotFoundMessage: "Nie możemy znaleźć strony pod adresem:",
    wrongTurnMessage:
      "Wygląda na to, że się zgubiłeś. Wróć na stronę główną, aby znaleźć to, czego szukasz.",
    goBackToHomepage: "Wróć na stronę główną",
  },
  emailConfig: {
    email: "E-mail",
    password: "Hasło",
    confirmPassword: "Potwierdź hasło",
  },
  languageLabels: {
    [LanguageCode.EN_GB]: "Angielski",
    [LanguageCode.DE_DE]: "Niemiecki",
    [LanguageCode.RU_RU]: "Rosyjski",
    [LanguageCode.BE_BY]: "Białoruski",
    [LanguageCode.UK_UA]: "Ukraiński",
    [LanguageCode.PL_PL]: "Polski",
    [LanguageCode.JA_JP]: "Japoński",
  },
  authErrors: {
    invalidCredentials: "Nieprawidłowy adres e-mail lub hasło.",
    accountLocked:
      "Twoje konto jest zablokowane. Skontaktuj się z pomocą techniczną.",
    passwordExpired: "Twoje hasło wygasło. Proszę je zresetować.",
    tooManyAttempts:
      "Zbyt wiele prób logowania. Proszę spróbować ponownie później.",
    emailInUseError: "Użytkownik o tym emailu już istnieje",
  },
  registrationMessages: {
    registrationFailed:
      "Rejestracja nie powiodła się. Proszę spróbować ponownie.",
    registrationSuccessful:
      "Rejestracja zakończona sukcesem! Witamy na pokładzie.",
  },
};
