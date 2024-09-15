import { useLocation } from "@remix-run/react";
import { render, screen } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import NotFound404 from "~/routes/$";
import { UserProvider } from "~/shared/context";

vi.mock("@remix-run/react", () => ({
  ...vi.importActual("@remix-run/react"),
  useLocation: vi.fn(),
  useNavigate: vi.fn(() => vi.fn()),
  Link: vi.fn(),
}));

describe("NotFound404 Component", () => {
  it("should render RestClientPathHandler when the path matches a REST request", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/rest-client" });

    render(
      <UserProvider>
        <NotFound404 />
      </UserProvider>,
    );

    expect(screen.getByText(/Method/i)).toBeInTheDocument();
  });

  it("should render GraphqlPath when the path matches a GraphQL request", () => {
    (useLocation as Mock).mockReturnValue({
      pathname: "/graphql",
    });

    render(
      <UserProvider>
        <NotFound404 />
      </UserProvider>,
    );

    expect(screen.getByText(/SDL URL/i)).toBeInTheDocument();
  });

  it("should render NotFound when the path does not match REST or GraphQL requests", () => {
    (useLocation as Mock).mockReturnValue({ pathname: "/path-no-exist" });

    render(
      <UserProvider>
        <NotFound404 />
      </UserProvider>,
    );

    expect(screen.getByText(/not found/i)).toBeInTheDocument();
  });
});
