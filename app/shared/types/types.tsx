export type AccountCredentials<T = Record<string, unknown>> = {
  email: string;
  password: string;
} & T;

export type AccountRegistration = AccountCredentials<{
  confirmPassword: string;
}>;
