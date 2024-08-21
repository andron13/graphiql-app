import { II18nStrings } from "~/shared/types";

export const defaultLanguage: keyof II18nStrings = "en_GB";

export const appStrings: II18nStrings = {
  en_GB: {
    WELCOME_MESSAGE: "Welcome",
    SIGN_IN: "Sign In",
    SIGN_OUT: "Sign Out",
    VALIDATION_ERRORS: {
      EMAIL_REQUIRED: "Email is required",
      EMAIL_INVALID: "Email must be a valid email address",
      PASSWORD_REQUIRED: "Password is required",
      PASSWORD_STRENGTH:
        "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
      CONFIRM_PASSWORD_REQUIRED: "Confirm Password is required",
      PASSWORDS_MUST_MATCH: "Passwords must match",
    },
  },
  de_DE: {
    WELCOME_MESSAGE: "Willkommen",
    SIGN_IN: "Anmelden",
    SIGN_OUT: "Abmelden",
    VALIDATION_ERRORS: {
      EMAIL_REQUIRED: "E-Mail ist erforderlich",
      EMAIL_INVALID: "E-Mail muss eine gültige E-Mail-Adresse sein",
      PASSWORD_REQUIRED: "Passwort ist erforderlich",
      PASSWORD_STRENGTH:
        "Passwort muss mindestens 8 Zeichen lang sein und mindestens 1 Zahl, ein Sonderzeichen sowie mindestens einen Buchstaben enthalten (Unicode-Zeichen werden unterstützt)",
      CONFIRM_PASSWORD_REQUIRED: "Bestätigungs-Passwort ist erforderlich",
      PASSWORDS_MUST_MATCH: "Passwörter müssen übereinstimmen",
    },
  },
  be_BY: {
    WELCOME_MESSAGE: "Сардэчна запрашаем",
    SIGN_IN: "Увайсці",
    SIGN_OUT: "Выйсці",
    VALIDATION_ERRORS: {
      EMAIL_REQUIRED: "Электронная пошта неабходна",
      EMAIL_INVALID: "Электронная пошта павінна быць карэктнай",
      PASSWORD_REQUIRED: "Пароль неабходны",
      PASSWORD_STRENGTH:
        "Пароль павінен быць не менш за 8 сімвалаў, утрымліваць як мінімум 1 лічбу, спецыяльны сімвал і як мінімум адну літару (падтрымліваюцца Unicode знакі)",
      CONFIRM_PASSWORD_REQUIRED: "Пацверджанне пароля неабходна",
      PASSWORDS_MUST_MATCH: "Паролі павінны супадаць",
    },
  },
  uk_UA: {
    WELCOME_MESSAGE: "Ласкаво просимо",
    SIGN_IN: "Увійти",
    SIGN_OUT: "Вийти",
    VALIDATION_ERRORS: {
      EMAIL_REQUIRED: "Email є обов'язковим",
      EMAIL_INVALID: "Email повинен бути дійсною адресою електронної пошти",
      PASSWORD_REQUIRED: "Пароль є обов'язковим",
      PASSWORD_STRENGTH:
        "Пароль має бути не менше 8 символів і містити як мінімум 1 цифру, один спеціальний символ і принаймні одну літеру (підтримуються символи Unicode)",
      CONFIRM_PASSWORD_REQUIRED: "Підтвердження пароля є обов'язковим",
      PASSWORDS_MUST_MATCH: "Паролі повинні співпадати",
    },
  },
  ru_RU: {
    WELCOME_MESSAGE: "Добро пожаловать",
    SIGN_IN: "Войти",
    SIGN_OUT: "Выйти",
    VALIDATION_ERRORS: {
      EMAIL_REQUIRED: "Email обязателен",
      EMAIL_INVALID: "Email должен быть корректным адресом электронной почты",
      PASSWORD_REQUIRED: "Пароль обязателен",
      PASSWORD_STRENGTH:
        "Пароль должен содержать не менее 8 символов, хотя бы 1 цифру, один специальный символ и хотя бы одну букву (поддерживаются символы Unicode)",
      CONFIRM_PASSWORD_REQUIRED: "Подтверждение пароля обязательно",
      PASSWORDS_MUST_MATCH: "Пароли должны совпадать",
    },
  },
};
