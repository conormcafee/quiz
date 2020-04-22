import styled from "styled-components";

const blur = (props) => {
  if (props.revealAnswer) {
    return `blur(0px)`;
  } else {
    if (!props.toggleBlur) {
      return `blur(5px)`;
    } else {
      return `blur(0px)`;
    }
  }
};

const scale = (props) => {
  if (!props.revealAnswer) {
    return `scale(${props.scale})`;
  } else {
    return `scale(1)`;
  }
};

const translate = (props) => {
  if (!props.revealAnswer) {
    if (props.position) {
      return `translate(${props.position})`;
    } else {
      return `translate(0px, 0px)`;
    }
  } else {
    return `translate(0px, 0px)`;
  }
};

const flip = (props) => {
  if (!props.revealAnswer) {
    return `rotate(180deg)`;
  } else {
    return `rotate(0deg)`;
  }
};

export const Wrapper = styled.main`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 24px;
  padding-right: 24px;
  background-color: ${(props) => (props.isOdd ? `#70d1fe` : `#000000`)};
`;

export const TVBG = styled.div`
  position: relative;
  width: 100%;
  height: 90vh;
  background-size: contain;
  background-repeat: no-repeat;
`;

export const TVMask = styled.div`
  background: "white";
  height: 345px;
  width: 468px;
  position: absolute;
  top: 0;
  left: 0;
  transform: translate(49px, 257px);
  border-radius: 120px;
  overflow: hidden;
`;

export const Char = styled.div`
  background-size: cover;
  background-repeat: no-repeat;
  width: 100%;
  height: 100%;
  transform: ${(props) => scale(props)} ${(props) => translate(props)}
    ${(props) => flip(props)};
  filter: ${(props) => blur(props)};
  transition: transform 250ms ease-in-out, filter 50ms 250ms ease-in-out;
`;

export const Content = styled.aside`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Gochi Hand", cursive;
  padding: 24px;
  flex: 1;
  min-width: 50%;

  h1 {
    font-size: 48px;
    margin-bottom: 16px;
    color: white;
    text-shadow: 2px 2px 2px black;
  }

  button:first-of-type {
    margin-right: 16px;
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
`;
