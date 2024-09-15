export enum LanguageCode {
  EN_GB = "en_GB",
  DE_DE = "de_DE",
  RU_RU = "ru_RU",
  BE_BY = "be_BY",
  UK_UA = "uk_UA",
  PL_PL = "pl_PL",
  JA_JP = "ja_JP",
}

export interface II18nStrings {
  [LanguageCode.EN_GB]: IAppStrings;
  [LanguageCode.DE_DE]: IAppStrings;
  [LanguageCode.RU_RU]?: IAppStrings;
  [LanguageCode.BE_BY]?: IAppStrings;
  [LanguageCode.UK_UA]?: IAppStrings;
  [LanguageCode.PL_PL]?: IAppStrings;
  [LanguageCode.JA_JP]?: IAppStrings;
}

export interface IAppStrings {
  websiteConfig: {
    name: string;
    description: string;
  };
  welcomeMessage: {
    title: string;
    subtitle: string;
    mission: string;
  };
  secondaryMenu: {
    restClient: string;
    graphiqlClient: string;
    history: string;
  };
  signIn: string;
  signOut: string;
  signUp: string;
  submit: string;
  register: string;
  emailConfig: {
    email: string;
    password: string;
    confirmPassword: string;
  };
  validationErrors: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    passwordStrength: string;
    confirmPasswordRequired: string;
    passwordsMustMatch: string;
    invalidEmailPassword: string;
  };
  websiteErrors: {
    siteNotFound: string;
    pageNotFoundMessage: string;
    wrongTurnMessage: string;
    goBackToHomepage: string;
  };
  languageLabels: {
    [code: string]: string;
  };
  authErrors: {
    invalidCredentials: string;
    accountLocked: string;
    passwordExpired: string;
    tooManyAttempts: string;
    emailInUseError: string;
  };
  registrationMessages: {
    registrationFailed: string;
    registrationSuccessful: string;
  };
}
