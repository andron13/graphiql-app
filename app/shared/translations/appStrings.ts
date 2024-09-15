import { IAppStrings, LanguageCode, by, de, en, jp, pl, ru, ua } from "./";

export const defaultLanguage: LanguageCode = LanguageCode.EN_GB;

export const appStrings: Record<LanguageCode, IAppStrings> = {
  [LanguageCode.EN_GB]: en,
  [LanguageCode.DE_DE]: de,
  [LanguageCode.RU_RU]: ru,
  [LanguageCode.BE_BY]: by,
  [LanguageCode.UK_UA]: ua,
  [LanguageCode.PL_PL]: pl,
  [LanguageCode.JA_JP]: jp,
};
