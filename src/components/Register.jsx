import React from "react";
import { Link } from "react-router-dom";

const Register = () => {
  return (
    <main>
      <div>
        <h1>register</h1>
        <form>
          <label for="name">name</label>
          <input id="name" name="name"></input>

          <label for="username">username</label>
          <input id="username" name="username"></input>

          <label for="password">password</label>
          <input id="password" name="password" type="password"></input>

          <label for="bioline">bio line</label>
          <input id="bioline" name="bioline"></input>
        </form>
      </div>
      <div>
        <Link to="/login">Already have an account? Login here.</Link>
      </div>
    </main>
  );
};

export default Register;
