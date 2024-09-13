import { IAppStrings, LanguageCode } from "~/shared/types";

export const de: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "Die Anwendung ermöglicht es Benutzern, mit RESTful APIs und GraphQL-Endpunkten zu interagieren. Sie bietet die Auswahl von Methoden, die Eingabe von URLs, das Bearbeiten von Headern und das Anzeigen von Antworten.",
  },
  welcomeMessage: {
    title: "Willkommen",
    subtitle: "Willkommen auf unserer Website!",
    mission: "Entdecken Sie erstaunliche Funktionen und Möglichkeiten.",
  },
  secondaryMenu: {
    restClient: "Rest-Client",
    graphiqlClient: "GraphiQL-Client",
    history: "Verlauf",
  },
  signIn: "Anmelden",
  signOut: "Abmelden",
  signUp: "Registrieren",
  submit: "Absenden",
  register: "Registrieren",
  validationErrors: {
    emailRequired: "E-Mail ist erforderlich",
    emailInvalid: "E-Mail muss eine gültige E-Mail-Adresse sein",
    passwordRequired: "Passwort ist erforderlich",
    passwordStrength:
      "Passwort muss mindestens 8 Zeichen lang sein und mindestens 1 Zahl, ein Sonderzeichen sowie mindestens einen Buchstaben enthalten (Unicode-Zeichen werden unterstützt)",
    confirmPasswordRequired: "Bestätigungs-Passwort ist erforderlich",
    passwordsMustMatch: "Passwörter müssen übereinstimmen",
    invalidEmailPassword: "Ungültige E-Mail oder Passwort",
  },
  websiteErrors: {
    siteNotFound: "Seite nicht gefunden",
    pageNotFoundMessage:
      "Wir können die Seite unter folgender Adresse nicht finden:",
    wrongTurnMessage:
      "Es scheint, dass Sie sich verirrt haben. Bitte gehen Sie zur Startseite zurück, um das Gesuchte zu finden.",
    goBackToHomepage: "Zur Startseite zurückkehren",
  },
  emailConfig: {
    email: "E-Mail",
    password: "Passwort",
    confirmPassword: "Passwort bestätigen",
  },
  languageLabels: {
    [LanguageCode.EN_GB]: "Englisch",
    [LanguageCode.DE_DE]: "Deutsch",
    [LanguageCode.RU_RU]: "Russisch",
    [LanguageCode.BE_BY]: "Weißrussisch",
    [LanguageCode.UK_UA]: "Ukrainisch",
    [LanguageCode.PL_PL]: "Polnisch",
    [LanguageCode.JA_JP]: "Japanisch",
  },
  authErrors: {
    invalidCredentials: "Ungültige E-Mail-Adresse oder Passwort.",
    accountLocked:
      "Ihr Konto ist gesperrt. Bitte kontaktieren Sie den Support.",
    passwordExpired: "Ihr Passwort ist abgelaufen. Bitte setzen Sie es zurück.",
    tooManyAttempts:
      "Zu viele Anmeldeversuche. Bitte versuchen Sie es später erneut.",
    emailInUseError: "Ein Benutzer mit dieser E-Mail-Adresse existiert bereits",
  },
  registrationMessages: {
    registrationFailed:
      "Registrierung fehlgeschlagen. Bitte versuchen Sie es erneut.",
    registrationSuccessful: "Registrierung erfolgreich! Willkommen an Bord.",
  },
};
