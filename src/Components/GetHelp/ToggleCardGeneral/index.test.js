import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import ToggleCardGeneral from ".";

describe("togglecard tests", () => {
  it("card renders", () => {
    render(
      <ToggleCardGeneral
        cardTitle={"Test Card"}
        cardBody="card body"
      ></ToggleCardGeneral>
    );
  });
  it("card renders and displays cardTitle", () => {
    render(
      <ToggleCardGeneral
        cardTitle={"Test Card"}
        cardBody="card body"
      ></ToggleCardGeneral>
    );
    fireEvent.click(screen.getByText("Test Card"));
  });
  it("card renders, displays cardTitle and displays body when clicked", () => {
    render(
      <ToggleCardGeneral
        cardTitle={"Test Card"}
        cardBody="card body"
      ></ToggleCardGeneral>
    );
    fireEvent.click(screen.getByText("Test Card"));
    expect(screen.getByText("Test Card")).toHaveTextContent("Test");
  });
});

