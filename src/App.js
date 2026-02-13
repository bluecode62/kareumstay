import "./App.css";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";

import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import ReservationBar from "./components/reservation/ReservationBar";
import CardList from "./components/common/card/CardList";
import { oneDayData, travelData } from "./data/cardData";

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
        <CardList title="이달의 추천 여행" variant="defalt" data={travelData} />
        <CardList title="인기 원데이 클래스" variant="defalt" data={oneDayData} />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
