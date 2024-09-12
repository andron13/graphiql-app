import { FormValues, RestRequestType } from "~/shared/types";

export const defaultRequestValues: FormValues = {
  method: RestRequestType.GET,
  endpoint: "https://swapi.dev/api/people/1/",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Authorization", value: "Bearer YOUR_TOKEN" },
    { key: "Content-Type", value: "application/json" },
  ],
  body: null,
  variables: [
    { key: "userId", value: "12345" },
    { key: "sessionId", value: "abcdef" },
  ],
  query: [
    ["search", "Luke"],
    ["format", "json"],
  ],
};

export const defaultPostRequestValues: FormValues = {
  method: RestRequestType.POST,
  endpoint: "https://api.example.com/data",
  headers: [
    { key: "Content-Type", value: "application/x-www-form-urlencoded" },
    { key: "Authorization", value: "Bearer YOUR_ACTUAL_TOKEN" },
  ],
  body: JSON.stringify({ name: "John Doe", age: 30 }),
  variables: [
    { key: "userId", value: "12345" },
    { key: "sessionId", value: "abcdef" },
  ],
  query: [
    ["include", "metadata"],
    ["limit", "10"],
  ],
};
