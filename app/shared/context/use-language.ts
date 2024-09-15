import { useUser } from "~/shared/context";
import { appStrings, defaultLanguage } from "~/shared/translations";
import { IAppStrings, LanguageCode } from "~/shared/types";

/**
 * A custom hook that provides the current language and its associated content.
 *
 * This hook retrieves the current user's language from the `UserContext` and
 * returns the corresponding content strings from `appStrings`. If the current
 * language is not found in `appStrings`, it defaults to the `defaultLanguage`.
 *
 * @returns {Object} An object containing:
 * - `language` {LanguageCode} The current language code of the user.
 * - `site_content` {IAppStrings} The content strings for the current language.
 *
 * @example
 * const { language, content } = useLanguage();
 * console.log(language); // "en_GB"
 * console.log(content.WELCOME_MESSAGE); // "Welcome"
 */
export function useLanguage(): {
  language: LanguageCode;
  site_content: IAppStrings;
} {
  const { user } = useUser();
  const language = user.language;
  const site_content = appStrings[language] || appStrings[defaultLanguage];

  return { language, site_content: site_content! };
}
