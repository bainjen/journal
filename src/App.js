import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Register from "./components/Register";
import EntriesIndex from "./components/EntriesIndex";
import Create from "./components/Create";
import { journals } from "./journalData";

function App() {
  const isLoggedIn = true;

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/journals">all journal entries</Link>
          </li>
          <li>
            <Link to="/new">create a new entry</Link>
          </li>
        </ul>

        <Switch>
          <Redirect exact from="/" to="/journals" />
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/journals">
            {isLoggedIn ? (
              <EntriesIndex journals={journals} />
            ) : (
              <Redirect to="/register" />
            )}
          </Route>
          <Route path="/new">
            {isLoggedIn ? <Create /> : <Redirect to="/register" />}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
