import React from "react";
import HintsLayout from "./Hints.layout";

const Hints = ({
  id,
  blurActive,
  toggleQuestionBlur,
  revealCharacter,
  toggleRevealCharacter,
}) => {
  return (
    <HintsLayout
      id={id + 1}
      hideBlurToggle={!revealCharacter}
      toggleRemoveBlur={() => toggleQuestionBlur(!blurActive)}
      toggleRevealCharacter={() => toggleRevealCharacter(!revealCharacter)}
    />
  );
};

export default Hints;
