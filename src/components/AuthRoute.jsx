import React from "react";
import { Redirect, Route } from "react-router-dom";

export const AuthRoute = ({ isLoggedIn, children, ...rest }) => {
  const content = isLoggedIn ? children : <Redirect to="/login" />;
  return <Route {...rest}>{content}</Route>;
};

export const LoginRoute = ({ isLoggedIn, children, ...rest }) => {
  const content = !isLoggedIn ? children : <Redirect to="/journals" />;
  return <Route {...rest}>{content}</Route>;
};
