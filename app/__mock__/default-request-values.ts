import { RestRequestType, UrlencodedFormData } from "~/shared/types";

export const defaultRequestValues: UrlencodedFormData = {
  method: RestRequestType.POST,
  endpoint: "https://hp-api.onrender.com/api/characters",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Authorization", value: "Bearer YOUR_TOKEN" },
    { key: "Content-Type", value: "application/json" },
  ],
  body: JSON.stringify({
    name: "Harry Potter",
    house: "Gryffindor",
    age: 11,
  }),
};
