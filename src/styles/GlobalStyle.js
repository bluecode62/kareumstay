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
     .App {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
  }

  .content {
    flex: 1;
  }
`;

export default GlobalStyle;
