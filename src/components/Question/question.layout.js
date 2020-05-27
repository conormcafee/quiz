import { Header, Wrapper } from "./question.style";
import React from "react";

const QuestionLayout = ({ a, code, q, number, reveal, setReveal }) => (
  <Wrapper
    isEmoji={
      number === 16 ||
      number === 17 ||
      number === 18 ||
      number === 19 ||
      number === 20
    }
  >
    <div>
      <Header>
        <span>Question {number < 10 ? `0${number}` : number}</span>
        <button onClick={setReveal}>Show Answer</button>
      </Header>
      <div>
        <div>
          {!reveal ? <p>{q}</p> : <p>{a}</p>}
          {code && (
            <pre>
              <code>{code}</code>
            </pre>
          )}
        </div>
      </div>
    </div>
  </Wrapper>
);

export default QuestionLayout;
