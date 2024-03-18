import { render, screen } from "@testing-library/react";
import Contact from "../app/Contact";
import "@testing-library/jest-dom";

// tests are run inside jsdom(browser-like)
describe("contact us page test cases", () => {
  test("should load contact us component", () => {
    render(<Contact/>);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  // `it` is same as `test`, can read like `it should load...`
  it("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByText("Contact...");
    expect(heading).toBeInTheDocument();
  });
})