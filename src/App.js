import React from "react";
import "./App.css";

import Question from "./components/Question/Question.index";
import Ralph from "./characters/sample-image.jpg";

const questions = [
  {
    image: Ralph,
    scale: 3,
    rotate: true,
    position: `10px, 15px`,
  },
  {
    image: Ralph,
    scale: 3,
    rotate: true,
    position: `10px, -175px`,
  },
];

function App() {
  return (
    <div className="App">
      {questions.map((question, index) => (
        <Question key={index} id={index} question={question} />
      ))}
    </div>
  );
}

export default App;
