import React, { useState } from "react";
import styled from "styled-components";

import ReservationBar from "../components/reservation/ReservationBar";
import CardList from "../components/common/card/CardList";
import {
  cafeData,
  festivalData,
  oneDayData,
  pickData,
  travelData,
} from "../data/cardData";

import VillageSlider from "../components/slider/villageSlider";
import { villageData } from "../data/villageData";
import LargeCard from "../components/common/card/LargeCard";
import TopButton from "../components/common/TopButton";
import { Layout } from "../components/layout/Layout";
import { useNavigate } from "react-router-dom";
import HelpModal from "../components/layout/HelpModal";

const Divider = styled.hr`
  width: 1040px;
  border: none;
  border-bottom: 1px solid #3b3b3b;
  margin: 30px auto;
`;

export default function Home() {
  const navigate = useNavigate();

  const [town, setTown] = useState("");
  const [dateRange, setDateRange] = useState({
    from: undefined,
    to: undefined,
  });
  const [guests, setGuests] = useState(1);

  const [showHelp, setShowHelp] = useState(false);
  console.log("현재 dateRange:", dateRange);
  const handleSearch = () => {
    if (!town || !dateRange?.from || !dateRange?.to || !guests) {
      alert("마을, 날짜, 인원 수를 정해주세요.");
      return;
    }
  
    navigate("/search", {
      state: {
        town,
        dateRange,
        guests,
      },
    });
  };
  return (
    <Layout>
      <div>
        <button
          style={{
            position: "absolute",
            top: "110px",
            left: "50%",
            transform: "translateX(-50%)",
            border: "none",
            borderRadius: "10px",
            fontWeight: "500",
            fontSize: "16px",
            padding: "20px",
            background: "#4caf50",
            color: "#fff",
            cursor: "pointer",
          }}
          onClick={() => setShowHelp(true)}
        >
          이용방법 보기
        </button>
        {showHelp && <HelpModal onClose={() => setShowHelp(false)} />}
      </div>
      <ReservationBar
        town={town}
        setTown={setTown}
        dateRange={dateRange}
        setDateRange={setDateRange}
        guests={guests}
        setGuests={setGuests}
        onSearch={handleSearch}
      />
      <CardList title="이달의 추천 여행" variant="defalt" data={travelData} />
      <CardList title="인기 원데이 클래스" variant="defalt" data={oneDayData} />

      <Divider />

      <CardList title="카름스테이 PICK" variant="pick" data={pickData} />
      <CardList title="카페&레스토랑" variant="defalt" data={cafeData} />

      <VillageSlider
        title="제주에서 만나는 13개의 마을 이야기"
        data={villageData}
      />

      <LargeCard title="이달의 축제" data={festivalData} />

      <TopButton />
    </Layout>
  );
}
