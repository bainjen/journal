import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import { AuthRoute, LoginRoute } from "./AuthRoute";
import EntriesIndex from "./EntriesIndex";
import Create from "./Create";
import Edit from "./Edit";
import Nav from "./Nav";

const AppRouter = ({
  isLoggedIn,
  login,
  user,
  register,
  message,
  journals,
  saveDraft,
  drafts,
  currentJournal,
  setCurrentJournal,
}) => {
  return (
    <Router>
      <div>
        <Nav />

        <Switch>
          <Redirect exact from="/" to="/journals" />
          <LoginRoute isLoggedIn={isLoggedIn} path="/login">
            <Login login={login} />
          </LoginRoute>
          <LoginRoute isLoggedIn={isLoggedIn} path="/register">
            <Register register={register} />
          </LoginRoute>
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
};

export default AppRouter;
