import { useState } from "react";
import { dandyTheme } from "../themes/theme";

const useTheme = () => {
  const [theme, setTheme] = useState(dandyTheme);

  const changeTheme = (themeName) => {
    switch (themeName) {
      case "dandy":
        setTheme(dandyTheme);
        break;
      default:
        setTheme(dandyTheme);
    }
  };

  return { theme, changeTheme };
};

export default useTheme;
