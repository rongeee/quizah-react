import React, { useState } from "react";
import { useHistory } from "react-router-dom";
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

const QuizSetupScreen = ({ setCurrentGame }) => {
  const [username, setUsername] = useState("");
  const [difficulty, setDifficulty] = useState("EASY");
  const [dropDownState, setDropDownState] = useState("closed");
  const history = useHistory();
  function openDropdown(e) {
    e.preventDefault();
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
  function handleSubmit(e) {
    e.preventDefault();
    console.log(username);
    if (username.trim() !== "") {
      setCurrentGame({
        difficulty: difficulty,
        username: username,
        points: 0,
        questions: []
      });
      history.push("/quiz");
    } else {
      alert("longer name pls");
    }
  }
  return (
    <div>
      <h1>SETUP YOUR QUIZ</h1>
      <Container>
        <UsernameContainer>
          <div className="sub-title">WHAT'S YOUR NAME?</div>
          <input
            value={username}
            onChange={e => setUsername(e.target.value)}
            type="text"
          />
        </UsernameContainer>
        <div>
          <div className="sub-title">CHOOSE YOUR DIFFICULTY!</div>
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
        <SubmitBtn onClick={handleSubmit} type="submit">
          GO!
        </SubmitBtn>
      </Container>
    </div>
  );
};

export default QuizSetupScreen;

const Container = styled.form`
  & > * {
    width: 100%;
  }

  input {
    border: none;
    color: white;
    background-color: #86919a;
    padding: 15px;
    font-size: 18px;
    font-family: inherit;
    text-transform: uppercase;
  }
  .sub-title {
    margin: 0.75rem 0;
    font-weight: bold;
  }
`;
const UsernameContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const SubmitBtn = styled.button`
  background-color: #5aafee;
  padding: 1em;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  color: white;
  border: none;
  margin-top: 1rem;
`;
const OpenDropDownBtn = styled.button`
  padding: 1rem;
  display: block;
  margin-bottom: 0.25rem;
  cursor: pointer;
  width: 100%;
  display: flex;
  text-align: left;
  justify-content: space-between;
  background-color: #86919a;
  border: none;
  color: white;
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
  cursor: pointer;
  background-color: #86919a;
  border: none;
  color: white;

  &:hover {
    background: #5aafee;
  }
`;
const DDArrow = styled.span`
  i {
    transform: ${props =>
      props.open === "closed" ? "rotate(0deg)" : "rotate(-180deg)"};
    transition-duration: 150ms;
  }
`;
