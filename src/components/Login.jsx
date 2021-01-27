import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

const Login = ({ login }) => {
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

  return (
    <main>
      <div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">username</label>
          <input id="username" name="username" onChange={handleUsername} />

          <label htmlFor="password">password</label>
          <input
            id="password"
            name="password"
            type="password"
            onChange={handlePassword}
          />

          <input type="submit" value="submit" />
        </form>
      </div>
      <div>
        <Link to="/register">go to register</Link>
      </div>
    </main>
  );
};

export default Login;
