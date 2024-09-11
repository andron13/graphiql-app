import { IAppStrings } from "../types";

export const by: IAppStrings = {
  websiteConfig: {
    name: "Graphiql App",
    description:
      "Прыкладанне дазваляе карыстальнікам узаемадзейнічаць з RESTful API і GraphQL канчатковымі кропкамі, прапаноўваючы выбар метаду, увядзенне URL, рэдагаванне загалоўкаў і прагляд адказаў.",
  },
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
};
