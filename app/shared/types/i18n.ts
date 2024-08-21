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
  welcomeMessage: {
    title: string;
    subtitle: string;
    mission: string;
  };
  signIn: string;
  signOut: string;
  validationErrors: {
    emailRequired: string;
    emailInvalid: string;
    passwordRequired: string;
    passwordStrength: string;
    confirmPasswordRequired: string;
    passwordsMustMatch: string;
  };
}
