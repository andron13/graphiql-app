import { RestRequestType, UrlencodedFormData } from "~/shared/types";

export const defaultRequestValues: UrlencodedFormData = {
  method: RestRequestType.GET,
  endpoint: "https://swapi.dev/api/people/1/",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Authorization", value: "Bearer YOUR_TOKEN" },
    { key: "Content-Type", value: "application/json" },
  ],
  body: "",
};
