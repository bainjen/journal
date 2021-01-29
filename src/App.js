import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Redirect,
} from "react-router-dom";
import styled, { ThemeProvider } from "styled-components";
import useTheme from "./hooks/useTheme";
import Login from "./components/Login";
import Register from "./components/Register";
import { AuthRoute, LoginRoute } from "./components/AuthRoute";
import EntriesIndex from "./components/EntriesIndex";
import Create from "./components/Create";
import Edit from "./components/Edit";
import useJournalData from "./hooks/useJournalData";
import useLogin from "./hooks/useLogin";
import { GlobalStyle } from "./themes/theme";
import AppRouter from "./components/AppRouter";

function App() {
  const { theme, changeTheme } = useTheme();

  const { user, login, isLoggedIn, register, message, logout } = useLogin();

  const {
    journals,
    saveDraft,
    drafts,
    currentJournal,
    setCurrentJournal,
  } = useJournalData(user, isLoggedIn);

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyle />
        <AppRouter
          isLoggedIn={isLoggedIn}
          login={login}
          logout={logout}
          user={user}
          register={register}
          message={message}
          journals={journals}
          saveDraft={saveDraft}
          drafts={drafts}
          currentJournal={currentJournal}
          setCurrentJournal={setCurrentJournal}
        />
      </div>
    </ThemeProvider>
  );
}

export default App;
