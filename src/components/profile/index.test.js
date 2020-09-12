import React from "react";
import { render, screen } from "@testing-library/react";
import { Profile } from ".App";

test("renders follow button", () => {
  render(<Profile />);
  const linkElement = screen.getByText("Follow");
  expect(linkElement).toBeTruthy();
});
