import { LinkProps } from "@remix-run/react";
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import { Footer } from "~/entities";
import websiteConfig from "~/shared/website-config";

vi.mock("@remix-run/react", () => {
  return {
    Link: ({ to, ...props }: LinkProps) => (
      <a href={typeof to === "string" ? to : ""} {...props} />
    ),
  };
});

describe("Footer", () => {
  it("should render correctly", () => {
    render(<Footer />);

    expect(screen.getByAltText("authors")).toBeInTheDocument();

    expect(screen.getByAltText("RS SCHOOL")).toBeInTheDocument();

    expect(screen.getByText(/Anno 08.2024/i)).toBeInTheDocument();
  });

  it("shows author links on hover", () => {
    render(<Footer />);

    const authorsDiv = screen.queryByText(
      websiteConfig.links.authors.lead.title,
    )?.parentElement;

    expect(authorsDiv).toHaveClass("invisible opacity-0");

    const githubLogo = screen.getByAltText("authors");

    fireEvent.mouseOver(githubLogo);
    expect(authorsDiv).toHaveClass("visible opacity-100");

    fireEvent.mouseOut(githubLogo);
    expect(authorsDiv).toHaveClass("invisible opacity-0");
  });

  it("renders the correct link attributes", () => {
    render(<Footer />);

    const leadAuthorLink = screen.getByText(
      websiteConfig.links.authors.lead.title,
    );
    expect(leadAuthorLink).toHaveAttribute(
      "href",
      websiteConfig.links.authors.lead.pathname,
    );
    expect(leadAuthorLink).toHaveAttribute("target", "_blank");
    expect(leadAuthorLink).toHaveAttribute("rel", "noopener noreferrer");
  });
});
