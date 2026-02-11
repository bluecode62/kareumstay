import "./App.css";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";

import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import ReservationBar from "./components/reservation/ReservationBar";

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
        <ReservationBar />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
