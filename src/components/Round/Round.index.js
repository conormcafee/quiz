import React from "react";
import styled from "styled-components";

const Round = ({ round, children }) => {
  const { title } = round;
  return (
    <Main isPicture={round.type === "PICTURE"}>
      {round.type !== "PICTURE" && (
        <Header>
          <h1>{title} Round</h1>
        </Header>
      )}
      <section>{children}</section>
    </Main>
  );
};

export default Round;

const Main = styled.main`
  height: ${(props) => (props.isPicture ? `100vh` : `auto`)};
`;

const Header = styled.header`
  position: sticky;
  top: 0;
  left: 0;
  right: 0;
  background: rgb(17, 21, 28);
  color: white;
  height: 100px;
  padding: 0px 32px;
  display: flex;
  align-items: center;
  border-bottom: 2px solid rgb(68, 255, 210);
  box-shadow: 12px 2px 2px rgba(0, 0, 0, 0.6);
  box-sizing: border-box;

  h1 {
    margin-bottom: 0;
  }
`;
