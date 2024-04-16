import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";

import Toggle from "./Toggle";
test("Testing the modal", () => {
  render(<Toggle />);
  const testSubmit = screen.getByText("Toggle");
  fireEvent.click(testSubmit);
  expect(screen.getByText("I am inside the Modal")).toBeInTheDocument();
  expect(screen.getByText(/Hello world !/i)).toBeInTheDocument();
});
