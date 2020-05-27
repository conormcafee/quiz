import React from "react";
import Choices from "./Choices.index";
import styled from "styled-components";

const MultipleChoice = ({ questions }) => {
  return (
    <Flex>
      {questions.map((question, index) => (
        <Choices key={index} question={question} index={index} />
      ))}
    </Flex>
  );
};

export default MultipleChoice;

const Flex = styled.article`
  display: flex;
  flex-wrap: wrap;
  margin-left: -12px;
  margin-right: -12px;
`;
