import { createContext } from "react";

const ThemeContext = createContext({
  currentTheme: "oceanBlue", // значение по умолчанию
  setCurrentTheme: () => {},
});

export default ThemeContext;
