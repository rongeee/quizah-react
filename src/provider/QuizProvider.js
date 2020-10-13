import React, { createContext, useState } from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../styled/GlobalStyles";
import { theme } from "../styled/theme";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [currentGame, setCurrentGame] = useState({});
  const [darkTheme, setDarkTheme] = useState(true);

  return (
    <QuizContext.Provider value={{ currentGame, setCurrentGame }}>
      <ThemeProvider theme={darkTheme ? theme.dark : theme.light}>
        <GlobalStyles />
          {children}
      </ThemeProvider>
    </QuizContext.Provider>
  );
};

export default QuizProvider;