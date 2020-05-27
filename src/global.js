import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    line-height: 1.45;
    font-family: 'Vollkorn', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 16px;
    overflow-x: hidden;
  }

  * {
    box-sizing: border-box;
  }

  h1 {
    margin-top: 0;
    margin-bottom: 16px;
  }

  h2 {
     margin-top: 0;
  }
`;
