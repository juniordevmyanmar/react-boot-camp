import { render, screen } from "@testing-library/react";
import Detail from ".";
import { Router, Route } from "react-router-dom";
import { createMemoryHistory } from "history";

test("renders Detail component", () => {
  const history = createMemoryHistory();
  history.push("/detail/1.11/2.11");
  render(
    <Router history={history}>
      <Route path="/detail/:lat/:lng">
        <Detail />
      </Route>
    </Router>
  );
  const linkElement = screen.getByText(/Detail/i);
  expect(linkElement).toBeInTheDocument();
});
