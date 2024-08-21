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
  // [LanguageCode.PL_PL]?: IAppStrings;
  // [LanguageCode.JA_JP]?: IAppStrings;
}

export interface IAppStrings {
  WELCOME_MESSAGE: string;
  SIGN_IN: string;
  SIGN_OUT: string;
  VALIDATION_ERRORS: {
    EMAIL_REQUIRED: string;
    EMAIL_INVALID: string;
    PASSWORD_REQUIRED: string;
    PASSWORD_STRENGTH: string;
    CONFIRM_PASSWORD_REQUIRED: string;
    PASSWORDS_MUST_MATCH: string;
  };
}
