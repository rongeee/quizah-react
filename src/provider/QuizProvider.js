import React, { createContext, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styled/GlobalStyles";
import { theme } from "../styled/theme";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [currentGame, setCurrentGame] = useState({});
  const [darkTheme, setDarkTheme] = useState(
    window.localStorage.getItem("theme") || "true"
  );

  useEffect(() => {
    setThemeLocalStorage();
  }, []);

  useEffect(() => {
    return darkTheme === "true"
      ? window.localStorage.setItem("theme", "true")
      : window.localStorage.setItem("theme", "false");
  }, [darkTheme]);

  const setThemeLocalStorage = () => {
    if (!window.localStorage.getItem("theme")) {
      return darkTheme === "true"
        ? window.localStorage.setItem("theme", "true")
        : window.localStorage.setItem("theme", "false");
    }
  };

  return (
    <QuizContext.Provider
      value={{ currentGame, setCurrentGame, darkTheme, setDarkTheme }}
    >
      <ThemeProvider theme={darkTheme === "true" ? theme.dark : theme.light}>
        <GlobalStyles />
        {children}
      </ThemeProvider>
    </QuizContext.Provider>
  );
};

export default QuizProvider;
