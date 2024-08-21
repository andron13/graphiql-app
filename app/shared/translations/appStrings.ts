import { IAppStrings } from "~/shared/types";
import { LanguageCode } from "~/shared/types/i18n";

export const defaultLanguage: LanguageCode = LanguageCode.EN_GB;

export const appStrings: Record<LanguageCode, IAppStrings> = {
  [LanguageCode.EN_GB]: {
    welcomeMessage: {
      title: "Welcome",
      subtitle: "Welcome to our website!",
      mission: "Discover amazing features and functionality.",
    },
    signIn: "Sign In",
    signOut: "Sign Out",
    validationErrors: {
      emailRequired: "Email is required",
      emailInvalid: "Email must be a valid email address",
      passwordRequired: "Password is required",
      passwordStrength:
        "Password must be at least 8 characters long, include at least 1 digit, one special character, and at least one letter (Unicode characters are supported)",
      confirmPasswordRequired: "Confirm Password is required",
      passwordsMustMatch: "Passwords must match",
    },
  },
  [LanguageCode.DE_DE]: {
    welcomeMessage: {
      title: "Willkommen",
      subtitle: "Willkommen auf unserer Website!",
      mission: "Entdecken Sie erstaunliche Funktionen und Möglichkeiten.",
    },
    signIn: "Anmelden",
    signOut: "Abmelden",
    validationErrors: {
      emailRequired: "E-Mail ist erforderlich",
      emailInvalid: "E-Mail muss eine gültige E-Mail-Adresse sein",
      passwordRequired: "Passwort ist erforderlich",
      passwordStrength:
        "Passwort muss mindestens 8 Zeichen lang sein und mindestens 1 Zahl, ein Sonderzeichen sowie mindestens einen Buchstaben enthalten (Unicode-Zeichen werden unterstützt)",
      confirmPasswordRequired: "Bestätigungs-Passwort ist erforderlich",
      passwordsMustMatch: "Passwörter müssen übereinstimmen",
    },
  },
  [LanguageCode.BE_BY]: {
    welcomeMessage: {
      title: "Сардэчна запрашаем",
      subtitle: "Сардэчна запрашаем на наш сайт!",
      mission: "Аглядзіце дзіўныя магчымасці і функцыі.",
    },
    signIn: "Увайсці",
    signOut: "Выйсці",
    validationErrors: {
      emailRequired: "Электронная пошта неабходна",
      emailInvalid: "Электронная пошта павінна быць карэктнай",
      passwordRequired: "Пароль неабходны",
      passwordStrength:
        "Пароль павінен быць не менш за 8 сімвалаў, утрымліваць як мінімум 1 лічбу, спецыяльны сімвал і як мінімум адну літару (падтрымліваюцца Unicode знакі)",
      confirmPasswordRequired: "Пацверджанне пароля неабходна",
      passwordsMustMatch: "Паролі павінны супадаць",
    },
  },
  [LanguageCode.UK_UA]: {
    welcomeMessage: {
      title: "Ласкаво просимо",
      subtitle: "Ласкаво просимо ",
      mission: "Відкрийте для себе дивовижні можливості та функції.",
    },
    signIn: "Увійти",
    signOut: "Вийти",
    validationErrors: {
      emailRequired: "Email є обов'язковим",
      emailInvalid: "Email повинен бути дійсною адресою електронної пошти",
      passwordRequired: "Пароль є обов'язковим",
      passwordStrength:
        "Пароль має бути не менше 8 символів і містити як мінімум 1 цифру, один спеціальний символ і принаймні одну літеру (підтримуються символи Unicode)",
      confirmPasswordRequired: "Підтвердження пароля є обов'язковим",
      passwordsMustMatch: "Паролі повинні співпадати",
    },
  },
  [LanguageCode.RU_RU]: {
    welcomeMessage: {
      title: "Добро пожаловать",
      subtitle: "Добро пожаловать на наш сайт!",
      mission: "Откройте для себя удивительные функции и возможности.",
    },
    signIn: "Войти",
    signOut: "Выйти",
    validationErrors: {
      emailRequired: "Email обязателен",
      emailInvalid: "Email должен быть корректным адресом электронной почты",
      passwordRequired: "Пароль обязателен",
      passwordStrength:
        "Пароль должен содержать не менее 8 символов, хотя бы 1 цифру, один специальный символ и хотя бы одну букву (поддерживаются символы Unicode)",
      confirmPasswordRequired: "Подтверждение пароля обязательно",
      passwordsMustMatch: "Пароли должны совпадать",
    },
  },
  [LanguageCode.PL_PL]: {
    welcomeMessage: {
      title: "Witamy",
      subtitle: "Witamy na naszej stronie!",
      mission: "Odkryj niesamowite funkcje i możliwości.",
    },
    signIn: "Zaloguj się",
    signOut: "Wyloguj się",
    validationErrors: {
      emailRequired: "Email jest wymagany",
      emailInvalid: "Email musi być prawidłowym adresem",
      passwordRequired: "Hasło jest wymagane",
      passwordStrength:
        "Hasło musi mieć co najmniej 8 znaków, zawierać co najmniej 1 cyfrę, jeden znak specjalny i co najmniej jedną literę",
      confirmPasswordRequired: "Potwierdzenie hasła jest wymagane",
      passwordsMustMatch: "Hasła muszą się zgadzać",
    },
  },
  [LanguageCode.JA_JP]: {
    welcomeMessage: {
      title: "ようこそ",
      subtitle: "ようこそ",
      mission: "素晴らしい機能と可能性を発見してください。",
    },
    signIn: "サインイン",
    signOut: "サインアウト",
    validationErrors: {
      emailRequired: "メールアドレスは必須です",
      emailInvalid: "有効なメールアドレスを入力してください",
      passwordRequired: "パスワードは必須です",
      passwordStrength:
        "パスワードは8文字以上で、少なくとも1つの数字、1つの特殊文字、および少なくとも1つの文字を含む必要があります",
      confirmPasswordRequired: "パスワードの確認が必要です",
      passwordsMustMatch: "パスワードが一致しません",
    },
  },
};
