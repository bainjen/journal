import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import UserAuthentication from "./components/UserAuthentication";
import EntriesIndex from "./components/EntriesIndex";
import Create from "./components/Create";
import Edit from "./components/Edit";
import useJournalData from "./hooks/useJournalData";

function App() {
  const isLoggedIn = true;
  const {
    journals,
    saveDraft,
    drafts,
    currentJournal,
    setCurrentJournal,
  } = useJournalData();
  console.log("drafts", drafts);

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
          <Route path="/login">
            <UserAuthentication />
          </Route>
          <Route path="/journals">
            {isLoggedIn ? (
              <EntriesIndex journals={journals} />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/new">
            {isLoggedIn ? (
              <Create
                saveDraft={saveDraft}
                currentJournal={currentJournal}
                setCurrentJournal={setCurrentJournal}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
          <Route path="/edit/:journalId">
            {isLoggedIn ? (
              <Edit
                journals={drafts}
                saveDraft={saveDraft}
                setCurrentJournal={setCurrentJournal}
              />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
