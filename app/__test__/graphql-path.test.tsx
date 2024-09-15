import { useNavigate } from "@remix-run/react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { GraphqlPath } from "~/features/method-path";
import { UserProvider } from "~/shared/context";
import { useRequestHistory } from "~/shared/hooks";

vi.mock("@remix-run/react", () => ({
  useNavigate: vi.fn(),
  Link: vi.fn(),
}));

vi.mock("~/shared/hooks", () => ({
  useRequestHistory: vi.fn(),
}));

const mockFetchResponse = (data: unknown, status = 200) => {
  return {
    json: () => Promise.resolve(data),
    status,
    ok: status >= 200 && status < 300,
    headers: new Headers(),
    statusText: "OK",
    redirected: false,
    type: "basic",
    url: "",
    clone: vi.fn(),
    body: null,
    bodyUsed: false,
    arrayBuffer: vi.fn(),
    blob: vi.fn(),
    formData: vi.fn(),
    text: vi.fn(),
  } as Response;
};
describe.skip("GraphqlPath Component", () => {
  it("submits form, adds request to history, navigates, and displays the response", async () => {
    const mockNavigate = vi.fn();
    const mockAddRequestToHistory = vi.fn();

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useRequestHistory as Mock).mockReturnValue({
      addRequestToHistory: mockAddRequestToHistory,
    });

    global.fetch = vi.fn(() =>
      Promise.resolve(mockFetchResponse({ data: { message: "Success" } }, 200)),
    );

    render(
      <UserProvider>
        <GraphqlPath />
      </UserProvider>,
    );

    const endpointInput = screen.getByLabelText(/endpoint/i);
    const queryInput = screen.getByLabelText(/query/i);

    fireEvent.change(endpointInput, {
      target: { value: "http://example.com/graphql" },
    });

    fireEvent.change(queryInput, {
      target: { value: "{ users { id name } }" },
    });

    const submitButton = screen.getByRole("button", { name: /send request/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockAddRequestToHistory).toHaveBeenCalledWith({
        timestamp: expect.any(Number),
        type: "GRAPHQL",
        url: "/GRAPHQL/http%3A%2F%2Fexample.com%2Fgraphql?Accept=application%2Fjson&Content-Type=application%2Fjson",
        shortUrl: "http://example.com/graphql",
      });

      expect(mockNavigate).toHaveBeenCalledWith(
        "/GRAPHQL/http%3A%2F%2Fexample.com%2Fgraphql?Accept=application%2Fjson&Content-Type=application%2Fjson",
      );

      expect(screen.getByText(/success/i)).toBeInTheDocument();
    });
  });

  it("handles fetch errors correctly", async () => {
    const mockNavigate = vi.fn();
    const mockAddRequestToHistory = vi.fn();

    (useNavigate as Mock).mockReturnValue(mockNavigate);
    (useRequestHistory as Mock).mockReturnValue({
      addRequestToHistory: mockAddRequestToHistory,
    });

    const consoleErrorSpy = vi
      .spyOn(console, "error")
      .mockImplementation(() => {});

    global.fetch = vi.fn(() => Promise.reject("Fetch error"));

    render(
      <UserProvider>
        <GraphqlPath />
      </UserProvider>,
    );

    const endpointInput = screen.getByLabelText(/endpoint/i);
    const queryInput = screen.getByLabelText(/query/i);

    fireEvent.change(endpointInput, {
      target: { value: "http://example.com/graphql" },
    });
    fireEvent.change(queryInput, {
      target: { value: "{ users { id name } }" },
    });

    const submitButton = screen.getByRole("button", { name: /send request/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(screen.queryByText(/success/i)).not.toBeInTheDocument();

      expect(consoleErrorSpy).toHaveBeenCalledWith("Error:", "Fetch error");
    });
  });
});
