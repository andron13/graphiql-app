import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";

import { JsonBodyViewer } from "~/entities/json-body-viewer";

describe("JsonBodyViewer", () => {
  it("should render JSON data correctly", () => {
    const data = { key: "value", number: 123 };
    render(<JsonBodyViewer data={data} />);

    expect(screen.getByText("key")).toBeInTheDocument();
    expect(screen.getByText("number")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  it("should handle stringified JSON data correctly", () => {
    const data = JSON.stringify({ key: "value", number: 123 });
    render(<JsonBodyViewer data={data} />);

    expect(screen.getByText("key")).toBeInTheDocument();
    expect(screen.getByText("number")).toBeInTheDocument();
    expect(screen.getByText("123")).toBeInTheDocument();
  });

  it("should render error message for invalid JSON data", () => {
    const data = "{ key: 'value', number: 123 }"; // Некорректный JSON
    render(<JsonBodyViewer data={data} />);

    expect(screen.getByText("Invalid JSON data")).toBeInTheDocument();
  });

  it("should render nothing if no data is provided", () => {
    render(<JsonBodyViewer data={null} />);

    expect(screen.queryByText("key")).not.toBeInTheDocument();
    expect(screen.queryByText("value")).not.toBeInTheDocument();
    expect(screen.queryByText("number")).not.toBeInTheDocument();
    expect(screen.queryByText("123")).not.toBeInTheDocument();
    expect(screen.queryByText("Invalid JSON data")).not.toBeInTheDocument();
  });
});
