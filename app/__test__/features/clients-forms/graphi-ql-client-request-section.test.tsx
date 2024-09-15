import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { vi } from "vitest";

import { GraphiQLClientRequestSection } from "~/features/clients-forms";
import { FormValuesGraphql } from "~/shared/types/types";

const mockOnSubmit = vi.fn();
const mockOnSDLSubmit = vi.fn();

describe("GraphiQLClientRequestSection", () => {
  const defaultValues: FormValuesGraphql = {
    endpoint: "",
    sdlURL: "",
    headers: [],
    variables: [],
    query: "",
  };

  beforeEach(() => {
    mockOnSubmit.mockClear();
    mockOnSDLSubmit.mockClear();
  });

  it.skip("renders correctly with default values", () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );

    expect(screen.getByLabelText("Endpoint URL")).toBeInTheDocument();
    expect(screen.getByLabelText("SDL URL")).toBeInTheDocument();
    expect(screen.getByText("No headers added")).toBeInTheDocument();
    expect(screen.getByText("No variables added")).toBeInTheDocument();
    expect(screen.getByLabelText("Query")).toBeInTheDocument();
  });

  it("handles adding and removing headers", () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );
    fireEvent.click(screen.getByText("Add Header"));
    expect(screen.getAllByPlaceholderText("Header Key").length).toBe(1);
    expect(screen.getAllByPlaceholderText("Header Value").length).toBe(1);
    fireEvent.click(screen.getByText("Remove"));
    expect(screen.queryByPlaceholderText("Header Key")).toBeNull();
  });

  it("handles adding and removing variables", () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );
    fireEvent.click(screen.getByText("Add Variable"));
    expect(screen.getAllByPlaceholderText("Variable Key").length).toBe(1);
    expect(screen.getAllByPlaceholderText("Variable Value").length).toBe(1);
    fireEvent.click(screen.getByText("Remove"));
    expect(screen.queryByPlaceholderText("Variable Key")).toBeNull();
  });

  it.skip("handles SDL URL update based on endpoint", async () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );

    fireEvent.change(screen.getByLabelText("Endpoint URL"), {
      target: { value: "http://example.com" },
    });

    await waitFor(() => {
      expect(screen.getByLabelText("SDL URL")).toHaveValue(
        "http://example.com?sdl",
      );
    });
  });

  it("calls onSubmit with correct data when form is submitted", async () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );

    fireEvent.change(screen.getByLabelText("Endpoint URL"), {
      target: { value: "http://example.com" },
    });
    fireEvent.change(screen.getByLabelText("Query"), {
      target: { value: "query { hello }" },
    });

    fireEvent.click(screen.getByText("Send Request"));

    await waitFor(() => {
      expect(mockOnSubmit).toHaveBeenCalledWith({
        endpoint: "http://example.com",
        sdlURL: "http://example.com?sdl",
        headers: [],
        variables: [],
        query: "query { hello }",
      });
    });
  });

  it("calls onSDLSubmit with correct endpoint value", async () => {
    render(
      <GraphiQLClientRequestSection
        onSubmit={mockOnSubmit}
        onSDLSubmit={mockOnSDLSubmit}
        defaultValues={defaultValues}
      />,
    );

    fireEvent.change(screen.getByLabelText("Endpoint URL"), {
      target: { value: "http://example.com" },
    });

    fireEvent.click(screen.getByText("Fetch SDL"));

    await waitFor(() => {
      expect(mockOnSDLSubmit).toHaveBeenCalledWith("http://example.com");
    });
  });
});
