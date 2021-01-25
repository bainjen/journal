import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch,
} from "react-router-dom";
import Register from "./components/Register";
import EntriesIndex from "./components/EntriesIndex";
import Create from "./components/Create";
import SingleEntry from "./components/SingleEntry";
import { journals } from "./journalData";

function App() {
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
          <Route path="/journals">
            <EntriesIndex journals={journals} />
          </Route>
          <Route path="/new ">
            <Create />
          </Route>
          <Route path={`journals/:journalId`}>
            <SingleEntry />
          </Route>
        </Switch>
        {/* <Register /> */}
      </div>
    </Router>
  );
}

export default App;
