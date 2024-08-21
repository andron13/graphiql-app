import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import { defaultLanguage } from "~/shared/translations/appStrings";
import { BaseUser, LanguageCode, User } from "~/shared/types";

interface UserContextType {
  user: BaseUser | User;
  setUser: Dispatch<SetStateAction<BaseUser | User>>;
  setLanguage: (language: LanguageCode) => void;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<BaseUser | User>({
    language: defaultLanguage,
  });
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    // Проверяем, что мы на клиенте
    setIsClient(true);

    // Инициализируем язык из localStorage, если он существует
    const storedLanguage = localStorage.getItem("language") as LanguageCode;
    if (storedLanguage) {
      setUser((prevUser) => ({
        ...prevUser,
        language: storedLanguage,
      }));
    }
  }, []);

  useEffect(() => {
    // Сохраняем язык в localStorage при его изменении
    if (isClient) {
      localStorage.setItem("language", user.language as LanguageCode);
    }
  }, [user.language, isClient]);

  const setLanguage = (language: LanguageCode) => {
    setUser((prevUser) => ({
      ...prevUser,
      language: language,
    }));
  };

  return (
    <UserContext.Provider value={{ user, setUser, setLanguage }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
