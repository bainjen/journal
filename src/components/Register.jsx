import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { device } from "../devices";

import {
  LoginMain,
  WrapperDiv,
  LoginH1,
  LoginForm,
  BtnInput,
  BottomLink,
} from "./loginComponents/loginComponents";

const Register = ({ register }) => {
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

        <BottomLink to="/login">
          <p>Already have an account? Login here.</p>
        </BottomLink>
      </WrapperDiv>
    </LoginMain>
  );
};

export default Register;
