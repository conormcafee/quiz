import React, { useState } from "react";
import styled from "styled-components";

const blur = (props) => {
  if (props.reveal) {
    return `blur(0px)`;
  } else {
    if (!props.toggleBlur) {
      return `blur(3px)`;
    } else {
      return `blur(0px)`;
    }
  }
};

const scale = (props) => {
  if (!props.reveal) {
    return `scale(2.5)`;
  } else {
    return `scale(1)`;
  }
};

const translate = (props) => {
  if (!props.reveal) {
    return `translate(0px, 0px)`;
  } else {
    return `translate(0px, 0px)`;
  }
};

const flip = (props) => {
  if (!props.reveal) {
    return `rotate(180deg)`;
  } else {
    return `rotate(0deg)`;
  }
};

const Image = ({ question }) => {
  const [reveal, setReveal] = useState(false);

  const { q, a, number } = question;
  return (
    <Figure reveal={reveal}>
      <img src={q} alt={a} />
      <figcaption>
        <button onClick={() => setReveal(!reveal)}>Reveal</button>
        <span>{number}</span>
        {reveal && <span>{a}</span>}
      </figcaption>
    </Figure>
  );
};

export default Image;

const Figure = styled.figure`
  width: 33.33%;
  margin: 0;
  position: relative;
  overflow: hidden;

  img {
    width: 100%;
    height: 50vh;
    object-fit: cover;
    transform: ${(props) => scale(props)} ${(props) => translate(props)}
      ${(props) => flip(props)};
    filter: ${(props) => blur(props)};
    transition: transform 250ms ease-in-out, filter 50ms 250ms ease-in-out;
  }

  figcaption {
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 16px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      display: inline-block;
      padding: 5px;
      background: rgba(0, 0, 0, 0.4);
      color: white;
    }
  }
`;
