import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";
import { render, screen } from "@testing-library/react";
import Home from ".";
jest.mock("../api", () => ({
  useReducerAPI: () => {
    return {
      loading: false,
      data: [
        {
          city: "Rangoon",
          lat: "16.8000",
          lng: "96.1500",
          country: "Burma",
          iso2: "MM",
          admin_name: "Yangon",
          capital: "primary",
          population: "5430000",
          population_proper: "5430000",
        },
      ],
    };
  },
}));
describe("Home Component Test", () => {
  test("renders Home component", () => {
    const history = createMemoryHistory();
    render(
      <Router history={history}>
        <Home />
      </Router>
    );
    const linkElement = screen.getByTestId("location");
    expect(linkElement).toBeInTheDocument();
  });
});
