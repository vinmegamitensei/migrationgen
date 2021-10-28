import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./containers/MigrationHome";
import DuplicateVerifier from "./containers/DuplicateVerifier";

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/duplicates">Duplicates Verifier</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/duplicates">
            <DuplicateVerifier />
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
