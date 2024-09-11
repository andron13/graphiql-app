import { IAppStrings } from "../types";

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
};
