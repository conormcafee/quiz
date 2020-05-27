import React, { useState } from "react";
import QuestionLayout from "./question.layout";

const Question = ({ question, index }) => {
  const { q, a, code, number } = question;
  const [reveal, setReveal] = useState(false);

  return (
    <QuestionLayout
      a={a}
      code={code}
      index={index + 1}
      q={q}
      reveal={reveal}
      number={number}
      setReveal={() => setReveal(!reveal)}
    />
  );
};

export default Question;
