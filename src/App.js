import React, { useContext } from "react";
import StartScreen from "./components/StartScreen";
import { QuizContext } from "./provider/QuizProvider";
import { Switch, Route } from "react-router-dom";
import QuizSetupScreen from "./components/QuizSetupScreen";
import Quiz from "./components/Quiz";

function App() {
  const { currentGame, setCurrentGame } = useContext(QuizContext);
  return (
    <div>
      <Switch>
        <Route path="/quiz">
          <Quiz />
        </Route>
        <Route path="/setup">
          <QuizSetupScreen setCurrentGame={setCurrentGame} />
        </Route>
        <Route path="/">
          <StartScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
