import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";


import "./App.css";
import Home from "./home";
import Detail from "./detail";

function App() {
  return (
    <div data-testid="app" className="App">
      
      <Router>
      <Link to="/home">Home</Link>|
      <Link to="/detail">asdf</Link>
        <Switch>
          <Route exact path="/">
           Hello
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail">
            <Detail />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
