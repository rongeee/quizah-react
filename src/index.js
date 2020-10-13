import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import QuizProvider from "./provider/QuizProvider";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <QuizProvider>
        <App />
      </QuizProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
