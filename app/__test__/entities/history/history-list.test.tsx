import { MemoryRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";

import { HistoryList } from "~/entities/history";
import { HistoryRequest, RestRequestType } from "~/shared/types";

vi.mock("~/path/to/HistoryListItem", () => ({
  HistoryListItem: ({ request }: { request: HistoryRequest }) => (
    <li>{request.url}</li>
  ),
}));

describe("HistoryList", () => {
  const mockRequests: HistoryRequest[] = [
    {
      timestamp: 1672531200000,
      url: "https://example.com",
      type: RestRequestType.GET,
      shortUrl: "ex.com",
    },
    {
      timestamp: 1672617600000,
      url: "https://example.org",
      type: RestRequestType.POST,
      shortUrl: "ex.org",
    },
  ];

  it.skip("renders HistoryList with title and list of requests", () => {
    render(
      <MemoryRouter>
        <HistoryList requests={mockRequests} />
      </MemoryRouter>,
    );

    expect(screen.getByText(/Request History/i)).toBeInTheDocument();

    mockRequests.forEach((request) => {
      expect(screen.getByText(request.url)).toBeInTheDocument();
    });
  });

  it("renders empty state when no requests are provided", () => {
    render(
      <MemoryRouter>
        <HistoryList requests={[]} />
      </MemoryRouter>,
    );

    expect(screen.queryByRole("list")).toBeEmptyDOMElement();
  });
});
