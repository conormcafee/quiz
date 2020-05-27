import React from "react";
import Round from "./components/Round/Round.index";
import Questions from "./components/Questions/Questions.index";
import Picture from "./components/Picture/Picture.index";
import Coding from "./components/Coding/Coding.index";
import MultipleChoice from "./components/MultipleChoice/MultipleChoice.index";
import { data } from "./data";

import styled from "styled-components";

function App() {
  if (data && Array.isArray(data)) {
    return (
      <>
        <Main>
          <ul>
            {data.map((round) => (
              <li>
                <span>{round.title}</span>
                <span>5 Questions</span>
              </li>
            ))}
          </ul>
        </Main>

        {data.map((round, index) => (
          <Round key={index} round={round}>
            {round.type === "QUESTIONS" && (
              <Questions questions={round.questions} />
            )}

            {round.type === "CODING" && <Coding questions={round.questions} />}

            {round.type === "PICTURE" && (
              <Picture questions={round.questions} />
            )}

            {round.type === "MULTI_CHOICE" && (
              <MultipleChoice questions={round.questions} />
            )}
          </Round>
        ))}
      </>
    );
  }

  return (
    <div>
      <p>Error</p>
    </div>
  );
}

export default App;

const Main = styled.main`
  height: 100vh;
  background-color: rgb(2, 43, 58);

  display: flex;
  align-items: center;
  justify-content: center;

  ul {
    margin: 0;
    list-style: none;
    padding-left: 0;

    li {
      margin-bottom: 24px;
    }

    li span:first-of-type {
      font-size: 24px;
      margin-bottom: 5px;
      font-weight: 700;
      color: white;
    }

    li span:nth-child(2) {
      color: rgb(68, 255, 210);
    }
  }

  span {
    display: block;
  }
`;
