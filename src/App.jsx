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
    <div data-testid="app" className="wrapper ">
      
      <Router>
 
        <Switch>
          <Route exact path="/">
           Hello
          </Route>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route path="/detail/:lat/:lng">
            <Detail />
          </Route>
          <Route path="*">
            404
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
