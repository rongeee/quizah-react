import React, { createContext, useState } from "react";

export const QuizContext = createContext();

const QuizProvider = ({ children }) => {
  const [currentGame, setCurrentGame] = useState({});

  return (
    <QuizContext.Provider value={{ currentGame, setCurrentGame }}>
        {children}
    </QuizContext.Provider>
  );
};

export default QuizProvider;