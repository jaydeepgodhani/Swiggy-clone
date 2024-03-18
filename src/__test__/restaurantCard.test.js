const { render, screen } = require("@testing-library/react")
import Card from "../app/Card";
import restCardMock from "../mocks/restCardMock.json";
import "@testing-library/jest-dom";

it("should render restaurantCard component", () => {
  render(<Card data={restCardMock}/>);

  const title = screen.getByText("Andhra Gunpowder");

  expect(title).toBeInTheDocument();
})