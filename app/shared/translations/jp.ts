import { IAppStrings, LanguageCode } from "../types";

export const jp: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "アプリケーションは、ユーザーがRESTful APIおよびGraphQLエンドポイントと対話できるようにし、メソッドの選択、URLの入力、ヘッダーの編集、レスポンスの表示を提供します。",
  },
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
  emailConfig: {
    email: "メールアドレス",
    password: "パスワード",
    confirmPassword: "パスワードを確認",
  },
  languageLabels: {
    [LanguageCode.EN_GB]: "英語 - en",
    [LanguageCode.DE_DE]: "ドイツ語 - de",
    [LanguageCode.RU_RU]: "ロシア語 - ru",
    [LanguageCode.BE_BY]: "ベラルーシ語 - by",
    [LanguageCode.UK_UA]: "ウクライナ語 - ua",
    [LanguageCode.PL_PL]: "ポーランド語 - pl",
    [LanguageCode.JA_JP]: "日本語 - jp",
  },
  authErrors: {
    invalidCredentials: "無効なメールアドレスまたはパスワードです。",
    accountLocked:
      "アカウントがロックされています。サポートに連絡してください。",
    passwordExpired: "パスワードの有効期限が切れました。リセットしてください。",
    tooManyAttempts:
      "ログイン試行回数が多すぎます。後でもう一度お試しください。",
    emailInUseError: "このメールアドレスのユーザーはすでに存在します",
  },
  registrationMessages: {
    registrationFailed: "登録に失敗しました。もう一度お試しください。",
    registrationSuccessful: "登録が成功しました！ようこそ。",
  },
};
