import React from "react";
import styled from "styled-components";
import Question from "../Question/question.index";

const Questions = ({ questions }) => {
  return (
    <Flex>
      {questions.map((question, index) => (
        <Question key={index} question={question} index={index} />
      ))}
    </Flex>
  );
};

export default Questions;

const Flex = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`;
