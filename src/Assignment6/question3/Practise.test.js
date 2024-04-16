import { render, screen, fireEvent } from "@testing-library/react";
import Practise from "./Practise";
import "@testing-library/jest-dom";

test("testing for counter", () => {
  render(<Practise />);

  const textElement = screen.getByText("Count: 0");
  expect(textElement).toBeInTheDocument();

  const incrementButton = screen.getByText("Increment");
  fireEvent.click(incrementButton);
  expect(textElement.textContent).toBe("Count: 1");

  const decrementButton = screen.getByText("Decrement");
  fireEvent.click(decrementButton);
  expect(textElement.textContent).toBe("Count: 0");

  const decrementButton1 = screen.getByText("Decrement");
  fireEvent.click(decrementButton1);
  expect(textElement.textContent).toBe("Count: -1");
});
