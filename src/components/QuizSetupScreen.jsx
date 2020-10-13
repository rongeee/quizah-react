import React, { useState } from "react";
import styled from "styled-components";

const difficulties = [
  {
    difficulty: "EASY"
  },
  {
    difficulty: "MEDIUM"
  },
  {
    difficulty: "HARD"
  }
];

const QuizSetupScreen = () => {
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [dropDownState, setDropDownState] = useState("closed");

  function openDropdown() {
    if (dropDownState === "closed") {
      setDropDownState("open");
    } else {
      setDropDownState("closed");
    }
  }
  function renderDropDown() {
    return difficulties.map(item => {
      return (
        <DropDownItem
          key={item.difficulty}
          onClick={() => setDifficulty(item.difficulty)}
        >
          {item.difficulty}
        </DropDownItem>
      );
    });
  }
  return (
    <section>
      <h1>SETUP YOUR QUIZ</h1>
      <div>
        <label htmlFor="">WHAT'S YOUR NAME?</label>
        <input
          value={username}
          onChange={e => setUsername(e.target.value)}
          type="text"
        />
      </div>
      <div>
        <label htmlFor="">CHOOSE YOUR DIFFICULTY!</label>
        <OpenDropDownBtn onClick={openDropdown}>
          {difficulty}
          <DDArrow open={dropDownState}>
            <i className="fas fa-angle-down"></i>
          </DDArrow>
        </OpenDropDownBtn>
        <DropDown open={dropDownState} onClick={openDropdown}>
          {renderDropDown()}
        </DropDown>
      </div>
    </section>
  );
};

export default QuizSetupScreen;

const OpenDropDownBtn = styled.button`
  padding: 1rem 2rem;
  display: block;
  margin-bottom: 1rem;
  cursor: pointer;
`;

const DropDown = styled.div`
  opacity: ${props => (props.open === "closed" ? 0 : 1)};
  transform: ${props =>
    props.open === "closed" ? "translateY(-30px)" : "translateY(0px)"};
  transition-duration: 150ms;
  pointer-events: ${props => (props.open === "closed" ? "none" : "all")};
`;

const DropDownItem = styled.div`
  padding: 0.5rem 1rem;
  margin-bottom: 2px;
  border-left: 1px solid black;
  cursor: pointer;

  &:hover {
    background: black;
    color: white;
  }
`;
const DDArrow = styled.span`
  i {
    transform: ${props =>
      props.open === "closed" ? "rotate(0deg)" : "rotate(-180deg)"};
    transition-duration: 150ms;
  }
`;
