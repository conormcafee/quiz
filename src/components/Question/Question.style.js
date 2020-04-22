import styled from "styled-components";

const blur = (props) => {
  if (props.revealCharacter) {
    return `blur(0px)`;
  } else {
    if (!props.blurActive) {
      return `blur(10px)`;
    } else {
      return `blur(0px)`;
    }
  }
};

const scale = (props) => {
  if (!props.revealCharacter) {
    return `scale(${props.scale})`;
  } else {
    return `scale(1)`;
  }
};

const translate = (props) => {
  if (!props.revealCharacter) {
    return `translate(${props.position})`;
  } else {
    return `translate(0px, 0px)`;
  }
};

const flip = (props) => {
  if (!props.revealCharacter) {
    return `rotate(180deg)`;
  } else {
    return `rotate(0deg)`;
  }
};

export const Wrapper = styled.main`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  position: relative;
`;

export const Question = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  transform: ${(props) => scale(props)} ${(props) => translate(props)}
    ${(props) => flip(props)};
  filter: ${(props) => blur(props)};
  transition: transform 250ms ease-in-out, filter 50ms 250ms ease-in-out;
`;
