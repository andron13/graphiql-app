import { IAppStrings, LanguageCode } from "../types";

export const ua: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "Застосунок дозволяє користувачам взаємодіяти з RESTful API та GraphQL кінцевими точками, пропонуючи вибір методу, введення URL, редагування заголовків та перегляд відповіді.",
  },
  welcomeMessage: {
    title: "Ласкаво просимо",
    subtitle: "Ласкаво просимо на наш сайт!",
    mission: "Відкрийте для себе дивовижні можливості та функції.",
  },
  secondaryMenu: {
    restClient: "Rest Client",
    graphiqlClient: "GraphiQL Client",
    history: "Історія",
  },
  signIn: "Увійти",
  signOut: "Вийти",
  signUp: "Зареєструватися",
  submit: "Надіслати",
  register: "Зареєструватися",
  validationErrors: {
    emailRequired: "Email є обов'язковим",
    emailInvalid: "Email повинен бути дійсною адресою електронної пошти",
    passwordRequired: "Пароль є обов'язковим",
    passwordStrength:
      "Пароль має бути не менше 8 символів і містити як мінімум 1 цифру, один спеціальний символ і принаймні одну літеру (підтримуються символи Unicode)",
    confirmPasswordRequired: "Підтвердження пароля є обов'язковим",
    passwordsMustMatch: "Паролі повинні співпадати",
    invalidEmailPassword: "Неправильна електронна адреса або пароль",
  },
  websiteErrors: {
    siteNotFound: "Сторінка не знайдена",
    pageNotFoundMessage: "Ми не можемо знайти сторінку за адресою:",
    wrongTurnMessage:
      "Здається, ви заблукали. Поверніться на головну сторінку, щоб знайти те, що вам потрібно.",
    goBackToHomepage: "Повернутися на головну сторінку",
  },
  emailConfig: {
    email: "Електронна пошта",
    password: "Пароль",
    confirmPassword: "Підтвердіть пароль",
  },
  languageLabels: {
    [LanguageCode.EN_GB]: "English",
    [LanguageCode.DE_DE]: "Deutsch",
    [LanguageCode.RU_RU]: "Російська",
    [LanguageCode.BE_BY]: "Беларуская",
    [LanguageCode.UK_UA]: "Українська",
    [LanguageCode.PL_PL]: "Польська",
    [LanguageCode.JA_JP]: "Японська",
  },
  authErrors: {
    invalidCredentials: "Неправильна електронна пошта або пароль.",
    accountLocked:
      "Ваш обліковий запис заблоковано. Будь ласка, зв'яжіться з підтримкою.",
    passwordExpired:
      "Термін дії вашого пароля закінчився. Будь ласка, скиньте його.",
    tooManyAttempts:
      "Занадто багато спроб входу. Будь ласка, спробуйте пізніше.",
    emailInUseError: "Користувач з таким email вже існує",
  },
  registrationMessages: {
    registrationFailed: "Реєстрація не вдалася. Будь ласка, спробуйте ще раз.",
    registrationSuccessful: "Реєстрація успішна! Ласкаво просимо.",
  },
};
