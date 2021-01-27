import React, { useState } from "react";
import { Link } from "react-router-dom";

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
    <main>
      <div>
        <h1>register</h1>
        <form onSubmit={handleSubmit}>
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
          <input type="submit" value="submit" />
        </form>
      </div>
      <div>
        <Link to="/login">Already have an account? Login here.</Link>
      </div>
    </main>
  );
};

export default Register;
