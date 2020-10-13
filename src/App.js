import React, { useContext } from "react";
import StartScreen from "./components/StartScreen";
import { QuizContext } from "./provider/QuizProvider";
import { Switch, Route, Link, Router, useLocation } from "react-router-dom";
import QuizSetupScreen from "./components/QuizSetupScreen";
import { useTransition, animated } from 'react-spring'

function App() {
  const { currentGame, setCurrentGame } = useContext(QuizContext);
  const location = useLocation()
  console.log(location);

  const transitions = useTransition(location, location => location.pathname, {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0%)' },
    leave: { opacity: 0, transform: 'translateX(-50%)' },
  })

  return (
  transitions.map(({ item: location, props, key }) => (
    // TODO: Remove inline-styling
    <animated.div key={key} style={{...props, position: 'absolute', top: '0', left: '0', display: 'grid', placeItems: 'center', height: '100%', width: '100%'}}>
      <Switch location={location}>
        <Route path="/" exact component={StartScreen} />
        <Route path="/setup" component={QuizSetupScreen} />
      </Switch>
    </animated.div>
  ))
  );
}

export default App;
