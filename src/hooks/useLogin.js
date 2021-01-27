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
  const [isLoggedIn, setIsLoggedIn] = useState(true);
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
    }
  };

  const register = (name, username, password, bioline) => {
    const foundUser = userDb.find((user) => user.username === username);
    if (foundUser) {
      setMessage("username exists");
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

  return { user, login, isLoggedIn, register, message };
};

export default useLogin;
