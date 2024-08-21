import { User } from "./types";

export interface UserContextType {
  user: User | null;
  language: string;
  login: (userData: User, lang: string) => void;
  logout: () => void;
  setLanguage: (lang: string) => void;
}
