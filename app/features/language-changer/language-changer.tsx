import { useEffect, useState } from "react";

import { useLanguage, useUser } from "~/shared/context";
import { LanguageCode } from "~/shared/types";

const languageOptions = [
  { code: LanguageCode.EN_GB, label: "English" },
  { code: LanguageCode.DE_DE, label: "German" },
  { code: LanguageCode.RU_RU, label: "Russian" },
  { code: LanguageCode.BE_BY, label: "Belarusian" },
  { code: LanguageCode.UK_UA, label: "Ukrainian" },
  { code: LanguageCode.PL_PL, label: "Polish" },
  { code: LanguageCode.JA_JP, label: "Japanese" },
];

export const LanguageChanger = () => {
  const { user, setLanguage } = useUser();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState(
    user.language || LanguageCode.EN_GB,
  );
  const { site_content } = useLanguage();

  useEffect(() => {
    setSelectedLanguage(user.language || LanguageCode.EN_GB);
  }, [user.language]);

  const handleLanguageChange = (languageCode: LanguageCode) => {
    setLanguage(languageCode);
    setSelectedLanguage(languageCode);
    setIsMenuOpen(false);
  };

  const currentLanguageLabel =
    languageOptions.find((option) => option.code === selectedLanguage)?.label ||
    "Select Language";

  return (
    <div className="relative">
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="rounded bg-gray-200 px-4 py-2 font-medium text-gray-800 hover:bg-gray-300"
      >
        {currentLanguageLabel}
      </button>
      {isMenuOpen && (
        <div className="absolute right-0 mt-2 w-48 rounded border border-gray-300 bg-white shadow-lg">
          <ul>
            {languageOptions.map(({ code, label }) => (
              <li key={code}>
                <button
                  onClick={() => handleLanguageChange(code)}
                  className="block w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-100"
                >
                  {site_content.languageLabels[code]}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};
