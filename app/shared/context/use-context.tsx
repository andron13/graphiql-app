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

import { signOut } from "firebase/auth";

import { auth } from "~/shared/authentification";
import { defaultLanguage } from "~/shared/translations";
import { BaseUser, LanguageCode, User } from "~/shared/types";

interface UserContextType {
  user: BaseUser | User;
  setUser: Dispatch<SetStateAction<BaseUser | User>>;
  setLanguage: (language: LanguageCode) => void;
  login: (email: string, password: string) => void;
  logout: () => void;
  isUserLoggedIn: () => boolean;
}

const UseContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<BaseUser | User>({
    language: defaultLanguage,
  });
  const [isClient, setIsClient] = useState<boolean>(false);

  useEffect(() => {
    setIsClient(true);

    const storedLanguage = localStorage.getItem("language") as LanguageCode;
    if (storedLanguage) {
      setUser((prevUser) => ({
        ...prevUser,
        language: storedLanguage,
      }));
    }
  }, []);

  useEffect(() => {
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

  const login = (email: string, password: string) => {
    const userData: User = {
      email,
      password,
      language: user.language,
    };
    setUser(userData);
  };

  const logout = async () => {
    const lang = user.language;
    await signOut(auth);
    setUser({ language: lang });
  };

  const isUserLoggedIn = () => {
    return "email" in user;
  };

  return (
    <UseContext.Provider
      value={{ user, setUser, setLanguage, login, logout, isUserLoggedIn }}
    >
      {children}
    </UseContext.Provider>
  );
};

export const useUser = (): UserContextType => {
  const context = useContext(UseContext);
  if (context === undefined) {
    throw new Error("useUser must be used within a UserProvider");
  }
  return context;
};
