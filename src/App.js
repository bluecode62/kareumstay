import "./App.css";
import styled from "styled-components";

import GlobalStyle from "./styles/GlobalStyle";

import Gnb from "./components/layout/Gnb";
import Footer from "./components/layout/Footer";
import ReservationBar from "./components/reservation/ReservationBar";
import CardList from "./components/common/card/CardList";
import {
  cafeData,
  festivalData,
  oneDayData,
  pickData,
  travelData,
} from "./data/cardData";

import VillageSlider from "./components/slider/villageSlider";
import { villageData } from "./data/villageData";
import LargeCard from "./components/common/card/LargeCard";
import ScrollToTop, { TopBtn } from "./components/common/TopButton";
import TopButton from "./components/common/TopButton";

const Layout = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`;
const Divider = styled.hr`
  width: 1040px;
  border: none;
  border-bottom: 1px solid #3b3b3b;
  margin: 30px auto;
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Layout>
        <Gnb />
        <ReservationBar />
        <CardList title="이달의 추천 여행" variant="defalt" data={travelData} />
        <CardList
          title="인기 원데이 클래스"
          variant="defalt"
          data={oneDayData}
        />

        <Divider />

        <CardList title="카름스테이 PICK" variant="pick" data={pickData} />
        <CardList title="카페&레스토랑" variant="defalt" data={cafeData} />

        <VillageSlider
          title="제주에서 만나는 13개의 마을 이야기"
          data={villageData}
        />

        <LargeCard title="이달의 축제" data={festivalData} />

        <TopButton />

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
