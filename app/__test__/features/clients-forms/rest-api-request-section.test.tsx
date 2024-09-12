import { fireEvent, render, screen } from "@testing-library/react";

import { RestApiRequestSection } from "~/features/clients-forms";
import { RestRequestType } from "~/shared/types";

describe("RestApiRequestSection", () => {
  it("renders the variables field with initial values", () => {
    const initialData = {
      method: RestRequestType.GET,
      endpoint: "test.url",
      headers: [
        {
          key: "Header key",
          value: "Header value",
        },
      ],
      body: "",
      variables: [
        {
          key: "Variable key",
          value: "Variable value",
        },
      ],
    };

    render(<RestApiRequestSection onSubmit={() => {}} data={initialData} />);

    expect(screen.getByPlaceholderText("Variable Key")).toHaveValue(
      "Variable key",
    );
    expect(screen.getByPlaceholderText("Variable Value")).toHaveValue(
      "Variable value",
    );
  });

  it("adds a new header field when 'Add Header' button is clicked", () => {
    render(<RestApiRequestSection onSubmit={() => {}} />);

    fireEvent.click(screen.getByText("Add Header"));

    expect(screen.getAllByPlaceholderText("Header Key")).toHaveLength(2);
    expect(screen.getAllByPlaceholderText("Header Value")).toHaveLength(2);
  });

  it("removes a header field when 'Remove' button is clicked", () => {
    render(
      <RestApiRequestSection
        onSubmit={() => {}}
        data={{
          method: RestRequestType.GET,
          endpoint: "test.url",
          headers: [
            { key: "Header key", value: "Header value" },
            { key: "Another key", value: "Another value" },
          ],
          body: "",
          variables: [],
        }}
      />,
    );

    fireEvent.click(screen.getAllByText("Remove")[0]);

    expect(screen.getAllByPlaceholderText("Header Key")).toHaveLength(1);
    expect(screen.getAllByPlaceholderText("Header Value")).toHaveLength(1);
  });

  it("adds a new variable field when 'Add Variable' button is clicked", () => {
    render(<RestApiRequestSection onSubmit={() => {}} />);

    fireEvent.click(screen.getByText("Add Variable"));

    expect(screen.getAllByPlaceholderText("Variable Key")).toHaveLength(2);
    expect(screen.getAllByPlaceholderText("Variable Value")).toHaveLength(2);
  });

  it("removes a variable field when 'Remove' button is clicked", () => {
    render(
      <RestApiRequestSection
        onSubmit={() => {}}
        data={{
          method: RestRequestType.GET,
          endpoint: "test.url",
          headers: [],
          body: "",
          variables: [
            { key: "Variable key", value: "Variable value" },
            { key: "Another key", value: "Another value" },
          ],
        }}
      />,
    );

    fireEvent.click(screen.getAllByText("Remove")[0]);

    expect(screen.getAllByPlaceholderText("Variable Key")).toHaveLength(1);
    expect(screen.getAllByPlaceholderText("Variable Value")).toHaveLength(1);
  });
});
