import { FormValues, RestRequestType } from "~/shared/types";

export const defaultRequestValues: FormValues = {
  method: RestRequestType.GET,
  endpoint: "https://swapi.dev/api/people/1/",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Authorization", value: "Bearer YOUR_TOKEN" },
    { key: "Content-Type", value: "application/json" },
  ],
  body: "",
  variables: [{ key: "Variable key", value: "Variable value" }],
};
