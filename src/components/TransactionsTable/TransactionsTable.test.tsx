import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import TableHeader from "./TableHeader";

describe("TableHeader", () => {
  it('calls onSortOptionChange with "date" when the Date button is clicked', () => {
    const handleSortOptionChange = jest.fn();
    render(
      <table>
        <TableHeader
          sortOptions={{ dateSort: "none", categorySort: "none" }}
          onSortOptionChange={handleSortOptionChange}
        />
      </table>
    );

    fireEvent.click(screen.getByRole("button", { name: /date/i }));

    // Check if handleSortOptionChange was called with the correct argument
    expect(handleSortOptionChange).toHaveBeenCalledWith("date");
  });

  it("displays the correct arrow based on the dateSort prop", () => {
    const handleSortOptionChange = jest.fn();
    render(
      <table>
        <TableHeader
          sortOptions={{ dateSort: "asc", categorySort: "none" }}
          onSortOptionChange={handleSortOptionChange}
        />
      </table>
    );

    // Check if the up arrow is displayed when dateSort is "asc"
    expect(screen.getByTestId("date-header")).toContainHTML("↑"); // up arrow
  });
});
