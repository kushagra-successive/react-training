import { fireEvent, render, screen } from "@testing-library/react";
import LoginForm from "./LoginForm";
import "@testing-library/jest-dom";

test("change event testing", () => {
  render(<LoginForm />);
  const nameTest = screen.getByPlaceholderText("User Name");
  const passTest = screen.getByPlaceholderText("Password");

  fireEvent.change(nameTest, { target: { value: "testUser" } });
  fireEvent.change(passTest, { target: { value: "testPass" } });

  expect(nameTest.value).toBe("testUser");
  expect(passTest.value).toBe("testPass");
});

test("submit button works correctly", () => {
  render(<LoginForm />);

  fireEvent.change(screen.getByPlaceholderText("User Name"), {
    target: { value: "testUser" },
  });
  fireEvent.change(screen.getByPlaceholderText("Password"), {
    target: { value: "testPassword" },
  });

  fireEvent.click(screen.getByText("Submit"));

  // Assert that the state has been updated correctly
  expect(screen.getByText("testUser testPassword")).toBeInTheDocument();

});
