import React, { useState } from "react";
import styled from "styled-components";

const Choices = ({ question, index }) => {
  const { q, a, choices, hint } = question;
  const [isActive, setIsActive] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [revealHint, setRevealHint] = useState(false);
  return (
    <Q isActive={isActive}>
      <Header>
        <span>Question {index + 1}</span>
        <div>
          {!isActive && (
            <button onClick={() => setIsActive(!isActive)}>Read Answer</button>
          )}
          {hint && (
            <button onClick={() => setRevealHint(!revealHint)}>
              Show Hint
            </button>
          )}

          {isActive && (
            <button onClick={() => setReveal(!reveal)}>Show Answer</button>
          )}
        </div>
      </Header>
      <div>
        <p>{q}</p>
        {choices.map((choice, index) => (
          <span key={index}>{choice}, </span>
        ))}
        {revealHint && <i>{hint}</i>}
        {reveal && <Answer>{a}</Answer>}
      </div>
    </Q>
  );
};

export default Choices;

const Q = styled.div`
  width: calc(50% - 24px);
  margin: 12px;
  border: 1px solid #e6e6e6;
  background: #f6f6f6;
  font-weight: bold;

  > div {
    padding: 12px;

    p {
      font-weight: 500;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
    }

    span {
      font-weight: 400;
      font-style: italic;
      opacity: ${(props) => (props.isActive ? 1 : 0)};
      background: ${(props) => (props.isCorrect ? `yellow` : `#f6f6f6`)};
    }
  }
`;

const Answer = styled.p`
  font-weight: 400;
`;

const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #e6e6e6;

  padding: 12px;

  button {
    appearance: none;
    background: #000000;
    color: white;
    border: 1px solid transparent;
    display: inline-block;
    font-weight: 500;
    padding: 12px;
    margin-left: 5px;
  }
`;
