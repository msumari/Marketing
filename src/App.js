import "./App.css";
import Home from "./Home";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Customer from "./Customer";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/customers">
            <Customer />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
