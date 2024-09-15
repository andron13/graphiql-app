import { useEffect, useState } from "react";

const DEFAULT_TOKEN_EXPIRATION_TIME = 3600; // 1 hour in seconds
const CHECK_TOKEN_EXPIRATION_INTERVAL = 10 * 1000; // 10 seconds

export function useAuthToken() {
  const [token, setToken] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("authToken");
    const tokenExpiration = localStorage.getItem("tokenExpiration");

    if (storedToken && tokenExpiration) {
      const expirationTime = parseInt(tokenExpiration, 10);

      if (Date.now() < expirationTime) {
        setToken(storedToken);
      } else {
        removeToken();
      }
    }

    const checkTokenExpiration = setInterval(() => {
      if (isTokenExpired()) {
        removeToken();
      }
    }, CHECK_TOKEN_EXPIRATION_INTERVAL);

    return () => clearInterval(checkTokenExpiration);
  }, []);

  const saveToken = (
    authToken: string,
    expirationInSeconds: number = DEFAULT_TOKEN_EXPIRATION_TIME,
  ) => {
    const expirationTime = Date.now() + expirationInSeconds * 1000;
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("tokenExpiration", expirationTime.toString());
    setToken(authToken);
  };

  const removeToken = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("tokenExpiration");
    setToken(null);
  };

  const isUserLoggedIn = () => {
    return !!token;
  };

  const isTokenExpired = () => {
    const tokenExpiration = localStorage.getItem("tokenExpiration");
    if (tokenExpiration) {
      return Date.now() > parseInt(tokenExpiration, 10);
    }
    return true;
  };

  return {
    token,
    saveToken,
    removeToken,
    isUserLoggedIn,
    isTokenExpired,
  };
}
