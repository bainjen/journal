import React from "react";
import { Redirect, Route } from "react-router-dom";

const AuthRoute = ({ isLoggedIn, children, ...rest }) => {
  const content = isLoggedIn ? children : <Redirect to="/login" />;
  return <Route {...rest}>{content}</Route>;
};

export default AuthRoute;
