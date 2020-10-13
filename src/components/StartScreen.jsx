import React, { useState } from "react";
import { Link } from "react-router-dom";
import ThemeSwitcher from "./ThemeSwitcher";
const StartScreen = () => {
  function handleStart() {}

  return (
    <div>

        <div>
          <h1>Quizah!</h1>
          <h2>Knowledge against time!</h2>
          <p>The faster you are, the more points you get.</p>
          <p>Harder question gets you more points</p>
        </div>
        <div>
          <Link to="/setup">Let's Play!</Link>
          <a href="./score.php">High Score</a>
        </div>

          <ThemeSwitcher />
    </div>
  );
};

export default StartScreen;
