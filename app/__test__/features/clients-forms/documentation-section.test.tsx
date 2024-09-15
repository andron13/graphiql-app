import { render, screen } from "@testing-library/react";
import { vi } from "vitest";

import { DocumentationSection } from "~/features/clients-forms";

vi.mock("~/entities/json-body-viewer", () => ({
  JsonBodyViewer: vi.fn(({ data }: { data: string }) => <div>{data}</div>),
}));

describe("DocumentationSection", () => {
  it("renders with provided sdlResponse", () => {
    const customResponse = "Custom SDL Response";

    render(<DocumentationSection sdlResponse={customResponse} />);

    expect(screen.getByText("Documentation")).toBeInTheDocument();
    expect(screen.getByText(customResponse)).toBeInTheDocument();
  });
});
