import { act } from "react";

import { renderHook } from "@testing-library/react";

import { useAuthToken } from "~/shared/hooks/useAuthToken";

describe("useAuthToken", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it("should initialize token from localStorage if not expired", () => {
    const authToken = "sampleToken";
    const expirationTime = Date.now() + 3600 * 1000; // 1 hour later
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("tokenExpiration", expirationTime.toString());

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.token).toBe(authToken);
  });

  it("should remove token if it is expired", () => {
    const authToken = "sampleToken";
    const expirationTime = Date.now() - 3600 * 1000; // 1 hour ago
    localStorage.setItem("authToken", authToken);
    localStorage.setItem("tokenExpiration", expirationTime.toString());

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.token).toBe(null);
  });

  it("should save token and expiration to localStorage", () => {
    const { result } = renderHook(() => useAuthToken());

    act(() => {
      result.current.saveToken("newToken", 3600);
    });

    expect(localStorage.getItem("authToken")).toBe("newToken");
    expect(localStorage.getItem("tokenExpiration")).not.toBeNull();
  });

  it("should remove token from localStorage and update state", () => {
    localStorage.setItem("authToken", "sampleToken");
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() + 3600 * 1000).toString(),
    );

    const { result } = renderHook(() => useAuthToken());

    act(() => {
      result.current.removeToken();
    });

    expect(localStorage.getItem("authToken")).toBeNull();
    expect(localStorage.getItem("tokenExpiration")).toBeNull();
    expect(result.current.token).toBe(null);
  });

  it("should return true if user is logged in", () => {
    localStorage.setItem("authToken", "sampleToken");
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() + 3600 * 1000).toString(),
    );

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.isUserLoggedIn()).toBe(true);
  });

  it("should return false if user is not logged in", () => {
    localStorage.clear();

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.isUserLoggedIn()).toBe(false);
  });

  it("should return true if token is expired", () => {
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() - 3600 * 1000).toString(),
    );

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.isTokenExpired()).toBe(true);
  });

  it("should return false if token is not expired", () => {
    localStorage.setItem(
      "tokenExpiration",
      (Date.now() + 3600 * 1000).toString(),
    );

    const { result } = renderHook(() => useAuthToken());

    expect(result.current.isTokenExpired()).toBe(false);
  });
});
