import UserProfile from "./UserProfile";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { dataArray } from "../Data";

test("testing displayed item", () => {
  render(<UserProfile {...dataArray} />);
  const testName = screen.getByText("Name: Kushagra Bajpai");
  const testEmail = screen.getByText("Email:kushagra12@gmail.com");
  const testPhoneNo = screen.getByText("PhoneNo:9140021247");
  expect(testName).toBeInTheDocument();
  expect(testEmail).toBeInTheDocument();
  expect(testPhoneNo).toBeInTheDocument();
});
