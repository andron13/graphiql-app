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

export enum GraphqlRequestType {
  GRAPHQL = "GRAPHQL",
}
export type Header = { key: string; value: string };

export type HistoryRequest = {
  timestamp: number;
  type: RequestType;
  url: string;
  shortUrl: string;
};

export interface FormValuesGraphql {
  method?: GraphqlRequestType;
  endpoint: string;
  sdlURL?: string;
  headers: { key: string; value: string }[];
  variables?: Record<string, string>[];
  query: string;
}

export type RequestType = RestRequestType | GraphqlRequestType;

export interface FormValues {
  method: RestRequestType | GraphqlRequestType;
  endpoint: string;
  headers: { key: string; value: string }[];
  body?: string | Record<string, unknown> | null;
  variables?: Record<string, string>[];
  query?: string[][];
}

export enum RestRequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}
