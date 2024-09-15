import { LinkProps, useNavigate } from "@remix-run/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Mock } from "vitest";

import { PrimaryMenu } from "~/entities/header";
import { SecondaryMenu } from "~/entities/nav";
import { useUser } from "~/shared/context/use-context";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("@remix-run/react", () => {
  return {
    useNavigate: vi.fn(),
    Link: ({ to, ...props }: LinkProps) => (
      <a href={typeof to === "string" ? to : ""} {...props} />
    ),
  };
});

vi.mock("~/shared/context/use-context", () => ({
  ...vi.importActual("~/shared/context/use-context"),
  useUser: vi.fn(),
}));

vi.mock("~/shared/context/use-language", () => ({
  ...vi.importActual("~/shared/context/use-language"),
  useLanguage: vi.fn(),
}));

describe("PrimaryMenu", () => {
  it("should show signOut btn if user is logged in", () => {
    const mockedUser = {
      isUserLoggedIn: () => true,
    };
    const mockLanguage = {
      site_content: {
        signOut: "Sign Out",
        signIn: "Sign In",
      },
    };

    (useUser as Mock).mockReturnValue(mockedUser);
    (useLanguage as Mock).mockReturnValue(mockLanguage);

    render(<PrimaryMenu />);

    expect(screen.getByText(/Sign Out/)).toBeInTheDocument();
    expect(screen.queryByText(/Sign In/)).not.toBeInTheDocument();
  });

  it("should show signIn btn if user is logged out", () => {
    const mockedUser = {
      isUserLoggedIn: () => false,
    };
    const mockLanguage = {
      site_content: {
        signOut: "Sign Out",
        signIn: "Sign In",
      },
    };

    (useUser as Mock).mockReturnValue(mockedUser);
    (useLanguage as Mock).mockReturnValue(mockLanguage);

    render(<PrimaryMenu />);

    expect(screen.getByText(/Sign In/)).toBeInTheDocument();
    expect(screen.queryByText(/Sign Out/)).not.toBeInTheDocument();
  });

  it("calls logout and navigates on sign out", () => {
    const logoutContext = vi.fn();
    const mockedUser = {
      isUserLoggedIn: () => true,
      logout: logoutContext,
    };
    const mockLanguage = {
      site_content: {
        signOut: "Sign Out",
        signIn: "Sign In",
      },
    };
    const navigate = vi.fn();

    (useUser as Mock).mockReturnValue(mockedUser);
    (useLanguage as Mock).mockReturnValue(mockLanguage);

    (useNavigate as Mock).mockReturnValue(navigate);

    render(<PrimaryMenu />);

    fireEvent.click(screen.getByText(/Sign Out/i));
    expect(logoutContext).toHaveBeenCalledTimes(1);
    expect(navigate).toHaveBeenCalledWith("/");
  });
});

describe("SecondaryMenu", () => {
  it("renders all the secondary menu links", () => {
    (useLanguage as Mock).mockReturnValue({
      site_content: {
        secondaryMenu: {
          restClient: "REST Client",
          graphiqlClient: "GraphiQL Client",
          history: "History",
        },
      },
    });

    render(<SecondaryMenu />);

    expect(screen.getByText("REST Client")).toBeInTheDocument();
    expect(screen.getByText("GraphiQL Client")).toBeInTheDocument();
    expect(screen.getByText("History")).toBeInTheDocument();
  });
});
