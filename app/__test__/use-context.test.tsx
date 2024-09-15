import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { auth } from "~/shared/authentification";
import { UserProvider, useUser } from "~/shared/context";
import { defaultLanguage } from "~/shared/translations";
import { LanguageCode } from "~/shared/types";

vi.mock("~/shared/authentification", () => ({
  auth: {
    signOut: vi.fn(),
  },
}));

const mockLocalStorage = (() => {
  let store: { [key: string]: string } = {};
  return {
    getItem: (key: string) => store[key] || null,
    setItem: (key: string, value: string) => {
      store[key] = value;
    },
    clear: () => {
      store = {};
    },
  };
})();

Object.defineProperty(window, "localStorage", { value: mockLocalStorage });

function TestComponent() {
  const { user, setLanguage, login, logout, isUserLoggedIn } = useUser();

  return (
    <div>
      <p>{user.language}</p>
      {isUserLoggedIn() && <p>User is logged in</p>}
      <button onClick={() => setLanguage("uk_UA" as LanguageCode)}>
        Change Language
      </button>
      <button onClick={() => login("test@mail.com", "123456")}>Log In</button>
      <button onClick={logout}>Log Out</button>
    </div>
  );
}

describe("UserProvider and useUser hook", () => {
  beforeEach(() => {
    window.localStorage.clear();
  });

  it("renders with default language", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    expect(screen.getByText(defaultLanguage)).toBeInTheDocument();
  });

  it("sets and saves the language to localStorage", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    fireEvent.click(screen.getByText("Change Language"));

    expect(screen.getByText("uk_UA")).toBeInTheDocument();
    expect(localStorage.getItem("language")).toBe("uk_UA");
  });

  it("logs in the user and checks if they are logged in", () => {
    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    fireEvent.click(screen.getByText("Log In"));

    expect(screen.getByText("User is logged in")).toBeInTheDocument();
    expect(screen.getByText("en_GB")).toBeInTheDocument();
  });
  it.skip("logs out the user and retains the language", async () => {
    vi.mocked(auth.signOut as Mock).mockResolvedValue(null);

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    fireEvent.click(screen.getByText("Log In"));
    fireEvent.click(screen.getByText("Log Out"));

    expect(auth.signOut).toHaveBeenCalled();

    await waitFor(() => {
      expect(screen.getByText(defaultLanguage)).toBeInTheDocument();
      expect(screen.queryByText("User is logged in")).not.toBeInTheDocument();
    });
  });

  it("retrieves the language from localStorage on initial load", () => {
    window.localStorage.setItem("language", "be_BY");

    render(
      <UserProvider>
        <TestComponent />
      </UserProvider>,
    );

    expect(screen.getByText("be_BY")).toBeInTheDocument();
  });
});
