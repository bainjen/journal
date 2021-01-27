import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import AuthRoute from "./components/AuthRoute";
import EntriesIndex from "./components/EntriesIndex";
import Create from "./components/Create";
import Edit from "./components/Edit";
import useJournalData from "./hooks/useJournalData";
import useLogin from "./hooks/useLogin";

function App() {
  const { user, login, isLoggedIn } = useLogin();

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
            <Login login={login} />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <AuthRoute isLoggedIn={isLoggedIn} path="/journals">
            <EntriesIndex journals={journals} />
          </AuthRoute>
          <AuthRoute isLoggedIn={isLoggedIn} path="/new">
            <Create
              saveDraft={saveDraft}
              currentJournal={currentJournal}
              setCurrentJournal={setCurrentJournal}
            />
          </AuthRoute>
          <AuthRoute isLoggedIn={isLoggedIn} path="/edit/:journalId">
            <Edit
              journals={drafts}
              saveDraft={saveDraft}
              setCurrentJournal={setCurrentJournal}
            />
          </AuthRoute>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
