import "./App.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

import Gnb from "./components/Gnb";
import Footer from "./components/Footer";

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: "Noto Sans KR", sans-serif;
  }
`;
const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Gnb />
        <div>주요 내용들</div>
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
