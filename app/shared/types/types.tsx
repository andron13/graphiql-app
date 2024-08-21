import { II18nStrings } from "./";

export interface BaseUser {
  language: keyof II18nStrings;
}

export type AccountCredentials<T = Record<string, unknown>> = {
  email: string;
  password: string;
} & T;

export interface User extends BaseUser, AccountCredentials {
  // Commented just for brackets, but id:string would be good idea?
}

export type AccountRegistration = AccountCredentials<{
  confirmPassword: string;
}>;
