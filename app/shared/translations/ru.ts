import { IAppStrings, LanguageCode } from "~/shared/types";

export const ru: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "Приложение позволяет пользователям взаимодействовать с RESTful API и GraphQL конечными точками, предлагая выбор метода, ввод URL, редактирование заголовков и просмотр ответов.",
  },
  welcomeMessage: {
    title: "Добро пожаловать",
    subtitle: "Добро пожаловать на наш сайт!",
    mission: "Откройте для себя удивительные функции и возможности.",
  },
  secondaryMenu: {
    restClient: "Rest Client",
    graphiqlClient: "GraphiQL Client",
    history: "История",
  },
  signIn: "Войти",
  signOut: "Выйти",
  signUp: "Зарегистрироваться",
  submit: "Отправить",
  register: "Зарегистрироваться",
  validationErrors: {
    emailRequired: "Email обязателен",
    emailInvalid: "Email должен быть корректным адресом электронной почты",
    passwordRequired: "Пароль обязателен",
    passwordStrength:
      "Пароль должен содержать не менее 8 символов, хотя бы 1 цифру, один специальный символ и хотя бы одну букву (поддерживаются символы Unicode)",
    confirmPasswordRequired: "Подтверждение пароля обязательно",
    passwordsMustMatch: "Пароли должны совпадать",
    invalidEmailPassword: "Неправильный e-mail или пароль",
  },
  websiteErrors: {
    siteNotFound: "Страница не найдена",
    pageNotFoundMessage: "Мы не можем найти страницу по адресу:",
    wrongTurnMessage:
      "Похоже, вы ошиблись. Вернитесь на главную страницу, чтобы найти то, что вам нужно.",
    goBackToHomepage: "Вернуться на главную страницу",
  },
  emailConfig: {
    email: "Электронная почта",
    password: "Пароль",
    confirmPassword: "Подтвердите пароль",
  },
  languageLabels: {
    [LanguageCode.EN_GB]: "Английский",
    [LanguageCode.DE_DE]: "Немецкий",
    [LanguageCode.RU_RU]: "Русский",
    [LanguageCode.BE_BY]: "Белорусский",
    [LanguageCode.UK_UA]: "Украинский",
    [LanguageCode.PL_PL]: "Польский",
    [LanguageCode.JA_JP]: "Японский",
  },
  authErrors: {
    invalidCredentials: "Неверный адрес электронной почты или пароль.",
    accountLocked:
      "Ваш аккаунт заблокирован. Пожалуйста, свяжитесь с поддержкой.",
    passwordExpired:
      "Срок действия вашего пароля истёк. Пожалуйста, сбросьте его.",
    tooManyAttempts:
      "Слишком много попыток входа. Пожалуйста, попробуйте позже.",
    emailInUseError: "Пользователь с таким email уже существует",
  },
  registrationMessages: {
    registrationFailed:
      "Регистрация не удалась. Пожалуйста, попробуйте ещё раз.",
    registrationSuccessful: "Регистрация успешна! Добро пожаловать.",
  },
};
