import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
  }
  body {
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
  }
`;

export default GlobalStyle;
