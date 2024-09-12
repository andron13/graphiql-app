import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Header } from "~/entities";
import { UserProvider } from "~/shared/context";

vi.mock("~/features/language-changer", () => ({
  LanguageChanger: () => (
    <div data-testid="mock-language-changer">LanguageChanger</div>
  ),
}));

vi.mock("~/entities/nav/primary-menu", () => ({
  PrimaryMenu: () => <div data-testid="mock-primary-menu">PrimaryMenu</div>,
}));

describe("Header Component", () => {
  it("renders the logo, language changer, and primary menu", () => {
    render(
      <MemoryRouter>
        <UserProvider>
          <Header />
        </UserProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText("Graphiql App")).toBeInTheDocument();

    expect(screen.getByTestId("mock-language-changer")).toBeInTheDocument();
    expect(screen.getByText("LanguageChanger")).toBeInTheDocument();

    expect(screen.getByTestId("mock-primary-menu")).toBeInTheDocument();
    expect(screen.getByText("PrimaryMenu")).toBeInTheDocument();
  });
});
