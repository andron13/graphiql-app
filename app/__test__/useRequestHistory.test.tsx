import { fireEvent, render } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";

import { useRequestHistory } from "~/shared/hooks";
import { HistoryRequest, RestRequestType } from "~/shared/types";

const mockRequest: HistoryRequest = {
  url: "https://api.example.com",
  type: RestRequestType.GET,
  timestamp: Date.now(),
  shortUrl: "https://api.example.com",
};

const TestComponent = () => {
  const { history, addRequestToHistory, clearHistory } = useRequestHistory();
  return (
    <div>
      <button onClick={() => addRequestToHistory(mockRequest)}>Add</button>
      <button onClick={clearHistory}>Clear</button>
      <div>{history.length}</div>
    </div>
  );
};

describe("useRequestHistory", () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  it("should initialize with empty history if localStorage is empty", () => {
    const { getByText } = render(<TestComponent />);

    expect(getByText("0")).toBeTruthy();
  });

  it("should initialize with history from localStorage", () => {
    localStorage.setItem("requestHistory", JSON.stringify([mockRequest]));

    const { getByText } = render(<TestComponent />);

    expect(getByText("1")).toBeTruthy();
  });

  it("should add a request to history", () => {
    const { getByText, getByRole } = render(<TestComponent />);

    fireEvent.click(getByRole("button", { name: /Add/i }));

    expect(getByText("1")).toBeTruthy();
    expect(localStorage.getItem("requestHistory")).toEqual(
      JSON.stringify([mockRequest]),
    );
  });

  it("should clear the history", () => {
    localStorage.setItem("requestHistory", JSON.stringify([mockRequest]));

    const { getByText, getByRole } = render(<TestComponent />);

    fireEvent.click(getByRole("button", { name: /Clear/i }));

    expect(getByText("0")).toBeTruthy();
    const storedHistory = JSON.parse(localStorage.getItem("requestHistory")!);
    expect(storedHistory).toBe(null);
  });
});
