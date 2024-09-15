export const defaultGraphqlRequestValues = {
  endpoint: "https://swapi-graphql.netlify.app/.netlify/functions/index",
  sdlURL: "https://swapi-graphql.netlify.app/.netlify/functions/index?sdl",
  headers: [
    { key: "Accept", value: "application/json" },
    { key: "Content-Type", value: "application/json" },
  ],
  query: `query Person($personId: ID) {
  person(id: $personId) {
    eyeColor
    gender
    name
    skinColor
    birthYear
  }
}`,
  variables: [
    {
      key: "personId",
      value: "cGVvcGxlOjI=",
    },
  ],
};
