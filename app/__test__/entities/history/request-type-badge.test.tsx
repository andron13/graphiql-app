import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { RequestTypeBadge } from "~/entities/history";

const requestTypeTestCases = [
  { type: "GET", bgColor: "bg-green-100", textColor: "text-green-800" },
  { type: "POST", bgColor: "bg-blue-100", textColor: "text-blue-800" },
  { type: "PUT", bgColor: "bg-yellow-100", textColor: "text-yellow-800" },
  { type: "DELETE", bgColor: "bg-red-100", textColor: "text-red-800" },
  { type: "PATCH", bgColor: "bg-orange-100", textColor: "text-orange-800" },
  { type: "OPTIONS", bgColor: "bg-gray-100", textColor: "text-gray-800" },
  { type: "HEAD", bgColor: "bg-teal-100", textColor: "text-teal-800" },
  { type: "CONNECT", bgColor: "bg-indigo-100", textColor: "text-indigo-800" },
  { type: "TRACE", bgColor: "bg-pink-100", textColor: "text-pink-800" },
  { type: "GRAPHQL", bgColor: "bg-purple-100", textColor: "text-purple-800" },
];

describe("RequestTypeBadge", () => {
  requestTypeTestCases.forEach(({ type, bgColor, textColor }) => {
    it(`should render a badge with correct styles for ${type}`, () => {
      render(<RequestTypeBadge type={type} />);

      const badge = screen.getByText(type);

      expect(badge).toBeInTheDocument();
      expect(badge).toHaveClass(
        `rounded-full px-2 py-1 text-xs font-semibold ${bgColor} ${textColor}`,
      );
    });
  });

  it("should render a badge with default styles for an unknown type", () => {
    render(<RequestTypeBadge type="UNKNOWN" />);

    const badge = screen.getByText("UNKNOWN");

    expect(badge).toBeInTheDocument();
    expect(badge).toHaveClass(
      "rounded-full px-2 py-1 text-xs font-semibold bg-gray-100 text-gray-800",
    );
  });
});
