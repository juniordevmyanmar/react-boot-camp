import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "./home";
import Detail from "./detail";

function App() {
  return (
    <div data-testid="app" className="wrapper ">
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail/:lat/:lng">
            <Detail />
          </Route>
          <Route path="*">404</Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
