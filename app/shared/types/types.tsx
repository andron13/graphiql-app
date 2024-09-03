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
  method: RestRequestType | GraphqlRequestType;
  endpoint: string;
  headers: Header[];
  body: string;
};

export interface FormValues {
  method: RestRequestType | GraphqlRequestType;
  endpoint: string;
  headers: { key: string; value: string }[];
  body: string;
}
