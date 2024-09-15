import { render, screen } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { useUser } from "~/shared/context";
import { useLanguage } from "~/shared/context/use-language";

vi.mock("~/shared/context", () => ({
  useUser: vi.fn(),
}));

function TestComponent() {
  const { language, site_content } = useLanguage();
  return (
    <div>
      <p>{language}</p>
      <p>{site_content.welcomeMessage.title}</p>
    </div>
  );
}

describe("useLanguage", () => {
  it("renders language and content correctly", () => {
    const mockUser = { language: "en_GB" };
    vi.mocked(useUser as Mock).mockReturnValue({ user: mockUser });

    render(<TestComponent />);

    expect(screen.getByText("en_GB")).toBeInTheDocument();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });

  it("renders the default site_content if the user's language is not found", () => {
    const mockUser = { language: "fr_FR" };
    vi.mocked(useUser as Mock).mockReturnValue({ user: mockUser });

    render(<TestComponent />);

    expect(screen.getByText("fr_FR")).toBeInTheDocument();
    expect(screen.getByText("Welcome")).toBeInTheDocument();
  });
});
