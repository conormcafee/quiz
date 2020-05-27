import styled from "styled-components";

export const Wrapper = styled.div`
  height: ${(props) => (props.isEmoji ? "auto" : "calc(100vh - 100px)")};
  width: 100%;
  font-weight: bold;
  padding-top: 32px;
  box-sizing: border-box;
  font-size: 30px;
  background-color: rgb(2, 43, 58);
  color: white;

  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    padding: 12px;
    width: 800px;

    > p:first-of-type {
      font-weight: 500;
    }

    p {
      margin-bottom: 0;
      max-width: 650px;
    }
  }

  pre {
    background: rgb(17, 21, 28);
    font-weight: 200;
    font-size: 16px;
    border-radius: 25px;
  }
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  padding: 12px 0;

  span {
    color: rgba(255, 255, 255, 0.9);
  }

  button {
    appearance: none;
    font-family: "Vollkorn", -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji",
      "Segoe UI Emoji", "Segoe UI Symbol";
    background: rgb(68, 255, 210);
    border-radius: 25px;
    color: rgb(17, 21, 28);
    border: 1px solid transparent;
    display: inline-block;
    font-weight: 700;
    padding: 12px 24px;
    margin-left: 15px;

    &:focus {
      outline: none;
    }

    &:hover {
      cursor: pointer;
    }
  }
`;

export const Answer = styled.p`
  font-weight: 400;
`;
