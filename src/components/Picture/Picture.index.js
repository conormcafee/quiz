import React from "react";
import Image from "./Image.part";
import styled from "styled-components";

const Picture = ({ questions }) => {
  return (
    <Article>
      {questions.map((question, index) => (
        <Image key={index} question={question} />
      ))}
    </Article>
  );
};

export default Picture;

const Article = styled.article`
  display: flex;
  flex-wrap: wrap;
  background: rgb(17, 21, 28);
`;
