import styled from "styled-components";

export const BTN = styled.button`
  appearance: none;
  display: inline-block;
  font-family: "Gochi Hand", cursive;
  font-size: 24px;
  background-color: rgb(254, 203, 0);
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  box-shadow: 1px 1px 1px rgb(0, 0, 0);
  padding-left: 24px;
  padding-right: 24px;

  &:focus {
    outline: none;
  }

  &:hover {
    cursor: pointer;
  }
`;
