import React from "react";
import intro from "../../assets/intro.webp";
import { Banner } from "./Intro.style";

const Intro = () => (
  <Banner style={{ backgroundImage: `url(${intro})` }}></Banner>
);

export default Intro;
