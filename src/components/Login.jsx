import React, { useState } from "react";
import ErrorMessage from "./ErrorMessage";

import {
  LoginMain,
  WrapperDiv,
  LoginH1,
  LoginForm,
  BtnInput,
  BottomLink,
} from "./loginComponents/loginComponents";

const Login = ({ login, message }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsername = (e) => {
    setUsername(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  const showError =
    message === "incorrect password" || message === "not a user";
  let messageString;
  if (message === "incorrect password") {
    messageString = "incorrect password";
  } else {
    if (message === "not a user") {
      messageString = "please enter valid username and password";
    }
  }

  return (
    <LoginMain>
      <WrapperDiv>
        <LoginH1>Login</LoginH1>
        <LoginForm onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input id="username" name="username" onChange={handleUsername} />
          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handlePassword}
          />
          <BtnInput type="submit" value="submit" />
        </LoginForm>
        <ErrorMessage isShown={showError}>{messageString}</ErrorMessage>
        <BottomLink to="/register">
          <p>Don't have an account yet? Register here.</p>
        </BottomLink>
      </WrapperDiv>
    </LoginMain>
  );
};

export default Login;
