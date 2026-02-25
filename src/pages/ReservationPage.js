import React from "react";
import { useEffect, useState } from "react";
import { FaRegCalendarTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  min-width: 1000px;
  margin: 0 auto;
  padding: 40px;
`;

const Title = styled.p`
  text-align: left;
  margin: 20px 0;
  font-size: 30px;
  font-weight: 600;
`;

const Section = styled.div`
  margin-bottom: 40px;
  padding: 20px 0;
  border-top: 1px solid #dfdfdf;
  text-align: left;

  h4 {
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 16px;
  }
`;
const Item = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-bottom: 16px;
  font-weight: 600;
  font-size: 18px;
  color: #666;

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 10px;
  }
`;

const Total = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #eee;
  text-align: right;
  font-size: 20px;
  font-weight: 700;

  span {
    font-size: 14px;
    color: #888;
    font-weight: 500;
  }
`;

const ButtonRow = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  margin-top: 30px;
`;

const DeleteBtn = styled.button`
  padding: 10px 40px;
  border-radius: 10px;
  border: 1px solid #ff7a00;
  background: transparent;
  color: #ff7a00;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #f2f2f2;
  }
`;

const PayBtn = styled.button`
  padding: 10px 40px;
  border-radius: 10px;
  border: none;
  background: #ff7a00;
  color: #fff;
  font-weight: 600;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #ff8f2a;
    transform: translateY(-2px);
  }
`;

const Empty = styled.div`
  min-height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
  font-size: 18px;
  color: #777;

  svg {
    color: #ddd;
  }
`;

const Button = styled.button`
  margin-top: 30px;
  padding: 10px 30px;
  background: #ff7a00;
  color: #fff;
  border: none;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background: #ff8f2a;
    transform: translateY(-2px);
  }
`;

const Tag = styled.p`
  font-weight: 600;
  color: #3d3d3d;
  font-size: 18px;
  padding: 10px 0;
`;

export default function ReservationPage() {
  const [reservation, setReservation] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = localStorage.getItem("reservation");
    if (saved) {
      setReservation(JSON.parse(saved));
    }
  }, []);

  const handlePayment = () => {
    navigate("/payment-complete");
  };

  const handleDelete = () => {
    localStorage.removeItem("reservation");
    setReservation(null);
  };

  if (!reservation) {
    return (
      <Empty>
        <FaRegCalendarTimes size={60} />
        <p>예약 내역이 없습니다.</p>
        <Button onClick={() => navigate("/")}>홈으로 가기</Button>
      </Empty>
    );
  }
  function formatDateRange(dateRange) {
    if (!dateRange || !dateRange[0] || !dateRange[1]) return "";

    const start = new Date(dateRange[0]);
    const end = new Date(dateRange[1]);

    const startStr = `${start.getFullYear()}.${String(start.getMonth() + 1).padStart(2, "0")}.${String(start.getDate()).padStart(2, "0")}`;
    const endStr = `${end.getFullYear()}.${String(end.getMonth() + 1).padStart(2, "0")}.${String(end.getDate()).padStart(2, "0")}`;

    const diffDays = Math.round((end - start) / (1000 * 60 * 60 * 24));

   return (
    <span>
      <span>{startStr}</span> - 
      <span>{endStr}</span> 
      <span style={{ color: "#ff7a00" }}> ({diffDays}박)</span>
    </span>
  );
  }

  return (
    <Wrapper>
      <Title>예약조회</Title>

      <Section>
        <h4>예약 정보:</h4>
        <Tag>
          📍 <span style={{ color: "#ff7a00" }}>{reservation.town}</span>
        </Tag>
        <Tag>
          🏨 숙소: <span style={{ color: "#ff7a00" }}>{reservation.accommodationName}</span>
        </Tag>
        <Tag>📅 {formatDateRange(reservation.dateRange)}</Tag>
        <Tag>
          👤 성인 <span style={{ color: "#ff7a00" }}>{reservation.guests}명</span>
        </Tag>
      </Section>

      <Section>
        <h4>선택 객실:</h4>
        <Item>
          <img src={reservation.room.image} alt="room Img" />
          <div>{reservation.room.name}</div>
        </Item>
      </Section>

      <Section>
        <h4>선택 원데이 클래스:</h4>
        {reservation.experiences.length === 0 ? (
          <div>선택 없음</div>
        ) : (
          reservation.experiences.map((exp) => (
            <Item key={exp.id}>
              <img src={exp.image} alt="class Img" />
              <div>{exp.title}</div>
            </Item>
          ))
        )}
      </Section>

      <Total>
        <span>총액:</span> {reservation.total.toLocaleString()}원
      </Total>

      <ButtonRow>
        <DeleteBtn onClick={handleDelete}>취소하기</DeleteBtn>
        <PayBtn onClick={handlePayment}>결제하기</PayBtn>
      </ButtonRow>
    </Wrapper>
  );
}
