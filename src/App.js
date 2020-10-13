import React, { useContext } from "react";
import "./App.css";
import StartScreen from "./components/StartScreen";
import { QuizContext } from "./provider/QuizProvider";
import { Switch, Route } from "react-router-dom";
import QuizSetupScreen from "./components/QuizSetupScreen";

function App() {
  const { currentGame, setCurrentGame } = useContext(QuizContext);
  return (
    <div>
      <Switch>
        <Route path="/setup">
          <QuizSetupScreen />
        </Route>
        <Route path="/">
          <StartScreen currentGame={currentGame} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
