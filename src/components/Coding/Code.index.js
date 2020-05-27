import React, { useState } from "react";
import styled from "styled-components";
import { Wrapper } from "../Question";

const Question = ({ question, index }) => {
  const { q, a, code } = question;
  const [reveal, setReveal] = useState(false);
  return (
    <Wrapper>
      <Header>
        <span>Question {index + 1}</span>
        <div>
          <button onClick={() => setReveal(!reveal)}>Show Answer</button>
        </div>
      </Header>
      <div>
        <p>{q}</p>
        <code>{code}</code>
        {reveal && <Answer>{a}</Answer>}
      </div>
    </Wrapper>
  );
};

export default Question;

const Answer = styled.p`
  font-weight: 400;
`;
