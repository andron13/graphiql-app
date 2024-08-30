import { LanguageCode } from "~/shared/types";

export interface BaseUser {
  language: LanguageCode;
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

export type HistoryRequest = {
  timestamp: number;
  type: RequestType;
  url: string;
};

export enum RequestType {
  GRAPHQL = "GRAPHQL",
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  PATCH = "PATCH",
  OPTIONS = "OPTIONS",
  HEAD = "HEAD",
  CONNECT = "CONNECT",
  TRACE = "TRACE",
}
