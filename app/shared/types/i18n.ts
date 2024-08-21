export interface II18nStrings {
  en_GB: IAppStrings;
  de_DE: IAppStrings;
  ru_RU?: IAppStrings;
  be_BY?: IAppStrings;
  uk_UA?: IAppStrings;
  pl_PL?: IAppStrings;
  ja_JP?: IAppStrings;
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
