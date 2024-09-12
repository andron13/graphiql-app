import { MemoryRouter } from "react-router-dom";

import { fireEvent, render, screen } from "@testing-library/react";
import { Mock, describe, expect, it, vi } from "vitest";

import { HistoryList, HistoryNoRequests } from "~/entities/history";
import { RoutesLayout } from "~/layouts";
import History from "~/routes/history";
import { UserProvider } from "~/shared/context";
import { useRequestHistory } from "~/shared/hooks";
import { RequestType, RestRequestType } from "~/shared/types";

vi.mock("~/shared/hooks", () => ({
  useRequestHistory: vi.fn(),
}));

describe("History Page", () => {
  it("should render HistoryNoRequests when history is empty", () => {
    (useRequestHistory as Mock).mockReturnValue({
      history: [],
      clearHistory: vi.fn(),
    });

    render(<History />);

    expect(
      screen.getByText(/You haven't executed any requests/i),
    ).toBeInTheDocument();
  });

  it("should render HistoryList when there are requests", () => {
    const mockHistory = [
      {
        type: RestRequestType.GET,
        url: "https://example.com/full",
        timestamp: 15,
        shortUrl: "https://example.com",
      },
    ];

    (useRequestHistory as Mock).mockReturnValue({
      history: mockHistory,
      clearHistory: vi.fn(),
    });

    render(
      <MemoryRouter>
        <UserProvider>
          <History />
        </UserProvider>
      </MemoryRouter>,
    );

    expect(screen.getByText(/Request History/i)).toBeInTheDocument();
  });

  it("should call clearHistory when the clear button is clicked", () => {
    const mockClearHistory = vi.fn();
    const mockHistory = [
      {
        type: RestRequestType.GET,
        url: "https://example.com/full",
        timestamp: 15,
        shortUrl: "https://example.com",
      },
    ];

    (useRequestHistory as Mock).mockReturnValue({
      history: mockHistory,
      clearHistory: mockClearHistory,
    });

    render(
      <MemoryRouter>
        <UserProvider>
          <History />
        </UserProvider>
      </MemoryRouter>,
    );

    fireEvent.click(screen.getByText(/clear history/i));

    expect(mockClearHistory).toHaveBeenCalledTimes(1);
  });
});
