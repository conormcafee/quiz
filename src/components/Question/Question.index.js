import React, { useState } from "react";
import QuestionLayout from "./Question.layout";

const Question = ({ id, question }) => {
  const [blurActive, setBlurActive] = useState(false);
  const [revealCharacter, setRevealCharacter] = useState(false);

  const { image, position, scale, rotate } = question;
  return (
    <QuestionLayout
      id={id}
      blurActive={blurActive}
      revealCharacter={revealCharacter}
      image={image}
      position={position}
      rotate={rotate}
      scale={scale}
      toggleQuestionBlur={(bool) => setBlurActive(bool)}
      toggleRevealCharacter={(bool) => setRevealCharacter(bool)}
    />
  );
};

export default Question;
