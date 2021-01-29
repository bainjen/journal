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

const Register = ({ register, message }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [bioline, setBioline] = useState("");

  const handleInput = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    register(name, username, password, bioline);
  };

  const exists = "username exists";
  const invalid = "invalid inputs";
  const showError = message === exists || message === invalid;
  let messageString;
  if (message === exists) {
    messageString =
      "That username already exists. Please login or choose a new username.";
  } else {
    if (message === invalid) {
      messageString =
        "Please fill out the entire form! Password must be at least 6 characters.";
    }
  }

  return (
    <LoginMain>
      <WrapperDiv>
        <LoginH1>Register</LoginH1>
        <LoginForm onSubmit={handleSubmit}>
          <label htmlFor="name">name</label>
          <input
            onChange={(e) => handleInput(e, setName)}
            id="name"
            name="name"
          ></input>

          <label htmlFor="username">username</label>
          <input
            onChange={(e) => handleInput(e, setUsername)}
            id="username"
            name="username"
          ></input>

          <label htmlFor="password">password</label>
          <input
            onChange={(e) => handleInput(e, setPassword)}
            id="password"
            name="password"
            type="password"
          ></input>

          <label htmlFor="bioline">bio line</label>
          <input
            onChange={(e) => handleInput(e, setBioline)}
            id="bioline"
            name="bioline"
          ></input>
          <BtnInput type="submit" value="submit" />
        </LoginForm>
        <ErrorMessage isShown={showError}>{messageString}</ErrorMessage>
        <BottomLink to="/login">
          <p>Already have an account? Login here.</p>
        </BottomLink>
      </WrapperDiv>
    </LoginMain>
  );
};

export default Register;
