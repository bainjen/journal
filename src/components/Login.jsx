import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main>
      <div>
        <h1>login</h1>
        <form>
          <label for="username">username</label>
          <input id="username" name="username"></input>

          <label for="password">password</label>
          <input id="password" name="password" type="password"></input>
        </form>
      </div>
      <div>
        <Link to="/register">go to register</Link>
      </div>
    </main>
  );
};

export default Login;
