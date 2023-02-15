import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html,
  body,
  #__next {
    background: rgb(18, 24, 41);
  }
  body {
    font-family: "Poppins", Arial, Helvetica, sans-serif;
    color: #ffffff;
  }
  a {
    text-decoration: none;
  }
`;

export default GlobalStyle;
