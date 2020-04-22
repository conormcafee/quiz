import React from "react";
import { BTN } from "./Button.style";

const Button = ({ clickHandler, children }) => (
  <BTN onClick={clickHandler}>{children}</BTN>
);

export default Button;
