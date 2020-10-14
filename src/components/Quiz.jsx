import React from "react";

const Quiz = ({ currentGame }) => {
  return (
    <div>
      <span>{currentGame.username}</span>
      <span>{currentGame.difficulty}</span>
    </div>
  );
};

export default Quiz;
