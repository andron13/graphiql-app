import {
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useState,
} from "react";

import { defaultLanguage } from "~/shared/translations/appStrings";
import { BaseUser, User } from "~/shared/types";

interface UserContextType {
  user: BaseUser | User;
  setUser: Dispatch<SetStateAction<BaseUser | User>>;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const anonymousUser: BaseUser = {
    language: defaultLanguage,
  };
  const [user, setUser] = useState<BaseUser | User>(anonymousUser);

  return (
    <UserContext.Provider value={{ user, setUser }}>
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
