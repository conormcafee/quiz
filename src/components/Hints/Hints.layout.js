import React from "react";
import { Wrapper } from "./Hints.style";

const HintsLayout = ({
  id,
  hideBlurToggle,
  toggleRemoveBlur,
  toggleRevealCharacter,
}) => (
  <Wrapper>
    <h2>Character 0{id}</h2>
    <div>
      {hideBlurToggle && (
        <button onClick={toggleRemoveBlur}>Remove Blur</button>
      )}
      <button onClick={toggleRevealCharacter}>Reveal Character</button>
    </div>
  </Wrapper>
);

export default HintsLayout;
