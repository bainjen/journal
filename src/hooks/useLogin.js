import { useState, useEffect } from "react";

const userDb = [
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

  return { user, login, isLoggedIn };
};

export default useLogin;
