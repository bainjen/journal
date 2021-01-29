import { useState, useEffect } from "react";

const seedDb = [
  {
    name: "Tulip Montgomery",
    username: "test",
    password: "password",
    bioline: "lactose tolerant",
  },
];

const useLogin = () => {
  const [user, setUser] = useState({});
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState("");
  const [userDb, setUserDb] = useState(seedDb);

  useEffect(() => {
    if (message !== "") {
      const timeout = setTimeout(() => {
        setMessage("");
      }, 5000);
      return () => clearTimeout(timeout);
    }
  }, [message]);

  const login = (username, password) => {
    const foundUser = userDb.find((user) => user.username === username);

    if (foundUser) {
      if (foundUser.password === password) {
        setUser(foundUser);
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        setMessage("incorrect password");
      }
    } else {
      setIsLoggedIn(false);
      setMessage("not a user");
    }
  };

  const register = (name, username, password, bioline) => {
    const foundUser = userDb.find((user) => user.username === username);
    if (foundUser) {
      setMessage("username exists");
    } else if (
      username.length < 1 ||
      name.length < 1 ||
      password.length < 6 ||
      bioline.length < 1
    ) {
      setMessage("invalid inputs");
    } else {
      const newUser = {
        name,
        username,
        password,
        bioline,
      };
      setUserDb((prev) => [...prev, newUser]);
      setUser(newUser);
      setIsLoggedIn(true);
    }
  };

  const logout = (e) => {
    e.preventDefault();
    setUser(null);
    setIsLoggedIn(false);
  };

  return { user, login, isLoggedIn, register, message, logout };
};

export default useLogin;
