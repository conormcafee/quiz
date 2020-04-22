import { Wrapper, Question } from "./Question.style";
import React from "react";
import Hints from "../Hints/Hints.index";

const QuestionLayout = ({
  id,
  blurActive,
  image,
  position,
  scale,
  rotate,
  toggleQuestionBlur,
  revealCharacter,
  toggleRevealCharacter,
}) => {
  return (
    <Wrapper>
      <Question
        blurActive={blurActive}
        revealCharacter={revealCharacter}
        style={{ backgroundImage: `url(${image})` }}
        position={position}
        scale={scale}
        rotate={rotate}
      />
      <Hints
        id={id}
        blurActive={blurActive}
        toggleQuestionBlur={toggleQuestionBlur}
        revealCharacter={revealCharacter}
        toggleRevealCharacter={toggleRevealCharacter}
      />
    </Wrapper>
  );
};

export default QuestionLayout;
