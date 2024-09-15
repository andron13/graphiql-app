import { MemoryRouter } from "react-router-dom";

import { useNavigate } from "@remix-run/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import Index from "~/routes/_index";
import { useUser } from "~/shared/context/use-context";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("@remix-run/react", () => ({
  useNavigate: vi.fn(),
  Link: vi.fn(),
}));

vi.mock("~/shared/context/use-context", () => ({
  ...vi.importActual("~/shared/context/use-context"),
  useUser: vi.fn(),
  UserProvider: vi.fn(),
}));

vi.mock("~/shared/context/use-language", () => ({
  useLanguage: vi.fn(),
}));

describe("Index Page", () => {
  it("should render welcome message for a logged-out user", () => {
    const mockNavigate = vi.fn();
    const mockLanguage = {
      site_content: {
        welcomeMessage: { title: "Welcome aboard!" },
        secondaryMenu: {
          restClient: "rest-client",
          graphiqlClient: "graphql-client",
          history: "history",
        },
        signIn: "Sign In",
        signUp: "Sign Up",
      },
    };
    const mockUser = {
      user: { email: "" },
      isUserLoggedIn: () => false,
    };

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useLanguage as Mock).mockReturnValue(mockLanguage);
    (useUser as Mock).mockReturnValue(mockUser);

    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Welcome aboard!/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign In/i)).toBeInTheDocument();
    expect(screen.queryByText(/Sign Up/i)).toBeInTheDocument();
  });

  it("should render user email when logged in", () => {
    const mockNavigate = vi.fn();
    const mockLanguage = {
      site_content: {
        welcomeMessage: { title: "Welcome back" },
        secondaryMenu: {
          restClient: "rest-client",
          graphiqlClient: "graphql-client",
          history: "history",
        },
      },
    };
    const mockUser = {
      user: { email: "user@test.com" },
      isUserLoggedIn: () => true,
    };

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useLanguage as Mock).mockReturnValue(mockLanguage);
    (useUser as Mock).mockReturnValue(mockUser);

    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    expect(
      screen.getByText(/Welcome back user@test.com!/i),
    ).toBeInTheDocument();
  });

  it("should navigate when Sign In or Sign Up buttons are clicked", () => {
    const mockLanguage = {
      site_content: {
        welcomeMessage: { title: "Welcome aboard" },
        secondaryMenu: {
          restClient: "Rest Client",
          graphiqlClient: "GraphiQL Client",
          history: "History",
        },
        signIn: "Sign In",
        signUp: "Sign Up",
      },
    };
    const mockNavigate = vi.fn();
    const mockUser = {
      user: { email: "" },
      isUserLoggedIn: () => false,
    };

    (useLanguage as Mock).mockReturnValue(mockLanguage);
    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useUser as Mock).mockReturnValue(mockUser);

    render(
      <MemoryRouter>
        <Index />
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/Sign In/i));
    expect(mockNavigate).toHaveBeenCalledWith("/login");

    fireEvent.click(screen.getByText(/Sign Up/i));
    expect(mockNavigate).toHaveBeenCalledWith("/login?signup=true");
  });
});
