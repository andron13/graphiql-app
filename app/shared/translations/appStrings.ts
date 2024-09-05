import { IAppStrings, LanguageCode } from "~/shared/types";

export const defaultLanguage: LanguageCode = LanguageCode.EN_GB;

export const appStrings: Record<LanguageCode, IAppStrings> = {
  [LanguageCode.EN_GB]: {
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
  },
  [LanguageCode.DE_DE]: {
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
  },
  [LanguageCode.BE_BY]: {
    welcomeMessage: {
      title: "Сардэчна запрашаем",
      subtitle: "Сардэчна запрашаем на наш сайт!",
      mission: "Аглядзіце дзіўныя магчымасці і функцыі.",
    },
    secondaryMenu: {
      restClient: "Rest Client",
      graphiqlClient: "GraphiQL Client",
      history: "Гісторыя",
    },
    signIn: "Увайсці",
    signOut: "Выйсці",
    signUp: "Зарэгістравацца",
    submit: "Адправіць",
    register: "Зарэгістравацца",
    validationErrors: {
      emailRequired: "Электронная пошта неабходна",
      emailInvalid: "Электронная пошта павінна быць карэктнай",
      passwordRequired: "Пароль неабходны",
      passwordStrength:
        "Пароль павінен быць не менш за 8 сімвалаў, утрымліваць як мінімум 1 лічбу, спецыяльны сімвал і як мінімум адну літару (падтрымліваюцца Unicode знакі)",
      confirmPasswordRequired: "Пацверджанне пароля неабходна",
      passwordsMustMatch: "Паролі павінны супадаць",
      invalidEmailPassword: "Няправільны электронны адрас або пароль",
    },
    websiteErrors: {
      siteNotFound: "Старонка не знойдзена",
      pageNotFoundMessage: "Мы не можам знайсці старонку па адрасе:",
      wrongTurnMessage:
        "Здаецца, вы збіліся з шляху. Вярніцеся на галоўную старонку, каб знайсці патрэбную інфармацыю.",
      goBackToHomepage: "Вярнуцца на галоўную старонку",
    },
  },
  [LanguageCode.UK_UA]: {
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
  },
  [LanguageCode.RU_RU]: {
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
  },
  [LanguageCode.PL_PL]: {
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
  },
  [LanguageCode.JA_JP]: {
    welcomeMessage: {
      title: "ようこそ",
      subtitle: "私たちのウェブサイトへようこそ！",
      mission: "驚くべき機能と機能を発見してください。",
    },
    secondaryMenu: {
      restClient: "Rest クライアント",
      graphiqlClient: "GraphiQL クライアント",
      history: "履歴",
    },
    signIn: "サインイン",
    signOut: "サインアウト",
    signUp: "サインアップ",
    submit: "送信",
    register: "登録する",
    validationErrors: {
      emailRequired: "メールアドレスは必須です",
      emailInvalid: "有効なメールアドレスを入力してください",
      passwordRequired: "パスワードは必須です",
      passwordStrength:
        "パスワードは8文字以上で、1つの数字、1つの特殊文字、1つの文字を含む必要があります（Unicode文字がサポートされています）",
      confirmPasswordRequired: "確認パスワードは必須です",
      passwordsMustMatch: "パスワードが一致しません",
      invalidEmailPassword: "無効なメールアドレスまたはパスワード",
    },
    websiteErrors: {
      siteNotFound: "ページが見つかりません",
      pageNotFoundMessage: "次のアドレスでページが見つかりません：",
      wrongTurnMessage:
        "道を間違えたようです。 ホームページに戻って、探しているものを見つけてください。",
      goBackToHomepage: "ホームページに戻る",
    },
  },
};
