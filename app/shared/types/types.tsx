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

export type RequestType = RestRequestType | GraphqlRequestType;

export enum RestRequestType {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
  // PATCH = "PATCH",
  // OPTIONS = "OPTIONS",
  // HEAD = "HEAD",
  // CONNECT = "CONNECT",
  TRACE = "TRACE",
}

export enum GraphqlRequestType {
  GRAPHQL = "GRAPHQL",
}
export type Header = { key: string; value: string };

export type UrlencodedFormData = {
  method: RequestType;
  endpoint: string;
  headers: Header[];
  body: string;
};

export type HistoryRequest = {
  timestamp: number;
  type: RequestType;
  url: string;
  shortUlr: string;
};

export interface FormValues {
  method: RestRequestType | GraphqlRequestType;
  endpoint: string;
  headers: { key: string; value: string }[];
  body: string;
}

export interface FormValuesGraphql {
  endpoint: string;
  sdlURL: string;
  headers: { key: string; value: string }[];
  query: string;
  variables: string;
}
