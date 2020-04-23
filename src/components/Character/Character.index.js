import React, { useState } from "react";
import TVImage from "../../assets/tv.svg";
import { Button } from "../../components";
import {
  Wrapper,
  Buttons,
  Content,
  Char,
  TVBG,
  TVMask,
} from "./Character.style";

function isOdd(num) {
  const result = num & 1 ? true : false;
  return result;
}

const TV = ({ id, character }) => {
  const [revealAnswer, setRevealAnswer] = useState(false);
  const [toggleBlur, setToggleBlur] = useState(false);

  const { position, scale, rotate, image } = character;

  return (
    <Wrapper>
      <TVBG
        isOdd={isOdd(id)}
        style={{
          backgroundImage: `url(${TVImage})`,
        }}
      >
        <TVMask>
          <Char
            style={{
              backgroundImage: `url(${image})`,
            }}
            revealAnswer={revealAnswer}
            toggleBlur={toggleBlur}
            scale={scale}
            position={position}
            rotate={rotate}
          />
        </TVMask>
      </TVBG>
      <Content isOdd={isOdd(id)}>
        <h1>Character 0{id}</h1>
        <Buttons>
          <Button clickHandler={() => setToggleBlur(!toggleBlur)}>
            Toggle Blur
          </Button>
          <Button clickHandler={() => setRevealAnswer(!revealAnswer)}>
            Reveal Answer
          </Button>
        </Buttons>
      </Content>
    </Wrapper>
  );
};

export default TV;
