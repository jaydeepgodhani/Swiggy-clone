import { fireEvent, render, screen } from "@testing-library/react"
import "@testing-library/jest-dom";
import Header from "../app/Header";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore";

it("should load loginbutton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button");
  expect(loginbutton).toBeInTheDocument();
})

it("should load logoutbutton", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const loginbutton = screen.getByRole("button");
  fireEvent.click(loginbutton);
  const logoutButton = screen.getByRole("button");
  expect(logoutButton).toBeInTheDocument();
});