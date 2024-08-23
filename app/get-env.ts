function isBrowser() {
  return typeof window !== "undefined";
}

function getEnv() {
  // @ts-ignore
  return isBrowser() ? window.ENV : process.env;
}

export default getEnv;
